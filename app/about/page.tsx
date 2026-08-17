import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'About',
  description: 'Technology should work for your business, not create more work for you — the Arvion approach to AI-powered business automation.',
};

export default function AboutPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="About"
            title="Technology should work for your business — not create more work for you."
          />
          <div className="mt-8 space-y-5 text-ink-700">
            <p>
              Modern businesses often operate across disconnected websites, phone calls, bookings,
              customer messages, marketing tools, and administrative tasks. The result is missed
              opportunities, repetitive work, and valuable customer interactions falling through the
              cracks.
            </p>
            <p>
              Arvion brings these pieces together through AI-powered automation — helping businesses
              respond faster, capture more opportunities, streamline everyday operations, and create
              better customer experiences.
            </p>
            <p>
              From hotels and restaurants to clinics, salons, retailers, and growing SMEs, Arvion
              focuses on one simple goal: use technology where it creates measurable value, not
              complexity.
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
                  Mukesh brings 11+ years of experience across engineering, semiconductor technology,
                  embedded systems, and technical leadership to Arvion.
                </p>
                <p>
                  His approach is practical: identify where a business is losing time, opportunities,
                  or customer attention — and apply AI and automation to solve the problem.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-ink-950/10 pt-12 sm:grid sm:grid-cols-[200px_1fr] sm:items-start sm:gap-8">
            <div className="overflow-hidden rounded-xl2 border border-ink-950/10 shadow-card">
              <Image
                src="/cofounder.jpg"
                alt="Md Tarikul Islam, Co-Founder and Bangladesh Country Head at Arvion"
                width={520}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-6 sm:mt-0">
              <p className="font-display text-2xl text-ink-950">Md Tarikul Islam</p>
              <p className="mt-1 text-sm font-medium text-signal-600">Co-Founder &amp; Bangladesh Country Head</p>
              <div className="mt-4 space-y-4 text-sm text-ink-700">
                <p>
                  Tarikul leads Arvion&apos;s presence and business growth in Bangladesh, working
                  directly with local businesses to bring the same practical, AI-powered approach to
                  their operations.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-12 border-l-2 border-signal-500/40 pl-5 font-display text-lg italic text-ink-800">
            Arvion is built on a simple belief: technology should remove friction, not add to it.
          </p>
        </div>
      </Container>
    </main>
  );
}
