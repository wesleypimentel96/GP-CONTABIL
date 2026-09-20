import type { Metadata } from "next";
import { PageShell, InternalHero } from "@/components/layout/page-shell";
import { FinalCta } from "@/components/sections/final-cta";
import { LeadForm } from "@/components/forms/lead-form";
import { whatsappUrlFor } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a GP Contábil pelo formulário ou WhatsApp e receba orientação da Geovania Paes.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <PageShell>
      <InternalHero eyebrow="Contato" title="Vamos conversar" description="Envie sua mensagem ou chame direto no WhatsApp." />
      <section className="section-pad bg-cream">
        <div className="container grid max-w-4xl gap-8 lg:grid-cols-2">
          <div className="rounded-card border border-ink/10 bg-white p-6">
            <h2 className="font-display text-xl font-bold">Formulário</h2>
            <div className="mt-4">
              <LeadForm origem="contato" />
            </div>
          </div>
          <div className="rounded-card bg-ink-dark p-6 text-cream">
            <h2 className="font-display text-xl font-bold">Atendimento direto</h2>
            <p className="mt-2 text-sm text-cream/70">
              Prefere mensagem instantânea? Chame no WhatsApp com sua necessidade.
            </p>
            <a
              href={whatsappUrlFor("atendimento geral")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-pill bg-bege px-5 py-2.5 text-sm font-semibold text-ink-dark hover:bg-bege-dark"
            >
              <MessageCircle className="size-4" aria-hidden />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
