# Portfolio Improvement To‑Do

Status legend: [ ] To do · [x] Done · [~] In progress
Last updated: 2025-08-08

— Keep this file as the single source of truth for improvements. Check items off as you complete them. —

## 1) Branding & Metadata
- [ ] Unify name to “Francis Kanu” across the site (Footer, alt text, any copy)
- [ ] Update index.html head: title (<60 chars) and meta description (<160)
- [ ] Refresh Open Graph/Twitter meta (title, description, image)
- [ ] Create a branded OG image (headshot + brand color) and set it in index.html

## 2) CTAs & CV
- [x] Add CV PDF at public/cv/francis-kanu-fullstack-cv.pdf
- [x] Wire “Download CV” buttons in Hero and About to the PDF
- [ ] Add primary “Contact me” CTA in Hero linking to #contact

## 3) Theme (Light/Dark)
- [ ] Wrap app with ThemeProvider (next-themes) in src/App.tsx
- [ ] Add ThemeToggle in Navigation.tsx
- [ ] Persist user preference; verify accessible labels and focus states

## 4) Projects Overhaul
- [ ] Centralize data: create src/data/projects.ts with strong types
- [ ] Move project images/GIFs to public/images/projects and reference from data
- [ ] Trim tech badges to a concise core stack (≤6 per project)
- [ ] Add one key metric/impact line (e.g., “95.23% accuracy”)
- [ ] Add “View case study” button linking to detail routes
- [ ] Create project detail template: src/pages/projects/[slug].tsx
- [ ] Update Projects.tsx to consume src/data/projects.ts and link details

## 5) Accessibility & UX
- [ ] Add “Skip to content” link at top of the page
- [ ] Mark active nav with aria-current and robust focus styles
- [ ] Ensure keyboard access for horizontal nav/scroll areas
- [ ] Provide descriptive alt text for all images (hero, projects, avatars)
- [ ] Respect prefers-reduced-motion for animations/parallax
- [ ] If using a carousel, add Left/Right key support and aria-live hints

## 6) Performance
- [ ] Add loading="lazy" to non-critical images
- [ ] Optimize hero-bg.jpg and skills-bg.jpg (WebP/AVIF + proper sizes)
- [ ] Avoid background-attachment: fixed on mobile; guard via media queries
- [ ] Preload key fonts and set font-display: swap
- [ ] Consider route-level code-splitting (React.lazy) where beneficial

## 7) SEO
- [ ] Ensure one H1 per page/intent with the main keyword
- [ ] Add JSON-LD for Person + Projects (index and/or project pages)
- [ ] Add a canonical link to index.html
- [ ] Confirm clean, descriptive internal link hrefs
- [ ] Verify robots.txt is correct; add sitemap.xml if applicable

## 8) Design System & Code Structure
- [ ] Create src/data/{experience,education,languages}.ts with types
- [ ] Extract UI: ProjectVisual, TechBadgeList, StatCard components
- [ ] Review index.css and tailwind.config.ts; define semantic tokens (colors, gradients, shadows)
- [ ] Add/adjust Button variants using tokens (no hard-coded colors)

## 9) Social Proof
- [ ] Add Testimonials component (2–3 short quotes) under About or near Contact
- [ ] Optional: Add a small “Trusted by/Worked with” logo row (accessible alt text)

## 10) Contact & Analytics
- [ ] Enhance Contact form with react-hook-form + zod validation
- [ ] Optional: Store messages in Supabase (table: messages), show success/error toasts
- [ ] Add lightweight analytics (Plausible or GA) with defer and respect DNT

## 11) Housekeeping
- [ ] Update README with project overview, stack, run/deploy steps, and contact
- [ ] Add LICENSE (MIT recommended) if you plan to open-source

---

Implementation notes
- Centralize data to keep components presentational and reusable.
- Maintain semantic HTML tags and a single H1 per page.
- Use Tailwind tokens instead of hard-coded colors.
- Keep image alt text descriptive and keyword-relevant for SEO.
