import Link from "next/link";
import { whatsappUrlFor } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ink-dark text-cream">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">GP Contábil</p>
          <p className="mt-3 text-sm text-cream/70">
            Contabilidade estratégica para pessoa física, MEI e empresas, com
            atendimento direto da contadora Geovania Paes.
          </p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/60">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/sobre" className="hover:underline">Sobre</Link></li>
            <li><Link href="/servicos-pf" className="hover:underline">Pessoa Física</Link></li>
            <li><Link href="/para-empresas" className="hover:underline">Empresas</Link></li>
            <li><Link href="/mei" className="hover:underline">MEI</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </nav>
        <nav aria-label="Serviços no rodapé">
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/60">Serviços</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/reforma-tributaria" className="hover:underline">Reforma Tributária</Link></li>
            <li><Link href="/contato" className="hover:underline">Contato</Link></li>
            <li><Link href="/politica-privacidade" className="hover:underline">Política de Privacidade</Link></li>
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/60">Atendimento</p>
          <a
            href={whatsappUrlFor("atendimento geral")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-pill bg-bege px-5 py-2.5 text-sm font-semibold text-ink-dark hover:bg-bege-dark"
          >
            Fale com a Geovania
          </a>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="container flex flex-col gap-2 py-4 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} GP Contábil — Geovania Paes. Todos os direitos reservados.</p>
          <p>
            CNPJ, endereço e telefone serão publicados após validação da cliente.{" "}
            <span className="opacity-80">
              Desenvolvido por{" "}
              <a
                href="https://wesleypimenteldev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-cream"
              >
                WP Coding
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
