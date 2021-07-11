(()=>{"use strict";var n={735:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const i=o},20:(n,e,r)=>{r.d(e,{Z:()=>Q});var t=r(645),o=r.n(t),i=r(667),a=r.n(i),f=r(575),s=r(217),c=r(198),l=r(103),d=r(109),u=r(573),m=r(373),p=r(65),h=r(767),b=r(254),g=r(941),w=r(293),y=r(237),v=r(451),x=r(162),C=r(651),k=r(212),z=r(553),E=r(878),S=r(104),F=o()((function(n){return n[1]})),I=a()(f),A=a()(s),T=a()(c),R=a()(l),G=a()(d),Z=a()(u),M=a()(m),O=a()(p),j=a()(h),P=a()(b),N=a()(g),L=a()(w),$=a()(y),_=a()(v),B=a()(x),D=a()(C),H=a()(k),U=a()(z),q=a()(E),J=a()(S);F.push([n.id,"@font-face {\r\n  font-family: 'FoundersGrotesk';\r\n  src: url("+I+") format('woff2'),\r\n    url("+A+") format('woff');\r\n  font-weight: 300;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'FoundersGrotesk';\r\n  src: url("+T+") format('woff2'),\r\n    url("+R+") format('woff');\r\n  font-weight: 300;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'FoundersGrotesk';\r\n  src: url("+G+") format('woff2'),\r\n    url("+Z+") format('woff');\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'FoundersGrotesk';\r\n  src: url("+M+") format('woff2'),\r\n    url("+O+") format('woff');\r\n  font-weight: 400;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'FoundersGrotesk';\r\n  src: url("+j+") format('woff2'),\r\n    url("+P+") format('woff');\r\n  font-weight: 500;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'FoundersGrotesk';\r\n  src: url("+N+") format('woff2'),\r\n    url("+L+") format('woff');\r\n  font-weight: 500;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'FoundersGrotesk';\r\n  src: url("+$+") format('woff2'),\r\n    url("+_+") format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'FoundersGrotesk';\r\n  src: url("+B+") format('woff2'),\r\n    url("+D+") format('woff');\r\n  font-weight: 600;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'FoundersGrotesk';\r\n  src: url("+H+") format('woff2'),\r\n    url("+U+") format('woff');\r\n  font-weight: 700;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'FoundersGrotesk';\r\n  src: url("+q+") format('woff2'),\r\n    url("+J+") format('woff');\r\n  font-weight: 700;\r\n  font-style: italic;\r\n}\r\n",""]);const Q=F},426:(n,e,r)=>{r.d(e,{Z:()=>f});var t=r(645),o=r.n(t),i=r(20),a=o()((function(n){return n[1]}));a.i(i.Z),a.push([n.id,"* *,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n  margin: 0;\r\n  height: 100%;\r\n  font-size: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #000000;\r\n  color: #f8f9fa;\r\n\r\n  font-family: FoundersGrotesk, sans-serif;\r\n  font-style: normal;\r\n\r\n  margin: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  #intro {\r\n    font-size: 75%;\r\n    padding: 2.5em 2.5em 2.5em 2.5em;\r\n  }\r\n}\r\n\r\np {\r\n  font-size: 1.8em;\r\n  line-height: 1.0em;\r\n  font-weight: 400;\r\n}\r\n\r\na {\r\n  color: #f8f9fa;\r\n}\r\n\r\na:hover {\r\n  background-color: #f8f9fa;\r\n  color: #000000;\r\n  transition: 0.3s;\r\n}\r\n\r\n#three {\r\n  filter: blur(0.75em);\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#intro {\r\n  position: relative;\r\n  padding: 10% 4em 2em 4em;\r\n}\r\n\r\n#intro h1 {\r\n  font-size: 4.5em;\r\n  font-weight: 400;\r\n  line-height: 0.9em;\r\n  max-width: 17em;\r\n}\r\n\r\n#intro p {\r\n  margin-top: -1em;\r\n}\r\n\r\n.work {\r\n  position: relative;\r\n  padding: 2em 4em 2em 4em;\r\n}\r\n\r\n.work p {\r\n  margin-top: -1em;\r\n}\r\n",""]);const f=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var f=0;f<n.length;f++){var s=[].concat(n[f]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],f=0;f<n.length;f++){var s=n[f],c=t.base?s[0]+t.base:s[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var u=r(d),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(e[u].references++,e[u].updater(m)):e.push({identifier:d,updater:o(m,t),references:1}),a.push(d)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var f=r(i[a]);e[f].references--}for(var s=t(n,o),c=0;c<i.length;c++){var l=r(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},553:(n,e,r)=>{n.exports=r.p+"99670fc4fe6a74601c38.woff"},212:(n,e,r)=>{n.exports=r.p+"a284db4069fc4184fbfd.woff2"},104:(n,e,r)=>{n.exports=r.p+"485b93a9672998de8e49.woff"},878:(n,e,r)=>{n.exports=r.p+"a61a73d355a8987cc609.woff2"},217:(n,e,r)=>{n.exports=r.p+"4bb7faf50a37db156c21.woff"},575:(n,e,r)=>{n.exports=r.p+"651a436f03dceab90edb.woff2"},103:(n,e,r)=>{n.exports=r.p+"9008b9017014205fd135.woff"},198:(n,e,r)=>{n.exports=r.p+"34a29b5b76ad1662041b.woff2"},254:(n,e,r)=>{n.exports=r.p+"1a48c83e92749873209f.woff"},767:(n,e,r)=>{n.exports=r.p+"467d1612e40d7eaf9812.woff2"},293:(n,e,r)=>{n.exports=r.p+"1909d3cc70f8d41230ad.woff"},941:(n,e,r)=>{n.exports=r.p+"3a9acbdd49cb5da3c323.woff2"},573:(n,e,r)=>{n.exports=r.p+"ea45e9b09d6d580bbb84.woff"},109:(n,e,r)=>{n.exports=r.p+"f3ed6ee6a50f07bb6231.woff2"},65:(n,e,r)=>{n.exports=r.p+"28afd598b14b2d2a8be1.woff"},373:(n,e,r)=>{n.exports=r.p+"6ceaa760e1d765d3bb4c.woff2"},451:(n,e,r)=>{n.exports=r.p+"d5b0be9cd0870a1ab508.woff"},237:(n,e,r)=>{n.exports=r.p+"8efb86ce15dd0fb05456.woff2"},651:(n,e,r)=>{n.exports=r.p+"78b638e3b29c4ca2454f.woff"},162:(n,e,r)=>{n.exports=r.p+"c4b49dc24a06a3d11fd2.woff2"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(695),a=r.n(i),f=r(216),s=r.n(f),c=r(426),l={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=r.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=a()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};l.domAPI=o(),l.insertStyleElement=s(),e()(c.Z,l),c.Z&&c.Z.locals&&c.Z.locals;var d=r(735),u={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=r.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=a()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};u.domAPI=o(),u.insertStyleElement=s(),e()(d.Z,u),d.Z&&d.Z.locals&&d.Z.locals})()})();