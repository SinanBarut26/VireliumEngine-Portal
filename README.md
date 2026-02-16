# VireliumEngine-Portal

React + Vite marketing site for VireliumEngine Portal.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Routes

- `/` landing page
- `/terms` terms of service
- `/privacy` privacy policy

Backward compatible:

- `/index.html`
- `/terms.html`
- `/privacy.html`

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- SPA redirect fallback: `public/_redirects` (`/* /index.html 200`)
