// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue';
import type { Theme } from 'vitepress';
import './style.css';
import Greetings from './components/Greetings.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('Greetings', Greetings);
    app.component('Experience', Experience);
    app.component('Projects', Projects);
  },
} satisfies Theme;
