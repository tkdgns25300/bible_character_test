"use client";

import { useState } from "react";
import { Check, Compass, Link2 } from "lucide-react";
import type { BibleType } from "@/types/domain";

// First-class share surface (on-page preview). The OG image route reuses this
// design later (opengraph-image.tsx — deferred).
function ShareCard({ type, format }: { type: BibleType; format: "square" | "story" }) {
  const accent = type.accent ?? "var(--color-gold)";
  const keyTrait = type.traits?.[0] ?? type.lines?.[0];
  return (
    <div
      className={`relative overflow-hidden rounded-card bg-primary text-white shadow-xl ${
        format === "story" ? "aspect-[9/16] w-60" : "aspect-square w-80"
      }`}
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(120% 90% at 80% -10%, color-mix(in srgb, var(--accent) 55%, transparent), transparent 55%)",
        }}
      />
      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold opacity-90">
            <Compass size={16} /> Bible Character Test
          </span>
          <span className="rounded-full border border-white/40 px-2 py-0.5 text-[10px] font-bold tracking-widest text-gold-soft">
            SAMPLE
          </span>
        </div>
        <div className="text-center">
          <div
            className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2"
            style={{
              background: "color-mix(in srgb, var(--accent) 22%, transparent)",
              borderColor: "color-mix(in srgb, var(--accent) 60%, #fff)",
            }}
          >
            <Compass size={28} />
          </div>
          <div className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
            You are
          </div>
          <div className="font-serif text-4xl font-semibold leading-none">{type.character}</div>
          {type.title && <div className="mt-2 text-sm font-semibold">{type.title}</div>}
        </div>
        <div className="text-center">
          {keyTrait && (
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm">
              {keyTrait}
            </span>
          )}
          <div className="mt-3 text-xs text-white/70">biblecharactertest.com</div>
        </div>
      </div>
    </div>
  );
}

export function ShareCardPreview({ type }: { type: BibleType }) {
  const [format, setFormat] = useState<"square" | "story">("square");
  const tabs = [
    ["square", "1:1 Post"],
    ["story", "9:16 Story"],
  ] as const;
  return (
    <div className="flex flex-col items-center gap-3">
      <ShareCard type={type} format={format} />
      <div className="inline-flex rounded-full border border-line bg-surface-2 p-1">
        {tabs.map(([value, label]) => (
          <button
            key={value}
            onClick={() => setFormat(value)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
              format === value ? "bg-surface text-ink shadow-xs" : "text-ink-faint"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ShareButtons() {
  const [copied, setCopied] = useState(false);
  // Brand icons were dropped from lucide; labels only until real share intents wire up.
  const socials = ["Instagram", "X", "Facebook"];
  const btn =
    "inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink";
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <span className="mr-1 text-sm font-semibold text-ink-faint">Share</span>
      {socials.map((label) => (
        <button key={label} className={btn}>
          {label}
        </button>
      ))}
      <button
        className={btn}
        onClick={() => {
          navigator.clipboard?.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        }}
      >
        {copied ? <Check size={15} /> : <Link2 size={15} />} {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
