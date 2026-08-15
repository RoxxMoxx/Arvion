'use client';

import { useState } from 'react';
import type { TranscriptLine } from '@/types';

export function CallTranscript({ lines }: { lines: TranscriptLine[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl2 border border-ink-950/10 bg-paper-50 p-6 shadow-card">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={open}
      >
        <h3 className="font-display text-lg text-ink-950">Full transcript</h3>
        <span className="text-sm text-ink-500">{open ? 'Hide' : 'Show'}</span>
      </button>
      {open && (
        <div className="mt-4 max-h-72 space-y-3 overflow-y-auto pr-1">
          {lines.map((line) => (
            <div key={line.id} className="flex gap-3 text-sm">
              <span className="w-10 shrink-0 text-xs text-ink-300">{line.timeLabel}</span>
              <span className="w-16 shrink-0 text-xs font-medium uppercase tracking-wide text-ink-500">
                {line.speaker}
              </span>
              <span className="text-ink-800">{line.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
