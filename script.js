// Configuração do Carrossel
let currentSlide = 0;
const carousel = document.getElementById('carousel');
const dotsContainer = document.getElementById('dots');
const itemsPerView = 3;

// Inicializar dots
function initializeDots() {
    const items = document.querySelectorAll('.carousel-item');
    const totalSlides = Math.ceil(items.length / itemsPerView);
    
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.onclick = () => goToSlide(i);
        dotsContainer.appendChild(dot);
    }
}

// Mover carrossel
function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalSlides = Math.ceil(items.length / itemsPerView);
    
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    updateCarousel();
}

// Ir para slide específico
function goToSlide(slide) {
    currentSlide = slide;
    updateCarousel();
}

// Atualizar posição do carrossel
function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;
    const gap = 24; // 1.5rem em pixels
    const offset = -(currentSlide * (itemWidth + gap) * itemsPerView);
    
    carousel.style.transform = `translateX(${offset}px)`;
    
    // Atualizar dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Modal
function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Analytics simples - rastreamento de cliques em links de afiliado
document.querySelectorAll('a[href*="meli.la"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Link de afiliado clicado:', this.href);
        // Aqui você pode adicionar código de analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'affiliate_click', {
                'link': this.href
            });
        }
    });
});

// Adicionar classe ativa ao navegar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Responsividade do carrossel
function updateCarouselResponsive() {
    const width = window.innerWidth;
    
    if (width <= 480) {
        // Mobile: 1 item por vez
        document.querySelectorAll('.carousel-item').forEach(item => {
            item.style.flex = '0 0 100%';
        });
    } else if (width <= 768) {
        // Tablet: 2 itens por vez
        document.querySelectorAll('.carousel-item').forEach(item => {
            item.style.flex = '0 0 calc(50% - 0.75rem)';
        });
    } else {
        // Desktop: 3 itens por vez
        document.querySelectorAll('.carousel-item').forEach(item => {
            item.style.flex = '0 0 calc(33.333% - 1rem)';
        });
    }
    
    updateCarousel();
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    initializeDots();
    updateCarouselResponsive();
    console.log('Blog de Ofertas carregado com sucesso!');
});

// Atualizar carrossel ao redimensionar a janela
window.addEventListener('resize', () => {
    updateCarouselResponsive();
});

// Auto-scroll do carrossel (opcional)
// setInterval(() => {
//     moveCarousel(1);
// }, 5000);
