import type { Metadata } from "next";
import Image from "next/image";
import { PageShell, InternalHero } from "@/components/layout/page-shell";
import { FinalCta } from "@/components/sections/final-cta";
import { LeadForm } from "@/components/forms/lead-form";
import { whatsappUrlFor } from "@/lib/whatsapp";
import { MessageCircle, Mail, Check } from "lucide-react";

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
          <div className="flex h-full flex-col justify-between gap-8 rounded-card bg-ink-dark p-6 text-cream md:p-8">
            <div>
              <div className="flex items-center gap-4">
                <span className="relative size-16 shrink-0 overflow-hidden rounded-full border-2 border-bege">
                  <Image
                    src="/images/webp/img4.webp"
                    alt="Geovania Paes, contadora"
                    fill
                    loading="lazy"
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold">Atendimento direto</h2>
                  <p className="mt-0.5 text-sm text-cream/70">
                    Geovania Paes • Contadora — responde pessoalmente
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a
                    href={whatsappUrlFor("atendimento geral")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 font-semibold hover:underline"
                  >
                    <span className="inline-flex size-9 items-center justify-center rounded-card bg-bege text-ink-dark">
                      <MessageCircle className="size-4" aria-hidden />
                    </span>
                    WhatsApp: (82) 9930-3480
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:assessoriacontabilgap@gmail.com"
                    className="inline-flex min-w-0 items-center gap-2.5 break-all font-semibold hover:underline"
                  >
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-card bg-bege text-ink-dark">
                      <Mail className="size-4" aria-hidden />
                    </span>
                    assessoriacontabilgap@gmail.com
                  </a>
                </li>
              </ul>
              <ul className="mt-6 space-y-2 border-t border-cream/15 pt-5 text-sm text-cream/80">
                {["14+ anos de atuação contábil", "Atendimento direto, sem robôs", "Retornamos o quanto antes"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="size-4 shrink-0 text-bege" aria-hidden />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <a
              href={whatsappUrlFor("atendimento geral")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-bege px-5 py-3 text-sm font-semibold text-ink-dark hover:bg-bege-dark"
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
