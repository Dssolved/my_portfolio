import type { Locale, SkillGroup } from "@/types/portfolio";

export const skillGroupsByLocale = {
  ru: [
    {
      title: "Аналитика данных",
      items: ["SQL", "Python", "pandas", "numpy", "Jupyter Notebook"],
    },
    {
      title: "Отчетность и BI",
      items: ["Excel", "Google Sheets", "Power BI", "DataLens", "DAX"],
    },
    {
      title: "Данные и пайплайны",
      items: ["MySQL", "PostgreSQL", "Airflow", "Сверка данных", "Автоматизация отчетов"],
    },
    {
      title: "Дополнительно",
      items: ["GitHub", "Основы математической статистики", "LM Studio"],
    },
  ],
  en: [
    {
      title: "Data Analytics",
      items: ["SQL", "Python", "pandas", "numpy", "Jupyter Notebook"],
    },
    {
      title: "Reporting and BI",
      items: ["Excel", "Google Sheets", "Power BI", "DataLens", "DAX"],
    },
    {
      title: "Data and Pipelines",
      items: ["MySQL", "PostgreSQL", "Airflow", "Data reconciliation", "Reporting automation"],
    },
    {
      title: "Additional",
      items: ["GitHub", "Basic mathematical statistics", "LM Studio"],
    },
  ],
} satisfies Record<Locale, SkillGroup[]>;

export const skillGroups = skillGroupsByLocale.ru;
