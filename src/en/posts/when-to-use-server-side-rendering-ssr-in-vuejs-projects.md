---
view: post
layout: post
lang: en
author: ktquez
title: When to use Server-Side Rendering (SSR) in Vue.js projects
description: There are still many questions about server-side rendering (SSR) and when to use it, there are a few points that we’ll cover right now in this article.
excerpt: There are still many questions about server-side rendering (SSR) and when to use it, there are a few points that we’ll cover right now in this article.
cover: false
coverAlt: Green background with 3 icons, the first is an illustration of a server, the second is an illustration of a cloud with a file representing the internet and the last is a browser window type illustration with rendered elements.
demo: 
audio: 
categories:
  - vuejs
  - javascript
tags: 
  - ssr
  - vuejs
  - nuxtjs
created_at: 2018-08-22 10:00
updated_at: 2018-08-22 10:00

meta:
  - property: og:image
    content: /share/when-to-use-ssr-share-post.png
  - name: twitter:image
    content: /share/when-to-use-ssr-share-post.png
---

## Intro

I added in the title “in Vue.js projects”, but some things discussed here will also serve other technologies, server side rendering is a topic not much discussed in the community, but this has been gaining strength in the trend of creating SPA, mainly for the modernization of javascript frameworks.

There are advantages and disadvantages to using server-side rendering, but the main question I had when encountering the possibility of using Client-side or Server-side was:

> When to use server-side rendering?

After some questions from community members, I decided to try to elucidate what we have in SSR today as advantages and disadvantages in its use and I’ll put a little bit about what I went through when I set it up manually, in addition to talking about the main tools for SSR, like [Nuxt Framework](https://nuxtjs.org/).

## What we find when using server-side rendering?

### SEO

Search engine crawlers, such as Google, Bing, and others need to be clear about what they will find in their content, this is because crawlers do not support JavaScript.

Update: Google and Ask already support with good reliability, but Bing that announced that rendering and indexing Javascript is still inconsistent. I'll leave 2 articles in the sequence that talks about how Google and Bing are doing.

- [SPA and SEO: Google](https://medium.com/@l.mugnaini/spa-and-seo-is-googlebot-able-to-render-a-single-page-application-1f74e706ab11)
- [Is Bing Really Rendering & Indexing JavaScript?](https://www.screamingfrog.co.uk/bing-javascript/)

When we use a client-side application, as the name already says, the content is loaded almost always after the availability in the Browser, which is difficult to identify the content through your HTML file and index your page.

Another problem encountered is that social networks also cannot identify the content when they try to access your page to collect the information and mount the data for the share and this is also bad for sites that need this interaction.

The solution is that using SSR before serving the browser happens a process in your application to mount an HTML document that matches request, if you need data from your API, the server itself will make a apply for and will handle the response until inserting it into HTML before sending it to the client. This approach crawlers to also receive this complete content, making it easier to analyze and index. So it is with social networks.

So if your application needs this kind of approach, you'll need to use server-side rendering, which between us is the biggest and most important reason when deciding whether to use rendering on the server.

A while ago I made an article for Vue.js Brazil talking about a novelty of Google, which was the possibility to render JavaScript in particular situations through the option [fetch as Google](https://support.google.com/webmasters/answer/6066468?hl=en) in Google webmaster tools.

### Performance (Yes and No)

<lazy-load tag="img" :data="{ src: 'https://cdn-images-1.medium.com/max/800/0*UrnK8nheUSFEyvmn.gif' }" />

When a user requests a page, they do not have to wait for JavaScript to load before the content is displayed, since the components have already been processed on the server and turned into HTML tags, which is cool for slow internet users and devices. 

This results in a better user experience, but application interactivity will only occur when JavaScript and Vue are properly loaded.

The NO in the title of this section is that, even if you are sometimes discreet with SSR, you give the server more work, and depending on what you need when rendering the HTTP response to the client, it will take a little longer.

The cause of this delay is sometimes due to the intensive processing that happens on the server in each request or if your application requires data from an external API, where the server will have to wait for the response to be able to render the application causing the size of your HTML will be larger. 

> This is not a critical factor, but depending on what is going to be loaded, it can become cumbersome.

I have practically detailed here the pros and cons using SSR when it comes to performance. To improve this use the power of the cache whenever possible.

### Restrictions when using server-side rendering

One of the biggest problems I had using SSR was when using third-party libraries, which to render the components needed to access certain variables that are only available in the browser, I'm talking about the `window`, `document` and so on. One of the hacks I needed was to simulate a DOM environment on the node with the `JS-DOM`, with this the errors stopped, but the rendering was still limited.

Another thing is that in Vue.js there are some lifecycle methods that we know as ([**lifecycle hooks**](https://br.vuejs.org/v2/guide/instance.html#Diagrama-do-Ciclo-de-Vida)), that are only called in the browser (`beforeMount` e `mounted`), if you render something that is triggered by these hooks, this will not occur on the server.

Some external libraries also need to be adapted to be used in applications that use SSR, little by little the ecosystem is pulling this out and starting to update and support.

## When to use server-side rendering?

- If you need SEO in Google, Yahoo, Bing, among others;
- If you need your content to be shared on social networks;
- If you are looking for an alternative to improve user experience and performance;
- If you have resources to hire and maintain servers, especially if you expect high user traffic. You must also have a good cache strategy.

## What do we have for an SSR app with Vue.js?

### Nuxt Framework

Nuxt is a framework for creating universal applications with Vue.js, and it came to solve the appalling task of doing all the configuration necessary to use server-side rendering with Vue.js, inspired by Next.js which is a universal framework made for ReactJS.

It can already be considered as an official Vue.js framework for SSR applications but goes beyond that. It is a community that is creating an ecosystem of specifics modules oriented towards this type of approach, offers a simple development experience for you to write your vue file components. It also brings exciting features that help in development such as Asynchronous Data, Middleware, Layout and so on.

Also, it has a static site generator using the prerender-spa-plugin and generates the pages of your SPA application without the need of the server. An important note is that it does not render dynamic pages. If you have a blog, it is better to use SSR.

You can take advantage of the course produced by the instructor Maximilian Schwarzmüller at Udemy called “Nuxt.js — Vue.js on Steroids”.

- [Nuxt.js - Vue.js on Steroids](http://bit.ly/nuxtjs-udemy)

### Other Interesting Structures

- [Ream](https://github.com/ream/ream): Similar to Nuxt, with the difference that you have more freedom while designing your application;

- [vue-ssr-starter-kit](https://github.com/doabit/vue-ssr-starter-kit): Vue 2.0, vue-router and vuex starter kit for server side rendering with webpack 2.0;

- [vue-ssr-boilerplate](https://github.com/fenivana/vue-ssr-boilerplate): Vue.js Server Side Rendering Boilerplate without Polluting Vuex;

- [vueniverse](https://github.com/rlindskog/vueniverse): Full stack, user based, PWA, Vue template;

<lazy-load 
  tag="img" 
  :data="{ src: 'https://cdn-images-1.medium.com/max/800/0*eZAqkumudkGfDtwn.gif' }" />

If you have a question, if I have forgotten something to address, leave your comment, share your experiences with SSR. see you in the next post.

---

> Translated article via google translate and improved with grammarly.com, if you find any language error and would like to contribute, this article is in [our repository](https://github.com/ktquezplay/webapp) and we would be grateful for a pull request. You will be quoted as a contributor in this post. Thank you.