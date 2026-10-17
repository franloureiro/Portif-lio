import { escape } from '../utils/html.js';
import { visual, publicLink, technologyList } from './project-visual.js';

export function projectUrl(project) {
  return `./projeto.html?projeto=${encodeURIComponent(project.slug)}`;
}

function projectCard(project, index) {
  const url = projectUrl(project);
  return `
    <article class="project reveal">
      <a href="${url}" aria-label="Ver detalhes de ${escape(project.name)}">
        ${visual(project)}
      </a>
      <div class="project-info">
        <div>
          <h3>${escape(project.name)}</h3>
          <p class="project-category">${escape(project.category)}${project.status ? ` · ${escape(project.status)}` : ''}</p>
          <div class="project-details">
            <p class="project-description">${escape(project.description)}</p>
            ${technologyList(project)}
            <div class="project-links">${publicLink(project)}</div>
          </div>
          <a class="project-open" href="${url}">VER DETALHES</a>
        </div>
        <span class="project-index">${String(index + 1).padStart(2, '0')}</span>
      </div>
    </article>`;
}

export function initProjects(projects) {
  const container = document.querySelector('#project-list');
  if (!container) return;
  container.innerHTML = projects.map(projectCard).join('');

  const count = document.querySelector('.work-count');
  if (count) {
    count.textContent = String(projects.length).padStart(2, '0');
    count.setAttribute('aria-label', `${projects.length} projetos`);
  }
  const heroCount = document.querySelector('.hero-project-count');
  if (heroCount) {
    heroCount.textContent = String(projects.length).padStart(2, '0');
    heroCount.setAttribute('aria-label', `${projects.length} projetos`);
  }

  const section = document.querySelector('#projetos');
  const controls = section.querySelectorAll('.view-controls button');
  controls.forEach((button) =>
    button.addEventListener('click', () => {
      section.dataset.view = button.dataset.view;
      controls.forEach((control) =>
        control.setAttribute('aria-pressed', String(control === button)),
      );
      window.dispatchEvent(new Event('resize'));
    }),
  );
}
