import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/lib/sanity/image";
import { CATEGORY_LABELS, type SanityPost } from "@/lib/sanity/queries";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export function PostCard({ post }: { post: SanityPost }) {
  const coverUrl = post.cover ? urlFor(post.cover).width(800).url() : null;
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      {coverUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={coverUrl} alt={post.cover?.alt ?? post.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
      ) : null}
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge variant="lilas">{CATEGORY_LABELS[post.category] ?? post.category}</Badge>
          <time className="text-xs text-ink/50" dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
        </div>
        <CardTitle className="mt-2">{post.title}</CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-ink underline-offset-4 hover:underline"
        >
          Ler artigo
        </Link>
      </CardFooter>
    </Card>
  );
}
