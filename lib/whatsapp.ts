export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export function whatsappUrl(name: string) {
  const base = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}`
    : "https://wa.me/";
  const text = `Olá, Geovania! Acabei de enviar uma solicitação pelo site da GP Contábil. Meu nome é ${name}.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function whatsappUrlFor(segmentLabel: string) {
  const base = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}`
    : "https://wa.me/";
  const text = `Olá, Geovania! Quero atendimento para: ${segmentLabel}. Vim pelo site da GP Contábil.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}
