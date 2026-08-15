import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: 'bg-ink-950 text-paper-50 hover:bg-ink-800',
  secondary: 'bg-signal-500 text-paper-50 hover:bg-signal-600',
  ghost: 'bg-transparent text-ink-900 border border-ink-900/15 hover:border-ink-900/30',
};

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
