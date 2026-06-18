"use client";

import { useState } from "react";
import { Check, Compass } from "lucide-react";
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

function IgGlyph({ s }: { s: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
    </svg>
  );
}
function XGlyph({ s }: { s: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="#fff">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function FbGlyph({ s }: { s: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="#fff">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3v8h4z" />
    </svg>
  );
}
function LinkGlyph({ s }: { s: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 1 0-7-7l-1 1" />
      <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 1 0 7 7l1-1" />
    </svg>
  );
}
function SaveGlyph({ s }: { s: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

const IG_GRADIENT =
  "radial-gradient(circle at 30% 110%, #fdf497 0%, #fd5949 45%, #d6249f 62%, #285aeb 95%)";

export function ShareButtons({
  type,
  compact = false,
}: {
  type: BibleType;
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const pageUrl = () => window.location.href;
  const shareText = `I'm ${type.character}${
    type.title ? ` — ${type.title}` : ""
  }. Which Bible character are you?`;
  const open = (href: string) =>
    window.open(href, "_blank", "noopener,noreferrer");
  const copyLink = () => {
    navigator.clipboard?.writeText(pageUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  // Instagram has no web share URL — the real path is sharing/saving an image.
  // Mobile: native share with the result card file (Stories etc.). Desktop:
  // download the PNG so it can be posted manually.
  const imgUrl = `/types/${type.id}/share-image`;
  const downloadImage = async () => {
    try {
      const blob = await (await fetch(imgUrl)).blob();
      const href = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = href;
      a.download = `bible-character-${type.id}.png`;
      a.click();
      URL.revokeObjectURL(href);
    } catch {
      open(imgUrl);
    }
  };
  const shareImage = async () => {
    try {
      const blob = await (await fetch(imgUrl)).blob();
      const file = new File([blob], `bible-character-${type.id}.png`, {
        type: blob.type || "image/png",
      });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text: shareText });
        return;
      }
    } catch {
      /* fall through to download */
    }
    downloadImage();
  };
  const ring =
    "grid place-items-center rounded-full text-white shadow-sm transition-transform hover:scale-105";
  const dim = compact ? "h-9 w-9" : "h-12 w-12";
  const gs = compact ? 16 : 20;
  return (
    <div className={`flex items-center justify-center ${compact ? "gap-2.5" : "gap-4"}`}>
      <button
        aria-label="Share to Instagram"
        onClick={shareImage}
        className={`${ring} ${dim}`}
        style={{ background: IG_GRADIENT }}
      >
        <IgGlyph s={gs} />
      </button>
      <button
        aria-label="Share on X"
        onClick={() => open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl())}`)}
        className={`${ring} ${dim} bg-black`}
      >
        <XGlyph s={compact ? 14 : 17} />
      </button>
      <button
        aria-label="Share on Facebook"
        onClick={() => open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl())}`)}
        className={`${ring} ${dim} bg-[#1877f2]`}
      >
        <FbGlyph s={gs} />
      </button>
      <button
        aria-label="Copy link"
        onClick={copyLink}
        className={`${ring} ${dim} bg-primary`}
      >
        {copied ? <Check size={gs} /> : <LinkGlyph s={gs} />}
      </button>
      <button
        aria-label="Save image"
        onClick={downloadImage}
        className={`${ring} ${dim} bg-[#7a5a14]`}
      >
        <SaveGlyph s={gs} />
      </button>
    </div>
  );
}
