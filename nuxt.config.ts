export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@vueuse/nuxt'],
  css: ['~/assets/styles/main.scss'],
  app: {
    head: {
      title: 'Aurora.Shop – Minimal Online Boutique',
      meta: [
        {
          name: 'description',
          content:
            'Aurora.Shop is a minimal online fashion boutique for clean, everyday essentials with a premium feel.'
        }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  typescript: {
    strict: true,
    typeCheck: true
  }
})
