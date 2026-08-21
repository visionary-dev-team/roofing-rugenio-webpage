import type { MetadataRoute } from "next"
import { business, serviceAreas } from "@/lib/business"
import { services } from "@/lib/services"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.domain
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/schedule`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  const serviceAreaRoutes: MetadataRoute.Sitemap = serviceAreas.map((a) => ({
    url: `${base}/service-areas/${a.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...serviceAreaRoutes]
}
