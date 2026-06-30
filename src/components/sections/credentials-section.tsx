import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated-section";
import type { PortfolioContent } from "@/types/portfolio";

type CredentialsSectionProps = {
  content: PortfolioContent;
};

export function CredentialsSection({ content }: CredentialsSectionProps) {
  const { education, certificates, languages, copy, locale } = content;
  const verifyLabel = locale === "ru" ? "Проверить:" : "Verify:";

  return (
    <AnimatedSection id="education" className="py-16">
      <div className="mb-8 flex flex-col gap-2">
        <p className="section-kicker">{copy.sections.educationEyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
          {copy.sections.educationTitle}
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="data-surface rounded-md p-5">
          {education.map((item) => (
            <div key={`${item.institution}-${item.program}`} className="space-y-3">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.institution}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.degree} · {item.program}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.location} · {item.period}
                  </p>
                </div>

                {item.logo ? (
                  <div className="flex h-12 w-40 shrink-0 items-center justify-start sm:justify-end">
                    <Image
                      src={item.logo.src}
                      alt={item.logo.alt}
                      width={item.logo.width}
                      height={item.logo.height}
                      className="h-auto max-h-10 w-auto object-contain"
                    />
                  </div>
                ) : null}
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <div className="grid gap-4">
          <section className="data-surface rounded-md p-5">
            <h3 className="font-semibold">{copy.sections.certificatesTitle}</h3>
            <ul className="mt-4 space-y-4">
              {certificates.map((certificate) => (
                <li key={certificate.title}>
                  <p className="text-sm font-medium">{certificate.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {certificate.issuer} · {certificate.date}
                  </p>
                  {certificate.links?.length ? (
                    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                      <span>{verifyLabel}</span>
                      {certificate.links.map((link, index) => (
                        <span
                          key={link.href}
                          className="inline-flex items-center gap-2"
                        >
                          {index > 0 ? <span aria-hidden>·</span> : null}
                          <a
                            href={link.href}
                            target={link.isExternal ? "_blank" : undefined}
                            rel={link.isExternal ? "noreferrer" : undefined}
                            className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
                          >
                            {link.label}
                            <ExternalLink className="size-3" />
                          </a>
                        </span>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          <section className="data-surface rounded-md p-5">
            <h3 className="font-semibold">{copy.sections.languagesTitle}</h3>
            <ul className="mt-4 space-y-2">
              {languages.map((language) => (
                <li
                  key={language.name}
                  className="flex justify-between gap-4 text-sm text-muted-foreground"
                >
                  <span>{language.name}</span>
                  <span>{language.level}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </AnimatedSection>
  );
}
