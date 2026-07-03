import { siteConfig } from '../config/site.config';
import { copy as ptBR } from './copy.pt-BR';

// Registro de idiomas. Para adicionar espanhol/inglês:
//   import { copy as es } from './copy.es';
//   registre abaixo e mude siteConfig.language para 'es'.
const locales = {
  'pt-BR': ptBR
};

export const copy = locales[siteConfig.language] || ptBR;
