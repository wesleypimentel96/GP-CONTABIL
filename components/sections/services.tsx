import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { SERVICES } from "@/lib/site";

export function Services() {
  return (
    <section className="section-pad bg-cream" id="servicos" aria-labelledby="servicos-title">
      <div className="container">
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Nós podemos te ajudar"
          description="Da declaração do IR à gestão mensal da empresa, com acompanhamento direto."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" id="servicos-title">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <Card className="h-full">
                <CardHeader>
                  <span className="inline-flex size-11 items-center justify-center rounded-card bg-lilas text-ink-dark">
                    <service.icon className="size-5" aria-hidden />
                  </span>
                  <CardTitle className="mt-3">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={service.href}
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
