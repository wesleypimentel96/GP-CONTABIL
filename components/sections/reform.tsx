import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { whatsappUrlFor } from "@/lib/whatsapp";

export function ReformTributaria() {
  return (
    <section className="section-pad bg-lilas/40" aria-labelledby="reforma-title">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-taupe">Reforma Tributária</p>
            <h2 id="reforma-title" className="font-display mt-2 text-3xl font-bold leading-tight md:text-4xl">
              Entenda a reforma sem juridiquês
            </h2>
            <p className="mt-4 text-ink/70">
              As mudanças nos tributos vão impactar pessoa física, MEI e empresas.
              A Geovania acompanha a reforma de perto e traduz o que muda de
              forma clara, profissional e sem alarmismo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="primary" className="text-center">
                <a
                  href={whatsappUrlFor("Reforma Tributária")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero entender como a Reforma Tributária pode impactar meu negócio
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/reforma-tributaria">Ler sobre a reforma</a>
              </Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-card shadow-lg">
            <Image
              src="/images/webp/img5.webp"
              alt="Geovania Paes em evento sobre contabilidade"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
