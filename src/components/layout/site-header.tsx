import Link from "next/link";
import {
  BriefcaseBusiness,
  CodeXml,
  Mail,
  Send,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PortfolioContent, SocialIcon } from "@/types/portfolio";

const socialIcons = {
  github: CodeXml,
  linkedin: BriefcaseBusiness,
  telegram: Send,
  mail: Mail,
} satisfies Record<SocialIcon, LucideIcon>;

type SiteHeaderProps = {
  content: PortfolioContent;
};

export function SiteHeader({ content }: SiteHeaderProps) {
  const { profile, copy, locale, alternateHref } = content;
  const homeHref = locale === "ru" ? "/" : "/en";

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href={homeHref}
          className="shrink-0 text-sm font-semibold tracking-normal text-foreground"
        >
          {profile.name}
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm text-muted-foreground md:flex"
          aria-label={copy.mainNavigationLabel}
        >
          {profile.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="sm">
            <Link href={alternateHref}>{copy.languageSwitchLabel}</Link>
          </Button>

          {profile.socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];

            return (
              <Button key={link.href} asChild variant="ghost" size="icon-sm">
                <a
                  href={link.href}
                  aria-label={link.label}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noreferrer" : undefined}
                >
                  <Icon />
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
