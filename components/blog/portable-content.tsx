import { PortableText, type PortableTextComponents, type PortableTextBlock } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="font-display mt-8 text-2xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="font-display mt-6 text-xl font-bold">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="mt-4 border-l-4 border-bege-dark bg-cream p-4 italic">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="mt-4 leading-relaxed text-ink/85">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 list-disc space-y-1 pl-6">{children}</ul>,
    number: ({ children }) => <ol className="mt-4 list-decimal space-y-1 pl-6">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">
        {children}
      </a>
    ),
  },
};

export function PortableContent({ value }: { value?: PortableTextBlock[] }) {
  if (!value || value.length === 0) return null;
  return (
    <div className="prose max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
