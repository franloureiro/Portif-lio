/** Replace broken project screenshots with an explicit, accessible message. */
export function initProjectImages() {
  document.querySelectorAll('.project-visual img').forEach((image) => {
    function showError() {
      const container = image.closest('.project-visual');
      container.classList.remove('has-image');
      const message = document.createElement('p');
      message.className = 'missing-image';
      message.textContent = 'Imagem indisponível';
      image.replaceWith(message);
    }
    image.addEventListener('error', showError, { once: true });
    if (image.complete && !image.naturalWidth) showError();
  });
}
