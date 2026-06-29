import { ProjectCard } from "@/components/project/project-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import type { PortfolioContent } from "@/types/portfolio";

type ProjectsSectionProps = {
  content: PortfolioContent;
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const { projects, copy, locale } = content;

  return (
    <AnimatedSection id="projects" className="py-14">
      <div className="mb-8 flex flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">
          {copy.sections.projectsEyebrow}
        </p>
        <h2 className="text-2xl font-semibold tracking-normal">
          {copy.sections.projectsTitle}
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            linksFallback={copy.projectLinksFallback}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
