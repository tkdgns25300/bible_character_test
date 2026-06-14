import Link from "next/link";
import { BUY_ME_A_COFFEE_URL } from "@/constants";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface-2">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col items-center gap-5 px-5 py-16 text-center md:px-8">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-ink-soft">
          <Link href="/types" className="hover:text-ink">
            Types
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <a href="mailto:hello@biblecharactertest.com" className="hover:text-ink">
            Contact
          </a>
          <a
            href={BUY_ME_A_COFFEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            Support
          </a>
        </nav>
        <span className="text-xs text-ink-faint">
          © 2026 Bible Character Test
        </span>
      </div>
    </footer>
  );
}
