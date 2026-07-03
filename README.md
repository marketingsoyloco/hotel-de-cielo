# Hotel de Cielo Brasil Landing Page

Landing page em React + Vite para captacao de clientes brasileiros e agencias interessadas no Hotel de Cielo Mendoza / Valle de Uco.

## Comandos

```bash
npm install
npm run dev
npm run build
```

## GitHub Pages

O workflow `.github/workflows/pages.yml` publica a branch `main` como um unico site no GitHub Pages com caminhos por versao:

- app atual no root -> `/hotel-de-cielo/v1/`
- pasta `v2/` -> `/hotel-de-cielo/v2/` quando existir
- enquanto `v2/` nao existir, o workflow publica uma pagina simples de preparacao em `/v2/`

No GitHub, configure Pages para usar **GitHub Actions** como fonte.

## Edicao de conteudo

O conteudo principal fica em `src/content/siteContent.js`:

- contatos comerciais e WhatsApp;
- mensagens automaticas por perfil;
- imagens placeholder;
- unidades e status `active`, `coming-soon` ou `pre-launch`;
- textos de experiencias, Sky Lofts e publico-alvo;
- placeholders para GTM, GA4, Meta Pixel e CRM.

As imagens atuais sao placeholders premium. Substitua por fotos oficiais quando estiverem disponiveis.

## Integracoes futuras

O envio de leads passa por `src/utils/leads.js`. Hoje ele valida o fluxo no front-end, dispara eventos de conversao e fica pronto para conectar um endpoint de CRM quando `crmEndpoint` for configurado.
