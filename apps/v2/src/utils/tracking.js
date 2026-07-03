import { siteConfig } from '../config/site.config';

// -----------------------------------------------------------------------------
// Carrega GTM, GA4 e Meta Pixel em tempo de execução, conforme os IDs
// preenchidos em site.config.js (integrations). Sem ID, nada é carregado.
// -----------------------------------------------------------------------------
export function initTracking() {
  const { gtmId, ga4Id, metaPixelId } = siteConfig.integrations;

  window.dataLayer = window.dataLayer || [];

  if (gtmId) {
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    injectScript(`https://www.googletagmanager.com/gtm.js?id=${gtmId}`);
  }

  if (ga4Id) {
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`);
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', ga4Id);
  }

  if (metaPixelId && !window.fbq) {
    const fbq = function () {
      fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];
    window.fbq = fbq;
    injectScript('https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', metaPixelId);
    window.fbq('track', 'PageView');
  }
}

function injectScript(src) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

// -----------------------------------------------------------------------------
// Eventos de conversão. Nomes usados na LP:
//   whatsapp_click | form_submit | agency_click | consumer_click |
//   newsletter_signup | future_units_interest
// Cada evento é enviado ao dataLayer (GTM), ao GA4 e ao Meta Pixel (custom).
// -----------------------------------------------------------------------------
export function trackEvent(eventName, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params);
    if (eventName === 'form_submit') {
      window.fbq('track', 'Lead', params);
    }
  }
}
