import { AnimatedSection } from "@/components/ui/animated-section";
import type { PortfolioContent } from "@/types/portfolio";

type CredentialsSectionProps = {
  content: PortfolioContent;
};

export function CredentialsSection({ content }: CredentialsSectionProps) {
  const { education, certificates, languages, copy } = content;

  return (
    <AnimatedSection id="education" className="py-14">
      <div className="mb-8 flex flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">
          {copy.sections.educationEyebrow}
        </p>
        <h2 className="text-2xl font-semibold tracking-normal">
          {copy.sections.educationTitle}
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-md border bg-card p-5 text-card-foreground shadow-sm">
          {education.map((item) => (
            <div key={`${item.institution}-${item.program}`} className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold">{item.institution}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.degree} · {item.program}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.location} · {item.period}
                </p>
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
          <section className="rounded-md border bg-card p-5 text-card-foreground shadow-sm">
            <h3 className="font-semibold">{copy.sections.certificatesTitle}</h3>
            <ul className="mt-4 space-y-4">
              {certificates.map((certificate) => (
                <li key={certificate.title}>
                  <p className="text-sm font-medium">{certificate.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {certificate.issuer} · {certificate.date}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-md border bg-card p-5 text-card-foreground shadow-sm">
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
