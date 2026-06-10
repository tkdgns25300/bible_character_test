import type { ReactNode } from "react";
import { BookOpen, Coffee, ExternalLink, Heart, Shirt } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BMC_COLOR, BUY_ME_A_COFFEE_URL } from "@/constants";
import type { BibleType } from "@/types/domain";

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
  return (
    <ModuleCard icon={<BookOpen size={18} />} label="Recommended reading" sub="Affiliate links">
      {books.length ? (
        <div className="flex flex-col gap-2.5">
          {books.map((book) => (
            <div key={book.title} className="flex items-center gap-3">
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">{book.title}</div>
                <div className="text-xs text-ink-faint">{book.author}</div>
              </div>
              <a
                href={book.amazonUrl}
                className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-line-strong bg-surface px-3 text-xs font-semibold hover:bg-surface-2"
              >
                <ExternalLink size={13} /> Amazon
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-ink-faint">Curated titles arrive with the full profile.</p>
      )}
    </ModuleCard>
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
