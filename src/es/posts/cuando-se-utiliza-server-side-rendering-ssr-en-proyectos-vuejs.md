---
view: post
layout: post
lang: es
author: ktquez
title: Cuando se utiliza server-side rendering (SSR) en proyectos Vue.js
description: Todavía hay muchas preguntas sobre la server-side rendering (SSR) y cuándo utilizarla, hay algunos puntos que trataremos en este momento y conozca Nuxt.js
excerpt: Todavía hay muchas preguntas sobre la server-side rendering (SSR) y cuándo utilizarla, hay algunos puntos que trataremos en este momento.
cover: false
coverAlt: 
demo: 
audio: 
categories:
  - vuejs
  - javascript
tags: 
  - ssr
  - vuejs
  - nuxtjs
created_at: 2018-08-22 11:00
updated_at: 2018-08-22 11:00

meta:
  - property: og:image
    content: /share/when-to-use-ssr-share-post.png
  - name: twitter:image
    content: /share/when-to-use-ssr-share-post.png
---

## Introducción

Agregué el título "en los proyectos de Vue.js", pero algunas de las cuestiones que se discuten aquí también servirán a otras tecnologías, la representación del lado del servidor es un tema poco discutido en la comunidad, pero esto ha ido ganando fuerza en la tendencia de crear SPA. principalmente para la modernización de frameworks javascript.

Hay ventajas y desventajas en el uso del procesamiento del lado del servidor, pero la principal pregunta que tuve al encontrar la posibilidad de usar el lado del cliente o del lado del servidor fue:

> Cuándo usar la representación del lado del servidor?

Después de algunas preguntas de los miembros de la comunidad, decidí tratar de dilucidar qué tenemos en SSR hoy como ventajas y desventajas en su uso y voy a poner un poco sobre lo que pasé cuando lo configuré manualmente, además de hablar sobre las principales herramientas para SSR, como [Nuxt Framework](https://nuxtjs.org/)

## ¿Qué Encontramos Cuando Usamos La Representación Del Lado Del Servidor?

### SEO

Los rastreadores de motores de búsqueda, como Google, Bing y otros, deben tener claro qué encontrarán en su contenido, porque los rastreadores no admiten JavaScript.

Actualización: Google y Ask ya soportan con buena fiabilidad, pero Bing anunció que renderizar e indexar Javascript sigue siendo inconsistente. Dejaré 2 artículos en la secuencia que habla sobre cómo están haciendo Google y Bing.

- [SPA and SEO: Google](https://medium.com/@l.mugnaini/spa-and-seo-is-googlebot-able-to-render-a-single-page-application-1f74e706ab11)
- [Is Bing Really Rendering & Indexing JavaScript?](https://www.screamingfrog.co.uk/bing-javascript/)

Cuando utilizamos una aplicación del lado del cliente, como el nombre ya dice, el contenido se carga casi siempre después de la disponibilidad en el navegador, lo que dificulta identificar el contenido a través de su archivo HTML e indexar su página.

Otro problema que se presenta es que las redes sociales tampoco pueden identificar el contenido cuando intentan acceder a su página para recopilar la información y montar los datos para compartir, y esto también es malo para los sitios que necesitan esta interacción.

La solución es que usar SSR antes de servir al navegador ocurre en su aplicación un proceso para montar un documento HTML que coincida con la solicitud, si necesita datos de su API, el servidor hará una solicitud y manejará la respuesta hasta insertarla en HTML antes de enviarlo al cliente. Este método rastreadores también recibe este contenido completo, por lo que es más fácil de analizar e indexar. Lo mismo ocurre con las redes sociales.

Por lo tanto, si su aplicación necesita este tipo de enfoque, deberá usar la representación del lado del servidor, que entre nosotros es la razón más importante y más importante a la hora de decidir si se utiliza el procesamiento en el servidor.

Hace un tiempo, hice un artículo para Vue.js Brasil hablando sobre una novedad de Google, que era la posibilidad de presentar JavaScript en situaciones particulares a través de la opción de [Explorar como Google](https://support.google.com/webmasters/answer/6066468?hl=es) en las herramientas de webmaster de Google.

### Rendimiento (Sí y No)

<lazy-load tag="img" :data="{ src: 'https://cdn-images-1.medium.com/max/800/0*UrnK8nheUSFEyvmn.gif' }" />

Cuando un usuario solicita una página, no tiene que esperar a que se cargue JavaScript antes de que se muestre el contenido, ya que los componentes ya se procesaron en el servidor y se convirtieron en etiquetas HTML, lo cual es bueno para los usuarios y dispositivos lentos de Internet.

Esto da como resultado una mejor experiencia de usuario, pero la interactividad de la aplicación solo se producirá cuando JavaScript y Vue estén cargados correctamente.

El NO en el título de esta sección es que, incluso si a veces es discreto con SSR, le da más trabajo al servidor, y dependiendo de lo que necesite al presentar la respuesta HTTP al cliente, le llevará un poco más de tiempo.

La causa de este retraso a veces se debe al procesamiento intensivo que ocurre en el servidor en cada solicitud o si su aplicación requiere datos de una API externa, donde el servidor tendrá que esperar a que la respuesta sea capaz de procesar la aplicación que causa el el tamaño de tu HTML será más grande.

> Este no es un factor crítico, pero dependiendo de lo que se va a cargar, puede volverse engorroso.

Prácticamente he detallado aquí los pros y los contras que usan SSR cuando se trata de rendimiento. Para mejorar este uso, utilice la potencia de la memoria caché siempre que sea posible.

### Restricciones al usar la representación del lado del servidor

Uno de los mayores problemas que tuve al usar SSR fue cuando usé bibliotecas de terceros, que representan los componentes necesarios para acceder a ciertas variables que solo están disponibles en el navegador, estoy hablando de ellas `window`, `document` así sucesivamente. Uno de los hacks que necesitaba era simular un entorno DOM en el nodo con el `JS-DOM`, con esto los errores se detenían, pero el renderizado seguía siendo limitado.

Otra cosa es que en Vue.js hay algunos métodos de ciclo de vida que conocemos como ([enlaces de ciclo de vida](https://br.vuejs.org/v2/guide/instance.html#Diagrama-do-Ciclo-de-Vida)), que solo se llaman en el navegador ( `beforeMounte` & `mounted`), si representa algo que se desencadena por estos enlaces, esto no ocurrirá en el servidor.

Algunas bibliotecas externas también necesitan ser adaptadas para ser utilizadas en aplicaciones que usan SSR, poco a poco el ecosistema está sacando esto y comenzando a actualizar y brindar soporte.

## Cuándo usar la representación del lado del servidor?

- Si necesita SEO en Google, Yahoo, Bing, entre otros;
- Si necesita que su contenido se comparta en las redes sociales;
- Si está buscando una alternativa para mejorar la experiencia y el rendimiento del usuario;
- Si tiene recursos para contratar y mantener servidores, especialmente si espera un alto tráfico de usuarios. También debe tener una buena estrategia de caché.

## ¿Qué tenemos para una aplicación SSR con Vue.Js?

### Nuxt Framework

Nuxt es un marco para crear aplicaciones universales con Vue.js, y llegó a resolver la espantosa tarea de hacer toda la configuración necesaria para usar la representación del lado del servidor con Vue.js, inspirado en Next.js que es un marco universal hecho para ReactJS.

Ya se puede considerar como un marco oficial de Vue.js para las aplicaciones de RSS, pero va más allá. Es una comunidad que está creando un ecosistema de módulos específicos orientados a este tipo de enfoque, ofrece una experiencia de desarrollo simple para que usted escriba los componentes del archivo vue. También ofrece funciones interesantes que ayudan en el desarrollo, como datos asincrónicos, middleware, diseño, etc.

Además, tiene un generador de sitios estático que usa prerender-spa-plugin y genera las páginas de su aplicación SPA sin necesidad del servidor. Una nota importante es que no representa páginas dinámicas. Si tiene un blog, es mejor usar SSR.

Puede aprovechar el curso producido por el instructor Maximilian Schwarzmüller en Udemy llamado "Nuxt.js - Vue.js en esteroides".

- [Nuxt.js - Vue.js en esteroides](http://bit.ly/nuxtjs-udemy)

### Otras estructuras interesantes

- [Ream](https://github.com/ream/ream): similar a Nuxt, con la diferencia de que tienes más libertad al diseñar tu aplicación;
- [vue-ssr-starter-kit](https://github.com/doabit/vue-ssr-starter-kit): Vue 2.0, vue-router y vuex starter kit para la representación del servidor con webpack 2.0;
- [vue-ssr- boilerplate](https://github.com/fenivana/vue-ssr-boilerplate): Vue.js Servidor lado Rendering repetición sin contaminar Vuex;
- [vueniverse](https://github.com/rlindskog/vueniverse): plantilla completa, basada en usuario, PWA, Vue;

<lazy-load tag="img" :data="{ src: 'https://cdn-images-1.medium.com/max/800/0*eZAqkumudkGfDtwn.gif' }" />

Si tiene una pregunta, si he olvidado algo para abordar, deje su comentario, comparta sus experiencias con SSR. Nos vemos en la siguiente publicación.

---

> Si usted encuentra algún error en el idioma y desea contribuir, este artículo está en [nuestro repositorio](https://github.com/ktquezplay/webapp) y seremos agradecidos por un pull request. Usted será citado como contribuidor en ese post. Gracias.