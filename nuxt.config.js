export default {
  ssr: false,

  head: {
    title: process.env.npm_package_name || 'Test task',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['@/styles/global.scss'],

  modules: ['@nuxtjs/axios'],

  build: {
    extend (config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map';
      }
    }
  }
}
