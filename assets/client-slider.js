"use strict";function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function _next(a){asyncGeneratorStep(f,d,e,_next,_throw,"next",a)}function _throw(a){asyncGeneratorStep(f,d,e,_next,_throw,"throw",a)}var f=a.apply(b,c);_next(void 0)})}}function ufrSetUpSliders(a){function getPosts(){return _getPosts.apply(this,arguments)}function _getPosts(){return _getPosts=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(a,b,c,d){var e;return regeneratorRuntime.wrap(function _callee$(f){for(;;)switch(f.prev=f.next){case 0:e=ufrGlobals.siteUrl+"/wp-json/wp/v2/posts?_embed=&_locale=user&per_page=".concat(d),f.t0=a,f.next="most-recent"===f.t0?4:"most-seen"===f.t0?7:"category"===f.t0?10:"tag"===f.t0?13:16;break;case 4:return f.next=6,fetch(e);case 6:return f.abrupt("return",f.sent.json());case 7:return f.next=9,fetch(ufrGlobals.siteUrl+"/wp-json/ufr/most-seen-posts?quantity=".concat(d));case 9:return f.abrupt("return",f.sent.json());case 10:return f.next=12,fetch(e+"&categories=".concat(b));case 12:return f.abrupt("return",f.sent.json());case 13:return f.next=15,fetch(e+"&tags=".concat(c));case 15:return f.abrupt("return",f.sent.json());case 16:case"end":return f.stop();}},_callee)})),_getPosts.apply(this,arguments)}function holdRenderForPosts(){return _holdRenderForPosts.apply(this,arguments)}function _holdRenderForPosts(){return _holdRenderForPosts=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;return regeneratorRuntime.wrap(function _callee2$(p){for(;;)switch(p.prev=p.next){case 0:if(b=a.usePosts,c=a.useLegends,d=a.postType,e=a.postCategory,f=a.sliderID,g=a.postsQuantity,h=a.duration,i=a.postTag,j=new Event("ufrLoadPosts"),b){p.next=4;break}return p.abrupt("return",window.dispatchEvent(j));case 4:return k=document.getElementById(f),l=document.getElementById("".concat(f,"-thumbnail")),m=k.querySelector(".splide__list"),n=l.querySelector(".splide__list"),p.next=10,getPosts(d,e,i,g);case 10:o=p.sent,o&&o.forEach(function(a){var b,e,f,g,i=a.link,j=a.title,k=a._embedded,l=a.thumbnail,o=ufrGlobals.themeUrl+"/assets/img/logo/ufr-bg.png",p="",q=k?null===(b=k["wp:featuredmedia"])||void 0===b||null===(e=b[0])||void 0===e?void 0:e.alt_text:void 0,r=k?null===(f=k["wp:featuredmedia"])||void 0===f||null===(g=f[0])||void 0===g?void 0:g.source_url:void 0;r&&(o=r),q&&(p=q),l&&(o=l),"most-seen"===d||(j=j.rendered);var s=c?"<div class=\"description\">".concat(j,"</div>"):"";m.innerHTML+="\n\t\t\t\t<li class=\"splide__slide\"\n\t\t\t\t\tdata-splide-interval=\"".concat(1e3*h,"\"\n\t\t\t\t\tstyle=\"cursor: pointer;\"\n\t\t\t\t\tonclick=\"location.href = '").concat(i,"'\"\n\t\t\t\t\tonauxclick=\"window.open('").concat(i,"', '_blank')\"\n\t\t\t\t>\n\t\t\t\t\t<img src=\"").concat(o,"\" alt=\"").concat(p,"\" />\n\n\t\t\t\t\t").concat(s,"\n\t\t\t\t</li>\n\t\t\t"),n.innerHTML+="\n\t\t\t\t<li class=\"splide__slide\">\n\t\t\t\t\t<img src=\"".concat(o,"\" alt=\"").concat(p,"\" />\n\t\t\t\t</li>\n\t\t\t")}),window.dispatchEvent(j);case 13:case"end":return p.stop();}},_callee2)})),_holdRenderForPosts.apply(this,arguments)}var b=a.autoplay,c=a.height,d=a.sliderID;window.addEventListener("ufrLoadPosts",function(){var a=document.getElementById(d),e=document.getElementById("".concat(d,"-thumbnail")),f=new Splide(a,{type:"fade",rewind:!0,pagination:!1,arrows:!0,cover:!0,height:c,autoplay:b}),g=new Splide(e,{fixedWidth:100,fixedHeight:60,gap:10,rewind:!0,pagination:!1,cover:!0,arrows:!1,isNavigation:!0,breakpoints:{600:{fixedWidth:60,fixedHeight:44}}});f.sync(g),f.mount(),g.mount()}),void holdRenderForPosts(a)}
