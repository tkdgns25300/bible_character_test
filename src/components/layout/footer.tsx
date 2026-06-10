import Link from "next/link";
import { Coffee, Mail } from "lucide-react";
import { Wordmark } from "@/components/layout/wordmark";
import { BMC_COLOR, BUY_ME_A_COFFEE_URL } from "@/constants";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface-2">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-5 px-5 py-10 md:px-8">
        <Wordmark />
        <p className="max-w-md text-sm leading-relaxed text-ink-soft">
          A free personality test that connects your story to a character of
          Scripture. Pastor-reviewed; character mappings shown are illustrative
          samples.
        </p>
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={BUY_ME_A_COFFEE_URL}
            className="inline-flex h-[42px] items-center gap-2 rounded-btn px-4 text-sm font-bold"
            style={{ background: BMC_COLOR.bg, color: BMC_COLOR.fg }}
          >
            <Coffee size={17} /> Buy me a coffee
          </a>
          <a
            href="mailto:hello@biblecharactertest.com"
            className="inline-flex h-[42px] items-center gap-2 rounded-btn border border-line-strong px-4 text-sm font-semibold text-ink"
          >
            <Mail size={17} /> Contact
          </a>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-ink-faint">
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <span>© 2026 Bible Character Test</span>
        </div>
      </div>
    </footer>
  );
}
