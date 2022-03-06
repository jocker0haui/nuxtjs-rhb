export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lv1_demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ,
      // {rel : 'stylesheet',href : 'font chữ' }  // thêm forn chữ
    ],
  },
  // loading : {height : '2px'},  // dùng để css dòng load khi chuyển trang 
  // Global CSS: https://go.nuxtjs.dev/config-css
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#3B8070',
  //   background: 'white'
  // } ,
  css: [
    '~/css/rhpteam.min.css' ,
    '~/css/global.css' ,
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/modals/v-modal.js' ,
    '~/plugins/global-component' ,
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL:  process.env.BASE_API_URL || 'https://nuxt-lv1-default-rtdb.firebaseio.com' ,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env : {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000' ,
    baseApiUrl : process.env.BASE_API_URL || 'https://nuxt-lv1-default-rtdb.firebaseio.com' ,
    firebaseAPIKEY : 'AIzaSyC8dkWjoeuKfDrGj40-khEW3UWXpat-puw'
  },

  // router : {
  //   middleware : 'router-log'
  // },
}
