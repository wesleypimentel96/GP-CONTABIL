import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityConfigured } from "./client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
  if (!sanityConfigured()) {
    throw new Error("Sanity não configurado (NEXT_PUBLIC_SANITY_PROJECT_ID ausente).");
  }
  return builder.image(source);
}
