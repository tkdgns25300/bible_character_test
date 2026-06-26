import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ResultBanner } from "@/components/result/result-banner";
import {
  ResultIdentity,
  ResultBody,
  ShareSection,
} from "@/components/result/result-blocks";
import { BookStrip } from "@/components/monetize/modules";
import { BookStickyBar } from "@/components/monetize/book-sticky-bar";
import { getAllTypes, getTypeById } from "@/lib/queries";
import { pageMetadata, typeJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return getAllTypes().map((type) => ({ type: type.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const found = getTypeById(type);
  if (!found) {
    return pageMetadata({ title: "Not found", description: "Type not found." });
  }
  return pageMetadata({
    title: found.title ? `${found.character} — ${found.title}` : found.character,
    description: found.summary ?? `Your Bible character: ${found.character}.`,
    path: `/types/${found.id}`,
  });
}

export default async function TypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const found = getTypeById(type);
  if (!found) notFound();
  const best = found.bestMatch ? getTypeById(found.bestMatch) : undefined;
  const worst = found.worstMatch ? getTypeById(found.worstMatch) : undefined;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(typeJsonLd(found)) }}
      />
      <Suspense fallback={null}>
        <ResultBanner />
      </Suspense>

      <ResultIdentity
        type={found}
        best={best}
        worst={worst}
        afterMatches={
          found.books?.length ? (
            <BookStrip type={found} id="book-pick" />
          ) : null
        }
      />
      {found.books?.length ? (
        <BookStickyBar
          book={found.books[0]}
          watchId="book-pick"
          hideId="share-section"
        />
      ) : null}
      <ResultBody type={found} />
      <ShareSection type={found} />
    </main>
  );
}
