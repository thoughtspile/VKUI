!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build"));else if("function"==typeof define&&define.amd)define(["prop-types","react","svg-baker-runtime/browser-symbol","svg-sprite-loader/runtime/browser-sprite.build"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build")):r(e["prop-types"],e.react,e["svg-baker-runtime/browser-symbol"],e["svg-sprite-loader/runtime/browser-sprite.build"]);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(e,r,t,o){return function(e){function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=68)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},2:function(e,r){e.exports=t},3:function(e,r){e.exports=o},68:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var r="Icon Icon--"+v+" Icon--"+d.id+" "+(e.className||"");return c.default.createElement("div",{className:r,style:n({width:b+"px",height:m+"px"},e.style),onClick:e.onClick},c.default.createElement("svg",{viewBox:d.viewBox,width:b,height:m,style:{display:"block"}},c.default.createElement("use",{xlinkHref:"#"+d.id,style:{fill:"currentColor",color:e.fill}})))}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(2),u=o(s),l=t(3),a=o(l),p=t(1),c=o(p),f=t(0),d=(o(f),new u.default({id:"home_24",use:"home_24-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" id="home_24"><path d="M10,14 L14,14 L14,20 L18,20 C18.5522847,20 19,19.5522847 19,19 L19,12 L20.6970209,12 C20.9731633,12 21.1970209,11.7761424 21.1970209,11.5 C21.1970209,11.3582567 21.1368602,11.2231742 21.0315033,11.1283529 L12.3344824,3.30103413 C12.1443299,3.12989689 11.8556701,3.12989689 11.6655176,3.30103413 L2.96849675,11.1283529 C2.76324174,11.3130824 2.74660253,11.6292274 2.93133204,11.8344824 C3.02615328,11.9398393 3.16123586,12 3.30297911,12 L5,12 L5,19 C5,19.5522847 5.44771525,20 6,20 L10,20 L10,14 Z" /></symbol>'})),b=(a.default.add(d),d.viewBox.split(" ")[2]),m=d.viewBox.split(" ")[3],v=Math.max(b,m);i.displayName="icon-"+d.id,r.default=i}})});