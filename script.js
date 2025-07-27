document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

});

document.addEventListener('mousemove', (e) => {
    const spotlight = document.querySelector('.mouse-spotlight');
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;
    spotlight.style.setProperty('--x', `${x}px`);
    spotlight.style.setProperty('--y', `${y}px`);
});

window.addEventListener('load', () => {
    const spotlight = document.querySelector('.mouse-spotlight');
    spotlight.style.height = document.body.scrollHeight + 'px';
});

window.addEventListener('resize', () => {
    const spotlight = document.querySelector('.mouse-spotlight');
    spotlight.style.height = document.body.scrollHeight + 'px';
});

//Para dar efecto a la linea del <h2>

document.addEventListener('DOMContentLoaded', () => {
  const sectionTitles = document.querySelectorAll('h2');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.6
  });

  sectionTitles.forEach(title => observer.observe(title));
});
