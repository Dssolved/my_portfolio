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
