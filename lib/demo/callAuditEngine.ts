import type { CallAnalysis, SampleCall, TranscriptLine } from '@/types';
import { analyses, failingCallIds, sampleCalls, transcripts } from '@/data/callAuditDemo';

// This module simulates "AI call analysis" by looking up hand-authored,
// deterministic demo results. It intentionally does not call any external AI
// provider — see the page's future-integration note for how a real provider
// and transcription pipeline would be wired in behind this same interface.

export function getSampleCalls(): SampleCall[] {
  return sampleCalls;
}

export function getSampleCall(callId: string): SampleCall | undefined {
  return sampleCalls.find((c) => c.id === callId);
}

export function getTranscript(callId: string): TranscriptLine[] {
  return transcripts[callId] ?? [];
}

export function getAnalysis(callId: string): CallAnalysis | undefined {
  return analyses[callId];
}

export function willFail(callId: string): boolean {
  return failingCallIds.has(callId);
}

export interface AnalyzedCallRecord {
  call: SampleCall;
  analysis: CallAnalysis;
  analyzedAt: number;
}

export interface DashboardSummary {
  callsAnalyzed: number;
  averageScore: number | null;
  commonIssues: string[];
  missedOpportunities: string[];
  improvementAreas: string[];
}

function topUnique(items: string[], limit: number): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const item of items) {
    if (!seen.has(item)) {
      seen.add(item);
      out.push(item);
    }
    if (out.length >= limit) break;
  }
  return out;
}

export function computeDashboardSummary(records: AnalyzedCallRecord[]): DashboardSummary {
  if (records.length === 0) {
    return { callsAnalyzed: 0, averageScore: null, commonIssues: [], missedOpportunities: [], improvementAreas: [] };
  }
  const averageScore = Math.round(
    records.reduce((sum, r) => sum + r.analysis.scores.overall, 0) / records.length
  );
  const commonIssues = topUnique(records.flatMap((r) => r.analysis.objections), 4);
  const missedOpportunities = topUnique(records.flatMap((r) => r.analysis.missedOpportunities), 4);
  const improvementAreas = topUnique(records.flatMap((r) => r.analysis.recommendedImprovements), 4);

  return { callsAnalyzed: records.length, averageScore, commonIssues, missedOpportunities, improvementAreas };
}

/** Simulated processing time so the "analysis" reads as genuine work being done. */
export function simulatedProcessingTime(): number {
  return 1800 + Math.random() * 900;
}
