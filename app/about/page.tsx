import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'About',
  description: 'Why Arvion exists and how it approaches business technology.',
};

export default function AboutPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="About"
          title="Businesses don't need more software. They need technology that actually works for them."
        />
        <div className="mt-8 space-y-5 text-ink-700">
          <p>
            Many businesses are running on outdated websites, missed enquiries, manual booking,
            repetitive phone calls, fragmented customer communication, inconsistent marketing, and
            manual administrative work — often all at once, and often disconnected from each other.
          </p>
          <p>
            Arvion connects those pieces into one platform, so a hotel, restaurant, clinic, salon,
            retailer, or growing SME can respond faster, capture more of the enquiries it&apos;s
            already getting, and spend less time on repetitive work.
          </p>
        </div>

        <div className="mt-16 border-t border-ink-950/10 pt-10">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Founder</p>
          <div className="mt-4 flex items-center gap-4">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink-950/5 text-xs text-ink-300"
              aria-label="Founder portrait placeholder"
            >
              Founder Portrait
            </div>
            <div>
              <p className="font-display text-lg text-ink-950">Mukesh Das</p>
              <p className="text-sm text-ink-500">Founder &amp; Technology Leader, Arvion</p>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-sm text-ink-700">
            Building practical AI and automation systems that help businesses operate smarter and
            grow faster.
          </p>
        </div>
      </div>
      </Container>
    </main>
  );
}
