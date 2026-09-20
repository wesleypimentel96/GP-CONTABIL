# Prompt — GP Contábil para ChatGPT (copiar/colar + anexar arquivos)

> Gere o portal GP Contábil (Geovania Paes, contadora) em Next.js App Router + TypeScript + Tailwind + shadcn/ui. Stack travada: Next.js + Sanity Free (blog autonomia) + Supabase (leads) + Resend (email) + Vercel. Não use MDX para blog, use Sanity. Não crie banco para blog, só tabela leads no Supabase.
>
> ## 1. Referência visual (anexar)
> - `modelo site/Modelo-323-Onepage-Desktop-scaled.webp`: usar SÓ como esqueleto de estrutura/conversão, 13 seções: 1 header fixo + topbar, 2 hero 50/50 texto esq + foto círculo dir + CTA pill, 3 faixa 3 diferenciais, 4 grid cards segmentos, 5 sobre foto esq + checklist + números, 6 grid 6 serviços, 7 blog 3 cards, 8 depoimentos fundo escuro + foto círculo, 9 4 passos 01-04, 10 FAQ acordeão + CTA, 11 contato info + form, 12 CTA final, 13 footer + Whats flutuante. NÃO copiar textos placeholder, lorem ipsum, nem fotos stock.
> - Hero travado: `images/webp/img6.webp` (original `images/img6.jpeg`, em pé blazer bege, priority + eager, alt "Geovania Paes, contadora"). Sobre: `images/webp/img4.webp`. Humanização/Reforma: `images/webp/img5.webp`. Originais PF/Empresas/MEI (`img1-3`) são só copy, não publicar como foto.
>
> ## 2. Copy real (substituir tudo do modelo)
> Bio: Sou Geovania Paes, Contadora há 14 anos, formada em Ciências Contábeis, MBA em Direito Tributário, pós em Empreendedorismo Contábil e Controladoria Financeira. Especialista em Reforma Tributária.
> H1: Contabilidade estratégica para PF, MEI e Empresas. Sub: bio acima. CTAs: [Agendar no WhatsApp] primário / [Ver serviços] secundário.
> PF: Declaração IR, IR profissionais liberais, Carnê-Leão, Ganho capital, Regularização CPF, Parcelamento IR, Saída Definitiva do País, Livro Caixa, Planejamento tributário para médicos e saúde, Consultoria financeira pessoal.
> Empresas: Abertura, Alteração contratual, Baixa, Planejamento tributário, Assessoria mensal, Apuração impostos, Obrigações acessórias, Folha pagamento, Pró-labore, Regularização fiscal, Parcelamento débitos, Certidões negativas, Consultoria contábil/financeira, Fluxo caixa, Análise lucro/desempenho.
> MEI: Abertura, Regularização, Baixa, DAS mensal, DASN-SIMEI anual, Parcelamento, Desenquadramento, Alteração cadastral, NF, MEI inapto/suspenso, Migração para ME.
> Prova no lugar de 107+/50+: 14+ anos / MBA Tributário / Especialista Reforma. Blog vira: Reforma Tributária explicada.
>
> ## 3. Rotas
> `/`, `/sobre`, `/servicos-pf`, `/para-empresas`, `/mei`, `/reforma-tributaria`, `/blog`, `/blog/[slug]`, `/contato`, `/politica-privacidade`, `/studio` (Sanity).
>
> ## 4. Design system
> Tokens: --bg-dark #141416, --bege #E9D9C6, --taupe #8A837E, --lilas #E8E0F3, --bg-light #F6F4F0, --text #1A1A1E. Serifada display H1/H2 + Inter corpo. Pill botões, 12px cards, seção 80px desktop / 48px mobile. shadcn: Button, Card, Accordion, Form/Input/Textarea, Badge. lucide-react ícones, motion reveal + count-up + smooth scroll.
>
> ## 5. Blog Sanity Free (ela posta sozinha)
> Schema post: title, slug, excerpt 160, cover 1200x630 webp <300KB, content Portable Text, category [reforma, ir, mei, empresas], publishedAt, seoTitle, seoDesc, featured. Studio em `/studio`, role editor para ela, revalidate 60s, generateStaticParams /blog/[slug], webhook /api/revalidate. Ver `docs/sanity-cms.md` para limites Free: 10k docs, 1M CDN/mês, 250k API/mês, 100GB assets/bandwidth, bloqueio duro sem overage.
>
> ## 6. Leads Whats + Email (Supabase + Resend, ver `.env.example`)
> Tabela leads: id uuid, nome, email, whatsapp, segmento [pf, mei, empresas, reforma, outro], mensagem, origem, consent_lgpd bool, created_at. RLS insert público validado com zod, select só service_role. Fluxo: valida → insert → Resend para LEAD_NOTIFY_EMAIL (placeholder contato@gpcontabil.com.br) + confirmação ao lead → botão wa.me NEXT_PUBLIC_WHATSAPP_NUMBER com texto pré-preenchido. Checkbox LGPD obrigatório + /politica-privacidade.
>
> ## 7. Técnico
> SEO por página + sitemap + OG com img6, webp lazy exceto hero, acessibilidade contraste, form react-hook-form + zod. Deploy Vercel. Env conforme `.env.example`.
>
> ## Entrega esperada
> Estrutura de pastas, design tokens, componentes por seção, schema Sanity, SQL leads + RLS, API form + Resend + revalidate, páginas com copy real, README de setup. Pergunte antes se faltar projectId Sanity, Supabase URL/keys ou Resend key.
>
> Anexos para enviar junto: este prompt + `docs/stack.md` + `docs/sanity-cms.md` + `docs/imagens.md` + `.env.example` + `images/webp/img6.webp` + `img4.webp` + `modelo site/...webp`.
