import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";
import { portfolioContent } from "@/data";

const { profile } = portfolioContent.en;
const homeTitle = `${profile.name} | ${profile.role}`;

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: profile.bio,
  alternates: {
    canonical: "/en",
    languages: { ru: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: profile.name,
    url: "/en",
    locale: "en_US",
    alternateLocale: "ru_RU",
    title: homeTitle,
    description: profile.bio,
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: profile.bio,
  },
};

export default function EnglishHome() {
  return <PortfolioPage content={portfolioContent.en} />;
}
