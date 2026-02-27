# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:3000
npm run build      # Production build to /build
npm test           # Run tests in watch mode
npm run deploy     # Build + deploy to GitHub Pages (gh-pages -d build)
```

## Architecture

Single-page React portfolio deployed to GitHub Pages at `https://saitejagajula.github.io/MyPortfolio`.

**Section structure** — `App.js` composes these sections in order:
- `Header` — sticky nav with scroll-based class toggling and mobile hamburger menu (state-driven)
- `Home` — split into `Data`, `Social`, `ScrollDown` sub-components
- `About` — photo + `Info` sub-component + bio text + CV download button
- `Skills` — grid of 6 category sub-components: `Languages`, `Frameworks`, `Databases`, `Cloud`, `Testing`, `Tools`
- `Experience` — tab-toggled view (Professional Work / Education) with click-to-open modals for job detail
- `Contact` — EmailJS form (`@emailjs/browser`) with client-side validation + contact cards
- `Footer` / `ScrollUp`

**Styling** — plain CSS per component (no CSS modules, no Tailwind). Global variables defined in `src/index.css`. Icons loaded via CDN links in `public/index.html`: Boxicons (`bx`) and Unicons (`uil`).

**CV/resume** — PDF is served from `public/SAITEJAGAJULA.pdf` and referenced via `process.env.PUBLIC_URL` in `About.jsx`. Update this file to change the downloadable resume.

**EmailJS config** — service ID, template ID, and public key are hardcoded in `Contact.jsx:41-44`. To change the contact form destination, update those values.

**Deployment** — `package.json` sets `"homepage": "https://saitejagajula.github.io/MyPortfolio"`. The `npm run deploy` script runs `predeploy` (build) then `gh-pages -d build`.
