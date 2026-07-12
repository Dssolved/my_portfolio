"use client";

import { usePathname } from "next/navigation";
import { ArrowLeft, Compass } from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { portfolioContent } from "@/data";

const copyByLocale = {
  ru: {
    eyebrow: "404",
    title: "Страница не найдена",
    body: "Такой страницы не существует или она была перемещена. Проверьте адрес или вернитесь на главную.",
    homeLabel: "На главную",
    projectsLabel: "Смотреть проекты",
    homeHref: "/",
    projectsHref: "/#projects",
  },
  en: {
    eyebrow: "404",
    title: "Page not found",
    body: "This page doesn't exist or has been moved. Check the URL or head back to the home page.",
    homeLabel: "Back to home",
    projectsLabel: "View projects",
    homeHref: "/en",
    projectsHref: "/en#projects",
  },
} as const;

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/en") ? "en" : "ru";
  const content = portfolioContent[locale];
  const copy = copyByLocale[locale];

  return (
    <PageShell content={content}>
      <div className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center py-16 text-center">
        <div className="data-surface flex size-16 items-center justify-center rounded-full">
          <Compass className="size-7 text-primary" />
        </div>

        <p className="section-kicker mt-6">{copy.eyebrow}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
          {copy.title}
        </h1>
        <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
          {copy.body}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={copy.homeHref}>
              <ArrowLeft data-icon="inline-start" />
              {copy.homeLabel}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={copy.projectsHref}>{copy.projectsLabel}</a>
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
