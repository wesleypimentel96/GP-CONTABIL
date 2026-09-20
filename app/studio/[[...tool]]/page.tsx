"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/sanity.config";
import { sanityConfigured } from "@/lib/sanity/client";
import { PageShell, InternalHero } from "@/components/layout/page-shell";

export default function StudioPage() {
  if (!sanityConfigured()) {
    return (
      <PageShell>
        <InternalHero
          eyebrow="Studio"
          title="Sanity não configurado"
          description="Defina NEXT_PUBLIC_SANITY_PROJECT_ID no .env.local e reinicie o servidor para usar o Studio."
        />
      </PageShell>
    );
  }
  return <NextStudio config={config} />;
}
