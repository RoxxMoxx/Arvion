import type { CapturedLead } from '@/types';

const statusStyles: Record<CapturedLead['status'], string> = {
  lead: 'bg-ink-950/5 text-ink-700',
  booked: 'bg-signal-500/15 text-signal-600',
  escalated: 'bg-paper-100 text-ink-700 border border-ink-950/10',
};

const statusLabel: Record<CapturedLead['status'], string> = {
  lead: 'Lead captured',
  booked: 'Booking confirmed',
  escalated: 'Escalated to team',
};

export function BookingPanel({ lead }: { lead: CapturedLead | null }) {
  return (
    <div className="rounded-xl2 border border-ink-950/10 bg-paper-50 p-6 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-ink-950">Business Growth Dashboard</h3>
        <span className="rounded-full bg-ink-950/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-ink-500">
          Demo data
        </span>
      </div>
      <p className="mt-1 text-sm text-ink-500">
        This is what a real front-desk or CRM view would show after this call.
      </p>

      {!lead ? (
        <div className="mt-6 rounded-xl border border-dashed border-ink-950/15 p-6 text-center text-sm text-ink-300">
          No action captured yet — try the conversation on the left.
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles[lead.status]}`}>
            {statusLabel[lead.status]}
          </span>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {lead.name && (
              <div>
                <dt className="text-ink-300">Name</dt>
                <dd className="text-ink-900">{lead.name}</dd>
              </div>
            )}
            {lead.phone && (
              <div>
                <dt className="text-ink-300">Phone</dt>
                <dd className="text-ink-900">{lead.phone}</dd>
              </div>
            )}
            {lead.roomName && (
              <div>
                <dt className="text-ink-300">Room</dt>
                <dd className="text-ink-900">{lead.roomName}</dd>
              </div>
            )}
            {lead.dateLabel && (
              <div>
                <dt className="text-ink-300">Date</dt>
                <dd className="text-ink-900">{lead.dateLabel}</dd>
              </div>
            )}
            {typeof lead.ratePerNight === 'number' && (
              <div>
                <dt className="text-ink-300">Rate</dt>
                <dd className="text-ink-900">${lead.ratePerNight}/night</dd>
              </div>
            )}
          </dl>
          <p className="border-t border-ink-950/10 pt-3 text-xs text-ink-500">{lead.notes}</p>
        </div>
      )}
    </div>
  );
}
