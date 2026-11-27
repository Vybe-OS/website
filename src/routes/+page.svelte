<script>
  import Nav from '#lib/components/Nav.svelte';
  import { asset } from '#lib/asset-url.js';
  import logo from '#lib/assets/876bd.png';
  import '#lib/styles/styles.css';

  function scrollToAbout(e) {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<header class="header">
<div class="container header-inner">
<a class="brand" href="/" aria-label="VybeOS home"><span class="logo header-logo"><img src={logo} alt=""></span><span>VybeOS</span></a>
<Nav current="/" />
</div>
</header>
<main id="main">
<section class="hero container" id="home" aria-labelledby="hero-title">
<h1 id="hero-title">Meet VybeOS.</h1>
<p class="tagline">A desktop for learning and building.</p>
<p class="intro">An Arch Linux project for learning Linux and programming.</p>
<div class="actions"><a class="button primary" href="/downloads"><img src={asset('4b73b.svg')} alt="">Download VybeOS</a><a class="button secondary" href="#about" onclick={scrollToAbout}><img src={asset('5f499.svg')} alt="">Learn More</a></div>
<div class="desktop">
<img class="desktop-screenshot" src="/images/vybeos-desktop.jpeg" alt="VybeOS desktop with a white and blue wallpaper, the VybeOS logo in the center, and Waybar at the top" width="1143" height="684" decoding="async">
</div>
</section>
<section class="features container" id="about" aria-labelledby="features-title">
<div class="section-heading"><h2 id="features-title">Why VybeOS?</h2><p>We are building an Arch-based desktop for learning Linux,<br class="desktop-break"> writing code, and working with the terminal.</p></div>
<div class="cards">
<article class="card"><span class="feature-icon"><img src={asset('59729.svg')} alt=""></span><h3>Arch Linux Based</h3><p>Uses Arch Linux as a starting point for learning package management and configuring a Linux system.</p></article>
<article class="card"><span class="feature-icon"><img src={asset('9bf4e.svg')} alt=""></span><h3>Lightweight Desktop</h3><p>Uses Sway to arrange application windows in tiles, with a simple desktop layout and keyboard shortcuts.</p></article>
<article class="card"><span class="feature-icon"><img src={asset('5f24c.svg')} alt=""></span><h3>Developer Focused</h3><p>Brings together a terminal, editor, and development tools for practicing programming and working on projects.</p></article>
</div></section>
<section class="downloads container" id="downloads" aria-labelledby="download-title"><div class="download-card"><h2 id="download-title">Want to follow the project?</h2><p>Check the ISO release status, planned hardware requirements,<br class="desktop-break"> and installation overview.</p><a class="button primary" href="/downloads"><img src={asset('4b73b.svg')} alt="">Explore Downloads</a></div></section>
</main>
<footer class="footer"><div class="container footer-inner"><div class="footer-top"><a class="brand footer-brand" href="/"><span class="logo footer-logo"><img src={logo} alt=""></span><span>VybeOS</span></a><span class="motto">— Imagine. Create. Build.</span><Nav footer current={null} /></div><div class="footer-bottom"><span>VybeOS &mdash; An Operating Systems course project.</span><span>Built with Arch Linux.</span></div></div></footer>
