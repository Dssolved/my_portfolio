# Personal Portfolio

Профессиональная основа персонального сайта-портфолио на Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, Motion for React и Lucide React.

## Команды

```bash
npm run dev
```

Запускает локальный сервер разработки.

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
  app/
  components/
    layout/
    project/
    sections/
    ui/
  data/
  lib/
  types/

public/
  images/
  resume/
```

## Данные портфолио

Все данные хранятся локально и типизированы:

- `src/data/profile.ts` - профиль, навигация, контакты и социальные ссылки.
- `src/data/projects.ts` - проекты.
- `src/data/skills.ts` - группы навыков.
- `src/data/experience.ts` - опыт.
- `src/types/portfolio.ts` - типы данных.

## Настройка контента

1. Обновите имя, роль, email и ссылки в `src/data/profile.ts`.
2. Добавьте реальные проекты в `src/data/projects.ts`.
3. Положите изображения в `public/images`.
4. Положите файл резюме в `public/resume/resume.pdf`, если используете ссылку из профиля.
