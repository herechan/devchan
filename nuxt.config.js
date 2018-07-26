const envUrl = require("./pro-env")();
module.exports = {
  router: {
    middleware: "auth"
  },
  srcDir: "client/",
  env: {
    baseUrl: envUrl.baseUrl,
    staticUrl: envUrl.staticUrl
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'devchan-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,user-scalable=no"' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    styleResources: {
      scss: './client/assets/common/*.scss',
    }
  },
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    { src: "~/assets/common/common.scss", lang: "scss" }
  ],
  plugins: [{
    src: '@/plugins/element-ui',
    ssr: true
  }, {
    src: "~/plugins/mavon-editor",
    ssr: false
  }, {
    src: "~/plugins/site.config.js",
  }],
}