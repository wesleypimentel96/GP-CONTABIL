import { createClient, type SanityClient } from "next-sanity";

function getProjectId(): string | null {
  const raw = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
  return raw ? raw : null;
}

function getDataset(): string {
  const raw = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim();
  return raw ? raw : "production";
}

export function sanityConfigured(): boolean {
  return getProjectId() !== null;
}

let cached: SanityClient | null = null;

/** Retorna o client Sanity ou null quando não configurado (sem lançar erro no import). */
export function getSanityClient(): SanityClient | null {
  const projectId = getProjectId();
  if (!projectId) return null;
  if (!cached) {
    cached = createClient({
      projectId,
      dataset: getDataset(),
      apiVersion: "2024-01-01",
      useCdn: process.env.NODE_ENV === "production",
      token: process.env.SANITY_API_READ_TOKEN?.trim() || undefined,
      perspective: "published",
    });
  }
  return cached;
}
