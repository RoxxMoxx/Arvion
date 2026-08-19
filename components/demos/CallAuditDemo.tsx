'use client';

import { useRef, useState } from 'react';
import type { CallAnalysis, SampleCall } from '@/types';
import {
  computeDashboardSummary,
  getAnalysis,
  getSampleCall,
  getSampleCalls,
  getTranscript,
  willFail,
  type AnalyzedCallRecord,
} from '@/lib/demo/callAuditEngine';
import { CallSelector } from '@/components/demos/CallSelector';
import { CallProcessingState } from '@/components/demos/CallProcessingState';
import { CallScoreSummary } from '@/components/demos/CallScoreSummary';
import { CallTimeline } from '@/components/demos/CallTimeline';
import { CallCoachingPanel } from '@/components/demos/CallCoachingPanel';
import { CallInsightPanel } from '@/components/demos/CallInsightPanel';
import { CallTranscript } from '@/components/demos/CallTranscript';
import { CallAuditDashboard } from '@/components/demos/CallAuditDashboard';

type Phase = 'empty' | 'loading' | 'processing' | 'completed' | 'error';

function wait(ms: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, ms));
}

export function CallAuditDemo() {
  const [phase, setPhase] = useState<Phase>('empty');
  const [selectedCallId, setSelectedCallId] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [currentAnalysis, setCurrentAnalysis] = useState<CallAnalysis | null>(null);
  const [history, setHistory] = useState<AnalyzedCallRecord[]>([]);
  const runIdRef = useRef(0);

  const calls = getSampleCalls();
  const selectedCall: SampleCall | undefined = selectedCallId ? getSampleCall(selectedCallId) : undefined;
  const summary = computeDashboardSummary(history);
  const busy = phase === 'loading' || phase === 'processing';

  async function runAnalysis(callId: string) {
    const runId = ++runIdRef.current;
    setSelectedCallId(callId);
    setCurrentAnalysis(null);
    setPhase('loading');
    setActiveStep(0);

    await wait(500);
    if (runIdRef.current !== runId) return;
    setPhase('processing');
    setActiveStep(1);

    await wait(650);
    if (runIdRef.current !== runId) return;
    setActiveStep(2);

    await wait(700);
    if (runIdRef.current !== runId) return;
    setActiveStep(3);

    await wait(600);
    if (runIdRef.current !== runId) return;

    if (willFail(callId)) {
      setPhase('error');
      return;
    }

    const analysis = getAnalysis(callId);
    const call = getSampleCall(callId);
    if (!analysis || !call) {
      setPhase('error');
      return;
    }

    setCurrentAnalysis(analysis);
    setPhase('completed');
    setHistory((prev) => [...prev, { call, analysis, analyzedAt: Date.now() }]);
  }

  function reset() {
    runIdRef.current += 1; // invalidate any in-flight run
    setPhase('empty');
    setSelectedCallId(null);
    setCurrentAnalysis(null);
  }

  function retry() {
    if (selectedCallId) runAnalysis(selectedCallId);
  }

  const transcript = selectedCallId ? getTranscript(selectedCallId) : [];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-6">
        <div className="rounded-xl2 border border-ink-950/10 bg-paper-50 p-6 shadow-card">
          <CallSelector calls={calls} selectedCallId={selectedCallId} disabled={busy} onSelect={runAnalysis} />
        </div>

        {phase === 'empty' && (
          <div className="rounded-xl2 border border-dashed border-ink-950/15 p-10 text-center text-sm text-ink-300">
            Select a sample call above to see Simrion analyze it.
          </div>
        )}

        {busy && selectedCall && (
          <div>
            <p className="mb-3 text-sm text-ink-500">
              Analyzing <span className="font-medium text-ink-900">{selectedCall.title}</span>
            </p>
            <CallProcessingState activeStep={activeStep} />
          </div>
        )}

        {phase === 'error' && selectedCall && (
          <div className="rounded-xl2 border border-signal-500/30 bg-signal-500/5 p-6">
            <p className="font-display text-lg text-ink-950">Analysis failed</p>
            <p className="mt-1 text-sm text-ink-700">
              {selectedCall.title} could not be processed — the audio quality was too low for this
              demo&apos;s simulated transcription step. This is included intentionally to show how
              Simrion handles a failed analysis.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={retry}
                className="rounded-full bg-ink-950 px-4 py-2 text-sm font-medium text-paper-50 hover:bg-ink-800"
              >
                Retry analysis
              </button>
              <button
                type="button"
                onClick={reset}
                className="rounded-full border border-ink-950/15 px-4 py-2 text-sm font-medium text-ink-700 hover:border-ink-950/30"
              >
                Choose a different call
              </button>
            </div>
          </div>
        )}

        {phase === 'completed' && currentAnalysis && selectedCall && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-300">Analysis complete</p>
                <p className="font-display text-lg text-ink-950">{selectedCall.title}</p>
              </div>
              <button
                type="button"
                onClick={reset}
                className="rounded-full border border-ink-950/15 px-4 py-2 text-sm font-medium text-ink-700 hover:border-ink-950/30"
              >
                Analyze another call
              </button>
            </div>

            <CallScoreSummary scores={currentAnalysis.scores} />
            <CallTimeline moments={currentAnalysis.timeline} />
            <CallCoachingPanel coaching={currentAnalysis.coaching} />
            <CallInsightPanel analysis={currentAnalysis} />
            <CallTranscript lines={transcript} />
          </div>
        )}
      </div>

      <div className="lg:sticky lg:top-24 lg:self-start">
        <CallAuditDashboard summary={summary} />
      </div>
    </div>
  );
}
