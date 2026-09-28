import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pulseviral.example";
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
