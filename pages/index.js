import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/home.module.css';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'José Criativos',
    description: 'Enfeites impressos personalizados, cartões digitais, vídeos curtos e criação de sites profissionais',
    image: 'https://josecriativos.com/logo.png',
    url: 'https://josecriativos.com',
    telephone: '(11) 99999-9999',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'São Paulo',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: 'XXX-XXX',
      addressCountry: 'BR'
    },
    priceRange: 'R$ 100 - R$ 5000',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '45'
    },
    sameAs: [
      'https://www.facebook.com/josecriativos',
      'https://www.instagram.com/josecriativos',
      'https://wa.me/5511999999999'
    ]
  };

  return (
    <>
      <Head>
        {/* Meta Tags SEO Críticas */}
        <title>José Criativos | Decoração Premium & Soluções Digitais - São Paulo</title>
        <meta name="description" content="Enfeites personalizados para festas, cartões digitais, vídeos profissionais e criação de sites. Serviços criativos e elegantes em São Paulo." />
        <meta name="keywords" content="enfeites impressos, decoração festas, cartões digitais, vídeos curtos, criação de sites, São Paulo" />

        {/* Meta Tags Open Graph para Social Media */}
        <meta property="og:title" content="José Criativos | Decoração Premium & Soluções Digitais" />
        <meta property="og:description" content="Transformamos ideias em experiências únicas — decoração e criatividade em cada detalhe" />
        <meta property="og:image" content="https://josecriativos.com/og-image.jpg" />
        <meta property="og:url" content="https://josecriativos.com" />
        <meta property="og:site_name" content="José Criativos" />

        {/* Meta Tags Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="José Criativos | Decoração Premium & Soluções Digitais" />
        <meta name="twitter:description" content="Enfeites personalizados, cartões digitais, vídeos e sites profissionais" />
        <meta name="twitter:image" content="https://josecriativos.com/twitter-image.jpg" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Structured Data - Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Início',
                  item: 'https://josecriativos.com'
                }
              ]
            })
          }}
        />
      </Head>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>JOSÉ CRIATIVOS</div>
          
          {/* Hamburger Button */}
          <button 
            className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Menu de navegação"
            aria-expanded={mobileMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className={`${styles.nav} ${styles.desktopNav}`}>
            <Link href="#inicio">Início</Link>
            <Link href="#servicos">Serviços</Link>
            <Link href="#portfolio">Portfólio</Link>
            <Link href="#contato">Contato</Link>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className={`${styles.nav} ${styles.mobileNav}`}>
              <Link href="#inicio" onClick={closeMobileMenu}>Início</Link>
              <Link href="#servicos" onClick={closeMobileMenu}>Serviços</Link>
              <Link href="#portfolio" onClick={closeMobileMenu}>Portfólio</Link>
              <Link href="#contato" onClick={closeMobileMenu}>Contato</Link>
            </nav>
          )}
        </div>
      </header>

      {/* HERO SECTION */}
      <section className={styles.hero} id="inicio">
        <div className={styles.heroContent}>
          <h1>Transformamos Ideias em Experiências Únicas</h1>
          <p>Da festa perfeita ao site profissional — criatividade e elegância em cada detalhe</p>
          <button className={styles.btn}>Solicite um Orçamento</button>
          <a href="https://wa.me/5511999999999" className={`${styles.btn} ${styles.btnSecundario}`} target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </a>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className={styles.servicos} id="servicos">
        <div className={styles.container}>
          <h2>Nossos Serviços</h2>
          <div className={styles.cardsContainer}>
            <article className={styles.card}>
              <h3>🎂 Enfeites Impressos</h3>
              <p>Personalizados para seus bolos e festas. Qualidade premium com os temas que você ama.</p>
            </article>
            <article className={styles.card}>
              <h3>✉️ Cartões Digitais</h3>
              <p>Convites e mensagens elegantes para qualquer ocasião. Criados especialmente para você.</p>
            </article>
            <article className={styles.card}>
              <h3>🎬 Vídeos Curtos</h3>
              <p>Conteúdo profissional para redes sociais. Ideais para divulgação e engajamento.</p>
            </article>
            <article className={styles.card}>
              <h3>🌐 Criação de Sites</h3>
              <p>Presença digital profissional e elegante. Sua empresa merece um site excepcional.</p>
            </article>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section className={styles.portfolio} id="portfolio">
        <div className={styles.container}>
          <h2>Nossos Trabalhos</h2>
          <div className={styles.galeriaGrid}>
            <div className={styles.galeriaItem}>Tema Super-Heróis</div>
            <div className={styles.galeriaItem}>Festa Infantil Premium</div>
            <div className={styles.galeriaItem}>Cartão Digital Elegante</div>
            <div className={styles.galeriaItem}>Enfeite Personalizado</div>
            <div className={styles.galeriaItem}>Site Corporativo</div>
            <div className={styles.galeriaItem}>Vídeo Promocional</div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.cta} id="contato">
        <div className={styles.container}>
          <h2>Pronto para Criar Algo Especial?</h2>
          <p>Entre em contato conosco e vamos transformar sua ideia em uma experiência memorável.</p>
          <button className={styles.btn}>Fale Conosco</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>José Criativos</h3>
              <p>Transformando criatividade em realidade, com elegância e profissionalismo.</p>
            </div>
            <div className={styles.footerSection}>
              <h3>Links Rápidos</h3>
              <ul>
                <li><Link href="#servicos">Serviços</Link></li>
                <li><Link href="#portfolio">Portfólio</Link></li>
                <li><Link href="#contato">Contato</Link></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3>Contato</h3>
              <p>📞 <a href="tel:+5511999999999">(11) 99999-9999</a></p>
              <p>📧 <a href="mailto:contato@josecriativos.com">contato@josecriativos.com</a></p>
              <p>📍 São Paulo, SP</p>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>&copy; 2026 José Criativos. Todos os direitos reservados. | <Link href="/politica-privacidade">Política de Privacidade</Link></p>
          </div>
        </div>
      </footer>
    </>
  );
}
