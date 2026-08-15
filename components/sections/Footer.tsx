import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { LogoMark } from '@/components/ui/LogoMark';
import { contactInfo, contactLinks } from '@/data/contact';

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Industries', href: '/industries' },
      { label: 'Demos', href: '/demos' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-950/5 bg-ink-950 text-paper-100">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <LogoMark size={28} />
            <p className="font-display text-xl text-paper-50">Arvion</p>
          </div>
          <p className="mt-3 max-w-xs text-sm text-paper-200/70">
            AI-powered growth and automation for modern businesses.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-medium uppercase tracking-wide text-paper-200/50">{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper-200/80 hover:text-paper-50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-paper-200/50">Get in touch</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={contactLinks.email} className="text-sm text-paper-200/80 hover:text-paper-50">
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a href={contactLinks.phone} className="text-sm text-paper-200/80 hover:text-paper-50">
                {contactInfo.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contactLinks.whatsapp} className="text-sm text-paper-200/80 hover:text-paper-50">
                WhatsApp: {contactInfo.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-paper-50/10 py-6 text-xs text-paper-200/50">
        © {new Date().getFullYear()} Arvion. All rights reserved.
      </Container>
    </footer>
  );
}
