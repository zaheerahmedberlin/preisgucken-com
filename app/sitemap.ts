import { MetadataRoute } from "next";
import { BLOG_CATEGORIES, getAllPosts, parseGermanDate } from "@/lib/blogCategories";

const BASE = "https://www.preisgucken.com";

// <lastmod> must reflect real changes: Google ignores it site-wide once it
// sees the same "now" on every URL (it was the rebuild time for all of them).
// Posts use their publish date from lib/blogCategories.ts; hubs and the blog
// index use the newest post they list. The static pages below have fixed
// dates — bump the date when the page's content actually changes.
const STATIC_LASTMOD = {
  "ueber-uns": "2026-09-10",
  impressum: "2026-09-10",
  datenschutz: "2026-10-03",
  agb: "2026-09-10",
  kontakt: "2026-09-10",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  // parseGermanDate returns local midnight; emitting it as an ISO timestamp
  // would shift the day back by one in UTC, so write plain YYYY-MM-DD dates.
  const isoDay = (ms: number) => {
    const d = new Date(ms);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const newest = (dates: string[]) => isoDay(Math.max(...dates.map(parseGermanDate)));
  const latestPost = newest(posts.map((p) => p.date));
  // next.config.ts sets trailingSlash: true, so every one of these routes
  // 308-redirects a no-slash URL to the slash version — a sitemap listing
  // the no-slash form was telling Google every single URL here is "a page
  // that redirects" instead of a final destination (confirmed in Search
  // Console's Page indexing report, found 2026-08-23). The bare root is
  // exempt since "/" already ends in a slash.
  return [
    { url: BASE,                   lastModified: latestPost, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog/`,        lastModified: latestPost, changeFrequency: "weekly", priority: 0.8 },
    ...BLOG_CATEGORIES.map((c) => ({
      url: `${BASE}/blog/kategorie/${c.slug}/`,
      lastModified: newest(c.posts.map((p) => p.date)),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}/`,
      lastModified: isoDay(parseGermanDate(p.updated ?? p.date)),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${BASE}/ueber-uns/`,   lastModified: STATIC_LASTMOD["ueber-uns"], changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/impressum/`,   lastModified: STATIC_LASTMOD["impressum"], changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/datenschutz/`, lastModified: STATIC_LASTMOD["datenschutz"], changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/agb/`,         lastModified: STATIC_LASTMOD["agb"], changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/kontakt/`,     lastModified: STATIC_LASTMOD["kontakt"], changeFrequency: "yearly", priority: 0.3 },
    // cookie-einstellungen deliberately excluded — utility page, no content value for search
  ];
}
