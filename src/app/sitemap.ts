import type { MetadataRoute } from "next";
import { getAllTypes } from "@/lib/queries";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/test", "/types", "/about", "/privacy"];
  const staticRoutes = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
  const typeRoutes = getAllTypes().map((type) => ({
    url: `${SITE_URL}/types/${type.id}`,
  }));
  return [...staticRoutes, ...typeRoutes];
}
