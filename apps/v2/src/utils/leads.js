import { siteConfig } from '../config/site.config';
import { trackEvent } from './tracking';

// -----------------------------------------------------------------------------
// Envio de leads.
// - Com crmEndpoint configurado: POST JSON para o CRM/automação.
// - Sem endpoint: o lead fica registrado no localStorage (backup local) e nos
//   eventos de analytics, para a página funcionar desde o primeiro dia.
// -----------------------------------------------------------------------------
export async function submitLead(formType, data) {
  const payload = {
    formType, // 'lead' | 'agency' | 'newsletter'
    ...data,
    page: window.location.href,
    submittedAt: new Date().toISOString()
  };

  const endpoint = siteConfig.integrations.crmEndpoint;

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`CRM respondeu ${res.status}`);
  } else {
    const stored = JSON.parse(localStorage.getItem('hdc_leads') || '[]');
    stored.push(payload);
    localStorage.setItem('hdc_leads', JSON.stringify(stored));
  }

  const eventByType = {
    lead: 'form_submit',
    agency: 'form_submit',
    newsletter: 'newsletter_signup'
  };
  trackEvent(eventByType[formType] || 'form_submit', {
    form_type: formType,
    help_option: data.helpOption || undefined,
    profile: data.profile || undefined
  });
  if (formType === 'agency') trackEvent('agency_click', { source: 'agency_form' });
  if (formType === 'newsletter') trackEvent('future_units_interest', { source: 'newsletter_form' });

  return payload;
}
