import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  { number: '01', title: 'Understand', description: 'Analyze the business, customers and workflows.' },
  { number: '02', title: 'Connect', description: 'Connect website, bookings, communications and business systems.' },
  { number: '03', title: 'Automate', description: 'Automate repetitive interactions and workflows.' },
  { number: '04', title: 'Grow', description: 'Use data and AI to continuously improve customer experience and growth.' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="How Arvion Works" title="A clear path from where you are to an AI-powered business." />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="border-t border-ink-950/10 pt-6">
              <span className="font-display text-3xl text-signal-500">{step.number}</span>
              <h3 className="mt-3 font-display text-xl text-ink-950">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
