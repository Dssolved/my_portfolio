import {
  ArrowRight,
  ChartColumnIncreasing,
  DatabaseZap,
  Download,
  ExternalLink,
  FileText,
  MapPin,
  TimerReset,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import type { Locale, PortfolioContent } from "@/types/portfolio";

type HeroSectionProps = {
  content: PortfolioContent;
};

const heroContentByLocale: Record<
  Locale,
  {
    badge: string;
    intro: string;
    profileTitle: string;
    profileRows: [string, string][];
    stats: {
      label: string;
      value: string;
      detail: string;
      icon: typeof TimerReset;
    }[];
  }
> = {
  ru: {
    badge: "Портфолио аналитика данных",
    intro:
      "Работаю на стыке операционной аналитики, автоматизации отчетности и аналитики данных. Пишу Python/SQL-решения для обработки данных, сверок, пайплайнов и понятной визуализации результатов.",
    profileTitle: "Аналитический профиль",
    profileRows: [
      ["Стек", "Python · SQL · Excel · Power BI"],
      ["Автоматизация", "отчеты · пайплайны · внутренние инструменты"],
      ["ИИ в работе", "ChatGPT · Claude · Codex · LM Studio"],
      ["Контекст", "бизнес-процессы · электронная коммерция · качество воздуха"],
    ],
    stats: [
      {
        label: "Автоматизация отчетности",
        value: "недели → минуты",
        detail: "ручной процесс стал Python-инструментом",
        icon: TimerReset,
      },
      {
        label: "PM2.5 исследование",
        value: "1,826 дней",
        detail: "очистка данных, графики и статистика",
        icon: DatabaseZap,
      },
      {
        label: "BI-дашборд",
        value: "6 городов · 3 источника",
        detail: "OpenAQ, Open-Meteo и World Bank",
        icon: ChartColumnIncreasing,
      },
    ],
  },
  en: {
    badge: "Data analyst portfolio",
    intro:
      "I work across operations analytics, reporting automation, and data analytics. I build Python/SQL solutions for data processing, reconciliation, pipelines, and clear result visualization.",
    profileTitle: "Analytical profile",
    profileRows: [
      ["Stack", "Python · SQL · Excel · Power BI"],
      ["Automation", "reports · pipelines · internal tools"],
      ["AI at work", "ChatGPT · Claude · Codex · LM Studio"],
      ["Context", "business processes · e-commerce · air quality"],
    ],
    stats: [
      {
        label: "Reporting automation",
        value: "weeks → minutes",
        detail: "manual process became a Python tool",
        icon: TimerReset,
      },
      {
        label: "PM2.5 research",
        value: "1,826 days",
        detail: "data cleaning, charts, and statistics",
        icon: DatabaseZap,
      },
      {
        label: "BI dashboard",
        value: "6 cities · 3 sources",
        detail: "OpenAQ, Open-Meteo, and World Bank",
        icon: ChartColumnIncreasing,
      },
    ],
  },
};

export function HeroSection({ content }: HeroSectionProps) {
  const { profile, copy, locale } = content;
  const publicLinks = profile.socialLinks.filter((link) => link.isExternal);
  const hero = heroContentByLocale[locale];

  return (
    <AnimatedSection className="flex min-h-[calc(100svh-4rem)] items-start pt-14 pb-8 sm:pt-16 lg:pt-20">
      <div className="grid w-full gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="space-y-7">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-md border bg-card/75 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-primary" />
              {hero.badge}
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-primary">
                {profile.availability}
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="max-w-3xl text-xl text-muted-foreground sm:text-2xl">
                {profile.role}
              </p>
            </div>

            <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              {hero.intro}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#projects">
                {copy.projectCta}
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`mailto:${profile.email}`}>{copy.contactCta}</a>
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {hero.stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div key={stat.label} className="data-surface rounded-md p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <Icon className="size-4 text-primary" />
                  </div>
                  <p className="mt-3 text-xl font-semibold sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {stat.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="data-surface rounded-md p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4 border-b pb-5">
            <div>
              <h2 className="text-2xl font-semibold">{hero.profileTitle}</h2>
            </div>
            <div className="rounded-md border bg-background/70 px-2 py-1 text-xs text-muted-foreground">
              2026
            </div>
          </div>

          <dl className="divide-y">
            {hero.profileRows.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 py-4 text-sm sm:grid-cols-[0.38fr_1fr] sm:gap-5"
              >
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="font-medium leading-6">{value}</dd>
              </div>
            ))}
            <div className="flex items-start gap-3 py-4 text-sm">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <dt className="font-medium">{copy.locationLabel}</dt>
                <dd className="text-muted-foreground">{profile.location}</dd>
              </div>
            </div>
          </dl>

          <div className="flex flex-wrap gap-2 pt-2">
            {publicLinks.map((link) => (
              <Button key={link.href} asChild variant="ghost" size="sm">
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <ExternalLink data-icon="inline-end" />
                </a>
              </Button>
            ))}
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <Button asChild variant="outline" size="lg">
              <a href={profile.resumeHref} target="_blank" rel="noreferrer">
                <FileText data-icon="inline-start" />
                {copy.openResumeLabel}
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={profile.resumeHref} download>
                <Download data-icon="inline-start" />
                {copy.downloadResumeLabel}
              </a>
            </Button>
          </div>
        </aside>
      </div>
    </AnimatedSection>
  );
}
