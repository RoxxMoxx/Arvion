import type { ChatMessage } from '@/types';

export function ChatBubble({ message }: { message: ChatMessage }) {
  if (message.role === 'system') {
    return (
      <div className="my-2 flex justify-center">
        <span className="rounded-full bg-ink-950/5 px-3 py-1 text-xs text-ink-500">{message.content}</span>
      </div>
    );
  }

  const isCustomer = message.role === 'customer';
  const isError = message.kind === 'error';
  const isEscalation = message.kind === 'escalation';
  const isConfirmed = message.kind === 'booking-confirmed';

  return (
    <div className={`flex ${isCustomer ? 'justify-end' : 'justify-start'}`}>
      <div
        className={[
          'max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed sm:max-w-[75%]',
          isCustomer
            ? 'bg-ink-950 text-paper-50'
            : isError
              ? 'border border-signal-500/30 bg-signal-500/10 text-ink-800'
              : isEscalation
                ? 'border border-ink-950/20 bg-paper-100 text-ink-800'
                : isConfirmed
                  ? 'border border-signal-500/40 bg-signal-500/15 text-ink-950'
                  : 'bg-paper-100 text-ink-900',
        ].join(' ')}
      >
        {!isCustomer && (
          <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-ink-300">
            AI Receptionist
          </span>
        )}
        {message.content}
      </div>
    </div>
  );
}
