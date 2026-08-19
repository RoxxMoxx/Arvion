import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CallAuditDemo } from '@/components/demos/CallAuditDemo';

export const metadata: Metadata = {
  title: 'AI Call Audit Demo',
  description:
    'Try a simulated call analysis — score, sentiment, timeline, and coaching notes generated from illustrative demo calls.',
};

export default function CallAuditPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Demo"
          title="AI Call Audit"
          description="Select a sample recorded call and see how Simrion would analyze it — scoring, sentiment, missed opportunities, and coaching, all in one view."
        />
        <div className="mt-6 rounded-xl border border-ink-950/10 bg-paper-100 px-4 py-3 text-sm text-ink-600">
          This demo runs on hand-authored sample calls and a simulated analysis step. It is not
          connected to a real phone system or an external AI provider. See{' '}
          <a href="#future-integration" className="underline underline-offset-2">
            future integration
          </a>{' '}
          below.
        </div>

        <div className="mt-10">
          <CallAuditDemo />
        </div>

        <div id="future-integration" className="mt-16 max-w-2xl border-t border-ink-950/10 pt-8 text-sm text-ink-500">
          <h2 className="font-display text-lg text-ink-950">How this connects to a real deployment</h2>
          <p className="mt-3">
            In production, uploaded or recorded calls would be transcribed and scored by a real AI
            provider configured through <code className="mx-1 rounded bg-ink-950/5 px-1.5 py-0.5 text-xs">AI_PROVIDER</code>
            /<code className="mx-1 rounded bg-ink-950/5 px-1.5 py-0.5 text-xs">AI_API_KEY</code>, with
            recordings sourced from a real telephony integration rather than a fixed sample list, and
            results written to Supabase for reporting over time instead of held in this session only.
          </p>
        </div>
      </Container>
    </main>
  );
}
