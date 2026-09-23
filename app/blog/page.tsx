import type { Metadata } from "next";
import { PageShell, InternalHero } from "@/components/layout/page-shell";
import { FinalCta } from "@/components/sections/final-cta";
import { PostCard } from "@/components/blog/post-card";
import { Reveal } from "@/components/shared/reveal";
import { getAllPosts } from "@/lib/sanity/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre Reforma Tributária, Imposto de Renda, MEI e gestão contábil.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  // BLOG SUSPENSO — redirecionamento via middleware.ts; este arquivo está intacto
  const posts = await getAllPosts();
  return (
    <PageShell>
      <InternalHero eyebrow="Blog" title="Conteúdo e novidades" description="Reforma Tributária e contabilidade explicadas de forma clara." />
      <section className="section-pad bg-cream">
        <div className="container">
          {posts.length === 0 ? (
            <p className="mx-auto max-w-md rounded-card border border-dashed border-ink/20 bg-white p-8 text-center text-ink/70">
              Em breve, novos conteúdos sobre Reforma Tributária e contabilidade.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post._id} delay={(i % 3) * 0.08}>
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
