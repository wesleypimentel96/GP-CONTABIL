import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { whatsappUrlFor } from "@/lib/whatsapp";
import { BIO_CURTA } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-cream" aria-labelledby="hero-title">
      <div className="container grid items-center gap-10 py-12 md:py-20 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <Badge variant="lilas">Contadora há 14 anos</Badge>
          <h1 id="hero-title" className="font-display text-[1.75rem] font-bold leading-snug md:text-4xl lg:text-5xl">
            Contabilidade estratégica para <span className="text-taupe">PF, MEI e Empresas</span>
          </h1>
          <p className="max-w-xl text-lg text-ink/70">{BIO_CURTA}</p>
          <ul className="flex flex-wrap gap-2 text-sm" aria-label="Credenciais">
            {["MBA em Direito Tributário", "Especialista em Reforma Tributária"].map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5 rounded-pill bg-white px-3 py-1.5 font-medium">
                <BadgeCheck className="size-4" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild variant="primary" size="lg" className="w-full justify-center sm:w-auto">
              <a href={whatsappUrlFor("atendimento geral")} target="_blank" rel="noopener noreferrer">
                Agendar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full justify-center sm:w-auto">
              <a href="#servicos">
                Ver serviços
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card border-4 border-bege bg-lilas shadow-lg">
            <Image
              src="/images/webp/img6.webp"
              alt="Geovania Paes, contadora"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
