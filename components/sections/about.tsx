import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { BIO_COMPLETA } from "@/lib/site";
import { whatsappUrlFor } from "@/lib/whatsapp";

const AUTHORITY = ["14+ anos de atuação contábil", "MBA em Direito Tributário", "Especialista em Reforma Tributária"];

export function About() {
  return (
    <section className="section-pad bg-white" aria-labelledby="sobre-title">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card bg-lilas shadow-lg">
            <Image
              src="/images/webp/img4.webp"
              alt="Geovania Paes, contadora"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-taupe">Conheça a Geovania</p>
            <h2 id="sobre-title" className="font-display mt-2 text-3xl font-bold leading-tight md:text-4xl">
              Experiência e clareza para cuidar do seu negócio
            </h2>
            <p className="mt-4 text-ink/70">{BIO_COMPLETA}</p>
            <ul className="mt-5 space-y-2">
              {AUTHORITY.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium">
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-bege">
                    <Check className="size-4" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button asChild variant="primary">
                <a href={whatsappUrlFor("conhecer a Geovania")} target="_blank" rel="noopener noreferrer">
                  Conversar com a Geovania
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
