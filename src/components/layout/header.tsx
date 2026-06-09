import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Wordmark } from "@/components/layout/wordmark";
import { buttonVariants } from "@/components/ui/button";

const NAV = [
  { href: "/test", label: "Test" },
  { href: "/types", label: "Types" },
  { href: "/about", label: "About" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex h-[60px] w-full max-w-[1080px] items-center justify-between px-5 md:px-8">
        <Wordmark />
        <nav className="flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden rounded-lg px-3.5 py-2 text-[15px] font-medium text-ink-soft hover:bg-surface-2 sm:inline-flex"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/test" className={buttonVariants({ size: "sm", className: "ml-1.5" })}>
            Start test
            <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
