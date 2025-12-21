(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function rb(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Xf={exports:{}},Mo={};var cg;function sb(){if(cg)return Mo;cg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Mo.Fragment=e,Mo.jsx=i,Mo.jsxs=i,Mo}var fg;function ob(){return fg||(fg=1,Xf.exports=sb()),Xf.exports}var I=ob(),qf={exports:{}},re={};var dg;function lb(){if(dg)return re;dg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function M(S){return S===null||typeof S!="object"?null:(S=b&&S[b]||S["@@iterator"],typeof S=="function"?S:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(S,P,ot){this.props=S,this.context=P,this.refs=y,this.updater=ot||A}v.prototype.isReactComponent={},v.prototype.setState=function(S,P){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,P,"setState")},v.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function z(){}z.prototype=v.prototype;function L(S,P,ot){this.props=S,this.context=P,this.refs=y,this.updater=ot||A}var k=L.prototype=new z;k.constructor=L,C(k,v.prototype),k.isPureReactComponent=!0;var X=Array.isArray;function O(){}var N={H:null,A:null,T:null,S:null},rt=Object.prototype.hasOwnProperty;function D(S,P,ot){var ft=ot.ref;return{$$typeof:o,type:S,key:P,ref:ft!==void 0?ft:null,props:ot}}function w(S,P){return D(S.type,P,S.props)}function j(S){return typeof S=="object"&&S!==null&&S.$$typeof===o}function it(S){var P={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ot){return P[ot]})}var ut=/\/+/g;function gt(S,P){return typeof S=="object"&&S!==null&&S.key!=null?it(""+S.key):P.toString(36)}function pt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(O,O):(S.status="pending",S.then(function(P){S.status==="pending"&&(S.status="fulfilled",S.value=P)},function(P){S.status==="pending"&&(S.status="rejected",S.reason=P)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function B(S,P,ot,ft,Et){var W=typeof S;(W==="undefined"||W==="boolean")&&(S=null);var et=!1;if(S===null)et=!0;else switch(W){case"bigint":case"string":case"number":et=!0;break;case"object":switch(S.$$typeof){case o:case e:et=!0;break;case _:return et=S._init,B(et(S._payload),P,ot,ft,Et)}}if(et)return Et=Et(S),et=ft===""?"."+gt(S,0):ft,X(Et)?(ot="",et!=null&&(ot=et.replace(ut,"$&/")+"/"),B(Et,P,ot,"",function(Vt){return Vt})):Et!=null&&(j(Et)&&(Et=w(Et,ot+(Et.key==null||S&&S.key===Et.key?"":(""+Et.key).replace(ut,"$&/")+"/")+et)),P.push(Et)),1;et=0;var Rt=ft===""?".":ft+":";if(X(S))for(var Ut=0;Ut<S.length;Ut++)ft=S[Ut],W=Rt+gt(ft,Ut),et+=B(ft,P,ot,W,Et);else if(Ut=M(S),typeof Ut=="function")for(S=Ut.call(S),Ut=0;!(ft=S.next()).done;)ft=ft.value,W=Rt+gt(ft,Ut++),et+=B(ft,P,ot,W,Et);else if(W==="object"){if(typeof S.then=="function")return B(pt(S),P,ot,ft,Et);throw P=String(S),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return et}function Z(S,P,ot){if(S==null)return S;var ft=[],Et=0;return B(S,ft,"","",function(W){return P.call(ot,W,Et++)}),ft}function Q(S){if(S._status===-1){var P=S._result;P=P(),P.then(function(ot){(S._status===0||S._status===-1)&&(S._status=1,S._result=ot)},function(ot){(S._status===0||S._status===-1)&&(S._status=2,S._result=ot)}),S._status===-1&&(S._status=0,S._result=P)}if(S._status===1)return S._result.default;throw S._result}var bt=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},St={map:Z,forEach:function(S,P,ot){Z(S,function(){P.apply(this,arguments)},ot)},count:function(S){var P=0;return Z(S,function(){P++}),P},toArray:function(S){return Z(S,function(P){return P})||[]},only:function(S){if(!j(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return re.Activity=x,re.Children=St,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=L,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,re.__COMPILER_RUNTIME={__proto__:null,c:function(S){return N.H.useMemoCache(S)}},re.cache=function(S){return function(){return S.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(S,P,ot){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var ft=C({},S.props),Et=S.key;if(P!=null)for(W in P.key!==void 0&&(Et=""+P.key),P)!rt.call(P,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&P.ref===void 0||(ft[W]=P[W]);var W=arguments.length-2;if(W===1)ft.children=ot;else if(1<W){for(var et=Array(W),Rt=0;Rt<W;Rt++)et[Rt]=arguments[Rt+2];ft.children=et}return D(S.type,Et,ft)},re.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:c,_context:S},S},re.createElement=function(S,P,ot){var ft,Et={},W=null;if(P!=null)for(ft in P.key!==void 0&&(W=""+P.key),P)rt.call(P,ft)&&ft!=="key"&&ft!=="__self"&&ft!=="__source"&&(Et[ft]=P[ft]);var et=arguments.length-2;if(et===1)Et.children=ot;else if(1<et){for(var Rt=Array(et),Ut=0;Ut<et;Ut++)Rt[Ut]=arguments[Ut+2];Et.children=Rt}if(S&&S.defaultProps)for(ft in et=S.defaultProps,et)Et[ft]===void 0&&(Et[ft]=et[ft]);return D(S,W,Et)},re.createRef=function(){return{current:null}},re.forwardRef=function(S){return{$$typeof:h,render:S}},re.isValidElement=j,re.lazy=function(S){return{$$typeof:_,_payload:{_status:-1,_result:S},_init:Q}},re.memo=function(S,P){return{$$typeof:p,type:S,compare:P===void 0?null:P}},re.startTransition=function(S){var P=N.T,ot={};N.T=ot;try{var ft=S(),Et=N.S;Et!==null&&Et(ot,ft),typeof ft=="object"&&ft!==null&&typeof ft.then=="function"&&ft.then(O,bt)}catch(W){bt(W)}finally{P!==null&&ot.types!==null&&(P.types=ot.types),N.T=P}},re.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},re.use=function(S){return N.H.use(S)},re.useActionState=function(S,P,ot){return N.H.useActionState(S,P,ot)},re.useCallback=function(S,P){return N.H.useCallback(S,P)},re.useContext=function(S){return N.H.useContext(S)},re.useDebugValue=function(){},re.useDeferredValue=function(S,P){return N.H.useDeferredValue(S,P)},re.useEffect=function(S,P){return N.H.useEffect(S,P)},re.useEffectEvent=function(S){return N.H.useEffectEvent(S)},re.useId=function(){return N.H.useId()},re.useImperativeHandle=function(S,P,ot){return N.H.useImperativeHandle(S,P,ot)},re.useInsertionEffect=function(S,P){return N.H.useInsertionEffect(S,P)},re.useLayoutEffect=function(S,P){return N.H.useLayoutEffect(S,P)},re.useMemo=function(S,P){return N.H.useMemo(S,P)},re.useOptimistic=function(S,P){return N.H.useOptimistic(S,P)},re.useReducer=function(S,P,ot){return N.H.useReducer(S,P,ot)},re.useRef=function(S){return N.H.useRef(S)},re.useState=function(S){return N.H.useState(S)},re.useSyncExternalStore=function(S,P,ot){return N.H.useSyncExternalStore(S,P,ot)},re.useTransition=function(){return N.H.useTransition()},re.version="19.2.0",re}var hg;function _h(){return hg||(hg=1,qf.exports=lb()),qf.exports}var pi=_h(),Wf={exports:{}},Eo={},Yf={exports:{}},Zf={};var pg;function ub(){return pg||(pg=1,(function(o){function e(B,Z){var Q=B.length;B.push(Z);t:for(;0<Q;){var bt=Q-1>>>1,St=B[bt];if(0<l(St,Z))B[bt]=Z,B[Q]=St,Q=bt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],Q=B.pop();if(Q!==Z){B[0]=Q;t:for(var bt=0,St=B.length,S=St>>>1;bt<S;){var P=2*(bt+1)-1,ot=B[P],ft=P+1,Et=B[ft];if(0>l(ot,Q))ft<St&&0>l(Et,ot)?(B[bt]=Et,B[ft]=Q,bt=ft):(B[bt]=ot,B[P]=Q,bt=P);else if(ft<St&&0>l(Et,Q))B[bt]=Et,B[ft]=Q,bt=ft;else break t}}return Z}function l(B,Z){var Q=B.sortIndex-Z.sortIndex;return Q!==0?Q:B.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,x=null,b=3,M=!1,A=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function k(B){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=B)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function X(B){if(C=!1,k(B),!A)if(i(m)!==null)A=!0,O||(O=!0,it());else{var Z=i(p);Z!==null&&pt(X,Z.startTime-B)}}var O=!1,N=-1,rt=5,D=-1;function w(){return y?!0:!(o.unstable_now()-D<rt)}function j(){if(y=!1,O){var B=o.unstable_now();D=B;var Z=!0;try{t:{A=!1,C&&(C=!1,z(N),N=-1),M=!0;var Q=b;try{e:{for(k(B),x=i(m);x!==null&&!(x.expirationTime>B&&w());){var bt=x.callback;if(typeof bt=="function"){x.callback=null,b=x.priorityLevel;var St=bt(x.expirationTime<=B);if(B=o.unstable_now(),typeof St=="function"){x.callback=St,k(B),Z=!0;break e}x===i(m)&&r(m),k(B)}else r(m);x=i(m)}if(x!==null)Z=!0;else{var S=i(p);S!==null&&pt(X,S.startTime-B),Z=!1}}break t}finally{x=null,b=Q,M=!1}Z=void 0}}finally{Z?it():O=!1}}}var it;if(typeof L=="function")it=function(){L(j)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,gt=ut.port2;ut.port1.onmessage=j,it=function(){gt.postMessage(null)}}else it=function(){v(j,0)};function pt(B,Z){N=v(function(){B(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return b},o.unstable_next=function(B){switch(b){case 1:case 2:case 3:var Z=3;break;default:Z=b}var Q=b;b=Z;try{return B()}finally{b=Q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=b;b=B;try{return Z()}finally{b=Q}},o.unstable_scheduleCallback=function(B,Z,Q){var bt=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?bt+Q:bt):Q=bt,B){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=Q+St,B={id:_++,callback:Z,priorityLevel:B,startTime:Q,expirationTime:St,sortIndex:-1},Q>bt?(B.sortIndex=Q,e(p,B),i(m)===null&&B===i(p)&&(C?(z(N),N=-1):C=!0,pt(X,Q-bt))):(B.sortIndex=St,e(m,B),A||M||(A=!0,O||(O=!0,it()))),B},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(B){var Z=b;return function(){var Q=b;b=Z;try{return B.apply(this,arguments)}finally{b=Q}}}})(Zf)),Zf}var mg;function cb(){return mg||(mg=1,Yf.exports=ub()),Yf.exports}var Kf={exports:{}},wn={};var gg;function fb(){if(gg)return wn;gg=1;var o=_h();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},wn.flushSync=function(m){var p=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=_,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:b,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var xg;function db(){if(xg)return Kf.exports;xg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Kf.exports=fb(),Kf.exports}var _g;function hb(){if(_g)return Eo;_g=1;var o=cb(),e=_h(),i=db();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,T=u.child;T;){if(T===a){g=!0,a=u,s=f;break}if(T===s){g=!0,s=u,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=u;break}if(T===s){g=!0,s=f,a=u;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case X:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case L:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case rt:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var pt=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},bt=[],St=-1;function S(t){return{current:t}}function P(t){0>St||(t.current=bt[St],bt[St]=null,St--)}function ot(t,n){St++,bt[St]=t.current,t.current=n}var ft=S(null),Et=S(null),W=S(null),et=S(null);function Rt(t,n){switch(ot(W,n),ot(Et,t),ot(ft,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?N0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=N0(n),t=O0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}P(ft),ot(ft,t)}function Ut(){P(ft),P(Et),P(W)}function Vt(t){t.memoizedState!==null&&ot(et,t);var n=ft.current,a=O0(n,t.type);n!==a&&(ot(Et,t),ot(ft,a))}function ue(t){Et.current===t&&(P(ft),P(Et)),et.current===t&&(P(et),vo._currentValue=Q)}var tn,he;function Ae(t){if(tn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);tn=n&&n[1]||"",he=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+t+he}var H=!1;function pe(t,n){if(!t||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var at=lt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(lt){at=lt}t.call(_t.prototype)}}else{try{throw Error()}catch(lt){at=lt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var F=g.split(`
`),tt=T.split(`
`);for(u=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(s===F.length||u===tt.length)for(s=F.length-1,u=tt.length-1;1<=s&&0<=u&&F[s]!==tt[u];)u--;for(;1<=s&&0<=u;s--,u--)if(F[s]!==tt[u]){if(s!==1||u!==1)do if(s--,u--,0>u||F[s]!==tt[u]){var ht=`
`+F[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ae(a):""}function ge(t,n){switch(t.tag){case 26:case 27:case 5:return Ae(t.type);case 16:return Ae("Lazy");case 13:return t.child!==n&&n!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return pe(t.type,!1);case 11:return pe(t.type.render,!1);case 1:return pe(t.type,!0);case 31:return Ae("Activity");default:return""}}function Oe(t){try{var n="",a=null;do n+=ge(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ht=Object.prototype.hasOwnProperty,je=o.unstable_scheduleCallback,Yt=o.unstable_cancelCallback,ae=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,$=o.unstable_getCurrentPriorityLevel,xt=o.unstable_ImmediatePriority,yt=o.unstable_UserBlockingPriority,dt=o.unstable_NormalPriority,qt=o.unstable_LowPriority,Ot=o.unstable_IdlePriority,Qt=o.log,Xt=o.unstable_setDisableYieldValue,Mt=null,At=null;function Wt(t){if(typeof Qt=="function"&&Xt(t),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Mt,t)}catch{}}var Gt=Math.clz32?Math.clz32:G,Bt=Math.log,ne=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(Bt(t)/ne|0)|0}var Lt=256,wt=262144,Dt=4194304;function Tt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Tt(s):(g&=T,g!==0?u=Tt(g):a||(a=T&~t,a!==0&&(u=Tt(a))))):(T=s&~f,T!==0?u=Tt(T):g!==0?u=Tt(g):a||(a=s&~t,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ft(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var t=Dt;return Dt<<=1,(Dt&62914560)===0&&(Dt=4194304),t}function Re(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jn(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,F=t.expirationTimes,tt=t.hiddenUpdates;for(a=g&~a;0<a;){var ht=31-Gt(a),_t=1<<ht;T[ht]=0,F[ht]=-1;var at=tt[ht];if(at!==null)for(tt[ht]=null,ht=0;ht<at.length;ht++){var lt=at[ht];lt!==null&&(lt.lane&=-536870913)}a&=~_t}s!==0&&Go(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Go(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Gt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ds(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Gt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Us(t,n){var a=n&-n;return a=(a&42)!==0?1:mi(a),(a&(t.suspendedLanes|n))!==0?0:a}function mi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Qa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ls(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:ig(t.type))}function Ns(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var Xn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Xn,hn="__reactProps$"+Xn,Oi="__reactContainer$"+Xn,Cr="__reactEvents$"+Xn,Fu="__reactListeners$"+Xn,Iu="__reactHandles$"+Xn,Vo="__reactResources$"+Xn,Ja="__reactMarker$"+Xn;function Os(t){delete t[sn],delete t[hn],delete t[Cr],delete t[Fu],delete t[Iu]}function ga(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Oi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=H0(t);t!==null;){if(a=t[sn])return a;t=H0(t)}return n}t=a,a=t.parentNode}return null}function R(t){if(t=t[sn]||t[Oi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function q(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function st(t){var n=t[Vo];return n||(n=t[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nt(t){t[Ja]=!0}var K=new Set,Ct={};function Nt(t,n){zt(t,n),zt(t+"Capture",n)}function zt(t,n){for(Ct[t]=n,t=0;t<n.length;t++)K.add(n[t])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ee={};function Zt(t){return Ht.call(ee,t)?!0:Ht.call($t,t)?!1:It.test(t)?ee[t]=!0:($t[t]=!0,!1)}function ce(t,n,a){if(Zt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Te(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ce(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Xe(t){if(!t._valueTracker){var n=Ne(t)?"checked":"value";t._valueTracker=Jt(t,n,""+t[n])}}function ye(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ne(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xa=/[\n"\\]/g;function We(t){return t.replace(xa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pi(t,n,a,s,u,f,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Se(n)):t.value!==""+Se(n)&&(t.value=""+Se(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?vn(t,g,Se(n)):a!=null?vn(t,g,Se(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Se(T):t.removeAttribute("name")}function Ye(t,n,a,s,u,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xe(t);return}a=a!=null?""+Se(a):"",n=n!=null?""+Se(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Xe(t)}function vn(t,n,a){n==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function pn(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Se(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function bn(t,n,a){if(n!=null&&(n=""+Se(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Se(a):""}function Mn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(pt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Se(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Xe(t)}function Ai(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Bi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Uh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Dh(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Dh(t,f,n[f])}function ku(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jo(t){return n_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Hu=null;function Gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wr=null,Dr=null;function Lh(t){var n=R(t);if(n&&(t=n.stateNode)){var a=t[hn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Pi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+We(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[hn]||null;if(!u)throw Error(r(90));Pi(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&ye(s)}break t;case"textarea":bn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&pn(t,!!a.multiple,n,!1)}}}var Vu=!1;function Nh(t,n,a){if(Vu)return t(n,a);Vu=!0;try{var s=t(n);return s}finally{if(Vu=!1,(wr!==null||Dr!==null)&&(Ul(),wr&&(n=wr,t=Dr,Dr=wr=null,Lh(n),t)))for(n=0;n<t.length;n++)Lh(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var s=a[hn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(Fi)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){ju=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{ju=!1}var _a=null,Xu=null,Xo=null;function Oh(){if(Xo)return Xo;var t,n=Xu,a=n.length,s,u="value"in _a?_a.value:_a.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return Xo=u.slice(t,1<s?1-s:void 0)}function qo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Ph(){return!1}function Pn(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Ph,this.isPropagationStopped=Ph,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=Pn($a),zs=x({},$a,{view:0,detail:0}),i_=Pn(zs),qu,Wu,Fs,Zo=x({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(qu=t.screenX-Fs.screenX,Wu=t.screenY-Fs.screenY):Wu=qu=0,Fs=t),qu)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),Bh=Pn(Zo),a_=x({},Zo,{dataTransfer:0}),r_=Pn(a_),s_=x({},zs,{relatedTarget:0}),Yu=Pn(s_),o_=x({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),l_=Pn(o_),u_=x({},$a,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c_=Pn(u_),f_=x({},$a,{data:0}),zh=Pn(f_),d_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=p_[t])?!!n[t]:!1}function Zu(){return m_}var g_=x({},zs,{key:function(t){if(t.key){var n=d_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x_=Pn(g_),__=x({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fh=Pn(__),v_=x({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),b_=Pn(v_),S_=x({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),y_=Pn(S_),M_=x({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),E_=Pn(M_),T_=x({},$a,{newState:0,oldState:0}),A_=Pn(T_),R_=[9,13,27,32],Ku=Fi&&"CompositionEvent"in window,Is=null;Fi&&"documentMode"in document&&(Is=document.documentMode);var C_=Fi&&"TextEvent"in window&&!Is,Ih=Fi&&(!Ku||Is&&8<Is&&11>=Is),kh=" ",Hh=!1;function Gh(t,n){switch(t){case"keyup":return R_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function w_(t,n){switch(t){case"compositionend":return Vh(n);case"keypress":return n.which!==32?null:(Hh=!0,kh);case"textInput":return t=n.data,t===kh&&Hh?null:t;default:return null}}function D_(t,n){if(Ur)return t==="compositionend"||!Ku&&Gh(t,n)?(t=Oh(),Xo=Xu=_a=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ih&&n.locale!=="ko"?null:n.data;default:return null}}var U_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!U_[t.type]:n==="textarea"}function Xh(t,n,a,s){wr?Dr?Dr.push(s):Dr=[s]:wr=s,n=Fl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var ks=null,Hs=null;function L_(t){R0(t,0)}function Ko(t){var n=q(t);if(ye(n))return t}function qh(t,n){if(t==="change")return n}var Wh=!1;if(Fi){var Qu;if(Fi){var Ju="oninput"in document;if(!Ju){var Yh=document.createElement("div");Yh.setAttribute("oninput","return;"),Ju=typeof Yh.oninput=="function"}Qu=Ju}else Qu=!1;Wh=Qu&&(!document.documentMode||9<document.documentMode)}function Zh(){ks&&(ks.detachEvent("onpropertychange",Kh),Hs=ks=null)}function Kh(t){if(t.propertyName==="value"&&Ko(Hs)){var n=[];Xh(n,Hs,t,Gu(t)),Nh(L_,n)}}function N_(t,n,a){t==="focusin"?(Zh(),ks=n,Hs=a,ks.attachEvent("onpropertychange",Kh)):t==="focusout"&&Zh()}function O_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ko(Hs)}function P_(t,n){if(t==="click")return Ko(n)}function B_(t,n){if(t==="input"||t==="change")return Ko(n)}function z_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:z_;function Gs(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ht.call(n,u)||!qn(t[u],n[u]))return!1}return!0}function Qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jh(t,n){var a=Qh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Qh(a)}}function $h(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?$h(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function tp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_n(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=_n(t.document)}return n}function $u(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var F_=Fi&&"documentMode"in document&&11>=document.documentMode,Lr=null,tc=null,Vs=null,ec=!1;function ep(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ec||Lr==null||Lr!==_n(s)||(s=Lr,"selectionStart"in s&&$u(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Vs&&Gs(Vs,s)||(Vs=s,s=Fl(tc,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Lr)))}function tr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Nr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},nc={},np={};Fi&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function er(t){if(nc[t])return nc[t];if(!Nr[t])return t;var n=Nr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in np)return nc[t]=n[a];return t}var ip=er("animationend"),ap=er("animationiteration"),rp=er("animationstart"),I_=er("transitionrun"),k_=er("transitionstart"),H_=er("transitioncancel"),sp=er("transitionend"),op=new Map,ic="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ic.push("scrollEnd");function gi(t,n){op.set(t,n),Nt(n,[t])}var Qo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Or=0,ac=0;function Jo(){for(var t=Or,n=ac=Or=0;n<t;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&lp(a,u,f)}}function $o(t,n,a,s){ni[Or++]=t,ni[Or++]=n,ni[Or++]=a,ni[Or++]=s,ac|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function rc(t,n,a,s){return $o(t,n,a,s),tl(t)}function nr(t,n){return $o(t,null,null,n),tl(t)}function lp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Gt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function tl(t){if(50<fo)throw fo=0,mf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Pr={};function G_(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,s){return new G_(t,n,a,s)}function sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function up(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function el(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")sc(t)&&(g=1);else if(typeof t=="string")g=Wv(t,a,ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Wn(31,a,n,u),t.elementType=D,t.lanes=f,t;case C:return ir(a.children,u,f,n);case y:g=8,u|=24;break;case v:return t=Wn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case X:return t=Wn(13,a,n,u),t.elementType=X,t.lanes=f,t;case O:return t=Wn(19,a,n,u),t.elementType=O,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:g=10;break t;case z:g=9;break t;case k:g=11;break t;case N:g=14;break t;case rt:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Wn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function ir(t,n,a,s){return t=Wn(7,t,s,n),t.lanes=a,t}function oc(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function cp(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function lc(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var fp=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=fp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Oe(n)},fp.set(t,n),n)}return{value:t,source:n,stack:Oe(n)}}var Br=[],zr=0,nl=null,js=0,ai=[],ri=0,va=null,Ri=1,Ci="";function ki(t,n){Br[zr++]=js,Br[zr++]=nl,nl=t,js=n}function dp(t,n,a){ai[ri++]=Ri,ai[ri++]=Ci,ai[ri++]=va,va=t;var s=Ri;t=Ci;var u=32-Gt(s)-1;s&=~(1<<u),a+=1;var f=32-Gt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Ri=1<<32-Gt(n)+u|a<<u|s,Ci=f+t}else Ri=1<<f|a<<u|s,Ci=t}function uc(t){t.return!==null&&(ki(t,1),dp(t,1,0))}function cc(t){for(;t===nl;)nl=Br[--zr],Br[zr]=null,js=Br[--zr],Br[zr]=null;for(;t===va;)va=ai[--ri],ai[ri]=null,Ci=ai[--ri],ai[ri]=null,Ri=ai[--ri],ai[ri]=null}function hp(t,n){ai[ri++]=Ri,ai[ri++]=Ci,ai[ri++]=va,Ri=n.id,Ci=n.overflow,va=t}var En=null,Ze=null,Me=!1,ba=null,si=!1,fc=Error(r(519));function Sa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xs(ii(n,t)),fc}function pp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[sn]=t,n[hn]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)_e(po[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Ye(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Mn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||U0(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||Sa(t,!0)}function mp(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:En=En.return}}function Fr(t){if(t!==En)return!1;if(!Me)return mp(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Df(t.type,t.memoizedProps)),a=!a),a&&Ze&&Sa(t),mp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=k0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=k0(t)}else n===27?(n=Ze,Pa(t.type)?(t=Pf,Pf=null,Ze=t):Ze=n):Ze=En?li(t.stateNode.nextSibling):null;return!0}function ar(){Ze=En=null,Me=!1}function dc(){var t=ba;return t!==null&&(In===null?In=t:In.push.apply(In,t),ba=null),t}function Xs(t){ba===null?ba=[t]:ba.push(t)}var hc=S(null),rr=null,Hi=null;function ya(t,n,a){ot(hc,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=hc.current,P(hc)}function pc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function mc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var F=0;F<n.length;F++)if(T.context===n[F]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),pc(f.return,a,t),s||(g=null);break t}f=T.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),pc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Ir(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=u.type;qn(u.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(u===et.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(vo):t=[vo])}u=u.return}t!==null&&mc(n,t,a,s),n.flags|=262144}function il(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sr(t){rr=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return gp(rr,t)}function al(t,n){return rr===null&&sr(t),gp(t,n)}function gp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var V_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},j_=o.unstable_scheduleCallback,X_=o.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gc(){return{controller:new V_,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&j_(X_,function(){t.controller.abort()})}var Ws=null,xc=0,kr=0,Hr=null;function q_(t,n){if(Ws===null){var a=Ws=[];xc=0,kr=Sf(),Hr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return xc++,n.then(xp,xp),n}function xp(){if(--xc===0&&Ws!==null){Hr!==null&&(Hr.status="fulfilled");var t=Ws;Ws=null,kr=0,Hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function W_(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var _p=B.S;B.S=function(t,n){e0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&q_(t,n),_p!==null&&_p(t,n)};var or=S(null);function _c(){var t=or.current;return t!==null?t:qe.pooledCache}function rl(t,n){n===null?ot(or,or.current):ot(or,n.pool)}function vp(){var t=_c();return t===null?null:{parent:on._currentValue,pool:t}}var Gr=Error(r(460)),vc=Error(r(474)),sl=Error(r(542)),ol={then:function(){}};function bp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mp(t),t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mp(t),t}throw ur=n,Gr}}function lr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ur=a,Gr):a}}var ur=null;function yp(){if(ur===null)throw Error(r(459));var t=ur;return ur=null,t}function Mp(t){if(t===Gr||t===sl)throw Error(r(483))}var Vr=null,Ys=0;function ll(t){var n=Ys;return Ys+=1,Vr===null&&(Vr=[]),Sp(Vr,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ul(t,n){throw n.$$typeof===b?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ep(t){function n(Y,V){if(t){var J=Y.deletions;J===null?(Y.deletions=[V],Y.flags|=16):J.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function s(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=Ii(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<V?(Y.flags|=67108866,V):J):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,J,mt){return V===null||V.tag!==6?(V=oc(J,Y.mode,mt),V.return=Y,V):(V=u(V,J),V.return=Y,V)}function F(Y,V,J,mt){var Kt=J.type;return Kt===C?ht(Y,V,J.props.children,mt,J.key):V!==null&&(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===rt&&lr(Kt)===V.type)?(V=u(V,J.props),Zs(V,J),V.return=Y,V):(V=el(J.type,J.key,J.props,null,Y.mode,mt),Zs(V,J),V.return=Y,V)}function tt(Y,V,J,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=lc(J,Y.mode,mt),V.return=Y,V):(V=u(V,J.children||[]),V.return=Y,V)}function ht(Y,V,J,mt,Kt){return V===null||V.tag!==7?(V=ir(J,Y.mode,mt,Kt),V.return=Y,V):(V=u(V,J),V.return=Y,V)}function _t(Y,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=oc(""+V,Y.mode,J),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return J=el(V.type,V.key,V.props,null,Y.mode,J),Zs(J,V),J.return=Y,J;case A:return V=lc(V,Y.mode,J),V.return=Y,V;case rt:return V=lr(V),_t(Y,V,J)}if(pt(V)||it(V))return V=ir(V,Y.mode,J,null),V.return=Y,V;if(typeof V.then=="function")return _t(Y,ll(V),J);if(V.$$typeof===L)return _t(Y,al(Y,V),J);ul(Y,V)}return null}function at(Y,V,J,mt){var Kt=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Kt!==null?null:T(Y,V,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Kt?F(Y,V,J,mt):null;case A:return J.key===Kt?tt(Y,V,J,mt):null;case rt:return J=lr(J),at(Y,V,J,mt)}if(pt(J)||it(J))return Kt!==null?null:ht(Y,V,J,mt,null);if(typeof J.then=="function")return at(Y,V,ll(J),mt);if(J.$$typeof===L)return at(Y,V,al(Y,J),mt);ul(Y,J)}return null}function lt(Y,V,J,mt,Kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Y=Y.get(J)||null,T(V,Y,""+mt,Kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return Y=Y.get(mt.key===null?J:mt.key)||null,F(V,Y,mt,Kt);case A:return Y=Y.get(mt.key===null?J:mt.key)||null,tt(V,Y,mt,Kt);case rt:return mt=lr(mt),lt(Y,V,J,mt,Kt)}if(pt(mt)||it(mt))return Y=Y.get(J)||null,ht(V,Y,mt,Kt,null);if(typeof mt.then=="function")return lt(Y,V,J,ll(mt),Kt);if(mt.$$typeof===L)return lt(Y,V,J,al(V,mt),Kt);ul(V,mt)}return null}function kt(Y,V,J,mt){for(var Kt=null,we=null,jt=V,fe=V=0,be=null;jt!==null&&fe<J.length;fe++){jt.index>fe?(be=jt,jt=null):be=jt.sibling;var De=at(Y,jt,J[fe],mt);if(De===null){jt===null&&(jt=be);break}t&&jt&&De.alternate===null&&n(Y,jt),V=f(De,V,fe),we===null?Kt=De:we.sibling=De,we=De,jt=be}if(fe===J.length)return a(Y,jt),Me&&ki(Y,fe),Kt;if(jt===null){for(;fe<J.length;fe++)jt=_t(Y,J[fe],mt),jt!==null&&(V=f(jt,V,fe),we===null?Kt=jt:we.sibling=jt,we=jt);return Me&&ki(Y,fe),Kt}for(jt=s(jt);fe<J.length;fe++)be=lt(jt,Y,fe,J[fe],mt),be!==null&&(t&&be.alternate!==null&&jt.delete(be.key===null?fe:be.key),V=f(be,V,fe),we===null?Kt=be:we.sibling=be,we=be);return t&&jt.forEach(function(ka){return n(Y,ka)}),Me&&ki(Y,fe),Kt}function te(Y,V,J,mt){if(J==null)throw Error(r(151));for(var Kt=null,we=null,jt=V,fe=V=0,be=null,De=J.next();jt!==null&&!De.done;fe++,De=J.next()){jt.index>fe?(be=jt,jt=null):be=jt.sibling;var ka=at(Y,jt,De.value,mt);if(ka===null){jt===null&&(jt=be);break}t&&jt&&ka.alternate===null&&n(Y,jt),V=f(ka,V,fe),we===null?Kt=ka:we.sibling=ka,we=ka,jt=be}if(De.done)return a(Y,jt),Me&&ki(Y,fe),Kt;if(jt===null){for(;!De.done;fe++,De=J.next())De=_t(Y,De.value,mt),De!==null&&(V=f(De,V,fe),we===null?Kt=De:we.sibling=De,we=De);return Me&&ki(Y,fe),Kt}for(jt=s(jt);!De.done;fe++,De=J.next())De=lt(jt,Y,fe,De.value,mt),De!==null&&(t&&De.alternate!==null&&jt.delete(De.key===null?fe:De.key),V=f(De,V,fe),we===null?Kt=De:we.sibling=De,we=De);return t&&jt.forEach(function(ab){return n(Y,ab)}),Me&&ki(Y,fe),Kt}function He(Y,V,J,mt){if(typeof J=="object"&&J!==null&&J.type===C&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Kt=J.key;V!==null;){if(V.key===Kt){if(Kt=J.type,Kt===C){if(V.tag===7){a(Y,V.sibling),mt=u(V,J.props.children),mt.return=Y,Y=mt;break t}}else if(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===rt&&lr(Kt)===V.type){a(Y,V.sibling),mt=u(V,J.props),Zs(mt,J),mt.return=Y,Y=mt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}J.type===C?(mt=ir(J.props.children,Y.mode,mt,J.key),mt.return=Y,Y=mt):(mt=el(J.type,J.key,J.props,null,Y.mode,mt),Zs(mt,J),mt.return=Y,Y=mt)}return g(Y);case A:t:{for(Kt=J.key;V!==null;){if(V.key===Kt)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(Y,V.sibling),mt=u(V,J.children||[]),mt.return=Y,Y=mt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}mt=lc(J,Y.mode,mt),mt.return=Y,Y=mt}return g(Y);case rt:return J=lr(J),He(Y,V,J,mt)}if(pt(J))return kt(Y,V,J,mt);if(it(J)){if(Kt=it(J),typeof Kt!="function")throw Error(r(150));return J=Kt.call(J),te(Y,V,J,mt)}if(typeof J.then=="function")return He(Y,V,ll(J),mt);if(J.$$typeof===L)return He(Y,V,al(Y,J),mt);ul(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(Y,V.sibling),mt=u(V,J),mt.return=Y,Y=mt):(a(Y,V),mt=oc(J,Y.mode,mt),mt.return=Y,Y=mt),g(Y)):a(Y,V)}return function(Y,V,J,mt){try{Ys=0;var Kt=He(Y,V,J,mt);return Vr=null,Kt}catch(jt){if(jt===Gr||jt===sl)throw jt;var we=Wn(29,jt,null,Y.mode);return we.lanes=mt,we.return=Y,we}finally{}}}var cr=Ep(!0),Tp=Ep(!1),Ma=!1;function bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ta(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=tl(t),lp(t,null,a),n}return $o(t,s,n,a),tl(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ds(t,a)}}function yc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mc=!1;function Qs(){if(Mc){var t=Hr;if(t!==null)throw t}}function Js(t,n,a,s){Mc=!1;var u=t.updateQueue;Ma=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var F=T,tt=F.next;F.next=null,g===null?f=tt:g.next=tt,g=F;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==g&&(T===null?ht.firstBaseUpdate=tt:T.next=tt,ht.lastBaseUpdate=F))}if(f!==null){var _t=u.baseState;g=0,ht=tt=F=null,T=f;do{var at=T.lane&-536870913,lt=at!==T.lane;if(lt?(ve&at)===at:(s&at)===at){at!==0&&at===kr&&(Mc=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var kt=t,te=T;at=n;var He=a;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){_t=kt.call(He,_t,at);break t}_t=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,at=typeof kt=="function"?kt.call(He,_t,at):kt,at==null)break t;_t=x({},_t,at);break t;case 2:Ma=!0}}at=T.callback,at!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(tt=ht=lt,F=_t):ht=ht.next=lt,g|=at;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ht===null&&(F=_t),u.baseState=F,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Da|=g,t.lanes=g,t.memoizedState=_t}}function Ap(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Rp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ap(a[t],n)}var jr=S(null),cl=S(0);function Cp(t,n){t=Qi,ot(cl,t),ot(jr,n),Qi=t|n.baseLanes}function Ec(){ot(cl,Qi),ot(jr,jr.current)}function Tc(){Qi=cl.current,P(jr),P(cl)}var Yn=S(null),oi=null;function Aa(t){var n=t.alternate;ot(en,en.current&1),ot(Yn,t),oi===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(oi=t)}function Ac(t){ot(en,en.current),ot(Yn,t),oi===null&&(oi=t)}function wp(t){t.tag===22?(ot(en,en.current),ot(Yn,t),oi===null&&(oi=t)):Ra()}function Ra(){ot(en,en.current),ot(Yn,Yn.current)}function Zn(t){P(Yn),oi===t&&(oi=null),P(en)}var en=S(0);function fl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Nf(a)||Of(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,oe=null,Ie=null,ln=null,dl=!1,Xr=!1,fr=!1,hl=0,$s=0,qr=null,Y_=0;function Je(){throw Error(r(321))}function Rc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Cc(t,n,a,s,u,f){return Vi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?dm:Vc,fr=!1,f=a(s,u),fr=!1,Xr&&(f=Up(n,a,s,u)),Dp(t),f}function Dp(t){B.H=no;var n=Ie!==null&&Ie.next!==null;if(Vi=0,ln=Ie=oe=null,dl=!1,$s=0,qr=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&il(t)&&(un=!0))}function Up(t,n,a,s){oe=t;var u=0;do{if(Xr&&(qr=null),$s=0,Xr=!1,25<=u)throw Error(r(301));if(u+=1,ln=Ie=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=hm,f=n(a,s)}while(Xr);return f}function Z_(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(oe.flags|=1024),n}function wc(){var t=hl!==0;return hl=0,t}function Dc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Uc(t){if(dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}dl=!1}Vi=0,ln=Ie=oe=null,Xr=!1,$s=hl=0,qr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?oe.memoizedState=ln=t:ln=ln.next=t,ln}function nn(){if(Ie===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=ln===null?oe.memoizedState:ln.next;if(n!==null)ln=n,Ie=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ln===null?oe.memoizedState=ln=t:ln=ln.next=t}return ln}function pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$s;return $s+=1,qr===null&&(qr=[]),t=Sp(qr,t,n),n=oe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?dm:Vc),t}function ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===L)return Tn(t)}throw Error(r(438,String(t)))}function Lc(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=pl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function ji(t,n){return typeof n=="function"?n(t):n}function gl(t){var n=nn();return Nc(n,Ie,t)}function Nc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=g=null,F=null,tt=n,ht=!1;do{var _t=tt.lane&-536870913;if(_t!==tt.lane?(ve&_t)===_t:(Vi&_t)===_t){var at=tt.revertLane;if(at===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),_t===kr&&(ht=!0);else if((Vi&at)===at){tt=tt.next,at===kr&&(ht=!0);continue}else _t={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},F===null?(T=F=_t,g=f):F=F.next=_t,oe.lanes|=at,Da|=at;_t=tt.action,fr&&a(f,_t),f=tt.hasEagerState?tt.eagerState:a(f,_t)}else at={lane:_t,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},F===null?(T=F=at,g=f):F=F.next=at,oe.lanes|=_t,Da|=_t;tt=tt.next}while(tt!==null&&tt!==n);if(F===null?g=f:F.next=T,!qn(f,t.memoizedState)&&(un=!0,ht&&(a=Hr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=F,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Oc(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);qn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Lp(t,n,a){var s=oe,u=nn(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!qn((Ie||u).memoizedState,a);if(g&&(u.memoizedState=a,un=!0),u=u.queue,zc(Pp.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,Wr(9,{destroy:void 0},Op.bind(null,s,u,a,n),null),qe===null)throw Error(r(349));f||(Vi&127)!==0||Np(s,n,a)}return a}function Np(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=pl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Op(t,n,a,s){n.value=a,n.getSnapshot=s,Bp(n)&&zp(t)}function Pp(t,n,a){return a(function(){Bp(n)&&zp(t)})}function Bp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function zp(t){var n=nr(t,2);n!==null&&kn(n,t,2)}function Pc(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),fr){Wt(!0);try{a()}finally{Wt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:t},n}function Fp(t,n,a,s){return t.baseState=a,Nc(t,Ie,typeof s=="function"?s:ji)}function K_(t,n,a,s,u){if(vl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};B.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Ip(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ip(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=B.T,g={};B.T=g;try{var T=a(u,s),F=B.S;F!==null&&F(g,T),kp(t,n,T)}catch(tt){Bc(t,n,tt)}finally{f!==null&&g.types!==null&&(f.types=g.types),B.T=f}}else try{f=a(u,s),kp(t,n,f)}catch(tt){Bc(t,n,tt)}}function kp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Hp(t,n,s)},function(s){return Bc(t,n,s)}):Hp(t,n,a)}function Hp(t,n,a){n.status="fulfilled",n.value=a,Gp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Ip(t,a)))}function Bc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Gp(n),n=n.next;while(n!==s)}t.action=null}function Gp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Vp(t,n){return n}function jp(t,n){if(Me){var a=qe.formState;if(a!==null){t:{var s=oe;if(Me){if(Ze){e:{for(var u=Ze,f=si;u.nodeType!==8;){if(!f){u=null;break e}if(u=li(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=li(u.nextSibling),s=u.data==="F!";break t}}Sa(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vp,lastRenderedState:n},a.queue=s,a=um.bind(null,oe,s),s.dispatch=a,s=Pc(!1),f=Gc.bind(null,oe,!1,s.queue),s=Ln(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=K_.bind(null,oe,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Xp(t){var n=nn();return qp(n,Ie,t)}function qp(t,n,a){if(n=Nc(t,n,Vp)[0],t=gl(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(g){throw g===Gr?sl:g}else s=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,Wr(9,{destroy:void 0},Q_.bind(null,u,a),null)),[s,f,t]}function Q_(t,n){t.action=n}function Wp(t){var n=nn(),a=Ie;if(a!==null)return qp(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Wr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=pl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Yp(){return nn().memoizedState}function xl(t,n,a,s){var u=Ln();oe.flags|=t,u.memoizedState=Wr(1|n,{destroy:void 0},a,s===void 0?null:s)}function _l(t,n,a,s){var u=nn();s=s===void 0?null:s;var f=u.memoizedState.inst;Ie!==null&&s!==null&&Rc(s,Ie.memoizedState.deps)?u.memoizedState=Wr(n,f,a,s):(oe.flags|=t,u.memoizedState=Wr(1|n,f,a,s))}function Zp(t,n){xl(8390656,8,t,n)}function zc(t,n){_l(2048,8,t,n)}function J_(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=pl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Kp(t){var n=nn().memoizedState;return J_({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Qp(t,n){return _l(4,2,t,n)}function Jp(t,n){return _l(4,4,t,n)}function $p(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function tm(t,n,a){a=a!=null?a.concat([t]):null,_l(4,4,$p.bind(null,n,t),a)}function Fc(){}function em(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Rc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function nm(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Rc(n,s[1]))return s[0];if(s=t(),fr){Wt(!0);try{t()}finally{Wt(!1)}}return a.memoizedState=[s,n],s}function Ic(t,n,a){return a===void 0||(Vi&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=i0(),oe.lanes|=t,Da|=t,a)}function im(t,n,a,s){return qn(a,n)?a:jr.current!==null?(t=Ic(t,a,s),qn(t,n)||(un=!0),t):(Vi&42)===0||(Vi&1073741824)!==0&&(ve&261930)===0?(un=!0,t.memoizedState=a):(t=i0(),oe.lanes|=t,Da|=t,n)}function am(t,n,a,s,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var g=B.T,T={};B.T=T,Gc(t,!1,n,a);try{var F=u(),tt=B.S;if(tt!==null&&tt(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ht=W_(F,s);eo(t,n,ht,Jn(t))}else eo(t,n,s,Jn(t))}catch(_t){eo(t,n,{then:function(){},status:"rejected",reason:_t},Jn())}finally{Z.p=f,g!==null&&T.types!==null&&(g.types=T.types),B.T=g}}function $_(){}function kc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=rm(t).queue;am(t,u,n,Q,a===null?$_:function(){return sm(t),a(s)})}function rm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function sm(t){var n=rm(t);n.next===null&&(n=t.alternate.memoizedState),eo(t,n.next.queue,{},Jn())}function Hc(){return Tn(vo)}function om(){return nn().memoizedState}function lm(){return nn().memoizedState}function tv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=Ea(a);var s=Ta(n,t,a);s!==null&&(kn(s,n,a),Ks(s,n,a)),n={cache:gc()},t.payload=n;return}n=n.return}}function ev(t,n,a){var s=Jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?cm(n,a):(a=rc(t,n,a,s),a!==null&&(kn(a,t,s),fm(a,n,s)))}function um(t,n,a){var s=Jn();eo(t,n,a,s)}function eo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))cm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(u.hasEagerState=!0,u.eagerState=T,qn(T,g))return $o(t,n,u,0),qe===null&&Jo(),!1}catch{}finally{}if(a=rc(t,n,u,s),a!==null)return kn(a,t,s),fm(a,n,s),!0}return!1}function Gc(t,n,a,s){if(s={lane:2,revertLane:Sf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(r(479))}else n=rc(t,a,s,2),n!==null&&kn(n,t,2)}function vl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function cm(t,n){Xr=dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function fm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ds(t,a)}}var no={readContext:Tn,use:ml,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};no.useEffectEvent=Je;var dm={readContext:Tn,use:ml,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Zp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,xl(4194308,4,$p.bind(null,n,t),a)},useLayoutEffect:function(t,n){return xl(4194308,4,t,n)},useInsertionEffect:function(t,n){xl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(fr){Wt(!0);try{t()}finally{Wt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var u=a(n);if(fr){Wt(!0);try{a(n)}finally{Wt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=ev.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Pc(t);var n=t.queue,a=um.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Fc,useDeferredValue:function(t,n){var a=Ln();return Ic(a,t,n)},useTransition:function(){var t=Pc(!1);return t=am.bind(null,oe,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,u=Ln();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(ve&127)!==0||Np(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Zp(Pp.bind(null,s,f,t),[t]),s.flags|=2048,Wr(9,{destroy:void 0},Op.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=qe.identifierPrefix;if(Me){var a=Ci,s=Ri;a=(s&~(1<<32-Gt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Y_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Hc,useFormState:jp,useActionState:jp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gc.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Lc,useCacheRefresh:function(){return Ln().memoizedState=tv.bind(null,oe)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Vc={readContext:Tn,use:ml,useCallback:em,useContext:Tn,useEffect:zc,useImperativeHandle:tm,useInsertionEffect:Qp,useLayoutEffect:Jp,useMemo:nm,useReducer:gl,useRef:Yp,useState:function(){return gl(ji)},useDebugValue:Fc,useDeferredValue:function(t,n){var a=nn();return im(a,Ie.memoizedState,t,n)},useTransition:function(){var t=gl(ji)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Lp,useId:om,useHostTransitionStatus:Hc,useFormState:Xp,useActionState:Xp,useOptimistic:function(t,n){var a=nn();return Fp(a,Ie,t,n)},useMemoCache:Lc,useCacheRefresh:lm};Vc.useEffectEvent=Kp;var hm={readContext:Tn,use:ml,useCallback:em,useContext:Tn,useEffect:zc,useImperativeHandle:tm,useInsertionEffect:Qp,useLayoutEffect:Jp,useMemo:nm,useReducer:Oc,useRef:Yp,useState:function(){return Oc(ji)},useDebugValue:Fc,useDeferredValue:function(t,n){var a=nn();return Ie===null?Ic(a,t,n):im(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Oc(ji)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Lp,useId:om,useHostTransitionStatus:Hc,useFormState:Wp,useActionState:Wp,useOptimistic:function(t,n){var a=nn();return Ie!==null?Fp(a,Ie,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Lc,useCacheRefresh:lm};hm.useEffectEvent=Kp;function jc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Xc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Jn(),u=Ea(s);u.payload=n,a!=null&&(u.callback=a),n=Ta(t,u,s),n!==null&&(kn(n,t,s),Ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Jn(),u=Ea(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ta(t,u,s),n!==null&&(kn(n,t,s),Ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),s=Ea(a);s.tag=2,n!=null&&(s.callback=n),n=Ta(t,s,a),n!==null&&(kn(n,t,a),Ks(n,t,a))}};function pm(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Gs(a,s)||!Gs(u,f):!0}function mm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Xc.enqueueReplaceState(n,n.state,null)}function dr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function gm(t){Qo(t)}function xm(t){console.error(t)}function _m(t){Qo(t)}function bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function vm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function qc(t,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(t,n)},a}function bm(t){return t=Ea(t),t.tag=3,t}function Sm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){vm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){vm(n,a,s),typeof u!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function nv(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ir(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Ll():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),_f(t,s,u)),!1;case 22:return a.flags|=65536,s===ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),_f(t,s,u)),!1}throw Error(r(435,a.tag))}return _f(t,s,u),Ll(),!1}if(Me)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==fc&&(t=Error(r(422),{cause:s}),Xs(ii(t,a)))):(s!==fc&&(n=Error(r(423),{cause:s}),Xs(ii(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=ii(s,a),u=qc(t.stateNode,s,u),yc(t,u),$e!==4&&($e=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),co===null?co=[f]:co.push(f),$e!==4&&($e=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=qc(a.stateNode,s,t),yc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ua===null||!Ua.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=bm(u),Sm(u,t,a,s),yc(a,u),!1}a=a.return}while(a!==null);return!1}var Wc=Error(r(461)),un=!1;function An(t,n,a,s){n.child=t===null?Tp(n,null,a,s):cr(n,t.child,a,s)}function ym(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return sr(n),s=Cc(t,n,a,g,f,u),T=wc(),t!==null&&!un?(Dc(t,n,u),Xi(t,n,u)):(Me&&T&&uc(n),n.flags|=1,An(t,n,s,u),n.child)}function Mm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!sc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Em(t,n,f,s,u)):(t=el(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ef(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(g,s)&&t.ref===n.ref)return Xi(t,n,u)}return n.flags|=1,t=Ii(f,s),t.ref=n.ref,t.return=n,n.child=t}function Em(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Gs(f,s)&&t.ref===n.ref)if(un=!1,n.pendingProps=s=f,ef(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,Xi(t,n,u)}return Yc(t,n,a,s,u)}function Tm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Am(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&rl(n,f!==null?f.cachePool:null),f!==null?Cp(n,f):Ec(),wp(n);else return s=n.lanes=536870912,Am(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(rl(n,f.cachePool),Cp(n,f),Ra(),n.memoizedState=null):(t!==null&&rl(n,null),Ec(),Ra());return An(t,n,u,a),n.child}function io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Am(t,n,a,s,u){var f=_c();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&rl(n,null),Ec(),wp(n),t!==null&&Ir(t,n,s,!0),n.childLanes=u,null}function Sl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Rm(t,n,a){return cr(n,t.child,null,a),t=Sl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function iv(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(s.mode==="hidden")return t=Sl(n,s),n.lanes=536870912,io(null,t);if(Ac(n),(t=Ze)?(t=I0(t,si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:va!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=cp(t),a.return=n,n.child=a,En=n,Ze=null)):t=null,t===null)throw Sa(n);return n.lanes=536870912,null}return Sl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Ac(n),u)if(n.flags&256)n.flags&=-257,n=Rm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||Ir(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(s=qe,s!==null&&(g=Us(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,nr(t,g),kn(s,t,g),Wc;Ll(),n=Rm(t,n,a)}else t=f.treeContext,Ze=li(g.nextSibling),En=n,Me=!0,ba=null,si=!1,t!==null&&hp(n,t),n=Sl(n,s),n.flags|=4096;return n}return t=Ii(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Yc(t,n,a,s,u){return sr(n),a=Cc(t,n,a,s,void 0,u),s=wc(),t!==null&&!un?(Dc(t,n,u),Xi(t,n,u)):(Me&&s&&uc(n),n.flags|=1,An(t,n,a,u),n.child)}function Cm(t,n,a,s,u,f){return sr(n),n.updateQueue=null,a=Up(n,s,a,u),Dp(t),s=wc(),t!==null&&!un?(Dc(t,n,f),Xi(t,n,f)):(Me&&s&&uc(n),n.flags|=1,An(t,n,a,f),n.child)}function wm(t,n,a,s,u){if(sr(n),n.stateNode===null){var f=Pr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Tn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Xc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},bc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Tn(g):Pr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(jc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Xc.enqueueReplaceState(f,f.state,null),Js(n,s,f,u),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,F=dr(a,T);f.props=F;var tt=f.context,ht=a.contextType;g=Pr,typeof ht=="object"&&ht!==null&&(g=Tn(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==g)&&mm(n,f,s,g),Ma=!1;var at=n.memoizedState;f.state=at,Js(n,s,f,u),Qs(),tt=n.memoizedState,T||at!==tt||Ma?(typeof _t=="function"&&(jc(n,a,_t,s),tt=n.memoizedState),(F=Ma||pm(n,a,F,s,at,tt,g))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=tt),f.props=s,f.state=tt,f.context=g,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Sc(t,n),g=n.memoizedProps,ht=dr(a,g),f.props=ht,_t=n.pendingProps,at=f.context,tt=a.contextType,F=Pr,typeof tt=="object"&&tt!==null&&(F=Tn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_t||at!==F)&&mm(n,f,s,F),Ma=!1,at=n.memoizedState,f.state=at,Js(n,s,f,u),Qs();var lt=n.memoizedState;g!==_t||at!==lt||Ma||t!==null&&t.dependencies!==null&&il(t.dependencies)?(typeof T=="function"&&(jc(n,a,T,s),lt=n.memoizedState),(ht=Ma||pm(n,a,ht,s,at,lt,F)||t!==null&&t.dependencies!==null&&il(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=F,s=ht):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,yl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=cr(n,t.child,null,u),n.child=cr(n,null,a,u)):An(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Xi(t,n,u),t}function Dm(t,n,a,s){return ar(),n.flags|=256,An(t,n,a,s),n.child}var Zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kc(t){return{baseLanes:t,cachePool:vp()}}function Qc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function Um(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(u?Aa(n):Ra(),(t=Ze)?(t=I0(t,si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:va!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=cp(t),a.return=n,n.child=a,En=n,Ze=null)):t=null,t===null)throw Sa(n);return Of(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(Ra(),u=n.mode,T=Ml({mode:"hidden",children:T},u),s=ir(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=Kc(a),s.childLanes=Qc(t,g,a),n.memoizedState=Zc,io(null,s)):(Aa(n),Jc(n,T))}var F=t.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(f)n.flags&256?(Aa(n),n.flags&=-257,n=$c(t,n,a)):n.memoizedState!==null?(Ra(),n.child=t.child,n.flags|=128,n=null):(Ra(),T=s.fallback,u=n.mode,s=Ml({mode:"visible",children:s.children},u),T=ir(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,cr(n,t.child,null,a),s=n.child,s.memoizedState=Kc(a),s.childLanes=Qc(t,g,a),n.memoizedState=Zc,n=io(null,s));else if(Aa(n),Of(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var tt=g.dgst;g=tt,s=Error(r(419)),s.stack="",s.digest=g,Xs({value:s,source:null,stack:null}),n=$c(t,n,a)}else if(un||Ir(t,n,a,!1),g=(a&t.childLanes)!==0,un||g){if(g=qe,g!==null&&(s=Us(g,a),s!==0&&s!==F.retryLane))throw F.retryLane=s,nr(t,s),kn(g,t,s),Wc;Nf(T)||Ll(),n=$c(t,n,a)}else Nf(T)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Ze=li(T.nextSibling),En=n,Me=!0,ba=null,si=!1,t!==null&&hp(n,t),n=Jc(n,s.children),n.flags|=4096);return n}return u?(Ra(),T=s.fallback,u=n.mode,F=t.child,tt=F.sibling,s=Ii(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&65011712,tt!==null?T=Ii(tt,T):(T=ir(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,io(null,s),s=n.child,T=t.child.memoizedState,T===null?T=Kc(a):(u=T.cachePool,u!==null?(F=on._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=vp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=Qc(t,g,a),n.memoizedState=Zc,io(t.child,s)):(Aa(n),a=t.child,t=a.sibling,a=Ii(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Jc(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function $c(t,n,a){return cr(n,t.child,null,a),t=Jc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Lm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),pc(t.return,n,a)}function tf(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Nm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=en.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,ot(en,g),An(t,n,s,a),s=Me?js:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lm(t,a,n);else if(t.tag===19)Lm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&fl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),tf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&fl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}tf(n,!0,a,null,f,s);break;case"together":tf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Da|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ir(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ii(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ii(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&il(t)))}function av(t,n,a){switch(n.tag){case 3:Rt(n,n.stateNode.containerInfo),ya(n,on,t.memoizedState.cache),ar();break;case 27:case 5:Vt(n);break;case 4:Rt(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ac(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Aa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Um(t,n,a):(Aa(n),t=Xi(t,n,a),t!==null?t.sibling:null);Aa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ir(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Nm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ot(en,en.current),s)break;return null;case 22:return n.lanes=0,Tm(t,n,a,n.pendingProps);case 24:ya(n,on,t.memoizedState.cache)}return Xi(t,n,a)}function Om(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!ef(t,a)&&(n.flags&128)===0)return un=!1,av(t,n,a);un=(t.flags&131072)!==0}else un=!1,Me&&(n.flags&1048576)!==0&&dp(n,js,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=lr(n.elementType),n.type=t,typeof t=="function")sc(t)?(s=dr(t,s),n.tag=1,n=wm(null,n,t,s,a)):(n.tag=0,n=Yc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===k){n.tag=11,n=ym(null,n,t,s,a);break t}else if(u===N){n.tag=14,n=Mm(null,n,t,s,a);break t}}throw n=gt(t)||t,Error(r(306,n,""))}}return n;case 0:return Yc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=dr(s,n.pendingProps),wm(t,n,s,u,a);case 3:t:{if(Rt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Sc(t,n),Js(n,s,null,a);var g=n.memoizedState;if(s=g.cache,ya(n,on,s),s!==f.cache&&mc(n,[on],a,!0),Qs(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Dm(t,n,s,a);break t}else if(s!==u){u=ii(Error(r(424)),n),Xs(u),n=Dm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=li(t.firstChild),En=n,Me=!0,ba=null,si=!0,a=Tp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ar(),s===u){n=Xi(t,n,a);break t}An(t,n,s,a)}n=n.child}return n;case 26:return yl(t,n),t===null?(a=X0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,s=Il(W.current).createElement(a),s[sn]=n,s[hn]=t,Rn(s,a,t),nt(s),n.stateNode=s):n.memoizedState=X0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Vt(n),t===null&&Me&&(s=n.stateNode=G0(n.type,n.pendingProps,W.current),En=n,si=!0,u=Ze,Pa(n.type)?(Pf=u,Ze=li(s.firstChild)):Ze=u),An(t,n,n.pendingProps.children,a),yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((u=s=Ze)&&(s=Ov(s,n.type,n.pendingProps,si),s!==null?(n.stateNode=s,En=n,Ze=li(s.firstChild),si=!1,u=!0):u=!1),u||Sa(n)),Vt(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Df(u,f)?s=null:g!==null&&Df(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Cc(t,n,Z_,null,null,a),vo._currentValue=u),yl(t,n),An(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=Ze)&&(a=Pv(a,n.pendingProps,si),a!==null?(n.stateNode=a,En=n,Ze=null,t=!0):t=!1),t||Sa(n)),null;case 13:return Um(t,n,a);case 4:return Rt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=cr(n,null,s,a):An(t,n,s,a),n.child;case 11:return ym(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ya(n,n.type,s.value),An(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,sr(n),u=Tn(u),s=s(u),n.flags|=1,An(t,n,s,a),n.child;case 14:return Mm(t,n,n.type,n.pendingProps,a);case 15:return Em(t,n,n.type,n.pendingProps,a);case 19:return Nm(t,n,a);case 31:return iv(t,n,a);case 22:return Tm(t,n,a,n.pendingProps);case 24:return sr(n),s=Tn(on),t===null?(u=_c(),u===null&&(u=qe,f=gc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},bc(n),ya(n,on,u)):((t.lanes&a)!==0&&(Sc(t,n),Js(n,null,null,a),Qs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ya(n,on,s)):(s=f.cache,ya(n,on,s),s!==u.cache&&mc(n,[on],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(t){t.flags|=4}function nf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(o0())t.flags|=8192;else throw ur=ol,vc}else t.flags&=-16777217}function Pm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!K0(n))if(o0())t.flags|=8192;else throw ur=ol,vc}function El(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Fe():536870912,t.lanes|=n,Qr|=n)}function ao(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function rv(t,n,a){var s=n.pendingProps;switch(cc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(on),Ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fr(n)?qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,dc())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(qi(n),f!==null?(Ke(n),Pm(n,f)):(Ke(n),nf(n,u,null,s,a))):f?f!==t.memoizedState?(qi(n),Ke(n),Pm(n,f)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&qi(n),Ke(n),nf(n,u,t,s,a)),null;case 27:if(ue(n),a=W.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}t=ft.current,Fr(n)?pp(n):(t=G0(u,s,a),n.stateNode=t,qi(n))}return Ke(n),null;case 5:if(ue(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(f=ft.current,Fr(n))pp(n);else{var g=Il(W.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[sn]=n,f[hn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Rn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&qi(n)}}return Ke(n),nf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=W.current,Fr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=En,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||U0(t.nodeValue,a)),t||Sa(n,!0)}else t=Il(t).createTextNode(s),t[sn]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Fr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=dc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Fr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=dc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Ke(n),null);case 4:return Ut(),t===null&&Tf(n.stateNode.containerInfo),Ke(n),null;case 10:return Gi(n.type),Ke(n),null;case 19:if(P(en),s=n.memoizedState,s===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)ao(s,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=fl(t),f!==null){for(n.flags|=128,ao(s,!1),t=f.updateQueue,n.updateQueue=t,El(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)up(a,t),a=a.sibling;return ot(en,en.current&1|2),Me&&ki(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>wl&&(n.flags|=128,u=!0,ao(s,!1),n.lanes=4194304)}else{if(!u)if(t=fl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,El(n,t),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Me)return Ke(n),null}else 2*E()-s.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,u=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=en.current,ot(en,u?a&1|2:a&1),Me&&ki(n,s.treeForkCount),t):(Ke(n),null);case 22:case 23:return Zn(n),Tc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&P(or),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(on),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function sv(t,n){switch(cc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(on),Ut(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ue(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return P(en),null;case 4:return Ut(),null;case 10:return Gi(n.type),null;case 22:case 23:return Zn(n),Tc(),t!==null&&P(or),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(on),null;case 25:return null;default:return null}}function Bm(t,n){switch(cc(n),n.tag){case 3:Gi(on),Ut();break;case 26:case 27:case 5:ue(n);break;case 4:Ut();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:P(en);break;case 10:Gi(n.type);break;case 22:case 23:Zn(n),Tc(),t!==null&&P(or);break;case 24:Gi(on)}}function ro(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(T){Be(n,n.return,T)}}function Ca(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,u=n;var F=a,tt=T;try{tt()}catch(ht){Be(u,F,ht)}}}s=s.next}while(s!==f)}}catch(ht){Be(n,n.return,ht)}}function zm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Rp(n,a)}catch(s){Be(t,t.return,s)}}}function Fm(t,n,a){a.props=dr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function so(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Be(t,n,u)}}function wi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Be(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(t,n,u)}else a.current=null}function Im(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Be(t,t.return,u)}}function af(t,n,a){try{var s=t.stateNode;Cv(s,t.type,a,n),s[hn]=n}catch(u){Be(t,t.return,u)}}function km(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pa(t.type)||t.tag===4}function rf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(s!==4&&(s===27&&Pa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(sf(t,n,a),t=t.sibling;t!==null;)sf(t,n,a),t=t.sibling}function Tl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Pa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Tl(t,n,a),t=t.sibling;t!==null;)Tl(t,n,a),t=t.sibling}function Hm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,s,a),n[sn]=t,n[hn]=a}catch(f){Be(t,t.return,f)}}var Wi=!1,cn=!1,of=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function ov(t,n){if(t=t.containerInfo,Cf=ql,t=tp(t),$u(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,F=-1,tt=0,ht=0,_t=t,at=null;e:for(;;){for(var lt;_t!==a||u!==0&&_t.nodeType!==3||(T=g+u),_t!==f||s!==0&&_t.nodeType!==3||(F=g+s),_t.nodeType===3&&(g+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)at=_t,_t=lt;for(;;){if(_t===t)break e;if(at===a&&++tt===u&&(T=g),at===f&&++ht===s&&(F=g),(lt=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=lt}a=T===-1||F===-1?null:{start:T,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(wf={focusedElem:t,selectionRange:a},ql=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var kt=dr(a.type,u);t=s.getSnapshotBeforeUpdate(kt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){Be(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Lf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Lf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function Vm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(t,a),s&4&&ro(5,a);break;case 1:if(Zi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Be(a,a.return,g)}else{var u=dr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Be(a,a.return,g)}}s&64&&zm(a),s&512&&so(a,a.return);break;case 3:if(Zi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rp(t,n)}catch(g){Be(a,a.return,g)}}break;case 27:n===null&&s&4&&Hm(a);case 26:case 5:Zi(t,a),n===null&&s&4&&Im(a),s&512&&so(a,a.return);break;case 12:Zi(t,a);break;case 31:Zi(t,a),s&4&&qm(t,a);break;case 13:Zi(t,a),s&4&&Wm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=gv.bind(null,a),Bv(t,a))));break;case 22:if(s=a.memoizedState!==null||Wi,!s){n=n!==null&&n.memoizedState!==null||cn,u=Wi;var f=cn;Wi=s,(cn=n)&&!f?Ki(t,a,(a.subtreeFlags&8772)!==0):Zi(t,a),Wi=u,cn=f}break;case 30:break;default:Zi(t,a)}}function jm(t){var n=t.alternate;n!==null&&(t.alternate=null,jm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Os(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,Bn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)Xm(t,n,a),a=a.sibling}function Xm(t,n,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:cn||wi(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||wi(a,n);var s=Qe,u=Bn;Pa(a.type)&&(Qe=a.stateNode,Bn=!1),Yi(t,n,a),go(a.stateNode),Qe=s,Bn=u;break;case 5:cn||wi(a,n);case 6:if(s=Qe,u=Bn,Qe=null,Yi(t,n,a),Qe=s,Bn=u,Qe!==null)if(Bn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Qe!==null&&(Bn?(t=Qe,z0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),rs(t)):z0(Qe,a.stateNode));break;case 4:s=Qe,u=Bn,Qe=a.stateNode.containerInfo,Bn=!0,Yi(t,n,a),Qe=s,Bn=u;break;case 0:case 11:case 14:case 15:Ca(2,a,n),cn||Ca(4,a,n),Yi(t,n,a);break;case 1:cn||(wi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Fm(a,n,s)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,Yi(t,n,a),cn=s;break;default:Yi(t,n,a)}}function qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{rs(t)}catch(a){Be(n,n.return,a)}}}function Wm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{rs(t)}catch(a){Be(n,n.return,a)}}function lv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Gm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Gm),n;default:throw Error(r(435,t.tag))}}function Al(t,n){var a=lv(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=xv.bind(null,t,s);s.then(u,u)}})}function zn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(Pa(T.type)){Qe=T.stateNode,Bn=!1;break t}break;case 5:Qe=T.stateNode,Bn=!1;break t;case 3:case 4:Qe=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(Qe===null)throw Error(r(160));Xm(f,g,u),Qe=null,Bn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ym(n,t),n=n.sibling}var xi=null;function Ym(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zn(n,t),Fn(t),s&4&&(Ca(3,t,t.return),ro(3,t),Ca(5,t,t.return));break;case 1:zn(n,t),Fn(t),s&512&&(cn||a===null||wi(a,a.return)),s&64&&Wi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=xi;if(zn(n,t),Fn(t),s&512&&(cn||a===null||wi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ja]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,s,a),f[sn]=t,nt(f),s=f;break t;case"link":var g=Y0("link","href",u).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=u.createElement(s),Rn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=Y0("meta","content",u).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=u.createElement(s),Rn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=t,nt(f),s=f}t.stateNode=s}else Z0(u,t.type,t.stateNode);else t.stateNode=W0(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Z0(u,t.type,t.stateNode):W0(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&af(t,t.memoizedProps,a.memoizedProps)}break;case 27:zn(n,t),Fn(t),s&512&&(cn||a===null||wi(a,a.return)),a!==null&&s&4&&af(t,t.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,t),Fn(t),s&512&&(cn||a===null||wi(a,a.return)),t.flags&32){u=t.stateNode;try{Ai(u,"")}catch(kt){Be(t,t.return,kt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,af(t,u,a!==null?a.memoizedProps:u)),s&1024&&(of=!0);break;case 6:if(zn(n,t),Fn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(kt){Be(t,t.return,kt)}}break;case 3:if(Gl=null,u=xi,xi=kl(n.containerInfo),zn(n,t),xi=u,Fn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(kt){Be(t,t.return,kt)}of&&(of=!1,Zm(t));break;case 4:s=xi,xi=kl(t.stateNode.containerInfo),zn(n,t),Fn(t),xi=s;break;case 12:zn(n,t),Fn(t);break;case 31:zn(n,t),Fn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Al(t,s)));break;case 13:zn(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cl=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Al(t,s)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,tt=Wi,ht=cn;if(Wi=tt||u,cn=ht||F,zn(n,t),cn=ht,Wi=tt,Fn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||Wi||cn||hr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=F.stateNode;var _t=F.memoizedProps.style,at=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(kt){Be(F,F.return,kt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(kt){Be(F,F.return,kt)}}}else if(n.tag===18){if(a===null){F=n;try{var lt=F.stateNode;u?F0(lt,!0):F0(F.stateNode,!1)}catch(kt){Be(F,F.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Al(t,a))));break;case 19:zn(n,t),Fn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Al(t,s)));break;case 30:break;case 21:break;default:zn(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(km(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=rf(t);Tl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Ai(g,""),a.flags&=-33);var T=rf(t);Tl(t,T,g);break;case 3:case 4:var F=a.stateNode.containerInfo,tt=rf(t);sf(t,tt,F);break;default:throw Error(r(161))}}catch(ht){Be(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Zm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Zm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vm(t,n.alternate,n),n=n.sibling}function hr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ca(4,n,n.return),hr(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Fm(n,n.return,a),hr(n);break;case 27:go(n.stateNode);case 26:case 5:wi(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}t=t.sibling}}function Ki(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(u,f,a),ro(4,f);break;case 1:if(Ki(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Be(s,s.return,tt)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Ap(F[u],T)}catch(tt){Be(s,s.return,tt)}}a&&g&64&&zm(f),so(f,f.return);break;case 27:Hm(f);case 26:case 5:Ki(u,f,a),a&&s===null&&g&4&&Im(f),so(f,f.return);break;case 12:Ki(u,f,a);break;case 31:Ki(u,f,a),a&&g&4&&qm(u,f);break;case 13:Ki(u,f,a),a&&g&4&&Wm(u,f);break;case 22:f.memoizedState===null&&Ki(u,f,a),so(f,f.return);break;case 30:break;default:Ki(u,f,a)}n=n.sibling}}function lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function _i(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Km(t,n,a,s),n=n.sibling}function Km(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,a,s),u&2048&&ro(9,n);break;case 1:_i(t,n,a,s);break;case 3:_i(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(u&2048){_i(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Be(n,n.return,F)}}else _i(t,n,a,s);break;case 31:_i(t,n,a,s);break;case 13:_i(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?_i(t,n,a,s):oo(t,n):f._visibility&2?_i(t,n,a,s):(f._visibility|=2,Yr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&lf(g,n);break;case 24:_i(t,n,a,s),u&2048&&uf(n.alternate,n);break;default:_i(t,n,a,s)}}function Yr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,T=a,F=s,tt=g.flags;switch(g.tag){case 0:case 11:case 15:Yr(f,g,T,F,u),ro(8,g);break;case 23:break;case 22:var ht=g.stateNode;g.memoizedState!==null?ht._visibility&2?Yr(f,g,T,F,u):oo(f,g):(ht._visibility|=2,Yr(f,g,T,F,u)),u&&tt&2048&&lf(g.alternate,g);break;case 24:Yr(f,g,T,F,u),u&&tt&2048&&uf(g.alternate,g);break;default:Yr(f,g,T,F,u)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:oo(a,s),u&2048&&lf(s.alternate,s);break;case 24:oo(a,s),u&2048&&uf(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Zr(t,n,a){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)Qm(t,n,a),t=t.sibling}function Qm(t,n,a){switch(t.tag){case 26:Zr(t,n,a),t.flags&lo&&t.memoizedState!==null&&Yv(a,xi,t.memoizedState,t.memoizedProps);break;case 5:Zr(t,n,a);break;case 3:case 4:var s=xi;xi=kl(t.stateNode.containerInfo),Zr(t,n,a),xi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,Zr(t,n,a),lo=s):Zr(t,n,a));break;default:Zr(t,n,a)}}function Jm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,t0(s,t)}Jm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$m(t),t=t.sibling}function $m(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&Ca(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Rl(t)):uo(t);break;default:uo(t)}}function Rl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,t0(s,t)}Jm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ca(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}t=t.sibling}}function t0(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ca(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Sn=s;else t:for(a=t;Sn!==null;){s=Sn;var u=s.sibling,f=s.return;if(jm(s),s===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var uv={getCacheForType:function(t){var n=Tn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(on).controller.signal}},cv=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,xe=null,ve=0,Pe=0,Kn=null,wa=!1,Kr=!1,cf=!1,Qi=0,$e=0,Da=0,pr=0,ff=0,Qn=0,Qr=0,co=null,In=null,df=!1,Cl=0,e0=0,wl=1/0,Dl=null,Ua=null,mn=0,La=null,Jr=null,Ji=0,hf=0,pf=null,n0=null,fo=0,mf=null;function Jn(){return(Le&2)!==0&&ve!==0?ve&-ve:B.T!==null?Sf():Ls()}function i0(){if(Qn===0)if((ve&536870912)===0||Me){var t=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),Qn=t}else Qn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Qn}function kn(t,n,a){(t===qe&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&($r(t,0),Na(t,ve,Qn,!1)),Cn(t,a),((Le&2)===0||t!==qe)&&(t===qe&&((Le&2)===0&&(pr|=a),$e===4&&Na(t,ve,Qn,!1)),Di(t))}function a0(t,n,a){if((Le&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ft(t,n),u=s?hv(t,n):xf(t,n,!0),f=s;do{if(u===0){Kr&&!s&&Na(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!fv(a)){u=xf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;u=co;var F=T.current.memoizedState.isDehydrated;if(F&&($r(T,g).flags|=256),g=xf(T,g,!1),g!==2){if(cf&&!F){T.errorRecoveryDisabledLanes|=f,pr|=f,u=4;break t}f=In,In=u,f!==null&&(In===null?In=f:In.push.apply(In,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){$r(t,0),Na(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Na(s,n,Qn,!wa);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Cl+300-E(),10<u)){if(Na(s,n,Qn,!wa),vt(s,0,!0)!==0)break t;Ji=n,s.timeoutHandle=P0(r0.bind(null,s,a,In,Dl,df,n,Qn,pr,Qr,wa,f,"Throttled",-0,0),u);break t}r0(s,a,In,Dl,df,n,Qn,pr,Qr,wa,f,null,-0,0)}}break}while(!0);Di(t)}function r0(t,n,a,s,u,f,g,T,F,tt,ht,_t,at,lt){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},Qm(n,f,_t);var kt=(f&62914560)===f?Cl-E():(f&4194048)===f?e0-E():0;if(kt=Zv(_t,kt),kt!==null){Ji=f,t.cancelPendingCommit=kt(h0.bind(null,t,n,f,a,s,u,g,T,F,ht,_t,null,at,lt)),Na(t,f,g,!tt);return}}h0(t,n,f,a,s,u,g,T,F)}function fv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(t,n,a,s){n&=~ff,n&=~pr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Gt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&Go(t,a,n)}function Ul(){return(Le&6)===0?(ho(0),!1):!0}function gf(){if(xe!==null){if(Pe===0)var t=xe.return;else t=xe,Hi=rr=null,Uc(t),Vr=null,Ys=0,t=xe;for(;t!==null;)Bm(t.alternate,t),t=t.return;xe=null}}function $r(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Uv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ji=0,gf(),qe=t,xe=a=Ii(t.current,null),ve=n,Pe=0,Kn=null,wa=!1,Kr=Ft(t,n),cf=!1,Qr=Qn=ff=pr=Da=$e=0,In=co=null,df=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Gt(s),f=1<<u;n|=t[u],s&=~f}return Qi=n,Jo(),a}function s0(t,n){oe=null,B.H=no,n===Gr||n===sl?(n=yp(),Pe=3):n===vc?(n=yp(),Pe=4):Pe=n===Wc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,xe===null&&($e=1,bl(t,ii(n,t.current)))}function o0(){var t=Yn.current;return t===null?!0:(ve&4194048)===ve?oi===null:(ve&62914560)===ve||(ve&536870912)!==0?t===oi:!1}function l0(){var t=B.H;return B.H=no,t===null?no:t}function u0(){var t=B.A;return B.A=uv,t}function Ll(){$e=4,wa||(ve&4194048)!==ve&&Yn.current!==null||(Kr=!0),(Da&134217727)===0&&(pr&134217727)===0||qe===null||Na(qe,ve,Qn,!1)}function xf(t,n,a){var s=Le;Le|=2;var u=l0(),f=u0();(qe!==t||ve!==n)&&(Dl=null,$r(t,n)),n=!1;var g=$e;t:do try{if(Pe!==0&&xe!==null){var T=xe,F=Kn;switch(Pe){case 8:gf(),g=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var tt=Pe;if(Pe=0,Kn=null,ts(t,T,F,tt),a&&Kr){g=0;break t}break;default:tt=Pe,Pe=0,Kn=null,ts(t,T,F,tt)}}dv(),g=$e;break}catch(ht){s0(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Hi=rr=null,Le=s,B.H=u,B.A=f,xe===null&&(qe=null,ve=0,Jo()),g}function dv(){for(;xe!==null;)c0(xe)}function hv(t,n){var a=Le;Le|=2;var s=l0(),u=u0();qe!==t||ve!==n?(Dl=null,wl=E()+500,$r(t,n)):Kr=Ft(t,n);t:do try{if(Pe!==0&&xe!==null){n=xe;var f=Kn;e:switch(Pe){case 1:Pe=0,Kn=null,ts(t,n,f,1);break;case 2:case 9:if(bp(f)){Pe=0,Kn=null,f0(n);break}n=function(){Pe!==2&&Pe!==9||qe!==t||(Pe=7),Di(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:bp(f)?(Pe=0,Kn=null,f0(n)):(Pe=0,Kn=null,ts(t,n,f,7));break;case 5:var g=null;switch(xe.tag){case 26:g=xe.memoizedState;case 5:case 27:var T=xe;if(g?K0(g):T.stateNode.complete){Pe=0,Kn=null;var F=T.sibling;if(F!==null)xe=F;else{var tt=T.return;tt!==null?(xe=tt,Nl(tt)):xe=null}break e}}Pe=0,Kn=null,ts(t,n,f,5);break;case 6:Pe=0,Kn=null,ts(t,n,f,6);break;case 8:gf(),$e=6;break t;default:throw Error(r(462))}}pv();break}catch(ht){s0(t,ht)}while(!0);return Hi=rr=null,B.H=s,B.A=u,Le=a,xe!==null?0:(qe=null,ve=0,Jo(),$e)}function pv(){for(;xe!==null&&!ae();)c0(xe)}function c0(t){var n=Om(t.alternate,t,Qi);t.memoizedProps=t.pendingProps,n===null?Nl(t):xe=n}function f0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Cm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Cm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Uc(n);default:Bm(a,n),n=xe=up(n,Qi),n=Om(a,n,Qi)}t.memoizedProps=t.pendingProps,n===null?Nl(t):xe=n}function ts(t,n,a,s){Hi=rr=null,Uc(n),Vr=null,Ys=0;var u=n.return;try{if(nv(t,u,n,a,ve)){$e=1,bl(t,ii(a,t.current)),xe=null;return}}catch(f){if(u!==null)throw xe=u,f;$e=1,bl(t,ii(a,t.current)),xe=null;return}n.flags&32768?(Me||s===1?t=!0:Kr||(ve&536870912)!==0?t=!1:(wa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),d0(n,t)):Nl(n)}function Nl(t){var n=t;do{if((n.flags&32768)!==0){d0(n,wa);return}t=n.return;var a=rv(n.alternate,n,Qi);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);$e===0&&($e=5)}function d0(t,n){do{var a=sv(t.alternate,t);if(a!==null){a.flags&=32767,xe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=a}while(t!==null);$e=6,xe=null}function h0(t,n,a,s,u,f,g,T,F){t.cancelPendingCommit=null;do Ol();while(mn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ac,jn(t,a,f,g,T,F),t===qe&&(xe=qe=null,ve=0),Jr=n,La=t,Ji=a,hf=f,pf=u,n0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_v(dt,function(){return _0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,u=Z.p,Z.p=2,g=Le,Le|=4;try{ov(t,n,a)}finally{Le=g,Z.p=u,B.T=s}}mn=1,p0(),m0(),g0()}}function p0(){if(mn===1){mn=0;var t=La,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=Z.p;Z.p=2;var u=Le;Le|=4;try{Ym(n,t);var f=wf,g=tp(t.containerInfo),T=f.focusedElem,F=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&$h(T.ownerDocument.documentElement,T)){if(F!==null&&$u(T)){var tt=F.start,ht=F.end;if(ht===void 0&&(ht=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(ht,T.value.length);else{var _t=T.ownerDocument||document,at=_t&&_t.defaultView||window;if(at.getSelection){var lt=at.getSelection(),kt=T.textContent.length,te=Math.min(F.start,kt),He=F.end===void 0?te:Math.min(F.end,kt);!lt.extend&&te>He&&(g=He,He=te,te=g);var Y=Jh(T,te),V=Jh(T,He);if(Y&&V&&(lt.rangeCount!==1||lt.anchorNode!==Y.node||lt.anchorOffset!==Y.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var J=_t.createRange();J.setStart(Y.node,Y.offset),lt.removeAllRanges(),te>He?(lt.addRange(J),lt.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),lt.addRange(J))}}}}for(_t=[],lt=T;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var mt=_t[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ql=!!Cf,wf=Cf=null}finally{Le=u,Z.p=s,B.T=a}}t.current=n,mn=2}}function m0(){if(mn===2){mn=0;var t=La,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=Z.p;Z.p=2;var u=Le;Le|=4;try{Vm(t,n.alternate,n)}finally{Le=u,Z.p=s,B.T=a}}mn=3}}function g0(){if(mn===4||mn===3){mn=0,U();var t=La,n=Jr,a=Ji,s=n0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,Jr=La=null,x0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ua=null),Qa(a),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=B.T,u=Z.p,Z.p=2,B.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{B.T=n,Z.p=u}}(Ji&3)!==0&&Ol(),Di(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===mf?fo++:(fo=0,mf=t):fo=0,ho(0)}}function x0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function Ol(){return p0(),m0(),g0(),_0()}function _0(){if(mn!==5)return!1;var t=La,n=hf;hf=0;var a=Qa(Ji),s=B.T,u=Z.p;try{Z.p=32>a?32:a,B.T=null,a=pf,pf=null;var f=La,g=Ji;if(mn=0,Jr=La=null,Ji=0,(Le&6)!==0)throw Error(r(331));var T=Le;if(Le|=4,$m(f.current),Km(f,f.current,g,a),Le=T,ho(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{Z.p=u,B.T=s,x0(t,n)}}function v0(t,n,a){n=ii(a,n),n=qc(t.stateNode,n,2),t=Ta(t,n,2),t!==null&&(Cn(t,2),Di(t))}function Be(t,n,a){if(t.tag===3)v0(t,t,a);else for(;n!==null;){if(n.tag===3){v0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ua===null||!Ua.has(s))){t=ii(a,t),a=bm(2),s=Ta(n,a,2),s!==null&&(Sm(a,s,n,t),Cn(s,2),Di(s));break}}n=n.return}}function _f(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new cv;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(cf=!0,u.add(a),t=mv.bind(null,t,n,a),n.then(t,t))}function mv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(ve&a)===a&&($e===4||$e===3&&(ve&62914560)===ve&&300>E()-Cl?(Le&2)===0&&$r(t,0):ff|=a,Qr===ve&&(Qr=0)),Di(t)}function b0(t,n){n===0&&(n=Fe()),t=nr(t,n),t!==null&&(Cn(t,n),Di(t))}function gv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),b0(t,a)}function xv(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),b0(t,a)}function _v(t,n){return je(t,n)}var Pl=null,es=null,vf=!1,Bl=!1,bf=!1,Oa=0;function Di(t){t!==es&&t.next===null&&(es===null?Pl=es=t:es=es.next=t),Bl=!0,vf||(vf=!0,bv())}function ho(t,n){if(!bf&&Bl){bf=!0;do for(var a=!1,s=Pl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Gt(42|t)+1)-1,f&=u&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,E0(s,f))}else f=ve,f=vt(s,s===qe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ft(s,f)||(a=!0,E0(s,f));s=s.next}while(a);bf=!1}}function vv(){S0()}function S0(){Bl=vf=!1;var t=0;Oa!==0&&Dv()&&(t=Oa);for(var n=E(),a=null,s=Pl;s!==null;){var u=s.next,f=y0(s,n);f===0?(s.next=null,a===null?Pl=u:a.next=u,u===null&&(es=a)):(a=s,(t!==0||(f&3)!==0)&&(Bl=!0)),s=u}mn!==0&&mn!==5||ho(t),Oa!==0&&(Oa=0)}function y0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Gt(f),T=1<<g,F=u[g];F===-1?((T&a)===0||(T&s)!==0)&&(u[g]=ie(T,n)):F<=n&&(t.expiredLanes|=T),f&=~T}if(n=qe,a=ve,a=vt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Yt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ft(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Yt(s),Qa(a)){case 2:case 8:a=yt;break;case 32:a=dt;break;case 268435456:a=Ot;break;default:a=dt}return s=M0.bind(null,t),a=je(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Yt(s),t.callbackPriority=2,t.callbackNode=null,2}function M0(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ol()&&t.callbackNode!==a)return null;var s=ve;return s=vt(t,t===qe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(a0(t,s,n),y0(t,E()),t.callbackNode!=null&&t.callbackNode===a?M0.bind(null,t):null)}function E0(t,n){if(Ol())return null;a0(t,n,!0)}function bv(){Lv(function(){(Le&6)!==0?je(xt,vv):S0()})}function Sf(){if(Oa===0){var t=kr;t===0&&(t=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Oa=t}return Oa}function T0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:jo(""+t)}function A0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Sv(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=T0((u[hn]||null).action),g=s.submitter;g&&(n=(n=g[hn]||null)?T0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new Yo("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Oa!==0){var F=g?A0(u,g):new FormData(u);kc(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(T.preventDefault(),F=g?A0(u,g):new FormData(u),kc(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var yf=0;yf<ic.length;yf++){var Mf=ic[yf],yv=Mf.toLowerCase(),Mv=Mf[0].toUpperCase()+Mf.slice(1);gi(yv,"on"+Mv)}gi(ip,"onAnimationEnd"),gi(ap,"onAnimationIteration"),gi(rp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(I_,"onTransitionRun"),gi(k_,"onTransitionStart"),gi(H_,"onTransitionCancel"),gi(sp,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ev=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function R0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],F=T.instance,tt=T.currentTarget;if(T=T.listener,F!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(ht){Qo(ht)}u.currentTarget=null,f=F}else for(g=0;g<s.length;g++){if(T=s[g],F=T.instance,tt=T.currentTarget,T=T.listener,F!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(ht){Qo(ht)}u.currentTarget=null,f=F}}}}function _e(t,n){var a=n[Cr];a===void 0&&(a=n[Cr]=new Set);var s=t+"__bubble";a.has(s)||(C0(n,t,2,!1),a.add(s))}function Ef(t,n,a){var s=0;n&&(s|=4),C0(a,t,s,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Tf(t){if(!t[zl]){t[zl]=!0,K.forEach(function(a){a!=="selectionchange"&&(Ev.has(a)||Ef(a,!1,t),Ef(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zl]||(n[zl]=!0,Ef("selectionchange",!1,n))}}function C0(t,n,a,s){switch(ig(n)){case 2:var u=Jv;break;case 8:u=$v;break;default:u=kf}a=u.bind(null,n,a,t),u=void 0,!ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Af(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===u)break;if(g===4)for(g=s.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;T!==null;){if(g=ga(T),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){s=f=g;continue t}T=T.parentNode}}s=s.return}Nh(function(){var tt=f,ht=Gu(a),_t=[];t:{var at=op.get(t);if(at!==void 0){var lt=Yo,kt=t;switch(t){case"keypress":if(qo(a)===0)break t;case"keydown":case"keyup":lt=x_;break;case"focusin":kt="focus",lt=Yu;break;case"focusout":kt="blur",lt=Yu;break;case"beforeblur":case"afterblur":lt=Yu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=r_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=b_;break;case ip:case ap:case rp:lt=l_;break;case sp:lt=y_;break;case"scroll":case"scrollend":lt=i_;break;case"wheel":lt=E_;break;case"copy":case"cut":case"paste":lt=c_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Fh;break;case"toggle":case"beforetoggle":lt=A_}var te=(n&4)!==0,He=!te&&(t==="scroll"||t==="scrollend"),Y=te?at!==null?at+"Capture":null:at;te=[];for(var V=tt,J;V!==null;){var mt=V;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||Y===null||(mt=Ps(V,Y),mt!=null&&te.push(mo(V,mt,J))),He)break;V=V.return}0<te.length&&(at=new lt(at,kt,null,a,ht),_t.push({event:at,listeners:te}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",at&&a!==Hu&&(kt=a.relatedTarget||a.fromElement)&&(ga(kt)||kt[Oi]))break t;if((lt||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(kt=a.relatedTarget||a.toElement,lt=tt,kt=kt?ga(kt):null,kt!==null&&(He=c(kt),te=kt.tag,kt!==He||te!==5&&te!==27&&te!==6)&&(kt=null)):(lt=null,kt=tt),lt!==kt)){if(te=Bh,mt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(te=Fh,mt="onPointerLeave",Y="onPointerEnter",V="pointer"),He=lt==null?at:q(lt),J=kt==null?at:q(kt),at=new te(mt,V+"leave",lt,a,ht),at.target=He,at.relatedTarget=J,mt=null,ga(ht)===tt&&(te=new te(Y,V+"enter",kt,a,ht),te.target=J,te.relatedTarget=He,mt=te),He=mt,lt&&kt)e:{for(te=Tv,Y=lt,V=kt,J=0,mt=Y;mt;mt=te(mt))J++;mt=0;for(var Kt=V;Kt;Kt=te(Kt))mt++;for(;0<J-mt;)Y=te(Y),J--;for(;0<mt-J;)V=te(V),mt--;for(;J--;){if(Y===V||V!==null&&Y===V.alternate){te=Y;break e}Y=te(Y),V=te(V)}te=null}else te=null;lt!==null&&w0(_t,at,lt,te,!1),kt!==null&&He!==null&&w0(_t,He,kt,te,!0)}}t:{if(at=tt?q(tt):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var we=qh;else if(jh(at))if(Wh)we=B_;else{we=O_;var jt=N_}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?tt&&ku(tt.elementType)&&(we=qh):we=P_;if(we&&(we=we(t,tt))){Xh(_t,we,a,ht);break t}jt&&jt(t,at,tt),t==="focusout"&&tt&&at.type==="number"&&tt.memoizedProps.value!=null&&vn(at,"number",at.value)}switch(jt=tt?q(tt):window,t){case"focusin":(jh(jt)||jt.contentEditable==="true")&&(Lr=jt,tc=tt,Vs=null);break;case"focusout":Vs=tc=Lr=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,ep(_t,a,ht);break;case"selectionchange":if(F_)break;case"keydown":case"keyup":ep(_t,a,ht)}var fe;if(Ku)t:{switch(t){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else Ur?Gh(t,a)&&(be="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(Ih&&a.locale!=="ko"&&(Ur||be!=="onCompositionStart"?be==="onCompositionEnd"&&Ur&&(fe=Oh()):(_a=ht,Xu="value"in _a?_a.value:_a.textContent,Ur=!0)),jt=Fl(tt,be),0<jt.length&&(be=new zh(be,t,null,a,ht),_t.push({event:be,listeners:jt}),fe?be.data=fe:(fe=Vh(a),fe!==null&&(be.data=fe)))),(fe=C_?w_(t,a):D_(t,a))&&(be=Fl(tt,"onBeforeInput"),0<be.length&&(jt=new zh("onBeforeInput","beforeinput",null,a,ht),_t.push({event:jt,listeners:be}),jt.data=fe)),Sv(_t,t,tt,a,ht)}R0(_t,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Fl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ps(t,a),u!=null&&s.unshift(mo(t,u,f)),u=Ps(t,n),u!=null&&s.push(mo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function Tv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function w0(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,F=T.alternate,tt=T.stateNode;if(T=T.tag,F!==null&&F===s)break;T!==5&&T!==26&&T!==27||tt===null||(F=tt,u?(tt=Ps(a,f),tt!=null&&g.unshift(mo(a,tt,F))):u||(tt=Ps(a,f),tt!=null&&g.push(mo(a,tt,F)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Av=/\r\n?/g,Rv=/\u0000|\uFFFD/g;function D0(t){return(typeof t=="string"?t:""+t).replace(Av,`
`).replace(Rv,"")}function U0(t,n){return n=D0(n),D0(t)===n}function ke(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ai(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ai(t,""+s);break;case"className":Te(t,"class",s);break;case"tabIndex":Te(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Te(t,a,s);break;case"style":Uh(t,s,f);break;case"data":if(n!=="object"){Te(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=jo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ke(t,n,"name",u.name,u,null),ke(t,n,"formEncType",u.formEncType,u,null),ke(t,n,"formMethod",u.formMethod,u,null),ke(t,n,"formTarget",u.formTarget,u,null)):(ke(t,n,"encType",u.encType,u,null),ke(t,n,"method",u.method,u,null),ke(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=jo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=zi);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=jo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_e("beforetoggle",t),_e("toggle",t),ce(t,"popover",s);break;case"xlinkActuate":Ce(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ce(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ce(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ce(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ce(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ce(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ce(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=e_.get(a)||a,ce(t,a,s))}}function Rf(t,n,a,s,u,f){switch(a){case"style":Uh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ai(t,s):(typeof s=="number"||typeof s=="bigint")&&Ai(t,""+s);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"onClick":s!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ce(t,a,s)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ke(t,n,f,g,a,null)}}u&&ke(t,n,"srcSet",a.srcSet,a,null),s&&ke(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var T=f=g=u=null,F=null,tt=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":u=ht;break;case"type":g=ht;break;case"checked":F=ht;break;case"defaultChecked":tt=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:ke(t,n,s,ht,a,null)}}Ye(t,f,T,F,tt,g,u,!1);return;case"select":_e("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:ke(t,n,u,T,a,null)}n=f,a=g,t.multiple=!!s,n!=null?pn(t,!!s,n,!1):a!=null&&pn(t,!!s,a,!0);return;case"textarea":_e("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:ke(t,n,g,T,a,null)}Mn(t,s,u,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(s=a[F],s!=null))switch(F){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ke(t,n,F,s,a,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(s=0;s<po.length;s++)_e(po[s],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(s=a[tt],s!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ke(t,n,tt,s,a,null)}return;default:if(ku(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&Rf(t,n,ht,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&ke(t,n,T,s,a,null))}function Cv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,T=null,F=null,tt=null,ht=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":F=_t;default:s.hasOwnProperty(lt)||ke(t,n,lt,null,s,_t)}}for(var at in s){var lt=s[at];if(_t=a[at],s.hasOwnProperty(at)&&(lt!=null||_t!=null))switch(at){case"type":f=lt;break;case"name":u=lt;break;case"checked":tt=lt;break;case"defaultChecked":ht=lt;break;case"value":g=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==_t&&ke(t,n,at,lt,s,_t)}}Pi(t,g,T,F,tt,ht,f,u);return;case"select":lt=g=T=at=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":lt=F;default:s.hasOwnProperty(f)||ke(t,n,f,null,s,F)}for(u in s)if(f=s[u],F=a[u],s.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":at=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==F&&ke(t,n,u,f,s,F)}n=T,a=g,s=lt,at!=null?pn(t,!!a,at,!1):!!s!=!!a&&(n!=null?pn(t,!!a,n,!0):pn(t,!!a,a?[]:"",!1));return;case"textarea":lt=at=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ke(t,n,T,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":at=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&ke(t,n,g,u,s,f)}bn(t,at,lt);return;case"option":for(var kt in a)if(at=a[kt],a.hasOwnProperty(kt)&&at!=null&&!s.hasOwnProperty(kt))switch(kt){case"selected":t.selected=!1;break;default:ke(t,n,kt,null,s,at)}for(F in s)if(at=s[F],lt=a[F],s.hasOwnProperty(F)&&at!==lt&&(at!=null||lt!=null))switch(F){case"selected":t.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:ke(t,n,F,at,s,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)at=a[te],a.hasOwnProperty(te)&&at!=null&&!s.hasOwnProperty(te)&&ke(t,n,te,null,s,at);for(tt in s)if(at=s[tt],lt=a[tt],s.hasOwnProperty(tt)&&at!==lt&&(at!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:ke(t,n,tt,at,s,lt)}return;default:if(ku(n)){for(var He in a)at=a[He],a.hasOwnProperty(He)&&at!==void 0&&!s.hasOwnProperty(He)&&Rf(t,n,He,void 0,s,at);for(ht in s)at=s[ht],lt=a[ht],!s.hasOwnProperty(ht)||at===lt||at===void 0&&lt===void 0||Rf(t,n,ht,at,s,lt);return}}for(var Y in a)at=a[Y],a.hasOwnProperty(Y)&&at!=null&&!s.hasOwnProperty(Y)&&ke(t,n,Y,null,s,at);for(_t in s)at=s[_t],lt=a[_t],!s.hasOwnProperty(_t)||at===lt||at==null&&lt==null||ke(t,n,_t,at,s,lt)}function L0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,T=u.duration;if(f&&T&&L0(g)){for(g=0,T=u.responseEnd,s+=1;s<a.length;s++){var F=a[s],tt=F.startTime;if(tt>T)break;var ht=F.transferSize,_t=F.initiatorType;ht&&L0(_t)&&(F=F.responseEnd,g+=ht*(F<T?1:(T-tt)/(F-tt)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Cf=null,wf=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function N0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function O0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Df(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uf=null;function Dv(){var t=window.event;return t&&t.type==="popstate"?t===Uf?!1:(Uf=t,!0):(Uf=null,!1)}var P0=typeof setTimeout=="function"?setTimeout:void 0,Uv=typeof clearTimeout=="function"?clearTimeout:void 0,B0=typeof Promise=="function"?Promise:void 0,Lv=typeof queueMicrotask=="function"?queueMicrotask:typeof B0<"u"?function(t){return B0.resolve(null).then(t).catch(Nv)}:P0;function Nv(t){setTimeout(function(){throw t})}function Pa(t){return t==="head"}function z0(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),rs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")go(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[Ja]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&go(t.ownerDocument.body);a=u}while(a);rs(n)}function F0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Lf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lf(a),Os(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ov(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ja])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function Pv(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function I0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Nf(t){return t.data==="$?"||t.data==="$~"}function Of(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Bv(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Pf=null;function k0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function H0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function G0(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Os(t)}var ui=new Map,V0=new Set;function kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $i=Z.d;Z.d={f:zv,r:Fv,D:Iv,C:kv,L:Hv,m:Gv,X:jv,S:Vv,M:Xv};function zv(){var t=$i.f(),n=Ul();return t||n}function Fv(t){var n=R(t);n!==null&&n.tag===5&&n.type==="form"?sm(n):$i.r(t)}var ns=typeof document>"u"?null:document;function j0(t,n,a){var s=ns;if(s&&typeof n=="string"&&n){var u=We(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),V0.has(u)||(V0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Rn(n,"link",t),nt(n),s.head.appendChild(n)))}}function Iv(t){$i.D(t),j0("dns-prefetch",t,null)}function kv(t,n){$i.C(t,n),j0("preconnect",t,n)}function Hv(t,n,a){$i.L(t,n,a);var s=ns;if(s&&t&&n){var u='link[rel="preload"][as="'+We(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+We(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+We(a.imageSizes)+'"]')):u+='[href="'+We(t)+'"]';var f=u;switch(n){case"style":f=is(t);break;case"script":f=as(t)}ui.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(xo(f))||n==="script"&&s.querySelector(_o(f))||(n=s.createElement("link"),Rn(n,"link",t),nt(n),s.head.appendChild(n)))}}function Gv(t,n){$i.m(t,n);var a=ns;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+We(s)+'"][href="'+We(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(t)}if(!ui.has(f)&&(t=x({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}s=a.createElement("link"),Rn(s,"link",t),nt(s),a.head.appendChild(s)}}}function Vv(t,n,a){$i.S(t,n,a);var s=ns;if(s&&t){var u=st(s).hoistableStyles,f=is(t);n=n||"default";var g=u.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(xo(f)))T.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&Bf(t,a);var F=g=s.createElement("link");nt(F),Rn(F,"link",t),F._p=new Promise(function(tt,ht){F.onload=tt,F.onerror=ht}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Hl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},u.set(f,g)}}}function jv(t,n){$i.X(t,n);var a=ns;if(a&&t){var s=st(a).hoistableScripts,u=as(t),f=s.get(u);f||(f=a.querySelector(_o(u)),f||(t=x({src:t,async:!0},n),(n=ui.get(u))&&zf(t,n),f=a.createElement("script"),nt(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Xv(t,n){$i.M(t,n);var a=ns;if(a&&t){var s=st(a).hoistableScripts,u=as(t),f=s.get(u);f||(f=a.querySelector(_o(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=ui.get(u))&&zf(t,n),f=a.createElement("script"),nt(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function X0(t,n,a,s){var u=(u=W.current)?kl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=st(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=is(a.href);var f=st(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(xo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||qv(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=st(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function is(t){return'href="'+We(t)+'"'}function xo(t){return'link[rel="stylesheet"]['+t+"]"}function q0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function qv(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),nt(n),t.head.appendChild(n))}function as(t){return'[src="'+We(t)+'"]'}function _o(t){return"script[async]"+t}function W0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+We(a.href)+'"]');if(s)return n.instance=s,nt(s),s;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),nt(s),Rn(s,"style",u),Hl(s,a.precedence,t),n.instance=s;case"stylesheet":u=is(a.href);var f=t.querySelector(xo(u));if(f)return n.state.loading|=4,n.instance=f,nt(f),f;s=q0(a),(u=ui.get(u))&&Bf(s,u),f=(t.ownerDocument||t).createElement("link"),nt(f);var g=f;return g._p=new Promise(function(T,F){g.onload=T,g.onerror=F}),Rn(f,"link",s),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=as(a.src),(u=t.querySelector(_o(f)))?(n.instance=u,nt(u),u):(s=a,(u=ui.get(f))&&(s=x({},a),zf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),nt(u),Rn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hl(s,a.precedence,t));return n.instance}function Hl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function Y0(t,n,a){if(Gl===null){var s=new Map,u=Gl=new Map;u.set(a,s)}else u=Gl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ja]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function Z0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Wv(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function K0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Yv(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=is(s.href),f=n.querySelector(xo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,nt(f);return}f=n.ownerDocument||n,s=q0(s),(u=ui.get(u))&&Bf(s,u),f=f.createElement("link"),nt(f);var g=f;g._p=new Promise(function(T,F){g.onload=T,g.onerror=F}),Rn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ff=0;function Zv(t,n){return t.stylesheets&&t.count===0&&Xl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ff===0&&(Ff=62500*wv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ff?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var jl=null;function Xl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,jl=new Map,n.forEach(Kv,t),jl=null,Vl.call(t))}function Kv(t,n){if(!(n.state.loading&4)){var a=jl.get(t);if(a)var s=a.get(null);else{a=new Map,jl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=Vl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var vo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function Qv(t,n,a,s,u,f,g,T,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Q0(t,n,a,s,u,f,g,T,F,tt,ht,_t){return t=new Qv(t,n,a,g,F,tt,ht,_t,T),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=gc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},bc(f),t}function J0(t){return t?(t=Pr,t):Pr}function $0(t,n,a,s,u,f){u=J0(u),s.context===null?s.context=u:s.pendingContext=u,s=Ea(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ta(t,s,n),a!==null&&(kn(a,t,n),Ks(a,t,n))}function tg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function If(t,n){tg(t,n),(t=t.alternate)&&tg(t,n)}function eg(t){if(t.tag===13||t.tag===31){var n=nr(t,67108864);n!==null&&kn(n,t,67108864),If(t,67108864)}}function ng(t){if(t.tag===13||t.tag===31){var n=Jn();n=mi(n);var a=nr(t,n);a!==null&&kn(a,t,n),If(t,n)}}var ql=!0;function Jv(t,n,a,s){var u=B.T;B.T=null;var f=Z.p;try{Z.p=2,kf(t,n,a,s)}finally{Z.p=f,B.T=u}}function $v(t,n,a,s){var u=B.T;B.T=null;var f=Z.p;try{Z.p=8,kf(t,n,a,s)}finally{Z.p=f,B.T=u}}function kf(t,n,a,s){if(ql){var u=Hf(s);if(u===null)Af(t,n,s,Wl,a),ag(t,s);else if(eb(u,t,n,a,s))s.stopPropagation();else if(ag(t,s),n&4&&-1<tb.indexOf(t)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Tt(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var F=1<<31-Gt(g);T.entanglements[1]|=F,g&=~F}Di(f),(Le&6)===0&&(wl=E()+500,ho(0))}}break;case 31:case 13:T=nr(f,2),T!==null&&kn(T,f,2),Ul(),If(f,2)}if(f=Hf(s),f===null&&Af(t,n,s,Wl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Af(t,n,s,null,a)}}function Hf(t){return t=Gu(t),Gf(t)}var Wl=null;function Gf(t){if(Wl=null,t=ga(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wl=t,null}function ig(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case xt:return 2;case yt:return 8;case dt:case qt:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var Vf=!1,Ba=null,za=null,Fa=null,bo=new Map,So=new Map,Ia=[],tb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ag(t,n){switch(t){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function yo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&eg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function eb(t,n,a,s,u){switch(n){case"focusin":return Ba=yo(Ba,t,n,a,s,u),!0;case"dragenter":return za=yo(za,t,n,a,s,u),!0;case"mouseover":return Fa=yo(Fa,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return bo.set(f,yo(bo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,So.set(f,yo(So.get(f)||null,t,n,a,s,u)),!0}return!1}function rg(t){var n=ga(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){ng(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){ng(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Hf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Hu=s,a.target.dispatchEvent(s),Hu=null}else return n=R(a),n!==null&&eg(n),t.blockedOn=a,!1;n.shift()}return!0}function sg(t,n,a){Yl(t)&&a.delete(n)}function nb(){Vf=!1,Ba!==null&&Yl(Ba)&&(Ba=null),za!==null&&Yl(za)&&(za=null),Fa!==null&&Yl(Fa)&&(Fa=null),bo.forEach(sg),So.forEach(sg)}function Zl(t,n){t.blockedOn===n&&(t.blockedOn=null,Vf||(Vf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,nb)))}var Kl=null;function og(t){Kl!==t&&(Kl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Kl===t&&(Kl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Gf(s||a)===null)continue;break}var f=R(a);f!==null&&(t.splice(n,3),n-=3,kc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function rs(t){function n(F){return Zl(F,t)}Ba!==null&&Zl(Ba,t),za!==null&&Zl(za,t),Fa!==null&&Zl(Fa,t),bo.forEach(n),So.forEach(n);for(var a=0;a<Ia.length;a++){var s=Ia[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ia.length&&(a=Ia[0],a.blockedOn===null);)rg(a),a.blockedOn===null&&Ia.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[hn]||null;if(typeof f=="function")g||og(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[hn]||null)T=g.formAction;else if(Gf(u)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),og(a)}}}function lg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function jf(t){this._internalRoot=t}Ql.prototype.render=jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();$0(a,s,t,n,null,null)},Ql.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;$0(t.current,2,null,t,null,null),Ul(),n[Oi]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ls();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ia.length&&n!==0&&n<Ia[a].priority;a++);Ia.splice(a,0,t),a===0&&rg(t)}};var ug=e.version;if(ug!=="19.2.0")throw Error(r(527,ug,"19.2.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var ib={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{Mt=Jl.inject(ib),At=Jl}catch{}}return Eo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=gm,f=xm,g=_m;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Q0(t,1,!1,null,null,a,s,null,u,f,g,lg),t[Oi]=n.current,Tf(t),new jf(n)},Eo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=gm,g=xm,T=_m,F=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=Q0(t,1,!0,n,a??null,s,u,F,f,g,T,lg),n.context=J0(null),a=n.current,s=Jn(),s=mi(s),u=Ea(s),u.callback=null,Ta(a,u,s),a=s,n.current.lanes=a,Cn(n,a),Di(n),t[Oi]=n.current,Tf(t),new Ql(n)},Eo.version="19.2.0",Eo}var vg;function pb(){if(vg)return Wf.exports;vg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Wf.exports=hb(),Wf.exports}var mb=pb();const gb=()=>{const[o,e]=pi.useState(!1);return I.jsx("nav",{className:"navbar",children:I.jsxs("div",{className:"nav-container",children:[I.jsx("h1",{className:"nav-logo",children:"CakraLogy"}),I.jsx("div",{className:"nav-menu-icon",onClick:()=>e(!o),children:o?"×":"☰"}),I.jsxs("ul",{className:o?"nav-links active":"nav-links",children:[I.jsx("li",{children:I.jsx("a",{href:"#Hero",onClick:()=>e(!1),children:"Home"})}),I.jsx("li",{children:I.jsx("a",{href:"#About",onClick:()=>e(!1),children:"About"})}),I.jsx("li",{children:I.jsx("a",{href:"#Edu",onClick:()=>e(!1),children:"Edukasi"})}),I.jsx("li",{children:I.jsx("a",{href:"#Testimoni",onClick:()=>e(!1),children:"Testimoni"})}),I.jsx("li",{children:I.jsx("a",{href:"#Contact",onClick:()=>e(!1),children:"Contact"})})]})]})})};function xb(){return I.jsxs("section",{className:"hero",children:[I.jsxs("div",{className:"container",children:[I.jsxs("div",{className:"text-box",children:[I.jsx("p",{className:"sub",children:"BEST IT COMPANY"}),I.jsxs("h1",{children:["Get Our Business ",I.jsx("br",{}),I.jsx("span",{children:"This IT Solution"})]}),I.jsx("p",{className:"desc",children:"We deliver intelligent IT solutions helping business improve online conversion, enhance branding, and deliver great user experience."}),I.jsxs("div",{className:"btn-group",children:[I.jsx("button",{className:"btn primary",children:I.jsx("a",{href:"#Edu",children:"Explore"})}),I.jsx("button",{className:"btn outline",children:I.jsx("a",{href:"#Contact",children:"Contact Us"})})]})]}),I.jsx("div",{className:"img-box",children:I.jsx("img",{src:"https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",alt:"Team Work"})})]}),I.jsx("div",{className:"wave-wrap",children:I.jsxs("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[I.jsx("defs",{children:I.jsx("linearGradient",{id:"waveGradient",x1:"0",x2:"1",y1:"0",y2:"0",children:I.jsx("stop",{offset:"0%",stopColor:"#4a90e2"})})}),I.jsx("path",{d:`M578.14,59.49c-95.2,22.77-199.75,34.28-304.39,29\r
                C178,81.14,90.73,56.74,0,32.23V120H1200V16.41\r
                c-75.4,40.29-161.41,63.07-247.53,72\r
                C823.45,98.75,673.34,36.21,578.14,59.49Z`,fill:"url(#waveGradient)"})]})})]})}function _b(){const o="👋 Selamat Datang di Platform Edukasi Kami • Belajar Mudah • Materi Interaktif • UI Modern • ";return I.jsxs("div",{className:"marquee-futuristic-wrapper",children:[I.jsx("div",{className:"marquee-row",children:I.jsxs("div",{className:"marquee-content",children:[I.jsx("span",{children:o}),I.jsx("span",{children:o})]})}),I.jsx("div",{className:"marquee-row reverse",children:I.jsxs("div",{className:"marquee-content",children:[I.jsx("span",{children:o}),I.jsx("span",{children:o})]})})]})}const vh="181",vb=0,bg=1,bb=2,yx=1,Sb=2,sa=3,Ka=0,Gn=1,oa=2,ca=0,bs=1,Sg=2,yg=3,Mg=4,yb=5,yr=100,Mb=101,Eb=102,Tb=103,Ab=104,Rb=200,Cb=201,wb=202,Db=203,Cd=204,wd=205,Ub=206,Lb=207,Nb=208,Ob=209,Pb=210,Bb=211,zb=212,Fb=213,Ib=214,Dd=0,Ud=1,Ld=2,ys=3,Nd=4,Od=5,Pd=6,Bd=7,Mx=0,kb=1,Hb=2,Za=0,Gb=1,Vb=2,jb=3,Xb=4,qb=5,Wb=6,Yb=7,Ex=300,Ms=301,Es=302,zd=303,Fd=304,Lu=306,Id=1e3,la=1001,kd=1002,ei=1003,Zb=1004,$l=1005,hi=1006,Qf=1007,Er=1008,da=1009,Tx=1010,Ax=1011,Lo=1012,bh=1013,Ar=1014,ua=1015,Rs=1016,Sh=1017,yh=1018,No=1020,Rx=35902,Cx=35899,wx=1021,Dx=1022,Mi=1023,Oo=1026,Po=1027,Ux=1028,Mh=1029,Eh=1030,Th=1031,Ah=1033,yu=33776,Mu=33777,Eu=33778,Tu=33779,Hd=35840,Gd=35841,Vd=35842,jd=35843,Xd=36196,qd=37492,Wd=37496,Yd=37808,Zd=37809,Kd=37810,Qd=37811,Jd=37812,$d=37813,th=37814,eh=37815,nh=37816,ih=37817,ah=37818,rh=37819,sh=37820,oh=37821,lh=36492,uh=36494,ch=36495,fh=36283,dh=36284,hh=36285,ph=36286,Kb=3200,Qb=3201,Jb=0,$b=1,Wa="",fi="srgb",Ts="srgb-linear",Ru="linear",Ge="srgb",ss=7680,Eg=519,tS=512,eS=513,nS=514,Lx=515,iS=516,aS=517,rS=518,sS=519,Tg=35044,Ag="300 es",Li=2e3,Cu=2001;function Nx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function wu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oS(){const o=wu("canvas");return o.style.display="block",o}const Rg={};function Cg(...o){const e="THREE."+o.shift();console.log(e,...o)}function le(...o){const e="THREE."+o.shift();console.warn(e,...o)}function an(...o){const e="THREE."+o.shift();console.error(e,...o)}function Bo(...o){const e=o.join(" ");e in Rg||(Rg[e]=!0,le(...o))}function lS(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Cs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jf=Math.PI/180,mh=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function uS(o,e){return(o%e+e)%e}function $f(o,e,i){return(1-i)*o+i*e}function To(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,i=0){Ve.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],x=r[l+3],b=c[d+0],M=c[d+1],A=c[d+2],C=c[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x;return}if(h>=1){e[i+0]=b,e[i+1]=M,e[i+2]=A,e[i+3]=C;return}if(x!==C||m!==b||p!==M||_!==A){let y=m*b+p*M+_*A+x*C;y<0&&(b=-b,M=-M,A=-A,C=-C,y=-y);let v=1-h;if(y<.9995){const z=Math.acos(y),L=Math.sin(z);v=Math.sin(v*z)/L,h=Math.sin(h*z)/L,m=m*v+b*h,p=p*v+M*h,_=_*v+A*h,x=x*v+C*h}else{m=m*v+b*h,p=p*v+M*h,_=_*v+A*h,x=x*v+C*h;const z=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=z,p*=z,_*=z,x*=z}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],x=c[d],b=c[d+1],M=c[d+2],A=c[d+3];return e[i]=h*A+_*x+m*M-p*b,e[i+1]=m*A+_*b+p*x-h*M,e[i+2]=p*A+_*M+h*b-m*x,e[i+3]=_*A-h*x-m*b-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),x=h(c/2),b=m(r/2),M=m(l/2),A=m(c/2);switch(d){case"XYZ":this._x=b*_*x+p*M*A,this._y=p*M*x-b*_*A,this._z=p*_*A+b*M*x,this._w=p*_*x-b*M*A;break;case"YXZ":this._x=b*_*x+p*M*A,this._y=p*M*x-b*_*A,this._z=p*_*A-b*M*x,this._w=p*_*x+b*M*A;break;case"ZXY":this._x=b*_*x-p*M*A,this._y=p*M*x+b*_*A,this._z=p*_*A+b*M*x,this._w=p*_*x-b*M*A;break;case"ZYX":this._x=b*_*x-p*M*A,this._y=p*M*x+b*_*A,this._z=p*_*A-b*M*x,this._w=p*_*x+b*M*A;break;case"YZX":this._x=b*_*x+p*M*A,this._y=p*M*x+b*_*A,this._z=p*_*A-b*M*x,this._w=p*_*x-b*M*A;break;case"XZY":this._x=b*_*x-p*M*A,this._y=p*M*x-b*_*A,this._z=p*_*A+b*M*x,this._w=p*_*x+b*M*A;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],x=i[10],b=r+h+x;if(b>0){const M=.5/Math.sqrt(b+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(d-l)*M}else if(r>h&&r>x){const M=2*Math.sqrt(1+r-h-x);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-r-x);this._w=(c-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-r-h);this._w=(d-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-c*m,this._y=l*_+d*m+c*h-r*p,this._z=c*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(e=0,i=0,r=0){ct.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(wg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(wg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),_=2*(h*i-c*l),x=2*(c*r-d*i);return this.x=i+m*p+d*x-h*_,this.y=r+m*_+h*p-c*x,this.z=l+m*x+c*_-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new ct,wg=new Fo;class de{constructor(e,i,r,l,c,d,h,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,m,p)}set(e,i,r,l,c,d,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],x=r[7],b=r[2],M=r[5],A=r[8],C=l[0],y=l[3],v=l[6],z=l[1],L=l[4],k=l[7],X=l[2],O=l[5],N=l[8];return c[0]=d*C+h*z+m*X,c[3]=d*y+h*L+m*O,c[6]=d*v+h*k+m*N,c[1]=p*C+_*z+x*X,c[4]=p*y+_*L+x*O,c[7]=p*v+_*k+x*N,c[2]=b*C+M*z+A*X,c[5]=b*y+M*L+A*O,c[8]=b*v+M*k+A*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*d*_-i*h*p-r*c*_+r*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],x=_*d-h*p,b=h*m-_*c,M=p*c-d*m,A=i*x+r*b+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=x*C,e[1]=(l*p-_*r)*C,e[2]=(h*r-l*d)*C,e[3]=b*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-h*i)*C,e[6]=M*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(ed.makeScale(e,i)),this}rotate(e){return this.premultiply(ed.makeRotation(-e)),this}translate(e,i){return this.premultiply(ed.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ed=new de,Dg=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ug=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cS(){const o={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ge&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ge&&(l.r=Ss(l.r),l.g=Ss(l.g),l.b=Ss(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ts]:{primaries:e,whitePoint:r,transfer:Ru,toXYZ:Dg,fromXYZ:Ug,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Ge,toXYZ:Dg,fromXYZ:Ug,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Ue=cS();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ss(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let os;class fS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{os===void 0&&(os=wu("canvas")),os.width=e.width,os.height=e.height;const l=os.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=os}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=wu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=fa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(fa(i[r]/255)*255):i[r]=fa(i[r]);return{data:i,width:e.width,height:e.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dS=0;class Rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(nd(l[d].image)):c.push(nd(l[d]))}else c=nd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function nd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?fS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let hS=0;const id=new ct;class On extends Cs{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=la,l=la,c=hi,d=Er,h=Mi,m=da,p=On.DEFAULT_ANISOTROPY,_=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=zo(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(id).x}get height(){return this.source.getSize(id).y}get depth(){return this.source.getSize(id).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case la:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case la:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Ex;On.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],x=m[8],b=m[1],M=m[5],A=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(_-b)<.01&&Math.abs(x-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(_+b)<.1&&Math.abs(x+C)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,k=(M+1)/2,X=(v+1)/2,O=(_+b)/4,N=(x+C)/4,rt=(A+y)/4;return L>k&&L>X?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=O/r,c=N/r):k>X?k<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(k),r=O/l,c=rt/l):X<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),r=N/c,l=rt/c),this.set(r,l,c,i),this}let z=Math.sqrt((y-A)*(y-A)+(x-C)*(x-C)+(b-_)*(b-_));return Math.abs(z)<.001&&(z=1),this.x=(y-A)/z,this.y=(x-C)/z,this.z=(b-_)/z,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pS extends Cs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new On(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Rh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends pS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Ox extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mS extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=new ct(1/0,1/0,1/0),i=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,vi):vi.fromBufferAttribute(c,d),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tu.copy(r.boundingBox)),tu.applyMatrix4(e.matrixWorld),this.union(tu)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),eu.subVectors(this.max,Ao),ls.subVectors(e.a,Ao),us.subVectors(e.b,Ao),cs.subVectors(e.c,Ao),Ha.subVectors(us,ls),Ga.subVectors(cs,us),mr.subVectors(ls,cs);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-mr.z,mr.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,mr.z,0,-mr.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-mr.y,mr.x,0];return!ad(i,ls,us,cs,eu)||(i=[1,0,0,0,1,0,0,0,1],!ad(i,ls,us,cs,eu))?!1:(nu.crossVectors(Ha,Ga),i=[nu.x,nu.y,nu.z],ad(i,ls,us,cs,eu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ta=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],vi=new ct,tu=new Io,ls=new ct,us=new ct,cs=new ct,Ha=new ct,Ga=new ct,mr=new ct,Ao=new ct,eu=new ct,nu=new ct,gr=new ct;function ad(o,e,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){gr.fromArray(o,c);const h=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),m=e.dot(gr),p=i.dot(gr),_=r.dot(gr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const gS=new Io,Ro=new ct,rd=new ct;class Nu{constructor(e=new ct,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):gS.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(rd)),this.expandByPoint(Ro.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ea=new ct,sd=new ct,iu=new ct,Va=new ct,od=new ct,au=new ct,ld=new ct;class Px{constructor(e=new ct,i=new ct(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){sd.copy(e).add(i).multiplyScalar(.5),iu.copy(i).sub(e).normalize(),Va.copy(this.origin).sub(sd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(iu),h=Va.dot(this.direction),m=-Va.dot(iu),p=Va.lengthSq(),_=Math.abs(1-d*d);let x,b,M,A;if(_>0)if(x=d*m-h,b=d*h-m,A=c*_,x>=0)if(b>=-A)if(b<=A){const C=1/_;x*=C,b*=C,M=x*(x+d*b+2*h)+b*(d*x+b+2*m)+p}else b=c,x=Math.max(0,-(d*b+h)),M=-x*x+b*(b+2*m)+p;else b=-c,x=Math.max(0,-(d*b+h)),M=-x*x+b*(b+2*m)+p;else b<=-A?(x=Math.max(0,-(-d*c+h)),b=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+b*(b+2*m)+p):b<=A?(x=0,b=Math.min(Math.max(-c,-m),c),M=b*(b+2*m)+p):(x=Math.max(0,-(d*c+h)),b=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+b*(b+2*m)+p);else b=d>0?-c:c,x=Math.max(0,-(d*b+h)),M=-x*x+b*(b+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(sd).addScaledVector(iu,b),M}intersectSphere(e,i){ea.subVectors(e.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,b=this.origin;return p>=0?(r=(e.min.x-b.x)*p,l=(e.max.x-b.x)*p):(r=(e.max.x-b.x)*p,l=(e.min.x-b.x)*p),_>=0?(c=(e.min.y-b.y)*_,d=(e.max.y-b.y)*_):(c=(e.max.y-b.y)*_,d=(e.min.y-b.y)*_),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-b.z)*x,m=(e.max.z-b.z)*x):(h=(e.max.z-b.z)*x,m=(e.min.z-b.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ea)!==null}intersectTriangle(e,i,r,l,c){od.subVectors(i,e),au.subVectors(r,e),ld.crossVectors(od,au);let d=this.direction.dot(ld),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Va.subVectors(this.origin,e);const m=h*this.direction.dot(au.crossVectors(Va,au));if(m<0)return null;const p=h*this.direction.dot(od.cross(Va));if(p<0||m+p>d)return null;const _=-h*Va.dot(ld);return _<0?null:this.at(_/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(e,i,r,l,c,d,h,m,p,_,x,b,M,A,C,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,m,p,_,x,b,M,A,C,y)}set(e,i,r,l,c,d,h,m,p,_,x,b,M,A,C,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=x,v[14]=b,v[3]=M,v[7]=A,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/fs.setFromMatrixColumn(e,0).length(),c=1/fs.setFromMatrixColumn(e,1).length(),d=1/fs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const b=d*_,M=d*x,A=h*_,C=h*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=M+A*p,i[5]=b-C*p,i[9]=-h*m,i[2]=C-b*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const b=m*_,M=m*x,A=p*_,C=p*x;i[0]=b+C*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*x,i[5]=d*_,i[9]=-h,i[2]=M*h-A,i[6]=C+b*h,i[10]=d*m}else if(e.order==="ZXY"){const b=m*_,M=m*x,A=p*_,C=p*x;i[0]=b-C*h,i[4]=-d*x,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*_,i[9]=C-b*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const b=d*_,M=d*x,A=h*_,C=h*x;i[0]=m*_,i[4]=A*p-M,i[8]=b*p+C,i[1]=m*x,i[5]=C*p+b,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const b=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=C-b*x,i[8]=A*x+M,i[1]=x,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*x+A,i[10]=b-C*x}else if(e.order==="XZY"){const b=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=b*x+C,i[5]=d*_,i[9]=M*x-A,i[2]=A*x-M,i[6]=h*_,i[10]=C*x+b}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xS,e,_S)}lookAt(e,i,r){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ja.crossVectors(r,$n),ja.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ja.crossVectors(r,$n)),ja.normalize(),ru.crossVectors($n,ja),l[0]=ja.x,l[4]=ru.x,l[8]=$n.x,l[1]=ja.y,l[5]=ru.y,l[9]=$n.y,l[2]=ja.z,l[6]=ru.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],x=r[5],b=r[9],M=r[13],A=r[2],C=r[6],y=r[10],v=r[14],z=r[3],L=r[7],k=r[11],X=r[15],O=l[0],N=l[4],rt=l[8],D=l[12],w=l[1],j=l[5],it=l[9],ut=l[13],gt=l[2],pt=l[6],B=l[10],Z=l[14],Q=l[3],bt=l[7],St=l[11],S=l[15];return c[0]=d*O+h*w+m*gt+p*Q,c[4]=d*N+h*j+m*pt+p*bt,c[8]=d*rt+h*it+m*B+p*St,c[12]=d*D+h*ut+m*Z+p*S,c[1]=_*O+x*w+b*gt+M*Q,c[5]=_*N+x*j+b*pt+M*bt,c[9]=_*rt+x*it+b*B+M*St,c[13]=_*D+x*ut+b*Z+M*S,c[2]=A*O+C*w+y*gt+v*Q,c[6]=A*N+C*j+y*pt+v*bt,c[10]=A*rt+C*it+y*B+v*St,c[14]=A*D+C*ut+y*Z+v*S,c[3]=z*O+L*w+k*gt+X*Q,c[7]=z*N+L*j+k*pt+X*bt,c[11]=z*rt+L*it+k*B+X*St,c[15]=z*D+L*ut+k*Z+X*S,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],_=e[2],x=e[6],b=e[10],M=e[14],A=e[3],C=e[7],y=e[11],v=e[15];return A*(+c*m*x-l*p*x-c*h*b+r*p*b+l*h*M-r*m*M)+C*(+i*m*M-i*p*b+c*d*b-l*d*M+l*p*_-c*m*_)+y*(+i*p*x-i*h*M-c*d*x+r*d*M+c*h*_-r*p*_)+v*(-l*h*_-i*m*x+i*h*b+l*d*x-r*d*b+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],x=e[9],b=e[10],M=e[11],A=e[12],C=e[13],y=e[14],v=e[15],z=x*y*p-C*b*p+C*m*M-h*y*M-x*m*v+h*b*v,L=A*b*p-_*y*p-A*m*M+d*y*M+_*m*v-d*b*v,k=_*C*p-A*x*p+A*h*M-d*C*M-_*h*v+d*x*v,X=A*x*m-_*C*m-A*h*b+d*C*b+_*h*y-d*x*y,O=i*z+r*L+l*k+c*X;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return e[0]=z*N,e[1]=(C*b*c-x*y*c-C*l*M+r*y*M+x*l*v-r*b*v)*N,e[2]=(h*y*c-C*m*c+C*l*p-r*y*p-h*l*v+r*m*v)*N,e[3]=(x*m*c-h*b*c-x*l*p+r*b*p+h*l*M-r*m*M)*N,e[4]=L*N,e[5]=(_*y*c-A*b*c+A*l*M-i*y*M-_*l*v+i*b*v)*N,e[6]=(A*m*c-d*y*c-A*l*p+i*y*p+d*l*v-i*m*v)*N,e[7]=(d*b*c-_*m*c+_*l*p-i*b*p-d*l*M+i*m*M)*N,e[8]=k*N,e[9]=(A*x*c-_*C*c-A*r*M+i*C*M+_*r*v-i*x*v)*N,e[10]=(d*C*c-A*h*c+A*r*p-i*C*p-d*r*v+i*h*v)*N,e[11]=(_*h*c-d*x*c-_*r*p+i*x*p+d*r*M-i*h*M)*N,e[12]=X*N,e[13]=(_*C*l-A*x*l+A*r*b-i*C*b-_*r*y+i*x*y)*N,e[14]=(A*h*l-d*C*l-A*r*m+i*C*m+d*r*y-i*h*y)*N,e[15]=(d*x*l-_*h*l+_*r*m-i*x*m-d*r*b+i*h*b)*N,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,h=e.y,m=e.z,p=c*d,_=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,_=d+d,x=h+h,b=c*p,M=c*_,A=c*x,C=d*_,y=d*x,v=h*x,z=m*p,L=m*_,k=m*x,X=r.x,O=r.y,N=r.z;return l[0]=(1-(C+v))*X,l[1]=(M+k)*X,l[2]=(A-L)*X,l[3]=0,l[4]=(M-k)*O,l[5]=(1-(b+v))*O,l[6]=(y+z)*O,l[7]=0,l[8]=(A+L)*N,l[9]=(y-z)*N,l[10]=(1-(b+C))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=fs.set(l[0],l[1],l[2]).length();const d=fs.set(l[4],l[5],l[6]).length(),h=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const p=1/c,_=1/d,x=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=_,bi.elements[5]*=_,bi.elements[6]*=_,bi.elements[8]*=x,bi.elements[9]*=x,bi.elements[10]*=x,i.setFromRotationMatrix(bi),r.x=c,r.y=d,r.z=h,this}makePerspective(e,i,r,l,c,d,h=Li,m=!1){const p=this.elements,_=2*c/(i-e),x=2*c/(r-l),b=(i+e)/(i-e),M=(r+l)/(r-l);let A,C;if(m)A=c/(d-c),C=d*c/(d-c);else if(h===Li)A=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(h===Cu)A=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=b,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,d,h=Li,m=!1){const p=this.elements,_=2/(i-e),x=2/(r-l),b=-(i+e)/(i-e),M=-(r+l)/(r-l);let A,C;if(m)A=1/(d-c),C=d/(d-c);else if(h===Li)A=-2/(d-c),C=-(d+c)/(d-c);else if(h===Cu)A=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=b,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const fs=new ct,bi=new dn,xS=new ct(0,0,0),_S=new ct(1,1,1),ja=new ct,ru=new ct,$n=new ct,Lg=new dn,Ng=new Fo;class ha{constructor(e=0,i=0,r=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],x=l[2],b=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(b,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(b,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(b,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ng.setFromEuler(this),this.setFromQuaternion(Ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class Bx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vS=0;const Og=new ct,ds=new Fo,na=new dn,su=new ct,Co=new ct,bS=new ct,SS=new Fo,Pg=new ct(1,0,0),Bg=new ct(0,1,0),zg=new ct(0,0,1),Fg={type:"added"},yS={type:"removed"},hs={type:"childadded",child:null},ud={type:"childremoved",child:null};class Vn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new ct,i=new ha,r=new Fo,l=new ct(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new de}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ds.setFromAxisAngle(e,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,i){return ds.setFromAxisAngle(e,i),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Pg,e)}rotateY(e){return this.rotateOnAxis(Bg,e)}rotateZ(e){return this.rotateOnAxis(zg,e)}translateOnAxis(e,i){return Og.copy(e).applyQuaternion(this.quaternion),this.position.add(Og.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Pg,e)}translateY(e){return this.translateOnAxis(Bg,e)}translateZ(e){return this.translateOnAxis(zg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?su.copy(e):su.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Co,su,this.up):na.lookAt(su,Co,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(na),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(an("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fg),hs.child=e,this.dispatchEvent(hs),hs.child=null):an("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(yS),ud.child=e,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),na.multiply(e.parent.matrixWorld)),e.applyMatrix4(na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fg),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,bS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,SS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),_=d(e.images),x=d(e.shapes),b=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),b.length>0&&(r.skeletons=b),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Vn.DEFAULT_UP=new ct(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new ct,ia=new ct,cd=new ct,aa=new ct,ps=new ct,ms=new ct,Ig=new ct,fd=new ct,dd=new ct,hd=new ct,pd=new rn,md=new rn,gd=new rn;class yi{constructor(e=new ct,i=new ct,r=new ct){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Si.subVectors(e,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Si.subVectors(l,i),ia.subVectors(r,i),cd.subVectors(e,i);const d=Si.dot(Si),h=Si.dot(ia),m=Si.dot(cd),p=ia.dot(ia),_=ia.dot(cd),x=d*p-h*h;if(x===0)return c.set(0,0,0),null;const b=1/x,M=(p*m-h*_)*b,A=(d*_-h*m)*b;return c.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(e,i,r,l,c,d,h,m){return this.getBarycoord(e,i,r,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(d,aa.y),m.addScaledVector(h,aa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,i),md.fromBufferAttribute(e,r),gd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(pd,c.x),d.addScaledVector(md,c.y),d.addScaledVector(gd,c.z),d}static isFrontFacing(e,i,r,l){return Si.subVectors(r,i),ia.subVectors(e,i),Si.cross(ia).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Si.cross(ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,h;ps.subVectors(l,r),ms.subVectors(c,r),fd.subVectors(e,r);const m=ps.dot(fd),p=ms.dot(fd);if(m<=0&&p<=0)return i.copy(r);dd.subVectors(e,l);const _=ps.dot(dd),x=ms.dot(dd);if(_>=0&&x<=_)return i.copy(l);const b=m*x-_*p;if(b<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(ps,d);hd.subVectors(e,c);const M=ps.dot(hd),A=ms.dot(hd);if(A>=0&&M<=A)return i.copy(c);const C=M*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(ms,h);const y=_*A-M*x;if(y<=0&&x-_>=0&&M-A>=0)return Ig.subVectors(c,l),h=(x-_)/(x-_+(M-A)),i.copy(l).addScaledVector(Ig,h);const v=1/(y+C+b);return d=C*v,h=b*v,i.copy(r).addScaledVector(ps,d).addScaledVector(ms,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},ou={h:0,s:0,l:0};function xd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ze{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ue.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ue.workingColorSpace){if(e=uS(e,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=xd(d,c,e+1/3),this.g=xd(d,c,e),this.b=xd(d,c,e-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function r(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const r=zx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ue.workingToColorSpace(Un.copy(this),e),Math.round(Ee(Un.r*255,0,255))*65536+Math.round(Ee(Un.g*255,0,255))*256+Math.round(Ee(Un.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,c=Un.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=_<=.5?x/(d+h):x/(2-d-h),d){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=fi){Ue.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+e,Xa.s+i,Xa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Xa),e.getHSL(ou);const r=$f(Xa.h,ou.h,i),l=$f(Xa.s,ou.s,i),c=$f(Xa.l,ou.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new ze;ze.NAMES=zx;let MS=0;class ko extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=bs,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=wd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(r.blending=this.blending),this.side!==Ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cd&&(r.blendSrc=this.blendSrc),this.blendDst!==wd&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ch extends ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=Mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new ct,lu=new Ve;let ES=0;class Ei{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ES++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Tg,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)lu.fromBufferAttribute(this,i),lu.applyMatrix3(e),this.setXY(i,lu.x,lu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tg&&(e.usage=this.usage),e}}class Fx extends Ei{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Ix extends Ei{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ni extends Ei{constructor(e,i,r){super(new Float32Array(e),i,r)}}let TS=0;const ci=new dn,_d=new Vn,gs=new ct,ti=new Io,wo=new Io,yn=new ct;class Ti extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nx(e)?Ix:Fx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new de().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,r){return ci.makeTranslation(e,i,r),this.applyMatrix4(ci),this}scale(e,i,r){return ci.makeScale(e,i,r),this.applyMatrix4(ci),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ni(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){an("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&an('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){an("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];wo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ti.min,wo.min),ti.expandByPoint(yn),yn.addVectors(ti.max,wo.max),ti.expandByPoint(yn)):(ti.expandByPoint(wo.min),ti.expandByPoint(wo.max))}ti.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)yn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)yn.fromBufferAttribute(h,p),m&&(gs.fromBufferAttribute(e,p),yn.add(gs)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&an('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){an("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let rt=0;rt<r.count;rt++)h[rt]=new ct,m[rt]=new ct;const p=new ct,_=new ct,x=new ct,b=new Ve,M=new Ve,A=new Ve,C=new ct,y=new ct;function v(rt,D,w){p.fromBufferAttribute(r,rt),_.fromBufferAttribute(r,D),x.fromBufferAttribute(r,w),b.fromBufferAttribute(c,rt),M.fromBufferAttribute(c,D),A.fromBufferAttribute(c,w),_.sub(p),x.sub(p),M.sub(b),A.sub(b);const j=1/(M.x*A.y-A.x*M.y);isFinite(j)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(x,-M.y).multiplyScalar(j),y.copy(x).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(j),h[rt].add(C),h[D].add(C),h[w].add(C),m[rt].add(y),m[D].add(y),m[w].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let rt=0,D=z.length;rt<D;++rt){const w=z[rt],j=w.start,it=w.count;for(let ut=j,gt=j+it;ut<gt;ut+=3)v(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const L=new ct,k=new ct,X=new ct,O=new ct;function N(rt){X.fromBufferAttribute(l,rt),O.copy(X);const D=h[rt];L.copy(D),L.sub(X.multiplyScalar(X.dot(D))).normalize(),k.crossVectors(O,D);const j=k.dot(m[rt])<0?-1:1;d.setXYZW(rt,L.x,L.y,L.z,j)}for(let rt=0,D=z.length;rt<D;++rt){const w=z[rt],j=w.start,it=w.count;for(let ut=j,gt=j+it;ut<gt;ut+=3)N(e.getX(ut+0)),N(e.getX(ut+1)),N(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let b=0,M=r.count;b<M;b++)r.setXYZ(b,0,0,0);const l=new ct,c=new ct,d=new ct,h=new ct,m=new ct,p=new ct,_=new ct,x=new ct;if(e)for(let b=0,M=e.count;b<M;b+=3){const A=e.getX(b+0),C=e.getX(b+1),y=e.getX(b+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),_.subVectors(d,c),x.subVectors(l,c),_.cross(x),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),h.add(_),m.add(_),p.add(_),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let b=0,M=i.count;b<M;b+=3)l.fromBufferAttribute(i,b+0),c.fromBufferAttribute(i,b+1),d.fromBufferAttribute(i,b+2),_.subVectors(d,c),x.subVectors(l,c),_.cross(x),r.setXYZ(b+0,_.x,_.y,_.z),r.setXYZ(b+1,_.x,_.y,_.z),r.setXYZ(b+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,x=h.normalized,b=new p.constructor(m.length*_);let M=0,A=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*_;for(let v=0;v<_;v++)b[A++]=p[M++]}return new Ei(b,_,x)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ti,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,x=p.length;_<x;_++){const b=p[_],M=e(b,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,b=p.length;x<b;x++){const M=p[x];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],x=c[p];for(let b=0,M=x.length;b<M;b++)_.push(x[b].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,_=d.length;p<_;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kg=new dn,xr=new Px,uu=new Nu,Hg=new ct,cu=new ct,fu=new ct,du=new ct,vd=new ct,hu=new ct,Gg=new ct,pu=new ct;class pa extends Vn{constructor(e=new Ti,i=new Ch){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){hu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],x=c[m];_!==0&&(vd.fromBufferAttribute(x,e),d?hu.addScaledVector(vd,_):hu.addScaledVector(vd.sub(i),_))}i.add(hu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uu.copy(r.boundingSphere),uu.applyMatrix4(c),xr.copy(e.ray).recast(e.near),!(uu.containsPoint(xr.origin)===!1&&(xr.intersectSphere(uu,Hg)===null||xr.origin.distanceToSquared(Hg)>(e.far-e.near)**2))&&(kg.copy(c).invert(),xr.copy(e.ray).applyMatrix4(kg),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,b=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=b.length;A<C;A++){const y=b[A],v=d[y.materialIndex],z=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let k=z,X=L;k<X;k+=3){const O=h.getX(k),N=h.getX(k+1),rt=h.getX(k+2);l=mu(this,v,e,r,p,_,x,O,N,rt),l&&(l.faceIndex=Math.floor(k/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=A,v=C;y<v;y+=3){const z=h.getX(y),L=h.getX(y+1),k=h.getX(y+2);l=mu(this,d,e,r,p,_,x,z,L,k),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=b.length;A<C;A++){const y=b[A],v=d[y.materialIndex],z=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let k=z,X=L;k<X;k+=3){const O=k,N=k+1,rt=k+2;l=mu(this,v,e,r,p,_,x,O,N,rt),l&&(l.faceIndex=Math.floor(k/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=A,v=C;y<v;y+=3){const z=y,L=y+1,k=y+2;l=mu(this,d,e,r,p,_,x,z,L,k),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function AS(o,e,i,r,l,c,d,h){let m;if(e.side===Gn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,e.side===Ka,h),m===null)return null;pu.copy(h),pu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(pu);return p<i.near||p>i.far?null:{distance:p,point:pu.clone(),object:o}}function mu(o,e,i,r,l,c,d,h,m,p){o.getVertexPosition(h,cu),o.getVertexPosition(m,fu),o.getVertexPosition(p,du);const _=AS(o,e,i,r,cu,fu,du,Gg);if(_){const x=new ct;yi.getBarycoord(Gg,cu,fu,du,x),l&&(_.uv=yi.getInterpolatedAttribute(l,h,m,p,x,new Ve)),c&&(_.uv1=yi.getInterpolatedAttribute(c,h,m,p,x,new Ve)),d&&(_.normal=yi.getInterpolatedAttribute(d,h,m,p,x,new ct),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const b={a:h,b:m,c:p,normal:new ct,materialIndex:0};yi.getNormal(cu,fu,du,b.normal),_.face=b,_.barycoord=x}return _}class Ho extends Ti{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],_=[],x=[];let b=0,M=0;A("z","y","x",-1,-1,r,i,e,d,c,0),A("z","y","x",1,-1,r,i,-e,d,c,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ni(p,3)),this.setAttribute("normal",new Ni(_,3)),this.setAttribute("uv",new Ni(x,2));function A(C,y,v,z,L,k,X,O,N,rt,D){const w=k/N,j=X/rt,it=k/2,ut=X/2,gt=O/2,pt=N+1,B=rt+1;let Z=0,Q=0;const bt=new ct;for(let St=0;St<B;St++){const S=St*j-ut;for(let P=0;P<pt;P++){const ot=P*w-it;bt[C]=ot*z,bt[y]=S*L,bt[v]=gt,p.push(bt.x,bt.y,bt.z),bt[C]=0,bt[y]=0,bt[v]=O>0?1:-1,_.push(bt.x,bt.y,bt.z),x.push(P/N),x.push(1-St/rt),Z+=1}}for(let St=0;St<rt;St++)for(let S=0;S<N;S++){const P=b+S+pt*St,ot=b+S+pt*(St+1),ft=b+(S+1)+pt*(St+1),Et=b+(S+1)+pt*St;m.push(P,ot,Et),m.push(ot,ft,Et),Q+=6}h.addGroup(M,Q,D),M+=Q,b+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=As(o[i]);for(const l in r)e[l]=r[l]}return e}function RS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function kx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const CS={clone:As,merge:Nn};var wS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ma extends ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wS,this.fragmentShader=DS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=RS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Hx extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new ct,Vg=new Ve,jg=new Ve;class di extends Hx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=mh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mh*2*Math.atan(Math.tan(Jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-e/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qa.x,qa.y).multiplyScalar(-e/qa.z)}getViewSize(e,i){return this.getViewBounds(e,Vg,jg),i.subVectors(jg,Vg)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,_s=1;class US extends Vn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(xs,_s,e,i);l.layers=this.layers,this.add(l);const c=new di(xs,_s,e,i);c.layers=this.layers,this.add(c);const d=new di(xs,_s,e,i);d.layers=this.layers,this.add(d);const h=new di(xs,_s,e,i);h.layers=this.layers,this.add(h);const m=new di(xs,_s,e,i);m.layers=this.layers,this.add(m);const p=new di(xs,_s,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Cu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,_]=this.children,x=e.getRenderTarget(),b=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(x,b,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Gx extends On{constructor(e=[],i=Ms,r,l,c,d,h,m,p,_){super(e,i,r,l,c,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LS extends Rr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Gx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ho(5,5,5),c=new ma({name:"CubemapFromEquirect",uniforms:As(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:ca});c.uniforms.tEquirect.value=i;const d=new pa(l,c),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=hi),new US(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}class gu extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NS={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],b=_.position.distanceTo(x.position),M=.02,A=.005;p.inputState.pinching&&b>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&b<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(NS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new gu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class OS extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class PS extends On{constructor(e=null,i=1,r=1,l,c,d,h,m,p=ei,_=ei,x,b){super(null,d,h,m,p,_,l,c,x,b),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sd=new ct,BS=new ct,zS=new de;class Sr{constructor(e=new ct(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Sd.subVectors(r,i).cross(BS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Sd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||zS.getNormalMatrix(e),l=this.coplanarPoint(Sd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Nu,FS=new Ve(.5,.5),xu=new ct;class Vx{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,c=new Sr,d=new Sr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Li,r=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],_=c[4],x=c[5],b=c[6],M=c[7],A=c[8],C=c[9],y=c[10],v=c[11],z=c[12],L=c[13],k=c[14],X=c[15];if(l[0].setComponents(p-d,M-_,v-A,X-z).normalize(),l[1].setComponents(p+d,M+_,v+A,X+z).normalize(),l[2].setComponents(p+h,M+x,v+C,X+L).normalize(),l[3].setComponents(p-h,M-x,v-C,X-L).normalize(),r)l[4].setComponents(m,b,y,k).normalize(),l[5].setComponents(p-m,M-b,v-y,X-k).normalize();else if(l[4].setComponents(p-m,M-b,v-y,X-k).normalize(),i===Li)l[5].setComponents(p+m,M+b,v+y,X+k).normalize();else if(i===Cu)l[5].setComponents(m,b,y,k).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);const i=FS.distanceTo(e.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(xu.x=l.normal.x>0?e.max.x:e.min.x,xu.y=l.normal.y>0?e.max.y:e.min.y,xu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(xu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jx extends ko{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xg=new dn,gh=new Px,_u=new Nu,vu=new ct;class IS extends Vn{constructor(e=new Ti,i=new jx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_u.copy(r.boundingSphere),_u.applyMatrix4(l),_u.radius+=c,e.ray.intersectsSphere(_u)===!1)return;Xg.copy(l).invert(),gh.copy(e.ray).applyMatrix4(Xg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,x=r.attributes.position;if(p!==null){const b=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let A=b,C=M;A<C;A++){const y=p.getX(A);vu.fromBufferAttribute(x,y),qg(vu,y,m,l,e,i,this)}}else{const b=Math.max(0,d.start),M=Math.min(x.count,d.start+d.count);for(let A=b,C=M;A<C;A++)vu.fromBufferAttribute(x,A),qg(vu,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function qg(o,e,i,r,l,c,d){const h=gh.distanceSqToPoint(o);if(h<i){const m=new ct;gh.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Xx extends On{constructor(e,i,r=Ar,l,c,d,h=ei,m=ei,p,_=Oo,x=1){if(_!==Oo&&_!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const b={width:e,height:i,depth:x};super(b,l,c,d,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qx extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ou extends Ti{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,x=e/h,b=i/m,M=[],A=[],C=[],y=[];for(let v=0;v<_;v++){const z=v*b-d;for(let L=0;L<p;L++){const k=L*x-c;A.push(k,-z,0),C.push(0,0,1),y.push(L/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<h;z++){const L=z+p*v,k=z+p*(v+1),X=z+1+p*(v+1),O=z+1+p*v;M.push(L,k,O),M.push(k,X,O)}this.setIndex(M),this.setAttribute("position",new Ni(A,3)),this.setAttribute("normal",new Ni(C,3)),this.setAttribute("uv",new Ni(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.width,e.height,e.widthSegments,e.heightSegments)}}class wh extends Ti{constructor(e=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const d=[],h=[],m=[],p=[],_=new ct,x=new ct,b=new ct;for(let M=0;M<=r;M++)for(let A=0;A<=l;A++){const C=A/l*c,y=M/r*Math.PI*2;x.x=(e+i*Math.cos(y))*Math.cos(C),x.y=(e+i*Math.cos(y))*Math.sin(C),x.z=i*Math.sin(y),h.push(x.x,x.y,x.z),_.x=e*Math.cos(C),_.y=e*Math.sin(C),b.subVectors(x,_).normalize(),m.push(b.x,b.y,b.z),p.push(A/l),p.push(M/r)}for(let M=1;M<=r;M++)for(let A=1;A<=l;A++){const C=(l+1)*M+A-1,y=(l+1)*(M-1)+A-1,v=(l+1)*(M-1)+A,z=(l+1)*M+A;d.push(C,y,z),d.push(y,v,z)}this.setIndex(d),this.setAttribute("position",new Ni(h,3)),this.setAttribute("normal",new Ni(m,3)),this.setAttribute("uv",new Ni(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class kS extends ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HS extends ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class GS extends Hx{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class VS extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Wg(o,e,i,r){const l=jS(r);switch(i){case wx:return o*e;case Ux:return o*e/l.components*l.byteLength;case Mh:return o*e/l.components*l.byteLength;case Eh:return o*e*2/l.components*l.byteLength;case Th:return o*e*2/l.components*l.byteLength;case Dx:return o*e*3/l.components*l.byteLength;case Mi:return o*e*4/l.components*l.byteLength;case Ah:return o*e*4/l.components*l.byteLength;case yu:case Mu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Eu:case Tu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gd:case jd:return Math.max(o,16)*Math.max(e,8)/4;case Hd:case Vd:return Math.max(o,8)*Math.max(e,8)/2;case Xd:case qd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Wd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case $d:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case eh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case nh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ih:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ah:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case rh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case sh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case oh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case lh:case uh:case ch:return Math.ceil(o/4)*Math.ceil(e/4)*16;case fh:case dh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case hh:case ph:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jS(o){switch(o){case da:case Tx:return{byteLength:1,components:1};case Lo:case Ax:case Rs:return{byteLength:2,components:1};case Sh:case yh:return{byteLength:2,components:4};case Ar:case bh:case ua:return{byteLength:4,components:1};case Rx:case Cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);function Wx(){let o=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function XS(o){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,x=p.byteLength,b=o.createBuffer();o.bindBuffer(m,b),o.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:b,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,_);else{x.sort((M,A)=>M.start-A.start);let b=0;for(let M=1;M<x.length;M++){const A=x[b],C=x[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++b,x[b]=C)}x.length=b+1;for(let M=0,A=x.length;M<A;M++){const C=x[M];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var qS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ty=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ny=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ay=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ry=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,my=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,by=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ey=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ny=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$y=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$M=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,e3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,g3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,b3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,M3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:qS,alphahash_pars_fragment:WS,alphamap_fragment:YS,alphamap_pars_fragment:ZS,alphatest_fragment:KS,alphatest_pars_fragment:QS,aomap_fragment:JS,aomap_pars_fragment:$S,batching_pars_vertex:ty,batching_vertex:ey,begin_vertex:ny,beginnormal_vertex:iy,bsdfs:ay,iridescence_fragment:ry,bumpmap_pars_fragment:sy,clipping_planes_fragment:oy,clipping_planes_pars_fragment:ly,clipping_planes_pars_vertex:uy,clipping_planes_vertex:cy,color_fragment:fy,color_pars_fragment:dy,color_pars_vertex:hy,color_vertex:py,common:my,cube_uv_reflection_fragment:gy,defaultnormal_vertex:xy,displacementmap_pars_vertex:_y,displacementmap_vertex:vy,emissivemap_fragment:by,emissivemap_pars_fragment:Sy,colorspace_fragment:yy,colorspace_pars_fragment:My,envmap_fragment:Ey,envmap_common_pars_fragment:Ty,envmap_pars_fragment:Ay,envmap_pars_vertex:Ry,envmap_physical_pars_fragment:Fy,envmap_vertex:Cy,fog_vertex:wy,fog_pars_vertex:Dy,fog_fragment:Uy,fog_pars_fragment:Ly,gradientmap_pars_fragment:Ny,lightmap_pars_fragment:Oy,lights_lambert_fragment:Py,lights_lambert_pars_fragment:By,lights_pars_begin:zy,lights_toon_fragment:Iy,lights_toon_pars_fragment:ky,lights_phong_fragment:Hy,lights_phong_pars_fragment:Gy,lights_physical_fragment:Vy,lights_physical_pars_fragment:jy,lights_fragment_begin:Xy,lights_fragment_maps:qy,lights_fragment_end:Wy,logdepthbuf_fragment:Yy,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Qy,map_fragment:Jy,map_pars_fragment:$y,map_particle_fragment:tM,map_particle_pars_fragment:eM,metalnessmap_fragment:nM,metalnessmap_pars_fragment:iM,morphinstance_vertex:aM,morphcolor_vertex:rM,morphnormal_vertex:sM,morphtarget_pars_vertex:oM,morphtarget_vertex:lM,normal_fragment_begin:uM,normal_fragment_maps:cM,normal_pars_fragment:fM,normal_pars_vertex:dM,normal_vertex:hM,normalmap_pars_fragment:pM,clearcoat_normal_fragment_begin:mM,clearcoat_normal_fragment_maps:gM,clearcoat_pars_fragment:xM,iridescence_pars_fragment:_M,opaque_fragment:vM,packing:bM,premultiplied_alpha_fragment:SM,project_vertex:yM,dithering_fragment:MM,dithering_pars_fragment:EM,roughnessmap_fragment:TM,roughnessmap_pars_fragment:AM,shadowmap_pars_fragment:RM,shadowmap_pars_vertex:CM,shadowmap_vertex:wM,shadowmask_pars_fragment:DM,skinbase_vertex:UM,skinning_pars_vertex:LM,skinning_vertex:NM,skinnormal_vertex:OM,specularmap_fragment:PM,specularmap_pars_fragment:BM,tonemapping_fragment:zM,tonemapping_pars_fragment:FM,transmission_fragment:IM,transmission_pars_fragment:kM,uv_pars_fragment:HM,uv_pars_vertex:GM,uv_vertex:VM,worldpos_vertex:jM,background_vert:XM,background_frag:qM,backgroundCube_vert:WM,backgroundCube_frag:YM,cube_vert:ZM,cube_frag:KM,depth_vert:QM,depth_frag:JM,distanceRGBA_vert:$M,distanceRGBA_frag:t3,equirect_vert:e3,equirect_frag:n3,linedashed_vert:i3,linedashed_frag:a3,meshbasic_vert:r3,meshbasic_frag:s3,meshlambert_vert:o3,meshlambert_frag:l3,meshmatcap_vert:u3,meshmatcap_frag:c3,meshnormal_vert:f3,meshnormal_frag:d3,meshphong_vert:h3,meshphong_frag:p3,meshphysical_vert:m3,meshphysical_frag:g3,meshtoon_vert:x3,meshtoon_frag:_3,points_vert:v3,points_frag:b3,shadow_vert:S3,shadow_frag:y3,sprite_vert:M3,sprite_frag:E3},Pt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Ui={basic:{uniforms:Nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ze(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Nn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Nn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ze(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Nn([Pt.points,Pt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Nn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Nn([Pt.common,Pt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Nn([Pt.sprite,Pt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Nn([Pt.common,Pt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Nn([Pt.lights,Pt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Ui.physical={uniforms:Nn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const bu={r:0,b:0,g:0},vr=new ha,T3=new dn;function A3(o,e,i,r,l,c,d){const h=new ze(0);let m=c===!0?0:1,p,_,x=null,b=0,M=null;function A(L){let k=L.isScene===!0?L.background:null;return k&&k.isTexture&&(k=(L.backgroundBlurriness>0?i:e).get(k)),k}function C(L){let k=!1;const X=A(L);X===null?v(h,m):X&&X.isColor&&(v(X,1),k=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||k)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,k){const X=A(k);X&&(X.isCubeTexture||X.mapping===Lu)?(_===void 0&&(_=new pa(new Ho(1,1,1),new ma({name:"BackgroundCubeMaterial",uniforms:As(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,N,rt){this.matrixWorld.copyPosition(rt.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),vr.copy(k.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),_.material.uniforms.envMap.value=X,_.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(T3.makeRotationFromEuler(vr)),_.material.toneMapped=Ue.getTransfer(X.colorSpace)!==Ge,(x!==X||b!==X.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,x=X,b=X.version,M=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new pa(new Ou(2,2),new ma({name:"BackgroundMaterial",uniforms:As(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(X.colorSpace)!==Ge,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(x!==X||b!==X.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=X,b=X.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,k){L.getRGB(bu,kx(o)),r.buffers.color.setClear(bu.r,bu.g,bu.b,k,d)}function z(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,k=1){h.set(L),m=k,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(h,m)},render:C,addToRenderList:y,dispose:z}}function R3(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=b(null);let c=l,d=!1;function h(w,j,it,ut,gt){let pt=!1;const B=x(ut,it,j);c!==B&&(c=B,p(c.object)),pt=M(w,ut,it,gt),pt&&A(w,ut,it,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(pt||d)&&(d=!1,k(w,j,it,ut),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function x(w,j,it){const ut=it.wireframe===!0;let gt=r[w.id];gt===void 0&&(gt={},r[w.id]=gt);let pt=gt[j.id];pt===void 0&&(pt={},gt[j.id]=pt);let B=pt[ut];return B===void 0&&(B=b(m()),pt[ut]=B),B}function b(w){const j=[],it=[],ut=[];for(let gt=0;gt<i;gt++)j[gt]=0,it[gt]=0,ut[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:it,attributeDivisors:ut,object:w,attributes:{},index:null}}function M(w,j,it,ut){const gt=c.attributes,pt=j.attributes;let B=0;const Z=it.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const St=gt[Q];let S=pt[Q];if(S===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(S=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(S=w.instanceColor)),St===void 0||St.attribute!==S||S&&St.data!==S.data)return!0;B++}return c.attributesNum!==B||c.index!==ut}function A(w,j,it,ut){const gt={},pt=j.attributes;let B=0;const Z=it.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let St=pt[Q];St===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(St=w.instanceColor));const S={};S.attribute=St,St&&St.data&&(S.data=St.data),gt[Q]=S,B++}c.attributes=gt,c.attributesNum=B,c.index=ut}function C(){const w=c.newAttributes;for(let j=0,it=w.length;j<it;j++)w[j]=0}function y(w){v(w,0)}function v(w,j){const it=c.newAttributes,ut=c.enabledAttributes,gt=c.attributeDivisors;it[w]=1,ut[w]===0&&(o.enableVertexAttribArray(w),ut[w]=1),gt[w]!==j&&(o.vertexAttribDivisor(w,j),gt[w]=j)}function z(){const w=c.newAttributes,j=c.enabledAttributes;for(let it=0,ut=j.length;it<ut;it++)j[it]!==w[it]&&(o.disableVertexAttribArray(it),j[it]=0)}function L(w,j,it,ut,gt,pt,B){B===!0?o.vertexAttribIPointer(w,j,it,gt,pt):o.vertexAttribPointer(w,j,it,ut,gt,pt)}function k(w,j,it,ut){C();const gt=ut.attributes,pt=it.getAttributes(),B=j.defaultAttributeValues;for(const Z in pt){const Q=pt[Z];if(Q.location>=0){let bt=gt[Z];if(bt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(bt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(bt=w.instanceColor)),bt!==void 0){const St=bt.normalized,S=bt.itemSize,P=e.get(bt);if(P===void 0)continue;const ot=P.buffer,ft=P.type,Et=P.bytesPerElement,W=ft===o.INT||ft===o.UNSIGNED_INT||bt.gpuType===bh;if(bt.isInterleavedBufferAttribute){const et=bt.data,Rt=et.stride,Ut=bt.offset;if(et.isInstancedInterleavedBuffer){for(let Vt=0;Vt<Q.locationSize;Vt++)v(Q.location+Vt,et.meshPerAttribute);w.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Vt=0;Vt<Q.locationSize;Vt++)y(Q.location+Vt);o.bindBuffer(o.ARRAY_BUFFER,ot);for(let Vt=0;Vt<Q.locationSize;Vt++)L(Q.location+Vt,S/Q.locationSize,ft,St,Rt*Et,(Ut+S/Q.locationSize*Vt)*Et,W)}else{if(bt.isInstancedBufferAttribute){for(let et=0;et<Q.locationSize;et++)v(Q.location+et,bt.meshPerAttribute);w.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let et=0;et<Q.locationSize;et++)y(Q.location+et);o.bindBuffer(o.ARRAY_BUFFER,ot);for(let et=0;et<Q.locationSize;et++)L(Q.location+et,S/Q.locationSize,ft,St,S*Et,S/Q.locationSize*et*Et,W)}}else if(B!==void 0){const St=B[Z];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(Q.location,St);break;case 3:o.vertexAttrib3fv(Q.location,St);break;case 4:o.vertexAttrib4fv(Q.location,St);break;default:o.vertexAttrib1fv(Q.location,St)}}}}z()}function X(){rt();for(const w in r){const j=r[w];for(const it in j){const ut=j[it];for(const gt in ut)_(ut[gt].object),delete ut[gt];delete j[it]}delete r[w]}}function O(w){if(r[w.id]===void 0)return;const j=r[w.id];for(const it in j){const ut=j[it];for(const gt in ut)_(ut[gt].object),delete ut[gt];delete j[it]}delete r[w.id]}function N(w){for(const j in r){const it=r[j];if(it[w.id]===void 0)continue;const ut=it[w.id];for(const gt in ut)_(ut[gt].object),delete ut[gt];delete it[w.id]}}function rt(){D(),d=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:rt,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:O,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:y,disableUnusedAttributes:z}}function C3(o,e,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function d(p,_,x){x!==0&&(o.drawArraysInstanced(r,p,_,x),i.update(_,r,x))}function h(p,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,x);let M=0;for(let A=0;A<x;A++)M+=_[A];i.update(M,r,1)}function m(p,_,x,b){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],_[A],b[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,b,0,x);let A=0;for(let C=0;C<x;C++)A+=_[C]*b[C];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function w3(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(N){return!(N!==Mi&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(N){const rt=N===Rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==da&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ua&&!rt)}function m(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(le("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,b=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),k=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=A>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:b,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:k,vertexTextures:X,maxSamples:O}}function D3(o){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Sr,h=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,b){const M=x.length!==0||b||r!==0||l;return l=b,r=x.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,b){i=_(x,b,0)},this.setState=function(x,b,M){const A=x.clippingPlanes,C=x.clipIntersection,y=x.clipShadows,v=o.get(x);if(!l||A===null||A.length===0||c&&!y)c?_(null):p();else{const z=c?0:r,L=z*4;let k=v.clippingState||null;m.value=k,k=_(A,b,L,M);for(let X=0;X!==L;++X)k[X]=i[X];v.clippingState=k,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,b,M,A){const C=x!==null?x.length:0;let y=null;if(C!==0){if(y=m.value,A!==!0||y===null){const v=M+C*4,z=b.matrixWorldInverse;h.getNormalMatrix(z),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,k=M;L!==C;++L,k+=4)d.copy(x[L]).applyMatrix4(z,h),d.normal.toArray(y,k),y[k+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function U3(o){let e=new WeakMap;function i(d,h){return h===zd?d.mapping=Ms:h===Fd&&(d.mapping=Es),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===zd||h===Fd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new LS(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ya=4,Yg=[.125,.215,.35,.446,.526,.582],Mr=20,L3=256,Do=new GS,Zg=new ze;let yd=null,Md=0,Ed=0,Td=!1;const N3=new ct;class Kg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=N3}=c;yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Md,Ed),this._renderer.xr.enabled=Td,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ms||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Rs,format:Mi,colorSpace:Ts,depthBuffer:!1},l=Qg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qg(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=O3(c)),this._blurMaterial=B3(c,e,i)}return l}_compileMaterial(e){const i=new pa(new Ti,e);this._renderer.compile(i,Do)}_sceneToCubeUV(e,i,r,l,c){const m=new di(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,b=x.autoClear,M=x.toneMapping;x.getClearColor(Zg),x.toneMapping=Za,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pa(new Ho,new Ch({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const z=e.background;z?z.isColor&&(y.color.copy(z),e.background=null,v=!0):(y.color.copy(Zg),v=!0);for(let L=0;L<6;L++){const k=L%3;k===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):k===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const X=this._cubeSize;vs(l,k*X,L>2?X:0,X,X),x.setRenderTarget(l),v&&x.render(C,m),x.render(e,m)}x.toneMapping=M,x.autoClear=b,e.background=z}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ms||e.mapping===Es;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=$g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jg());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;vs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Do)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const z=3*Math.max(this._cubeSize,16),L=4*this._cubeSize;this._ggxMaterial=P3(this._lodMax,z,L)}const d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),b=.05+p*.95,M=x*b,{_lodMax:A}=this,C=this._sizeLods[r],y=3*C*(r>A-Ya?r-A+Ya:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=A-i,vs(c,y,v,3*C,2*C),l.setRenderTarget(c),l.render(h,Do),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-r,vs(e,y,v,3*C,2*C),l.setRenderTarget(e),l.render(h,Do)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&an("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const b=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Mr-1),C=c/A,y=isFinite(c)?1+Math.floor(_*C):Mr;y>Mr&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mr}`);const v=[];let z=0;for(let N=0;N<Mr;++N){const rt=N/C,D=Math.exp(-rt*rt/2);v.push(D),N===0?z+=D:N<y&&(z+=2*D)}for(let N=0;N<v.length;N++)v[N]=v[N]/z;b.envMap.value=e.texture,b.samples.value=y,b.weights.value=v,b.latitudinal.value=d==="latitudinal",h&&(b.poleAxis.value=h);const{_lodMax:L}=this;b.dTheta.value=A,b.mipInt.value=L-r;const k=this._sizeLods[l],X=3*k*(l>L-Ya?l-L+Ya:0),O=4*(this._cubeSize-k);vs(i,X,O,3*k,2*k),m.setRenderTarget(i),m.render(x,Do)}}function O3(o){const e=[],i=[],r=[];let l=o;const c=o-Ya+1+Yg.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-Ya?m=Yg[d-o+Ya-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,x=1+p,b=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,A=6,C=3,y=2,v=1,z=new Float32Array(C*A*M),L=new Float32Array(y*A*M),k=new Float32Array(v*A*M);for(let O=0;O<M;O++){const N=O%3*2/3-1,rt=O>2?0:-1,D=[N,rt,0,N+2/3,rt,0,N+2/3,rt+1,0,N,rt,0,N+2/3,rt+1,0,N,rt+1,0];z.set(D,C*A*O),L.set(b,y*A*O);const w=[O,O,O,O,O,O];k.set(w,v*A*O)}const X=new Ti;X.setAttribute("position",new Ei(z,C)),X.setAttribute("uv",new Ei(L,y)),X.setAttribute("faceIndex",new Ei(k,v)),r.push(new pa(X,null)),l>Ya&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Qg(o,e,i){const r=new Rr(o,e,i);return r.texture.mapping=Lu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vs(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function P3(o,e,i){return new ma({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function B3(o,e,i){const r=new Float32Array(Mr),l=new ct(0,1,0);return new ma({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Jg(){return new ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function $g(){return new ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function z3(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===zd||m===Fd,_=m===Ms||m===Es;if(p||_){let x=e.get(h);const b=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==b)return i===null&&(i=new Kg(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Kg(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function F3(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Bo("WebGLRenderer: "+r+" extension not supported."),l}}}function I3(o,e,i,r){const l={},c=new WeakMap;function d(x){const b=x.target;b.index!==null&&e.remove(b.index);for(const A in b.attributes)e.remove(b.attributes[A]);b.removeEventListener("dispose",d),delete l[b.id];const M=c.get(b);M&&(e.remove(M),c.delete(b)),r.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,i.memory.geometries--}function h(x,b){return l[b.id]===!0||(b.addEventListener("dispose",d),l[b.id]=!0,i.memory.geometries++),b}function m(x){const b=x.attributes;for(const M in b)e.update(b[M],o.ARRAY_BUFFER)}function p(x){const b=[],M=x.index,A=x.attributes.position;let C=0;if(M!==null){const z=M.array;C=M.version;for(let L=0,k=z.length;L<k;L+=3){const X=z[L+0],O=z[L+1],N=z[L+2];b.push(X,O,O,N,N,X)}}else if(A!==void 0){const z=A.array;C=A.version;for(let L=0,k=z.length/3-1;L<k;L+=3){const X=L+0,O=L+1,N=L+2;b.push(X,O,O,N,N,X)}}else return;const y=new(Nx(b)?Ix:Fx)(b,1);y.version=C;const v=c.get(x);v&&e.remove(v),c.set(x,y)}function _(x){const b=c.get(x);if(b){const M=x.index;M!==null&&b.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:_}}function k3(o,e,i){let r;function l(b){r=b}let c,d;function h(b){c=b.type,d=b.bytesPerElement}function m(b,M){o.drawElements(r,M,c,b*d),i.update(M,r,1)}function p(b,M,A){A!==0&&(o.drawElementsInstanced(r,M,c,b*d,A),i.update(M,r,A))}function _(b,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,b,0,A);let y=0;for(let v=0;v<A;v++)y+=M[v];i.update(y,r,1)}function x(b,M,A,C){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<b.length;v++)p(b[v]/d,M[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,b,0,C,0,A);let v=0;for(let z=0;z<A;z++)v+=M[z]*C[z];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function H3(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:an("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function G3(o,e,i){const r=new WeakMap,l=new rn;function c(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let b=r.get(h);if(b===void 0||b.count!==x){let w=function(){rt.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var M=w;b!==void 0&&b.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let k=0;A===!0&&(k=1),C===!0&&(k=2),y===!0&&(k=3);let X=h.attributes.position.count*k,O=1;X>e.maxTextureSize&&(O=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const N=new Float32Array(X*O*4*x),rt=new Ox(N,X,O,x);rt.type=ua,rt.needsUpdate=!0;const D=k*4;for(let j=0;j<x;j++){const it=v[j],ut=z[j],gt=L[j],pt=X*O*4*j;for(let B=0;B<it.count;B++){const Z=B*D;A===!0&&(l.fromBufferAttribute(it,B),N[pt+Z+0]=l.x,N[pt+Z+1]=l.y,N[pt+Z+2]=l.z,N[pt+Z+3]=0),C===!0&&(l.fromBufferAttribute(ut,B),N[pt+Z+4]=l.x,N[pt+Z+5]=l.y,N[pt+Z+6]=l.z,N[pt+Z+7]=0),y===!0&&(l.fromBufferAttribute(gt,B),N[pt+Z+8]=l.x,N[pt+Z+9]=l.y,N[pt+Z+10]=l.z,N[pt+Z+11]=gt.itemSize===4?l.w:1)}}b={count:x,texture:rt,size:new Ve(X,O)},r.set(h,b),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",b.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",b.size)}return{update:c}}function V3(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,x=e.get(m,_);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const b=m.skeleton;l.get(b)!==p&&(b.update(),l.set(b,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const Yx=new On,tx=new Xx(1,1),Zx=new Ox,Kx=new mS,Qx=new Gx,ex=[],nx=[],ix=new Float32Array(16),ax=new Float32Array(9),rx=new Float32Array(4);function ws(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=ex[l];if(c===void 0&&(c=new Float32Array(l),ex[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function xn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Bu(o,e){let i=nx[e];i===void 0&&(i=new Int32Array(e),nx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function j3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function X3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),xn(i,e)}}function q3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),xn(i,e)}}function W3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),xn(i,e)}}function Y3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(gn(i,r))return;rx.set(r),o.uniformMatrix2fv(this.addr,!1,rx),xn(i,r)}}function Z3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(gn(i,r))return;ax.set(r),o.uniformMatrix3fv(this.addr,!1,ax),xn(i,r)}}function K3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(gn(i,r))return;ix.set(r),o.uniformMatrix4fv(this.addr,!1,ix),xn(i,r)}}function Q3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function J3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),xn(i,e)}}function $3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),xn(i,e)}}function t1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),xn(i,e)}}function e1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function n1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),xn(i,e)}}function i1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),xn(i,e)}}function a1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),xn(i,e)}}function r1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(tx.compareFunction=Lx,c=tx):c=Yx,i.setTexture2D(e||c,l)}function s1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Kx,l)}function o1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Qx,l)}function l1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Zx,l)}function u1(o){switch(o){case 5126:return j3;case 35664:return X3;case 35665:return q3;case 35666:return W3;case 35674:return Y3;case 35675:return Z3;case 35676:return K3;case 5124:case 35670:return Q3;case 35667:case 35671:return J3;case 35668:case 35672:return $3;case 35669:case 35673:return t1;case 5125:return e1;case 36294:return n1;case 36295:return i1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return l1}}function c1(o,e){o.uniform1fv(this.addr,e)}function f1(o,e){const i=ws(e,this.size,2);o.uniform2fv(this.addr,i)}function d1(o,e){const i=ws(e,this.size,3);o.uniform3fv(this.addr,i)}function h1(o,e){const i=ws(e,this.size,4);o.uniform4fv(this.addr,i)}function p1(o,e){const i=ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function m1(o,e){const i=ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function g1(o,e){const i=ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function x1(o,e){o.uniform1iv(this.addr,e)}function _1(o,e){o.uniform2iv(this.addr,e)}function v1(o,e){o.uniform3iv(this.addr,e)}function b1(o,e){o.uniform4iv(this.addr,e)}function S1(o,e){o.uniform1uiv(this.addr,e)}function y1(o,e){o.uniform2uiv(this.addr,e)}function M1(o,e){o.uniform3uiv(this.addr,e)}function E1(o,e){o.uniform4uiv(this.addr,e)}function T1(o,e,i){const r=this.cache,l=e.length,c=Bu(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Yx,c[d])}function A1(o,e,i){const r=this.cache,l=e.length,c=Bu(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Kx,c[d])}function R1(o,e,i){const r=this.cache,l=e.length,c=Bu(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Qx,c[d])}function C1(o,e,i){const r=this.cache,l=e.length,c=Bu(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Zx,c[d])}function w1(o){switch(o){case 5126:return c1;case 35664:return f1;case 35665:return d1;case 35666:return h1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return x1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return b1;case 5125:return S1;case 36294:return y1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return C1}}class D1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=u1(i.type)}}class U1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=w1(i.type)}}class L1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function sx(o,e){o.seq.push(e),o.map[e.id]=e}function N1(o,e,i){const r=o.name,l=r.length;for(Ad.lastIndex=0;;){const c=Ad.exec(r),d=Ad.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){sx(i,p===void 0?new D1(h,o,e):new U1(h,o,e));break}else{let x=i.map[h];x===void 0&&(x=new L1(h),sx(i,x)),i=x}}}class Au{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);N1(c,d,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function ox(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const O1=37297;let P1=0;function B1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const lx=new de;function z1(o){Ue._getMatrix(lx,Ue.workingColorSpace,o);const e=`mat3( ${lx.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case Ru:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function ux(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+B1(o.getShaderSource(e),h)}else return c}function F1(o,e){const i=z1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function I1(o,e){let i;switch(e){case Gb:i="Linear";break;case Vb:i="Reinhard";break;case jb:i="Cineon";break;case Xb:i="ACESFilmic";break;case Wb:i="AgX";break;case Yb:i="Neutral";break;case qb:i="Custom";break;default:le("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Su=new ct;function k1(){Ue.getLuminanceCoefficients(Su);const o=Su.x.toFixed(4),e=Su.y.toFixed(4),i=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function G1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function V1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Uo(o){return o!==""}function cx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(o){return o.replace(j1,q1)}const X1=new Map;function q1(o,e){let i=me[e];if(i===void 0){const r=X1.get(e);if(r!==void 0)i=me[r],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return xh(i)}const W1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dx(o){return o.replace(W1,Y1)}function Y1(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function hx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===yx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Sb?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===sa&&(e="SHADOWMAP_TYPE_VSM"),e}function K1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ms:case Es:e="ENVMAP_TYPE_CUBE";break;case Lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function J1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Mx:e="ENVMAP_BLENDING_MULTIPLY";break;case kb:e="ENVMAP_BLENDING_MIX";break;case Hb:e="ENVMAP_BLENDING_ADD";break}return e}function $1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function tE(o,e,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=Z1(i),p=K1(i),_=Q1(i),x=J1(i),b=$1(i),M=H1(i),A=G1(c),C=l.createProgram();let y,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Uo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Uo).join(`
`),v.length>0&&(v+=`
`)):(y=[hx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),v=[hx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?me.tonemapping_pars_fragment:"",i.toneMapping!==Za?I1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,F1("linearToOutputTexel",i.outputColorSpace),k1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),d=xh(d),d=cx(d,i),d=fx(d,i),h=xh(h),h=cx(h,i),h=fx(h,i),d=dx(d),h=dx(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===Ag?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ag?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=z+y+d,k=z+v+h,X=ox(l,l.VERTEX_SHADER,L),O=ox(l,l.FRAGMENT_SHADER,k);l.attachShader(C,X),l.attachShader(C,O),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function N(j){if(o.debug.checkShaderErrors){const it=l.getProgramInfoLog(C)||"",ut=l.getShaderInfoLog(X)||"",gt=l.getShaderInfoLog(O)||"",pt=it.trim(),B=ut.trim(),Z=gt.trim();let Q=!0,bt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,X,O);else{const St=ux(l,X,"vertex"),S=ux(l,O,"fragment");an("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+pt+`
`+St+`
`+S)}else pt!==""?le("WebGLProgram: Program Info Log:",pt):(B===""||Z==="")&&(bt=!1);bt&&(j.diagnostics={runnable:Q,programLog:pt,vertexShader:{log:B,prefix:y},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(X),l.deleteShader(O),rt=new Au(l,C),D=V1(l,C)}let rt;this.getUniforms=function(){return rt===void 0&&N(this),rt};let D;this.getAttributes=function(){return D===void 0&&N(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,O1)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=P1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=O,this}let eE=0;class nE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new iE(e),i.set(e,r)),r}}class iE{constructor(e){this.id=eE++,this.code=e,this.usedTimes=0}}function aE(o,e,i,r,l,c,d){const h=new Bx,m=new nE,p=new Set,_=[],x=l.logarithmicDepthBuffer,b=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,w,j,it,ut){const gt=it.fog,pt=ut.geometry,B=D.isMeshStandardMaterial?it.environment:null,Z=(D.isMeshStandardMaterial?i:e).get(D.envMap||B),Q=Z&&Z.mapping===Lu?Z.image.height:null,bt=A[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&le("WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const St=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,S=St!==void 0?St.length:0;let P=0;pt.morphAttributes.position!==void 0&&(P=1),pt.morphAttributes.normal!==void 0&&(P=2),pt.morphAttributes.color!==void 0&&(P=3);let ot,ft,Et,W;if(bt){const Re=Ui[bt];ot=Re.vertexShader,ft=Re.fragmentShader}else ot=D.vertexShader,ft=D.fragmentShader,m.update(D),Et=m.getVertexShaderID(D),W=m.getFragmentShaderID(D);const et=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),Ut=ut.isInstancedMesh===!0,Vt=ut.isBatchedMesh===!0,ue=!!D.map,tn=!!D.matcap,he=!!Z,Ae=!!D.aoMap,H=!!D.lightMap,pe=!!D.bumpMap,ge=!!D.normalMap,Oe=!!D.displacementMap,Ht=!!D.emissiveMap,je=!!D.metalnessMap,Yt=!!D.roughnessMap,ae=D.anisotropy>0,U=D.clearcoat>0,E=D.dispersion>0,$=D.iridescence>0,xt=D.sheen>0,yt=D.transmission>0,dt=ae&&!!D.anisotropyMap,qt=U&&!!D.clearcoatMap,Ot=U&&!!D.clearcoatNormalMap,Qt=U&&!!D.clearcoatRoughnessMap,Xt=$&&!!D.iridescenceMap,Mt=$&&!!D.iridescenceThicknessMap,At=xt&&!!D.sheenColorMap,Wt=xt&&!!D.sheenRoughnessMap,Gt=!!D.specularMap,Bt=!!D.specularColorMap,ne=!!D.specularIntensityMap,G=yt&&!!D.transmissionMap,Lt=yt&&!!D.thicknessMap,wt=!!D.gradientMap,Dt=!!D.alphaMap,Tt=D.alphaTest>0,vt=!!D.alphaHash,Ft=!!D.extensions;let ie=Za;D.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Fe={shaderID:bt,shaderType:D.type,shaderName:D.name,vertexShader:ot,fragmentShader:ft,defines:D.defines,customVertexShaderID:Et,customFragmentShaderID:W,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Vt,batchingColor:Vt&&ut._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&ut.instanceColor!==null,instancingMorph:Ut&&ut.morphTexture!==null,supportsVertexTextures:b,outputColorSpace:et===null?o.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ts,alphaToCoverage:!!D.alphaToCoverage,map:ue,matcap:tn,envMap:he,envMapMode:he&&Z.mapping,envMapCubeUVHeight:Q,aoMap:Ae,lightMap:H,bumpMap:pe,normalMap:ge,displacementMap:b&&Oe,emissiveMap:Ht,normalMapObjectSpace:ge&&D.normalMapType===$b,normalMapTangentSpace:ge&&D.normalMapType===Jb,metalnessMap:je,roughnessMap:Yt,anisotropy:ae,anisotropyMap:dt,clearcoat:U,clearcoatMap:qt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:Qt,dispersion:E,iridescence:$,iridescenceMap:Xt,iridescenceThicknessMap:Mt,sheen:xt,sheenColorMap:At,sheenRoughnessMap:Wt,specularMap:Gt,specularColorMap:Bt,specularIntensityMap:ne,transmission:yt,transmissionMap:G,thicknessMap:Lt,gradientMap:wt,opaque:D.transparent===!1&&D.blending===bs&&D.alphaToCoverage===!1,alphaMap:Dt,alphaTest:Tt,alphaHash:vt,combine:D.combine,mapUv:ue&&C(D.map.channel),aoMapUv:Ae&&C(D.aoMap.channel),lightMapUv:H&&C(D.lightMap.channel),bumpMapUv:pe&&C(D.bumpMap.channel),normalMapUv:ge&&C(D.normalMap.channel),displacementMapUv:Oe&&C(D.displacementMap.channel),emissiveMapUv:Ht&&C(D.emissiveMap.channel),metalnessMapUv:je&&C(D.metalnessMap.channel),roughnessMapUv:Yt&&C(D.roughnessMap.channel),anisotropyMapUv:dt&&C(D.anisotropyMap.channel),clearcoatMapUv:qt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:At&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&C(D.sheenRoughnessMap.channel),specularMapUv:Gt&&C(D.specularMap.channel),specularColorMapUv:Bt&&C(D.specularColorMap.channel),specularIntensityMapUv:ne&&C(D.specularIntensityMap.channel),transmissionMapUv:G&&C(D.transmissionMap.channel),thicknessMapUv:Lt&&C(D.thicknessMap.channel),alphaMapUv:Dt&&C(D.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(ge||ae),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!pt.attributes.uv&&(ue||Dt),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Rt,skinning:ut.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:S,morphTextureStride:P,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:ue&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ht&&D.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===oa,flipSided:D.side===Gn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ft&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&D.extensions.multiDraw===!0||Vt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const j in D.defines)w.push(j),w.push(D.defines[j]);return D.isRawShaderMaterial===!1&&(z(w,D),L(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function z(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function L(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function k(D){const w=A[D.type];let j;if(w){const it=Ui[w];j=CS.clone(it.uniforms)}else j=D.uniforms;return j}function X(D,w){let j;for(let it=0,ut=_.length;it<ut;it++){const gt=_[it];if(gt.cacheKey===w){j=gt,++j.usedTimes;break}}return j===void 0&&(j=new tE(o,w,D,c),_.push(j)),j}function O(D){if(--D.usedTimes===0){const w=_.indexOf(D);_[w]=_[_.length-1],_.pop(),D.destroy()}}function N(D){m.remove(D)}function rt(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:k,acquireProgram:X,releaseProgram:O,releaseShaderCache:N,programs:_,dispose:rt}}function rE(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function sE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function px(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function mx(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(x,b,M,A,C,y){let v=o[e];return v===void 0?(v={id:x.id,object:x,geometry:b,material:M,groupOrder:A,renderOrder:x.renderOrder,z:C,group:y},o[e]=v):(v.id=x.id,v.object=x,v.geometry=b,v.material=M,v.groupOrder=A,v.renderOrder=x.renderOrder,v.z=C,v.group=y),e++,v}function h(x,b,M,A,C,y){const v=d(x,b,M,A,C,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(x,b,M,A,C,y){const v=d(x,b,M,A,C,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,b){i.length>1&&i.sort(x||sE),r.length>1&&r.sort(b||px),l.length>1&&l.sort(b||px)}function _(){for(let x=e,b=o.length;x<b;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function oE(){let o=new WeakMap;function e(r,l){const c=o.get(r);let d;return c===void 0?(d=new mx,o.set(r,[d])):l>=c.length?(d=new mx,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function lE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ct,color:new ze};break;case"SpotLight":i={position:new ct,direction:new ct,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ct,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ct,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return o[e.id]=i,i}}}function uE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let cE=0;function fE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function dE(o){const e=new lE,i=uE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ct);const l=new ct,c=new dn,d=new dn;function h(p){let _=0,x=0,b=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,A=0,C=0,y=0,v=0,z=0,L=0,k=0,X=0,O=0,N=0;p.sort(fE);for(let D=0,w=p.length;D<w;D++){const j=p[D],it=j.color,ut=j.intensity,gt=j.distance,pt=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)_+=it.r*ut,x+=it.g*ut,b+=it.b*ut;else if(j.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(j.sh.coefficients[B],ut);N++}else if(j.isDirectionalLight){const B=e.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Z=j.shadow,Q=i.get(j);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,r.directionalShadow[M]=Q,r.directionalShadowMap[M]=pt,r.directionalShadowMatrix[M]=j.shadow.matrix,z++}r.directional[M]=B,M++}else if(j.isSpotLight){const B=e.get(j);B.position.setFromMatrixPosition(j.matrixWorld),B.color.copy(it).multiplyScalar(ut),B.distance=gt,B.coneCos=Math.cos(j.angle),B.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),B.decay=j.decay,r.spot[C]=B;const Z=j.shadow;if(j.map&&(r.spotLightMap[X]=j.map,X++,Z.updateMatrices(j),j.castShadow&&O++),r.spotLightMatrix[C]=Z.matrix,j.castShadow){const Q=i.get(j);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,r.spotShadow[C]=Q,r.spotShadowMap[C]=pt,k++}C++}else if(j.isRectAreaLight){const B=e.get(j);B.color.copy(it).multiplyScalar(ut),B.halfWidth.set(j.width*.5,0,0),B.halfHeight.set(0,j.height*.5,0),r.rectArea[y]=B,y++}else if(j.isPointLight){const B=e.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),B.distance=j.distance,B.decay=j.decay,j.castShadow){const Z=j.shadow,Q=i.get(j);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,r.pointShadow[A]=Q,r.pointShadowMap[A]=pt,r.pointShadowMatrix[A]=j.shadow.matrix,L++}r.point[A]=B,A++}else if(j.isHemisphereLight){const B=e.get(j);B.skyColor.copy(j.color).multiplyScalar(ut),B.groundColor.copy(j.groundColor).multiplyScalar(ut),r.hemi[v]=B,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=b;const rt=r.hash;(rt.directionalLength!==M||rt.pointLength!==A||rt.spotLength!==C||rt.rectAreaLength!==y||rt.hemiLength!==v||rt.numDirectionalShadows!==z||rt.numPointShadows!==L||rt.numSpotShadows!==k||rt.numSpotMaps!==X||rt.numLightProbes!==N)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=k,r.spotShadowMap.length=k,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=k+X-O,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=N,rt.directionalLength=M,rt.pointLength=A,rt.spotLength=C,rt.rectAreaLength=y,rt.hemiLength=v,rt.numDirectionalShadows=z,rt.numPointShadows=L,rt.numSpotShadows=k,rt.numSpotMaps=X,rt.numLightProbes=N,r.version=cE++)}function m(p,_){let x=0,b=0,M=0,A=0,C=0;const y=_.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const L=p[v];if(L.isDirectionalLight){const k=r.directional[x];k.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),k.direction.sub(l),k.direction.transformDirection(y),x++}else if(L.isSpotLight){const k=r.spot[M];k.position.setFromMatrixPosition(L.matrixWorld),k.position.applyMatrix4(y),k.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),k.direction.sub(l),k.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const k=r.rectArea[A];k.position.setFromMatrixPosition(L.matrixWorld),k.position.applyMatrix4(y),d.identity(),c.copy(L.matrixWorld),c.premultiply(y),d.extractRotation(c),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),k.halfWidth.applyMatrix4(d),k.halfHeight.applyMatrix4(d),A++}else if(L.isPointLight){const k=r.point[b];k.position.setFromMatrixPosition(L.matrixWorld),k.position.applyMatrix4(y),b++}else if(L.isHemisphereLight){const k=r.hemi[C];k.direction.setFromMatrixPosition(L.matrixWorld),k.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:r}}function gx(o){const e=new dE(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function d(_){r.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function hE(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new gx(o),e.set(l,[h])):c>=d.length?(h=new gx(o),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const pE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gE(o,e,i){let r=new Vx;const l=new Ve,c=new Ve,d=new rn,h=new kS({depthPacking:Qb}),m=new HS,p={},_=i.maxTextureSize,x={[Ka]:Gn,[Gn]:Ka,[oa]:oa},b=new ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:pE,fragmentShader:mE}),M=b.clone();M.defines.HORIZONTAL_PASS=1;const A=new Ti;A.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new pa(A,b),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yx;let v=this.type;this.render=function(O,N,rt){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),it=o.state;it.setBlending(ca),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const ut=v!==sa&&this.type===sa,gt=v===sa&&this.type!==sa;for(let pt=0,B=O.length;pt<B;pt++){const Z=O[pt],Q=Z.shadow;if(Q===void 0){le("WebGLShadowMap:",Z,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const bt=Q.getFrameExtents();if(l.multiply(bt),c.copy(Q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/bt.x),l.x=c.x*bt.x,Q.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/bt.y),l.y=c.y*bt.y,Q.mapSize.y=c.y)),Q.map===null||ut===!0||gt===!0){const S=this.type!==sa?{minFilter:ei,magFilter:ei}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Rr(l.x,l.y,S),Q.map.texture.name=Z.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const St=Q.getViewportCount();for(let S=0;S<St;S++){const P=Q.getViewport(S);d.set(c.x*P.x,c.y*P.y,c.x*P.z,c.y*P.w),it.viewport(d),Q.updateMatrices(Z,S),r=Q.getFrustum(),k(N,rt,Q.camera,Z,this.type)}Q.isPointLightShadow!==!0&&this.type===sa&&z(Q,rt),Q.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(D,w,j)};function z(O,N){const rt=e.update(C);b.defines.VSM_SAMPLES!==O.blurSamples&&(b.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,b.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Rr(l.x,l.y)),b.uniforms.shadow_pass.value=O.map.texture,b.uniforms.resolution.value=O.mapSize,b.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(N,null,rt,b,C,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(N,null,rt,M,C,null)}function L(O,N,rt,D){let w=null;const j=rt.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(j!==void 0)w=j;else if(w=rt.isPointLight===!0?m:h,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const it=w.uuid,ut=N.uuid;let gt=p[it];gt===void 0&&(gt={},p[it]=gt);let pt=gt[ut];pt===void 0&&(pt=w.clone(),gt[ut]=pt,N.addEventListener("dispose",X)),w=pt}if(w.visible=N.visible,w.wireframe=N.wireframe,D===sa?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:x[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,rt.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const it=o.properties.get(w);it.light=rt}return w}function k(O,N,rt,D,w){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===sa)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,O.matrixWorld);const ut=e.update(O),gt=O.material;if(Array.isArray(gt)){const pt=ut.groups;for(let B=0,Z=pt.length;B<Z;B++){const Q=pt[B],bt=gt[Q.materialIndex];if(bt&&bt.visible){const St=L(O,bt,D,w);O.onBeforeShadow(o,O,N,rt,ut,St,Q),o.renderBufferDirect(rt,null,ut,St,O,Q),O.onAfterShadow(o,O,N,rt,ut,St,Q)}}}else if(gt.visible){const pt=L(O,gt,D,w);O.onBeforeShadow(o,O,N,rt,ut,pt,null),o.renderBufferDirect(rt,null,ut,pt,O,null),O.onAfterShadow(o,O,N,rt,ut,pt,null)}}const it=O.children;for(let ut=0,gt=it.length;ut<gt;ut++)k(it[ut],N,rt,D,w)}function X(O){O.target.removeEventListener("dispose",X);for(const rt in p){const D=p[rt],w=O.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const xE={[Dd]:Ud,[Ld]:Pd,[Nd]:Bd,[ys]:Od,[Ud]:Dd,[Pd]:Ld,[Bd]:Nd,[Od]:ys};function _E(o,e){function i(){let G=!1;const Lt=new rn;let wt=null;const Dt=new rn(0,0,0,0);return{setMask:function(Tt){wt!==Tt&&!G&&(o.colorMask(Tt,Tt,Tt,Tt),wt=Tt)},setLocked:function(Tt){G=Tt},setClear:function(Tt,vt,Ft,ie,Fe){Fe===!0&&(Tt*=ie,vt*=ie,Ft*=ie),Lt.set(Tt,vt,Ft,ie),Dt.equals(Lt)===!1&&(o.clearColor(Tt,vt,Ft,ie),Dt.copy(Lt))},reset:function(){G=!1,wt=null,Dt.set(-1,0,0,0)}}}function r(){let G=!1,Lt=!1,wt=null,Dt=null,Tt=null;return{setReversed:function(vt){if(Lt!==vt){const Ft=e.get("EXT_clip_control");vt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Lt=vt;const ie=Tt;Tt=null,this.setClear(ie)}},getReversed:function(){return Lt},setTest:function(vt){vt?et(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(vt){wt!==vt&&!G&&(o.depthMask(vt),wt=vt)},setFunc:function(vt){if(Lt&&(vt=xE[vt]),Dt!==vt){switch(vt){case Dd:o.depthFunc(o.NEVER);break;case Ud:o.depthFunc(o.ALWAYS);break;case Ld:o.depthFunc(o.LESS);break;case ys:o.depthFunc(o.LEQUAL);break;case Nd:o.depthFunc(o.EQUAL);break;case Od:o.depthFunc(o.GEQUAL);break;case Pd:o.depthFunc(o.GREATER);break;case Bd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Dt=vt}},setLocked:function(vt){G=vt},setClear:function(vt){Tt!==vt&&(Lt&&(vt=1-vt),o.clearDepth(vt),Tt=vt)},reset:function(){G=!1,wt=null,Dt=null,Tt=null,Lt=!1}}}function l(){let G=!1,Lt=null,wt=null,Dt=null,Tt=null,vt=null,Ft=null,ie=null,Fe=null;return{setTest:function(Re){G||(Re?et(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Re){Lt!==Re&&!G&&(o.stencilMask(Re),Lt=Re)},setFunc:function(Re,Cn,jn){(wt!==Re||Dt!==Cn||Tt!==jn)&&(o.stencilFunc(Re,Cn,jn),wt=Re,Dt=Cn,Tt=jn)},setOp:function(Re,Cn,jn){(vt!==Re||Ft!==Cn||ie!==jn)&&(o.stencilOp(Re,Cn,jn),vt=Re,Ft=Cn,ie=jn)},setLocked:function(Re){G=Re},setClear:function(Re){Fe!==Re&&(o.clearStencil(Re),Fe=Re)},reset:function(){G=!1,Lt=null,wt=null,Dt=null,Tt=null,vt=null,Ft=null,ie=null,Fe=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},x={},b=new WeakMap,M=[],A=null,C=!1,y=null,v=null,z=null,L=null,k=null,X=null,O=null,N=new ze(0,0,0),rt=0,D=!1,w=null,j=null,it=null,ut=null,gt=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=Z>=2);let bt=null,St={};const S=o.getParameter(o.SCISSOR_BOX),P=o.getParameter(o.VIEWPORT),ot=new rn().fromArray(S),ft=new rn().fromArray(P);function Et(G,Lt,wt,Dt){const Tt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(G,vt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<wt;Ft++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,Dt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(Lt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return vt}const W={};W[o.TEXTURE_2D]=Et(o.TEXTURE_2D,o.TEXTURE_2D,1),W[o.TEXTURE_CUBE_MAP]=Et(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[o.TEXTURE_2D_ARRAY]=Et(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),W[o.TEXTURE_3D]=Et(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),et(o.DEPTH_TEST),d.setFunc(ys),pe(!1),ge(bg),et(o.CULL_FACE),Ae(ca);function et(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function Rt(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function Ut(G,Lt){return x[G]!==Lt?(o.bindFramebuffer(G,Lt),x[G]=Lt,G===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Lt),G===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Vt(G,Lt){let wt=M,Dt=!1;if(G){wt=b.get(Lt),wt===void 0&&(wt=[],b.set(Lt,wt));const Tt=G.textures;if(wt.length!==Tt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Ft=Tt.length;vt<Ft;vt++)wt[vt]=o.COLOR_ATTACHMENT0+vt;wt.length=Tt.length,Dt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Dt=!0);Dt&&o.drawBuffers(wt)}function ue(G){return A!==G?(o.useProgram(G),A=G,!0):!1}const tn={[yr]:o.FUNC_ADD,[Mb]:o.FUNC_SUBTRACT,[Eb]:o.FUNC_REVERSE_SUBTRACT};tn[Tb]=o.MIN,tn[Ab]=o.MAX;const he={[Rb]:o.ZERO,[Cb]:o.ONE,[wb]:o.SRC_COLOR,[Cd]:o.SRC_ALPHA,[Pb]:o.SRC_ALPHA_SATURATE,[Nb]:o.DST_COLOR,[Ub]:o.DST_ALPHA,[Db]:o.ONE_MINUS_SRC_COLOR,[wd]:o.ONE_MINUS_SRC_ALPHA,[Ob]:o.ONE_MINUS_DST_COLOR,[Lb]:o.ONE_MINUS_DST_ALPHA,[Bb]:o.CONSTANT_COLOR,[zb]:o.ONE_MINUS_CONSTANT_COLOR,[Fb]:o.CONSTANT_ALPHA,[Ib]:o.ONE_MINUS_CONSTANT_ALPHA};function Ae(G,Lt,wt,Dt,Tt,vt,Ft,ie,Fe,Re){if(G===ca){C===!0&&(Rt(o.BLEND),C=!1);return}if(C===!1&&(et(o.BLEND),C=!0),G!==yb){if(G!==y||Re!==D){if((v!==yr||k!==yr)&&(o.blendEquation(o.FUNC_ADD),v=yr,k=yr),Re)switch(G){case bs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Sg:o.blendFunc(o.ONE,o.ONE);break;case yg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:an("WebGLState: Invalid blending: ",G);break}else switch(G){case bs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Sg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case yg:an("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mg:an("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:an("WebGLState: Invalid blending: ",G);break}z=null,L=null,X=null,O=null,N.set(0,0,0),rt=0,y=G,D=Re}return}Tt=Tt||Lt,vt=vt||wt,Ft=Ft||Dt,(Lt!==v||Tt!==k)&&(o.blendEquationSeparate(tn[Lt],tn[Tt]),v=Lt,k=Tt),(wt!==z||Dt!==L||vt!==X||Ft!==O)&&(o.blendFuncSeparate(he[wt],he[Dt],he[vt],he[Ft]),z=wt,L=Dt,X=vt,O=Ft),(ie.equals(N)===!1||Fe!==rt)&&(o.blendColor(ie.r,ie.g,ie.b,Fe),N.copy(ie),rt=Fe),y=G,D=!1}function H(G,Lt){G.side===oa?Rt(o.CULL_FACE):et(o.CULL_FACE);let wt=G.side===Gn;Lt&&(wt=!wt),pe(wt),G.blending===bs&&G.transparent===!1?Ae(ca):Ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),c.setMask(G.colorWrite);const Dt=G.stencilWrite;h.setTest(Dt),Dt&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ht(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?et(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function pe(G){w!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),w=G)}function ge(G){G!==vb?(et(o.CULL_FACE),G!==j&&(G===bg?o.cullFace(o.BACK):G===bb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),j=G}function Oe(G){G!==it&&(B&&o.lineWidth(G),it=G)}function Ht(G,Lt,wt){G?(et(o.POLYGON_OFFSET_FILL),(ut!==Lt||gt!==wt)&&(o.polygonOffset(Lt,wt),ut=Lt,gt=wt)):Rt(o.POLYGON_OFFSET_FILL)}function je(G){G?et(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function Yt(G){G===void 0&&(G=o.TEXTURE0+pt-1),bt!==G&&(o.activeTexture(G),bt=G)}function ae(G,Lt,wt){wt===void 0&&(bt===null?wt=o.TEXTURE0+pt-1:wt=bt);let Dt=St[wt];Dt===void 0&&(Dt={type:void 0,texture:void 0},St[wt]=Dt),(Dt.type!==G||Dt.texture!==Lt)&&(bt!==wt&&(o.activeTexture(wt),bt=wt),o.bindTexture(G,Lt||W[G]),Dt.type=G,Dt.texture=Lt)}function U(){const G=St[bt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function xt(){try{o.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function yt(){try{o.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ot(){try{o.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Qt(){try{o.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Xt(){try{o.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Mt(){try{o.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function At(G){ot.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),ot.copy(G))}function Wt(G){ft.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),ft.copy(G))}function Gt(G,Lt){let wt=p.get(Lt);wt===void 0&&(wt=new WeakMap,p.set(Lt,wt));let Dt=wt.get(G);Dt===void 0&&(Dt=o.getUniformBlockIndex(Lt,G.name),wt.set(G,Dt))}function Bt(G,Lt){const Dt=p.get(Lt).get(G);m.get(Lt)!==Dt&&(o.uniformBlockBinding(Lt,Dt,G.__bindingPointIndex),m.set(Lt,Dt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},bt=null,St={},x={},b=new WeakMap,M=[],A=null,C=!1,y=null,v=null,z=null,L=null,k=null,X=null,O=null,N=new ze(0,0,0),rt=0,D=!1,w=null,j=null,it=null,ut=null,gt=null,ot.set(0,0,o.canvas.width,o.canvas.height),ft.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:et,disable:Rt,bindFramebuffer:Ut,drawBuffers:Vt,useProgram:ue,setBlending:Ae,setMaterial:H,setFlipSided:pe,setCullFace:ge,setLineWidth:Oe,setPolygonOffset:Ht,setScissorTest:je,activeTexture:Yt,bindTexture:ae,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:Xt,texImage3D:Mt,updateUBOMapping:Gt,uniformBlockBinding:Bt,texStorage2D:Ot,texStorage3D:Qt,texSubImage2D:xt,texSubImage3D:yt,compressedTexSubImage2D:dt,compressedTexSubImage3D:qt,scissor:At,viewport:Wt,reset:ne}}function vE(o,e,i,r,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ve,_=new WeakMap;let x;const b=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,E){return M?new OffscreenCanvas(U,E):wu("canvas")}function C(U,E,$){let xt=1;const yt=ae(U);if((yt.width>$||yt.height>$)&&(xt=$/Math.max(yt.width,yt.height)),xt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(xt*yt.width),qt=Math.floor(xt*yt.height);x===void 0&&(x=A(dt,qt));const Ot=E?A(dt,qt):x;return Ot.width=dt,Ot.height=qt,Ot.getContext("2d").drawImage(U,0,0,dt,qt),le("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+dt+"x"+qt+")."),Ot}else return"data"in U&&le("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,E,$,xt,yt=!1){if(U!==null){if(o[U]!==void 0)return o[U];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=E;if(E===o.RED&&($===o.FLOAT&&(dt=o.R32F),$===o.HALF_FLOAT&&(dt=o.R16F),$===o.UNSIGNED_BYTE&&(dt=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.R8UI),$===o.UNSIGNED_SHORT&&(dt=o.R16UI),$===o.UNSIGNED_INT&&(dt=o.R32UI),$===o.BYTE&&(dt=o.R8I),$===o.SHORT&&(dt=o.R16I),$===o.INT&&(dt=o.R32I)),E===o.RG&&($===o.FLOAT&&(dt=o.RG32F),$===o.HALF_FLOAT&&(dt=o.RG16F),$===o.UNSIGNED_BYTE&&(dt=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.RG8UI),$===o.UNSIGNED_SHORT&&(dt=o.RG16UI),$===o.UNSIGNED_INT&&(dt=o.RG32UI),$===o.BYTE&&(dt=o.RG8I),$===o.SHORT&&(dt=o.RG16I),$===o.INT&&(dt=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),$===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),$===o.UNSIGNED_INT&&(dt=o.RGB32UI),$===o.BYTE&&(dt=o.RGB8I),$===o.SHORT&&(dt=o.RGB16I),$===o.INT&&(dt=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),$===o.UNSIGNED_INT&&(dt=o.RGBA32UI),$===o.BYTE&&(dt=o.RGBA8I),$===o.SHORT&&(dt=o.RGBA16I),$===o.INT&&(dt=o.RGBA32I)),E===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),E===o.RGBA){const qt=yt?Ru:Ue.getTransfer(xt);$===o.FLOAT&&(dt=o.RGBA32F),$===o.HALF_FLOAT&&(dt=o.RGBA16F),$===o.UNSIGNED_BYTE&&(dt=qt===Ge?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function k(U,E){let $;return U?E===null||E===Ar||E===No?$=o.DEPTH24_STENCIL8:E===ua?$=o.DEPTH32F_STENCIL8:E===Lo&&($=o.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ar||E===No?$=o.DEPTH_COMPONENT24:E===ua?$=o.DEPTH_COMPONENT32F:E===Lo&&($=o.DEPTH_COMPONENT16),$}function X(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==ei&&U.minFilter!==hi?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function O(U){const E=U.target;E.removeEventListener("dispose",O),rt(E),E.isVideoTexture&&_.delete(E)}function N(U){const E=U.target;E.removeEventListener("dispose",N),w(E)}function rt(U){const E=r.get(U);if(E.__webglInit===void 0)return;const $=U.source,xt=b.get($);if(xt){const yt=xt[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(U),Object.keys(xt).length===0&&b.delete($)}r.remove(U)}function D(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const $=U.source,xt=b.get($);delete xt[E.__cacheKey],d.memory.textures--}function w(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(E.__webglFramebuffer[xt]))for(let yt=0;yt<E.__webglFramebuffer[xt].length;yt++)o.deleteFramebuffer(E.__webglFramebuffer[xt][yt]);else o.deleteFramebuffer(E.__webglFramebuffer[xt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[xt])}else{if(Array.isArray(E.__webglFramebuffer))for(let xt=0;xt<E.__webglFramebuffer.length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[xt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xt=0;xt<E.__webglColorRenderbuffer.length;xt++)E.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[xt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=U.textures;for(let xt=0,yt=$.length;xt<yt;xt++){const dt=r.get($[xt]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),d.memory.textures--),r.remove($[xt])}r.remove(U)}let j=0;function it(){j=0}function ut(){const U=j;return U>=l.maxTextures&&le("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),j+=1,U}function gt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function pt(U,E){const $=r.get(U);if(U.isVideoTexture&&je(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const xt=U.image;if(xt===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{W($,U,E);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function B(U,E){const $=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){W($,U,E);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function Z(U,E){const $=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){W($,U,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function Q(U,E){const $=r.get(U);if(U.version>0&&$.__version!==U.version){et($,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const bt={[Id]:o.REPEAT,[la]:o.CLAMP_TO_EDGE,[kd]:o.MIRRORED_REPEAT},St={[ei]:o.NEAREST,[Zb]:o.NEAREST_MIPMAP_NEAREST,[$l]:o.NEAREST_MIPMAP_LINEAR,[hi]:o.LINEAR,[Qf]:o.LINEAR_MIPMAP_NEAREST,[Er]:o.LINEAR_MIPMAP_LINEAR},S={[tS]:o.NEVER,[sS]:o.ALWAYS,[eS]:o.LESS,[Lx]:o.LEQUAL,[nS]:o.EQUAL,[rS]:o.GEQUAL,[iS]:o.GREATER,[aS]:o.NOTEQUAL};function P(U,E){if(E.type===ua&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===hi||E.magFilter===Qf||E.magFilter===$l||E.magFilter===Er||E.minFilter===hi||E.minFilter===Qf||E.minFilter===$l||E.minFilter===Er)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,bt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,bt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,bt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,S[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ei||E.minFilter!==$l&&E.minFilter!==Er||E.type===ua&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ot(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",O));const xt=E.source;let yt=b.get(xt);yt===void 0&&(yt={},b.set(xt,yt));const dt=gt(E);if(dt!==U.__cacheKey){yt[dt]===void 0&&(yt[dt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,$=!0),yt[dt].usedTimes++;const qt=yt[U.__cacheKey];qt!==void 0&&(yt[U.__cacheKey].usedTimes--,qt.usedTimes===0&&D(E)),U.__cacheKey=dt,U.__webglTexture=yt[dt].texture}return $}function ft(U,E,$){return Math.floor(Math.floor(U/$)/E)}function Et(U,E,$,xt){const dt=U.updateRanges;if(dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,$,xt,E.data);else{dt.sort((Mt,At)=>Mt.start-At.start);let qt=0;for(let Mt=1;Mt<dt.length;Mt++){const At=dt[qt],Wt=dt[Mt],Gt=At.start+At.count,Bt=ft(Wt.start,E.width,4),ne=ft(At.start,E.width,4);Wt.start<=Gt+1&&Bt===ne&&ft(Wt.start+Wt.count-1,E.width,4)===Bt?At.count=Math.max(At.count,Wt.start+Wt.count-At.start):(++qt,dt[qt]=Wt)}dt.length=qt+1;const Ot=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Xt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,At=dt.length;Mt<At;Mt++){const Wt=dt[Mt],Gt=Math.floor(Wt.start/4),Bt=Math.ceil(Wt.count/4),ne=Gt%E.width,G=Math.floor(Gt/E.width),Lt=Bt,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,ne,G,Lt,wt,$,xt,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ot),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Xt)}}function W(U,E,$){let xt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xt=o.TEXTURE_3D);const yt=ot(U,E),dt=E.source;i.bindTexture(xt,U.__webglTexture,o.TEXTURE0+$);const qt=r.get(dt);if(dt.version!==qt.__version||yt===!0){i.activeTexture(o.TEXTURE0+$);const Ot=Ue.getPrimaries(Ue.workingColorSpace),Qt=E.colorSpace===Wa?null:Ue.getPrimaries(E.colorSpace),Xt=E.colorSpace===Wa||Ot===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Mt=C(E.image,!1,l.maxTextureSize);Mt=Yt(E,Mt);const At=c.convert(E.format,E.colorSpace),Wt=c.convert(E.type);let Gt=L(E.internalFormat,At,Wt,E.colorSpace,E.isVideoTexture);P(xt,E);let Bt;const ne=E.mipmaps,G=E.isVideoTexture!==!0,Lt=qt.__version===void 0||yt===!0,wt=dt.dataReady,Dt=X(E,Mt);if(E.isDepthTexture)Gt=k(E.format===Po,E.type),Lt&&(G?i.texStorage2D(o.TEXTURE_2D,1,Gt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,Mt.width,Mt.height,0,At,Wt,null));else if(E.isDataTexture)if(ne.length>0){G&&Lt&&i.texStorage2D(o.TEXTURE_2D,Dt,Gt,ne[0].width,ne[0].height);for(let Tt=0,vt=ne.length;Tt<vt;Tt++)Bt=ne[Tt],G?wt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,At,Wt,Bt.data):i.texImage2D(o.TEXTURE_2D,Tt,Gt,Bt.width,Bt.height,0,At,Wt,Bt.data);E.generateMipmaps=!1}else G?(Lt&&i.texStorage2D(o.TEXTURE_2D,Dt,Gt,Mt.width,Mt.height),wt&&Et(E,Mt,At,Wt)):i.texImage2D(o.TEXTURE_2D,0,Gt,Mt.width,Mt.height,0,At,Wt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Gt,ne[0].width,ne[0].height,Mt.depth);for(let Tt=0,vt=ne.length;Tt<vt;Tt++)if(Bt=ne[Tt],E.format!==Mi)if(At!==null)if(G){if(wt)if(E.layerUpdates.size>0){const Ft=Wg(Bt.width,Bt.height,E.format,E.type);for(const ie of E.layerUpdates){const Fe=Bt.data.subarray(ie*Ft/Bt.data.BYTES_PER_ELEMENT,(ie+1)*Ft/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ie,Bt.width,Bt.height,1,At,Fe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Bt.width,Bt.height,Mt.depth,At,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Gt,Bt.width,Bt.height,Mt.depth,0,Bt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Bt.width,Bt.height,Mt.depth,At,Wt,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Gt,Bt.width,Bt.height,Mt.depth,0,At,Wt,Bt.data)}else{G&&Lt&&i.texStorage2D(o.TEXTURE_2D,Dt,Gt,ne[0].width,ne[0].height);for(let Tt=0,vt=ne.length;Tt<vt;Tt++)Bt=ne[Tt],E.format!==Mi?At!==null?G?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,At,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Gt,Bt.width,Bt.height,0,Bt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?wt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,At,Wt,Bt.data):i.texImage2D(o.TEXTURE_2D,Tt,Gt,Bt.width,Bt.height,0,At,Wt,Bt.data)}else if(E.isDataArrayTexture)if(G){if(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Gt,Mt.width,Mt.height,Mt.depth),wt)if(E.layerUpdates.size>0){const Tt=Wg(Mt.width,Mt.height,E.format,E.type);for(const vt of E.layerUpdates){const Ft=Mt.data.subarray(vt*Tt/Mt.data.BYTES_PER_ELEMENT,(vt+1)*Tt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,At,Wt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,At,Wt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,Mt.width,Mt.height,Mt.depth,0,At,Wt,Mt.data);else if(E.isData3DTexture)G?(Lt&&i.texStorage3D(o.TEXTURE_3D,Dt,Gt,Mt.width,Mt.height,Mt.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,At,Wt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,Mt.width,Mt.height,Mt.depth,0,At,Wt,Mt.data);else if(E.isFramebufferTexture){if(Lt)if(G)i.texStorage2D(o.TEXTURE_2D,Dt,Gt,Mt.width,Mt.height);else{let Tt=Mt.width,vt=Mt.height;for(let Ft=0;Ft<Dt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,Gt,Tt,vt,0,At,Wt,null),Tt>>=1,vt>>=1}}else if(ne.length>0){if(G&&Lt){const Tt=ae(ne[0]);i.texStorage2D(o.TEXTURE_2D,Dt,Gt,Tt.width,Tt.height)}for(let Tt=0,vt=ne.length;Tt<vt;Tt++)Bt=ne[Tt],G?wt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,At,Wt,Bt):i.texImage2D(o.TEXTURE_2D,Tt,Gt,At,Wt,Bt);E.generateMipmaps=!1}else if(G){if(Lt){const Tt=ae(Mt);i.texStorage2D(o.TEXTURE_2D,Dt,Gt,Tt.width,Tt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At,Wt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,At,Wt,Mt);y(E)&&v(xt),qt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function et(U,E,$){if(E.image.length!==6)return;const xt=ot(U,E),yt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+$);const dt=r.get(yt);if(yt.version!==dt.__version||xt===!0){i.activeTexture(o.TEXTURE0+$);const qt=Ue.getPrimaries(Ue.workingColorSpace),Ot=E.colorSpace===Wa?null:Ue.getPrimaries(E.colorSpace),Qt=E.colorSpace===Wa||qt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,At=[];for(let vt=0;vt<6;vt++)!Xt&&!Mt?At[vt]=C(E.image[vt],!0,l.maxCubemapSize):At[vt]=Mt?E.image[vt].image:E.image[vt],At[vt]=Yt(E,At[vt]);const Wt=At[0],Gt=c.convert(E.format,E.colorSpace),Bt=c.convert(E.type),ne=L(E.internalFormat,Gt,Bt,E.colorSpace),G=E.isVideoTexture!==!0,Lt=dt.__version===void 0||xt===!0,wt=yt.dataReady;let Dt=X(E,Wt);P(o.TEXTURE_CUBE_MAP,E);let Tt;if(Xt){G&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Dt,ne,Wt.width,Wt.height);for(let vt=0;vt<6;vt++){Tt=At[vt].mipmaps;for(let Ft=0;Ft<Tt.length;Ft++){const ie=Tt[Ft];E.format!==Mi?Gt!==null?G?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,ie.width,ie.height,Gt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,ne,ie.width,ie.height,0,ie.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,ie.width,ie.height,Gt,Bt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,ne,ie.width,ie.height,0,Gt,Bt,ie.data)}}}else{if(Tt=E.mipmaps,G&&Lt){Tt.length>0&&Dt++;const vt=ae(At[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Dt,ne,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,At[vt].width,At[vt].height,Gt,Bt,At[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ne,At[vt].width,At[vt].height,0,Gt,Bt,At[vt].data);for(let Ft=0;Ft<Tt.length;Ft++){const Fe=Tt[Ft].image[vt].image;G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,Fe.width,Fe.height,Gt,Bt,Fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,ne,Fe.width,Fe.height,0,Gt,Bt,Fe.data)}}else{G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Gt,Bt,At[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ne,Gt,Bt,At[vt]);for(let Ft=0;Ft<Tt.length;Ft++){const ie=Tt[Ft];G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,Gt,Bt,ie.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,ne,Gt,Bt,ie.image[vt])}}}y(E)&&v(o.TEXTURE_CUBE_MAP),dt.__version=yt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Rt(U,E,$,xt,yt,dt){const qt=c.convert($.format,$.colorSpace),Ot=c.convert($.type),Qt=L($.internalFormat,qt,Ot,$.colorSpace),Xt=r.get(E),Mt=r.get($);if(Mt.__renderTarget=E,!Xt.__hasExternalTextures){const At=Math.max(1,E.width>>dt),Wt=Math.max(1,E.height>>dt);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,dt,Qt,At,Wt,E.depth,0,qt,Ot,null):i.texImage2D(yt,dt,Qt,At,Wt,0,qt,Ot,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ht(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,yt,Mt.__webglTexture,0,Oe(E)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,yt,Mt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(U,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const xt=E.depthTexture,yt=xt&&xt.isDepthTexture?xt.type:null,dt=k(E.stencilBuffer,yt),qt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=Oe(E);Ht(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot,dt,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,dt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,dt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,U)}else{const xt=E.textures;for(let yt=0;yt<xt.length;yt++){const dt=xt[yt],qt=c.convert(dt.format,dt.colorSpace),Ot=c.convert(dt.type),Qt=L(dt.internalFormat,qt,Ot,dt.colorSpace),Xt=Oe(E);$&&Ht(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xt,Qt,E.width,E.height):Ht(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xt,Qt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Vt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=r.get(E.depthTexture);xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pt(E.depthTexture,0);const yt=xt.__webglTexture,dt=Oe(E);if(E.depthTexture.format===Oo)Ht(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(E.depthTexture.format===Po)Ht(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function ue(U){const E=r.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const xt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xt){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xt.removeEventListener("dispose",yt)};xt.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=xt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const xt=U.texture.mipmaps;xt&&xt.length>0?Vt(E.__webglFramebuffer[0],U):Vt(E.__webglFramebuffer,U)}else if($){E.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[xt]),E.__webglDepthbuffer[xt]===void 0)E.__webglDepthbuffer[xt]=o.createRenderbuffer(),Ut(E.__webglDepthbuffer[xt],U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[xt];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,dt)}}else{const xt=U.texture.mipmaps;if(xt&&xt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ut(E.__webglDepthbuffer,U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(U,E,$){const xt=r.get(U);E!==void 0&&Rt(xt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&ue(U)}function he(U){const E=U.texture,$=r.get(U),xt=r.get(E);U.addEventListener("dispose",N);const yt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,qt=yt.length>1;if(qt||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=E.version,d.memory.textures++),dt){$.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Ot]=[];for(let Qt=0;Qt<E.mipmaps.length;Qt++)$.__webglFramebuffer[Ot][Qt]=o.createFramebuffer()}else $.__webglFramebuffer[Ot]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ot=0;Ot<E.mipmaps.length;Ot++)$.__webglFramebuffer[Ot]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Ot=0,Qt=yt.length;Ot<Qt;Ot++){const Xt=r.get(yt[Ot]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&Ht(U)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ot=0;Ot<yt.length;Ot++){const Qt=yt[Ot];$.__webglColorRenderbuffer[Ot]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ot]);const Xt=c.convert(Qt.format,Qt.colorSpace),Mt=c.convert(Qt.type),At=L(Qt.internalFormat,Xt,Mt,Qt.colorSpace,U.isXRRenderTarget===!0),Wt=Oe(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,At,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ot])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),P(o.TEXTURE_CUBE_MAP,E);for(let Ot=0;Ot<6;Ot++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Rt($.__webglFramebuffer[Ot][Qt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,Qt);else Rt($.__webglFramebuffer[Ot],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);y(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Ot=0,Qt=yt.length;Ot<Qt;Ot++){const Xt=yt[Ot],Mt=r.get(Xt);let At=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(At=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,Mt.__webglTexture),P(At,Xt),Rt($.__webglFramebuffer,U,Xt,o.COLOR_ATTACHMENT0+Ot,At,0),y(Xt)&&v(At)}i.unbindTexture()}else{let Ot=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ot,xt.__webglTexture),P(Ot,E),E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Rt($.__webglFramebuffer[Qt],U,E,o.COLOR_ATTACHMENT0,Ot,Qt);else Rt($.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Ot,0);y(E)&&v(Ot),i.unbindTexture()}U.depthBuffer&&ue(U)}function Ae(U){const E=U.textures;for(let $=0,xt=E.length;$<xt;$++){const yt=E[$];if(y(yt)){const dt=z(U),qt=r.get(yt).__webglTexture;i.bindTexture(dt,qt),v(dt),i.unbindTexture()}}}const H=[],pe=[];function ge(U){if(U.samples>0){if(Ht(U)===!1){const E=U.textures,$=U.width,xt=U.height;let yt=o.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(U),Ot=E.length>1;if(Ot)for(let Xt=0;Xt<E.length;Xt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Qt=U.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Xt=0;Xt<E.length;Xt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Ot){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Xt]);const Mt=r.get(E[Xt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,$,xt,0,0,$,xt,yt,o.NEAREST),m===!0&&(H.length=0,pe.length=0,H.push(o.COLOR_ATTACHMENT0+Xt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(H.push(dt),pe.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,pe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ot)for(let Xt=0;Xt<E.length;Xt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Xt]);const Mt=r.get(E[Xt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Oe(U){return Math.min(l.maxSamples,U.samples)}function Ht(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function je(U){const E=d.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Yt(U,E){const $=U.colorSpace,xt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Ts&&$!==Wa&&(Ue.getTransfer($)===Ge?(xt!==Mi||yt!==da)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):an("WebGLTextures: Unsupported texture color space:",$)),E}function ae(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ut,this.resetTextureUnits=it,this.setTexture2D=pt,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=Q,this.rebindTextures=tn,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Ht}function bE(o,e){function i(r,l=Wa){let c;const d=Ue.getTransfer(l);if(r===da)return o.UNSIGNED_BYTE;if(r===Sh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===yh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Rx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Cx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Tx)return o.BYTE;if(r===Ax)return o.SHORT;if(r===Lo)return o.UNSIGNED_SHORT;if(r===bh)return o.INT;if(r===Ar)return o.UNSIGNED_INT;if(r===ua)return o.FLOAT;if(r===Rs)return o.HALF_FLOAT;if(r===wx)return o.ALPHA;if(r===Dx)return o.RGB;if(r===Mi)return o.RGBA;if(r===Oo)return o.DEPTH_COMPONENT;if(r===Po)return o.DEPTH_STENCIL;if(r===Ux)return o.RED;if(r===Mh)return o.RED_INTEGER;if(r===Eh)return o.RG;if(r===Th)return o.RG_INTEGER;if(r===Ah)return o.RGBA_INTEGER;if(r===yu||r===Mu||r===Eu||r===Tu)if(d===Ge)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===yu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===yu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hd||r===Gd||r===Vd||r===jd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Hd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xd||r===qd||r===Wd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Xd||r===qd)return d===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Wd)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===th||r===eh||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Yd)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zd)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kd)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qd)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jd)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$d)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===th)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===eh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ih)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ah)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===oh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lh||r===uh||r===ch)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===lh)return d===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===uh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ch)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fh||r===dh||r===hh||r===ph)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===fh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===dh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ph)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const SE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ME{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new qx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ma({vertexShader:SE,fragmentShader:yE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pa(new Ou(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EE extends Cs{constructor(e,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,_=null,x=null,b=null,M=null,A=null;const C=typeof XRWebGLBinding<"u",y=new ME,v={},z=i.getContextAttributes();let L=null,k=null;const X=[],O=[],N=new Ve;let rt=null;const D=new di;D.viewport=new rn;const w=new di;w.viewport=new rn;const j=[D,w],it=new VS;let ut=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=X[W];return et===void 0&&(et=new bd,X[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=X[W];return et===void 0&&(et=new bd,X[W]=et),et.getGripSpace()},this.getHand=function(W){let et=X[W];return et===void 0&&(et=new bd,X[W]=et),et.getHandSpace()};function pt(W){const et=O.indexOf(W.inputSource);if(et===-1)return;const Rt=X[et];Rt!==void 0&&(Rt.update(W.inputSource,W.frame,p||d),Rt.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){l.removeEventListener("select",pt),l.removeEventListener("selectstart",pt),l.removeEventListener("selectend",pt),l.removeEventListener("squeeze",pt),l.removeEventListener("squeezestart",pt),l.removeEventListener("squeezeend",pt),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",Z);for(let W=0;W<X.length;W++){const et=O[W];et!==null&&(O[W]=null,X[W].disconnect(et))}ut=null,gt=null,y.reset();for(const W in v)delete v[W];e.setRenderTarget(L),M=null,b=null,x=null,l=null,k=null,Et.stop(),r.isPresenting=!1,e.setPixelRatio(rt),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,r.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,r.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return b!==null?b:M},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",pt),l.addEventListener("selectstart",pt),l.addEventListener("selectend",pt),l.addEventListener("squeeze",pt),l.addEventListener("squeezestart",pt),l.addEventListener("squeezeend",pt),l.addEventListener("end",B),l.addEventListener("inputsourceschange",Z),z.xrCompatible!==!0&&await i.makeXRCompatible(),rt=e.getPixelRatio(),e.getSize(N),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ut=null,Vt=null;z.depth&&(Vt=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Rt=z.stencil?Po:Oo,Ut=z.stencil?No:Ar);const ue={colorFormat:i.RGBA8,depthFormat:Vt,scaleFactor:c};x=this.getBinding(),b=x.createProjectionLayer(ue),l.updateRenderState({layers:[b]}),e.setPixelRatio(1),e.setSize(b.textureWidth,b.textureHeight,!1),k=new Rr(b.textureWidth,b.textureHeight,{format:Mi,type:da,depthTexture:new Xx(b.textureWidth,b.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}else{const Rt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Rt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),k=new Rr(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:da,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Et.setContext(l),Et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(W){for(let et=0;et<W.removed.length;et++){const Rt=W.removed[et],Ut=O.indexOf(Rt);Ut>=0&&(O[Ut]=null,X[Ut].disconnect(Rt))}for(let et=0;et<W.added.length;et++){const Rt=W.added[et];let Ut=O.indexOf(Rt);if(Ut===-1){for(let ue=0;ue<X.length;ue++)if(ue>=O.length){O.push(Rt),Ut=ue;break}else if(O[ue]===null){O[ue]=Rt,Ut=ue;break}if(Ut===-1)break}const Vt=X[Ut];Vt&&Vt.connect(Rt)}}const Q=new ct,bt=new ct;function St(W,et,Rt){Q.setFromMatrixPosition(et.matrixWorld),bt.setFromMatrixPosition(Rt.matrixWorld);const Ut=Q.distanceTo(bt),Vt=et.projectionMatrix.elements,ue=Rt.projectionMatrix.elements,tn=Vt[14]/(Vt[10]-1),he=Vt[14]/(Vt[10]+1),Ae=(Vt[9]+1)/Vt[5],H=(Vt[9]-1)/Vt[5],pe=(Vt[8]-1)/Vt[0],ge=(ue[8]+1)/ue[0],Oe=tn*pe,Ht=tn*ge,je=Ut/(-pe+ge),Yt=je*-pe;if(et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Yt),W.translateZ(je),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Vt[10]===-1)W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const ae=tn+je,U=he+je,E=Oe-Yt,$=Ht+(Ut-Yt),xt=Ae*he/U*ae,yt=H*he/U*ae;W.projectionMatrix.makePerspective(E,$,xt,yt,ae,U),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function S(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let et=W.near,Rt=W.far;y.texture!==null&&(y.depthNear>0&&(et=y.depthNear),y.depthFar>0&&(Rt=y.depthFar)),it.near=w.near=D.near=et,it.far=w.far=D.far=Rt,(ut!==it.near||gt!==it.far)&&(l.updateRenderState({depthNear:it.near,depthFar:it.far}),ut=it.near,gt=it.far),it.layers.mask=W.layers.mask|6,D.layers.mask=it.layers.mask&3,w.layers.mask=it.layers.mask&5;const Ut=W.parent,Vt=it.cameras;S(it,Ut);for(let ue=0;ue<Vt.length;ue++)S(Vt[ue],Ut);Vt.length===2?St(it,D,w):it.projectionMatrix.copy(D.projectionMatrix),P(W,it,Ut)};function P(W,et,Rt){Rt===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(Rt.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=mh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(b===null&&M===null))return m},this.setFoveation=function(W){m=W,b!==null&&(b.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(it)},this.getCameraTexture=function(W){return v[W]};let ot=null;function ft(W,et){if(_=et.getViewerPose(p||d),A=et,_!==null){const Rt=_.views;M!==null&&(e.setRenderTargetFramebuffer(k,M.framebuffer),e.setRenderTarget(k));let Ut=!1;Rt.length!==it.cameras.length&&(it.cameras.length=0,Ut=!0);for(let he=0;he<Rt.length;he++){const Ae=Rt[he];let H=null;if(M!==null)H=M.getViewport(Ae);else{const ge=x.getViewSubImage(b,Ae);H=ge.viewport,he===0&&(e.setRenderTargetTextures(k,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(k))}let pe=j[he];pe===void 0&&(pe=new di,pe.layers.enable(he),pe.viewport=new rn,j[he]=pe),pe.matrix.fromArray(Ae.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Ae.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(H.x,H.y,H.width,H.height),he===0&&(it.matrix.copy(pe.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),Ut===!0&&it.cameras.push(pe)}const Vt=l.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=r.getBinding();const he=x.getDepthInformation(Rt[0]);he&&he.isValid&&he.texture&&y.init(he,l.renderState)}if(Vt&&Vt.includes("camera-access")&&C){e.state.unbindTexture(),x=r.getBinding();for(let he=0;he<Rt.length;he++){const Ae=Rt[he].camera;if(Ae){let H=v[Ae];H||(H=new qx,v[Ae]=H);const pe=x.getCameraImage(Ae);H.sourceTexture=pe}}}}for(let Rt=0;Rt<X.length;Rt++){const Ut=O[Rt],Vt=X[Rt];Ut!==null&&Vt!==void 0&&Vt.update(Ut,et,p||d)}ot&&ot(W,et),et.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:et}),A=null}const Et=new Wx;Et.setAnimationLoop(ft),this.setAnimationLoop=function(W){ot=W},this.dispose=function(){}}}const br=new ha,TE=new dn;function AE(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,kx(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,z,L,k){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),x(y,v)):v.isMeshPhongMaterial?(c(y,v),_(y,v)):v.isMeshStandardMaterial?(c(y,v),b(y,v),v.isMeshPhysicalMaterial&&M(y,v,k)):v.isMeshMatcapMaterial?(c(y,v),A(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),C(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,z,L):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Gn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Gn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const z=e.get(v),L=z.envMap,k=z.envMapRotation;L&&(y.envMap.value=L,br.copy(k),br.x*=-1,br.y*=-1,br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),y.envMapRotation.value.setFromMatrix4(TE.makeRotationFromEuler(br)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,z,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*z,y.scale.value=L*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function b(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,z){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const z=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function RE(o,e,i,r){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,L){const k=L.program;r.uniformBlockBinding(z,k)}function p(z,L){let k=l[z.id];k===void 0&&(A(z),k=_(z),l[z.id]=k,z.addEventListener("dispose",y));const X=L.program;r.updateUBOMapping(z,X);const O=e.render.frame;c[z.id]!==O&&(b(z),c[z.id]=O)}function _(z){const L=x();z.__bindingPointIndex=L;const k=o.createBuffer(),X=z.__size,O=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,k),o.bufferData(o.UNIFORM_BUFFER,X,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,k),k}function x(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return an("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(z){const L=l[z.id],k=z.uniforms,X=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let O=0,N=k.length;O<N;O++){const rt=Array.isArray(k[O])?k[O]:[k[O]];for(let D=0,w=rt.length;D<w;D++){const j=rt[D];if(M(j,O,D,X)===!0){const it=j.__offset,ut=Array.isArray(j.value)?j.value:[j.value];let gt=0;for(let pt=0;pt<ut.length;pt++){const B=ut[pt],Z=C(B);typeof B=="number"||typeof B=="boolean"?(j.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,it+gt,j.__data)):B.isMatrix3?(j.__data[0]=B.elements[0],j.__data[1]=B.elements[1],j.__data[2]=B.elements[2],j.__data[3]=0,j.__data[4]=B.elements[3],j.__data[5]=B.elements[4],j.__data[6]=B.elements[5],j.__data[7]=0,j.__data[8]=B.elements[6],j.__data[9]=B.elements[7],j.__data[10]=B.elements[8],j.__data[11]=0):(B.toArray(j.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,it,j.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,L,k,X){const O=z.value,N=L+"_"+k;if(X[N]===void 0)return typeof O=="number"||typeof O=="boolean"?X[N]=O:X[N]=O.clone(),!0;{const rt=X[N];if(typeof O=="number"||typeof O=="boolean"){if(rt!==O)return X[N]=O,!0}else if(rt.equals(O)===!1)return rt.copy(O),!0}return!1}function A(z){const L=z.uniforms;let k=0;const X=16;for(let N=0,rt=L.length;N<rt;N++){const D=Array.isArray(L[N])?L[N]:[L[N]];for(let w=0,j=D.length;w<j;w++){const it=D[w],ut=Array.isArray(it.value)?it.value:[it.value];for(let gt=0,pt=ut.length;gt<pt;gt++){const B=ut[gt],Z=C(B),Q=k%X,bt=Q%Z.boundary,St=Q+bt;k+=bt,St!==0&&X-St<Z.storage&&(k+=X-St),it.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=k,k+=Z.storage}}}const O=k%X;return O>0&&(k+=X-O),z.__size=k,z.__cache={},this}function C(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",z),L}function y(z){const L=z.target;L.removeEventListener("dispose",y);const k=d.indexOf(L.__bindingPointIndex);d.splice(k,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const z in l)o.deleteBuffer(l[z]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}const CE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ra=null;function wE(){return ra===null&&(ra=new PS(CE,32,32,Eh,Rs),ra.minFilter=hi,ra.magFilter=hi,ra.wrapS=la,ra.wrapT=la,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class DE{constructor(e={}){const{canvas:i=oS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:b=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const A=new Set([Ah,Th,Mh]),C=new Set([da,Ar,Lo,No,Sh,yh]),y=new Uint32Array(4),v=new Int32Array(4);let z=null,L=null;const k=[],X=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let N=!1;this._outputColorSpace=fi;let rt=0,D=0,w=null,j=-1,it=null;const ut=new rn,gt=new rn;let pt=null;const B=new ze(0);let Z=0,Q=i.width,bt=i.height,St=1,S=null,P=null;const ot=new rn(0,0,Q,bt),ft=new rn(0,0,Q,bt);let Et=!1;const W=new Vx;let et=!1,Rt=!1;const Ut=new dn,Vt=new ct,ue=new rn,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Ae(){return w===null?St:1}let H=r;function pe(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${vh}`),i.addEventListener("webglcontextlost",Tt,!1),i.addEventListener("webglcontextrestored",vt,!1),i.addEventListener("webglcontextcreationerror",Ft,!1),H===null){const q="webgl2";if(H=pe(q,R),H===null)throw pe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let ge,Oe,Ht,je,Yt,ae,U,E,$,xt,yt,dt,qt,Ot,Qt,Xt,Mt,At,Wt,Gt,Bt,ne,G,Lt;function wt(){ge=new F3(H),ge.init(),ne=new bE(H,ge),Oe=new w3(H,ge,e,ne),Ht=new _E(H,ge),Oe.reversedDepthBuffer&&b&&Ht.buffers.depth.setReversed(!0),je=new H3(H),Yt=new rE,ae=new vE(H,ge,Ht,Yt,Oe,ne,je),U=new U3(O),E=new z3(O),$=new XS(H),G=new R3(H,$),xt=new I3(H,$,je,G),yt=new V3(H,xt,$,je),Wt=new G3(H,Oe,ae),Xt=new D3(Yt),dt=new aE(O,U,E,ge,Oe,G,Xt),qt=new AE(O,Yt),Ot=new oE,Qt=new hE(ge),At=new A3(O,U,E,Ht,yt,M,m),Mt=new gE(O,yt,Oe),Lt=new RE(H,je,Oe,Ht),Gt=new C3(H,ge,je),Bt=new k3(H,ge,je),je.programs=dt.programs,O.capabilities=Oe,O.extensions=ge,O.properties=Yt,O.renderLists=Ot,O.shadowMap=Mt,O.state=Ht,O.info=je}wt();const Dt=new EE(O,H);this.xr=Dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(R){R!==void 0&&(St=R,this.setSize(Q,bt,!1))},this.getSize=function(R){return R.set(Q,bt)},this.setSize=function(R,q,st=!0){if(Dt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=R,bt=q,i.width=Math.floor(R*St),i.height=Math.floor(q*St),st===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(Q*St,bt*St).floor()},this.setDrawingBufferSize=function(R,q,st){Q=R,bt=q,St=st,i.width=Math.floor(R*st),i.height=Math.floor(q*st),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(ut)},this.getViewport=function(R){return R.copy(ot)},this.setViewport=function(R,q,st,nt){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,q,st,nt),Ht.viewport(ut.copy(ot).multiplyScalar(St).round())},this.getScissor=function(R){return R.copy(ft)},this.setScissor=function(R,q,st,nt){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,q,st,nt),Ht.scissor(gt.copy(ft).multiplyScalar(St).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(R){Ht.setScissorTest(Et=R)},this.setOpaqueSort=function(R){S=R},this.setTransparentSort=function(R){P=R},this.getClearColor=function(R){return R.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,st=!0){let nt=0;if(R){let K=!1;if(w!==null){const Ct=w.texture.format;K=A.has(Ct)}if(K){const Ct=w.texture.type,Nt=C.has(Ct),zt=At.getClearColor(),It=At.getClearAlpha(),$t=zt.r,ee=zt.g,Zt=zt.b;Nt?(y[0]=$t,y[1]=ee,y[2]=Zt,y[3]=It,H.clearBufferuiv(H.COLOR,0,y)):(v[0]=$t,v[1]=ee,v[2]=Zt,v[3]=It,H.clearBufferiv(H.COLOR,0,v))}else nt|=H.COLOR_BUFFER_BIT}q&&(nt|=H.DEPTH_BUFFER_BIT),st&&(nt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Tt,!1),i.removeEventListener("webglcontextrestored",vt,!1),i.removeEventListener("webglcontextcreationerror",Ft,!1),At.dispose(),Ot.dispose(),Qt.dispose(),Yt.dispose(),U.dispose(),E.dispose(),yt.dispose(),G.dispose(),Lt.dispose(),dt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Ds),Dt.removeEventListener("sessionend",Us),mi.stop()};function Tt(R){R.preventDefault(),Cg("WebGLRenderer: Context Lost."),N=!0}function vt(){Cg("WebGLRenderer: Context Restored."),N=!1;const R=je.autoReset,q=Mt.enabled,st=Mt.autoUpdate,nt=Mt.needsUpdate,K=Mt.type;wt(),je.autoReset=R,Mt.enabled=q,Mt.autoUpdate=st,Mt.needsUpdate=nt,Mt.type=K}function Ft(R){an("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const q=R.target;q.removeEventListener("dispose",ie),Fe(q)}function Fe(R){Re(R),Yt.remove(R)}function Re(R){const q=Yt.get(R).programs;q!==void 0&&(q.forEach(function(st){dt.releaseProgram(st)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,st,nt,K,Ct){q===null&&(q=tn);const Nt=K.isMesh&&K.matrixWorld.determinant()<0,zt=Fu(R,q,st,nt,K);Ht.setMaterial(nt,Nt);let It=st.index,$t=1;if(nt.wireframe===!0){if(It=xt.getWireframeAttribute(st),It===void 0)return;$t=2}const ee=st.drawRange,Zt=st.attributes.position;let ce=ee.start*$t,Te=(ee.start+ee.count)*$t;Ct!==null&&(ce=Math.max(ce,Ct.start*$t),Te=Math.min(Te,(Ct.start+Ct.count)*$t)),It!==null?(ce=Math.max(ce,0),Te=Math.min(Te,It.count)):Zt!=null&&(ce=Math.max(ce,0),Te=Math.min(Te,Zt.count));const Ce=Te-ce;if(Ce<0||Ce===1/0)return;G.setup(K,nt,zt,st,It);let Se,Ne=Gt;if(It!==null&&(Se=$.get(It),Ne=Bt,Ne.setIndex(Se)),K.isMesh)nt.wireframe===!0?(Ht.setLineWidth(nt.wireframeLinewidth*Ae()),Ne.setMode(H.LINES)):Ne.setMode(H.TRIANGLES);else if(K.isLine){let Jt=nt.linewidth;Jt===void 0&&(Jt=1),Ht.setLineWidth(Jt*Ae()),K.isLineSegments?Ne.setMode(H.LINES):K.isLineLoop?Ne.setMode(H.LINE_LOOP):Ne.setMode(H.LINE_STRIP)}else K.isPoints?Ne.setMode(H.POINTS):K.isSprite&&Ne.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Bo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Ne.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Jt=K._multiDrawStarts,Xe=K._multiDrawCounts,ye=K._multiDrawCount,_n=It?$.get(It).bytesPerElement:1,xa=Yt.get(nt).currentProgram.getUniforms();for(let We=0;We<ye;We++)xa.setValue(H,"_gl_DrawID",We),Ne.render(Jt[We]/_n,Xe[We])}else if(K.isInstancedMesh)Ne.renderInstances(ce,Ce,K.count);else if(st.isInstancedBufferGeometry){const Jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Xe=Math.min(st.instanceCount,Jt);Ne.renderInstances(ce,Ce,Xe)}else Ne.render(ce,Ce)};function Cn(R,q,st){R.transparent===!0&&R.side===oa&&R.forceSinglePass===!1?(R.side=Gn,R.needsUpdate=!0,hn(R,q,st),R.side=Ka,R.needsUpdate=!0,hn(R,q,st),R.side=oa):hn(R,q,st)}this.compile=function(R,q,st=null){st===null&&(st=R),L=Qt.get(st),L.init(q),X.push(L),st.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(L.pushLight(K),K.castShadow&&L.pushShadow(K))}),R!==st&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(L.pushLight(K),K.castShadow&&L.pushShadow(K))}),L.setupLights();const nt=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ct=K.material;if(Ct)if(Array.isArray(Ct))for(let Nt=0;Nt<Ct.length;Nt++){const zt=Ct[Nt];Cn(zt,st,K),nt.add(zt)}else Cn(Ct,st,K),nt.add(Ct)}),L=X.pop(),nt},this.compileAsync=function(R,q,st=null){const nt=this.compile(R,q,st);return new Promise(K=>{function Ct(){if(nt.forEach(function(Nt){Yt.get(Nt).currentProgram.isReady()&&nt.delete(Nt)}),nt.size===0){K(R);return}setTimeout(Ct,10)}ge.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let jn=null;function Go(R){jn&&jn(R)}function Ds(){mi.stop()}function Us(){mi.start()}const mi=new Wx;mi.setAnimationLoop(Go),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(R){jn=R,Dt.setAnimationLoop(R),R===null?mi.stop():mi.start()},Dt.addEventListener("sessionstart",Ds),Dt.addEventListener("sessionend",Us),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){an("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(q),q=Dt.getCamera()),R.isScene===!0&&R.onBeforeRender(O,R,q,w),L=Qt.get(R,X.length),L.init(q),X.push(L),Ut.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),W.setFromProjectionMatrix(Ut,Li,q.reversedDepth),Rt=this.localClippingEnabled,et=Xt.init(this.clippingPlanes,Rt),z=Ot.get(R,k.length),z.init(),k.push(z),Dt.enabled===!0&&Dt.isPresenting===!0){const Ct=O.xr.getDepthSensingMesh();Ct!==null&&Qa(Ct,q,-1/0,O.sortObjects)}Qa(R,q,0,O.sortObjects),z.finish(),O.sortObjects===!0&&z.sort(S,P),he=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,he&&At.addToRenderList(z,R),this.info.render.frame++,et===!0&&Xt.beginShadows();const st=L.state.shadowsArray;Mt.render(st,R,q),et===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=z.opaque,K=z.transmissive;if(L.setupLights(),q.isArrayCamera){const Ct=q.cameras;if(K.length>0)for(let Nt=0,zt=Ct.length;Nt<zt;Nt++){const It=Ct[Nt];Ns(nt,K,R,It)}he&&At.render(R);for(let Nt=0,zt=Ct.length;Nt<zt;Nt++){const It=Ct[Nt];Ls(z,R,It,It.viewport)}}else K.length>0&&Ns(nt,K,R,q),he&&At.render(R),Ls(z,R,q);w!==null&&D===0&&(ae.updateMultisampleRenderTarget(w),ae.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(O,R,q),G.resetDefaultState(),j=-1,it=null,X.pop(),X.length>0?(L=X[X.length-1],et===!0&&Xt.setGlobalState(O.clippingPlanes,L.state.camera)):L=null,k.pop(),k.length>0?z=k[k.length-1]:z=null};function Qa(R,q,st,nt){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){nt&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const Nt=yt.update(R),zt=R.material;zt.visible&&z.push(R,Nt,zt,st,ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||W.intersectsObject(R))){const Nt=yt.update(R),zt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ue.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),ue.copy(Nt.boundingSphere.center)),ue.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(zt)){const It=Nt.groups;for(let $t=0,ee=It.length;$t<ee;$t++){const Zt=It[$t],ce=zt[Zt.materialIndex];ce&&ce.visible&&z.push(R,Nt,ce,st,ue.z,Zt)}}else zt.visible&&z.push(R,Nt,zt,st,ue.z,null)}}const Ct=R.children;for(let Nt=0,zt=Ct.length;Nt<zt;Nt++)Qa(Ct[Nt],q,st,nt)}function Ls(R,q,st,nt){const{opaque:K,transmissive:Ct,transparent:Nt}=R;L.setupLightsView(st),et===!0&&Xt.setGlobalState(O.clippingPlanes,st),nt&&Ht.viewport(ut.copy(nt)),K.length>0&&Xn(K,q,st),Ct.length>0&&Xn(Ct,q,st),Nt.length>0&&Xn(Nt,q,st),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Ns(R,q,st,nt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[nt.id]===void 0&&(L.state.transmissionRenderTarget[nt.id]=new Rr(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Rs:da,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Ct=L.state.transmissionRenderTarget[nt.id],Nt=nt.viewport||ut;Ct.setSize(Nt.z*O.transmissionResolutionScale,Nt.w*O.transmissionResolutionScale);const zt=O.getRenderTarget(),It=O.getActiveCubeFace(),$t=O.getActiveMipmapLevel();O.setRenderTarget(Ct),O.getClearColor(B),Z=O.getClearAlpha(),Z<1&&O.setClearColor(16777215,.5),O.clear(),he&&At.render(st);const ee=O.toneMapping;O.toneMapping=Za;const Zt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),L.setupLightsView(nt),et===!0&&Xt.setGlobalState(O.clippingPlanes,nt),Xn(R,st,nt),ae.updateMultisampleRenderTarget(Ct),ae.updateRenderTargetMipmap(Ct),ge.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Te=0,Ce=q.length;Te<Ce;Te++){const Se=q[Te],{object:Ne,geometry:Jt,material:Xe,group:ye}=Se;if(Xe.side===oa&&Ne.layers.test(nt.layers)){const _n=Xe.side;Xe.side=Gn,Xe.needsUpdate=!0,sn(Ne,st,nt,Jt,Xe,ye),Xe.side=_n,Xe.needsUpdate=!0,ce=!0}}ce===!0&&(ae.updateMultisampleRenderTarget(Ct),ae.updateRenderTargetMipmap(Ct))}O.setRenderTarget(zt,It,$t),O.setClearColor(B,Z),Zt!==void 0&&(nt.viewport=Zt),O.toneMapping=ee}function Xn(R,q,st){const nt=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Ct=R.length;K<Ct;K++){const Nt=R[K],{object:zt,geometry:It,group:$t}=Nt;let ee=Nt.material;ee.allowOverride===!0&&nt!==null&&(ee=nt),zt.layers.test(st.layers)&&sn(zt,q,st,It,ee,$t)}}function sn(R,q,st,nt,K,Ct){R.onBeforeRender(O,q,st,nt,K,Ct),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(O,q,st,nt,R,Ct),K.transparent===!0&&K.side===oa&&K.forceSinglePass===!1?(K.side=Gn,K.needsUpdate=!0,O.renderBufferDirect(st,q,nt,K,R,Ct),K.side=Ka,K.needsUpdate=!0,O.renderBufferDirect(st,q,nt,K,R,Ct),K.side=oa):O.renderBufferDirect(st,q,nt,K,R,Ct),R.onAfterRender(O,q,st,nt,K,Ct)}function hn(R,q,st){q.isScene!==!0&&(q=tn);const nt=Yt.get(R),K=L.state.lights,Ct=L.state.shadowsArray,Nt=K.state.version,zt=dt.getParameters(R,K.state,Ct,q,st),It=dt.getProgramCacheKey(zt);let $t=nt.programs;nt.environment=R.isMeshStandardMaterial?q.environment:null,nt.fog=q.fog,nt.envMap=(R.isMeshStandardMaterial?E:U).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",ie),$t=new Map,nt.programs=$t);let ee=$t.get(It);if(ee!==void 0){if(nt.currentProgram===ee&&nt.lightsStateVersion===Nt)return Cr(R,zt),ee}else zt.uniforms=dt.getUniforms(R),R.onBeforeCompile(zt,O),ee=dt.acquireProgram(zt,It),$t.set(It,ee),nt.uniforms=zt.uniforms;const Zt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Xt.uniform),Cr(R,zt),nt.needsLights=Vo(R),nt.lightsStateVersion=Nt,nt.needsLights&&(Zt.ambientLightColor.value=K.state.ambient,Zt.lightProbe.value=K.state.probe,Zt.directionalLights.value=K.state.directional,Zt.directionalLightShadows.value=K.state.directionalShadow,Zt.spotLights.value=K.state.spot,Zt.spotLightShadows.value=K.state.spotShadow,Zt.rectAreaLights.value=K.state.rectArea,Zt.ltc_1.value=K.state.rectAreaLTC1,Zt.ltc_2.value=K.state.rectAreaLTC2,Zt.pointLights.value=K.state.point,Zt.pointLightShadows.value=K.state.pointShadow,Zt.hemisphereLights.value=K.state.hemi,Zt.directionalShadowMap.value=K.state.directionalShadowMap,Zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Zt.spotShadowMap.value=K.state.spotShadowMap,Zt.spotLightMatrix.value=K.state.spotLightMatrix,Zt.spotLightMap.value=K.state.spotLightMap,Zt.pointShadowMap.value=K.state.pointShadowMap,Zt.pointShadowMatrix.value=K.state.pointShadowMatrix),nt.currentProgram=ee,nt.uniformsList=null,ee}function Oi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Au.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Cr(R,q){const st=Yt.get(R);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function Fu(R,q,st,nt,K){q.isScene!==!0&&(q=tn),ae.resetTextureUnits();const Ct=q.fog,Nt=nt.isMeshStandardMaterial?q.environment:null,zt=w===null?O.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ts,It=(nt.isMeshStandardMaterial?E:U).get(nt.envMap||Nt),$t=nt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ee=!!st.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zt=!!st.morphAttributes.position,ce=!!st.morphAttributes.normal,Te=!!st.morphAttributes.color;let Ce=Za;nt.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ce=O.toneMapping);const Se=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ne=Se!==void 0?Se.length:0,Jt=Yt.get(nt),Xe=L.state.lights;if(et===!0&&(Rt===!0||R!==it)){const bn=R===it&&nt.id===j;Xt.setState(nt,R,bn)}let ye=!1;nt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Xe.state.version||Jt.outputColorSpace!==zt||K.isBatchedMesh&&Jt.batching===!1||!K.isBatchedMesh&&Jt.batching===!0||K.isBatchedMesh&&Jt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Jt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Jt.instancing===!1||!K.isInstancedMesh&&Jt.instancing===!0||K.isSkinnedMesh&&Jt.skinning===!1||!K.isSkinnedMesh&&Jt.skinning===!0||K.isInstancedMesh&&Jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Jt.instancingMorph===!1&&K.morphTexture!==null||Jt.envMap!==It||nt.fog===!0&&Jt.fog!==Ct||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Xt.numPlanes||Jt.numIntersection!==Xt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==Zt||Jt.morphNormals!==ce||Jt.morphColors!==Te||Jt.toneMapping!==Ce||Jt.morphTargetsCount!==Ne)&&(ye=!0):(ye=!0,Jt.__version=nt.version);let _n=Jt.currentProgram;ye===!0&&(_n=hn(nt,q,K));let xa=!1,We=!1,Pi=!1;const Ye=_n.getUniforms(),vn=Jt.uniforms;if(Ht.useProgram(_n.program)&&(xa=!0,We=!0,Pi=!0),nt.id!==j&&(j=nt.id,We=!0),xa||it!==R){Ht.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ye.setValue(H,"projectionMatrix",R.projectionMatrix),Ye.setValue(H,"viewMatrix",R.matrixWorldInverse);const Mn=Ye.map.cameraPosition;Mn!==void 0&&Mn.setValue(H,Vt.setFromMatrixPosition(R.matrixWorld)),Oe.logarithmicDepthBuffer&&Ye.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ye.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),it!==R&&(it=R,We=!0,Pi=!0)}if(K.isSkinnedMesh){Ye.setOptional(H,K,"bindMatrix"),Ye.setOptional(H,K,"bindMatrixInverse");const bn=K.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ye.setValue(H,"boneTexture",bn.boneTexture,ae))}K.isBatchedMesh&&(Ye.setOptional(H,K,"batchingTexture"),Ye.setValue(H,"batchingTexture",K._matricesTexture,ae),Ye.setOptional(H,K,"batchingIdTexture"),Ye.setValue(H,"batchingIdTexture",K._indirectTexture,ae),Ye.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Ye.setValue(H,"batchingColorTexture",K._colorsTexture,ae));const pn=st.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Wt.update(K,st,_n),(We||Jt.receiveShadow!==K.receiveShadow)&&(Jt.receiveShadow=K.receiveShadow,Ye.setValue(H,"receiveShadow",K.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(vn.envMap.value=It,vn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&q.environment!==null&&(vn.envMapIntensity.value=q.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=wE()),We&&(Ye.setValue(H,"toneMappingExposure",O.toneMappingExposure),Jt.needsLights&&Iu(vn,Pi),Ct&&nt.fog===!0&&qt.refreshFogUniforms(vn,Ct),qt.refreshMaterialUniforms(vn,nt,St,bt,L.state.transmissionRenderTarget[R.id]),Au.upload(H,Oi(Jt),vn,ae)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Au.upload(H,Oi(Jt),vn,ae),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ye.setValue(H,"center",K.center),Ye.setValue(H,"modelViewMatrix",K.modelViewMatrix),Ye.setValue(H,"normalMatrix",K.normalMatrix),Ye.setValue(H,"modelMatrix",K.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const bn=nt.uniformsGroups;for(let Mn=0,Ai=bn.length;Mn<Ai;Mn++){const Bi=bn[Mn];Lt.update(Bi,_n),Lt.bind(Bi,_n)}}return _n}function Iu(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Vo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,q,st){const nt=Yt.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),Yt.get(R.texture).__webglTexture=q,Yt.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:st,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const st=Yt.get(R);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const Ja=H.createFramebuffer();this.setRenderTarget=function(R,q=0,st=0){w=R,rt=q,D=st;let nt=!0,K=null,Ct=!1,Nt=!1;if(R){const It=Yt.get(R);if(It.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(H.FRAMEBUFFER,null),nt=!1;else if(It.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(It.__hasExternalTextures)ae.rebindTextures(R,Yt.get(R.texture).__webglTexture,Yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Zt=R.depthTexture;if(It.__boundDepthTexture!==Zt){if(Zt!==null&&Yt.has(Zt)&&(R.width!==Zt.image.width||R.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Nt=!0);const ee=Yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?K=ee[q][st]:K=ee[q],Ct=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?K=Yt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?K=ee[st]:K=ee,ut.copy(R.viewport),gt.copy(R.scissor),pt=R.scissorTest}else ut.copy(ot).multiplyScalar(St).floor(),gt.copy(ft).multiplyScalar(St).floor(),pt=Et;if(st!==0&&(K=Ja),Ht.bindFramebuffer(H.FRAMEBUFFER,K)&&nt&&Ht.drawBuffers(R,K),Ht.viewport(ut),Ht.scissor(gt),Ht.setScissorTest(pt),Ct){const It=Yt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,It.__webglTexture,st)}else if(Nt){const It=q;for(let $t=0;$t<R.textures.length;$t++){const ee=Yt.get(R.textures[$t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$t,ee.__webglTexture,st,It)}}else if(R!==null&&st!==0){const It=Yt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,It.__webglTexture,st)}j=-1},this.readRenderTargetPixels=function(R,q,st,nt,K,Ct,Nt,zt=0){if(!(R&&R.isWebGLRenderTarget)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(It=It[Nt]),It){Ht.bindFramebuffer(H.FRAMEBUFFER,It);try{const $t=R.textures[zt],ee=$t.format,Zt=$t.type;if(!Oe.textureFormatReadable(ee)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Zt)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-nt&&st>=0&&st<=R.height-K&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt),H.readPixels(q,st,nt,K,ne.convert(ee),ne.convert(Zt),Ct))}finally{const $t=w!==null?Yt.get(w).__webglFramebuffer:null;Ht.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,q,st,nt,K,Ct,Nt,zt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(It=It[Nt]),It)if(q>=0&&q<=R.width-nt&&st>=0&&st<=R.height-K){Ht.bindFramebuffer(H.FRAMEBUFFER,It);const $t=R.textures[zt],ee=$t.format,Zt=$t.type;if(!Oe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ce),H.bufferData(H.PIXEL_PACK_BUFFER,Ct.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt),H.readPixels(q,st,nt,K,ne.convert(ee),ne.convert(Zt),0);const Te=w!==null?Yt.get(w).__webglFramebuffer:null;Ht.bindFramebuffer(H.FRAMEBUFFER,Te);const Ce=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await lS(H,Ce,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ce),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ct),H.deleteBuffer(ce),H.deleteSync(Ce),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,st=0){const nt=Math.pow(2,-st),K=Math.floor(R.image.width*nt),Ct=Math.floor(R.image.height*nt),Nt=q!==null?q.x:0,zt=q!==null?q.y:0;ae.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,st,0,0,Nt,zt,K,Ct),Ht.unbindTexture()};const Os=H.createFramebuffer(),ga=H.createFramebuffer();this.copyTextureToTexture=function(R,q,st=null,nt=null,K=0,Ct=null){Ct===null&&(K!==0?(Bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=K,K=0):Ct=0);let Nt,zt,It,$t,ee,Zt,ce,Te,Ce;const Se=R.isCompressedTexture?R.mipmaps[Ct]:R.image;if(st!==null)Nt=st.max.x-st.min.x,zt=st.max.y-st.min.y,It=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,ee=st.min.y,Zt=st.isBox3?st.min.z:0;else{const pn=Math.pow(2,-K);Nt=Math.floor(Se.width*pn),zt=Math.floor(Se.height*pn),R.isDataArrayTexture?It=Se.depth:R.isData3DTexture?It=Math.floor(Se.depth*pn):It=1,$t=0,ee=0,Zt=0}nt!==null?(ce=nt.x,Te=nt.y,Ce=nt.z):(ce=0,Te=0,Ce=0);const Ne=ne.convert(q.format),Jt=ne.convert(q.type);let Xe;q.isData3DTexture?(ae.setTexture3D(q,0),Xe=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ae.setTexture2DArray(q,0),Xe=H.TEXTURE_2D_ARRAY):(ae.setTexture2D(q,0),Xe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const ye=H.getParameter(H.UNPACK_ROW_LENGTH),_n=H.getParameter(H.UNPACK_IMAGE_HEIGHT),xa=H.getParameter(H.UNPACK_SKIP_PIXELS),We=H.getParameter(H.UNPACK_SKIP_ROWS),Pi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Se.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Zt);const Ye=R.isDataArrayTexture||R.isData3DTexture,vn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const pn=Yt.get(R),bn=Yt.get(q),Mn=Yt.get(pn.__renderTarget),Ai=Yt.get(bn.__renderTarget);Ht.bindFramebuffer(H.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ht.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Bi=0;Bi<It;Bi++)Ye&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(R).__webglTexture,K,Zt+Bi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(q).__webglTexture,Ct,Ce+Bi)),H.blitFramebuffer($t,ee,Nt,zt,ce,Te,Nt,zt,H.DEPTH_BUFFER_BIT,H.NEAREST);Ht.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Yt.has(R)){const pn=Yt.get(R),bn=Yt.get(q);Ht.bindFramebuffer(H.READ_FRAMEBUFFER,Os),Ht.bindFramebuffer(H.DRAW_FRAMEBUFFER,ga);for(let Mn=0;Mn<It;Mn++)Ye?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,K,Zt+Mn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,K),vn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,Ct,Ce+Mn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,Ct),K!==0?H.blitFramebuffer($t,ee,Nt,zt,ce,Te,Nt,zt,H.COLOR_BUFFER_BIT,H.NEAREST):vn?H.copyTexSubImage3D(Xe,Ct,ce,Te,Ce+Mn,$t,ee,Nt,zt):H.copyTexSubImage2D(Xe,Ct,ce,Te,$t,ee,Nt,zt);Ht.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else vn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Xe,Ct,ce,Te,Ce,Nt,zt,It,Ne,Jt,Se.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Xe,Ct,ce,Te,Ce,Nt,zt,It,Ne,Se.data):H.texSubImage3D(Xe,Ct,ce,Te,Ce,Nt,zt,It,Ne,Jt,Se):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ct,ce,Te,Nt,zt,Ne,Jt,Se.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ct,ce,Te,Se.width,Se.height,Ne,Se.data):H.texSubImage2D(H.TEXTURE_2D,Ct,ce,Te,Nt,zt,Ne,Jt,Se);H.pixelStorei(H.UNPACK_ROW_LENGTH,ye),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_n),H.pixelStorei(H.UNPACK_SKIP_PIXELS,xa),H.pixelStorei(H.UNPACK_SKIP_ROWS,We),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Pi),Ct===0&&q.generateMipmaps&&H.generateMipmap(Xe),Ht.unbindTexture()},this.initRenderTarget=function(R){Yt.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),Ht.unbindTexture()},this.resetState=function(){rt=0,D=0,w=null,Ht.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}function UE(){const o=pi.useRef(null);return pi.useEffect(()=>{const e=o.current,i=new OS,r=new di(75,e.clientWidth/e.clientHeight,.1,1e3);r.position.z=5;const l=new DE({alpha:!0,antialias:!0});l.setSize(e.clientWidth,e.clientHeight),e.appendChild(l.domElement);const c=new wh(1.5,.05,16,100),d=new Ch({color:4482541,transparent:!0,opacity:.4}),h=new pa(c,d);i.add(h);const m=new Ti,p=200,_=new Float32Array(p*3);for(let A=0;A<p*3;A++)_[A]=(Math.random()-.5)*6;m.setAttribute("position",new Ei(_,3));const x=new jx({color:4482541,size:.05,transparent:!0,opacity:.3}),b=new IS(m,x);i.add(b);const M=()=>{requestAnimationFrame(M),h.rotation.x+=.002,h.rotation.y+=.004,b.rotation.y+=.001,b.rotation.x+=.001,l.render(i,r)};return M(),()=>{e.removeChild(l.domElement)}},[]),I.jsx("div",{ref:o,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}})}const Jx="/cakralogy/assets/logo-DH2YA2kd.png";function LE(){return I.jsx("section",{id:"About",className:"about-wrapper",children:I.jsxs("div",{className:"about-container",children:[I.jsxs("div",{className:"about-content",children:[I.jsxs("h2",{className:"about-title",children:["Tentang ",I.jsx("span",{children:"CakraLogy"})]}),I.jsx("p",{className:"about-desc",children:"Cakralogy adalah platform pembelajaran teknologi yang dirancang untuk menyediakan akses edukasi digital yang berkualitas, terstruktur, dan sesuai dengan standar kompetensi industri. Melalui pendekatan berbasis kurikulum dan metodologi pembelajaran modern, Cakralogy berupaya mendukung peningkatan kemampuan generasi digital dalam memahami konsep pemrograman, teknologi informasi, serta pengembangan aplikasi."}),I.jsxs("div",{className:"about-cards",children:[I.jsxs("div",{className:"about-card",children:[I.jsx("h3",{children:"Akses pembelajaran fleksibel"}),I.jsx("p",{children:"Memungkinkan pengguna belajar kapan saja dan dimana saja sesuai ritme masing-masing."})]}),I.jsxs("div",{className:"about-card",children:[I.jsx("h3",{children:"UI/UX Modern"}),I.jsx("p",{children:"Desain elegan, ringan, dan ramah pengguna untuk pengalaman terbaik."})]}),I.jsxs("div",{className:"about-card",children:[I.jsx("h3",{children:"Interaktif"}),I.jsx("p",{children:"Latihan, proyek mini, dan penjelasan visual untuk memudahkan pemahaman."})]})]})]}),I.jsxs("div",{className:"about-image-box",children:[I.jsx("img",{src:Jx,alt:"About illustration"}),I.jsx(UE,{}),I.jsx("div",{className:"ring3d"})]})]})})}const xx=[{title:"Belajar Pemrograman Sekarang!",subtitle:"Materi interaktif + proyek nyata untuk skill profesional.",cta:"Daftar Sekarang",bg:"#4a90e2",popupTitle:"Daftar Kursus Pemrograman",popupSubtitle:"Dapatkan akses ke modul interaktif, proyek nyata, dan mentor profesional!"},{title:"Tingkatkan Skill Digitalmu",subtitle:"Kursus modern & pengalaman belajar nyata.",cta:"Pelajari Lebih Lanjut",bg:"#4a90e2",popupTitle:"Skill Digital Lebih Cepat",popupSubtitle:"Pelajari tool modern, teknik terbaru, dan praktik langsung di proyek nyata."},{title:"Platform Edukasi Profesional",subtitle:"Materi terverifikasi + pengalaman belajar optimal.",cta:"Gabung Sekarang",bg:"#4a90e2",popupTitle:"Belajar dengan Profesional",popupSubtitle:"Materi terverifikasi + pengalaman belajar optimal untuk kariermu!"},{title:"Project Nyata & Interaktif",subtitle:"Latihan langsung agar cepat mahir.",cta:"Coba Sekarang",bg:"#4a90e2",popupTitle:"Latihan Proyek Interaktif",popupSubtitle:"Kerjakan proyek nyata langsung agar skill-mu lebih cepat berkembang."}];function NE(){const[o,e]=pi.useState(0),[i,r]=pi.useState(!1),[l,c]=pi.useState({}),d=m=>{c(m),r(!0)},h=()=>r(!1);return I.jsxs("section",{className:"cta-ad-wrapper",children:[I.jsx("div",{className:"cta-ad-container",style:{transform:`translateX(-${o*100}%)`},children:xx.map((m,p)=>I.jsxs("div",{className:"cta-ad-banner",style:{background:m.bg},children:[I.jsx("h2",{children:m.title}),I.jsx("p",{children:m.subtitle}),I.jsx("button",{onClick:()=>d(m),children:m.cta})]},p))}),I.jsx("div",{className:"cta-ad-dots",children:xx.map((m,p)=>I.jsx("span",{className:`dot ${o===p?"active":""}`,onClick:()=>e(p)},p))}),i&&I.jsx("div",{className:"popup-overlay",onClick:h,children:I.jsxs("div",{className:"popup-content",style:{background:l.bg},onClick:m=>m.stopPropagation(),children:[I.jsx("h2",{children:l.popupTitle}),I.jsx("p",{children:l.popupSubtitle}),I.jsx("button",{className:"close-btn",onClick:h,children:"Tutup"})]})})]})}const OE=({onOpenCourse:o})=>{const e=[{id:1,title:"HTML Basics",category:"Frontend",description:"Belajar dasar HTML."},{id:2,title:"CSS Grid",category:"Frontend",description:"Belajar layout CSS Grid."},{id:3,title:"JavaScript",category:"Frontend",description:"Belajar JavaScript modern."},{id:4,title:"React JS",category:"Frontend",description:"Menguasai React untuk web interaktif."},{id:5,title:"Bootstrap",category:"Framework",description:"Membuat UI cepat dan responsive."},{id:6,title:"Tailwind CSS",category:"Framework",description:"Utility-first CSS modern."},{id:7,title:"FlowBite",category:"Framework",description:"UI components berbasis Tailwind."},{id:8,title:"AOS Animation",category:"Framework",description:"Animasi scroll modern."},{id:9,title:"PHP",category:"Backend",description:"Pemrograman backend untuk web dinamis."},{id:10,title:"Laravel",category:"Backend",description:"Framework Laravel modern."},{id:11,title:"MySQL",category:"Database",description:"Sistem database populer untuk backend."},{id:12,title:"MariaDB",category:"Database",description:"Database kuat & kompatibel MySQL."},{id:13,title:"PostgreSQL",category:"Database",description:"Database canggih & powerful."},{id:14,title:"Python",category:"Backend",description:"Bahasa serbaguna untuk backend."},{id:15,title:"Golang",category:"Backend",description:"Backend cepat & efisien."},{id:16,title:"Flask",category:"Backend",description:"Framework Python untuk backend ringan."},{id:17,title:"Geekshelp",category:"Framework",description:"Template Website sederhana"},{id:18,title:"Visual Studio Code",category:"Framework",description:"Visual Studio Code (VSCode) adalah editor kode "}],i=["All","Frontend","Framework","Backend","Database"],[r,l]=pi.useState("All"),c=r==="All"?e:e.filter(d=>d.category===r);return I.jsxs("div",{id:"Edu",className:"edu-menu",children:[I.jsx("h2",{className:"edu-title",children:"Menu Edukasi"}),I.jsx("div",{className:"filter-buttons",children:i.map(d=>I.jsx("button",{className:`filter-btn ${r===d?"active":""}`,onClick:()=>l(d),children:d},d))}),I.jsx("div",{className:"edu-grid",children:c.map(d=>I.jsxs("div",{className:"edu-card",onClick:()=>o(d.id),children:[I.jsx("h3",{children:d.title}),I.jsx("p",{className:"category",children:d.category}),I.jsx("p",{className:"description",children:d.description}),I.jsx("button",{className:"detail-btn",children:"Lihat Detail →"})]},d.id))})]})},PE=()=>{const[o,e]=pi.useState(!1),i=()=>{e(!0)},r=()=>{e(!1)};return I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"ad-banner",children:I.jsxs("div",{className:"ad-content",children:[I.jsxs("div",{className:"ad-text",children:[I.jsx("h2",{children:"Promo Spesial: Kursus Premium 50% OFF!"}),I.jsx("p",{children:"Daftar sekarang dan tingkatkan kemampuan codingmu dengan materi eksklusif."}),I.jsx("button",{className:"ad-btn",onClick:i,children:"Daftar Sekarang"})]}),I.jsx("div",{className:"ad-image",children:I.jsx("img",{src:Jx,alt:"Promo"})})]})}),o&&I.jsx("div",{className:"popup-overlay",onClick:r,children:I.jsxs("div",{className:"popup-content",onClick:l=>l.stopPropagation(),children:[I.jsx("h2",{children:"Daftar Kursus Premium"}),I.jsx("p",{children:"Dapatkan akses materi eksklusif, proyek nyata, dan mentor profesional. Promo hanya berlaku hari ini!"}),I.jsx("button",{className:"close-btn",onClick:r,children:"Tutup"})]})})]})},BE=()=>{const o=["https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg","https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg","https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png","https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg","https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg","https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg","https://flowbite.com/docs/images/logo.svg","https://www.bypeople.com/wp-content/uploads/2017/03/css-animate-scroll.jpg","https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg","https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg","https://tse4.mm.bing.net/th/id/OIP.urLHYMYPFxkcs6AC4Io9vwHaHa?pid=Api&h=220&P=0","https://tse3.mm.bing.net/th/id/OIP.4V0BH9_ds5223477MMySSAHaGC?pid=Api&h=220&P=0","https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg","https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg","https://iconlogovector.com/uploads/images/2024/04/lg-6619d74e0c9e1-GO-Golang.webp","https://www.seekpng.com/png/full/875-8753366_flask-png.png"];return I.jsxs("div",{className:"marquee-container",children:[I.jsxs("div",{className:"marquee marquee-left",children:[o.map((e,i)=>I.jsx("img",{src:e,alt:`logo-${i}`},i)),o.map((e,i)=>I.jsx("img",{src:e,alt:`logo-copy-${i}`},`copy-${i}`))]}),I.jsxs("div",{className:"marquee marquee-right",children:[o.map((e,i)=>I.jsx("img",{src:e,alt:`logo2-${i}`},i)),o.map((e,i)=>I.jsx("img",{src:e,alt:`logo2-copy-${i}`},`copy2-${i}`))]})]})},zE=[{name:"Andika",role:"Front-End Developer",photo:"https://i.pinimg.com/1200x/6e/52/14/6e5214b1bd71d4ac8c4350301bea7593.jpg",feedback:"Cakralogy membuat belajar coding menjadi mudah dan menyenangkan. Materinya lengkap dan interaktif!",rating:7},{name:"Ali",role:"Back-End Developer",photo:"https://i.pinimg.com/1200x/d6/36/d5/d636d53048eccf75fed71e3add231b94.jpg",feedback:"Platform edukasi ini sangat membantu saya memahami teknologi terbaru. UI-nya juga sangat nyaman di mata.",rating:10},{name:"Azka",role:"Full Stack Developer",photo:"https://i.pinimg.com/1200x/0b/97/6f/0b976f0a7aa1aa43870e1812eee5a55d.jpg",feedback:"Materi disampaikan dengan jelas, contoh praktiknya banyak, dan support timnya luar biasa!",rating:9},{name:"Hanifah",role:"Fron End",photo:"https://i.pinimg.com/1200x/d2/fa/c8/d2fac83f8aa6a7b7a6cf1be6a7430d01.jpg",feedback:"Belajar online jadi mudah, praktik langsung, tim support super responsif.",rating:10},{name:"Kirana",role:"Backend Developer",photo:"https://i.pinimg.com/1200x/72/a0/e1/72a0e1f4e0f7b4461911a7c56d4688e9.jpg",feedback:"Semua materi mudah dimengerti, banyak latihan nyata, dan tim support selalu siap memberikan bantuan.",rating:8},{name:"Alpan",role:"Full Stack Developer",photo:"https://i.pinimg.com/1200x/0f/f3/4b/0ff34b623b1c034e11dc8c26d3a8d308.jpg",feedback:"Penjelasannya sangat mudah dipahami, latihan praktiknya banyak, dan tim support-nya selalu siap membantu!",rating:10}],FE=()=>I.jsx("div",{id:"Testimoni",className:"testimonial-container",children:zE.map((o,e)=>I.jsxs("div",{className:"testimonial-card",children:[I.jsx("div",{className:"testimonial-photo-wrapper",children:I.jsx("img",{src:o.photo,alt:o.name,className:"testimonial-photo"})}),I.jsxs("p",{className:"testimonial-feedback",children:['"',o.feedback,'"']}),I.jsx("div",{className:"testimonial-rating",children:"⭐".repeat(o.rating)}),I.jsx("h3",{className:"testimonial-name",children:o.name}),I.jsx("span",{className:"testimonial-role",children:o.role})]},e))}),IE=()=>{const[o,e]=pi.useState({name:"",email:"",subject:"",message:""}),[i,r]=pi.useState(""),l=d=>{e({...o,[d.target.name]:d.target.value})},c=async d=>{d.preventDefault(),r("Mengirim...");try{(await fetch("https://formspree.io/f/mzzknglv",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(r("Pesan berhasil dikirim!"),e({name:"",email:"",subject:"",message:""})):r("Terjadi kesalahan, silakan coba lagi.")}catch(h){r("Terjadi kesalahan, silakan coba lagi."),console.error(h)}};return I.jsx("section",{id:"Contact",className:"contact-section",children:I.jsxs("div",{className:"contact-container",children:[I.jsx("h2",{children:"Hubungi Kami"}),I.jsx("p",{children:"Silakan isi formulir di bawah ini untuk menghubungi kami."}),I.jsxs("form",{className:"contact-form",onSubmit:c,children:[I.jsx("label",{htmlFor:"name",children:"Nama Lengkap"}),I.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Masukkan nama Anda",value:o.name,onChange:l,required:!0}),I.jsx("label",{htmlFor:"email",children:"Alamat Email"}),I.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Masukkan email Anda",value:o.email,onChange:l,required:!0}),I.jsx("label",{htmlFor:"message",children:"Pesan"}),I.jsx("textarea",{id:"message",name:"message",rows:"5",placeholder:"Tulis pesan Anda...",value:o.message,onChange:l,required:!0}),I.jsx("button",{type:"submit",children:"Kirim Pesan"})]}),i&&I.jsx("p",{className:"form-status",children:i})]})})};var Rd={exports:{}},se={};var _x;function kE(){if(_x)return se;_x=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function M(S){return S===null||typeof S!="object"?null:(S=b&&S[b]||S["@@iterator"],typeof S=="function"?S:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(S,P,ot){this.props=S,this.context=P,this.refs=y,this.updater=ot||A}v.prototype.isReactComponent={},v.prototype.setState=function(S,P){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,P,"setState")},v.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function z(){}z.prototype=v.prototype;function L(S,P,ot){this.props=S,this.context=P,this.refs=y,this.updater=ot||A}var k=L.prototype=new z;k.constructor=L,C(k,v.prototype),k.isPureReactComponent=!0;var X=Array.isArray;function O(){}var N={H:null,A:null,T:null,S:null},rt=Object.prototype.hasOwnProperty;function D(S,P,ot){var ft=ot.ref;return{$$typeof:o,type:S,key:P,ref:ft!==void 0?ft:null,props:ot}}function w(S,P){return D(S.type,P,S.props)}function j(S){return typeof S=="object"&&S!==null&&S.$$typeof===o}function it(S){var P={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ot){return P[ot]})}var ut=/\/+/g;function gt(S,P){return typeof S=="object"&&S!==null&&S.key!=null?it(""+S.key):P.toString(36)}function pt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(O,O):(S.status="pending",S.then(function(P){S.status==="pending"&&(S.status="fulfilled",S.value=P)},function(P){S.status==="pending"&&(S.status="rejected",S.reason=P)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function B(S,P,ot,ft,Et){var W=typeof S;(W==="undefined"||W==="boolean")&&(S=null);var et=!1;if(S===null)et=!0;else switch(W){case"bigint":case"string":case"number":et=!0;break;case"object":switch(S.$$typeof){case o:case e:et=!0;break;case _:return et=S._init,B(et(S._payload),P,ot,ft,Et)}}if(et)return Et=Et(S),et=ft===""?"."+gt(S,0):ft,X(Et)?(ot="",et!=null&&(ot=et.replace(ut,"$&/")+"/"),B(Et,P,ot,"",function(Vt){return Vt})):Et!=null&&(j(Et)&&(Et=w(Et,ot+(Et.key==null||S&&S.key===Et.key?"":(""+Et.key).replace(ut,"$&/")+"/")+et)),P.push(Et)),1;et=0;var Rt=ft===""?".":ft+":";if(X(S))for(var Ut=0;Ut<S.length;Ut++)ft=S[Ut],W=Rt+gt(ft,Ut),et+=B(ft,P,ot,W,Et);else if(Ut=M(S),typeof Ut=="function")for(S=Ut.call(S),Ut=0;!(ft=S.next()).done;)ft=ft.value,W=Rt+gt(ft,Ut++),et+=B(ft,P,ot,W,Et);else if(W==="object"){if(typeof S.then=="function")return B(pt(S),P,ot,ft,Et);throw P=String(S),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return et}function Z(S,P,ot){if(S==null)return S;var ft=[],Et=0;return B(S,ft,"","",function(W){return P.call(ot,W,Et++)}),ft}function Q(S){if(S._status===-1){var P=S._result;P=P(),P.then(function(ot){(S._status===0||S._status===-1)&&(S._status=1,S._result=ot)},function(ot){(S._status===0||S._status===-1)&&(S._status=2,S._result=ot)}),S._status===-1&&(S._status=0,S._result=P)}if(S._status===1)return S._result.default;throw S._result}var bt=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},St={map:Z,forEach:function(S,P,ot){Z(S,function(){P.apply(this,arguments)},ot)},count:function(S){var P=0;return Z(S,function(){P++}),P},toArray:function(S){return Z(S,function(P){return P})||[]},only:function(S){if(!j(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return se.Activity=x,se.Children=St,se.Component=v,se.Fragment=i,se.Profiler=l,se.PureComponent=L,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,se.__COMPILER_RUNTIME={__proto__:null,c:function(S){return N.H.useMemoCache(S)}},se.cache=function(S){return function(){return S.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(S,P,ot){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var ft=C({},S.props),Et=S.key;if(P!=null)for(W in P.key!==void 0&&(Et=""+P.key),P)!rt.call(P,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&P.ref===void 0||(ft[W]=P[W]);var W=arguments.length-2;if(W===1)ft.children=ot;else if(1<W){for(var et=Array(W),Rt=0;Rt<W;Rt++)et[Rt]=arguments[Rt+2];ft.children=et}return D(S.type,Et,ft)},se.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:c,_context:S},S},se.createElement=function(S,P,ot){var ft,Et={},W=null;if(P!=null)for(ft in P.key!==void 0&&(W=""+P.key),P)rt.call(P,ft)&&ft!=="key"&&ft!=="__self"&&ft!=="__source"&&(Et[ft]=P[ft]);var et=arguments.length-2;if(et===1)Et.children=ot;else if(1<et){for(var Rt=Array(et),Ut=0;Ut<et;Ut++)Rt[Ut]=arguments[Ut+2];Et.children=Rt}if(S&&S.defaultProps)for(ft in et=S.defaultProps,et)Et[ft]===void 0&&(Et[ft]=et[ft]);return D(S,W,Et)},se.createRef=function(){return{current:null}},se.forwardRef=function(S){return{$$typeof:h,render:S}},se.isValidElement=j,se.lazy=function(S){return{$$typeof:_,_payload:{_status:-1,_result:S},_init:Q}},se.memo=function(S,P){return{$$typeof:p,type:S,compare:P===void 0?null:P}},se.startTransition=function(S){var P=N.T,ot={};N.T=ot;try{var ft=S(),Et=N.S;Et!==null&&Et(ot,ft),typeof ft=="object"&&ft!==null&&typeof ft.then=="function"&&ft.then(O,bt)}catch(W){bt(W)}finally{P!==null&&ot.types!==null&&(P.types=ot.types),N.T=P}},se.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},se.use=function(S){return N.H.use(S)},se.useActionState=function(S,P,ot){return N.H.useActionState(S,P,ot)},se.useCallback=function(S,P){return N.H.useCallback(S,P)},se.useContext=function(S){return N.H.useContext(S)},se.useDebugValue=function(){},se.useDeferredValue=function(S,P){return N.H.useDeferredValue(S,P)},se.useEffect=function(S,P){return N.H.useEffect(S,P)},se.useEffectEvent=function(S){return N.H.useEffectEvent(S)},se.useId=function(){return N.H.useId()},se.useImperativeHandle=function(S,P,ot){return N.H.useImperativeHandle(S,P,ot)},se.useInsertionEffect=function(S,P){return N.H.useInsertionEffect(S,P)},se.useLayoutEffect=function(S,P){return N.H.useLayoutEffect(S,P)},se.useMemo=function(S,P){return N.H.useMemo(S,P)},se.useOptimistic=function(S,P){return N.H.useOptimistic(S,P)},se.useReducer=function(S,P,ot){return N.H.useReducer(S,P,ot)},se.useRef=function(S){return N.H.useRef(S)},se.useState=function(S){return N.H.useState(S)},se.useSyncExternalStore=function(S,P,ot){return N.H.useSyncExternalStore(S,P,ot)},se.useTransition=function(){return N.H.useTransition()},se.version="19.2.0",se}var vx;function HE(){return vx||(vx=1,Rd.exports=kE()),Rd.exports}var GE=HE();const Tr=rb(GE);var $x={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bx=Tr.createContext&&Tr.createContext($x),VE=["attr","size","title"];function jE(o,e){if(o==null)return{};var i=XE(o,e),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(l=0;l<c.length;l++)r=c[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(i[r]=o[r])}return i}function XE(o,e){if(o==null)return{};var i={};for(var r in o)if(Object.prototype.hasOwnProperty.call(o,r)){if(e.indexOf(r)>=0)continue;i[r]=o[r]}return i}function Du(){return Du=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(o[r]=i[r])}return o},Du.apply(this,arguments)}function Sx(o,e){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),i.push.apply(i,r)}return i}function Uu(o){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Sx(Object(i),!0).forEach(function(r){qE(o,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):Sx(Object(i)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(i,r))})}return o}function qE(o,e,i){return e=WE(e),e in o?Object.defineProperty(o,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[e]=i,o}function WE(o){var e=YE(o,"string");return typeof e=="symbol"?e:e+""}function YE(o,e){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var r=i.call(o,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function t_(o){return o&&o.map((e,i)=>Tr.createElement(e.tag,Uu({key:i},e.attr),t_(e.child)))}function zu(o){return e=>Tr.createElement(ZE,Du({attr:Uu({},o.attr)},e),t_(o.child))}function ZE(o){var e=i=>{var{attr:r,size:l,title:c}=o,d=jE(o,VE),h=l||i.size||"1em",m;return i.className&&(m=i.className),o.className&&(m=(m?m+" ":"")+o.className),Tr.createElement("svg",Du({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,d,{className:m,style:Uu(Uu({color:o.color||i.color},i.style),o.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&Tr.createElement("title",null,c),o.children)};return bx!==void 0?Tr.createElement(bx.Consumer,null,i=>e(i)):e($x)}function KE(o){return zu({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(o)}function QE(o){return zu({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(o)}function JE(o){return zu({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(o)}function $E(o){return zu({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(o)}const tT=()=>I.jsxs("footer",{className:"footer",children:[I.jsxs("div",{className:"footer-container",children:[I.jsxs("div",{className:"footer-logo",children:[I.jsx("h2",{children:"CakraLogy"}),I.jsx("p",{children:"Menginspirasi pembelajaran digital untuk membangun masa depan."})]}),I.jsxs("div",{className:"footer-links",children:[I.jsxs("div",{className:"link-section",children:[I.jsx("h4",{children:"Menu"}),I.jsxs("ul",{children:[I.jsx("li",{children:I.jsx("a",{href:"#courses",children:"Kursus"})}),I.jsx("li",{children:I.jsx("a",{href:"#tutorials",children:"Tutorial"})}),I.jsx("li",{children:I.jsx("a",{href:"#about",children:"Tentang Kami"})}),I.jsx("li",{children:I.jsx("a",{href:"#blog",children:"Blog"})})]})]}),I.jsxs("div",{className:"link-section",children:[I.jsx("h4",{children:"Bantuan"}),I.jsxs("ul",{children:[I.jsx("li",{children:I.jsx("a",{href:"#faq",children:"FAQ"})}),I.jsx("li",{children:I.jsx("a",{href:"#support",children:"Support"})}),I.jsx("li",{children:I.jsx("a",{href:"#contact",children:"Kontak"})})]})]})]}),I.jsxs("div",{className:"footer-social",children:[I.jsx("h4",{children:"Ikuti Kami"}),I.jsxs("div",{className:"social-icons",children:[I.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:I.jsx(KE,{})}),I.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:I.jsx($E,{})}),I.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:I.jsx(QE,{})}),I.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:I.jsx(JE,{})})]})]})]}),I.jsx("div",{className:"footer-bottom",children:I.jsx("p",{children:"© 2025 CakraLogy Edu. All rights reserved."})})]}),eT={1:{id:1,title:"HTML Basics",category:"Frontend",description:"Belajar dasar HTML untuk membangun struktur website.",modules:[{title:"Modul 1: Pengenalan HTML",submodules:[{title:"Sejarah HTML",content:"HTML dikembangkan untuk membuat struktur web."},{title:"Struktur Dasar HTML",content:"HTML, head, body, tag dasar."},{title:"Heading & Paragraph",content:"<h1>–<h6>, <p>"},{title:"Link & Anchor",content:"<a href=''>Link eksternal dan internal</a>"},{title:"Image & Media",content:"<img>, audio, video"},{title:"Form Dasar",content:"<input>, <label>, <button>"},{title:"Table",content:"<table>, <tr>, <td>, <th>"},{title:"List",content:"<ul>, <ol>, <li>"},{title:"Semantic HTML",content:"<header>, <section>, <article>, <footer>"},{title:"HTML5 New Features",content:"Canvas, video, audio, semantic tags"},{title:"Tips & Best Practice",content:"Gunakan semantic HTML, validasi tag, struktur rapi"}],exercises:["Buat halaman profil sederhana","Tambahkan gambar dan link","Buat form kontak sederhana","Buat list hobi dan table data"],miniProject:"Buat halaman portfolio sederhana lengkap dengan form, gambar, dan list"},{title:"Modul 2: HTML Lanjutan",submodules:[{title:"Meta Tag",content:"SEO, charset, viewport"},{title:"Form Lanjutan",content:"Select, radio, checkbox, textarea"},{title:"Input Validation",content:"required, pattern, type=email/number"},{title:"Iframe & Embed",content:"Menampilkan konten eksternal"},{title:"Audio & Video Controls",content:"Autoplay, loop, controls"},{title:"HTML Entities",content:"&copy;, &nbsp;, &lt;"},{title:"Tips",content:"Gunakan alt untuk gambar, label untuk input, struktur semantik"}],exercises:["Buat form registrasi lengkap","Tambahkan video dengan controls","Buat halaman test SEO meta tag"],miniProject:"Buat halaman blog statis lengkap dengan media, form, dan list artikel"}]},2:{id:2,title:"CSS Grid",category:"Frontend",description:"Belajar layout modern menggunakan CSS Grid.",modules:[{title:"Modul 1: Pengenalan CSS Grid",submodules:[{title:"Apa itu CSS Grid",content:"Layout 2D modern untuk web"},{title:"Grid Container",content:"display: grid, grid-template-columns, grid-template-rows"},{title:"Grid Item",content:"Positioning, span, start/end"},{title:"Gap & Alignment",content:"grid-gap, justify-items, align-items"},{title:"Implicit & Explicit Grid",content:"Mengatur baris/kolom otomatis vs manual"},{title:"Tips & Best Practice",content:"Gunakan naming yang jelas, responsive design"}],exercises:["Buat grid 3x3","Atur gap dan alignment","Gunakan span untuk item lebih besar"],miniProject:"Buat layout landing page sederhana dengan CSS Grid"}]},3:{id:3,title:"JavaScript",category:"Frontend",description:"Belajar JavaScript untuk web interaktif.",modules:[{title:"Modul 1: Pengenalan JS",submodules:[{title:"Sejarah JS",content:"JavaScript dikembangkan untuk membuat web interaktif"},{title:"Syntax Dasar",content:"Variable, tipe data, operator"},{title:"Function",content:"Deklarasi function, arrow function"},{title:"Array & Object",content:"Manipulasi data, looping"},{title:"DOM Manipulation",content:"getElementById, querySelector, innerHTML"},{title:"Event Handling",content:"onClick, addEventListener"},{title:"Tips & Best Practice",content:"Gunakan let/const, hindari global scope"}],exercises:["Buat fungsi menambahkan angka","Loop array dan tampilkan di console","Ubah konten DOM saat tombol diklik"],miniProject:"Buat todo list interaktif dengan add & remove task"}]},4:{id:4,title:"React JS",category:"Frontend",description:"React untuk web interaktif",modules:[{title:"Modul 1: Pengenalan React",submodules:[{title:"Apa itu React",content:"Library JS untuk UI interaktif"},{title:"JSX",content:"Sintaks mirip HTML untuk component"},{title:"Functional Component",content:"Component modern dengan hooks"},{title:"Class Component",content:"Component klasik dengan lifecycle"},{title:"Props & State",content:"Mengirim data & simpan data lokal"},{title:"Event Handling",content:"onClick, onChange, onSubmit"},{title:"List & Key",content:"Render list dengan key unik"},{title:"Conditional Rendering",content:"Render berdasarkan state"},{title:"Tips & Best Practice",content:"Pisahkan logic & UI, gunakan reusable component"}],exercises:["Buat functional component sederhana","Gunakan props untuk mengirim data","Render list dengan key unik","Buat conditional rendering berdasarkan state"],miniProject:"Buat halaman profil lengkap dengan foto, deskripsi, dan hobi"}]},5:{id:5,title:"Bootstrap",category:"Framework",description:"Membuat UI cepat dan responsive",modules:[{title:"Modul 1: Pengenalan Bootstrap",submodules:[{title:"Apa itu Bootstrap",content:"Framework CSS untuk membuat UI responsive cepat"},{title:"Grid System",content:"12 columns grid, container, row, col"},{title:"Typography",content:"Heading, paragraph, text utilities"},{title:"Colors & Backgrounds",content:"Text color, background color, contextual classes"},{title:"Buttons & Button Groups",content:"Membuat tombol dan grup tombol"},{title:"Alerts & Badges",content:"Membuat notifikasi dan badge"},{title:"Forms Basic",content:"Form controls, labels, input types"},{title:"Tips Best Practice",content:"Gunakan container fluid untuk responsive design"}],exercises:["Buat layout 3 kolom menggunakan grid","Tambahkan tombol & alert","Buat form login sederhana"],miniProject:"Buat landing page responsive dengan header, card produk, tombol CTA"},{title:"Modul 2: Components Lanjutan",submodules:[{title:"Navbar",content:"Responsive navbar dengan collapse"},{title:"Cards",content:"Membuat card product dan profile"},{title:"Modals",content:"Dialog box interaktif"},{title:"Dropdown & Navs",content:"Menu dropdown & navigation pills"},{title:"Carousel",content:"Slider gambar dengan control"},{title:"Tips",content:"Gunakan utilities untuk spacing, margin, padding"}],exercises:["Buat navbar responsive","Tambahkan carousel di halaman","Gunakan dropdown & navs untuk menu"],miniProject:"Buat halaman produk lengkap dengan card, carousel, tombol beli"},{title:"Modul 3: Utilities & Responsive Design",submodules:[{title:"Spacing Utilities",content:"Margin, padding, gap"},{title:"Display Utilities",content:"d-none, d-flex, d-grid"},{title:"Flex & Grid",content:"Flexbox utilities untuk layout"},{title:"Responsive Breakpoints",content:"sm, md, lg, xl"},{title:"Visibility & Overflow",content:"Mengatur visibility & scroll"},{title:"Tips",content:"Gunakan responsive utilities untuk mobile first"}],exercises:["Buat layout grid responsive","Gunakan flex utilities untuk card layout","Uji responsive pada mobile & desktop"],miniProject:"Buat halaman portfolio responsive dengan card & grid layout"},{title:"Modul 4: Forms & Interactions",submodules:[{title:"Form Validation",content:"validity, required, pattern"},{title:"Input Groups",content:"Form input dengan icon dan button"},{title:"Custom Checkboxes & Radios",content:"Styling form control"},{title:"Tooltips & Popovers",content:"Info tambahan dengan hover/click"},{title:"Collapse & Accordion",content:"Membuat konten collapsible"},{title:"Tips",content:"Gunakan proper aria-label untuk aksesibilitas"}],exercises:["Buat form registrasi dengan validation","Tambahkan tooltip & popover di button","Buat accordion FAQ"],miniProject:"Buat halaman contact lengkap dengan form, validation, dan FAQ collapsible"},{title:"Modul 5: Project Bootstrap Lengkap",submodules:[{title:"Landing Page",content:"Header, hero section, cards, testimonial"},{title:"Navbar & Footer",content:"Responsive navigation dan footer"},{title:"Form & Modal",content:"Form contact, modal subscribe"},{title:"Carousel & Grid",content:"Menampilkan produk & portfolio"},{title:"Custom CSS & Utilities",content:"Overwrite class default untuk branding"},{title:"Tips",content:"Pisahkan custom CSS ke file tersendiri, gunakan class utilities Bootstrap"}],exercises:["Buat landing page lengkap dengan hero, grid, card","Tambahkan form & modal","Tambahkan carousel untuk showcase"],miniProject:"Buat landing page produk interaktif lengkap dengan grid, modal, carousel, dan form"}]},6:{id:6,title:"Tailwind CSS",category:"Framework",description:"Utility-first CSS modern",modules:[{title:"Modul 1: Pengenalan Tailwind",submodules:[{title:"Apa itu Tailwind",content:"Utility-first CSS framework untuk styling cepat"},{title:"Install & Setup",content:"Install via CDN, NPM, atau Vite/React"},{title:"Utility Classes",content:"Text, color, background, spacing"},{title:"Responsive Design",content:"sm, md, lg, xl, 2xl"},{title:"Pseudo-class",content:"hover:, focus:, active:, group-hover"},{title:"Tips",content:"Gunakan class dengan nama jelas, hindari custom CSS berlebihan"}],exercises:["Buat hero section dengan tailwind","Atur text & spacing menggunakan utility","Tambahkan responsive classes untuk mobile"],miniProject:"Buat landing page responsive menggunakan Tailwind CSS"},{title:"Modul 2: Layout & Flex",submodules:[{title:"Container & Grid",content:"container, grid-cols, gap"},{title:"Flex Utilities",content:"flex, justify-center, items-center, space-x"},{title:"Positioning",content:"relative, absolute, top, left, right"},{title:"Width & Height",content:"w-full, h-screen, max-w, max-h"},{title:"Z-index & Overflow",content:"z-10, overflow-hidden, overflow-auto"},{title:"Tips",content:"Gunakan flex untuk align, grid untuk layout kompleks"}],exercises:["Buat layout grid 3 kolom","Gunakan flex utilities untuk align button & card","Tambahkan responsive width & height"],miniProject:"Buat landing page portfolio dengan grid responsive & flex layout"},{title:"Modul 3: Styling Components",submodules:[{title:"Buttons & Typography",content:"class text-white, bg-blue-500, rounded"},{title:"Cards",content:"shadow-lg, rounded-lg, p-6"},{title:"Forms",content:"input, select, checkbox styling"},{title:"Backgrounds & Gradients",content:"bg-gradient-to-r, from-blue-400, to-green-400"},{title:"Hover & Animation",content:"transition, duration-300, ease-in-out"},{title:"Tips",content:"Gunakan group-hover untuk efek kompleks"}],exercises:["Buat card produk dengan hover effect","Tambahkan gradient background di hero section","Buat form registrasi dengan styling tailwind"],miniProject:"Buat dashboard admin dengan cards, forms, dan hover effect"},{title:"Modul 4: Interactivity",submodules:[{title:"Dark Mode",content:"Gunakan class dark: untuk styling dark mode"},{title:"Transitions & Transform",content:"transition, transform, scale, rotate"},{title:"Dropdown & Menu",content:"Gunakan hidden & block untuk toggle"},{title:"Modal & Popover",content:"Gunakan fixed, z-50, backdrop-blur"},{title:"Animations",content:"animate-spin, animate-pulse, animate-bounce"},{title:"Tips",content:"Gunakan Tailwind plugin jika fitur tambahan dibutuhkan"}],exercises:["Buat modal dengan backdrop blur","Tambahkan dropdown menu interaktif","Implement dark mode toggle"],miniProject:"Buat website interaktif dengan modal, dropdown, hover & dark mode"},{title:"Modul 5: Project Tailwind Lengkap",submodules:[{title:"Landing Page",content:"Hero section, features, testimonial"},{title:"Cards & Buttons",content:"Card produk, CTA button, hover effect"},{title:"Forms",content:"Contact & subscription form"},{title:"Responsive & Dark Mode",content:"Mobile responsive & dark toggle"},{title:"Animation",content:"Hover, pulse, bounce, slide-in"},{title:"Tips",content:"Gunakan Tailwind plugin untuk forms & typography"}],exercises:["Buat landing page lengkap responsive","Tambahkan dark mode toggle","Tambahkan animasi hover & slide-in"],miniProject:"Buat landing page interaktif lengkap responsive + dark mode + animation"}]},7:{id:7,title:"FlowBite",category:"Framework",description:"UI components berbasis Tailwind",modules:[{title:"Modul 1: Pengenalan FlowBite",submodules:[{title:"Apa itu FlowBite",content:"Library component siap pakai berbasis Tailwind"},{title:"Install & Setup",content:"Install via NPM / CDN"},{title:"Button & Modal Components",content:"Membuat button, modal interaktif"},{title:"Navbar & Dropdown",content:"Navbar responsive, dropdown menu"},{title:"Form Components",content:"Input, select, checkbox, switch"},{title:"Tips",content:"Gunakan sesuai Tailwind, jangan override class default terlalu banyak"}],exercises:["Buat navbar responsive","Tambahkan modal interaktif","Gunakan button dan form components"],miniProject:"Buat dashboard admin dengan navbar, modal, form, card"}]},8:{id:8,title:"AOS Animation",category:"Framework",description:"Animasi scroll modern",modules:[{title:"Modul 1: Pengenalan AOS",submodules:[{title:"Apa itu AOS",content:"Animate on Scroll library"},{title:"Install & Setup",content:"Install via NPM / CDN"},{title:"Data Attributes",content:"data-aos, data-aos-duration, data-aos-delay"},{title:"Animasi Dasar",content:"fade, slide, zoom, flip"},{title:"Tips",content:"Gunakan easing & duration sesuai kebutuhan"}],exercises:["Tambahkan animasi fade pada section","Gunakan delay & duration berbeda","Gunakan animation slide pada image"],miniProject:"Buat landing page dengan animasi scroll untuk semua section"}]},9:{id:9,title:"PHP",category:"Backend",description:"Pemrograman backend untuk web dinamis",modules:[{title:"Modul 1: Pengenalan PHP",submodules:[{title:"Sejarah PHP",content:"PHP adalah bahasa server-side scripting untuk web dinamis"},{title:"Syntax Dasar",content:"Variable, tipe data, operator, string"},{title:"Control Structure",content:"if, else, switch, ternary operator"},{title:"Function",content:"Deklarasi function, parameter, return value"},{title:"Tips",content:"Gunakan error reporting, penamaan variable jelas"}],exercises:["Buat halaman hello world","Gunakan if-else untuk menampilkan greeting","Buat function untuk menghitung luas"],miniProject:"Buat form input data user & tampilkan hasil"},{title:"Modul 2: Array & Loop",submodules:[{title:"Array Dasar",content:"Indexed array, associative array"},{title:"Looping",content:"for, foreach, while, do-while"},{title:"Array Function",content:"count, array_push, array_pop, sort, implode"},{title:"Tips",content:"Gunakan foreach untuk iterasi array"}],exercises:["Buat array buah dan tampilkan semua","Hitung jumlah elemen array","Sort array dan tampilkan hasil"],miniProject:"Buat daftar produk dengan array & loop"},{title:"Modul 3: Form Handling",submodules:[{title:"GET & POST",content:"Mengambil data dari form"},{title:"Sanitasi Input",content:"htmlspecialchars, trim, filter_var"},{title:"Validation Dasar",content:"Cek kosong, panjang string, tipe data"},{title:"Tips",content:"Selalu sanitize input untuk keamanan"}],exercises:["Buat form login dan ambil data POST","Validasi input username & password"],miniProject:"Buat form registrasi dengan validasi lengkap"},{title:"Modul 4: Koneksi Database",submodules:[{title:"MySQLi & PDO",content:"Koneksi database MySQL menggunakan PHP"},{title:"CRUD Dasar",content:"Create, Read, Update, Delete"},{title:"Prepared Statement",content:"Menghindari SQL Injection"},{title:"Tips",content:"Gunakan PDO untuk keamanan dan fleksibilitas"}],exercises:["Koneksi database & tampilkan tabel users","Buat fungsi insert data baru","Update data user menggunakan prepared statement"],miniProject:"Buat aplikasi CRUD user lengkap dengan PHP & MySQL"},{title:"Modul 5: Project PHP Lengkap",submodules:[{title:"Aplikasi Web Dinamis",content:"Integrasi form, database, dan halaman dinamis"},{title:"Login & Session",content:"Session, cookie, otentikasi user"},{title:"Tips",content:"Pisahkan logic & UI, gunakan include/require untuk modular"}],exercises:["Buat login & session","Integrasikan CRUD ke aplikasi","Tambahkan validasi input"],miniProject:"Buat aplikasi web lengkap user management dengan login, CRUD, dan session"}]},10:{id:10,title:"Laravel",category:"Backend",description:"Framework Laravel modern",modules:[{title:"Modul 1: Pengenalan Laravel",submodules:[{title:"Apa itu Laravel",content:"Framework PHP modern untuk web apps"},{title:"Installasi & Setup",content:"Composer, Laravel new project"},{title:"Routing Dasar",content:"Route get, post, resource"},{title:"Controller",content:"Membuat controller, method, dependency injection"},{title:"Tips",content:"Gunakan artisan untuk scaffolding"}],exercises:["Buat route & controller dasar","Buat halaman welcome sederhana"],miniProject:"Buat halaman landing page menggunakan Laravel route & controller"},{title:"Modul 2: Blade Template",submodules:[{title:"Blade Syntax",content:"{{ }}, @if, @foreach, @include, @yield"},{title:"Layouts & Components",content:"Pisahkan template, reusable components"},{title:"Tips",content:"Gunakan template inheritance untuk maintainable code"}],exercises:["Buat layout utama dengan Blade","Tambahkan komponen card reusable"],miniProject:"Buat halaman artikel lengkap dengan layout Blade dan komponen"},{title:"Modul 3: Database & Eloquent",submodules:[{title:"Migration",content:"Buat tabel & kolom database"},{title:"Model & Eloquent ORM",content:"CRUD data menggunakan model"},{title:"Query Builder",content:"Query kompleks dengan fluent syntax"},{title:"Tips",content:"Gunakan Eloquent untuk kecepatan pengembangan"}],exercises:["Buat tabel users & artikel","Insert data menggunakan Eloquent","Update & delete data"],miniProject:"Buat aplikasi blog sederhana menggunakan Laravel & Eloquent"},{title:"Modul 4: Middleware & Authentication",submodules:[{title:"Middleware",content:"Filter request, cek login, role user"},{title:"Authentication",content:"Buat login, register, logout"},{title:"Tips",content:"Gunakan auth scaffolding Laravel"}],exercises:["Buat login & register","Tambahkan middleware untuk halaman admin"],miniProject:"Buat aplikasi web dengan login, role, dan akses terbatas"},{title:"Modul 5: Project Laravel Lengkap",submodules:[{title:"Integrasi CRUD, Blade, Auth",content:"Buat aplikasi lengkap user & artikel management"},{title:"Tips & Best Practice",content:"Pisahkan logic ke service & controller, gunakan validation"}],exercises:["Buat halaman dashboard admin","Integrasikan CRUD dengan authentication"],miniProject:"Buat aplikasi blog / CMS lengkap dengan Laravel"}]},11:{id:11,title:"MySQL",category:"Database",description:"Sistem database populer untuk backend",modules:[{title:"Modul 1: Pengenalan MySQL",submodules:[{title:"Sejarah MySQL",content:"Database relasional populer"},{title:"Install & Setup",content:"XAMPP, Laragon, atau server MySQL"},{title:"Database & Table",content:"CREATE, DROP, ALTER"},{title:"Data Types",content:"INT, VARCHAR, DATE, TEXT, BOOLEAN"},{title:"Tips",content:"Gunakan nama tabel & kolom jelas, konsisten"}],exercises:["Buat database baru","Buat tabel user & product"],miniProject:"Buat database e-commerce sederhana"},{title:"Modul 2: Query Dasar",submodules:[{title:"SELECT, INSERT, UPDATE, DELETE",content:"Query dasar CRUD"},{title:"WHERE, ORDER BY, LIMIT",content:"Filter data sesuai kondisi"},{title:"Tips",content:"Selalu backup data sebelum update/delete"}],exercises:["Insert 5 user ke tabel","Update user tertentu","Hapus data tertentu"],miniProject:"Buat laporan user dengan query SELECT dan filter"},{title:"Modul 3: Joins & Relasi",submodules:[{title:"INNER JOIN, LEFT JOIN, RIGHT JOIN",content:"Menggabungkan tabel"},{title:"Relasi 1-1, 1-Many, Many-Many",content:"Konsep relasi antar tabel"},{title:"Tips",content:"Gunakan foreign key & indexing untuk performa"}],exercises:["Buat 2 tabel & join data","Tampilkan daftar user dengan order by"],miniProject:"Buat aplikasi reporting sederhana dengan join tabel"},{title:"Modul 4: Index & Performance",submodules:[{title:"Indexing",content:"Primary key, unique, index"},{title:"Query Optimization",content:"EXPLAIN, LIMIT, indexing"},{title:"Tips",content:"Gunakan indexing untuk query besar"}],exercises:["Tambahkan index pada tabel user","Cek query plan menggunakan EXPLAIN"],miniProject:"Optimalkan database blog besar dengan indexing"},{title:"Modul 5: Project MySQL Lengkap",submodules:[{title:"Integrasi CRUD & Joins",content:"Buat database & tabel lengkap e-commerce"},{title:"Tips",content:"Gunakan relational design & indexing"}],exercises:["Buat database toko online dengan tabel users, products, orders","Implementasikan query report & join"],miniProject:"Buat aplikasi backend database e-commerce lengkap"}]},12:{id:12,title:"MariaDB",category:"Database",description:"Database kuat & kompatibel MySQL",modules:[{title:"Modul 1: Pengenalan MariaDB",submodules:[{title:"Apa itu MariaDB",content:"Database fork dari MySQL, lebih cepat & aman"},{title:"Install & Setup",content:"XAMPP, Laragon, Docker"},{title:"Database & Table",content:"CREATE DATABASE, CREATE TABLE"},{title:"Tips",content:"Kompatibel MySQL, gunakan untuk performa lebih baik"}],exercises:["Buat database baru di MariaDB","Buat tabel user & product"],miniProject:"Buat database blog sederhana"},{title:"Modul 2: Query & CRUD",submodules:[{title:"SELECT, INSERT, UPDATE, DELETE",content:"Query dasar CRUD"},{title:"Filter & Sorting",content:"WHERE, ORDER BY, LIMIT"},{title:"Tips",content:"Gunakan prepared statement di PHP untuk keamanan"}],exercises:["Insert data 5 user","Update data produk tertentu","Hapus data user"],miniProject:"Buat laporan user & produk menggunakan MariaDB"},{title:"Modul 3: Joins & Relasi",submodules:[{title:"INNER JOIN, LEFT JOIN",content:"Menggabungkan tabel"},{title:"Foreign Key",content:"Menjaga integritas data"},{title:"Tips",content:"Gunakan indexing untuk performa query"}],exercises:["Buat join tabel user & order","Tampilkan order user tertentu"],miniProject:"Buat laporan penjualan menggunakan join tabel"},{title:"Modul 4: Backup & Restore",submodules:[{title:"Backup Database",content:"mysqldump / tool GUI"},{title:"Restore Database",content:"Import SQL file"},{title:"Tips",content:"Backup rutin untuk keamanan data"}],exercises:["Backup database e-commerce","Restore database ke server baru"],miniProject:"Buat backup & restore sistem database toko online"},{title:"Modul 5: Project MariaDB Lengkap",submodules:[{title:"Integrasi CRUD & Joins",content:"Buat aplikasi database dengan relasi tabel lengkap"},{title:"Tips",content:"Gunakan indexing & foreign key untuk performa dan integritas"}],exercises:["Buat database blog dengan user, post, comments","Implementasikan CRUD lengkap & join"],miniProject:"Buat aplikasi backend blog e-commerce menggunakan MariaDB"}]},13:{id:13,title:"PostgreSQL",category:"Database",description:"Database canggih & powerful",modules:[{title:"Modul 1: Pengenalan PostgreSQL",submodules:[{title:"Apa itu PostgreSQL",content:"Database relasional open-source, canggih dan scalable"},{title:"Install & Setup",content:"Install via pgAdmin, Docker, atau OS package manager"},{title:"Database & Schema",content:"Buat database, schema, tabel"},{title:"Data Types",content:"INT, VARCHAR, TEXT, BOOLEAN, JSON, ARRAY"},{title:"Tips",content:"Gunakan schema untuk organisasi tabel lebih baik"}],exercises:["Buat database baru dan schema","Buat tabel user & product dengan tipe data lengkap"],miniProject:"Buat database e-commerce lengkap dengan schema"},{title:"Modul 2: Query Dasar",submodules:[{title:"SELECT, INSERT, UPDATE, DELETE",content:"Query dasar CRUD"},{title:"WHERE, ORDER BY, LIMIT, OFFSET",content:"Filter & sort data"},{title:"Tips",content:"Gunakan LIMIT & OFFSET untuk pagination"}],exercises:["Insert data user & product","Update harga produk tertentu","Hapus user yang tidak aktif"],miniProject:"Buat laporan pengguna & produk lengkap"},{title:"Modul 3: Joins & Relasi",submodules:[{title:"INNER, LEFT, RIGHT JOIN",content:"Gabungkan data dari beberapa tabel"},{title:"One-to-One, One-to-Many, Many-to-Many",content:"Relasi antar tabel"},{title:"Tips",content:"Gunakan foreign key & indexing untuk integritas & performa"}],exercises:["Buat join user & orders","Tampilkan semua order user tertentu"],miniProject:"Buat sistem laporan penjualan lengkap"},{title:"Modul 4: Indexing & Performance",submodules:[{title:"Primary Key & Unique Index",content:"Menjaga integritas data"},{title:"B-Tree, Hash, GIN, GiST Index",content:"Jenis index untuk query cepat"},{title:"Query Optimization",content:"EXPLAIN ANALYZE untuk cek performa"},{title:"Tips",content:"Gunakan indexing di kolom yang sering dicari"}],exercises:["Buat index pada tabel produk","Cek query plan menggunakan EXPLAIN ANALYZE"],miniProject:"Optimasi database toko online besar dengan indexing"},{title:"Modul 5: Project PostgreSQL Lengkap",submodules:[{title:"Integrasi CRUD & Relasi",content:"Buat aplikasi backend dengan multiple table relasi"},{title:"Tips",content:"Gunakan schema, indexing, foreign key untuk performa & integritas"}],exercises:["Buat database toko online lengkap dengan user, product, orders","Implementasikan query laporan penjualan & user"],miniProject:"Buat backend e-commerce lengkap menggunakan PostgreSQL"}]},14:{id:14,title:"Python",category:"Backend",description:"Bahasa serbaguna untuk backend",modules:[{title:"Modul 1: Pengenalan Python",submodules:[{title:"Sejarah & Kelebihan Python",content:"Bahasa serbaguna, mudah dipelajari, banyak framework"},{title:"Setup & IDE",content:"Install Python, gunakan VSCode atau PyCharm"},{title:"Syntax Dasar",content:"Variable, tipe data, operator"},{title:"Tips",content:"Gunakan virtual environment untuk project"}],exercises:["Buat script hello world","Coba variable, string, number, boolean"],miniProject:"Buat kalkulator sederhana di console"},{title:"Modul 2: Control Flow & Function",submodules:[{title:"Conditionals",content:"if, elif, else"},{title:"Loops",content:"for, while, nested loop"},{title:"Function",content:"def, return, parameter"},{title:"Tips",content:"Gunakan docstring di function"}],exercises:["Buat program cek ganjil/genap","Loop 1-10 dan tampilkan hasil","Buat function hitung luas persegi panjang"],miniProject:"Buat mini project kalkulator statistik"},{title:"Modul 3: Data Structure",submodules:[{title:"List, Tuple, Set, Dictionary",content:"Menyimpan data secara efisien"},{title:"Comprehension",content:"List & dict comprehension"},{title:"Tips",content:"Pahami mutable & immutable"}],exercises:["Buat list nama teman","Loop dictionary untuk print key & value","Gunakan set untuk unik data"],miniProject:"Buat program pengelola daftar siswa & nilai"},{title:"Modul 4: File & Module",submodules:[{title:"File Handling",content:"open, read, write, append"},{title:"Module & Package",content:"import, pip install"},{title:"Tips",content:"Gunakan exception handling saat buka file"}],exercises:["Buat file text & tulis data","Baca data dari file & tampilkan"],miniProject:"Buat aplikasi sederhana penyimpanan catatan harian"},{title:"Modul 5: Backend Web dengan Flask",submodules:[{title:"Setup Flask",content:"Install Flask, buat app.py"},{title:"Routing & Template",content:"@app.route, render_template"},{title:"Forms & Request",content:"GET, POST, request.form"},{title:"Tips",content:"Pisahkan routes & templates untuk maintainable code"}],exercises:["Buat route home & about","Buat form contact dan tampilkan data input"],miniProject:"Buat aplikasi blog sederhana dengan Flask"}]},15:{id:15,title:"Golang",category:"Backend",description:"Backend cepat & efisien",modules:[{title:"Modul 1: Pengenalan Golang",submodules:[{title:"Apa itu Golang",content:"Bahasa backend cepat & performa tinggi"},{title:"Install & Setup",content:"Install Golang, setup GOPATH & workspace"},{title:"Syntax Dasar",content:"Variable, tipe data, operator"},{title:"Tips",content:"Gunakan go fmt untuk format code otomatis"}],exercises:["Buat program hello world","Coba variable & tipe data"],miniProject:"Buat kalkulator sederhana di console"},{title:"Modul 2: Function & Struct",submodules:[{title:"Function",content:"Deklarasi, parameter, return"},{title:"Struct",content:"Membuat tipe data custom"},{title:"Tips",content:"Gunakan struct untuk representasi object"}],exercises:["Buat function hitung luas","Buat struct mahasiswa dengan nama, umur, nilai"],miniProject:"Buat program pengelola data mahasiswa sederhana"},{title:"Modul 3: Routing & Server",submodules:[{title:"net/http package",content:"Membuat server & route"},{title:"Request & Response",content:"Handle GET & POST"},{title:"Tips",content:"Gunakan goroutine untuk concurrent request"}],exercises:["Buat server port 8080","Buat route /home dan /about"],miniProject:"Buat API sederhana dengan route GET & POST"},{title:"Modul 4: Database & CRUD",submodules:[{title:"Database Connection",content:"Connect ke MySQL/PostgreSQL"},{title:"CRUD Operation",content:"Insert, Select, Update, Delete"},{title:"Tips",content:"Gunakan sqlx atau GORM untuk ORM"}],exercises:["Connect ke database","Insert & select data"],miniProject:"Buat API backend CRUD user sederhana"},{title:"Modul 5: Project Golang Lengkap",submodules:[{title:"API Backend",content:"Integrasi server, routing, CRUD"},{title:"Tips",content:"Pisahkan controller, service, model untuk maintainable code"}],exercises:["Buat API user management","Tambahkan validasi input & error handling"],miniProject:"Buat backend web lengkap menggunakan Golang & database"}]},16:{id:16,title:"Flask",category:"Backend",description:"Framework Python untuk backend ringan",modules:[{title:"Modul 1: Pengenalan Flask",submodules:[{title:"Apa itu Flask",content:"Framework Python ringan untuk web backend"},{title:"Install & Setup",content:"Install Flask, buat virtual environment"},{title:"Hello World App",content:"Buat app.py & route /"}],exercises:["Buat app hello world","Test route / di browser"],miniProject:"Buat halaman home sederhana"},{title:"Modul 2: Routing & Template",submodules:[{title:"Route Basics",content:"@app.route('/')"},{title:"Template Rendering",content:"render_template, Jinja2 syntax"},{title:"Tips",content:"Pisahkan templates & static files"}],exercises:["Buat route /about & /contact","Render template dengan data dinamis"],miniProject:"Buat multi-page website sederhana dengan Flask"},{title:"Modul 3: Forms & Request",submodules:[{title:"GET & POST",content:"request.method, request.form"},{title:"Form Validation",content:"Cek input kosong, tipe data"},{title:"Tips",content:"Gunakan flash messages untuk feedback user"}],exercises:["Buat form login & registrasi","Validasi input & tampilkan error"],miniProject:"Buat aplikasi login sederhana dengan Flask"},{title:"Modul 4: Database & ORM",submodules:[{title:"SQLAlchemy Setup",content:"Connect ke database, definisi model"},{title:"CRUD dengan ORM",content:"Insert, select, update, delete"},{title:"Tips",content:"Pisahkan model & routes untuk maintainable code"}],exercises:["Buat model User & Post","Insert data menggunakan ORM"],miniProject:"Buat blog sederhana dengan Flask & SQLAlchemy"},{title:"Modul 5: Project Flask Lengkap",submodules:[{title:"Integrasi Routing, Template, Database",content:"Buat aplikasi web lengkap"},{title:"Tips & Best Practice",content:"Gunakan blueprint, validation, dan modular code"}],exercises:["Buat aplikasi web dengan login, CRUD post","Integrasikan template & database"],miniProject:"Buat aplikasi blog lengkap dengan user, post, CRUD & template"}]},17:{id:17,title:"GeeksHelp",category:"Educational Portal",description:"Belajar berbagai teknologi dan keterampilan coding melalui GeeksHelp, portal edukasi interaktif untuk mahasiswa dan developer.",modules:[{title:"Modul 1: Pengenalan GeeksHelp",submodules:[{title:"Apa itu GeeksHelp",content:"GeeksHelp adalah portal edukasi interaktif yang menyediakan materi coding, tutorial, quiz, dan project untuk mahasiswa dan developer."},{title:"Fitur Utama",content:"Materi HTML, CSS, JavaScript, Web Development, AI, Computer Fundamentals, Quiz, Mini Projects, dan forum diskusi."},{title:"Manfaat untuk Developer",content:"Mempercepat pembelajaran, meningkatkan skill praktis, dan menyediakan komunitas untuk bertanya dan berbagi solusi."}],exercises:["Jelajahi halaman tutorial HTML, CSS, dan JavaScript","Ikuti salah satu quiz untuk menguji pemahaman","Baca artikel terbaru di GeeksHelp blog"],miniProject:"Buat catatan pribadi dari tutorial dan quiz favorit"},{title:"Modul 2: Belajar HTML & CSS",submodules:[{title:"HTML Dasar",content:"Membuat struktur halaman web menggunakan tag HTML."},{title:"CSS Styling",content:"Memberi gaya pada halaman web menggunakan CSS."},{title:"Project Mini",content:"Membuat halaman profil sederhana menggunakan HTML & CSS."}],exercises:["Buat halaman HTML sederhana","Tambahkan CSS untuk mempercantik halaman","Eksperimen dengan layout Flexbox dan Grid"],miniProject:"Buat landing page portofolio sederhana"},{title:"Modul 3: JavaScript & Interaktivitas",submodules:[{title:"Dasar JavaScript",content:"Memahami variabel, fungsi, dan event handling."},{title:"DOM Manipulation",content:"Mengubah konten dan style halaman secara dinamis."},{title:"Mini Project JS",content:"Membuat kalkulator sederhana atau todo list."}],exercises:["Buat fungsi JavaScript untuk validasi form","Manipulasi DOM untuk menambahkan elemen baru","Coba project mini interaktif"],miniProject:"Buat aplikasi todo list dengan JavaScript"},{title:"Modul 4: Proyek & Kolaborasi",submodules:[{title:"Mini Projects",content:"Mengerjakan proyek kecil dari template GeeksHelp."},{title:"Forum Diskusi",content:"Bertanya dan membantu sesama developer di forum."},{title:"Kolaborasi Proyek",content:"Membuat proyek bersama teman atau komunitas."}],exercises:["Pilih mini project dan selesaikan sesuai instruksi","Tanyakan satu pertanyaan coding di forum","Buat repository GitHub untuk project kolaborasi"],miniProject:"Buat website sederhana menggunakan HTML, CSS, dan JS, lalu share ke komunitas GeeksHelp"}]},18:{id:18,title:"Belajar VSCode Lengkap",category:"Developer Tools",description:"Pelajari Visual Studio Code dari instalasi hingga penggunaan lanjutan untuk coding, debugging, dan kolaborasi. Tutorial lengkap dengan video step-by-step untuk setiap submodul.",modules:[{title:"Modul 1: Pengenalan VSCode",submodules:[{title:"Apa itu VSCode",content:"Visual Studio Code (VSCode) adalah editor kode ringan, cepat, dan gratis dengan fitur seperti debugging, extensions, dan Git integration.",video:"https://www.youtube.com/watch?v=VqCgcpAypFQ"},{title:"Fitur Utama VSCode",content:"Syntax highlighting, IntelliSense, integrated terminal, extensions marketplace, Git integration, multi-language support, live preview.",video:"https://www.youtube.com/watch?v=VqCgcpAypFQ&t=45s"},{title:"Manfaat Menggunakan VSCode",content:"Mempercepat penulisan kode, mempermudah debugging, menyediakan ekstensi untuk banyak bahasa, dan komunitas besar.",video:"https://www.youtube.com/watch?v=VqCgcpAypFQ&t=90s"}],exercises:["Jelajahi tampilan VSCode dan menu utama","Coba fitur Quick Open (Ctrl+P / Cmd+P)","Cek extensions marketplace"],miniProject:"Buat catatan tentang fitur VSCode yang paling berguna untuk kamu"},{title:"Modul 2: Instalasi VSCode",submodules:[{title:"Download VSCode",content:"Unduh VSCode dari situs resmi: https://code.visualstudio.com/ untuk Windows, macOS, atau Linux.",video:"https://www.youtube.com/watch?v=WPqXP_kLzpo"},{title:"Install VSCode",content:"Ikuti panduan instalasi sesuai OS. Pilih lokasi instalasi, centang opsi 'Add to PATH', dan selesaikan proses instalasi.",video:"https://www.youtube.com/watch?v=WPqXP_kLzpo&t=60s"},{title:"Menjalankan VSCode Pertama Kali",content:"Buka VSCode, buat workspace baru, dan kenali tampilan utama: Explorer, Source Control, Run & Debug, Extensions.",video:"https://www.youtube.com/watch?v=WPqXP_kLzpo&t=120s"}],exercises:["Download VSCode sesuai OS","Install VSCode dan buka editor pertama kali","Buat folder project baru dan buka di VSCode"],miniProject:"Setup workspace pertama dengan folder project dan file README.md"},{title:"Modul 3: Penggunaan Dasar VSCode",submodules:[{title:"Membuat File & Menulis Kode",content:"Buat file baru dengan ekstensi sesuai bahasa: .html, .css, .js. Tulis kode sederhana.",video:"https://www.youtube.com/watch?v=WPqXP_kLzpo&t=180s"},{title:"Extensions Populer",content:"Install extensions seperti Live Server, Prettier, ESLint, Code Runner.",video:"https://www.youtube.com/watch?v=WPqXP_kLzpo&t=240s"},{title:"Debugging & Integrated Terminal",content:"Gunakan terminal untuk menjalankan perintah, dan debug tools untuk memeriksa kode.",video:"https://www.youtube.com/watch?v=WPqXP_kLzpo&t=300s"},{title:"Tips Menggunakan VSCode",content:"Shortcut, multi-cursor, snippets, Zen Mode, split editor, dan command palette.",video:"https://www.youtube.com/watch?v=WPqXP_kLzpo&t=360s"}],exercises:["Buat file HTML, CSS, dan JS sederhana","Install dan jalankan Live Server","Coba debug kode menggunakan fitur Debug VSCode","Eksperimen dengan shortcut dan multi-cursor"],miniProject:"Buat halaman web sederhana dan jalankan di Live Server"},{title:"Modul 4: Kolaborasi & Integrasi Lanjutan",submodules:[{title:"Integrasi Git",content:"Hubungkan project dengan GitHub, commit perubahan, push/pull langsung dari VSCode.",video:"https://www.youtube.com/watch?v=fje3M8qYPOU"},{title:"Live Share",content:"Berbagi coding session real-time dengan teman menggunakan Live Share extension.",video:"https://www.youtube.com/watch?v=fje3M8qYPOU&t=60s"},{title:"Project & Workspace Management",content:"Kelola beberapa project, gunakan workspace, dan organize folder dengan mudah.",video:"https://www.youtube.com/watch?v=fje3M8qYPOU&t=120s"},{title:"Tips Lanjutan",content:"Custom theme, settings sync, debugging lanjutan, snippets, dan task automation.",video:"https://www.youtube.com/watch?v=fje3M8qYPOU&t=180s"}],exercises:["Push project pertama ke GitHub","Coba Live Share dengan teman","Atur workspace dengan beberapa project","Gunakan task automation untuk build sederhana"],miniProject:"Buat project web interaktif dan share ke GitHub, kemudian lakukan sesi Live Share dengan teman"}]}},nT=({courseId:o,onBack:e})=>{const i=eT[o];return i?I.jsxs("div",{className:"course-page",children:[I.jsxs("div",{className:"course-hero",children:[I.jsx("button",{className:"back-btn",onClick:e,children:"← Kembali"}),I.jsx("h1",{className:"course-title",children:i.title}),I.jsx("p",{className:"course-category",children:i.category}),I.jsx("p",{className:"course-shortdesc",children:i.description})]}),I.jsxs("div",{className:"course-content-card",children:[i.content&&I.jsxs(I.Fragment,{children:[I.jsx("h2",{children:"📘 Tentang Kursus"}),I.jsx("p",{className:"course-full-content",children:i.content})]}),i.modules&&i.modules.length>0&&I.jsxs(I.Fragment,{children:[I.jsx("h2",{className:"sub-title",children:"📍 Modul Kursus"}),i.modules.map((r,l)=>I.jsxs("div",{className:"module-card",children:[I.jsx("h3",{children:r.title}),r.submodules&&r.submodules.length>0&&I.jsx("ul",{className:"topic-list",children:r.submodules.map((c,d)=>I.jsxs("li",{children:[I.jsxs("strong",{children:[c.title,":"]})," ",c.content,c.video&&I.jsx("div",{children:I.jsx("a",{href:c.video,target:"_blank",rel:"noopener noreferrer",className:"video-btn",children:"▶ Tonton Video"})})]},d))}),r.exercises&&r.exercises.length>0&&I.jsxs(I.Fragment,{children:[I.jsx("h4",{children:"📝 Latihan"}),I.jsx("ul",{className:"topic-list",children:r.exercises.map((c,d)=>I.jsx("li",{children:c},d))})]}),r.miniProject&&I.jsxs(I.Fragment,{children:[I.jsx("h4",{children:"💻 Mini Project"}),I.jsx("p",{children:r.miniProject})]})]},l))]}),i.benefits&&i.benefits.length>0&&I.jsxs(I.Fragment,{children:[I.jsx("h2",{className:"sub-title",children:"✨ Benefit Belajar Kursus Ini"}),I.jsx("ul",{className:"benefit-list",children:i.benefits.map((r,l)=>I.jsx("li",{children:r},l))})]})]})]}):I.jsx("p",{children:"Kursus tidak ditemukan"})};function iT(){const[o,e]=pi.useState(null),i=l=>{e(l),window.scrollTo(0,0)},r=()=>{e(null),window.scrollTo(0,0)};return I.jsxs(I.Fragment,{children:[!o&&I.jsxs(I.Fragment,{children:[I.jsx(gb,{}),I.jsx(xb,{}),I.jsx(_b,{}),I.jsx(LE,{}),I.jsx(NE,{}),I.jsx(OE,{onOpenCourse:i}),I.jsx(PE,{}),I.jsx(BE,{}),I.jsx(FE,{}),I.jsx(IE,{}),I.jsx(tT,{})]}),o&&I.jsx(nT,{courseId:o,onBack:r})]})}mb.createRoot(document.getElementById("root")).render(I.jsx(pi.StrictMode,{children:I.jsx(iT,{})}));
