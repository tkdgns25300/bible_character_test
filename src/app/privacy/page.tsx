import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "How Bible Character Test handles email sign-ups, analytics, and advertising cookies.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-[680px] px-5 py-14 md:px-8">
      <h1 className="text-4xl font-bold tracking-tight">Privacy</h1>
      <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-ink-soft">
        <p>
          We do not require an account to take the test. If you choose to
          receive your result by email, we store that email with our email
          provider and you can unsubscribe at any time.
        </p>
        <p>
          Analytics and (later) advertising partners may set cookies. Consent
          requirements vary by region (GDPR / UK-GDPR / CCPA).
        </p>
      </div>
    </main>
  );
}
