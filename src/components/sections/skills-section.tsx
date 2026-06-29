import { AnimatedSection } from "@/components/ui/animated-section";
import type { PortfolioContent } from "@/types/portfolio";

type SkillsSectionProps = {
  content: PortfolioContent;
};

export function SkillsSection({ content }: SkillsSectionProps) {
  const { skillGroups, copy } = content;

  return (
    <AnimatedSection id="skills" className="py-14">
      <div className="mb-8 flex flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">
          {copy.sections.skillsEyebrow}
        </p>
        <h2 className="text-2xl font-semibold tracking-normal">
          {copy.sections.skillsTitle}
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-md border bg-card p-5 text-card-foreground shadow-sm"
          >
            <h3 className="font-semibold">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </AnimatedSection>
  );
}
