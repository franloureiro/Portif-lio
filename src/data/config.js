// Deixe vazio até ter os dados reais. Telefone e WhatsApp: DDI + DDD + número.
export const config = {
  name: 'Francisco Loureiro',
  email: 'ploureiro434@gmail.com',
  whatsapp: '',
  phone: '',
  github: 'https://github.com/franloureiro',
  linkedin: 'https://www.linkedin.com/in/francisco-loureiro-6960263b5',
  instagram: 'https://www.instagram.com/fran.loureiro/',
  // Outras redes: [{ name: 'Behance', url: 'https://...' }]. Sem URLs fictícias.
  socialLinks: [],
  photo: new URL('../../public/images/eu.jfif', import.meta.url).href,
  heroPhoto: new URL('../../public/images/eupb.jpeg', import.meta.url).href,
  siteUrl: '', // URL definitiva para canonical, Open Graph e sitemap.
};
