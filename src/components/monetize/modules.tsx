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

export function BookStrip({ type, id }: { type: BibleType; id?: string }) {
  const books = type.books ?? [];
  if (!books.length) return null;
  const top = books[0];
  return (
    <div id={id} className="mx-auto mt-6 max-w-xl">
      <a
        href={bookHref(top.amazonUrl)}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 transition hover:shadow-md"
      >
        <Cover book={top} idx={0} className="h-[52px] w-[35px] text-[7px]" />
        <div className="min-w-0 text-left">
          <div className="text-[10px] font-bold uppercase tracking-wider text-gold-ink">
            Read next
          </div>
          <div className="truncate font-serif text-[15px] font-semibold leading-tight">
            {top.title}
          </div>
          <div className="truncate text-xs text-ink-faint">{top.author}</div>
        </div>
        <span className="ml-auto inline-flex h-9 flex-none items-center gap-1.5 rounded-btn bg-primary px-4 text-xs font-bold text-white">
          View <ExternalLink size={13} />
        </span>
      </a>
      <p className="mt-2 text-center text-[10px] text-ink-faint">
        As an Amazon Associate we earn from qualifying purchases.
      </p>
    </div>
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
