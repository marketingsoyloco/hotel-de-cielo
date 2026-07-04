// =============================================================================
// PAINEL DE CONFIGURAÇÃO — Hotel de Cielo (Representação Brasil)
//
// Este arquivo funciona como o "admin" da landing page.
// Tudo o que é operacional (contatos, pixels, unidades, fotos, depoimentos)
// é editado AQUI, sem tocar nos componentes.
//
// Textos das seções ficam em src/content/copy.pt-BR.js
// =============================================================================

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const siteConfig = {
  // Idioma ativo. Preparado para futuro: 'es' e 'en'
  // (basta criar src/content/copy.es.js / copy.en.js e registrar em content/index.js)
  language: 'pt-BR',

  brand: 'Hotel de Cielo',
  siteUrl: 'https://www.hoteldecielo.com.br',

  // Exibido sempre que uma informação não estiver cadastrada (preços,
  // disponibilidade, políticas, datas de abertura etc.)
  precisionNotice: 'Consulte nossa equipe comercial para informações atualizadas.',

  // ---------------------------------------------------------------------------
  // CONTATOS — substitua pelos dados oficiais da representação no Brasil
  // ---------------------------------------------------------------------------
  contacts: {
    // Formato internacional, apenas dígitos: 55 + DDD + número
    whatsappNumber: '5500000000000',
    email: 'reservas@hoteldecielo.com.br',
    commercialEmail: 'agencias@hoteldecielo.com.br'
  },

  // Canais oficiais do hotel (fonte: hoteldecielo.com)
  official: {
    site: 'https://www.hoteldecielo.com/pt/',
    instagram: 'https://www.instagram.com/hoteldecielo'
  },

  // ---------------------------------------------------------------------------
  // INTEGRAÇÕES — preencha os IDs para ativar automaticamente
  // ---------------------------------------------------------------------------
  integrations: {
    gtmId: '',        // ex.: 'GTM-XXXXXXX'  (Google Tag Manager)
    ga4Id: '',        // ex.: 'G-XXXXXXXXXX' (Google Analytics 4 — dispensável se usar GTM)
    metaPixelId: '',  // ex.: '1234567890'   (Pixel Meta Ads)
    // Endpoint HTTP do CRM/automação (RD Station, HubSpot, Zapier, Make, n8n...).
    // Recebe POST JSON com os campos do formulário. Vazio = leads ficam
    // registrados no navegador (localStorage) e nos eventos de analytics.
    crmEndpoint: ''
  },

  // ---------------------------------------------------------------------------
  // MENSAGENS AUTOMÁTICAS DO WHATSAPP
  // ---------------------------------------------------------------------------
  whatsappMessages: {
    consumer:
      'Olá! Tenho interesse no Hotel de Cielo Mendoza e gostaria de receber uma cotação personalizada.',
    agency:
      'Olá! Sou agência de viagens e gostaria de informações comerciais para vender Hotel de Cielo no Brasil.',
    futureUnits:
      'Olá! Gostaria de receber novidades sobre as próximas unidades Hotel de Cielo.'
  },

  // ---------------------------------------------------------------------------
  // UNIDADES E EXPANSÃO
  // status: 'active' (Em operação) | 'coming-soon' (Em breve) | 'prelaunch' (Pré-lançamento)
  // enabled: false oculta o card sem apagar o cadastro
  //
  // IMPORTANTE: só marque uma unidade como 'active' quando ela estiver
  // oficialmente em operação.
  // ---------------------------------------------------------------------------
  units: [
    {
      id: 'mendoza',
      name: 'Hotel de Cielo Mendoza / Valle de Uco',
      location: 'La Carrera, Valle de Uco — Argentina',
      status: 'active',
      enabled: true,
      description:
        'A primeira experiência Hotel de Cielo, no coração de Mendoza, entre montanhas, vinhos e natureza.',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'atacama',
      name: 'Hotel de Cielo Atacama',
      location: 'Deserto do Atacama — Chile',
      status: 'coming-soon',
      enabled: true,
      description:
        'Uma nova experiência inspirada no céu, no deserto e em paisagens únicas do Chile.',
      image:
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'peru',
      name: 'Hotel de Cielo Peru',
      location: 'Peru',
      status: 'coming-soon',
      enabled: true,
      description:
        'Um projeto pensado para conectar hospitalidade, cultura andina, natureza e experiências autênticas.',
      image:
        'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'gramado',
      name: 'Hotel de Cielo Gramado',
      location: 'Serra Gaúcha — Brasil',
      status: 'coming-soon',
      enabled: true,
      description:
        'Uma futura experiência no Brasil, conectando charme, clima de serra e hospitalidade boutique.',
      image:
        'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'buenos-aires',
      name: 'Hotel de Cielo Buenos Aires',
      location: 'Buenos Aires — Argentina',
      status: 'coming-soon',
      enabled: true,
      description:
        'Uma futura porta de entrada urbana para viver a Argentina com design, cultura, gastronomia e a hospitalidade Hotel de Cielo.',
      image:
        'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&w=900&q=80'
    }
  ],

  // ---------------------------------------------------------------------------
  // DEPOIMENTOS — a seção só aparece quando houver depoimentos reais cadastrados.
  // Não publique avaliações não confirmadas.
  // Formato: { quote: '...', author: 'Nome', origin: 'Cidade/UF' }
  // ---------------------------------------------------------------------------
  testimonials: [],

  // ---------------------------------------------------------------------------
  // FOTOS — placeholders premium (Unsplash). Substitua pelas fotos oficiais
  // do hotel assim que disponíveis (pode usar caminhos locais: '/fotos/hero.jpg')
  // ---------------------------------------------------------------------------
  images: {
    logo: publicAsset('hotel-de-cielo-favicon.svg'),
    // Variante com texto claro, para fundos escuros (navbar, rodapé)
    logoLight: publicAsset('hotel-de-cielo-favicon.svg'),
    hero: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=82',
    hotel: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=82',
    loft: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82',
    wine: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=82',
    gastronomy: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=82',
    mountain: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=82',
    bike: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1000&q=82',
    rest: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1000&q=82',
    sky: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=82',
    couple: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=82',
    agency: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1400&q=82'
  }
};

export const UNIT_STATUS_LABELS = {
  active: 'Em operação',
  'coming-soon': 'Em breve',
  prelaunch: 'Pré-lançamento'
};
