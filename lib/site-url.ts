export const DEFAULT_SITE_URL = "http://localhost:3000";

/** URL pública do site, sempre válida: ignora env ausente ou vazia. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return raw ? raw : DEFAULT_SITE_URL;
}
