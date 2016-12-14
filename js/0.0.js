webpackJsonp([0],[,function(t,e,n){var r,i,a=n(54);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(14);var a=n(51);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(15);var a=n(48);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i,a=n(50);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i,a=n(55);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e){t.exports=Vue},function(t,e){t.exports=VueResource},function(t,e){t.exports=VueRouter},,function(t,e,n){"use strict";n.e(2,function(){var e=n(9);t.exports=function(t,n){n.$http.get(t).then(function(t){return t.text()}).then(function(t){var r=/###\s+(.+)/,i=/!\[([^\]]+)]\(([^)]+)\)/,a=t.match(r),s=t.match(i),o=t.replace(r,"").replace(i,"");n.content=e(o),n.title=a&&a.length>1?a[1].trim():"",n.done=!0,n.image=!!(s&&s.length>1)&&s[2].trim(),n.key=!!(s&&s.length>1)&&s[1].trim()}).catch(function(t){console.error(t.stack),n.title="Opps! Error occur!",n.content='Please check your network or any typing missing in the website. If you confirm no this two,please report it on <a href="https://github.com/spyc/library/issues/new">Github</a> or email to tony@opensource.hk',n.done=!0})}})},function(t,e){"use strict";function n(t){return t.split("\t").map(function(t){return t.trim()})}t.exports=function(t){var e=t.split("\n"),r=[],i=n(e.shift());return e.forEach(function(t){t.trim().length>0&&!function(){var e={};n(t).forEach(function(t,n){return e[i[n]]=t}),r.push(e)}()}),r}},function(t,e,n){"use strict";t.exports={routes:[{path:"/",name:"home",component:n(36)},{path:"/books",name:"books",component:n(34)},{path:"/books/:id",name:"book",component:n(32)},{path:"/intro/:section",name:"intro",component:n(31)},{path:"/booklist",name:"booklist",component:n(33)},{path:"/librarian/:section",name:"librarian",component:n(37)},{path:"/service/:section",name:"service",component:n(40)},{path:"/suggestion",name:"suggest",component:n(41),children:[{path:"purchase",component:n(38),name:"purchase"},{path:"guideline",component:n(35),name:"guideline"},{path:"security",component:n(39),name:"security"}]},{path:"*",redirect:{name:"home"}}]}},function(t,e){"use strict";t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(30),a=r(i);e.default={components:{Navbar:a.default},data:function(){return{src:"./images/cover.jpg",home:"home"===this.$route.name}},mounted:function(){this.home&&$(".parallax").parallax()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),a=r(i);e.default={data:function(){return{done:!1,title:"",content:"",image:"",key:""}},props:{url:{type:String,required:!0}},components:{loader:n(5)},mounted:function(){this.fetch()},watch:{url:function(){this.fetch()}},methods:{fetch:function(){if(this.url.trim().length>0){var t="https://spyc.github.io/library-data/"+this.url;(0,a.default)(t,this)}}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(29),a=r(i);e.default={data:function(){var t=this.$route.fullPath.split("/"),e=t&&t.length>1?t[1]:null;return e in a.default?{navs:a.default[e],name:e,nav:a.default}:{navs:!1,nav:a.default}},mounted:function(){$(".button-collapse").sideNav(),$(".collapsible").collapsible();var t=$(document.getElementById("side-nav"));t.delegate("li a:not(.collapsible-header)","click",function(){return t.sideNav("hide")})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={aim:"Aim",about:"About",opening:"Opening",librarian:"Librarian"};e.default={components:{top:n(2),row:n(1),"markdown-card":n(3)},data:function(){var t=this.$route.params.section;return{section:t}},computed:{url:function(){return"introduction/"+r[this.section]+".txt"}},watch:{$route:function(){this.updateCard()}},methods:{updateCard:function(){var t=this.$route.params.section;t in r||this.$router.replace({name:"home"}),this.section=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{url:"books/"+this.$route.params.id+".txt"}},components:{top:n(2),container:n(4),row:n(1),"markdown-card":n(3)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{lists:[{name:"Junior Form Recommended Booklist",file:"JuniorFormRecommended"},{name:"中一級中國語文科廣泛閱讀推薦書目",file:"S1ChineseBookList"},{name:"中二級中國語文科廣泛閱讀推薦書目",file:"S2ChineseBookList"},{name:"中三級中國語文科廣泛閱讀推薦書目",file:"S3ChineseBookList"},{name:"中四及中五級廣泛閱讀優質讀物介紹",file:"S5ChineseBookList"}]}},components:{top:n(2),row:n(1),container:n(4)},methods:{getUrl:function(t){return"https://spyc.github.io/library-data/document/"+t+".pdf"}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),a=r(i);e.default={data:function(){return{done:!1,eng:null,chin:null}},computed:{books:function(){var t={};return this.chin&&(t.Chinese=this.chin),this.eng&&(t.English=this.eng),t}},components:{top:n(2),container:n(4),row:n(1),loader:n(5)},mounted:function(){var t={eng:"https://spyc.github.io/library-data/english.txt",chin:"https://spyc.github.io/library-data/chinese.txt"},e=this,n=function(n){var r=t[n];e.$http.get(r).then(function(t){return e.done=!0,t.text()}).then(function(t){e[n]=(0,a.default)(t)})};for(var r in t)n(r)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{row:n(1),"markdown-card":n(3)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{top:n(2),container:n(4),row:n(1)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={join:"Join",members:"Members"};e.default={components:{top:n(2),row:n(1),"markdown-card":n(3)},data:function(){var t=this.$route.params.section;return{section:t}},computed:{url:function(){return"content/"+r[this.section]+".txt"}},watch:{$route:function(){this.updateCard()}},methods:{updateCard:function(){var t=this.$route.params.section;t in r||this.$router.replace({name:"home"}),this.section=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{form:"https://nodejs.org"}},components:{row:n(1)}}},21,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={facility:"Facility",readers:"Readers",instruction:"Instruction",collection:"Collection",loan:"Loan"};e.default={components:{top:n(2),row:n(1),"markdown-card":n(3)},data:function(){var t=this.$route.params.section;return{section:t}},computed:{url:function(){return"content/"+r[this.section]+".txt"}},watch:{$route:function(){this.updateCard()}},methods:{updateCard:function(){var t=this.$route.params.section;t in r||this.$router.replace({name:"home"}),this.section=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{top:n(2)}}},function(t,e,n){e=t.exports=n(13)(),e.push([t.id,"iframe[data-v-521185fa]{height:1500px;border:0;margin:0}",""])},function(t,e){t.exports={intro:[{section:"aim",display:"Aim"},{section:"about",display:"About Us"},{section:"opening",display:"Opening Hours"},{section:"librarian",display:"Word of Librarian"}],suggestion:[{name:"purchase",display:"Purchase Suggestion"},{name:"guideline",display:"Suggestion Guide"},{name:"security",display:"Security Vulnerability"}],librarian:[{section:"members",display:"Members"},{section:"join",display:"Join Us"}],service:[{section:"loan",display:"Book Loaning Service"},{section:"collection",display:"Library Collection"},{section:"instruction",display:"Instruction"},{section:"readers",display:"Readers Service"},{section:"facility",display:"Facility"}]}},function(t,e,n){var r,i;r=n(16);var a=n(53);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(17);var a=n(49);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(18);var a=n(44);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(19);var a=n(56);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(20);var a=n(47);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(21);var a=n(42);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(22);var a=n(58);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(23);var a=n(57);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;n(60),r=n(24);var a=n(52);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-521185fa",t.exports=r},function(t,e,n){var r,i;r=n(25);var a=n(46);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(26);var a=n(43);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(27);var a=n(45);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("row",[e("div",{staticClass:"col s12"},[e("markdown-card",{attrs:{url:"content/Suggestion.txt"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("top"),t._v(" "),e("main",{staticClass:"container"},[e("row",[e("div",{staticClass:"col s12"},[e("markdown-card",{attrs:{url:t.url}})])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("top"),t._v(" "),e("main",[e("container",[e("row",[e("div",{staticClass:"col s12 l8"},[e("markdown-card",{attrs:{url:t.url}})])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("top"),t._v(" "),e("main",{staticClass:"container"},[e("router-view")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("row",[e("div",{staticClass:"col s12"},[e("markdown-card",{attrs:{url:"content/Security.txt"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("top"),t._v(" "),e("main",[e("container",[t.done?t._e():e("loader"),t._v(" "),t._l(t.books,function(n,r){return t.done?e("row",[e("div",{staticClass:"col s12"},[e("ul",{staticClass:"collection with-header"},[e("li",{staticClass:"collection-header"},[e("h4",[t._v(t._s(r))])]),t._v(" "),t._l(n,function(n){return e("li",{staticClass:"collection-item"},[n.ID?e("div",[t._v("\n                                "+t._s(n.Title)+"\n                                "),e("small",[t._v(t._s(n.Author))]),t._v(" "),e("router-link",{staticClass:"secondary-content",attrs:{to:{name:"book",params:{id:n.ID}}}},[e("i",{staticClass:"material-icons"},[t._v("send")])])]):t._e()])})],!0)])]):t._e()})],!0)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"card"},[t.image?e("div",{staticClass:"card-image"},[e("img",{attrs:{src:t.image,alt:t.key}})]):t._e(),t._v(" "),e("div",{staticClass:"card-content markdown"},[t.done?t._e():e("loader"),t._v(" "),t.done?e("div",{staticClass:"card-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.done?e("div",{domProps:{innerHTML:t._s(t.content)}}):t._e()])])},staticRenderFns:[]}},43,function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"container"},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("header",[e("Navbar"),t._v(" "),t.home?e("div",{staticClass:"parallax-container"},[t._m(0),t._v(" "),e("div",{staticClass:"parallax"},[e("img",{attrs:{src:t.src}})])]):t._e()])},staticRenderFns:[function(){var t=this,e=(t.$createElement,t._c);return e("div",{attrs:{id:"cover-title"}},[e("h1",[t._v("SPYC Library")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("row",[e("div",{staticClass:"col s12"},[e("iframe",{attrs:{src:t.form}},[t._v("Loading&#8230;")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("nav",{class:{"nav-extended":t.navs}},[e("div",{staticClass:"nav-wrapper container"},[e("router-link",{staticClass:"brand-logo",attrs:{to:{name:"home"}}},[t._v("SPYC Library")]),t._v(" "),t._m(0),t._v(" "),e("ul",{staticClass:"right hide-on-med-and-down"},[e("li",[e("router-link",{attrs:{to:{name:"intro",params:{section:"aim"}}}},[t._v("\n                    Introduction\n                ")])]),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"books"}}},[t._v("\n                    Book Recommend\n                ")])]),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"booklist"}}},[t._v("\n                    Book List\n                ")])]),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"service",params:{section:"loan"}}}},[t._v("\n                    Service\n                ")])]),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"librarian",params:{section:"members"}}}},[t._v("\n                    Librarian\n                ")])]),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"purchase"}}},[t._v("\n                    Suggestion\n                ")])])]),t._v(" "),e("ul",{staticClass:"side-nav",attrs:{id:"side-nav"}},[e("li",[e("router-link",{attrs:{to:{name:"home"}}},[e("i",{staticClass:"material-icons"},[t._v("home")]),t._v("\n                    Home\n                ")])]),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"books"}}},[t._v("\n                    Book Recommend\n                ")])]),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"booklist"}}},[t._v("\n                    Book List\n                ")])]),t._v(" "),e("li",{staticClass:"no-padding"},[e("ul",{staticClass:"collapsible collapsible-accordion"},[e("li",[t._m(1),t._v(" "),e("div",{staticClass:"collapsible-body"},[e("ul",t._l(t.nav.intro,function(n){return e("li",[e("router-link",{attrs:{to:{name:"intro",params:{section:n.section}}}},[t._v("\n                                        "+t._s(n.display)+"\n                                    ")])])}))])]),t._v(" "),e("li",[t._m(2),t._v(" "),e("div",{staticClass:"collapsible-body"},[e("ul",t._l(t.nav.service,function(n){return e("li",[e("router-link",{attrs:{to:{name:"service",params:{section:n.section}}}},[t._v("\n                                        "+t._s(n.display)+"\n                                    ")])])}))])]),t._v(" "),e("li",[t._m(3),t._v(" "),e("div",{staticClass:"collapsible-body"},[e("ul",t._l(t.nav.librarian,function(n){return e("li",[e("router-link",{attrs:{to:{name:"librarian",params:{section:n.section}}}},[t._v("\n                                        "+t._s(n.display)+"\n                                    ")])])}))])]),t._v(" "),e("li",[t._m(4),t._v(" "),e("div",{staticClass:"collapsible-body"},[e("ul",t._l(t.nav.suggestion,function(n){return e("li",[e("router-link",{attrs:{to:{name:n.name}}},[t._v("\n                                        "+t._s(n.display)+"\n                                    ")])])}))])])])])]),t._v(" "),t.navs?e("ul",{staticClass:"nav-tabs tabs-transparent hide-on-med-and-down"},t._l(t.navs,function(n){return e("li",{staticClass:"tab"},["name"in n?e("router-link",{attrs:{"active-class":"active",to:{name:n.name}}},[t._v("\n                    "+t._s(n.display)+"\n                ")]):t._e(),t._v(" "),"section"in n?e("router-link",{attrs:{"active-class":"active",to:{name:t.name,params:{section:n.section}}}},[t._v("\n                    "+t._s(n.display)+"\n                ")]):t._e()])})):t._e()])])},staticRenderFns:[function(){var t=this,e=(t.$createElement,t._c);return e("a",{staticClass:"button-collapse",attrs:{href:"#","data-activates":"side-nav"}},[e("i",{staticClass:"material-icons"},[t._v("menu")])])},function(){var t=this,e=(t.$createElement,t._c);return e("a",{staticClass:"collapsible-header"},[t._v("Introduction "),e("i",{staticClass:"material-icons"},[t._v("arrow_drop_down")])])},function(){var t=this,e=(t.$createElement,t._c);return e("a",{staticClass:"collapsible-header"},[t._v("Service "),e("i",{staticClass:"material-icons"},[t._v("arrow_drop_down")])])},function(){var t=this,e=(t.$createElement,t._c);return e("a",{staticClass:"collapsible-header"},[t._v("Librarian "),e("i",{staticClass:"material-icons"},[t._v("arrow_drop_down")])])},function(){var t=this,e=(t.$createElement,t._c);return e("a",{staticClass:"collapsible-header"},[t._v("Suggestion "),e("i",{staticClass:"material-icons"},[t._v("arrow_drop_down")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"row"},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;t.$createElement,t._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"loader"},[e("div",{staticClass:"preloader-wrapper big active"},[e("div",{staticClass:"spinner-layer spinner-blue"},[e("div",{staticClass:"circle-clipper left"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"gap-patch"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"circle-clipper right"},[e("div",{staticClass:"circle"})])]),t._v(" "),e("div",{staticClass:"spinner-layer spinner-red"},[e("div",{staticClass:"circle-clipper left"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"gap-patch"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"circle-clipper right"},[e("div",{staticClass:"circle"})])]),t._v(" "),e("div",{staticClass:"spinner-layer spinner-yellow"},[e("div",{staticClass:"circle-clipper left"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"gap-patch"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"circle-clipper right"},[e("div",{staticClass:"circle"})])]),t._v(" "),e("div",{staticClass:"spinner-layer spinner-green"},[e("div",{staticClass:"circle-clipper left"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"gap-patch"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"circle-clipper right"},[e("div",{staticClass:"circle"})])])]),t._v(" "),e("div",{staticClass:"text"},[t._v("\n        Loading...\n    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("top"),t._v(" "),e("main",[e("container",[e("row",[e("div",{staticClass:"col s12"},[e("h4",[t._v("Book List")]),t._v(" "),e("div",{staticClass:"collection"},t._l(t.lists,function(n){return e("a",{staticClass:"collection-item",attrs:{download:t.getUrl(n.file),href:t.getUrl(n.file)}},[t._v("\n                            "+t._s(n.name)+"\n                        ")])}))])])])])])},staticRenderFns:[]}},43,function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("top"),t._v(" "),e("main",[e("container",[e("row",[e("div",{staticClass:"col s12"},[e("iframe",{attrs:{src:"http://library.pyc.edu.hk/WebOPAC.exe"}})])])])])])},staticRenderFns:[]}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=d[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(c(r.parts[a],e))}else{for(var s=[],a=0;a<r.parts.length;a++)s.push(c(r.parts[a],e));d[r.id]={id:r.id,refs:1,parts:s}}}}function i(t){for(var e=[],n={},r=0;r<t.length;r++){var i=t[r],a=i[0],s=i[1],o=i[2],c=i[3],l={css:s,media:o,sourceMap:c};n[a]?n[a].parts.push(l):e.push(n[a]={id:a,parts:[l]})}return e}function a(t,e){var n=v(),r=_[_.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),_.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=_.indexOf(t);e>=0&&_.splice(e,1)}function o(t){var e=document.createElement("style");return e.type="text/css",a(t,e),e}function c(t,e){var n,r,i;if(e.singleton){var a=h++;n=m||(m=o(e)),r=l.bind(null,n,a,!1),i=l.bind(null,n,a,!0)}else n=o(e),r=u.bind(null,n),i=function(){s(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function l(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var a=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}function u(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=f(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,h=0,_=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return r(n,e),function(t){for(var a=[],s=0;s<n.length;s++){var o=n[s],c=d[o.id];c.refs--,a.push(c)}if(t){var l=i(t);r(l,e)}for(var s=0;s<a.length;s++){var c=a[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var r=n(28);"string"==typeof r&&(r=[[t.id,r,""]]);n(59)(r,{});r.locals&&(t.exports=r.locals)}]);
//# sourceMappingURL=0.0.js.map