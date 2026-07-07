import { portfolioContent } from "@/data";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = `${portfolioContent.ru.profile.name} — ${portfolioContent.ru.profile.role}`;

export default async function OpengraphImage() {
  const { profile } = portfolioContent.ru;

  return renderOgImage({
    badge: "Портфолио аналитика данных",
    name: profile.name,
    role: profile.role,
    stack: "Python · SQL · Excel · Power BI",
    location: profile.location,
  });
}
