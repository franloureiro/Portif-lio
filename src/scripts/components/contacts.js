import { escape, safeUrl } from '../utils/html.js';

export function initContacts(config) {
  const contacts = [
    ['E-mail', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email) ? `mailto:${config.email}` : ''],
    ['GitHub', safeUrl(config.github)],
    ['LinkedIn', safeUrl(config.linkedin)],
    ['Instagram', safeUrl(config.instagram)],
    ...(config.socialLinks || []).map((social) => [social.name, safeUrl(social.url)]),
  ];
  const contactIcons = {
    GitHub: 'github',
    LinkedIn: 'linkedin',
    Instagram: 'instagram',
    'E-mail': 'envelope',
    Telefone: 'telephone',
  };
  const contactIcon = (name) =>
    contactIcons[name]
      ? `<i class="bi bi-${contactIcons[name]} social-icon" aria-hidden="true"></i>`
      : '';
  const contactButton = (name, url, compact = false) =>
    name === 'E-mail' && url
      ? `<span class="social-button email-display${compact ? ' compact' : ''}">${contactIcon(name)}<span>${escape(config.email)}</span></span>`
      : url
        ? `<a class="social-button${compact ? ' compact' : ''}" href="${escape(url)}"${url.startsWith('https:') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${contactIcon(name)}<span>${escape(name)}</span></a>`
        : `<button type="button" class="social-button${compact ? ' compact' : ''}" disabled aria-label="${escape(name)}: contato ainda não informado"><span>${escape(name)}</span><small>A configurar</small></button>`;
  const container = document.querySelector('#contact-links');
  if (container)
    container.innerHTML = contacts.map(([name, url]) => contactButton(name, url)).join('');
  const heroContacts = document.querySelector('#hero-contact-links');
  if (heroContacts) {
    heroContacts.innerHTML = contacts
      .map(([name, url]) => {
        if (name === 'E-mail') {
          return `<span class="hero-contact">${contactIcon(name)}<span>${escape(config.email)}</span></span>`;
        }
        return url
          ? `<a class="hero-contact" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${contactIcon(name)}<span>${escape(name)}</span></a>`
          : '';
      })
      .join('');
  }
  const intro = document.querySelector('.editorial-intro');
  if (intro) {
    const actions = document.createElement('div');
    actions.className = 'intro-actions';
    actions.setAttribute('aria-label', 'Contato e redes sociais');
    actions.innerHTML = contacts
      .filter(([name]) => name !== 'Telefone')
      .map(([name, url]) => contactButton(name, url, true))
      .join('');
    intro.append(actions);
  }
}
