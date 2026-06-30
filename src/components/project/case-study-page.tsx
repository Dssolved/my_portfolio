import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import type { CaseStudy, PortfolioContent } from "@/types/portfolio";

type CaseStudyPageProps = {
  caseStudy: CaseStudy;
  content: PortfolioContent;
};

export function CaseStudyPage({ caseStudy, content }: CaseStudyPageProps) {
  const caseStudyLabel = content.locale === "ru" ? "Кейс" : "Case study";
  const myRoleLabel = content.locale === "ru" ? "Моя роль" : "My role";
  const metricsLabel = content.locale === "ru" ? "Ключевые метрики" : "Key metrics";
  const figuresLabel = content.locale === "ru" ? "Визуальные артефакты" : "Visual artifacts";

  return (
    <PageShell content={content}>
      <article className="py-12 sm:py-16">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm">
            <Link href={caseStudy.backHref}>
              <ArrowLeft data-icon="inline-start" />
              {caseStudy.backLabel}
            </Link>
          </Button>
        </div>

        <header className="grid gap-8 border-b pb-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-md border bg-card/75 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-primary" />
              {caseStudy.year} · {caseStudyLabel}
            </div>
            <div className="space-y-4">
              <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
                {caseStudy.title}
              </h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                {caseStudy.subtitle}
              </p>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              {caseStudy.context}
            </p>
          </div>

          <aside className="data-surface rounded-md p-5">
            <p className="section-kicker">{myRoleLabel}</p>
            <ul className="mt-4 divide-y text-sm leading-6 text-muted-foreground">
              {caseStudy.myRole.map((item) => (
                <li key={item} className="py-3 first:pt-0">
                  {item}
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Case study stack">
              {caseStudy.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </header>

        <section className="py-10">
          <div className="mb-5 flex items-center gap-3">
            <p className="section-kicker">{metricsLabel}</p>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label} className="data-surface rounded-md p-5">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="mt-2 text-3xl font-semibold">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-8">
            {caseStudy.sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-normal">
                  {section.title}
                </h2>
                <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section className="data-surface rounded-md p-5">
              <h2 className="font-semibold">{caseStudy.externalLinkLabel}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {caseStudy.links.map((link) => (
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
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {caseStudy.note}
              </p>
            </section>
          </div>

          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <p className="section-kicker">{figuresLabel}</p>
              <div className="h-px flex-1 bg-border" />
            </div>

            {caseStudy.figures.map((figure) => (
              <figure
                key={figure.src}
                className="data-surface overflow-hidden rounded-md"
              >
                <Image
                  src={figure.src}
                  alt={figure.alt}
                  width={figure.width}
                  height={figure.height}
                  className="h-auto w-full bg-white"
                  sizes="(min-width: 1024px) 54vw, 100vw"
                />
                <figcaption className="space-y-1 border-t p-4">
                  <p className="text-sm font-medium">{figure.title}</p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {figure.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </section>
        </div>
      </article>
    </PageShell>
  );
}
