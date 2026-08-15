// Signature hero visual: an abstracted "Arvion Console" mockup — not a literal
// product screenshot, but a designed representation of what Arvion actually
// does (enquiries becoming bookings, next to the metrics that result),
// presented inside a simple device frame with a few floating connector
// badges for a cinematic, high-end SaaS feel.
const floatIcons: { label: string; top: string; side: 'left' | 'right'; offset: string }[] = [
  { label: 'chat', top: '6%', side: 'right', offset: '-14%' },
  { label: 'chart', top: '2%', side: 'right', offset: '38%' },
  { label: 'calendar', top: '34%', side: 'right', offset: '46%' },
];

function FloatIcon({ label }: { label: string }) {
  const icons: Record<string, JSX.Element> = {
    chat: (
      <path d="M4 5h16v11H8l-4 4V5z" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    ),
    chart: (
      <path d="M4 19V9m6 10V5m6 14v-7" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    ),
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" strokeWidth="1.5" fill="none" />
        <path d="M4 9h16M8 3v4M16 3v4" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-signal-400" stroke="currentColor" fill="none">
      {icons[label]}
    </svg>
  );
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:mx-0">
      {/* ambient glow behind the panel */}
      <div
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-signal-500/10 blur-3xl"
        aria-hidden="true"
      />

      {/* floating connector badges */}
      {floatIcons.map((f) => (
        <div
          key={f.label}
          className="absolute z-10 hidden h-9 w-9 items-center justify-center rounded-lg border border-paper-50/10 bg-ink-900/90 shadow-glow backdrop-blur sm:flex"
          style={{ top: f.top, [f.side]: f.offset }}
        >
          <FloatIcon label={f.label} />
        </div>
      ))}

      {/* device frame */}
      <div className="rounded-2xl border border-paper-50/10 bg-ink-800 p-2 shadow-glow">
        <div className="rounded-xl border border-paper-50/10 bg-ink-900 p-5">
          {/* window chrome */}
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-paper-50/20" />
            <span className="h-2 w-2 rounded-full bg-paper-50/20" />
            <span className="h-2 w-2 rounded-full bg-paper-50/20" />
            <span className="ml-2 text-[11px] font-medium uppercase tracking-widest text-paper-50/40">
              Arvion Console
            </span>
          </div>

          {/* live conversation snippet */}
          <div className="mt-5 space-y-2">
            <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-paper-50/[0.06] px-3 py-2 text-xs text-paper-50/70">
              Do you have a room available this weekend?
            </div>
            <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-signal-500/15 px-3 py-2 text-xs text-paper-50">
              Checking now — the Classic King is open for Fri–Sat.
            </div>
          </div>

          {/* mini trend line */}
          <div className="mt-4 rounded-lg bg-paper-50/[0.04] px-3 py-2.5">
            <div className="flex items-center justify-between text-[10px] text-paper-50/40">
              <span>Leads over time</span>
              <span>This week</span>
            </div>
            <svg viewBox="0 0 200 40" className="mt-1.5 h-8 w-full" preserveAspectRatio="none">
              <polyline
                points="0,30 25,22 50,26 75,14 100,18 125,8 150,16 175,6 200,10"
                fill="none"
                stroke="#DDA35F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* metrics grid */}
          <div className="mt-4 grid grid-cols-4 gap-2 border-t border-paper-50/10 pt-4">
            <div>
              <p className="text-[9px] uppercase tracking-wide text-paper-50/40">Leads</p>
              <p className="mt-0.5 font-display text-base text-paper-50">128</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-wide text-paper-50/40">Bookings</p>
              <p className="mt-0.5 font-display text-base text-paper-50">54</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-wide text-paper-50/40">Response</p>
              <p className="mt-0.5 font-display text-base text-signal-400">&lt;10s</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-wide text-paper-50/40">Conv. rate</p>
              <p className="mt-0.5 font-display text-base text-signal-400">24.6%</p>
            </div>
          </div>
        </div>
      </div>

      {/* device base, suggesting a laptop stand without embedding a real screenshot */}
      <div className="mx-auto mt-1 h-2 w-2/3 rounded-b-xl bg-ink-800" aria-hidden="true" />
    </div>
  );
}
