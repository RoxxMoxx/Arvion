import Image from 'next/image';

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-lg bg-ink-1000 p-1"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo-mark.png"
        alt="Simrion"
        width={size}
        height={size}
        className="h-full w-full object-contain"
        priority
      />
    </span>
  );
}
