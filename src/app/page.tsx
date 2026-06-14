import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { QUESTIONS } from "@/data/questions";
import { websiteJsonLd } from "@/lib/seo";

export default function LandingPage() {
  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col items-center justify-center px-5 py-16 text-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      <h1 className="text-balance text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
        Which Bible character
        <span className="block font-serif italic text-primary">are you?</span>
      </h1>
      <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-ink-soft">
        Answer {QUESTIONS.length} questions and meet the figure of Scripture
        whose story is most like yours.
      </p>
      <Link
        href="/test"
        className={buttonVariants({ size: "lg", className: "mt-10" })}
      >
        Start the test
        <ArrowRight size={20} />
      </Link>
    </main>
  );
}
