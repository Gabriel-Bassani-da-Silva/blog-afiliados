// Dados de produtos REAIS extraídos do seu perfil de afiliado
const productsData = [
    {
        name: "Principia Kit Antiacne Avançado",
        price: "R$ 261",
        priceOriginal: "R$ 290",
        brand: "PRINCIPIA",
        image: "principia-kit.png",
        link: "https://meli.la/31eTvGq"
    }
];

// Carregar ao inicializar
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site de Recomendações carregado com sucesso!');
    setupScrollTracking();
});

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
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href.includes('meli.la')) {
        console.log('Link de afiliado clicado:', e.target.href);
        if (typeof gtag !== 'undefined') {
            gtag('event', 'affiliate_click', {
                'link': e.target.href
            });
        }
    }
}, true);

// Adicionar classe ativa ao navegar
function setupScrollTracking() {
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
}
