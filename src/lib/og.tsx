import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Google Fonts serves TTF (which Satori supports) when no modern UA is sent,
// and subsets the file to just the requested glyphs via the `text` param.
async function loadGoogleFont(font: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(
    text,
  )}`;
  const css = await (await fetch(url)).text();
  const fontUrl = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
  )?.[1];

  if (fontUrl) {
    const response = await fetch(fontUrl);
    if (response.status === 200) {
      return response.arrayBuffer();
    }
  }

  throw new Error(`Failed to load font: ${font} ${weight}`);
}

type OgData = {
  badge: string;
  name: string;
  role: string;
  stack: string;
  location: string;
};

export async function renderOgImage(data: OgData) {
  const text = `${data.badge}${data.name}${data.role}${data.stack}${data.location}2026·—`;
  const [regular, semibold] = await Promise.all([
    loadGoogleFont("Inter", 400, text),
    loadGoogleFont("Inter", 600, text),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "Inter",
          color: "#eef4f2",
          backgroundColor: "#0b1a19",
          backgroundImage:
            "radial-gradient(1000px 500px at 85% -10%, rgba(63,182,168,0.22), transparent), linear-gradient(135deg, #0b1a19 0%, #08110f 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "12px 22px",
              borderRadius: "999px",
              border: "1px solid rgba(238,244,242,0.14)",
              backgroundColor: "rgba(238,244,242,0.05)",
              fontSize: "26px",
              color: "#b9ccc8",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "999px",
                backgroundColor: "#3fb6a8",
              }}
            />
            {data.badge}
          </div>
          <div style={{ display: "flex", fontSize: "26px", color: "#7d938f" }}>
            2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "84px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {data.name}
          </div>
          <div style={{ display: "flex", fontSize: "40px", color: "#9db4b0" }}>
            {data.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "36px",
            borderTop: "1px solid rgba(238,244,242,0.12)",
            fontSize: "28px",
            color: "#8ba39e",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "4px",
                height: "30px",
                borderRadius: "999px",
                backgroundColor: "#3fb6a8",
              }}
            />
            {data.stack}
          </div>
          <div style={{ display: "flex" }}>{data.location}</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
