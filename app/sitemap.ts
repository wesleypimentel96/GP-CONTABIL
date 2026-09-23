import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
// BLOG SUSPENSO — imports sanity preservados abaixo para reativação, ver docs/blog-pausado.md
// import { getSanityClient } from "@/lib/sanity/client";
// import { postSlugsQuery } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();
  const staticRoutes = [
    "",
    "/sobre",
    "/servicos-pf",
    "/para-empresas",
    "/mei",
    "/reforma-tributaria",
    // BLOG SUSPENSO — "/blog",
    "/contato",
    "/politica-privacidade",
  ].map((route) => ({ url: `${base}${route || "/"}`, lastModified: new Date() }));

  // BLOG SUSPENSO — postRoutes removidos temporariamente
  // let slugs: string[] = [];
  // const client = getSanityClient();
  // if (client) {
  //   try {
  //     slugs = await client.fetch<string[]>(postSlugsQuery);
  //   } catch {
  //     slugs = [];
  //   }
  // }
  // const postRoutes = slugs.filter(Boolean).map((slug) => ({
  //   url: `${base}/blog/${slug}`,
  //   lastModified: new Date(),
  // }));

  // return [...staticRoutes, ...postRoutes];
  return [...staticRoutes];
}
