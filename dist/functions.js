!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=121)}({121:function(t,e,n){"use strict";function r(t,e,n,r,o,u,i){try{var a=t[u](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,u){var i=t.apply(e,n);function a(t){r(i,o,u,a,c,"next",t)}function c(t){r(i,o,u,a,c,"throw",t)}a(void 0)}))}}n.r(e),n.d(e,"Projetos",(function(){return i})),n.d(e,"Versao",(function(){return c})),n.d(e,"http",(function(){return f}));var u="http://10.1.0.5:5002/api/";function i(t){return a.apply(this,arguments)}function a(){return(a=o(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u+"Projeto?posicao="+e,t.next=3,f(n);case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return s.apply(this,arguments)}function s(){return(s=o(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u+"Projeto/Version",t.next=3,f("http://10.1.0.5:5002/api/Projeto/Version");case 3:return e=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=o(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}CustomFunctions.associate("PROJETOS",i),CustomFunctions.associate("ADD",(function(t,e){return t+e})),CustomFunctions.associate("CLOCK",(function(t){var e=setInterval((function(){var e=(new Date).toLocaleTimeString();t.setResult(e)}),1e3);t.onCanceled=function(){clearInterval(e)}})),CustomFunctions.associate("INCREMENT",(function(t,e){var n=0,r=setInterval((function(){n+=t,e.setResult(n)}),1e3);e.onCanceled=function(){clearInterval(r)}})),CustomFunctions.associate("LOG",(function(t){return console.log(t),t})),CustomFunctions.associate("VERSAO",c)}});
//# sourceMappingURL=functions.js.map