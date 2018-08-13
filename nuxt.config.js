const envUrl = require("./pro-env")();
module.exports = {
  router: {
    middleware: "auth",
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        // 目标页面子组件少于两个
        if (to.matched.length < 2) {
          // 滚动至页面顶部
          position = { x: 0, y: 0 }
        }
        else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
          // 如果目标页面子组件中存在配置了scrollToTop为true
          position = { x: 0, y: 0 }
        }
        // 如果目标页面的url有锚点,  则滚动至锚点所在的位置
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },
  srcDir: "client/",
  env: {
    staticUrl: envUrl.staticUrl,
    baseUrl: envUrl.baseUrl
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'devchan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,user-scalable=no"' },
      { hid: 'chan', name: 'chan', content: 'It`s Chan`s personal website' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/img-static/logo.png',
      },
      // {
      //   ref: "stylesheet",
      //   href: "https://cdn.bootcss.com/element-ui/2.4.0/theme-chalk/index.css"
      // }
    ],
    // script: [{
    //   src: "https://cdn.bootcss.com/element-ui/2.4.0/index.js"
    // }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#38b7ea' },
  /*
  ** Build configuration
  */
  build: {
    // postcss: [
    //   require('postcss-nested')(),
    //   require('postcss-responsive-type')(),
    //   require('postcss-hexrgba')(),
    //   require('autoprefixer')({
    //     browsers: ['last 3 versions']
    //   })
    // ],
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
    loaders: [{
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 1000, // 1 KO
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }],
    styleResources: {
      scss: './client/assets/common/*.scss',
      
    },
    publicPath: "http://pd8g1xewq.bkt.clouddn.com/dist/",
    vendor: [
      "./client/assets/common/common.scss"
    ]
  },
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    { src: "~/assets/common/common.scss", lang: "scss" }
  ],
  plugins: [
    {
      src: '@/plugins/element-ui',
      ssr: true
    },
    {
      src: "~/plugins/mavon-editor",
      ssr: false
    }, {
      src: "~/plugins/site.config.js",
    }],
}