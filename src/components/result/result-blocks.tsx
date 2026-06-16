import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
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

export function ResultProfile({ type }: { type: BibleType }) {
  const accent = type.accent ?? "var(--color-gold)";
  const hasScripture = Boolean(
    type.verses?.length || type.calling || type.prayer,
  );
  return (
    <>
      {/* 1 — Identity */}
      <section className="border-b border-line-strong bg-surface">
        <div className={WRAP}>
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-10 md:text-left">
            <div
              className="flex-none rounded-[28px] p-2.5 shadow-md"
              style={{ backgroundColor: accent }}
            >
              <div className="overflow-hidden rounded-[20px]">
                <Image
                  src={typeImageSrc(type.id)}
                  alt={type.character}
                  width={576}
                  height={576}
                  priority
                  className="h-64 w-64 object-cover sm:h-72 sm:w-72"
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold-ink">
                You are
              </span>
              <h1 className="mt-2 font-serif text-5xl font-semibold leading-none md:text-6xl">
                {type.character}
              </h1>
              {type.title && (
                <p className="mt-3 text-xl font-bold text-primary">
                  {type.title}
                </p>
              )}
              {type.summary && (
                <p className="mt-4 max-w-md text-[16.5px] leading-relaxed text-ink-soft">
                  {type.summary}
                </p>
              )}
              {type.traits?.length ? (
                <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                  {type.traits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full bg-surface-2 px-3 py-1 text-sm font-semibold text-ink-soft"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
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
              Verses, a prayer, and a reflection on your gift are
              pastor-reviewed — coming soon.
            </Placeholder>
          )}
        </div>
      </section>
    </>
  );
}

function MatchCard({ type, kind }: { type: BibleType; kind: "best" | "worst" }) {
  const label = kind === "best" ? "Best match" : "Toughest match";
  const labelClass = kind === "best" ? "text-primary" : "text-gold-ink";
  return (
    <Link href={`/types/${type.id}`}>
      <Card className="flex items-center gap-3.5 p-4 hover:shadow-md">
        <Avatar
          src={typeImageSrc(type.id)}
          alt={type.character}
          initial={type.character.charAt(0)}
          accent={type.accent}
          size={44}
        />
        <div className="flex-1">
          <div className={`text-xs font-bold uppercase tracking-widest ${labelClass}`}>
            {label}
          </div>
          <div className="font-bold">{type.character}</div>
          {type.title && <div className="text-sm text-ink-faint">{type.title}</div>}
        </div>
        <ArrowRight size={18} className="text-ink-faint" />
      </Card>
    </Link>
  );
}

export function Matches({ best, worst }: { best?: BibleType; worst?: BibleType }) {
  if (!best && !worst) return null;
  return (
    <section className="border-b border-line-strong bg-surface-2">
      <div className={WRAP}>
        <h2 className={LABEL}>Who you click with</h2>
        <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
          {best && <MatchCard type={best} kind="best" />}
          {worst && <MatchCard type={worst} kind="worst" />}
        </div>
      </div>
    </section>
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
