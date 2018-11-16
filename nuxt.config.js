module.exports = {
  css: ['@/assets/css/style.css'],
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'hackathon2018'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000000' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#000000'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ]
}
