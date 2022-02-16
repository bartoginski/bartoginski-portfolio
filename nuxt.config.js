export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  tailwindcss: {
    configPath: 'tailwind.config.js',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bartoginski',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue.js Front End Developer ' },
      { hid: 'title', name: 'title', content: 'Bartosz Ogiński - Programmer' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#072227' },
      { name: 'msapplication-navbutton-color', content: '#072227' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#072227' },

    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // https://github.com/vercel/vercel/issues/3499

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components', '~/components/buttons', '~/components/sections'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  pwa: {
    meta: {
      theme_color: "#072227",
      title: 'Bartosz Ogiński Portfolio',
      author: '@bartoginski',
    },
    manifest: {
      name: 'Bartosz Ogiński Portfolio',
      background_color: "#072227",
      short_name: 'bartoginski portfolio',
      lang: 'en',
    },
  }

}
