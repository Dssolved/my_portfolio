"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  CodeXml,
  Mail,
  Menu,
  Send,
  X,
  type LucideIcon,
} from "lucide-react";
import { Dialog } from "radix-ui";

import { Button } from "@/components/ui/button";
import { getAlternateHref } from "@/lib/locale";
import type { PortfolioContent, SocialIcon } from "@/types/portfolio";

const socialIcons = {
  github: CodeXml,
  linkedin: BriefcaseBusiness,
  telegram: Send,
  mail: Mail,
} satisfies Record<SocialIcon, LucideIcon>;

type MobileNavProps = {
  content: PortfolioContent;
};

export function MobileNav({ content }: MobileNavProps) {
  const { profile, copy, locale } = content;
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const alternateHref = getAlternateHref(pathname, locale);

  const openLabel = locale === "ru" ? "Открыть меню" : "Open menu";
  const closeLabel = locale === "ru" ? "Закрыть меню" : "Close menu";

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="md:hidden"
          aria-label={openLabel}
        >
          <Menu />
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out md:hidden" />
        <Dialog.Content
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col border-l bg-background p-6 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right md:hidden"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="size-2 rounded-full bg-primary" />
              {profile.name}
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon-sm" aria-label={closeLabel}>
                <X />
              </Button>
            </Dialog.Close>
          </div>

          <nav
            className="mt-8 flex flex-col gap-1"
            aria-label={copy.mainNavigationLabel}
          >
            {profile.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex items-center justify-between gap-2 border-t pt-6">
            <Button asChild variant="outline" size="sm">
              <Link href={alternateHref} onClick={() => setOpen(false)}>
                {copy.languageSwitchLabel}
              </Link>
            </Button>

            <div className="flex items-center gap-1">
              {profile.socialLinks.map((link) => {
                const Icon = socialIcons[link.icon];

                return (
                  <Button key={link.href} asChild variant="ghost" size="icon">
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
