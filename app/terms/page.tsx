import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Arvion terms of service.',
};

export default function TermsPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Legal" title="Terms of Service" />
        <p className="mt-6 text-sm text-ink-500">
          Full terms of service are coming soon. If you have questions in the meantime, please
          get in touch.
        </p>
      </div>
      </Container>
    </main>
  );
}
