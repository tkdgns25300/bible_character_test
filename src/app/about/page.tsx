import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "A free personality test that connects your story to a character of Scripture. Pastor-reviewed; built to encourage, not to flatter.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-[680px] px-5 py-14 md:px-8">
      <h1 className="text-4xl font-bold tracking-tight">
        Built to encourage, not to flatter
      </h1>
      <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-ink-soft">
        <p>
          Bible Character Test connects the way you move through the world to a
          figure of Scripture — with strengths, a sense of calling, and verses
          chosen for you.
        </p>
        <p>
          We take Scripture seriously. Every mapping is reviewed before launch,
          and we are careful never to present a personality result as the final
          word on anyone&apos;s faith.
        </p>
        <p>
          This is a personality type test of our own design. It is not
          affiliated with, or based on, any trademarked personality framework.
        </p>
      </div>
    </main>
  );
}
