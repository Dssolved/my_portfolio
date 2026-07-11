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
      title: "E-commerce и WMS аналитика: ETL, RFM и выбор локации склада",
      summary:
        "Стажерский проект в SMALL: сквозной ETL-пайплайн на Airflow, 6 витрин и 5 дашбордов DataLens - от RFM-сегментации до скоринга локации нового распределительного центра.",
      year: "2026",
      status: "case-study",
      stack: ["Python", "SQL", "MySQL", "PostgreSQL", "Airflow", "DataLens"],
      featured: true,
      metrics: [
        {
          label: "Рынок-лидер",
          value: "31%",
          description: "Китай, доля доставленных заказов",
        },
        {
          label: "ETL на Airflow",
          value: "4 DAG",
          description: "11 таблиц, 2 источника",
        },
        {
          label: "Дашборды",
          value: "5 в DataLens",
          description: "6 витрин под ними",
        },
      ],
      previewImage: {
        src: "/images/projects/warehouse-location/country-scoring.png",
        alt: "Рейтинг стран по final_score: Китай далеко впереди",
        width: 1600,
        height: 900,
      },
      highlights: [
        "Построил ETL на Airflow: 4 DAG, 11 таблиц из MySQL и PostgreSQL в RAW-слой аналитической базы.",
        "Спроектировал 6 витрин (заказы, продажи, RFM, скоринг стран/городов, производительность складов) и 5 дашбордов DataLens.",
        "Свел Shop- и WMS-данные для скоринга локации склада: рынок-лидер с 31% всех доставленных заказов.",
      ],
      links: [
        {
          label: "Открыть кейс",
          href: "/projects/ecommerce-wms-analytics",
        },
      ],
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
      title: "E-commerce & WMS Analytics: ETL, RFM, and Warehouse Location",
      summary:
        "An internship project at SMALL: an end-to-end Airflow ETL pipeline, 6 data marts, and 5 DataLens dashboards - from RFM segmentation to scoring a new distribution center location.",
      year: "2026",
      status: "case-study",
      stack: ["Python", "SQL", "MySQL", "PostgreSQL", "Airflow", "DataLens"],
      featured: true,
      metrics: [
        {
          label: "Leading market",
          value: "31%",
          description: "China, share of delivered orders",
        },
        {
          label: "Airflow ETL",
          value: "4 DAGs",
          description: "11 tables, 2 sources",
        },
        {
          label: "Dashboards",
          value: "5 in DataLens",
          description: "6 marts underneath",
        },
      ],
      previewImage: {
        src: "/images/projects/warehouse-location/country-scoring.png",
        alt: "Country scoring by final_score: China far ahead",
        width: 1600,
        height: 900,
      },
      highlights: [
        "Built an Airflow ETL: 4 DAGs moving 11 tables from MySQL and PostgreSQL into the RAW layer.",
        "Designed 6 data marts (orders, sales, RFM, country/city scoring, warehouse performance) and 5 DataLens dashboards.",
        "Joined Shop and WMS data to score a warehouse location: the leading market held 31% of all delivered orders.",
      ],
      links: [
        {
          label: "View case study",
          href: "/en/projects/ecommerce-wms-analytics",
        },
      ],
    },
  ],
} satisfies Record<Locale, Project[]>;

export const projects = projectsByLocale.ru;
