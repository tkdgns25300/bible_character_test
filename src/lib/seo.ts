import type { Metadata } from "next";
import type { BibleType } from "@/types/domain";

export const SITE_NAME = "Bible Character Test";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://biblecharactertest.com";

// Per-page metadata helper. The root layout adds the "· SITE_NAME" title suffix
// via its title template, so `title` here stays bare.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path ?? ""}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

// JSON-LD structured data (schema.org) — rendered in a <script> tag per page.
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "A free personality test, rooted in Scripture, that maps your story to a character of the Bible.",
  };
}

export function typeJsonLd(type: BibleType) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: type.title ? `${type.character} — ${type.title}` : type.character,
    description: type.summary ?? `Your Bible character: ${type.character}.`,
    url: `${SITE_URL}/types/${type.id}`,
    image: `${SITE_URL}/images/types/${type.id}.png`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}
