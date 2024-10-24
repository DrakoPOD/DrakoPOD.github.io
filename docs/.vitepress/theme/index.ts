// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue';
import type { Theme } from 'vitepress';
import './styles/style.css';
import './styles/card.css';
import './styles/cardMenu.css';
import './styles/sections.css';
import CardGrid from './components/CardGrid.vue';
import CardCarousel from './components/CardCarousel.vue';
import Projects from './components/Projects.vue';
import CardMenu from './components/CardMenu.vue';
import Card from './components/Card.vue';
import Experience from './components/Experiences.vue';
import Home from './components/Home.vue';

import SVGSquare from './components/SVGSquare.vue';
import SVGBackground from './components/SVGBackground.vue';

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('CardGrid', CardGrid);
    app.component('Projects', Projects);
    app.component('CardMenu', CardMenu);
    app.component('Card', Card);
    app.component('CardCarousel', CardCarousel);

    app.component('Experience', Experience);
    app.component('Home', Home);

    app.component('SVGSquare', SVGSquare);
    app.component('SVGBackground', SVGBackground);
  },
} satisfies Theme;
