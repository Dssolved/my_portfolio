import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";
import { portfolioContent } from "@/data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { ru: "/", en: "/en", "x-default": "/" },
  },
};

export default function Home() {
  return <PortfolioPage content={portfolioContent.ru} />;
}
