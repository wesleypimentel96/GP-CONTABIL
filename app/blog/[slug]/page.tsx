import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { PageShell, InternalHero } from "@/components/layout/page-shell";
import { FinalCta } from "@/components/sections/final-cta";
import { PortableContent } from "@/components/blog/portable-content";
import { getSanityClient } from "@/lib/sanity/client";
import { postBySlugQuery, postSlugsQuery, CATEGORY_LABELS, type SanityPost } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export const revalidate = 60;

export async function generateStaticParams() {
  const client = getSanityClient();
  if (!client) return [];
  try {
    const slugs = await client.fetch<string[]>(postSlugsQuery);
    return slugs.filter(Boolean).map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

async function getPost(slug: string): Promise<SanityPost | null> {
  const client = getSanityClient();
  if (!client) return null;
  try {
    return await client.fetch<SanityPost | null>(
      postBySlugQuery,
      { slug },
      { next: { revalidate: 60 } },
    );
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Artigo não encontrado" };
  return {
    title: post.seoTitle || post.title,
    description: post.seoDesc || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.seoTitle || post.title,
      description: post.seoDesc || post.excerpt,
      publishedTime: post.publishedAt,
      images: post.cover ? [{ url: urlFor(post.cover).width(1200).url() }] : undefined,
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  // BLOG SUSPENSO — redirecionamento via middleware.ts; este arquivo está intacto
  const post = await getPost(params.slug);
  if (!post) notFound();
  const coverUrl = post.cover ? urlFor(post.cover).width(1200).url() : null;
  return (
    <PageShell>
      <InternalHero
        eyebrow={CATEGORY_LABELS[post.category] ?? post.category}
        title={post.title}
        description={post.excerpt}
      />
      <article className="section-pad bg-cream">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-ink/60">
            <Badge variant="outline">{CATEGORY_LABELS[post.category] ?? post.category}</Badge>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </time>
          </div>
          {coverUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={coverUrl} alt={post.cover?.alt ?? post.title} className="mt-6 aspect-[16/9] w-full rounded-card object-cover" />
          ) : null}
          <div className="mt-6">
            <PortableContent value={post.content} />
          </div>
        </div>
      </article>
      <FinalCta />
    </PageShell>
  );
}
