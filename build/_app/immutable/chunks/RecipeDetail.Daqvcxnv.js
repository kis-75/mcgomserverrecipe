import{c as J,a as N,t as D}from"./disclose-version.BUcGy7Fd.js";import{a5 as U,X as W,a6 as i1,B as K,ai as g1,F as y1,J as T,O as B,K as x1,E as w1,ag as l1,M as b1,N as Z,P as j,Q,as as H,G as u1,H as o1,I as I1,at as E1,au as T1,af as R1,av as k1,al as N1,a8 as A1,ac as C1,q as D1,y as $,aw as L1,ax as M1,ay as Q1,aa as O1,az as S1,aA as P1,aB as H1,ao as q1,p as f1,i as X,k as b,l as w,j as c1,s as C,g as v,t as O,h as R,n as e1,v as F,am as V}from"./runtime.C1M7rs0e.js";import{s as q}from"./render.ZIxIRfrv.js";import{i as z}from"./props.D62kPqOg.js";let t1=!1;function v1(){t1||(t1=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function B1(t){var e=i1,r=K;U(null),W(null);try{return t()}finally{U(e),W(r)}}function j1(t,e,r,n=r){t.addEventListener(e,()=>B1(r));const a=t.__on_r;a?t.__on_r=()=>{a(),n()}:t.__on_r=n,v1()}function F1(t,e,r,n){for(var a=[],f=e.length,c=0;c<f;c++)T1(e[c].e,a,!0);var d=f>0&&a.length===0&&r!==null;if(d){var y=r.parentNode;R1(y),y.append(r),n.clear(),A(t,e[0].prev,e[f-1].next)}k1(a,()=>{for(var h=0;h<f;h++){var l=e[h];d||(n.delete(l.k),A(t,l.prev,l.next)),N1(l.e,!d)}})}function V1(t,e,r,n,a,f=null){var c=t,d={flags:e,items:new Map,first:null};{var y=t;c=T?B(A1(y)):y.appendChild(g1())}T&&x1();var h=null,l=!1;y1(()=>{var u=r(),s=w1(u)?u:u==null?[]:l1(u),i=s.length;if(l&&i===0)return;l=i===0;let _=!1;if(T){var p=c.data===b1;p!==(i===0)&&(c=Z(),B(c),j(!1),_=!0)}if(T){for(var x=null,o,m=0;m<i;m++){if(Q.nodeType===8&&Q.data===C1){c=Q,_=!0,j(!1);break}var E=s[m],I=n(E,m);o=d1(Q,d,x,null,E,I,m,a,e),d.items.set(I,o),x=o}i>0&&B(Z())}if(!T){var g=i1;Y1(s,d,c,a,e,(g.f&H)!==0,n)}f!==null&&(i===0?h?u1(h):h=o1(()=>f(c)):h!==null&&I1(h,()=>{h=null})),_&&j(!0),r()}),T&&(c=Q)}function Y1(t,e,r,n,a,f,c){var d=t.length,y=e.items,h=e.first,l=h,u,s=null,i=[],_=[],p,x,o,m;for(m=0;m<d;m+=1){if(p=t[m],x=c(p,m),o=y.get(x),o===void 0){var E=l?l.e.nodes_start:r;s=d1(E,e,s,s===null?e.first:s.next,p,x,m,n,a),y.set(x,s),i=[],_=[],l=s.next;continue}if(G1(o,p,m),o.e.f&H&&u1(o.e),o!==l){if(u!==void 0&&u.has(o)){if(i.length<_.length){var I=_[0],g;s=I.prev;var P=i[0],L=i[i.length-1];for(g=0;g<i.length;g+=1)r1(i[g],I,r);for(g=0;g<_.length;g+=1)u.delete(_[g]);A(e,P.prev,L.next),A(e,s,P),A(e,L,I),l=I,s=L,m-=1,i=[],_=[]}else u.delete(o),r1(o,l,r),A(e,o.prev,o.next),A(e,o,s===null?e.first:s.next),A(e,s,o),s=o;continue}for(i=[],_=[];l!==null&&l.k!==x;)(f||!(l.e.f&H))&&(u??(u=new Set)).add(l),_.push(l),l=l.next;if(l===null)continue;o=l}i.push(o),s=o,l=o.next}if(l!==null||u!==void 0){for(var M=u===void 0?[]:l1(u);l!==null;)(f||!(l.e.f&H))&&M.push(l),l=l.next;var h1=M.length;if(h1>0){var m1=d===0?r:null;F1(e,M,m1,y)}}K.first=e.first&&e.first.e,K.last=s&&s.e}function G1(t,e,r,n){E1(t.v,e),t.i=r}function d1(t,e,r,n,a,f,c,d,y){var h=(y&M1)!==0,l=(y&Q1)===0,u=h?l?D1(a):$(a):a,s=y&L1?$(c):c,i={i:s,v:u,k:f,a:null,e:null,prev:r,next:n};try{return i.e=o1(()=>d(t,u,s),T),i.e.prev=r&&r.e,i.e.next=n&&n.e,r===null?e.first=i:(r.next=i,r.e.next=i.e),n!==null&&(n.prev=i,n.e.prev=i.e),i}finally{}}function r1(t,e,r){for(var n=t.next?t.next.e.nodes_start:r,a=e?e.e.nodes_start:r,f=t.e.nodes_start;f!==n;){var c=O1(f);a.before(f),f=c}}function A(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Y(t){if(T){var e=!1,r=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var n=t.value;a1(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var a=t.checked;a1(t,"checked",null),t.checked=a}}};t.__on_r=r,S1(r),v1()}}function a1(t,e,r,n){var a=t.__attributes??(t.__attributes={});T&&(a[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||a[e]!==(a[e]=r)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[P1]=r),t.removeAttribute(e))}function G(t,e,r=e){var n=H1();j1(t,"input",()=>{var a=n1(t)?s1(t.value):t.value;r(a),n&&a!==(a=e())&&(t.value=a??"")}),q1(()=>{var a=e();if(T&&t.defaultValue!==t.value){r(t.value);return}n1(t)&&a===s1(t.value)||t.type==="date"&&!a&&!t.value||a!==t.value&&(t.value=a??"")})}function n1(t){var e=t.type;return e==="number"||e==="range"}function s1(t){return t===""?null:+t}const k={소금:{제작방법:"상점 구매",배수:1,재료:[["실버",2]]},기름:{제작방법:"상점 구매",배수:1,재료:[["실버",2]]},"요리용 물병":{제작방법:"상점 구매",배수:1,재료:[["실버",2]]},날달걀:{제작방법:"제작대",배수:1,재료:[["달걀",1]]},쌀:{제작방법:"제작대",배수:1,재료:[["벼",1]]},밥:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["쌀",1]],소요시간:45},"대구 필렛":{제작방법:"도마",배수:2,재료:[["대구",1]]},"연어 필렛":{제작방법:"도마",배수:2,재료:[["연어",1]]},"용암 대구 필렛":{제작방법:"도마",배수:2,재료:[["용암 대구",1]]},"철갑상어 필렛":{제작방법:"도마",배수:2,재료:[["철갑상어",1]]},"복어 필렛":{제작방법:"도마",배수:2,재료:[["복어",1]]},"참치 필렛":{제작방법:"도마",배수:2,재료:[["참치",1]]},"열대어 필렛":{제작방법:"도마",배수:2,재료:[["열대어",1]]},"고등어 필렛":{제작방법:"도마",배수:2,재료:[["고등어",1]]},게살:{제작방법:"도마",배수:2,재료:[["참게",1]]},참치캔:{제작방법:"제작대",배수:1,재료:[["캔",1],["참치",2],["기름",1],["소금",1]]},우유병:{제작방법:"제작대",배수:4,재료:[["우유 양동이",1],["유리병",4]]},밀가루:{제작방법:"제작대",배수:4,재료:[["밀",1]]},도우:{제작방법:"제작대",배수:2,재료:[["밀가루",1],["요리용 물병",1],["소금",1]]},"도넛 반죽":{제작방법:"제작대",배수:2,재료:[["밀가루",1],["요리용 물병",1],["소금",1],["날달걀",1],["설탕",1],["버터",1]]},파이지:{제작방법:"프라이팬",배수:1,재료:[["도우",1],["버터",1],["설탕",1],["소금",1]]},버터:{제작방법:"제작대",배수:1,재료:[["우유병",1]]},크림:{제작방법:"제작대",배수:1,재료:[["우유병",1],["설탕",1]]},치즈:{제작방법:"냄비",배수:2,재료:[["요리용 물병",1],["우유병",2],["라임",1],["소금",1]]},"치즈 어묵":{제작방법:"제작대",배수:1,재료:[["대구 필렛",1],["치즈",1],["소금",1],["새우",1],["밀가루",1],["양파",1],["당근",1]]},"오뎅검 순한맛":{제작방법:"제작대",배수:1,재료:[["네더라이트 검",1],["치즈 어묵",8]]},빵가루:{제작방법:"도마",배수:4,재료:[["빵",1]]},미트볼:{제작방법:"도마",배수:3,재료:[["돼지고기",1],["양파",1],["소금",1],["빵가루",1],["버터",1]]},"익힌 미트볼":{제작방법:"프라이팬",배수:1,재료:[["미트볼",1]]},육수:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["멸치",1],["말린 켈프",1],["양파",1]]},"패티 반죽":{제작방법:"도마",배수:4,재료:[["소고기",1],["돼지고기",1],["양파",1],["빵가루",1],["소금",1],["날달걀",1]]},"익힌 패티":{제작방법:"훈연기",배수:1,재료:[["패티 반죽",1]]},베이컨:{제작방법:"프라이팬",배수:4,재료:[["돼지고기",2],["소금",1],["설탕",1]]},밀면:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["밀가루",2],["소금",1]]},효모:{제작방법:"제작대",배수:4,재료:[["갈색 버섯",1],["설탕",1],["물 양동이",1],["밀가루",1]]},"엔더 소스":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["후렴과",1],["후렴화",1]]},"드래곤 무정란":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["날달걀",1],["드래곤의 숨결",1]]},"빵 반죽":{제작방법:"제작대",배수:1,재료:[["밀가루",2],["효모",1],["설탕",1],["소금",1],["요리용 물병",1]]},떡:{제작방법:"도마",배수:1,재료:[["밥",1]]},"토마토 소스":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["토마토",2],["양파",1],["소금",1]],판매가:"16.12"},"바베큐 꼬치":{제작방법:"제작대",배수:1,재료:[["양파",1],["토마토",1],["아무 고기",2],["막대기",1]]},사골국:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["소고기",1],["뼈",2]]},"달걀 후라이":{제작방법:"프라이팬",배수:1,재료:[["날달걀",1],["소금",1]]},"구운 바베큐 꼬치":{제작방법:"모닥불",배수:1,재료:[["바베큐 꼬치",1]],판매가:"10.98"},"후렴과 꼬치":{제작방법:"제작대",배수:1,재료:[["후렴과",1],["튀긴 후렴과",1],["막대기",1]],판매가:"4.78"},"달걀 샌드위치":{제작방법:"제작대",배수:1,재료:[["달걀 후라이",2],["식빵",1]],판매가:"97.96"},"치킨 샌드위치":{제작방법:"제작대",배수:1,재료:[["양배추",1],["당근",1],["식빵",1],["익힌 닭고기",1]],판매가:"78.84"},"베이컨 샌드위치":{제작방법:"제작대",배수:1,재료:[["베이컨",1],["토마토",1],["양배추",1],["식빵",1]],판매가:"107.38"},"양고기 샌드위치":{제작방법:"제작대",배수:1,재료:[["달걀 후라이",1],["식빵",1],["익힌 양고기",1],["비트",1]],판매가:"96.75"},"퍼퍼 새우 샌드위치":{제작방법:"제작대",배수:1,재료:[["퍼퍼 새우",1],["토마토",1],["양배추",1],["양파",1],["달걀 후라이",1],["식빵",1]],판매가:"95.59"},"후렴과 샌드위치":{제작방법:"제작대",배수:1,재료:[["후렴과",1],["치즈",1],["엔더 소스",1],["식빵",1]],판매가:"134.57"},햄버거:{제작방법:"제작대",배수:1,재료:[["익힌 패티",1],["토마토",1],["양배추",1],["번",1]],판매가:"78.82"},"치즈 버거":{제작방법:"제작대",배수:1,재료:[["익힌 패티",1],["토마토",1],["양배추",1],["번",1],["치즈",1]],판매가:"110.59"},"디럭스 버거":{제작방법:"제작대",배수:1,재료:[["익힌 패티",2],["치즈",2],["베이컨",1],["양배추",1],["토마토",1],["양파",1],["번",1]],판매가:"285.49"},"퍼퍼 새우 스페셜 버거":{제작방법:"제작대",배수:1,재료:[["익힌 패티",1],["퍼퍼 새우",1],["양파",1],["토마토",1],["양배추",1],["치즈",1],["크림",1],["번",1]],판매가:"169.96"},게살버거:{제작방법:"제작대",배수:1,재료:[["게살",1],["양파",1],["토마토",1],["양배추",1],["번",1],["치즈",1],["켈프",1]],판매가:"98.22"},"감자 튀김":{제작방법:"튀김기",배수:1,재료:[["기름",1],["감자",1],["소금",1]],판매가:"6.73"},"익히지 않은 퍼퍼 새우튀김":{제작방법:"제작대",배수:1,재료:[["퍼퍼 새우",1],["밀가루",1],["소금",1],["날달걀",1],["빵가루",1]]},"퍼퍼 새우튀김":{제작방법:"튀김기",배수:1,재료:[["기름",1],["익히지 않은 퍼퍼 새우튀김",1]],판매가:"24.23"},"익히지 않은 엔드스톤 배스 췌이피위":{제작방법:"제작대",배수:1,재료:[["엔드스톤 배스",1],["밀가루",1],["고추",1],["양파",1]]},"엔드스톤 배스 췌이피위":{제작방법:"튀김기",배수:1,재료:[["기름",1],["익히지 않은 엔드스톤 배스 췌이피위",1]],판매가:"18.85"},"익히지 않은 돈까스":{제작방법:"제작대",배수:1,재료:[["돼지고기",1],["밀가루",1],["소금",1],["날달걀",1],["토마토 소스",1],["빵가루",1]]},돈까스:{제작방법:"튀김기",배수:1,재료:[["기름",1],["익히지 않은 돈까스",1]],판매가:"45.89"},"익히지 않은 치즈스틱":{제작방법:"제작대",배수:1,재료:[["치즈",1],["밀가루",1],["날달걀",1],["빵가루",1]]},치즈스틱:{제작방법:"튀김기",배수:1,재료:[["기름",1],["익히지 않은 치즈스틱",1]],판매가:"33.94"},"익히지 않은 피자":{제작방법:"제작대",배수:1,재료:[["도우",1],["토마토",1],["베이컨",1],["양파",1],["옥수수",1],["치즈",1],["갈색 버섯",1]]},피자:{제작방법:"훈연기",배수:1,재료:[["익히지 않은 피자",1]],판매가:"60.84"},"염지된 닭고기":{제작방법:"제작대",배수:1,재료:[["닭고기",1],["소금",1],["요리용 물병",1],["설탕",1],["블레이즈 가루",1]]},"훈제 치킨":{제작방법:"튀김기",배수:1,재료:[["기름",1],["염지된 닭고기",1]],판매가:"69.58"},허니치킨정식:{제작방법:"제작대",배수:1,재료:[["양파",1],["훈제 치킨",1],["꿀이 든 병",1],["켈프",1]],판매가:"98.73"},"양념 치킨":{제작방법:"제작대",배수:1,재료:[["고추",1],["달콤한 열매",1],["훈제 치킨",1],["블레이즈 가루",1],["설탕",1]],판매가:"116.87"},"축제용 통닭":{제작방법:"프라이팬",배수:1,재료:[["염지된 닭고기",1],["버터",1],["달콤한 열매",1]],판매가:"71.23"},"닭갈비 호박찜":{제작방법:"제작대",배수:1,재료:[["양배추",1],["치즈",1],["고추",1],["닭고기",2],["갈색 버섯",1],["호박",1]],판매가:"45.18"},또띠아:{제작방법:"프라이팬",배수:1,재료:[["도우",1],["옥수수",1]]},엠파나다:{제작방법:"프라이팬",배수:1,재료:[["또띠아",1],["정어리",1],["양파",1],["날달걀",1],["익힌 감자",1],["블레이즈 가루",1]],판매가:"55.9"},"양고기 브리또":{제작방법:"제작대",배수:2,재료:[["또띠아",2],["양배추",1],["양파",1],["익힌 양고기",1],["블레이즈 가루",1],["소금",1]]},"야채 브리또":{제작방법:"제작대",배수:2,재료:[["또띠아",2],["양배추",1],["양파",1],["빨간색 버섯",1],["당근",1],["익힌 감자",1],["토마토",1]],판매가:"16.68"},"해물 브리또":{제작방법:"제작대",배수:2,재료:[["또띠아",2],["레몬",1],["익힌 대구",1],["익힌 연어",1],["말린 켈프",1],["크림",1],["양파",1]],판매가:"24.19"},"소고기 브리또":{제작방법:"제작대",배수:1,재료:[["또띠아",1],["양파",1],["스테이크",1],["치즈",1],["설탕",1]],판매가:"36.84"},"돼지고기 브리또":{제작방법:"제작대",배수:1,재료:[["또띠아",1],["양배추",1],["익힌 돼지고기",1],["사과",1],["꿀이 든 병",1]],판매가:"36.86"},"치킨 타코":{제작방법:"제작대",배수:1,재료:[["또띠아",1],["양파",1],["옥수수",1],["토마토 소스",1],["익힌 닭고기",1],["고추",1]],판매가:"45.32"},"엔더 잉어 타코":{제작방법:"제작대",배수:1,재료:[["또띠아",1],["양배추",1],["토마토",1],["엔더 잉어",1],["레몬",1],["크림",1]],판매가:"18.09"},"익히지 않은 만두":{제작방법:"제작대",배수:1,재료:[["도우",1],["양파",1],["양배추",1],["돼지고기",1],["갈색 버섯",1],["날달걀",1],["설탕",1],["소금",1]]},"만두 튀김":{제작방법:"튀김기",배수:1,재료:[["기름",1],["익히지 않은 만두",1]],판매가:"26.17"},"익히지 않은 어만두":{제작방법:"제작대",배수:1,재료:[["대구 필렛",1],["연어 필렛",1],["미트볼",1],["빨간색 버섯",1]]},어만두:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["익히지 않은 어만두",1]],판매가:"30.65"},떡만둣국:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["익히지 않은 만두",1],["사골국",1],["떡",1]]},"속 채운 감자":{제작방법:"제작대",배수:1,재료:[["베이컨",1],["크림",1],["버터",1],["익힌 감자",1]],판매가:"11.09"},"양배추 롤":{제작방법:"제작대",배수:1,재료:[["양배추",1],["양파",1],["익힌 닭고기",1],["날달걀",1],["갈색 버섯",1],["당근",1]],판매가:"15.6"},주먹밥:{제작방법:"제작대",배수:1,재료:[["밥",2],["말린 켈프",1],["달콤한 열매",1],["소금",1]],판매가:"67.33"},"연어 초밥":{제작방법:"제작대",배수:3,재료:[["연어 필렛",1],["밥",1],["레몬",1],["설탕",1],["소금",1]]},"대구 초밥":{제작방법:"제작대",배수:3,재료:[["대구 필렛",1],["밥",1],["레몬",1],["설탕",1],["소금",1]]},"달걀 초밥":{제작방법:"제작대",배수:3,재료:[["날달걀",2],["말린 켈프",1],["밥",1],["레몬",1],["설탕",1],["소금",1]],판매가:"16.58"},"복어 초밥":{제작방법:"제작대",배수:3,재료:[["복어 필렛",1],["밥",1],["레몬",1],["설탕",1],["소금",1]],판매가:"11.37"},"열대어 초밥":{제작방법:"제작대",배수:3,재료:[["열대어 필렛",1],["말린 켈프",1],["밥",1],["레몬",1],["설탕",1],["소금",1]]},"새우 초밥":{제작방법:"제작대",배수:3,재료:[["새우",3],["밥",1],["레몬",1],["설탕",1],["소금",1]],판매가:"16.61"},"문어 초밥":{제작방법:"제작대",배수:3,재료:[["문어",1],["말린 켈프",1],["밥",1],["레몬",1],["설탕",1],["소금",1]]},"고등어 초밥":{제작방법:"제작대",배수:3,재료:[["고등어 필렛",1],["말린 켈프",1],["밥",1],["레몬",1],["설탕",1],["소금",1]]},"참치 초밥":{제작방법:"제작대",배수:3,재료:[["참치 필렛",1],["밥",1],["레몬",1],["설탕",1],["소금",1]]},"초밥 세트":{제작방법:"제작대",배수:1,재료:[["연어 초밥",1],["대구 초밥",1],["달걀 초밥",1],["복어 초밥",1],["열대어 초밥",1],["새우 초밥",1],["문어 초밥",1],["고등어 초밥",1],["참치 초밥",1]],판매가:"214.9"},"모듬 회":{제작방법:"도마",배수:2,재료:[["연어 필렛",1],["참치 필렛",1],["열대어 필렛",1],["고등어 필렛",1],["용암 대구 필렛",1],["대구 필렛",1],["철갑상어 필렛",1]],판매가:"33.96"},"과일 샐러드":{제작방법:"제작대",배수:1,재료:[["딸기",1],["토마토",1],["발광 열매",1],["달콤한 열매",1],["수박 조각",1],["사과",1],["벌집 조각",1],["레몬",1]],판매가:"10.49"},샐러드:{제작방법:"제작대",배수:1,재료:[["양배추",1],["토마토",1],["비트",1],["당근",1],["날달걀",1]],판매가:"1.18"},"네더 샐러드":{제작방법:"제작대",배수:1,재료:[["블레이즈 가루",1],["뒤틀린 균",1],["진홍빛 균",1]],판매가:"30.95"},"차원 샐러드":{제작방법:"제작대",배수:1,재료:[["후렴과",1],["드래곤 무정란",1],["진홍빛 균",1],["뒤틀린 균",1],["양배추",1],["토마토",1]],판매가:"81.34"},"정어리 세비체":{제작방법:"제작대",배수:1,재료:[["라임",1],["양배추",1],["양파",1],["토마토",1],["정어리",1]],판매가:"7.41"},"새우 세비체":{제작방법:"제작대",배수:1,재료:[["라임",1],["양배추",1],["양파",1],["토마토",1],["새우",1]],판매가:"7.53"},볶음밥:{제작방법:"프라이팬",배수:1,재료:[["밥",1],["날달걀",1],["당근",1],["버터",1],["양파",1],["소금",1]],판매가:"53.97"},"참치 김치 볶음밥":{제작방법:"프라이팬",배수:1,재료:[["밥",1],["참치캔",1],["김치",1],["달걀 후라이",1],["설탕",1],["버터",1]],판매가:"194.87"},"버섯 볶음밥":{제작방법:"프라이팬",배수:1,재료:[["밥",1],["갈색 버섯",1],["빨간색 버섯",1],["버터",1],["고추",1],["설탕",1]]},"엔더 죽":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["쌀",1],["엔더 소스",1],["드래곤 무정란",1],["우유병",1],["엔더 진주",2],["소금",1]],판매가:"99.66"},야채죽:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["쌀",1],["양파",1],["당근",1],["말린 켈프",1],["갈색 버섯",1],["빨간색 버섯",1]],판매가:"34.54"},새우죽:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["쌀",1],["육수",1],["새우",1],["양파",1],["당근",1],["소금",1]],판매가:"51.88"},우동:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["밀면",1],["육수",1],["달걀 후라이",1],["갈색 버섯",1]],판매가:"70.67"},"야채 국수":{제작방법:"프라이팬",배수:1,재료:[["밀면",1],["양파",1],["당근",1]],판매가:"23.10"},"미트볼 파스타":{제작방법:"프라이팬",배수:1,재료:[["밀면",1],["토마토 소스",1],["익힌 미트볼",2],["갈색 버섯",1],["양파",1]]},"양고기 파스타":{제작방법:"프라이팬",배수:1,재료:[["밀면",1],["버터",1],["양고기",1],["양파",1],["고추",1]],판매가:"62.6"},"먹물 파스타":{제작방법:"프라이팬",배수:1,재료:[["밀면",1],["먹물 주머니",2],["열대어",1],["양파",1],["문어",1]],판매가:"64.21"},"버섯 크림 파스타":{제작방법:"프라이팬",배수:1,재료:[["밀면",1],["크림",1],["$mushroom",1],["치즈",1]]},"참게 파스타":{제작방법:"프라이팬",배수:1,재료:[["밀면",1],["우유병",1],["게살",1],["버터",1],["소금",1]],판매가:"51.70"},"오일 파스타":{제작방법:"프라이팬",배수:1,재료:[["밀면",1],["버터",1],["새우",1],["소금",1]],판매가:"37.23"},"베이컨 파스타":{제작방법:"프라이팬",배수:1,재료:[["밀면",1],["버터",1],["베이컨",1],["치즈",1],["날달걀",1]],판매가:"82.42"},"엔더 파스타":{제작방법:"프라이팬",배수:1,재료:[["밀면",1],["엔더 소스",1],["엔더 진주",2],["크림",1],["퍼퍼 새우",1],["소금",1]],판매가:"89.55"},"발광 먹물 주머니 파스타":{제작방법:"프라이팬",배수:1,재료:[["밀면",1],["발광 먹물 주머니",1],["먹물 주머니",1],["발광 열매",1],["문어",1],["용암 잉어",1]]},"치즈 파스타":{제작방법:"프라이팬",배수:1,재료:[["밀면",1],["치즈",2],["버터",1],["양파",1]],판매가:"86.4"},팟타이:{제작방법:"프라이팬",배수:1,재료:[["밀면",1],["라임",1],["새우",1],["뒤틀린 뿌리",1],["양파",1],["달걀",1],["밀 씨앗",1]],판매가:"49.52"},양폭립:{제작방법:"제작대",배수:1,재료:[["토마토",1],["밥",1],["비트",1],["익힌 양고기",2]],판매가:"60.38"},"일본식 크림 스튜":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["크림",1],["돼지고기",1],["당근",1],["갈색 버섯",1],["감자",1],["우유병",1],["소금",1]],판매가:"59.08"},"새우 스튜":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["새우",1],["토마토 소스",1],["날달걀",1],["양파",1],["토마토",1],["설탕",1]],판매가:"53.31"},"철갑상어 스튜":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["철갑상어",1],["철갑상어 필렛",1],["육수",1],["양파",1]],판매가:"73.6"},"후렴 스튜":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["후렴과",1],["엔더 소스",1],["후렴화",1]],판매가:"36.74"},"드래곤 무정란 스튜":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["드래곤 무정란",1],["옥수수",1],["토마토 소스",1],["양파",1],["빵",1]],판매가:"143.71"},"고기 스튜":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["익힌 미트볼",1],["사골국",1],["당근",1],["감자",1],["레드 와인",1]],판매가:"10"},"용암 잉어 스튜":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["용암 잉어",1],["토마토 소스",1],["양파",1],["블레이즈 가루",1],["레몬",1],["고추",1]],판매가:"85.74"},대구지리탕:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["대구",1],["양파",1],["고추",1],["육수",1],["소금",1],["뒤틀린 뿌리",1]],판매가:"42.94"},"양파 수프":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["양파",1],["사골국",1],["치즈",1],["바게트",1],["소금",1],["우유병",1]],판매가:"217.21"},"드래곤 숨결 수프":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["드래곤의 숨결",1],["엔더 소스",1],["후렴과",1],["크림",1],["우유병",1]],판매가:"98.64"},"치킨 수프":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["닭고기",1],["사골국",1],["우유병",1],["양파",1],["버터",1],["소금",1]],판매가:"141.83"},"야채 수프":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["비트",1],["감자",1],["당근",1],["육수",1],["양파",1],["양배추",1]],판매가:"59.10"},"호박 수프":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["호박",1],["호박 씨",1],["양파",1],["크림",1],["설탕",1]],판매가:"22.2"},"옥수수 수프":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["옥수수",2],["우유병",1],["설탕",1],["양파",1],["치즈",1],["소금",1]],판매가:"45.3"},"수비드 최고급 한우":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["최고급 한우",1]]},"수비드 최고급 한우 스테이크":{제작방법:"프라이팬",배수:1,재료:[["수비드 최고급 한우",1]]},"수비드 최고급 한우 스테이크 정식":{제작방법:"제작대",배수:1,재료:[["수비드 최고급 한우 스테이크",1],["샐러드",1],["달걀 후라이",1],["익힌 감자",1]],판매가:"5555"},"스테이크 정식":{제작방법:"제작대",배수:1,재료:[["밥",1],["옥수수",1],["달걀 후라이",1],["익힌 감자",1],["스테이크",1],["갈색 버섯",1]],판매가:"73.49"},"연어구이 정식":{제작방법:"제작대",배수:1,재료:[["양파",1],["양배추",1],["익힌 연어",1],["달콤한 열매",1]],판매가:"4.29"},"용암 대구정식":{제작방법:"프라이팬",배수:1,재료:[["용암 대구 필렛",1],["토마토",1],["밥",1],["치즈",1]],판매가:"82.06"},"네더 양 정식":{제작방법:"프라이팬",배수:1,재료:[["양고기",1],["달콤한 열매",1],["뒤틀린 균",1],["감자",1],["양파",1]],판매가:"27.42"},"네더 정식":{제작방법:"프라이팬",배수:1,재료:[["토끼고기",2],["마그마 크림",1],["뒤틀린 균",1],["진홍빛 균",1],["설탕",1]],판매가:"94.29"},"뒤틀린 정식":{제작방법:"프라이팬",배수:1,재료:[["돼지고기",1],["뒤틀린 뿌리",1],["뒤틀린 균",1],["네더 싹",1]],판매가:"56.71"},"완벽한 아침식사":{제작방법:"프라이팬",배수:1,재료:[["베이컨",1],["날달걀",2]],판매가:"11.71"},라따뚜이:{제작방법:"프라이팬",배수:1,재료:[["양파",1],["토마토 소스",1],["비트",1],["호박",1],["토마토",1],["치즈",1]],판매가:"84.08"},"익히지 않은 버섯 키쉬":{제작방법:"제작대",배수:1,재료:[["파이지",1],["우유병",1],["양파",2],["치즈",1],["갈색 버섯",1],["빨간색 버섯",1],["날달걀",1]]},"버섯 키쉬":{제작방법:"화로",배수:1,재료:[["익히지 않은 버섯 키쉬",1]],판매가:"113.43"},"지중해식 연어 요리":{제작방법:"프라이팬",배수:1,재료:[["연어 필렛",1],["라임",1],["토마토",1],["크림",1],["양배추",1],["레몬",1]]},"연어 타르타르":{제작방법:"도마",배수:1,재료:[["레몬",1],["연어 필렛",2],["양파",1],["날달걀",1],["소금",1]],판매가:"15.91"},"익히지 않은 감자 프리터":{제작방법:"제작대",배수:1,재료:[["라임",1],["양파",1],["감자",2],["날달걀",1],["치즈",1]]},"감자 프리터":{제작방법:"튀김기",배수:1,재료:[["기름",1],["익히지 않은 감자 프리터",1]],판매가:"25.57"},"진홍빛 구황작물 메즈쿠프라티":{제작방법:"프라이팬",배수:1,재료:[["비트",1],["감자",1],["당근",1],["소금",1],["고추",1],["버터",1]],판매가:"22.65"},"매운 커리 베이스":{제작방법:"제작대",배수:1,재료:[["우유병",1],["양파",1],["토마토 소스",1],["닭고기",1],["블레이즈 가루",2],["고추",2]],판매가:"51.05"},"매운 커리":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["매운 커리 베이스",1],["밥",1]],판매가:"144.99"},"참게 라자냐":{제작방법:"프라이팬",배수:1,재료:[["게살",1],["토마토 소스",1],["도우",1],["치즈",1],["버터",1]],판매가:"84.84"},버터참게:{제작방법:"프라이팬",배수:1,재료:[["참게",2],["버터",1]]},"용암 대구 시니강":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["용암 대구",1],["양파",1],["라임",1],["토마토",1]],판매가:"9.94"},"세퍼드 파이":{제작방법:"제작대",배수:1,재료:[["양파",2],["토마토 소스",1],["옥수수",1],["갈색 버섯",1],["익힌 양고기",1],["익힌 감자",1]],판매가:"54.09"},삼합:{제작방법:"프라이팬",배수:1,재료:[["돼지고기",1],["문어",1],["김치",1],["양파",1]],판매가:"184.86"},보쌈:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["돼지고기",1],["육수",1],["양배추",1],["양파",1],["설탕",1]],판매가:"103.91"},"고기 플래터":{제작방법:"프라이팬",배수:1,재료:[["소고기",1],["양고기",1],["토끼고기",1],["소금",1]]},"버섯 모듬 구이":{제작방법:"프라이팬",배수:1,재료:[["갈색 버섯",1],["뒤틀린 균",1],["진홍빛 균",1],["버터",1],["소금",1]],판매가:"49.26"},"스크램블 에그":{제작방법:"프라이팬",배수:1,재료:[["날달걀",1],["토마토",1],["우유병",1],["버터",1],["소금",1],["설탕",1]],판매가:"8.32"},오믈렛:{제작방법:"프라이팬",배수:1,재료:[["날달걀",1],["토마토 소스",1],["밥",1],["옥수수",1],["양파",1],["당근",1],["버터",1]],판매가:"119"},"드래곤 무정란 찜":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["드래곤 무정란",1],["엔더 소스",1],["양파",1],["감자",1]],판매가:"88.96"},"익히지 않은 참게 랑군":{제작방법:"제작대",배수:1,재료:[["도우",1],["치즈",1],["게살",1],["크림",1],["당근",1]]},"참게 랑군":{제작방법:"튀김기",배수:1,재료:[["기름",1],["익히지 않은 참게 랑군",1]],판매가:"36.23"},"네더 버섯 찜":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["뒤틀린 균",1],["진홍빛 균",1],["빨간색 버섯",1],["육수",1],["소금",1]],판매가:"62.18"},"달콤한 김부각":{제작방법:"프라이팬",배수:1,재료:[["말린 켈프",1],["설탕",1],["밥",1],["소금",1]],판매가:"67.19"},비스크:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["가재",1],["우유병",1],["양파",1],["토마토 소스",1],["화이트 와인",1],["빵",1]],판매가:"118.06"},김치:{제작방법:"제작대",배수:1,재료:[["양배추",1],["고추",1],["멸치",1],["설탕",1],["소금",1],["양파",1],["밥",1]],판매가:"35.16"},"볶은 원두":{제작방법:"프라이팬",배수:1,재료:[["커피콩",1]]},"엔더 펄":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["엔더 진주",2],["떡",1],["설탕",1]],판매가:"34.89"},나쵸칩:{제작방법:"화로",배수:1,재료:[["또띠아",1]],판매가:"11.11"},당고:{제작방법:"제작대",배수:1,재료:[["떡",1],["달콤한 열매",1],["초록색 염료",1],["설탕",1],["요리용 물병",1]],판매가:"45.34"},"후렴과 떡":{제작방법:"제작대",배수:1,재료:[["떡",1],["후렴과",1],["설탕",1]],판매가:"32.36"},마시멜로:{제작방법:"제작대",배수:1,재료:[["요리용 물병",1],["설탕",1],["슬라임볼",1]]},"구운 마시멜로":{제작방법:"프라이팬",배수:1,재료:[["마시멜로",1],["막대기",1]],판매가:"34.46"},푸딩:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["슬라임볼",1],["우유병",1],["설탕",1],["날달걀",1]],판매가:"34.8"},"사과 푸딩":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["슬라임볼",1],["설탕",1],["사과 잼",1],["사과",1]],판매가:"51.58"},"후렴과 푸딩":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["슬라임볼",1],["설탕",1],["엔더 소스",1],["후렴과",1]],판매가:"41.15"},"달콤한 열매 푸딩":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["슬라임볼",1],["설탕",1],["달콤한 열매 잼",1],["달콤한 열매",1]],판매가:"68.01"},"라임 푸딩":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["슬라임볼",1],["설탕",1],["라임",1]],판매가:"23.57"},"딸기 푸딩":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["슬라임볼",1],["설탕",1],["딸기 잼",1],["딸기",1]],판매가:"55.54"},"발광 열매 푸딩":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["슬라임볼",1],["설탕",1],["발광 열매",1]],판매가:"22.55"},"복숭아 푸딩":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["슬라임볼",1],["설탕",1],["복숭아",1]],판매가:"26.87"},초콜릿:{제작방법:"제작대",배수:1,재료:[["코코아콩",2],["설탕",2],["크림",1],["버터",1]],판매가:"3.78"},"딸기 잼":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["딸기",2],["설탕",1]]},"달콤한 열매 잼":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["달콤한 열매",2],["설탕",1]],판매가:"26.46"},"사과 잼":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["사과",2],["설탕",1]],판매가:"18.79"},"복숭아 잼":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["복숭아",2],["설탕",1]],판매가:"15.94"},"오레오 쿠키":{제작방법:"프라이팬",배수:1,재료:[["밀가루",1],["우유병",1],["초콜릿",2],["마시멜로",1]],판매가:"57.2"},스모어:{제작방법:"제작대",배수:1,재료:[["구운 마시멜로",1],["꿀 쿠키",2],["초콜릿",1]],판매가:"130.7"},"달콤한 열매 쿠키":{제작방법:"프라이팬",배수:1,재료:[["버터",1],["설탕",1],["밀가루",1],["달콤한 열매",1]],판매가:"24.28"},"꿀 쿠키":{제작방법:"프라이팬",배수:1,재료:[["버터",1],["설탕",1],["밀가루",1],["벌집 조각",1]],판매가:"20.99"},"딸기 쿠키":{제작방법:"프라이팬",배수:1,재료:[["버터",1],["설탕",1],["밀가루",1],["딸기 잼",1]],판매가:"53.39"},"글레이즈 달콤한 열매 쿠키":{제작방법:"프라이팬",배수:1,재료:[["버터",1],["설탕",1],["밀가루",1],["달콤한 열매 잼",1]],판매가:"53.63"},"초콜릿 쿠키":{제작방법:"프라이팬",배수:1,재료:[["버터",1],["설탕",1],["밀가루",1],["초콜릿",1]],판매가:"26.24"},"복숭아 잼 쿠키":{제작방법:"프라이팬",배수:1,재료:[["버터",1],["설탕",1],["밀가루",1],["복숭아 잼",1]],판매가:"40.7"},"곰 쿠키":{제작방법:"프라이팬",배수:1,재료:[["버터",1],["설탕",1],["밀가루",1],["빨간색 염료",1]],판매가:"18.72"},"눈 모양 비스킷":{제작방법:"프라이팬",배수:1,재료:[["버터",1],["설탕",1],["소금",1],["밀가루",1],["하얀색 염료",1]],판매가:"19.08"},"하트 모양 비스킷":{제작방법:"프라이팬",배수:1,재료:[["버터",1],["설탕",1],["소금",1],["밀가루",1],["분홍색 염료",1]],판매가:"31.33"},"크리퍼 모양 비스킷":{제작방법:"프라이팬",배수:1,재료:[["버터",1],["설탕",1],["소금",1],["밀가루",1],["초록색 염료",1]],판매가:"23.23"},"검 모양 비스킷":{제작방법:"프라이팬",배수:1,재료:[["버터",1],["설탕",1],["소금",1],["밀가루",1],["하늘색 염료",1]],판매가:"26.85"},"엔더의 눈 에끌레어":{제작방법:"프라이팬",배수:1,재료:[["엔더의 눈",2],["설탕",1],["밀가루",1],["버터",1]],판매가:"63.93"},팝콘:{제작방법:"프라이팬",배수:1,재료:[["옥수수",1],["버터",1],["소금",1]],판매가:"8.07"},"카라멜 팝콘":{제작방법:"프라이팬",배수:1,재료:[["옥수수",1],["버터",1],["설탕",1]],판매가:"7.05"},마카롱:{제작방법:"프라이팬",배수:1,재료:[["밀 씨앗",1],["설탕",1],["날달걀",1],["코코아콩",1],["딸기",1]],판매가:"16.73"},"엔더 씨리얼":{제작방법:"제작대",배수:1,재료:[["튀긴 후렴과",1],["엔더의 눈",1],["엔더 진주",1],["우유병",1]],판매가:"24.59"},"베리 크림치즈 파이":{제작방법:"제작대",배수:1,재료:[["파이지",1],["크림",1],["치즈",1],["달콤한 열매",2],["딸기",2]],판매가:"52.8"},"초콜릿 파이":{제작방법:"제작대",배수:1,재료:[["파이지",1],["크림",2],["초콜릿",2],["설탕",1]],판매가:"50.64"},"발광 열매 파이":{제작방법:"제작대",배수:1,재료:[["파이지",1],["발광 열매",3],["설탕",2],["밀",3]],판매가:"35.13"},"애플 파이":{제작방법:"제작대",배수:1,재료:[["파이지",1],["사과",2],["사과 잼",1],["설탕",2],["밀",3]],판매가:"68.21"},"후렴 파이":{제작방법:"제작대",배수:1,재료:[["파이지",1],["후렴과",1],["엔더 소스",1],["후렴화",1],["설탕",2],["밀",3]],판매가:"43.35"},"복숭아 파이":{제작방법:"제작대",배수:1,재료:[["파이지",1],["복숭아",2],["복숭아 잼",1],["설탕",2],["밀",3]],판매가:"54.42"},"발광 열매 타르트":{제작방법:"제작대",배수:1,재료:[["파이지",1],["발광 열매",1],["크림",1],["설탕",1]],판매가:"30.55"},"초콜릿 타르트":{제작방법:"제작대",배수:1,재료:[["파이지",1],["초콜릿",1],["크림",1],["설탕",1]],판매가:"38.48"},린저토르테:{제작방법:"제작대",배수:1,재료:[["파이지",1],["라임",1],["달콤한 열매 잼",1],["밀 씨앗",1],["설탕",2],["밀",3]],판매가:"76.79"},"플레인 도넛":{제작방법:"튀김기",배수:1,재료:[["기름",1],["도넛 반죽",1]],판매가:"16.12"},"초코 도넛":{제작방법:"제작대",배수:1,재료:[["플레인 도넛",1],["초콜릿",1]],판매가:"31.88"},"화이트 초코 도넛":{제작방법:"제작대",배수:1,재료:[["플레인 도넛",1],["초콜릿",1],["우유병",1]],판매가:"23.13"},"부활절 치즈 빵":{제작방법:"프라이팬",배수:1,재료:[["빵 반죽",1],["치즈",1],["버터",1],["날달걀",2]],판매가:"71.72"},크루아상:{제작방법:"프라이팬",배수:1,재료:[["빵 반죽",1],["버터",2],["날달걀",1]],판매가:"27.2",소요시간:15},캄빠뉴:{제작방법:"프라이팬",배수:1,재료:[["빵 반죽",1],["밀 씨앗",1],["밀",1]],판매가:"35.88",소요시간:27},바게트:{제작방법:"프라이팬",배수:1,재료:[["빵 반죽",2]],판매가:"41.9",소요시간:30},식빵:{제작방법:"프라이팬",배수:1,재료:[["빵 반죽",1],["우유병",1],["버터",1],["설탕",1]],판매가:"44.94",소요시간:25},번:{제작방법:"프라이팬",배수:1,재료:[["빵 반죽",1],["날달걀",1],["우유병",1],["버터",1],["설탕",1]],판매가:"37.47",소요시간:17},옥수수빵:{제작방법:"프라이팬",배수:1,재료:[["빵 반죽",1],["옥수수",1],["우유병",1],["설탕",1],["날달걀",1],["버터",1]],판매가:"37.78",소요시간:27},"빵 세트":{제작방법:"제작대",배수:1,재료:[["부활절 치즈 빵",1],["크루아상",1],["캄빠뉴",1],["바게트",1],["식빵",1],["번",1],["옥수수빵",1]],판매가:"435.44"},"커스타드 소라빵":{제작방법:"프라이팬",배수:1,재료:[["빵 반죽",1],["발광 열매 커스타드",1],["설탕",1],["날달걀",1],["버터",1]],판매가:"49.02"},"딸기 잼 롤":{제작방법:"프라이팬",배수:1,재료:[["빵 반죽",1],["버터",1],["설탕",1],["날달걀",1],["딸기 잼",1]],판매가:"86.56"},"초코 롤케이크":{제작방법:"프라이팬",배수:1,재료:[["초콜릿",1],["빵 반죽",1],["크림",1],["날달걀",1],["설탕",1],["코코아콩",1]],판매가:"19.02"},"라임 케이크":{제작방법:"제작대",배수:1,재료:[["라임",2],["크림",2],["설탕",1],["효모",1],["날달걀",1],["밀",2]],판매가:"11.99"},"딸기 케이크":{제작방법:"제작대",배수:1,재료:[["딸기",1],["딸기 잼",1],["크림",2],["설탕",1],["효모",1],["날달걀",1],["밀",2]],판매가:"33.95"},"달콤한 열매 케이크":{제작방법:"제작대",배수:1,재료:[["달콤한 열매",1],["달콤한 열매 잼",1],["크림",2],["설탕",1],["효모",1],["날달걀",1],["밀",2]],판매가:"39.65"},"슈바르츠발트 키르쉬토르테":{제작방법:"제작대",배수:1,재료:[["초콜릿",2],["크림",2],["달콤한 열매",1],["효모",1],["날달걀",1],["밀",2]],판매가:"20.13"},"번트 케이크":{제작방법:"제작대",배수:1,재료:[["버터",1],["크림",1],["우유병",1],["효모",1],["날달걀",2],["밀",2]],판매가:"6.87"},"오레오 케이크":{제작방법:"제작대",배수:1,재료:[["우유병",1],["밀가루",1],["설탕",1],["초콜릿",1],["버터",1],["마시멜로",1],["오레오 쿠키",1]],판매가:"129.83"},"딸기 컵케이크":{제작방법:"프라이팬",배수:1,재료:[["빵 반죽",1],["딸기 잼",1],["크림",1],["딸기",1],["우유병",1],["버터",1]],판매가:"70.55"},"달콤한 열매 컵케이크":{제작방법:"프라이팬",배수:1,재료:[["빵 반죽",1],["달콤한 열매 잼",1],["크림",1],["달콤한 열매",1],["우유병",1],["버터",1]],판매가:"111.9"},"사과 컵케이크":{제작방법:"프라이팬",배수:1,재료:[["빵 반죽",1],["사과 잼",1],["크림",1],["사과",1],["우유병",1],["버터",1]],판매가:"89.68"},"발광 열매 커스타드":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["발광 열매",1],["크림",1],["날달걀",1],["설탕",1]],판매가:"8.45"},"딸기 커스타드":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["딸기",1],["크림",1],["날달걀",1],["설탕",1]],판매가:"7"},핫초코:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["초콜릿",1],["우유병",1],["설탕",1],["마시멜로",1]],판매가:"48.63"},"달콤한 주스":{제작방법:"제작대",배수:1,재료:[["요리용 물병",1],["달콤한 열매",1],["벌집 조각",1]],판매가:"6.81"},"당근 주스":{제작방법:"제작대",배수:1,재료:[["요리용 물병",1],["당근",1],["설탕",1],["달콤한 열매",1]],판매가:"2.64"},"수박 주스":{제작방법:"제작대",배수:1,재료:[["수박 조각",2],["설탕",1]]},"켈프 쉐이크":{제작방법:"제작대",배수:1,재료:[["켈프",4],["설탕",1]],판매가:"0.4"},"사과 사이다":{제작방법:"제작대",배수:1,재료:[["사과",2],["설탕",1],["드래곤의 숨결",1],["요리용 물병",1]],판매가:"34.04"},"라임 에이드":{제작방법:"제작대",배수:1,재료:[["라임",2],["설탕",1],["요리용 물병",1]],판매가:"5.11"},"베리 라임 에이드":{제작방법:"제작대",배수:1,재료:[["라임",2],["달콤한 열매",2],["설탕",1],["요리용 물병",1]],판매가:"6.57"},"딸기 에이드":{제작방법:"제작대",배수:1,재료:[["딸기",2],["설탕",1],["요리용 물병",1]],판매가:"2.74"},"엔더 버블 티":{제작방법:"제작대",배수:1,재료:[["후렴과",2],["우유병",1],["엔더 펄",1],["설탕",1]],판매가:"54.96"},"드래곤의 숨결 소다":{제작방법:"제작대",배수:1,재료:[["드래곤의 숨결",2],["요리용 물병",1],["설탕",1]],판매가:"67.35"},"발광 열매 스무디":{제작방법:"제작대",배수:1,재료:[["발광 열매",2],["우유병",1],["눈덩이",1],["설탕",1]],판매가:"4.9"},"달콤한 열매 스무디":{제작방법:"제작대",배수:1,재료:[["달콤한 열매",2],["우유병",1],["눈덩이",1],["설탕",1]],판매가:"1.45"},"밀크 스무디":{제작방법:"제작대",배수:1,재료:[["우유병",2],["눈덩이",1],["설탕",1]],판매가:"2.06"},"초코 스무디":{제작방법:"제작대",배수:1,재료:[["초콜릿",2],["우유병",1],["눈덩이",1],["설탕",1]],판매가:"11.54"},"복숭아 스무디":{제작방법:"제작대",배수:1,재료:[["복숭아",2],["우유병",1],["눈덩이",1],["설탕",1]],판매가:"6.12"},"엔더 넥타르":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["엔더의 눈",2],["우유병",1],["설탕",1]],판매가:"79.05"},"초코 아이스크림 콘":{제작방법:"제작대",배수:1,재료:[["초콜릿",2],["얼음",2],["크림",1],["도우",1],["설탕",1]],판매가:"20.73"},"벨벳 아이스크림 콘":{제작방법:"제작대",배수:1,재료:[["떡",1],["설탕",1],["뼛가루",1]],판매가:"9.97"},"복숭아 아이스크림 콘":{제작방법:"제작대",배수:1,재료:[["떡",1],["설탕",1],["분홍 꽃잎",1]],판매가:"15.44"},"딸기 아이스크림 콘":{제작방법:"제작대",배수:1,재료:[["떡",1],["설탕",1],["켈프",1]],판매가:"7.59"},"발광 열매 아이스크림 콘":{제작방법:"제작대",배수:1,재료:[["발광 열매",2],["얼음",2],["크림",1],["도우",1],["설탕",1]],판매가:"10.44"},"소다 아이스크림 콘":{제작방법:"제작대",배수:1,재료:[["드래곤의 숨결",2],["얼음",2],["크림",1],["도우",1],["설탕",1]],판매가:"72.87"},"발광 열매 아이스크림":{제작방법:"제작대",배수:1,재료:[["발광 열매",2],["얼음",2],["우유병",1],["설탕",1]],판매가:"10.07"},"후렴화 차":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["후렴화",1],["설탕",1]],판매가:"3.44"},"라일락 차":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["라일락",1],["꿀이 든 병",1]],판매가:"12.73"},"장미 차":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["장미",1],["꿀이 든 병",1]],판매가:"14.49"},"블랙 커피":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["원두",1]],판매가:"19.08"},"밀크 커피":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["원두",1],["우유병",1],["설탕",1]],판매가:"22.93"},"복숭아 차":{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["복숭아",1],["꿀이 든 병",1]],판매가:"17.87"},"녹차 아이스크림":{제작방법:"제작대",배수:1,재료:[["녹차 가루",2],["얼음",2],["우유병",1],["설탕",1]]},녹차:{제작방법:"냄비",배수:1,재료:[["요리용 물병",1],["녹찻잎",1]]}};function _1(t,e){const r=[];if(["실버"].includes(t))r.push(`${e}`);else{const n=Math.floor(e/64),a=e%64;n&&r.push(`${n}셋`),(a||!n)&&(e>64?r.push(`${a}개(${e}개)`):r.push(`${a}개`))}return`${t} x ${r.join(" ")}`}class K1{toLowerIngredients(e,r){const n=k[e].재료,a=k[e].배수;if(n===void 0||a===void 0)throw new Error("레시피가 없는데요...");let f=[];for(const[c,d]of n)k.hasOwnProperty(c)?f=f.concat(this.toLowerIngredients(c,d/a*r)):f.push([c,d/a*r]);return f}coalesceIngredients(e){const r={};for(const[n,a]of e)r.hasOwnProperty(n)?r[n]+=a:r[n]=a;return Object.entries(r)}findFullRecipes(e){const r=k[e],n=k[e].재료;if(r===void 0||n===void 0)throw new Error("레시피가 없는데요...");let a=[];for(const[f,c]of n)k.hasOwnProperty(f)?a=a.concat(this.findFullRecipes(f)):a.push(r);return a}IngredientArrayToString(e){return e.map(r=>`${_1(r[0],r[1])}`).join(", ")}}const S=new K1;var X1=D('<table class="p-0 border-separate border-spacing-x-6 border-spacing-y-2 svelte-1hs8j63"><tbody><tr><td> </td><td> </td><td> </td></tr></tbody></table>'),z1=D('<li class="svelte-1hs8j63"><details class="svelte-1hs8j63"><summary class="p-0 pr-4 svelte-1hs8j63"><!></summary> <ul></ul></details></li>'),J1=D('<li class="svelte-1hs8j63"><!></li>'),U1=D('<ul class="menu bg-base-300 rounded-box w-fit text-base-content svelte-1hs8j63"><!></ul>');function p1(t,e){f1(e,!0);const r=u=>{var s=X1(),i=b(s),_=b(i),p=b(_),x=b(p,!0);O(()=>q(x,`${_1(e.recipeName,e.quantity)}`)),w(p);var o=C(p),m=b(o,!0);w(o);var E=C(o),I=b(E,!0);O(()=>q(I,S.IngredientArrayToString(v(d)))),w(E),w(_),w(i),w(s),O(()=>q(m,v(a).제작방법)),N(u,s)},n=u=>{var s=J(),i=X(s);z(i,()=>v(y).length>0,_=>{var p=z1(),x=b(p),o=b(x),m=b(o);r(m),w(o);var E=C(o,2);V1(E,21,()=>v(y),([I,g])=>I,(I,g)=>{let P=()=>v(g)[0],L=()=>v(g)[1];var M=R(()=>e.recursionCount+1);p1(I,{get recipeName(){return P()},get quantity(){return L()},get recursionCount(){return v(M)},get recipeExpandDepth(){return e.recipeExpandDepth}})}),w(E),w(x),w(p),O(()=>x.open=e.recipeExpandDepth===0||e.recursionCount<e.recipeExpandDepth),N(_,p)},_=>{var p=J1(),x=b(p);r(x),w(p),N(_,p)}),N(u,s)},a=R(()=>k[e.recipeName]),f=R(()=>v(a).배수||1),c=R(()=>v(a).재료||[]),d=R(()=>v(c).map(([u,s])=>[u,s/v(f)*e.quantity]));let y=R(()=>{let u=[];for(const[s,i]of v(d))k.hasOwnProperty(s)&&u.push([s,i]);return u});var h=J(),l=X(h);z(l,()=>e.recursionCount===0,u=>{var s=U1(),i=b(s);n(i),w(s),N(u,s)},u=>{n(u)}),N(t,h),c1()}var W1=D('<div class="flex flex-row"><input class="quantity-input svelte-1kpht8u" type="number" min="0"><p class="svelte-1kpht8u">셋</p></div> <div class="flex flex-row"><input class="quantity-input svelte-1kpht8u" type="number" min="0"><p class="svelte-1kpht8u">개</p></div> <div class="divider m-0 "></div> <pre class="whitespace-pre-wrap"> </pre> <div class="flex flex-row"><p class="mr-2 svelte-1kpht8u">펼침 단계:</p> <input class="quantity-input svelte-1kpht8u" type="number" min="0" max="8"></div> <!>',1),Z1=D('<div class="flex-1 flex flex-col gap-3 text-white"><!></div>');function ae(t,e){f1(e,!0);let r=V(1),n=V(0),a=V(0),f=R(()=>k[e.selectedRecipeName]),c=R(()=>{if(v(f)===void 0)return"";const h=S.IngredientArrayToString(v(f).재료||[]),l=v(n)*64+v(r),u=Number(v(f).판매가),s=S.coalesceIngredients(S.toLowerIngredients(e.selectedRecipeName,l)),i=S.IngredientArrayToString(s);return`이름:			${e.selectedRecipeName}
제작 방법:	${v(f).제작방법}
재료:			${h}

판매가: ${Math.floor(u*l)||"0"}원
기본 재료 환산: ${i}
`});var d=Z1(),y=b(d);z(y,()=>v(f)!==void 0,h=>{var l=W1(),u=X(l),s=b(u);Y(s),e1(),w(u);var i=C(u,2),_=b(i);Y(_),e1(),w(i);var p=C(i,4),x=b(p,!0);w(p);var o=C(p,2),m=C(b(o),2);Y(m),w(o);var E=C(o,2),I=R(()=>v(n)*64+v(r));p1(E,{get recipeName(){return e.selectedRecipeName},get quantity(){return v(I)},recursionCount:0,get recipeExpandDepth(){return v(a)}}),O(()=>q(x,v(c))),G(s,()=>v(n),g=>F(n,g)),G(_,()=>v(r),g=>F(r,g)),G(m,()=>v(a),g=>F(a,g)),N(h,l)}),w(d),N(t,d),c1()}export{k as R,Y as a,G as b,ae as c,V1 as e,S as r};