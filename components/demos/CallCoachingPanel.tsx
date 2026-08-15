import type { CoachingNote } from '@/types';

export function CallCoachingPanel({ coaching }: { coaching: CoachingNote }) {
  return (
    <div className="rounded-xl2 border border-ink-950/10 bg-paper-50 p-6 shadow-card">
      <h3 className="font-display text-lg text-ink-950">Coaching notes</h3>
      <p className="mt-1 text-xs text-ink-300">Generated from the demo analysis — illustrative, not a live AI call.</p>

      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-signal-600">What went well</p>
          <ul className="mt-2 space-y-2 text-sm text-ink-700">
            {coaching.wentWell.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-500">What went wrong</p>
          <ul className="mt-2 space-y-2 text-sm text-ink-700">
            {coaching.wentWrong.length === 0 ? (
              <li className="text-ink-300">Nothing significant flagged.</li>
            ) : (
              coaching.wentWrong.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true">–</span>
                  <span>{item}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {coaching.betterResponse.length > 0 && (
        <div className="mt-6 border-t border-ink-950/10 pt-5">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-500">What the agent could have said</p>
          <div className="mt-3 space-y-4">
            {coaching.betterResponse.map((item) => (
              <div key={item.situation} className="rounded-xl border border-ink-950/10 p-4">
                <p className="text-xs text-ink-300">{item.situation}</p>
                <p className="mt-2 text-sm text-ink-500 line-through decoration-ink-950/20">{item.saidInstead}</p>
                <p className="mt-1 text-sm font-medium text-ink-900">{item.couldHaveSaid}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 border-t border-ink-950/10 pt-5">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Coaching recommendations</p>
        <ul className="mt-2 space-y-2 text-sm text-ink-700">
          {coaching.recommendations.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
