(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[63],{397:function(t,n){},636:function(t,n,e){"use strict";e.r(n),e.d(n,"page",(function(){return T})),e.d(n,"name",(function(){return d.b})),e.d(n,"SamePageScrollSymbol",(function(){return d.a})),e.d(n,"ISamePageScroll",(function(){return f.ISamePageScroll}));var o=e(51),r=e(314),a=e(7),c=e(29),i=e(219),u=["SCROLL_TO_TOP","SCROLL_TO_BOTTOM"],d=e(216),l=Object(a.h)([Object(a.f)(c.d,d.b),i.b],(function(t,n){var e=t.anchorDataIdToCompIdMap;return{scrollToAnchor:function(t){var o=t.anchorCompId,r=t.anchorDataId;return r&&u.includes(r)?(n.scrollToComponent(r),!0):o?(n.scrollToComponent(o),!0):!(!r||!e[r])&&(n.scrollToComponent(e[r]),!0)}}})),p=e(211),b=Object(a.h)([Object(a.f)(c.d,d.b),p.a,i.b],(function(t,n,e){var o=t.nicknameToCompIdMap,r=t.anchorDataIdToCompIdMap;return{appDidLoadPage:function(){var t=n.getCurrentRouteInfo(),a=t&&t.anchorDataId;if(a){var c=u.includes(a)?a:r[a]||o[a];e.scrollToComponent(c)}}}})),O=e(6),h=Object(a.h)([d.a,O.g],(function(t,n){return{handleClick:function(e){var o=e.getAttribute("data-anchor-comp-id")||"",r=e.getAttribute("data-anchor")||"",a=n.getRelativeUrl()===e.getAttribute("href");return o||r||!a?t.scrollToAnchor({anchorDataId:r,anchorCompId:o}):t.scrollToAnchor({anchorDataId:"SCROLL_TO_TOP"})}}})),f=e(397),m=e(0),g=e(312),I=Object(a.h)([Object(a.f)(c.d,d.b),Object(a.f)(c.c,d.b),g.b,g.d,O.g],(function(t,n,e,o,r){return{pageWillMount:function(){return Object(m.b)(void 0,void 0,void 0,(function(){var a,c,i,u;return Object(m.d)(this,(function(d){return a=r.getRelativeUrl(),c="./"===a?[]:n.compsWithTopBottomAnchor,(i=Object(m.g)(t.compsWithCurrentInnerRouteDynamicPageLink,n.compsWithCurrentInnerRouteDynamicPageLink,c)).length>0&&(u=i.reduce((function(t,n){var r,c="QuickActionBarItem"===o.get(n).componentType,i=c?"QUICK_ACTION_BAR":n,u=c?function(t,n){return{items:e.get("QUICK_ACTION_BAR").items.map((function(e){return e.compId===t?Object(m.a)(Object(m.a)({},e),{link:Object(m.a)(Object(m.a)({},e.link),{href:n})}):e}))}}(n,a):{link:Object(m.a)(Object(m.a)({},e.get(i).link),{href:a})};return Object(m.a)(Object(m.a)({},t),((r={})[i]=u,r))}),{}),e.update(u)),[2]}))}))}}})),T=function(t){t(o.a.AppDidLoadPageHandler).to(b),t(d.a).to(l),t(r.a).to(h),t(o.a.PageWillMountHandler).to(I)}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/scrollToAnchor.027b855e.chunk.min.js.map