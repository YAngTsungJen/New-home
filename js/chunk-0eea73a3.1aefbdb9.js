(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0eea73a3"],{1799:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a){return e("li",{key:a.current_page,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},r=[],s={props:{pages:{type:Object,default:function(){return{}}}},methods:{updatePage:function(t){this.$emit("update",t)}}},n=s,c=(e("3cc3"),e("2877")),o=Object(c["a"])(n,i,r,!1,null,"4a74cf9b",null);a["a"]=o.exports},2532:function(t,a,e){"use strict";var i=e("23e7"),r=e("5a34"),s=e("1d80"),n=e("ab13");i({target:"String",proto:!0,forced:!n("includes")},{includes:function(t){return!!~String(s(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"3cc3":function(t,a,e){"use strict";var i=e("e710"),r=e.n(i);r.a},"44e7":function(t,a,e){var i=e("861d"),r=e("c6b6"),s=e("b622"),n=s("match");t.exports=function(t){var a;return i(t)&&(void 0!==(a=t[n])?!!a:"RegExp"==r(t))}},"4de4":function(t,a,e){"use strict";var i=e("23e7"),r=e("b727").filter,s=e("1dde"),n=e("ae40"),c=s("filter"),o=n("filter");i({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,a,e){var i=e("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"81b1":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("div",{staticClass:"loadingio-spinner-pulse-n5w7ej7np6"},[e("div",{staticClass:"ldio-y8241lbpf5"},[e("div"),e("div"),e("div")])])]),t._m(0),e("section",{staticClass:"container"},[e("div",{staticClass:"row"},[e("nav",{staticClass:"mt-3",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{staticClass:"text-muted",attrs:{to:"/"}},[t._v("首頁")])],1),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("作品介紹")])])])])]),e("section",{staticClass:"container pb-3"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-3"},[e("ul",{staticClass:"list-group justify-content-md-center card-hov"},[e("li",{staticClass:"list-group-item list-group-item-action",class:{active:""===t.filterCategory},on:{click:function(a){a.preventDefault(),t.filterCategory=""}}},[t._v(" 全部建案 ")]),t._l(t.categories,(function(a){return e("li",{key:a,staticClass:"list-group-item list-group-item-action",class:{active:a===t.filterCategory},on:{click:function(e){e.preventDefault(),t.filterCategory=a}}},[t._v(" "+t._s(a)+" ")])}))],2)]),e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"row"},t._l(t.filterCategories,(function(a){return e("div",{key:a.id,staticClass:"col-md-4 mt-3 mt-md-0"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-img-sm",style:{background:"url("+a.imageUrl[0]+") center center no-repeat",backgroundSize:"cover"},on:{click:function(e){return t.goPage(a)}}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.title)+" "),e("span",{staticClass:"badge badge-pill badge-success float-right "},[t._v(t._s(a.category))])])])])])})),0)])])]),e("section",{staticClass:"container mt-2 py-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("Pagination",{attrs:{pages:t.pagination},on:{update:t.getProducts}})],1)])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container-fluid text-white banner-img banner-product"},[e("div",{staticClass:"container h-100"},[e("div",{staticClass:"row h-100"},[e("div",{staticClass:"col-md-12 h-100"},[e("div",{staticClass:"d-flex align-items-end h-100"},[e("div",{staticClass:"mb-5"},[e("h2",[t._v("作品介紹")])])])])])])])}],s=(e("99af"),e("4de4"),e("caad"),e("2532"),e("1799")),n={data:function(){return{products:[],filterCategory:"",categories:["烏日區","大里區","南屯區","南區","西區"],isLoading:!1,pagination:{}}},components:{Pagination:s["a"]},methods:{goPage:function(t){this.$router.push("/product/".concat(t.id))},getProducts:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("805a8755-d565-473e-90ee-9d24771ddf47","/ec/products");this.$http.get(a).then((function(a){t.products=a.data.data,t.pagination=a.data.meta.pagination;var e=t.$route.params.categoryName;e&&(t.filterCategory=e),t.isLoading=!1})).catch((function(){t.isLoading=!1,t.$bus.$emit("msg:push","無法取得資料，稍後再試","danger")}))}},created:function(){this.getProducts()},computed:{filterCategories:function(){var t=this;return this.products.filter((function(a){return a.category.toLowerCase().includes(t.filterCategory.toLowerCase())}))}}},c=n,o=e("2877"),l=Object(o["a"])(c,i,r,!1,null,null,null);a["default"]=l.exports},"99af":function(t,a,e){"use strict";var i=e("23e7"),r=e("d039"),s=e("e8b5"),n=e("861d"),c=e("7b0b"),o=e("50c4"),l=e("8418"),u=e("65f0"),d=e("1dde"),g=e("b622"),p=e("2d00"),f=g("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",C=p>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=d("concat"),b=function(t){if(!n(t))return!1;var a=t[f];return void 0!==a?!!a:s(t)},_=!C||!m;i({target:"Array",proto:!0,forced:_},{concat:function(t){var a,e,i,r,s,n=c(this),d=u(n,0),g=0;for(a=-1,i=arguments.length;a<i;a++)if(s=-1===a?n:arguments[a],b(s)){if(r=o(s.length),g+r>v)throw TypeError(h);for(e=0;e<r;e++,g++)e in s&&l(d,g,s[e])}else{if(g>=v)throw TypeError(h);l(d,g++,s)}return d.length=g,d}})},ab13:function(t,a,e){var i=e("b622"),r=i("match");t.exports=function(t){var a=/./;try{"/./"[t](a)}catch(e){try{return a[r]=!1,"/./"[t](a)}catch(i){}}return!1}},caad:function(t,a,e){"use strict";var i=e("23e7"),r=e("4d64").includes,s=e("44d2"),n=e("ae40"),c=n("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!c},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},e710:function(t,a,e){}}]);
//# sourceMappingURL=chunk-0eea73a3.1aefbdb9.js.map