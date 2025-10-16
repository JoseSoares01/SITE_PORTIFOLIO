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

// Lamp Component Interactions
const lampSection = document.querySelector('.lamp-section');
const lampEffects = document.querySelector('.lamp-effects');

if (lampSection && lampEffects) {
    // Add mouse movement parallax effect
    lampSection.addEventListener('mousemove', function(e) {
        const rect = lampSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) / 50;
        const moveY = (y - centerY) / 50;
        
        // Move lamp effects based on mouse position
        const leftGlow = document.querySelector('.lamp-glow-left');
        const rightGlow = document.querySelector('.lamp-glow-right');
        const centerBeam = document.querySelector('.lamp-beam-center');
        
        if (leftGlow) {
            leftGlow.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.3}px)`;
        }
        
        if (rightGlow) {
            rightGlow.style.transform = `translate(${moveX * -0.5}px, ${moveY * 0.3}px)`;
        }
        
        if (centerBeam) {
            centerBeam.style.transform = `translateX(-50%) translate(${moveX * 0.2}px, ${moveY * 0.1}px)`;
        }
    });
    
    // Reset position when mouse leaves
    lampSection.addEventListener('mouseleave', function() {
        const leftGlow = document.querySelector('.lamp-glow-left');
        const rightGlow = document.querySelector('.lamp-glow-right');
        const centerBeam = document.querySelector('.lamp-beam-center');
        
        if (leftGlow) leftGlow.style.transform = 'translate(0, 0)';
        if (rightGlow) rightGlow.style.transform = 'translate(0, 0)';
        if (centerBeam) centerBeam.style.transform = 'translateX(-50%) translate(0, 0)';
    });
    
    // Add scroll-triggered animations
    const lampObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('lamp-in-view');
                
                // Trigger additional animations
                const title = entry.target.querySelector('.lamp-title');
                const subtitle = entry.target.querySelector('.lamp-subtitle');
                const btn = entry.target.querySelector('.lamp-btn');
                
                if (title) {
                    setTimeout(() => title.style.animationPlayState = 'running', 300);
                }
                if (subtitle) {
                    setTimeout(() => subtitle.style.animationPlayState = 'running', 800);
                }
                if (btn) {
                    setTimeout(() => btn.style.animationPlayState = 'running', 1200);
                }
            }
        });
    }, {
        threshold: 0.3
    });
    
    lampObserver.observe(lampSection);
    
    // Add pulsing effect to lamp beams
    setInterval(() => {
        const beams = document.querySelectorAll('.lamp-beam');
        beams.forEach(beam => {
            beam.style.transform = beam.style.transform || 'scale(1)';
            beam.style.transition = 'transform 0.5s ease';
            beam.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                beam.style.transform = 'scale(1)';
            }, 500);
        });
    }, 3000);
}
});