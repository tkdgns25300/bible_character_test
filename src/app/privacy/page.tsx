import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "What Bible Character Test collects, why, and the choices you have. No account; your answers stay in your browser.",
  path: "/privacy",
});

type Section = { h: string; p: string; items?: readonly string[] };

const SECTIONS: Section[] = [
  {
    h: "Information we collect",
    p: "We collect as little as possible:",
    items: [
      "Test answers — scored in your browser and never sent to or stored on our servers.",
      "Email address — only if you choose to subscribe or have your result emailed to you.",
      "Usage data — aggregate, non-identifying analytics such as pages visited and device type.",
    ],
  },
  {
    h: "How we use information",
    p: "To send what you asked for (such as your result or updates), to keep the site working, and to understand which content is useful. We do not sell your personal data.",
  },
  {
    h: "Cookies & analytics",
    p: "We may use privacy-friendly analytics, which can set cookies or similar technology. Any advertising we add later may also set cookies; where consent is required (GDPR, UK GDPR, CCPA), we will ask for it first.",
  },
  {
    h: "Affiliate links",
    p: "Some outbound links — for example, to recommended books — may be affiliate links. If you purchase through them, we may earn a small commission at no extra cost to you.",
  },
  {
    h: "Third-party services",
    p: "Email delivery and analytics are handled by third-party providers that process data on our behalf. We share only what is needed to provide those services.",
  },
  {
    h: "Your rights",
    p: "You can unsubscribe from emails at any time using the link in any message. You may also request access to, correction of, or deletion of your personal data by contacting us.",
  },
  {
    h: "Children's privacy",
    p: "This site is not directed to children under 13, and we do not knowingly collect their personal data.",
  },
  {
    h: "Changes to this policy",
    p: "We may update this policy from time to time. Material changes will be posted here with a new date.",
  },
  {
    h: "Contact",
    p: "Questions about this policy? Email tkdgns25300@naver.com.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-[680px] px-5 py-14 md:px-8">
      <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-sm text-ink-faint">Last updated June 2026</p>
      <p className="mt-6 leading-relaxed text-ink-soft">
        Bible Character Test respects your privacy. This page explains what we
        collect, why, and the choices you have.
      </p>
      <div className="mt-8 flex flex-col gap-7">
        {SECTIONS.map(({ h, p, items }) => (
          <section key={h}>
            <h2 className="text-lg font-bold">{h}</h2>
            <p className="mt-2 leading-relaxed text-ink-soft">{p}</p>
            {items ? (
              <ul className="mt-2 flex list-disc flex-col gap-1.5 pl-5 leading-relaxed text-ink-soft marker:text-ink-faint">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
