const stages = ['Website', 'Customer', 'AI', 'Automation', 'Growth'];

export function HeroVisual() {
  return (
    <div
      className="mt-16 flex flex-wrap items-center gap-3 rounded-xl2 border border-ink-950/10 bg-paper-100 p-6 shadow-card sm:gap-0"
      aria-label="Arvion connects your website, customers, AI, automation and growth"
    >
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center">
          <span className="rounded-full bg-ink-950 px-4 py-2 text-sm font-medium text-paper-50">
            {stage}
          </span>
          {i < stages.length - 1 && (
            <span className="mx-3 hidden text-ink-300 sm:inline" aria-hidden="true">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
