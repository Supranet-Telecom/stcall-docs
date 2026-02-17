export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/i18n', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'dark',
  },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: [
      {
        code: 'pt-BR',
        name: 'Português',
      },
      {
        code: 'en',
        name: 'English',
      },
    ],
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
  },
})
