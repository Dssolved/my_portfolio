import {
  FeaturedProjectCard,
  ProjectCard,
} from "@/components/project/project-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import type { PortfolioContent } from "@/types/portfolio";

type ProjectsSectionProps = {
  content: PortfolioContent;
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const { projects, copy, locale } = content;
  // Lead the featured block with the strongest, most end-to-end work.
  const featuredOrder = [
    "rfm-ecommerce-analytics",
    "pm25-almaty-research",
    "sla-reporting-data-reconciliation",
    "air-quality-power-bi-dashboard",
  ];
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort(
      (a, b) => featuredOrder.indexOf(a.slug) - featuredOrder.indexOf(b.slug),
    );
  const otherProjects = projects.filter((project) => !project.featured);
  const featuredTitle =
    locale === "ru" ? "Избранные кейсы" : "Featured case studies";
  const otherTitle = locale === "ru" ? "Другие проекты" : "Other projects";
  const intro =
    locale === "ru"
      ? "Выбранные работы с данными, где есть полный цикл: источник, очистка, анализ, визуализация и выводы."
      : "Selected data work with a complete path from source data to cleaning, analysis, visualization, and findings.";

  return (
    <AnimatedSection id="projects" className="py-16">
      <div className="mb-8 grid gap-4 lg:grid-cols-[0.75fr_1fr] lg:items-end">
        <div className="space-y-2">
          <p className="section-kicker">{copy.sections.projectsEyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            {copy.sections.projectsTitle}
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground lg:justify-self-end">
          {intro}
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">
            {featuredTitle}
          </p>
        </div>

        <div className="grid gap-5">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              linksFallback={copy.projectLinksFallback}
            />
          ))}
        </div>
      </div>

      {otherProjects.length > 0 ? (
        <div className="mt-10 space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">
              {otherTitle}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                linksFallback={copy.projectLinksFallback}
              />
            ))}
          </div>
        </div>
      ) : null}
    </AnimatedSection>
  );
}
