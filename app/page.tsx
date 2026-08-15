import { Button } from '@/components/ui/Button';
import { HeroVisual } from '@/components/sections/HeroVisual';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { TrustSection } from '@/components/sections/TrustSection';

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-content px-6 py-28 sm:py-36">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal-500">
          Arvion
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-ink-950 sm:text-6xl">
          Turn your business into an AI-powered business.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-500">
          Arvion connects your website, bookings, conversations, marketing and business
          workflows into one intelligent growth layer.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/audit" variant="secondary">
            Get a Free Growth Audit
          </Button>
          <Button href="/solutions" variant="ghost">
            Explore Solutions
          </Button>
        </div>
        <HeroVisual />
      </section>

      <TrustSection />
      <SolutionsGrid />
      <HowItWorks />
    </main>
  );
}
