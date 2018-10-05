const en = require('./locales/en/config')
const pt = require('./locales/pt/config')
const es = require('./locales/es/config')

module.exports = {
  locales: {
    '/': pt,
    '/en/': en,
    '/es/': es
  },
  serviceWorker: {
    updatePopup: { 
      message: "New content 🎉🎉", 
      buttonText: "Update" 
    }
  },
  disqus: 'ktquez',
  url: 'https://ktquez.com',
  cdn: '',
  blackWhite: true,
  topNavigation: false,
  searchMaxSuggestions: 7,
  responsive: {
    active: true,
    ext: 'png',
    breakpoints: [320, 427, 524, 680]
  },
  lazyLoad: {},
  share: {
    facebook: {
      appId: '300268227446469',
      version: 'v3.1'
    }
  },
  elevator: {
    duration: 4000,
    mainAudio: '/music/elevator.mp3',
    endAudio: '/music/ding.mp3'
  }
}
