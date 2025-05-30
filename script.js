document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  const encuestaForm = document.getElementById('encuestaForm');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });

    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }

  if (encuestaForm) {
    encuestaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.open('gracias.html', '_blank');
    });
  }
});