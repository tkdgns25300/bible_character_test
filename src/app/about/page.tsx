import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "What Bible Character Test is, and how its 16 character profiles are written.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-[680px] px-5 py-14 md:px-8">
      <h1 className="text-4xl font-bold tracking-tight">About</h1>
      <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-ink-soft">
        <p>
          Bible Character Test matches your personality — across four pairs
          (E/I, S/N, T/F, J/P) — to one of 16 figures of Scripture, with each
          type&apos;s strengths, calling, and suggested verses.
        </p>
        <p>
          Each type is paired with a figure of Scripture whose story echoes it,
          then written fresh from the Bible. The descriptions, callings, and
          prayers are our own; the verses are quoted from the public-domain King
          James Version.
        </p>
        <p>
          It&apos;s meant for reflection and encouragement, not a verdict on
          your faith. Not affiliated with any trademarked personality framework.
        </p>
      </div>
    </main>
  );
}
