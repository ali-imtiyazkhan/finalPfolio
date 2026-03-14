import { SITE_SLUGS, DOMAIN_URL } from "@/config/siteConfig"
import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const flatSlugs = Object.values(SITE_SLUGS).flatMap((val) => (typeof val === "string" ? [val] : Object.values(val)))

  // Filter out routes that contain hash symbols (scroll links) And external routes
  const allRoutes = flatSlugs.filter((route) => typeof route === "string" && !route.includes("#") && !route.startsWith("http"))

  return allRoutes.map((url) => {
    return {
      url: DOMAIN_URL + url,
      lastModified: new Date().toISOString(),
      priority: url === "/" ? 1.0 : 0.8,
      changeFrequency: url === "/" ? "weekly" : "monthly" as "weekly" | "monthly",
    }
  })
}