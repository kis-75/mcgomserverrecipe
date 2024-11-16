var In=Array.isArray,Rn=Array.from,Sn=Object.defineProperty,it=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,xn=Object.prototype,Dn=Array.prototype,$t=Object.getPrototypeOf;const On=()=>{};function Cn(t){return t()}function pt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ht=4,L=8,et=16,y=32,Z=64,S=128,U=256,p=512,g=1024,Y=2048,N=4096,j=8192,Zt=16384,dt=32768,Nn=65536,zt=1<<18,Et=1<<19,ft=Symbol("$state"),bn=Symbol("");function yt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!Wt(t,this.v)}function Xt(t){throw new Error("effect_in_teardown")}function Jt(){throw new Error("effect_in_unowned_derived")}function Qt(t){throw new Error("effect_orphan")}function tn(){throw new Error("effect_update_depth_exceeded")}function qn(){throw new Error("hydration_failed")}function Pn(t){throw new Error("props_invalid_value")}function Fn(){throw new Error("state_descriptors_fixed")}function Mn(){throw new Error("state_prototype_fixed")}function nn(){throw new Error("state_unsafe_local_read")}function rn(){throw new Error("state_unsafe_mutation")}let z=!1;function Ln(){z=!0}function st(t){return{f:0,v:t,reactions:null,equals:yt,version:0}}function Yn(t){return en(st(t))}function jn(t,n=!1){var e;const r=st(t);return n||(r.equals=wt),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function en(t){return o!==null&&o.f&m&&(E===null?yn([t]):E.push(t)),t}function Hn(t,n){return o!==null&&ut()&&o.f&(m|et)&&(E===null||!E.includes(t))&&rn(),sn(t,n)}function sn(t,n){return t.equals(n)||(t.v=n,t.version=jt(),Tt(t,g),ut()&&u!==null&&u.f&p&&!(u.f&y)&&(_!==null&&_.includes(t)?(w(u,g),X(u)):k===null?wn([t]):k.push(t))),n}function Tt(t,n){var r=t.reactions;if(r!==null)for(var e=ut(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&g||!e&&a===u||(w(a,n),i&(p|S)&&(i&m?Tt(a,Y):X(a)))}}const Bn=1,Un=2,Vn=16,Gn=1,Kn=2,$n=4,Zn=8,zn=16,Wn=1,Xn=2,ln="[",an="[!",un="]",mt={},Jn=Symbol();function At(t){console.warn("hydration_mismatch")}let R=!1;function Qn(t){R=t}let d;function P(t){if(t===null)throw At(),mt;return d=t}function tr(){return P(x(d))}function nr(t){if(R){if(x(d)!==null)throw At(),mt;d=t}}function rr(t=1){if(R){for(var n=t,r=d;n--;)r=x(r);d=r}}function er(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===an)&&(t+=1)}var e=x(n);n.remove(),n=e}}var _t,kt,gt;function sr(){if(_t===void 0){_t=window;var t=Element.prototype,n=Node.prototype;kt=it(n,"firstChild").get,gt=it(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function J(t=""){return document.createTextNode(t)}function Q(t){return kt.call(t)}function x(t){return gt.call(t)}function lr(t,n){if(!R)return Q(t);var r=Q(d);if(r===null)r=d.appendChild(J());else if(n&&r.nodeType!==3){var e=J();return r==null||r.before(e),P(e),e}return P(r),r}function ar(t,n){if(!R){var r=Q(t);return r instanceof Comment&&r.data===""?x(r):r}return d}function ur(t,n=1,r=!1){let e=R?d:t;for(;n--;)e=x(e);if(!R)return e;var s=e.nodeType;if(r&&s!==3){var l=J();return e==null||e.before(l),P(l),l}return P(e),e}function or(t){t.textContent=""}function on(t){var n=m|g;u===null?n|=S:u.f|=Et;const r={children:null,ctx:f,deps:null,equals:yt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&m){var e=o;(e.children??(e.children=[])).push(r)}return r}function ir(t){const n=on(t);return n.equals=wt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?lt(e):q(e)}}}function Rt(t){var n,r=u;$(t.parent);try{It(t),n=Ht(t)}finally{$(r)}return n}function St(t){var n=Rt(t),r=(D||t.f&S)&&t.deps!==null?Y:p;w(t,r),t.equals(n)||(t.v=n,t.version=jt())}function lt(t){It(t),M(t,0),w(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function xt(t){u===null&&o===null&&Qt(),o!==null&&o.f&S&&Jt(),at&&Xt()}function fn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&Z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ct(!0),W(a),a.f|=Zt}catch(c){throw q(a),c}finally{ct(i)}}else n!==null&&X(a);var T=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&Et)===0;if(!T&&!s&&e&&(l!==null&&fn(a,l),o!==null&&o.f&m)){var A=o;(A.children??(A.children=[])).push(a)}return a}function fr(t){const n=b(L,null,!1);return w(n,p),n.teardown=t,n}function _r(t){xt();var n=u!==null&&(u.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Dt(t);return e}}function cr(t){return xt(),_n(t)}function vr(t){const n=b(Z,t,!0);return()=>{q(n)}}function Dt(t){return b(ht,t,!1)}function _n(t){return b(L,t,!0)}function pr(t){return cn(t)}function cn(t,n=0){return b(L|et|n,t,!0)}function hr(t,n=!0){return b(L|y,t,!0,n)}function Ot(t){var n=t.teardown;if(n!==null){const r=at,e=o;vt(!0),K(null);try{n.call(null)}finally{vt(r),K(e)}}}function Ct(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)lt(n[r])}}function Nt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;q(r,n),r=e}}function vn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||q(n),n=r}}function q(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:x(e);e.remove(),e=l}r=!0}Nt(t,n&&!r),Ct(t),M(t,0),w(t,j);var a=t.transitions;if(a!==null)for(const T of a)T.stop();Ot(t);var i=t.parent;i!==null&&i.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function dr(t,n){var r=[];qt(t,r,!0),pn(r,()=>{q(t),n&&n()})}function pn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function qt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&dt)!==0||(e.f&y)!==0;qt(e,n,l?r:!1),e=s}}}function Er(t){Pt(t,!0)}function Pt(t,n){if(t.f&N){H(t)&&W(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&dt)!==0||(r.f&y)!==0;Pt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const hn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,tt=[],nt=[];function Ft(){V=!1;const t=tt.slice();tt=[],pt(t)}function Mt(){G=!1;const t=nt.slice();nt=[],pt(t)}function yr(t){V||(V=!0,queueMicrotask(Ft)),tt.push(t)}function wr(t){G||(G=!0,hn(Mt)),nt.push(t)}function dn(){V&&Ft(),G&&Mt()}const Lt=0,En=1;let B=Lt,F=!1,O=!1,at=!1;function ct(t){O=t}function vt(t){at=t}let I=[],C=0;let o=null;function K(t){o=t}let u=null;function $(t){u=t}let E=null;function yn(t){E=t}let _=null,h=0,k=null;function wn(t){k=t}let Yt=0,D=!1,f=null;function jt(){return++Yt}function ut(){return!z||f!==null&&f.l===null}function H(t){var a,i;var n=t.f;if(n&g)return!0;if(n&Y){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&St(l),e&&u!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||w(t,p)}return!1}function Tn(t,n,r){throw t}function Ht(t){var ot;var n=_,r=h,e=k,s=o,l=D,a=E,i=f,T=t.f;_=null,h=0,k=null,o=T&(y|Z)?null:t,D=!O&&(T&S)!==0,E=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(M(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(M(t,h),c.length=h);return A}finally{_=n,h=r,k=e,o=s,D=l,E=a,f=i}}function mn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,Y),n.f&(S|U)||(n.f^=U),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)mn(t,r[e])}function W(t){var n=t.f;if(!(n&j)){w(t,p);var r=u;u=t;try{n&et?vn(t):Nt(t),Ct(t),Ot(t);var e=Ht(t);t.teardown=typeof e=="function"?e:null,t.version=Yt}catch(s){Tn(s)}finally{u=r}}}function Bt(){C>1e3&&(C=0,tn()),C++}function Ut(t){var n=t.length;if(n!==0){Bt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Vt(s,l),An(l)}}finally{O=r}}}function An(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|N))&&H(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}}function kn(){if(F=!1,C>1001)return;const t=I;I=[],Ut(t),F||(C=0)}function X(t){B===Lt&&(F||(F=!0,queueMicrotask(kn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|y)){if(!(r&p))return;n.f^=p}}I.push(n)}function Vt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&y)!==0,a=l&&(s&p)!==0;if(!a&&!(s&N))if(s&L){l?r.f^=p:H(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&ht&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Vt(i,n)}function Gt(t){var n=B,r=I;try{Bt();const s=[];B=En,I=s,F=!1,Ut(r);var e=t==null?void 0:t();return dn(),(I.length>0||s.length>0)&&Gt(),C=0,e}finally{B=n,I=r}}async function Tr(){await Promise.resolve(),Gt()}function mr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=Rt(t);return lt(t),e}if(o!==null){E!==null&&E.includes(t)&&nn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),k!==null&&u!==null&&u.f&p&&!(u.f&y)&&k.includes(t)&&(w(u,g),X(u))}else if(r&&t.deps===null){var l=t,a=l.parent;a!==null&&!((i=a.deriveds)!=null&&i.includes(l))&&(a.deriveds??(a.deriveds=[])).push(l)}return r&&(l=t,H(l)&&St(l)),t.v}function Ar(t){const n=o;try{return o=null,t()}finally{o=n}}const gn=~(g|Y|p);function w(t,n){t.f=t.f&gn|n}function kr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:st(!1)})}function gr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];$(l.effect),K(l.reaction),Dt(l.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Ir(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ft in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ft in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{ir as $,it as A,u as B,Mn as C,$t as D,In as E,cn as F,Er as G,hr as H,dr as I,R as J,tr as K,dt as L,an as M,er as N,P as O,Qn as P,d as Q,Pn as R,ft as S,Nn as T,Jn as U,y as V,Z as W,$ as X,z as Y,Kn as Z,Zn as _,_r as a,$n as a0,wt as a1,Gn as a2,zn as a3,Sn as a4,K as a5,o as a6,sr as a7,Q as a8,ln as a9,bn as aA,ut as aB,Wt as aC,x as aa,mt as ab,un as ac,At as ad,qn as ae,or as af,Rn as ag,vr as ah,J as ai,Wn as aj,Xn as ak,q as al,Yn as am,Dt as an,_n as ao,yr as ap,Gt as aq,Tr as ar,N as as,sn as at,qt as au,pn as av,Un as aw,Bn as ax,Vn as ay,wr as az,Ar as b,f as c,pt as d,Ln as e,Ir as f,mr as g,on as h,ar as i,gr as j,lr as k,nr as l,On as m,rr as n,fr as o,kr as p,jn as q,Cn as r,ur as s,pr as t,cr as u,Hn as v,xn as w,Dn as x,st as y,Fn as z};
