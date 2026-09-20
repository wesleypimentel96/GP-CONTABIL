import { getSanityClient, sanityConfigured } from "./client";
import { latestPostsQuery, type SanityPost } from "./queries";

export async function getLatestPosts(): Promise<SanityPost[]> {
  const client = getSanityClient();
  if (!client) return [];
  try {
    return await client.fetch<SanityPost[]>(latestPostsQuery, {}, { next: { revalidate: 60 } });
  } catch (e) {
    console.error("Sanity fetch failed (latestPosts):", e);
    return [];
  }
}

export async function getAllPosts(): Promise<SanityPost[]> {
  const client = getSanityClient();
  if (!client) return [];
  try {
    const { postsQuery } = await import("./queries");
    return await client.fetch<SanityPost[]>(postsQuery, {}, { next: { revalidate: 60 } });
  } catch (e) {
    console.error("Sanity fetch failed (posts):", e);
    return [];
  }
}

export { sanityConfigured };
