// Marca que JavaScript está activo (así, sin JS, todo se ve igual)
document.documentElement.classList.add('js');

// Entrada escalonada: el nombre y los íconos aparecen uno tras otro
document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.autor, .icono');
  elementos.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + 150 * i);
  });
});
