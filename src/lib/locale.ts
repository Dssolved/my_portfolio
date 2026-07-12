import type { Locale } from "@/types/portfolio";

// Maps the current path to its counterpart in the other locale, preserving
// whatever comes after the locale prefix (e.g. a case study route or a hash),
// so the language switch stays on the equivalent page instead of the home page.
export function getAlternateHref(pathname: string, locale: Locale): string {
  if (locale === "ru") {
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }

  const withoutPrefix = pathname.replace(/^\/en(?=\/|$)/, "");
  return withoutPrefix === "" ? "/" : withoutPrefix;
}
