import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";
import { portfolioContent } from "@/data";

export const metadata: Metadata = {
  title: `${portfolioContent.en.profile.name} | ${portfolioContent.en.profile.role}`,
  description: portfolioContent.en.profile.bio,
};

export default function EnglishHome() {
  return <PortfolioPage content={portfolioContent.en} />;
}
