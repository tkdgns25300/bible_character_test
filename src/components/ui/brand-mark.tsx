// Single source for the brand mark (indigo square · open book).
// Reused by the wordmark (browser) and the OG images (Satori). The favicon
// (src/app/icon.svg) mirrors this exact markup.
export function BrandMark({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flex: "none" }}
    >
      <rect width="32" height="32" rx="8" fill="#4f46e5" />
      <path
        d="M16 10 C13.5 8.6,8.8 8.6,6.2 10 L6.2 21 C8.8 19.6,13.5 19.6,16 21 C18.5 19.6,23.2 19.6,25.8 21 L25.8 10 C23.2 8.6,18.5 8.6,16 10 Z"
        fill="#ffffff"
      />
      <path
        d="M16 10.4 L16 20.8"
        stroke="#4f46e5"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
