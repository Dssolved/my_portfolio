import type { MetadataRoute } from "next";

import { caseStudies } from "@/data";
import { siteUrl } from "@/lib/site";

// Each path is served in both locales: `path` for Russian, `/en${path}` for
// English. We emit the Russian URL as canonical with hreflang alternates.
function entry(path: string): MetadataRoute.Sitemap[number] {
  const ru = `${siteUrl}${path}`;
  const en = `${siteUrl}/en${path}`;

  return {
    url: ru,
    lastModified: new Date(),
    alternates: { languages: { ru, en, "x-default": ru } },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyPaths = Object.values(caseStudies).map(
    (study) => `/projects/${study.ru.slug}`,
  );

  return [entry("/"), ...caseStudyPaths.map(entry)];
}
