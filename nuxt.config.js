export default {
  // Server (https://nuxtjs.org/api/configuration-server)
  server: {
    port: process.env.NUXT_PORT || 3001,
    host: '0.0.0.0',
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Filippo Bovo | freelance full-stack developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Filippo Bovo: e-commerce solution architect, agile full-stack web developer and team leader',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'filippo bovo,full-stack,developer,frontend,backend,team leader,agile,scrum,e-commerce,magento,javascript,typescript,php,vue,vuejs,nuxt',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'preconnect',
        crossorigin: 'anonymous',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap',
      },
      {
        rel: 'stylesheet',
        media: 'print',
        href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap',
        onload: 'this.onload=null;this.removeAttribute("media");',
      },
    ],
    noscript: [
      {
        innerHTML:
          '<link rel="stylesheet href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" />',
      },
    ],
    script: [
      {
        src: 'https://beampipe.io/js/tracker.js',
        body: true,
        async: true,
        defer: true,
        'data-beampipe-domain':
          process.env.BEAMPIPE_DOMAIN || 'filippobovo.com',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/critical.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/accessor.ts' },
    // { src: '~/plugins/intersect.client.ts', ssr: false },
    { src: '~/plugins/scrollactive.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    {
      path: '~/components/atoms/',
      pattern: `*.{vue,ts}`,
      prefix: 'A',
    },
    {
      path: '~/components/atoms/icons/',
      pattern: `*.{vue,ts}`,
      prefix: 'AIcon',
    },
    {
      path: '~/components/atoms/planets/',
      pattern: `*.{vue,ts}`,
      prefix: 'APlanet',
    },
    {
      path: '~/components/atoms/scenes/',
      pattern: `*.{vue,ts}`,
      prefix: 'AScene',
    },
    {
      path: '~/components/molecules/',
      prefix: 'M',
    },
    {
      path: '~/components/organisms/',
      prefix: 'O',
    },
  ],

  // Server middleware (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-servermiddleware)
  // serverMiddleware: ['~/api/index.ts'],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/Gomah/nuxt-graphql-request
    // 'nuxt-graphql-request',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    // analyze: {
    //   analyzerMode: 'static',
    // },
    postcss: {
      // PostCSS plugins (https://nuxtjs.org/faq/postcss-plugins)
      plugins: {},
    },
  },

  // Style Resources configuration (https://github.com/nuxt-community/style-resources-module)
  styleResources: {
    scss: [
      './assets/scss/abstracts/variables/*.scss',
      './node_modules/include-media/dist/_include-media.scss',
    ],
  },

  // PWA configuration (// https://go.nuxtjs.dev/pwa)
  pwa: {
    manifest: {
      name: 'Filippo Bovo',
      short_name: 'F/B',
      description: 'Filippo Bovo | Freelance full-stack developer‎',
      background_color: '#e5e5e5',
      lang: 'en',
      publicPath: '/_nuxt/',
      display: 'standalone',
    },
    meta: {
      theme_color: '#5634d1',
    },
    workbox: {
      offlineAnalytics: true,
      offlineStrategy: 'StaleWhileRevalidate',
    },
  },
}