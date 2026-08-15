const features: { title: string; description: string; icon: JSX.Element }[] = [
  {
    title: 'Enterprise-Grade Security',
    description: 'Your data is protected with best-in-class security.',
    icon: (
      <path
        d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: 'AI-Powered Automation',
    description: 'Automate conversations, bookings and follow-ups effortlessly.',
    icon: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="2" strokeWidth="1.5" fill="none" />
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Real Results, Measurable Growth',
    description: 'Track performance and grow with actionable insights.',
    icon: <path d="M4 19V9m6 10V5m6 14v-7" strokeWidth="1.8" strokeLinecap="round" fill="none" />,
  },
  {
    title: 'Integrated Workflows',
    description: 'All your tools. One platform. Seamlessly connected.',
    icon: (
      <path
        d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export function HeroFeatureStrip() {
  return (
    <div className="border-t border-paper-50/10 bg-ink-1000">
      <div className="mx-auto grid max-w-content gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-signal-500/30 text-signal-400">
              <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" fill="none">
                {feature.icon}
              </svg>
            </span>
            <div>
              <p className="text-sm font-medium text-paper-50">{feature.title}</p>
              <p className="mt-1 text-xs text-paper-50/50">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
