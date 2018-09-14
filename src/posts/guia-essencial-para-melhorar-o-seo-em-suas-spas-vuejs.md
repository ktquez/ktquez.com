---
view: post
layout: post
lang: pt-br
author: ktquez
title: Guia essencial para melhorar o SEO em Single Page Application Vue.js
description: Otimizar sua single page application Vue.js para mecanismos de busca (SEO) não é simples, mas te darei algumas dicas de como melhorar seus resultados.
excerpt: Otimizar sua single page application Vue.js para mecanismos de busca (SEO) não é uma tarefa simples, nesse pequeno guia você terá uma visão geral de ferramentas e libs Vue.js que te ajudará a ter um melhor resultado + diversas dicas de boas práticas em SPAs.
cover: true
coverAlt: Illustração com fundo cinza no lado esquerdo um homem apontando para alguns retângulos na página simulando resultados de uma pesquisa, no lado direito as logos das 4 mais importantes empresas de busca, Google, Yandex, Yahoo e bing, abaixo delas uma caixa de pesquisa.
demo: 
audio: 
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
created_at: 2018-09-08 10:00
updated_at: 2018-09-08 10:00

meta:
  - property: og:image
    content: https://ktquez.com/share/guia-essencial-para-melhorar-o-seo-em-suas-spas-vuejs.png
  - name: twitter:image
    content: https://ktquez.com/share/guia-essencial-para-melhorar-o-seo-em-suas-spas-vuejs.png
---

## Introdução 

SEO (Search Engine Optimization) são práticas a serem seguidas otimizando o seu site para mecanismos de pesquisa, melhorando a sua classificação, trazendo uma melhor qualidade, maior tráfego e gerando para o site muito mais visibilidade.

A primeira pergunta que devemos fazer ao criar um site para internet é:  

### O que farei para o meu site ficar bem ranqueado no Google?
Qualquer negócio atualmente que queira sobreviver nesse mundo competitivo dos mecanismos de buscas deve pensar nas melhores práticas e técnicas para marcar presença nas "SERPs" (Search Engine Results Pages) como nas primeiras páginas do Google, Bing, Yahoo!, Ask, dentre outros.

Você não precisa ser um especialista em SEO para conseguir se posicionar melhor, mas seu posicionamento dependerá de algumas boas práticas, saber como sua aplicação se comporta e o que implica no resultado.

Por exemplo, uma Single Page Application (SPA) é uma situação complexa por não haver mais do que (como o nome já diz) uma única página `index.html`, que quando carregada será composta através de JavaScript, tanto vanilla, quanto por algum framework.

Os motores de buscas atuais se preocupa muito com o conteúdo de cada página do seu site, fazendo varreduras de forma automatizada através de seus rastreadores. Como em SPAs o conteúdo não está organizado e nem estruturado quando solicitado, os rastreadores não conseguem colher o mesmo que o usuário ver no navegador assim que ocorre a renderização do JavaScript.

Antes do boom das SPAs o Google (principal engine) analisava através do que recebia via <abbr title="HyperText Transfer Protocol">HTTP</abbr>, porém, devido a essa demanda o Google desenvolveu uma forma de aguardar a renderização do JavaScript para poder recolher o resultado final. Porém, por experiência própria nem sempre você tem sucesso na indexar de maneira correta, se tornando uma aposta inconstante.

Caso você queira ver como funciona a renderização de páginas como Google, basta acessar o link abaixo:  
[https://www.google.com/webmasters/tools/googlebot-fetch](https://www.google.com/webmasters/tools/googlebot-fetch)  

## Soluções para SPAs Vue.js

### SSR (Renderização do lado do servidor)
No contexto de SSR (Server Side Rendering) como o nome já diz a renderização é feita no servidor, então consequentemente os rastreadores dos mecanismos de busca ao requisitarem seu site conseguirão identificar as informações do documento por completo para daí fazer a leitura e a indexação.

É excelente para projetos dinâmicos que necessitam de SEO, mas também projetos que buscam presença em redes sociais onde seu conteúdo é compartilhado pelos usuários.

Eu escrevi um artigo (pode conferir [nesse link](/posts/quando-utilizar-server-side-rendering-ou-ssr-em-projetos-vuejs.html)) sobre esse tema e você pode saber bem mais a fundo os benefícios de se utilizar renderização no lado do servidor, e de quebra explico também um pouco sobre o [Nuxt.js](https://nuxtjs.org/), que é sem dúvida a melhor ferramenta a se usar quando se trata de aplicações universais [Vue.js](https://vuejs.org/). 

### Prerender
Já que agora você sabe o que é a renderização do lado do servidor, essa implementação, às vezes, pode parecer exagerada em determinadas SPAs usando o Vue.js. Pode ser por conta do tipo do projeto ou a não estrutura para implantar um servidor, dentre diversos outras regras de negócio.

Existe uma solucação para essa peculiaridade onde não necessite de uma infraestrutura de servidor, que é um plugin de pré-renderização utilizando o webpack chamado de [Prerender SPA Plugin](https://github.com/chrisvfritz/prerender-spa-plugin) (Criado por [Chris Fritz](https://twitter.com/chrisvfritz) um dos membros principais do Vue.js), esse plugin não só funciona com o Vue.js, também trabalha com Javascript vanilla ou frameworks mais atuais.

Ele tem o papel de renderizar suas páginas (você informa as rotas que deseja renderizar) e as converte em documentos (HTML) estáticos, tornando assim o conteúdo disponível por completo, ajudando na leitura e na indexação.

### Sites estáticos
Recentemente o Evan You anunciou uma ferramenta de geração de sites estáticos chamado [Vuepress](https://vuepress.vuejs.org/). Um site estático não é nada novo, é simplesmente o que a *web* tem desde princípio, cada página é um documento HTML e exibe essas mesmas informações para todos os seus visitantes.

Para criar uma página no Vuepress podemos utilizar Markdown e até mesmo usando componentes Vue, gerando dinamicamente um site HTML estático, trazendo todos os benefícios de SEO, performance e experiência do usuário, sem perder a capacidade de funcionar como uma SPA logo após o carregamento dos scripts.

O Vuepress está em seu estado inicial, com suporte a documentação e principalmente com o tema padrão da doc. Vue.js, então caso você goste do modelo, é possível em poucos minutos, criar a sua.

O suporte a blog é algo desejado pelos criadores, pois, será onde irá demandar o uso e a evolução da ferramenta, mas ainda não é suportado ao nível de core.  

Como o Vuepress é Vue.js e com Vue.js o céu é o limite, é possível adaptar e o transformar em um blog, site institucional, landing pages, dentre outros. Esse blog que vos escreve foi desenvolvido com Vuepress e até mesmo já pode ser utilizado por qualquer dev., basta clonar o boilerplate [vuepress-theme-ktquez-starter](https://github.com/ktquez/vuepress-theme-ktquez-starter) que já vem com algumas configurações prontas, você pode utilizar para utilizá-lo como seu blog pessoal ou utilizar para estudos.

<small>[[&#8593; ÍNDICE]](#table-of-content)</small>

## Dicas para melhorar o SEO do seu site

## URL Amigável / History mode
URL (Localizador padrão de recursos ou simplesmente endereço web) legível para nós meros mortais e projetado para substituir os números (<abbr title="Internet Protocol">IP</abbr>), além da localização de páginas web na internet ele também especifica como recuperar esse recurso, através dos conhecidos protocolos como <abbr title="Hypertext Transfer Protocol">HTTP</abbr>, <abbr title="Hypertext Transfer Protocol Secure">HTTPS</abbr>, <abbr title="File Transfer Protocol">FTP</abbr> e etc.

No início das SPAs (primordialmente quando o Angular 1+ estava em evidência) era comum ver URLs usando o hashbang (#!), no [Vue-Router](https://router.vuejs.org/) (roteador principal do Vue.js) vem habilitado por padrão o modo `hash` (#) para simular uma (URL) completa, fazendo com que a página não seja recarregada.

```
https://domain.com/#/about/
```

Isso foi criado por questões de compatibilidade em navegadores, porém, a maioria dos browsers modernos já suportam a History API do HTML5.

<lazy-load tag="iframe" :data="{ src: 'https://caniuse.bitsofco.de/embed/index.html?feat=history&periods=future_1,current,past_1,past_2' }" />

No Vue router podemos trocar o mode para `history` fazendo com que nos livremos do hash (#) e aproveitar tudo que a API history do HTML 5 para navegação nos proporciona, deixando a URL mais amigável para o usuário.

```javascript
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

Resultado:
```
https://domain.com/about/
```

> Atenção: ao utilizar o mode: history, você precisa no hosting ou servidor web direcionar todas as rotas para sua index.html, evitando erro 404 quando o usuário acessar uma rota específica.

Você pode ver as configurações necessárias para deixar sua SPA Vue.js usando vue-router totalmente funcional através [deste link](https://router.vuejs.org/guide/essentials/history-mode.html). (Qualquer dúvida, coloca nos comentários ajudarei no que for possível) 


### Porque as URLs de maneira amigável é bom para SEO?

Em primeiro lugar quando a URL é semanticamente bem elaborada, melhora a experiência do usuário e facilita o entendimento para os mecanismos de busca. 

![Recorte de um resultado da página de busca do Google com o link e um destaque com bordas vermelhas indicando a URL](/images/posts/2018/9/serp-url-amigavel-seo-spa-vuejs.png)

O Usuário ao ver a URL bem definida saberá de cara, sem precisar do título, o que irá encontrar na página além de que se ao pesquisar o termo como `relógio preto` a `palavra-chave foco` terá uma presença maior, pois, terá no título, descrição e link.

As URLs não são um fator de classificação muito forte, porém, o uso de palavras-chave em determinadas ocasiões pode ser benéfico para tal, mas não fique desesperado colocando palavras-chave nas suas URLs, deixando sua legibilidade afetada.

<small>[[&#8593; ÍNDICE]](#table-of-content)</small>


## Metadados (head tags)

### Viewport

Especificar como pode se comportar a janela de visualização melhora a experiência do usuário em dispositivos móveis, controlando o tamanho e o dimensionamento da página.

Por exemplo:
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- **width=device-width**: Largura da tela independente do dispositivo;
- **initial-scale=1**: Estabelecemos uma relação 1:1 entre pixels CSS e pixels independentes, não desativando o dimensionamento e possibilitando o zoom na página;

Diferença com e sem viewport:

![Mostra 2 telas de smartphone, a do lado esquerdo com o conteúdo não ajustado e do lado direito o conteúdo mais legível e ajustado na tela](/images/posts/2018/9/viewport-experiencia-do-usuario.png)

### Título da página (tag title)
Os títulos são as partes mais notórias das SERPs (Search Engine Results Pages), é sem dúvidas uma das partes mais importantes e visíveis para o usuário, eles devem ter uma descrição curta, concisa, ser específico da página e atraente o suficiente para fazer com que o usuário escolha a sua página ao invés das outras.

No Vue.js você tem algumas soluções completas como ([vue-meta](https://github.com/declandewet/vue-meta) e o [vue-head](https://github.com/ktquez/vue-head)) para mudança de meta tags, pois, não a melhoria no SEO do seu site não se limita somente ao título.

Exemplo de uso utilizando o `vue-head`

```javascript
export default {
  name: 'MyViewComponent',
  head: {
    title: {
      inner: '13 brincadeiras e curiosidades escondidas na busca do Google',
      separator: '-',
      complement: 'TechMundo'
    }
 ...
```

Exemplo de uso utilizando o `vue-meta`
```javascript
export default {
  name: 'MyViewComponent',
  metaInfo: {
      title: '13 brincadeiras e curiosidades escondidas na busca do Google',
      titleTemplate: '%s - TecMundo', 
 ...
```

Resultado:
```html
<title>13 brincadeiras e curiosidades escondidas na busca do Google - TecMundo</title>
```

![Recorte de um resultado da página de busca do Google com o título do exemplo em destaque com bordas vermelhas](/images/posts/2018/9/serp-titulo-seo-spa-vuejs.png)

**Dicas para otimizar seus títulos da página:**
- O tamanho do seu título deve conter entre 50 e 60 caracteres;
- Crie um título que desperte a vontade das pessoas em clicá-lo;
- A palavra-chave foco (focus keyword) esteja presente no título;

### Descrição (Meta description)

A meta descrição é praticamente a meta tag que não pode faltar, com ela é possível fornecer um resumo coerente e atraente sobre página específica. Está presente nas SERPs e são pequenos trechos de texto extremamente valiosos que ajuda a impulsionar o tráfego para o seu site e aumentar o **CTR** (Click Through Rate, no português **Taxa de clique**).

Exemplo funcional usando o vue-head:
```javascript
export default {
  name: 'MyViewComponent',
  head: {
    …
    meta: [
       { name: 'description', content: 'Depois de comemorar o aniversário de 10 anos do Chrome, a Google está se preparando para comemorar também o seu vigésimo aniversário como empresa.' }
    ]
 ...
```

![Recorte de um resultado da página de busca do Google com a descrição do exemplo em destaque com bordas vermelhas](/images/posts/2018/9/serp-descricao-seo-spa-vuejs.png)

Dicas para otimizar as descrições da página:
- O tamanho da sua descrição tem um limite de 160 caracteres, porém, uma dica que posso lhe dar é que mantenha sempre suas descrições entre 150 e 155, se você reparar na imagem, a data da postagem divide espaço com a descrição;
- Seja preciso e coerente, não deixe o usuário com dúvidas do que realmente aquela página se trata. O CTR é muito importante;
- Use palavras que chamem o usuário para ação CTA (Call-to-action), dependendo do seu mercado, palavras como "frete-grátis", "curso grátis", "oferta", dentre outras;
- Normalmente as redes sociais utilizam as descrições e títulos para formar seu snippet de compartilhamento, caso queira tratar seu usuário de redes sociais de maneira mais customizada, você pode utilizar as meta tags ([open-graph markup](https://developers.facebook.com/docs/sharing/webmasters) e [twitter markup](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup.html))

### Tag canônica

Declarada como `rel=canonical` é usada para definir de forma precisa a URL preferencial para indexar nos mecanismos de busca. Quando usamos é possível evitar problemas de conteúdo idêntico (duplicado).

O Conteúdo duplicado aparece quando os mecanismos de busca rastreiam diversas URLs com conteúdos muito semelhantes, causando vários problemas de SEO e se ocorrer duplicidade em grande escala irá diluir consideravelmente sua classificação nas SERPs.

Um exemplo para entender conteúdo duplicado acontece quando uma SPA Vue.js utiliza o  VueRouter no modo 'hash' e não usa o canonical:
```
https://mydomain.com/#/about/
``` 

Faz com que os rastreadores descartem tudo após o `#` e utilize esse restante como parâmetro:
```
https://mydomain.com/?_escaped_fragment_=about
``` 

Isso pode produzir conteúdos duplicados (por isso recomendo o uso do `mode: history` que falamos antes) e também recomenda-se o uso do link rel=canonical para garantir que os rastreadores saibam precisamente qual é a URL "oficial".
```html
<link rel='canonical' href='https://mydomain.com/#/about/' />
```

Outro exemplo, já com URLs em modo history, seria com o uso de paginação.
```
https://mydomain.com/posts?page=2
``` 

Se você precisa que as páginas sejam indexadas, é extremamente recomendado que utilize o rel=canonical a cada página da paginação. Pois, se não informado, os rastreadores pensarão que essa (URL) `https://mydomain.com/posts` é igual a essa `https://mydomain.com/posts?page=2`, porém, ambas são diferentes. Para contornar isso podemos fazer uma auto-referência a página usando o rel=canonical.

URL (https://mydomain.com/posts)
```html
<link rel='canonical' href='https://mydomain.com/posts/' />
```

URL (https://mydomain.com/posts?page=2)
```html
<link rel='canonical' href='https://mydomain.com/posts/?page=2' />
```

Porém, se você não pretende indexar a paginação, basta para todas as alterações no parâmetro page você deixar o mesmo rel=canonical `https://mydomain.com/posts`, informando ao Google que mesmo tendo mudanças nos parâmetros, você deseja sempre que essa (URL) seja a preferencial.

Exemplo de como definir a tag link com o rel=canonical no vue-head:
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

Esse assunto, como a maiora das citadas nesse artigo deverá ter um artigo separado, mas até lá, você pode se aprofundar melhor na (URL) canônica através do [Google support](https://support.google.com/webmasters/answer/139066).

<small>[[&#8593; ÍNDICE]](#table-of-content)</small>

## Sitemap.xml

É um arquivo no formato XML (eXtensible Markup Language) usado para detalhar todos os URLs do seu site, muito importante quando se trata de Single Page Applications, ajudando os mecanismos a saber todas rotas de sua aplicação.

Exemplo da sua estrutura: (by [sitemap.org](https://www.sitemaps.org/protocol.html))
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

Existem geradores automáticos de sitemap.xml para Vue e Nuxt:
- [vue-router-sitemap](https://github.com/40818419/vue-router-sitemap): Generate sitemap.xml by vue-router configuration.
- [sitemap-module](https://github.com/nuxt-community/sitemap-module): Sitemap Module for Nuxt.js

Não é nada complicado criar o seu próprio sitemap.xml e poder indicar de maneira manual quais links você acha relevante para dar de dica para o Google, como, por exemplo [sitemap.xml](https://ktquez.com/sitemaps/sitemap_pt-br.xml) do Ktquez play.

Para criar um sitemap perfeito, você pode ir mais a fundo através do [sitemap.org](https://www.sitemaps.org/protocol.html), aprendi muito por lá.

O sitemap.xml pode ser adicionado no Google através do [Google Search Console](https://www.google.com/webmasters/tools/home) que foi criado para você acompanhar, analisar o tráfego e o desempenho de pesquisa do seu site, corrigir problemas que poderá atrapalhar as indexações, dando dicas e ferramentas para seu site obter os melhores resultados.

Para cadastrar seu sitemap no Google basta:  
Acessar [esse link](https://www.google.com/webmasters/tools) >> menu lateral Rastreamento >> Sitemaps

Clique no botão `ADICIONAR/TESTAR SITEMAP`, assim que você clicar abrirá uma caixa de diálogo solicitando o endereço de onde está seu sitemap.

![Caixa de dialogo para adicionar o endereço do sitemap.xml](/images/posts/2018/9/adicionar-sitemap-google.png)

Em aplicações usando Vue.js normalmente você deve colocar no diretório onde ficará público o acesso ao sitemap.xml, em aplicações construídas com vue-cli 3 e vuepress o diretório ideal é o `/public`. Já no Nuxt.js inserimos no diretório `/static`

![Caixa de dialogo com o endereço do sitemap.xml inserido no campo](/images/posts/2018/9/ktquez-sitemap-adicionado.png)

Depois de você enviar seu sitemap, poderá verificar como anda a indexação de seu site através dos gráficos:

![Gráfico em barra com 2 opções a barra azul (97 enviados) significando as URL enviadas e a barra vermelha (70 indexados) significando as URL indexadas](/images/posts/2018/9/sitemap-google-search-console.png)

Uma coisa que você precisa saber é que o sitemap.xml não faz o Google indexar seu site, mas sim informá-lo (uma dica). O Google irá indexar as páginas que ela achará relevante e que tem qualidade o suficiente para valer a pena indexar.

Vantagens de se ter um sitemap.xml para o seu site:
- Quando você tem páginas dinâmicas;
- Quando você não tem uma boa estrutura com os links internos;
- Quando seu site é novo e você cadastra ele nas ferramentas dos mecanismos de buscas;

<small>[[&#8593; ÍNDICE]](#table-of-content)</small>

## URL segura com HTTPS

Os sites HTTPS (Hypertext Transport Protocol Security) ou humanamente falando sites seguros podem proteger a conexão de um site por meio de criptografia. Mais da metade dos sites atuais estão utilizando HTTPS

Mesmo existindo outros mecanismos de busca o Google é quem encabeçou essa exigência e já comenta que as conexões não criptografadas estão nos dias finais (o Chrome já mostra para o usuário que o site não é seguro quando não criptografado).

A maioria das hospedagens estão disponibilizando como diferencial o certificado SSL, para que seu site já seja publicado com HTTPS, mas se você tiver utilizando servidor próprio, é possível ter de forma gratuita utilizando o projeto [Let’s Encrypt](https://letsencrypt.org/getting-started/), vale a pena conferir.

Usar ou não HTTPS não tem uma correlação direta com o assunto Single Page Applications (SPA), mas é uma prática necessária para qualquer site da web atual.

### Qual o impacto em SEO ao usar HTTPS

#### Ranking
Existe uma correlação entre sites com HTTPS e classificações mais altas nas SERPs, mas sempre combinado com outros fatores (boas práticas de SEO), muitos especialistas o considera uma forma de desempate. [Nesse link](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) você pode ver uma nota do Google sobre esse assunto.

#### Tráfego
Com boa classificação com certeza o tráfego aumentará. Os usuários além de ver seu site nos resultados de busca, verão que seu site é seguro, contra outro que não é, determinando ainda mais a taxa de clique.

---

Fico por aqui, espero que você tenha gostado do post, lido tudo com atenção e aproveitado algo para utilizar em seus sites, essa é a ideia.

Deixa aí nos comentários quais táticas/boas práticas de SEO que você utiliza nos seus sites (Vue.js ou não), que você possa compartilhar conosco.

