"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=u(function(z,s){
var j=require('@stdlib/strided-base-dmap/dist'),x=require('@stdlib/math-base-special-trunc/dist');function l(e,r,a,t,i){return j(e,r,a,t,i,x)}s.exports=l
});var q=u(function(A,c){
var R=require('@stdlib/strided-base-dmap/dist').ndarray,_=require('@stdlib/math-base-special-trunc/dist');function E(e,r,a,t,i,y,f){return R(e,r,a,t,i,y,f,_)}c.exports=E
});var p=u(function(B,o){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),b=q();O(d,"ndarray",b);o.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=p(),n,m=h(g(__dirname,"./native.js"));m instanceof Error?n=k:n=m;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
