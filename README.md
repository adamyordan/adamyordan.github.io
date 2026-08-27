# adamyordan.github.io

Personal site. Currently a single page: security advisories and CVEs credited to me.

Next.js (App Router, static export) · shadcn/ui · Tailwind CSS v4 · pnpm.

## Develop

```bash
pnpm install
pnpm dev
```

## Editing the content

Everything on the page comes from `data/` — no components need editing.

- `data/cves.ts` — the advisory list. Copy an existing entry and fill it in.
  Order does not matter; the page sorts newest first and groups by year.
  Omit `cve` when none has been assigned and the GHSA id is shown instead;
  set `cvePending: true` to show the "CVE pending" badge, `coCredited: true`
  when credited alongside other reporters, and `embargoed: true` to keep an
  entry out of the page entirely until it is disclosed.
- `data/awards.ts` — competition results, with an optional photo.
- `data/certifications.ts` — certifications, newest first, each linking to its
  verification page.
- `data/profile.ts` — name, bio, and the links in the header.

### Award photos

`scripts/optimize-award-image.sh <source> <slug> [ffmpeg-filter]` crops and
compresses a photo into `public/awards/` and prints the width/height to paste
into the entry's `photo` block. Target 16:9 — the grid renders each photo in an
`aspect-video` box.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs
`pnpm build` (static export to `out/`) and publishes it to GitHub Pages.

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

`public/.nojekyll` is required — without it Pages strips the `_next/` directory
and the site loads unstyled.
