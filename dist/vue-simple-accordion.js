!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSimpleAccordion=t():e.VueSimpleAccordion=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(5),r=o(i);e.exports=r["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{isOpen:!1}}}},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".Accordion__item{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.Accordion__heading,.Accordion__item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.Accordion__heading{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer}.Accordion__content{display:none}.is-open.Accordion__content{display:block}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){e.exports=' <div class=Accordion__item> <div class=Accordion__heading @click="isOpen = !isOpen"> <div class=Accordion__title> <slot name=title></slot> </div> <div class=Accordion__icon v-bind:class="{\'is-open\': isOpen}"> <slot name=icon></slot> </div> </div> <div class=Accordion__content v-bind:class="{\'is-open\': isOpen}"> <slot name=content></slot> </div> </div> '},function(e,t,n){var o,i;n(7),o=n(1),i=n(4),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=u[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(a(o.parts[r],t))}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(a(o.parts[r],t));u[o.id]={id:o.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],r=i[0],s=i[1],c=i[2],a=i[3],l={css:s,media:c,sourceMap:a};n[r]?n[r].parts.push(l):t.push(n[r]={id:r,parts:[l]})}return t}function r(e,t){var n=v(),o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function c(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function a(e,t){var n,o,i;if(t.singleton){var r=m++;n=h||(h=c(t)),o=l.bind(null,n,r,!1),i=l.bind(null,n,r,!0)}else n=c(t),o=d.bind(null,n),i=function(){s(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function l(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function d(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=f(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,m=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return o(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var c=n[s],a=u[c.id];a.refs--,r.push(a)}if(e){var l=i(e);o(l,t)}for(var s=0;s<r.length;s++){var a=r[s];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete u[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.id,o,""]]);n(6)(o,{});o.locals&&(e.exports=o.locals)}])});
//# sourceMappingURL=vue-simple-accordion.js.map