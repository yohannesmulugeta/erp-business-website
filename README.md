# ERP Business Website

A professional React + Vite + TypeScript website for an Ethiopian ERP, custom-software and web-development business.

## Current status

Version one includes:

- Responsive multi-page website
- Premium dark ERP visual direction
- Custom ERP and Coffee Export ERP positioning
- Services, industries, work, process, about, FAQ and contact pages
- Original dashboard composition built with HTML/CSS
- Structured company and content data
- Accessible mobile navigation and FAQ accordion
- GitHub Pages deployment workflow
- Cloudflare Pages compatible production build

## Important placeholders

Before public launch, update `src/data/site.ts` with:

- Final company name
- Real phone and WhatsApp numbers
- Business email
- Approved logo
- Approved project details and screenshots
- Real client names only where permission exists

The contact form is intentionally a demonstration until a secure submission endpoint is configured.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages

The included workflow builds with a repository-specific base path. After pushing to GitHub:

1. Open repository Settings.
2. Open Pages.
3. Select **GitHub Actions** as the source.
4. Push to `main` or run the workflow manually.

Hash-based routing is used so supporting pages work reliably on static hosting.

## Cloudflare Pages

Use:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22`

No base-path environment variable is required for a root Cloudflare Pages deployment.
