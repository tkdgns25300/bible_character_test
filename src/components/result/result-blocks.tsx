import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Gift, Heart, ScrollText, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ShareButtons } from "@/components/result/share-card";
import { typeImageSrc } from "@/lib/queries";
import type { BibleType, Verse as VerseType } from "@/types/domain";

const SECTION = "mx-auto w-full max-w-[680px] px-5 md:px-8";
const LABEL = "text-sm font-bold uppercase tracking-widest text-gold-ink";

// Placeholder for content not yet authored / pastor-reviewed.
function Placeholder({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 rounded-card border border-dashed border-line-strong bg-surface-2/60 p-4 text-[15px] leading-relaxed text-ink-faint">
      {children}
    </div>
  );
}

function Verse({ verse }: { verse: VerseType }) {
  return (
    <div className="border-l-[3px] border-primary pl-4">
      <p className="font-serif text-xl italic leading-relaxed">“{verse.text}”</p>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-sm font-bold">{verse.ref}</span>
        <span className="rounded border border-line bg-surface-2 px-1.5 py-0.5 text-[11px] font-bold tracking-wider text-ink-faint">
          {verse.translation}
        </span>
      </div>
    </div>
  );
}

export function Personality({ type }: { type: BibleType }) {
  if (!type.lines?.length) return null;
  return (
    <section className={`${SECTION} py-10`}>
      <h2 className={LABEL}>What you&apos;re like</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {type.lines.map((line) => (
          <li
            key={line}
            className="flex gap-2.5 text-base leading-relaxed text-ink md:text-[17px]"
          >
            <Sparkles size={17} className="mt-1 flex-none text-primary" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SubBlock({
  icon,
  title,
  badge,
  children,
}: {
  icon: ReactNode;
  title: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-7">
      <h3 className="flex flex-wrap items-center gap-2 text-lg font-bold">
        <span className="text-primary">{icon}</span>
        {title}
        {badge ? (
          <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-sm font-semibold text-primary">
            {badge}
          </span>
        ) : null}
      </h3>
      {children}
    </div>
  );
}

export function ScriptureSection({ type }: { type: BibleType }) {
  const hasContent = Boolean(
    type.verses?.length || type.calling || type.prayer,
  );
  return (
    <section className="border-y border-line bg-surface">
      <div className={`${SECTION} py-10`}>
        <h2 className={LABEL}>In Scripture</h2>
        {type.readingRef && (
          <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-ink md:text-[17px]">
            <ScrollText size={18} className="flex-none text-primary" />
            <span>
              Read {type.character}&apos;s story in{" "}
              <span className="font-semibold">{type.readingRef}</span>.
            </span>
          </p>
        )}

        {type.verses?.length ? (
          <SubBlock icon={<BookOpen size={20} />} title="Verses for you">
            <div className="mt-4 flex flex-col gap-5">
              {type.verses.map((v) => (
                <Verse key={v.ref} verse={v} />
              ))}
            </div>
          </SubBlock>
        ) : null}

        {type.prayer ? (
          <SubBlock icon={<Heart size={20} />} title="How you might pray">
            <p className="mt-3 font-serif text-lg italic leading-relaxed text-ink-soft">
              “{type.prayer}”
            </p>
          </SubBlock>
        ) : null}

        {type.calling ? (
          <SubBlock
            icon={<Gift size={20} />}
            title="Your gift"
            badge={type.giftName}
          >
            <p className="mt-3 text-base leading-relaxed md:text-[17px]">
              {type.calling}
            </p>
          </SubBlock>
        ) : null}

        {!hasContent ? (
          <Placeholder>
            Verses, a prayer, and a reflection on your gift are pastor-reviewed
            — coming soon.
          </Placeholder>
        ) : null}
      </div>
    </section>
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
    <section className={`${SECTION} py-10`}>
      <h2 className={LABEL}>Who you click with</h2>
      <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
        {best && <MatchCard type={best} kind="best" />}
        {worst && <MatchCard type={worst} kind="worst" />}
      </div>
    </section>
  );
}

export function ShareSection() {
  return (
    <section className={`${SECTION} pb-14 pt-10`}>
      <Card className="p-6 text-center md:p-8">
        <h2 className="text-xl font-bold md:text-2xl">Share your character</h2>
        <p className="mx-auto mt-2 max-w-md text-[15px] text-ink-soft">
          Post your result or send it to a friend who should take the test.
        </p>
        <div className="mt-5">
          <ShareButtons />
        </div>
      </Card>
      <p className="mt-6 text-center text-sm text-ink-soft">
        Haven&apos;t taken the test yet?{" "}
        <Link href="/test" className="font-semibold text-primary hover:underline">
          Start the free test →
        </Link>
      </p>
    </section>
  );
}
