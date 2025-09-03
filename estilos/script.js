// Smooth scrolling for navigation links
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

// Add scroll effect to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
      header.style.background = 'rgba(10, 10, 10, 0.95)';
  } else {
      header.style.background = 'rgba(10, 10, 10, 0.9)';
  }
});

// Animate portfolio cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, observerOptions);

// Apply animation to cards
document.querySelectorAll('.portfolio-card, .experience-item').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Animate chart bars
const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.chart-bar');
          bars.forEach((bar, index) => {
              setTimeout(() => {
                  bar.style.animation = 'growUp 1.5s ease-out forwards';
              }, index * 200);
          });
      }
  });
}, observerOptions);

document.querySelectorAll('.dashboard-visualization').forEach(viz => {
  chartObserver.observe(viz);
});

// Add hover effects to tool icons
document.querySelectorAll('.tool-icon').forEach(icon => {
  const symbols = ['🐍', '📊', '☁️', '🗄️', '🧠', '⚡'];
  const tools = ['Python', 'Tableau', 'AWS', 'SQL', 'ML', 'Spark'];
  
  icon.addEventListener('mouseenter', function() {
      const index = Array.from(document.querySelectorAll('.tool-icon')).indexOf(this);
      this.setAttribute('data-tooltip', tools[index]);
      this.style.position = 'relative';
  });
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('.contact-input').value;
  if (email) {
      alert('Obrigado pelo interesse! Entrarei em contato em breve.');
      this.reset();
  }
});


document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
menuToggle.addEventListener('click', function() {
navMenu.classList.toggle('open');
menuToggle.classList.toggle('active'); // Opcional: para animar o ícone
});
}
});