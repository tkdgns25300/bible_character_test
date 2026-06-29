"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/footer";

// Footer is hidden on the test flow so questions stay distraction-free.
export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/test") return null;
  return <Footer />;
}
