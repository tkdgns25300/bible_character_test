import Link from "next/link";
import { ArrowRight, BookOpen, Compass, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Monogram } from "@/components/ui/monogram";
import { QUESTIONS } from "@/data/questions";
import { getAllTypes } from "@/lib/queries";

const DISCOVER = [
  {
    icon: Sparkles,
    title: "Your character match",
    body: "One of 16 figures of Scripture whose story rhymes with yours.",
  },
  {
    icon: Compass,
    title: "Strengths & calling",
    body: "What you carry well, where you stretch, and the work you're made for.",
  },
  {
    icon: BookOpen,
    title: "Verses for you",
    body: "Scripture chosen to meet you where this season finds you.",
  },
];

export default function LandingPage() {
  const types = getAllTypes();
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1080px] px-5 pb-10 pt-16 md:px-8">
        <Badge tone="gold">Pastor-reviewed</Badge>
        <h1 className="mt-6 text-5xl font-bold leading-[1.04] tracking-tight md:text-7xl">
          Which Bible character{" "}
          <span className="font-serif italic text-primary">are you?</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-soft">
          A free personality test that maps your story to one of {types.length}{" "}
          figures of Scripture — with your strengths, your calling, and verses
          chosen for you.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/test" className={buttonVariants({ size: "lg" })}>
            Start the test
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/types"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            See the {types.length} types
          </Link>
        </div>
        <p className="mt-6 text-sm text-ink-faint">
          ~5 minutes · No sign-up · Always free
        </p>

        {/* 16-type preview */}
        <div className="mt-14">
          <div className="mb-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold-ink">
              <Users size={15} /> The 16 types
            </span>
            <Link
              href="/types"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
            >
              See all <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
            {types.slice(0, 8).map((type) => (
              <Link key={type.id} href={`/types/${type.id}`}>
                <Card className="flex h-full flex-col gap-3 p-4 transition-shadow hover:shadow-md">
                  <Monogram initial={type.character.charAt(0)} accent={type.accent} size={42} />
                  <div>
                    <div className="font-bold">{type.character}</div>
                    <div className="text-[13px] leading-tight text-ink-faint">
                      {type.title ?? "Profile coming soon"}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll discover */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto w-full max-w-[1080px] px-5 py-14 md:px-8">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold-ink">
            <Sparkles size={15} /> What you&apos;ll discover
          </span>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {DISCOVER.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-[13px] bg-primary-50 text-primary">
                  <Icon size={24} />
                </span>
                <div className="text-lg font-bold">{title}</div>
                <p className="text-[15px] leading-relaxed text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust note */}
      <section className="mx-auto w-full max-w-[1080px] px-5 py-14 md:px-8">
        <Card className="flex flex-wrap items-start gap-5 p-8">
          <span className="grid h-12 w-12 flex-none place-items-center rounded-[14px] bg-gold-soft text-gold-ink">
            <ShieldCheck size={26} />
          </span>
          <div className="min-w-[260px] flex-1">
            <h2 className="text-xl font-bold">Trustworthy, not gimmicky</h2>
            <p className="mt-2 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
              Every character mapping is reviewed by pastors before launch. This
              test is built to be encouraging and honest — never to put words in
              Scripture&apos;s mouth. The sample results shown today are{" "}
              <strong className="text-ink">illustrative only</strong>.
            </p>
          </div>
        </Card>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto w-full max-w-[1080px] px-5 pb-16 md:px-8">
        <div className="relative overflow-hidden rounded-card bg-primary px-8 py-12 text-white md:px-12">
          <div className="relative max-w-lg">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Ready to meet your character?
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-white/80">
              {QUESTIONS.length} honest questions. Five quiet minutes. A result
              worth sharing.
            </p>
            <Link
              href="/test"
              className={buttonVariants({ variant: "gold", size: "lg", className: "mt-6" })}
            >
              Start the test
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
