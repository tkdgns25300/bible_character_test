import type { Metadata } from "next";
import { Inter, Spectral } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  description:
    "A free, pastor-reviewed personality test that maps your story to a character of Scripture — with your strengths, your calling, and verses chosen for you.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spectral.variable} h-full`}
    >
      <body className="bg-bg text-ink font-sans min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
