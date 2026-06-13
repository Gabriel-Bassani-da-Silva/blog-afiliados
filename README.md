# 📦 Blog de Ofertas - Mercado Livre

Um blog estático moderno e responsivo dedicado a trazer as melhores ofertas e dicas de compra do Mercado Livre.

## 🎯 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **SEO Otimizado**: Meta tags e estrutura semântica para melhor indexação
- **Link de Afiliado Integrado**: Todas as chamadas para ação direcionam para seu link de afiliado
- **Performance**: Carregamento rápido e otimizado
- **Fácil Manutenção**: HTML, CSS e JavaScript simples e bem organizados

## 📁 Estrutura do Projeto

```
blog-afiliados/
├── index.html           # Página principal
├── styles.css           # Estilos CSS
├── script.js            # JavaScript para interatividade
├── README.md            # Este arquivo
└── .github/
    └── workflows/
        └── deploy.yml   # Configuração de deploy automático
```

## 🚀 Como Usar

### Localmente

1. Clone o repositório:
```bash
git clone https://github.com/Gabriel-Bassani-da-Silva/blog-afiliados.git
cd blog-afiliados
```

2. Abra o arquivo `index.html` em seu navegador ou use um servidor local:
```bash
# Usando Python 3
python3 -m http.server 8000

# Usando Node.js (se tiver http-server instalado)
npx http-server
```

3. Acesse `http://localhost:8000` no seu navegador

### GitHub Pages

O blog é automaticamente publicado no GitHub Pages quando você faz push para a branch `main`.

**URL do seu blog**: `https://Gabriel-Bassani-da-Silva.github.io/blog-afiliados`

## 🔧 Personalizações

### Alterar Link de Afiliado

Para alterar o link de afiliado, procure por `https://meli.la/31eTvGq` nos arquivos e substitua pelo seu link:

- `index.html`: Todos os botões e links
- Você pode usar Find & Replace (Ctrl+H) para substituir rapidamente

### Adicionar Novos Posts

Para adicionar novos posts, adicione um novo card na seção de blog em `index.html`:

```html
<article class="post-card">
    <div class="post-header">
        <span class="post-date">DATA</span>
        <span class="post-category">CATEGORIA</span>
    </div>
    <h3>Título do Post</h3>
    <p>Descrição do post...</p>
    <a href="https://meli.la/31eTvGq" class="read-more" target="_blank" rel="noopener noreferrer">Conferir Ofertas →</a>
</article>
```

### Alterar Cores

As cores principais estão definidas em `styles.css` como variáveis CSS:

```css
:root {
    --primary-color: #FFB800;      /* Amarelo (Mercado Livre) */
    --secondary-color: #1E3A8A;    /* Azul */
    --text-dark: #1F2937;
    --text-light: #6B7280;
    --bg-light: #F9FAFB;
    --bg-white: #FFFFFF;
}
```

## 📱 Responsividade

O blog é totalmente responsivo e se adapta a:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔍 SEO

O blog inclui:
- Meta tags de descrição e palavras-chave
- Estrutura semântica HTML5
- URLs amigáveis
- Títulos e headings bem estruturados

## 📊 Analytics

Para adicionar analytics (Google Analytics, etc.), adicione o código de rastreamento no `<head>` do `index.html`.

## 💡 Dicas para Aumentar Conversões

1. **Atualize regularmente**: Adicione novos posts e ofertas frequentemente
2. **Use palavras-chave**: Otimize títulos e descrições para SEO
3. **Call-to-Action claro**: Mantenha os botões de afiliado visíveis e atraentes
4. **Mobile-first**: Teste sempre em dispositivos móveis
5. **Velocidade**: Mantenha a página rápida e otimizada

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para modificar e personalizar conforme necessário.

## 🤝 Suporte

Para dúvidas ou sugestões, você pode:
- Abrir uma issue no repositório
- Entrar em contato através do email no footer do blog

---

**Desenvolvido com ❤️ para maximizar suas conversões de afiliado**
