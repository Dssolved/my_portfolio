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
      title: "AI-инструменты и автоматизация",
      items: ["ChatGPT", "Claude", "Codex", "LM Studio", "LLM-assisted coding", "Внутренние инструменты"],
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
      title: "AI Tools and Automation",
      items: ["ChatGPT", "Claude", "Codex", "LM Studio", "LLM-assisted coding", "Internal tools"],
    },
  ],
} satisfies Record<Locale, SkillGroup[]>;

export const skillGroups = skillGroupsByLocale.ru;
