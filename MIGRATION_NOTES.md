# Migration Notes: Jekyll to Astro

This document summarizes the changes made during the migration from Jekyll to Astro.

## Overview

- **Framework**: Jekyll → Astro 5.x
- **Styling**: Bootstrap 5 + custom CSS → Tailwind CSS
- **Build Output**: Static HTML (GitHub Pages compatible)

## Structural Changes

### Directory Structure

```
Before (Jekyll):
├── _layouts/default.html
├── _includes/header.html, footer.html
├── assets/css/style.css
├── index.md, about.md, resume.md, etc.
├── projects/*.md
├── achievements/**/*.md

After (Astro):
├── src/
│   ├── layouts/MainLayout.astro
│   ├── components/Header.astro, Footer.astro, Card.astro, etc.
│   └── pages/**/*.astro
├── public/assets/ (static files)
├── astro.config.mjs
├── tailwind.config.mjs
```

### Pages Migrated (13 total)

| Route | Status |
|-------|--------|
| `/` | Migrated |
| `/about/` | Migrated |
| `/projects/` | Migrated |
| `/projects/keating/` | Migrated |
| `/projects/smartdocapprover/` | Migrated |
| `/projects/llt/` | Migrated |
| `/projects/bevobnb/` | Migrated |
| `/projects/diamondmodel/` | Migrated |
| `/resume/` | Migrated |
| `/achievements/` | Migrated |
| `/achievements/gymnastics/` | Migrated |
| `/achievements/scout/` | Migrated |
| `/travel/` | Migrated |

## URL Changes

All existing URLs have been preserved. The following redirects from the old Jekyll site are no longer needed (handled by static file structure):

- `/Home` → `/`
- `/Home/About` → `/about/`
- `/Home/Resume` → `/resume/`
- etc.

## Content Changes

### Tone & Copy Refinements

Per the `/context` files, copy was refined to be:
- More confident and intentional
- Less filler, more clarity
- Aligned with the "data and systems builder" positioning

### Specific Wording Updates

1. **Home page**: Removed "Welcome to my Home Page" for a cleaner intro
2. **About page**: Streamlined professional experience descriptions
3. **Project pages**: Added clearer metrics and outcomes where available
4. **All pages**: Removed emojis per styling guidelines

## Design Changes

### Visual Improvements

- Clean, modern typography (Inter font)
- Consistent card-based layout
- Improved visual hierarchy with proper spacing
- Subtle hover states and transitions
- Mobile-first responsive design

### Color Palette

- Primary: Sky blue (#0ea5e9)
- Neutral backgrounds: Slate-50 (#f8fafc)
- Text: Slate-800 (#1e293b)

### Components Created

1. `MainLayout.astro` - Base page template
2. `Header.astro` - Sticky navigation with mobile menu
3. `Footer.astro` - Social links and copyright
4. `Card.astro` - Reusable card component
5. `ProjectCard.astro` - Project listing cards
6. `PhotoGrid.astro` - Responsive image grid

## Technical Notes

### Dependencies

```json
{
  "@astrojs/tailwind": "^6.0.2",
  "astro": "^5.17.1",
  "tailwindcss": "^3.4.19"
}
```

### Build Commands

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview production build

### Deployment

Configure GitHub Pages to deploy from GitHub Actions using the official Astro deploy action, or from the `dist/` folder.

## Files to Remove (Old Jekyll)

After confirming the Astro site works, these Jekyll files can be removed:
- `_config.yml`
- `_layouts/`
- `_includes/`
- `Gemfile`, `Gemfile.lock`
- Root-level `.md` files (index.md, about.md, etc.)
- `assets/css/style.css` (replaced by Tailwind)
- `assets/js/main.js`

## What Was Kept

- All images in `assets/`
- Resume PDF
- Project screenshots

---

*Migration completed: January 2026*
