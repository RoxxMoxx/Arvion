import type { TimelineMoment, TimelineMomentType } from '@/types';

const typeStyles: Record<TimelineMomentType, { dot: string; label: string }> = {
  positive: { dot: 'bg-signal-500', label: 'Positive moment' },
  'missed-opportunity': { dot: 'bg-ink-500', label: 'Missed opportunity' },
  objection: { dot: 'bg-ink-700', label: 'Objection' },
  resolution: { dot: 'bg-signal-600', label: 'Resolution' },
  risk: { dot: 'bg-ink-950', label: 'Risk' },
};

export function CallTimeline({ moments }: { moments: TimelineMoment[] }) {
  return (
    <div className="rounded-xl2 border border-ink-950/10 bg-paper-50 p-6 shadow-card">
      <h3 className="font-display text-lg text-ink-950">Conversation timeline</h3>
      <ol className="mt-5 space-y-5 border-l border-ink-950/10 pl-5">
        {moments.map((moment) => {
          const style = typeStyles[moment.type];
          return (
            <li key={moment.id} className="relative">
              <span className={`absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full ${style.dot}`} />
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-ink-300">{moment.timeLabel}</span>
                <span className="text-[11px] uppercase tracking-wide text-ink-300">{style.label}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-ink-900">{moment.label}</p>
              <p className="text-sm text-ink-500">{moment.detail}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
