import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import type { PortfolioContent } from "@/types/portfolio";

type PageShellProps = {
  children: ReactNode;
  content: PortfolioContent;
};

export function PageShell({ children, content }: PageShellProps) {
  return (
    <div className="site-canvas flex min-h-screen flex-col text-foreground">
      <SiteHeader content={content} />
      <main className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <SiteFooter content={content} />
    </div>
  );
}
