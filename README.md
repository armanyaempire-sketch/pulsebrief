# Pulse — Static Next.js / Cloudflare Pages

PulseViral is a lightweight, static-first Next.js site designed for Cloudflare Pages.

## Deployment

The site uses Next.js static export:

- next.config.ts sets output: "export"
- npm run build generates the out/ directory
- Cloudflare Pages should use Next.js (Static HTML Export)
- Build command: npx next build
- Output directory: out

The project no longer uses the OpenNext Worker deployment path.

## Structure

- app/page.tsx — article page and ad placement layout
- app/layout.tsx — site shell + global ad scripts
- components/Ad.tsx — banner/native ad slots
- components/GlobalAds.tsx — Popunder + Social Bar
- config/ads.ts — ONLY place where PulseViral ad codes should be inserted

## PulseViral ad-code rule

This project intentionally does not contain substitute ad-network codes.

Insert only the exact snippets/keys originally supplied for pulseviral.vercel.app into config/ads.ts.

Do not reuse:
- USA Trending ad codes
- Trendora ad codes
- any third-party substitute codes

## Current layout

- Responsive Next.js page
- USA Games article
- Wide banner placement
- Right-side 1:4 native
- 4:1 native at article end
- Site-wide Popunder hook
- Site-wide Social Bar hook
- Inline banner positions
- Footer banner
- Desktop/tablet/mobile responsive behavior

Automatic scrolling and synthetic click behavior have been removed.
