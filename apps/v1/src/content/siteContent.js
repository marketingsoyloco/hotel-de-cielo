const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const siteConfig = {
  locale: 'pt-BR',
  brand: 'Hotel de Cielo',
  logoPath: publicAsset('assets/hotel-de-cielo-icon.svg'),
  precisionNotice: 'Consulte nossa equipe comercial para informações atualizadas.',
  contacts: {
    whatsappNumber: '5500000000000',
    email: 'reservas-brasil@example.com',
    commercialEmail: 'agencias-brasil@example.com'
  },
  integrations: {
    gtmId: '',
    ga4Id: '',
    metaPixelId: '',
    crmEndpoint: ''
  },
  whatsappMessages: {
    consumer:
      'Olá! Tenho interesse no Hotel de Cielo Mendoza e gostaria de receber uma cotação personalizada.',
    agency:
      'Olá! Sou agência de viagens e gostaria de informações comerciais para vender Hotel de Cielo no Brasil.',
    futureUnits:
      'Olá! Gostaria de receber novidades sobre as próximas unidades Hotel de Cielo.'
  },
  navigation: [
    { label: 'Hotel', href: '#hotel' },
    { label: 'Experiências', href: '#experiencias' },
    { label: 'Unidades', href: '#unidades' },
    { label: 'Cliente Final', href: '#cliente-final' },
    { label: 'Agências', href: '#agencias' },
    { label: 'Contato', href: '#contato' }
  ],
  images: {
    note: 'Imagens placeholder premium. Substituir por fotos oficiais quando disponiveis.',
    hero:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=82',
    hotel:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=82',
    wine:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=82',
    gastronomy:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=82',
    mountain:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=82',
    bike:
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=82',
    rest:
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=82',
    sky:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=82',
    loft:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82',
    couple:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=82',
    agency:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82'
  }
};

export const hero = {
  title: 'Hotel de Cielo: viva Mendoza entre montanhas, vinhos e céu infinito',
  subtitle:
    'Um Sky Hotel no Valle de Uco, em La Carrera, para brasileiros que desejam viver campo, montanha, vinho, gastronomia e descanso em um dos cenários mais inspiradores de Mendoza.',
  badges: [
    'Sky Hotel - Vale do Uco',
    'La Carrera, Mendoza',
    'Campo, vinho e montanha',
    'Atendimento no Brasil',
    'Cliente final e agências'
  ]
};

export const trustCards = [
  'Atendimento em português',
  'Suporte para cliente final',
  'Condições para agências parceiras',
  'Cotação personalizada',
  'Orientação sobre roteiro Argentina / Mendoza',
  'Possibilidade de combinar hotel + experiências + transfers + vinícolas'
];

export const hotelHighlights = [
  'Valle de Uco, La Carrera',
  'Vistas para o Cordón del Plata',
  'Campo e montanha com comodidades',
  'Sky Lofts para 2 e 4 pessoas',
  'Café da manhã à la carte',
  'Salão da Estrela e gastronomia regional',
  'Experiências junto à Cordilheira dos Andes',
  'A cerca de 40 minutos das principais bodegas do Valle de Uco',
  'A cerca de 1 hora da cidade de Mendoza',
  'Acesso final por aproximadamente 10 km de estrada de cascalho'
];

export const experiences = [
  {
    title: 'Enoturismo no Valle de Uco',
    text: 'Roteiros para descobrir bodegas próximas, paisagens abertas e sabores de uma das regiões mais especiais de Mendoza.',
    image: siteConfig.images.wine
  },
  {
    title: 'Salão da Estrela e gastronomia',
    text: 'Produtos locais, cozinha regional e uma proposta de sabores que valoriza produtores e a cultura do território.',
    image: siteConfig.images.gastronomy
  },
  {
    title: 'Montanha e natureza',
    text: 'Momentos cercados por um ambiente incomparável junto à Cordilheira dos Andes.',
    image: siteConfig.images.mountain
  },
  {
    title: 'Bike e aventura leve',
    text: 'Movimento, ar puro e caminhos para explorar La Carrera sem perder o ritmo tranquilo da viagem.',
    image: siteConfig.images.bike
  },
  {
    title: 'Relaxamento e descanso',
    text: 'Uma pausa elegante para dormir melhor, respirar mais fundo e viajar com calma.',
    image: siteConfig.images.rest
  },
  {
    title: 'Céu, silêncio e conexão',
    text: 'Paisagens amplas, noites abertas e o silêncio de campo que muda o ritmo dos dias.',
    image: siteConfig.images.sky
  },
  {
    title: 'Pacotes românticos',
    text: 'Experiências para casais que buscam vinho, montanha, privacidade e beleza.',
    image: siteConfig.images.couple
  },
  {
    title: 'Escapadas premium desde Mendoza',
    text: 'Combinações sob medida para transformar uma estadia em uma viagem completa.',
    image: siteConfig.images.hotel
  }
];

export const lofts = [
  'Loft para casal',
  'Loft para até 4 pessoas',
  'Experiência romântica',
  'Estadia com café da manhã',
  'Vista para montanhas',
  'Estrutura confortável'
];

export const units = [
  {
    name: 'Hotel de Cielo Mendoza / Valle de Uco',
    status: 'Em operação',
    state: 'active',
    description:
      'A primeira experiência Hotel de Cielo, no coração de Mendoza, entre montanhas, vinhos e natureza.'
  },
  {
    name: 'Hotel de Cielo Atacama',
    status: 'Em breve',
    state: 'coming-soon',
    description:
      'Uma nova experiência inspirada no céu, no deserto e em paisagens únicas do Chile.'
  },
  {
    name: 'Hotel de Cielo Peru',
    status: 'Em breve',
    state: 'coming-soon',
    description:
      'Um projeto pensado para conectar hospitalidade, cultura andina, natureza e experiências autênticas.'
  },
  {
    name: 'Hotel de Cielo Gramado',
    status: 'Em breve',
    state: 'coming-soon',
    description:
      'Uma futura experiência no Brasil, conectando charme, clima de serra e hospitalidade boutique.'
  },
  {
    name: 'Hotel de Cielo Buenos Aires',
    status: 'Em breve',
    state: 'coming-soon',
    description:
      'Uma futura porta de entrada urbana para viver a Argentina com design, cultura, gastronomia e hospitalidade Hotel de Cielo.'
  }
];

export const audienceBlocks = [
  'Casais em viagem romântica',
  'Brasileiros viajando para Mendoza',
  'Amantes de vinho e gastronomia',
  'Famílias buscando uma experiência diferente',
  'Viajantes que querem natureza com conforto',
  'Pessoas que desejam fugir do turismo comum'
];

export const leadHelpOptions = [
  'Quero reservar hospedagem',
  'Quero pacote completo para Mendoza',
  'Quero viagem romântica',
  'Quero experiência com vinícolas',
  'Sou agência de viagens',
  'Quero informações sobre futuras unidades'
];

export const agencyInterests = [
  'Tarifas',
  'Famtour',
  'Grupo',
  'FIT',
  'Pacote Mendoza',
  'Parceria comercial'
];
