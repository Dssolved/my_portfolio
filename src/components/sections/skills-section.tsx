import { AnimatedSection } from "@/components/ui/animated-section";
import type { PortfolioContent } from "@/types/portfolio";

type SkillsSectionProps = {
  content: PortfolioContent;
};

export function SkillsSection({ content }: SkillsSectionProps) {
  const { skillGroups, copy } = content;

  return (
    <AnimatedSection id="skills" className="py-16">
      <div className="mb-8 flex flex-col gap-2">
        <p className="section-kicker">{copy.sections.skillsEyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
          {copy.sections.skillsTitle}
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="data-surface rounded-md p-5"
          >
            <h3 className="font-semibold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
              {group.items.map((item) => (
                <li key={item} className="rounded-md bg-muted px-2 py-1 text-xs">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </AnimatedSection>
  );
}
