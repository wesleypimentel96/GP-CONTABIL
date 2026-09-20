import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export function InternalHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-ink-dark text-cream" aria-label={title}>
      <div className="container py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-bege">{eyebrow}</p>
        <h1 className="font-display mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
        {description ? <p className="mt-3 max-w-2xl text-cream/75">{description}</p> : null}
      </div>
    </section>
  );
}
