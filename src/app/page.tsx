import Link from "next/link";
import { getAllTypes } from "@/lib/queries";

export default function LandingPage() {
  const types = getAllTypes();
  return (
    <main className="mx-auto w-full max-w-[1080px] px-5 py-16 md:px-8">
      <span className="inline-flex items-center rounded-full bg-gold-soft px-3 py-1 text-sm font-semibold text-gold-ink">
        Pastor-reviewed
      </span>
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
        <Link
          href="/test"
          className="inline-flex h-14 items-center rounded-btn bg-primary px-8 font-semibold text-white"
        >
          Start the test
        </Link>
        <Link
          href="/types"
          className="inline-flex h-14 items-center rounded-btn border border-line-strong bg-surface px-8 font-semibold"
        >
          See the {types.length} types
        </Link>
      </div>
      <p className="mt-6 text-sm text-ink-faint">
        ~5 minutes · No sign-up · Always free
      </p>
    </main>
  );
}
