(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[544],{6200:function(t,r,e){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},o=this&&this.__awaiter||function(t,r,e,n){return new(e||(e=Promise))(function(o,i){function a(t){try{s(n.next(t))}catch(t){i(t)}}function u(t){try{s(n.throw(t))}catch(t){i(t)}}function s(t){var r;t.done?o(t.value):((r=t.value)instanceof e?r:new e(function(t){t(r)})).then(a,u)}s((n=n.apply(t,r||[])).next())})},i=this&&this.__generator||function(t,r){var e,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw TypeError("Generator is already executing.");for(;a;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=r.call(t,a)}catch(t){i=[6,t],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},a=this&&this.__rest||function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>r.indexOf(n)&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)0>r.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]]);return e};Object.defineProperty(r,"__esModule",{value:!0}),r.withSuperJSONPage=r.deserializeProps=r.withSuperJSONProps=void 0;var u=e(8679),s=e(7294),f=e(4419);function c(t){var r=t._superjson,e=a(t,["_superjson"]);return f.default.deserialize({json:e,meta:r})}r.withSuperJSONProps=function(t,r){return void 0===r&&(r=[]),function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return o(this,void 0,void 0,function(){var o,a,u,s,c,l;return i(this,function(i){switch(i.label){case 0:return[4,t.apply(void 0,e)];case 1:if(!("props"in(o=i.sent()))||!o.props)return[2,o];return a=r.map(function(t){var r=o.props[t];return delete o.props[t],r}),s=(u=f.default.serialize(o.props)).json,c=u.meta,l=s,c&&(l._superjson=c),r.forEach(function(t,r){var e=a[r];void 0!==e&&(l[t]=e)}),[2,n(n({},o),{props:l})]}})})}},r.deserializeProps=c,r.withSuperJSONPage=function(t){function r(r){return s.createElement(t,n({},c(r)))}return u(r,t),r}},3544:function(t,r,e){t.exports=e(6200)},8679:function(t,r,e){"use strict";var n=e(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function s(t){return n.isMemo(t)?a:u[t.$$typeof]||o}u[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[n.Memo]=a;var f=Object.defineProperty,c=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(r,e,n){if("string"!=typeof e){if(d){var o=y(e);o&&o!==d&&t(r,o,n)}var a=c(e);l&&(a=a.concat(l(e)));for(var u=s(r),m=s(e),v=0;v<a.length;++v){var h=a[v];if(!i[h]&&!(n&&n[h])&&!(m&&m[h])&&!(u&&u[h])){var g=p(e,h);try{f(r,h,g)}catch(t){}}}}return r}},9921:function(t,r){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,o=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,u=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,v=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,w=e?Symbol.for("react.scope"):60119;function O(t){if("object"==typeof t&&null!==t){var r=t.$$typeof;switch(r){case n:switch(t=t.type){case c:case l:case i:case u:case a:case y:return t;default:switch(t=t&&t.$$typeof){case f:case p:case v:case m:case s:return t;default:return r}}case o:return r}}}function S(t){return O(t)===l}r.AsyncMode=c,r.ConcurrentMode=l,r.ContextConsumer=f,r.ContextProvider=s,r.Element=n,r.ForwardRef=p,r.Fragment=i,r.Lazy=v,r.Memo=m,r.Portal=o,r.Profiler=u,r.StrictMode=a,r.Suspense=y,r.isAsyncMode=function(t){return S(t)||O(t)===c},r.isConcurrentMode=S,r.isContextConsumer=function(t){return O(t)===f},r.isContextProvider=function(t){return O(t)===s},r.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===n},r.isForwardRef=function(t){return O(t)===p},r.isFragment=function(t){return O(t)===i},r.isLazy=function(t){return O(t)===v},r.isMemo=function(t){return O(t)===m},r.isPortal=function(t){return O(t)===o},r.isProfiler=function(t){return O(t)===u},r.isStrictMode=function(t){return O(t)===a},r.isSuspense=function(t){return O(t)===y},r.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===l||t===u||t===a||t===y||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===v||t.$$typeof===m||t.$$typeof===s||t.$$typeof===f||t.$$typeof===p||t.$$typeof===g||t.$$typeof===b||t.$$typeof===w||t.$$typeof===h)},r.typeOf=O},9864:function(t,r,e){"use strict";t.exports=e(9921)},4419:function(t,r,e){"use strict";e.r(r),e.d(r,{SuperJSON:function(){return tt},allowErrorProps:function(){return tf},default:function(){return tr},deserialize:function(){return tn},parse:function(){return ti},registerClass:function(){return ta},registerCustom:function(){return tu},registerSymbol:function(){return ts},serialize:function(){return te},stringify:function(){return to}});var n,o,i,a=function(){function t(){this.keyToValue=new Map,this.valueToKey=new Map}return t.prototype.set=function(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)},t.prototype.getByKey=function(t){return this.keyToValue.get(t)},t.prototype.getByValue=function(t){return this.valueToKey.get(t)},t.prototype.clear=function(){this.keyToValue.clear(),this.valueToKey.clear()},t}(),u=function(){function t(t){this.generateIdentifier=t,this.kv=new a}return t.prototype.register=function(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))},t.prototype.clear=function(){this.kv.clear()},t.prototype.getIdentifier=function(t){return this.kv.getByValue(t)},t.prototype.getValue=function(t){return this.kv.getByKey(t)},t}(),s=(n=function(t,r){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}),f=function(t){function r(){var r=t.call(this,function(t){return t.name})||this;return r.classToAllowedProps=new Map,r}return s(r,t),r.prototype.register=function(r,e){"object"==typeof e?(e.allowProps&&this.classToAllowedProps.set(r,e.allowProps),t.prototype.register.call(this,r,e.identifier)):t.prototype.register.call(this,r,e)},r.prototype.getAllowedProps=function(t){return this.classToAllowedProps.get(t)},r}(u),c=function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return a};function l(t,r){Object.entries(t).forEach(function(t){var e=c(t,2),n=e[0];return r(e[1],n)})}function p(t,r){return -1!==t.indexOf(r)}function y(t,r){for(var e=0;e<t.length;e++){var n=t[e];if(r(n))return n}}var d=function(){function t(){this.transfomers={}}return t.prototype.register=function(t){this.transfomers[t.name]=t},t.prototype.findApplicable=function(t){return function(t,r){var e=function(t){if("values"in Object)return Object.values(t);var r=[];for(var e in t)t.hasOwnProperty(e)&&r.push(t[e]);return r}(t);if("find"in e)return e.find(r);for(var n=0;n<e.length;n++){var o=e[n];if(r(o))return o}}(this.transfomers,function(r){return r.isApplicable(t)})},t.prototype.findByName=function(t){return this.transfomers[t]},t}(),m=function(t){return void 0===t},v=function(t){return"object"==typeof t&&null!==t&&t!==Object.prototype&&(null===Object.getPrototypeOf(t)||Object.getPrototypeOf(t)===Object.prototype)},h=function(t){return v(t)&&0===Object.keys(t).length},g=function(t){return Array.isArray(t)},b=function(t){return t instanceof Map},w=function(t){return t instanceof Set},O=function(t){return"Symbol"===Object.prototype.toString.call(t).slice(8,-1)},S=function(t){return"number"==typeof t&&isNaN(t)},P=function(t){return t.replace(/\./g,"\\.")},j=function(t){return t.map(String).map(P).join(".")},E=function(t){for(var r=[],e="",n=0;n<t.length;n++){var o=t.charAt(n);if("\\"===o&&"."===t.charAt(n+1)){e+=".",n++;continue}if("."===o){r.push(e),e="";continue}e+=o}var i=e;return r.push(i),r},k=function(){return(k=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},_=function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return a},I=function(t,r){for(var e=0,n=r.length,o=t.length;e<n;e++,o++)t[o]=r[e];return t};function x(t,r,e,n){return{isApplicable:t,annotation:r,transform:e,untransform:n}}var A=[x(m,"undefined",function(){return null},function(){}),x(function(t){return"bigint"==typeof t},"bigint",function(t){return t.toString()},function(t){return"undefined"!=typeof BigInt?BigInt(t):(console.error("Please add a BigInt polyfill."),t)}),x(function(t){return t instanceof Date&&!isNaN(t.valueOf())},"Date",function(t){return t.toISOString()},function(t){return new Date(t)}),x(function(t){return t instanceof Error},"Error",function(t,r){var e={name:t.name,message:t.message};return r.allowedErrorProps.forEach(function(r){e[r]=t[r]}),e},function(t,r){var e=Error(t.message);return e.name=t.name,e.stack=t.stack,r.allowedErrorProps.forEach(function(r){e[r]=t[r]}),e}),x(function(t){return t instanceof RegExp},"regexp",function(t){return""+t},function(t){return new RegExp(t.slice(1,t.lastIndexOf("/")),t.slice(t.lastIndexOf("/")+1))}),x(w,"set",function(t){return I([],_(t.values()))},function(t){return new Set(t)}),x(b,"map",function(t){return I([],_(t.entries()))},function(t){return new Map(t)}),x(function(t){var r;return S(t)||(r=t)===1/0||r===-1/0},"number",function(t){return S(t)?"NaN":t>0?"Infinity":"-Infinity"},Number),x(function(t){return 0===t&&1/t==-1/0},"number",function(){return"-0"},Number),x(function(t){return t instanceof URL},"URL",function(t){return t.toString()},function(t){return new URL(t)})];function T(t,r,e,n){return{isApplicable:t,annotation:r,transform:e,untransform:n}}var $=T(function(t,r){return!!O(t)&&!!r.symbolRegistry.getIdentifier(t)},function(t,r){return["symbol",r.symbolRegistry.getIdentifier(t)]},function(t){return t.description},function(t,r,e){var n=e.symbolRegistry.getValue(r[1]);if(!n)throw Error("Trying to deserialize unknown symbol");return n}),N=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce(function(t,r){return t[r.name]=r,t},{}),z=T(function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},function(t){return["typed-array",t.constructor.name]},function(t){return I([],_(t))},function(t,r){var e=N[r[1]];if(!e)throw Error("Trying to deserialize unknown typed array");return new e(t)});function R(t,r){return null!=t&&!!t.constructor&&!!r.classRegistry.getIdentifier(t.constructor)}var C=T(R,function(t,r){return["class",r.classRegistry.getIdentifier(t.constructor)]},function(t,r){var e=r.classRegistry.getAllowedProps(t.constructor);if(!e)return k({},t);var n={};return e.forEach(function(r){n[r]=t[r]}),n},function(t,r,e){var n=e.classRegistry.getValue(r[1]);if(!n)throw Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");return Object.assign(Object.create(n.prototype),t)}),V=T(function(t,r){return!!r.customTransformerRegistry.findApplicable(t)},function(t,r){return["custom",r.customTransformerRegistry.findApplicable(t).name]},function(t,r){return r.customTransformerRegistry.findApplicable(t).serialize(t)},function(t,r,e){var n=e.customTransformerRegistry.findByName(r[1]);if(!n)throw Error("Trying to deserialize unknown custom value");return n.deserialize(t)}),M=[C,$,V,z],B=function(t,r){var e=y(M,function(e){return e.isApplicable(t,r)});if(e)return{value:e.transform(t,r),type:e.annotation(t,r)};var n=y(A,function(e){return e.isApplicable(t,r)});if(n)return{value:n.transform(t,r),type:n.annotation}},U={};A.forEach(function(t){U[t.annotation]=t});var F=function(t,r,e){if(g(r))switch(r[0]){case"symbol":return $.untransform(t,r,e);case"class":return C.untransform(t,r,e);case"custom":return V.untransform(t,r,e);case"typed-array":return z.untransform(t,r,e);default:throw Error("Unknown transformation: "+r)}else{var n=U[r];if(!n)throw Error("Unknown transformation: "+r);return n.untransform(t,e)}},D=function(t,r){for(var e=t.keys();r>0;)e.next(),r--;return e.next().value};function J(t){if(p(t,"__proto__"))throw Error("__proto__ is not allowed as a property");if(p(t,"prototype"))throw Error("prototype is not allowed as a property");if(p(t,"constructor"))throw Error("constructor is not allowed as a property")}var K=function(t,r){J(r);for(var e=0;e<r.length;e++){var n=r[e];if(w(t))t=D(t,+n);else if(b(t)){var o=+n,i=0==+r[++e]?"key":"value",a=D(t,o);switch(i){case"key":t=a;break;case"value":t=t.get(a)}}else t=t[n]}return t},L=function(t,r,e){if(J(r),0===r.length)return e(t);for(var n=t,o=0;o<r.length-1;o++){var i=r[o];if(g(n))n=n[+i];else if(v(n))n=n[i];else if(w(n)){var a=+i;n=D(n,a)}else if(b(n)){if(o===r.length-2)break;var a=+i,u=0==+r[++o]?"key":"value",s=D(n,a);switch(u){case"key":n=s;break;case"value":n=n.get(s)}}}var f=r[r.length-1];if(g(n)?n[+f]=e(n[+f]):v(n)&&(n[f]=e(n[f])),w(n)){var c=D(n,+f),l=e(c);c!==l&&(n.delete(c),n.add(l))}if(b(n)){var a=+r[r.length-2],p=D(n,a),u=0==+f?"key":"value";switch(u){case"key":var y=e(p);n.set(y,n.get(p)),y!==p&&n.delete(p);break;case"value":n.set(p,e(n.get(p)))}}return t},q=function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return a},G=function(t,r){for(var e=0,n=r.length,o=t.length;e<n;e++,o++)t[o]=r[e];return t},H=function(t,r,e,n,o,i,a){void 0===o&&(o=[]),void 0===i&&(i=[]),void 0===a&&(a=new Map);var u,s,f="boolean"==typeof(u=t)||null===u||m(u)||"number"==typeof u&&!isNaN(u)||"string"==typeof u||O(u);if(!f){c=o,(y=r.get(t))?y.push(c):r.set(t,[c]);var c,y,d=a.get(t);if(d)return n?{transformedValue:null}:d}if(!(v(t)||g(t)||b(t)||w(t)||R(t,e))){var S=B(t,e),j=S?{transformedValue:S.value,annotations:[S.type]}:{transformedValue:t};return f||a.set(t,j),j}if(p(i,t))return{transformedValue:null};var E=B(t,e),k=null!==(s=null==E?void 0:E.value)&&void 0!==s?s:t,_=g(k)?[]:{},I={};l(k,function(u,s){var f=H(u,r,e,n,G(G([],q(o)),[s]),G(G([],q(i)),[t]),a);_[s]=f.transformedValue,g(f.annotations)?I[s]=f.annotations:v(f.annotations)&&l(f.annotations,function(t,r){I[P(s)+"."+r]=t})});var x=h(I)?{transformedValue:_,annotations:E?[E.type]:void 0}:{transformedValue:_,annotations:E?[E.type,I]:I};return f||a.set(t,x),x};function Q(t){return Object.prototype.toString.call(t).slice(8,-1)}function W(t){return"Array"===Q(t)}o=function(t){return"Null"===Q(t)},i=function(t){return"Undefined"===Q(t)},t=>o(t)||i(t)||!1;var X=function(){return(X=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},Y=function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return a},Z=function(t,r){for(var e=0,n=r.length,o=t.length;e<n;e++,o++)t[o]=r[e];return t},tt=function(){function t(t){var r=(void 0===t?{}:t).dedupe;this.classRegistry=new f,this.symbolRegistry=new u(function(t){var r;return null!==(r=t.description)&&void 0!==r?r:""}),this.customTransformerRegistry=new d,this.allowedErrorProps=[],this.dedupe=void 0!==r&&r}return t.prototype.serialize=function(t){var r,e,n,o=new Map,i=H(t,o,this,this.dedupe),a={json:i.transformedValue};i.annotations&&(a.meta=X(X({},a.meta),{values:i.annotations}));var u=(r=this.dedupe,e={},n=void 0,(o.forEach(function(t){if(!(t.length<=1)){r||(t=t.map(function(t){return t.map(String)}).sort(function(t,r){return t.length-r.length}));var o=q(t),i=o[0],a=o.slice(1);0===i.length?n=a.map(j):e[j(i)]=a.map(j)}}),n)?h(e)?[n]:[n,e]:h(e)?void 0:e);return u&&(a.meta=X(X({},a.meta),{referentialEqualities:u})),a},t.prototype.deserialize=function(t){var r,e,n,o=t.json,i=t.meta,a=function t(r,e={}){return W(r)?r.map(r=>t(r,e)):!function(t){if("Object"!==Q(t))return!1;let r=Object.getPrototypeOf(t);return!!r&&r.constructor===Object&&r===Object.prototype}(r)?r:[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)].reduce((n,o)=>{if(W(e.props)&&!e.props.includes(o))return n;let i=t(r[o],e);return function(t,r,e,n,o){let i=({}).propertyIsEnumerable.call(n,r)?"enumerable":"nonenumerable";"enumerable"===i&&(t[r]=e),o&&"nonenumerable"===i&&Object.defineProperty(t,r,{value:e,enumerable:!1,writable:!0,configurable:!0})}(n,o,i,r,e.nonenumerable),n},{})}(o);return(null==i?void 0:i.values)&&(r=a,e=i.values,n=this,function t(r,e,n){if(void 0===n&&(n=[]),r){if(!g(r)){l(r,function(r,o){return t(r,e,G(G([],q(n)),q(E(o))))});return}var o=q(r,2),i=o[0],a=o[1];a&&l(a,function(r,o){t(r,e,G(G([],q(n)),q(E(o))))}),e(i,n)}}(e,function(t,e){r=L(r,e,function(r){return F(r,t,n)})}),a=r),(null==i?void 0:i.referentialEqualities)&&(a=function(t,r){function e(r,e){var n=K(t,E(e));r.map(E).forEach(function(r){t=L(t,r,function(){return n})})}if(g(r)){var n=q(r,2),o=n[0],i=n[1];o.forEach(function(r){t=L(t,E(r),function(){return t})}),i&&l(i,e)}else l(r,e);return t}(a,i.referentialEqualities)),a},t.prototype.stringify=function(t){return JSON.stringify(this.serialize(t))},t.prototype.parse=function(t){return this.deserialize(JSON.parse(t))},t.prototype.registerClass=function(t,r){this.classRegistry.register(t,r)},t.prototype.registerSymbol=function(t,r){this.symbolRegistry.register(t,r)},t.prototype.registerCustom=function(t,r){this.customTransformerRegistry.register(X({name:r},t))},t.prototype.allowErrorProps=function(){for(var t,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];(t=this.allowedErrorProps).push.apply(t,Z([],Y(r)))},t.defaultInstance=new t,t.serialize=t.defaultInstance.serialize.bind(t.defaultInstance),t.deserialize=t.defaultInstance.deserialize.bind(t.defaultInstance),t.stringify=t.defaultInstance.stringify.bind(t.defaultInstance),t.parse=t.defaultInstance.parse.bind(t.defaultInstance),t.registerClass=t.defaultInstance.registerClass.bind(t.defaultInstance),t.registerSymbol=t.defaultInstance.registerSymbol.bind(t.defaultInstance),t.registerCustom=t.defaultInstance.registerCustom.bind(t.defaultInstance),t.allowErrorProps=t.defaultInstance.allowErrorProps.bind(t.defaultInstance),t}(),tr=tt,te=tt.serialize,tn=tt.deserialize,to=tt.stringify,ti=tt.parse,ta=tt.registerClass,tu=tt.registerCustom,ts=tt.registerSymbol,tf=tt.allowErrorProps}}]);