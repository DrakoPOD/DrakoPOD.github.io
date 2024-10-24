import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Portfolio',
  description: 'DrakoPOD Portfolio',
  srcExclude: ['./sections/*.md'],
  vite: {
    resolve: {
      alias: {
        '@': process.cwd() + '/.vitepress/theme',
      },
    },
  },
});
