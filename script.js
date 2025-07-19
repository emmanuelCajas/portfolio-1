// Menú móvil
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Efecto smooth scroll para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.backgroundColor = window.scrollY > 50 ? 'rgba(10, 25, 47, 0.9)' : 'rgba(10, 25, 47, 0.9)';
});