// Atualizar ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Botão Voltar ao Topo
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.pointerEvents = 'all';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.pointerEvents = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});