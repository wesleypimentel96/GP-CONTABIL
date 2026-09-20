import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal>
      <div className={`flex flex-col gap-3 ${alignCls}`}>
        <Badge variant="outline">{eyebrow}</Badge>
        <h2 className="font-display max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
          {title}
        </h2>
        {description ? <p className="max-w-2xl text-ink/70">{description}</p> : null}
      </div>
    </Reveal>
  );
}
