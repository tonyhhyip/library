!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/js",e(0)}(function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))switch(typeof t[e]){case"function":break;case"object":t[e]=function(e){var n=e.slice(1),r=t[e[0]];return function(t,e,i){r.apply(this,[t,e,i].concat(n))}}(t[e]);break;default:t[e]=t[t[e]]}return t}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(58),a=r(i),o=n(60),s=r(o),c=n(59),u=r(c);location.hash.indexOf("%21")>-1&&(location.href=location.href.replace("%21","")),a.default.use(u.default);var l=new s.default(n(10));new a.default({router:l,mounted:function(){var t=document.getElementById("page-loader");t.parentNode.removeChild(t)}}).$mount("#app")},function(t,e,n){var r,i,a=n(50);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(12);var a=n(52);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(13);var a=n(40);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){"use strict";var r=n(6);t.exports=function(t){var e=r[t],n={};return e.forEach(function(t){return n["name"in t?t.name:t.section]=t.display}),n}},function(t,e,n){var r,i,a=n(46);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e){t.exports={intro:[{section:"aim",display:"Aim"},{section:"about",display:"About Us"},{section:"opening",display:"Opening Hours"},{section:"librarian",display:"Word of Librarian"}],suggestion:[{name:"purchase",display:"Purchase Suggestion"},{name:"guideline",display:"Suggestion Guide"},{name:"security",display:"Security Vulnerability"}],librarian:[{section:"members",display:"Members"},{section:"join",display:"Join Us"}],service:[{section:"loan",display:"Book Loaning Service"},{section:"collection",display:"Library Collection"},{section:"instruction",display:"Instruction"},{section:"readers",display:"Readers Service"},{section:"facility",display:"Facility"}]}},function(t,e,n){var r,i,a=n(48);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(61),a=r(i);t.exports=function(t,e){e.$http.get(t).then(function(t){return t.text()}).then(function(t){var n=/###\s+(.+)/,r=/!\[([^\]]+)]\(([^)]+)\)/,i=t.match(n),o=t.match(r),s=t.replace(n,"").replace(r,"");e.content=(0,a.default)(s),e.title=i&&i.length>1?i[1].trim():"",e.done=!0,e.image=!!(o&&o.length>1)&&o[2].trim(),e.key=!!(o&&o.length>1)&&o[1].trim()}).catch(function(t){console.error(t.stack),e.title="Opps! Error occur!",e.content='Please check your network or any typing missing in the website. If you confirm no this two,please report it on <a href="https://github.com/spyc/library/issues/new">Github</a> or email to tony@opensource.hk',e.done=!0})}},function(t,e){"use strict";function n(t){return t.split("\t").map(function(t){return t.trim()})}t.exports=function(t){var e=t.split("\n"),r=[],i=n(e.shift());return e.forEach(function(t){t.trim().length>0&&!function(){var e={};n(t).forEach(function(t,n){return e[i[n]]=t}),r.push(e)}()}),r}},function(t,e,n){"use strict";t.exports={routes:[{path:"/",name:"home",component:n(33)},{path:"/books",name:"books",component:n(31)},{path:"/books/:id",name:"book",component:n(29)},{path:"/intro/:section",name:"intro",component:n(28)},{path:"/booklist",name:"booklist",component:n(30)},{path:"/librarian/:section",name:"librarian",component:n(34)},{path:"/service/:section",name:"service",component:n(37)},{path:"/suggestion",name:"suggest",component:n(38),children:[{path:"purchase",component:n(35),name:"purchase"},{path:"guideline",component:n(32),name:"guideline"},{path:"security",component:n(36),name:"security"}]},{path:"*",redirect:{name:"home"}}]}},function(t,e){"use strict";t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(27),a=r(i);e.default={props:["title"],components:{Navbar:a.default},data:function(){return{src:"./images/cover.jpg"}},mounted:function(){$(".parallax").parallax()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),a=r(i);e.default={data:function(){return{done:!1,title:"",content:"",image:"",key:""}},props:{url:{type:String,required:!0}},components:{loader:n(7)},mounted:function(){this.fetch()},watch:{url:function(){this.fetch()}},methods:{fetch:function(){if(this.url.trim().length>0){var t="https://spyc.github.io/library-data/"+this.url;(0,a.default)(t,this)}}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),a=r(i);e.default={data:function(){var t=this.$route.fullPath.split("/"),e=t&&t.length>1?t[1]:null;return e in a.default?{navs:a.default[e],name:e,nav:a.default}:{navs:!1,nav:a.default}},mounted:function(){$(".button-collapse").sideNav(),$(".collapsible").collapsible();var t=$(document.getElementById("side-nav"));t.delegate("li a:not(.collapsible-header)","click",function(){return t.sideNav("hide")})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={aim:"Aim",about:"About",opening:"Opening",librarian:"Librarian"},i=n(4)("intro");e.default={components:{Header:n(2),row:n(1),MarkdownCard:n(3)},data:function(){var t=this.$route.params.section;return{section:t}},computed:{title:function(){return"About Us - "+i[this.section]},url:function(){return"introduction/"+r[this.section]+".txt"}},watch:{$route:function(){this.updateCard()}},methods:{updateCard:function(){var t=this.$route.params.section;t in r||this.$router.replace({name:"home"}),this.section=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{url:"books/"+this.$route.params.id+".txt"}},components:{Header:n(2),container:n(5),row:n(1),"markdown-card":n(3)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{lists:[{name:"Junior Form Recommended Booklist",file:"JuniorFormRecommended"},{name:"中一級中國語文科廣泛閱讀推薦書目",file:"S1ChineseBookList"},{name:"中二級中國語文科廣泛閱讀推薦書目",file:"S2ChineseBookList"},{name:"中三級中國語文科廣泛閱讀推薦書目",file:"S3ChineseBookList"},{name:"中四及中五級廣泛閱讀優質讀物介紹",file:"S5ChineseBookList"}]}},components:{top:n(2),row:n(1),container:n(5)},methods:{getUrl:function(t){return"https://spyc.github.io/library-data/document/"+t+".pdf"}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),a=r(i);e.default={data:function(){return{done:!1,eng:null,chin:null}},computed:{books:function(){var t={};return this.chin&&(t.Chinese=this.chin),this.eng&&(t.English=this.eng),t}},components:{Header:n(2),container:n(5),row:n(1),loader:n(7)},mounted:function(){var t={eng:"https://spyc.github.io/library-data/english.txt",chin:"https://spyc.github.io/library-data/chinese.txt"},e=this,n=function(n){var r=t[n];e.$http.get(r).then(function(t){return e.done=!0,t.text()}).then(function(t){e[n]=(0,a.default)(t)})};for(var r in t)n(r)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{row:n(1),MarkdownCard:n(3)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{Header:n(2),container:n(5),row:n(1)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={join:"Join",members:"Members"},i=n(4)("librarian");e.default={components:{Header:n(2),row:n(1),MarkdownCard:n(3)},data:function(){var t=this.$route.params.section;return{section:t}},computed:{title:function(){return"Librarian - "+i[this.section]},url:function(){return"content/"+r[this.section]+".txt"}},watch:{$route:function(){this.updateCard()}},methods:{updateCard:function(){var t=this.$route.params.section;t in r||this.$router.replace({name:"home"}),this.section=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{form:"https://nodejs.org"}},components:{row:n(1)}}},19,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={facility:"Facility",readers:"Readers",instruction:"Instruction",collection:"Collection",loan:"Loan"},i=n(4)("service");e.default={components:{Header:n(2),row:n(1),MarkdownCard:n(3)},data:function(){var t=this.$route.params.section;return{section:t}},computed:{title:function(){return"Service - "+i[this.section]},url:function(){return"content/"+r[this.section]+".txt"}},watch:{$route:function(){this.updateCard()}},methods:{updateCard:function(){var t=this.$route.params.section;t in r||this.$router.replace({name:"home"}),this.section=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4)("suggestion");e.default={data:function(){var t=r[this.$route.name];return{title:"Suggestion - "+t}},components:{Header:n(2)},watch:{$route:function(){this.title="Suggestion - "+r[this.$route.name]}}}},function(t,e,n){e=t.exports=n(11)(),e.push([t.id,"iframe[data-v-6b2f650f]{height:1500px;border:0;margin:0}",""])},function(t,e,n){var r,i;r=n(14);var a=n(43);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(15);var a=n(44);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(16);var a=n(47);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(17);var a=n(55);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(18);var a=n(53);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(19);var a=n(42);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(20);var a=n(51);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(21);var a=n(54);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;n(57),r=n(22);var a=n(49);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-6b2f650f",t.exports=r},function(t,e,n){var r,i;r=n(23);var a=n(41);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(24);var a=n(39);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(25);var a=n(45);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("Header",{attrs:{title:t.title}})," ",t._h("main",{staticClass:"container"},[t._h("row",[t._h("div",{staticClass:"col s12"},[t._h("MarkdownCard",{attrs:{url:t.url}})])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"card"},[t.image?t._h("div",{staticClass:"card-image"},[t._h("img",{attrs:{src:t.image,alt:t.key}})]):t._e()," ",t._h("div",{staticClass:"card-content markdown"},[t.done?t._e():t._h("loader")," ",t.done?t._h("div",{staticClass:"card-title"},[t._s(t.title)]):t._e()," ",t.done?t._h("div",{domProps:{innerHTML:t._s(t.content)}}):t._e()])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("row",[t._h("div",{staticClass:"col s12"},[t._h("MarkdownCard",{attrs:{url:"content/Security.txt"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("row",[t._h("div",{staticClass:"col s12"},[t._h("MarkdownCard",{attrs:{url:"content/Suggestion.txt"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("nav",{class:{"nav-extended":t.navs}},[t._h("div",{staticClass:"nav-wrapper container"},[t._h("router-link",{staticClass:"brand-logo",attrs:{to:{name:"home"}}},["SPYC Library"])," ",t._m(0)," ",t._h("ul",{staticClass:"right hide-on-med-and-down"},[t._h("li",[t._h("router-link",{attrs:{to:{name:"intro",params:{section:"aim"}}}},["\n                    Introduction\n                "])])," ",t._h("li",[t._h("router-link",{attrs:{to:{name:"books"}}},["\n                    Book Recommend\n                "])])," ",t._h("li",[t._h("router-link",{attrs:{to:{name:"booklist"}}},["\n                    Book List\n                "])])," ",t._h("li",[t._h("router-link",{attrs:{to:{name:"service",params:{section:"loan"}}}},["\n                    Service\n                "])])," ",t._h("li",[t._h("router-link",{attrs:{to:{name:"librarian",params:{section:"members"}}}},["\n                    Librarian\n                "])])," ",t._h("li",[t._h("router-link",{attrs:{to:{name:"purchase"}}},["\n                    Suggestion\n                "])])])," ",t._h("ul",{staticClass:"side-nav",attrs:{id:"side-nav"}},[t._h("li",[t._h("router-link",{attrs:{to:{name:"home"}}},[t._h("i",{staticClass:"material-icons"},["home"]),"\n                    Home\n                "])])," ",t._h("li",[t._h("router-link",{attrs:{to:{name:"books"}}},["\n                    Book Recommend\n                "])])," ",t._h("li",[t._h("router-link",{attrs:{to:{name:"booklist"}}},["\n                    Book List\n                "])])," ",t._h("li",{staticClass:"no-padding"},[t._h("ul",{staticClass:"collapsible collapsible-accordion"},[t._h("li",[t._m(1)," ",t._h("div",{staticClass:"collapsible-body"},[t._h("ul",[t._l(t.nav.intro,function(e){return t._h("li",[t._h("router-link",{attrs:{to:{name:"intro",params:{section:e.section}}}},["\n                                        "+t._s(e.display)+"\n                                    "])])})])])])," ",t._h("li",[t._m(2)," ",t._h("div",{staticClass:"collapsible-body"},[t._h("ul",[t._l(t.nav.service,function(e){return t._h("li",[t._h("router-link",{attrs:{to:{name:"service",params:{section:e.section}}}},["\n                                        "+t._s(e.display)+"\n                                    "])])})])])])," ",t._h("li",[t._m(3)," ",t._h("div",{staticClass:"collapsible-body"},[t._h("ul",[t._l(t.nav.librarian,function(e){return t._h("li",[t._h("router-link",{attrs:{to:{name:"librarian",params:{section:e.section}}}},["\n                                        "+t._s(e.display)+"\n                                    "])])})])])])," ",t._h("li",[t._m(4)," ",t._h("div",{staticClass:"collapsible-body"},[t._h("ul",[t._l(t.nav.suggestion,function(e){return t._h("li",[t._h("router-link",{attrs:{to:{name:e.name}}},["\n                                        "+t._s(e.display)+"\n                                    "])])})])])])])])])," ",t.navs?t._h("ul",{staticClass:"nav-tabs tabs-transparent hide-on-med-and-down"},[t._l(t.navs,function(e){return t._h("li",{staticClass:"tab"},["name"in e?t._h("router-link",{attrs:{"active-class":"active",to:{name:e.name}}},["\n                    "+t._s(e.display)+"\n                "]):t._e()," ","section"in e?t._h("router-link",{attrs:{"active-class":"active",to:{name:t.name,params:{section:e.section}}}},["\n                    "+t._s(e.display)+"\n                "]):t._e()])})]):t._e()])])},staticRenderFns:[function(){var t=this;return t._h("a",{staticClass:"button-collapse",attrs:{href:"#","data-activates":"side-nav"}},[t._h("i",{staticClass:"material-icons"},["menu"])])},function(){var t=this;return t._h("a",{staticClass:"collapsible-header"},["Introduction ",t._h("i",{staticClass:"material-icons"},["arrow_drop_down"])])},function(){var t=this;return t._h("a",{staticClass:"collapsible-header"},["Service ",t._h("i",{staticClass:"material-icons"},["arrow_drop_down"])])},function(){var t=this;return t._h("a",{staticClass:"collapsible-header"},["Librarian ",t._h("i",{staticClass:"material-icons"},["arrow_drop_down"])])},function(){var t=this;return t._h("a",{staticClass:"collapsible-header"},["Suggestion ",t._h("i",{staticClass:"material-icons"},["arrow_drop_down"])])}]}},39,function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("Header",{attrs:{title:t.title}})," ",t._h("main",{staticClass:"container"},[t._h("router-view")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"container"},[t._t("default")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("Header",{attrs:{title:"Book Recommend"}})," ",t._h("main",[t._h("container",[t._h("row",[t._h("div",{staticClass:"col s12 l8"},[t._h("markdown-card",{attrs:{url:t.url}})])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"loader"},[t._h("div",{staticClass:"preloader-wrapper big active"},[t._h("div",{staticClass:"spinner-layer spinner-blue"},[t._h("div",{staticClass:"circle-clipper left"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"gap-patch"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"circle-clipper right"},[t._h("div",{staticClass:"circle"})])])," ",t._h("div",{staticClass:"spinner-layer spinner-red"},[t._h("div",{staticClass:"circle-clipper left"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"gap-patch"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"circle-clipper right"},[t._h("div",{staticClass:"circle"})])])," ",t._h("div",{staticClass:"spinner-layer spinner-yellow"},[t._h("div",{staticClass:"circle-clipper left"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"gap-patch"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"circle-clipper right"},[t._h("div",{staticClass:"circle"})])])," ",t._h("div",{staticClass:"spinner-layer spinner-green"},[t._h("div",{staticClass:"circle-clipper left"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"gap-patch"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"circle-clipper right"},[t._h("div",{staticClass:"circle"})])])])," ",t._h("div",{staticClass:"text"},["\n        Loading...\n    "])])}]}},function(t,e){t.exports={render:function(){var t=this;return t._h("row",[t._h("div",{staticClass:"col s12"},[t._h("iframe",{attrs:{src:t.form}},["Loading&#8230;"])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"row"},[t._t("default")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("Header")," ",t._h("main",[t._h("container",[t._h("row",[t._h("div",{staticClass:"col s12"},[t._h("iframe",{attrs:{src:"http://library.pyc.edu.hk/WebOPAC.exe"}})])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("header",[t._h("Navbar")," ",t._h("div",{staticClass:"parallax-container"},[t._h("div",{attrs:{id:"cover-title"}},[t._h("h1",["SPYC Library"])," ",t.title?t._h("h2",[t._s(t.title)]):t._e()])," ",t._h("div",{staticClass:"parallax"},[t._h("img",{attrs:{src:t.src}})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("Header",{attrs:{title:"Book Recommend"}})," ",t._h("main",[t._h("container",[t.done?t._e():t._h("loader")," ",t._l(t.books,function(e,n){return t.done?t._h("row",[t._h("div",{staticClass:"col s12"},[t._h("ul",{staticClass:"collection with-header"},[t._h("li",{staticClass:"collection-header"},[t._h("h4",[t._s(n)])])," ",t._l(e,function(e){return t._h("li",{staticClass:"collection-item"},[e.ID?t._h("div",["\n                                "+t._s(e.Title)+"\n                                ",t._h("small",[t._s(e.Author)])," ",t._h("router-link",{staticClass:"secondary-content",attrs:{to:{name:"book",params:{id:e.ID}}}},[t._h("i",{staticClass:"material-icons"},["send"])])]):t._e()])})])])]):t._e()})])])])},staticRenderFns:[]}},39,function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("top",{attrs:{title:"Book Lists"}})," ",t._h("main",[t._h("container",[t._h("row",[t._h("div",{staticClass:"col s12"},[t._h("h4",["Book List"])," ",t._h("div",{staticClass:"collection"},[t._l(t.lists,function(e){return t._h("a",{staticClass:"collection-item",attrs:{download:t.getUrl(e.file),href:t.getUrl(e.file)}},["\n                            "+t._s(e.name)+"\n                        "])})])])])])])])},staticRenderFns:[]}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=d[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(c(r.parts[a],e))}else{for(var o=[],a=0;a<r.parts.length;a++)o.push(c(r.parts[a],e));d[r.id]={id:r.id,refs:1,parts:o}}}}function i(t){for(var e=[],n={},r=0;r<t.length;r++){var i=t[r],a=i[0],o=i[1],s=i[2],c=i[3],u={css:o,media:s,sourceMap:c};n[a]?n[a].parts.push(u):e.push(n[a]={id:a,parts:[u]})}return e}function a(t,e){var n=p(),r=m[m.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",a(t,e),e}function c(t,e){var n,r,i;if(e.singleton){var a=v++;n=_||(_=s(e)),r=u.bind(null,n,a,!1),i=u.bind(null,n,a,!0)}else n=s(e),r=l.bind(null,n),i=function(){o(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function u(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var a=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function l(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=f(function(){return document.head||document.getElementsByTagName("head")[0]}),_=null,v=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return r(n,e),function(t){for(var a=[],o=0;o<n.length;o++){var s=n[o],c=d[s.id];c.refs--,a.push(c)}if(t){var u=i(t);r(u,e)}for(var o=0;o<a.length;o++){var c=a[o];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var r=n(26);"string"==typeof r&&(r=[[t.id,r,""]]);n(56)(r,{});r.locals&&(t.exports=r.locals)},function(t,e){t.exports=Vue},function(t,e){t.exports=VueResource},function(t,e){t.exports=VueRouter},function(t,e){t.exports=marked}]));
//# sourceMappingURL=app.js.map