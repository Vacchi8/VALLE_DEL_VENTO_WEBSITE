import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tuo-dominio.it', // ← SOSTITUISCI CON IL TUO DOMINIO FINALE
  integrations: [sitemap()],
});
