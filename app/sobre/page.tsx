import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageShell, InternalHero } from "@/components/layout/page-shell";
import { FinalCta } from "@/components/sections/final-cta";
import { BIO_COMPLETA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a Geovania Paes",
  description: "Conheça Geovania Paes, contadora há 14 anos, MBA em Direito Tributário e especialista em Reforma Tributária.",
  alternates: { canonical: "/sobre" },
};

const AUTHORITY = ["14+ anos de atuação contábil", "MBA em Direito Tributário", "Pós em Empreendedorismo Contábil e Controladoria Financeira", "Especialista em Reforma Tributária"];

export default function SobrePage() {
  return (
    <PageShell>
      <InternalHero eyebrow="GP Contábil" title="Conheça a Geovania Paes" description="Contabilidade com nome, rosto e responsabilidade." />
      <section className="section-pad bg-cream">
        <div className="container grid items-start gap-10 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card bg-lilas shadow-lg">
            <Image src="/images/webp/img4.webp" alt="Geovania Paes, contadora" fill loading="lazy" sizes="(max-width: 1024px) 100vw, 480px" className="object-cover object-top" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Experiência a serviço do seu negócio</h2>
            <p className="mt-4 leading-relaxed text-ink/75">{BIO_COMPLETA}</p>
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
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
