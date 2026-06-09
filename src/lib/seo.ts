import type { Metadata } from "next";

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
