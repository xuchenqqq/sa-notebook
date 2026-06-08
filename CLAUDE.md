# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A VitePress documentation site for 系统分析师 (System Analyst) exam preparation notes. Content is in Chinese. Deployed via GitHub Actions to GitHub Pages at `/sa-notebook/`.

## Commands

```
npm run docs:dev      # Start dev server with hot reload
npm run docs:build    # Production build into docs/.vitepress/dist
npm run docs:preview  # Preview the production build locally
```

## Architecture

- `docs/.vitepress/config.mts` — VitePress config: site title, nav, sidebar, base path (`/sa-notebook/`)
- `docs/index.md` — Home page with hero section and feature cards
- `docs/study-guide.md` — Static study guide page
- `docs/knowledge-map.md` — Dynamically renders a list of all `.md` files under `docs/knowledges/` using `import.meta.glob` at build time. Groups files by their parent directory name and generates links automatically.
- `docs/knowledges/` — Knowledge notes organized in chapter subdirectories (e.g., `ch1-绪论/`, `ch2-数学与工程基础/`). Add new `.md` files here and they appear on the knowledge map automatically.

## Deployment

Push to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`. It builds with `npm run docs:build` and deploys the `docs/.vitepress/dist` artifact to GitHub Pages. The site is served at `https://<user>.github.io/sa-notebook/`.
