const STEPS = ['Loading recording', 'Transcribing audio', 'Analyzing conversation', 'Generating coaching notes'];

export function CallProcessingState({ activeStep }: { activeStep: number }) {
  return (
    <div className="rounded-xl2 border border-ink-950/10 bg-paper-50 p-8 shadow-card">
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-signal-500" />
        <p className="font-display text-lg text-ink-950">Analyzing call...</p>
      </div>
      <p className="mt-1 text-sm text-ink-500">
        Simulated processing — this demo does not send audio to an external AI provider.
      </p>
      <ol className="mt-6 space-y-3">
        {STEPS.map((step, i) => {
          const state = i < activeStep ? 'done' : i === activeStep ? 'active' : 'pending';
          return (
            <li key={step} className="flex items-center gap-3 text-sm">
              <span
                className={[
                  'flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]',
                  state === 'done'
                    ? 'bg-signal-500 text-paper-50'
                    : state === 'active'
                      ? 'border-2 border-signal-500 text-signal-500'
                      : 'border border-ink-950/15 text-ink-300',
                ].join(' ')}
              >
                {state === 'done' ? '✓' : i + 1}
              </span>
              <span className={state === 'pending' ? 'text-ink-300' : 'text-ink-800'}>{step}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
