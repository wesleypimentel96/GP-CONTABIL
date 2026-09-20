import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageShell, InternalHero } from "@/components/layout/page-shell";
import { FinalCta } from "@/components/sections/final-cta";
import { whatsappUrlFor } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Reforma Tributária",
  description: "Entenda de forma clara como a Reforma Tributária pode impactar pessoa física, MEI e empresas.",
  alternates: { canonical: "/reforma-tributaria" },
};

export default function ReformaPage() {
  return (
    <PageShell>
      <InternalHero
        eyebrow="Reforma Tributária"
        title="A reforma explicada sem juridiquês"
        description="Acompanhamento atualizado e orientação clara para proteger seu momento fiscal."
      />
      <section className="section-pad bg-cream">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">O que muda para você</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              A Reforma Tributária vai reorganizar impostos sobre consumo e renda,
              com período de transição. Para pessoa física, MEI e empresas, o
              essencial é entender o enquadramento, manter as obrigações em dia
              e planejar com antecedência — sem alarmismo e sem decisões por boato.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-6 text-ink/75">
              <li>Organização fiscal antes das novas regras</li>
              <li>Revisão de enquadramento (MEI, Simples, Lucro Presumido)</li>
              <li>Acompanhamento das obrigações acessórias</li>
            </ul>
            <div className="mt-6">
              <Button asChild variant="primary">
                <a href={whatsappUrlFor("Reforma Tributária")} target="_blank" rel="noopener noreferrer">
                  Quero entender como a Reforma Tributária pode impactar meu negócio
                </a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-card shadow-lg">
            <Image src="/images/webp/img5.webp" alt="Geovania Paes em evento sobre contabilidade" fill loading="lazy" sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
