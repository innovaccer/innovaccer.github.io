(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=(a(263),a(262)),o=a(260),i=a(237),l=a(466),s=a(467),u=a.n(s);var m=function(){var e=l.data.site,t=e.siteMetadata.description,a=e.siteMetadata,n=a.title,c=a.lang,o=a.keywords,i=void 0===o?[]:o;return r.a.createElement(u.a,{htmlAttributes:{lang:c},title:n,titleTemplate:"%s | "+e.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:n},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:t},{name:"keywords",content:i}]},r.a.createElement("link",{rel:"preconnect",href:"https://api.github.com"}))};t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(m,null),r.a.createElement(o.a,null),r.a.createElement(i.a,null))}},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("div",{className:"Line"})}},211:function(e,t,a){var n;e.exports=(n=a(235))&&n.default||n},212:function(e,t,a){"use strict";a(236);var n=a(0),r=a.n(n),c=function(e){var t=e.nav,a=void 0===t?{}:t,n=a.logo,c=a.link;return r.a.createElement("nav",{className:"NavBar"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{alt:"logo",src:n,className:"NavBar-logo"})),r.a.createElement("a",{target:"__blank",className:"NavBar-link",href:c.url},c.title))};c.defaultProps={nav:{}},t.a=c},213:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(200);t.a=function(e){var t=e.title,a=void 0===t?"":t,n=e.text,o=void 0===n?[]:n;return r.a.createElement("div",{className:"Banner"},r.a.createElement("div",null,r.a.createElement("h1",{className:"Banner-title"},a),r.a.createElement(c.a,null)),o.map(function(e,t){return r.a.createElement("h2",{key:"item-"+t,className:"Banner-text"},e)}))}},214:function(e,t,a){"use strict";a(38);var n=a(0),r=a.n(n),c=a(205),o={linkedin:c.e,twitter:c.f,youtube:c.g,github:c.d,facebook:c.c},i=function(e,t){var a=e.title,n=e.url;return r.a.createElement("a",{key:t,href:n,className:"Footer-link"},a)},l=function(e,t){var a,n,c=e.url,i=e.icon;return r.a.createElement("a",{key:t,href:c,className:"Footer-icon"},(n=o[a=i],r.a.createElement(n,{title:a,role:"link"})))},s=function(e){var t=e.data,a=void 0===t?{}:t,n=a.copyright,c=void 0===n?"":n,o=a.links,s=void 0===o?[]:o,u=a.social,m=void 0===u?[]:u;return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",null,c),r.a.createElement("div",null,s.map(i),m.map(l)))};s.defaultProps={data:{}},t.a=s},215:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.loading;return void 0===t||t?r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"bounce1"}),r.a.createElement("div",{className:"bounce2"}),r.a.createElement("div",{className:"bounce3"})):null}},216:function(e,t,a){"use strict";var n=a(239),r=a.n(n),c=(a(240),a(40),a(13),a(264)),o=a(298),i=a.n(o),l=a(302),s=a.n(l);function u(e,t,a,n,r,c,o){try{var i=e[c](o),l=i.value}catch(s){return void a(s)}i.done?t(l):Promise.resolve(l).then(n,r)}function m(){var e;return e=r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.defineDriver(s.a);case 2:return t=i.a.createInstance({driver:[i.a.INDEXEDDB,i.a.LOCALSTORAGE,s.a._driver],name:"my-cache"}),e.abrupt("return",Object(c.setup)({baseURL:"https://api.github.com/",cache:{maxAge:864e5,store:t,exclude:{query:!1},key:function(e){return e.url+JSON.stringify(e.params)}}}));case 4:case"end":return e.stop()}},e)}),(m=function(){var t=this,a=arguments;return new Promise(function(n,r){var c=e.apply(t,a);function o(e){u(c,n,r,o,i,"next",e)}function i(e){u(c,n,r,o,i,"throw",e)}o(void 0)})}).apply(this,arguments)}t.a=function(){return m.apply(this,arguments)}},221:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(205),o=function(e){var t=e.repo,a=void 0===t?{}:t,n=a.title,o=a.description,i=a.language,l=a.stars,s=a.forks,u=a.url,m=o&&o.length>70?o.slice(0,70)+" ...":o;return r.a.createElement("a",{className:"link-card",href:u,target:"__blank"},r.a.createElement("div",{className:"Repo"},r.a.createElement("h3",{className:"Repo-title"},n),r.a.createElement("div",{className:"Repo-description"},r.a.createElement("p",null,m)),r.a.createElement("div",{className:"Repo-footer"},r.a.createElement("div",{className:"Repo-icon"},r.a.createElement(c.h,null),r.a.createElement("span",{className:"Repo-label"},i)),r.a.createElement("div",{className:"Repo-icon"},r.a.createElement(c.b,null),r.a.createElement("span",{className:"Repo-label"},l)),r.a.createElement("div",{className:"Repo-icon"},r.a.createElement(c.a,null),r.a.createElement("span",{className:"Repo-label"},s)))))};o.defaultProps={repo:{}},t.a=o},233:function(e,t,a){"use strict";a(66),a(13),a(38);var n=a(0),r=a.n(n),c=function(e){var t=e.stars;return r.a.createElement("div",{className:"Profile-star"},r.a.createElement("h3",null,t))};c.defaultProps={stars:0};var o=c,i=function(e){var t=e.profile,a=void 0===t?{}:t,n=a.name,c=void 0===n?"":n,i=a.username,l=void 0===i?"":i,s=a.avatar,u=void 0===s?"":s,m=a.contributions,d=void 0===m?0:m,v=a.profileURL;return r.a.createElement("div",{className:"Profile"},r.a.createElement("div",{className:"Profile-box"},r.a.createElement("a",{href:v},r.a.createElement("img",{src:u,alt:"Profile-avatar",className:"Profile-avatar"}),r.a.createElement(o,{stars:d.toString()}))),r.a.createElement("a",{href:v},r.a.createElement("h3",{className:"Profile-name"},l||c)))};i.defaultProps={profile:{}};t.a=i},234:function(e){e.exports={data:{site:{siteMetadata:{title:"Innovaccer Open-source",nav:{logo:"https://innovaccer.com/static/image/site-logo/innovaccer-logo-black.svg",link:{title:"GO TO INNOVACCER.COM",url:"http://innovaccer.com"}},banner:{title:"open source",text:["OUT WITH CLOSED DEV WORKFLOW.","IN WITH THE FREEDOM TO COLLABORATE"]},footer:{copyright:" © Innovaccer Inc. 2019",links:[{title:"Privacy Policy",url:"https://innovaccer.com/privacy/"},{title:"Terms of Use",url:"https://innovaccer.com/terms-of-use/"}],social:[{title:"Linkedin",url:"https://www.linkedin.com/company/innovaccer",icon:"linkedin"},{title:"twitter",url:"https://twitter.com/innovaccer",icon:"twitter"},{title:"github",url:"https://github.com/innovaccer",icon:"github"},{title:"facebook",url:"https://www.facebook.com/InnovAccer",icon:"facebook"},{title:"youtube",url:"https://www.youtube.com/channel/UCl3JT1Wm_MHu20T37UgZs8w",icon:"youtube"}]}}}}}},235:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),c=a(103);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},237:function(e,t,a){"use strict";a(38),a(40),a(13),a(98);var n=a(238),r=a(0),c=a.n(r),o=a(205),i=a(215),l=a(221),s=a(216);t.a=function(){var e=Object(r.useState)([]),t=e[0],a=e[1],u=Object(r.useState)([]),m=u[0],d=void 0!==m&&m,v=u[1],f=Object(r.useState)([]),p=f[0],E=void 0===p||p,h=f[1],b=Object(r.useState)([]),g=b[0],N=void 0!==g&&g,y=b[1],O=Object(r.useState)([]),k=O[0],w=void 0===k?0:k,P=O[1],j=Object(r.useState)([]),R=j[0],x=void 0===R||R,L=j[1],M=n.data.site.siteMetadata.orgName,S=function(e){void 0===e&&(e=1),Object(s.a)().then(function(e){return e.get("orgs/"+M+"/repos",{params:{type:"sources",sort:"updated"}})}).then(function(t){var n=t.data,r=e+1,c=6*r,o=n.slice(0,c);a(o),P(r),v(!1),n.length<c&&L(!1)}).catch(function(){v(!0)}).finally(function(){h(!1),y(!1)})};Object(r.useEffect)(function(){S(w)},[]);if(!0===d)return c.a.createElement("div",null,"Could not Load profiles.");var I=t;return c.a.createElement("div",{className:"Panel"},c.a.createElement("h1",{className:"Panel-title"},"Our Projects"),E&&c.a.createElement(i.a,{loading:E}),!E&&c.a.createElement("div",{className:"container container--gutter"},I.map(function(e,t){var a=e.name,n=e.description,r=e.forks,o=e.language,i=e.html_url,s={title:a,description:n,language:o,stars:e.stargazers_count,forks:r,url:i};return c.a.createElement("div",{key:"repo-"+t,className:"col-4"},c.a.createElement(l.a,{repo:s}))})),c.a.createElement("div",{className:"Panel-footer"},x&&!0===N&&c.a.createElement(i.a,null),x&&!N&&c.a.createElement("button",{type:"button",className:"LoadMore-button",onClick:function(){y(!0),S(w)}},"LOAD MORE",c.a.createElement(o.i,{className:"LoadMore-icon"}))))}},238:function(e){e.exports={data:{site:{siteMetadata:{orgName:"innovaccer"}}}}},260:function(e,t,a){"use strict";a(303),a(138),a(23),a(40),a(30),a(29),a(13),a(92),a(38);var n=a(261),r=a(0),c=a.n(r),o=a(215),i=a(233),l=a(216);t.a=function(){var e=Object(r.useState)([]),t=e[0],a=e[1],s=Object(r.useState)([]),u=s[0],m=void 0!==u&&u,d=s[1],v=Object(r.useState)([]),f=v[0],p=void 0===f||f,E=v[1],h=n.data.site.siteMetadata.orgName;return Object(r.useEffect)(function(){Object(l.a)().then(function(e){return e.get("orgs/"+h+"/repos",{params:{type:"sources",sort:"updated"}})}).then(function(e){return e.data}).then(function(e,t){var a=t.map(function(t){return Object(l.a)().then(function(a){return a.get("repos/"+e+"/"+t.name+"/contributors")}).then(function(e){var t=e.data;return void 0===t?{}:t})});return Promise.all(a).then(function(e){return e.reduce(function(e,t){return t.forEach(function(t){void 0===t&&(t={}),e[t.login]?e[t.login]=Object.assign({},t,{contribution:t.contribution+1}):e[t.login]=Object.assign({},t,{contribution:t.contributions||1})}),e},{})})}.bind(null,h)).then(function(e){var t=Object.values(e).sort(function(e,t){return t.contributions-e.contributions}).slice(0,5);a(t),E(!1),d(!1)}).catch(function(){E(!1),d(!0)})},[]),!0===m?c.a.createElement("div",null,"Could not Load profiles."):c.a.createElement("div",{className:"Panel"},c.a.createElement("h1",{className:"Panel-title"},"Top contributors"),p&&c.a.createElement(o.a,{loading:p}),!p&&c.a.createElement("div",{className:"Flex-holder"},t.map(function(e,t){var a=e.login,n=e.avatar_url,r=e.html_url,o={username:a,avatar:n,social:{github:r},contributions:e.contributions,profileURL:r};return c.a.createElement(i.a,{key:t,profile:o})})))}},261:function(e){e.exports={data:{site:{siteMetadata:{orgName:"innovaccer"}}}}},262:function(e,t,a){"use strict";var n=a(234),r=a(0),c=a.n(r),o=(a(67),a(211),a(9).default.enqueue,c.a.createContext({}));function i(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,o=a?a.data:t[n]&&t[n].data;return c.a.createElement(c.a.Fragment,null,o&&r(o),!o&&c.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return c.a.createElement(o.Consumer,null,function(e){return c.a.createElement(i,{data:t,query:a,render:n||r,staticQueryData:e})})};var s=a(212),u=a(213),m=a(200),d=a(214);t.a=function(e){var t=e.children;return c.a.createElement(l,{query:"3776125611",render:function(e){var a=e.site,n=(void 0===a?{}:a).siteMetadata,r=void 0===n?{}:n,o=r.nav,i=r.banner,l=r.footer;return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{nav:o}),c.a.createElement(u.a,{title:i.title,text:i.text}),c.a.createElement(m.a,null),c.a.createElement("main",null,t),c.a.createElement(d.a,{data:l}))},data:n})}},466:function(e){e.exports={data:{site:{siteMetadata:{title:"Innovaccer Open-source",description:"Innovaccer open-source",author:"Innovaccer",lang:"en",keywords:"Innovaccer, Open Source"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-fa132c037e441df49462.js.map