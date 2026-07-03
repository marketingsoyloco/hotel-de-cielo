import { siteConfig } from '../content/siteContent';
import { trackEvent } from './tracking';

export async function submitLead(payload) {
  trackEvent('form_submit', {
    form_type: payload.formType,
    help_type: payload.helpType || payload.interest || 'not_informed',
    profile: payload.profile || 'not_informed'
  });

  if (siteConfig.integrations.crmEndpoint) {
    await fetch(siteConfig.integrations.crmEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  }

  return {
    ok: true,
    message:
      'Obrigado! Recebemos sua solicitação. Nossa equipe comercial no Brasil entrará em contato para ajudar com sua experiência Hotel de Cielo.'
  };
}
