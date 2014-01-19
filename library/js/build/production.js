/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-hashchange-history-audio-video-input-inputtypes-localstorage-websockets-geolocation-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-css_mediaqueries-css_regions-css_supports-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("regions",function(){var a=Modernizr.prefixed("flowFrom"),b=Modernizr.prefixed("flowInto");if(!a||!b)return!1;var c=document.createElement("div"),d=document.createElement("div"),e=document.createElement("div"),f="modernizr_flow_for_regions_check";d.innerText="M",c.style.cssText="top: 150px; left: 150px; padding: 0px;",e.style.cssText="width: 50px; height: 50px; padding: 42px;",e.style[a]=f,c.appendChild(d),c.appendChild(e),document.documentElement.appendChild(c);var g,h,i=d.getBoundingClientRect();return d.style[b]=f,g=d.getBoundingClientRect(),h=g.left-i.left,document.documentElement.removeChild(c),d=e=c=undefined,h==42}),Modernizr.addTest("supports","CSSSupportsRule"in window);
(function($){/*
 Vanillabox
 (C) 2013 cocopon.

 Licensed under the MIT license:
 http://www.opensource.org/licenses/mit-license.php
*/
var d;function h(){}function k(a,b){return void 0!==a?a:b}function l(a){function b(){}b.prototype=m.prototype;a.prototype=new b}function n(a,b){var c=a.length,e;for(e=0;e<c;e++)b.call(this,a[e],e)}function q(a,b){var c=[],e=a.length,f;for(f=0;f<e;f++)c.push(b.call(this,a[f],f));return c}function r(){var a=new $.Deferred;setTimeout(function(){a.resolve()},0);return a.promise()}function s(){return!!navigator.userAgent.match(/(ipod|iphone|ipad)/ig)};function t(){};var u={ra:function(a){return a.a.show()},ba:function(a){return a.a.hide()},qa:function(a){u.Q(a);return a.a.show()},aa:function(a){return a.a.hide()},Q:function(a){var b=a.f,c=b.p(),e=v(a,c);b.a.css({width:c.width,height:c.height});a.a.css({left:e.left,top:e.top});return r()},pa:function(a){return a.a.show()},$:function(a){return a.a.hide()}},w={ra:function(a){return a.a.fadeIn(200)},ba:function(a){return a.a.fadeOut(300)},ta:function(a,b,c,e){var f=a.f.a;f.stop();b=f.animate({width:b.width,height:b.height},
e);a=a.a;a.stop();c=a.animate({left:c.left,top:c.top},e);return $.when(b,c)},qa:function(a){var b=a.f,c=b.p(),e=v(a,c);b.a.css({width:c.width,height:c.height});a.a.css({left:e.left,top:e.top});return r()},aa:function(){return r()},Q:function(a){var b=a.f.p(),c=v(a,b);return w.ta(a,b,c,300)},pa:function(a){return a.a.fadeIn(200)},$:function(a){return a.a.fadeOut(300)}};var x={none:u,"default":w};function z(){this.c()}d=z.prototype;d.c=function(){var a=$("<div>");a.addClass("vnbx-mask");this.a=a;this.e()};d.b=function(){this.g();this.a=null};d.e=function(){$(window).on("resize",$.proxy(this.H,this));this.a.on("click",$.proxy(this.o,this))};d.g=function(){$(window).off("resize",this.H);this.a.off("click",this.o)};d.B=function(){var a=this.a;a.width("");a.height("");var b=$(window),c=$(document),e=Math.max(c.width(),b.width()),b=Math.max(c.height(),b.height());a.width(e);a.height(b)};d.H=function(){this.B()};
d.o=function(){$(this).trigger("vnbx_click")};function A(a){a=a||{};this.l=k(a.u,w);this.k=k(a.s,"both");this.c()}d=A.prototype;d.c=function(){var a=$("<div>");a.addClass("vnbx-container");this.a=a;this.e()};d.b=function(){this.g();this.a=null};d.e=function(){};d.g=function(){this.w()};d.S=function(){$(this.d).on("vnbx_complete",$.proxy(this.D,this))};d.w=function(){$(this.d).off("vnbx_complete",this.D)};d.p=function(){var a=this.d,b={width:0,height:0};a&&(b=a.p());return{width:Math.max(b.width,200),height:Math.max(b.height,150)}};
function B(a){a.ea={width:!0===a.k||"both"===a.k||"horizontal"===a.k?(window.innerWidth||document.documentElement.clientWidth)-100:Number.MAX_VALUE,height:!0===a.k||"both"===a.k||"vertical"===a.k?(window.innerHeight||document.documentElement.clientHeight)-100:Number.MAX_VALUE};a.d&&C(a)}function C(a){var b=a.ea;a.d.W(Math.max(b.width,200),Math.max(b.height,150))}d.B=function(){var a=this.d,b=a.p();a.a.css({marginLeft:-Math.round(b.width/2),marginTop:-Math.round(b.height/2)})};d.D=function(){this.B()};function D(a){a=a||{};this.f=new A({u:a.u,s:a.s});this.c();this.e()}d=D.prototype;d.c=function(){var a=$("<div>");a.addClass("vnbx-frame");this.a=a;this.a.append(this.f.a)};d.b=function(){this.f.b();this.f=null;this.g();this.a=null};d.e=function(){this.a.on("click",$.proxy(this.o,this))};d.g=function(){this.a.off("click",this.o)};
function v(a,b){var c=a.f.a,e=c.width(),f=c.height();c.width(b.width);c.height(b.height);var g=$(window),p=a.a,y=window.innerWidth||document.documentElement.clientWidth,S=window.innerHeight||document.documentElement.clientHeight,y=Math.round(g.scrollLeft()+(y-p.outerWidth())/2),g=Math.max(Math.round(g.scrollTop()+(S-p.outerHeight())/2),0);c.width(e);c.height(f);return{left:y,top:g}}d.o=function(a){a.stopPropagation()};function m(a){a=a||{};this.sa=this.da=!1;this.oa=a.path;this.Ca=k(a.title,"");this.c()}d=m.prototype;d.c=function(){var a=$("<div>");a.addClass("vnbx-content");this.a=a;this.X();this.e()};d.X=h;d.e=h;d.g=h;d.b=function(){this.g();this.a=null};d.p=function(){var a=this.a;return{width:a.width(),height:a.height()}};d.W=function(a,b){this.a.css({maxWidth:a,maxHeight:b})};d.load=function(){this.a.addClass("vnbx-loading");this.da?E(this,this.sa):this.U()};d.U=h;
function E(a,b){var c=a.a;a.da=!0;a.sa=b;c.removeClass("vnbx-loading");b||c.addClass("vnbx-error");$(a).trigger("vnbx_complete",b)}function F(a){m.call(this,a)}l(F);F.prototype.c=function(){m.prototype.c.call(this);this.a.addClass("vnbx-empty")};F.prototype.load=function(){var a=this;setTimeout(function(){$(a).trigger("vnbx_complete",!0)},0)};function G(a){m.call(this,a)}l(G);d=G.prototype;d.X=function(){var a=$("<img>");this.a.append(a);this.A=a};d.b=function(){m.prototype.b.call(this);this.A=null};
d.e=function(){var a=this.A;a.on("load",$.proxy(this.G,this));a.on("error",$.proxy(this.F,this))};d.g=function(){var a=this.A;a.off("load",this.G);a.off("error",this.F)};d.W=function(a,b){this.A.css({maxWidth:a,maxHeight:b})};d.U=function(){this.A.attr("src",this.oa)};d.G=function(){E(this,!0)};d.F=function(){E(this,!1)};function H(a){a=a||{};this.ya=a.J;this.xa=a.I;m.call(this,a)}l(H);d=H.prototype;d.X=function(){var a=$("<iframe>");a.attr("frameborder",0);this.a.append(a);this.m=a};
d.b=function(){m.prototype.b.call(this);this.m=null};d.e=function(){var a=this.m;a.on("load",$.proxy(this.G,this));a.on("error",$.proxy(this.F,this))};d.g=function(){var a=this.m;a.off("load",this.G);a.off("error",this.F)};d.p=function(){var a=s()?this.a:this.m;return{width:a.width(),height:a.height()}};d.W=function(a,b){(s()?this.a:this.m).css({maxWidth:a,maxHeight:b})};d.U=function(){this.m.attr("src",this.oa)};
d.G=function(){if(this.m.attr("src")){var a=s()?this.a:this.m;a.width(this.ya);a.height(this.xa);E(this,!0)}};d.F=function(){E(this,!1)};var I={image:function(a){return new G({path:a.attr("href"),title:a.attr("title")})},iframe:function(a,b){return new H({path:a.attr("href"),J:b.J,I:b.I,title:a.attr("title")})}};function J(a){a=a||{};this.q=k(a.Da,1);this.t=k(a.loop,!1);K(this,k(a.page,0))}function K(a,b){var c=a.h,e=a.q,e=Math.min(Math.max(b,0),e-1);a.h=e;c!==e&&$(a).trigger("vnbx_change")}J.prototype.next=function(){var a=this.q,b=this.h,c=b+1;c>a-1&&(c=this.t?0:a-1);this.h=c;b!==c&&$(this).trigger("vnbx_change")};J.prototype.L=function(){var a=this.q,b=this.h,c=b-1;0>c&&(c=this.t?a-1:0);this.h=c;b!==c&&$(this).trigger("vnbx_change")};function L(a){this.v=a.r;this.T=k(a.disabled,!1);this.c()}d=L.prototype;d.c=function(){var a=$("<div>");a.addClass("vnbx-button");this.v&&a.addClass(this.v);a.attr("ontouchstart","void(0)");this.a=a;this.e()};d.b=function(){this.a=null};d.e=function(){this.a.on("click",$.proxy(this.o,this))};d.g=function(){this.a.off("click",this.o)};function M(a,b){var c=a.a;a.T=b;a.T?c.addClass("vnbx-disabled"):c.removeClass("vnbx-disabled")}d.o=function(a){a.stopPropagation();this.T||$(this).trigger("vnbx_click")};function N(a){this.v=a.r;this.c()}N.prototype.c=function(){var a=$("<div>");a.addClass("vnbx-label");this.v&&a.addClass(this.v);this.a=a};N.prototype.b=function(){this.a=null};function O(a){if(!a.Y||0===a.Y.length)throw new t;this.R=!1;this.M=a.Y;this.l=k(a.u,w);this.Aa=a.za;this.Ba=a.wa;this.N=a.ua;this.k=a.s;this.va={J:a.J,I:a.I,type:a.type};this.j=new J({loop:a.loop,Da:this.M.length});this.c()}d=O.prototype;
d.c=function(){var a=this,b=new z,c=b.a;c.addClass("vnbx");c.hide();$("body").append(c);a.n=b;P(a);var e=new D({u:a.l,s:a.k}),b=e.a;a.i=e;c.append(b);c=new N({r:"vnbx-title"});a.Z=c;b.append(c.a);c=new N({r:"vnbx-pager"});a.V=c;b.append(c.a);c=new L({r:"vnbx-prev"});a.K=c;b.append(c.a);c=new L({r:"vnbx-next"});a.C=c;b.append(c.a);c=new L({r:"vnbx-close"});a.N||c.a.hide();a.O=c;b.append(c.a);a.e();b=q(a.M,function(b){b=$(b);var c=a.va,e=I[c.type];if(!e)throw new t;return e(b,c)});a.P=b;b=new F;Q(a,
b)};function P(a){var b=a.n.a;s()&&b.addClass("vnbx-ios");a.N&&b.addClass("vnbx-close-button-enabled");1<a.j.q&&b.addClass("vnbx-group")}d.b=function(){R(this);this.g();n(this.P,function(a){a.b()});this.P=null;this.Z.b();this.Z=null;this.V.b();this.V=null;this.O.b();this.O=null;this.K.b();this.K=null;this.C.b();this.C=null;this.i.b();this.i=null;this.n.a.remove();this.n.b();this.n=null};
d.e=function(){this.M.on("click",$.proxy(this.ma,this));$(this.n).on("vnbx_click",$.proxy(this.ia,this));$(this.j).on("vnbx_change",$.proxy(this.ka,this));$(this.O).on("vnbx_click",$.proxy(this.fa,this));$(this.K).on("vnbx_click",$.proxy(this.la,this));$(this.C).on("vnbx_click",$.proxy(this.ja,this))};
d.g=function(){this.M.off("click",this.ma);$(this.n).off("vnbx_click",this.ia);$(this.j).off("vnbx_change",this.ka);$(this.O).off("vnbx_click",this.fa);$(this.K).off("vnbx_click",this.la);$(this.C).off("vnbx_click",this.ja);this.w();this.d=null};function T(a){var b=$(window),c=$(document);b.on("resize",$.proxy(a.H,a));b.on("scroll",$.proxy(a.na,a));c.on("keyup",$.proxy(a.ha,a))}function R(a){var b=$(window),c=$(document);b.off("resize",a.H,a);b.off("scroll",a.na,a);c.off("keyup",a.ha,a)}
d.S=function(){var a=this.i.f.d,b=a.a;$(a).on("vnbx_complete",$.proxy(this.D,this));b.on("click",$.proxy(this.ga,this))};d.w=function(){var a=this.i.f.d,b=a.a;$(a).off("complete",this.D);b.off("click",this.ga)};d.show=function(a){var b=this,c=b.l;if(b.R)return r();b.R=!0;T(b);B(b.i.f);var e=b.n;e.B();var e=c.ra(e),c=c.qa(b.i),f=b.j;a=k(a,0);var g=a!==f.h;K(f,a);g||U(b);return $.when(e,c).then(function(){$(b).trigger("vnbx_show")})};
d.hide=function(){var a=this;return a.R?$.when(a.l.aa(a.i),a.l.ba(a.n)).then(function(){R(a);a.R=!1;$(a).trigger("vnbx_hide")}):r()};d.L=function(){this.j.L()};d.next=function(){this.j.next()};function Q(a,b){var c=a.i.f,e=a.i.f.d;if(e!==b){e&&a.w();e=c.l;c.d&&(c.w(),e.$(c.d));c.d=b;c.S();c.ea&&C(c);var f=c.a,g=c.d.a,p=f.find("> *");0===p.length?f.append(g):g.insertBefore(p.first());e.pa(c.d);a.S();a.Z.a.text(b.Ca);b.load()}c.B()}
function U(a){var b=a.j;a.V.a.text(String(b.h+1)+" of "+String(b.q));M(a.K,!(b.t||0<b.h));M(a.C,!(b.t||b.h<b.q-1));Q(a,a.P[a.j.h])}function V(a){a.ca&&clearTimeout(a.ca);a.ca=setTimeout(function(){a.Aa&&a.l.Q(a.i)},300)}d.H=function(){V(this)};d.na=function(){V(this)};d.ha=function(a){if(this.Ba)switch(a.keyCode){case 27:this.hide();break;case 37:this.L();break;case 39:this.next()}};d.ma=function(a){var b=this.M.index(a.delegateTarget);0>b||(a.preventDefault(),this.show(b))};d.ka=function(){U(this)};
d.ia=function(){this.N||this.hide()};d.fa=function(){this.N&&this.hide()};d.la=function(){this.L()};d.ja=function(){this.next()};d.D=function(a,b){this.l.Q(this.i);var c=a.target,e;a:{e=this.P;var f=e.length,g;for(g=0;g<f;g++)if(e[g]===c){e=g;break a}e=-1}0<=e&&$(this).trigger("vnbx_load",[b,c,e])};d.ga=function(a){var b=this.j;a.stopPropagation();b.t||b.h<b.q-1?this.next():this.hide()};var W={animation:"default",closeButton:!1,adjustToWindow:"both",keyboard:!0,loop:!1,preferredHeight:600,preferredWidth:800,repositionOnScroll:!1,type:"image"};$.fn.Ea=function(a){var b={};$.extend(b,W);$.extend(b,a);a=$(this);return new O({u:x[b.animation]||w,ua:b.closeButton,s:b.adjustToWindow,wa:b.keyboard,loop:b.loop,I:b.preferredHeight,J:b.preferredWidth,za:b.repositionOnScroll,Y:a,type:b.type})};$.fn.vanillabox=$.fn.Ea;O.prototype.dispose=O.prototype.b;O.prototype.hide=O.prototype.hide;O.prototype.next=O.prototype.next;O.prototype.previous=O.prototype.L;O.prototype.show=O.prototype.show;})(jQuery);


/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */(function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.util.clone(e[i]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n)r[i]=n[i];return r},insertBefore:function(e,n,r,i){i=i||t.languages;var s=i[e],o={};for(var u in s)if(s.hasOwnProperty(u)){if(u==n)for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a]);o[u]=s[u]}return i[e]=o},DFS:function(e,n){for(var r in e){n.call(e,r,e[r]);t.util.type(e)==="Object"&&t.languages.DFS(e[r],n)}}},highlightAll:function(e,n){var r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,s;s=r[i++];)t.highlightElement(s,e===!0,n)},highlightElement:function(r,i,s){var o,u,a=r;while(a&&!e.test(a.className))a=a.parentNode;if(a){o=(a.className.match(e)||[,""])[1];u=t.languages[o]}if(!u)return;r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;a=r.parentNode;/pre/i.test(a.nodeName)&&(a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var f=r.textContent;if(!f)return;f=f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var l={element:r,language:o,grammar:u,code:f};t.hooks.run("before-highlight",l);if(i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data),o);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(l.element);t.hooks.run("after-highlight",l)};c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else{l.highlightedCode=t.highlight(l.code,l.grammar,l.language);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(r);t.hooks.run("after-highlight",l)}},highlight:function(e,r,i){return n.stringify(t.tokenize(e,r),i)},tokenize:function(e,n,r){var i=t.Token,s=[e],o=n.rest;if(o){for(var u in o)n[u]=o[u];delete n.rest}e:for(var u in n){if(!n.hasOwnProperty(u)||!n[u])continue;var a=n[u],f=a.inside,l=!!a.lookbehind,c=0;a=a.pattern||a;for(var h=0;h<s.length;h++){var p=s[h];if(s.length>e.length)break e;if(p instanceof i)continue;a.lastIndex=0;var d=a.exec(p);if(d){l&&(c=d[1].length);var v=d.index-1+c,d=d[0].slice(c),m=d.length,g=v+m,y=p.slice(0,v+1),b=p.slice(g+1),w=[h,1];y&&w.push(y);var E=new i(u,f?t.tokenize(d,f):d);w.push(E);b&&w.push(b);Array.prototype.splice.apply(s,w)}}}return s},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[];r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(!r||!r.length)return;for(var i=0,s;s=r[i++];)s(n)}}},n=t.Token=function(e,t){this.type=e;this.content=t};n.stringify=function(e,r,i){if(typeof e=="string")return e;if(Object.prototype.toString.call(e)=="[object Array]")return e.map(function(t){return n.stringify(t,r,e)}).join("");var s={type:e.type,content:n.stringify(e.content,r,i),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:i};s.type=="comment"&&(s.attributes.spellcheck="true");t.hooks.run("wrap",s);var o="";for(var u in s.attributes)o+=u+'="'+(s.attributes[u]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+o+">"+s.content+"</"+s.tag+">"};if(!self.document){self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.tokenize(i,t.languages[r])));self.close()},!1);return}var r=document.getElementsByTagName("script");r=r[r.length-1];if(r){t.filename=r.src;document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)}})();;
Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi};Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/ig,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g};Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}});;
Prism.languages.css.selector={pattern:/[^\{\}\s][^\{\}]*(?=\s*\{)/g,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/g,"pseudo-class":/:[-\w]+(?:\(.*\))?/g,"class":/\.[-:\.\w]+/g,id:/#[-:\.\w]+/g}};Prism.languages.insertBefore("css","ignore",{hexcode:/#[\da-f]{3,6}/gi,entity:/\\[\da-f]{1,8}/gi,number:/[\d%\.]+/g,"function":/(attr|calc|cross-fade|cycle|element|hsla?|image|lang|linear-gradient|matrix3d|matrix|perspective|radial-gradient|repeating-linear-gradient|repeating-radial-gradient|rgba?|rotatex|rotatey|rotatez|rotate3d|rotate|scalex|scaley|scalez|scale3d|scale|skewx|skewy|skew|steps|translatex|translatey|translatez|translate3d|translate|url|var)/ig});;
Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/ig,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/ig,inside:{punctuation:/\(/}}, number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};
;
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|throw|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g});Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}});Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}});
;
Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,lookbehind:!0},atrule:/@[\w-]+(?=\s+(\(|\{|;))/gi,url:/([-a-z]+-)*url(?=\()/gi,selector:/([^@;\{\}\(\)]?([^@;\{\}\(\)]|&amp;|\#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm});Prism.languages.insertBefore("scss","atrule",{keyword:/@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return)|(?=@for\s+\$[-_\w]+\s)+from/i});Prism.languages.insertBefore("scss","property",{variable:/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i});Prism.languages.insertBefore("scss","ignore",{placeholder:/%[-_\w]+/i,statement:/\B!(default|optional)\b/gi,"boolean":/\b(true|false)\b/g,"null":/\b(null)\b/g,operator:/\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g});
;
(function(){if(!self.Prism)return;var e=/\b([a-z]{3,7}:\/\/|tel:)[\w-+%~/.:]+/,t=/\b\S+@[\w.]+[a-z]{2}/,n=/\[([^\]]+)]\(([^)]+)\)/,r=["comment","url","attr-value","string"];for(var i in Prism.languages){var s=Prism.languages[i];Prism.languages.DFS(s,function(i,s){if(r.indexOf(i)>-1){s.pattern||(s=this[i]={pattern:s});s.inside=s.inside||{};i=="comment"&&(s.inside["md-link"]=n);s.inside["url-link"]=e;s.inside["email-link"]=t}});s["url-link"]=e;s["email-link"]=t}Prism.hooks.add("wrap",function(e){if(/-link$/.test(e.type)){e.tag="a";var t=e.content;if(e.type=="email-link")t="mailto:"+t;else if(e.type=="md-link"){var r=e.content.match(n);t=r[2];e.content=r[1]}e.attributes.href=t}})})();
;

/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
	window.getComputedStyle = function(el, pseudo) {
		this.el = el;
		this.getPropertyValue = function(prop) {
			var re = /(\-([a-z]){1})/g;
			if (prop == 'float') prop = 'styleFloat';
			if (re.test(prop)) {
				prop = prop.replace(re, function () {
					return arguments[2].toUpperCase();
				});
			}
			return el.currentStyle[prop] ? el.currentStyle[prop] : null;
		}
		return this;
	}
}

// as the page loads, call these scripts
jQuery(document).ready(function($) {
	
	/*
	Responsive jQuery is a tricky thing.
	There's a bunch of different ways to handle
	it, so be sure to research and find the one
	that works for you best.
	*/
	
	/* getting viewport width */
	var responsive_viewport = $(window).width();
	

	/* if is below 481px */
	if (responsive_viewport < 481) {
	
	} /* end smallest screen */
	

	/* if is larger than 481px */
	if (responsive_viewport > 481) {

	
	} /* end larger than 481px */
	

	/* if is above or equal to 768px */
	if (responsive_viewport >= 768) {
	
		/* load gravatars */
		$('.comment img[data-gravatar]').each(function(){
			$(this).attr('src',$(this).attr('data-gravatar'));
		});
		
	}
	
	/* off the bat large screen actions */
	if (responsive_viewport > 1030) {
		
	}
	
 

    // Coupla plugins
    if ( $('.gallery').length > 0 ) {
    	$('.gallery a').vanillabox();	
    }

    // Fade in a couple of images
    // $('.fadein').delay(100).fadeIn('fast');
    

    // $(".fadein").bind("load", function () { $(this).fadeIn(300); });

	// Brad Frost toggle menu
	// 
	$('body').addClass('js');
	var $menu = $('#menu'),
	$menulink = $('.menu-link');
  
	$menulink.click(function() {
  		$menulink.toggleClass('active');
  		$menu.toggleClass('active');
  		return false;
	});


    // Check if media is already wrapped in a fig,
    // if not, wrap to make it fluid.

    var $wrap = $('.media-wrap');
    var $media = $('iframe, object, embed');
    
    if ( ! $media.parent().is($wrap) ) {
    	$media.wrap( '<figure class="media-wrap"></figure>' );
    }


	// SVG fallback
    // http://css-tricks.com/using-svg/

    if (!Modernizr.svg) {
    	$("#weFish").attr("src", "site/me-fish.png");
		$("#youFish").attr("src", "site/you-fish.png");
		$("#deliverFish").attr("src", "site/deliver-fish.png");
		$("#weFish").attr("src", "site/we-fish.png");
	}

	// Scroll top arrow

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});




}); /* end of as page load scripts */


/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
	var doc = w.document;
	if( !doc.querySelector ){ return; }
	var meta = doc.querySelector( "meta[name=viewport]" ),
		initialContent = meta && meta.getAttribute( "content" ),
		disabledZoom = initialContent + ",maximum-scale=1",
		enabledZoom = initialContent + ",maximum-scale=10",
		enabled = true,
		x, y, z, aig;
	if( !meta ){ return; }
	function restoreZoom(){
		meta.setAttribute( "content", enabledZoom );
		enabled = true; }
	function disableZoom(){
		meta.setAttribute( "content", disabledZoom );
		enabled = false; }
	function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
		if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );