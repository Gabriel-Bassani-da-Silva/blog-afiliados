document.addEventListener('click', (event) => {
    const productLink = event.target.closest('[data-product-link]');
    if (!productLink || typeof window.gtag !== 'function') return;

    window.gtag('event', 'affiliate_click', {
        link: productLink.href,
        product_name: productLink.dataset.productName || ''
    });
});
