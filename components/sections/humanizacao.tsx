import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { BIO_COMPLETA } from "@/lib/site";
import { whatsappUrlFor } from "@/lib/whatsapp";

export function Humanizacao() {
  return (
    <section className="section-pad bg-ink-dark text-cream" aria-labelledby="humanizacao-title">
      <div className="container max-w-3xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-bege">Por que a GP Contábil</p>
          <h2 id="humanizacao-title" className="font-display mt-2 text-3xl font-bold leading-tight md:text-4xl">
            Contabilidade com nome, rosto e responsabilidade
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/75">{BIO_COMPLETA}</p>
          <div className="mt-6">
            <Button asChild variant="accent">
              <a href={whatsappUrlFor("conhecer o trabalho")} target="_blank" rel="noopener noreferrer">
                Fale com a Geovania
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
