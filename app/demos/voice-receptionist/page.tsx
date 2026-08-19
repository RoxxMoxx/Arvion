import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { VoiceReceptionistDemo } from '@/components/demos/VoiceReceptionistDemo';

export const metadata: Metadata = {
  title: 'AI Voice Receptionist Demo',
  description:
    'Try a simulated hotel guest call handled by an AI receptionist — availability, booking, and lead capture on illustrative demo data.',
};

export default function VoiceReceptionistPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Demo"
          title="AI Voice Receptionist"
          description="Try a simulated guest call for the Simrion Grand Hotel, an illustrative demo business. Ask about availability, book a room, or ask a question — then see what a real front-desk dashboard would capture."
        />
        <div className="mt-6 rounded-xl border border-ink-950/10 bg-paper-100 px-4 py-3 text-sm text-ink-600">
          This is a frontend simulation running on demo data. It is not connected to a live phone
          system, a real hotel, or a production AI provider. See{' '}
          <a href="#future-integration" className="underline underline-offset-2">
            future integration
          </a>{' '}
          below.
        </div>

        <div className="mt-10">
          <VoiceReceptionistDemo />
        </div>

        <div id="future-integration" className="mt-16 max-w-2xl border-t border-ink-950/10 pt-8 text-sm text-ink-500">
          <h2 className="font-display text-lg text-ink-950">How this connects to a real deployment</h2>
          <p className="mt-3">
            In production, this same conversation surface would be backed by a real AI provider and
            telephony integration, with the demo&apos;s deterministic logic replaced by an
            <code className="mx-1 rounded bg-ink-950/5 px-1.5 py-0.5 text-xs">AI_PROVIDER</code>
            /<code className="mx-1 rounded bg-ink-950/5 px-1.5 py-0.5 text-xs">AI_API_KEY</code>
            environment-configured call, and the captured lead written to Supabase instead of
            in-memory component state.
          </p>
        </div>
      </Container>
    </main>
  );
}
