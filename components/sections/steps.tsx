import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { STEPS } from "@/lib/site";
import { whatsappUrlFor } from "@/lib/whatsapp";

export function Steps() {
  return (
    <section className="section-pad bg-cream" aria-labelledby="passos-title">
      <div className="container">
        <SectionHeading eyebrow="Passo a passo" title="4 passos para o seu sucesso" />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" id="passos-title">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <li className="rounded-card border border-ink/10 bg-white p-6">
                <p className="font-display text-4xl font-bold text-bege-dark" aria-hidden>{step.number}</p>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-8 text-center">
          <Button asChild variant="primary">
            <a href={whatsappUrlFor("iniciar atendimento")} target="_blank" rel="noopener noreferrer">
              Começar agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
