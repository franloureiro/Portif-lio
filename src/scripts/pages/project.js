import { escape } from '../utils/html.js';
import { visual, publicLink, technologyList } from '../components/project-visual.js';
import { projectUrl } from '../components/projects.js';

function textSection(title, text) {
  return text ? `<div><h2>${escape(title)}</h2><p>${escape(text)}</p></div>` : '';
}

export function initProjectPage(projects) {
  const main = document.querySelector('main');
  if (!main) return;
  const slug = new URLSearchParams(location.search).get('projeto');
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];

  if (!project) {
    document.title = 'Projeto não encontrado · Francisco Loureiro';
    main.innerHTML = `<section class="section case-header">
      <p class="eyebrow">PROJETO NÃO ENCONTRADO</p><h1>Vamos voltar?</h1>
      <a class="button primary" href="./index.html#projetos">Explorar projetos ↗</a>
    </section>`;
    return;
  }

  document.title = `${project.name} · Francisco Loureiro`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', project.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute('content', project.description);

  const next = projects[(index + 1) % projects.length];
  main.innerHTML = `
    <section class="section case-header">
      <a class="text-link" href="./index.html#projetos">← Todos os projetos</a>
      <h1>${escape(project.name)}</h1><p>${escape(project.description)}</p>
      <div class="project-links">
        ${project.status ? `<span class="project-status">${escape(project.status)}</span>` : ''}${publicLink(project)}
      </div>
    </section>
    <section class="section case-content">
      ${visual(project)}
      <div class="case-grid">
        ${textSection('Contexto', project.context)}
        ${textSection('Objetivo', project.objective)}
        ${textSection(project.status === 'Em desenvolvimento' ? 'Solução em desenvolvimento' : 'Solução', project.description)}
        ${project.features.length ? `<div><h2>Funcionalidades</h2><ul>${project.features.map((feature) => `<li>${escape(feature)}</li>`).join('')}</ul></div>` : ''}
        <div><h2>Tecnologias</h2>${technologyList(project)}</div>
        ${textSection('Desafios técnicos', project.challenges)}
      </div>
      ${project.gallery.length ? `<div class="case-gallery"><h2>Galeria</h2>${project.gallery.map((image, index) => `<img src="${escape(image)}" alt="${escape(project.name)}, captura ${index + 1}" loading="lazy" decoding="async">`).join('')}</div>` : ''}
      <a class="case-next" href="${projectUrl(next)}">
        <span>Próximo projeto<br>${escape(next.name)}</span><span>↗</span>
      </a>
    </section>`;
}
