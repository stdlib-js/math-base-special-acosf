"use strict";var O=function(e,v){return function(){return v||e((v={exports:{}}).exports,v),v.exports}};var P=O(function(g,L){
var s=require('@stdlib/number-float64-base-to-float32/dist');function A(e){return e===0?.16666586697101593:s(.16666586697101593+s(e*s(-.04274342209100723+s(e*-.008656363002955914))))}L.exports=A
});var _=O(function(h,S){
var r=require('@stdlib/number-float64-base-to-float32/dist'),M=require('@stdlib/math-base-assert-is-nanf/dist'),d=require('@stdlib/math-base-special-sqrtf/dist'),T=require('@stdlib/math-base-special-absf/dist'),m=require('@stdlib/number-float32-base-to-word/dist'),y=require('@stdlib/number-float32-base-from-word/dist'),F=require('@stdlib/constants-float32-pi/dist'),c=P(),W=3.1415925026,N=1.5707962513,p=75497894159e-18,b=-4096,w=14901161193847656e-24,l=-.7066296339,z=r(N+p);function H(e){var v,o,q,a,i,u,f,t,I,n;return M(e)?NaN:(e=r(e),e<-1||e>1?NaN:e===1?0:e===-1?F:(q=T(e),q<.5?q<=w?z:(a=r(e*e),i=r(a*c(a)),u=r(1+r(a*l)),f=r(i/u),r(N-r(e-r(p-r(e*f))))):e<-.5?(a=r(.5*r(1+e)),i=r(a*c(a)),u=r(1+r(a*l)),t=d(a),f=r(i/u),n=r(r(f*t)-p),r(W-r(2*r(t+n)))):(a=r(.5*r(1-e)),t=d(a),v=m(t),o=y(v&b),I=r(r(a-r(o*o))/r(t+o)),i=r(a*c(a)),u=r(1+r(a*l)),f=r(i/u),n=r(r(f*t)+I),r(2*r(o+n)))))}S.exports=H
});var K=_();module.exports=K;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
