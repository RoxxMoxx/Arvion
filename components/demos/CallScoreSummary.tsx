import type { CallScores } from '@/types';

const sentimentStyles: Record<CallScores['sentiment'], string> = {
  positive: 'bg-signal-500/15 text-signal-600',
  neutral: 'bg-ink-950/5 text-ink-700',
  mixed: 'bg-paper-100 text-ink-700 border border-ink-950/10',
  negative: 'bg-ink-950/10 text-ink-900',
};

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-ink-500">{label}</span>
        <span className="font-medium text-ink-900">{value}/100</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full rounded-full bg-ink-950/5">
        <div
          className="h-1.5 rounded-full bg-signal-500"
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}

export function CallScoreSummary({ scores }: { scores: CallScores }) {
  return (
    <div className="rounded-xl2 border border-ink-950/10 bg-paper-50 p-6 shadow-card">
      <div className="flex items-center gap-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-ink-300">Overall score</p>
          <p className="font-display text-4xl text-ink-950">{scores.overall}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${sentimentStyles[scores.sentiment]}`}>
          {scores.sentiment} sentiment
        </span>
      </div>
      <div className="mt-6 space-y-4">
        <ScoreBar label="Interaction quality" value={scores.interactionQuality} />
        <ScoreBar label="Response quality" value={scores.responseQuality} />
        <ScoreBar label="Resolution quality" value={scores.resolutionQuality} />
      </div>
    </div>
  );
}
