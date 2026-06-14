import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BrandMark } from "@/components/ui/brand-mark";
import { getAllTypes, getTypeById } from "@/lib/queries";
import { SITE_NAME } from "@/lib/seo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Bible Character Test result";

export function generateStaticParams() {
  return getAllTypes().map((type) => ({ type: type.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const found = getTypeById(type);
  const accent = found?.accent ?? "#bd8f33";
  const trait = found?.traits?.[0];

  let avatarSrc = "";
  try {
    const buf = await readFile(
      join(process.cwd(), "public/images/types", `${type}.png`),
    );
    avatarSrc = `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    avatarSrc = "";
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#0e7a57",
          color: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <BrandMark size={48} />
            <span style={{ fontSize: 28, fontWeight: 600 }}>{SITE_NAME}</span>
          </div>
          <span style={{ fontSize: 28, letterSpacing: 3, color: "#f4e9cb" }}>
            YOU ARE
          </span>
          <span style={{ fontSize: 112, fontWeight: 700, lineHeight: 1 }}>
            {found?.character ?? "Unknown"}
          </span>
          {found?.title ? (
            <span style={{ fontSize: 40, fontWeight: 600, marginTop: 14 }}>
              {found.title}
            </span>
          ) : null}
          {trait ? (
            <div style={{ display: "flex", marginTop: 26 }}>
              <span
                style={{
                  fontSize: 26,
                  padding: "10px 24px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.14)",
                  border: "2px solid rgba(255,255,255,0.25)",
                }}
              >
                {trait}
              </span>
            </div>
          ) : null}
        </div>
        {avatarSrc ? (
          <div
            style={{
              display: "flex",
              padding: 12,
              borderRadius: 32,
              background: accent,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={avatarSrc} width={300} height={300} alt="" />
          </div>
        ) : null}
      </div>
    ),
    { ...size },
  );
}
