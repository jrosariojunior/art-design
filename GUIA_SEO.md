# 📚 Guia Completo de SEO - José Criativos

## 🚀 Quick Start

```bash
# Instalar dependências (já feito)
npm install

# Rodar em desenvolvimento
npm run dev

# Acessar http://localhost:3000
```

---

## 🎯 O que foi implementado para SEO

### 1️⃣ **Meta Tags Essenciais** ✅
```html
<title>José Criativos | Decoração Premium & Soluções Digitais - São Paulo</title>
<meta name="description" content="Enfeites personalizados para festas, cartões digitais, vídeos profissionais e criação de sites...">
<meta name="keywords" content="enfeites impressos, decoração festas, cartões digitais...">
```

**Por que importa:** O Google usa título e descrição para aparecer nos resultados de busca.

### 2️⃣ **Open Graph Tags** ✅
```html
<meta property="og:title" content="...">
<meta property="og:image" content="...">
<meta property="og:description" content="...">
```

**Por que importa:** Quando você compartilha no Facebook, WhatsApp, LinkedIn — a pré-visualização fica bonita e padronizada.

### 3️⃣ **Structured Data (Schema.json)** ✅
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "José Criativos",
  "address": {...},
  "telephone": "(11) 99999-9999"
}
```

**Por que importa:** O Google entende melhor sua empresa, aparece com "rich snippets" (com stars, telefone, endereço direto nos resultados).

### 4️⃣ **Sitemap.xml** ✅
Arquivo em `/public/sitemap.xml` que lista todas as páginas do site.

**Como usar:**
1. Ir para Google Search Console
2. Adicionar sitemap.xml
3. Google rastreia todas as páginas automaticamente

### 5️⃣ **Robots.txt** ✅
Arquivo em `/public/robots.txt` que controla quais páginas o Google pode rastrear.

### 6️⃣ **Performance (Core Web Vitals)** ✅
- Velocidade de carregamento (LCP)
- Estabilidade visual (CLS)
- Responsividade (FID)

Next.js já otimiza automaticamente!

---

## ⚙️ Configurações Obrigatórias Antes do Lançamento

### Passo 1: Google Search Console
1. Ir para https://search.google.com/search-console
2. Adicionar propriedade: `https://josecriativos.com`
3. Escolher "Adicionar registros DNS" ou "Arquivo HTML" para verificação
4. Depois de verificado:
   - Enviar sitemap.xml
   - Monitorar Core Web Vitals
   - Ver relatório de indexação

### Passo 2: Google Analytics
1. Criar conta em https://analytics.google.com
2. Copiar seu ID (ex: G-XXXXXXXXXX)
3. Adicionar em `pages/_document.js`:

```jsx
<script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

### Passo 3: Google My Business
1. Ir para https://www.google.com/business
2. Criar perfil para "José Criativos"
3. Adicionar:
   - Endereço: São Paulo, SP
   - Telefone: (11) 99999-9999
   - Horário de funcionamento
   - Fotos de trabalhos
   - Descrição completa

**Isso aumenta suas chances de aparecer no Google Maps!**

### Passo 4: Domínio e HTTPS
- [ ] Comprar domínio em registrador (ex: Namecheap, GoDaddy)
- [ ] Configurar DNS apontando para seu hosting
- [ ] Instalar certificado SSL (HTTPS)
- [ ] Redirecionar HTTP → HTTPS

### Passo 5: Velocidade do Site
Teste em https://pagespeed.web.dev
- Pontuação mobile deve ser **> 80**
- Pontuação desktop deve ser **> 90**

Se estiver baixa:
- Comprimir imagens com TinyPNG
- Usar CDN (Cloudflare é grátis)
- Minificar CSS/JS (Next.js faz automaticamente)

---

## 📝 Palavras-chave Recomendadas

### Principais (Alto Volume)
- "Enfeites para festas"
- "Decoração personalizada"
- "Cartões digitais"
- "Criação de sites"

### Locais (Médio Volume - MAIS IMPORTANTES)
- "Decoração festas São Paulo"
- "Enfeites impressos SP"
- "Cartões digitais São Paulo"
- "Criação de sites São Paulo"

### Long-tail (Baixo Volume - FÁCEIS DE RANKEAR)
- "Enfeites personalizados tema super-heróis"
- "Cartão digital convite aniversário infantil"
- "Vídeo profissional para Instagram"

**Dica:** Adicione essas keywords no H1, H2, primeiros 100 caracteres da descrição e naturalmente no texto.

---

## 🎯 Estratégia de Conteúdo para Rankear

### Blog Posts Recomendados
1. **"10 Ideias de Enfeites Personalizados para Festas Infantis"**
   - SEO: "enfeites personalizados festas infantis"
   - Comprimento: 1500+ palavras

2. **"Como Criar Convites Digitais Profissionais para Seu Evento"**
   - SEO: "cartões digitais convites"
   - Comprimento: 1200+ palavras

3. **"Guia Completo: Vídeos Curtos para Redes Sociais que Convertem"**
   - SEO: "vídeos curtos redes sociais"
   - Comprimento: 1500+ palavras

4. **"Por que Seu Negócio Precisa de um Site Profissional em 2026"**
   - SEO: "criação de sites profissionais"
   - Comprimento: 1200+ palavras

### FAQ (Perguntas Frequentes)
Adicione uma seção FAQ com Schema.org para aparecer em "Featured Snippets":

```json
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Quanto custa um enfeite personalizado?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Os preços variam de R$ 50 a R$ 500..."
    }
  }]
}
```

---

## 🔗 Link Building

### Links que Você Deve Conseguir
1. **Diretórios Locais:**
   - Google My Business (já feito acima)
   - Facebook Business
   - Instagram Business
   - Yelp

2. **Parcerias:**
   - Blogueiros de festas/eventos
   - Salões de festas
   - Fotógrafos profissionais
   - Decoradores

3. **Conteúdo:**
   - Publicar artigos em Medium, LinkedIn
   - Ser entrevistado em podcasts
   - Participar de comunidades online

---

## 📊 Monitoramento e Métricas

### Ferramentas Recomendadas (Grátis/Pagos)

**Grátis:**
- Google Analytics 4 - Tráfego do site
- Google Search Console - Rankings e clicks
- Google PageSpeed Insights - Performance
- Ubersuggest - Keywords e competitors
- AnswerThePublic - Perguntas das pessoas

**Pagos (Recomendado):**
- Ahrefs - Backlinks e keywords
- SEMrush - Rankings e estratégia
- Moz - Authority e links

### Métricas a Acompanhar
- Impressões (quantas vezes aparece no Google)
- CTR (quantas clicam quando veem seu site)
- Posição média (em qual posição aparece)
- Tráfego orgânico
- Taxa de conversão

**Meta:** Aparecer na primeira página (top 10) para as 5 principais keywords em 3 meses.

---

## 🛠️ Arquivos Importantes

| Arquivo | Propósito |
|---------|-----------|
| `pages/index.js` | Página principal com SEO |
| `pages/_document.js` | Meta tags globais |
| `next.config.js` | Configurações Next.js |
| `public/sitemap.xml` | Mapa do site |
| `public/robots.txt` | Instruções para bots |
| `public/site.webmanifest` | PWA manifest |
| `styles/home.module.css` | Estilos otimizados |

---

## ❌ Erros Comuns a Evitar

1. **Não submeter sitemap ao Google Search Console**
   - ❌ Errado: Criar sitemap e ignorar
   - ✅ Certo: Submeter em GSC e monitorar

2. **Usar palavra-chave apenas no H1**
   - ❌ Errado: "Enfeites" aparece só uma vez
   - ✅ Certo: "Enfeites" aparece no H1, H2, primeiros 100 chars

3. **Imagens sem alt text**
   - ❌ Errado: `<img src="foto.jpg">`
   - ✅ Certo: `<img alt="Enfeite personalizado tema super-heróis" src="...">`

4. **Meta description muito curta ou longa**
   - ❌ Errado: "Oi" (1 caractere) ou 300 caracteres
   - ✅ Certo: 150-160 caracteres

5. **Links internos mal estruturados**
   - ❌ Errado: Sem links entre páginas
   - ✅ Certo: Link "Veja nossos serviços" na home → /servicos

6. **Mobile não responsivo**
   - ❌ Errado: Site não funciona em celular
   - ✅ Certo: Testar em Google Mobile-Friendly Test

---

## 🎓 Recursos de Aprendizado

- [Google Search Central Blog](https://developers.google.com/search/blog)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Ahrefs Blog](https://ahrefs.com/blog)

---

## 📞 Próximos Passos

1. **Imediatamente:**
   - [ ] Instalar Next.js e rodar localmente
   - [ ] Configurar Google Search Console
   - [ ] Criar Google My Business

2. **Semana 1:**
   - [ ] Instalar Google Analytics
   - [ ] Configurar Cloudflare (CDN grátis)
   - [ ] Fazer teste de velocidade em PageSpeed

3. **Semana 2:**
   - [ ] Submeter sitemap ao Google
   - [ ] Criar conteúdo do blog
   - [ ] Começar link building

4. **Mensal:**
   - [ ] Revisar rankings em Search Console
   - [ ] Analisar tráfego em Analytics
   - [ ] Otimizar páginas com baixo CTR

---

**Dúvidas? Consulte a documentação do Next.js em https://nextjs.org/docs**

Boa sorte! 🚀
