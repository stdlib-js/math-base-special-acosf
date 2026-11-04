"use strict";var O=function(e,v){return function(){try{return v||e((v={exports:{}}).exports,v),v.exports}catch(t){throw (v=0, t)}};};var P=O(function(g,L){
var s=require('@stdlib/number-float64-base-to-float32/dist');function A(e){return e===0?.16666586697101593:s(.16666586697101593+s(e*s(-.04274342209100723+s(e*-.008656363002955914))))}L.exports=A
});var _=O(function(h,S){
var r=require('@stdlib/number-float64-base-to-float32/dist'),M=require('@stdlib/math-base-assert-is-nanf/dist'),d=require('@stdlib/math-base-special-sqrtf/dist'),T=require('@stdlib/math-base-special-absf/dist'),m=require('@stdlib/number-float32-base-to-word/dist'),y=require('@stdlib/number-float32-base-from-word/dist'),F=require('@stdlib/constants-float32-pi/dist'),c=P(),W=3.1415925026,N=1.5707962513,p=75497894159e-18,b=-4096,w=14901161193847656e-24,l=-.7066296339,z=r(N+p);function H(e){var v,t,q,a,u,f,o,i,I,n;return M(e)?NaN:(e=r(e),e<-1||e>1?NaN:e===1?0:e===-1?F:(q=T(e),q<.5?q<=w?z:(a=r(e*e),u=r(a*c(a)),f=r(1+r(a*l)),o=r(u/f),r(N-r(e-r(p-r(e*o))))):e<-.5?(a=r(.5*r(1+e)),u=r(a*c(a)),f=r(1+r(a*l)),i=d(a),o=r(u/f),n=r(r(o*i)-p),r(W-r(2*r(i+n)))):(a=r(.5*r(1-e)),i=d(a),v=m(i),t=y(v&b),I=r(r(a-r(t*t))/r(i+t)),u=r(a*c(a)),f=r(1+r(a*l)),o=r(u/f),n=r(r(o*i)+I),r(2*r(t+n)))))}S.exports=H
});var K=_();module.exports=K;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
