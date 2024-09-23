import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from "@astrojs/sitemap";
import starlightLinksValidator from 'starlight-links-validator'
import starlightImageZoom from 'starlight-image-zoom'
import starlightHeadingBadges from 'starlight-heading-badges'

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://guides.gamehostbros.com',
  integrations: [
    starlight({
    plugins: [
      starlightLinksValidator(),
      starlightHeadingBadges(),
      starlightImageZoom()
    ],
    title: 'Game Host Bros Guides',
    description: 'Learn how to create the best game server with our easy to follow guides.',
    lastUpdated: false,
    customCss: ['./src/styles/custom.css'],
    logo: {
      light: './src/assets/light-logo.png',
      dark: './src/assets/dark-logo.png',
      replacesTitle: true
    },
    social: {
      discord: 'https://discord.gg/FN4XgbAwzr',
      github: 'https://github.com/Game-Host-Bros',
      youtube: 'https://www.youtube.com/@GameHostBros',
      facebook: 'https://www.facebook.com/gamehostbros/',
      'x.com': 'https://x.com/gamehostbros',
    },
    components: {
      Pagination: "./src/components/CustomPagination.astro"
    },
    sidebar: [{
      label: 'Getting Started',
      autogenerate: {
        directory: 'getting-started'
      }
    }, {
      label: 'Game Guides',
      collapsed: true,
      autogenerate: { directory: 'games' }
    }, {
      label: 'Troubleshooting',
      collapsed: true,
      autogenerate: { directory: 'troubleshooting' }
    }, {
      label: 'Account',
      collapsed: true,
      autogenerate: {
        directory: 'account'
      }
    }, {
      label: 'Support',
      link: 'https://portal.gamehostbros.com/supporttickets.php'
    }]
  }), sitemap({
    changefreq: 'daily',
    lastmod: new Date(),
  }), robotsTxt()]
});