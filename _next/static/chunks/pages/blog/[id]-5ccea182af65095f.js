(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{3026:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[id]",function(){return r(635)}])},635:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return u}});var n=r(5893),l=r(3544),o=r(5152),a=r.n(o);r(7922);var u=!0;t.default=(0,l.withSuperJSONPage)(e=>(0,n.jsx)("div",{id:"blog-entry-page",children:(0,n.jsx)(i,{...e})}));let i=e=>{let t=a()(()=>r(5234)("./".concat(e.filename)));return(0,n.jsx)("main",{className:' [&_code[class^="language-"]]:text-[9pt] [&_code[class^="language-"]]:leading-none [&_pre[class^="language-"]]:leading-none',children:(0,n.jsx)(t,{})})}},8864:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},noSSR:function(){return a}});let n=r(8754);r(5893),r(7294);let l=n._(r(6016));function o(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}function u(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let u=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=u?u().then(o):Promise.resolve(o(()=>null))}):(delete n.webpack,delete n.modules,a(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},572:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=r(8754)._(r(7294)).default.createContext(null)},6016:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let n=r(8754)._(r(7294)),l=r(572),o=[],a=[],u=!1;function i(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class s{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function i(){if(!o){let t=new s(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!u){let e=r.webpack?r.webpack():r.modules;e&&a.push(t=>{for(let r of e)if(t.includes(r))return i()})}function d(e,t){!function(){i();let e=n.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let a=n.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),n.default.useMemo(()=>{var t;return a.loading||a.error?n.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:o.retry}):a.loaded?n.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return d.preload=()=>i(),d.displayName="LoadableComponent",n.default.forwardRef(d)}(i,e)}function c(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return c(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{c(o).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(u=!0,t());c(a,e).then(r,r)})),window.__NEXT_PRELOADREADY=d.preloadReady;let f=d},7922:function(){},5152:function(e,t,r){e.exports=r(8864)},5234:function(e,t,r){var n={"./2022-12-25T17:10:00+09:00_test.mdx":[4769,769],"./2022-12-27T21:56:00+09:00_remark-next-mdx-frontmatter.mdx":[6771,536,311,771],"./2023-03-07T09:26:00+09:00_chatgpt-integration.mdx":[6418,536,311,418],"./2023-04-07T21:15:00+09:00_not-well-documented-monaco-editor-api.mdx":[1362,536,311,362],"./hello-world.mdx":[630,630]};function l(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],l=t[0];return Promise.all(t.slice(1).map(r.e)).then(function(){return r(l)})}l.keys=function(){return Object.keys(n)},l.id=5234,e.exports=l}},function(e){e.O(0,[544,888,774,179],function(){return e(e.s=3026)}),_N_E=e.O()}]);