# austincopps.com

Personal portfolio site for Austin Copps.

## Stack

- [Astro 4](https://astro.build) (static build target)
- Tailwind CSS v3 via `@astrojs/tailwind`
- TypeScript strict
- Google Fonts: Fraunces (display), Geist (sans), JetBrains Mono (mono)

## Pages

- `/` — About / home
- `/work` — Work history
- `/projects` — Selected projects (commercial + notable engineering)
- `/playground` — Live-demo placeholder
- `/uses` — Tools and stack I reach for

## Local dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the built dist
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and deploys `dist/` to GitHub Pages. The repo's GitHub Pages source must be set to **GitHub Actions** under *Settings → Pages*.

The custom domain (`austincopps.com`) is pinned via `public/CNAME`. DNS lives at Cloudflare; point `austincopps.com` and `www` at `austincopps.github.io` once the repo is created.
