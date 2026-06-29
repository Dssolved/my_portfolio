import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/project/case-study-page";
import { caseStudies, portfolioContent } from "@/data";

const caseStudy = caseStudies.pm25Almaty.en;

export const metadata: Metadata = {
  title: caseStudy.title,
  description: caseStudy.subtitle,
};

export default function EnglishPm25AlmatyResearchPage() {
  return (
    <CaseStudyPage
      caseStudy={caseStudy}
      content={portfolioContent.en}
    />
  );
}
