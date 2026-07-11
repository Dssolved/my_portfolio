import type { CaseStudy, Locale } from "@/types/portfolio";

export const pm25AlmatyCaseStudies = {
  ru: {
    slug: "pm25-almaty-research",
    title:
      "Исследование PM2.5 в Алматы: сезонные превышения и оценка снижения воздействия",
    subtitle:
      "Университетский исследовательский проект по дисциплине Research Methods: анализ PM2.5 за 2021-2025 годы, статистические тесты и визуализации на Python.",
    year: "2026",
    context:
      "Проект был выполнен как групповая исследовательская статья в Narxoz University. PDF статьи не публикуется на сайте; кейс фокусируется на моей аналитической части работы.",
    myRole: [
      "Отвечал за аналитическую основу исследования: подготовку и очистку данных, Python-анализ, статистические тесты и визуализации.",
      "Сформировал ежедневный датасет PM2.5, проверил качество данных и подготовил summary-таблицы для статьи.",
      "Оформил раздел Results: ключевые числа, статистические выводы, таблицы и графики для интерпретации гипотез.",
    ],
    stack: ["Python", "pandas", "NumPy", "SciPy", "Jupyter", "Matplotlib", "Excel"],
    metrics: [
      {
        label: "Период анализа",
        value: "2021-2025",
        description: "Ежедневные наблюдения PM2.5 по Алматы.",
      },
      {
        label: "Валидные дни",
        value: "1,826",
        description: "Дни с минимум 18 часами PM2.5-наблюдений.",
      },
      {
        label: "Дни превышения",
        value: "57.83%",
        description: "1,056 дней выше порога 15 µg/m³.",
      },
      {
        label: "Heating season",
        value: "84.39%",
        description: "Доля дней превышения в период ноябрь-март.",
      },
    ],
    sections: [
      {
        title: "Исследовательский вопрос",
        body: [
          "Как часто уровень PM2.5 в Алматы превышал выбранный health-based guideline 15 µg/m³, и насколько ожидаемое воздействие может снижаться при использовании хорошо прилегающего респиратора по сравнению с тканевой маской?",
          "Дополнительно исследование сравнивало сезонность превышений и фильтрационную эффективность для частиц в диапазоне PM10 coarse size range.",
        ],
      },
      {
        title: "Данные и методология",
        body: [
          "В качестве источника использовался публичный Kaggle dataset Almaty Air Quality History. Сырые наблюдения агрегировались в городские hourly values, затем в daily PM2.5.",
          "День считался валидным, если было минимум 18 часов наблюдений. Основной daily показатель рассчитывался через robust median across sensors на hourly уровне и среднее по валидным часам дня.",
          "Для проверки гипотез использовались descriptive statistics, chi-square test, paired t-test и robustness checks. Расчеты по маскам основаны на literature-derived filtration efficiency assumptions.",
        ],
      },
      {
        title: "Ключевые результаты",
        body: [
          "После очистки финальный датасет включал 1,826 валидных daily PM2.5 observations. Среднее значение PM2.5 составило 30.20 µg/m³, медиана - 17.59 µg/m³.",
          "PM2.5 превышал порог 15 µg/m³ в 1,056 днях, или 57.83% валидных наблюдений.",
          "Превышения были заметно чаще в heating/inversion season: 84.39% против 39.07% в non-heating season. Chi-square test показал статистически значимую связь: χ²(1) = 373.21, p < .001.",
          "На днях превышения mean expected exposure reduction составил 18.02 µg/m³ для cloth mask и 44.08 µg/m³ для well-fitted respirator.",
        ],
      },
      {
        title: "Ограничения",
        body: [
          "Результаты являются descriptive and model-based estimates. Они не доказывают причинность, медицинскую эффективность или фактическое снижение ambient PM10 в Алматы.",
          "Оценка защиты основана на assumptions из литературы по filtration efficiency, а не на индивидуальных измерениях fit и реального поведения пользователей.",
          "Проект был выполнен как учебное исследование, поэтому на сайте показан case study, а не опубликованная научная статья.",
        ],
      },
    ],
    figures: [
      {
        title: "Daily PM2.5 concentrations",
        description:
          "Временной ряд показывает выраженные сезонные пики PM2.5 и повторяющиеся периоды превышения guideline.",
        src: "/images/projects/pm25-almaty/daily-pm25-timeseries.png",
        alt: "Daily PM2.5 concentrations in Almaty from 2021 to 2025",
        width: 3260,
        height: 1462,
      },
      {
        title: "Seasonal exceedance proportions",
        description:
          "Доля дней превышения в heating/inversion season заметно выше, чем в non-heating season.",
        src: "/images/projects/pm25-almaty/seasonal-exceedance-proportions.png",
        alt: "PM2.5 exceedance proportion by season",
        width: 2060,
        height: 1461,
      },
      {
        title: "Expected exposure reduction",
        description:
          "Модельная оценка показывает большую ожидаемую reduction для well-fitted respirator по сравнению с cloth mask.",
        src: "/images/projects/pm25-almaty/expected-exposure-reduction.png",
        alt: "Estimated PM2.5 exposure reduction by protection type",
        width: 2060,
        height: 1462,
      },
      {
        title: "Size-resolved filtration curves",
        description:
          "Сравнение filtration efficiency по particle diameter показывает различия между material types и N95 respirator.",
        src: "/images/projects/pm25-almaty/size-resolved-filtration-curves.png",
        alt: "Size-resolved filtration efficiency by protection type",
        width: 2660,
        height: 1607,
      },
    ],
    links: [
      {
        label: "Kaggle dataset",
        href: "https://www.kaggle.com/datasets/fichka/almaty-air-quality-history",
        isExternal: true,
      },
    ],
    note: "Групповой университетский проект. На этой странице описан мой вклад в данные, анализ, статистику, графики и раздел Results.",
    backHref: "/",
    backLabel: "Назад на главную",
    externalLinkLabel: "Источник данных",
  },
  en: {
    slug: "pm25-almaty-research",
    title:
      "PM2.5 Air Quality Research in Almaty: Seasonal Exceedances and Exposure Reduction",
    subtitle:
      "A university Research Methods project analyzing Almaty PM2.5 data from 2021-2025 with Python, statistical testing, and publication-style figures.",
    year: "2026",
    context:
      "The project was completed as a group research article at Narxoz University. The PDF article is not published on the site; this case study focuses on my analytical contribution.",
    myRole: [
      "Led the analytical foundation of the project: data preparation, data cleaning, Python analysis, statistical testing, and visualizations.",
      "Built the daily PM2.5 dataset, validated data quality, and prepared summary tables for the article.",
      "Formatted the Results section: key numbers, statistical conclusions, tables, and figures used to interpret the hypotheses.",
    ],
    stack: ["Python", "pandas", "NumPy", "SciPy", "Jupyter", "Matplotlib", "Excel"],
    metrics: [
      {
        label: "Analysis period",
        value: "2021-2025",
        description: "Daily PM2.5 observations for Almaty.",
      },
      {
        label: "Valid days",
        value: "1,826",
        description: "Days with at least 18 hourly PM2.5 observations.",
      },
      {
        label: "Exceedance days",
        value: "57.83%",
        description: "1,056 days above the 15 µg/m³ threshold.",
      },
      {
        label: "Heating season",
        value: "84.39%",
        description: "Exceedance proportion from November to March.",
      },
    ],
    sections: [
      {
        title: "Research Question",
        body: [
          "How often did PM2.5 levels in Almaty exceed the selected health-based guideline of 15 µg/m³, and how much expected exposure reduction could be achieved by a well-fitted respirator compared with a cloth mask?",
          "The study also compared seasonal exceedance patterns and filtration efficiency for particles in the PM10 coarse size range.",
        ],
      },
      {
        title: "Data and Methodology",
        body: [
          "The analysis used the public Kaggle dataset Almaty Air Quality History. Raw observations were aggregated into city-level hourly values and then into daily PM2.5 values.",
          "A day was considered valid if it had at least 18 hourly observations. The main daily metric used a robust median across sensors at the hourly level and then averaged valid hourly values across each day.",
          "The hypothesis tests included descriptive statistics, a chi-square test, paired t-tests, and robustness checks. Mask-related estimates were based on literature-derived filtration efficiency assumptions.",
        ],
      },
      {
        title: "Key Findings",
        body: [
          "After cleaning, the final dataset included 1,826 valid daily PM2.5 observations. Mean daily PM2.5 was 30.20 µg/m³, while the median was 17.59 µg/m³.",
          "PM2.5 exceeded the 15 µg/m³ threshold on 1,056 days, equal to 57.83% of valid observations.",
          "Exceedances were more frequent during the heating/inversion season: 84.39% compared with 39.07% in the non-heating season. The chi-square test showed a significant association: χ²(1) = 373.21, p < .001.",
          "During exceedance days, mean expected exposure reduction was 18.02 µg/m³ for a cloth mask and 44.08 µg/m³ for a well-fitted respirator.",
        ],
      },
      {
        title: "Limitations",
        body: [
          "The results are descriptive and model-based estimates. They do not prove causality, medical effectiveness, or measured reductions in ambient PM10 concentrations in Almaty.",
          "Protection estimates rely on literature-derived filtration efficiency assumptions, not individual fit tests or real-world wearing behavior.",
          "The project was completed as university coursework, so the site presents it as a case study rather than a published scientific paper.",
        ],
      },
    ],
    figures: [
      {
        title: "Daily PM2.5 concentrations",
        description:
          "The time series shows recurring seasonal PM2.5 peaks and repeated periods above the guideline.",
        src: "/images/projects/pm25-almaty/daily-pm25-timeseries.png",
        alt: "Daily PM2.5 concentrations in Almaty from 2021 to 2025",
        width: 3260,
        height: 1462,
      },
      {
        title: "Seasonal exceedance proportions",
        description:
          "The heating/inversion season had a much higher exceedance proportion than the non-heating season.",
        src: "/images/projects/pm25-almaty/seasonal-exceedance-proportions.png",
        alt: "PM2.5 exceedance proportion by season",
        width: 2060,
        height: 1461,
      },
      {
        title: "Expected exposure reduction",
        description:
          "The model-based estimate shows higher expected reduction for a well-fitted respirator than for a cloth mask.",
        src: "/images/projects/pm25-almaty/expected-exposure-reduction.png",
        alt: "Estimated PM2.5 exposure reduction by protection type",
        width: 2060,
        height: 1462,
      },
      {
        title: "Size-resolved filtration curves",
        description:
          "Particle-size-resolved filtration curves compare material types and an N95 respirator across particle diameters.",
        src: "/images/projects/pm25-almaty/size-resolved-filtration-curves.png",
        alt: "Size-resolved filtration efficiency by protection type",
        width: 2660,
        height: 1607,
      },
    ],
    links: [
      {
        label: "Kaggle dataset",
        href: "https://www.kaggle.com/datasets/fichka/almaty-air-quality-history",
        isExternal: true,
      },
    ],
    note: "Group university project. This page describes my contribution to data preparation, analysis, statistics, visualizations, and the Results section.",
    backHref: "/en",
    backLabel: "Back to home",
    externalLinkLabel: "Data source",
  },
} satisfies Record<Locale, CaseStudy>;

export const airQualityBiCaseStudies = {
  ru: {
    slug: "air-quality-power-bi-dashboard",
    title: "Power BI dashboard: качество воздуха, погода и экономические факторы",
    subtitle:
      "Проект по дисциплине Data Visualization: интерактивный Power BI dashboard на основе данных OpenAQ, Open-Meteo и World Bank за 2024 год.",
    year: "2026",
    context:
      "Проект выполнен в паре для дисциплины Data Visualization. Он отличается от PM2.5 research case: здесь фокус на BI-дашборде, сравнении городов и визуальном сторителлинге.",
    myRole: [
      "Участвовал в построении аналитического датасета: загрузка, очистка, агрегация и объединение данных из нескольких публичных источников.",
      "Готовил Python preprocessing pipeline для OpenAQ, Open-Meteo и World Bank данных перед загрузкой в Power BI.",
      "Работал над аналитикой, визуальными выводами и Power BI страницами для сравнения городов, погоды и экономического контекста.",
    ],
    stack: ["Power BI", "Python", "pandas", "OpenAQ", "Open-Meteo", "World Bank API"],
    metrics: [
      {
        label: "Города",
        value: "6",
        description: "Berlin, London, New Delhi, Paris, Seattle, Warsaw.",
      },
      {
        label: "City-day records",
        value: "2,098",
        description: "Единый датасет для анализа и Power BI dashboard.",
      },
      {
        label: "Источники",
        value: "3",
        description: "Air quality, weather и economic indicators.",
      },
      {
        label: "New Delhi PM2.5",
        value: "102.1",
        description: "Средний PM2.5 в µg/m³, самый высокий в выборке.",
      },
    ],
    sections: [
      {
        title: "Цель проекта",
        body: [
          "Проект исследует daily air-quality levels в шести городах и проверяет, как загрязнение связано с погодой и country-level economic development.",
          "Итогом стал Power BI dashboard, который позволяет сравнивать города, месяцы, pollutants, weather factors и economic context.",
        ],
      },
      {
        title: "Данные и pipeline",
        body: [
          "Данные собирались из трех независимых источников: OpenAQ для pollutants, Open-Meteo для weather data и World Bank для population, urbanisation и GDP indicators.",
          "Python pipeline фильтровал четыре pollutants, удалял физически невозможные negative concentrations, агрегировал readings до daily averages, pivot-ил pollutants в отдельные columns и объединял pollution, weather и economics.",
          "В финальный CSV добавлены engineered features: year, month, month name, quarter и PM2.5 health category.",
        ],
      },
      {
        title: "Ключевые выводы",
        body: [
          "Средний PM2.5 сильно различается между городами: New Delhi - 102.1 µg/m³, Seattle - 6.6 µg/m³, то есть разница около 15.4x.",
          "Загрязнение имеет сезонный профиль: пик по PM2.5 пришелся на ноябрь со средним 68.7 µg/m³, минимум - на август со средним 11.3 µg/m³.",
          "Wind speed показал наиболее понятную weather-связь с PM2.5: r = -0.33, что согласуется с dispersion effect.",
          "PM2.5 и PM10 сильно коррелируют: r = 0.88. O3 имел высокий уровень missing values, поэтому выводы по нему ограничены.",
        ],
      },
      {
        title: "Ограничения",
        body: [
          "Результаты являются descriptive, а не causal. В выборке только шесть городов и один год данных.",
          "Coverage pollutants uneven: O3 missing 83.8%, PM10 missing 53.5%. Paris не имел PM2.5 measurements на выбранной станции.",
          "Economic indicators находятся на country-year level, поэтому города внутри одной страны получают одинаковые макроэкономические значения.",
        ],
      },
    ],
    figures: [
      {
        title: "Power BI overview",
        description:
          "Главная страница dashboard: KPI, временной ряд PM2.5 и сравнение городов.",
        src: "/images/projects/air-quality-bi/dashboard-overview.png",
        alt: "Power BI overview dashboard for air quality analysis",
        width: 1283,
        height: 742,
      },
      {
        title: "Weather and air pollution",
        description:
          "Страница для анализа связи PM2.5 с wind speed, precipitation и temperature.",
        src: "/images/projects/air-quality-bi/dashboard-weather.png",
        alt: "Power BI weather and air pollution dashboard page",
        width: 1301,
        height: 729,
      },
      {
        title: "Country and economic context",
        description:
          "Dashboard page с картой, GDP per capita, urbanisation и city/country comparisons.",
        src: "/images/projects/air-quality-bi/dashboard-economic-context.png",
        alt: "Power BI country and economic context dashboard page",
        width: 1289,
        height: 731,
      },
      {
        title: "Average PM2.5 by city",
        description:
          "New Delhi сильно выделяется по PM2.5 относительно остальных городов и WHO guideline.",
        src: "/images/projects/air-quality-bi/average-pm25-city.png",
        alt: "Average PM2.5 by city chart",
        width: 1023,
        height: 568,
      },
      {
        title: "Pollutants and weather correlation",
        description:
          "Correlation heatmap показывает связи между pollutants and weather variables.",
        src: "/images/projects/air-quality-bi/correlation-heatmap.png",
        alt: "Correlation heatmap of pollutants and weather variables",
        width: 942,
        height: 763,
      },
    ],
    links: [
      {
        label: "OpenAQ",
        href: "https://openaq.org",
        isExternal: true,
      },
      {
        label: "Open-Meteo",
        href: "https://open-meteo.com",
        isExternal: true,
      },
      {
        label: "World Bank Data",
        href: "https://data.worldbank.org",
        isExternal: true,
      },
    ],
    note: "Учебный BI-проект для дисциплины Data Visualization. На сайте показаны выводы, pipeline и скриншоты dashboard без публикации исходного .pbix.",
    backHref: "/",
    backLabel: "Назад на главную",
    externalLinkLabel: "Источники данных",
  },
  en: {
    slug: "air-quality-power-bi-dashboard",
    title: "Power BI Dashboard: Air Quality, Weather, and Economic Factors",
    subtitle:
      "A Data Visualization course project: an interactive Power BI dashboard built from OpenAQ, Open-Meteo, and World Bank data for 2024.",
    year: "2026",
    context:
      "The project was completed in a two-person team for a Data Visualization course. It is separate from the PM2.5 research case: here the focus is BI, city comparison, and visual storytelling.",
    myRole: [
      "Contributed to the analytical dataset: downloading, cleaning, aggregating, and merging multiple public data sources.",
      "Prepared the Python preprocessing pipeline for OpenAQ, Open-Meteo, and World Bank data before loading it into Power BI.",
      "Worked on analysis, visual insights, and Power BI pages comparing cities, weather factors, and economic context.",
    ],
    stack: ["Power BI", "Python", "pandas", "OpenAQ", "Open-Meteo", "World Bank API"],
    metrics: [
      {
        label: "Cities",
        value: "6",
        description: "Berlin, London, New Delhi, Paris, Seattle, Warsaw.",
      },
      {
        label: "City-day records",
        value: "2,098",
        description: "Unified dataset for analysis and Power BI dashboarding.",
      },
      {
        label: "Sources",
        value: "3",
        description: "Air quality, weather, and economic indicators.",
      },
      {
        label: "New Delhi PM2.5",
        value: "102.1",
        description: "Average PM2.5 in µg/m³, highest in the sample.",
      },
    ],
    sections: [
      {
        title: "Project Goal",
        body: [
          "The project studies daily air-quality levels across six cities and explores whether pollution is related to weather and country-level economic development.",
          "The outcome is a Power BI dashboard for comparing cities, months, pollutants, weather factors, and economic context.",
        ],
      },
      {
        title: "Data and Pipeline",
        body: [
          "The dataset combines three independent public sources: OpenAQ for pollutants, Open-Meteo for weather, and World Bank for population, urbanisation, and GDP indicators.",
          "The Python pipeline filters four pollutants, removes physically impossible negative concentrations, aggregates readings to daily averages, pivots pollutants into columns, and merges pollution, weather, and economics.",
          "The final CSV includes engineered features: year, month, month name, quarter, and PM2.5 health category.",
        ],
      },
      {
        title: "Key Findings",
        body: [
          "Average PM2.5 differs dramatically between cities: New Delhi is 102.1 µg/m³, while Seattle is 6.6 µg/m³, a difference of about 15.4x.",
          "Pollution shows a seasonal profile: PM2.5 peaks in November at 68.7 µg/m³ and reaches its lowest point in August at 11.3 µg/m³.",
          "Wind speed has the clearest weather relationship with PM2.5: r = -0.33, consistent with a dispersion effect.",
          "PM2.5 and PM10 are strongly correlated: r = 0.88. O3 has high missingness, so O3 conclusions are limited.",
        ],
      },
      {
        title: "Limitations",
        body: [
          "The findings are descriptive, not causal. The sample includes only six cities and one year of data.",
          "Pollutant coverage is uneven: O3 is 83.8% missing and PM10 is 53.5% missing. Paris had no PM2.5 measurements at the selected station.",
          "Economic indicators are country-year level, so cities within the same country share the same macroeconomic values.",
        ],
      },
    ],
    figures: [
      {
        title: "Power BI overview",
        description:
          "Main dashboard page with KPIs, PM2.5 time series, and city comparison.",
        src: "/images/projects/air-quality-bi/dashboard-overview.png",
        alt: "Power BI overview dashboard for air quality analysis",
        width: 1283,
        height: 742,
      },
      {
        title: "Weather and air pollution",
        description:
          "Dashboard page for exploring PM2.5 relationships with wind speed, precipitation, and temperature.",
        src: "/images/projects/air-quality-bi/dashboard-weather.png",
        alt: "Power BI weather and air pollution dashboard page",
        width: 1301,
        height: 729,
      },
      {
        title: "Country and economic context",
        description:
          "Dashboard page with map, GDP per capita, urbanisation, and city/country comparisons.",
        src: "/images/projects/air-quality-bi/dashboard-economic-context.png",
        alt: "Power BI country and economic context dashboard page",
        width: 1289,
        height: 731,
      },
      {
        title: "Average PM2.5 by city",
        description:
          "New Delhi stands out strongly against other cities and the WHO guideline.",
        src: "/images/projects/air-quality-bi/average-pm25-city.png",
        alt: "Average PM2.5 by city chart",
        width: 1023,
        height: 568,
      },
      {
        title: "Pollutants and weather correlation",
        description:
          "Correlation heatmap showing relationships between pollutants and weather variables.",
        src: "/images/projects/air-quality-bi/correlation-heatmap.png",
        alt: "Correlation heatmap of pollutants and weather variables",
        width: 942,
        height: 763,
      },
    ],
    links: [
      {
        label: "OpenAQ",
        href: "https://openaq.org",
        isExternal: true,
      },
      {
        label: "Open-Meteo",
        href: "https://open-meteo.com",
        isExternal: true,
      },
      {
        label: "World Bank Data",
        href: "https://data.worldbank.org",
        isExternal: true,
      },
    ],
    note: "University BI project for a Data Visualization course. The site shows findings, pipeline, and dashboard screenshots without publishing the source .pbix file.",
    backHref: "/en",
    backLabel: "Back to home",
    externalLinkLabel: "Data sources",
  },
} satisfies Record<Locale, CaseStudy>;

export const slaReportingCaseStudies = {
  ru: {
    slug: "sla-reporting-data-reconciliation",
    title: "Автоматизация SLA-отчетности и сверки Excel-данных",
    subtitle:
      "Внутренний десктопный инструмент для подготовки SLA-отчетности: Excel-отчеты, справочники, мастер-сверка, сохранение ручных исправлений и финальный отчет по командам.",
    year: "2026",
    context:
      "Проект выполнен в рамках операционной аналитики в Просто Бэк-офис. На сайте показана обезличенная структура решения: без названий компаний, БИН, ФИО, номеров задач и внутренних формулировок.",
    myRole: [
      "Спроектировал процесс обработки: от загрузки Excel-файлов и справочников до мастер-сверки и финального SLA-отчета.",
      "Разработал десктопное приложение на Python с интерфейсом PySide6, обработкой данных через pandas/openpyxl и сборкой в Windows .exe.",
      "Реализовал сохранение ручных исправлений, работу с расчетными сессиями, журнал выполнения, Excel-экспорт и тестирование бизнес-логики.",
    ],
    stack: [
      "Python 3.13",
      "PySide6",
      "pandas",
      "openpyxl",
      "PyInstaller",
      "Send2Trash",
      "pytest",
      "unittest",
    ],
    metrics: [
      {
        label: "Скорость",
        value: "недели → минуты",
        description:
          "Основная автоматическая обработка выполняется за минуты вместо длительной ручной подготовки.",
      },
      {
        label: "Файлы",
        value: "Excel-процесс",
        description:
          "Загрузка отчетов по ФНО, справочников, данных прошлого периода и мастер-сверки.",
      },
      {
        label: "Качество",
        value: "меньше ручных ошибок",
        description:
          "Снижен риск пропущенных строк, неверных статусов и несогласованных форматов.",
      },
      {
        label: "Статус",
        value: "бета",
        description:
          "Рабочий внутренний инструмент, готовый к практическому использованию.",
      },
    ],
    sections: [
      {
        title: "Проблема",
        body: [
          "Раньше расчет SLA выполнялся вручную в Excel: нужно было собрать отчеты по разным ФНО, проверить компании по нескольким справочникам, сопоставить команды, найти исключения, сверить спорные строки, перенести данные прошлого периода и собрать итоговую сводку.",
          "Из-за большого количества файлов, ручных проверок и повторяющихся Excel-операций процесс мог занимать от нескольких дней до нескольких недель. Дополнительно рос риск ошибок: пропущенные строки, неверные статусы, разные форматы файлов, потеря ручных исправлений и несогласованный итоговый отчет.",
        ],
      },
      {
        title: "Входные данные",
        body: [
          "Решение работает с Excel-отчетами по ФНО, справочниками компаний на разные контрольные даты, актуальным справочником команд, задачами, статусами выполнения, реестрами сверки, данными прошлого периода и исправленной пользователем мастер-сверкой.",
          "Реальные клиентские данные не публикуются. В портфолио используются только безопасные схемы и мокапы, которые показывают структуру процесса без чувствительных строк.",
        ],
      },
      {
        title: "Что делает приложение",
        body: [
          "Приложение проверяет структуру Excel-файлов, нормализует компании, команды, статусы и даты, сопоставляет отчеты с несколькими справочниками, определяет актуальные задачи и исключения.",
          "Далее инструмент формирует мастер-сверку для ручной проверки, сохраняет пользовательские исправления между запусками, подтягивает переходящие задачи из прошлого периода и считает показатели выполнения по командам.",
          "На финальном этапе приложение формирует отдельные отчеты по ФНО, собирает единый итоговый SLA-отчет, хранит расчеты по сессиям, позволяет продолжить расчет, открыть прошлые сессии и смотреть журнал выполнения.",
        ],
      },
      {
        title: "Результат",
        body: [
          "Автоматизирован процесс, который раньше мог занимать до нескольких недель ручной работы в Excel. Основная обработка теперь выполняется за минуты, а итоговые Excel-файлы формируются автоматически и уже подготовлены для дальнейшей работы.",
          "Процесс стал более воспроизводимым: появились расчетные сессии, история, черновики, журнал выполнения и единый формат итогового SLA-отчета.",
        ],
      },
    ],
    figures: [
      {
        title: "Workflow обработки",
        description:
          "Безопасная схема показывает путь от Excel-отчетов и справочников до мастер-сверки, расчетных сессий и финального SLA-отчета.",
        src: "/images/projects/sla-reporting/process-flow-ru.svg",
        alt: "Workflow автоматизации SLA-отчетности и сверки Excel-данных",
        width: 1280,
        height: 720,
      },
      {
        title: "Обезличенный мокап результата",
        description:
          "Мокап демонстрирует список сессий, журнал выполнения и структуру итоговой сводки по командам без реальных данных.",
        src: "/images/projects/sla-reporting/report-mock-ru.svg",
        alt: "Обезличенный мокап desktop-инструмента и итогового SLA-отчета",
        width: 1280,
        height: 760,
      },
    ],
    links: [],
    note: "Внутренний рабочий инструмент. Реальные файлы, названия компаний, БИН, ФИО, номера задач и внутренние формулировки не публикуются.",
    backHref: "/",
    backLabel: "Назад на главную",
    externalLinkLabel: "Приватность",
  },
  en: {
    slug: "sla-reporting-data-reconciliation",
    title: "SLA Reporting and Excel Data Reconciliation Automation",
    subtitle:
      "An internal desktop tool for SLA reporting: Excel reports, reference data, master reconciliation, preserved manual corrections, and final team-level reports.",
    year: "2026",
    context:
      "The project was built as part of operations analytics work at Prosto Back-office. The site shows an anonymized structure of the solution without company names, IDs, personal data, task numbers, or internal wording.",
    myRole: [
      "Designed the processing workflow from Excel file upload and reference data checks to master reconciliation and final SLA reporting.",
      "Built a Python desktop app with a PySide6 interface, pandas/openpyxl data processing, and Windows .exe packaging.",
      "Implemented preserved manual corrections, calculation sessions, execution logs, Excel export, and business-logic tests.",
    ],
    stack: [
      "Python 3.13",
      "PySide6",
      "pandas",
      "openpyxl",
      "PyInstaller",
      "Send2Trash",
      "pytest",
      "unittest",
    ],
    metrics: [
      {
        label: "Speed",
        value: "weeks → minutes",
        description:
          "Core automatic processing runs in minutes instead of long manual preparation.",
      },
      {
        label: "Files",
        value: "Excel workflow",
        description:
          "FNO reports, reference files, previous-period data, and corrected master checks.",
      },
      {
        label: "Quality",
        value: "fewer manual errors",
        description:
          "Reduced risk of missed rows, incorrect statuses, and inconsistent report formats.",
      },
      {
        label: "Status",
        value: "beta",
        description:
          "Working internal tool ready for practical use.",
      },
    ],
    sections: [
      {
        title: "Problem",
        body: [
          "Previously, SLA calculation was performed manually in Excel: reports across different FNOs had to be collected, companies checked against several reference files, teams matched, exceptions found, disputed rows reviewed, previous-period data carried over, and the final team-level summary assembled.",
          "Because of many files, manual checks, and repeated Excel operations, the process could take from several days to several weeks. It also created a high risk of errors: missed rows, incorrect statuses, inconsistent file formats, lost manual corrections, and non-standard final reports.",
        ],
      },
      {
        title: "Input Data",
        body: [
          "The solution works with Excel reports by FNO, company reference files for different control dates, the current team reference, tasks, completion statuses, reconciliation registers, previous-period data, and a user-corrected master reconciliation file.",
          "Real client data is not published. The portfolio uses safe diagrams and mockups that show the process structure without sensitive rows.",
        ],
      },
      {
        title: "What the App Does",
        body: [
          "The app validates Excel file structure, normalizes companies, teams, statuses, and dates, matches reports against several reference files, and identifies current tasks and exceptions.",
          "It then generates a master reconciliation file for manual review, preserves user corrections between runs, pulls carry-over tasks from the previous period, and calculates completion metrics by team.",
          "At the final stage, the app generates separate FNO reports, assembles one final SLA report, stores calculations as sessions, allows previous sessions to be reopened, and provides an execution log.",
        ],
      },
      {
        title: "Result",
        body: [
          "The workflow that could previously take up to several weeks of manual Excel work was automated. The core processing now runs in minutes, and final Excel files are generated automatically in a ready-to-use structure.",
          "The process became more reproducible through calculation sessions, history, drafts, execution logs, and a unified final SLA report format.",
        ],
      },
    ],
    figures: [
      {
        title: "Processing workflow",
        description:
          "A safe diagram showing the path from Excel reports and reference files to master reconciliation, calculation sessions, and final SLA export.",
        src: "/images/projects/sla-reporting/process-flow-en.svg",
        alt: "SLA reporting and Excel reconciliation automation workflow",
        width: 1280,
        height: 720,
      },
      {
        title: "Anonymized output mockup",
        description:
          "A mockup showing sessions, execution logs, and the final team-level report structure without real data.",
        src: "/images/projects/sla-reporting/report-mock-en.svg",
        alt: "Anonymized mockup of the desktop tool and final SLA report",
        width: 1280,
        height: 760,
      },
    ],
    links: [],
    note: "Internal working tool. Real files, company names, IDs, personal data, task numbers, and internal wording are not published.",
    backHref: "/en",
    backLabel: "Back to home",
    externalLinkLabel: "Privacy",
  },
} satisfies Record<Locale, CaseStudy>;

export const warehouseLocationCaseStudies = {
  ru: {
    slug: "ecommerce-wms-analytics",
    title: "E-commerce и WMS аналитика: выбор локации нового склада",
    subtitle:
      "Сквозная аналитическая платформа на стажировке в SMALL: ETL на Airflow, 6 витрин и 5 дашбордов DataLens - от RFM-сегментации до скоринга локации нового распределительного центра на данных Shop и WMS.",
    year: "2026",
    context:
      "Стажерский проект на синтетических данных. Задача: собрать аналитику для интернет-магазина и на данных обосновать, где открывать новый распределительный центр. Дашборды опубликованы в Yandex DataLens и доступны по ссылкам ниже.",
    myRole: [
      "Спроектировал RAW-слой и ETL на Apache Airflow (декораторные DAG, TRUNCATE + INSERT) для двух источников - Shop (MySQL) и WMS (PostgreSQL).",
      "Построил 6 витрин и скоринговую модель кандидатов по странам и городам с калибровкой весов.",
      "Свел Shop- и WMS-данные в витрину производительности складов: расстояния через Haversine и JOIN по координатам заказов.",
      "Собрал 5 дашбордов в DataLens и сформулировал рекомендацию по локации на основе скоринга.",
    ],
    stack: [
      "Python",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Apache Airflow",
      "Yandex DataLens",
      "pandas",
      "Haversine",
    ],
    metrics: [
      {
        label: "Рынок-лидер",
        value: "31%",
        description: "Китай: доля всех доставленных заказов (54 из 174).",
      },
      {
        label: "final_score Китая",
        value: "0.9968",
        description: "против 0.149 у ближайшего преследователя (Индия).",
      },
      {
        label: "Аналитический слой",
        value: "6 витрин",
        description: "заказы, продажи, RFM, скоринг стран/городов, склады.",
      },
      {
        label: "ETL на Airflow",
        value: "4 DAG",
        description: "11 таблиц из MySQL и PostgreSQL в RAW-слой.",
      },
    ],
    sections: [
      {
        title: "Задача",
        body: [
          "Компания рассматривала открытие нового распределительного центра и хотела аналитическое обоснование локации, а не решение по интуиции. Параллельно нужно было выстроить базовую аналитику интернет-магазина: заказы, продажи и сегментацию клиентов.",
          "Данные приходили из двух систем: интернет-магазина (Shop, MySQL) и складского учета (WMS, PostgreSQL). Их нужно было свести в единый аналитический контур и превратить в дашборды и понятную рекомендацию.",
        ],
      },
      {
        title: "Данные и пайплайн",
        body: [
          "Собрал ETL на Apache Airflow в декораторном стиле: 4 DAG загружают 11 таблиц из двух источников (MySQL и PostgreSQL) в RAW-слой аналитической PostgreSQL по принципу TRUNCATE + INSERT, что делает загрузку идемпотентной.",
          "Поверх RAW построил 6 витрин: заказы, позиции заказов, RFM-сегментация клиентов, кандидаты-страны, кандидаты-города и производительность складов. Все витрины пересобираются одним DAG с общей валидацией на непустоту.",
        ],
      },
      {
        title: "Скоринг локации",
        body: [
          "Для каждого кандидата (страна и город) считал спрос, выручку, число клиентов и среднее расстояние Haversine до доставленных заказов. Итоговый скор: final_score = 0.45 * заказы + 0.30 * выручка + 0.15 * клиенты + 0.10 * близость.",
          "Первая версия давала вес расстоянию 20%, и в топ попадали города с одним заказом: расстояния между всеми точками в выборке близки (5800-6600 км), поэтому после нормализации давали высокий балл независимо от реального спроса. Снизил вес расстояния до 10%, а заказов - поднял до 45%; картина стала логичной.",
        ],
      },
      {
        title: "Что показали данные",
        body: [
          "На страновом уровне вывод однозначный: Китай - 54 доставленных заказа (31% от всех) и final_score 0.9968 против 0.149 у Индии. Разрыв слишком большой, чтобы быть артефактом малой выборки.",
          "На уровне города данных мало (2-3 заказа на город), рейтинги неустойчивы: лидеры по Китаю - Tangshan, Changsha, Nantong, но для финального выбора этого недостаточно.",
          "Подключение WMS дало операционный срез по 6 действующим складам: Tokyo East берет 43% всех отгрузок при минимальном расстоянии доставки (2453 км) - удобно для азиатского спроса, но это же и риск перегрузки при росте. Berlin Central лидирует по возвратам (11.8%), Sydney West - самый медленный по времени выполнения заказа.",
        ],
      },
      {
        title: "Вывод",
        body: [
          "На уровне страны решение уверенное - Китай. На уровне города данных недостаточно: для финального выбора нужны внешние факторы (стоимость аренды, транспортная инфраструктура, близость к поставщикам, таможенные условия).",
          "Главная ценность проекта - не одна цифра, а воспроизводимый контур: от сырых данных двух систем до витрин, дашбордов и честной, обоснованной рекомендации.",
        ],
      },
    ],
    figures: [
      {
        title: "Архитектура платформы",
        description:
          "Два источника (Shop MySQL, WMS PostgreSQL) проходят через ETL на Airflow в RAW-слой, затем в 6 витрин и 5 дашбордов DataLens.",
        src: "/images/projects/warehouse-location/architecture.svg",
        alt: "Схема пайплайна: источники, Airflow, RAW-слой, витрины и дашборды",
        width: 1600,
        height: 900,
      },
      {
        title: "Карта спроса по странам",
        description:
          "Размер точки - доставленные заказы, цвет - final_score. Китай выделяется и по объему, и по скорингу.",
        src: "/images/projects/warehouse-location/demand-map.png",
        alt: "Карта мира с точками спроса по странам, Китай выделен",
        width: 1600,
        height: 1000,
      },
      {
        title: "Рейтинг стран по final_score",
        description:
          "Китай около 1.0 против ~0.11-0.15 у ближайших преследователей - разрыв слишком велик, чтобы быть случайностью.",
        src: "/images/projects/warehouse-location/country-scoring.png",
        alt: "Столбчатая диаграмма скоринга стран, Китай далеко впереди",
        width: 1600,
        height: 900,
      },
      {
        title: "RFM-сегментация клиентов",
        description:
          "Распределение клиентов по сегментам: Regular Customers, Potential Loyalists, Champions, At Risk и другие.",
        src: "/images/projects/warehouse-location/rfm-segmentation.png",
        alt: "Столбчатая диаграмма распределения клиентов по RFM-сегментам",
        width: 1600,
        height: 900,
      },
      {
        title: "Загрузка складов",
        description:
          "utilization = остатки / вместимость. Даже у самого загруженного склада остается заметный запас мощности.",
        src: "/images/projects/warehouse-location/warehouse-utilization.png",
        alt: "Столбчатая диаграмма загрузки складов в процентах",
        width: 1600,
        height: 900,
      },
      {
        title: "Время выполнения заказа",
        description:
          "Среднее время полного цикла по складам; Sydney West - самый медленный (около 138 часов).",
        src: "/images/projects/warehouse-location/warehouse-fulfillment-hours.png",
        alt: "Столбчатая диаграмма среднего времени выполнения заказа по складам",
        width: 1600,
        height: 900,
      },
      {
        title: "Процент возвратов",
        description:
          "Berlin Central - максимум (11.8%), Sydney West - без возвратов на малой выборке отгрузок.",
        src: "/images/projects/warehouse-location/warehouse-return-rate.png",
        alt: "Столбчатая диаграмма процента возвратов по складам",
        width: 1600,
        height: 900,
      },
      {
        title: "Среднее расстояние доставки",
        description:
          "Tokyo East - минимум (2453 км): близость к азиатскому спросу, но и риск перегрузки (43% всех отгрузок).",
        src: "/images/projects/warehouse-location/warehouse-delivery-distance.png",
        alt: "Столбчатая диаграмма среднего расстояния доставки по складам",
        width: 1600,
        height: 900,
      },
    ],
    links: [
      {
        label: "Анализ локации нового склада",
        href: "https://datalens.yandex/2o1j6g9tpfh2l",
        isExternal: true,
      },
      {
        label: "RFM-анализ клиентов",
        href: "https://datalens.yandex/xigcmntnk724g",
        isExternal: true,
      },
      {
        label: "Аналитика заказов и продаж",
        href: "https://datalens.yandex/auh95uv1ke9it",
        isExternal: true,
      },
      {
        label: "Товарная аналитика",
        href: "https://datalens.yandex/k4xz1k8e968a3",
        isExternal: true,
      },
      {
        label: "География заказов",
        href: "https://datalens.yandex/3ou2nnylbwekm",
        isExternal: true,
      },
    ],
    note: "Учебный проект на синтетических данных в рамках стажировки в SMALL. Дашборды доступны, пока поднята учебная база; статичные графики выше сохраняют результат независимо от нее.",
    backHref: "/",
    backLabel: "Назад на главную",
    externalLinkLabel: "Живые дашборды",
  },
  en: {
    slug: "ecommerce-wms-analytics",
    title: "E-commerce & WMS Analytics: New Warehouse Location",
    subtitle:
      "An end-to-end analytics platform built during my internship at SMALL: an Airflow ETL, 6 data marts, and 5 DataLens dashboards - from RFM segmentation to scoring a new distribution center location on Shop and WMS data.",
    year: "2026",
    context:
      "An internship project on synthetic data. The goal: build analytics for an online store and justify, from data, where to open a new distribution center. The dashboards are published in Yandex DataLens and linked below.",
    myRole: [
      "Designed the RAW layer and an Apache Airflow ETL (decorator-style DAGs, TRUNCATE + INSERT) for two sources - Shop (MySQL) and WMS (PostgreSQL).",
      "Built 6 data marts and a country/city candidate scoring model with weight calibration.",
      "Joined Shop and WMS data into a warehouse-performance mart: distances via Haversine and a JOIN on order coordinates.",
      "Created 5 DataLens dashboards and delivered a data-based location recommendation.",
    ],
    stack: [
      "Python",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Apache Airflow",
      "Yandex DataLens",
      "pandas",
      "Haversine",
    ],
    metrics: [
      {
        label: "Leading market",
        value: "31%",
        description: "China: share of all delivered orders (54 of 174).",
      },
      {
        label: "China final_score",
        value: "0.9968",
        description: "vs 0.149 for the runner-up (India).",
      },
      {
        label: "Analytics layer",
        value: "6 marts",
        description: "orders, sales, RFM, country/city scoring, warehouses.",
      },
      {
        label: "Airflow ETL",
        value: "4 DAGs",
        description: "11 tables from MySQL and PostgreSQL into RAW.",
      },
    ],
    sections: [
      {
        title: "The task",
        body: [
          "The company was considering a new distribution center and wanted a data-based rationale for the location rather than a gut call. In parallel, it needed baseline store analytics: orders, sales, and customer segmentation.",
          "Data came from two systems: the online store (Shop, MySQL) and warehouse management (WMS, PostgreSQL). They had to be unified into a single analytics layer and turned into dashboards and a clear recommendation.",
        ],
      },
      {
        title: "Data & pipeline",
        body: [
          "Built an Apache Airflow ETL in decorator style: 4 DAGs load 11 tables from two sources (MySQL and PostgreSQL) into the RAW layer of an analytics PostgreSQL using TRUNCATE + INSERT, which keeps loads idempotent.",
          "On top of RAW I built 6 marts: orders, order items, RFM customer segmentation, country candidates, city candidates, and warehouse performance. All marts rebuild in a single DAG with a shared non-empty validation.",
        ],
      },
      {
        title: "Location scoring",
        body: [
          "For each candidate (country and city) I computed demand, revenue, customer count, and the average Haversine distance to delivered orders. Final score: final_score = 0.45 * orders + 0.30 * revenue + 0.15 * customers + 0.10 * proximity.",
          "The first version weighted distance at 20%, and cities with a single order climbed to the top: distances between all points in the sample are similar (5800-6600 km), so after normalization they scored high regardless of real demand. I cut the distance weight to 10% and raised orders to 45%; the picture became sensible.",
        ],
      },
      {
        title: "What the data showed",
        body: [
          "At the country level the conclusion is unambiguous: China - 54 delivered orders (31% of all) and a final_score of 0.9968 vs 0.149 for India. The gap is far too large to be a small-sample artifact.",
          "At the city level data is sparse (2-3 orders per city) and rankings are unstable: the top Chinese cities are Tangshan, Changsha, and Nantong, but that is not enough for a final choice.",
          "Adding WMS gave an operational view of 6 active warehouses: Tokyo East handles 43% of all shipments at the shortest delivery distance (2453 km) - convenient for Asian demand, but also an overload risk as it grows. Berlin Central leads on returns (11.8%), and Sydney West is the slowest on fulfillment time.",
        ],
      },
      {
        title: "Conclusion",
        body: [
          "At the country level the decision is confident - China. At the city level the data is insufficient: a final choice needs external factors (rent cost, transport infrastructure, proximity to suppliers, customs).",
          "The main value of the project is not a single number but a reproducible pipeline: from raw data in two systems to marts, dashboards, and an honest, well-grounded recommendation.",
        ],
      },
    ],
    figures: [
      {
        title: "Platform architecture",
        description:
          "Two sources (Shop MySQL, WMS PostgreSQL) flow through an Airflow ETL into the RAW layer, then into 6 marts and 5 DataLens dashboards.",
        src: "/images/projects/warehouse-location/architecture.svg",
        alt: "Pipeline diagram: sources, Airflow, RAW layer, marts, and dashboards",
        width: 1600,
        height: 900,
      },
      {
        title: "Country demand map",
        description:
          "Point size is delivered orders, color is final_score. China stands out on both volume and score.",
        src: "/images/projects/warehouse-location/demand-map.png",
        alt: "World map of demand points by country, China highlighted",
        width: 1600,
        height: 1000,
      },
      {
        title: "Country scoring by final_score",
        description:
          "China near 1.0 vs ~0.11-0.15 for the closest followers - a gap too large to be chance.",
        src: "/images/projects/warehouse-location/country-scoring.png",
        alt: "Bar chart of country scoring with China far ahead",
        width: 1600,
        height: 900,
      },
      {
        title: "RFM customer segmentation",
        description:
          "Customer distribution across segments: Regular Customers, Potential Loyalists, Champions, At Risk, and others.",
        src: "/images/projects/warehouse-location/rfm-segmentation.png",
        alt: "Bar chart of customer distribution across RFM segments",
        width: 1600,
        height: 900,
      },
      {
        title: "Warehouse utilization",
        description:
          "Utilization = units on hand / capacity. Even the busiest warehouse keeps a clear capacity buffer.",
        src: "/images/projects/warehouse-location/warehouse-utilization.png",
        alt: "Bar chart of warehouse utilization in percent",
        width: 1600,
        height: 900,
      },
      {
        title: "Order fulfillment time",
        description:
          "Average full-cycle time per warehouse; Sydney West is the slowest (about 138 hours).",
        src: "/images/projects/warehouse-location/warehouse-fulfillment-hours.png",
        alt: "Bar chart of average order fulfillment time per warehouse",
        width: 1600,
        height: 900,
      },
      {
        title: "Return rate",
        description:
          "Berlin Central is the highest (11.8%); Sydney West has no returns on a small shipment sample.",
        src: "/images/projects/warehouse-location/warehouse-return-rate.png",
        alt: "Bar chart of return rate per warehouse",
        width: 1600,
        height: 900,
      },
      {
        title: "Average delivery distance",
        description:
          "Tokyo East is the lowest (2453 km): close to Asian demand, but also an overload risk (43% of all shipments).",
        src: "/images/projects/warehouse-location/warehouse-delivery-distance.png",
        alt: "Bar chart of average delivery distance per warehouse",
        width: 1600,
        height: 900,
      },
    ],
    links: [
      {
        label: "New warehouse location analysis",
        href: "https://datalens.yandex/2o1j6g9tpfh2l",
        isExternal: true,
      },
      {
        label: "RFM customer analysis",
        href: "https://datalens.yandex/xigcmntnk724g",
        isExternal: true,
      },
      {
        label: "Orders & sales analytics",
        href: "https://datalens.yandex/auh95uv1ke9it",
        isExternal: true,
      },
      {
        label: "Product analytics",
        href: "https://datalens.yandex/k4xz1k8e968a3",
        isExternal: true,
      },
      {
        label: "Order geography",
        href: "https://datalens.yandex/3ou2nnylbwekm",
        isExternal: true,
      },
    ],
    note: "An internship project on synthetic data at SMALL. The dashboards are live while the training database is running; the static charts above preserve the result regardless.",
    backHref: "/en",
    backLabel: "Back to home",
    externalLinkLabel: "Live dashboards",
  },
} satisfies Record<Locale, CaseStudy>;
