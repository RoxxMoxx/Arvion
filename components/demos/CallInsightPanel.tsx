import type { CallAnalysis } from '@/types';

export function CallInsightPanel({ analysis }: { analysis: CallAnalysis }) {
  const { missedOpportunities, objections, potentialRevenueImpact, recommendedImprovements } = analysis;

  return (
    <div className="rounded-xl2 border border-ink-950/10 bg-paper-50 p-6 shadow-card">
      <h3 className="font-display text-lg text-ink-950">Business insight</h3>
      <p className="mt-1 text-xs text-ink-300">How this individual call connects to broader business performance.</p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Missed opportunities</p>
          <ul className="mt-2 space-y-2 text-sm text-ink-700">
            {missedOpportunities.length === 0 ? (
              <li className="text-ink-300">None identified in this call.</li>
            ) : (
              missedOpportunities.map((item) => <li key={item}>{item}</li>)
            )}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Objections raised</p>
          <ul className="mt-2 space-y-2 text-sm text-ink-700">
            {objections.length === 0 ? (
              <li className="text-ink-300">None raised in this call.</li>
            ) : (
              objections.map((item) => <li key={item}>{item}</li>)
            )}
          </ul>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-ink-950/10 bg-paper-100 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Potential revenue impact</p>
        <p className="mt-1 font-display text-2xl text-ink-950">
          {potentialRevenueImpact.amount > 0 ? `$${potentialRevenueImpact.amount}` : '—'}
        </p>
        <p className="text-sm text-ink-700">{potentialRevenueImpact.label}</p>
        <p className="mt-1 text-xs text-ink-500">{potentialRevenueImpact.note}</p>
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Recommended improvements</p>
        <ul className="mt-2 space-y-2 text-sm text-ink-700">
          {recommendedImprovements.map((item) => (
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
