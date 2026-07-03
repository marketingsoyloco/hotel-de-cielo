import { trackEvent } from './tracking';

export const CONTACT_MODE_EVENT = 'hdc:contact-mode';

// Alterna o formulário unificado de contato ('consumer' | 'agency') a partir
// de qualquer ponto da página e rola até a seção.
export function goToContactForm(mode, source = 'unknown') {
  trackEvent(mode === 'agency' ? 'agency_click' : 'consumer_click', { source });
  window.dispatchEvent(new CustomEvent(CONTACT_MODE_EVENT, { detail: mode }));
  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
}
