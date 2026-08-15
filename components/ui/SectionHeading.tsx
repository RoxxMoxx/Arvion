export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal-500">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl leading-tight text-ink-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-ink-500">{description}</p>}
    </div>
  );
}
