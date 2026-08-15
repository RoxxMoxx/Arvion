import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { industries } from '@/data/industries';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'How Arvion applies to hotels, restaurants, retail, clinics, salons, professional services, local businesses and growing SMEs.',
};

export default function IndustriesPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Built for the businesses that run on customer trust."
          description="The same platform, applied differently depending on how your business runs."
        />

        <div className="mt-14 space-y-6">
          {industries.map((industry) => (
            <div
              key={industry.slug}
              id={industry.slug}
              className="scroll-mt-24 rounded-xl2 border border-ink-950/10 bg-paper-50 p-6 shadow-card sm:p-8"
            >
              <h2 className="font-display text-xl text-ink-950">{industry.name}</h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Problems</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-ink-700">
                    {industry.problems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-signal-600">Arvion</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-ink-700">
                    {industry.arvionSolutions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Outcome</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-ink-700">
                    {industry.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
