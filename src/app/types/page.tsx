import Link from "next/link";
import { getAllTypes } from "@/lib/queries";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "The 16 types",
  description: "All 16 Bible characters, each paired with a personality type.",
  path: "/types",
});

export default function TypesPage() {
  const types = getAllTypes();
  return (
    <main className="mx-auto w-full max-w-[1080px] px-5 py-14 md:px-8">
      <h1 className="text-4xl font-bold tracking-tight">All 16 characters</h1>
      <p className="mt-2 text-ink-soft">
        Each figure of Scripture, paired with a personality type.
      </p>
      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        {types.map((type) => (
          <Link
            key={type.id}
            href={`/types/${type.id}`}
            className="rounded-card border border-line bg-surface p-5 transition-shadow hover:shadow-md"
          >
            <div className="text-lg font-bold">{type.character}</div>
            <div className="text-sm text-ink-faint">
              {type.title ?? "Profile coming soon"}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
