import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getAllTypes, getTypeById } from "@/lib/queries";

// Square 1:1 share card (Save image / Instagram) — per-type accent background
// with the character illustration. Prerendered per type at build.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTypes().map((type) => ({ type: type.id }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ type: string }> },
) {
  const { type } = await params;
  const found = getTypeById(type);
  const accent = found?.accent ?? "#0e7a57";
  const traits = (found?.traits ?? []).join("  ·  ").toUpperCase();

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
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: accent,
          color: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        {avatarSrc ? (
          <div
            style={{
              display: "flex",
              padding: 18,
              borderRadius: 56,
              background: "rgba(255,255,255,0.2)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarSrc}
              width={460}
              height={460}
              alt=""
              style={{ borderRadius: 44 }}
            />
          </div>
        ) : null}
        <div style={{ display: "flex", fontSize: 116, fontWeight: 700, marginTop: 34, lineHeight: 1 }}>
          {found?.character ?? "Unknown"}
        </div>
        {found?.title ? (
          <div style={{ display: "flex", fontSize: 48, fontWeight: 700, marginTop: 20 }}>
            {found.title}
          </div>
        ) : null}
        {traits ? (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 22, maxWidth: 880 }}>
            <span
              style={{
                fontSize: 27,
                fontWeight: 700,
                letterSpacing: 4,
                color: "rgba(255,255,255,0.82)",
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              {traits}
            </span>
          </div>
        ) : null}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontSize: 34,
            fontWeight: 600,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          Which Bible character are you?
        </div>
      </div>
    ),
    { width: 1080, height: 1080 },
  );
}
