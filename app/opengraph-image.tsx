import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HyrStack AI career platform";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #000000 0%, #080808 52%, #000000 100%)",
          color: "white",
          fontFamily: "Inter, Arial, sans-serif",
          padding: 64,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 620,
            height: 620,
            borderRadius: 999,
            background: "rgba(186, 230, 253, 0.18)",
            filter: "blur(80px)",
            right: -170,
            top: -150,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(255, 255, 255, 0.08)",
            filter: "blur(90px)",
            left: -150,
            bottom: -190,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", zIndex: 2, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 22,
                background: "#ffffff",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
                fontWeight: 800,
              }}
            >
              H
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>HyrStack</div>
              <div style={{ fontSize: 18, color: "rgba(255,255,255,0.62)" }}>
                AI Career Platform
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 70,
              maxWidth: 770,
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 0.96,
              letterSpacing: -3,
            }}
          >
            Build a career profile recruiters remember.
          </div>

          <div
            style={{
              marginTop: 28,
              maxWidth: 760,
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.68)",
            }}
          >
            ATS-ready resumes, tailored cover letters, AI interview practice,
            and industry insights in one premium workspace.
          </div>

          <div style={{ display: "flex", gap: 16, marginTop: 44 }}>
            {["Resume Builder", "Cover Letters", "Mock Interviews"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 999,
                  padding: "12px 18px",
                  background: "rgba(255,255,255,0.07)",
                  fontSize: 18,
                  color: "rgba(255,255,255,0.86)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
