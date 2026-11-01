import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  return [
    { url: site.url, lastModified: agora },
    { url: `${site.url}/privacidade`, lastModified: agora },
  ];
}
