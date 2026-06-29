import { PageShell } from "@/components/layout/page-shell";
import { ContactSection } from "@/components/sections/contact-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import type { PortfolioContent } from "@/types/portfolio";

type PortfolioPageProps = {
  content: PortfolioContent;
};

export function PortfolioPage({ content }: PortfolioPageProps) {
  return (
    <PageShell content={content}>
      <HeroSection content={content} />
      <ProjectsSection content={content} />
      <ExperienceSection content={content} />
      <SkillsSection content={content} />
      <CredentialsSection content={content} />
      <ContactSection content={content} />
    </PageShell>
  );
}
