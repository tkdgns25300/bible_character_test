"use client";

import { useSearchParams } from "next/navigation";
import { PartyPopper } from "lucide-react";

// Shows only when arriving from the test (?from=test). Read client-side so the
// type page stays statically generated. Wrap in <Suspense> at the page.
export function ResultBanner() {
  const fromTest = useSearchParams().get("from") === "test";
  if (!fromTest) return null;
  return (
    <div className="bg-primary text-white">
      <div className="mx-auto flex w-full max-w-[1080px] items-center justify-center gap-2 px-5 py-3 text-sm font-semibold md:px-8">
        <PartyPopper size={17} /> Your result is ready
      </div>
    </div>
  );
}
