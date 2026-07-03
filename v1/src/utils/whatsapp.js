import { siteConfig } from '../content/siteContent';
import { trackEvent } from './tracking';

export function buildWhatsappUrl(messageKey = 'consumer') {
  const number = siteConfig.contacts.whatsappNumber;
  const message = siteConfig.whatsappMessages[messageKey] || siteConfig.whatsappMessages.consumer;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function handleWhatsappClick(messageKey, source) {
  trackEvent('whatsapp_click', {
    source,
    message_type: messageKey
  });
}
