(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c335e31"],{"88e9":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Navbar"),s("router-view"),s("Footer"),s("Top")],1)},n=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("div",{staticClass:"loadingio-spinner-pulse-n5w7ej7np6"},[e("div",{staticClass:"ldio-y8241lbpf5"},[e("div"),e("div"),e("div")])])]),e("nav",{staticClass:"navbar navbar-expand-lg fixed-top",class:[t.classList["bg-color"],t.classList["navbar-color"]]},[e("div",{staticClass:"container-fluid"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"},nativeOn:{click:function(a){return t.clickthree(a)}}},[e("img",{staticClass:"img-fluid mr-4 mb-3",attrs:{src:s("d341"),width:"120",alt:"店圖"}}),e("h2",{staticClass:"d-inline-block main-title",class:t.classList["text-color"]},[e("span",{staticClass:"highlight box3"},[t._v("捷登房屋")])])]),e("button",{staticClass:"navbar-toggler p-2",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(a){a.preventDefault(),t.isMenuOpen=!t.isMenuOpen}}},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.isMenuOpen,expression:"!isMenuOpen"}],staticClass:"p-1"},[e("i",{staticClass:"fas fa-bars"})]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isMenuOpen,expression:"isMenuOpen"}],staticClass:"p-1"},[e("i",{staticClass:"fas fa-times"})])]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item text-center"},[e("router-link",{staticClass:"nav-link h4",class:t.classList["text-color"],attrs:{"data-toggle":"collapse","data-target":"#navbarNavDropdown",to:"/about"},nativeOn:{click:function(a){return t.clickone(a)}}},[e("span",{staticClass:"highlight box1"},[t._v("關於捷登")])])],1),e("li",{staticClass:"nav-item text-center"},[e("router-link",{staticClass:"nav-link h4",class:t.classList["text-color"],attrs:{"data-toggle":"collapse","data-target":"#navbarNavDropdown",to:"/products"},nativeOn:{click:function(a){return t.clicktwo(a)}}},[e("span",{staticClass:"highlight box2"},[t._v("作品介紹")])])],1),e("li",{staticClass:"nav-item text-center"},[e("div",{staticClass:"dropdown",attrs:{"data-aos":"flip-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000"}},[e("button",{staticClass:"btn btn-more dropdown-toggle",attrs:{type:"button",id:"check","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("p",{staticClass:"h4 d-inline-block mr-1"},[t._v("預約專區")]),t.cart.length?e("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.cart.length))]):t._e()]),e("div",{staticClass:"dropdown-menu dropdown-menu-right p-3 size",attrs:{"aria-labelledby":"check"}},[e("section",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm"},[t._m(0),e("tbody",[t._l(t.cart,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"rounded-0",staticStyle:{width:"150px",height:"100px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.product.imageUrl[0]+")"}}),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" ")]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.price)+" 萬 ")]),e("td",{staticClass:"align-middle text-center"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.removeCart(a.product.id)}}},[e("i",{staticClass:"fas fa-trash-alt"})])])])})),0===t.cart.length?e("tr",[e("td",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v("您尚未進行預約喔！")])]):t._e()],2)]),e("div",{staticClass:"btn-toolbar justify-content-between"},[e("button",{staticClass:"btn btn-cyan",attrs:{type:"button"},on:{click:function(a){return t.removeAllCart()}}},[e("i",{staticClass:"far fa-trash-alt"},[t._v("全部取消")])]),e("button",{staticClass:"btn btn-more",attrs:{type:"button",disabled:0===t.cart.length},on:{click:t.goReservation}},[t._v("前往預約專區")])])])])])])])])],1)])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("小圖")]),s("th",{attrs:{scope:"col"}},[t._v("案名")]),s("th",{attrs:{scope:"col"}},[t._v("總價")]),s("th",{attrs:{scope:"col"}})])])}],r=(s("99af"),s("1157")),c=s.n(r),l={data:function(){return{cart:[],isLoading:!1,isMenuOpen:!1,classList:{"bg-color":"bg-mild","text-color":"text-dark","navbar-color":""}}},methods:{clickone:function(){this.isMenuOpen=!1,c()(".box1").addClass("addColor"),c()(".box2").removeClass("addColor"),c()(".box3").removeClass("addColor")},clicktwo:function(){this.isMenuOpen=!1,c()(".box2").addClass("addColor"),c()(".box1").removeClass("addColor"),c()(".box3").removeClass("addColor")},clickthree:function(){c()(".box3").addClass("addColor"),c()(".box1").removeClass("addColor"),c()(".box2").removeClass("addColor")},scrollFunction:function(){var t=window.scrollY,a=window.innerHeight-700;this.classList=t>a?{"bg-color":"bg-more","navbar-color":"navbar-dark","text-color":"text-white"}:{"bg-color":"bg-mild","navbar-color":"navbar-light","text-color":"text-dark"}},getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("805a8755-d565-473e-90ee-9d24771ddf47","/ec/shopping");this.$http.get(a).then((function(a){t.cart=a.data.data,t.isLoading=!1})).catch((function(){t.isLoading=!1,t.$bus.$emit("msg:push","無法取得資料，稍後再試","danger")}))},removeCart:function(t){var a=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api/").concat("805a8755-d565-473e-90ee-9d24771ddf47","/ec/shopping/").concat(t);this.$http.delete(s).then((function(t){a.getCart(),a.isLoading=!1,a.$bus.$emit("msg:push","預約取消","danger")})).catch((function(){a.isLoading=!1,a.$bus.$emit("msg:push","無法取得資料，稍後再試","danger")}))},removeAllCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("805a8755-d565-473e-90ee-9d24771ddf47","/ec/shopping/all/product");this.$http.delete(a).then((function(){t.getCart(),t.isLoading=!1,t.$bus.$emit("msg:push","全部取消","danger")})).catch((function(){t.isLoading=!1,t.$bus.$emit("msg:push","無法取得資料，稍後再試","danger")}))},goReservation:function(){"/reservation"!==this.$route.path&&this.$router.push("/reservation")}},created:function(){var t=this;this.getCart(),this.$bus.$on("get-cart",(function(){t.getCart()}))},mounted:function(){window.addEventListener("scroll",this.scrollFunction)},unmounted:function(){window.removeEventListener("scroll",this.scrollFunction)},beforeDestroy:function(){this.$bus.$off("get-cart")}},d=l,u=s("2877"),p=Object(u["a"])(d,o,i,!1,null,null,null),h=p.exports,b=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"bg-dark py-2 mr-auto"},[s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex flex-column flex-md-row justify-content-center align-items-md-center align-items-start text-white"},[t._m(0),t._m(1),s("div",[s("router-link",{staticClass:"nav-link text-light",attrs:{to:"/login"}},[t._v("登入")])],1)])])])])},v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mb-md-0 mb-1 pr-3"},[s("p",{staticClass:"mb-0"},[t._v(" 捷登房屋 Copyright By：洋蔥")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"list-unstyled mb-0 h2 d-flex"},[s("li",[s("a",{staticClass:"text-white",attrs:{href:"https://www.facebook.com/profile.php?id=100000289420313",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook-square pr-3"})])]),s("li",[s("a",{staticClass:"text-white",attrs:{href:"#",target:"_blank"}},[s("i",{staticClass:"fab fa-line pr-3 "})])]),s("li",[s("a",{staticClass:"text-white",attrs:{href:"https://github.com/YAngTsungJen/New-home",target:"_blank"}},[s("i",{staticClass:"fab fa-github-square"})])])])}],f={},g=Object(u["a"])(f,b,v,!1,null,null,null),m=g.exports,C=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.isShowOfTop?s("button",{staticClass:"top top__scroll btn btn-secondary rounded-circle btn-lg d-flex p-2 text-white",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.scrollToTop(0)}}},[t._m(0)]):t._e()},w=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"top"},[s("i",{staticClass:"fas fa-arrow-up"})])}],x={data:function(){return{isShowOfTop:!1}},methods:{scrollToTop:function(t){window.scrollTo({top:t,behavior:"smooth"})},showTop:function(){var t=this,a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.isShowOfTop=a>100}},mounted:function(){window.addEventListener("scroll",this.showTop)}},_=x,k=Object(u["a"])(_,C,w,!1,null,null,null),$=k.exports,y={data:function(){return{}},components:{Navbar:h,Footer:m,Top:$}},L=y,O=Object(u["a"])(L,e,n,!1,null,null,null);a["default"]=O.exports},"99af":function(t,a,s){"use strict";var e=s("23e7"),n=s("d039"),o=s("e8b5"),i=s("861d"),r=s("7b0b"),c=s("50c4"),l=s("8418"),d=s("65f0"),u=s("1dde"),p=s("b622"),h=s("2d00"),b=p("isConcatSpreadable"),v=9007199254740991,f="Maximum allowed index exceeded",g=h>=51||!n((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),m=u("concat"),C=function(t){if(!i(t))return!1;var a=t[b];return void 0!==a?!!a:o(t)},w=!g||!m;e({target:"Array",proto:!0,forced:w},{concat:function(t){var a,s,e,n,o,i=r(this),u=d(i,0),p=0;for(a=-1,e=arguments.length;a<e;a++)if(o=-1===a?i:arguments[a],C(o)){if(n=c(o.length),p+n>v)throw TypeError(f);for(s=0;s<n;s++,p++)s in o&&l(u,p,o[s])}else{if(p>=v)throw TypeError(f);l(u,p++,o)}return u.length=p,u}})},d341:function(t,a,s){t.exports=s.p+"img/圖層-1_02.ffad835b.png"}}]);
//# sourceMappingURL=chunk-2c335e31.bb889a71.js.map