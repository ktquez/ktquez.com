---
view: post
layout: post
lang: en
author: ktquez
title: Essential Guide to Improve SEO in Single Page Application Vue.js
description: Optimizing your single page application Vue.js for search engines (SEO) is not simple, but I'll give you some tips on how to improve your results.
excerpt: Optimizing your single page application Vue.js for search engines (SEO) is not a simple task, in this short guide you will have an overview of tools and libs Vue.js that will help you to have a better result + several good practice tips in SPAs.
cover: true
coverAlt: Illustration with gray background on the left side a man pointing to some rectangles on the page simulating results of a search, on the right side the logos of the 4 most important search companies, Google, Yandex, Yahoo and bing, below them a search box.
categories:
  - vuejs
  - seo
tags: 
  - ssr
  - vuejs
  - nuxtjs
  - vuepress
  - prerender
  - SEO
  - SPA
created_at: 2018-09-13 10:00
updated_at: 2018-09-13 10:00
meta:
  - property: og:image
    content: https://ktquez.com/share/essential-guide-to-improve-seo-in-single-page-application-vuejs.png
  - name: twitter:image
    content: https://ktquez.com/share/essential-guide-to-improve-seo-in-single-page-application-vuejs.png
---

## Introduction 
SEO (Search Engine Optimization) are practices to be followed to optimize your site for search engines, improving its ranking, bringing better quality and increased traffic, thereby generating much more visibility for the site.

The first question we should ask when creating a website is: 

### What will I do to make my site look good on Google?
Any business currently wishing to survive in this competitive world of search engines should think of the best practices and techniques for marking "Search Engine Results Pages" (SERPs) as in the first pages of Google, Bing, Yahoo !, Ask, and others.

You do not need to be an SEO expert to be able to position yourself better, but your positioning will depend on some good practices, how your application behaves and what it implies in the result.

For example, a Single Page Application (SPA) is a complex situation, because there is no more than a single page `index.html`, which when loaded will be composed using JavaScript, both vanilla and by some framework.

Current search engines care very much about the content of each page of your site, doing automated scans through their crawlers. Because in SPAs the content is not organized or structured when requested, the crawlers can not reap the same as the user sees in the browser as soon as JavaScript rendering occurs.

Before the SPAs boom, Google (main engine) analyzed through what it received via <abbr title="HyperText Transfer Protocol">HTTP</abbr>, however, due to this demand Google developed a way to wait for JavaScript rendering to be able to collect the final result. However, from experience you do not always succeed in indexing correctly, thus becoming a fickle bet.

If you want to see how Google page rendering works, go to the link below:
[https://www.google.com/webmasters/tools/googlebot-fetch](https://www.google.com/webmasters/tools/googlebot-fetch)  

## Solutions for SPAs Vue.Js

### SSR (Server Side Rendering)
In the context of Server Side Rendering (SSR) as the name already says rendering is done on the server, then the search engine crawlers when requesting your site will be able to identify the information in the document completely to read and index.

It is great for dynamic projects that require SEO, but also projects that seek a presence in the social networks where their content is shared by users.

I wrote an article (you can check [this link](/en/posts/when-to-use-server-side-rendering-ssr-in-vuejs-projects.html)) on this topic, in it, you can know more in-depth the benefits of using server-side rendering and know a bit about [Nuxt.js](https://nuxtjs.org/) which is without a doubt the best tool to use when addresses universal applications of [Vue.js](https://vuejs.org/).

### Prerender
Since you now know what server-side rendering is, this implementation may sometimes seem overdone in certain SPAs using Vue.js. It may be because of the type of the project or the lack of structure to deploy a server, among several other business rules.

There is a solution to this peculiarity where you do not need a server infrastructure, I'm talking about a pre-rendering plugin using the webpack called [Prerender SPA Plugin](https://github.com/chrisvfritz/prerender-spa-plugin) (created by [Chris Fritz](https://twitter.com/chrisvfritz) one of the main members of Vue.js), this plugin not only works with Vue.js, also works with JavaScript vanilla or more current frameworks.

It has the role of rendering your pages (you inform the routes you want to render) and converts them into static documents (HTML), making the content completely available, helping in reading and indexing.

### Static sites
Recently, Evan has announced a static site generation tool called [Vuepress](https://vuepress.vuejs.org/). A static website is nothing new it is simply what the web has from the beginning, each page is an HTML document and displays that same information for all its visitors.

To create a page in Vuepress we can use Markdown and even using Vue components, dynamically generating a static HTML site, bringing all the benefits of SEO, performance and user experience without losing the ability to function as an SPA soon after loading the scripts.

Vuepress is in its initial state, with documentation support and especially with the default doc theme. Vue.js, so if you like the template, it's possible in a few minutes to create your own.

Blog support is something creators want, as it will be where it will demand the use and evolution of the tool, but it is still not supported at the core level.

As Vuepress is Vue.js and with Vue.js the sky is the limit, it is possible to adapt and transform it into a blog, institutional site, landing pages, among others. This blog was developed with Vuepress and can even be used by any developer. Just clone the boilerplate [vuepress-theme-ktquez-starter](https://github.com/ktquez/vuepress-theme-ktquez-starter) that already comes with some ready-made settings you can use to use it as your blog staff or use for studies.

<small>[[&#8593; TABLE OF CONTENT]](#table-of-content)</small>

## Tips To Improve Your Site's SEO

## Friendly URL / History Mode
URL (standard resource locator or simply web address) readable to us mere mortals and designed to replace numbers <abbr title="Internet Protocol">IP</abbr> (Internet Protocol), in addition to locating web pages on the internet it also specifies how to retrieve this feature through known protocols such as <abbr title="Hypertext Transfer Protocol">HTTP</abbr>, <abbr title="Hypertext Transfer Protocol Secure">HTTPS</abbr>, <abbr title="File Transfer Protocol">FTP</abbr>, and so on.

At the beginning of the SPAs (primarily when the Angular 1+ was in evidence) it was common to see URLs using hashbang (#!), In the [Vue-Router](https://router.vuejs.org/) (main router of Vue.js) it is enabled by default mode `hash` (#) to simulate one (URL), causing the page to not be reloaded.

```
https://domain.com/#/about/
```

The hash mode is designed to troubleshoot compatibility issues in browsers. However, modern browsers already support the HTML5 History API.

<lazy-load tag="iframe" :data="{ src: 'https://caniuse.bitsofco.de/embed/index.html?feat=history&periods=future_1,current,past_1,past_2' }" />

In the VueRouter we can change the mode to `history` get rid of the hash (#) and take advantage of everything the HTML5 history API for navigation provides, leaving the URL more user-friendly.

```javascript
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

Result:
```
https://domain.com/about/
```

> Attention: when using mode: history, you need in the hosting or web server to direct all the routes to its index.html, avoiding error 404 when the user accesses a specific route.

You can see the settings needed to leave your Vue.js SPA using fully functional vue-router via [this link](https://router.vuejs.org/guide/essentials/history-mode.html). (Any questions, put in the comments I will help where possible).

### Why friendly URLs is good for SEO?
Firstly, when the URL is semantically well crafted, it improves the user experience and facilitates understanding of search engines. 

<lazy-load tag="img" :data="{ src: '/images/posts/2018/9/serp-url-friendly-seo-spa-vuejs.png', alt: 'Piece of a Google search page result with the link and a highlight with red borders indicating the URL' }" />

The user seeing the well-defined URL will know, without needing the title, what will find on the page. When searching for the term as a `men's watch`, the `keyword focus` will have a greater presence in the result because it is in the title, description, and link.

URLs are not a very strong ranking factor, however, using keywords on certain occasions may be beneficial, but do not get desperate by placing keywords in your URLs, leaving your readability affected.

<small>[[&#8593; TABLE OF CONTENT]](#table-of-content)</small>


## Metadados (head tags)

### Viewport
Specifying how the preview window behaves improves the user experience on mobile devices by controlling the size and scaling of the page.

For example:
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- **width=device-width**: The width of the device-independent screen;
- **initial-scale=1**: We established a 1: 1 relationship between CSS pixels and independent pixels, not disabling sizing and zooming the page;

The difference with and without viewport:

![Displays 2 smartphone screens, the one on the left side with unadjusted content and on the right side the most readable and screen-adjusted content](/images/posts/2018/9/viewport-user-experience-ktquez.png)

### Title of the page (tag title)
Titles are the most notorious parts of SERPs (Search Engine Results Pages), it is undoubtedly one of the most important and visible parts to the user, they must have a short, concise description, be page specific and attractive enough to do with that the user chooses his page instead of the others.

In Vue.js you have some complete solutions like ([vue-meta](https://github.com/declandewet/vue-meta) and [vue-head](https://github.com/ktquez/vue-head)) to change meta tags, therefore, the improvement in SEO of your site is not limited to the title.

Example of use using the `vue-head`

```javascript
export default {
  name: 'MyViewComponent',
  head: {
    title: {
      inner: `Men's Watches`,
      separator: '|',
      complement: 'World of Watches'
    }
 ...
```

Example of use using the `vue-meta`
```javascript
export default {
  name: 'MyViewComponent',
  metaInfo: {
      title: `Men's Watches`,
      titleTemplate: '%s | World of Watches', 
 ...
```

Result:
```html
<title>Men's Watches | World of Watches</title>
```

![Piece of a Google search page result with the highlighted example title with red borders](/images/posts/2018/9/serp-title-seo-spa-vuejs.png)

**Tips for optimizing your page titles:**
- The size of your title should contain between 50 and 60 characters;
- Create a title that arouses people's desire to click;
- Insert the keyword focus in the title;

### Description (Meta description)

The meta description is pretty much the meta tag that you can not miss, with it is possible to provide a coherent and attractive summary about a specific page. It is present in the SERPs are small and extremely valuable snippets of text that helps drive traffic to your website and increase the **CTR** (Click Through Rate).

Functional example using the vue-head:
```javascript
export default {
  name: 'MyViewComponent',
  head: {
    …
    meta: [
       { name: 'description', content: `Watches: Men's watches, brand name watches, discount watches, watches on sale, mens watch brands and ladies watches. Daily Deals on Men's watches &amp; watches for women + the best service guarantee.` }
    ]
 ...
```

![Piece of a Google search page result with the description of the highlighted example with red borders](/images/posts/2018/9/serp-description-seo-spa-vuejs.png)

Tips for optimizing page descriptions:
- The size of your description has a limit of 160 characters. One tip I can give is, always keep your descriptions between 150 and 155. You can check in the image that the post date is part of the description;
- Be precise and consistent! Do not leave your user in doubt about what your page really means, the click rate is very important;
- Use words that call the user for CTA (Call-to-action), depending on your market, words like "free shipping", "free course", "offer", among others;
- Normally, social networks use the descriptions and titles to form their sharing snippet, if you want to treat your social network user in a more personalized way, you can use the meta tags ([open-graph markup](https://developers.facebook.com/docs/sharing/webmasters) and [twitter markup](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup.html))

### Canonical tag
Declared how it `rel=canonical` is used to precisely define the preferred URL to index on search engines. When we use it it is possible to avoid problems of identical content (duplicate).

Duplicate content appears when search engines crawl multiple URLs with very similar content, causing multiple SEO issues, with large-scale duplicates, that will greatly dilute your ranking in SERPs.

An example to understand duplicate content happens when a Vue.js SPA uses VueRouter in hash mode and does not use canonical:
```
https://mydomain.com/#/about/
``` 

Causes crawlers to discard everything after the # and use that remainder as a parameter:
```
https://mydomain.com/?_escaped_fragment_=about
``` 

This can produce duplicate content (so I recommend using mode: history what we've talked about before), and it's also recommended to use the canonical link to make sure crawlers know exactly what the official URL.
```html
<link rel='canonical' href='https://mydomain.com/#/about/' />
```

Another example, already with URLs in history mode, would be the use of pagination.
```
https://mydomain.com/posts?page=2
``` 

If you need the pages to be indexed, it is strongly recommended that you use the rel=canonical for each pagination page. Well, if not informed, crawlers will think this (URL) `https://mydomain.com/posts` is equal to that `https://mydomain.com/posts?page=2`, but both are different. To get around this we can do a self-referencing page using the rel=canonical.

URL (https://mydomain.com/posts)
```html
<link rel='canonical' href='https://mydomain.com/posts/' />
```

URL (https://mydomain.com/posts?page=2)
```html
<link rel='canonical' href='https://mydomain.com/posts/?page=2' />
```

However, if you do not want to index the pagination, all changes to the page parameter leave the same rel=canonical `https://mydomain.com/posts`, telling Google that even if you change the parameters, you always want this (URL) to be the preferred one.

Example of how to set the link tag with the rel=canonical in vue-head:
```javascript
export default {
  name: 'MyViewComponent',
  head: {
    …
    link: [
      { rel: 'canonical', href='https://mydomain.com/posts' }
    ]
 ...
```
This subject, like most of the ones mentioned in this article, should have a separate article, but you can learn more about the canonical URL through [Google support](https://support.google.com/webmasters/answer/139066).

<small>[[&#8593; TABLE OF CONTENT]](#table-of-content)</small>

## Sitemap.xml
It is an XML file (eXtensible Markup Language) used to detail all the URLs of your site, very important when it comes to Single Page Applications, helping the mechanisms to know all routes of your application.

Example of its structure: (by [sitemap.org](https://www.sitemaps.org/protocol.html))
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>http://www.example.com/</loc>
      <lastmod>2005-01-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
   </url>
</urlset>
```

There are automatic sitemap.xml generators for Vue and Nuxt:
- [vue-router-sitemap](https://github.com/40818419/vue-router-sitemap): Generate sitemap.xml by vue-router configuration;
- [sitemap-module](https://github.com/nuxt-community/sitemap-module): Sitemap Module for Nuxt.js;

It's not too complicated to create your own sitemap.xml and be able to manually specify which links you think are relevant to Google, such as the Ktquez Play [sitemap.xml](https://ktquez.com/sitemaps/sitemap_pt-br.xml).

To create a perfect sitemap, you can go deeper through [sitemap.org](https://www.sitemaps.org/protocol.html), I learned a lot there.

Sitemap.xml can be added to Google through [Google Search Console](https://www.google.com/webmasters/tools/home), which is designed to track, analyze traffic and search performance of your site, fix issues that could disrupt indexing, give tips and tools for your site to get better results.

To register your sitemap on Google just:   
Access [this link](https://www.google.com/webmasters/tools) >> side menu Tracking >> Sitemaps

Click the button `ADD/TEST SITEMAP`, as soon as you click it will open a dialog asking for the address of where your sitemap is.

![Dialog to add sitemap.xml address](/images/posts/2018/9/add-sitemap-google.png)

In applications using Vue.js, you should normally put in the directory where the sitemap.xml access will be public, in applications built with vue-cli 3 and vuepress the ideal directory is the `/public`. With the Nuxt.js is inserted in the `/static`.

![Dialog box with the sitemap.xml address entered in the field](/images/posts/2018/9/ktquez-sitemap-added.png)

Once you've submitted your sitemap, you'll be able to see how the indexing of your site goes through the graphics:

![Graph in bar with 2 options the blue bar (97 sent) meaning the URLs sent and the red bar (70 indexed) meaning the indexed URLs](/images/posts/2018/9/sitemap-google-search-console-en.png)

One thing you need to know is that sitemap.xml does not index your site, but it does give you a hint. Google will index the pages that they find relevant and of sufficient quality to be worth indexing.

Advantages of having a sitemap.xml for your site:
- When you have dynamic pages;
- When you do not have a good structure with the internal links;
- When your site is new and you register it in search engine tools;

<small>[[&#8593; TABLE OF CONTENT]](#table-of-content)</small>

## Secure URL With HTTPS
Hypertext Transport Protocol Security (HTTPS) sites or humanly speaking secure sites can secure a site's connection through encryption. More than half of current websites are using HTTPS.

Even if there are other search engines, Google is the one who spearheaded this requirement and already comments that the unencrypted connections are in the final days (Chrome already shows to the user that the site is not secure when not encrypted).

Most hosts are making the SSL certificate available as a differential, so that your site is already published with HTTPS, but if you have your own server, you can have it for free using the [Let's Encrypt project](https://letsencrypt.org/getting-started/), it's worth checking.

Whether or not to use HTTPS does not have a direct correlation with the subject Single Page Applications (SPA), but is a necessary practice for any current website.

### What impact on SEO when using HTTPS

#### Ranking
There is a correlation between sites with HTTPS and higher rankings in SERPs, but always combined with other factors (good SEO practices), many experts consider it a tiebreaker. On [this link](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html), you can see a Google note about this subject.

#### Traffic
With good ratings, traffic will increase. Users in addition to seeing your site in the search results will see that your site is secure, against another that is not, further determining the click rate.

---

I stay here, I hope you have enjoyed the post, read everything carefully and hope you enjoy some tip of the post on their sites.

> Article translated into English using Google Translate.


