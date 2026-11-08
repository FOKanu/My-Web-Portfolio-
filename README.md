# My Web Portfolio

Personal portfolio website of **Francis Okorie Kanu** — AI/ML Engineer with a Medical Science background, based in Berlin.

**Live site:** https://my-web-portfolio-pearl.vercel.app

## What this is

A bilingual (EN/DE) single-page portfolio built with React, TypeScript and Vite. It presents my background (Medical Science → data science → software engineering), skills, experience, education, and a curated set of **public, verifiable projects** — the same set featured on my [GitHub profile](https://github.com/FOKanu):

- **AppFly** — local-first job-search copilot (Python/FastAPI/React)
- **UniTik** — university support ticketing platform (FastAPI/pgvector/React, team project)
- **Skin Check AI** — skin-lesion scoring prototype (React Native/FastAPI/PyTorch, research prototype)
- **Machine Learning Notebooks** — facial-emotion classifiers (PyTorch, 81.2–81.7% test accuracy)
- **College Library DB** — 3NF MySQL library system (coursework, team of three)
- **Claude Skills** — structured playbooks for AI agents

Project descriptions and metrics on the site are kept consistent with what the linked repositories actually contain — no unverifiable claims, no links to private repos.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | React 18, TypeScript, Vite |
| UI | Tailwind CSS, shadcn-ui (Radix UI), Lucide icons |
| Routing / state | React Router, TanStack Query, React Hook Form + Zod |
| i18n | Custom EN/DE translation context (`src/contexts/LanguageContext.tsx`, `src/data/translations.ts`) |
| Deployment | Vercel (SPA rewrites in `vercel.json`) |

## Run locally

```bash
npm install
npm run dev      # Vite dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # ESLint
```

## Project structure

```
src/
├── components/     # Hero, About, Skills, Projects, Experience, Education,
│                   # Languages, Interests, Contact, Footer, Navigation, ui/
├── data/           # projects.ts (project catalogue), translations.ts (EN/DE)
├── contexts/       # LanguageContext (i18n state)
├── pages/          # Index, project detail pages, NotFound
└── assets/         # Background imagery
public/
├── cv/             # Downloadable CV (PDF)
└── images/         # Project preview/gallery images, og image
```

## Editing the project catalogue

Projects live in `src/data/projects.ts`. **Important:** descriptions and metrics are overridden at runtime by `src/data/translations.ts` for both `en` and `de` (`projects.items.<slug>`) — when you add or change a project, update all three places, or the UI will fall back to raw translation keys. Links marked `demoUrl: '#'` hide the demo button and link the preview to the internal project page instead.

## Deployment

Deployed on Vercel from this repository; `vercel.json` rewrites all routes to `index.html` for client-side routing. Pushes to the default branch deploy the live site.

## Licence

No open-source licence has been applied to this repository yet. All rights reserved until a licence is added.
