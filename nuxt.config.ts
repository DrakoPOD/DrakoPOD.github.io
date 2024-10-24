// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';

const css = fs.readdirSync('./assets/css');

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [...css.map((file) => `~/assets/css/${file}`)],

  modules: ['@nuxt/icon'],
});
