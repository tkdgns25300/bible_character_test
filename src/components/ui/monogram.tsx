// Accent ring + character initial. `accent` is a per-type hex (data); falls back
// to the primary token when unset. (Per-type lucide icon added once assigned.)
export function Monogram({
  initial,
  accent,
  size = 56,
}: {
  initial: string;
  accent?: string;
  size?: number;
}) {
  const c = accent ?? "var(--color-primary)";
  return (
    <div
      className="grid flex-none place-items-center rounded-full border-[1.5px] font-serif font-semibold"
      style={{
        width: size,
        height: size,
        background: `color-mix(in srgb, ${c} 13%, #fff)`,
        borderColor: `color-mix(in srgb, ${c} 38%, #fff)`,
        color: c,
        fontSize: size * 0.4,
      }}
    >
      {initial}
    </div>
  );
}
