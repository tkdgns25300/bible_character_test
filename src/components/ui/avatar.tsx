import Image from "next/image";

// Type avatar. Renders the character image (next/image → runtime WebP + sizing)
// when `src` is given; falls back to an accent ring + initial otherwise.
export function Avatar({
  src,
  alt,
  initial,
  accent,
  size = 56,
}: {
  src?: string;
  alt: string;
  initial: string;
  accent?: string;
  size?: number;
}) {
  const ring = accent ?? "var(--color-primary)";
  const base: React.CSSProperties = {
    width: size,
    height: size,
    background: `color-mix(in srgb, ${ring} 13%, #fff)`,
    borderColor: `color-mix(in srgb, ${ring} 38%, #fff)`,
  };

  if (src) {
    return (
      <span
        className="relative inline-block flex-none overflow-hidden rounded-full border-[1.5px]"
        style={base}
      >
        <Image src={src} alt={alt} fill sizes={`${size}px`} className="object-cover" />
      </span>
    );
  }

  return (
    <span
      className="grid flex-none place-items-center rounded-full border-[1.5px] font-serif font-semibold"
      style={{ ...base, color: ring, fontSize: size * 0.4 }}
    >
      {initial}
    </span>
  );
}
