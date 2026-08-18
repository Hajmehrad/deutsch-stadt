import { MetadataRoute } from "next";
import { buildings } from "@/data/buildings";

const BASE_URL = "https://deutsch-stadt.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/city`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/dashboard`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE_URL}/practice`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/ai-lab`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const lessonRoutes: MetadataRoute.Sitemap = buildings.map((b) => ({
    url: `${BASE_URL}/lesson/${b.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...lessonRoutes];
}
