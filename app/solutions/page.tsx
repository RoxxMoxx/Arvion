import type { Metadata } from 'next';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Websites, bookings, AI conversations, customer support, marketing and business automation — connected in one intelligent growth platform.',
};

export default function SolutionsPage() {
  return (
    <main className="pt-8">
      <SolutionsGrid />
    </main>
  );
}
