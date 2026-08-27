# adamyordan.github.io

Personal site. Currently a single page: security advisories and CVEs credited to me.

Next.js (App Router, static export) · shadcn/ui · Tailwind CSS v4 · pnpm.

## Develop

```bash
pnpm install
pnpm dev
```

## Adding an advisory

Everything on the page comes from two files — no components need editing.

- `data/cves.ts` — the advisory list. Copy an existing entry and fill it in.
  Order does not matter; the page sorts newest first and groups by year.
  Omit `cve` when no CVE has been assigned and the GHSA id is shown instead.
  Set `coCredited: true` when credited alongside other reporters.
- `data/profile.ts` — name, bio, and the links in the header.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs
`pnpm build` (static export to `out/`) and publishes it to GitHub Pages.

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

`public/.nojekyll` is required — without it Pages strips the `_next/` directory
and the site loads unstyled.
