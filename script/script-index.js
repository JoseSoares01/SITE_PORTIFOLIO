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

  // Função que inicializa o mapa com Leaflet
//function initMap() {
    // Criação do mapa com as coordenadas desejadas
    //var map = L.map('map').setView([40.730610, -73.935242], 13); // Coordenadas de exemplo (Nova York)
  
    // Adicionar camada do mapa usando OpenStreetMap
    //L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //}).addTo(map);
  
    // Adicionar marcador
    //L.marker([40.730610, -73.935242]).addTo(map)
      //.bindPopup("<b>José Soares</b><br>Portfólio.")
      //.openPopup();
//}

// Chamar a função para inicializar o mapa
//initMap();//
