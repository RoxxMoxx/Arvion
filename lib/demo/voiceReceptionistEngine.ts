import type { CapturedLead, ChatMessage, ProposedAvailability, ReceptionistState } from '@/types';
import { demoFaqs, demoRooms, formatDateLabel, isRoomAvailable } from '@/data/voiceReceptionistDemo';

// This module simulates "AI understanding" with deterministic keyword and
// pattern matching. It intentionally does not call any external AI provider —
// see README for how a real provider would be wired in behind this same
// function signature.

let idCounter = 0;
function nextId(prefix: string): string {
  idCounter += 1;
  return `${prefix}-${idCounter}-${Date.now()}`;
}

export function createMessage(role: ChatMessage['role'], content: string, kind?: ChatMessage['kind']): ChatMessage {
  return { id: nextId(role), role, content, timestamp: Date.now(), kind };
}

export function initialReceptionistState(): ReceptionistState {
  return {
    phase: 'idle',
    messages: [
      createMessage(
        'ai',
        "Hi, thanks for calling Simrion Grand Hotel — this is your AI receptionist. How can I help you today?"
      ),
    ],
    proposedAvailability: null,
    selectedRoomId: null,
    capturedLead: null,
    escalated: false,
  };
}

const ESCALATION_KEYWORDS = ['human', 'person', 'agent', 'manager', 'speak to someone', 'real person'];
const CONFIRM_KEYWORDS = ['yes', 'yeah', 'sure', 'sounds good', 'book it', 'confirm', 'that works', "let's do it"];
const BOOKING_KEYWORDS = ['room', 'book', 'reservation', 'availability', 'available', 'stay', 'night'];

const WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function findFaqAnswer(text: string): string | null {
  const lower = text.toLowerCase();
  for (const faq of demoFaqs) {
    if (faq.keywords.some((kw) => lower.includes(kw))) {
      return faq.answer;
    }
  }
  return null;
}

function parseDayOffset(text: string): number | null {
  const lower = text.toLowerCase();
  if (lower.includes('tonight') || lower.includes('today')) return 0;
  if (lower.includes('tomorrow')) return 1;
  if (lower.includes('this weekend') || lower.includes('the weekend')) {
    const today = new Date().getDay(); // 0 = Sunday
    const daysUntilFriday = (5 - today + 7) % 7 || 7;
    return daysUntilFriday;
  }
  if (lower.includes('next week')) return 7;
  for (let i = 0; i < WEEKDAYS.length; i++) {
    const weekday = WEEKDAYS[i];
    if (weekday && lower.includes(weekday)) {
      const today = new Date().getDay();
      const offset = (i - today + 7) % 7 || 7;
      return offset;
    }
  }
  return null;
}

function buildAvailability(dayOffset: number): ProposedAvailability {
  return {
    dateLabel: formatDateLabel(dayOffset),
    dayOffset,
    rooms: demoRooms.map((room) => ({ room, available: isRoomAvailable(room.id, dayOffset) })),
  };
}

function parseContact(text: string): { name?: string; phone?: string } {
  const phoneMatch = text.match(/(\+?\d[\d\s().-]{6,}\d)/);
  const phone = phoneMatch ? phoneMatch[0].trim() : undefined;
  // Strip the phone substring, then take remaining alphabetic words as the name.
  const withoutPhone = phone ? text.replace(phone, '') : text;
  const nameWords = withoutPhone
    .replace(/[^a-zA-Z\s'-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && !/^(my|name|is|and|number|phone|the|im|i'm)$/i.test(w));
  const name = nameWords.length > 0 ? nameWords.slice(0, 3).join(' ') : undefined;
  return { name, phone };
}

export interface TurnResult {
  state: ReceptionistState;
  aiMessages: ChatMessage[];
}

export function processUserMessage(prev: ReceptionistState, rawText: string): TurnResult {
  const text = rawText.trim();
  const userMessage = createMessage('customer', text);
  const aiMessages: ChatMessage[] = [];
  let state: ReceptionistState = { ...prev, messages: [...prev.messages, userMessage] };

  if (!text) {
    return { state: prev, aiMessages: [] };
  }

  const lower = text.toLowerCase();

  // Escalation can happen from any phase.
  if (ESCALATION_KEYWORDS.some((kw) => lower.includes(kw))) {
    const msg = createMessage(
      'ai',
      "Of course — I'll flag this for a team member to call you back shortly. Simulated demo: in production this would ring the front desk directly.",
      'escalation'
    );
    aiMessages.push(msg);
    const lead: CapturedLead = {
      id: nextId('lead'),
      status: 'escalated',
      createdAt: Date.now(),
      notes: `Guest requested a human. Last message: "${text}"`,
    };
    state = { ...state, escalated: true, capturedLead: lead, phase: 'completed', messages: [...state.messages, msg] };
    return { state, aiMessages };
  }

  // Answer FAQs inline regardless of phase, without derailing an active booking flow.
  const faqAnswer = findFaqAnswer(lower);

  if (state.phase === 'awaiting_contact') {
    const { name, phone } = parseContact(text);
    const existingLead = state.capturedLead;
    const mergedName = name ?? existingLead?.name;
    const mergedPhone = phone ?? existingLead?.phone;

    if (!mergedName || !mergedPhone) {
      const msg = createMessage(
        'ai',
        `Almost there — could you share ${!mergedName ? 'your name' : ''}${!mergedName && !mergedPhone ? ' and ' : ''}${!mergedPhone ? 'a phone number' : ''} so I can confirm the booking?`
      );
      aiMessages.push(msg);
      state = {
        ...state,
        capturedLead: {
          id: existingLead?.id ?? nextId('lead'),
          status: 'lead',
          name: mergedName,
          phone: mergedPhone,
          roomName: existingLead?.roomName,
          dateLabel: existingLead?.dateLabel,
          ratePerNight: existingLead?.ratePerNight,
          createdAt: existingLead?.createdAt ?? Date.now(),
          notes: 'Awaiting contact details to confirm booking.',
        },
        messages: [...state.messages, msg],
      };
      return { state, aiMessages };
    }

    const room = state.proposedAvailability?.rooms.find((r) => r.room.id === state.selectedRoomId)?.room;
    const dateLabel = state.proposedAvailability?.dateLabel;
    const confirmMsg = createMessage(
      'ai',
      `You're all set, ${mergedName.split(' ')[0]}. I've held the ${room?.name ?? 'room'} for ${dateLabel} at $${room?.ratePerNight}/night, and a confirmation will be sent to ${mergedPhone}. Demo data — no real reservation has been created.`,
      'booking-confirmed'
    );
    aiMessages.push(confirmMsg);
    const lead: CapturedLead = {
      id: existingLead?.id ?? nextId('lead'),
      status: 'booked',
      name: mergedName,
      phone: mergedPhone,
      roomName: room?.name,
      dateLabel,
      ratePerNight: room?.ratePerNight,
      createdAt: existingLead?.createdAt ?? Date.now(),
      notes: 'Booking confirmed via AI Voice Receptionist demo.',
    };
    state = { ...state, phase: 'completed', capturedLead: lead, messages: [...state.messages, confirmMsg] };
    return { state, aiMessages };
  }

  if (state.phase === 'awaiting_confirmation' && state.proposedAvailability) {
    const availableRooms = state.proposedAvailability.rooms.filter((r) => r.available);
    const matchedByName = availableRooms.find((r) =>
      lower.includes(r.room.name.toLowerCase().split(' ')[0] ?? '')
    );
    const wantsConfirm = CONFIRM_KEYWORDS.some((kw) => lower.includes(kw));
    const soleAvailableRoom = availableRooms.length === 1 ? availableRooms[0] : undefined;

    if (matchedByName || (wantsConfirm && soleAvailableRoom)) {
      const room = (matchedByName ?? soleAvailableRoom)!.room;
      const msg = createMessage(
        'ai',
        `Great choice — the ${room.name} it is. Can I get your name and a phone number to confirm the booking?`
      );
      aiMessages.push(msg);
      state = {
        ...state,
        phase: 'awaiting_contact',
        selectedRoomId: room.id,
        messages: [...state.messages, msg],
      };
      return { state, aiMessages };
    }

    if (wantsConfirm && availableRooms.length > 1) {
      const msg = createMessage(
        'ai',
        `Which would you like — ${availableRooms.map((r) => r.room.name).join(' or ')}?`
      );
      aiMessages.push(msg);
      state = { ...state, messages: [...state.messages, msg] };
      return { state, aiMessages };
    }
  }

  // Fresh or unmatched-phase booking intent: look for date + booking keywords.
  const mentionsBooking = BOOKING_KEYWORDS.some((kw) => lower.includes(kw));
  const dayOffset = parseDayOffset(lower);

  if (mentionsBooking || dayOffset !== null) {
    if (dayOffset === null) {
      const msg = createMessage('ai', 'Happy to check — what date were you thinking of staying?');
      aiMessages.push(msg);
      state = { ...state, phase: 'awaiting_dates', messages: [...state.messages, msg] };
      return { state, aiMessages };
    }

    const availability = buildAvailability(dayOffset);
    const availableRooms = availability.rooms.filter((r) => r.available);

    if (availableRooms.length === 0) {
      const msg = createMessage(
        'ai',
        `Let me check... unfortunately we're fully booked for ${availability.dateLabel}. Would you like me to connect you with the team to check nearby dates?`
      );
      aiMessages.push(msg);
      state = {
        ...state,
        phase: 'idle',
        proposedAvailability: availability,
        messages: [...state.messages, msg],
      };
      return { state, aiMessages };
    }

    const summary = availableRooms
      .map((r) => `${r.room.name} ($${r.room.ratePerNight}/night)`)
      .join(', ');
    const msg = createMessage(
      'ai',
      `Let me check availability for ${availability.dateLabel}... Good news, we have: ${summary}. Would you like to book one of these?`
    );
    aiMessages.push(msg);
    state = {
      ...state,
      phase: 'awaiting_confirmation',
      proposedAvailability: availability,
      messages: [...state.messages, msg],
    };
    return { state, aiMessages };
  }

  if (faqAnswer) {
    const msg = createMessage('ai', faqAnswer);
    aiMessages.push(msg);
    state = { ...state, messages: [...state.messages, msg] };
    return { state, aiMessages };
  }

  // Fallback: nothing matched.
  const fallback = createMessage(
    'ai',
    "I want to make sure I get this right — could you rephrase that, or ask about room availability, pricing, or hotel amenities?",
    'error'
  );
  aiMessages.push(fallback);
  state = { ...state, messages: [...state.messages, fallback] };
  return { state, aiMessages };
}
