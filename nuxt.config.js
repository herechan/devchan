const path = require('path')
const envUrl = require("./pro-env")();
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Casper\'s Land',
    script: [
      {src: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'}
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ]
  },
  env: {
    staticUrl: envUrl.staticUrl,
    baseUrl: envUrl.baseUrl
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css',
    'assets/style.less'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.resolve.alias['@imgs'] =  path.resolve(__dirname, 'assets/imgs')
      config.resolve.alias['@axios'] = path.resolve(__dirname, 'middleware/axios/index.js')
    }
  },
  styleResources: {
    less: ['./assets/style.less']
  }
}
