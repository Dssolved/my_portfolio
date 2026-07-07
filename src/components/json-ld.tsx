import { siteUrl } from "@/lib/site";
import type { PortfolioContent } from "@/types/portfolio";

type JsonLdProps = {
  content: PortfolioContent;
};

export function PersonJsonLd({ content }: JsonLdProps) {
  const { profile, locale } = content;
  const homeUrl = locale === "ru" ? siteUrl : `${siteUrl}/en`;

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.bio,
    url: homeUrl,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    sameAs: profile.socialLinks
      .filter((link) => link.isExternal)
      .map((link) => link.href),
  };

  return (
    <script
      type="application/ld+json"
      // Escape `<` to keep the inline JSON from prematurely closing the script.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
