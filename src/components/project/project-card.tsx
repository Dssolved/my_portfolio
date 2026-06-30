import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

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

export function FeaturedProjectCard({ project, locale }: ProjectCardProps) {
  const primaryLink = project.links[0];

  return (
    <article className="data-surface grid overflow-hidden rounded-md lg:grid-cols-[0.95fr_1.05fr]">
      {project.previewImage ? (
        <div className="border-b bg-white lg:border-b-0 lg:border-r">
          <Image
            src={project.previewImage.src}
            alt={project.previewImage.alt}
            width={project.previewImage.width}
            height={project.previewImage.height}
            className="h-full min-h-64 w-full object-contain p-4"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
      ) : null}

      <div className="flex flex-col justify-between p-5 sm:p-6">
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
            <span>{project.year}</span>
            <span className="rounded-md border bg-background/60 px-2 py-1">
              {statusLabels[locale][project.status]}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="max-w-2xl text-2xl font-semibold tracking-normal">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              {project.summary}
            </p>
          </div>

          {project.metrics ? (
            <dl className="grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="border-l-2 border-primary pl-3">
                  <dt className="text-xs text-muted-foreground">{metric.label}</dt>
                  <dd className="mt-1 text-xl font-semibold">{metric.value}</dd>
                  <dd className="text-xs text-muted-foreground">
                    {metric.description}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          <ul className="space-y-2 text-sm text-muted-foreground">
            {project.highlights.slice(0, 2).map((item) => (
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

        {primaryLink ? (
          <div className="mt-6">
            <Button asChild size="lg">
              <a
                href={primaryLink.href}
                target={primaryLink.isExternal ? "_blank" : undefined}
                rel={primaryLink.isExternal ? "noreferrer" : undefined}
              >
                {primaryLink.label}
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function ProjectCard({
  project,
  locale,
  linksFallback,
}: ProjectCardProps) {
  return (
    <article className="data-surface flex h-full flex-col justify-between rounded-md p-5">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>{project.year}</span>
          <span className="rounded-md border bg-background/60 px-2 py-1">
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
          {project.highlights.slice(0, 2).map((item) => (
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
