import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Flame, ScrollText, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { typeImageSrc } from "@/lib/queries";
import type { BibleType, Verse as VerseType } from "@/types/domain";

function ResultBlock({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-[11px] bg-primary-50 text-primary">
          {icon}
        </span>
        <h3 className="text-lg font-bold">{label}</h3>
      </div>
      {children}
    </Card>
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

export function ResultBody({ type }: { type: BibleType }) {
  return (
    <div className="flex flex-col gap-4">
      {type.lines?.length ? (
        <ResultBlock icon={<Sparkles size={20} />} label="What you're like">
          <ul className="flex flex-col gap-2.5">
            {type.lines.map((line) => (
              <li key={line} className="text-[15.5px] leading-snug text-ink">
                {line}
              </li>
            ))}
          </ul>
        </ResultBlock>
      ) : null}
      {type.calling ? (
        <ResultBlock icon={<Flame size={20} />} label="Spiritual calling">
          <p className="text-[16.5px] leading-relaxed">{type.calling}</p>
        </ResultBlock>
      ) : null}
      {type.verses?.length ? (
        <ResultBlock icon={<BookOpen size={20} />} label="Verses for you">
          <div className="flex flex-col gap-5">
            {type.verses.map((verse) => (
              <Verse key={verse.ref} verse={verse} />
            ))}
          </div>
        </ResultBlock>
      ) : null}
      {type.readingRef ? (
        <div className="flex items-center gap-2 text-sm text-ink-faint">
          <ScrollText size={16} /> Read more: {type.readingRef}
        </div>
      ) : null}
    </div>
  );
}

export function ComingSoon({ character }: { character: string }) {
  return (
    <Card className="p-8 text-center">
      <h3 className="text-xl font-bold">Full profile coming soon</h3>
      <p className="mx-auto mt-2 max-w-md text-ink-soft">
        {character}&apos;s complete profile, calling, and verses are being written
        and pastor-reviewed.
      </p>
    </Card>
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
    <section className="mx-auto w-full max-w-[1080px] px-5 pb-12 md:px-8">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold-ink">
        Who you click with
      </h2>
      <div className="grid gap-3.5 sm:grid-cols-2">
        {best && <MatchCard type={best} kind="best" />}
        {worst && <MatchCard type={worst} kind="worst" />}
      </div>
    </section>
  );
}
