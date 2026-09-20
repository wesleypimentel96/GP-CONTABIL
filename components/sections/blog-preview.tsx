import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { PostCard } from "@/components/blog/post-card";
import type { SanityPost } from "@/lib/sanity/queries";

export function BlogPreview({ posts }: { posts: SanityPost[] }) {
  return (
    <section className="section-pad bg-white" aria-labelledby="blog-title">
      <div className="container">
        <SectionHeading
          eyebrow="Conteúdo"
          title="Fique por dentro das novidades"
          description="Artigos sobre reforma tributária, imposto de renda e gestão contábil."
        />
        <div className="mt-10" id="blog-title">
          {posts.length === 0 ? (
            <Reveal>
              <p className="mx-auto max-w-md rounded-card border border-dashed border-ink/20 bg-cream p-8 text-center text-ink/70">
                Em breve, novos conteúdos sobre Reforma Tributária e contabilidade.
              </p>
            </Reveal>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post._id} delay={i * 0.08}>
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/blog">Ver todos os artigos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
