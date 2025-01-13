// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrtf@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-to-word@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-from-word@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pi@v0.1.0-esm/index.mjs";function d(t){return 0===t?.16666586697101593:s(.16666586697101593+s(t*s(-.04274342209100723+s(-.008656363002955914*t))))}var o=1.5707962513,a=7.5497894159e-8,l=-.7066296339,j=s(o+a);function f(f){var p,b,h,v,c,u,x,g,w,N;return t(f)||(f=s(f))<-1||f>1?NaN:1===f?0:-1===f?n:(h=r(f))<.5?h<=1.4901161193847656e-8?j:(v=s(f*f),c=s(v*d(v)),u=s(1+s(v*l)),x=s(c/u),s(o-s(f-s(a-s(f*x))))):f<-.5?(v=s(.5*s(1+f)),c=s(v*d(v)),u=s(1+s(v*l)),g=e(v),x=s(c/u),N=s(s(x*g)-a),s(3.1415925026-s(2*s(g+N)))):(v=s(.5*s(1-f)),g=e(v),p=m(g),b=i(-4096&p),w=s(s(v-s(b*b))/s(g+b)),c=s(v*d(v)),u=s(1+s(v*l)),x=s(c/u),N=s(s(x*g)+w),s(2*s(b+N)))}export{f as default};
//# sourceMappingURL=index.mjs.map
