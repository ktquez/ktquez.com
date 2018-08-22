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
          path: '/about/'
        },
        {
          label: 'COURSES',
          path: '/courses/'
        },
        {
          label: 'CATEGORIES',
          path: '/categories/'
        },
        {
          label: 'CONTACT',
          path: '/contact/'
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
