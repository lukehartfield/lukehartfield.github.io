# CLAUDE.md — Astro Migration & Site Modernization

## Mission
Migrate this GitHub Pages site from Jekyll to Astro and modernize its presentation.

The goal is to:
- Keep the site recognizable in structure and substance
- Improve clarity, flow, and visual polish
- Make the site feel modern, confident, and intentional
- Ensure excellent mobile and desktop experience
- Use `/context` as grounding truth for tone and positioning

This is a modernization, not a rewrite.

---

## Current State (January 2026)

### Migration Status: COMPLETE ✅

The site has been fully migrated from Jekyll to Astro with Tailwind CSS.

**Stack:**
- Astro 5.x
- Tailwind CSS 3.x
- Static output for GitHub Pages

**Pages migrated (13 total):**
- `/` - Home
- `/about/` - About
- `/projects/` - Projects index
- `/projects/keating/` - Keating Resources project
- `/projects/smartdocapprover/` - Smart Doc Approver project
- `/projects/llt/` - Ladies Let's Talk project
- `/projects/bevobnb/` - BevoBnB project
- `/projects/diamondmodel/` - Diamond Price Prediction project
- `/resume/` - Resume
- `/achievements/` - Achievements index
- `/achievements/gymnastics/` - Gymnastics detail
- `/achievements/scout/` - Eagle Scout detail
- `/travel/` - Travel gallery

**Key files:**
```
src/
├── layouts/MainLayout.astro
├── components/
│   ├── Header.astro (with emoji nav)
│   ├── Footer.astro
│   ├── Card.astro
│   ├── ProjectCard.astro
│   ├── PhotoGrid.astro
│   └── CardImage.astro
├── pages/**/*.astro
└── styles/global.css (image rules)
public/assets/ (images, PDFs)
```

---

## Image Styling Rules (IMPORTANT)

When adding or modifying images, follow these rules strictly:

### Rule 1 — Card images (fixed-height containers)
If an image is inside a `.card-body` or any container intended to be a uniform grid:
- Wrap the image in a container with a fixed height
- Use: `width: 100%`, `height: 100%`, `object-fit: cover`, `object-position: center`
- CSS class: `.card-image-wrapper` + `.card-image-container`
- Example: Achievements index page

### Rule 2 — Photo / gallery images (natural height)
If the image is part of a photo grid, gallery, or content section:
- Do not force a height
- Use: `width: 100%`, `height: auto`
- Do not apply `object-fit: cover`
- CSS class: `.photo-box` (max-width: 340px) or `.photo-box-sm` (max-width: 320px)
- Example: Home headshot, About photos, Travel gallery

### Rule 3 — Consistency
- Do not inline styles unless matching an existing pattern
- Prefer reusable CSS classes from `src/styles/global.css`
- Match the existing style of the surrounding section

---

## Key Decisions & Patterns

### Design System
- **Primary color:** Sky blue (#0ea5e9) - used for links, buttons, accents
- **Background:** Slate-50 (#f8fafc)
- **Text:** Slate-800 (#1e293b)
- **Font:** Inter (Google Fonts)

### Component Patterns
- `Card.astro` - Generic white card with border and optional hover
- `ProjectCard.astro` - Project listing with title, description, links
- `PhotoGrid.astro` - Responsive image grid following Rule 2
- `CardImage.astro` - Fixed-height card images following Rule 1

### Navigation
- Sticky header with backdrop blur
- Emoji icons in nav: 🏠 👤 💼 📄 🏅 📷
- Mobile hamburger menu with JS toggle

### Layout
- Max-width: 5xl (1024px)
- Responsive padding: px-4 sm:px-6 lg:px-8
- Section spacing: py-8 sm:py-12

---

## Build & Deploy

```bash
npm run dev      # Development server
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

**GitHub Pages deployment:**
- Configured via `.github/workflows/deploy.yml`
- Set repo Settings → Pages → Source to "GitHub Actions"

---

## Outstanding TODOs

- [ ] Clean up old Jekyll files after confirming deployment works:
  - `_config.yml`
  - `_layouts/`
  - `_includes/`
  - Root `.md` files (index.md, about.md, etc.)
  - `assets/css/style.css`
  - `assets/js/main.js`
- [ ] Consider adding a 404 page (`src/pages/404.astro`)
- [ ] Consider adding Open Graph meta tags for social sharing

---

## Sources of truth
Use these, in priority order:

1. `/context/*.md`
   - Canonical facts, positioning, scope, and constraints
2. Existing Astro pages in `src/pages/`
   - Current public-facing content
3. `src/styles/global.css`
   - Image styling rules and patterns

If content conflicts with `/context`, prefer `/context`.

---

## Styling intent ("sleek, but cool")
Interpret this as:
- Clean, modern typography
- Confident but not flashy
- Product-engineering aesthetic, not marketing fluff
- More clarity, less noise
- Thoughtful spacing and hierarchy
- Subtle motion only where it adds polish

Avoid:
- Overly playful or gimmicky design
- Heavy animations
- Buzzwordy language

---

## Content rules
- You may lightly edit wording for clarity and tone
- You may tighten sentences and remove filler
- You may unify voice across pages
- You may align phrasing with `/context/identity.md`

You must:
- Keep claims factual
- Keep metrics accurate
- Keep project scope honest

---

## When to ask the user
Only ask if blocked. Otherwise, make reasonable decisions.

If you must ask:
- Confirm base path (root vs project site)
- Confirm accent color if needed
