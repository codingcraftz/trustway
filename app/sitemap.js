import { experts } from "@/lib/data";

export default function sitemap() {
  const base = "https://www.trustway.kr";
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/cases", priority: 0.8 },
    { path: "/experts", priority: 0.8 },
    { path: "/location", priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));

  const expertRoutes = experts.map((e) => ({
    url: `${base}/experts/${e.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...expertRoutes];
}
