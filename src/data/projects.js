// URLs relativas ao módulo funcionam no preview estático e são resolvidas pelo Vite no build.
// Campos sem confirmação permanecem vazios e são omitidos dos cases.
export const projects = [
  {
    slug: 'br-radiadores',
    name: 'BR RADIADORES',
    category: 'Landing page empresarial',
    status: 'Publicado',
    tone: 'blue',
    mark: 'BR',
    subtitle: 'RADIADORES',
    description:
      'Desenvolvimento de uma landing page para a BR RADIADORES, com apresentação dos serviços de radiadores e escapamentos, informações da empresa e canais de atendimento. O projeto combina a identidade visual da marca com uma comunicação objetiva, destacando as soluções para veículos leves e pesados e facilitando o contato com a equipe.',
    context:
      'Projeto de presença digital para a BR RADIADORES, empresa do segmento de radiadores automotivos e industriais, com atuação também em escapamentos.',
    objective:
      'Organizar a apresentação da empresa e de seus serviços em uma página de fácil consulta, ajudando o visitante a identificar o atendimento que procura e a encontrar os canais de contato e a localização.',
    features: [
      'Apresentação dos serviços de radiadores e escapamentos',
      'Destaque para atendimento a veículos leves e pesados',
      'Informações institucionais e localização',
      'Chamadas para atendimento e acesso à loja online',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://www.brradiadores.com.br',
    image: new URL('../../public/images/BRLP.png', import.meta.url).href,
    gallery: [],
    challenges: '',
  },
  {
    slug: 'joed-transportes',
    name: 'JOED TRANSPORTES',
    category: 'Landing page empresarial',
    status: '',
    tone: 'blue',
    description:
      'Desenvolvimento de uma landing page para a JOED TRANSPORTES, com apresentação da empresa, seus serviços e atuação no transporte de cargas. Uma presença digital com identidade visual marcante, comunicação direta e destaque para os canais de contato.',
    context:
      'Projeto de presença digital para a JOED TRANSPORTES, empresa do segmento de transporte de cargas.',
    objective:
      'Reunir a apresentação da empresa e de seus serviços em uma landing page, facilitando o acesso às informações e aos canais de contato para solicitação de orçamento.',
    features: [
      'Apresentação institucional da transportadora',
      'Seções de serviços e transportes',
      'Destaque visual para a operação de transporte',
      'Chamadas para contato e solicitação de orçamento',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    url: '',
    image: new URL('../../public/images/joed.png', import.meta.url).href,
    gallery: [],
    challenges: '',
  },
  {
    slug: 'dra-laura',
    name: 'Dra. Laura Pneumopediatra',
    category: 'Landing page para Pneumopediatra',
    status: '',
    tone: 'blue',
    description:
      'Desenvolvimento de uma landing page para a Dra. Laura, pneumopediatra, com apresentação profissional, especialidades e orientações de contato para agendamento. A composição utiliza cores suaves, tipografia de destaque e fotografia pessoal para criar uma experiência acolhedora e organizar as informações de atendimento com clareza.',
    context:
      'Projeto de presença digital para a Dra. Laura, com foco na apresentação de sua atuação em pneumopediatria e das informações de atendimento às famílias.',
    objective:
      'Reunir a apresentação da médica, suas especialidades e os caminhos para contato em uma página clara e acessível, facilitando a consulta às informações e o primeiro contato para agendamento.',
    features: [
      'Apresentação profissional com fotografia da médica',
      'Seções sobre a médica e suas especialidades',
      'Informações de contato e agendamento',
      'Chamadas para agendar consulta e contato pelo WhatsApp',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    url: '',
    image: new URL('../../public/images/LPLAURA.png', import.meta.url).href,
    gallery: [],
    challenges: '',
  },
];
