import type { Locale, Profile } from "@/types/portfolio";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Dssolved",
    icon: "github",
    isExternal: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/artyom-ostanin",
    icon: "linkedin",
    isExternal: true,
  },
  {
    label: "Telegram",
    href: "https://t.me/dssolved",
    icon: "telegram",
    isExternal: true,
  },
  {
    label: "Email",
    href: "mailto:artm.ostanin@gmail.com",
    icon: "mail",
  },
] satisfies Profile["socialLinks"];

export const profiles = {
  ru: {
    name: "Артём Останин",
    role: "Операционный аналитик / Аналитик данных",
    location: "Алматы, Казахстан",
    email: "artm.ostanin@gmail.com",
    telegram: "@dssolved",
    availability:
      "Открыт к стажировкам, проектным задачам и junior-позициям в аналитике данных",
    bio: "Аналитик данных с опытом в операционной аналитике и автоматизации отчетности. Использую SQL, Python, Excel/Google Sheets и Power BI для обработки данных, проверки метрик, построения отчетов и визуализации результатов.",
    positioningNote:
      "Фокус сейчас - data analytics, операционная аналитика, автоматизация отчетности и прикладные аналитические инструменты для бизнеса.",
    resumeHref: "/resume/data-analyst.pdf",
    navItems: [
      { label: "Проекты", href: "/#projects" },
      { label: "Опыт", href: "/#experience" },
      { label: "Навыки", href: "/#skills" },
      { label: "Образование", href: "/#education" },
      { label: "Контакты", href: "/#contact" },
    ],
    socialLinks,
  },
  en: {
    name: "Artyom Ostanin",
    role: "Operations Analyst / Data Analyst",
    location: "Almaty, Kazakhstan",
    email: "artm.ostanin@gmail.com",
    telegram: "@dssolved",
    availability: "Open to internships, project work, and junior data analytics roles",
    bio: "Data analyst with hands-on experience in operations analytics and reporting automation. I use SQL, Python, Excel/Google Sheets, and Power BI to process data, validate metrics, build reports, and visualize business results.",
    positioningNote:
      "Current focus: data analytics, operations analytics, reporting automation, and practical analytics tools for business teams.",
    resumeHref: "/resume/data-analyst.pdf",
    navItems: [
      { label: "Projects", href: "/en#projects" },
      { label: "Experience", href: "/en#experience" },
      { label: "Skills", href: "/en#skills" },
      { label: "Education", href: "/en#education" },
      { label: "Contact", href: "/en#contact" },
    ],
    socialLinks,
  },
} satisfies Record<Locale, Profile>;

export const profile = profiles.ru;
