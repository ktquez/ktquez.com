const en = require('./locales/en/config')
const pt = require('./locales/pt/config')
const es = require('./locales/es/config')

module.exports = {
  locales: {
    '/': pt,
    '/en/': en,
    '/es/': es
  },
  disqus: 'ktquez',
  url: 'https://ktquez.com',
  cdn: '',
  blackWhite: true,
  topNavigation: true,
  searchMaxSuggestions: 7,
  newsletter: {
    active: true,
    provider: 'mailchimp',
    action: 'https://ktquez.us19.list-manage.com/subscribe/post?u=6e79997ed25e04991e4cff52b&amp;id=c092490d08'
  },
  responsive: {
    active: false,
    ext: 'png',
    breakpoints: []
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
