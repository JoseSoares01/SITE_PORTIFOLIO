/* JavaScript */
document.addEventListener('DOMContentLoaded', function() {
    const buttonHamburguer = document.querySelector('.button-hamburguer');
    const navbarCollapse = document.querySelector('#navbarResponsive');

    buttonHamburguer.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarCollapse.classList.toggle('show');
    });

    // Fechar menu ao clicar em um link
    document.querySlectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navbarCollapse.classList.remove('show');
            buttonHamburguer.classList.remove('active');
        });
    });
});

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  }