import { MetadataRoute } from "next";

const BASE = "https://www.preisgucken.com";

const blogPosts = [
  "boxspringbett-kaufen-ratgeber",
  "schnaeppchen-tipps-2026",
  "sofa-kaufen-ratgeber",
  "gesundheitsprodukte-online-kaufen",
  "preisvergleich-tipps",
  "staubsauger-kaufen-ratgeber",
  "fernseher-kaufen-ratgeber",
  "gartenmoebel-kaufen-ratgeber",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                  lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`,        lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
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
