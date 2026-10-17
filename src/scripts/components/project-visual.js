import { escape, safeUrl } from '../utils/html.js';

export function technologyList(project) {
  if (!project.technologies.length) {
    return `<p class="tech-note">${escape(project.techNote)}</p>`;
  }
  return `<div class="tech-list">${project.technologies
    .map((technology) => `<span>${escape(technology)}</span>`)
    .join('')}</div>`;
}

export function visual(project) {
  const content = project.image
    ? `<img src="${escape(project.image)}" alt="Captura do site ${escape(project.name)}" loading="lazy" decoding="async">`
    : `<p class="missing-image">${escape(project.name)}</p>
       <span class="placeholder-label">IMAGEM DO PROJETO<br>A ADICIONAR</span>`;
  return `<div class="project-visual ${escape(project.tone)}${project.image ? ' has-image' : ''}">
    ${content}
  </div>`;
}
export const publicLink = (p) =>
  safeUrl(p.url)
    ? `<a href="${escape(safeUrl(p.url))}" target="_blank" rel="noopener noreferrer">Visitar site ↗</a>`
    : '';
