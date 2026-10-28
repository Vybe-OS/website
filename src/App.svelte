<script>
  import Home from './pages/Home.svelte';
  import Downloads from './pages/Downloads.svelte';
  import About from './pages/About.svelte';

  // Tiny hash router: #/ , #/downloads , #/about
  const routes = {
    '/': { component: Home, title: 'VybeOS — Imagine. Create. Build.', bodyClass: '' },
    '/downloads': { component: Downloads, title: 'Download VybeOS — Arctic Edition', bodyClass: 'download-page' },
    '/about': { component: About, title: 'About VybeOS - Our course project', bodyClass: 'about-page' }
  };

  const readPath = () => {
    const p = location.hash.replace(/^#/, '');
    return p in routes ? p : '/';
  };

  let path = $state(readPath());
  const route = $derived(routes[path]);
  const Page = $derived(route.component);

  // Update the page title and the body class (page CSS is scoped to it) on navigation.
  $effect(() => {
    document.title = route.title;
    document.body.className = route.bodyClass;
    window.scrollTo(0, 0);
  });

  function skipToContent(e) {
    e.preventDefault();
    const main = document.getElementById('main');
    main?.setAttribute('tabindex', '-1');
    main?.focus();
  }
</script>

<svelte:window onhashchange={() => (path = readPath())} />

<a class="skip-link" href="#main" onclick={skipToContent}>Skip to content</a>
<Page />
