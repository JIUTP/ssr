/*
 * @Description  : nuxt配置文件
 * @Author       : RenChen
 * @Date         : 2021-10-30 14:26:22
 * @LastEditors  : RenChen
 * @LastEditTime : 2021-10-31 21:11:09
 */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '699pic',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://mock.yonyoucloud.com/mock/21062/699pic'
  },

  router: {
    middleware: 'auth'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/axios',
      ssr: true
    },
    '~/plugins/api'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'
  ],

  axios: {
    proxy: true,
    credentials: true
  },

  proxy: {
    '/699pic/': {
      target: 'https://mock.yonyoucloud.com/mock/21062',
      changeOrigin: true
    }
  },

  styleResources: {
    scss: [
      '~/assets/scss/global.scss'
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
