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
  copy: `2018 © KTQUEZ PLAY - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          HECHO CON VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'Ktquez Play',
      items: [
        {
          label: 'ACERCA',
          path: '/acerca/'
        },
        {
          label: 'CURSOS',
          path: '/cursos/'
        },
        {
          label: 'CATEGORÍAS',
          path: '/categorias/'
        },
        {
          label: 'CONTACTO',
          path: '/contacto/'
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
