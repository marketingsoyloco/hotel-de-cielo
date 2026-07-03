# Hotel de Cielo — Landing Page Brasil (v2)

Landing page de captação de leads para a representação comercial do **Hotel de Cielo**
no Brasil — atendimento para cliente final e agências de viagens.

Stack: **React 18 + Vite**. Sem backend obrigatório: os formulários enviam para o
endpoint de CRM configurado (ou guardam backup local até a integração existir).

## Como rodar

```bash
npm install
npm run dev        # desenvolvimento em http://127.0.0.1:5173
npm run build      # gera a versão de produção em /dist
npm run preview    # testa o build de produção
```

A pasta `dist/` pode ser publicada em qualquer hospedagem estática
(Vercel, Netlify, Cloudflare Pages, Hostinger etc.).

## Onde editar cada coisa (painel/admin)

| O quê | Arquivo |
|---|---|
| WhatsApp, e-mails, pixels (GTM/GA4/Meta), endpoint do CRM | `src/config/site.config.js` |
| Unidades e status (`active` / `coming-soon` / `prelaunch`), ligar/desligar cards | `src/config/site.config.js` → `units` |
| Fotos (placeholders Unsplash → fotos oficiais) | `src/config/site.config.js` → `images` |
| Depoimentos (seção só aparece quando houver depoimentos reais) | `src/config/site.config.js` → `testimonials` |
| Todos os textos da página | `src/content/copy.pt-BR.js` |
| SEO (title, description, keywords, Open Graph, JSON-LD) | `index.html` |

### Ativar uma futura unidade
Em `site.config.js`, localize a unidade em `units` e mude `status` para `'active'`.
Nunca marque como ativa uma unidade que ainda não está em operação.

### Idiomas futuros (ES/EN)
Duplique `src/content/copy.pt-BR.js` como `copy.es.js` ou `copy.en.js`,
registre em `src/content/index.js` e mude `language` em `site.config.js`.

## Integrações e tráfego pago

Preencha em `site.config.js` → `integrations`:

- `gtmId` — Google Tag Manager (`GTM-XXXXXXX`)
- `ga4Id` — Google Analytics 4 (`G-XXXXXXXXXX`)
- `metaPixelId` — Pixel da Meta
- `crmEndpoint` — URL que recebe os leads via `POST` JSON (RD Station, HubSpot,
  Zapier, Make, n8n, planilha via webhook…). Sem endpoint, os leads ficam em
  `localStorage` (`hdc_leads`) como backup e os eventos continuam disparando.

### Eventos de conversão disparados (dataLayer + GA4 + Meta)

| Evento | Quando |
|---|---|
| `whatsapp_click` | Qualquer clique em botão de WhatsApp (com `source` e `message_type`) |
| `form_submit` | Envio do formulário principal ou do formulário de agências (dispara também `Lead` no Meta Pixel) |
| `agency_click` | Cliques/ações do público B2B |
| `consumer_click` | Cliques do cliente final |
| `newsletter_signup` | Inscrição para novidades |
| `future_units_interest` | Interesse nas próximas unidades |

Use esses nomes ao criar as conversões no Google Ads / Meta Ads (via GTM).

## Regra de precisão

A página não exibe preços, avaliações, metragens, número de quartos nem datas de
abertura não confirmadas. Quando a informação não estiver cadastrada, o texto
padrão é: *“Consulte nossa equipe comercial para informações atualizadas.”*
(editável em `site.config.js` → `precisionNotice`).
