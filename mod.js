// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.fround?Math.fround:null;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol:void 0,a="function"==typeof e?e.toStringTag:"";var f=r&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,f,u,i;if(null==t)return n.call(t);e=t[a],i=a,r=null!=(u=t)&&o.call(u,i);try{t[a]=void 0}catch(r){return n.call(t)}return f=n.call(t),r?t[a]=e:delete t[a],f}:function(t){return n.call(t)},u="function"==typeof Float32Array;var i=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null;var y="function"==typeof Float32Array?Float32Array:void 0;var l=function(){var t,r,n;if("function"!=typeof c)return!1;try{r=new c([1,3.14,-3.14,5e40]),n=r,t=(u&&n instanceof Float32Array||"[object Float32Array]"===f(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===i}catch(r){t=!1}return t}()?y:function(){throw new Error("not implemented")},v=new l(1);var p="function"==typeof t?t:function(t){return v[0]=t,v[0]};var b=Math.sqrt;function A(t){return p(b(p(t)))}var m="function"==typeof Uint32Array;var w="function"==typeof Uint32Array?Uint32Array:null;var d="function"==typeof Uint32Array?Uint32Array:void 0;var h=function(){var t,r,n;if("function"!=typeof w)return!1;try{r=new w(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(m&&n instanceof Uint32Array||"[object Uint32Array]"===f(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?d:function(){throw new Error("not implemented")},S=new l(1),s=new h(S.buffer);var F=new h(1),U=new l(F.buffer);var g=p(3.141592653589793);function I(t){return 0===t?.16666586697101593:p(.16666586697101593+p(t*p(-.04274342209100723+p(-.008656363002955914*t))))}var N=1.5707962513,j=7.5497894159e-8,M=-.7066296339,O=p(N+j);function T(t){var r,n,o,e,a,f,u,i,c,y,l;return function(t){return t!=t}(t)||(t=p(t))<-1||t>1?NaN:1===t?0:-1===t?g:(o=function(t){return Math.abs(t)}(t),o<.5?o<=1.4901161193847656e-8?O:(e=p(t*t),a=p(e*I(e)),f=p(1+p(e*M)),u=p(a/f),p(N-p(t-p(j-p(t*u))))):t<-.5?(e=p(.5*p(1+t)),a=p(e*I(e)),f=p(1+p(e*M)),i=A(e),u=p(a/f),y=p(p(u*i)-j),p(3.1415925026-p(2*p(i+y)))):(r=function(t){return S[0]=t,s[0]}(i=A(e=p(.5*p(1-t)))),l=-4096&r,F[0]=l,n=U[0],c=p(p(e-p(n*n))/p(i+n)),a=p(e*I(e)),f=p(1+p(e*M)),u=p(a/f),y=p(p(u*i)+c),p(2*p(n+y))))}export{T as default};
//# sourceMappingURL=mod.js.map
