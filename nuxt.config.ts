// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    ...fs.readdirSync('./assets/css').map((file) => `~/assets/css/${file}`),
  ],

  modules: ['@nuxt/icon'],
});