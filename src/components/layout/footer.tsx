import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface-2">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col items-center gap-5 px-5 py-16 text-center md:px-8">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-ink-soft">
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <a href="mailto:tkdgns25300@naver.com" className="hover:text-ink">
            Contact
          </a>
        </nav>
        <span className="text-xs text-ink-faint">
          © 2026 Bible Character Test
        </span>
      </div>
    </footer>
  );
}
