"use client";

import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { AMAZON_TAG } from "@/constants";
import type { BookRec } from "@/types/domain";

function bookHref(url: string) {
  if (!AMAZON_TAG) return url;
  return `${url}${url.includes("?") ? "&" : "?"}tag=${AMAZON_TAG}`;
}

/**
 * Slim, dismissible reminder bar for the featured book. Shows whenever the
 * inline pick (`watchId`) is off-screen, and hides once the share section
 * (`hideId`) comes into view so it never covers the share CTA.
 */
export function BookStickyBar({
  book,
  watchId,
  hideId,
}: {
  book: BookRec;
  watchId: string;
  hideId?: string;
}) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const bookEl = document.getElementById(watchId);
    const hideEl = hideId ? document.getElementById(hideId) : null;
    if (!bookEl) return;

    let blockInView = true;
    let shareInView = false;
    const sync = () => setVisible(!blockInView && !shareInView);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === bookEl) {
            blockInView = entry.isIntersecting;
          }
          if (entry.target === hideEl) {
            shareInView = entry.isIntersecting;
          }
        }
        sync();
      },
      { threshold: 0 },
    );

    observer.observe(bookEl);
    if (hideEl) observer.observe(hideEl);
    return () => observer.disconnect();
  }, [watchId, hideId]);

  if (dismissed || !visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line-strong bg-surface/95 shadow-[0_-6px_20px_-12px_rgba(0,0,0,0.3)] backdrop-blur"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-[820px] items-center gap-3.5 px-4 py-3.5 md:gap-4 md:px-8">
        {book.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={book.coverImage}
            alt=""
            className="h-16 w-11 flex-none rounded-[4px] object-cover shadow-md"
          />
        ) : null}
        <div className="min-w-0 flex-1">
          <div className="text-[10.5px] font-bold uppercase tracking-wider text-ink-faint">
            A pick for your type
          </div>
          <div className="truncate font-serif text-[17px] font-semibold leading-tight">
            {book.title}
          </div>
          <div className="truncate text-[13px] text-ink-faint">
            {book.author}
          </div>
        </div>
        <a
          href={bookHref(book.amazonUrl)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex h-11 flex-none items-center gap-2 rounded-btn bg-primary px-5 text-sm font-bold text-white"
        >
          <span className="hidden sm:inline">View on Amazon</span>
          <span className="sm:hidden">View</span>
          <ExternalLink size={15} />
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="flex-none p-1.5 text-ink-faint transition hover:text-ink"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
