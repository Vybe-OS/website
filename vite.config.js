import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // relative asset paths so the build works from any folder
  plugins: [svelte()],
});
