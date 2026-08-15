import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import './globals.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arvion.ai'),
  title: {
    default: 'Arvion — Turn Your Business Into an AI-Powered Business',
    template: '%s | Arvion',
  },
  description:
    'Arvion connects your website, bookings, conversations, marketing and business workflows into one intelligent growth platform for hotels, restaurants, retail, clinics and growing SMEs.',
  openGraph: {
    title: 'Arvion — Business Growth Infrastructure, Powered by AI',
    description:
      'Websites, bookings, AI conversations, customer support, marketing and business automation — connected in one intelligent growth platform.',
    url: 'https://arvion.ai',
    siteName: 'Arvion',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arvion — Business Growth Infrastructure, Powered by AI',
    description:
      'Websites, bookings, AI conversations, customer support, marketing and business automation — connected in one intelligent growth platform.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
