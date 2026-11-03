// Place this file at src/lib/asset-url.js
// Bundles every image in src/lib/assets and looks up its final URL by file name.
const files = import.meta.glob('./assets/*.{svg,png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default'
});

export function asset(name) {
  return files[`./assets/${name}`];
}
