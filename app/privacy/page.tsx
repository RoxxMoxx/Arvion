import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Arvion privacy policy.',
};

export default function PrivacyPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Legal" title="Privacy Policy" />
        <p className="mt-6 text-sm text-ink-500">
          A full privacy policy is coming soon. If you have questions about how Arvion handles
          data in the meantime, please get in touch.
        </p>
      </div>
      </Container>
    </main>
  );
}
