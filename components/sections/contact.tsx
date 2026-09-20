import { Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { LeadForm } from "@/components/forms/lead-form";
import { whatsappUrlFor } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section className="section-pad bg-cream" aria-labelledby="contato-title">
      <div className="container grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Fale com a GP Contábil"
              title="Entre em contato"
              description="Envie sua mensagem pelo formulário ou chame direto no WhatsApp. Retornamos o quanto antes."
            />
            <div className="mt-6 flex flex-col gap-3" id="contato-title">
              <a
                href={whatsappUrlFor("atendimento geral")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold hover:underline"
              >
                <MessageCircle className="size-5" aria-hidden />
                Chamar no WhatsApp
              </a>
              <p className="inline-flex items-center gap-2 text-sm text-ink/70">
                <Mail className="size-5" aria-hidden />
                contato@gpcontabil.com.br
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-card bg-ink-dark p-6 text-cream md:p-8">
            <h3 className="font-display text-xl font-bold">Solicitar contato</h3>
            <p className="mt-1 text-sm text-cream/70">Preencha e receba nosso retorno.</p>
            <div className="mt-5">
              <LeadForm dark />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
