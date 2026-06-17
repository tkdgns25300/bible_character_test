import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { ShareButtons } from "@/components/result/share-card";
import { typeImageSrc } from "@/lib/queries";
import type { BibleType } from "@/types/domain";

const WRAP = "mx-auto w-full max-w-[800px] px-5 py-12 md:px-8 md:py-14";
const LABEL = "text-sm font-bold uppercase tracking-widest text-gold-ink";
const SUBLABEL = "text-xs font-bold uppercase tracking-wider text-ink-faint";

function Placeholder({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-card border border-dashed border-line-strong bg-surface/70 p-5 text-[15px] leading-relaxed text-ink-faint">
      {children}
    </div>
  );
}

export function ResultProfile({
  type,
  best,
  worst,
}: {
  type: BibleType;
  best?: BibleType;
  worst?: BibleType;
}) {
  const accent = type.accent ?? "var(--color-gold)";
  const hasScripture = Boolean(
    type.verses?.length || type.calling || type.prayer,
  );
  return (
    <>
      {/* 1 — Identity */}
      <section className="border-b border-line-strong bg-surface">
        <div className={WRAP}>
          <div className="flex flex-col items-center text-center">
            <div
              className="rounded-[28px] p-2.5 shadow-md"
              style={{ backgroundColor: accent }}
            >
              <div className="overflow-hidden rounded-[20px]">
                <Image
                  src={typeImageSrc(type.id)}
                  alt={type.character}
                  width={576}
                  height={576}
                  priority
                  className="h-56 w-56 object-cover sm:h-64 sm:w-64"
                />
              </div>
            </div>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-none md:text-6xl">
              {type.character}
            </h1>
            {type.title && (
              <p className="mt-3 text-xl font-bold text-primary">{type.title}</p>
            )}
            {type.traits?.length ? (
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.13em]">
                {type.traits.map((trait, i) => (
                  <span key={trait}>
                    {i > 0 && <span className="mx-2 text-line-strong">·</span>}
                    <span className="text-ink-soft">{trait}</span>
                  </span>
                ))}
              </p>
            ) : null}
          </div>

          {(best || worst) && (
            <div className="mx-auto mt-9 grid max-w-xl gap-3 sm:grid-cols-2">
              {best && <MatchCard type={best} kind="best" />}
              {worst && <MatchCard type={worst} kind="worst" />}
            </div>
          )}
        </div>
      </section>

      {/* 2 — What you're like */}
      {type.lines?.length ? (
        <section className="border-b border-line-strong bg-surface-2">
          <div className={WRAP}>
            <h2 className={LABEL}>What you&apos;re like</h2>
            <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {type.lines.map((line) => (
                <div key={line} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary-50 text-primary">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-[15.5px] leading-snug text-ink">
                    {line}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 3 — In Scripture */}
      <section className="border-b border-line-strong bg-surface">
        <div className={WRAP}>
          <h2 className={LABEL}>In Scripture</h2>
          {type.readingRef && (
            <p className="mt-3 text-[15px] text-ink-soft">
              Read {type.character}&apos;s story in{" "}
              <span className="font-semibold text-ink">{type.readingRef}</span>.
            </p>
          )}

          {hasScripture ? (
            <div className="mt-7 flex flex-col gap-8">
              {type.verses?.length ? (
                <div>
                  <div className={SUBLABEL}>Verses for you</div>
                  <div className="mt-3 flex flex-col gap-5 border-l-[3px] border-primary pl-5">
                    {type.verses.map((v) => (
                      <div key={v.ref}>
                        <p className="font-serif text-xl italic leading-relaxed text-ink">
                          “{v.text}”
                        </p>
                        <div className="mt-2 text-sm font-semibold text-ink-soft">
                          {v.ref}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {type.prayer ? (
                <div>
                  <div className={SUBLABEL}>How you might pray</div>
                  <p className="mt-3 border-l-[3px] border-primary pl-5 font-serif text-xl italic leading-relaxed text-ink">
                    “{type.prayer}”
                  </p>
                </div>
              ) : null}

              {type.calling ? (
                <div>
                  <div className={SUBLABEL}>Your gift</div>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink">
                    {type.calling}
                  </p>
                </div>
              ) : null}
            </div>
          ) : (
            <Placeholder>
              Verses, a prayer, and a reflection on your gift are coming soon.
            </Placeholder>
          )}
        </div>
      </section>
    </>
  );
}

function MatchCard({ type, kind }: { type: BibleType; kind: "best" | "worst" }) {
  const isBest = kind === "best";
  const label = isBest ? "Clicks with" : "Clashes with";
  return (
    <Link
      href={`/types/${type.id}`}
      className={`flex flex-col items-center gap-2 rounded-2xl border p-5 text-center transition hover:shadow-md ${
        isBest
          ? "border-[#cbe6d9] bg-[#eef7f1]"
          : "border-[#e7d6a8] bg-[#f8f0e2]"
      }`}
    >
      <Avatar
        src={typeImageSrc(type.id)}
        alt={type.character}
        initial={type.character.charAt(0)}
        accent={type.accent}
        size={48}
      />
      <span
        className={`text-[11px] font-bold uppercase tracking-[0.14em] ${
          isBest ? "text-primary" : "text-gold-ink"
        }`}
      >
        {label}
      </span>
      <span className="font-bold leading-tight">{type.character}</span>
    </Link>
  );
}

export function ShareSection() {
  return (
    <section className="mx-auto w-full max-w-[800px] px-5 pb-14 pt-10 md:px-8">
      <div className="flex flex-col items-center gap-4">
        <ShareButtons />
        <p className="text-sm text-ink-soft">
          Haven&apos;t taken the test yet?{" "}
          <Link href="/test" className="font-semibold text-primary hover:underline">
            Start the free test →
          </Link>
        </p>
      </div>
    </section>
  );
}
