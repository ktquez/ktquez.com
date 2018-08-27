---
view: post
layout: post
lang: pt-br
author: ktquez
title: Quando utilizar Server-Side Rendering, ou SSR, em projetos Vue.js
description: Ainda há muitas dúvidas sobre a renderização no lado do servidor (SSR) e quando usá-lo. Há alguns pontos que abordaremos neste artigo e conheça o Nuxt.js
excerpt: Ainda há muitas dúvidas sobre a renderização no lado do servidor (SSR) e quando usá-lo. Há alguns pontos que abordaremos neste artigo.
cover: false
coverAlt: Fundo verde com 3 ícones, o primeiro é uma ilustração de um servidor, o segundo é uma ilustração de uma núvem com um arquivo representando a internet e o último é uma ilustração tipo janela de browser com os elementos renderizados.
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
    content: https://ktquez.com/share/when-to-use-ssr-share-post.png
  - name: twitter:image
    content: https://ktquez.com/share/when-to-use-ssr-share-post.png
---

## Intro

Eu coloco no título “em projetos Vue.js”, mas algumas coisas abordadas aqui servem também para outras tecnologias, isso é assunto pouco difundido na comunidade, mas que vem ganhando força na tendência de criação de aplicações SPA, principalmente pela modernização de frameworks javascript.

Existem vantagens e desvantagens em utilizar server-side rendering, mas o principal questionamento que tive ao me deparar com a possibilidade de utilizar Client-side ou Server-side foi:

> Quando utilizar Server-side rendering?

Depois de algumas dúvidas de membros da comunidade decidi tentar elucidar o que temos hoje no SSR como vantagens e desvantagens no seu uso e colocarei um pouco do que passei utilizando a configuração manual e atualmente utilizando o [Nuxt Framework](https://nuxtjs.org/).

## O que ganhamos ao usar Server-side rendering?

### SEO

Os rastreadores dos mecanismos de buscas, como o Google, Bing, dentre outros, precisam ter de maneira clara o que irão encontrar em seu conteúdo, isso acontece por que os rastreadores não suportam totalmente JavaScript.

**Update: O Google e o Ask já suportam com uma boa confiabilidade, porém o Bing que anunciou que renderiza e indexa Javascript ainda é inconsistente. Deixarei 2 artigos na sequência que aborda como o Google e o Bing estão se saindo.**

- [SPA and SEO: Google](https://medium.com/@l.mugnaini/spa-and-seo-is-googlebot-able-to-render-a-single-page-application-1f74e706ab11)
- [Is Bing Really Rendering & Indexing JavaScript?](https://www.screamingfrog.co.uk/bing-javascript/)

Quando utilizamos uma aplicação client-side, como o nome já diz, o conteúdo é carregado quase sempre após a disponibilidade no Browser o que atrapalha na hora de identificar o conteúdo através de seu arquivo HTML e de indexar sua página.

Outro problema encontrado é que as redes sociais também não conseguem identificar o conteúdo quando tentam acessar sua página para colher as informações e montar os dados para o compartilhamento e isso também é ruim para sites que precisam dessa interação.

A solução é que usando SSR antes de servir ao browser acontece um processo na sua aplicação para montar um documento HTML que realmente condiz com o que foi pedido na requisição, se precisar de dados da sua API o próprio servidor fará uma requisição e tratará a resposta até inserir no HTML antes de enviar para o cliente. Isso faz com que os rastreadores também recebam esse conteúdo completo, fazendo com que seja mais fácil a análise e indexação. O mesmo acontece com as redes sociais.

Então se sua aplicação precisa desse tipo de abordagem, você irá precisar usar server-side rendering, que cá entre nós esse é o maior e principal motivo na hora da decisão de utilizar renderização no servidor.

Um tempo atrás eu fiz um artigo para o Vue.js Brasil falando sobre uma novidade do Google, que era a possibilidade de renderizar JavaScript em determinadas situações através da opção [fetch as Google](https://support.google.com/webmasters/answer/6066468?hl=pt-BR) no Google webmaster tools.

### Performance (Sim e Não)

<lazy-load tag="img" :data="{ src: 'https://cdn-images-1.medium.com/max/800/0*UrnK8nheUSFEyvmn.gif' }" />

Quando um usuário solicita uma página ele não precisa esperar que o JavaScript seja carregado antes que o conteúdo seja exibido, pois os componentes já foram processados ​​no servidor e transformados em tags HTML, o que é legal para usuários e dispositivos de Internet lentos. 

Isso resulta em uma melhor experiência do usuário, porém a interatividade do aplicativo só ocorrerá quando os scripts e o Vue estiverem carregados corretamente.

O **Não** no título dessa seção é pelo fato de que mesmo que às vezes imperceptível com o SSR você dá mais trabalho para o servidor e dependendo do que for necessidade no momento da renderização a resposta HTTP ao client levará um pouco mais de tempo.

O que causa esse atraso às vezes é se seu servidor estiver com bastante solicitações (tendo um uso mais intenso de processamento), se sua aplicação precisa de dados de uma API externa, onde o servidor terá que aguardar a resposta dessa solicitação para poder renderizar a aplicação e o tamanho do seu HTML ficará maior, podendo demorar um pouco no download.

> Isso não é um fator crítico, mas dependendo do que vai ser carregado, pode se tornar pesado.

Eu praticamente detalhei aqui os prós e contras usando o SSR quando se trata de desempenho. Para melhorar isso, use o poder do cache sempre que possível.

### Restrições ao utilizar server-side rendering

Um dos maiores problemas que eu tive usando o SSR foi ao usar bibliotecas de terceiros, que para renderizar os componentes necessários para acessar certas variáveis ​​que estão disponíveis apenas no navegador, eu estou falando sobre o `window`, `document` e etc. Uma dos hacks que precisei foi simular um ambiente DOM no node com o  `JS-DOM`, com isso os erros paravam, mas a renderização ainda ficava limitada.

Outra coisa é que no Vue.js existem alguns métodos de ciclo de vida que conhecemos como ([**lifecycle hooks**](https://br.vuejs.org/v2/guide/instance.html#Diagrama-do-Ciclo-de-Vida)), que só são chamados no browser (`beforeMount` e `mounted`), se você renderizar algo que são disparados por esses hooks, isso não ocorrerá no servidor.

Algumas bibliotecas externas precisam ser adaptadas também para serem usadas em aplicações que use SSR, aos poucos o ecossistema está sacando isso e estão começando a atualizando e a dar suporte.

## Quando utilizar server-side rendering?

- Se você precisar de SEO no Google, Yahoo, Bing, dentre outros;
- Se você precisar que seu conteúdo possa ser compartilhado nas redes sociais;
- Se você busca uma alternativa para melhorar a performance e experiência do usuário;
- Se você tiver recursos para contratar e manter servidores, principalmente se espera um alto tráfego de usuários. É preciso também ter uma boa estratégia de cache.

## O que temos para um aplicativo SSR com Vue.Js?

### Nuxt Framework

O Nuxt é uma estrutura para criar aplicativos universais com o Vue.js, e veio resolver a terrível tarefa de fazer toda a configuração necessária para usar a renderização do lado do servidor com o Vue.js, inspirado no Next.js, que é uma estrutura universal feita para ReactJS.

Ele já pode ser considerado como uma estrutura oficial do Vue.js para aplicativos SSR, mas vai além disso. É uma comunidade que está criando um ecossistema de módulos específicos voltados para esse tipo de abordagem, oferece uma experiência de desenvolvimento simples para você escrever seus componentes de arquivo vue. Ele também traz recursos interessantes que ajudam no desenvolvimento, como dados assíncronos, middleware, layout e assim por diante.

Além disso, ele tem um gerador de site estático usando o plug-in prerender-spa e gera as páginas do seu aplicativo SPA sem a necessidade do servidor. Uma observação importante é que ele não renderiza páginas dinâmicas. Se você tem um blog, é melhor usar o SSR.

Você pode aproveitar o curso produzido pelo instrutor Maximilian Schwarzmüller na Udemy chamado “Nuxt.js - Vue.js on Steroids”.

- [Nuxt.js - Vue.js on Steroids](http://bit.ly/nuxtjs-udemy)

### Outras estruturas interessantes

- [Ream](https://github.com/ream/ream): Semelhante ao Nuxt, com a diferença de que você tem mais liberdade ao projetar seu aplicativo;

- [vue-ssr-starter-kit](https://github.com/doabit/vue-ssr-starter-kit): Vue 2.0, vue-router e vuex starter kit para Server Side Rendering com webpack 2.0;

- [vue-ssr-boilerplate](https://github.com/fenivana/vue-ssr-boilerplate): Vue.js Server Side Rendering Boilerplate sem Poluir o Vuex;

- [vueniverse](https://github.com/rlindskog/vueniverse): Full stack, user based, PWA, Vue template;

<lazy-load 
  tag="img" 
  :data="{ src: 'https://cdn-images-1.medium.com/max/800/0*eZAqkumudkGfDtwn.gif' }" />

Se você tiver alguma dúvida, se eu tiver esquecido algo para resolver, deixe seu comentário e compartilhe suas experiências com o SSR. Vejo você na próxima postagem.