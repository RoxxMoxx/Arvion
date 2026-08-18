import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { worldwideContact, northAmericaContact, bangladeshContact, contactLinksFor, type RegionalContact } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Arvion — worldwide and Bangladesh business contacts.',
};

function RegionalContactBlock({ contact }: { contact: RegionalContact }) {
  const links = contactLinksFor(contact);
  return (
    <div className="rounded-xl2 border border-ink-950/10 bg-paper-50 p-6 shadow-card">
      <p className="text-xs font-medium uppercase tracking-wide text-signal-500">{contact.region}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button href={links.email} variant="secondary">
          Email {contact.email}
        </Button>
        <Button href={links.phone} variant="ghost">
          Call {contact.phoneDisplay}
        </Button>
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-6 py-3 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900/30"
        >
          <WhatsAppIcon className="h-4 w-4 text-signal-600" />
          WhatsApp {contact.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

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

          <div className="mt-10 space-y-5">
            <RegionalContactBlock contact={worldwideContact} />
            <RegionalContactBlock contact={northAmericaContact} />
            <RegionalContactBlock contact={bangladeshContact} />
          </div>

          <div className="mt-8">
            <Button href="/demos" variant="ghost">
              Explore the demos first
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
