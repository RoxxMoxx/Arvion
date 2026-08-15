export interface Solution {
  slug: string;
  letter: string; // A, B, C... matches spec ordering
  name: string;
  summary: string;
  capabilities: string[];
  note?: string; // e.g. "Presented as a product capability/demo"
}

export interface Industry {
  slug: string;
  name: string;
  problems: string[];
  arvionSolutions: string[];
  outcomes: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

// --- AI Voice Receptionist demo types ---

export type ChatRole = 'customer' | 'ai' | 'system';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: number;
  kind?: 'text' | 'error' | 'escalation' | 'booking-confirmed';
}

export interface DemoRoom {
  id: string;
  name: string;
  bedType: string;
  ratePerNight: number;
  description: string;
}

export interface ProposedAvailability {
  dateLabel: string;
  dayOffset: number;
  rooms: { room: DemoRoom; available: boolean }[];
}

export type LeadStatus = 'lead' | 'booked' | 'escalated';

export interface CapturedLead {
  id: string;
  status: LeadStatus;
  name?: string;
  phone?: string;
  roomName?: string;
  dateLabel?: string;
  ratePerNight?: number;
  createdAt: number;
  notes: string;
}

export type ConversationPhase =
  | 'idle'
  | 'awaiting_dates'
  | 'awaiting_confirmation'
  | 'awaiting_contact'
  | 'completed';

export interface ReceptionistState {
  phase: ConversationPhase;
  messages: ChatMessage[];
  proposedAvailability: ProposedAvailability | null;
  selectedRoomId: string | null;
  capturedLead: CapturedLead | null;
  escalated: boolean;
}

// --- AI Call Audit demo types ---

export interface SampleCall {
  id: string;
  title: string;
  business: string;
  agentName: string;
  durationLabel: string;
  durationSeconds: number;
  scenarioSummary: string;
}

export interface TranscriptLine {
  id: string;
  speaker: 'agent' | 'customer';
  timeLabel: string;
  timeSeconds: number;
  text: string;
}

export type TimelineMomentType = 'positive' | 'missed-opportunity' | 'objection' | 'resolution' | 'risk';

export interface TimelineMoment {
  id: string;
  timeLabel: string;
  timeSeconds: number;
  type: TimelineMomentType;
  label: string;
  detail: string;
}

export interface CoachingNote {
  wentWell: string[];
  wentWrong: string[];
  betterResponse: { situation: string; saidInstead: string; couldHaveSaid: string }[];
  recommendations: string[];
}

export interface CallScores {
  overall: number; // 0-100
  sentiment: 'positive' | 'neutral' | 'negative' | 'mixed';
  interactionQuality: number; // 0-100
  responseQuality: number; // 0-100
  resolutionQuality: number; // 0-100
}

export interface CallAnalysis {
  callId: string;
  scores: CallScores;
  missedOpportunities: string[];
  objections: string[];
  potentialRevenueImpact: { label: string; amount: number; note: string };
  recommendedImprovements: string[];
  timeline: TimelineMoment[];
  coaching: CoachingNote;
}

export type CallAuditPhase = 'empty' | 'loading' | 'processing' | 'completed' | 'error';

export interface CallAuditHistoryEntry {
  callId: string;
  callTitle: string;
  score: number;
  sentiment: CallScores['sentiment'];
  analyzedAt: number;
}
