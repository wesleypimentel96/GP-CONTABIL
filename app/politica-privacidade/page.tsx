import type { Metadata } from "next";
import { PageShell, InternalHero } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a GP Contábil trata os dados enviados pelo site.",
  alternates: { canonical: "/politica-privacidade" },
};

export default function PrivacidadePage() {
  return (
    <PageShell>
      <InternalHero eyebrow="LGPD" title="Política de Privacidade" />
      <section className="section-pad bg-cream">
        <div className="container max-w-3xl space-y-4 text-ink/80">
          <p>
            A GP Contábil trata os dados enviados por este site (nome, e-mail,
            WhatsApp, assunto e mensagem) exclusivamente para entrar em contato
            e prestar os serviços solicitados, conforme a Lei Geral de Proteção
            de Dados (Lei nº 13.709/2018).
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Dados coletados</h2>
          <p>Nome, e-mail, WhatsApp, segmento de atendimento, mensagem, origem e registro de consentimento com data e hora.</p>
          <h2 className="font-display text-xl font-bold text-ink">Seus direitos</h2>
          <p>
            Você pode solicitar a qualquer momento confirmação, acesso, correção
            ou eliminação dos seus dados pelo canal de atendimento publicado neste site.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Compartilhamento</h2>
          <p>
            Os dados não são vendidos nem compartilhados para marketing de terceiros.
            O armazenamento técnico utiliza os provedores do site (hospedagem, banco de dados e e-mail).
          </p>
          <p className="rounded-card border border-dashed border-ink/20 bg-white p-4 text-sm">
            <strong>Pendências para revisão da cliente antes da publicação:</strong> CNPJ,
            endereço, telefone oficial, e-mail oficial e responsável pelo tratamento de dados (DPO/encarregado).
          </p>
        </div>
      </section>
    </PageShell>
  );
}
