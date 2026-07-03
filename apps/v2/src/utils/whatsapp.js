import { siteConfig } from '../config/site.config';
import { trackEvent } from './tracking';

export function buildWhatsappUrl(messageKey = 'consumer') {
  const number = siteConfig.contacts.whatsappNumber;
  const message =
    siteConfig.whatsappMessages[messageKey] || siteConfig.whatsappMessages.consumer;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openWhatsapp(messageKey = 'consumer', source = 'unknown') {
  trackEvent('whatsapp_click', { source, message_type: messageKey });
  if (messageKey === 'agency') trackEvent('agency_click', { source });
  if (messageKey === 'consumer') trackEvent('consumer_click', { source });
  if (messageKey === 'futureUnits') trackEvent('future_units_interest', { source });
  window.open(buildWhatsappUrl(messageKey), '_blank', 'noopener');
}
