// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';

const css = fs.readdirSync('./assets/css');

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,

  css: [
    '~/assets/css/card.css',
    '~/assets/css/cardMenu.css',
    '~/assets/css/sections.css',
    '~/assets/css/style.css',
  ],

  modules: ['@nuxt/icon', '@nuxtjs/device'],

  icon: {
    clientBundle: {
      scan: true,
    },
  },
});