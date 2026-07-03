# Hotel de Cielo

Repositorio para publicar versoes da landing page Hotel de Cielo em um unico GitHub Pages.

## Estrutura

- `apps/v1/`: codigo fonte React + Vite da landing atual.
- `apps/v2/`: codigo fonte React + Vite da segunda versao.
- `v1/`: build estatico publicado em `/hotel-de-cielo/v1/`.
- `v2/`: build estatico publicado em `/hotel-de-cielo/v2/`.
- `.github/workflows/pages.yml`: build e deploy para GitHub Pages a partir da branch `main`.

## Deploy

O workflow publica a branch `main` como um unico site:

- `/hotel-de-cielo/v1/`: build da pasta `apps/v1/`, tambem commitado em `v1/` como fallback estatico.
- `/hotel-de-cielo/v2/`: build da pasta `apps/v2/`, tambem commitado em `v2/` como fallback estatico.

No GitHub Pages, a fonte deve ficar configurada como **GitHub Actions**.
