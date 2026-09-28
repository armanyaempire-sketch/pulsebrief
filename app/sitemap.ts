import type { MetadataRoute } from "next";

// Required for Next.js static export of sitemap.xml.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pulsebrief-6sz.pages.dev";
  const paths = [
    "/",
    "/guides/compare-gaming-platforms/",
    "/guides/us-mobile-gaming/",
    "/about/",
    "/editorial-policy/",
    "/sources/",
    "/privacy-policy/",
    "/disclaimer/",
    "/contact/",
  ];

  return paths.map((path) => ({
    url: baseUrl + path,
    lastModified: new Date("2026-09-28"),
  }));
}
