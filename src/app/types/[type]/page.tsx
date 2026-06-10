import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ResultBanner } from "@/components/result/result-banner";
import { ResultHero } from "@/components/result/result-hero";
import { ComingSoon, RelatedTypes, ResultBody } from "@/components/result/result-blocks";
import { ShareButtons } from "@/components/result/share-card";
import { EmailCapture } from "@/components/monetize/email-capture";
import { AdSlot, BookModule, CoffeeModule, PodModule } from "@/components/monetize/modules";
import { Card } from "@/components/ui/card";
import { getAllTypes, getTypeById, getTypesByIds } from "@/lib/queries";
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
  const hasProfile = Boolean(found.strengths?.length);

  return (
    <main>
      <Suspense fallback={null}>
        <ResultBanner />
      </Suspense>

      <ResultHero type={found} />

      <section className="mx-auto w-full max-w-[1080px] px-5 py-10 md:px-8">
        {hasProfile ? <ResultBody type={found} /> : <ComingSoon character={found.character} />}
      </section>

      {/* Monetization — subordinate, order: email → books/POD → coffee → share → ad */}
      <section className="mx-auto w-full max-w-[1080px] px-5 pb-10 md:px-8">
        <div className="flex flex-col gap-4">
          <EmailCapture type={found} />
          <div className="grid gap-4 sm:grid-cols-2">
            <BookModule type={found} />
            <PodModule type={found} />
          </div>
          <CoffeeModule />
          <div id="share" className="scroll-mt-20">
            <Card className="p-6">
              <div className="mb-4 text-center">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gold-ink">
                  Share your result
                </h2>
                <p className="mt-2 text-sm text-ink-soft">
                  Post your card or send it to a friend who should take the test.
                </p>
              </div>
              <ShareButtons />
            </Card>
          </div>
          <AdSlot />
        </div>
      </section>

      <RelatedTypes types={getTypesByIds(found.related ?? [])} />
    </main>
  );
}
