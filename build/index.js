/*!
 * 
 *   @hodgef/js-library-boilerplate-basic v1.0.26
 *   https://github.com/hodgef/js-library-boilerplate-basic
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MyLibrary=e():t.MyLibrary=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);e.default=function t(){var e,n,r;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),r=function(){console.log("Library method fired")},(n="myMethod")in(e=this)?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,console.log("Library constructor loaded")}},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(6)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(3)(!1);var r=n(4)(n(5));e.push([t.i,"html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  height: 100%;\n}\n\nh1 {\n  margin: 0;\n  font-weight: 300;\n}\n\n#root {\n  background: url("+r+") no-repeat 98% 2%;\n  padding: 20px;\n  height: 100%;\n  box-sizing: border-box;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof(t=t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function u(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(A(r.parts[a],e))}else{for(var s=[];a<r.parts.length;a++)s.push(A(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var g=null,h=0;function A(t,e){var n,r,o;if(e.singleton){var i=h++;n=g||(g=c(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=c(e),r=d.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=s(t,e);return u(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i],c=o[a.id];c&&(c.refs--,r.push(c))}t&&u(s(t,e),e);for(var f=0;f<r.length;f++){var l=r[f];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete o[l.id]}}}}}])}));