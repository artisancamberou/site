(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[61],{680:function(t,n,e){"use strict";e.r(n),e.d(n,"page",(function(){return g}));var i=e(0),o=e(29),r=e(81),a=e(308),s=e(7),c=e(16),u=function(t){return t+"-screenIn"},p=function(){function t(t){this.animator=t,this.definitions={},this.sessionState={played:new Map,running:new Map}}return t.prototype._shouldSkipPlayedAnimation=function(t){var n=this.sessionState.played.has(t),e=this.sessionState.played.get(t)||{},i=e.playOnce,o=e.persistOnNav;return n&&(i||o)},t.prototype._hideComponent=function(t){var n=document.querySelector("#"+t);n&&(n.style.opacity=0)},t.prototype.unhideComponent=function(t){var n=document.querySelector("#"+t);n&&(n.style.opacity="",n.style.visibility="inherit")},t.prototype.updateDefinitions=function(t){this.definitions=Object(i.a)(Object(i.a)({},this.definitions),t)},t.prototype._hideCompBeforeAnimation=function(t){var n=u(t);this._shouldSkipPlayedAnimation(n)?this.unhideComponent(t):this._hideComponent(t)},t.prototype.hideBeforeAnimation=function(t){var n=this;this.getCompsToHide(t).forEach((function(t){var e=t.compId;n._hideCompBeforeAnimation(e)}))},t.prototype.trigger=function(t){var n=this;void 0===t&&(t=[]),t.reduce((function(t,e){var i=e.compId,o=n.definitions[i]||[];return t.concat(o)}),[]).forEach((function(t){var e=t.action,o=Object(i.f)(t,["action"]);return n.executeAnimation(e,o)}))},t.prototype.init=function(t){this.updateDefinitions(t),this.stopAnimations(),this.hideBeforeAnimation(t)},t.prototype.addDefinition=function(t){this.updateDefinitions(t)},t.prototype.executeAnimation=function(t,n){var e=this,i=n.name,o=n.targetId,r=n.duration,a=void 0===r?0:r,s=n.delay,c=void 0===s?0:s,p=n.playOnce,d=void 0!==p&&p,f=n.persistOnNav,h=void 0!==f&&f,l=n.params,m=void 0===l?{}:l,v=u(o);if(this._shouldSkipPlayedAnimation(v))this.unhideComponent(o);else{var g={name:i,targetId:o,duration:a,delay:c,params:m},y={name:"BaseClear",targetId:o,duration:0,delay:0,params:{props:"clip,clipPath,webkitClipPath,willChange,opacity,transform,transformOrigin",immediateRender:!1}};this.animator.runSequence([{type:"Animation",data:g},{type:"Animation",data:y}],{onStart:function(n){return e.sessionState.running.set(n,{targetId:o,action:t})},onComplete:function(t){return e.sessionState.running.delete(t)},onInterrupt:function(t){return e.sessionState.running.delete(t)}}),this.sessionState.played.set(v,{playOnce:d,persistOnNav:h})}},t.prototype.stopAnimations=function(t){var n=this,e=(void 0===t?{}:t).skipPersistent,i=void 0===e||e;this.sessionState.running.forEach((function(t,e){var o=t.targetId,r=u(o);i&&n.sessionState.played.get(r).persistOnNav||n.animator.kill(e,1)}))},t.prototype.getAnimationProperties=function(t){return this.animator.getAnimationProperties(t)},t.prototype.getCompsToHide=function(t){var n=this;return Object.entries(t).reduce((function(t,e){var o=Object(i.e)(e,2),r=o[0];return o[1].some((function(t){var e=t.name,i=n.animator.getAnimationProperties(e);return i&&i.hideOnStart}))&&t.push({compId:r}),t}),[])},t}(),d=e(282);function f(t){var n=t.manager,e={};function i(t){var e=t.filter((function(t){return t.visible})).map((function(t){return{compId:t.id,action:"screenIn"}}));n.trigger(e)}function o(t,n){var o=e[n]||function(t,n){var e={root:null,rootMargin:"0px",threshold:[n]};return new window.IntersectionObserver((function(n,e){var i=n.map((function(t){return{visible:t.isIntersecting,ratio:t.intersectionRatio,rect:t.intersectionRect,id:t.target.id}}));n.forEach((function(t){return t.isIntersecting&&e.unobserve(t.target)})),t(i)}),e)}(i,n);o.observe(t),e[n]||(e[n]=o)}return{start:function(t,e,i){var r=window.innerHeight;e&&o(e,e.offsetHeight>r?.01:function(t,n){var e=n.name;return t.getAnimationProperties(e).viewportThreshold}(n,i))}}}var h=e(15),l=e.n(h),m=Object(s.h)([Object(s.f)(o.d,d.a),Object(s.f)(o.b,d.a),r.a,a.a,Object(s.g)(c.a)],(function(t,n,e,o,r){return{pageWillMount:function(){return Object(i.b)(void 0,void 0,void 0,(function(){var a,s,c,u;return Object(i.d)(this,(function(d){switch(d.label){case 0:return r?[4,r.getInstance()]:[2];case 1:return a=d.sent(),s=n.get()&&n.get().screenInManager||new p(a),n.update((function(t){return Object(i.a)(Object(i.a)({},t),{screenInManager:s})})),o?(Object.keys(t).forEach((function(t){return s.unhideComponent(t)})),[2]):(s.init(t),c=f({manager:s}),u=l.a.keys(t),e.registerToCompLifeCycle(u,"screenInCallback",(function(n,e,i){var o,r=t[n];if(e!==n){var a=JSON.parse(JSON.stringify(r));a[0].targetId=e,r=a}s.addDefinition(((o={})[e]=r,o)),c.start(e,i,r[0])})),[2])}}))}))},pageWillUnmount:function(){return Object(i.b)(void 0,void 0,void 0,(function(){var n;return Object(i.d)(this,(function(i){return o||(n=l.a.keys(t),e.unregisterToCompLifeCycle(n,"screenInCallback")),[2]}))}))}}})),v=e(51),g=function(t){t(v.a.PageWillMountHandler).to(m),t(v.a.PageWillUnmountHandler).to(m)}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/screenIn.d9be245f.chunk.min.js.map