import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { contactInfo, contactLinks } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Arvion.',
};

export default function ContactPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Contact"
            title="Talk to Arvion."
            description="Reach out and we'll follow up about your business and what Arvion could look like for it."
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={contactLinks.email} variant="secondary">
              Email {contactInfo.email}
            </Button>
            <Button href="/demos" variant="ghost">
              Explore the demos first
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={contactLinks.phone} variant="ghost">
              Call {contactInfo.phoneDisplay}
            </Button>
            <Button href={contactLinks.whatsapp} variant="ghost">
              WhatsApp {contactInfo.phoneDisplay}
            </Button>
          </div>

          <p className="mt-6 text-sm text-ink-500">
            A full contact form connected to lead capture is planned for a future release.
          </p>
        </div>
      </Container>
    </main>
  );
}
