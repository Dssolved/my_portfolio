import {
  ArrowRight,
  Download,
  ExternalLink,
  FileText,
  MapPin,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import type { PortfolioContent } from "@/types/portfolio";

type HeroSectionProps = {
  content: PortfolioContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  const { profile, copy } = content;
  const publicLinks = profile.socialLinks.filter((link) => link.isExternal);

  return (
    <AnimatedSection className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
      <div className="space-y-8">
        <div className="space-y-5">
          <p className="text-sm font-medium text-muted-foreground">
            {profile.availability}
          </p>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
              {profile.name}
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl">
              {profile.role}
            </p>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            {profile.bio}
          </p>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            {profile.positioningNote}
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
      </div>

      <aside className="rounded-md border bg-card p-5 text-card-foreground shadow-sm">
        <dl className="space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-4 text-muted-foreground" />
            <div>
              <dt className="font-medium">{copy.locationLabel}</dt>
              <dd className="text-muted-foreground">{profile.location}</dd>
            </div>
          </div>
          <div>
            <dt className="font-medium">{copy.emailLabel}</dt>
            <dd className="text-muted-foreground">{profile.email}</dd>
          </div>
          <div>
            <dt className="font-medium">{copy.telegramLabel}</dt>
            <dd className="text-muted-foreground">{profile.telegram}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-2">
          {publicLinks.map((link) => (
            <Button key={link.href} asChild variant="ghost" size="sm">
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ExternalLink data-icon="inline-end" />
              </a>
            </Button>
          ))}
        </div>

        <div className="mt-3 grid gap-2">
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
    </AnimatedSection>
  );
}
