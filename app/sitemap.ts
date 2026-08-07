import { MetadataRoute } from "next";
import { BLOG_CATEGORIES, getAllPosts } from "@/lib/blogCategories";

const BASE = "https://www.preisgucken.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  return [
    { url: BASE,                  lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`,        lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...BLOG_CATEGORIES.map((c) => ({
      url: `${BASE}/blog/kategorie/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${BASE}/impressum`,   lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/agb`,         lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/kontakt`,     lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
