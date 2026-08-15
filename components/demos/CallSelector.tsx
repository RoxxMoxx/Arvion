import type { SampleCall } from '@/types';

export function CallSelector({
  calls,
  selectedCallId,
  disabled,
  onSelect,
}: {
  calls: SampleCall[];
  selectedCallId: string | null;
  disabled: boolean;
  onSelect: (callId: string) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-ink-950">Select a call to analyze</h3>
        <span className="rounded-full bg-ink-950/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-ink-500">
          Sample demo calls
        </span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {calls.map((call) => {
          const isSelected = call.id === selectedCallId;
          return (
            <button
              key={call.id}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(call.id)}
              className={[
                'rounded-xl2 border p-4 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50',
                isSelected
                  ? 'border-signal-500/50 bg-signal-500/10'
                  : 'border-ink-950/10 bg-paper-50 hover:border-ink-950/25',
              ].join(' ')}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-display text-base text-ink-950">{call.title}</p>
                <span className="shrink-0 text-xs text-ink-300">{call.durationLabel}</span>
              </div>
              <p className="mt-1 text-xs text-ink-500">
                {call.business} · {call.agentName}
              </p>
              <p className="mt-2 text-sm text-ink-600">{call.scenarioSummary}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-xl2 border border-dashed border-ink-950/15 p-5 text-center">
        <p className="text-sm font-medium text-ink-500">Upload a call recording</p>
        <p className="mt-1 text-xs text-ink-300">
          Disabled in this demo — real uploads require a telephony/storage integration. Pick a
          sample call above instead.
        </p>
      </div>
    </div>
  );
}
