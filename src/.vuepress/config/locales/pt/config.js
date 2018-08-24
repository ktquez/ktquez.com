const ads = require('./ads')

module.exports = {
  languages: {
    label: 'Portuguese',
    shortname: 'pt'
  },
  ads,
  logo: {
    name: 'ktquez-play-logo',
    ext: 'png',
    alt: 'Logo em 3 cores no formato de play'
  },
  share: {
    facebookCaption: 'Ktquez Play',
    twitterVia: 'ktquez',
  },
  newsletter: {
    provider: 'mailchimp',
    action: 'https://ktquez.us19.list-manage.com/subscribe/post?u=6e79997ed25e04991e4cff52b&amp;id=c092490d08'
  },
  copy: `2018 © Ktquez play - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          FEITO COM VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'Ktquez Play',
      items: [
        {
          label: 'SOBRE',
          path: '/sobre/'
        },
        {
          label: 'CATEGORIAS',
          path: '/categorias/'
        },
        {
          label: 'CONTATO',
          path: '/contato/'
        }
      ]
    },
    nav2: {
      title: 'Comunidade',
      items: [
        {
          label: 'FB GROUP',
          link: 'https://www.facebook.com/groups/ktquezplayground'
        }
      ]
    }
  },
  social: [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/ktquezplay'
    },
    {
      name: 'twitter',
      link: 'https://www.twitter.com/ktquez'
    },
    {
      name: 'youtube',
      link: 'https://www.youtube.com/ktquez'
    },
    {
      name: 'github',
      link: 'https://www.github.com/ktquez'
    }
  ]
}
