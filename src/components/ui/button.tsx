import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-btn font-semibold whitespace-nowrap transition-colors disabled:opacity-50 disabled:pointer-events-none";

const SIZES: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-[17px]",
};

const VARIANTS: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-700",
  gold: "bg-gold text-white hover:brightness-95",
  outline: "border border-line-strong bg-surface text-ink hover:bg-surface-2",
  ghost: "text-ink-soft hover:bg-surface-2",
};

// Class string for the button look — apply to <Link> for navigation CTAs.
export function buttonVariants(opts: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}): string {
  const { variant = "primary", size = "md", className } = opts;
  return cn(BASE, SIZES[size], VARIANTS[variant], className);
}

export function Button({
  variant,
  size,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
}
