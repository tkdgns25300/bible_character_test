import type { ReactNode } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, BookOpen, Flame, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Monogram } from "@/components/ui/monogram";
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

function TraitList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="text-[15.5px] leading-snug text-ink">
          {item}
        </li>
      ))}
    </ul>
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
      <div className="grid gap-4 sm:grid-cols-2">
        {type.strengths?.length ? (
          <ResultBlock icon={<Sparkles size={20} />} label="Strengths">
            <TraitList items={type.strengths} />
          </ResultBlock>
        ) : null}
        {type.weaknesses?.length ? (
          <ResultBlock icon={<AlertCircle size={20} />} label="Watch-outs">
            <TraitList items={type.weaknesses} />
          </ResultBlock>
        ) : null}
      </div>
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
    </div>
  );
}

export function ComingSoon({ character }: { character: string }) {
  return (
    <Card className="p-8 text-center">
      <h3 className="text-xl font-bold">Full profile coming soon</h3>
      <p className="mx-auto mt-2 max-w-md text-ink-soft">
        {character}&apos;s complete strengths, calling, and verses are being written
        and pastor-reviewed.
      </p>
    </Card>
  );
}

export function RelatedTypes({ types }: { types: BibleType[] }) {
  if (!types.length) return null;
  return (
    <section className="mx-auto w-full max-w-[1080px] px-5 pb-12 md:px-8">
      <h2 className="text-sm font-bold uppercase tracking-widest text-gold-ink">
        Characters near you
      </h2>
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
        {types.map((r) => (
          <Link key={r.id} href={`/types/${r.id}`}>
            <Card className="flex items-center gap-3.5 p-4 hover:shadow-md">
              <Monogram initial={r.character.charAt(0)} accent={r.accent} size={44} />
              <div className="flex-1">
                <div className="font-bold">{r.character}</div>
                <div className="text-sm text-ink-faint">{r.title ?? "Profile coming soon"}</div>
              </div>
              <ArrowRight size={18} className="text-ink-faint" />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
