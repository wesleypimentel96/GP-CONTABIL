import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { whatsappUrlFor } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section className="bg-ink-dark text-cream" aria-labelledby="cta-title">
      <div className="container py-14 text-center">
        <Reveal>
          <h2 id="cta-title" className="font-display text-3xl font-bold md:text-4xl">
            Alcance o sucesso com quem entende do assunto
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/70">
            Atendimento direto, planejamento tributário e acompanhamento contínuo
            para PF, MEI e empresas.
          </p>
          <div className="mt-6">
            <Button asChild variant="accent" size="lg">
              <a href={whatsappUrlFor("falar com a Geovania")} target="_blank" rel="noopener noreferrer">
                Fale com a Geovania
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
