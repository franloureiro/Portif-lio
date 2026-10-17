export function initNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    nav.classList.remove('open');
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  matchMedia('(min-width:701px)').addEventListener('change', closeMenu);

  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            document
              .querySelectorAll('nav a')
              .forEach((a) => a.classList.toggle('active', a.hash === `#${entry.target.id}`));
        }),
      { rootMargin: '-20% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
  }
  function progress() {
    const max = document.documentElement.scrollHeight - innerHeight;
    document.querySelector('.scroll-progress').style.transform =
      `scaleX(${max > 0 ? scrollY / max : 0})`;
  }
  addEventListener('scroll', progress, { passive: true });
  addEventListener('resize', progress);
  progress();
}
