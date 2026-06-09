import Link from "next/link";
import { Compass } from "lucide-react";

export function Wordmark() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <span className="relative grid h-[30px] w-[30px] place-items-center rounded-[9px] bg-primary text-white">
        <Compass size={18} strokeWidth={2} />
        <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-bg bg-gold" />
      </span>
      <span className="text-[17px] font-bold tracking-tight text-ink">
        Bible<span className="text-primary">Character</span>Test
      </span>
    </Link>
  );
}
