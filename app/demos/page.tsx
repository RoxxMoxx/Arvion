import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Demos',
  description: 'Interactive demos of Simrion product capabilities, using illustrative demo data.',
};

const demos = [
  {
    slug: 'voice-receptionist',
    name: 'AI Voice Receptionist',
    description: 'Simulate a hotel guest call — availability, booking, and lead capture.',
    available: true,
  },
  { slug: 'call-audit', name: 'AI Call Audit', description: 'Upload or select a sample call and see a full analysis with scoring and coaching.', available: true },
  { slug: 'marketing-assistant', name: 'AI Marketing Assistant', description: 'Coming soon.', available: false },
  { slug: 'growth-dashboard', name: 'Business Growth Dashboard', description: 'Coming soon.', available: false },
];

export default function DemosPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Demos"
          title="See Simrion in action."
          description="Every demo below runs on illustrative demo data, clearly labelled, so you can experience the product without any real business connection required."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {demos.map((demo) =>
            demo.available ? (
              <Link
                key={demo.slug}
                href={`/demos/${demo.slug}`}
                className="rounded-xl2 border border-ink-950/10 bg-paper-50 p-6 shadow-card transition-transform hover:-translate-y-0.5"
              >
                <h3 className="font-display text-lg text-ink-950">{demo.name}</h3>
                <p className="mt-2 text-sm text-ink-500">{demo.description}</p>
              </Link>
            ) : (
              <div
                key={demo.slug}
                className="rounded-xl2 border border-dashed border-ink-950/15 p-6 text-ink-300"
              >
                <h3 className="font-display text-lg">{demo.name}</h3>
                <p className="mt-2 text-sm">{demo.description}</p>
              </div>
            )
          )}
        </div>
      </Container>
    </main>
  );
}
