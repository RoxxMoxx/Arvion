import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { solutions } from '@/data/solutions';

export function SolutionsGrid() {
  return (
    <section className="bg-paper-100 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="Everything a growing business needs to run smarter, connected in one platform."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              id={solution.slug}
              href={`/solutions#${solution.slug}`}
              scroll={false}
              className="group scroll-mt-24 rounded-xl2 border border-ink-950/10 bg-paper-50 p-6 shadow-card transition-transform hover:-translate-y-0.5"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-signal-500">
                {solution.letter}
              </span>
              <h3 className="mt-2 font-display text-lg text-ink-950">{solution.name}</h3>
              <p className="mt-2 text-sm text-ink-500">{solution.summary}</p>
              {solution.note && (
                <p className="mt-3 text-xs italic text-ink-300">{solution.note}</p>
              )}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
