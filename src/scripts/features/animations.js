// Importação tolerante a falhas: o conteúdo permanece visível sem animações.
export async function initAnimations() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try {
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]);
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({ defaults: { ease: 'power3.out', duration: 0.65 } })
      .from('.header', { opacity: 0, y: -8 })
      .from('main h1', { opacity: 0, y: 20 }, '-.3');
    document
      .querySelectorAll('.section-heading, .service, .about .reveal, .contact .reveal')
      .forEach((el) =>
        gsap.from(el, {
          opacity: 0,
          y: 18,
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 95%', once: true },
        }),
      );
    document
      .querySelectorAll('.view-controls button')
      .forEach((button) => button.addEventListener('click', () => ScrollTrigger.refresh()));
  } catch (error) {
    console.info('Animações indisponíveis; conteúdo preservado.', error.message);
  }
}
