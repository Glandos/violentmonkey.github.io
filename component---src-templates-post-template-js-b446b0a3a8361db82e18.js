(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2tnj":function(e,t,n){e.exports={toc:"style-module--toc--2GXz7",list:"style-module--list--e7akV"}},Dvwr:function(e,t,n){e.exports={main:"style-module--main--3W7gi",header:"style-module--header--3lkzr",date:"style-module--date--326Xm",toc:"style-module--toc--2Mpv3",body:"style-module--body--71g5N"}},J4bc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P})),n.d(t,"pageQuery",(function(){return R}));var r=n("TJpk"),a=n.n(r),o=n("q1tI"),i=n.n(o),l=n("sWYD"),s=(n("sC2a"),n("v9g0"),n("HQhv"),n("YbXK"),n("cFtU"),n("v60C")),u=n("2tnj"),c=n.n(u);function d(e){var t=e.className,n=e.data,r=Object(o.useRef)();Object(o.useEffect)((function(){if(n){var t=Array.from(r.current.querySelectorAll("a"));t.forEach((function(e){e.dataset.id=decodeURIComponent(e.href.split("#")[1]||"")}));return Object(s.a)((function(){var n=e.articleRef;if(n.current&&r.current){var a=document.body.scrollTop,o=Array.from(n.current.children,(function(e){return e.id&&{id:e.id,offset:e.getBoundingClientRect().top-a-70}})).filter(Boolean),i=(o.find((function(e,t){var n=o[t+1];return n&&n.offset>0}))||{}).id;t.forEach((function(e){e.className=e.dataset.id===i?"active":""}))}}))}}));var a=n.replace(/&#x3C;/gi,"<");return i.a.createElement("section",{className:c.a.toc+" "+(t||"")},n&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Table of Contents"),i.a.createElement("div",{ref:r,className:c.a.list,dangerouslySetInnerHTML:{__html:a}})))}n("E5k/"),n("pJf4"),n("q8oJ"),n("8npG"),n("rzGZ"),n("m210"),n("4DPX");var f=n("jcn7"),m=n("RPjP"),p=n.n(m),y=n("Wbzz");function b(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(h(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(h(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.onSnackbarDismiss=function(){var e=this.state.toasts;this.setState({toasts:e.slice(1)})},a.notifyAboutComment=function(){var e=this.state.toasts;this.setState({toasts:[].concat(b(e),[{text:"New comment available!!"}])})},a.render=function(){var e=this.props,t=e.postNode,n=e.data.site.siteMetadata;if(!n.disqusShortname)return null;var r=t.frontmatter,a=n.siteUrl+t.fields.slug;return i.a.createElement(p.a,{shortname:n.disqusShortname,identifier:r.title,title:r.title,url:a,onNewComment:this.notifyAboutComment})},r}(o.Component),w=function(e){return i.a.createElement(y.StaticQuery,{query:"603837115",render:function(t){return i.a.createElement(v,Object.assign({},e,{data:t}))},data:f})},E=n("h716"),k=n.n(E);function j(e){var t=e.tags,n=e.tagSlugs;return(null==n?void 0:n.length)?i.a.createElement("ul",{className:k.a.list},n.map((function(e,n){return i.a.createElement("li",{className:k.a.item,key:e},i.a.createElement(y.Link,{to:e},t[n]))}))):null}n("zGcK"),n("Ll4R");var S=n("aulm"),O=n("Vo7p"),N=n.n(O);function C(e){var t=e.active,n=e.data.allMarkdownRemark.edges,r=Object(o.useMemo)((function(){if(null==t?void 0:t.match)return n.filter((function(e){var n;return(null==(n=e.node.frontmatter.sidebar)?void 0:n.match)===t.match})).sort((function(e,t){return e.node.frontmatter.sidebar.order-t.node.frontmatter.sidebar.order}))}),[null==t?void 0:t.match]);return i.a.createElement("aside",{className:N.a.sidebar},r&&i.a.createElement("ul",null,r.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(y.Link,{to:e.node.fields.slug,activeClassName:N.a.active},e.node.frontmatter.title))}))))}var _=function(e){return i.a.createElement(y.StaticQuery,{query:"2236896661",render:function(t){return i.a.createElement(C,Object.assign({},e,{data:t}))},data:S})},q=n("Dvwr"),M=n.n(q);function D(e){var t=e.data.markdownRemark,n=t.frontmatter,r=n.title,a=n.date,s=n.tags,u=n.sidebar,c=t.fields,f=c.tagSlugs,m=c.type,p=t.html,y=t.tableOfContents,b=i.a.createElement(w,{postNode:t}),g=Object(o.useRef)();return i.a.createElement(i.a.Fragment,null,i.a.createElement(_,{active:u}),i.a.createElement("main",{className:"flex-1 "+M.a.main},i.a.createElement("section",{className:M.a.header},i.a.createElement("h1",null,r)),i.a.createElement("section",{className:M.a.body},i.a.createElement(d,{className:M.a.toc,data:y,articleRef:g}),i.a.createElement("article",{ref:g,dangerouslySetInnerHTML:{__html:p}})),i.a.createElement("section",null,i.a.createElement("hr",null),"posts"===m&&i.a.createElement("div",{className:M.a.date},i.a.createElement("em",null,"Published at ",Object(l.a)(new Date(a),"MMMM d, yyyy"))),i.a.createElement(j,{tags:s,tagSlugs:f})),b))}function P(e){var t=e.data,n=t.site.siteMetadata.title,r=t.markdownRemark.frontmatter.title;return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{defer:!1},i.a.createElement("title",null,r+" - "+n)),i.a.createElement(D,{data:t}))}var R="259352093"},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("sC2a"),n("JHok"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("U6Bt"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n("q1tI")),i=l(n("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=["shortname","identifier","title","url","category_id","onNewComment","language"],d=!1;function f(e,t){var n=t.onNewComment,r=t.language,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var o in a)e.page[o]=a[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var m=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return c.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!d){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),d=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};c.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){f(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){f(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);m.displayName="DisqusThread",m.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},m.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=m},Vo7p:function(e,t,n){e.exports={sidebar:"style-module--sidebar--3_yNt",active:"style-module--active--28mqm"}},aulm:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"GM_* APIs","sidebar":null},"fields":{"slug":"/api/gm/"}}},{"node":{"frontmatter":{"title":"Violentmonkey API","sidebar":null},"fields":{"slug":"/api/"}}},{"node":{"frontmatter":{"title":"Matching","sidebar":null},"fields":{"slug":"/api/matching/"}}},{"node":{"frontmatter":{"title":"Metadata Block","sidebar":null},"fields":{"slug":"/api/metadata-block/"}}},{"node":{"frontmatter":{"title":"FAQ","sidebar":null},"fields":{"slug":"/faq/"}}},{"node":{"frontmatter":{"title":"Get Violentmonkey","sidebar":null},"fields":{"slug":"/get-it/"}}},{"node":{"frontmatter":{"title":"Localization","sidebar":null},"fields":{"slug":"/localization/"}}},{"node":{"frontmatter":{"title":"Privacy Policy","sidebar":null},"fields":{"slug":"/privacy/"}}},{"node":{"frontmatter":{"title":"How to create a userscript","sidebar":{"match":"/guide/","order":0}},"fields":{"slug":"/guide/creating-a-userscript/"}}},{"node":{"frontmatter":{"title":"How to use modern syntax in a userscript","sidebar":{"match":"/guide/","order":1}},"fields":{"slug":"/guide/using-modern-syntax/"}}},{"node":{"frontmatter":{"title":"Violentmonkey","sidebar":null},"fields":{"slug":"/"}}},{"node":{"frontmatter":{"title":"Inject scripts into different contexts","sidebar":null},"fields":{"slug":"/posts/inject-into-context/"}}},{"node":{"frontmatter":{"title":"Inject scripts with Blob URLs","sidebar":null},"fields":{"slug":"/posts/inject-scripts-with-blob-urls/"}}},{"node":{"frontmatter":{"title":"Smart rules for blacklist","sidebar":null},"fields":{"slug":"/posts/smart-rules-for-blacklist/"}}},{"node":{"frontmatter":{"title":"How to edit scripts with your favorite editor?","sidebar":null},"fields":{"slug":"/posts/how-to-edit-scripts-with-your-favorite-editor/"}}}]}}}')},h716:function(e,t,n){e.exports={list:"style-module--list--3cQ1g",item:"style-module--item--ZsRUq"}},jcn7:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"disqusShortname":"","siteUrl":"https://violentmonkey.github.io"}}}}')}}]);
//# sourceMappingURL=component---src-templates-post-template-js-b446b0a3a8361db82e18.js.map