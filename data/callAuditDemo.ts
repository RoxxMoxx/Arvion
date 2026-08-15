import type { CallAnalysis, SampleCall, TranscriptLine } from '@/types';

// All calls, transcripts, and figures on this page are illustrative "Arvion
// Grand Hotel" demo data, hand-authored for this demo. None of it represents
// a real customer, a real phone call, or a real AI analysis run.

export const sampleCalls: SampleCall[] = [
  {
    id: 'call-strong-close',
    title: 'Weekend booking enquiry',
    business: 'Arvion Grand Hotel — Front Desk',
    agentName: 'Priya (Front Desk)',
    durationLabel: '3:42',
    durationSeconds: 222,
    scenarioSummary: 'A confident, well-handled booking call that closes cleanly.',
  },
  {
    id: 'call-missed-upsell',
    title: 'Anniversary stay enquiry',
    business: 'Arvion Grand Hotel — Front Desk',
    agentName: 'Marcus (Front Desk)',
    durationLabel: '4:15',
    durationSeconds: 255,
    scenarioSummary: 'Booking is completed, but a clear upsell and personal-touch moment is missed.',
  },
  {
    id: 'call-frustrated-guest',
    title: 'Billing dispute follow-up',
    business: 'Arvion Grand Hotel — Guest Services',
    agentName: 'Devon (Guest Services)',
    durationLabel: '5:08',
    durationSeconds: 308,
    scenarioSummary: 'A frustrated returning guest disputes a charge; the call is recovered but tension runs high.',
  },
  {
    id: 'call-corrupted-audio',
    title: 'Late-night enquiry (poor audio)',
    business: 'Arvion Grand Hotel — Front Desk',
    agentName: 'Unknown',
    durationLabel: '1:58',
    durationSeconds: 118,
    scenarioSummary: 'Included to demonstrate the error/fallback state — this recording fails to process.',
  },
];

export const failingCallIds = new Set(['call-corrupted-audio']);

export const transcripts: Record<string, TranscriptLine[]> = {
  'call-strong-close': [
    { id: 't1', speaker: 'customer', timeLabel: '0:04', timeSeconds: 4, text: "Hi, do you have a room available this weekend? It's for two people." },
    { id: 't2', speaker: 'agent', timeLabel: '0:09', timeSeconds: 9, text: "Absolutely, let me check that for you right away. Which nights were you thinking of?" },
    { id: 't3', speaker: 'customer', timeLabel: '0:16', timeSeconds: 16, text: 'Friday and Saturday night.' },
    { id: 't4', speaker: 'agent', timeLabel: '0:24', timeSeconds: 24, text: "Great, we have a Classic King and a Twin Garden Room open for those dates. The King is $189 a night and includes a city view." },
    { id: 't5', speaker: 'customer', timeLabel: '0:41', timeSeconds: 41, text: "The King sounds good. What's check-in time?" },
    { id: 't6', speaker: 'agent', timeLabel: '0:46', timeSeconds: 46, text: 'Check-in is from 3 PM, and if you let me know your arrival time I can flag an early check-in request for you.' },
    { id: 't7', speaker: 'customer', timeLabel: '1:02', timeSeconds: 62, text: "That'd be great, we're aiming to get there around 1." },
    { id: 't8', speaker: 'agent', timeLabel: '1:10', timeSeconds: 70, text: "Noted — I'll flag that now. Can I get a name and phone number to lock in the booking?" },
    { id: 't9', speaker: 'customer', timeLabel: '1:20', timeSeconds: 80, text: 'Sure, Amara Osei, 555-018-2231.' },
    { id: 't10', speaker: 'agent', timeLabel: '1:35', timeSeconds: 95, text: "You're all booked in, Amara — Classic King, Friday and Saturday, early check-in requested. You'll get a confirmation text shortly. Anything else I can help with?" },
    { id: 't11', speaker: 'customer', timeLabel: '1:50', timeSeconds: 110, text: 'No, that covers it. Thank you!' },
    { id: 't12', speaker: 'agent', timeLabel: '1:54', timeSeconds: 114, text: 'Of course — see you Friday!' },
  ],
  'call-missed-upsell': [
    { id: 't1', speaker: 'customer', timeLabel: '0:05', timeSeconds: 5, text: "Hi, I'd like to check availability for next Friday. It's actually for our anniversary." },
    { id: 't2', speaker: 'agent', timeLabel: '0:12', timeSeconds: 12, text: 'Sure, let me look. What dates exactly?' },
    { id: 't3', speaker: 'customer', timeLabel: '0:20', timeSeconds: 20, text: 'Just the Friday night.' },
    { id: 't4', speaker: 'agent', timeLabel: '0:28', timeSeconds: 28, text: 'We have the Classic King available at $189.' },
    { id: 't5', speaker: 'customer', timeLabel: '0:35', timeSeconds: 35, text: "Okay, that works. It's our fifth anniversary so we just want somewhere nice." },
    { id: 't6', speaker: 'agent', timeLabel: '0:42', timeSeconds: 42, text: 'Got it. Can I get a name and phone number?' },
    { id: 't7', speaker: 'customer', timeLabel: '0:50', timeSeconds: 50, text: 'Dana Whitfield, 555-772-0194.' },
    { id: 't8', speaker: 'agent', timeLabel: '1:05', timeSeconds: 65, text: "You're booked, Dana. Anything else?" },
    { id: 't9', speaker: 'customer', timeLabel: '1:12', timeSeconds: 72, text: "No, that's all." },
    { id: 't10', speaker: 'agent', timeLabel: '1:15', timeSeconds: 75, text: 'Great, thanks for calling.' },
  ],
  'call-frustrated-guest': [
    { id: 't1', speaker: 'customer', timeLabel: '0:03', timeSeconds: 3, text: "I was charged twice for my stay last month and I have not heard back from anyone. This is really frustrating." },
    { id: 't2', speaker: 'agent', timeLabel: '0:14', timeSeconds: 14, text: "I'm really sorry about that, and I understand the frustration. Let's get this sorted right now — can you confirm the dates of your stay?" },
    { id: 't3', speaker: 'customer', timeLabel: '0:26', timeSeconds: 26, text: 'It was the 3rd through the 6th. I already emailed twice.' },
    { id: 't4', speaker: 'agent', timeLabel: '0:34', timeSeconds: 34, text: "I can see one of those emails came through, and I apologize it wasn't followed up on sooner. I'm pulling up your folio now." },
    { id: 't5', speaker: 'customer', timeLabel: '0:50', timeSeconds: 50, text: "This shouldn't be this hard. I just want the extra charge reversed." },
    { id: 't6', speaker: 'agent', timeLabel: '1:02', timeSeconds: 62, text: 'Completely understand. I can confirm the duplicate charge and I can process the refund right now — it should reflect in 3 to 5 business days.' },
    { id: 't7', speaker: 'customer', timeLabel: '1:20', timeSeconds: 80, text: "Okay... thank you. I just don't want this to happen again." },
    { id: 't8', speaker: 'agent', timeLabel: '1:30', timeSeconds: 90, text: "That's fair. I've also flagged your account with a note so the front desk team is aware. Is there anything else I can help make right?" },
    { id: 't9', speaker: 'customer', timeLabel: '1:44', timeSeconds: 104, text: 'No, that covers it for now.' },
    { id: 't10', speaker: 'agent', timeLabel: '1:48', timeSeconds: 108, text: 'Thank you for your patience — I appreciate you giving us the chance to fix this.' },
  ],
};

export const analyses: Record<string, CallAnalysis> = {
  'call-strong-close': {
    callId: 'call-strong-close',
    scores: { overall: 92, sentiment: 'positive', interactionQuality: 94, responseQuality: 90, resolutionQuality: 96 },
    missedOpportunities: ['No mention of the on-site restaurant for a Friday night arrival.'],
    objections: [],
    potentialRevenueImpact: {
      label: 'Early check-in add-on captured',
      amount: 0,
      note: 'No paid add-on offered in this call — booking value stayed at room rate only.',
    },
    recommendedImprovements: [
      'Mention the rooftop pool or restaurant when guests share timing details — a light, natural upsell moment.',
    ],
    timeline: [
      { id: 'm1', timeLabel: '0:09', timeSeconds: 9, type: 'positive', label: 'Fast, warm acknowledgement', detail: 'Agent responded immediately and took ownership of the request.' },
      { id: 'm2', timeLabel: '0:46', timeSeconds: 46, type: 'positive', label: 'Proactive early check-in offer', detail: 'Agent offered to flag early check-in without being asked twice.' },
      { id: 'm3', timeLabel: '1:35', timeSeconds: 95, type: 'resolution', label: 'Clean booking confirmation', detail: 'Booking was confirmed clearly with a recap of all details.' },
    ],
    coaching: {
      wentWell: [
        'Agent moved the conversation forward with specific dates instead of vague availability questions.',
        'Proactively offered early check-in based on the arrival time the guest volunteered.',
        'Closed with a clear, warm recap and confirmed next steps.',
      ],
      wentWrong: [
        'No attempt to add on-site dining or amenities to the booking.',
      ],
      betterResponse: [
        {
          situation: 'After confirming the room and early check-in',
          saidInstead: "You're all booked in, Amara — Classic King, Friday and Saturday, early check-in requested.",
          couldHaveSaid: "You're all booked in — and since you'll be arriving around 1, would you like me to also note a lunch reservation at our rooftop restaurant?",
        },
      ],
      recommendations: [
        'Build a one-line amenity mention into the booking-confirmation script for weekend stays.',
      ],
    },
  },
  'call-missed-upsell': {
    callId: 'call-missed-upsell',
    scores: { overall: 68, sentiment: 'neutral', interactionQuality: 62, responseQuality: 60, resolutionQuality: 80 },
    missedOpportunities: [
      "Guest mentioned it was their anniversary — no acknowledgement or personal touch offered.",
      'No mention of room upgrade, champagne, or turn-down amenities for a special occasion.',
    ],
    objections: [],
    potentialRevenueImpact: {
      label: 'Anniversary package upsell not offered',
      amount: 45,
      note: 'Estimated value of a typical romance/anniversary add-on package, based on similar bookings.',
    },
    recommendedImprovements: [
      'Train agents to listen for occasion cues ("anniversary", "birthday", "celebrating") and respond with a specific offer.',
      'Add a short prompt to the booking checklist for special-occasion stays.',
    ],
    timeline: [
      { id: 'm1', timeLabel: '0:05', timeSeconds: 5, type: 'missed-opportunity', label: 'Anniversary mentioned, not acknowledged', detail: 'Guest disclosed the occasion but the agent moved straight to logistics.' },
      { id: 'm2', timeLabel: '0:35', timeSeconds: 35, type: 'missed-opportunity', label: 'Second mention, still no response', detail: 'Guest repeated the context ("fifth anniversary") — a clear second opening that went unused.' },
      { id: 'm3', timeLabel: '1:05', timeSeconds: 65, type: 'resolution', label: 'Booking completed', detail: 'Transactionally correct, but the interaction felt scripted rather than personal.' },
    ],
    coaching: {
      wentWell: [
        'Booking was accurate and completed efficiently.',
        'No errors in room, rate, or contact details.',
      ],
      wentWrong: [
        'Missed two clear openings to acknowledge a meaningful occasion for the guest.',
        'No attempt to offer a relevant upsell despite an ideal moment for one.',
      ],
      betterResponse: [
        {
          situation: 'When the guest first mentioned the anniversary',
          saidInstead: 'Sure, let me look. What dates exactly?',
          couldHaveSaid: "Happy anniversary in advance! Let's find you something special — what dates were you thinking?",
        },
        {
          situation: 'Before closing the call',
          saidInstead: "You're booked, Dana. Anything else?",
          couldHaveSaid: "You're booked, Dana — and since it's your anniversary, would you like me to arrange a small welcome treat in the room?",
        },
      ],
      recommendations: [
        'Add an occasion-detection prompt to the booking flow and a short list of no-cost personal touches agents can offer.',
      ],
    },
  },
  'call-frustrated-guest': {
    callId: 'call-frustrated-guest',
    scores: { overall: 79, sentiment: 'mixed', interactionQuality: 82, responseQuality: 84, resolutionQuality: 88 },
    missedOpportunities: [
      'No proactive follow-up offered to confirm the refund landed once processed.',
    ],
    objections: [
      'Guest cited a prior unanswered email as the root frustration.',
      'Guest expressed distrust that the issue would actually be resolved.',
    ],
    potentialRevenueImpact: {
      label: 'Retention risk mitigated',
      amount: 0,
      note: 'No direct revenue captured — the primary value here was preventing guest churn after a billing error.',
    },
    recommendedImprovements: [
      'Set expectations for a specific follow-up (e.g. confirmation email once refund posts) to close the loop fully.',
      'Route unanswered guest emails to a same-day escalation queue so this pattern does not repeat.',
    ],
    timeline: [
      { id: 'm1', timeLabel: '0:03', timeSeconds: 3, type: 'risk', label: 'Call opens with high frustration', detail: 'Guest opens with a complaint about being ignored, not just the charge itself.' },
      { id: 'm2', timeLabel: '0:14', timeSeconds: 14, type: 'positive', label: 'Immediate empathy, no defensiveness', detail: 'Agent validated the frustration before asking for details.' },
      { id: 'm3', timeLabel: '1:02', timeSeconds: 62, type: 'resolution', label: 'Refund processed on the call', detail: 'Agent resolved the core issue without requiring escalation.' },
      { id: 'm4', timeLabel: '1:30', timeSeconds: 90, type: 'positive', label: 'Proactive account note', detail: 'Agent flagged the account so the issue would not recur unnoticed.' },
    ],
    coaching: {
      wentWell: [
        'Led with empathy before process, which de-escalated the guest quickly.',
        'Took ownership of the prior unanswered email rather than deflecting.',
        'Resolved the refund directly on the call instead of promising a callback.',
      ],
      wentWrong: [
        'No specific timeline or channel was set for confirming the refund actually landed.',
      ],
      betterResponse: [
        {
          situation: 'After confirming the refund was processed',
          saidInstead: 'It should reflect in 3 to 5 business days.',
          couldHaveSaid: "It should reflect in 3 to 5 business days, and I'll personally email you once it posts so you're not left wondering.",
        },
      ],
      recommendations: [
        'Add a standard "I will confirm once resolved" close to billing-dispute calls to fully rebuild trust.',
      ],
    },
  },
};
