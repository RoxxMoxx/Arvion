import type { Metadata } from 'next';
import Image from 'next/image';
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
        </div>

        <div className="mx-auto mt-20 max-w-3xl border-t border-ink-950/10 pt-16">
          <p className="text-xs font-medium uppercase tracking-wide text-signal-500">Leadership</p>
          <div className="mt-6 grid gap-8 sm:grid-cols-[200px_1fr] sm:items-start">
            <div className="overflow-hidden rounded-xl2 border border-ink-950/10 shadow-card">
              <Image
                src="/founder.jpg"
                alt="Mukesh Das, Founder and CEO of Arvion"
                width={520}
                height={922}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div>
              <p className="font-display text-2xl text-ink-950">Mukesh Das</p>
              <p className="mt-1 text-sm font-medium text-signal-600">Founder &amp; CEO, Arvion</p>
              <div className="mt-4 space-y-4 text-sm text-ink-700">
                <p>
                  Mukesh leads Arvion&apos;s product and technology direction, with 11+ years across
                  engineering, semiconductor and embedded systems, and technical leadership before
                  founding Arvion.
                </p>
                <p>
                  His focus is practical: apply AI and automation where it removes real friction for
                  a business — a missed enquiry, a manual booking, a repetitive question — rather than
                  chasing AI for its own sake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
