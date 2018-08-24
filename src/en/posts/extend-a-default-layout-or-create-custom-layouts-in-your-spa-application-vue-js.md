---
view: post
layout: post
lang: en
author: ktquez
title: Extend a default layout or create custom layouts in your SPA application Vue.js
description: You no longer need to issue events or use vuex to hide the components of basic layout on certain routes of your application.
excerpt: You no longer need to issue events or use vuex to hide the components of basic layout on certain routes of your application.
cover: false
coverAlt: Texto alternativo descrevendo a imagem
demo: https://vue-layouts.surge.sh/
audio: 
categories:
  - vuejs
  - javascript
tags: 
  - vuejs
  - javascript
created_at: 2018-08-22 09:00
updated_at: 2018-08-22 09:00
meta:
  - property: og:image
    content: /share/extend-layout-share-post.png
  - name: twitter:image
    content: /share/extend-layout-share-post.png
---

## Intro

I developed a plugin a few days ago called (vue-extend-layout), I did it because really occurred this need in a post in the group Vue.js Brazil that made me realize how interesting would be the possibility of determining a layout model in the pages that does not really need the appearance of the default layout of the application.

Those who use the Nuxt Framework to create applications with Server Side Rendering (SSR) know that Nuxt’s default framework allows you to expand layouts and set the layout you want to use on the page. This approach pleased me a lot and I missed it when I used a vue-cli template.

The Plugin `vue-extend-layout` is inspired by this structure of Nuxt, is very simple to configure in an application already under development and without compromising what was being done.

## Using the plugin vue-extend-layout

First we need to install the plugin via NPM.

`npm install vue-extend-layout --save`

In your `src/main.js`:

```js
import Vue from 'vue'
import router from './router'
import { VueExtendLayout, layout } from 'vue-extend-layout'

Vue.use(VueExtendLayout)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...layout // Add methods to extend layouts
})
```
**Attention: From now on, App.vue will no longer be your primary file**


The normal thing about a SPA Vuejs is to have a base file to use throughout the application, this file is the `App.vue`, however, using the layout system we will change it from directory and rename it to `default.vue`, this is the name of the default layout that will be used from now on.

Another important thing is to modify the name of the component to ‘default’, `name: 'default'`:

```vue
<template>
  <div id="app">
    <header />
    <sidebar />
    <div class="container">
      <router-view />
    </div>
    <footer />
  </div>
</template>

<script>
  export default {
    name: 'default' // id of the layout (required)
  }
</script>

<style>
/* your style */
</style>
```

In the next step you will create a directory called `layouts/` in your default application directory, it is usually `src/`, and you just need to move the file that has been renamed in this directory, thus `src/layouts/default.vue`. Test your application and see that apparently everything is the same and working, the configuration was simple, now you are using the default layout for the entire application and have the possibility to create new layouts, I will show below how to do this.

## Custom layouts

### Creating custom layouts and defining on certain routes

To create a layout, you simply create a vue file component within the layouts directory and set the name of the component with the ID you want to call that layout. For example: `layouts/login.vue`

```vue
<template>
  <div>
    <header-login />
    <div class="container-login">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyCustomLayoutLogin' // id of the layout
  }
</script>

<style>
/* your style */
</style>
```

In your route file you use the meta object to tell the vuejs which layout to use for the login page and ✨ ✨.

```js
{
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/Login'),
  meta: {
    layout: 'MyCustomLayoutLogin' // name of the layout
  }
}
```

<lazy-load 
  tag="img" 
  :data="{ src: 'https://cdn-images-1.medium.com/max/800/0*7usSMDPmL6KydTZM.gif' }" />


### Create a error layout (Optional)
For example: `layouts/error.vue`

```vue
<template>
  <div>
    <h1>PAGE NOT FOUND</h1>
    <router-view /> <!-- Optional -->
  </div>
</template>

<script>
  export default {
    name: 'error' // id of the layout
  }
</script>

<style>
/* your style */
</style>
```

And in the route add in the 'meta' object the 'layout' property with the name of the layout component, in this case 'error'.

```js
{
  path: '*',
  name: 'Error',
  meta: {
    layout: 'error' // name of the layout
  }
}
```

## Note (Webpack)

### A caveat with the Webpack

In your webpack file check for an alias (@) in the main directory of your application, usually using vue-cli we find something like this.

```js
resolve: {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
  }
}
```

The `vue-extended-layout` use this alias(@), if you do not have one or the main path is another, add that alias (@) to the path containing the directory `layouts/` you have created.

So that’s it, any question or problem when using it opens a issue there in the [repository](https://github.com/ktquez/vue-extend-layout) that I’ll try to solve as quickly as possible, do not forget the vue-cli templates preconfigured with vue-extend-layouts for those who are starting a new project, as they avoid making the settings for this post.

### Recommended courses:

- [Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)](http://bit.ly/vue-js-2-the-complete-guide-vuex-and-vue-router)
- [Nuxt.js - Vue.js on Steroids](http://bit.ly/nuxtjs-udemy)

Thanks!
