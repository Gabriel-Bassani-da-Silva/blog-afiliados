// Dados de produtos REAIS extraídos do seu perfil de afiliado
const productsData = [
    {
        name: "Principia Kit Antiacne Avançado",
        price: "R$ 261",
        priceOriginal: "R$ 290",
        brand: "PRINCIPIA",
        image: "https://http2.mlstatic.com/D_Q_NP_2X_623712-MLA99399240295_112025-V.webp",
        link: "https://meli.la/31eTvGq"
    },
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
        name: "Kit Skincare Calming Petrizi (4 Produtos)",
        price: "R$ 399",
        priceOriginal: "R$ 399",
        brand: "PETRIZI",
        image: "https://http2.mlstatic.com/D_Q_NP_2X_882599-MLB111201448754_052026-T.webp",
        link: "https://meli.la/31eTvGq"
    }
];

// Carregar produtos ao inicializar
document.addEventListener('DOMContentLoaded', () => {
    console.log('Iniciando carregamento de produtos...');
    loadProducts();
    setupScrollTracking();
    console.log('Site de Recomendações carregado com sucesso!');
});

// Função para carregar produtos
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const bannerImage = document.getElementById('bannerProductImage');
    const placeholder = document.querySelector('.product-image-placeholder');
    
    console.log('Carregando produtos...');
    
    if (!productsGrid) {
        console.error('Grid de produtos não encontrado');
        return;
    }
    
    // Limpar skeleton loading
    productsGrid.innerHTML = '';
    
    // Adicionar produtos ao grid
    productsData.forEach((product, index) => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
        
        // Animar entrada
        setTimeout(() => {
            productCard.style.animation = 'fadeInUp 0.5s ease forwards';
        }, index * 100);
    });
    
    // Atualizar banner principal com primeiro produto
    if (productsData.length > 0 && bannerImage) {
        console.log('Atualizando banner com produto:', productsData[0].name);
        
        // Remover placeholder
        const placeholderIcon = placeholder.querySelector('.placeholder-icon');
        const placeholderText = placeholder.querySelector('p');
        
        if (placeholderIcon) placeholderIcon.style.display = 'none';
        if (placeholderText) placeholderText.style.display = 'none';
        
        // Definir imagem
        bannerImage.src = productsData[0].image;
        bannerImage.alt = productsData[0].name;
        bannerImage.style.display = 'block';
        
        console.log('Imagem do banner definida:', productsData[0].image);
    }
}

// Criar card de produto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
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
