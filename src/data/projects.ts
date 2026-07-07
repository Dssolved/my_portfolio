import type { Locale, Project } from "@/types/portfolio";

export const projectsByLocale = {
  ru: [
    {
      slug: "pm25-almaty-research",
      title:
        "Исследование PM2.5 в Алматы: сезонные превышения и оценка снижения воздействия",
      summary:
        "Python-анализ PM2.5 за 2021-2025 годы: очистка данных, статистические тесты, графики и оформление Results для университетской исследовательской статьи.",
      year: "2026",
      status: "case-study",
      stack: ["Python", "pandas", "SciPy", "Jupyter", "Matplotlib"],
      featured: true,
      metrics: [
        {
          label: "Valid days",
          value: "1,826",
          description: "PM2.5 observations",
        },
        {
          label: "Exceedance",
          value: "57.83%",
          description: "days above threshold",
        },
        {
          label: "Heating season",
          value: "84.39%",
          description: "exceedance share",
        },
      ],
      previewImage: {
        src: "/images/projects/pm25-almaty/daily-pm25-timeseries.png",
        alt: "Daily PM2.5 concentrations in Almaty from 2021 to 2025",
        width: 3260,
        height: 1462,
      },
      highlights: [
        "Собрал analysis-ready daily dataset из 1,826 валидных наблюдений PM2.5.",
        "Проверил сезонные превышения: 84.39% в heating/inversion season против 39.07% в non-heating season.",
        "Подготовил статистические тесты, графики и раздел Results для статьи.",
      ],
      links: [
        {
          label: "Открыть кейс",
          href: "/projects/pm25-almaty-research",
        },
      ],
    },
    {
      slug: "sla-reporting-data-reconciliation",
      title: "Автоматизация SLA-отчетности и сверки Excel-данных",
      summary:
        "Десктопное приложение на Python для подготовки SLA-отчетности: проверка Excel-файлов, сверка справочников, мастер-сверка, сессии и финальный отчет.",
      year: "2026",
      status: "launched",
      stack: ["Python", "PySide6", "pandas", "openpyxl", "PyInstaller"],
      featured: true,
      metrics: [
        {
          label: "Скорость",
          value: "недели → минуты",
          description: "автоматическая обработка",
        },
        {
          label: "Формат",
          value: "единый отчет",
          description: "SLA по командам",
        },
        {
          label: "Статус",
          value: "бета",
          description: "внутренний инструмент",
        },
      ],
      previewImage: {
        src: "/images/projects/sla-reporting/process-flow-ru.svg",
        alt: "Схема workflow автоматизации SLA-отчетности",
        width: 1280,
        height: 720,
      },
      highlights: [
        "Автоматизировал workflow, который раньше мог занимать от нескольких дней до нескольких недель ручной работы в Excel.",
        "Реализовал проверку структуры файлов, сверку справочников, сохранение ручных исправлений и формирование финального SLA-отчета.",
        "Снизил риск ошибок в статусах, справочниках и ручных переносах между периодами.",
      ],
      links: [
        {
          label: "Открыть кейс",
          href: "/projects/sla-reporting-data-reconciliation",
        },
      ],
    },
    {
      slug: "air-quality-power-bi-dashboard",
      title: "Power BI dashboard: качество воздуха, погода и экономика",
      summary:
        "BI-проект для дисциплины Data Visualization: интерактивный dashboard по 6 городам на данных OpenAQ, Open-Meteo и World Bank.",
      year: "2026",
      status: "case-study",
      stack: ["Power BI", "Python", "pandas", "OpenAQ", "Open-Meteo"],
      featured: true,
      metrics: [
        {
          label: "Cities",
          value: "6",
          description: "cross-city view",
        },
        {
          label: "Records",
          value: "2,098",
          description: "city-day rows",
        },
        {
          label: "Sources",
          value: "3",
          description: "merged datasets",
        },
      ],
      previewImage: {
        src: "/images/projects/air-quality-bi/dashboard-overview.png",
        alt: "Power BI overview dashboard for air quality analysis",
        width: 1283,
        height: 742,
      },
      highlights: [
        "Собрал единый датасет из 2,098 city-day records за 2024 год.",
        "Объединил air quality, weather и economic indicators в Python pipeline.",
        "Построил dashboard-страницы для overview, weather analysis и economic context.",
      ],
      links: [
        {
          label: "Открыть кейс",
          href: "/projects/air-quality-power-bi-dashboard",
        },
      ],
    },
    {
      slug: "client-dialogue-analysis",
      title: "Анализ клиентских диалогов",
      summary:
        "Система для поиска ошибок, SLA-нарушений и спорных ситуаций в клиентских переписках.",
      year: "2026",
      status: "in-progress",
      stack: ["Python", "Excel", "LM Studio"],
      highlights: [
        "Прорабатываю сценарии анализа переписок и классификацию потенциальных нарушений.",
        "Работаю с данными по задачам, компаниям, командам, статусам и результатам сверки.",
        "Цель проекта - быстрее находить проблемные диалоги и снижать ручную нагрузку на разбор кейсов.",
      ],
      links: [],
    },
    {
      slug: "rfm-ecommerce-analytics",
      title: "RFM-анализ e-commerce и пайплайны данных",
      summary:
        "Стажерский аналитический проект в SMALL: RFM-сегментация, WMS-контекст и построение пайплайнов данных.",
      year: "2026",
      status: "case-study",
      stack: ["Python", "SQL", "MySQL", "PostgreSQL", "Airflow", "DataLens"],
      highlights: [
        "Работал с e-commerce данными и логикой RFM-сегментации.",
        "Изучал WMS-контекст и подготовку данных для аналитики.",
        "Строил пайплайны и витрины для последующей визуализации.",
      ],
      links: [],
    },
  ],
  en: [
    {
      slug: "pm25-almaty-research",
      title:
        "PM2.5 Air Quality Research in Almaty: Seasonal Exceedances and Exposure Reduction",
      summary:
        "Python analysis of Almaty PM2.5 data from 2021-2025: data cleaning, statistical testing, figures, and Results section formatting for a university research article.",
      year: "2026",
      status: "case-study",
      stack: ["Python", "pandas", "SciPy", "Jupyter", "Matplotlib"],
      featured: true,
      metrics: [
        {
          label: "Valid days",
          value: "1,826",
          description: "PM2.5 observations",
        },
        {
          label: "Exceedance",
          value: "57.83%",
          description: "days above threshold",
        },
        {
          label: "Heating season",
          value: "84.39%",
          description: "exceedance share",
        },
      ],
      previewImage: {
        src: "/images/projects/pm25-almaty/daily-pm25-timeseries.png",
        alt: "Daily PM2.5 concentrations in Almaty from 2021 to 2025",
        width: 3260,
        height: 1462,
      },
      highlights: [
        "Built an analysis-ready daily dataset with 1,826 valid PM2.5 observations.",
        "Tested seasonal exceedance patterns: 84.39% in the heating/inversion season vs 39.07% in the non-heating season.",
        "Prepared statistical tests, figures, and the Results section for the article.",
      ],
      links: [
        {
          label: "View case study",
          href: "/en/projects/pm25-almaty-research",
        },
      ],
    },
    {
      slug: "sla-reporting-data-reconciliation",
      title: "SLA Reporting and Excel Data Reconciliation Automation",
      summary:
        "A Python desktop app for SLA reporting: Excel file validation, reference reconciliation, master checks, calculation sessions, and final report export.",
      year: "2026",
      status: "launched",
      stack: ["Python", "PySide6", "pandas", "openpyxl", "PyInstaller"],
      featured: true,
      metrics: [
        {
          label: "Speed",
          value: "weeks → minutes",
          description: "automatic processing",
        },
        {
          label: "Format",
          value: "unified report",
          description: "team-level SLA",
        },
        {
          label: "Status",
          value: "beta",
          description: "internal tool",
        },
      ],
      previewImage: {
        src: "/images/projects/sla-reporting/process-flow-en.svg",
        alt: "SLA reporting automation workflow diagram",
        width: 1280,
        height: 720,
      },
      highlights: [
        "Automated a workflow that could previously take from several days to several weeks of manual Excel work.",
        "Implemented file structure validation, reference reconciliation, preserved manual corrections, and final SLA report generation.",
        "Reduced the risk of errors in statuses, reference data, and manual carry-over between periods.",
      ],
      links: [
        {
          label: "View case study",
          href: "/en/projects/sla-reporting-data-reconciliation",
        },
      ],
    },
    {
      slug: "air-quality-power-bi-dashboard",
      title: "Power BI Dashboard: Air Quality, Weather, and Economics",
      summary:
        "A Data Visualization course BI project: an interactive dashboard across 6 cities using OpenAQ, Open-Meteo, and World Bank data.",
      year: "2026",
      status: "case-study",
      stack: ["Power BI", "Python", "pandas", "OpenAQ", "Open-Meteo"],
      featured: true,
      metrics: [
        {
          label: "Cities",
          value: "6",
          description: "cross-city view",
        },
        {
          label: "Records",
          value: "2,098",
          description: "city-day rows",
        },
        {
          label: "Sources",
          value: "3",
          description: "merged datasets",
        },
      ],
      previewImage: {
        src: "/images/projects/air-quality-bi/dashboard-overview.png",
        alt: "Power BI overview dashboard for air quality analysis",
        width: 1283,
        height: 742,
      },
      highlights: [
        "Built a unified dataset with 2,098 city-day records for 2024.",
        "Merged air quality, weather, and economic indicators in a Python pipeline.",
        "Created dashboard pages for overview, weather analysis, and economic context.",
      ],
      links: [
        {
          label: "View case study",
          href: "/en/projects/air-quality-power-bi-dashboard",
        },
      ],
    },
    {
      slug: "client-dialogue-analysis",
      title: "Client Dialogue Analysis",
      summary:
        "A system for finding errors, SLA violations, and disputed cases in client conversations.",
      year: "2026",
      status: "in-progress",
      stack: ["Python", "Excel", "LM Studio"],
      highlights: [
        "Designing dialogue analysis scenarios and potential violation classification.",
        "Working with task, company, team, status, and reconciliation result data.",
        "The goal is to identify problematic conversations faster and reduce manual case review effort.",
      ],
      links: [],
    },
    {
      slug: "rfm-ecommerce-analytics",
      title: "RFM E-commerce Analytics and Data Pipelines",
      summary:
        "An internship analytics project at SMALL covering RFM segmentation, WMS context, and data pipeline development.",
      year: "2026",
      status: "case-study",
      stack: ["Python", "SQL", "MySQL", "PostgreSQL", "Airflow", "DataLens"],
      highlights: [
        "Worked with e-commerce data and RFM segmentation logic.",
        "Studied WMS context and data preparation for analytics.",
        "Built pipelines and analytical datasets for visualization.",
      ],
      links: [],
    },
  ],
} satisfies Record<Locale, Project[]>;

export const projects = projectsByLocale.ru;
