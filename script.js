// Dados de produtos simulados (em produção, isso viria de uma API)
// Estes são os produtos que aparecem no seu perfil de afiliado
const productsData = [
    {
        name: "Principia Kit Anti-acne Essencial Gh",
        price: "R$ 231",
        priceOriginal: "R$ 231",
        brand: "PRINCIPIA",
        image: "https://http2.mlstatic.com/D_Q_NP_2X_695293-MLA111341802185_052026-T.webp",
        link: "https://meli.la/31eTvGq"
    },
    {
        name: "Principia Kit Anti-acne Trio Ps",
        price: "R$ 159,30",
        priceOriginal: "R$ 177",
        brand: "PRINCIPIA",
        image: "https://http2.mlstatic.com/D_Q_NP_2X_922978-MLA98412487385_112025-T.webp",
        link: "https://meli.la/31eTvGq"
    },
    {
        name: "Kit Skincare Calming Petrizi",
        price: "R$ 399",
        priceOriginal: "R$ 399",
        brand: "PETRIZI",
        image: "https://http2.mlstatic.com/D_Q_NP_2X_882599-MLB111201448754_052026-T.webp",
        link: "https://meli.la/31eTvGq"
    },
    {
        name: "Principia Kit Completo Para Pele Sensível",
        price: "R$ 84,02",
        priceOriginal: "R$ 137",
        brand: "PRINCIPIA",
        image: "https://http2.mlstatic.com/D_Q_NP_2X_761257-MLA108807654621_032026-T.webp",
        link: "https://meli.la/31eTvGq"
    }
];

// Carregar produtos ao inicializar
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupScrollTracking();
    console.log('Site de Recomendações carregado com sucesso!');
});

// Função para carregar produtos
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const mainShowcase = document.getElementById('mainProductShowcase');
    
    if (!productsGrid) return;
    
    // Simular delay de carregamento
    setTimeout(() => {
        productsGrid.innerHTML = '';
        
        productsData.forEach((product, index) => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
            
            // Animar entrada
            setTimeout(() => {
                productCard.style.animation = 'fadeInUp 0.5s ease forwards';
            }, index * 100);
        });
        
        // Atualizar showcase principal
        if (mainShowcase && productsData.length > 0) {
            updateMainShowcase(productsData[0]);
        }
    }, 800);
}

// Criar card de produto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2214%22 fill=%22%23999%22%3EProduto%3C/text%3E%3C/svg%3E'">
        </div>
        <div class="product-info">
            <span class="product-brand">${product.brand}</span>
            <h4>${product.name}</h4>
            <div class="product-prices">
                <span class="price-current">${product.price}</span>
                ${product.priceOriginal !== product.price ? `<span class="price-original">${product.priceOriginal}</span>` : ''}
            </div>
            <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="product-link">Acessar →</a>
        </div>
    `;
    
    return card;
}

// Atualizar showcase principal
function updateMainShowcase(product) {
    const showcase = document.getElementById('mainProductShowcase');
    if (!showcase) return;
    
    showcase.innerHTML = `
        <div class="product-showcase-item">
            <img src="${product.image}" alt="${product.name}" class="showcase-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2216%22 fill=%22%23999%22%3EProduto em Destaque%3C/text%3E%3C/svg%3E'">
            <div class="showcase-info">
                <p class="showcase-brand">${product.brand}</p>
                <p class="showcase-name">${product.name}</p>
                <p class="showcase-price">${product.price}</p>
            </div>
        </div>
    `;
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
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href.includes('meli.la')) {
        console.log('Link de afiliado clicado:', e.target.href);
        // Aqui você pode adicionar código de analytics
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

// Adicionar animação de fade-in-up
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
