import type { PortfolioContent } from "@/types/portfolio";

type SiteFooterProps = {
  content: PortfolioContent;
};

export function SiteFooter({ content }: SiteFooterProps) {
  const { profile } = content;

  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.role}</p>
      </div>
    </footer>
  );
}
