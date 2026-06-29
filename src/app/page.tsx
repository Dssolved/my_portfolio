import { PortfolioPage } from "@/components/portfolio-page";
import { portfolioContent } from "@/data";

export default function Home() {
  return <PortfolioPage content={portfolioContent.ru} />;
}
