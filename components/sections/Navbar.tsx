import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import type { NavLink } from '@/types';

const links: NavLink[] = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Demos', href: '/demos' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-950/5 bg-paper-50/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl text-ink-950">
          Arvion
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-ink-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href="/audit" variant="secondary" className="hidden sm:inline-flex">
          Get a Free Audit
        </Button>
      </Container>
    </header>
  );
}
