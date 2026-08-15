import type { DashboardSummary } from '@/lib/demo/callAuditEngine';

export function CallAuditDashboard({ summary }: { summary: DashboardSummary }) {
  return (
    <div className="rounded-xl2 border border-ink-950/10 bg-paper-50 p-6 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-ink-950">Business Growth Dashboard</h3>
        <span className="rounded-full bg-ink-950/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-ink-500">
          Demo data
        </span>
      </div>
      <p className="mt-1 text-sm text-ink-500">Rolls up every call analyzed in this session.</p>

      {summary.callsAnalyzed === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-ink-950/15 p-6 text-center text-sm text-ink-300">
          No calls analyzed yet — select a call to see it appear here.
        </div>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-ink-300">Calls analyzed</p>
              <p className="font-display text-2xl text-ink-950">{summary.callsAnalyzed}</p>
            </div>
            <div>
              <p className="text-xs text-ink-300">Average score</p>
              <p className="font-display text-2xl text-ink-950">{summary.averageScore}</p>
            </div>
          </div>

          <div className="mt-5 space-y-4 border-t border-ink-950/10 pt-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Common issues</p>
              {summary.commonIssues.length === 0 ? (
                <p className="mt-1 text-sm text-ink-300">None yet.</p>
              ) : (
                <ul className="mt-1 space-y-1 text-sm text-ink-700">
                  {summary.commonIssues.map((issue) => (
                    <li key={issue}>{issue}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Missed opportunities</p>
              {summary.missedOpportunities.length === 0 ? (
                <p className="mt-1 text-sm text-ink-300">None yet.</p>
              ) : (
                <ul className="mt-1 space-y-1 text-sm text-ink-700">
                  {summary.missedOpportunities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Improvement areas</p>
              {summary.improvementAreas.length === 0 ? (
                <p className="mt-1 text-sm text-ink-300">None yet.</p>
              ) : (
                <ul className="mt-1 space-y-1 text-sm text-ink-700">
                  {summary.improvementAreas.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
