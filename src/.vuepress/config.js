const path = require('path')
const head = require('./config/head')
const themeConfig = require('./config/themeConfig')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  theme: 'ktquez',
  base: '/',
  title: 'Ktquez Play',  
  head,
  ga: 'UA-70393520-1',
  evergreen: true,
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'pt-br'
    },
    '/en/': {
      lang: 'en'
    },
    '/es/': {
      lang: 'es'
    }
  },
  themeConfig,
  configureWebpack () {
    return {
      resolve: {
        alias: {
          '@public': resolve('./public')
        }
      }
    }
  }
}
