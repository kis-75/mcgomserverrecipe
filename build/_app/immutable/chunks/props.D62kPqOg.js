import{S as x,w as j,x as z,y as P,z as G,v as h,U as c,A,g as m,B as F,C as V,D as J,E as Q,F as W,G as B,H as C,I as M,J as L,K as X,L as k,M as p,N as ee,O as re,P as U,Q as ae,R as te,T as ne,b as Y,V as fe,W as ie,X as H,Y as se,Z as ue,_ as le,h as K,$ as ve,a0 as _e,a1 as de,a2 as ce,a3 as oe,q as ge}from"./runtime.C1M7rs0e.js";import{c as ye}from"./store.BjsWHN14.js";function w(f,u=null,y){if(typeof f!="object"||f===null||x in f)return f;const b=J(f);if(b!==j&&b!==z)return f;var i=new Map,l=Q(f),d=P(0);l&&i.set("length",P(f.length));var _;return new Proxy(f,{defineProperty(t,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&G();var a=i.get(e);return a===void 0?(a=P(r.value),i.set(e,a)):h(a,w(r.value,_)),!0},deleteProperty(t,e){var r=i.get(e);if(r===void 0)e in t&&i.set(e,P(c));else{if(l&&typeof e=="string"){var a=i.get("length"),n=Number(e);Number.isInteger(n)&&n<a.v&&h(a,n)}h(r,c),Z(d)}return!0},get(t,e,r){var o;if(e===x)return f;var a=i.get(e),n=e in t;if(a===void 0&&(!n||(o=A(t,e))!=null&&o.writable)&&(a=P(w(n?t[e]:c,_)),i.set(e,a)),a!==void 0){var s=m(a);return s===c?void 0:s}return Reflect.get(t,e,r)},getOwnPropertyDescriptor(t,e){var r=Reflect.getOwnPropertyDescriptor(t,e);if(r&&"value"in r){var a=i.get(e);a&&(r.value=m(a))}else if(r===void 0){var n=i.get(e),s=n==null?void 0:n.v;if(n!==void 0&&s!==c)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(t,e){var s;if(e===x)return!0;var r=i.get(e),a=r!==void 0&&r.v!==c||Reflect.has(t,e);if(r!==void 0||F!==null&&(!a||(s=A(t,e))!=null&&s.writable)){r===void 0&&(r=P(a?w(t[e],_):c),i.set(e,r));var n=m(r);if(n===c)return!1}return a},set(t,e,r,a){var S;var n=i.get(e),s=e in t;if(l&&e==="length")for(var o=r;o<n.v;o+=1){var g=i.get(o+"");g!==void 0?h(g,c):o in t&&(g=P(c),i.set(o+"",g))}n===void 0?(!s||(S=A(t,e))!=null&&S.writable)&&(n=P(void 0),h(n,w(r,_)),i.set(e,n)):(s=n.v!==c,h(n,w(r,_)));var R=Reflect.getOwnPropertyDescriptor(t,e);if(R!=null&&R.set&&R.set.call(a,r),!s){if(l&&typeof e=="string"){var O=i.get("length"),E=Number(e);Number.isInteger(E)&&E>=O.v&&h(O,E+1)}Z(d)}return!0},ownKeys(t){m(d);var e=Reflect.ownKeys(t).filter(n=>{var s=i.get(n);return s===void 0||s.v!==c});for(var[r,a]of i)a.v!==c&&!(r in t)&&e.push(r);return e},setPrototypeOf(){V()}})}function Z(f,u=1){h(f,f.v+u)}function me(f,u,y,b=null,i=!1){L&&X();var l=f,d=null,_=null,t=null,e=i?k:0;W(()=>{if(t===(t=!!u()))return;let r=!1;if(L){const a=l.data===p;t===a&&(l=ee(),re(l),U(!1),r=!0)}t?(d?B(d):d=C(()=>y(l)),_&&M(_,()=>{_=null})):(_?B(_):b&&(_=C(()=>b(l))),d&&M(d,()=>{d=null})),r&&U(!0)},e),L&&(l=ae)}function $(f){for(var u=F,y=F;u!==null&&!(u.f&(fe|ie));)u=u.parent;try{return H(u),f()}finally{H(y)}}function Pe(f,u,y,b){var q;var i=(y&ce)!==0,l=!se||(y&ue)!==0,d=(y&le)!==0,_=(y&oe)!==0,t=!1,e;d?[e,t]=ye(()=>f[u]):e=f[u];var r=(q=A(f,u))==null?void 0:q.set,a=b,n=!0,s=!1,o=()=>(s=!0,n&&(n=!1,_?a=Y(b):a=b),a);e===void 0&&b!==void 0&&(r&&l&&te(),e=o(),r&&r(e));var g;if(l)g=()=>{var v=f[u];return v===void 0?o():(n=!0,s=!1,v)};else{var R=$(()=>(i?K:ve)(()=>f[u]));R.f|=ne,g=()=>{var v=m(R);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(y&_e))return g;if(r){var O=f.$$legacy;return function(v,I){return arguments.length>0?((!l||!I||O||t)&&r(I?g():v),v):g()}}var E=!1,S=!1,N=ge(e),T=$(()=>K(()=>{var v=g(),I=m(N);return E?(E=!1,S=!0,I):(S=!1,N.v=v)}));return i||(T.equals=de),function(v,I){if(arguments.length>0){const D=I?m(T):l&&d?w(v):v;return T.equals(D)||(E=!0,h(N,D),s&&a!==void 0&&(a=D),Y(()=>m(T))),v}return m(T)}}export{w as a,me as i,Pe as p};
