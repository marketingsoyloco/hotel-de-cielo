# Hotel de Cielo

Repositorio para publicar versoes da landing page Hotel de Cielo em um unico GitHub Pages.

## Estrutura

- `apps/v1/`: codigo fonte React + Vite da landing atual.
- `apps/v2/`: codigo fonte React + Vite da segunda versao.
- `v1/`: build estatico publicado em `/hotel-de-cielo/v1/`.
- `v2/`: build estatico publicado em `/hotel-de-cielo/v2/`.

## Deploy

O GitHub Pages publica direto da branch `main`, pasta `/`.

- `/hotel-de-cielo/`: tela de escolha entre as duas propostas.
- `/hotel-de-cielo/v1/`: build estatico da pasta `apps/v1/`.
- `/hotel-de-cielo/v2/`: build estatico da pasta `apps/v2/`.

No GitHub Pages, configure a fonte como **Deploy from a branch**, branch `main`, pasta `/`.

Antes de publicar alteracoes de uma versao, rode o build correspondente e copie o `dist` para a pasta publica:

```bash
cd apps/v1
PAGES_BASE_PATH="/hotel-de-cielo/v1/" npm run build
# copiar apps/v1/dist/* para v1/

cd ../v2
PAGES_BASE_PATH="/hotel-de-cielo/v2/" npm run build
# copiar apps/v2/dist/* para v2/
```
