import type { ReactNode } from "react";
import { Coffee, ExternalLink, Heart, Shirt } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AMAZON_TAG, BMC_COLOR, BUY_ME_A_COFFEE_URL } from "@/constants";
import type { BibleType, BookRec } from "@/types/domain";

const COVER_BG = ["#3a6b55", "#7a5a2e", "#324a6b", "#6b3a4f"];

function bookHref(url: string) {
  if (!AMAZON_TAG) return url;
  return `${url}${url.includes("?") ? "&" : "?"}tag=${AMAZON_TAG}`;
}

function Cover({
  book,
  idx,
  className,
}: {
  book: BookRec;
  idx: number;
  className: string;
}) {
  if (book.coverImage) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={book.coverImage}
        alt={book.title}
        className={`flex-none rounded-[4px] object-cover shadow-md ${className}`}
      />
    );
  }
  return (
    <div
      className={`flex flex-none items-center justify-center rounded-[4px] p-1.5 text-center font-serif font-semibold leading-tight text-white shadow-md ${className}`}
      style={{ background: COVER_BG[idx % COVER_BG.length] }}
    >
      {book.title}
    </div>
  );
}

function ModuleCard({
  icon,
  label,
  sub,
  children,
}: {
  icon: ReactNode;
  label: string;
  sub?: string;
  children: ReactNode;
}) {
  return (
    <Card className="p-5">
      <div className="mb-3.5 flex items-center gap-2.5">
        <span className="grid h-[34px] w-[34px] place-items-center rounded-[9px] bg-surface-2 text-ink-soft">
          {icon}
        </span>
        <div>
          <div className="font-bold">{label}</div>
          {sub && <div className="text-xs text-ink-faint">{sub}</div>}
        </div>
      </div>
      {children}
    </Card>
  );
}

export function BookModule({ type }: { type: BibleType }) {
  const books = type.books ?? [];
  if (!books.length) return null;
  const [top, ...rest] = books;
  const label = type.title
    ? `A pick for the ${type.title.replace(/^The /, "")}`
    : "Recommended reading";
  return (
    <Card className="p-5">
      <div className="text-xs font-bold uppercase tracking-wider text-ink-faint">
        {label}
      </div>

      {/* Top pick */}
      <a
        href={bookHref(top.amazonUrl)}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-4 flex items-center gap-4"
      >
        <Cover book={top} idx={0} className="h-[120px] w-[80px] text-[11px]" />
        <div className="min-w-0">
          <div className="font-serif text-lg font-semibold leading-tight">
            {top.title}
          </div>
          <div className="text-sm text-ink-faint">{top.author}</div>
          {top.note ? (
            <p className="mt-2 text-sm leading-snug text-ink-soft">{top.note}</p>
          ) : null}
          <span className="mt-3 inline-flex h-9 items-center gap-1.5 rounded-btn bg-primary px-4 text-xs font-bold text-white">
            View on Amazon <ExternalLink size={13} />
          </span>
        </div>
      </a>

      {/* The rest, compact */}
      {rest.length ? (
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-4">
          {rest.map((book, i) => (
            <a
              key={book.title}
              href={bookHref(book.amazonUrl)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex min-w-[150px] flex-1 items-center gap-2.5"
            >
              <Cover book={book} idx={i + 1} className="h-[54px] w-[36px] text-[7px]" />
              <span className="text-[13px] font-semibold leading-tight">
                {book.title}{" "}
                <ExternalLink size={11} className="inline text-ink-faint" />
              </span>
            </a>
          ))}
        </div>
      ) : null}

      <p className="mt-3.5 text-[11px] text-ink-faint">
        As an Amazon Associate we earn from qualifying purchases.
      </p>
    </Card>
  );
}

export function PodModule({ type }: { type: BibleType }) {
  return (
    <ModuleCard icon={<Shirt size={18} />} label="Wear your type" sub="Print-on-demand merch">
      <button className="h-10 w-full rounded-btn border border-line-strong bg-surface text-sm font-semibold hover:bg-surface-2">
        Browse {type.character} merch
      </button>
    </ModuleCard>
  );
}

export function CoffeeModule() {
  return (
    <ModuleCard icon={<Heart size={18} />} label="Support the project" sub="Keeps the test free">
      <a
        href={BUY_ME_A_COFFEE_URL}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-btn text-sm font-bold"
        style={{ background: BMC_COLOR.bg, color: BMC_COLOR.fg }}
      >
        <Coffee size={18} /> Buy me a coffee
      </a>
    </ModuleCard>
  );
}

export function AdSlot() {
  return (
    <div className="rounded-card border border-dashed border-line-strong bg-surface-2 px-4 py-6 text-center text-ink-faint">
      <div className="mb-1 text-[11px] font-bold uppercase tracking-widest">Advertisement</div>
      <div className="text-sm">Phase 2 · in-feed slot — never above the result or share buttons</div>
    </div>
  );
}
