import type {
  Certificate,
  EducationItem,
  ExperienceItem,
  LanguageItem,
  Locale,
} from "@/types/portfolio";

export const experienceByLocale = {
  ru: [
    {
      company: "Просто Бэк-офис",
      location: "Алматы",
      role: "Операционный аналитик",
      period: "март 2026 - настоящее время",
      summary:
        "Автоматизация операционной отчетности, сверка данных и разработка инструментов для анализа качества клиентских процессов.",
      stack: ["Python", "Excel", "LM Studio"],
      highlights: [
        "Автоматизировал отчетность по проценту выполнения задач: процесс, который раньше занимал до нескольких недель, теперь выполняется за несколько минут.",
        "Реализовал обработку Excel-файлов, сверку справочников, расчет показателей и формирование итогового отчета.",
        "Разрабатываю систему анализа переписок для поиска ошибок, SLA-нарушений и спорных ситуаций в клиентских диалогах.",
      ],
    },
    {
      company: "SMALL",
      location: "Алматы",
      role: "Аналитик данных, стажер",
      period: "май 2026 - июль 2026",
      summary:
        "Стажировка в аналитике данных: e-commerce, WMS-контекст, RFM-анализ и пайплайны данных.",
      stack: ["Python", "SQL", "MySQL", "PostgreSQL", "Airflow", "DataLens"],
      highlights: [
        "Работал с RFM-анализом e-commerce данных.",
        "Участвовал в построении пайплайнов и подготовке данных для аналитических задач.",
        "Использовал SQL и Python для обработки данных и подготовки результатов.",
      ],
    },
  ],
  en: [
    {
      company: "Prosto Back-office",
      location: "Almaty",
      role: "Operations Analyst",
      period: "March 2026 - Present",
      summary:
        "Operations reporting automation, data reconciliation, and analytics tools for client process quality control.",
      stack: ["Python", "Excel", "LM Studio"],
      highlights: [
        "Automated task completion reporting: a process that previously took up to several weeks now takes a few minutes.",
        "Implemented Excel file processing, reference data reconciliation, metric calculation, and final report generation.",
        "Developing a dialogue analysis system to identify errors, SLA violations, and disputed situations in client conversations.",
      ],
    },
    {
      company: "SMALL",
      location: "Almaty",
      role: "Data Analyst Intern",
      period: "May 2026 - July 2026",
      summary:
        "Data analytics internship covering e-commerce, WMS context, RFM analysis, and data pipelines.",
      stack: ["Python", "SQL", "MySQL", "PostgreSQL", "Airflow", "DataLens"],
      highlights: [
        "Worked on RFM analysis for e-commerce data.",
        "Contributed to pipeline development and data preparation for analytics tasks.",
        "Used SQL and Python to process data and prepare analytical outputs.",
      ],
    },
  ],
} satisfies Record<Locale, ExperienceItem[]>;

export const educationByLocale = {
  ru: [
    {
      institution: "Университет Нархоз",
      degree: "Бакалавр",
      program: "Digital Engineering",
      location: "Алматы",
      period: "сентябрь 2023 - июнь 2027",
      logo: {
        src: "/images/logos/narxoz-ru.svg",
        alt: "Логотип Университета Нархоз",
        width: 168,
        height: 48,
      },
      details: ["GPA 3.71/4.00"],
    },
  ],
  en: [
    {
      institution: "Narxoz University",
      degree: "Bachelor's degree",
      program: "Digital Engineering",
      location: "Almaty",
      period: "September 2023 - June 2027",
      logo: {
        src: "/images/logos/narxoz-en.svg",
        alt: "Narxoz University logo",
        width: 168,
        height: 48,
      },
      details: ["GPA 3.71/4.00"],
    },
  ],
} satisfies Record<Locale, EducationItem[]>;

export const certificatesByLocale = {
  ru: [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "декабрь 2025",
      links: [
        {
          label: "Coursera",
          href: "https://www.coursera.org/account/accomplishments/specialization/TOV8PQ8YXIJT",
          isExternal: true,
        },
        {
          label: "Credly",
          href: "https://www.credly.com/badges/1e87dd45-6f3b-4d38-ba14-45128b51fd93/linked_in_profile",
          isExternal: true,
        },
      ],
    },
    {
      title: "Google IT Automation with Python Professional Certificate",
      issuer: "Google",
      date: "апрель 2026",
      links: [
        {
          label: "Coursera",
          href: "https://www.coursera.org/account/accomplishments/specialization/XQ8L47CMOOQI?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
          isExternal: true,
        },
        {
          label: "Credly",
          href: "https://www.credly.com/badges/775177a7-d874-41bd-a6d0-0fc2faad4b6b/linked_in_profile",
          isExternal: true,
        },
      ],
    },
  ],
  en: [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "December 2025",
      links: [
        {
          label: "Coursera",
          href: "https://www.coursera.org/account/accomplishments/specialization/TOV8PQ8YXIJT",
          isExternal: true,
        },
        {
          label: "Credly",
          href: "https://www.credly.com/badges/1e87dd45-6f3b-4d38-ba14-45128b51fd93/linked_in_profile",
          isExternal: true,
        },
      ],
    },
    {
      title: "Google IT Automation with Python Professional Certificate",
      issuer: "Google",
      date: "April 2026",
      links: [
        {
          label: "Coursera",
          href: "https://www.coursera.org/account/accomplishments/specialization/XQ8L47CMOOQI?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
          isExternal: true,
        },
        {
          label: "Credly",
          href: "https://www.credly.com/badges/775177a7-d874-41bd-a6d0-0fc2faad4b6b/linked_in_profile",
          isExternal: true,
        },
      ],
    },
  ],
} satisfies Record<Locale, Certificate[]>;

export const languagesByLocale = {
  ru: [
    { name: "Русский", level: "Родной" },
    { name: "Английский", level: "B1" },
  ],
  en: [
    { name: "Russian", level: "Native" },
    { name: "English", level: "B1" },
  ],
} satisfies Record<Locale, LanguageItem[]>;

export const experience = experienceByLocale.ru;
