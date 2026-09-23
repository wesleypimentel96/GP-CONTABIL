# Blog — Suspenso (runbook de retomada)

**Status:** suspenso, NÃO apagado. Último estado: seção oculta da home e da navegação,
rotas `/blog` redirecionando para `/`. Todo o código do blog está preservado no repo.

- Site: https://gp-contabil-git-main-wesley-pimentels-projects.vercel.app (ver aba Domains na Vercel para a URL canônica atual)
- Repo: git@github.com:wesleypimentel96/GPCONTABIL.git (`main`)
- Contato cliente: WhatsApp (82) 9930-3480 · assessoriacontabilgap@gmail.com

## 1. O que foi preservado (não mexer)

- `sanity/schemaTypes/post.ts` — schema completo (title, slug, excerpt, cover+alt, content Portable Text, category, publishedAt, seoTitle, seoDesc, featured)
- `sanity/sanity.config.ts` — Studio em `/studio`
- `lib/sanity/client.ts` — client preguiçoso (`getSanityClient()` retorna null sem projectId)
- `lib/sanity/queries.ts` — posts, featuredPosts, postBySlug, postSlugs + `CATEGORY_LABELS`
- `lib/sanity/posts.ts` — `getLatestPosts()`, `getAllPosts()`
- `lib/sanity/image.ts` — `urlFor()`
- `components/blog/post-card.tsx`, `components/blog/portable-content.tsx`
- `components/sections/blog-preview.tsx` — seção da home (desligada, não apagada)
- `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` — rotas (com redirect temporário)
- `app/studio/[[...tool]]/page.tsx` — Studio com fallback quando sem projectId
- `app/api/revalidate/route.ts` — webhook Sanity (precisa de `SANITY_REVALIDATE_SECRET`)
- Categorias travadas: `reforma, ir, mei, empresas`

## 2. O que foi ocultado (para reverter)

Buscar no código por `BLOG SUSPENSO` — todos os pontos estão marcados:

| Arquivo | Ocultação | Reativação |
|---|---|---|
| `app/page.tsx` | `<BlogPreview/>` + `getLatestPosts()` removidos do render | Reimportar e renderizar `<BlogPreview posts={posts} />` |
| `components/layout/header.tsx` | Linha `/blog` comentada no array `NAV` | Descomentar |
| `components/layout/footer.tsx` | Link Blog comentado | Descomentar |
| `app/sitemap.ts` | `/blog` + `postRoutes` comentados | Descomentar imports e trecho |
| `app/blog/page.tsx` | `redirect` via `middleware.ts` (arquivo intacto) | Apagar `middleware.ts` |
| `app/blog/[slug]/page.tsx` | `redirect` via `middleware.ts` (arquivo intacto) | Apagar `middleware.ts` |

Atalho: `git log --oneline --grep="blog"` localiza o commit da suspensão; `git revert <hash>` desfaz tudo de uma vez
(verifique o diff antes, caso outros commits tenham tocado nos mesmos arquivos).

## 3. Passo a passo de reativação (Sanity do zero)

1. **Criar projeto Sanity** (sanity.io, plano Free): projeto `gp-contabil`, dataset `production`.
   Limites Free: 10k documents, 1M CDN req/mês, 250k API req/mês, 100GB assets/banda (detalhes em `docs/sanity-cms.md`).
2. **Papéis:** cadastrar a Geovania como **Administrator** (o Free não tem papel Editor).
3. **Envs** (`.env.local` + Vercel → Redeploy):
   `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET=production`,
   `SANITY_API_READ_TOKEN` (viewer), `SANITY_REVALIDATE_SECRET` (gerar com `openssl rand -base64 32`).
4. **Desfazer a suspensão** (tabela acima ou `git revert`).
5. **Webhook Sanity:** Manage → API → Webhooks → `POST https://<domínio>/api/revalidate`,
   header `Authorization: Bearer <SANITY_REVALIDATE_SECRET>`, gatilho em create/update/delete de `post`.
6. **Post de teste:** `/studio` → criar post com capa 1200x630 webp <300KB → Publish.
7. **Validar:** `/blog` lista o post · `/blog/[slug]` abre · editar e republicar reflete em ~1 min (revalidate 60s) ·
   `/sitemap.xml` inclui os slugs · `npm run build` verde.

## 4. Estimativa

- Com Sanity já criado: meio período (reverter + envs + teste).
- Do zero com treinamento da Geovania: 1–2 dias.
- Treinar ela: `/studio` → Novo Post → título, slug auto, resumo 160, capa, conteúdo, categoria, data → Publicar.
  Regras: capa webp <300KB, mínimo 300 caracteres, categoria obrigatória.
