// Signature hero visual: an abstracted "Arvion Console" panel — not a literal
// product screenshot, but a designed representation of what Arvion actually
// does (a live enquiry becoming a booking, next to the metrics that result).
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0">
      {/* ambient glow behind the panel */}
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-signal-500/10 blur-2xl"
        aria-hidden="true"
      />
      <div className="rounded-xl2 border border-paper-50/10 bg-ink-900 p-5 shadow-glow">
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

        {/* status row */}
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-paper-50/[0.05] px-3 py-2 text-[11px] text-paper-50/60">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
          Lead captured — booking confirmed
        </div>

        {/* mini metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-paper-50/10 pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-paper-50/40">Enquiries</p>
            <p className="mt-0.5 font-display text-lg text-paper-50">128</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-paper-50/40">Bookings</p>
            <p className="mt-0.5 font-display text-lg text-paper-50">54</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-paper-50/40">Response</p>
            <p className="mt-0.5 font-display text-lg text-signal-400">&lt;10s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
