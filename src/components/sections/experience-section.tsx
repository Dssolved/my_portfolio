import { AnimatedSection } from "@/components/ui/animated-section";
import type { PortfolioContent } from "@/types/portfolio";

type ExperienceSectionProps = {
  content: PortfolioContent;
};

export function ExperienceSection({ content }: ExperienceSectionProps) {
  const { experience, copy } = content;

  return (
    <AnimatedSection id="experience" className="py-16">
      <div className="mb-8 flex flex-col gap-2">
        <p className="section-kicker">{copy.sections.experienceEyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
          {copy.sections.experienceTitle}
        </h2>
      </div>

      <div className="space-y-4">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="data-surface rounded-md p-5"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.company} · {item.location}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{item.period}</p>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {item.summary}
            </p>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="border-l-2 border-primary/60 pl-3 leading-6">
                  {highlight}
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Experience stack">
              {item.stack.map((stackItem) => (
                <li
                  key={stackItem}
                  className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                >
                  {stackItem}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
