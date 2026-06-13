import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { QUESTIONS } from "@/data/questions";
import { websiteJsonLd } from "@/lib/seo";

export default function LandingPage() {
  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-3xl flex-col items-center justify-center px-5 py-16 text-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      <Badge tone="gold">Pastor-reviewed</Badge>
      <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
        Which Bible character{" "}
        <span className="font-serif italic text-primary">are you?</span>
      </h1>
      <p className="mt-6 max-w-md text-lg text-ink-soft">
        Answer {QUESTIONS.length} questions and meet the figure of Scripture
        whose story is most like yours.
      </p>
      <Link
        href="/test"
        className={buttonVariants({ size: "lg", className: "mt-9" })}
      >
        Start the test
        <ArrowRight size={20} />
      </Link>
      <Link
        href="/types"
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink-soft transition-colors hover:text-primary"
      >
        or browse the 16 types
        <ArrowRight size={14} />
      </Link>
      <p className="mt-8 text-sm text-ink-faint">
        ~5 minutes · No sign-up · Always free
      </p>
    </main>
  );
}
