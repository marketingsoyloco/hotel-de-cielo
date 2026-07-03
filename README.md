# Hotel de Cielo

Repositorio para publicar versoes da landing page Hotel de Cielo em um unico GitHub Pages.

## Estrutura

- `v1/`: landing page React + Vite atual.
- `v2/` ou `V2/`: pasta reservada para a segunda versao, quando for adicionada.
- `.github/workflows/pages.yml`: build e deploy para GitHub Pages a partir da branch `main`.

## Deploy

O workflow publica a branch `main` como um unico site:

- `/hotel-de-cielo/v1/`: build da pasta `v1/`.
- `/hotel-de-cielo/v2/`: build da pasta `v2/` ou `V2/`, se existir.

Enquanto `v2/` ou `V2/` nao existir, o workflow publica uma pagina simples de preparacao no caminho `/v2/`.

No GitHub Pages, a fonte deve ficar configurada como **GitHub Actions**.
