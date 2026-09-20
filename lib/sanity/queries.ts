import { groq } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/react";

const postFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  cover,
  category,
  publishedAt,
  seoTitle,
  seoDesc,
  featured
`;

const publishedFilter = `_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()`;

export const postsQuery = groq`* [${publishedFilter}] | order(publishedAt desc) { ${postFields} }`;

export const featuredPostsQuery = groq`* [${publishedFilter} && featured == true] | order(publishedAt desc) [0...3] { ${postFields} }`;

export const latestPostsQuery = groq`* [${publishedFilter}] | order(publishedAt desc) [0...3] { ${postFields} }`;

export const postBySlugQuery = groq`* [${publishedFilter} && slug.current == $slug][0] {
  ${postFields},
  content
}`;

export const postSlugsQuery = groq`* [${publishedFilter}].slug.current`;

export type PostCategory = "reforma" | "ir" | "mei" | "empresas";

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover?: (SanityImageSource & { alt?: string }) | null;
  category: PostCategory;
  publishedAt: string;
  seoTitle?: string;
  seoDesc?: string;
  featured?: boolean;
  content?: PortableTextBlock[];
}

export const CATEGORY_LABELS: Record<PostCategory, string> = {
  reforma: "Reforma Tributária",
  ir: "Imposto de Renda",
  mei: "MEI",
  empresas: "Empresas",
};
