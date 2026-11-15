/**
 * Entrada suave dos blocos ao rolar a página.
 * Só age quando o <html> tem a classe `js-motion` (ou seja, sem prefers-reduced-motion).
 */
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (document.documentElement.classList.contains('js-motion') && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );
  targets.forEach((el) => io.observe(el));
} else {
  targets.forEach((el) => el.classList.add('is-in'));
}
