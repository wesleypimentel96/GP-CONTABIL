import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { SEGMENTS } from "@/lib/site";

export function Segments() {
  return (
    <section className="section-pad bg-cream" aria-labelledby="segmentos-title">
      <div className="container">
        <SectionHeading
          eyebrow="Para quem é"
          title="Confira no que somos referência"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3" id="segmentos-title">
          {SEGMENTS.map((seg, i) => (
            <Reveal key={seg.slug} delay={i * 0.08}>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <span className="inline-flex size-11 items-center justify-center rounded-card bg-ink-dark text-cream">
                    <seg.icon className="size-5" aria-hidden />
                  </span>
                  <CardTitle className="mt-3">{seg.title}</CardTitle>
                  <CardDescription>{seg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-sm">
                    {seg.items.slice(0, 6).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-taupe" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs text-ink/50">+ {seg.items.length - 6} outros serviços</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link
                    href={seg.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                  >
                    Saiba mais
                  </Link>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
