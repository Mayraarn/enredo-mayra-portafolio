// Marca que JavaScript está activo (sin JS todo se ve igual, solo sin animaciones)
document.documentElement.classList.add('js');

// Si falta alguna foto, se oculta la imagen rota y queda el recuadro de color
document.querySelectorAll('img').forEach((img) => {
  const marcar = () => {
    img.classList.add('falta');
    if (img.parentElement) img.parentElement.classList.add('sin-foto');
  };
  if (img.complete && img.naturalWidth === 0) marcar();
  else img.addEventListener('error', marcar);
});

// Las fotos y miniaturas aparecen suavemente al entrar en pantalla
const elementos = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.08 });
  elementos.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i, 5) * 80}ms`;
    observador.observe(el);
  });
} else {
  elementos.forEach((el) => el.classList.add('visible'));
}
