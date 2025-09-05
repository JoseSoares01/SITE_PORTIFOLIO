
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });

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

    // Apply animation to cards and experience items
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

    // Portfolio card flip functionality for mobile
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                this.classList.toggle('flipped');
                const cardInner = this.querySelector('.card-inner');
                if (this.classList.contains('flipped')) {
                    cardInner.style.transform = 'rotateY(180deg)';
                } else {
                    cardInner.style.transform = 'rotateY(0deg)';
                }
            }
        });
    });

    // Add parallax effect to grid decorations
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const gridTop = document.querySelector('.grid-top-left');
        const gridBottom = document.querySelector('.grid-bottom-right');
        
        if (gridTop) {
            gridTop.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
        if (gridBottom) {
            gridBottom.style.transform = `translateY(${scrolled * -0.1}px)`;
        }
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

    // Add loading animation for social icons
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            // If it's an email or WhatsApp link, handle differently
            if (this.href.includes('mailto:') || this.href.includes('wa.me')) {
                return; // Let the default behavior happen
            }
            
            // Add loading effect for external links
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Pause infinite scroll on hover
    const scrollContainer = document.querySelector('.languages-scroll-container');
    if (scrollContainer) {
        scrollContainer.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        scrollContainer.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }