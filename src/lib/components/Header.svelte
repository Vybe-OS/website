<script>
  import Nav from './Nav.svelte';
  import logo from '#lib/assets/vybeos-navbar.png';

  let { current = null } = $props();
</script>

<header class="header">
  <div class="container header-inner">
    <a class="header-brand" href="/" aria-label="VybeOS home">
      <img class="header-brand-logo" src={logo} alt="" width="48" height="48">
      <span>VybeOS</span>
    </a>
    <Nav {current} />
  </div>
</header>

<style>
  .header {
    height: 80px;
    background: rgba(250, 248, 255, .85);
    backdrop-filter: blur(24px);
    box-shadow: 0 1px 8px #1831770a;
  }

  .header-inner {
    width: calc(100% - 144px);
    max-width: 1136px;
    margin-inline: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-brand {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    gap: 12px;
    color: var(--blue, #0147ba);
    font: 700 20px/28px var(--heading, "Plus Jakarta Sans", sans-serif);
    letter-spacing: -.5px;
    white-space: nowrap;
  }

  .header-brand-logo {
    display: block;
    position: static;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    object-fit: contain;
  }

  @media (max-width: 1050px) {
    .header-inner {
      width: calc(100% - 64px);
    }
  }

  @media (max-width: 700px) {
    .header {
      height: auto;
      min-height: 80px;
    }

    .header-inner {
      width: calc(100% - 32px);
      gap: 12px;
      flex-wrap: wrap;
      padding: 10px 0;
    }

    .header-brand {
      gap: 8px;
      font-size: 18px;
    }

    .header-brand-logo {
      width: 40px;
      height: 40px;
    }
  }
</style>
