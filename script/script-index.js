// Função para responsividade do botão hamburguer

function checkScreenSize() {
    const buttonHamburguer = document.querySelector('.button-hamburguer');

    if (window.innerWidth <= 480) {
        // Mostra o botão apenas para smartphones pequenos
        buttonHamburguer.style.display = 'block';
        console.log('Dispositivo pequeno detectado');
    } else if (window.innerWidth <= 768) {
        // Mostra o botão para tablets e smartphones maiores
        buttonHamburguer.style.display = 'block';
        console.log('Tablet ou smartphone maior detectado');
    } else {
        // Esconde o botão em dispositivos maiores
        buttonHamburguer.style.display = 'none';
        console.log('Dispositivo maior detectado');
    }
}


// Verifica o tamanho da tela ao carregar a página
checkScreenSize();

// Adiciona um evento para reagir ao redimensionamento da janela
window.addEventListener('resize', checkScreenSize);