import Link from "next/link";
import { BrandMark } from "@/components/ui/brand-mark";

export function Wordmark() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <BrandMark size={30} />
      <span className="text-[17px] font-bold tracking-tight text-ink">
        Bible<span className="text-primary">Character</span>Test
      </span>
    </Link>
  );
}
