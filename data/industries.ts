import type { Industry } from '@/types';

export const industries: Industry[] = [
  {
    slug: 'hotels-resorts',
    name: 'Hotels & Resorts',
    problems: ['Missed calls', 'Manual reservation enquiries', 'Repetitive guest questions', 'Poor follow-up', 'Fragmented marketing'],
    arvionSolutions: ['Booking website', 'AI receptionist', 'Automated enquiries', 'Guest communication', 'Marketing automation', 'Analytics'],
    outcomes: ['More direct enquiries', 'Faster response', 'Less repetitive work', 'Better guest experience'],
  },
  {
    slug: 'restaurants',
    name: 'Restaurants',
    problems: ['Missed reservation calls during service', 'Manual table management', 'Inconsistent promotions', 'Slow response to reviews'],
    arvionSolutions: ['Reservation system', 'AI receptionist for peak hours', 'AI marketing for promotions', 'Review monitoring'],
    outcomes: ['More bookings during service hours', 'Consistent promotions', 'Faster review response'],
  },
  {
    slug: 'retail',
    name: 'Retail',
    problems: ['Fragmented customer communication', 'Manual follow-up on enquiries', 'Inconsistent social content', 'Limited visibility into customer activity'],
    arvionSolutions: ['AI business website', 'Lead capture & follow-up', 'AI marketing', 'Business analytics'],
    outcomes: ['More qualified enquiries', 'Consistent marketing presence', 'Clearer view of customer activity'],
  },
  {
    slug: 'healthcare-clinics',
    name: 'Healthcare / Clinics',
    problems: ['Missed appointment calls', 'Manual scheduling', 'Repetitive intake questions', 'Inconsistent reminders'],
    arvionSolutions: ['Appointment scheduling', 'AI receptionist', 'Automated reminders', 'Customer support automation'],
    outcomes: ['Fewer missed appointments', 'Less administrative work', 'Better patient experience'],
  },
  {
    slug: 'salons-wellness',
    name: 'Salons & Wellness',
    problems: ['Manual booking management', 'Missed enquiries outside business hours', 'Inconsistent promotions', 'No-shows'],
    arvionSolutions: ['Online booking', 'AI receptionist', 'AI marketing', 'Automated reminders'],
    outcomes: ['More bookings captured', 'Fewer no-shows', 'Consistent client communication'],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    problems: ['Slow response to enquiries', 'Manual lead qualification', 'Inconsistent client communication', 'Limited reporting'],
    arvionSolutions: ['Lead capture & follow-up', 'AI customer support', 'Workflow automation', 'Business analytics'],
    outcomes: ['Faster response times', 'Better-qualified leads', 'Clearer business reporting'],
  },
  {
    slug: 'local-businesses',
    name: 'Local Businesses',
    problems: ['Outdated or missing website', 'Manual enquiry handling', 'Inconsistent online presence'],
    arvionSolutions: ['AI business website', 'AI customer support', 'Review & reputation management'],
    outcomes: ['A modern digital presence', 'Faster response to customers', 'Stronger online reputation'],
  },
  {
    slug: 'growing-smes',
    name: 'Growing SMEs',
    problems: ['Manual, repetitive operations', 'Fragmented tools that do not talk to each other', 'Limited visibility into growth metrics'],
    arvionSolutions: ['Workflow automation', 'Business analytics', 'AI marketing', 'AI customer support'],
    outcomes: ['Less repetitive work', 'Connected business systems', 'Clearer growth visibility'],
  },
];
