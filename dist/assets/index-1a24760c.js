(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ja={exports:{}},rl={},qa={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=Symbol.for("react.element"),gc=Symbol.for("react.portal"),vc=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),xc=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Ec=Symbol.for("react.memo"),Cc=Symbol.for("react.lazy"),Uo=Symbol.iterator;function Pc(e){return e===null||typeof e!="object"?null:(e=Uo&&e[Uo]||e["@@iterator"],typeof e=="function"?e:null)}var ba={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},es=Object.assign,ns={};function at(e,n,t){this.props=e,this.context=n,this.refs=ns,this.updater=t||ba}at.prototype.isReactComponent={};at.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};at.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ts(){}ts.prototype=at.prototype;function Vi(e,n,t){this.props=e,this.context=n,this.refs=ns,this.updater=t||ba}var Hi=Vi.prototype=new ts;Hi.constructor=Vi;es(Hi,at.prototype);Hi.isPureReactComponent=!0;var Wo=Array.isArray,rs=Object.prototype.hasOwnProperty,Qi={current:null},ls={key:!0,ref:!0,__self:!0,__source:!0};function is(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)rs.call(n,r)&&!ls.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var s=Array(a),d=0;d<a;d++)s[d]=arguments[d+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Zt,type:e,key:i,ref:o,props:l,_owner:Qi.current}}function zc(e,n){return{$$typeof:Zt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ki(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zt}function _c(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Bo=/\/+/g;function Sl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?_c(""+e.key):n.toString(36)}function xr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Zt:case gc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Sl(o,0):r,Wo(l)?(t="",e!=null&&(t=e.replace(Bo,"$&/")+"/"),xr(l,n,t,"",function(d){return d})):l!=null&&(Ki(l)&&(l=zc(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Bo,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",Wo(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Sl(i,a);o+=xr(i,n,t,s,l)}else if(s=Pc(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Sl(i,a++),o+=xr(i,n,t,s,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function rr(e,n,t){if(e==null)return e;var r=[],l=0;return xr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Tc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Sr={transition:null},Oc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:Qi};function os(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:rr,forEach:function(e,n,t){rr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return rr(e,function(){n++}),n},toArray:function(e){return rr(e,function(n){return n})||[]},only:function(e){if(!Ki(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=at;L.Fragment=vc;L.Profiler=wc;L.PureComponent=Vi;L.StrictMode=yc;L.Suspense=Nc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oc;L.act=os;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=es({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Qi.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)rs.call(n,s)&&!ls.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var d=0;d<s;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Zt,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:xc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kc,_context:e},e.Consumer=e};L.createElement=is;L.createFactory=function(e){var n=is.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Sc,render:e}};L.isValidElement=Ki;L.lazy=function(e){return{$$typeof:Cc,_payload:{_status:-1,_result:e},_init:Tc}};L.memo=function(e,n){return{$$typeof:Ec,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=n}};L.unstable_act=os;L.useCallback=function(e,n){return ce.current.useCallback(e,n)};L.useContext=function(e){return ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};L.useEffect=function(e,n){return ce.current.useEffect(e,n)};L.useId=function(){return ce.current.useId()};L.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return ce.current.useMemo(e,n)};L.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};L.useRef=function(e){return ce.current.useRef(e)};L.useState=function(e){return ce.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return ce.current.useTransition()};L.version="18.3.1";qa.exports=L;var A=qa.exports;const Lc=hc(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=A,Mc=Symbol.for("react.element"),jc=Symbol.for("react.fragment"),Dc=Object.prototype.hasOwnProperty,Fc=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ic={key:!0,ref:!0,__self:!0,__source:!0};function as(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Dc.call(n,r)&&!Ic.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Mc,type:e,key:i,ref:o,props:l,_owner:Fc.current}}rl.Fragment=jc;rl.jsx=as;rl.jsxs=as;Ja.exports=rl;var ss=Ja.exports;const u=ss.jsx,v=ss.jsxs;var Xl={},us={exports:{}},xe={},cs={exports:{}},ds={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,T){var O=C.length;C.push(T);e:for(;0<O;){var K=O-1>>>1,q=C[K];if(0<l(q,T))C[K]=T,C[O]=q,O=K;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var T=C[0],O=C.pop();if(O!==T){C[0]=O;e:for(var K=0,q=C.length,nr=q>>>1;K<nr;){var wn=2*(K+1)-1,xl=C[wn],kn=wn+1,tr=C[kn];if(0>l(xl,O))kn<q&&0>l(tr,xl)?(C[K]=tr,C[kn]=O,K=kn):(C[K]=xl,C[wn]=O,K=wn);else if(kn<q&&0>l(tr,O))C[K]=tr,C[kn]=O,K=kn;else break e}}return T}function l(C,T){var O=C.sortIndex-T.sortIndex;return O!==0?O:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],d=[],h=1,g=null,m=3,S=!1,y=!1,x=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var T=t(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=C)r(d),T.sortIndex=T.expirationTime,n(s,T);else break;T=t(d)}}function w(C){if(x=!1,p(C),!y)if(t(s)!==null)y=!0,wl(E);else{var T=t(d);T!==null&&kl(w,T.startTime-C)}}function E(C,T){y=!1,x&&(x=!1,f(_),_=-1),S=!0;var O=m;try{for(p(T),g=t(s);g!==null&&(!(g.expirationTime>T)||C&&!Te());){var K=g.callback;if(typeof K=="function"){g.callback=null,m=g.priorityLevel;var q=K(g.expirationTime<=T);T=e.unstable_now(),typeof q=="function"?g.callback=q:g===t(s)&&r(s),p(T)}else r(s);g=t(s)}if(g!==null)var nr=!0;else{var wn=t(d);wn!==null&&kl(w,wn.startTime-T),nr=!1}return nr}finally{g=null,m=O,S=!1}}var P=!1,z=null,_=-1,Q=5,R=-1;function Te(){return!(e.unstable_now()-R<Q)}function ct(){if(z!==null){var C=e.unstable_now();R=C;var T=!0;try{T=z(!0,C)}finally{T?dt():(P=!1,z=null)}}else P=!1}var dt;if(typeof c=="function")dt=function(){c(ct)};else if(typeof MessageChannel<"u"){var Ao=new MessageChannel,mc=Ao.port2;Ao.port1.onmessage=ct,dt=function(){mc.postMessage(null)}}else dt=function(){D(ct,0)};function wl(C){z=C,P||(P=!0,dt())}function kl(C,T){_=D(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||S||(y=!0,wl(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var O=m;m=T;try{return C()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=m;m=C;try{return T()}finally{m=O}},e.unstable_scheduleCallback=function(C,T,O){var K=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?K+O:K):O=K,C){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=O+q,C={id:h++,callback:T,priorityLevel:C,startTime:O,expirationTime:q,sortIndex:-1},O>K?(C.sortIndex=O,n(d,C),t(s)===null&&C===t(d)&&(x?(f(_),_=-1):x=!0,kl(w,O-K))):(C.sortIndex=q,n(s,C),y||S||(y=!0,wl(E))),C},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(C){var T=m;return function(){var O=m;m=T;try{return C.apply(this,arguments)}finally{m=O}}}})(ds);cs.exports=ds;var $c=cs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=A,ke=$c;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fs=new Set,Mt={};function Mn(e,n){et(e,n),et(e+"Capture",n)}function et(e,n){for(Mt[e]=n,e=0;e<n.length;e++)fs.add(n[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,Uc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vo={},Ho={};function Wc(e){return Gl.call(Ho,e)?!0:Gl.call(Vo,e)?!1:Uc.test(e)?Ho[e]=!0:(Vo[e]=!0,!1)}function Bc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vc(e,n,t,r){if(n===null||typeof n>"u"||Bc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yi=/[\-:]([a-z])/g;function Xi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Yi,Xi);re[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Yi,Xi);re[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Yi,Xi);re[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gi(e,n,t,r){var l=re.hasOwnProperty(n)?re[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Vc(n,t,l,r)&&(t=null),r||l===null?Wc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Je=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),Zi=Symbol.for("react.strict_mode"),Zl=Symbol.for("react.profiler"),ps=Symbol.for("react.provider"),ms=Symbol.for("react.context"),Ji=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),hs=Symbol.for("react.offscreen"),Qo=Symbol.iterator;function ft(e){return e===null||typeof e!="object"?null:(e=Qo&&e[Qo]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Nl;function kt(e){if(Nl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Nl=n&&n[1]||""}return`
`+Nl+e}var El=!1;function Cl(e,n){if(!e||El)return"";El=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{El=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?kt(e):""}function Hc(e){switch(e.tag){case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return kt("Suspense");case 19:return kt("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case Fn:return"Portal";case Zl:return"Profiler";case Zi:return"StrictMode";case Jl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ms:return(e.displayName||"Context")+".Consumer";case ps:return(e._context.displayName||"Context")+".Provider";case Ji:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return n=e.displayName||null,n!==null?n:bl(e.type)||"Memo";case be:n=e._payload,e=e._init;try{return bl(e(n))}catch{}}return null}function Qc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bl(n);case 8:return n===Zi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kc(e){var n=gs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ir(e){e._valueTracker||(e._valueTracker=Kc(e))}function vs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=gs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ei(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ko(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=mn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ys(e,n){n=n.checked,n!=null&&Gi(e,"checked",n,!1)}function ni(e,n){ys(e,n);var t=mn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ti(e,n.type,t):n.hasOwnProperty("defaultValue")&&ti(e,n.type,mn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Yo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ti(e,n,t){(n!=="number"||Mr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var xt=Array.isArray;function Xn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+mn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function ri(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(xt(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:mn(t)}}function ws(e,n){var t=mn(n.value),r=mn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Go(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ks(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function li(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ks(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,xs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function jt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yc=["Webkit","ms","Moz","O"];Object.keys(Et).forEach(function(e){Yc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Et[n]=Et[e]})});function Ss(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Et.hasOwnProperty(e)&&Et[e]?(""+n).trim():n+"px"}function Ns(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Ss(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Xc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ii(e,n){if(n){if(Xc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function oi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var si=null,Gn=null,Zn=null;function Zo(e){if(e=bt(e)){if(typeof si!="function")throw Error(k(280));var n=e.stateNode;n&&(n=sl(n),si(e.stateNode,e.type,n))}}function Es(e){Gn?Zn?Zn.push(e):Zn=[e]:Gn=e}function Cs(){if(Gn){var e=Gn,n=Zn;if(Zn=Gn=null,Zo(e),n)for(e=0;e<n.length;e++)Zo(n[e])}}function Ps(e,n){return e(n)}function zs(){}var Pl=!1;function _s(e,n,t){if(Pl)return e(n,t);Pl=!0;try{return Ps(e,n,t)}finally{Pl=!1,(Gn!==null||Zn!==null)&&(zs(),Cs())}}function Dt(e,n){var t=e.stateNode;if(t===null)return null;var r=sl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var ui=!1;if(Ye)try{var pt={};Object.defineProperty(pt,"passive",{get:function(){ui=!0}}),window.addEventListener("test",pt,pt),window.removeEventListener("test",pt,pt)}catch{ui=!1}function Gc(e,n,t,r,l,i,o,a,s){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(h){this.onError(h)}}var Ct=!1,jr=null,Dr=!1,ci=null,Zc={onError:function(e){Ct=!0,jr=e}};function Jc(e,n,t,r,l,i,o,a,s){Ct=!1,jr=null,Gc.apply(Zc,arguments)}function qc(e,n,t,r,l,i,o,a,s){if(Jc.apply(this,arguments),Ct){if(Ct){var d=jr;Ct=!1,jr=null}else throw Error(k(198));Dr||(Dr=!0,ci=d)}}function jn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ts(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Jo(e){if(jn(e)!==e)throw Error(k(188))}function bc(e){var n=e.alternate;if(!n){if(n=jn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Jo(l),e;if(i===r)return Jo(l),n;i=i.sibling}throw Error(k(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function Os(e){return e=bc(e),e!==null?Ls(e):null}function Ls(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ls(e);if(n!==null)return n;e=e.sibling}return null}var Rs=ke.unstable_scheduleCallback,qo=ke.unstable_cancelCallback,ed=ke.unstable_shouldYield,nd=ke.unstable_requestPaint,Y=ke.unstable_now,td=ke.unstable_getCurrentPriorityLevel,eo=ke.unstable_ImmediatePriority,Ms=ke.unstable_UserBlockingPriority,Fr=ke.unstable_NormalPriority,rd=ke.unstable_LowPriority,js=ke.unstable_IdlePriority,ll=null,Ue=null;function ld(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:ad,id=Math.log,od=Math.LN2;function ad(e){return e>>>=0,e===0?32:31-(id(e)/od|0)|0}var ar=64,sr=4194304;function St(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~l;a!==0?r=St(a):(i&=o,i!==0&&(r=St(i)))}else o=t&~l,o!==0?r=St(o):i!==0&&(r=St(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-je(n),l=1<<t,r|=e[t],n&=~l;return r}function sd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-je(i),a=1<<o,s=l[o];s===-1?(!(a&t)||a&r)&&(l[o]=sd(a,n)):s<=n&&(e.expiredLanes|=a),i&=~a}}function di(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ds(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function zl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Jt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-je(n),e[n]=t}function cd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-je(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function no(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-je(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var j=0;function Fs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Is,to,$s,As,Us,fi=!1,ur=[],on=null,an=null,sn=null,Ft=new Map,It=new Map,nn=[],dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bo(e,n){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Ft.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":It.delete(n.pointerId)}}function mt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=bt(n),n!==null&&to(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function fd(e,n,t,r,l){switch(n){case"focusin":return on=mt(on,e,n,t,r,l),!0;case"dragenter":return an=mt(an,e,n,t,r,l),!0;case"mouseover":return sn=mt(sn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Ft.set(i,mt(Ft.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,It.set(i,mt(It.get(i)||null,e,n,t,r,l)),!0}return!1}function Ws(e){var n=Nn(e.target);if(n!==null){var t=jn(n);if(t!==null){if(n=t.tag,n===13){if(n=Ts(t),n!==null){e.blockedOn=n,Us(e.priority,function(){$s(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=pi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ai=r,t.target.dispatchEvent(r),ai=null}else return n=bt(t),n!==null&&to(n),e.blockedOn=t,!1;n.shift()}return!0}function ea(e,n,t){Nr(e)&&t.delete(n)}function pd(){fi=!1,on!==null&&Nr(on)&&(on=null),an!==null&&Nr(an)&&(an=null),sn!==null&&Nr(sn)&&(sn=null),Ft.forEach(ea),It.forEach(ea)}function ht(e,n){e.blockedOn===n&&(e.blockedOn=null,fi||(fi=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,pd)))}function $t(e){function n(l){return ht(l,e)}if(0<ur.length){ht(ur[0],e);for(var t=1;t<ur.length;t++){var r=ur[t];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&ht(on,e),an!==null&&ht(an,e),sn!==null&&ht(sn,e),Ft.forEach(n),It.forEach(n),t=0;t<nn.length;t++)r=nn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(t=nn[0],t.blockedOn===null);)Ws(t),t.blockedOn===null&&nn.shift()}var Jn=Je.ReactCurrentBatchConfig,$r=!0;function md(e,n,t,r){var l=j,i=Jn.transition;Jn.transition=null;try{j=1,ro(e,n,t,r)}finally{j=l,Jn.transition=i}}function hd(e,n,t,r){var l=j,i=Jn.transition;Jn.transition=null;try{j=4,ro(e,n,t,r)}finally{j=l,Jn.transition=i}}function ro(e,n,t,r){if($r){var l=pi(e,n,t,r);if(l===null)Il(e,n,r,Ar,t),bo(e,r);else if(fd(l,e,n,t,r))r.stopPropagation();else if(bo(e,r),n&4&&-1<dd.indexOf(e)){for(;l!==null;){var i=bt(l);if(i!==null&&Is(i),i=pi(e,n,t,r),i===null&&Il(e,n,r,Ar,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Il(e,n,r,null,t)}}var Ar=null;function pi(e,n,t,r){if(Ar=null,e=bi(r),e=Nn(e),e!==null)if(n=jn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ts(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ar=e,null}function Bs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(td()){case eo:return 1;case Ms:return 4;case Fr:case rd:return 16;case js:return 536870912;default:return 16}default:return 16}}var rn=null,lo=null,Er=null;function Vs(){if(Er)return Er;var e,n=lo,t=n.length,r,l="value"in rn?rn.value:rn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function Cr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function na(){return!1}function Se(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cr:na,this.isPropagationStopped=na,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),n}var st={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=Se(st),qt=V({},st,{view:0,detail:0}),gd=Se(qt),_l,Tl,gt,il=V({},qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gt&&(gt&&e.type==="mousemove"?(_l=e.screenX-gt.screenX,Tl=e.screenY-gt.screenY):Tl=_l=0,gt=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),ta=Se(il),vd=V({},il,{dataTransfer:0}),yd=Se(vd),wd=V({},qt,{relatedTarget:0}),Ol=Se(wd),kd=V({},st,{animationName:0,elapsedTime:0,pseudoElement:0}),xd=Se(kd),Sd=V({},st,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nd=Se(Sd),Ed=V({},st,{data:0}),ra=Se(Ed),Cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _d(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zd[e])?!!n[e]:!1}function oo(){return _d}var Td=V({},qt,{key:function(e){if(e.key){var n=Cd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oo,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Od=Se(Td),Ld=V({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),la=Se(Ld),Rd=V({},qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oo}),Md=Se(Rd),jd=V({},st,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=Se(jd),Fd=V({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=Se(Fd),$d=[9,13,27,32],ao=Ye&&"CompositionEvent"in window,Pt=null;Ye&&"documentMode"in document&&(Pt=document.documentMode);var Ad=Ye&&"TextEvent"in window&&!Pt,Hs=Ye&&(!ao||Pt&&8<Pt&&11>=Pt),ia=String.fromCharCode(32),oa=!1;function Qs(e,n){switch(e){case"keyup":return $d.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Ud(e,n){switch(e){case"compositionend":return Ks(n);case"keypress":return n.which!==32?null:(oa=!0,ia);case"textInput":return e=n.data,e===ia&&oa?null:e;default:return null}}function Wd(e,n){if($n)return e==="compositionend"||!ao&&Qs(e,n)?(e=Vs(),Er=lo=rn=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hs&&n.locale!=="ko"?null:n.data;default:return null}}var Bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function aa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bd[e.type]:n==="textarea"}function Ys(e,n,t,r){Es(r),n=Ur(n,"onChange"),0<n.length&&(t=new io("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var zt=null,At=null;function Vd(e){lu(e,0)}function ol(e){var n=Wn(e);if(vs(n))return e}function Hd(e,n){if(e==="change")return n}var Xs=!1;if(Ye){var Ll;if(Ye){var Rl="oninput"in document;if(!Rl){var sa=document.createElement("div");sa.setAttribute("oninput","return;"),Rl=typeof sa.oninput=="function"}Ll=Rl}else Ll=!1;Xs=Ll&&(!document.documentMode||9<document.documentMode)}function ua(){zt&&(zt.detachEvent("onpropertychange",Gs),At=zt=null)}function Gs(e){if(e.propertyName==="value"&&ol(At)){var n=[];Ys(n,At,e,bi(e)),_s(Vd,n)}}function Qd(e,n,t){e==="focusin"?(ua(),zt=n,At=t,zt.attachEvent("onpropertychange",Gs)):e==="focusout"&&ua()}function Kd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(At)}function Yd(e,n){if(e==="click")return ol(n)}function Xd(e,n){if(e==="input"||e==="change")return ol(n)}function Gd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:Gd;function Ut(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Gl.call(n,l)||!Fe(e[l],n[l]))return!1}return!0}function ca(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function da(e,n){var t=ca(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ca(t)}}function Zs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Js(){for(var e=window,n=Mr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Mr(e.document)}return n}function so(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Zd(e){var n=Js(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Zs(t.ownerDocument.documentElement,t)){if(r!==null&&so(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=da(t,i);var o=da(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jd=Ye&&"documentMode"in document&&11>=document.documentMode,An=null,mi=null,_t=null,hi=!1;function fa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hi||An==null||An!==Mr(r)||(r=An,"selectionStart"in r&&so(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_t&&Ut(_t,r)||(_t=r,r=Ur(mi,"onSelect"),0<r.length&&(n=new io("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=An)))}function dr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Un={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Ml={},qs={};Ye&&(qs=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function al(e){if(Ml[e])return Ml[e];if(!Un[e])return e;var n=Un[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in qs)return Ml[e]=n[t];return e}var bs=al("animationend"),eu=al("animationiteration"),nu=al("animationstart"),tu=al("transitionend"),ru=new Map,pa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,n){ru.set(e,n),Mn(n,[e])}for(var jl=0;jl<pa.length;jl++){var Dl=pa[jl],qd=Dl.toLowerCase(),bd=Dl[0].toUpperCase()+Dl.slice(1);gn(qd,"on"+bd)}gn(bs,"onAnimationEnd");gn(eu,"onAnimationIteration");gn(nu,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(tu,"onTransitionEnd");et("onMouseEnter",["mouseout","mouseover"]);et("onMouseLeave",["mouseout","mouseover"]);et("onPointerEnter",["pointerout","pointerover"]);et("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nt));function ma(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,qc(r,n,void 0,e),e.currentTarget=null}function lu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,d=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;ma(l,a,d),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,d=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;ma(l,a,d),i=s}}}if(Dr)throw e=ci,Dr=!1,ci=null,e}function I(e,n){var t=n[ki];t===void 0&&(t=n[ki]=new Set);var r=e+"__bubble";t.has(r)||(iu(n,e,2,!1),t.add(r))}function Fl(e,n,t){var r=0;n&&(r|=4),iu(t,e,r,n)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Wt(e){if(!e[fr]){e[fr]=!0,fs.forEach(function(t){t!=="selectionchange"&&(ef.has(t)||Fl(t,!1,e),Fl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fr]||(n[fr]=!0,Fl("selectionchange",!1,n))}}function iu(e,n,t,r){switch(Bs(n)){case 1:var l=md;break;case 4:l=hd;break;default:l=ro}t=l.bind(null,n,t,e),l=void 0,!ui||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Il(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Nn(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}_s(function(){var d=i,h=bi(t),g=[];e:{var m=ru.get(e);if(m!==void 0){var S=io,y=e;switch(e){case"keypress":if(Cr(t)===0)break e;case"keydown":case"keyup":S=Od;break;case"focusin":y="focus",S=Ol;break;case"focusout":y="blur",S=Ol;break;case"beforeblur":case"afterblur":S=Ol;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Md;break;case bs:case eu:case nu:S=xd;break;case tu:S=Dd;break;case"scroll":S=gd;break;case"wheel":S=Id;break;case"copy":case"cut":case"paste":S=Nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=la}var x=(n&4)!==0,D=!x&&e==="scroll",f=x?m!==null?m+"Capture":null:m;x=[];for(var c=d,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Dt(c,f),w!=null&&x.push(Bt(c,w,p)))),D)break;c=c.return}0<x.length&&(m=new S(m,y,null,t,h),g.push({event:m,listeners:x}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&t!==ai&&(y=t.relatedTarget||t.fromElement)&&(Nn(y)||y[Xe]))break e;if((S||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,S?(y=t.relatedTarget||t.toElement,S=d,y=y?Nn(y):null,y!==null&&(D=jn(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(S=null,y=d),S!==y)){if(x=ta,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=la,w="onPointerLeave",f="onPointerEnter",c="pointer"),D=S==null?m:Wn(S),p=y==null?m:Wn(y),m=new x(w,c+"leave",S,t,h),m.target=D,m.relatedTarget=p,w=null,Nn(h)===d&&(x=new x(f,c+"enter",y,t,h),x.target=p,x.relatedTarget=D,w=x),D=w,S&&y)n:{for(x=S,f=y,c=0,p=x;p;p=Dn(p))c++;for(p=0,w=f;w;w=Dn(w))p++;for(;0<c-p;)x=Dn(x),c--;for(;0<p-c;)f=Dn(f),p--;for(;c--;){if(x===f||f!==null&&x===f.alternate)break n;x=Dn(x),f=Dn(f)}x=null}else x=null;S!==null&&ha(g,m,S,x,!1),y!==null&&D!==null&&ha(g,D,y,x,!0)}}e:{if(m=d?Wn(d):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var E=Hd;else if(aa(m))if(Xs)E=Xd;else{E=Kd;var P=Qd}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Yd);if(E&&(E=E(e,d))){Ys(g,E,t,h);break e}P&&P(e,m,d),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&ti(m,"number",m.value)}switch(P=d?Wn(d):window,e){case"focusin":(aa(P)||P.contentEditable==="true")&&(An=P,mi=d,_t=null);break;case"focusout":_t=mi=An=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,fa(g,t,h);break;case"selectionchange":if(Jd)break;case"keydown":case"keyup":fa(g,t,h)}var z;if(ao)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else $n?Qs(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Hs&&t.locale!=="ko"&&($n||_!=="onCompositionStart"?_==="onCompositionEnd"&&$n&&(z=Vs()):(rn=h,lo="value"in rn?rn.value:rn.textContent,$n=!0)),P=Ur(d,_),0<P.length&&(_=new ra(_,e,null,t,h),g.push({event:_,listeners:P}),z?_.data=z:(z=Ks(t),z!==null&&(_.data=z)))),(z=Ad?Ud(e,t):Wd(e,t))&&(d=Ur(d,"onBeforeInput"),0<d.length&&(h=new ra("onBeforeInput","beforeinput",null,t,h),g.push({event:h,listeners:d}),h.data=z))}lu(g,n)})}function Bt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ur(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Dt(e,t),i!=null&&r.unshift(Bt(e,i,l)),i=Dt(e,n),i!=null&&r.push(Bt(e,i,l))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ha(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,d=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&d!==null&&(a=d,l?(s=Dt(t,i),s!=null&&o.unshift(Bt(t,s,a))):l||(s=Dt(t,i),s!=null&&o.push(Bt(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var nf=/\r\n?/g,tf=/\u0000|\uFFFD/g;function ga(e){return(typeof e=="string"?e:""+e).replace(nf,`
`).replace(tf,"")}function pr(e,n,t){if(n=ga(n),ga(e)!==n&&t)throw Error(k(425))}function Wr(){}var gi=null,vi=null;function yi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wi=typeof setTimeout=="function"?setTimeout:void 0,rf=typeof clearTimeout=="function"?clearTimeout:void 0,va=typeof Promise=="function"?Promise:void 0,lf=typeof queueMicrotask=="function"?queueMicrotask:typeof va<"u"?function(e){return va.resolve(null).then(e).catch(of)}:wi;function of(e){setTimeout(function(){throw e})}function $l(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),$t(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);$t(n)}function un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ya(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ut=Math.random().toString(36).slice(2),Ae="__reactFiber$"+ut,Vt="__reactProps$"+ut,Xe="__reactContainer$"+ut,ki="__reactEvents$"+ut,af="__reactListeners$"+ut,sf="__reactHandles$"+ut;function Nn(e){var n=e[Ae];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Xe]||t[Ae]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ya(e);e!==null;){if(t=e[Ae])return t;e=ya(e)}return n}e=t,t=e.parentNode}return null}function bt(e){return e=e[Ae]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function sl(e){return e[Vt]||null}var xi=[],Bn=-1;function vn(e){return{current:e}}function $(e){0>Bn||(e.current=xi[Bn],xi[Bn]=null,Bn--)}function F(e,n){Bn++,xi[Bn]=e.current,e.current=n}var hn={},ae=vn(hn),me=vn(!1),_n=hn;function nt(e,n){var t=e.type.contextTypes;if(!t)return hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Br(){$(me),$(ae)}function wa(e,n,t){if(ae.current!==hn)throw Error(k(168));F(ae,n),F(me,t)}function ou(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(k(108,Qc(e)||"Unknown",l));return V({},t,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,_n=ae.current,F(ae,e),F(me,me.current),!0}function ka(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=ou(e,n,_n),r.__reactInternalMemoizedMergedChildContext=e,$(me),$(ae),F(ae,e)):$(me),F(me,t)}var Ve=null,ul=!1,Al=!1;function au(e){Ve===null?Ve=[e]:Ve.push(e)}function uf(e){ul=!0,au(e)}function yn(){if(!Al&&Ve!==null){Al=!0;var e=0,n=j;try{var t=Ve;for(j=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,ul=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Rs(eo,yn),l}finally{j=n,Al=!1}}return null}var Vn=[],Hn=0,Hr=null,Qr=0,Ne=[],Ee=0,Tn=null,He=1,Qe="";function xn(e,n){Vn[Hn++]=Qr,Vn[Hn++]=Hr,Hr=e,Qr=n}function su(e,n,t){Ne[Ee++]=He,Ne[Ee++]=Qe,Ne[Ee++]=Tn,Tn=e;var r=He;e=Qe;var l=32-je(r)-1;r&=~(1<<l),t+=1;var i=32-je(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,He=1<<32-je(n)+l|t<<l|r,Qe=i+e}else He=1<<i|t<<l|r,Qe=e}function uo(e){e.return!==null&&(xn(e,1),su(e,1,0))}function co(e){for(;e===Hr;)Hr=Vn[--Hn],Vn[Hn]=null,Qr=Vn[--Hn],Vn[Hn]=null;for(;e===Tn;)Tn=Ne[--Ee],Ne[Ee]=null,Qe=Ne[--Ee],Ne[Ee]=null,He=Ne[--Ee],Ne[Ee]=null}var we=null,ye=null,U=!1,Me=null;function uu(e,n){var t=Ce(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function xa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,we=e,ye=un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,we=e,ye=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Tn!==null?{id:He,overflow:Qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ce(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,we=e,ye=null,!0):!1;default:return!1}}function Si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ni(e){if(U){var n=ye;if(n){var t=n;if(!xa(e,n)){if(Si(e))throw Error(k(418));n=un(t.nextSibling);var r=we;n&&xa(e,n)?uu(r,t):(e.flags=e.flags&-4097|2,U=!1,we=e)}}else{if(Si(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,we=e}}}function Sa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function mr(e){if(e!==we)return!1;if(!U)return Sa(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!yi(e.type,e.memoizedProps)),n&&(n=ye)){if(Si(e))throw cu(),Error(k(418));for(;n;)uu(e,n),n=un(n.nextSibling)}if(Sa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ye=un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ye=null}}else ye=we?un(e.stateNode.nextSibling):null;return!0}function cu(){for(var e=ye;e;)e=un(e.nextSibling)}function tt(){ye=we=null,U=!1}function fo(e){Me===null?Me=[e]:Me.push(e)}var cf=Je.ReactCurrentBatchConfig;function vt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function hr(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Na(e){var n=e._init;return n(e._payload)}function du(e){function n(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=pn(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,w){return c===null||c.tag!==6?(c=Kl(p,f.mode,w),c.return=f,c):(c=l(c,p),c.return=f,c)}function s(f,c,p,w){var E=p.type;return E===In?h(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===be&&Na(E)===c.type)?(w=l(c,p.props),w.ref=vt(f,c,p),w.return=f,w):(w=Rr(p.type,p.key,p.props,null,f.mode,w),w.ref=vt(f,c,p),w.return=f,w)}function d(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Yl(p,f.mode,w),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function h(f,c,p,w,E){return c===null||c.tag!==7?(c=zn(p,f.mode,w,E),c.return=f,c):(c=l(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Kl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lr:return p=Rr(c.type,c.key,c.props,null,f.mode,p),p.ref=vt(f,null,c),p.return=f,p;case Fn:return c=Yl(c,f.mode,p),c.return=f,c;case be:var w=c._init;return g(f,w(c._payload),p)}if(xt(c)||ft(c))return c=zn(c,f.mode,p,null),c.return=f,c;hr(f,c)}return null}function m(f,c,p,w){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:return p.key===E?s(f,c,p,w):null;case Fn:return p.key===E?d(f,c,p,w):null;case be:return E=p._init,m(f,c,E(p._payload),w)}if(xt(p)||ft(p))return E!==null?null:h(f,c,p,w,null);hr(f,p)}return null}function S(f,c,p,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(c,f,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case lr:return f=f.get(w.key===null?p:w.key)||null,s(c,f,w,E);case Fn:return f=f.get(w.key===null?p:w.key)||null,d(c,f,w,E);case be:var P=w._init;return S(f,c,p,P(w._payload),E)}if(xt(w)||ft(w))return f=f.get(p)||null,h(c,f,w,E,null);hr(c,w)}return null}function y(f,c,p,w){for(var E=null,P=null,z=c,_=c=0,Q=null;z!==null&&_<p.length;_++){z.index>_?(Q=z,z=null):Q=z.sibling;var R=m(f,z,p[_],w);if(R===null){z===null&&(z=Q);break}e&&z&&R.alternate===null&&n(f,z),c=i(R,c,_),P===null?E=R:P.sibling=R,P=R,z=Q}if(_===p.length)return t(f,z),U&&xn(f,_),E;if(z===null){for(;_<p.length;_++)z=g(f,p[_],w),z!==null&&(c=i(z,c,_),P===null?E=z:P.sibling=z,P=z);return U&&xn(f,_),E}for(z=r(f,z);_<p.length;_++)Q=S(z,f,_,p[_],w),Q!==null&&(e&&Q.alternate!==null&&z.delete(Q.key===null?_:Q.key),c=i(Q,c,_),P===null?E=Q:P.sibling=Q,P=Q);return e&&z.forEach(function(Te){return n(f,Te)}),U&&xn(f,_),E}function x(f,c,p,w){var E=ft(p);if(typeof E!="function")throw Error(k(150));if(p=E.call(p),p==null)throw Error(k(151));for(var P=E=null,z=c,_=c=0,Q=null,R=p.next();z!==null&&!R.done;_++,R=p.next()){z.index>_?(Q=z,z=null):Q=z.sibling;var Te=m(f,z,R.value,w);if(Te===null){z===null&&(z=Q);break}e&&z&&Te.alternate===null&&n(f,z),c=i(Te,c,_),P===null?E=Te:P.sibling=Te,P=Te,z=Q}if(R.done)return t(f,z),U&&xn(f,_),E;if(z===null){for(;!R.done;_++,R=p.next())R=g(f,R.value,w),R!==null&&(c=i(R,c,_),P===null?E=R:P.sibling=R,P=R);return U&&xn(f,_),E}for(z=r(f,z);!R.done;_++,R=p.next())R=S(z,f,_,R.value,w),R!==null&&(e&&R.alternate!==null&&z.delete(R.key===null?_:R.key),c=i(R,c,_),P===null?E=R:P.sibling=R,P=R);return e&&z.forEach(function(ct){return n(f,ct)}),U&&xn(f,_),E}function D(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===In&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:e:{for(var E=p.key,P=c;P!==null;){if(P.key===E){if(E=p.type,E===In){if(P.tag===7){t(f,P.sibling),c=l(P,p.props.children),c.return=f,f=c;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===be&&Na(E)===P.type){t(f,P.sibling),c=l(P,p.props),c.ref=vt(f,P,p),c.return=f,f=c;break e}t(f,P);break}else n(f,P);P=P.sibling}p.type===In?(c=zn(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=Rr(p.type,p.key,p.props,null,f.mode,w),w.ref=vt(f,c,p),w.return=f,f=w)}return o(f);case Fn:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=Yl(p,f.mode,w),c.return=f,f=c}return o(f);case be:return P=p._init,D(f,c,P(p._payload),w)}if(xt(p))return y(f,c,p,w);if(ft(p))return x(f,c,p,w);hr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(f,c.sibling),c=l(c,p),c.return=f,f=c):(t(f,c),c=Kl(p,f.mode,w),c.return=f,f=c),o(f)):t(f,c)}return D}var rt=du(!0),fu=du(!1),Kr=vn(null),Yr=null,Qn=null,po=null;function mo(){po=Qn=Yr=null}function ho(e){var n=Kr.current;$(Kr),e._currentValue=n}function Ei(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function qn(e,n){Yr=e,po=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function ze(e){var n=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:n,next:null},Qn===null){if(Yr===null)throw Error(k(308));Qn=e,Yr.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return n}var En=null;function go(e){En===null?En=[e]:En.push(e)}function pu(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,go(n)):(t.next=l.next,l.next=t),n.interleaved=t,Ge(e,r)}function Ge(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var en=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function cn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Ge(e,t)}return l=r.interleaved,l===null?(n.next=n,go(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ge(e,t)}function Pr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,no(e,t)}}function Ea(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Xr(e,n,t,r){var l=e.updateQueue;en=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,d=s.next;s.next=null,o===null?i=d:o.next=d,o=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=s))}if(i!==null){var g=l.baseState;o=0,h=d=s=null,a=i;do{var m=a.lane,S=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(m=n,S=t,x.tag){case 1:if(y=x.payload,typeof y=="function"){g=y.call(S,g,m);break e}g=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,m=typeof y=="function"?y.call(S,g,m):y,m==null)break e;g=V({},g,m);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else S={eventTime:S,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=S,s=g):h=h.next=S,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(1);if(h===null&&(s=g),l.baseState=s,l.firstBaseUpdate=d,l.lastBaseUpdate=h,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Ln|=o,e.lanes=o,e.memoizedState=g}}function Ca(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var er={},We=vn(er),Ht=vn(er),Qt=vn(er);function Cn(e){if(e===er)throw Error(k(174));return e}function yo(e,n){switch(F(Qt,n),F(Ht,e),F(We,er),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:li(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=li(n,e)}$(We),F(We,n)}function lt(){$(We),$(Ht),$(Qt)}function hu(e){Cn(Qt.current);var n=Cn(We.current),t=li(n,e.type);n!==t&&(F(Ht,e),F(We,t))}function wo(e){Ht.current===e&&($(We),$(Ht))}var W=vn(0);function Gr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ul=[];function ko(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var zr=Je.ReactCurrentDispatcher,Wl=Je.ReactCurrentBatchConfig,On=0,B=null,G=null,b=null,Zr=!1,Tt=!1,Kt=0,df=0;function le(){throw Error(k(321))}function xo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function So(e,n,t,r,l,i){if(On=i,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,zr.current=e===null||e.memoizedState===null?hf:gf,e=t(r,l),Tt){i=0;do{if(Tt=!1,Kt=0,25<=i)throw Error(k(301));i+=1,b=G=null,n.updateQueue=null,zr.current=vf,e=t(r,l)}while(Tt)}if(zr.current=Jr,n=G!==null&&G.next!==null,On=0,b=G=B=null,Zr=!1,n)throw Error(k(300));return e}function No(){var e=Kt!==0;return Kt=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?B.memoizedState=b=e:b=b.next=e,b}function _e(){if(G===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var n=b===null?B.memoizedState:b.next;if(n!==null)b=n,G=e;else{if(e===null)throw Error(k(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},b===null?B.memoizedState=b=e:b=b.next=e}return b}function Yt(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=_e(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,d=i;do{var h=d.lane;if((On&h)===h)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(a=s=g,o=r):s=s.next=g,B.lanes|=h,Ln|=h}d=d.next}while(d!==null&&d!==i);s===null?o=r:s.next=a,Fe(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,B.lanes|=i,Ln|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Vl(e){var n=_e(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Fe(i,n.memoizedState)||(pe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function gu(){}function vu(e,n){var t=B,r=_e(),l=n(),i=!Fe(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,Eo(ku.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||b!==null&&b.memoizedState.tag&1){if(t.flags|=2048,Xt(9,wu.bind(null,t,r,l,n),void 0,null),ee===null)throw Error(k(349));On&30||yu(t,n,l)}return l}function yu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function wu(e,n,t,r){n.value=t,n.getSnapshot=r,xu(n)&&Su(e)}function ku(e,n,t){return t(function(){xu(n)&&Su(e)})}function xu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function Su(e){var n=Ge(e,1);n!==null&&De(n,e,1,-1)}function Pa(e){var n=$e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},n.queue=e,e=e.dispatch=mf.bind(null,B,e),[n.memoizedState,e]}function Xt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Nu(){return _e().memoizedState}function _r(e,n,t,r){var l=$e();B.flags|=e,l.memoizedState=Xt(1|n,t,void 0,r===void 0?null:r)}function cl(e,n,t,r){var l=_e();r=r===void 0?null:r;var i=void 0;if(G!==null){var o=G.memoizedState;if(i=o.destroy,r!==null&&xo(r,o.deps)){l.memoizedState=Xt(n,t,i,r);return}}B.flags|=e,l.memoizedState=Xt(1|n,t,i,r)}function za(e,n){return _r(8390656,8,e,n)}function Eo(e,n){return cl(2048,8,e,n)}function Eu(e,n){return cl(4,2,e,n)}function Cu(e,n){return cl(4,4,e,n)}function Pu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zu(e,n,t){return t=t!=null?t.concat([e]):null,cl(4,4,Pu.bind(null,n,e),t)}function Co(){}function _u(e,n){var t=_e();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&xo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Tu(e,n){var t=_e();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&xo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ou(e,n,t){return On&21?(Fe(t,n)||(t=Ds(),B.lanes|=t,Ln|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function ff(e,n){var t=j;j=t!==0&&4>t?t:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),n()}finally{j=t,Wl.transition=r}}function Lu(){return _e().memoizedState}function pf(e,n,t){var r=fn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ru(e))Mu(n,t);else if(t=pu(e,n,t,r),t!==null){var l=ue();De(t,e,r,l),ju(t,n,r)}}function mf(e,n,t){var r=fn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ru(e))Mu(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,a=i(o,t);if(l.hasEagerState=!0,l.eagerState=a,Fe(a,o)){var s=n.interleaved;s===null?(l.next=l,go(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=pu(e,n,l,r),t!==null&&(l=ue(),De(t,e,r,l),ju(t,n,r))}}function Ru(e){var n=e.alternate;return e===B||n!==null&&n===B}function Mu(e,n){Tt=Zr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ju(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,no(e,t)}}var Jr={readContext:ze,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},hf={readContext:ze,useCallback:function(e,n){return $e().memoizedState=[e,n===void 0?null:n],e},useContext:ze,useEffect:za,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,_r(4194308,4,Pu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return _r(4194308,4,e,n)},useInsertionEffect:function(e,n){return _r(4,2,e,n)},useMemo:function(e,n){var t=$e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=$e();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=pf.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=$e();return e={current:e},n.memoizedState=e},useState:Pa,useDebugValue:Co,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=Pa(!1),n=e[0];return e=ff.bind(null,e[1]),$e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,l=$e();if(U){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),ee===null)throw Error(k(349));On&30||yu(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,za(ku.bind(null,r,i,e),[e]),r.flags|=2048,Xt(9,wu.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=$e(),n=ee.identifierPrefix;if(U){var t=Qe,r=He;t=(r&~(1<<32-je(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Kt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=df++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},gf={readContext:ze,useCallback:_u,useContext:ze,useEffect:Eo,useImperativeHandle:zu,useInsertionEffect:Eu,useLayoutEffect:Cu,useMemo:Tu,useReducer:Bl,useRef:Nu,useState:function(){return Bl(Yt)},useDebugValue:Co,useDeferredValue:function(e){var n=_e();return Ou(n,G.memoizedState,e)},useTransition:function(){var e=Bl(Yt)[0],n=_e().memoizedState;return[e,n]},useMutableSource:gu,useSyncExternalStore:vu,useId:Lu,unstable_isNewReconciler:!1},vf={readContext:ze,useCallback:_u,useContext:ze,useEffect:Eo,useImperativeHandle:zu,useInsertionEffect:Eu,useLayoutEffect:Cu,useMemo:Tu,useReducer:Vl,useRef:Nu,useState:function(){return Vl(Yt)},useDebugValue:Co,useDeferredValue:function(e){var n=_e();return G===null?n.memoizedState=e:Ou(n,G.memoizedState,e)},useTransition:function(){var e=Vl(Yt)[0],n=_e().memoizedState;return[e,n]},useMutableSource:gu,useSyncExternalStore:vu,useId:Lu,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ci(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var dl={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ue(),l=fn(e),i=Ke(r,l);i.payload=n,t!=null&&(i.callback=t),n=cn(e,i,l),n!==null&&(De(n,e,l,r),Pr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ue(),l=fn(e),i=Ke(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=cn(e,i,l),n!==null&&(De(n,e,l,r),Pr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ue(),r=fn(e),l=Ke(t,r);l.tag=2,n!=null&&(l.callback=n),n=cn(e,l,r),n!==null&&(De(n,e,r,t),Pr(n,e,r))}};function _a(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Ut(t,r)||!Ut(l,i):!0}function Du(e,n,t){var r=!1,l=hn,i=n.contextType;return typeof i=="object"&&i!==null?i=ze(i):(l=he(n)?_n:ae.current,r=n.contextTypes,i=(r=r!=null)?nt(e,l):hn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=dl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Ta(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&dl.enqueueReplaceState(n,n.state,null)}function Pi(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},vo(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=ze(i):(i=he(n)?_n:ae.current,l.context=nt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ci(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&dl.enqueueReplaceState(l,l.state,null),Xr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function it(e,n){try{var t="",r=n;do t+=Hc(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Hl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function zi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var yf=typeof WeakMap=="function"?WeakMap:Map;function Fu(e,n,t){t=Ke(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){br||(br=!0,Ii=r),zi(e,n)},t}function Iu(e,n,t){t=Ke(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){zi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){zi(e,n),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Oa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new yf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Rf.bind(null,e,n,t),n.then(e,e))}function La(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ra(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ke(-1,1),n.tag=2,cn(t,n,1))),t.lanes|=1),e)}var wf=Je.ReactCurrentOwner,pe=!1;function se(e,n,t,r){n.child=e===null?fu(n,null,t,r):rt(n,e.child,t,r)}function Ma(e,n,t,r,l){t=t.render;var i=n.ref;return qn(n,l),r=So(e,n,t,r,i,l),t=No(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ze(e,n,l)):(U&&t&&uo(n),n.flags|=1,se(e,n,r,l),n.child)}function ja(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!Mo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,$u(e,n,i,r,l)):(e=Rr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ut,t(o,r)&&e.ref===n.ref)return Ze(e,n,l)}return n.flags|=1,e=pn(i,r),e.ref=n.ref,e.return=n,n.child=e}function $u(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Ut(i,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Ze(e,n,l)}return _i(e,n,t,r,l)}function Au(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Yn,ve),ve|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(Yn,ve),ve|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,F(Yn,ve),ve|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,F(Yn,ve),ve|=r;return se(e,n,l,t),n.child}function Uu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function _i(e,n,t,r,l){var i=he(t)?_n:ae.current;return i=nt(n,i),qn(n,l),t=So(e,n,t,r,i,l),r=No(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ze(e,n,l)):(U&&r&&uo(n),n.flags|=1,se(e,n,t,l),n.child)}function Da(e,n,t,r,l){if(he(t)){var i=!0;Vr(n)}else i=!1;if(qn(n,l),n.stateNode===null)Tr(e,n),Du(n,t,r),Pi(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,d=t.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=he(t)?_n:ae.current,d=nt(n,d));var h=t.getDerivedStateFromProps,g=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==d)&&Ta(n,o,r,d),en=!1;var m=n.memoizedState;o.state=m,Xr(n,r,o,l),s=n.memoizedState,a!==r||m!==s||me.current||en?(typeof h=="function"&&(Ci(n,t,h,r),s=n.memoizedState),(a=en||_a(n,t,a,r,m,s,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,mu(e,n),a=n.memoizedProps,d=n.type===n.elementType?a:Le(n.type,a),o.props=d,g=n.pendingProps,m=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=he(t)?_n:ae.current,s=nt(n,s));var S=t.getDerivedStateFromProps;(h=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||m!==s)&&Ta(n,o,r,s),en=!1,m=n.memoizedState,o.state=m,Xr(n,r,o,l);var y=n.memoizedState;a!==g||m!==y||me.current||en?(typeof S=="function"&&(Ci(n,t,S,r),y=n.memoizedState),(d=en||_a(n,t,d,r,m,y,s)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=s,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Ti(e,n,t,r,i,l)}function Ti(e,n,t,r,l,i){Uu(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&ka(n,t,!1),Ze(e,n,i);r=n.stateNode,wf.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=rt(n,e.child,null,i),n.child=rt(n,null,a,i)):se(e,n,a,i),n.memoizedState=r.state,l&&ka(n,t,!0),n.child}function Wu(e){var n=e.stateNode;n.pendingContext?wa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&wa(e,n.context,!1),yo(e,n.containerInfo)}function Fa(e,n,t,r,l){return tt(),fo(l),n.flags|=256,se(e,n,t,r),n.child}var Oi={dehydrated:null,treeContext:null,retryLane:0};function Li(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bu(e,n,t){var r=n.pendingProps,l=W.current,i=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F(W,l&1),e===null)return Ni(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ml(o,r,0,null),e=zn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Li(t),n.memoizedState=Oi,e):Po(n,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return kf(e,n,o,r,a,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=pn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=pn(a,i):(i=zn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Li(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Oi,r}return i=e.child,e=i.sibling,r=pn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Po(e,n){return n=ml({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function gr(e,n,t,r){return r!==null&&fo(r),rt(n,e.child,null,t),e=Po(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function kf(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Hl(Error(k(422))),gr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=ml({mode:"visible",children:r.children},l,0,null),i=zn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&rt(n,e.child,null,o),n.child.memoizedState=Li(o),n.memoizedState=Oi,i);if(!(n.mode&1))return gr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=Hl(i,r,void 0),gr(e,n,o,r)}if(a=(o&e.childLanes)!==0,pe||a){if(r=ee,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ge(e,l),De(r,e,l,-1))}return Ro(),r=Hl(Error(k(421))),gr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Mf.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,ye=un(l.nextSibling),we=n,U=!0,Me=null,e!==null&&(Ne[Ee++]=He,Ne[Ee++]=Qe,Ne[Ee++]=Tn,He=e.id,Qe=e.overflow,Tn=n),n=Po(n,r.children),n.flags|=4096,n)}function Ia(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ei(e.return,n,t)}function Ql(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Vu(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,n,r.children,t),r=W.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ia(e,t,n);else if(e.tag===19)Ia(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(W,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Gr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ql(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Gr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ql(n,!0,t,null,i);break;case"together":Ql(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Tr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ln|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=pn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=pn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function xf(e,n,t){switch(n.tag){case 3:Wu(n),tt();break;case 5:hu(n);break;case 1:he(n.type)&&Vr(n);break;case 4:yo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;F(Kr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?Bu(e,n,t):(F(W,W.current&1),e=Ze(e,n,t),e!==null?e.sibling:null);F(W,W.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Vu(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(W,W.current),r)break;return null;case 22:case 23:return n.lanes=0,Au(e,n,t)}return Ze(e,n,t)}var Hu,Ri,Qu,Ku;Hu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ri=function(){};Qu=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Cn(We.current);var i=null;switch(t){case"input":l=ei(e,l),r=ei(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=ri(e,l),r=ri(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}ii(t,r);var o;t=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Mt.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var s=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&s!==a&&(s!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(d,t)),t=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Mt.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&I("scroll",e),i||a===s||(i=[])):(i=i||[]).push(d,s))}t&&(i=i||[]).push("style",t);var d=i;(n.updateQueue=d)&&(n.flags|=4)}};Ku=function(e,n,t,r){t!==r&&(n.flags|=4)};function yt(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Sf(e,n,t){var r=n.pendingProps;switch(co(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return he(n.type)&&Br(),ie(n),null;case 3:return r=n.stateNode,lt(),$(me),$(ae),ko(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(Ui(Me),Me=null))),Ri(e,n),ie(n),null;case 5:wo(n);var l=Cn(Qt.current);if(t=n.type,e!==null&&n.stateNode!=null)Qu(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return ie(n),null}if(e=Cn(We.current),mr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ae]=n,r[Vt]=i,e=(n.mode&1)!==0,t){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(l=0;l<Nt.length;l++)I(Nt[l],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Ko(r,i),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},I("invalid",r);break;case"textarea":Xo(r,i),I("invalid",r)}ii(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),l=["children",""+a]):Mt.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&I("scroll",r)}switch(t){case"input":ir(r),Yo(r,i,!0);break;case"textarea":ir(r),Go(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ks(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Ae]=n,e[Vt]=r,Hu(e,n,!1,!1),n.stateNode=e;e:{switch(o=oi(t,r),t){case"dialog":I("cancel",e),I("close",e),l=r;break;case"iframe":case"object":case"embed":I("load",e),l=r;break;case"video":case"audio":for(l=0;l<Nt.length;l++)I(Nt[l],e);l=r;break;case"source":I("error",e),l=r;break;case"img":case"image":case"link":I("error",e),I("load",e),l=r;break;case"details":I("toggle",e),l=r;break;case"input":Ko(e,r),l=ei(e,r),I("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),I("invalid",e);break;case"textarea":Xo(e,r),l=ri(e,r),I("invalid",e);break;default:l=r}ii(t,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Ns(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&xs(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&jt(e,s):typeof s=="number"&&jt(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mt.hasOwnProperty(i)?s!=null&&i==="onScroll"&&I("scroll",e):s!=null&&Gi(e,i,s,o))}switch(t){case"input":ir(e),Yo(e,r,!1);break;case"textarea":ir(e),Go(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Xn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Ku(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Cn(Qt.current),Cn(We.current),mr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ae]=n,(i=r.nodeValue!==t)&&(e=we,e!==null))switch(e.tag){case 3:pr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ae]=n,n.stateNode=r}return ie(n),null;case 13:if($(W),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ye!==null&&n.mode&1&&!(n.flags&128))cu(),tt(),n.flags|=98560,i=!1;else if(i=mr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Ae]=n}else tt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),i=!1}else Me!==null&&(Ui(Me),Me=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?Z===0&&(Z=3):Ro())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return lt(),Ri(e,n),e===null&&Wt(n.stateNode.containerInfo),ie(n),null;case 10:return ho(n.type._context),ie(n),null;case 17:return he(n.type)&&Br(),ie(n),null;case 19:if($(W),i=n.memoizedState,i===null)return ie(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)yt(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Gr(e),o!==null){for(n.flags|=128,yt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(W,W.current&1|2),n.child}e=e.sibling}i.tail!==null&&Y()>ot&&(n.flags|=128,r=!0,yt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Gr(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),yt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return ie(n),null}else 2*Y()-i.renderingStartTime>ot&&t!==1073741824&&(n.flags|=128,r=!0,yt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Y(),n.sibling=null,t=W.current,F(W,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return Lo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ve&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Nf(e,n){switch(co(n),n.tag){case 1:return he(n.type)&&Br(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return lt(),$(me),$(ae),ko(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return wo(n),null;case 13:if($(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));tt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(W),null;case 4:return lt(),null;case 10:return ho(n.type._context),null;case 22:case 23:return Lo(),null;case 24:return null;default:return null}}var vr=!1,oe=!1,Ef=typeof WeakSet=="function"?WeakSet:Set,N=null;function Kn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){H(e,n,r)}else t.current=null}function Mi(e,n,t){try{t()}catch(r){H(e,n,r)}}var $a=!1;function Cf(e,n){if(gi=$r,e=Js(),so(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,d=0,h=0,g=e,m=null;n:for(;;){for(var S;g!==t||l!==0&&g.nodeType!==3||(a=o+l),g!==i||r!==0&&g.nodeType!==3||(s=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(S=g.firstChild)!==null;)m=g,g=S;for(;;){if(g===e)break n;if(m===t&&++d===l&&(a=o),m===i&&++h===r&&(s=o),(S=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=S}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(vi={focusedElem:e,selectionRange:t},$r=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,D=y.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?x:Le(n.type,x),D);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){H(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return y=$a,$a=!1,y}function Ot(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Mi(n,t,i)}l=l.next}while(l!==r)}}function fl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ji(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Yu(e){var n=e.alternate;n!==null&&(e.alternate=null,Yu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ae],delete n[Vt],delete n[ki],delete n[af],delete n[sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xu(e){return e.tag===5||e.tag===3||e.tag===4}function Aa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Di(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(Di(e,n,t),e=e.sibling;e!==null;)Di(e,n,t),e=e.sibling}function Fi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fi(e,n,t),e=e.sibling;e!==null;)Fi(e,n,t),e=e.sibling}var ne=null,Re=!1;function qe(e,n,t){for(t=t.child;t!==null;)Gu(e,n,t),t=t.sibling}function Gu(e,n,t){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ll,t)}catch{}switch(t.tag){case 5:oe||Kn(t,n);case 6:var r=ne,l=Re;ne=null,qe(e,n,t),ne=r,Re=l,ne!==null&&(Re?(e=ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ne.removeChild(t.stateNode));break;case 18:ne!==null&&(Re?(e=ne,t=t.stateNode,e.nodeType===8?$l(e.parentNode,t):e.nodeType===1&&$l(e,t),$t(e)):$l(ne,t.stateNode));break;case 4:r=ne,l=Re,ne=t.stateNode.containerInfo,Re=!0,qe(e,n,t),ne=r,Re=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Mi(t,n,o),l=l.next}while(l!==r)}qe(e,n,t);break;case 1:if(!oe&&(Kn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){H(t,n,a)}qe(e,n,t);break;case 21:qe(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,qe(e,n,t),oe=r):qe(e,n,t);break;default:qe(e,n,t)}}function Ua(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ef),n.forEach(function(r){var l=jf.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Oe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Re=!1;break e;case 3:ne=a.stateNode.containerInfo,Re=!0;break e;case 4:ne=a.stateNode.containerInfo,Re=!0;break e}a=a.return}if(ne===null)throw Error(k(160));Gu(i,o,l),ne=null,Re=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(d){H(l,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Zu(n,e),n=n.sibling}function Zu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(n,e),Ie(e),r&4){try{Ot(3,e,e.return),fl(3,e)}catch(x){H(e,e.return,x)}try{Ot(5,e,e.return)}catch(x){H(e,e.return,x)}}break;case 1:Oe(n,e),Ie(e),r&512&&t!==null&&Kn(t,t.return);break;case 5:if(Oe(n,e),Ie(e),r&512&&t!==null&&Kn(t,t.return),e.flags&32){var l=e.stateNode;try{jt(l,"")}catch(x){H(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ys(l,i),oi(a,o);var d=oi(a,i);for(o=0;o<s.length;o+=2){var h=s[o],g=s[o+1];h==="style"?Ns(l,g):h==="dangerouslySetInnerHTML"?xs(l,g):h==="children"?jt(l,g):Gi(l,h,g,d)}switch(a){case"input":ni(l,i);break;case"textarea":ws(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?Xn(l,!!i.multiple,S,!1):m!==!!i.multiple&&(i.defaultValue!=null?Xn(l,!!i.multiple,i.defaultValue,!0):Xn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Vt]=i}catch(x){H(e,e.return,x)}}break;case 6:if(Oe(n,e),Ie(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(x){H(e,e.return,x)}}break;case 3:if(Oe(n,e),Ie(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{$t(n.containerInfo)}catch(x){H(e,e.return,x)}break;case 4:Oe(n,e),Ie(e);break;case 13:Oe(n,e),Ie(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(To=Y())),r&4&&Ua(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(d=oe)||h,Oe(n,e),oe=d):Oe(n,e),Ie(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(g=N=h;N!==null;){switch(m=N,S=m.child,m.tag){case 0:case 11:case 14:case 15:Ot(4,m,m.return);break;case 1:Kn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(x){H(r,t,x)}}break;case 5:Kn(m,m.return);break;case 22:if(m.memoizedState!==null){Ba(g);continue}}S!==null?(S.return=m,N=S):Ba(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=g.stateNode,s=g.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ss("display",o))}catch(x){H(e,e.return,x)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(x){H(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Oe(n,e),Ie(e),r&4&&Ua(e);break;case 21:break;default:Oe(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Xu(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(jt(l,""),r.flags&=-33);var i=Aa(e);Fi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Aa(e);Di(e,a,o);break;default:throw Error(k(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pf(e,n,t){N=e,Ju(e)}function Ju(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var l=N,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||vr;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||oe;a=vr;var d=oe;if(vr=o,(oe=s)&&!d)for(N=l;N!==null;)o=N,s=o.child,o.tag===22&&o.memoizedState!==null?Va(l):s!==null?(s.return=o,N=s):Va(l);for(;i!==null;)N=i,Ju(i),i=i.sibling;N=l,vr=a,oe=d}Wa(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,N=i):Wa(e)}}function Wa(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||fl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Ca(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ca(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&$t(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||n.flags&512&&ji(n)}catch(m){H(n,n.return,m)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function Ba(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function Va(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{fl(4,n)}catch(s){H(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){H(n,l,s)}}var i=n.return;try{ji(n)}catch(s){H(n,i,s)}break;case 5:var o=n.return;try{ji(n)}catch(s){H(n,o,s)}}}catch(s){H(n,n.return,s)}if(n===e){N=null;break}var a=n.sibling;if(a!==null){a.return=n.return,N=a;break}N=n.return}}var zf=Math.ceil,qr=Je.ReactCurrentDispatcher,zo=Je.ReactCurrentOwner,Pe=Je.ReactCurrentBatchConfig,M=0,ee=null,X=null,te=0,ve=0,Yn=vn(0),Z=0,Gt=null,Ln=0,pl=0,_o=0,Lt=null,fe=null,To=0,ot=1/0,Be=null,br=!1,Ii=null,dn=null,yr=!1,ln=null,el=0,Rt=0,$i=null,Or=-1,Lr=0;function ue(){return M&6?Y():Or!==-1?Or:Or=Y()}function fn(e){return e.mode&1?M&2&&te!==0?te&-te:cf.transition!==null?(Lr===0&&(Lr=Ds()),Lr):(e=j,e!==0||(e=window.event,e=e===void 0?16:Bs(e.type)),e):1}function De(e,n,t,r){if(50<Rt)throw Rt=0,$i=null,Error(k(185));Jt(e,t,r),(!(M&2)||e!==ee)&&(e===ee&&(!(M&2)&&(pl|=t),Z===4&&tn(e,te)),ge(e,r),t===1&&M===0&&!(n.mode&1)&&(ot=Y()+500,ul&&yn()))}function ge(e,n){var t=e.callbackNode;ud(e,n);var r=Ir(e,e===ee?te:0);if(r===0)t!==null&&qo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&qo(t),n===1)e.tag===0?uf(Ha.bind(null,e)):au(Ha.bind(null,e)),lf(function(){!(M&6)&&yn()}),t=null;else{switch(Fs(r)){case 1:t=eo;break;case 4:t=Ms;break;case 16:t=Fr;break;case 536870912:t=js;break;default:t=Fr}t=ic(t,qu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function qu(e,n){if(Or=-1,Lr=0,M&6)throw Error(k(327));var t=e.callbackNode;if(bn()&&e.callbackNode!==t)return null;var r=Ir(e,e===ee?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=nl(e,r);else{n=r;var l=M;M|=2;var i=ec();(ee!==e||te!==n)&&(Be=null,ot=Y()+500,Pn(e,n));do try{Of();break}catch(a){bu(e,a)}while(1);mo(),qr.current=i,M=l,X!==null?n=0:(ee=null,te=0,n=Z)}if(n!==0){if(n===2&&(l=di(e),l!==0&&(r=l,n=Ai(e,l))),n===1)throw t=Gt,Pn(e,0),tn(e,r),ge(e,Y()),t;if(n===6)tn(e,r);else{if(l=e.current.alternate,!(r&30)&&!_f(l)&&(n=nl(e,r),n===2&&(i=di(e),i!==0&&(r=i,n=Ai(e,i))),n===1))throw t=Gt,Pn(e,0),tn(e,r),ge(e,Y()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Sn(e,fe,Be);break;case 3:if(tn(e,r),(r&130023424)===r&&(n=To+500-Y(),10<n)){if(Ir(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wi(Sn.bind(null,e,fe,Be),n);break}Sn(e,fe,Be);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-je(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zf(r/1960))-r,10<r){e.timeoutHandle=wi(Sn.bind(null,e,fe,Be),r);break}Sn(e,fe,Be);break;case 5:Sn(e,fe,Be);break;default:throw Error(k(329))}}}return ge(e,Y()),e.callbackNode===t?qu.bind(null,e):null}function Ai(e,n){var t=Lt;return e.current.memoizedState.isDehydrated&&(Pn(e,n).flags|=256),e=nl(e,n),e!==2&&(n=fe,fe=t,n!==null&&Ui(n)),e}function Ui(e){fe===null?fe=e:fe.push.apply(fe,e)}function _f(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Fe(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tn(e,n){for(n&=~_o,n&=~pl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-je(n),r=1<<t;e[t]=-1,n&=~r}}function Ha(e){if(M&6)throw Error(k(327));bn();var n=Ir(e,0);if(!(n&1))return ge(e,Y()),null;var t=nl(e,n);if(e.tag!==0&&t===2){var r=di(e);r!==0&&(n=r,t=Ai(e,r))}if(t===1)throw t=Gt,Pn(e,0),tn(e,n),ge(e,Y()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Sn(e,fe,Be),ge(e,Y()),null}function Oo(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(ot=Y()+500,ul&&yn())}}function Rn(e){ln!==null&&ln.tag===0&&!(M&6)&&bn();var n=M;M|=1;var t=Pe.transition,r=j;try{if(Pe.transition=null,j=1,e)return e()}finally{j=r,Pe.transition=t,M=n,!(M&6)&&yn()}}function Lo(){ve=Yn.current,$(Yn)}function Pn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,rf(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:lt(),$(me),$(ae),ko();break;case 5:wo(r);break;case 4:lt();break;case 13:$(W);break;case 19:$(W);break;case 10:ho(r.type._context);break;case 22:case 23:Lo()}t=t.return}if(ee=e,X=e=pn(e.current,null),te=ve=n,Z=0,Gt=null,_o=pl=Ln=0,fe=Lt=null,En!==null){for(n=0;n<En.length;n++)if(t=En[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}En=null}return e}function bu(e,n){do{var t=X;try{if(mo(),zr.current=Jr,Zr){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Zr=!1}if(On=0,b=G=B=null,Tt=!1,Kt=0,zo.current=null,t===null||t.return===null){Z=1,Gt=n,X=null;break}e:{var i=e,o=t.return,a=t,s=n;if(n=te,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,h=a,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=La(o);if(S!==null){S.flags&=-257,Ra(S,o,a,i,n),S.mode&1&&Oa(i,d,n),n=S,s=d;var y=n.updateQueue;if(y===null){var x=new Set;x.add(s),n.updateQueue=x}else y.add(s);break e}else{if(!(n&1)){Oa(i,d,n),Ro();break e}s=Error(k(426))}}else if(U&&a.mode&1){var D=La(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Ra(D,o,a,i,n),fo(it(s,a));break e}}i=s=it(s,a),Z!==4&&(Z=2),Lt===null?Lt=[i]:Lt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=Fu(i,s,n);Ea(i,f);break e;case 1:a=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dn===null||!dn.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=Iu(i,a,n);Ea(i,w);break e}}i=i.return}while(i!==null)}tc(t)}catch(E){n=E,X===t&&t!==null&&(X=t=t.return);continue}break}while(1)}function ec(){var e=qr.current;return qr.current=Jr,e===null?Jr:e}function Ro(){(Z===0||Z===3||Z===2)&&(Z=4),ee===null||!(Ln&268435455)&&!(pl&268435455)||tn(ee,te)}function nl(e,n){var t=M;M|=2;var r=ec();(ee!==e||te!==n)&&(Be=null,Pn(e,n));do try{Tf();break}catch(l){bu(e,l)}while(1);if(mo(),M=t,qr.current=r,X!==null)throw Error(k(261));return ee=null,te=0,Z}function Tf(){for(;X!==null;)nc(X)}function Of(){for(;X!==null&&!ed();)nc(X)}function nc(e){var n=lc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,n===null?tc(e):X=n,zo.current=null}function tc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Nf(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(t=Sf(t,n,ve),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);Z===0&&(Z=5)}function Sn(e,n,t){var r=j,l=Pe.transition;try{Pe.transition=null,j=1,Lf(e,n,t,r)}finally{Pe.transition=l,j=r}return null}function Lf(e,n,t,r){do bn();while(ln!==null);if(M&6)throw Error(k(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(cd(e,i),e===ee&&(X=ee=null,te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||yr||(yr=!0,ic(Fr,function(){return bn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var o=j;j=1;var a=M;M|=4,zo.current=null,Cf(e,t),Zu(t,e),Zd(vi),$r=!!gi,vi=gi=null,e.current=t,Pf(t),nd(),M=a,j=o,Pe.transition=i}else e.current=t;if(yr&&(yr=!1,ln=e,el=l),i=e.pendingLanes,i===0&&(dn=null),ld(t.stateNode),ge(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(br)throw br=!1,e=Ii,Ii=null,e;return el&1&&e.tag!==0&&bn(),i=e.pendingLanes,i&1?e===$i?Rt++:(Rt=0,$i=e):Rt=0,yn(),null}function bn(){if(ln!==null){var e=Fs(el),n=Pe.transition,t=j;try{if(Pe.transition=null,j=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,el=0,M&6)throw Error(k(331));var l=M;for(M|=4,N=e.current;N!==null;){var i=N,o=i.child;if(N.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var d=a[s];for(N=d;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:Ot(8,h,i)}var g=h.child;if(g!==null)g.return=h,N=g;else for(;N!==null;){h=N;var m=h.sibling,S=h.return;if(Yu(h),h===d){N=null;break}if(m!==null){m.return=S,N=m;break}N=S}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var D=x.sibling;x.sibling=null,x=D}while(x!==null)}}N=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,N=o;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ot(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,N=f;break e}N=i.return}}var c=e.current;for(N=c;N!==null;){o=N;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,N=p;else e:for(o=c;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fl(9,a)}}catch(E){H(a,a.return,E)}if(a===o){N=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,N=w;break e}N=a.return}}if(M=l,yn(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ll,e)}catch{}r=!0}return r}finally{j=t,Pe.transition=n}}return!1}function Qa(e,n,t){n=it(t,n),n=Fu(e,n,1),e=cn(e,n,1),n=ue(),e!==null&&(Jt(e,1,n),ge(e,n))}function H(e,n,t){if(e.tag===3)Qa(e,e,t);else for(;n!==null;){if(n.tag===3){Qa(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=it(t,e),e=Iu(n,e,1),n=cn(n,e,1),e=ue(),n!==null&&(Jt(n,1,e),ge(n,e));break}}n=n.return}}function Rf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ue(),e.pingedLanes|=e.suspendedLanes&t,ee===e&&(te&t)===t&&(Z===4||Z===3&&(te&130023424)===te&&500>Y()-To?Pn(e,0):_o|=t),ge(e,n)}function rc(e,n){n===0&&(e.mode&1?(n=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):n=1);var t=ue();e=Ge(e,n),e!==null&&(Jt(e,n,t),ge(e,t))}function Mf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),rc(e,t)}function jf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),rc(e,t)}var lc;lc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,xf(e,n,t);pe=!!(e.flags&131072)}else pe=!1,U&&n.flags&1048576&&su(n,Qr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Tr(e,n),e=n.pendingProps;var l=nt(n,ae.current);qn(n,t),l=So(null,n,r,e,l,t);var i=No();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(i=!0,Vr(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,vo(n),l.updater=dl,n.stateNode=l,l._reactInternals=n,Pi(n,r,e,t),n=Ti(null,n,r,!0,i,t)):(n.tag=0,U&&i&&uo(n),se(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Tr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Ff(r),e=Le(r,e),l){case 0:n=_i(null,n,r,e,t);break e;case 1:n=Da(null,n,r,e,t);break e;case 11:n=Ma(null,n,r,e,t);break e;case 14:n=ja(null,n,r,Le(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),_i(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),Da(e,n,r,l,t);case 3:e:{if(Wu(n),e===null)throw Error(k(387));r=n.pendingProps,i=n.memoizedState,l=i.element,mu(e,n),Xr(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=it(Error(k(423)),n),n=Fa(e,n,r,t,l);break e}else if(r!==l){l=it(Error(k(424)),n),n=Fa(e,n,r,t,l);break e}else for(ye=un(n.stateNode.containerInfo.firstChild),we=n,U=!0,Me=null,t=fu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(tt(),r===l){n=Ze(e,n,t);break e}se(e,n,r,t)}n=n.child}return n;case 5:return hu(n),e===null&&Ni(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,yi(r,l)?o=null:i!==null&&yi(r,i)&&(n.flags|=32),Uu(e,n),se(e,n,o,t),n.child;case 6:return e===null&&Ni(n),null;case 13:return Bu(e,n,t);case 4:return yo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=rt(n,null,r,t):se(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),Ma(e,n,r,l,t);case 7:return se(e,n,n.pendingProps,t),n.child;case 8:return se(e,n,n.pendingProps.children,t),n.child;case 12:return se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,F(Kr,r._currentValue),r._currentValue=o,i!==null)if(Fe(i.value,o)){if(i.children===l.children&&!me.current){n=Ze(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ke(-1,t&-t),s.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Ei(i.return,t,n),a.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ei(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}se(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,qn(n,t),l=ze(l),r=r(l),n.flags|=1,se(e,n,r,t),n.child;case 14:return r=n.type,l=Le(r,n.pendingProps),l=Le(r.type,l),ja(e,n,r,l,t);case 15:return $u(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),Tr(e,n),n.tag=1,he(r)?(e=!0,Vr(n)):e=!1,qn(n,t),Du(n,r,l),Pi(n,r,l,t),Ti(null,n,r,!0,e,t);case 19:return Vu(e,n,t);case 22:return Au(e,n,t)}throw Error(k(156,n.tag))};function ic(e,n){return Rs(e,n)}function Df(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,n,t,r){return new Df(e,n,t,r)}function Mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ff(e){if(typeof e=="function")return Mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ji)return 11;if(e===qi)return 14}return 2}function pn(e,n){var t=e.alternate;return t===null?(t=Ce(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Rr(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")Mo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case In:return zn(t.children,l,i,n);case Zi:o=8,l|=8;break;case Zl:return e=Ce(12,t,n,l|2),e.elementType=Zl,e.lanes=i,e;case Jl:return e=Ce(13,t,n,l),e.elementType=Jl,e.lanes=i,e;case ql:return e=Ce(19,t,n,l),e.elementType=ql,e.lanes=i,e;case hs:return ml(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ps:o=10;break e;case ms:o=9;break e;case Ji:o=11;break e;case qi:o=14;break e;case be:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Ce(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function zn(e,n,t,r){return e=Ce(7,e,r,n),e.lanes=t,e}function ml(e,n,t,r){return e=Ce(22,e,r,n),e.elementType=hs,e.lanes=t,e.stateNode={isHidden:!1},e}function Kl(e,n,t){return e=Ce(6,e,null,n),e.lanes=t,e}function Yl(e,n,t){return n=Ce(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function If(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function jo(e,n,t,r,l,i,o,a,s){return e=new If(e,n,t,a,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ce(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},vo(i),e}function $f(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function oc(e){if(!e)return hn;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(he(t))return ou(e,t,n)}return n}function ac(e,n,t,r,l,i,o,a,s){return e=jo(t,r,!0,e,l,i,o,a,s),e.context=oc(null),t=e.current,r=ue(),l=fn(t),i=Ke(r,l),i.callback=n??null,cn(t,i,l),e.current.lanes=l,Jt(e,l,r),ge(e,r),e}function hl(e,n,t,r){var l=n.current,i=ue(),o=fn(l);return t=oc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ke(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=cn(l,n,o),e!==null&&(De(e,l,o,i),Pr(e,l,o)),o}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ka(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Do(e,n){Ka(e,n),(e=e.alternate)&&Ka(e,n)}function Af(){return null}var sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fo(e){this._internalRoot=e}gl.prototype.render=Fo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));hl(e,n,null,null)};gl.prototype.unmount=Fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Rn(function(){hl(null,e,null,null)}),n[Xe]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var n=As();e={blockedOn:null,target:e,priority:n};for(var t=0;t<nn.length&&n!==0&&n<nn[t].priority;t++);nn.splice(t,0,e),t===0&&Ws(e)}};function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ya(){}function Uf(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=tl(o);i.call(d)}}var o=ac(n,r,e,0,null,!1,!1,"",Ya);return e._reactRootContainer=o,e[Xe]=o.current,Wt(e.nodeType===8?e.parentNode:e),Rn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=tl(s);a.call(d)}}var s=jo(e,0,!1,null,null,!1,!1,"",Ya);return e._reactRootContainer=s,e[Xe]=s.current,Wt(e.nodeType===8?e.parentNode:e),Rn(function(){hl(n,s,t,r)}),s}function yl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=tl(o);a.call(s)}}hl(n,o,e,l)}else o=Uf(t,n,e,l,r);return tl(o)}Is=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=St(n.pendingLanes);t!==0&&(no(n,t|1),ge(n,Y()),!(M&6)&&(ot=Y()+500,yn()))}break;case 13:Rn(function(){var r=Ge(e,1);if(r!==null){var l=ue();De(r,e,1,l)}}),Do(e,1)}};to=function(e){if(e.tag===13){var n=Ge(e,134217728);if(n!==null){var t=ue();De(n,e,134217728,t)}Do(e,134217728)}};$s=function(e){if(e.tag===13){var n=fn(e),t=Ge(e,n);if(t!==null){var r=ue();De(t,e,n,r)}Do(e,n)}};As=function(){return j};Us=function(e,n){var t=j;try{return j=e,n()}finally{j=t}};si=function(e,n,t){switch(n){case"input":if(ni(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=sl(r);if(!l)throw Error(k(90));vs(r),ni(r,l)}}}break;case"textarea":ws(e,t);break;case"select":n=t.value,n!=null&&Xn(e,!!t.multiple,n,!1)}};Ps=Oo;zs=Rn;var Wf={usingClientEntryPoint:!1,Events:[bt,Wn,sl,Es,Cs,Oo]},wt={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bf={bundleType:wt.bundleType,version:wt.version,rendererPackageName:wt.rendererPackageName,rendererConfig:wt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Os(e),e===null?null:e.stateNode},findFiberByHostInstance:wt.findFiberByHostInstance||Af,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{ll=wr.inject(Bf),Ue=wr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wf;xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Io(n))throw Error(k(200));return $f(e,n,null,t)};xe.createRoot=function(e,n){if(!Io(e))throw Error(k(299));var t=!1,r="",l=sc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=jo(e,1,!1,null,null,t,!1,r,l),e[Xe]=n.current,Wt(e.nodeType===8?e.parentNode:e),new Fo(n)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Os(n),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Rn(e)};xe.hydrate=function(e,n,t){if(!vl(n))throw Error(k(200));return yl(null,e,n,!0,t)};xe.hydrateRoot=function(e,n,t){if(!Io(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=sc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=ac(n,null,e,1,t??null,l,!1,i,o),e[Xe]=n.current,Wt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new gl(n)};xe.render=function(e,n,t){if(!vl(n))throw Error(k(200));return yl(null,e,n,!1,t)};xe.unmountComponentAtNode=function(e){if(!vl(e))throw Error(k(40));return e._reactRootContainer?(Rn(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};xe.unstable_batchedUpdates=Oo;xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!vl(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return yl(e,n,t,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc)}catch(e){console.error(e)}}uc(),us.exports=xe;var Vf=us.exports,Xa=Vf;Xl.createRoot=Xa.createRoot,Xl.hydrateRoot=Xa.hydrateRoot;var Hf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Qf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kf=(e,n)=>{const t=A.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,children:a,...s},d)=>A.createElement("svg",{ref:d,...Hf,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:`lucide lucide-${Qf(e)}`,...s},[...n.map(([h,g])=>A.createElement(h,g)),...(Array.isArray(a)?a:[a])||[]]));return t.displayName=`${e}`,t};var J=Kf;const Yf=J("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]),Ga=J("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),Xf=J("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]),Wi=J("Gift",[["polyline",{points:"20 12 20 22 4 22 4 12",key:"nda8fc"}],["rect",{width:"20",height:"5",x:"2",y:"7",key:"wkgdzj"}],["line",{x1:"12",x2:"12",y1:"22",y2:"7",key:"1n8zgp"}],["path",{d:"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z",key:"zighg4"}],["path",{d:"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",key:"1pa5tk"}]]),Gf=J("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),Zf=J("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),Za=J("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Jf=J("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),qf=J("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]),Bi=J("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),cc=J("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),bf=J("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),dc=J("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),fc=J("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),ep=J("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]),pc=J("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),kr=J("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]),np=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$o=J("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),tp=()=>{const[e,n]=A.useState(!1),[t,r]=A.useState(!1);A.useEffect(()=>{const i=()=>{n(window.scrollY>50)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]);const l=[{name:"Home",href:"#home"},{name:"Stake",href:"#stake"},{name:"Tokenomics",href:"#tokenomics"},{name:"About",href:"#about"},{name:"Join Pulse",href:"#join"}];return v("header",{className:`header ${e?"scrolled":""}`,children:[v("div",{className:"container",children:[v("nav",{className:"nav",children:[u("div",{className:"logo",children:u("span",{className:"logo-font neon-text",children:"$PROTONE"})}),u("ul",{className:"nav-links",children:l.map(i=>u("li",{children:u("a",{href:i.href,className:"nav-link",children:i.name})},i.name))}),u("button",{className:"mobile-menu-btn",onClick:()=>r(!t),children:t?u(np,{size:24}):u(Jf,{size:24})})]}),t&&u("div",{className:"mobile-menu glass-card",children:l.map(i=>u("a",{href:i.href,className:"mobile-menu-link",onClick:()=>r(!1),children:i.name},i.name))})]}),u("style",{jsx:!0,children:`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-glow);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(10, 10, 15, 0.95);
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.2);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo-font {
          font-size: 1.75rem;
          font-weight: 900;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 500;
          font-family: 'Orbitron', monospace;
          text-transform: uppercase;
          font-size: 0.875rem;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple));
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: var(--neon-cyan);
          text-shadow: 0 0 10px var(--neon-cyan);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 1rem;
          right: 1rem;
          margin-top: 1rem;
          padding: 1rem;
          animation: slideDown 0.3s ease;
        }

        .mobile-menu-link {
          display: block;
          padding: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 500;
          font-family: 'Orbitron', monospace;
          text-transform: uppercase;
          font-size: 0.875rem;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          border-radius: 0.5rem;
        }

        .mobile-menu-link:hover {
          background: rgba(139, 92, 246, 0.2);
          color: var(--neon-cyan);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }
      `})]})},rp=()=>v("section",{id:"home",className:"hero",children:[u("div",{className:"container",children:v("div",{className:"hero-content",children:[v("div",{className:"hero-text",children:[v("div",{className:"hero-badge animate-fade-in-up",children:[u($o,{size:16}),u("span",{children:"The First Tone of the New Era"})]}),u("h1",{className:"hero-title animate-fade-in-up",children:"$PROTONE"}),u("p",{className:"hero-subtitle animate-fade-in-up",children:"Created by Ezhodus. For people. With the support of AI."}),u("p",{className:"hero-description animate-fade-in-up",children:"PROTONE is not just a token. It is a pulse. Connecting a person and consciousness through the power of decentralized finance and artificial intelligence."}),v("div",{className:"hero-buttons animate-fade-in-up",children:[v("a",{href:"#stake",className:"btn btn-primary",children:[u(dc,{size:20}),"Start Staking"]}),v("a",{href:"#about",className:"btn btn-neon",children:[u(cc,{size:20}),"Learn More"]})]}),v("div",{className:"hero-stats animate-fade-in-up",children:[v("div",{className:"stat",children:[u("div",{className:"stat-number neon-text",children:"$2.4M"}),u("div",{className:"stat-label",children:"Market Cap"})]}),v("div",{className:"stat",children:[u("div",{className:"stat-number neon-text",children:"15.2%"}),u("div",{className:"stat-label",children:"APY Staking"})]}),v("div",{className:"stat",children:[u("div",{className:"stat-number neon-text",children:"10K+"}),u("div",{className:"stat-label",children:"Holders"})]})]})]}),v("div",{className:"hero-visual",children:[v("div",{className:"pulse-container",children:[u("div",{className:"pulse-ring animate-pulse"}),u("div",{className:"pulse-ring animate-pulse",style:{animationDelay:"0.5s"}}),u("div",{className:"pulse-ring animate-pulse",style:{animationDelay:"1s"}}),u("div",{className:"pulse-core animate-float",children:u("span",{className:"logo-font",children:"$P"})})]}),v("div",{className:"floating-elements",children:[u("div",{className:"floating-element animate-float",style:{animationDelay:"0.2s"},children:"⚡"}),u("div",{className:"floating-element animate-float",style:{animationDelay:"0.8s"},children:"🌌"}),u("div",{className:"floating-element animate-float",style:{animationDelay:"1.4s"},children:"💎"})]})]})]})}),u("style",{jsx:!0,children:`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid var(--border-glow);
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--neon-cyan);
          margin-bottom: 2rem;
          animation-delay: 0.2s;
        }

        .hero-title {
          margin-bottom: 1rem;
          animation-delay: 0.3s;
          font-size: clamp(3rem, 8vw, 6rem);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          animation-delay: 0.4s;
          font-family: 'Orbitron', monospace;
          font-weight: 400;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.8;
          animation-delay: 0.5s;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          animation-delay: 0.6s;
        }

        .hero-buttons .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          animation-delay: 0.7s;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 900;
          font-family: 'Orbitron', monospace;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'Orbitron', monospace;
        }

        .hero-visual {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-container {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid var(--neon-cyan);
          border-radius: 50%;
          opacity: 0.6;
        }

        .pulse-ring:nth-child(2) {
          width: 80%;
          height: 80%;
          border-color: var(--neon-purple);
        }

        .pulse-ring:nth-child(3) {
          width: 60%;
          height: 60%;
          border-color: var(--neon-pink);
        }

        .pulse-core {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
          box-shadow: 
            0 0 30px var(--neon-cyan),
            inset 0 0 30px rgba(255, 255, 255, 0.2);
        }

        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .floating-element {
          position: absolute;
          font-size: 2rem;
          opacity: 0.7;
        }

        .floating-element:nth-child(1) {
          top: 20%;
          left: 10%;
        }

        .floating-element:nth-child(2) {
          top: 60%;
          right: 15%;
        }

        .floating-element:nth-child(3) {
          bottom: 20%;
          left: 20%;
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 100px;
            text-align: center;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            justify-content: center;
            gap: 1.5rem;
          }

          .hero-visual {
            height: 300px;
          }

          .pulse-container {
            width: 200px;
            height: 200px;
          }

          .pulse-core {
            width: 80px;
            height: 80px;
            font-size: 2rem;
          }
        }
      `})]}),lp=()=>{const[e,n]=A.useState(""),[t,r]=A.useState("30"),[l,i]=A.useState(!1),[o]=A.useState("1,250.50"),[a]=A.useState("500.00"),[s]=A.useState("12.45"),d=[{days:7,apy:"8.5%",multiplier:"1x"},{days:30,apy:"12.0%",multiplier:"1.5x"},{days:90,apy:"15.2%",multiplier:"2x"},{days:180,apy:"18.7%",multiplier:"2.5x"}],h=()=>{if(!e||!t)return"0.00";const x=parseFloat(e),D=d.find(w=>w.days.toString()===t);if(!D)return"0.00";const c=parseFloat(D.apy)/100/365;return(x*c*D.days).toFixed(2)},g=async()=>{try{if(window.solana&&window.solana.isPhantom){const x=await window.solana.connect();i(!0),console.log("Connected to wallet:",x.publicKey.toString())}else alert("Please install Phantom wallet to continue")}catch(x){console.error("Error connecting wallet:",x),alert("Failed to connect wallet. Please try again.")}},m=async()=>{if(!l){alert("Please connect your wallet first");return}if(!e||parseFloat(e)<=0){alert("Please enter a valid stake amount");return}try{alert(`✅ Successfully staked ${e} $PROTONE for ${t} days!`),n("")}catch(x){console.error("Staking error:",x),alert("❌ Staking failed. Please try again.")}},S=()=>{if(!l){alert("Please connect your wallet first");return}alert("Unstaking functionality will be available after the lock period ends.")},y=()=>{if(!l){alert("Please connect your wallet first");return}alert(`✅ Successfully claimed ${s} $PROTONE rewards!`)};return v("section",{id:"stake",className:"stake",children:[v("div",{className:"container",children:[v("div",{className:"section-header text-center mb-8",children:[u("h2",{className:"animate-fade-in-up heading-font",children:"Stake & Earn"}),u("p",{className:"animate-fade-in-up",children:"Lock your $PROTONE tokens and earn passive rewards with our built-in staking protocol"})]}),v("div",{className:"stake-content",children:[v("div",{className:"stake-stats",children:[v("div",{className:"stat-card glass-card animate-fade-in-up",children:[u("div",{className:"stat-icon",children:u(Xf,{className:"neon-text"})}),v("div",{className:"stat-info",children:[u("div",{className:"stat-value",children:o}),u("div",{className:"stat-label",children:"Available Balance"})]})]}),v("div",{className:"stat-card glass-card animate-fade-in-up",children:[u("div",{className:"stat-icon",children:u(Za,{className:"neon-text"})}),v("div",{className:"stat-info",children:[u("div",{className:"stat-value",children:a}),u("div",{className:"stat-label",children:"Staked Amount"})]})]}),v("div",{className:"stat-card glass-card animate-fade-in-up",children:[u("div",{className:"stat-icon",children:u(Wi,{className:"neon-text"})}),v("div",{className:"stat-info",children:[u("div",{className:"stat-value",children:s}),u("div",{className:"stat-label",children:"Pending Rewards"})]})]})]}),v("div",{className:"stake-panel glass-card animate-fade-in-up",children:[u("h3",{className:"heading-font mb-4",children:"Staking Panel"}),l?v("div",{className:"staking-form",children:[v("div",{className:"form-group",children:[u("label",{htmlFor:"amount",children:"Stake Amount"}),v("div",{className:"input-group",children:[u("input",{type:"number",id:"amount",value:e,onChange:x=>n(x.target.value),placeholder:"Enter amount to stake",min:"0",step:"0.01"}),u("span",{className:"input-suffix",children:"$PROTONE"})]})]}),v("div",{className:"form-group",children:[u("label",{htmlFor:"period",children:"Staking Period"}),u("div",{className:"period-options",children:d.map(x=>v("div",{className:`period-option ${t===x.days.toString()?"active":""}`,onClick:()=>r(x.days.toString()),children:[v("div",{className:"period-days",children:[x.days," Days"]}),v("div",{className:"period-apy",children:[x.apy," APY"]}),u("div",{className:"period-multiplier",children:x.multiplier})]},x.days))})]}),u("div",{className:"rewards-preview glass-card",children:v("div",{className:"rewards-info",children:[u(dc,{className:"neon-text"}),v("div",{children:[v("div",{className:"rewards-amount",children:[h()," $PROTONE"]}),u("div",{className:"rewards-label",children:"Estimated Rewards"})]})]})}),v("div",{className:"stake-actions",children:[v("button",{className:"btn btn-primary",onClick:m,children:[u(Za,{size:20}),"Stake Tokens"]}),v("button",{className:"btn btn-neon",onClick:S,children:[u(ep,{size:20}),"Unstake"]}),v("button",{className:"btn btn-neon",onClick:y,children:[u(Wi,{size:20}),"Claim Rewards"]})]})]}):v("div",{className:"wallet-connect",children:[u("p",{className:"mb-4",children:"Connect your wallet to start staking"}),u("button",{className:"btn btn-primary",onClick:g,children:"Connect Wallet"})]})]})]})]}),u("style",{jsx:!0,children:`
        .stake {
          position: relative;
        }

        .stake-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          margin-top: 3rem;
        }

        .stake-stats {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.2);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          font-family: 'Orbitron', monospace;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .stake-panel {
          padding: 2rem;
        }

        .wallet-connect {
          text-align: center;
          padding: 2rem;
        }

        .wallet-connect p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-suffix {
          position: absolute;
          right: 1rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          pointer-events: none;
        }

        .period-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .period-option {
          padding: 1rem;
          background: rgba(15, 15, 25, 0.5);
          border: 1px solid var(--border-glow);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .period-option:hover,
        .period-option.active {
          border-color: var(--neon-cyan);
          background: rgba(0, 255, 255, 0.1);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
        }

        .period-days {
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .period-apy {
          color: var(--neon-cyan);
          font-weight: 600;
          font-size: 0.875rem;
        }

        .period-multiplier {
          color: var(--text-secondary);
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }

        .rewards-preview {
          padding: 1.5rem;
          margin: 1.5rem 0;
        }

        .rewards-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .rewards-amount {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--neon-cyan);
          font-family: 'Orbitron', monospace;
        }

        .rewards-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .stake-actions {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
        }

        .stake-actions .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .stake-content {
            grid-template-columns: 1fr;
          }

          .period-options {
            grid-template-columns: 1fr;
          }

          .stake-actions {
            grid-template-columns: 1fr;
          }
        }
      `})]})},ip=()=>v("section",{id:"tokenomics",className:"tokenomics",children:[v("div",{className:"container",children:[v("div",{className:"section-header text-center mb-8",children:[u("h2",{className:"animate-fade-in-up heading-font",children:"Tokenomics"}),u("p",{className:"animate-fade-in-up",children:"Transparent distribution designed for sustainable growth and community control"})]}),v("div",{className:"tokenomics-content",children:[v("div",{className:"tokenomics-chart animate-fade-in-up",children:[u("div",{className:"chart-container",children:u("div",{className:"pie-chart",children:v("div",{className:"chart-center",children:[u("div",{className:"chart-logo",children:"$P"}),u("div",{className:"chart-text",children:"PROTONE"})]})})}),v("div",{className:"supply-stats",children:[v("div",{className:"supply-stat glass-card",children:[u("div",{className:"supply-label",children:"Total Supply"}),u("div",{className:"supply-value neon-text",children:"1,000,000,000"})]}),v("div",{className:"supply-stat glass-card",children:[u("div",{className:"supply-label",children:"Circulating"}),u("div",{className:"supply-value neon-text",children:"250,000,000"})]}),v("div",{className:"supply-stat glass-card",children:[u("div",{className:"supply-label",children:"Burned"}),u("div",{className:"supply-value neon-text",children:"50,000,000"})]})]})]}),v("div",{className:"tokenomics-breakdown",children:[u("h3",{className:"heading-font mb-4",children:"Distribution Breakdown"}),u("div",{className:"breakdown-list",children:[{category:"Staking Rewards",percentage:40,color:"#8b5cf6",icon:u($o,{}),description:"Allocated for staking rewards and yield farming"},{category:"Liquidity Pool",percentage:35,color:"#3b82f6",icon:u(pc,{}),description:"DEX liquidity and market making"},{category:"Development",percentage:15,color:"#06b6d4",icon:u(cc,{}),description:"Platform development and maintenance"},{category:"Community",percentage:10,color:"#ec4899",icon:u(qf,{}),description:"Airdrops, marketing, and community growth"}].map((l,i)=>v("div",{className:"breakdown-item glass-card animate-fade-in-up",style:{animationDelay:`${i*.1}s`},children:[u("div",{className:"breakdown-icon",style:{color:l.color},children:l.icon}),v("div",{className:"breakdown-info",children:[v("div",{className:"breakdown-header",children:[u("span",{className:"breakdown-category",children:l.category}),v("span",{className:"breakdown-percentage",style:{color:l.color},children:[l.percentage,"%"]})]}),u("p",{className:"breakdown-description",children:l.description})]}),u("div",{className:"breakdown-bar",children:u("div",{className:"breakdown-fill",style:{width:`${l.percentage}%`,backgroundColor:l.color}})})]},l.category))}),v("div",{className:"control-message glass-card animate-fade-in-up",children:[u("h4",{className:"neon-text",children:"You are in control"}),u("p",{children:"PROTONE's tokenomics are designed with transparency and community governance at its core. Every decision is made with the community's best interests in mind, ensuring sustainable growth and long-term value creation."})]})]})]})]}),u("style",{jsx:!0,children:`
        .tokenomics {
          position: relative;
          background: var(--darker-bg);
        }

        .section-header h2 {
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .tokenomics-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }

        .chart-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .pie-chart {
          position: relative;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            #8b5cf6 0deg 144deg,
            #3b82f6 144deg 270deg,
            #06b6d4 270deg 324deg,
            #ec4899 324deg 360deg
          );
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
          animation: spin 20s linear infinite;
        }

        .chart-center {
          width: 120px;
          height: 120px;
          background: var(--dark-bg);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--border-glow);
        }

        .chart-logo {
          font-size: 2rem;
          font-weight: 900;
          font-family: 'Orbitron', monospace;
          color: var(--neon-cyan);
          text-shadow: 0 0 10px var(--neon-cyan);
        }

        .chart-text {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-family: 'Orbitron', monospace;
          letter-spacing: 2px;
        }

        .supply-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .supply-stat {
          text-align: center;
          padding: 1.5rem 1rem;
        }

        .supply-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .supply-value {
          font-size: 1.25rem;
          font-weight: 700;
          font-family: 'Orbitron', monospace;
        }

        .breakdown-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .breakdown-item {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .breakdown-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.1);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .breakdown-info {
          flex: 1;
        }

        .breakdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .breakdown-category {
          font-weight: 700;
          color: var(--text-primary);
          font-family: 'Orbitron', monospace;
        }

        .breakdown-percentage {
          font-weight: 700;
          font-family: 'Orbitron', monospace;
          font-size: 1.125rem;
        }

        .breakdown-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .breakdown-bar {
          width: 100px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .breakdown-fill {
          height: 100%;
          border-radius: 2px;
          transition: width 1s ease;
        }

        .control-message {
          padding: 2rem;
          text-align: center;
        }

        .control-message h4 {
          margin-bottom: 1rem;
          font-family: 'Orbitron', monospace;
        }

        .control-message p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .tokenomics-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .pie-chart {
            width: 250px;
            height: 250px;
          }

          .chart-center {
            width: 100px;
            height: 100px;
          }

          .supply-stats {
            grid-template-columns: 1fr;
          }

          .breakdown-item {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .breakdown-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .breakdown-bar {
            width: 100%;
          }
        }
      `})]}),op=()=>v("section",{id:"about",className:"about",children:[u("div",{className:"container",children:v("div",{className:"about-content",children:[v("div",{className:"about-text",children:[u("h2",{className:"animate-fade-in-up heading-font",children:"About PROTONE"}),u("div",{className:"about-tagline animate-fade-in-up",children:u("span",{className:"neon-text",children:'"PROTONE is not just a token. It is a pulse."'})}),u("p",{className:"animate-fade-in-up",children:"Connecting a person and consciousness through the revolutionary power of decentralized finance and artificial intelligence. PROTONE represents the first tone of a new era, where technology serves humanity's highest potential."}),u("p",{className:"animate-fade-in-up",children:"Created by the enigmatic Ezhodus, an anonymous visionary who believes in the power of community-driven innovation. This isn't just another meme token – it's a movement with spirit, purpose, and the backing of cutting-edge AI technology."}),v("div",{className:"creator-info glass-card animate-fade-in-up",children:[u("h3",{className:"heading-font",children:"About Ezhodus"}),u("p",{children:"The anonymous creator behind PROTONE, Ezhodus represents the spirit of decentralized innovation. Choosing to remain in the shadows, they let their work speak for itself – creating technology that empowers people rather than seeking personal recognition."}),v("div",{className:"creator-philosophy",children:[v("div",{className:"philosophy-item",children:[u("strong",{children:"Why meme?"})," Because culture drives adoption"]}),v("div",{className:"philosophy-item",children:[u("strong",{children:"Why anonymous?"})," Because ideas matter more than identity"]}),v("div",{className:"philosophy-item",children:[u("strong",{children:"Why with spirit?"})," Because technology should have soul"]})]})]})]}),v("div",{className:"about-features",children:[u("div",{className:"features-grid",children:[{icon:u(Yf,{}),title:"AI-Powered",description:"Built with artificial intelligence at its core, creating smarter financial solutions."},{icon:u($o,{}),title:"Lightning Fast",description:"Ultra-fast transactions with minimal fees on advanced blockchain infrastructure."},{icon:u(pc,{}),title:"Community Driven",description:"Governed by the community, for the community. Every voice matters in our ecosystem."},{icon:u(bf,{}),title:"Purpose Built",description:"Designed specifically to bridge human consciousness with digital innovation."}].map((n,t)=>v("div",{className:"feature-card glass-card animate-fade-in-up",style:{animationDelay:`${t*.1}s`},children:[u("div",{className:"feature-icon neon-text",children:n.icon}),u("h3",{className:"feature-title",children:n.title}),u("p",{className:"feature-description",children:n.description})]},t))}),v("div",{className:"vision-card glass-card animate-fade-in-up",children:[u("h3",{className:"heading-font neon-text",children:"Our Vision"}),u("p",{children:"To create a financial ecosystem where artificial intelligence and human consciousness work in harmony, enabling unprecedented levels of innovation, transparency, and community empowerment in the decentralized finance space."})]})]})]})}),u("style",{jsx:!0,children:`
        .about {
          position: relative;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text h2 {
          margin-bottom: 1.5rem;
          animation-delay: 0.2s;
        }

        .about-tagline {
          font-size: 1.5rem;
          font-family: 'Orbitron', monospace;
          font-weight: 600;
          margin-bottom: 2rem;
          animation-delay: 0.3s;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          color: var(--text-secondary);
          line-height: 1.8;
          animation-delay: 0.4s;
        }

        .creator-info {
          padding: 2rem;
          margin-top: 2rem;
          animation-delay: 0.5s;
        }

        .creator-info h3 {
          margin-bottom: 1rem;
          color: var(--neon-cyan);
        }

        .creator-info p {
          margin-bottom: 1.5rem;
        }

        .creator-philosophy {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .philosophy-item {
          padding: 0.75rem;
          background: rgba(139, 92, 246, 0.1);
          border-left: 3px solid var(--neon-cyan);
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }

        .philosophy-item strong {
          color: var(--neon-cyan);
          font-family: 'Orbitron', monospace;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .feature-card {
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.2);
          border-radius: 50%;
          font-size: 1.5rem;
        }

        .feature-title {
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          font-family: 'Orbitron', monospace;
          font-size: 1.125rem;
        }

        .feature-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0;
        }

        .vision-card {
          padding: 2rem;
          text-align: center;
        }

        .vision-card h3 {
          margin-bottom: 1rem;
        }

        .vision-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .creator-info {
            padding: 1.5rem;
          }

          .about-tagline {
            font-size: 1.25rem;
          }
        }
      `})]}),ap=()=>{const[e,n]=A.useState(""),[t,r]=A.useState(""),[l,i]=A.useState(""),[o,a]=A.useState(!1),[s,d]=A.useState(""),h=[{id:"follow",label:"Follow @PROTONE_Official",reward:"50 $PROTONE"},{id:"retweet",label:"Retweet Announcement",reward:"75 $PROTONE"},{id:"share",label:"Share with Friends",reward:"100 $PROTONE"},{id:"join",label:"Join Telegram",reward:"125 $PROTONE"}],g=async()=>{try{if(window.solana&&window.solana.isPhantom){const x=(await window.solana.connect()).publicKey.toString();d(x),n(x),console.log("Connected to wallet:",x)}else{const y="0x"+Math.random().toString(16).substr(2,40);d(y),n(y)}}catch(y){console.error("Error connecting wallet:",y),alert("Failed to connect wallet. Please try again.")}},m=y=>{if(y.preventDefault(),!e){alert("Please enter or connect your wallet address");return}if(!l){alert("Please select an action to participate");return}if(!t){alert("Please provide a link to your post/action");return}a(!0)},S=()=>{if(!e){alert("Please connect your wallet first");return}alert("Your reward status: Pending verification. You will receive your tokens within 24 hours!")};return v("section",{id:"join",className:"join-pulse",children:[v("div",{className:"container",children:[v("div",{className:"section-header text-center mb-8",children:[u("h2",{className:"animate-fade-in-up heading-font",children:"Join the Pulse"}),u("p",{className:"animate-fade-in-up",children:"Be part of the revolution. Connect your portfolio and join our growing community."})]}),v("div",{className:"join-content",children:[v("div",{className:"portfolio-connection glass-card animate-fade-in-up",children:[u("h3",{className:"heading-font mb-4",children:"Connect Your Portfolio"}),u("p",{className:"mb-4",children:"Connect your crypto portfolio to start trading $PROTONE and track your investments."}),v("div",{className:"wallet-options",children:[v("button",{className:"wallet-btn",onClick:g,children:[u(kr,{}),u("span",{children:"MetaMask"})]}),v("button",{className:"wallet-btn",onClick:g,children:[u(kr,{}),u("span",{children:"WalletConnect"})]}),v("button",{className:"wallet-btn",onClick:g,children:[u(kr,{}),u("span",{children:"Coinbase Wallet"})]}),v("button",{className:"wallet-btn",onClick:g,children:[u(kr,{}),u("span",{children:"Trust Wallet"})]})]}),s&&v("div",{className:"connected-wallet",children:[u(Ga,{className:"neon-text"}),v("div",{children:[u("div",{className:"wallet-status",children:"Wallet Connected"}),v("div",{className:"wallet-address",children:[s.slice(0,6),"...",s.slice(-4)]})]})]}),v("div",{className:"buy-section",children:[u("h4",{className:"heading-font",children:"Buy $PROTONE"}),v("div",{className:"buy-options",children:[u("button",{className:"btn btn-primary",onClick:()=>alert("Redirecting to Uniswap..."),children:"Buy on Uniswap"}),u("button",{className:"btn btn-neon",onClick:()=>alert("Redirecting to PancakeSwap..."),children:"Buy on PancakeSwap"})]})]})]}),v("div",{className:"airdrop-section glass-card animate-fade-in-up",children:[v("h3",{className:"heading-font mb-4",children:[u(Wi,{className:"neon-text"}),"Airdrop Campaign"]}),v("p",{className:"mb-4",children:["Complete tasks to earn free $PROTONE tokens. First 100 participants get",u("span",{className:"neon-text",children:' "Pulse Pioneer" '})," status!"]}),o?v("div",{className:"success-message",children:[u(Ga,{size:48,className:"neon-text"}),u("h4",{children:"Submission Successful!"}),u("p",{children:"Your participation has been recorded. We'll verify your submission and distribute rewards within 24 hours."}),u("div",{className:"pioneer-badge",children:u("span",{className:"neon-text",children:"🏆 Pulse Pioneer Candidate"})}),u("button",{className:"btn btn-neon mt-4",onClick:()=>{a(!1),i(""),r("")},children:"Submit Another Entry"})]}):v("form",{onSubmit:m,className:"airdrop-form",children:[v("div",{className:"form-group",children:[u("label",{htmlFor:"wallet",children:"Wallet Address"}),u("input",{type:"text",id:"wallet",value:e,onChange:y=>n(y.target.value),placeholder:"0x... or connect wallet above",required:!0})]}),v("div",{className:"form-group",children:[u("label",{children:"Select Action"}),u("div",{className:"action-options",children:h.map(y=>v("div",{className:`action-option ${l===y.id?"active":""}`,onClick:()=>i(y.id),children:[u("div",{className:"action-label",children:y.label}),u("div",{className:"action-reward",children:y.reward})]},y.id))})]}),v("div",{className:"form-group",children:[u("label",{htmlFor:"post",children:"Link to Post/Action"}),u("input",{type:"url",id:"post",value:t,onChange:y=>r(y.target.value),placeholder:"https://twitter.com/... or https://t.me/...",required:!0})]}),v("div",{className:"form-actions",children:[v("button",{type:"submit",className:"btn btn-primary",children:[u(Bi,{size:20}),"Participate"]}),u("button",{type:"button",className:"btn btn-neon",onClick:S,children:"Check Reward"})]})]})]})]}),v("div",{className:"social-coming-soon glass-card animate-fade-in-up text-center",children:[u("h3",{className:"heading-font",children:"Social Channels Coming Soon"}),u("p",{children:"We're preparing our official Twitter and Telegram channels. Stay tuned for announcements!"}),v("div",{className:"social-icons",children:[v("div",{className:"social-icon",children:[u(fc,{}),u("span",{children:"Twitter"})]}),v("div",{className:"social-icon",children:[u(Bi,{}),u("span",{children:"Telegram"})]})]})]})]}),u("style",{jsx:!0,children:`
        .join-pulse {
          position: relative;
          background: var(--darker-bg);
        }

        .section-header h2 {
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .join-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .portfolio-connection,
        .airdrop-section {
          padding: 2rem;
        }

        .wallet-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .wallet-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(15, 15, 25, 0.8);
          border: 1px solid var(--border-glow);
          border-radius: 0.5rem;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Exo 2', sans-serif;
        }

        .wallet-btn:hover {
          border-color: var(--neon-cyan);
          background: rgba(0, 255, 255, 0.1);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
        }

        .connected-wallet {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid var(--success);
          border-radius: 0.5rem;
          margin-bottom: 2rem;
        }

        .wallet-status {
          font-weight: 600;
          color: var(--success);
          font-family: 'Orbitron', monospace;
        }

        .wallet-address {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-family: monospace;
        }

        .buy-section h4 {
          margin-bottom: 1rem;
          color: var(--neon-cyan);
        }

        .buy-options {
          display: flex;
          gap: 1rem;
        }

        .buy-options .btn {
          flex: 1;
        }

        .airdrop-section h3 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .action-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .action-option {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: rgba(15, 15, 25, 0.5);
          border: 1px solid var(--border-glow);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-option:hover,
        .action-option.active {
          border-color: var(--neon-cyan);
          background: rgba(0, 255, 255, 0.1);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
        }

        .action-label {
          font-weight: 600;
          color: var(--text-primary);
        }

        .action-reward {
          color: var(--neon-cyan);
          font-weight: 700;
          font-family: 'Orbitron', monospace;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
        }

        .form-actions .btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .success-message {
          text-align: center;
          padding: 2rem;
        }

        .success-message h4 {
          margin: 1rem 0;
          color: var(--success);
          font-family: 'Orbitron', monospace;
        }

        .success-message p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .pioneer-badge {
          padding: 1rem;
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid var(--border-glow);
          border-radius: 0.5rem;
          font-weight: 700;
          font-family: 'Orbitron', monospace;
          margin-bottom: 1rem;
        }

        .mt-4 {
          margin-top: 1rem;
        }

        .social-coming-soon {
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: rgba(139, 92, 246, 0.1);
          border-radius: 0.5rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .join-content {
            grid-template-columns: 1fr;
          }

          .wallet-options {
            grid-template-columns: 1fr;
          }

          .buy-options {
            flex-direction: column;
          }

          .form-actions {
            flex-direction: column;
          }

          .social-icons {
            gap: 1rem;
          }
        }
      `})]})},sp=()=>{const e=new Date().getFullYear();return v("footer",{className:"footer",children:[v("div",{className:"container",children:[v("div",{className:"footer-content",children:[v("div",{className:"footer-section",children:[u("div",{className:"footer-logo",children:u("span",{className:"logo-font neon-text",children:"$PROTONE"})}),u("p",{className:"footer-description",children:"The first tone of the new era. Connecting human consciousness with artificial intelligence through decentralized finance."}),v("div",{className:"social-links",children:[u("a",{href:"#",className:"social-link",children:u(fc,{size:20})}),u("a",{href:"#",className:"social-link",children:u(Bi,{size:20})}),u("a",{href:"#",className:"social-link",children:u(Gf,{size:20})}),u("a",{href:"#",className:"social-link",children:u(Zf,{size:20})})]})]}),v("div",{className:"footer-section",children:[u("h3",{className:"heading-font",children:"Quick Links"}),v("ul",{className:"footer-links",children:[u("li",{children:u("a",{href:"#home",children:"Home"})}),u("li",{children:u("a",{href:"#stake",children:"Stake"})}),u("li",{children:u("a",{href:"#tokenomics",children:"Tokenomics"})}),u("li",{children:u("a",{href:"#about",children:"About"})}),u("li",{children:u("a",{href:"#join",children:"Join Pulse"})})]})]}),v("div",{className:"footer-section",children:[u("h3",{className:"heading-font",children:"Resources"}),v("ul",{className:"footer-links",children:[u("li",{children:u("a",{href:"#",children:"Whitepaper"})}),u("li",{children:u("a",{href:"#",children:"Documentation"})}),u("li",{children:u("a",{href:"#",children:"Smart Contract"})}),u("li",{children:u("a",{href:"#",children:"Audit Report"})})]})]}),v("div",{className:"footer-section",children:[u("h3",{className:"heading-font",children:"Community"}),v("ul",{className:"footer-links",children:[u("li",{children:u("a",{href:"#",children:"Discord"})}),u("li",{children:u("a",{href:"#",children:"Reddit"})}),u("li",{children:u("a",{href:"#",children:"Medium"})}),u("li",{children:u("a",{href:"#",children:"Newsletter"})})]})]})]}),v("div",{className:"footer-bottom",children:[v("div",{className:"footer-bottom-left",children:[v("p",{children:["© ",e," PROTONE. Created by Ezhodus."]}),u("p",{className:"disclaimer",children:"Not financial advice. Cryptocurrency investments carry risk."})]}),v("div",{className:"footer-bottom-links",children:[u("a",{href:"#",children:"Privacy Policy"}),u("a",{href:"#",children:"Terms of Service"}),u("a",{href:"#",children:"Risk Disclosure"})]})]})]}),u("style",{jsx:!0,children:`
        .footer {
          background: var(--darker-bg);
          color: var(--text-primary);
          padding: 3rem 0 1rem;
          border-top: 1px solid var(--border-glow);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          color: var(--neon-cyan);
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }

        .footer-logo {
          margin-bottom: 1rem;
        }

        .logo-font {
          font-size: 2rem;
          font-weight: 900;
        }

        .footer-description {
          color: var(--text-secondary);
          margin: 1rem 0 1.5rem;
          line-height: 1.6;
          font-size: 0.875rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid var(--border-glow);
          border-radius: 50%;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--neon-cyan);
          color: var(--dark-bg);
          box-shadow: 0 0 15px var(--neon-cyan);
          transform: translateY(-2px);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.875rem;
        }

        .footer-links a:hover {
          color: var(--neon-cyan);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-top: 2rem;
          border-top: 1px solid rgba(139, 92, 246, 0.2);
          color: var(--text-secondary);
        }

        .footer-bottom-left p {
          margin: 0 0 0.5rem 0;
          font-size: 0.875rem;
        }

        .disclaimer {
          font-size: 0.75rem !important;
          color: var(--text-light) !important;
          font-style: italic;
        }

        .footer-bottom-links {
          display: flex;
          gap: 2rem;
        }

        .footer-bottom-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: var(--neon-cyan);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .footer-bottom-links {
            gap: 1rem;
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }
        }
      `})]})},up=()=>{const e=A.useRef(null);return A.useEffect(()=>{const n=e.current,t=n.getContext("2d");let r;const l=()=>{n.width=window.innerWidth,n.height=window.innerHeight},i=[],o=50;class a{constructor(){this.x=Math.random()*n.width,this.y=Math.random()*n.height,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+1,this.opacity=Math.random()*.5+.2,this.color=Math.random()>.5?"#8b5cf6":"#3b82f6"}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>n.width)&&(this.vx*=-1),(this.y<0||this.y>n.height)&&(this.vy*=-1)}draw(){t.save(),t.globalAlpha=this.opacity,t.fillStyle=this.color,t.shadowBlur=10,t.shadowColor=this.color,t.beginPath(),t.arc(this.x,this.y,this.size,0,Math.PI*2),t.fill(),t.restore()}}const s=()=>{for(let h=0;h<o;h++)i.push(new a)},d=()=>{t.clearRect(0,0,n.width,n.height),i.forEach(h=>{h.update(),h.draw()}),i.forEach((h,g)=>{i.slice(g+1).forEach(m=>{const S=h.x-m.x,y=h.y-m.y,x=Math.sqrt(S*S+y*y);x<100&&(t.save(),t.globalAlpha=(100-x)/100*.2,t.strokeStyle="#8b5cf6",t.lineWidth=1,t.beginPath(),t.moveTo(h.x,h.y),t.lineTo(m.x,m.y),t.stroke(),t.restore())})}),r=requestAnimationFrame(d)};return l(),s(),d(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l),cancelAnimationFrame(r)}},[]),u("canvas",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,pointerEvents:"none"}})};function cp(){const[e,n]=A.useState(!1);return A.useEffect(()=>{n(!0)},[]),v("div",{className:`app ${e?"loaded":""}`,children:[u(up,{}),u(tp,{}),v("main",{children:[u(rp,{}),u(lp,{}),u(ip,{}),u(op,{}),u(ap,{})]}),u(sp,{})]})}Xl.createRoot(document.getElementById("root")).render(u(Lc.StrictMode,{children:u(cp,{})}));
