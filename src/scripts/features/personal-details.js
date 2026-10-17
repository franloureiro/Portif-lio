import { safeUrl } from '../utils/html.js';

export function initPersonalDetails(config) {
  document.querySelector('#year').textContent = new Date().getFullYear();
  const backdrop = document.querySelector('.hero-backdrop');
  if (backdrop && config.heroPhoto) {
    const portrait = new Image();
    portrait.className = 'hero-portrait';
    portrait.alt = '';
    portrait.decoding = 'async';
    portrait.fetchPriority = 'high';
    portrait.onload = () => backdrop.prepend(portrait);
    portrait.src = config.heroPhoto;
  }
  const aboutMarker = document.querySelector('.about-marker');
  if (config.photo && aboutMarker) {
    const image = new Image();
    image.className = 'about-photo';
    image.alt = 'Francisco Loureiro';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.width = 960;
    image.height = 1280;
    image.onerror = () => image.replaceWith(aboutMarker);
    image.src = config.photo;
    aboutMarker.replaceWith(image);
  }
  if (safeUrl(config.siteUrl)) {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = new URL(location.pathname, config.siteUrl).href;
    document.head.append(link);
  }
}
