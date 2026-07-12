# Артём Останин — портфолио

Личный сайт-портфолио аналитика данных: проекты, опыт, навыки и резюме на русском и английском.

**Живой сайт:** https://artyom-ostanin.vercel.app/

## Стек

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack, React Compiler)
- React 19, TypeScript
- Tailwind CSS 4, [shadcn/ui](https://ui.shadcn.com) (Radix UI)
- [Motion for React](https://motion.dev) — анимации
- [Lucide React](https://lucide.dev) — иконки
- [Vercel Analytics](https://vercel.com/docs/analytics)

## Возможности

- **Две локали** (`/` — русская, `/en` — английская) с раздельными резюме, метаданными и OG-картинками для каждой.
- **Мобильная навигация** — выезжающее меню (Radix Dialog) на узких экранах.
- **SEO/шеринг**: динамические OG-превью (`next/og`), `sitemap.xml`, `robots.txt`, hreflang-альтернативы, JSON-LD (schema.org `Person`).
- **Кейсы проектов** — отдельные страницы с метриками, разделами и визуальными материалами (`src/components/project/case-study-page.tsx`).
- **Кастомная 404-страница** — с определением языка по URL и брендированным оформлением.
- **CI** — `lint + typecheck + build` на каждый push и pull request ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)).

## Команды

```bash
npm install
```

Установка зависимостей.

```bash
npm run dev
```

Запускает локальный сервер разработки на http://localhost:3000.

```bash
npm run lint
```

Проверяет код ESLint.

```bash
npm run typecheck
```

Запускает TypeScript без сборки.

```bash
npm run build
```

Собирает production-версию.

```bash
npm run start
```

Запускает собранное приложение.

## Структура

```text
src/
  app/                # маршруты App Router (RU: /, EN: /en), sitemap, robots, OG-картинки
  components/
    layout/            # оболочка страницы, header, footer, мобильное меню
    project/           # карточки и страницы кейсов проектов
    sections/          # секции главной страницы (hero, опыт, навыки, контакты)
    ui/                # shadcn/ui и локальные UI-примитивы
    json-ld.tsx        # структурированные данные Person
  data/                # все текстовые данные портфолио, типизированные
  lib/                 # siteUrl, рендер OG-картинки
  types/               # общие типы данных портфолио

public/
  images/              # изображения проектов и логотипы
  resume/              # резюме (раздельно RU/EN)

.github/workflows/     # CI (GitHub Actions)
```

## Данные портфолио

Весь текстовый контент хранится локально и типизирован — правки не требуют трогать компоненты:

- `src/data/profile.ts` — профиль, навигация, контакты, социальные ссылки.
- `src/data/projects.ts` — карточки проектов.
- `src/data/case-studies.ts` — полные страницы кейсов (метрики, разделы, фигуры, ссылки).
- `src/data/experience.ts` — опыт, образование, сертификаты, языки.
- `src/data/skills.ts` — группы навыков.
- `src/data/copy.ts` — короткие UI-подписи (кнопки, лейблы секций).
- `src/types/portfolio.ts` — типы данных.

## Настройка контента

1. Обновите имя, роль, email и ссылки в `src/data/profile.ts`.
2. Добавьте реальные проекты в `src/data/projects.ts` и, при необходимости, полные кейсы в `src/data/case-studies.ts`.
3. Положите изображения в `public/images`.
4. Положите файлы резюме в `public/resume/data-analyst-ru.pdf` и `public/resume/data-analyst-en.pdf` — сайт отдает нужный файл по локали.

## Деплой

Сайт задеплоен на [Vercel](https://vercel.com) с автодеплоем из ветки `main`.

Обязательная переменная окружения:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

Без нее в OG-картинках, sitemap, robots.txt и JSON-LD будет подставляться `localhost`. Vercel также умеет определять production-домен автоматически (`VERCEL_PROJECT_PRODUCTION_URL`), но явная переменная надежнее.
