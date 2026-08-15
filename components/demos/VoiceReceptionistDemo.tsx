'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReceptionistState } from '@/types';
import { initialReceptionistState, processUserMessage, createMessage } from '@/lib/demo/voiceReceptionistEngine';
import { ChatBubble } from '@/components/demos/ChatBubble';
import { BookingPanel } from '@/components/demos/BookingPanel';

const QUICK_REPLIES = [
  'Do you have a room available this weekend?',
  "What's your cancellation policy?",
  'Is parking included?',
];

// Simulated "AI is thinking" delay — deliberately variable so it reads as a
// live conversation rather than a scripted playback.
function simulatedThinkTime() {
  return 650 + Math.random() * 550;
}

export function VoiceReceptionistDemo() {
  const [state, setState] = useState<ReceptionistState>(() => initialReceptionistState());
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [connectionIssue, setConnectionIssue] = useState(false);
  const [lastUserText, setLastUserText] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [state.messages, isThinking, connectionIssue]);

  function runTurn(text: string) {
    if (!text.trim() || isThinking) return;
    setLastUserText(text);
    setInput('');
    setIsThinking(true);

    // Reflect the customer message immediately, then simulate AI processing time.
    setState((prev) => ({ ...prev, messages: [...prev.messages, createMessage('customer', text)] }));

    window.setTimeout(() => {
      setState((prev) => {
        // Re-run against the pre-customer-message state to avoid double-appending;
        // processUserMessage appends the customer message itself.
        const withoutOptimisticCustomer = { ...prev, messages: prev.messages.slice(0, -1) };
        const { state: nextState } = processUserMessage(withoutOptimisticCustomer, text);
        return nextState;
      });
      setIsThinking(false);
    }, simulatedThinkTime());
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    runTurn(input);
  }

  function simulateConnectionIssue() {
    if (isThinking) return;
    setConnectionIssue(true);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, createMessage('system', 'Connection interrupted — reconnecting...')],
    }));
    window.setTimeout(() => {
      setConnectionIssue(false);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, createMessage('system', 'Reconnected. You can continue the conversation.')],
      }));
    }, 1400);
  }

  function retryLast() {
    if (lastUserText) runTurn(lastUserText);
  }

  const disabled = isThinking || connectionIssue;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <div className="flex h-[560px] flex-col rounded-xl2 border border-ink-950/10 bg-paper-50 shadow-card">
        <div className="flex items-center justify-between border-b border-ink-950/10 px-5 py-4">
          <div>
            <p className="font-display text-lg text-ink-950">Arvion Grand Hotel — AI Receptionist</p>
            <p className="text-xs text-ink-500">Simulated call · not a live phone line</p>
          </div>
          <button
            type="button"
            onClick={simulateConnectionIssue}
            disabled={disabled}
            className="rounded-full border border-ink-950/15 px-3 py-1.5 text-xs font-medium text-ink-700 transition-colors hover:border-ink-950/30 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Simulate connection issue
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
          {state.messages.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))}
          {isThinking && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-paper-100 px-4 py-2.5 text-sm text-ink-500">
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-300 [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-300 [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-300" />
                </span>
              </div>
            </div>
          )}
          {connectionIssue && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={retryLast}
                className="text-xs font-medium text-signal-500 underline underline-offset-2"
              >
                Tap to retry now
              </button>
            </div>
          )}
        </div>

        <div className="border-t border-ink-950/10 p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply}
                type="button"
                onClick={() => runTurn(reply)}
                disabled={disabled}
                className="rounded-full border border-ink-950/10 bg-paper-100 px-3 py-1.5 text-xs text-ink-700 transition-colors hover:border-signal-500/40 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {reply}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <label htmlFor="receptionist-input" className="sr-only">
              Type your message to the AI receptionist
            </label>
            <input
              id="receptionist-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={disabled}
              placeholder="Type what you'd say on a call..."
              className="flex-1 rounded-full border border-ink-950/15 bg-paper-50 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={disabled || !input.trim()}
              className="rounded-full bg-ink-950 px-5 py-2.5 text-sm font-medium text-paper-50 transition-colors hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <BookingPanel lead={state.capturedLead} />
    </div>
  );
}
