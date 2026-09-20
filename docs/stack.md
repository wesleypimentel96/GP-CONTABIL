# GP Contábil — Stack travada

`Next.js (App Router) + TypeScript + Tailwind + shadcn/ui + Sanity Free (blog) + Supabase (leads) + Resend (email) + Vercel`

Modelo visual: `modelo site/Modelo-323-Onepage-Desktop-scaled.webp` (13 seções, só esqueleto).
Hero travado: `images/img6.jpeg` (em pé, blazer bege). Sobre: `images/img4.jpeg` (sentada, fundo lilás).

## Estrutura futura
```
/app /(site)/page.tsx /sobre /servicos-pf /para-empresas /mei /reforma-tributaria /blog /blog/[slug] /contato
/components/ui (shadcn: Button, Card, Accordion, Form, Input, Badge)
/sanity (schema post)
/lib (sanity.client, supabase, resend, whatsapp)
```

## Env (ver .env.example)
- `LEAD_NOTIFY_EMAIL=contato@gpcontabil.com.br` (genérico, trocar com a cliente)
- Sanity: projectId, dataset=production, read token, revalidate secret
- Supabase: url + anon key (insert lead) — select só via service_role no server
- Resend: api key + from

## Leads: Whats + Email, sem login
Tabela `leads (id, nome, email, whatsapp, segmento, mensagem, origem, consent_lgpd, created_at)`.
Fluxo: valida zod → insert Supabase → Resend para LEAD_NOTIFY_EMAIL + confirmação ao lead → botão wa.me com texto pré-preenchido. Checkbox LGPD obrigatório.

## Design tokens (base imagem 6)
`--bg-dark #141416, --bege #E9D9C6, --taupe #8A837E, --lilas #E8E0F3, --bg-light #F6F4F0, --text #1A1A1E`
Serifada display H1/H2 + Inter corpo. Pill em botões, 12px cards. Seção 80px desktop / 48px mobile.

## Docs
- `docs/sanity-cms.md` — uso diário da Geovania + limites Free + setup dev
- `docs/imagens.md` — mapa das 6 fotos + webp
