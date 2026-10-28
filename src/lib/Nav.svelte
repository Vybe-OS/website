<script>
  // Shared navigation used in both the header and the footer of every page.
  let { current = null, footer = false } = $props();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/downloads', label: 'Downloads' },
    { path: '/about', label: 'About' }
  ];
</script>

<nav class={footer ? undefined : 'nav'} aria-label={footer ? 'Footer navigation' : 'Main navigation'}>
  {#each links as link}
    <a
      href={'#' + link.path}
      class:active={!footer && current === link.path}
      aria-current={current === link.path ? 'page' : undefined}>{link.label}</a>
  {/each}
</nav>
