import Link from "next/link";
import { RefreshCw, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { ShareCardPreview } from "@/components/result/share-card";
import { typeImageSrc } from "@/lib/queries";
import type { BibleType } from "@/types/domain";

export function ResultHero({ type }: { type: BibleType }) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid w-full max-w-[1080px] items-center gap-8 px-5 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-12">
        <div>
          <Badge tone="neutral" className="mb-4">
            SAMPLE · illustrative only
          </Badge>
          <div className="mb-4 flex items-center gap-4">
            <Avatar
              src={typeImageSrc(type.id)}
              alt={type.character}
              initial={type.character.charAt(0)}
              accent={type.accent}
              size={64}
            />
            <div className="text-sm font-bold uppercase tracking-widest text-gold-ink">
              You are
            </div>
          </div>
          <h1 className="font-serif text-6xl font-semibold leading-none md:text-7xl">
            {type.character}
          </h1>
          {type.title && (
            <div className="mt-3 text-2xl font-bold text-primary">{type.title}</div>
          )}
          {type.traits?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
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
          {type.summary && (
            <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-ink-soft">
              {type.summary}
            </p>
          )}
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href="#share" className={buttonVariants()}>
              <Share2 size={18} /> Share my result
            </a>
            <Link href="/test" className={buttonVariants({ variant: "outline" })}>
              <RefreshCw size={18} /> Retake
            </Link>
          </div>
        </div>
        <ShareCardPreview type={type} />
      </div>
    </section>
  );
}
