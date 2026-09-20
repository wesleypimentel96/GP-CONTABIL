import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "GP Contábil — Geovania Paes | Contabilidade para PF, MEI e Empresas",
    template: "%s | GP Contábil",
  },
  description:
    "Sou Geovania Paes, Contadora há 14 anos, MBA em Direito Tributário. Contabilidade estratégica para pessoa física, MEI e empresas. Especialista em Reforma Tributária.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "GP Contábil",
    images: [{ url: "/images/webp/img6.webp", alt: "Geovania Paes, contadora" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
