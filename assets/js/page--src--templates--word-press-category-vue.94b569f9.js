(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{380:function(t,e,s){"use strict";var a={props:{categories:{type:Array,required:!0}}},r=s(12),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"list-inline"},t._l(t.categories,(function(e,a){return s("li",{key:e.id,staticClass:"list-inline-item m-0"},[s("g-link",{staticClass:"text-uppercase font-weight-bold mx-1",attrs:{to:e.path}},[t._v(t._s(e.title))]),a<t.categories.length-1?s("span",[t._v("·")]):t._e()],1)})),0)}),[],!1,null,null,null).exports,i=s(246),o=s.n(i),l={props:{date:{type:String,required:!0}},computed:{formatedDate:function(){return o()(this.date).locale("en_gb").format("ll")}}},c=Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.formatedDate))])}),[],!1,null,null,null).exports,u=(s(106),s(70),{components:{FormatedDate:c},props:{post:{type:Object,required:!0}},computed:{readingTime:function(){var t=this.post.content.split(" ").filter((function(t){return t.length>2})).length,e=Math.round(t/200);return" &asymp;".concat(Math.max(1,e),"min")}}}),j={components:{CategoriesList:n,FormatedDate:c,ReadMore:Object(r.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-button",{staticClass:"read-more border-0 mb-5",attrs:{variant:"primary",to:this.post.path}},[e("span",[e("b",{staticClass:"text-uppercase"},[this._v("Read More")]),e("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.readingTime)}})])])}),[],!1,null,null,null).exports},props:{post:{type:Object,required:!0}}},p=Object(r.a)(j,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-row",{attrs:{tag:"article"}},[s("b-col",{staticClass:" py-md-5"},[t._t("default",[s("g-link",{staticClass:"text-dark",attrs:{to:t.post.path}},[s("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"h1 post-title text-break mb-4",domProps:{innerHTML:t._s(t.post.title)}})]),s("div",{staticClass:"mx-auto mb-2 position-relative d-flex"},[s("formated-date",{staticClass:"post-date font-weight-bold",attrs:{date:t.post.date}}),s("i",{staticClass:"d-none d-md-block"},[t._v("in:")]),s("categories-list",{staticClass:"mb-0",attrs:{categories:t.post.categories}}),t.post.author?s("div",[s("i",[t._v("by: ")]),s("g-link",{staticClass:"font-weight-bold",attrs:{to:t.post.author.path}},[t._v("\n            "+t._s(t.post.author.name)+"\n          ")])],1):t._e()],1),t.post.featuredMedia?s("b-img",{staticClass:"mt-4",attrs:{src:t.post.featuredMedia.sourceUrl,width:t.post.featuredMedia.mediaDetails.width,alt:t.post.featuredMedia.altText,fluid:""}}):t._e(),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-excerpt text-break",domProps:{innerHTML:t._s(t.post.excerpt)}})])],2)],1)}),[],!1,null,null,null);e.a=p.exports},381:function(t,e,s){"use strict";s(1);var a=s(103),r=(s(104),s(71),s(72),s(73),s(32),s(70),s(16),s(74),s(161),s(108),s(39)),n=(s(107),s(15));function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){Object(r.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var s=e.props,r=e.data,i=e.parent,l=s.info,u=s.showLinks,j=s.showNavigation,p=s.ariaLabel,d=function(t,e){var s=t.currentPage,a=void 0===s?1:s,r=t.totalPages,n=void 0===r?1:r,i=Math.ceil(e/2),o=Math.floor(a-i),l=Math.floor(a+i);n<=e?(o=0,l=n):a<=i?(o=0,l=e):a+i>=n&&(o=n-e,l=n);for(var c=[],u=o+1;u<=l;u++)c.push(u);return{current:a,total:n,start:o,end:l,pages:c}}(l,s.range),f=d.current,g=d.total,b=d.pages,m=d.start,h=d.end,v=Object(n.a)(i.$route),y=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;e===f&&(n=s.ariaCurrentLabel);var i={to:c(v,e),exact:!0};return s.activeLinkClass&&(i.activeClass=s.activeLinkClass),s.exactActiveLinkClass&&(i.exactActiveClass=s.exactActiveLinkClass),t(a.a,{class:s.linkClass,attrs:o(o({},i),{},{"aria-label":n.replace("%n",e),"aria-current":f===e})},[r])},k=u?b.map((function(t){return y(t,t,s.ariaLinkLabel)})):[];if(j){var L=s.firstLabel,w=s.prevLabel,O=s.nextLabel,_=s.lastLabel,x=s.ariaFirstLabel,C=s.ariaPrevLabel,P=s.ariaNextLabel,z=s.ariaLastLabel;f>1&&k.unshift(y(f-1,w,C)),m>0&&k.unshift(y(1,L,x)),f<g&&k.push(y(f+1,O,P)),h<g&&k.push(y(g,_,z))}return k.length<2?null:t("nav",o(o({},r),{},{attrs:{role:"navigation","aria-label":p}}),k)}};function c(t,e){return e>1?Object(n.c)(t)+"/".concat(e):t}s(105);var u={props:{info:{type:Object,required:!0}},components:{Pager:l}},j=s(12),p=Object(j.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("Pager",{staticClass:"pagination justify-content-center",attrs:{info:this.info,linkClass:"page-link rounded"}})}),[],!1,null,null,null);e.a=p.exports},382:function(t,e,s){var a={"./af":247,"./af.js":247,"./ar":248,"./ar-dz":249,"./ar-dz.js":249,"./ar-kw":250,"./ar-kw.js":250,"./ar-ly":251,"./ar-ly.js":251,"./ar-ma":252,"./ar-ma.js":252,"./ar-sa":253,"./ar-sa.js":253,"./ar-tn":254,"./ar-tn.js":254,"./ar.js":248,"./az":255,"./az.js":255,"./be":256,"./be.js":256,"./bg":257,"./bg.js":257,"./bm":258,"./bm.js":258,"./bn":259,"./bn.js":259,"./bo":260,"./bo.js":260,"./br":261,"./br.js":261,"./bs":262,"./bs.js":262,"./ca":263,"./ca.js":263,"./cs":264,"./cs.js":264,"./cv":265,"./cv.js":265,"./cy":266,"./cy.js":266,"./da":267,"./da.js":267,"./de":268,"./de-at":269,"./de-at.js":269,"./de-ch":270,"./de-ch.js":270,"./de.js":268,"./dv":271,"./dv.js":271,"./el":272,"./el.js":272,"./en-au":273,"./en-au.js":273,"./en-ca":274,"./en-ca.js":274,"./en-gb":275,"./en-gb.js":275,"./en-ie":276,"./en-ie.js":276,"./en-il":277,"./en-il.js":277,"./en-in":278,"./en-in.js":278,"./en-nz":279,"./en-nz.js":279,"./en-sg":280,"./en-sg.js":280,"./eo":281,"./eo.js":281,"./es":282,"./es-do":283,"./es-do.js":283,"./es-us":284,"./es-us.js":284,"./es.js":282,"./et":285,"./et.js":285,"./eu":286,"./eu.js":286,"./fa":287,"./fa.js":287,"./fi":288,"./fi.js":288,"./fil":289,"./fil.js":289,"./fo":290,"./fo.js":290,"./fr":291,"./fr-ca":292,"./fr-ca.js":292,"./fr-ch":293,"./fr-ch.js":293,"./fr.js":291,"./fy":294,"./fy.js":294,"./ga":295,"./ga.js":295,"./gd":296,"./gd.js":296,"./gl":297,"./gl.js":297,"./gom-deva":298,"./gom-deva.js":298,"./gom-latn":299,"./gom-latn.js":299,"./gu":300,"./gu.js":300,"./he":301,"./he.js":301,"./hi":302,"./hi.js":302,"./hr":303,"./hr.js":303,"./hu":304,"./hu.js":304,"./hy-am":305,"./hy-am.js":305,"./id":306,"./id.js":306,"./is":307,"./is.js":307,"./it":308,"./it-ch":309,"./it-ch.js":309,"./it.js":308,"./ja":310,"./ja.js":310,"./jv":311,"./jv.js":311,"./ka":312,"./ka.js":312,"./kk":313,"./kk.js":313,"./km":314,"./km.js":314,"./kn":315,"./kn.js":315,"./ko":316,"./ko.js":316,"./ku":317,"./ku.js":317,"./ky":318,"./ky.js":318,"./lb":319,"./lb.js":319,"./lo":320,"./lo.js":320,"./lt":321,"./lt.js":321,"./lv":322,"./lv.js":322,"./me":323,"./me.js":323,"./mi":324,"./mi.js":324,"./mk":325,"./mk.js":325,"./ml":326,"./ml.js":326,"./mn":327,"./mn.js":327,"./mr":328,"./mr.js":328,"./ms":329,"./ms-my":330,"./ms-my.js":330,"./ms.js":329,"./mt":331,"./mt.js":331,"./my":332,"./my.js":332,"./nb":333,"./nb.js":333,"./ne":334,"./ne.js":334,"./nl":335,"./nl-be":336,"./nl-be.js":336,"./nl.js":335,"./nn":337,"./nn.js":337,"./oc-lnc":338,"./oc-lnc.js":338,"./pa-in":339,"./pa-in.js":339,"./pl":340,"./pl.js":340,"./pt":341,"./pt-br":342,"./pt-br.js":342,"./pt.js":341,"./ro":343,"./ro.js":343,"./ru":344,"./ru.js":344,"./sd":345,"./sd.js":345,"./se":346,"./se.js":346,"./si":347,"./si.js":347,"./sk":348,"./sk.js":348,"./sl":349,"./sl.js":349,"./sq":350,"./sq.js":350,"./sr":351,"./sr-cyrl":352,"./sr-cyrl.js":352,"./sr.js":351,"./ss":353,"./ss.js":353,"./sv":354,"./sv.js":354,"./sw":355,"./sw.js":355,"./ta":356,"./ta.js":356,"./te":357,"./te.js":357,"./tet":358,"./tet.js":358,"./tg":359,"./tg.js":359,"./th":360,"./th.js":360,"./tk":361,"./tk.js":361,"./tl-ph":362,"./tl-ph.js":362,"./tlh":363,"./tlh.js":363,"./tr":364,"./tr.js":364,"./tzl":365,"./tzl.js":365,"./tzm":366,"./tzm-latn":367,"./tzm-latn.js":367,"./tzm.js":366,"./ug-cn":368,"./ug-cn.js":368,"./uk":369,"./uk.js":369,"./ur":370,"./ur.js":370,"./uz":371,"./uz-latn":372,"./uz-latn.js":372,"./uz.js":371,"./vi":373,"./vi.js":373,"./x-pseudo":374,"./x-pseudo.js":374,"./yo":375,"./yo.js":375,"./zh-cn":376,"./zh-cn.js":376,"./zh-hk":377,"./zh-hk.js":377,"./zh-mo":378,"./zh-mo.js":378,"./zh-tw":379,"./zh-tw.js":379};function r(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id=382},384:function(t,e){},390:function(t,e,s){"use strict";var a=s(384),r=s.n(a);e.default=r.a},394:function(t){t.exports=JSON.parse('{"/category/album-of-the-week":[1,"1713c33d"],"/category/album-of-the-week/2":[1,"2e66f64c"],"/category/best":[1,"7374fed1"],"/category/cinema":[1,"c0709d44"],"/category/features":[1,"167ce31a"],"/category/our-picks":[1,"8f46a89a"],"/category/reviews":[1,"6c4b034e"],"/category/uncategorized":[1,"7e60b1ae"],"/category/video-of-the-week":[1,"4d3a0a36"]}')},398:function(t,e,s){"use strict";s.r(e);var a=s(380),r=s(381),n={components:{Post:a.a,Pagination:r.a},metaInfo:function(){return{title:this.$page.category.title}}},i=s(12),o=s(390),l=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("h1",{staticClass:"text-center text-uppercase h5 font-family-sans-serif mb-5"},[this._v("Category: "+this._s(this.$page.category.title)+" ")]),this._l(this.$page.category.belongsTo.edges,(function(t){var s=t.node;return e("Post",{key:s.id,attrs:{post:s}})})),e("Pagination",{attrs:{info:this.$page.category.belongsTo.pageInfo}})],2)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(l);e.default=l.exports}}]);