import type { DemoRoom } from '@/types';

// All data on this page is illustrative "Simrion Grand Hotel" demo data.
// Nothing here represents a real business, reservation system, or telephony integration.

export const demoRooms: DemoRoom[] = [
  {
    id: 'classic-king',
    name: 'Classic King Room',
    bedType: '1 King bed',
    ratePerNight: 189,
    description: 'City view, work desk, walk-in shower.',
  },
  {
    id: 'deluxe-suite',
    name: 'Deluxe Suite',
    bedType: '1 King bed + lounge',
    ratePerNight: 279,
    description: 'Separate living area, bathtub, welcome amenity.',
  },
  {
    id: 'twin-garden',
    name: 'Twin Garden Room',
    bedType: '2 Twin beds',
    ratePerNight: 159,
    description: 'Ground floor, private garden patio.',
  },
];

export const demoFaqs: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['check-in', 'checkin', 'check in time'],
    answer: 'Check-in is from 3:00 PM, and early check-in can be requested based on availability.',
  },
  {
    keywords: ['check-out', 'checkout', 'check out time'],
    answer: 'Check-out is by 11:00 AM.',
  },
  {
    keywords: ['pet', 'pets', 'dog', 'cat'],
    answer: 'We welcome well-behaved pets under 25kg for a small nightly fee.',
  },
  {
    keywords: ['parking'],
    answer: 'Self-parking is complimentary for all guests, and valet is available for $18/night.',
  },
  {
    keywords: ['wifi', 'wi-fi', 'internet'],
    answer: 'Wi-Fi is complimentary and included with every stay.',
  },
  {
    keywords: ['breakfast'],
    answer: 'Breakfast is served 7–10:30 AM and can be added to any booking for $22 per person.',
  },
  {
    keywords: ['cancel', 'cancellation', 'refund'],
    answer: 'Reservations can be cancelled free of charge up to 48 hours before check-in.',
  },
  {
    keywords: ['pool'],
    answer: 'The rooftop pool is open 7:00 AM to 9:00 PM daily.',
  },
];

/**
 * Deterministic pseudo-availability so the demo behaves consistently across
 * reloads and reviewers, without a real reservation system behind it.
 */
function seededHash(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) % 1000;
  }
  return hash;
}

export function isRoomAvailable(roomId: string, dayOffset: number): boolean {
  const key = `${roomId}:${dayOffset}`;
  // Roughly 70% availability, weighted so weekends (Fri/Sat) run tighter.
  const day = new Date();
  day.setDate(day.getDate() + dayOffset);
  const isWeekend = day.getDay() === 5 || day.getDay() === 6;
  const threshold = isWeekend ? 600 : 800;
  return seededHash(key) < threshold;
}

export function formatDateLabel(dayOffset: number): string {
  const day = new Date();
  day.setDate(day.getDate() + dayOffset);
  return day.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
}
