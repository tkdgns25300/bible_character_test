import { ImageResponse } from "next/og";
import { BrandMark } from "@/components/ui/brand-mark";
import { SITE_HOST, SITE_NAME } from "@/lib/seo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME} — Which Bible character are you?`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e7a57",
          color: "#ffffff",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <BrandMark size={56} />
          <span style={{ fontSize: 34, fontWeight: 600 }}>{SITE_NAME}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 30, letterSpacing: 2, color: "#f4e9cb" }}>
            WHICH BIBLE CHARACTER
          </span>
          <span style={{ fontSize: 100, fontWeight: 700, lineHeight: 1.05 }}>
            are you?
          </span>
          <span style={{ fontSize: 30, color: "rgba(255,255,255,0.8)", marginTop: 18 }}>
            A free personality test, rooted in Scripture.
          </span>
        </div>
        <span style={{ fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
          {SITE_HOST}
        </span>
      </div>
    ),
    { ...size },
  );
}
