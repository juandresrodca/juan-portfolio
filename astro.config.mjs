// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Ensure react is imported if you chose React

export default defineConfig({
  integrations: [tailwind(), react()], // Add react() here
  site: 'https://juandresrodca.github.io',
  base: '/juan-portfolio', // **IMPORTANT: This should match your GitHub repository name**
  output: 'static',
  build: {
    assets: '_astro'
  }
});

//algo 


