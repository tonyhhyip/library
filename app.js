!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="./",e(0)}(function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))switch(typeof t[e]){case"function":break;case"object":t[e]=function(e){var n=e.slice(1),r=t[e[0]];return function(t,e,o){r.apply(this,[t,e,o].concat(n))}}(t[e]);break;default:t[e]=t[t[e]]}return t}([function(t,e,n){t.exports=n(16)},function(t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t,e,r,o){var i,s=t=t||{},a=n(t.default);"object"!==a&&"function"!==a||(i=t,s=t.default);var c="function"==typeof s?s.options:s;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r),o){var u=c.computed||(c.computed={});Object.keys(o).forEach(function(t){var e=o[t];u[t]=function(){return e}})}return{esModule:i,exports:s,options:c}}},function(t,e,n){"use strict";function r(t){return"[object Array]"===k.call(t)}function o(t){return"[object ArrayBuffer]"===k.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){var e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function c(t){return"number"==typeof t}function u(t){return"undefined"==typeof t}function l(t){return null!==t&&"object"===("undefined"==typeof t?"undefined":C(t))}function f(t){return"[object Date]"===k.call(t)}function d(t){return"[object File]"===k.call(t)}function p(t){return"[object Blob]"===k.call(t)}function h(t){return"[object Function]"===k.call(t)}function m(t){return l(t)&&h(t.pipe)}function v(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function y(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function _(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function g(t,e){if(null!==t&&"undefined"!=typeof t)if("object"===("undefined"==typeof t?"undefined":C(t))||r(t)||(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function b(){function t(t,n){"object"===C(e[n])&&"object"===("undefined"==typeof t?"undefined":C(t))?e[n]=b(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)g(arguments[n],t);return e}function w(t,e,n){return g(e,function(e,r){n&&"function"==typeof e?t[r]=x(e,n):t[r]=e}),t}var C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x=n(13),k=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isFormData:i,isArrayBufferView:s,isString:a,isNumber:c,isObject:l,isUndefined:u,isDate:f,isFile:d,isBlob:p,isFunction:h,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:_,forEach:g,merge:b,extend:w,trim:y}},function(t,e,n){var r=n(1)(null,n(79),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(39),n(76),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(40),n(73),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(null,n(75),null,null);t.exports=r.exports},function(t,e,n){(function(e){"use strict";function r(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(9):"undefined"!=typeof e&&(t=n(9)),t}var i=n(2),s=n(34),a=/^\)\]\}',?\n/,c={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:o(),transformRequest:[function(t,e){return s(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t){t=t.replace(a,"");try{t=JSON.parse(t)}catch(t){}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(t){u.headers[t]={}}),i.forEach(["post","put","patch"],function(t){u.headers[t]=i.merge(c)}),t.exports=u}).call(e,n(14))},function(t,e,n){"use strict";t.exports=n(20)},function(t,e,n){(function(e){"use strict";var r=n(2),o=n(26),i=n(29),s=n(35),a=n(33),c=n(12),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(28);t.exports=function(t){return new Promise(function(l,f){var d=t.data,p=t.headers;r.isFormData(d)&&delete p["Content-Type"];var h=new XMLHttpRequest,m="onreadystatechange",v=!1;if("test"===e.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in h||a(t.url)||(h=new window.XDomainRequest,m="onload",v=!0,h.onprogress=function(){},h.ontimeout=function(){}),t.auth){var y=t.auth.username||"",_=t.auth.password||"";p.Authorization="Basic "+u(y+":"+_)}if(h.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,h[m]=function(){if(h&&(4===h.readyState||v)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in h?s(h.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?h.response:h.responseText,r={data:n,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:e,config:t,request:h};o(l,f,r),h=null}},h.onerror=function(){f(c("Network Error",t)),h=null},h.ontimeout=function(){f(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),h=null},r.isStandardBrowserEnv()){var g=n(31),b=(t.withCredentials||a(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;b&&(p[t.xsrfHeaderName]=b)}if("setRequestHeader"in h&&r.forEach(p,function(t,e){"undefined"==typeof d&&"content-type"===e.toLowerCase()?delete p[e]:h.setRequestHeader(e,t)}),t.withCredentials&&(h.withCredentials=!0),t.responseType)try{h.responseType=t.responseType}catch(t){if("json"!==h.responseType)throw t}"function"==typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){h&&(h.abort(),f(t),h=null)}),void 0===d&&(d=null),h.send(d)})}}).call(e,n(14))},function(t,e){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},function(t,e){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";var r=n(25);t.exports=function(t,e,n,o){var i=new Error(t);return r(i,e,n,o)}},function(t,e){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e){"use strict";function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){m&&p&&(m=!1,p.length?h=p.concat(h):v=-1,h.length&&a())}function a(){if(!m){var t=o(s);m=!0;for(var e=h.length;e;){for(p=h,h=[];++v<e;)p&&p[v].run();v=-1,e=h.length}p=null,m=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var p,h=[],m=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new c(t,e)),1!==h.length||m||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){var r=n(1)(null,n(80),null,null);t.exports=r.exports},function(t,e,n){"use strict";window.location.hash.indexOf("%21")>-1&&(window.location.href=window.location.href.replace("%21",""));var r=n(86),o=n(87),i=new o(n(19));i.beforeEach(function(t,e,n){var r=document.querySelector("[data-sidenav]");r&&r.parentNode&&r.parentNode.removeChild(r),n()}),n(38).install(),new r({router:i,mounted:function(){var t=document.getElementById("page-loader");t&&t.parentNode&&t.parentNode.removeChild(t)}}).$mount("#app")},function(t,e,n){"use strict";var r=n(88),o=n(8),i=new r.Renderer,s={"&":"&amp;",">":"&gt;","<":"&lt;"};i.html=function(t){return t.repalce(/[<>&]/g,function(t){return s[t]||t})},r.setOptions({renderer:i}),t.exports=function(t,e){o.get(t).then(function(t){return t.data}).then(function(t){var n=/###\s+(.+)/,o=/!\[([^\]]+)]\(([^)]+)\)/,i=t.match(n),s=t.match(o),a=t.replace(n,"").replace(o,"");e.content=r(a),e.title=i&&i.length>1?i[1].trim():"",e.done=!0,e.image=!!(s&&s.length>1)&&s[2].trim(),e.key=!!(s&&s.length>1)&&s[1].trim()}).catch(function(t){console.error(t.stack),e.title="Opps! Error occur!",e.content='Please check your network or any typing missing in the website. If you confirm no this two,please report it on <a href="https://github.com/spyc/library/issues/new">Github</a> or email to tony@opensource.hk',e.done=!0})}},function(t,e){"use strict";function n(t){return t.split("\t").map(function(t){return t.trim()})}t.exports=function(t){var e=t.split("\n"),r=[],o=n(e.shift());return e.forEach(function(t){t.trim().length>0&&!function(){var e={};n(t).forEach(function(t,n){return e[o[n]]=t}),r.push(e)}()}),r}},function(t,e,n){"use strict";t.exports={routes:[{path:"/",name:"home",component:n(61)},{path:"/books",name:"books",component:n(59)},{path:"/books/:id",name:"book",component:n(57)},{path:"/intro/:section",name:"intro",component:n(56)},{path:"/booklist",name:"booklist",component:n(58)},{path:"/librarian/:section",name:"librarian",component:n(62)},{path:"/service/:section",name:"service",component:n(65)},{path:"/suggestion",name:"suggest",component:n(66),children:[{path:"purchase",component:n(63),name:"purchase"},{path:"guideline",component:n(60),name:"guideline"},{path:"security",component:n(64),name:"security"}]},{path:"*",redirect:{name:"home"}}]}},function(t,e,n){"use strict";function r(t){var e=new s(t),n=i(s.prototype.request,e);return o.extend(n,s.prototype,e),o.extend(n,e),n}var o=n(2),i=n(13),s=n(22),a=n(7),c=r(a);c.Axios=s,c.create=function(t){return r(o.merge(a,t))},c.Cancel=n(10),c.CancelToken=n(21),c.isCancel=n(11),c.all=function(t){return Promise.all(t)},c.spread=n(36),t.exports=c,t.exports.default=c},function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(10);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t,e=new r(function(e){t=e});return{token:e,cancel:t}},t.exports=r},function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=n(7),i=n(2),s=n(23),a=n(24),c=n(32),u=n(30);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!c(t.url)&&(t.url=u(t.baseURL,t.url));var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(2),i=n(27),s=n(11),a=n(7);t.exports=function(t){r(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=t.adapter||a.adapter;return e(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e){"use strict";t.exports=function(t,e,n,r){return t.config=e,n&&(t.code=n),t.response=r,t}},function(t,e,n){"use strict";var r=n(12);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n)):t(n)}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e){"use strict";function n(){this.message="String contains an invalid character"}function r(t){for(var e,r,i=String(t),s="",a=0,c=o;i.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&e>>8-a%1*8)){if(r=i.charCodeAt(a+=.75),r>255)throw new n;e=e<<8|r}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=r},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&"undefined"!=typeof t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(r(e)+"="+r(t))}))}),i=s.join("&")}return i&&(t+=(t.indexOf("?")===-1?"?":"&")+i),t}},function(t,e){"use strict";t.exports=function(t,e){return t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,"")}},function(t,e,n){"use strict";var r=n(2);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";var r=n(2);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}},function(t,e){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e){"use strict";t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e){"use strict";function n(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function r(t){if(t||(t={}),n()){navigator.serviceWorker.register("/sw.js")}else if(window.applicationCache){var e="/appcache/",r="manifest",o=function(){var t=e+r+".html",n=document.createElement("iframe");n.src=t,n.style.display="none",s=n,document.body.appendChild(n)};return void("complete"===document.readyState?setTimeout(o):window.addEventListener("load",o))}}function o(t,e){}function i(){n()&&navigator.serviceWorker.getRegistration().then(function(t){if(t)return t.update()}),s&&s.contentWindow.applicationCache.update()}var s;e.install=r,e.applyUpdate=o,e.update=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(55),i=r(o);e.default={components:{Navbar:i.default},data:function(){return{src:"./images/cover.jpg",home:"home"===this.$route.name}},mounted:function(){this.home&&$(".parallax").parallax()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),i=r(o);e.default={data:function(){return{done:!1,title:"",content:"",image:"",key:""}},props:{url:{type:String,required:!0}},components:{loader:n(15)},mounted:function(){this.fetch()},watch:{url:function(){this.fetch()}},methods:{fetch:function(){if(this.url.trim().length>0){var t="https://spyc.github.io/library-data/"+this.url;(0,i.default)(t,this)}}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(54),i=r(o);e.default={data:function(){var t=this.$route.fullPath.split("/"),e=t&&t.length>1?t[1]:null;return e in i.default?{navs:i.default[e],name:e,nav:i.default}:{navs:!1,nav:i.default}},mounted:function(){$(".button-collapse").sideNav(),$(".collapsible").collapsible();var t=$(document.getElementById("side-nav"));t.delegate("li a:not(.collapsible-header)","click",function(){return t.sideNav("hide")})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={aim:"Aim",about:"About",opening:"Opening",librarian:"Librarian"};e.default={components:{top:n(4),row:n(3),"markdown-card":n(5)},data:function(){var t=this.$route.params.section;return{section:t}},computed:{url:function(){return"introduction/"+r[this.section]+".txt"}},watch:{$route:function(){this.updateCard()}},methods:{updateCard:function(){var t=this.$route.params.section;t in r||this.$router.replace({name:"home"}),this.section=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{url:"books/"+this.$route.params.id+".txt"}},components:{top:n(4),container:n(6),row:n(3),"markdown-card":n(5)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{lists:[{name:"Junior Form Recommended Booklist",file:"JuniorFormRecommended"},{name:"中一級中國語文科廣泛閱讀推薦書目",file:"S1ChineseBookList"},{name:"中二級中國語文科廣泛閱讀推薦書目",file:"S2ChineseBookList"},{name:"中三級中國語文科廣泛閱讀推薦書目",file:"S3ChineseBookList"},{name:"中四及中五級廣泛閱讀優質讀物介紹",file:"S5ChineseBookList"}]}},components:{top:n(4),row:n(3),container:n(6)},methods:{getUrl:function(t){return"https://spyc.github.io/library-data/document/"+t+".pdf"}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),i=r(o),s=n(18),a=r(s);e.default={data:function(){return{done:!1,eng:null,chin:null}},computed:{books:function(){var t={};return this.chin&&(t.Chinese=this.chin),this.eng&&(t.English=this.eng),t}},components:{top:n(4),container:n(6),row:n(3),loader:n(15)},mounted:function(){var t={eng:"https://spyc.github.io/library-data/english.txt",chin:"https://spyc.github.io/library-data/chinese.txt"},e=this,n=function(n){var r=t[n];i.default.get(r).then(function(t){return e.done=!0,t.data}).then(function(t){e[n]=(0,a.default)(t)})};for(var r in t)n(r)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{row:n(3),"markdown-card":n(5)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{top:n(4),container:n(6),row:n(3)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={join:"Join",members:"Members"};e.default={components:{top:n(4),row:n(3),"markdown-card":n(5)},data:function(){var t=this.$route.params.section;return{section:t}},computed:{url:function(){return"content/"+r[this.section]+".txt"}},watch:{$route:function(){this.updateCard()}},methods:{updateCard:function(){var t=this.$route.params.section;t in r||this.$router.replace({name:"home"}),this.section=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{form:"https://nodejs.org"}},components:{row:n(3)}}},46,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={facility:"Facility",readers:"Readers",instruction:"Instruction",collection:"Collection",loan:"Loan"};e.default={components:{top:n(4),row:n(3),"markdown-card":n(5)},data:function(){var t=this.$route.params.section;return{section:t}},computed:{url:function(){return"content/"+r[this.section]+".txt"}},watch:{$route:function(){this.updateCard()}},methods:{updateCard:function(){var t=this.$route.params.section;t in r||this.$router.replace({name:"home"}),this.section=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{top:n(4)}}},function(t,e,n){e=t.exports=n(37)(),e.push([t.id,"iframe[data-v-521185fa]{height:1500px;border:0;margin:0}",""])},function(t,e){t.exports={intro:[{section:"aim",display:"Aim"},{section:"about",display:"About Us"},{section:"opening",display:"Opening Hours"},{section:"librarian",display:"Word of Librarian"}],suggestion:[{name:"purchase",display:"Purchase Suggestion"},{name:"guideline",display:"Suggestion Guide"},{name:"security",display:"Security Vulnerability"}],librarian:[{section:"members",display:"Members"},{section:"join",display:"Join Us"}],service:[{section:"loan",display:"Book Loaning Service"},{section:"collection",display:"Library Collection"},{section:"instruction",display:"Instruction"},{section:"readers",display:"Readers Service"},{section:"facility",display:"Facility"}]}},function(t,e,n){var r=n(1)(n(41),n(78),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(42),n(74),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(43),n(69),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(44),n(81),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(45),n(72),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(46),n(67),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(47),n(83),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(48),n(82),null,null);t.exports=r.exports},function(t,e,n){n(85);var r=n(1)(n(49),n(77),"data-v-521185fa",null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(50),n(71),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(51),n(68),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(52),n(70),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("row",[n("div",{staticClass:"col s12"},[n("markdown-card",{attrs:{url:"content/Suggestion.txt"}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top"),t._v(" "),n("main",{staticClass:"container"},[n("row",[n("div",{staticClass:"col s12"},[n("markdown-card",{attrs:{url:t.url}})],1)])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top"),t._v(" "),n("main",[n("container",[n("row",[n("div",{staticClass:"col s12 l8"},[n("markdown-card",{attrs:{url:t.url}})],1)])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top"),t._v(" "),n("main",{staticClass:"container"},[n("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("row",[n("div",{staticClass:"col s12"},[n("markdown-card",{attrs:{url:"content/Security.txt"}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top"),t._v(" "),n("main",[n("container",[t.done?t._e():n("loader"),t._v(" "),t._l(t.books,function(e,r){return t.done?n("row",[n("div",{staticClass:"col s12"},[n("ul",{staticClass:"collection with-header"},[n("li",{staticClass:"collection-header"},[n("h4",[t._v(t._s(r))])]),t._v(" "),t._l(e,function(e){return n("li",{staticClass:"collection-item"},[e.ID?n("div",[t._v("\n                                "+t._s(e.Title)+"\n                                "),n("small",[t._v(t._s(e.Author))]),t._v(" "),n("router-link",{staticClass:"secondary-content",attrs:{to:{name:"book",params:{id:e.ID}}}},[n("i",{staticClass:"material-icons"},[t._v("send")])])],1):t._e()])})],2)])]):t._e()})],2)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.image?n("div",{staticClass:"card-image"},[n("img",{attrs:{src:t.image,alt:t.key}})]):t._e(),t._v(" "),n("div",{staticClass:"card-content markdown"},[t.done?t._e():n("loader"),t._v(" "),t.done?n("div",{staticClass:"card-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.done?n("div",{domProps:{innerHTML:t._s(t.content)}}):t._e()],1)])},staticRenderFns:[]}},68,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("Navbar"),t._v(" "),t.home?n("div",{staticClass:"parallax-container"},[t._m(0),t._v(" "),n("div",{staticClass:"parallax"},[n("img",{attrs:{src:t.src}})])]):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cover-title"}},[n("h1",[t._v("SPYC Library")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("row",[n("div",{staticClass:"col s12"},[n("iframe",{attrs:{src:t.form}},[t._v("Loading&#8230;")])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:{"nav-extended":t.navs}},[n("div",{staticClass:"nav-wrapper container"},[n("router-link",{staticClass:"brand-logo",attrs:{to:{name:"home"}}},[t._v("SPYC Library")]),t._v(" "),t._m(0),t._v(" "),n("ul",{staticClass:"right hide-on-med-and-down"},[n("li",[n("router-link",{attrs:{to:{name:"intro",params:{section:"aim"}}}},[t._v("\n                    Introduction\n                ")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"books"}}},[t._v("\n                    Book Recommend\n                ")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"booklist"}}},[t._v("\n                    Book List\n                ")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"service",params:{section:"loan"}}}},[t._v("\n                    Service\n                ")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"librarian",params:{section:"members"}}}},[t._v("\n                    Librarian\n                ")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"purchase"}}},[t._v("\n                    Suggestion\n                ")])],1)]),t._v(" "),n("ul",{staticClass:"side-nav",attrs:{id:"side-nav"}},[n("li",[n("router-link",{attrs:{to:{name:"home"}}},[n("i",{staticClass:"material-icons"},[t._v("home")]),t._v("\n                    Home\n                ")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"books"}}},[t._v("\n                    Book Recommend\n                ")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"booklist"}}},[t._v("\n                    Book List\n                ")])],1),t._v(" "),n("li",{staticClass:"no-padding"},[n("ul",{staticClass:"collapsible collapsible-accordion"},[n("li",[t._m(1),t._v(" "),n("div",{staticClass:"collapsible-body"},[n("ul",t._l(t.nav.intro,function(e){return n("li",[n("router-link",{attrs:{to:{name:"intro",params:{section:e.section}}}},[t._v("\n                                        "+t._s(e.display)+"\n                                    ")])],1)}))])]),t._v(" "),n("li",[t._m(2),t._v(" "),n("div",{staticClass:"collapsible-body"},[n("ul",t._l(t.nav.service,function(e){return n("li",[n("router-link",{attrs:{to:{name:"service",params:{section:e.section}}}},[t._v("\n                                        "+t._s(e.display)+"\n                                    ")])],1)}))])]),t._v(" "),n("li",[t._m(3),t._v(" "),n("div",{staticClass:"collapsible-body"},[n("ul",t._l(t.nav.librarian,function(e){return n("li",[n("router-link",{attrs:{to:{name:"librarian",params:{section:e.section}}}},[t._v("\n                                        "+t._s(e.display)+"\n                                    ")])],1)}))])]),t._v(" "),n("li",[t._m(4),t._v(" "),n("div",{staticClass:"collapsible-body"},[n("ul",t._l(t.nav.suggestion,function(e){return n("li",[n("router-link",{attrs:{to:{name:e.name}}},[t._v("\n                                        "+t._s(e.display)+"\n                                    ")])],1)}))])])])])]),t._v(" "),t.navs?n("ul",{staticClass:"nav-tabs tabs-transparent hide-on-med-and-down"},t._l(t.navs,function(e){return n("li",{staticClass:"tab"},["name"in e?n("router-link",{attrs:{"active-class":"active",to:{name:e.name}}},[t._v("\n                    "+t._s(e.display)+"\n                ")]):t._e(),t._v(" "),"section"in e?n("router-link",{
attrs:{"active-class":"active",to:{name:t.name,params:{section:e.section}}}},[t._v("\n                    "+t._s(e.display)+"\n                ")]):t._e()],1)})):t._e()],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"button-collapse",attrs:{href:"#","data-activates":"side-nav"}},[n("i",{staticClass:"material-icons"},[t._v("menu")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"collapsible-header"},[t._v("Introduction "),n("i",{staticClass:"material-icons"},[t._v("arrow_drop_down")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"collapsible-header"},[t._v("Service "),n("i",{staticClass:"material-icons"},[t._v("arrow_drop_down")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"collapsible-header"},[t._v("Librarian "),n("i",{staticClass:"material-icons"},[t._v("arrow_drop_down")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"collapsible-header"},[t._v("Suggestion "),n("i",{staticClass:"material-icons"},[t._v("arrow_drop_down")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[n("div",{staticClass:"preloader-wrapper big active"},[n("div",{staticClass:"spinner-layer spinner-blue"},[n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])]),t._v(" "),n("div",{staticClass:"spinner-layer spinner-red"},[n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])]),t._v(" "),n("div",{staticClass:"spinner-layer spinner-yellow"},[n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])]),t._v(" "),n("div",{staticClass:"spinner-layer spinner-green"},[n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])])]),t._v(" "),n("div",{staticClass:"text"},[t._v("\n        Loading...\n    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top"),t._v(" "),n("main",[n("container",[n("row",[n("div",{staticClass:"col s12"},[n("h4",[t._v("Book List")]),t._v(" "),n("div",{staticClass:"collection"},t._l(t.lists,function(e){return n("a",{staticClass:"collection-item",attrs:{download:t.getUrl(e.file),href:t.getUrl(e.file)}},[t._v("\n                            "+t._s(e.name)+"\n                        ")])}))])])],1)],1)],1)},staticRenderFns:[]}},68,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top"),t._v(" "),n("main",[n("container",[n("row",[n("div",{staticClass:"col s12"},[n("iframe",{attrs:{src:"https://library-spyc-edu-hk.tonyhhyip.me/WebOPAC.exe"}})],1)])],1)],1)],1)},staticRenderFns:[]}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],e))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(c(r.parts[i],e));f[r.id]={id:r.id,refs:1,parts:s}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],s=o[1],a=o[2],c=o[3],u={css:s,media:a,sourceMap:c};n[i]?n[i].parts.push(u):e.push(n[i]={id:i,parts:[u]})}return e}function i(t,e){var n=h(),r=y[y.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function c(t,e){var n,r,o;if(e.singleton){var i=v++;n=m||(m=a(e)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=a(e),r=l.bind(null,n),o=function(){s(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function u(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function l(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,y=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var a=n[s],c=f[a.id];c.refs--,i.push(c)}if(t){var u=o(t);r(u,e)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete f[c.id]}}}};var _=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var r=n(53);"string"==typeof r&&(r=[[t.id,r,""]]);n(84)(r,{});r.locals&&(t.exports=r.locals)},function(t,e){t.exports=Vue},function(t,e){t.exports=VueRouter},function(t,e){t.exports=marked}]));
//# sourceMappingURL=app.js.map