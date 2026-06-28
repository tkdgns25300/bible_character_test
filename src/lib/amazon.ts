import { AMAZON_TAG } from "@/constants";

const ASIN_RE = /\/dp\/([A-Z0-9]{10})/i;

// Append the Associates tag to an Amazon product URL.
export function affiliateUrl(url: string): string {
  if (!AMAZON_TAG) return url;
  return `${url}${url.includes("?") ? "&" : "?"}tag=${AMAZON_TAG}`;
}

// Cover image served straight from Amazon's CDN, derived from the product
// ASIN — we never self-host publisher cover art. Returns null if no ASIN.
export function bookCoverSrc(amazonUrl: string): string | null {
  const asin = amazonUrl.match(ASIN_RE)?.[1];
  return asin ? `https://m.media-amazon.com/images/P/${asin}.jpg` : null;
}
