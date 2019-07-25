module.exports = {
  mode: 'universal',
  head: {
    title: 'Godzamy - Twitch Streamer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Matheus Guilherme Ferreira A.K.A "Godzamy" is a new Twitch streamer based in Brazil, tune in to check more of his work and personal life.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://godzamy.live/'
      },
      {
        property: 'og:title',
        content: 'Godzamy - Twitch Streamer'
      },
      {
        property: 'og:description',
        content:
          'Matheus Guilherme Ferreira A.K.A "Godzamy" is a new Twitch streamer based in Brazil, tune in to check more of his work and personal life.'
      },
      {
        property: 'og:image',
        content: '/og-image.jpg'
      },
      {
        property: 'twitter:card',
        content: 'summary'
      },
      {
        property: 'twitter:title',
        content: 'Godzamy - Twitch Streamer'
      },
      {
        property: 'twitter:description',
        content:
          'Matheus Guilherme Ferreira A.K.A "Godzamy" is a new Twitch streamer based in Brazil, tune in to check more of his work and personal life.'
      },
      {
        property: 'twitter:url',
        content: 'https://godzamy.live/'
      },
      {
        property: 'twitter:image',
        content: '/og-image.jpg'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['~assets/stylesheets/main.scss'],
  plugins: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics'
  ],
  styleResouces: {
    scss: ['~assets/stylesheets/main.scss']
  },
  googleAnalytics: {
    id: 'UA-99701450-2'
  },
  axios: {},
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(config, ctx) {}
  }
}
