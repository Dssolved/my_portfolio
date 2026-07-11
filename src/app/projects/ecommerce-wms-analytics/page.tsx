import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/project/case-study-page";
import { caseStudies, portfolioContent } from "@/data";

const caseStudy = caseStudies.warehouseLocation.ru;

export const metadata: Metadata = {
  title: caseStudy.title,
  description: caseStudy.subtitle,
};

export default function EcommerceWmsAnalyticsPage() {
  return <CaseStudyPage caseStudy={caseStudy} content={portfolioContent.ru} />;
}
