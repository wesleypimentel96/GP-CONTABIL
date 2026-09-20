# Imagens — mapa + webp

Originais em `images/*.jpeg`, otimizadas em `images/webp/*.webp` (geradas no build).

| Arquivo | Uso travado | Notas |
|---|---|---|
| img6.jpeg (33 KB) | HERO `/` lado direito, círculo, `priority + eager`, alt "Geovania Paes, contadora" | Em pé, blazer bege. Não usar lazy aqui. |
| img4.jpeg (74 KB) | Sobre, metade esquerda | Sentada, fundo lilás. |
| img5.jpeg (1,6 MB) | Humanização / Reforma | Externa letra G. Maior arquivo, comprimir com mais força. |
| img1/jpeg, img2, img3 (~87-97 KB) | Conteúdo, não hero | São cards de texto PF/Empresas/MEI. Serviram para extrair copy, não precisam ir para o site como foto. |
| modelo site/*.webp | Referência estrutura | Não publicar. |

Regras: capa Sanity 1200x630 webp < 300 KB, posts com alt, `sizes` responsivo.
Conversão: `sharp` qualidade 80 hero, 75 demais, `metadata: false`.
