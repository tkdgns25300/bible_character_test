export function Progress({ value, max }: { value: number; max: number }) {
  const pct = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)) : 0;
  return (
    <div className="h-2 w-full overflow-hidden rounded-full border border-line bg-surface-2">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-gold transition-[width] duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
