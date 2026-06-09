import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTypes, getTypeById } from "@/lib/queries";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllTypes().map((type) => ({ type: type.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const found = getTypeById(type);
  if (!found) {
    return pageMetadata({ title: "Not found", description: "Type not found." });
  }
  return pageMetadata({
    title: found.title ? `${found.character} — ${found.title}` : found.character,
    description: found.summary ?? `Your Bible character: ${found.character}.`,
    path: `/types/${found.id}`,
  });
}

export default async function TypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const found = getTypeById(type);
  if (!found) notFound();

  return (
    <main className="mx-auto w-full max-w-[1080px] px-5 py-14 md:px-8">
      <div className="text-sm font-semibold uppercase tracking-widest text-gold-ink">
        You are
      </div>
      <h1 className="mt-3 font-serif text-6xl font-semibold">
        {found.character}
      </h1>
      {found.title && (
        <div className="mt-2 text-2xl font-bold text-primary">{found.title}</div>
      )}

      {found.strengths?.length ? (
        <ul className="mt-8 list-disc pl-5 text-ink-soft">
          {found.strengths.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 max-w-xl text-ink-soft">
          The full profile — strengths, calling, and verses — is being written
          and pastor-reviewed.
        </p>
      )}
    </main>
  );
}
