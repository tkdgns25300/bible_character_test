import Image from "next/image";
import { typeImageSrc } from "@/lib/queries";
import type { BibleType } from "@/types/domain";

export function ResultHero({ type }: { type: BibleType }) {
  const accent = type.accent ?? "var(--color-gold)";
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[920px] px-5 py-10 md:px-8 md:py-14">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
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
          <div className="text-center md:text-left">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold-ink">
              You are
            </span>
            <h1 className="mt-2 font-serif text-5xl font-semibold leading-none md:text-6xl">
              {type.character}
            </h1>
            {type.title && (
              <p className="mt-3 text-xl font-bold text-primary">{type.title}</p>
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
  );
}
