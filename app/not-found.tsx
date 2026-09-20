import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageShell, InternalHero } from "@/components/layout/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <InternalHero eyebrow="Erro 404" title="Página não encontrada" description="O endereço acessado não existe ou foi movido." />
      <section className="section-pad bg-cream">
        <div className="container text-center">
          <Button asChild variant="primary">
            <Link href="/">Voltar para o início</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
