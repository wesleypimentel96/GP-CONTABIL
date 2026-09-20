import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, InternalHero } from "@/components/layout/page-shell";
import { FinalCta } from "@/components/sections/final-cta";
import { SEGMENTS } from "@/lib/site";
import { whatsappUrlFor } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contabilidade para Empresas",
  description: "Abertura, assessoria mensal, impostos, folha de pagamento e planejamento tributário para empresas.",
  alternates: { canonical: "/para-empresas" },
};

const seg = SEGMENTS.find((s) => s.slug === "empresas")!;

export default function ParaEmpresasPage() {
  return (
    <PageShell>
      <InternalHero eyebrow="Serviços" title="Gestão Contábil para Empresas" description={seg.description} />
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
              <a href={whatsappUrlFor("Empresas")} target="_blank" rel="noopener noreferrer">
                Solicitar atendimento para Empresas
              </a>
            </Button>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
