// Mobile menu toggle
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
  
  const hamburger = document.querySelector('.hamburger');
  hamburger.classList.toggle('active');
}

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Add your form submission logic here
  alert('Mensagem enviada com sucesso!');
  this.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll animation for portfolio cards
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.portfolio-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.5s ease-out';
  observer.observe(card);
});

// NEW EFFECT GRID BACKGROUD//-------------------------------------
        for (var i = 0; i < 350; i++){
    let box = document.createElement('span');
    document.getElementById('container').appendChild(box);
}

window.onload = function () {
    for (var i = 0; i < 350; i++) {
        let box = document.createElement('span');
        document.getElementById('container').appendChild(box);
    }
  
    let cursor = document.getElementById('cursor');

    window.onmousemove = function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    };
  }
