import { Button } from '@/components/ui/Button';
import { HeroVisual } from '@/components/sections/HeroVisual';
import { HeroFeatureStrip } from '@/components/sections/HeroFeatureStrip';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { TrustSection } from '@/components/sections/TrustSection';

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink-1000">
        {/* subtle texture so the dark band doesn't read as a flat block */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
          aria-hidden="true"
        />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal-500/10 blur-[100px]" aria-hidden="true" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-signal-500/[0.06] blur-[100px]" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-content gap-14 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal-400">
              Arvion
            </p>
            <h1 className="mt-6 max-w-xl font-display text-4xl leading-[1.1] text-paper-50 sm:text-6xl">
              Turn your business into an <span className="text-signal-400">AI-powered</span>{' '}
              business.
            </h1>
            <p className="mt-6 max-w-md text-lg text-paper-50/60">
              Arvion connects your website, bookings, conversations, marketing and business
              workflows into one intelligent growth layer.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/audit" variant="secondary">
                Get a Free Growth Audit
              </Button>
              <Button href="/solutions" variant="ghost-on-dark">
                Explore Solutions
              </Button>
            </div>
          </div>

          <HeroVisual />
        </div>

        <HeroFeatureStrip />
      </section>

      <TrustSection />
      <SolutionsGrid />
      <HowItWorks />
    </main>
  );
}
