import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Free Growth Audit',
  description: 'Request a free business growth audit from Simrion.',
};

export default function AuditPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Free Growth Audit"
          title="See where Simrion could help your business most."
          description="The interactive audit form is coming soon. In the meantime, reach out directly and we'll walk through it with you."
        />
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact" variant="secondary">
            Talk to Simrion
          </Button>
          <Button href="/demos" variant="ghost">
            See a live demo instead
          </Button>
        </div>
      </div>
      </Container>
    </main>
  );
}
