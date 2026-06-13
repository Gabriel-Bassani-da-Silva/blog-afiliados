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

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site de Recomendações carregado com sucesso!');
});
