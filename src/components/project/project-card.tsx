import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Locale, Project, ProjectStatus } from "@/types/portfolio";

const statusLabels = {
  ru: {
    "case-study": "Кейс",
    "in-progress": "В работе",
    launched: "Запущен",
  },
  en: {
    "case-study": "Case study",
    "in-progress": "In progress",
    launched: "Launched",
  },
} satisfies Record<Locale, Record<ProjectStatus, string>>;

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  linksFallback: string;
};

export function ProjectCard({
  project,
  locale,
  linksFallback,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-md border bg-card p-5 text-card-foreground shadow-sm">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>{project.year}</span>
          <span className="rounded-md border px-2 py-1">
            {statusLabels[locale][project.status]}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm leading-6 text-muted-foreground">
            {project.summary}
          </p>
        </div>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {project.highlights.map((item) => (
            <li key={item} className="leading-6">
              {item}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-2" aria-label="Project stack">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.links.length > 0 ? (
          project.links.map((link) => (
            <Button key={link.href} asChild variant="outline" size="sm">
              <a
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noreferrer" : undefined}
              >
                {link.label}
                <ExternalLink data-icon="inline-end" />
              </a>
            </Button>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">{linksFallback}</p>
        )}
      </div>
    </article>
  );
}
