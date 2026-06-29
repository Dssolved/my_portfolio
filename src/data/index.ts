import {
  airQualityBiCaseStudies,
  pm25AlmatyCaseStudies,
} from "@/data/case-studies";
import { copyByLocale } from "@/data/copy";
import {
  certificatesByLocale,
  educationByLocale,
  experienceByLocale,
  languagesByLocale,
} from "@/data/experience";
import { profiles } from "@/data/profile";
import { projectsByLocale } from "@/data/projects";
import { skillGroupsByLocale } from "@/data/skills";
import type { Locale, PortfolioContent } from "@/types/portfolio";

export const portfolioContent = {
  ru: {
    locale: "ru",
    alternateLocale: "en",
    alternateHref: "/en",
    profile: profiles.ru,
    projects: projectsByLocale.ru,
    skillGroups: skillGroupsByLocale.ru,
    experience: experienceByLocale.ru,
    education: educationByLocale.ru,
    certificates: certificatesByLocale.ru,
    languages: languagesByLocale.ru,
    copy: copyByLocale.ru,
  },
  en: {
    locale: "en",
    alternateLocale: "ru",
    alternateHref: "/",
    profile: profiles.en,
    projects: projectsByLocale.en,
    skillGroups: skillGroupsByLocale.en,
    experience: experienceByLocale.en,
    education: educationByLocale.en,
    certificates: certificatesByLocale.en,
    languages: languagesByLocale.en,
    copy: copyByLocale.en,
  },
} satisfies Record<Locale, PortfolioContent>;

export const caseStudies = {
  pm25Almaty: pm25AlmatyCaseStudies,
  airQualityBi: airQualityBiCaseStudies,
};

export const profile = portfolioContent.ru.profile;
export const projects = portfolioContent.ru.projects;
export const skillGroups = portfolioContent.ru.skillGroups;
export const experience = portfolioContent.ru.experience;
