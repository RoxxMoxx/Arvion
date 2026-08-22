import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Pay Simrion',
  description: 'Scan the QR code to send a payment to Simrion via Wise.',
};

export default function PayPage() {
  return (
    <main className="relative overflow-hidden bg-ink-1000 py-24 sm:py-32">
      {/* ambient texture, consistent with the homepage hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-signal-500/10 blur-[100px]" aria-hidden="true" />

      <Container className="relative">
        <div className="mx-auto max-w-md text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal-400">Payments</p>
          <h1 className="mt-4 font-display text-3xl text-paper-50 sm:text-4xl">Pay Simrion</h1>
          <p className="mt-3 text-sm text-paper-50/60">
            Scan the QR code below with your banking or Wise app to send a payment directly.
          </p>

          <div className="relative mt-10">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-signal-500/10 blur-3xl" aria-hidden="true" />
            <div className="mx-auto w-full max-w-xs rounded-2xl border border-paper-50/10 bg-ink-900 p-6 shadow-glow">
              <div className="overflow-hidden rounded-xl bg-paper-50 p-3">
                <Image
                  src="/pay-qr.png"
                  alt="Scan to pay Simrion via Wise"
                  width={800}
                  height={800}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-widest text-paper-50/40">
                Powered by Wise
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-sm text-sm text-paper-50">
            Thank you for choosing Simrion — we&apos;re committed to delivering the best product
            for your business. Have a great day! 😊
          </p>

          <p className="mx-auto mt-6 max-w-sm text-xs text-paper-50/40">
            Payments are processed securely by Wise. Simrion does not collect or store your
            payment details on this site. If you have questions about an invoice or amount,{' '}
            <a href="/contact" className="underline underline-offset-2 hover:text-paper-50/70">
              contact us
            </a>{' '}
            first.
          </p>
        </div>
      </Container>
    </main>
  );
}
