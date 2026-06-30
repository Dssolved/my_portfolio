import { ExternalLink, Mail } from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import type { PortfolioContent } from "@/types/portfolio";

type ContactSectionProps = {
  content: PortfolioContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  const { profile, copy } = content;
  const publicLinks = profile.socialLinks.filter((link) => link.isExternal);

  return (
    <AnimatedSection id="contact" className="py-16">
      <div className="data-surface rounded-md p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="section-kicker">{copy.sections.contactEyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
              {copy.sections.contactTitle}
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              {copy.sections.contactDescription}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:justify-end">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail data-icon="inline-start" />
                {profile.email}
              </a>
            </Button>
            {publicLinks.map((link) => (
              <Button key={link.href} asChild variant="outline" size="lg">
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <ExternalLink data-icon="inline-end" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
