"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrlFor } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos-pf", label: "Pessoa Física" },
  { href: "/para-empresas", label: "Empresas" },
  { href: "/mei", label: "MEI" },
  { href: "/reforma-tributaria", label: "Reforma Tributária" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="bg-ink-dark text-cream">
        <div className="container flex items-center justify-between gap-2 py-1.5 text-xs">
          <p className="min-w-0 truncate">Contabilidade estratégica para PF, MEI e Empresas</p>
          <a
            href={whatsappUrlFor("atendimento geral")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap font-semibold hover:underline"
          >
            <MessageCircle className="size-3.5" aria-hidden />
            Agendar no WhatsApp
          </a>
        </div>
      </div>
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-xl font-bold" aria-label="GP Contábil — início">
          GP <span className="text-taupe">Contábil</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium lg:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink/80 hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="accent">
            <a href={whatsappUrlFor("atendimento geral")} target="_blank" rel="noopener noreferrer">
              Agendar no WhatsApp
            </a>
          </Button>
        </div>
        <button
          className="inline-flex size-10 items-center justify-center rounded-card border border-ink/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div className={cn("border-t border-ink/10 lg:hidden", open ? "block" : "hidden")}>
        <nav className="container flex flex-col gap-1 py-3" aria-label="Navegação móvel">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-card px-3 py-2.5 text-sm font-medium hover:bg-ink/5"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="accent" className="mt-2">
            <a href={whatsappUrlFor("atendimento geral")} target="_blank" rel="noopener noreferrer">
              Agendar no WhatsApp
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
