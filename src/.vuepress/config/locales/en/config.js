const ads = require('./ads')

module.exports = {
  languages: {
    label: 'English',
    shortname: 'EN'
  },
  translation: {
    news_title: 'Receive our articles, videos and more directly in your inbox and stay up to date.',
  },
  ads,
  logo: {
    name: 'ktquez-play-logo',
    ext: 'png',
    alt: 'Logo in 3 colors in play format'
  },
  share: {
    facebookCaption: 'Ktquez Play',
    twitterVia: 'ktquez',
  },
  newsletter: {
    provider: 'mailchimp',
    action: 'https://ktquez.us19.list-manage.com/subscribe/post?u=6e79997ed25e04991e4cff52b&amp;id=03884776df'
  },
  copy: `2018 © Ktquez play - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          MADE WITH VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'Ktquez Play',
      items: [
        {
          label: 'ABOUT',
          path: '/en/about/'
        },
        {
          label: 'CATEGORIES',
          path: '/en/categories/'
        },
        {
          label: 'CONTACT',
          path: '/en/contact/'
        }
      ]
    },
    nav2: {
      title: 'Community',
      items: []
    }
  },
  social: [
    {
      name: 'twitter',
      link: 'https://www.twitter.com/ktquez'
    },
    {
      name: 'github',
      link: 'https://www.github.com/ktquez'
    }
  ]
}
