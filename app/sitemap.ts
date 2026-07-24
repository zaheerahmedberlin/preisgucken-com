import { MetadataRoute } from "next";

const BASE = "https://www.preisgucken.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                     lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`,           lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/impressum`,      lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/datenschutz`,    lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/agb`,            lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/kontakt`,        lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
