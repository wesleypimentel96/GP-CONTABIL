# Sanity CMS — Plano Free (GP Contábil)

Decisão travada: **Sanity Free** para a Geovania publicar sozinha, sem depender do dev.

Fonte dos limites: pricing oficial Sanity + docs Plans and payments (consulta em 16/09/2026).
Valores mudam sem aviso — conferir em https://www.sanity.io/pricing antes de orçar.

## 1. O que o Free inclui ($0 forever)

- 20 seats (só roles Administrator e Viewer). Viewer é grátis e não consome seat.
- 2 datasets, **apenas públicos**
- 10.000 documents (inclui drafts, soma todos datasets)
- 2.000 unique attributes por dataset
- 1.000.000 API CDN requests / mês
- 250.000 API requests / mês
- 100 GB assets (total armazenado)
- 100 GB bandwidth / mês (API + CDN + assets)
- 2 GROQ-powered webhooks
- 1.000 live connections por dataset, retenção 15 min
- Content types e locales ilimitados, real-time, history, visual editing / Presentation
- Sem cartão de crédito

## 2. Limites duros do Free (importante)

Free **não tem overage**. Se bater o teto, **bloqueia até virar o mês (00:00 UTC dia 1) ou até upgrade**:

- Documents cheio → não cria nada novo, nem draft.
- API / CDN / Bandwidth cheio → conteúdo para de ser servido, email de alerta aos admins em 80% e 100%.
- Não dá para "desgastar" uso de API/bandwidth no mês corrente. Só esperando reset ou migrando para Growth.
- Assets é total acumulado, não reseta. Se lotar 100 GB, precisa apagar ou upgradear.

Para este projeto (blog contábil, ~4-8 posts/mês, 1-2 editoras) o Free dura anos.
Exemplo: 500 posts com 5 imagens de 300 KB = ~2.500 documents + ~750 MB assets. Longe do teto.

## 3. Quando migrar para Growth ($15/seat/mês)

- Precisar de role Editor / Developer / Contributor, dataset privado, comments/tasks, scheduled drafts, AI Assist.
- Precisar de 25.000 documents ou pagar overage em vez de bloquear:
  overages Growth (2026): $1 / 250k CDN req, $1 / 25k API req, $0,50 / GB asset extra, $0,30 / GB bandwidth extra.
- Atenção: Growth **não aumenta** CDN/API/bandwidth incluídos (continua 1M / 250k / 100 GB). O que muda é poder estourar pagando, em vez de bloquear.

Trial Growth de 30 dias existe, sem cartão, mas com os mesmos tetos do Free e expira → volta para Free (datasets privados viram públicos, roles não-admin viram viewer).

## 4. Como a Geovania usa (sem dev)

1. Acessa `https://seusite.com.br/studio` e loga com Google.
2. Conteúdo → Post → Criar.
3. Preenche: título, slug auto, resumo 160 chars, capa 1200x630, conteúdo (negrito, listas, links), categoria [reforma, ir, mei, empresas], data publicação.
4. Revisa preview → Publicar. Entra no ar em ~1 min via `revalidate`.
5. Para despublicar: Unpublish. Para agendar: só no Growth — no Free publica na hora.

Regras: sempre capa webp < 300 KB, mínimo 300 caracteres, categoria obrigatória, não colar texto direto do Word sem limpar formatação.

## 5. Como o dev configura (uma vez)

```bash
npm i next-sanity @sanity/image-url
npx sanity@latest init --project <id> --dataset production
```

Schema `post`:
`title, slug, excerpt, cover, content (Portable Text), category, publishedAt, seoTitle, seoDesc, featured`

`.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
SANITY_REVALIDATE_SECRET=
```

Next.js: `fetch` com `next: { revalidate: 60 }`, `generateStaticParams` para `/blog/[slug]`, webhook Sanity → `/api/revalidate`.

Monitorar uso em Manage → Plan. Cadastrar email do dev para alertas 80%/100%.
