import { portfolioContent } from "@/data";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = `${portfolioContent.en.profile.name} — ${portfolioContent.en.profile.role}`;

export default async function OpengraphImage() {
  const { profile } = portfolioContent.en;

  return renderOgImage({
    badge: "Data analyst portfolio",
    name: profile.name,
    role: profile.role,
    stack: "Python · SQL · Excel · Power BI",
    location: profile.location,
  });
}
