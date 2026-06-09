import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Tone = "gold" | "primary" | "neutral";

const TONES: Record<Tone, string> = {
  gold: "bg-gold-soft text-gold-ink",
  primary: "bg-primary-50 text-primary-700",
  neutral: "bg-surface-2 text-ink-soft",
};

export function Badge({
  tone = "gold",
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold",
        TONES[tone],
        className,
      )}
      {...props}
    />
  );
}
