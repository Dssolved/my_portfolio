import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import type { PortfolioContent } from "@/types/portfolio";

type PageShellProps = {
  children: ReactNode;
  content: PortfolioContent;
};

export function PageShell({ children, content }: PageShellProps) {
  const skipLabel =
    content.locale === "ru" ? "Перейти к содержимому" : "Skip to content";

  return (
    <div className="site-canvas flex min-h-screen flex-col text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        {skipLabel}
      </a>
      <SiteHeader content={content} />
      <main
        id="main"
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8"
      >
        {children}
      </main>
      <SiteFooter content={content} />
    </div>
  );
}
