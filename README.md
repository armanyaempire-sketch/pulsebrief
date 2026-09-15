# Pulse — Next.js

A responsive Next.js/App Router version of the Pulse project.

## Structure

- `app/page.tsx` — article page and ad placement layout
- `app/layout.tsx` — site shell + global ad scripts
- `components/Ad.tsx` — banner/native ad slots
- `components/GlobalAds.tsx` — Popunder + Social Bar
- `config/ads.ts` — ONLY place where Pulseviral ad codes should be inserted

## Pulseviral ad-code rule

This project intentionally does not contain substitute ad-network codes.

Insert only the exact snippets/keys originally supplied for `pulseviral.vercel.app` into `config/ads.ts`.

Do not reuse:
- USA Trending ad codes
- Trendora ad codes
- any third-party substitute codes

## Requested layout implemented

- Responsive Next.js page
- ~1,000-word USA Games article
- Wide banner above the article title
- Wide banner below the article title
- Right-side 1:4 native
- 4:1 native at article end
- Site-wide Popunder hook
- Site-wide Social Bar hook
- 10 additional inline banner positions
- Footer banner
- Desktop/tablet/mobile responsive behavior
