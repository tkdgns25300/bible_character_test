import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getAllTypes } from "@/lib/queries";

export default function LandingPage() {
  const count = getAllTypes().length;
  return (
    <main className="mx-auto w-full max-w-[1080px] px-5 py-16 md:px-8">
      <Badge tone="gold">Pastor-reviewed</Badge>
      <h1 className="mt-6 text-5xl font-bold leading-[1.04] tracking-tight md:text-7xl">
        Which Bible character{" "}
        <span className="font-serif italic text-primary">are you?</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-ink-soft">
        A free personality test that maps your story to one of {count} figures
        of Scripture — with your strengths, your calling, and verses chosen for
        you.
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
          See the {count} types
        </Link>
      </div>
      <p className="mt-6 text-sm text-ink-faint">
        ~5 minutes · No sign-up · Always free
      </p>
    </main>
  );
}
