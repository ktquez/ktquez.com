const ads = require('./ads')

const translation = require('./translation')

module.exports = {
  languages: {
    label: 'Spanish',
    shortname: 'ES'
  },
  translation,
  ads,
  logo: {
    name: 'ktquez-play-logo',
    ext: 'png',
    alt: 'Luego en 3 colores en el formato de reproducción'
  },
  share: {
    facebookCaption: 'Ktquez Play',
    twitterVia: 'ktquez',
  },
  newsletter: {
    provider: 'mailchimp',
    action: 'https://ktquez.us19.list-manage.com/subscribe/post?u=6e79997ed25e04991e4cff52b&amp;id=3e610001c7'
  },
  copy: `2018 © Ktquez play - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          HECHO CON VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'Ktquez Play',
      items: [
        {
          label: 'ACERCA',
          path: '/es/sobre/'
        },
        {
          label: 'CATEGORÍAS',
          path: '/es/categorias/'
        },
        {
          label: 'CONTACTO',
          path: '/es/contacto/'
        }
      ]
    },
    nav2: {
      title: 'Comunidad',
      items: []
    }
  },
  social: [
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
