import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, InternalHero } from "@/components/layout/page-shell";
import { FinalCta } from "@/components/sections/final-cta";
import { SEGMENTS } from "@/lib/site";
import { whatsappUrlFor } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contabilidade para Pessoa Física",
  description: "Declaração de IR, carnê-leão, livro caixa, ganho de capital e planejamento tributário para profissionais liberais e da saúde.",
  alternates: { canonical: "/servicos-pf" },
};

const seg = SEGMENTS.find((s) => s.slug === "pf")!;

export default function ServicosPfPage() {
  return (
    <PageShell>
      <InternalHero eyebrow="Serviços" title="Contabilidade para Pessoa Física" description={seg.description} />
      <section className="section-pad bg-cream">
        <div className="container max-w-3xl">
          <ul className="grid gap-2 sm:grid-cols-2">
            {seg.items.map((item) => (
              <li key={item} className="flex items-start gap-2 rounded-card border border-ink/10 bg-white p-3 text-sm font-medium">
                <Check className="mt-0.5 size-4 shrink-0 text-taupe" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild variant="primary">
              <a href={whatsappUrlFor("Pessoa Física")} target="_blank" rel="noopener noreferrer">
                Solicitar atendimento para Pessoa Física
              </a>
            </Button>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
