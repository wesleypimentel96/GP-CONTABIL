"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrlFor } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrlFor("atendimento geral")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp com a GP Contábil"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-ink-dark p-3.5 text-cream shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  );
}
