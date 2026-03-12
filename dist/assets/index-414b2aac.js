(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function uc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ys={exports:{}},rl={},Xs={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),cc=Symbol.for("react.portal"),dc=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),hc=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),yc=Symbol.for("react.memo"),xc=Symbol.for("react.lazy"),$i=Symbol.iterator;function kc(e){return e===null||typeof e!="object"?null:(e=$i&&e[$i]||e["@@iterator"],typeof e=="function"?e:null)}var Gs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zs=Object.assign,Js={};function cn(e,t,n){this.props=e,this.context=t,this.refs=Js,this.updater=n||Gs}cn.prototype.isReactComponent={};cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qs(){}qs.prototype=cn.prototype;function Vo(e,t,n){this.props=e,this.context=t,this.refs=Js,this.updater=n||Gs}var Wo=Vo.prototype=new qs;Wo.constructor=Vo;Zs(Wo,cn.prototype);Wo.isPureReactComponent=!0;var Ai=Array.isArray,ea=Object.prototype.hasOwnProperty,Bo={current:null},ta={key:!0,ref:!0,__self:!0,__source:!0};function na(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)ea.call(t,r)&&!ta.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Zn,type:e,key:o,ref:i,props:l,_owner:Bo.current}}function wc(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function Sc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hi=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sc(""+e.key):t.toString(36)}function wr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Zn:case cc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Sl(i,0):r,Ai(l)?(n="",e!=null&&(n=e.replace(Hi,"$&/")+"/"),wr(l,t,n,"",function(d){return d})):l!=null&&(bo(l)&&(l=wc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Hi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ai(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Sl(o,s);i+=wr(o,t,n,u,l)}else if(u=kc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Sl(o,s++),i+=wr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function lr(e,t,n){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function jc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Sr={transition:null},Nc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:Bo};function ra(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:lr,forEach:function(e,t,n){lr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lr(e,function(){t++}),t},toArray:function(e){return lr(e,function(t){return t})||[]},only:function(e){if(!bo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=cn;M.Fragment=dc;M.Profiler=fc;M.PureComponent=Vo;M.StrictMode=pc;M.Suspense=vc;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nc;M.act=ra;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zs({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Bo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ea.call(t,u)&&!ta.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Zn,type:e.type,key:l,ref:o,props:r,_owner:i}};M.createContext=function(e){return e={$$typeof:hc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mc,_context:e},e.Consumer=e};M.createElement=na;M.createFactory=function(e){var t=na.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:gc,render:e}};M.isValidElement=bo;M.lazy=function(e){return{$$typeof:xc,_payload:{_status:-1,_result:e},_init:jc}};M.memo=function(e,t){return{$$typeof:yc,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=t}};M.unstable_act=ra;M.useCallback=function(e,t){return ce.current.useCallback(e,t)};M.useContext=function(e){return ce.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};M.useEffect=function(e,t){return ce.current.useEffect(e,t)};M.useId=function(){return ce.current.useId()};M.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ce.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};M.useRef=function(e){return ce.current.useRef(e)};M.useState=function(e){return ce.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ce.current.useTransition()};M.version="18.3.1";Xs.exports=M;var R=Xs.exports;const Ec=uc(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=R,zc=Symbol.for("react.element"),_c=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,Lc=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tc={key:!0,ref:!0,__self:!0,__source:!0};function la(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Pc.call(t,r)&&!Tc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:zc,type:e,key:o,ref:i,props:l,_owner:Lc.current}}rl.Fragment=_c;rl.jsx=la;rl.jsxs=la;Ys.exports=rl;var a=Ys.exports,Yl={},oa={exports:{}},Se={},ia={exports:{}},sa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,P){var T=_.length;_.push(P);e:for(;0<T;){var K=T-1>>>1,J=_[K];if(0<l(J,P))_[K]=P,_[T]=J,T=K;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var P=_[0],T=_.pop();if(T!==P){_[0]=T;e:for(var K=0,J=_.length,nr=J>>>1;K<nr;){var kt=2*(K+1)-1,wl=_[kt],wt=kt+1,rr=_[wt];if(0>l(wl,T))wt<J&&0>l(rr,wl)?(_[K]=rr,_[wt]=T,K=wt):(_[K]=wl,_[kt]=T,K=kt);else if(wt<J&&0>l(rr,T))_[K]=rr,_[wt]=T,K=wt;else break e}}return P}function l(_,P){var T=_.sortIndex-P.sortIndex;return T!==0?T:_.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],d=[],g=1,m=null,h=3,S=!1,N=!1,E=!1,F=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=_)r(d),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(d)}}function y(_){if(E=!1,f(_),!N)if(n(u)!==null)N=!0,xl(v);else{var P=n(d);P!==null&&kl(y,P.startTime-_)}}function v(_,P){N=!1,E&&(E=!1,p(j),j=-1),S=!0;var T=h;try{for(f(P),m=n(u);m!==null&&(!(m.expirationTime>P)||_&&!b());){var K=m.callback;if(typeof K=="function"){m.callback=null,h=m.priorityLevel;var J=K(m.expirationTime<=P);P=e.unstable_now(),typeof J=="function"?m.callback=J:m===n(u)&&r(u),f(P)}else r(u);m=n(u)}if(m!==null)var nr=!0;else{var kt=n(d);kt!==null&&kl(y,kt.startTime-P),nr=!1}return nr}finally{m=null,h=T,S=!1}}var k=!1,w=null,j=-1,L=5,C=-1;function b(){return!(e.unstable_now()-C<L)}function Fe(){if(w!==null){var _=e.unstable_now();C=_;var P=!0;try{P=w(!0,_)}finally{P?Ue():(k=!1,w=null)}}else k=!1}var Ue;if(typeof c=="function")Ue=function(){c(Fe)};else if(typeof MessageChannel<"u"){var Ui=new MessageChannel,ac=Ui.port2;Ui.port1.onmessage=Fe,Ue=function(){ac.postMessage(null)}}else Ue=function(){F(Fe,0)};function xl(_){w=_,k||(k=!0,Ue())}function kl(_,P){j=F(function(){_(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){N||S||(N=!0,xl(v))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var T=h;h=P;try{return _()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,P){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=h;h=_;try{return P()}finally{h=T}},e.unstable_scheduleCallback=function(_,P,T){var K=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?K+T:K):T=K,_){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=T+J,_={id:g++,callback:P,priorityLevel:_,startTime:T,expirationTime:J,sortIndex:-1},T>K?(_.sortIndex=T,t(d,_),n(u)===null&&_===n(d)&&(E?(p(j),j=-1):E=!0,kl(y,T-K))):(_.sortIndex=J,t(u,_),N||S||(N=!0,xl(v))),_},e.unstable_shouldYield=b,e.unstable_wrapCallback=function(_){var P=h;return function(){var T=h;h=P;try{return _.apply(this,arguments)}finally{h=T}}}})(sa);ia.exports=sa;var Mc=ia.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=R,we=Mc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var aa=new Set,Rn={};function Rt(e,t){nn(e,t),nn(e+"Capture",t)}function nn(e,t){for(Rn[e]=t,e=0;e<t.length;e++)aa.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Rc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vi={},Wi={};function Oc(e){return Xl.call(Wi,e)?!0:Xl.call(Vi,e)?!1:Rc.test(e)?Wi[e]=!0:(Vi[e]=!0,!1)}function Ic(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fc(e,t,n,r){if(t===null||typeof t>"u"||Ic(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qo=/[\-:]([a-z])/g;function Ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qo,Ko);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qo,Ko);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qo,Ko);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yo(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fc(t,n,l,r)&&(n=null),r||l===null?Oc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qe=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),$t=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),ua=Symbol.for("react.provider"),ca=Symbol.for("react.context"),Go=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Zo=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),da=Symbol.for("react.offscreen"),Bi=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Bi&&e[Bi]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,jl;function wn(e){if(jl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jl=t&&t[1]||""}return`
`+jl+e}var Nl=!1;function El(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Uc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $t:return"Fragment";case Ut:return"Portal";case Gl:return"Profiler";case Xo:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ca:return(e.displayName||"Context")+".Consumer";case ua:return(e._context.displayName||"Context")+".Provider";case Go:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zo:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function $c(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===Xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ac(e){var t=pa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=Ac(e))}function fa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function eo(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ma(e,t){t=t.checked,t!=null&&Yo(e,"checked",t,!1)}function to(e,t){ma(e,t);var n=ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?no(e,t.type,n):t.hasOwnProperty("defaultValue")&&no(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function no(e,t,n){(t!=="number"||Dr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Gt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ro(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ki(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Sn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function ha(e,t){var n=ht(t.value),r=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ga(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ga(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,va=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function ya(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function xa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ya(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Vc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oo(e,t){if(t){if(Vc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var so=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ao=null,Zt=null,Jt=null;function Xi(e){if(e=er(e)){if(typeof ao!="function")throw Error(x(280));var t=e.stateNode;t&&(t=al(t),ao(e.stateNode,e.type,t))}}function ka(e){Zt?Jt?Jt.push(e):Jt=[e]:Zt=e}function wa(){if(Zt){var e=Zt,t=Jt;if(Jt=Zt=null,Xi(e),t)for(e=0;e<t.length;e++)Xi(t[e])}}function Sa(e,t){return e(t)}function ja(){}var Cl=!1;function Na(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Sa(e,t,n)}finally{Cl=!1,(Zt!==null||Jt!==null)&&(ja(),wa())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var uo=!1;if(Xe)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){uo=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{uo=!1}function Wc(e,t,n,r,l,o,i,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Cn=!1,Rr=null,Or=!1,co=null,Bc={onError:function(e){Cn=!0,Rr=e}};function bc(e,t,n,r,l,o,i,s,u){Cn=!1,Rr=null,Wc.apply(Bc,arguments)}function Qc(e,t,n,r,l,o,i,s,u){if(bc.apply(this,arguments),Cn){if(Cn){var d=Rr;Cn=!1,Rr=null}else throw Error(x(198));Or||(Or=!0,co=d)}}function Ot(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ea(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gi(e){if(Ot(e)!==e)throw Error(x(188))}function Kc(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Gi(l),e;if(o===r)return Gi(l),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Ca(e){return e=Kc(e),e!==null?za(e):null}function za(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=za(e);if(t!==null)return t;e=e.sibling}return null}var _a=we.unstable_scheduleCallback,Zi=we.unstable_cancelCallback,Yc=we.unstable_shouldYield,Xc=we.unstable_requestPaint,Y=we.unstable_now,Gc=we.unstable_getCurrentPriorityLevel,qo=we.unstable_ImmediatePriority,Pa=we.unstable_UserBlockingPriority,Ir=we.unstable_NormalPriority,Zc=we.unstable_LowPriority,La=we.unstable_IdlePriority,ll=null,Ve=null;function Jc(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:td,qc=Math.log,ed=Math.LN2;function td(e){return e>>>=0,e===0?32:31-(qc(e)/ed|0)|0}var ar=64,ur=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=jn(s):(o&=i,o!==0&&(r=jn(o)))}else i=n&~l,i!==0?r=jn(i):o!==0&&(r=jn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),l=1<<n,r|=e[n],t&=~l;return r}function nd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Re(o),s=1<<i,u=l[i];u===-1?(!(s&n)||s&r)&&(l[i]=nd(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ta(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function ld(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Re(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ei(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function Ma(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Da,ti,Ra,Oa,Ia,fo=!1,cr=[],st=null,at=null,ut=null,Fn=new Map,Un=new Map,rt=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ji(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Fn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function hn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=er(t),t!==null&&ti(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function id(e,t,n,r,l){switch(t){case"focusin":return st=hn(st,e,t,n,r,l),!0;case"dragenter":return at=hn(at,e,t,n,r,l),!0;case"mouseover":return ut=hn(ut,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Fn.set(o,hn(Fn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Un.set(o,hn(Un.get(o)||null,e,t,n,r,l)),!0}return!1}function Fa(e){var t=Nt(e.target);if(t!==null){var n=Ot(t);if(n!==null){if(t=n.tag,t===13){if(t=Ea(n),t!==null){e.blockedOn=t,Ia(e.priority,function(){Ra(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);so=r,n.target.dispatchEvent(r),so=null}else return t=er(n),t!==null&&ti(t),e.blockedOn=n,!1;t.shift()}return!0}function qi(e,t,n){jr(e)&&n.delete(t)}function sd(){fo=!1,st!==null&&jr(st)&&(st=null),at!==null&&jr(at)&&(at=null),ut!==null&&jr(ut)&&(ut=null),Fn.forEach(qi),Un.forEach(qi)}function gn(e,t){e.blockedOn===t&&(e.blockedOn=null,fo||(fo=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,sd)))}function $n(e){function t(l){return gn(l,e)}if(0<cr.length){gn(cr[0],e);for(var n=1;n<cr.length;n++){var r=cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&gn(st,e),at!==null&&gn(at,e),ut!==null&&gn(ut,e),Fn.forEach(t),Un.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Fa(n),n.blockedOn===null&&rt.shift()}var qt=qe.ReactCurrentBatchConfig,Ur=!0;function ad(e,t,n,r){var l=I,o=qt.transition;qt.transition=null;try{I=1,ni(e,t,n,r)}finally{I=l,qt.transition=o}}function ud(e,t,n,r){var l=I,o=qt.transition;qt.transition=null;try{I=4,ni(e,t,n,r)}finally{I=l,qt.transition=o}}function ni(e,t,n,r){if(Ur){var l=mo(e,t,n,r);if(l===null)Fl(e,t,r,$r,n),Ji(e,r);else if(id(l,e,t,n,r))r.stopPropagation();else if(Ji(e,r),t&4&&-1<od.indexOf(e)){for(;l!==null;){var o=er(l);if(o!==null&&Da(o),o=mo(e,t,n,r),o===null&&Fl(e,t,r,$r,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Fl(e,t,r,null,n)}}var $r=null;function mo(e,t,n,r){if($r=null,e=Jo(r),e=Nt(e),e!==null)if(t=Ot(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ea(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $r=e,null}function Ua(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case qo:return 1;case Pa:return 4;case Ir:case Zc:return 16;case La:return 536870912;default:return 16}default:return 16}}var ot=null,ri=null,Nr=null;function $a(){if(Nr)return Nr;var e,t=ri,n=t.length,r,l="value"in ot?ot.value:ot.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Nr=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dr(){return!0}function es(){return!1}function je(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?dr:es,this.isPropagationStopped=es,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=je(dn),qn=B({},dn,{view:0,detail:0}),cd=je(qn),_l,Pl,vn,ol=B({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(_l=e.screenX-vn.screenX,Pl=e.screenY-vn.screenY):Pl=_l=0,vn=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),ts=je(ol),dd=B({},ol,{dataTransfer:0}),pd=je(dd),fd=B({},qn,{relatedTarget:0}),Ll=je(fd),md=B({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=je(md),gd=B({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vd=je(gd),yd=B({},dn,{data:0}),ns=je(yd),xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wd[e])?!!t[e]:!1}function oi(){return Sd}var jd=B({},qn,{key:function(e){if(e.key){var t=xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nd=je(jd),Ed=B({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rs=je(Ed),Cd=B({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),zd=je(Cd),_d=B({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=je(_d),Ld=B({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Td=je(Ld),Md=[9,13,27,32],ii=Xe&&"CompositionEvent"in window,zn=null;Xe&&"documentMode"in document&&(zn=document.documentMode);var Dd=Xe&&"TextEvent"in window&&!zn,Aa=Xe&&(!ii||zn&&8<zn&&11>=zn),ls=String.fromCharCode(32),os=!1;function Ha(e,t){switch(e){case"keyup":return Md.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Va(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Rd(e,t){switch(e){case"compositionend":return Va(t);case"keypress":return t.which!==32?null:(os=!0,ls);case"textInput":return e=t.data,e===ls&&os?null:e;default:return null}}function Od(e,t){if(At)return e==="compositionend"||!ii&&Ha(e,t)?(e=$a(),Nr=ri=ot=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Aa&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function Wa(e,t,n,r){ka(r),t=Ar(t,"onChange"),0<t.length&&(n=new li("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,An=null;function Fd(e){eu(e,0)}function il(e){var t=Wt(e);if(fa(t))return e}function Ud(e,t){if(e==="change")return t}var Ba=!1;if(Xe){var Tl;if(Xe){var Ml="oninput"in document;if(!Ml){var ss=document.createElement("div");ss.setAttribute("oninput","return;"),Ml=typeof ss.oninput=="function"}Tl=Ml}else Tl=!1;Ba=Tl&&(!document.documentMode||9<document.documentMode)}function as(){_n&&(_n.detachEvent("onpropertychange",ba),An=_n=null)}function ba(e){if(e.propertyName==="value"&&il(An)){var t=[];Wa(t,An,e,Jo(e)),Na(Fd,t)}}function $d(e,t,n){e==="focusin"?(as(),_n=t,An=n,_n.attachEvent("onpropertychange",ba)):e==="focusout"&&as()}function Ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(An)}function Hd(e,t){if(e==="click")return il(t)}function Vd(e,t){if(e==="input"||e==="change")return il(t)}function Wd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Wd;function Hn(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Xl.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cs(e,t){var n=us(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=us(n)}}function Qa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ka(){for(var e=window,t=Dr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dr(e.document)}return t}function si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bd(e){var t=Ka(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qa(n.ownerDocument.documentElement,n)){if(r!==null&&si(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=cs(n,o);var i=cs(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bd=Xe&&"documentMode"in document&&11>=document.documentMode,Ht=null,ho=null,Pn=null,go=!1;function ds(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;go||Ht==null||Ht!==Dr(r)||(r=Ht,"selectionStart"in r&&si(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&Hn(Pn,r)||(Pn=r,r=Ar(ho,"onSelect"),0<r.length&&(t=new li("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ht)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionend:pr("Transition","TransitionEnd")},Dl={},Ya={};Xe&&(Ya=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function sl(e){if(Dl[e])return Dl[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ya)return Dl[e]=t[n];return e}var Xa=sl("animationend"),Ga=sl("animationiteration"),Za=sl("animationstart"),Ja=sl("transitionend"),qa=new Map,ps="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){qa.set(e,t),Rt(t,[e])}for(var Rl=0;Rl<ps.length;Rl++){var Ol=ps[Rl],Qd=Ol.toLowerCase(),Kd=Ol[0].toUpperCase()+Ol.slice(1);vt(Qd,"on"+Kd)}vt(Xa,"onAnimationEnd");vt(Ga,"onAnimationIteration");vt(Za,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(Ja,"onTransitionEnd");nn("onMouseEnter",["mouseout","mouseover"]);nn("onMouseLeave",["mouseout","mouseover"]);nn("onPointerEnter",["pointerout","pointerover"]);nn("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function fs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qc(r,t,void 0,e),e.currentTarget=null}function eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;fs(l,s,d),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;fs(l,s,d),o=u}}}if(Or)throw e=co,Or=!1,co=null,e}function $(e,t){var n=t[wo];n===void 0&&(n=t[wo]=new Set);var r=e+"__bubble";n.has(r)||(tu(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),tu(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[fr]){e[fr]=!0,aa.forEach(function(n){n!=="selectionchange"&&(Yd.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Il("selectionchange",!1,t))}}function tu(e,t,n,r){switch(Ua(t)){case 1:var l=ad;break;case 4:l=ud;break;default:l=ni}n=l.bind(null,t,n,e),l=void 0,!uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Fl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Nt(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Na(function(){var d=o,g=Jo(n),m=[];e:{var h=qa.get(e);if(h!==void 0){var S=li,N=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":S=Nd;break;case"focusin":N="focus",S=Ll;break;case"focusout":N="blur",S=Ll;break;case"beforeblur":case"afterblur":S=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=zd;break;case Xa:case Ga:case Za:S=hd;break;case Ja:S=Pd;break;case"scroll":S=cd;break;case"wheel":S=Td;break;case"copy":case"cut":case"paste":S=vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=rs}var E=(t&4)!==0,F=!E&&e==="scroll",p=E?h!==null?h+"Capture":null:h;E=[];for(var c=d,f;c!==null;){f=c;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,p!==null&&(y=In(c,p),y!=null&&E.push(Wn(c,y,f)))),F)break;c=c.return}0<E.length&&(h=new S(h,N,null,n,g),m.push({event:h,listeners:E}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",h&&n!==so&&(N=n.relatedTarget||n.fromElement)&&(Nt(N)||N[Ge]))break e;if((S||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,S?(N=n.relatedTarget||n.toElement,S=d,N=N?Nt(N):null,N!==null&&(F=Ot(N),N!==F||N.tag!==5&&N.tag!==6)&&(N=null)):(S=null,N=d),S!==N)){if(E=ts,y="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=rs,y="onPointerLeave",p="onPointerEnter",c="pointer"),F=S==null?h:Wt(S),f=N==null?h:Wt(N),h=new E(y,c+"leave",S,n,g),h.target=F,h.relatedTarget=f,y=null,Nt(g)===d&&(E=new E(p,c+"enter",N,n,g),E.target=f,E.relatedTarget=F,y=E),F=y,S&&N)t:{for(E=S,p=N,c=0,f=E;f;f=Ft(f))c++;for(f=0,y=p;y;y=Ft(y))f++;for(;0<c-f;)E=Ft(E),c--;for(;0<f-c;)p=Ft(p),f--;for(;c--;){if(E===p||p!==null&&E===p.alternate)break t;E=Ft(E),p=Ft(p)}E=null}else E=null;S!==null&&ms(m,h,S,E,!1),N!==null&&F!==null&&ms(m,F,N,E,!0)}}e:{if(h=d?Wt(d):window,S=h.nodeName&&h.nodeName.toLowerCase(),S==="select"||S==="input"&&h.type==="file")var v=Ud;else if(is(h))if(Ba)v=Vd;else{v=Ad;var k=$d}else(S=h.nodeName)&&S.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(v=Hd);if(v&&(v=v(e,d))){Wa(m,v,n,g);break e}k&&k(e,h,d),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&no(h,"number",h.value)}switch(k=d?Wt(d):window,e){case"focusin":(is(k)||k.contentEditable==="true")&&(Ht=k,ho=d,Pn=null);break;case"focusout":Pn=ho=Ht=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,ds(m,n,g);break;case"selectionchange":if(bd)break;case"keydown":case"keyup":ds(m,n,g)}var w;if(ii)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else At?Ha(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Aa&&n.locale!=="ko"&&(At||j!=="onCompositionStart"?j==="onCompositionEnd"&&At&&(w=$a()):(ot=g,ri="value"in ot?ot.value:ot.textContent,At=!0)),k=Ar(d,j),0<k.length&&(j=new ns(j,e,null,n,g),m.push({event:j,listeners:k}),w?j.data=w:(w=Va(n),w!==null&&(j.data=w)))),(w=Dd?Rd(e,n):Od(e,n))&&(d=Ar(d,"onBeforeInput"),0<d.length&&(g=new ns("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:d}),g.data=w))}eu(m,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ar(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=In(e,n),o!=null&&r.unshift(Wn(e,o,l)),o=In(e,t),o!=null&&r.push(Wn(e,o,l))),e=e.return}return r}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ms(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=In(n,o),u!=null&&i.unshift(Wn(n,u,s))):l||(u=In(n,o),u!=null&&i.push(Wn(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Xd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function hs(e){return(typeof e=="string"?e:""+e).replace(Xd,`
`).replace(Gd,"")}function mr(e,t,n){if(t=hs(t),hs(e)!==t&&n)throw Error(x(425))}function Hr(){}var vo=null,yo=null;function xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ko=typeof setTimeout=="function"?setTimeout:void 0,Zd=typeof clearTimeout=="function"?clearTimeout:void 0,gs=typeof Promise=="function"?Promise:void 0,Jd=typeof queueMicrotask=="function"?queueMicrotask:typeof gs<"u"?function(e){return gs.resolve(null).then(e).catch(qd)}:ko;function qd(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);$n(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pn=Math.random().toString(36).slice(2),He="__reactFiber$"+pn,Bn="__reactProps$"+pn,Ge="__reactContainer$"+pn,wo="__reactEvents$"+pn,ep="__reactListeners$"+pn,tp="__reactHandles$"+pn;function Nt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vs(e);e!==null;){if(n=e[He])return n;e=vs(e)}return t}e=n,n=e.parentNode}return null}function er(e){return e=e[He]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function al(e){return e[Bn]||null}var So=[],Bt=-1;function yt(e){return{current:e}}function A(e){0>Bt||(e.current=So[Bt],So[Bt]=null,Bt--)}function U(e,t){Bt++,So[Bt]=e.current,e.current=t}var gt={},se=yt(gt),me=yt(!1),Pt=gt;function rn(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Vr(){A(me),A(se)}function ys(e,t,n){if(se.current!==gt)throw Error(x(168));U(se,t),U(me,n)}function nu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,$c(e)||"Unknown",l));return B({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,Pt=se.current,U(se,e),U(me,me.current),!0}function xs(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=nu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,A(me),A(se),U(se,e)):A(me),U(me,n)}var be=null,ul=!1,$l=!1;function ru(e){be===null?be=[e]:be.push(e)}function np(e){ul=!0,ru(e)}function xt(){if(!$l&&be!==null){$l=!0;var e=0,t=I;try{var n=be;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}be=null,ul=!1}catch(l){throw be!==null&&(be=be.slice(e+1)),_a(qo,xt),l}finally{I=t,$l=!1}}return null}var bt=[],Qt=0,Br=null,br=0,Ne=[],Ee=0,Lt=null,Qe=1,Ke="";function St(e,t){bt[Qt++]=br,bt[Qt++]=Br,Br=e,br=t}function lu(e,t,n){Ne[Ee++]=Qe,Ne[Ee++]=Ke,Ne[Ee++]=Lt,Lt=e;var r=Qe;e=Ke;var l=32-Re(r)-1;r&=~(1<<l),n+=1;var o=32-Re(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Qe=1<<32-Re(t)+l|n<<l|r,Ke=o+e}else Qe=1<<o|n<<l|r,Ke=e}function ai(e){e.return!==null&&(St(e,1),lu(e,1,0))}function ui(e){for(;e===Br;)Br=bt[--Qt],bt[Qt]=null,br=bt[--Qt],bt[Qt]=null;for(;e===Lt;)Lt=Ne[--Ee],Ne[Ee]=null,Ke=Ne[--Ee],Ne[Ee]=null,Qe=Ne[--Ee],Ne[Ee]=null}var ke=null,xe=null,H=!1,De=null;function ou(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ks(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,xe=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:Qe,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,xe=null,!0):!1;default:return!1}}function jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function No(e){if(H){var t=xe;if(t){var n=t;if(!ks(e,t)){if(jo(e))throw Error(x(418));t=ct(n.nextSibling);var r=ke;t&&ks(e,t)?ou(r,n):(e.flags=e.flags&-4097|2,H=!1,ke=e)}}else{if(jo(e))throw Error(x(418));e.flags=e.flags&-4097|2,H=!1,ke=e}}}function ws(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function hr(e){if(e!==ke)return!1;if(!H)return ws(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xo(e.type,e.memoizedProps)),t&&(t=xe)){if(jo(e))throw iu(),Error(x(418));for(;t;)ou(e,t),t=ct(t.nextSibling)}if(ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=ke?ct(e.stateNode.nextSibling):null;return!0}function iu(){for(var e=xe;e;)e=ct(e.nextSibling)}function ln(){xe=ke=null,H=!1}function ci(e){De===null?De=[e]:De.push(e)}var rp=qe.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function gr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ss(e){var t=e._init;return t(e._payload)}function su(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=mt(p,c),p.index=0,p.sibling=null,p}function o(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,y){return c===null||c.tag!==6?(c=Ql(f,p.mode,y),c.return=p,c):(c=l(c,f),c.return=p,c)}function u(p,c,f,y){var v=f.type;return v===$t?g(p,c,f.props.children,y,f.key):c!==null&&(c.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===tt&&Ss(v)===c.type)?(y=l(c,f.props),y.ref=yn(p,c,f),y.return=p,y):(y=Mr(f.type,f.key,f.props,null,p.mode,y),y.ref=yn(p,c,f),y.return=p,y)}function d(p,c,f,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Kl(f,p.mode,y),c.return=p,c):(c=l(c,f.children||[]),c.return=p,c)}function g(p,c,f,y,v){return c===null||c.tag!==7?(c=_t(f,p.mode,y,v),c.return=p,c):(c=l(c,f),c.return=p,c)}function m(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ql(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case or:return f=Mr(c.type,c.key,c.props,null,p.mode,f),f.ref=yn(p,null,c),f.return=p,f;case Ut:return c=Kl(c,p.mode,f),c.return=p,c;case tt:var y=c._init;return m(p,y(c._payload),f)}if(Sn(c)||fn(c))return c=_t(c,p.mode,f,null),c.return=p,c;gr(p,c)}return null}function h(p,c,f,y){var v=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return v!==null?null:s(p,c,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case or:return f.key===v?u(p,c,f,y):null;case Ut:return f.key===v?d(p,c,f,y):null;case tt:return v=f._init,h(p,c,v(f._payload),y)}if(Sn(f)||fn(f))return v!==null?null:g(p,c,f,y,null);gr(p,f)}return null}function S(p,c,f,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(f)||null,s(c,p,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case or:return p=p.get(y.key===null?f:y.key)||null,u(c,p,y,v);case Ut:return p=p.get(y.key===null?f:y.key)||null,d(c,p,y,v);case tt:var k=y._init;return S(p,c,f,k(y._payload),v)}if(Sn(y)||fn(y))return p=p.get(f)||null,g(c,p,y,v,null);gr(c,y)}return null}function N(p,c,f,y){for(var v=null,k=null,w=c,j=c=0,L=null;w!==null&&j<f.length;j++){w.index>j?(L=w,w=null):L=w.sibling;var C=h(p,w,f[j],y);if(C===null){w===null&&(w=L);break}e&&w&&C.alternate===null&&t(p,w),c=o(C,c,j),k===null?v=C:k.sibling=C,k=C,w=L}if(j===f.length)return n(p,w),H&&St(p,j),v;if(w===null){for(;j<f.length;j++)w=m(p,f[j],y),w!==null&&(c=o(w,c,j),k===null?v=w:k.sibling=w,k=w);return H&&St(p,j),v}for(w=r(p,w);j<f.length;j++)L=S(w,p,j,f[j],y),L!==null&&(e&&L.alternate!==null&&w.delete(L.key===null?j:L.key),c=o(L,c,j),k===null?v=L:k.sibling=L,k=L);return e&&w.forEach(function(b){return t(p,b)}),H&&St(p,j),v}function E(p,c,f,y){var v=fn(f);if(typeof v!="function")throw Error(x(150));if(f=v.call(f),f==null)throw Error(x(151));for(var k=v=null,w=c,j=c=0,L=null,C=f.next();w!==null&&!C.done;j++,C=f.next()){w.index>j?(L=w,w=null):L=w.sibling;var b=h(p,w,C.value,y);if(b===null){w===null&&(w=L);break}e&&w&&b.alternate===null&&t(p,w),c=o(b,c,j),k===null?v=b:k.sibling=b,k=b,w=L}if(C.done)return n(p,w),H&&St(p,j),v;if(w===null){for(;!C.done;j++,C=f.next())C=m(p,C.value,y),C!==null&&(c=o(C,c,j),k===null?v=C:k.sibling=C,k=C);return H&&St(p,j),v}for(w=r(p,w);!C.done;j++,C=f.next())C=S(w,p,j,C.value,y),C!==null&&(e&&C.alternate!==null&&w.delete(C.key===null?j:C.key),c=o(C,c,j),k===null?v=C:k.sibling=C,k=C);return e&&w.forEach(function(Fe){return t(p,Fe)}),H&&St(p,j),v}function F(p,c,f,y){if(typeof f=="object"&&f!==null&&f.type===$t&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case or:e:{for(var v=f.key,k=c;k!==null;){if(k.key===v){if(v=f.type,v===$t){if(k.tag===7){n(p,k.sibling),c=l(k,f.props.children),c.return=p,p=c;break e}}else if(k.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===tt&&Ss(v)===k.type){n(p,k.sibling),c=l(k,f.props),c.ref=yn(p,k,f),c.return=p,p=c;break e}n(p,k);break}else t(p,k);k=k.sibling}f.type===$t?(c=_t(f.props.children,p.mode,y,f.key),c.return=p,p=c):(y=Mr(f.type,f.key,f.props,null,p.mode,y),y.ref=yn(p,c,f),y.return=p,p=y)}return i(p);case Ut:e:{for(k=f.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=l(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Kl(f,p.mode,y),c.return=p,p=c}return i(p);case tt:return k=f._init,F(p,c,k(f._payload),y)}if(Sn(f))return N(p,c,f,y);if(fn(f))return E(p,c,f,y);gr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,f),c.return=p,p=c):(n(p,c),c=Ql(f,p.mode,y),c.return=p,p=c),i(p)):n(p,c)}return F}var on=su(!0),au=su(!1),Qr=yt(null),Kr=null,Kt=null,di=null;function pi(){di=Kt=Kr=null}function fi(e){var t=Qr.current;A(Qr),e._currentValue=t}function Eo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function en(e,t){Kr=e,di=Kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(di!==e)if(e={context:e,memoizedValue:t,next:null},Kt===null){if(Kr===null)throw Error(x(308));Kt=e,Kr.dependencies={lanes:0,firstContext:e}}else Kt=Kt.next=e;return t}var Et=null;function mi(e){Et===null?Et=[e]:Et.push(e)}function uu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,mi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ze(e,n)}return l=r.interleaved,l===null?(t.next=t,mi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ze(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ei(e,n)}}function js(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yr(e,t,n,r){var l=e.updateQueue;nt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,i===null?o=d:i.next=d,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=u))}if(o!==null){var m=l.baseState;i=0,g=d=u=null,s=o;do{var h=s.lane,S=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,E=s;switch(h=t,S=n,E.tag){case 1:if(N=E.payload,typeof N=="function"){m=N.call(S,m,h);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=E.payload,h=typeof N=="function"?N.call(S,m,h):N,h==null)break e;m=B({},m,h);break e;case 2:nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else S={eventTime:S,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=S,u=m):g=g.next=S,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(1);if(g===null&&(u=m),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Mt|=i,e.lanes=i,e.memoizedState=m}}function Ns(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var tr={},We=yt(tr),bn=yt(tr),Qn=yt(tr);function Ct(e){if(e===tr)throw Error(x(174));return e}function gi(e,t){switch(U(Qn,t),U(bn,e),U(We,tr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lo(t,e)}A(We),U(We,t)}function sn(){A(We),A(bn),A(Qn)}function du(e){Ct(Qn.current);var t=Ct(We.current),n=lo(t,e.type);t!==n&&(U(bn,e),U(We,n))}function vi(e){bn.current===e&&(A(We),A(bn))}var V=yt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function yi(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var zr=qe.ReactCurrentDispatcher,Hl=qe.ReactCurrentBatchConfig,Tt=0,W=null,G=null,q=null,Gr=!1,Ln=!1,Kn=0,lp=0;function le(){throw Error(x(321))}function xi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function ki(e,t,n,r,l,o){if(Tt=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zr.current=e===null||e.memoizedState===null?ap:up,e=n(r,l),Ln){o=0;do{if(Ln=!1,Kn=0,25<=o)throw Error(x(301));o+=1,q=G=null,t.updateQueue=null,zr.current=cp,e=n(r,l)}while(Ln)}if(zr.current=Zr,t=G!==null&&G.next!==null,Tt=0,q=G=W=null,Gr=!1,t)throw Error(x(300));return e}function wi(){var e=Kn!==0;return Kn=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?W.memoizedState=q=e:q=q.next=e,q}function Pe(){if(G===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=q===null?W.memoizedState:q.next;if(t!==null)q=t,G=e;else{if(e===null)throw Error(x(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},q===null?W.memoizedState=q=e:q=q.next=e}return q}function Yn(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=Pe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,d=o;do{var g=d.lane;if((Tt&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=m,i=r):u=u.next=m,W.lanes|=g,Mt|=g}d=d.next}while(d!==null&&d!==o);u===null?i=r:u.next=s,Ie(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,W.lanes|=o,Mt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=Pe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ie(o,t.memoizedState)||(fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pu(){}function fu(e,t){var n=W,r=Pe(),l=t(),o=!Ie(r.memoizedState,l);if(o&&(r.memoizedState=l,fe=!0),r=r.queue,Si(gu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Xn(9,hu.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(x(349));Tt&30||mu(n,t,l)}return l}function mu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hu(e,t,n,r){t.value=n,t.getSnapshot=r,vu(t)&&yu(e)}function gu(e,t,n){return n(function(){vu(t)&&yu(e)})}function vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function yu(e){var t=Ze(e,1);t!==null&&Oe(t,e,1,-1)}function Es(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=sp.bind(null,W,e),[t.memoizedState,e]}function Xn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xu(){return Pe().memoizedState}function _r(e,t,n,r){var l=Ae();W.flags|=e,l.memoizedState=Xn(1|t,n,void 0,r===void 0?null:r)}function cl(e,t,n,r){var l=Pe();r=r===void 0?null:r;var o=void 0;if(G!==null){var i=G.memoizedState;if(o=i.destroy,r!==null&&xi(r,i.deps)){l.memoizedState=Xn(t,n,o,r);return}}W.flags|=e,l.memoizedState=Xn(1|t,n,o,r)}function Cs(e,t){return _r(8390656,8,e,t)}function Si(e,t){return cl(2048,8,e,t)}function ku(e,t){return cl(4,2,e,t)}function wu(e,t){return cl(4,4,e,t)}function Su(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ju(e,t,n){return n=n!=null?n.concat([e]):null,cl(4,4,Su.bind(null,t,e),n)}function ji(){}function Nu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Eu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cu(e,t,n){return Tt&21?(Ie(n,t)||(n=Ta(),W.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function op(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{I=n,Hl.transition=r}}function zu(){return Pe().memoizedState}function ip(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_u(e))Pu(t,n);else if(n=uu(e,t,n,r),n!==null){var l=ue();Oe(n,e,r,l),Lu(n,t,r)}}function sp(e,t,n){var r=ft(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_u(e))Pu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Ie(s,i)){var u=t.interleaved;u===null?(l.next=l,mi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=uu(e,t,l,r),n!==null&&(l=ue(),Oe(n,e,r,l),Lu(n,t,r))}}function _u(e){var t=e.alternate;return e===W||t!==null&&t===W}function Pu(e,t){Ln=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ei(e,n)}}var Zr={readContext:_e,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},ap={readContext:_e,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Cs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,Su.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ip.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:Es,useDebugValue:ji,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=Es(!1),t=e[0];return e=op.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=Ae();if(H){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ee===null)throw Error(x(349));Tt&30||mu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Cs(gu.bind(null,r,o,e),[e]),r.flags|=2048,Xn(9,hu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ae(),t=ee.identifierPrefix;if(H){var n=Ke,r=Qe;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},up={readContext:_e,useCallback:Nu,useContext:_e,useEffect:Si,useImperativeHandle:ju,useInsertionEffect:ku,useLayoutEffect:wu,useMemo:Eu,useReducer:Vl,useRef:xu,useState:function(){return Vl(Yn)},useDebugValue:ji,useDeferredValue:function(e){var t=Pe();return Cu(t,G.memoizedState,e)},useTransition:function(){var e=Vl(Yn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:fu,useId:zu,unstable_isNewReconciler:!1},cp={readContext:_e,useCallback:Nu,useContext:_e,useEffect:Si,useImperativeHandle:ju,useInsertionEffect:ku,useLayoutEffect:wu,useMemo:Eu,useReducer:Wl,useRef:xu,useState:function(){return Wl(Yn)},useDebugValue:ji,useDeferredValue:function(e){var t=Pe();return G===null?t.memoizedState=e:Cu(t,G.memoizedState,e)},useTransition:function(){var e=Wl(Yn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:fu,useId:zu,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Co(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ft(e),o=Ye(r,l);o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,l),t!==null&&(Oe(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ft(e),o=Ye(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,l),t!==null&&(Oe(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ft(e),l=Ye(n,r);l.tag=2,t!=null&&(l.callback=t),t=dt(e,l,r),t!==null&&(Oe(t,e,r,n),Cr(t,e,r))}};function zs(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(l,o):!0}function Tu(e,t,n){var r=!1,l=gt,o=t.contextType;return typeof o=="object"&&o!==null?o=_e(o):(l=he(t)?Pt:se.current,r=t.contextTypes,o=(r=r!=null)?rn(e,l):gt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function _s(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function zo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},hi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=_e(o):(o=he(t)?Pt:se.current,l.context=rn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Co(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&dl.enqueueReplaceState(l,l.state,null),Yr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=Uc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _o(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dp=typeof WeakMap=="function"?WeakMap:Map;function Mu(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Uo=r),_o(e,t)},n}function Du(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){_o(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){_o(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ps(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ep.bind(null,e,t,n),t.then(e,e))}function Ls(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ts(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var pp=qe.ReactCurrentOwner,fe=!1;function ae(e,t,n,r){t.child=e===null?au(t,null,n,r):on(t,e.child,n,r)}function Ms(e,t,n,r,l){n=n.render;var o=t.ref;return en(t,l),r=ki(e,t,n,r,o,l),n=wi(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):(H&&n&&ai(t),t.flags|=1,ae(e,t,r,l),t.child)}function Ds(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ti(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ru(e,t,o,r,l)):(e=Mr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(i,r)&&e.ref===t.ref)return Je(e,t,l)}return t.flags|=1,e=mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ru(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Hn(o,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Je(e,t,l)}return Po(e,t,n,r,l)}function Ou(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Xt,ye),ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Xt,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(Xt,ye),ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(Xt,ye),ye|=r;return ae(e,t,l,n),t.child}function Iu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Po(e,t,n,r,l){var o=he(n)?Pt:se.current;return o=rn(t,o),en(t,l),n=ki(e,t,n,r,o,l),r=wi(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):(H&&r&&ai(t),t.flags|=1,ae(e,t,n,l),t.child)}function Rs(e,t,n,r,l){if(he(n)){var o=!0;Wr(t)}else o=!1;if(en(t,l),t.stateNode===null)Pr(e,t),Tu(t,n,r),zo(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=_e(d):(d=he(n)?Pt:se.current,d=rn(t,d));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==d)&&_s(t,i,r,d),nt=!1;var h=t.memoizedState;i.state=h,Yr(t,r,i,l),u=t.memoizedState,s!==r||h!==u||me.current||nt?(typeof g=="function"&&(Co(t,n,g,r),u=t.memoizedState),(s=nt||zs(t,n,s,r,h,u,d))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,cu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Te(t.type,s),i.props=d,m=t.pendingProps,h=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=he(n)?Pt:se.current,u=rn(t,u));var S=n.getDerivedStateFromProps;(g=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||h!==u)&&_s(t,i,r,u),nt=!1,h=t.memoizedState,i.state=h,Yr(t,r,i,l);var N=t.memoizedState;s!==m||h!==N||me.current||nt?(typeof S=="function"&&(Co(t,n,S,r),N=t.memoizedState),(d=nt||zs(t,n,d,r,h,N,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Lo(e,t,n,r,o,l)}function Lo(e,t,n,r,l,o){Iu(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&xs(t,n,!1),Je(e,t,o);r=t.stateNode,pp.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=on(t,e.child,null,o),t.child=on(t,null,s,o)):ae(e,t,s,o),t.memoizedState=r.state,l&&xs(t,n,!0),t.child}function Fu(e){var t=e.stateNode;t.pendingContext?ys(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ys(e,t.context,!1),gi(e,t.containerInfo)}function Os(e,t,n,r,l){return ln(),ci(l),t.flags|=256,ae(e,t,n,r),t.child}var To={dehydrated:null,treeContext:null,retryLane:0};function Mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uu(e,t,n){var r=t.pendingProps,l=V.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(V,l&1),e===null)return No(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=ml(i,r,0,null),e=_t(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Mo(n),t.memoizedState=To,e):Ni(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return fp(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=mt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=mt(s,o):(o=_t(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Mo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=To,r}return o=e.child,e=o.sibling,r=mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ni(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vr(e,t,n,r){return r!==null&&ci(r),on(t,e.child,null,n),e=Ni(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(x(422))),vr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=ml({mode:"visible",children:r.children},l,0,null),o=_t(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&on(t,e.child,null,i),t.child.memoizedState=Mo(i),t.memoizedState=To,o);if(!(t.mode&1))return vr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(x(419)),r=Bl(o,r,void 0),vr(e,t,i,r)}if(s=(i&e.childLanes)!==0,fe||s){if(r=ee,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ze(e,l),Oe(r,e,l,-1))}return Li(),r=Bl(Error(x(421))),vr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Cp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,xe=ct(l.nextSibling),ke=t,H=!0,De=null,e!==null&&(Ne[Ee++]=Qe,Ne[Ee++]=Ke,Ne[Ee++]=Lt,Qe=e.id,Ke=e.overflow,Lt=t),t=Ni(t,r.children),t.flags|=4096,t)}function Is(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Eo(e.return,t,n)}function bl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function $u(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Is(e,n,t);else if(e.tag===19)Is(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(V,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),bl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}bl(t,!0,n,null,o);break;case"together":bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mp(e,t,n){switch(t.tag){case 3:Fu(t),ln();break;case 5:du(t);break;case 1:he(t.type)&&Wr(t);break;case 4:gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(Qr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Uu(e,t,n):(U(V,V.current&1),e=Je(e,t,n),e!==null?e.sibling:null);U(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $u(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Ou(e,t,n)}return Je(e,t,n)}var Au,Do,Hu,Vu;Au=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Do=function(){};Hu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ct(We.current);var o=null;switch(n){case"input":l=eo(e,l),r=eo(e,r),o=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),o=[];break;case"textarea":l=ro(e,l),r=ro(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}oo(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Rn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&$("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Vu=function(e,t,n,r){n!==r&&(t.flags|=4)};function xn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hp(e,t,n){var r=t.pendingProps;switch(ui(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return he(t.type)&&Vr(),oe(t),null;case 3:return r=t.stateNode,sn(),A(me),A(se),yi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Ho(De),De=null))),Do(e,t),oe(t),null;case 5:vi(t);var l=Ct(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Hu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return oe(t),null}if(e=Ct(We.current),hr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[He]=t,r[Bn]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(l=0;l<Nn.length;l++)$(Nn[l],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":bi(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Ki(r,o),$("invalid",r)}oo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&mr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&mr(r.textContent,s,e),l=["children",""+s]):Rn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&$("scroll",r)}switch(n){case"input":ir(r),Qi(r,o,!0);break;case"textarea":ir(r),Yi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Hr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ga(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[He]=t,e[Bn]=r,Au(e,t,!1,!1),t.stateNode=e;e:{switch(i=io(n,r),n){case"dialog":$("cancel",e),$("close",e),l=r;break;case"iframe":case"object":case"embed":$("load",e),l=r;break;case"video":case"audio":for(l=0;l<Nn.length;l++)$(Nn[l],e);l=r;break;case"source":$("error",e),l=r;break;case"img":case"image":case"link":$("error",e),$("load",e),l=r;break;case"details":$("toggle",e),l=r;break;case"input":bi(e,r),l=eo(e,r),$("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),$("invalid",e);break;case"textarea":Ki(e,r),l=ro(e,r),$("invalid",e);break;default:l=r}oo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?xa(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&va(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&On(e,u):typeof u=="number"&&On(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&$("scroll",e):u!=null&&Yo(e,o,u,i))}switch(n){case"input":ir(e),Qi(e,r,!1);break;case"textarea":ir(e),Yi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ht(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Vu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Ct(Qn.current),Ct(We.current),hr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(o=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return oe(t),null;case 13:if(A(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&xe!==null&&t.mode&1&&!(t.flags&128))iu(),ln(),t.flags|=98560,o=!1;else if(o=hr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[He]=t}else ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else De!==null&&(Ho(De),De=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?Z===0&&(Z=3):Li())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return sn(),Do(e,t),e===null&&Vn(t.stateNode.containerInfo),oe(t),null;case 10:return fi(t.type._context),oe(t),null;case 17:return he(t.type)&&Vr(),oe(t),null;case 19:if(A(V),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)xn(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Xr(e),i!==null){for(t.flags|=128,xn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>un&&(t.flags|=128,r=!0,xn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!H)return oe(t),null}else 2*Y()-o.renderingStartTime>un&&n!==1073741824&&(t.flags|=128,r=!0,xn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=V.current,U(V,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Pi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function gp(e,t){switch(ui(t),t.tag){case 1:return he(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sn(),A(me),A(se),yi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vi(t),null;case 13:if(A(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(V),null;case 4:return sn(),null;case 10:return fi(t.type._context),null;case 22:case 23:return Pi(),null;case 24:return null;default:return null}}var yr=!1,ie=!1,vp=typeof WeakSet=="function"?WeakSet:Set,z=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Ro(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Fs=!1;function yp(e,t){if(vo=Ur,e=Ka(),si(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,d=0,g=0,m=e,h=null;t:for(;;){for(var S;m!==n||l!==0&&m.nodeType!==3||(s=i+l),m!==o||r!==0&&m.nodeType!==3||(u=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(S=m.firstChild)!==null;)h=m,m=S;for(;;){if(m===e)break t;if(h===n&&++d===l&&(s=i),h===o&&++g===r&&(u=i),(S=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yo={focusedElem:e,selectionRange:n},Ur=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var E=N.memoizedProps,F=N.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?E:Te(t.type,E),F);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){Q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return N=Fs,Fs=!1,N}function Tn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ro(t,n,o)}l=l.next}while(l!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[Bn],delete t[wo],delete t[ep],delete t[tp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}function Fo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fo(e,t,n),e=e.sibling;e!==null;)Fo(e,t,n),e=e.sibling}var te=null,Me=!1;function et(e,t,n){for(n=n.child;n!==null;)bu(e,t,n),n=n.sibling}function bu(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 5:ie||Yt(n,t);case 6:var r=te,l=Me;te=null,et(e,t,n),te=r,Me=l,te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),$n(e)):Ul(te,n.stateNode));break;case 4:r=te,l=Me,te=n.stateNode.containerInfo,Me=!0,et(e,t,n),te=r,Me=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Ro(n,t,i),l=l.next}while(l!==r)}et(e,t,n);break;case 1:if(!ie&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Q(n,t,s)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,et(e,t,n),ie=r):et(e,t,n);break;default:et(e,t,n)}}function $s(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vp),t.forEach(function(r){var l=zp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Me=!1;break e;case 3:te=s.stateNode.containerInfo,Me=!0;break e;case 4:te=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(te===null)throw Error(x(160));bu(o,i,l),te=null,Me=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){Q(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qu(t,e),t=t.sibling}function Qu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),$e(e),r&4){try{Tn(3,e,e.return),pl(3,e)}catch(E){Q(e,e.return,E)}try{Tn(5,e,e.return)}catch(E){Q(e,e.return,E)}}break;case 1:Le(t,e),$e(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(Le(t,e),$e(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var l=e.stateNode;try{On(l,"")}catch(E){Q(e,e.return,E)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ma(l,o),io(s,i);var d=io(s,o);for(i=0;i<u.length;i+=2){var g=u[i],m=u[i+1];g==="style"?xa(l,m):g==="dangerouslySetInnerHTML"?va(l,m):g==="children"?On(l,m):Yo(l,g,m,d)}switch(s){case"input":to(l,o);break;case"textarea":ha(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Gt(l,!!o.multiple,S,!1):h!==!!o.multiple&&(o.defaultValue!=null?Gt(l,!!o.multiple,o.defaultValue,!0):Gt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Bn]=o}catch(E){Q(e,e.return,E)}}break;case 6:if(Le(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(E){Q(e,e.return,E)}}break;case 3:if(Le(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(E){Q(e,e.return,E)}break;case 4:Le(t,e),$e(e);break;case 13:Le(t,e),$e(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(zi=Y())),r&4&&$s(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(d=ie)||g,Le(t,e),ie=d):Le(t,e),$e(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(z=e,g=e.child;g!==null;){for(m=z=g;z!==null;){switch(h=z,S=h.child,h.tag){case 0:case 11:case 14:case 15:Tn(4,h,h.return);break;case 1:Yt(h,h.return);var N=h.stateNode;if(typeof N.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(E){Q(r,n,E)}}break;case 5:Yt(h,h.return);break;case 22:if(h.memoizedState!==null){Hs(m);continue}}S!==null?(S.return=h,z=S):Hs(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{l=m.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,u=m.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ya("display",i))}catch(E){Q(e,e.return,E)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(E){Q(e,e.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Le(t,e),$e(e),r&4&&$s(e);break;case 21:break;default:Le(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bu(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(On(l,""),r.flags&=-33);var o=Us(e);Fo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Us(e);Io(e,s,i);break;default:throw Error(x(161))}}catch(u){Q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e,t,n){z=e,Ku(e)}function Ku(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var l=z,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||yr;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||ie;s=yr;var d=ie;if(yr=i,(ie=u)&&!d)for(z=l;z!==null;)i=z,u=i.child,i.tag===22&&i.memoizedState!==null?Vs(l):u!==null?(u.return=i,z=u):Vs(l);for(;o!==null;)z=o,Ku(o),o=o.sibling;z=l,yr=s,ie=d}As(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,z=o):As(e)}}function As(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ns(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ns(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&$n(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ie||t.flags&512&&Oo(t)}catch(h){Q(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Hs(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Vs(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(u){Q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Q(t,l,u)}}var o=t.return;try{Oo(t)}catch(u){Q(t,o,u)}break;case 5:var i=t.return;try{Oo(t)}catch(u){Q(t,i,u)}}}catch(u){Q(t,t.return,u)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var kp=Math.ceil,Jr=qe.ReactCurrentDispatcher,Ei=qe.ReactCurrentOwner,ze=qe.ReactCurrentBatchConfig,D=0,ee=null,X=null,ne=0,ye=0,Xt=yt(0),Z=0,Gn=null,Mt=0,fl=0,Ci=0,Mn=null,pe=null,zi=0,un=1/0,Be=null,qr=!1,Uo=null,pt=null,xr=!1,it=null,el=0,Dn=0,$o=null,Lr=-1,Tr=0;function ue(){return D&6?Y():Lr!==-1?Lr:Lr=Y()}function ft(e){return e.mode&1?D&2&&ne!==0?ne&-ne:rp.transition!==null?(Tr===0&&(Tr=Ta()),Tr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Ua(e.type)),e):1}function Oe(e,t,n,r){if(50<Dn)throw Dn=0,$o=null,Error(x(185));Jn(e,n,r),(!(D&2)||e!==ee)&&(e===ee&&(!(D&2)&&(fl|=n),Z===4&&lt(e,ne)),ge(e,r),n===1&&D===0&&!(t.mode&1)&&(un=Y()+500,ul&&xt()))}function ge(e,t){var n=e.callbackNode;rd(e,t);var r=Fr(e,e===ee?ne:0);if(r===0)n!==null&&Zi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zi(n),t===1)e.tag===0?np(Ws.bind(null,e)):ru(Ws.bind(null,e)),Jd(function(){!(D&6)&&xt()}),n=null;else{switch(Ma(r)){case 1:n=qo;break;case 4:n=Pa;break;case 16:n=Ir;break;case 536870912:n=La;break;default:n=Ir}n=tc(n,Yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yu(e,t){if(Lr=-1,Tr=0,D&6)throw Error(x(327));var n=e.callbackNode;if(tn()&&e.callbackNode!==n)return null;var r=Fr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=tl(e,r);else{t=r;var l=D;D|=2;var o=Gu();(ee!==e||ne!==t)&&(Be=null,un=Y()+500,zt(e,t));do try{jp();break}catch(s){Xu(e,s)}while(1);pi(),Jr.current=o,D=l,X!==null?t=0:(ee=null,ne=0,t=Z)}if(t!==0){if(t===2&&(l=po(e),l!==0&&(r=l,t=Ao(e,l))),t===1)throw n=Gn,zt(e,0),lt(e,r),ge(e,Y()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!wp(l)&&(t=tl(e,r),t===2&&(o=po(e),o!==0&&(r=o,t=Ao(e,o))),t===1))throw n=Gn,zt(e,0),lt(e,r),ge(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:jt(e,pe,Be);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=zi+500-Y(),10<t)){if(Fr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ko(jt.bind(null,e,pe,Be),t);break}jt(e,pe,Be);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Re(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kp(r/1960))-r,10<r){e.timeoutHandle=ko(jt.bind(null,e,pe,Be),r);break}jt(e,pe,Be);break;case 5:jt(e,pe,Be);break;default:throw Error(x(329))}}}return ge(e,Y()),e.callbackNode===n?Yu.bind(null,e):null}function Ao(e,t){var n=Mn;return e.current.memoizedState.isDehydrated&&(zt(e,t).flags|=256),e=tl(e,t),e!==2&&(t=pe,pe=n,t!==null&&Ho(t)),e}function Ho(e){pe===null?pe=e:pe.push.apply(pe,e)}function wp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ie(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~Ci,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function Ws(e){if(D&6)throw Error(x(327));tn();var t=Fr(e,0);if(!(t&1))return ge(e,Y()),null;var n=tl(e,t);if(e.tag!==0&&n===2){var r=po(e);r!==0&&(t=r,n=Ao(e,r))}if(n===1)throw n=Gn,zt(e,0),lt(e,t),ge(e,Y()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,pe,Be),ge(e,Y()),null}function _i(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(un=Y()+500,ul&&xt())}}function Dt(e){it!==null&&it.tag===0&&!(D&6)&&tn();var t=D;D|=1;var n=ze.transition,r=I;try{if(ze.transition=null,I=1,e)return e()}finally{I=r,ze.transition=n,D=t,!(D&6)&&xt()}}function Pi(){ye=Xt.current,A(Xt)}function zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zd(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(ui(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:sn(),A(me),A(se),yi();break;case 5:vi(r);break;case 4:sn();break;case 13:A(V);break;case 19:A(V);break;case 10:fi(r.type._context);break;case 22:case 23:Pi()}n=n.return}if(ee=e,X=e=mt(e.current,null),ne=ye=t,Z=0,Gn=null,Ci=fl=Mt=0,pe=Mn=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Et=null}return e}function Xu(e,t){do{var n=X;try{if(pi(),zr.current=Zr,Gr){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(Tt=0,q=G=W=null,Ln=!1,Kn=0,Ei.current=null,n===null||n.return===null){Z=1,Gn=t,X=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=ne,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var S=Ls(i);if(S!==null){S.flags&=-257,Ts(S,i,s,o,t),S.mode&1&&Ps(o,d,t),t=S,u=d;var N=t.updateQueue;if(N===null){var E=new Set;E.add(u),t.updateQueue=E}else N.add(u);break e}else{if(!(t&1)){Ps(o,d,t),Li();break e}u=Error(x(426))}}else if(H&&s.mode&1){var F=Ls(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ts(F,i,s,o,t),ci(an(u,s));break e}}o=u=an(u,s),Z!==4&&(Z=2),Mn===null?Mn=[o]:Mn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Mu(o,u,t);js(o,p);break e;case 1:s=u;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pt===null||!pt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Du(o,s,t);js(o,y);break e}}o=o.return}while(o!==null)}Ju(n)}catch(v){t=v,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Gu(){var e=Jr.current;return Jr.current=Zr,e===null?Zr:e}function Li(){(Z===0||Z===3||Z===2)&&(Z=4),ee===null||!(Mt&268435455)&&!(fl&268435455)||lt(ee,ne)}function tl(e,t){var n=D;D|=2;var r=Gu();(ee!==e||ne!==t)&&(Be=null,zt(e,t));do try{Sp();break}catch(l){Xu(e,l)}while(1);if(pi(),D=n,Jr.current=r,X!==null)throw Error(x(261));return ee=null,ne=0,Z}function Sp(){for(;X!==null;)Zu(X)}function jp(){for(;X!==null&&!Yc();)Zu(X)}function Zu(e){var t=ec(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Ju(e):X=t,Ei.current=null}function Ju(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(n=hp(n,t,ye),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Z===0&&(Z=5)}function jt(e,t,n){var r=I,l=ze.transition;try{ze.transition=null,I=1,Np(e,t,n,r)}finally{ze.transition=l,I=r}return null}function Np(e,t,n,r){do tn();while(it!==null);if(D&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ld(e,o),e===ee&&(X=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xr||(xr=!0,tc(Ir,function(){return tn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ze.transition,ze.transition=null;var i=I;I=1;var s=D;D|=4,Ei.current=null,yp(e,n),Qu(n,e),Bd(yo),Ur=!!vo,yo=vo=null,e.current=n,xp(n),Xc(),D=s,I=i,ze.transition=o}else e.current=n;if(xr&&(xr=!1,it=e,el=l),o=e.pendingLanes,o===0&&(pt=null),Jc(n.stateNode),ge(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(qr)throw qr=!1,e=Uo,Uo=null,e;return el&1&&e.tag!==0&&tn(),o=e.pendingLanes,o&1?e===$o?Dn++:(Dn=0,$o=e):Dn=0,xt(),null}function tn(){if(it!==null){var e=Ma(el),t=ze.transition,n=I;try{if(ze.transition=null,I=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,el=0,D&6)throw Error(x(331));var l=D;for(D|=4,z=e.current;z!==null;){var o=z,i=o.child;if(z.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(z=d;z!==null;){var g=z;switch(g.tag){case 0:case 11:case 15:Tn(8,g,o)}var m=g.child;if(m!==null)m.return=g,z=m;else for(;z!==null;){g=z;var h=g.sibling,S=g.return;if(Wu(g),g===d){z=null;break}if(h!==null){h.return=S,z=h;break}z=S}}}var N=o.alternate;if(N!==null){var E=N.child;if(E!==null){N.child=null;do{var F=E.sibling;E.sibling=null,E=F}while(E!==null)}}z=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,z=i;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,z=p;break e}z=o.return}}var c=e.current;for(z=c;z!==null;){i=z;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,z=f;else e:for(i=c;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pl(9,s)}}catch(v){Q(s,s.return,v)}if(s===i){z=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,z=y;break e}z=s.return}}if(D=l,xt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(ll,e)}catch{}r=!0}return r}finally{I=n,ze.transition=t}}return!1}function Bs(e,t,n){t=an(n,t),t=Mu(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(Jn(e,1,t),ge(e,t))}function Q(e,t,n){if(e.tag===3)Bs(e,e,n);else for(;t!==null;){if(t.tag===3){Bs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=an(n,e),e=Du(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(Jn(t,1,e),ge(t,e));break}}t=t.return}}function Ep(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Z===4||Z===3&&(ne&130023424)===ne&&500>Y()-zi?zt(e,0):Ci|=n),ge(e,t)}function qu(e,t){t===0&&(e.mode&1?(t=ur,ur<<=1,!(ur&130023424)&&(ur=4194304)):t=1);var n=ue();e=Ze(e,t),e!==null&&(Jn(e,t,n),ge(e,n))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function zp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),qu(e,n)}var ec;ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,mp(e,t,n);fe=!!(e.flags&131072)}else fe=!1,H&&t.flags&1048576&&lu(t,br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var l=rn(t,se.current);en(t,n),l=ki(null,t,r,e,l,n);var o=wi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(o=!0,Wr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,hi(t),l.updater=dl,t.stateNode=l,l._reactInternals=t,zo(t,r,e,n),t=Lo(null,t,r,!0,o,n)):(t.tag=0,H&&o&&ai(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Pp(r),e=Te(r,e),l){case 0:t=Po(null,t,r,e,n);break e;case 1:t=Rs(null,t,r,e,n);break e;case 11:t=Ms(null,t,r,e,n);break e;case 14:t=Ds(null,t,r,Te(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Po(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Rs(e,t,r,l,n);case 3:e:{if(Fu(t),e===null)throw Error(x(387));r=t.pendingProps,o=t.memoizedState,l=o.element,cu(e,t),Yr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=an(Error(x(423)),t),t=Os(e,t,r,n,l);break e}else if(r!==l){l=an(Error(x(424)),t),t=Os(e,t,r,n,l);break e}else for(xe=ct(t.stateNode.containerInfo.firstChild),ke=t,H=!0,De=null,n=au(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ln(),r===l){t=Je(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return du(t),e===null&&No(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,xo(r,l)?i=null:o!==null&&xo(r,o)&&(t.flags|=32),Iu(e,t),ae(e,t,i,n),t.child;case 6:return e===null&&No(t),null;case 13:return Uu(e,t,n);case 4:return gi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=on(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Ms(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,U(Qr,r._currentValue),r._currentValue=i,o!==null)if(Ie(o.value,i)){if(o.children===l.children&&!me.current){t=Je(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ye(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Eo(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(x(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Eo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,en(t,n),l=_e(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Te(r,t.pendingProps),l=Te(r.type,l),Ds(e,t,r,l,n);case 15:return Ru(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Pr(e,t),t.tag=1,he(r)?(e=!0,Wr(t)):e=!1,en(t,n),Tu(t,r,l),zo(t,r,l,n),Lo(null,t,r,!0,e,n);case 19:return $u(e,t,n);case 22:return Ou(e,t,n)}throw Error(x(156,t.tag))};function tc(e,t){return _a(e,t)}function _p(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new _p(e,t,n,r)}function Ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pp(e){if(typeof e=="function")return Ti(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Go)return 11;if(e===Zo)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ti(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case $t:return _t(n.children,l,o,t);case Xo:i=8,l|=8;break;case Gl:return e=Ce(12,n,t,l|2),e.elementType=Gl,e.lanes=o,e;case Zl:return e=Ce(13,n,t,l),e.elementType=Zl,e.lanes=o,e;case Jl:return e=Ce(19,n,t,l),e.elementType=Jl,e.lanes=o,e;case da:return ml(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ua:i=10;break e;case ca:i=9;break e;case Go:i=11;break e;case Zo:i=14;break e;case tt:i=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ce(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function _t(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=da,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Kl(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Mi(e,t,n,r,l,o,i,s,u){return e=new Lp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ce(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hi(o),e}function Tp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nc(e){if(!e)return gt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(he(n))return nu(e,n,t)}return t}function rc(e,t,n,r,l,o,i,s,u){return e=Mi(n,r,!0,e,l,o,i,s,u),e.context=nc(null),n=e.current,r=ue(),l=ft(n),o=Ye(r,l),o.callback=t??null,dt(n,o,l),e.current.lanes=l,Jn(e,l,r),ge(e,r),e}function hl(e,t,n,r){var l=t.current,o=ue(),i=ft(l);return n=nc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(l,t,i),e!==null&&(Oe(e,l,i,o),Cr(e,l,i)),i}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Di(e,t){bs(e,t),(e=e.alternate)&&bs(e,t)}function Mp(){return null}var lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ri(e){this._internalRoot=e}gl.prototype.render=Ri.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));hl(e,t,null,null)};gl.prototype.unmount=Ri.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){hl(null,e,null,null)}),t[Ge]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&Fa(e)}};function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qs(){}function Dp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=nl(i);o.call(d)}}var i=rc(t,r,e,0,null,!1,!1,"",Qs);return e._reactRootContainer=i,e[Ge]=i.current,Vn(e.nodeType===8?e.parentNode:e),Dt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=nl(u);s.call(d)}}var u=Mi(e,0,!1,null,null,!1,!1,"",Qs);return e._reactRootContainer=u,e[Ge]=u.current,Vn(e.nodeType===8?e.parentNode:e),Dt(function(){hl(t,u,n,r)}),u}function yl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=nl(i);s.call(u)}}hl(t,i,e,l)}else i=Dp(n,t,e,l,r);return nl(i)}Da=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(ei(t,n|1),ge(t,Y()),!(D&6)&&(un=Y()+500,xt()))}break;case 13:Dt(function(){var r=Ze(e,1);if(r!==null){var l=ue();Oe(r,e,1,l)}}),Di(e,1)}};ti=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=ue();Oe(t,e,134217728,n)}Di(e,134217728)}};Ra=function(e){if(e.tag===13){var t=ft(e),n=Ze(e,t);if(n!==null){var r=ue();Oe(n,e,t,r)}Di(e,t)}};Oa=function(){return I};Ia=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};ao=function(e,t,n){switch(t){case"input":if(to(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=al(r);if(!l)throw Error(x(90));fa(r),to(r,l)}}}break;case"textarea":ha(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}};Sa=_i;ja=Dt;var Rp={usingClientEntryPoint:!1,Events:[er,Wt,al,ka,wa,_i]},kn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Op={bundleType:kn.bundleType,version:kn.version,rendererPackageName:kn.rendererPackageName,rendererConfig:kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ca(e),e===null?null:e.stateNode},findFiberByHostInstance:kn.findFiberByHostInstance||Mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{ll=kr.inject(Op),Ve=kr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oi(t))throw Error(x(200));return Tp(e,t,null,n)};Se.createRoot=function(e,t){if(!Oi(e))throw Error(x(299));var n=!1,r="",l=lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Mi(e,1,!1,null,null,n,!1,r,l),e[Ge]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Ri(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Ca(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Dt(e)};Se.hydrate=function(e,t,n){if(!vl(t))throw Error(x(200));return yl(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Oi(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=lc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=rc(t,null,e,1,n??null,l,!1,o,i),e[Ge]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new gl(t)};Se.render=function(e,t,n){if(!vl(t))throw Error(x(200));return yl(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!vl(e))throw Error(x(40));return e._reactRootContainer?(Dt(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};Se.unstable_batchedUpdates=_i;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vl(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return yl(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)}catch(e){console.error(e)}}oc(),oa.exports=Se;var Ip=oa.exports,Ks=Ip;Yl.createRoot=Ks.createRoot,Yl.hydrateRoot=Ks.hydrateRoot;var Fp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Up=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$p=(e,t)=>{const n=R.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:i,children:s,...u},d)=>R.createElement("svg",{ref:d,...Fp,width:l,height:l,stroke:r,strokeWidth:i?Number(o)*24/Number(l):o,className:`lucide lucide-${Up(e)}`,...u},[...t.map(([g,m])=>R.createElement(g,m)),...(Array.isArray(s)?s:[s])||[]]));return n.displayName=`${e}`,n};var O=$p;const Ap=O("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Hp=O("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),Ii=O("CheckCircle2",[["path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",key:"14v8dr"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Fi=O("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Vp=O("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),Wp=O("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]),Bp=O("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),bp=O("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]),Qp=O("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),Kp=O("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),Yp=O("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),Xp=O("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),Gp=O("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Zp=O("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]),Jp=O("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),qp=O("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),ef=O("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]),tf=O("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),nf=O("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),rf=O("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]),lf=O("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),of=O("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),sf=O("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),af=O("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),ic=O("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),uf=O("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),cf=O("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),df=O("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),pf=O("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),ff=O("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),mf=({activeTab:e,setActiveTab:t,onLogout:n})=>{const r=[{id:"dashboard",label:"Dashboard",icon:Yp},{id:"events",label:"Eventos",icon:Hp},{id:"employees",label:"Funcionários",icon:pf},{id:"history",label:"Histórico",icon:bp},{id:"settings",label:"Configurações",icon:af}];return a.jsxs("aside",{className:"sidebar",children:[a.jsxs("div",{className:"logo-container",children:[a.jsx("div",{className:"logo-icon",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("path",{d:"M4 4L12 12L4 20",stroke:"#F5A800",strokeWidth:"3",strokeLinecap:"round"}),a.jsx("path",{d:"M12 4L20 12L12 20",stroke:"#F5A800",strokeWidth:"3",strokeLinecap:"round",opacity:"0.6"})]})}),a.jsxs("div",{className:"logo-text-group",children:[a.jsx("h1",{className:"logo-text",children:"DECOM"}),a.jsx("span",{className:"logo-subtext",children:"Controle de Tarefas"})]})]}),a.jsx("nav",{className:"sidebar-nav",children:r.map(l=>a.jsxs("button",{className:`nav-item ${e===l.id?"active":""}`,onClick:()=>t(l.id),children:[a.jsx(l.icon,{size:18}),a.jsx("span",{children:l.label}),e===l.id&&a.jsx("div",{className:"active-indicator"})]},l.id))}),a.jsxs("div",{className:"sidebar-footer",children:[a.jsx("div",{className:"sidebar-divider"}),a.jsxs("button",{className:"btn-add-quick",onClick:()=>t("add-event"),children:[a.jsx(rf,{size:18}),a.jsx("span",{children:"Novo Evento"})]}),a.jsx("div",{className:"logout-section",children:a.jsxs("button",{className:"btn-logout-prominent",onClick:()=>{console.log("Logout clicked"),n&&n()},children:[a.jsx(Jp,{size:18}),a.jsx("span",{children:"Sair do Sistema"})]})})]}),a.jsx("style",{jsx:!0,children:`
        .sidebar {
          width: var(--sidebar-width);
          height: 100vh;
          background-color: var(--bg-deep);
          position: fixed;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          padding: 24px 0;
          border-right: 1px solid var(--bg-light);
          z-index: 100;
        }

        .logo-container {
          padding: 0 24px;
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
        }

        .logo-text {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin: 0;
          line-height: 1;
        }

        .logo-subtext {
          font-size: 10px;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-top: 4px;
          border-top: 1px solid var(--primary);
          padding-top: 2px;
        }

        .sidebar-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nav-item {
          width: 100%;
          padding: 12px 24px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-muted);
          cursor: pointer;
          position: relative;
          transition: all 0.2s ease;
          font-family: var(--font-body);
          font-size: 14px;
        }

        .nav-item:hover {
          color: var(--primary);
          background: rgba(26, 74, 128, 0.2);
        }

        .nav-item.active {
          color: var(--primary);
          background: rgba(26, 74, 128, 0.4);
        }

        .active-indicator {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background-color: var(--primary);
          border-radius: 0 4px 4px 0;
        }

        .sidebar-footer {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background-color: var(--bg-deep);
        }

        .sidebar-divider {
          height: 1px;
          background: var(--bg-light);
          margin: 0 -16px;
          opacity: 0.5;
        }

        .logout-section {
          padding-top: 8px;
        }

        .btn-logout-prominent {
          width: 100%;
          background: rgba(232, 64, 74, 0.15);
          color: white;
          border: 1px solid var(--danger-soft);
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--font-body);
        }

        .btn-logout-prominent:hover {
          background: var(--danger-soft);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(232, 64, 74, 0.3);
        }

        .btn-add-quick {
          width: 100%;
          background-color: var(--primary);
          color: var(--bg-deep);
          border: none;
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-add-quick:hover {
          background-color: var(--primary-soft);
          transform: translateY(-2px);
        }
      `})]})},hf=({title:e,motorActive:t,nextUpdate:n})=>{const[r,l]=R.useState(new Date);return R.useEffect(()=>{const o=setInterval(()=>l(new Date),1e3);return()=>clearInterval(o)},[]),a.jsxs("header",{className:"main-header",children:[a.jsx("div",{className:"header-left",children:a.jsx("h2",{className:"section-title",children:e})}),a.jsxs("div",{className:"header-right",children:[a.jsxs("div",{className:"motor-indicator",children:[a.jsx("div",{className:`status-dot ${t?"active animate-pulse-custom":""}`}),a.jsxs("div",{className:"motor-info",children:[a.jsx("span",{className:"motor-label",children:t?"Motor Ativo":"Motor Pausado"}),a.jsxs("span",{className:"motor-timer",children:["Próxima verificação em: ",n,"s"]})]})]}),a.jsx("div",{className:"vertical-divider"}),a.jsxs("div",{className:"time-display",children:[a.jsx(Fi,{size:16,className:"text-muted"}),a.jsx("span",{children:r.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"})})]})]}),a.jsx("style",{jsx:!0,children:`
        .main-header {
          height: var(--header-height);
          background-color: var(--bg-deep);
          border-bottom: 1px solid var(--bg-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          position: sticky;
          top: 0;
          z-index: 90;
        }

        .section-title {
          font-size: 18px;
          color: var(--primary);
          margin: 0;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .motor-indicator {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--text-muted);
        }

        .status-dot.active {
          background-color: var(--primary);
          box-shadow: 0 0 8px var(--primary);
        }

        .motor-info {
          display: flex;
          flex-direction: column;
        }

        .motor-label {
          font-size: 12px;
          font-weight: 700;
          color: white;
          line-height: 1;
        }

        .motor-timer {
          font-size: 10px;
          color: var(--text-muted);
        }

        .vertical-divider {
          width: 1px;
          height: 24px;
          background-color: var(--bg-light);
        }

        .time-display {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-variant-numeric: tabular-nums;
          font-size: 14px;
        }
      `})]})},sc=R.createContext(),ve="/api",It=()=>R.useContext(sc),gf=({children:e})=>{const[t,n]=R.useState([]),[r,l]=R.useState([]),[o,i]=R.useState([]),[s,u]=R.useState({productionUrl:"",testUrl:"",defaultMode:"production"}),[d,g]=R.useState(60),[m,h]=R.useState(!0);R.useEffect(()=>{(async()=>{try{const[k,w,j,L]=await Promise.all([fetch(`${ve}/events`),fetch(`${ve}/history`),fetch(`${ve}/employees`),fetch(`${ve}/settings/webhook_settings`)]);k.ok&&n(await k.json()),w.ok&&l(await w.json()),j.ok&&i(await j.json()),L.ok&&u(await L.json())}catch(k){console.error("Error fetching data from API:",k)}})()},[]);const S=async v=>{const k={...v,status:"Agendado",triggers:f(v.startDate,v.eventTime,v.options)};try{const w=await fetch(`${ve}/events`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)});if(w.ok){const j=await w.json();n(L=>[...L,j])}}catch(w){console.error("Error adding event:",w)}},N=async v=>{try{const k=await fetch(`${ve}/employees`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...v,id:void 0})});if(k.ok){const w=await k.json();i(j=>[...j,w])}}catch(k){console.error("Error adding employee:",k)}},E=async v=>{try{const k=await fetch(`${ve}/employees/${v}`,{method:"DELETE"});if(k.ok)i(w=>w.filter(j=>j.id!==v));else{const w=await k.json();alert(w.error||"Erro ao excluir funcionário")}}catch(k){console.error("Error deleting employee:",k),alert("Erro de conexão com o servidor")}},F=async v=>{try{(await fetch(`${ve}/events/${v}`,{method:"DELETE"})).ok&&n(w=>w.filter(j=>j.id!==v))}catch(k){console.error("Error deleting event:",k)}},p=async(v,k)=>{const j={...t.find(L=>L.id===v),...k};(k.startDate||k.eventTime||k.options)&&(j.triggers=f(j.startDate,j.eventTime,j.options),j.status="Agendado");try{const L=await fetch(`${ve}/events/${v}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)});if(L.ok){const C=await L.json();n(b=>b.map(Fe=>Fe.id===v?C:Fe))}}catch(L){console.error("Error updating event:",L)}},c=async v=>{try{(await fetch(`${ve}/settings/webhook_settings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)})).ok&&u(v)}catch(k){console.error("Error updating settings:",k)}},f=(v,k,w)=>{const j=new Date(`${v}T${k}`);return w.map(L=>{let C=new Date(j);switch(L){case"7d":C.setDate(C.getDate()-7);break;case"3d":C.setDate(C.getDate()-3);break;case"2d":C.setDate(C.getDate()-2);break;case"1d":C.setDate(C.getDate()-1);break;case"12h":C.setHours(C.getHours()-12);break;case"6h":C.setHours(C.getHours()-6);break;case"2h":C.setHours(C.getHours()-2);break;case"1h":C.setHours(C.getHours()-1);break;case"30m":C.setMinutes(C.getMinutes()-30);break;case"15m":C.setMinutes(C.getMinutes()-15);break;case"5m":C.setMinutes(C.getMinutes()-5);break;case"exact":break;default:if(L.startsWith("custom_")){const b=parseInt(L.split("_")[1]);C.setMinutes(C.getMinutes()-b)}}return{type:L,time:C.toISOString(),fired:!1}})},y=async(v,k)=>{const w=o.find(C=>C.id===v.employeeId);let j=v.webhookUrl;if(v.webhookMode==="production"?j=s.productionUrl:v.webhookMode==="test"&&(j=s.testUrl),!j)return console.error("No valid webhook URL found for event:",v.projectName),!1;const L={evento:v.projectName,data:v.startDate,hora:v.eventTime,local:v.location,observacao:v.observation,responsavel:v.responsible,funcionario_nome:w?w.name:"Não informado",funcionario_telefone:w?w.phone:"Não informado",tipo_disparo:k.type,timestamp_disparo:new Date().toISOString(),sistema:"DECOM - Controle de Tarefas"};try{const b=await(await fetch(`${ve}/webhooks/fire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({targetUrl:j,payload:L})})).json(),Fe={event_id:v.id,event_name:v.projectName,time:new Date().toISOString(),status:b.ok?"Sucesso":`Erro ${b.status||"Server"}`,response:b.ok?"Webhook disparado (via Server)":`Falha no disparo: ${b.statusText||b.error}`,type:k.type,recipient:j};try{await fetch(`${ve}/history`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Fe)});const Ue=await fetch(`${ve}/history`);Ue.ok&&l(await Ue.json())}catch(Ue){console.error("Error saving history:",Ue)}return b.ok}catch(C){return console.error("Webhook firing error:",C),!1}};return R.useCallback(async()=>{},[]),R.useEffect(()=>{h(!1)},[]),a.jsx(sc.Provider,{value:{events:t,history:r,employees:o,webhookSettings:s,addEvent:S,deleteEvent:F,updateEvent:p,addEmployee:N,deleteEmployee:E,updateWebhookSettings:c,motorActive:m,setMotorActive:h,nextUpdate:d,fireWebhook:y},children:e})},vf=({onAddClick:e})=>{const{events:t,history:n}=It(),r=[{label:"Total de Eventos",value:t.length,icon:Kp,color:"var(--primary)",trend:"Ativos no sistema"},{label:"Agendados",value:t.filter(o=>o.status==="Agendado").length,icon:Fi,color:"var(--primary)",trend:"Aguardando disparo"},{label:"Disparados Hoje",value:n.filter(o=>{const i=new Date(o.timestamp).toDateString(),s=new Date().toDateString();return i===s&&o.success}).length,icon:Ii,color:"var(--success)",trend:"Sucesso"},{label:"Erros Recentes",value:n.filter(o=>!o.success).length,icon:Ap,color:"var(--danger-soft)",trend:"Falhas registradas",urgent:!0}],l=n.slice(0,5);return a.jsxs("div",{className:"dashboard-container fade-in",children:[a.jsx("div",{className:"stats-grid",children:r.map((o,i)=>a.jsxs("div",{className:`stat-card ${o.urgent?"stat-urgent":""}`,style:{animationDelay:`${i*.1}s`},children:[a.jsxs("div",{className:"stat-header",children:[a.jsx("span",{className:"stat-label",children:o.label}),a.jsx(o.icon,{size:24,style:{color:o.color}})]}),a.jsx("div",{className:"stat-value",children:o.value}),a.jsxs("div",{className:"stat-footer",children:[a.jsx(uf,{size:12}),a.jsx("span",{children:o.trend})]})]},i))}),a.jsxs("div",{className:"dashboard-grid",children:[a.jsxs("div",{className:"dashboard-main",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h3",{className:"section-title",children:"Atividade Recente"}),a.jsx("button",{className:"btn-text",children:"Ver tudo"})]}),a.jsx("div",{className:"history-mini-list",children:l.length===0?a.jsx("div",{className:"empty-mini",children:"Nenhuma atividade recente registrada"}):l.map(o=>a.jsxs("div",{className:`history-card-mini ${o.success?"card-success":"card-error"}`,children:[a.jsxs("div",{className:"card-mini-header",children:[a.jsxs("div",{className:"card-mini-title-row",children:[a.jsx("span",{className:"card-mini-event",children:o.eventName}),a.jsx("span",{className:"card-mini-time",children:new Date(o.timestamp).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})})]}),a.jsx("div",{className:"card-mini-date",children:new Date(o.timestamp).toLocaleDateString("pt-BR")})]}),a.jsxs("div",{className:"card-mini-body",children:[a.jsxs("div",{className:"card-mini-line",children:[a.jsx("span",{className:"mini-label",children:"Para:"}),a.jsx("span",{className:"mini-value truncate",children:o.recipient||"URL não registrada"})]}),a.jsxs("div",{className:"card-mini-line",children:[a.jsx("span",{className:"mini-label",children:"Conteúdo:"}),a.jsxs("span",{className:"mini-value italic",children:['"',o.response,'"']})]})]}),a.jsxs("div",{className:"card-mini-footer",children:[a.jsx("span",{className:`mini-status-text ${o.success?"text-success":"text-danger"}`,children:o.success?"✓ Enviado com sucesso":"✕ Falha no envio"}),a.jsx("span",{className:"mini-trigger-type",children:o.triggerType})]})]},o.id))})]}),a.jsx("div",{className:"dashboard-side",children:a.jsxs("div",{className:"promo-card",children:[a.jsx("h4",{children:"Atalhos Rápidos"}),a.jsx("div",{className:"quick-actions-grid",children:a.jsxs("button",{className:"action-tile",onClick:e,children:[a.jsx(PlusCircle,{size:20}),a.jsx("span",{children:"Novo Evento"})]})})]})})]}),a.jsx("style",{jsx:!0,children:`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stat-card {
          background-color: var(--bg-medium);
          border: 1px solid var(--bg-light);
          padding: 24px;
          border-radius: 8px;
          animation: fadeIn 0.4s ease-out forwards;
          opacity: 0;
        }

        /* ... (stat classes maintained) */

        .history-mini-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .history-card-mini {
          background-color: var(--bg-medium);
          border-radius: 10px;
          padding: 16px;
          border-left: 4px solid transparent;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .history-card-mini:hover {
          transform: translateX(4px);
        }

        .card-success {
          border-left-color: var(--success);
          box-shadow: 0 4px 12px rgba(29, 184, 119, 0.05);
        }

        .card-success:hover {
          box-shadow: 0 4px 15px rgba(29, 184, 119, 0.15);
        }

        .card-error {
          border-left-color: var(--danger-soft);
          box-shadow: 0 4px 12px rgba(232, 64, 74, 0.05);
        }

        .card-error:hover {
          box-shadow: 0 4px 15px rgba(232, 64, 74, 0.15);
        }

        .card-mini-header {
          display: flex;
          flex-direction: column;
        }

        .card-mini-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-mini-event {
          font-weight: 700;
          color: white;
          font-size: 15px;
        }

        .card-mini-time {
          font-size: 12px;
          color: var(--primary);
          font-weight: 600;
        }

        .card-mini-date {
          font-size: 10px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-mini-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 8px;
          background-color: var(--bg-deep);
          border-radius: 6px;
        }

        .card-mini-line {
          display: flex;
          gap: 8px;
          font-size: 12px;
          align-items: baseline;
        }

        .mini-label {
          color: var(--text-muted);
          min-width: 65px;
          font-size: 11px;
          text-transform: uppercase;
        }

        .mini-value {
          color: white;
          flex: 1;
        }

        .truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-mini-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 4px;
        }

        .mini-status-text {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .text-success { color: var(--success); }
        .text-danger { color: var(--danger-soft); }

        .mini-trigger-type {
          font-size: 10px;
          color: var(--text-muted);
          background-color: var(--bg-light);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .quick-actions-grid {
          margin-top: 16px;
        }

        .action-tile {
          width: 100%;
          background-color: var(--primary);
          color: var(--bg-deep);
          border: none;
          padding: 12px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.2s;
        }

        .action-tile:hover {
          background-color: var(--primary-soft);
          transform: translateY(-2px);
        }

        .empty-mini {
          padding: 40px;
          text-align: center;
          color: var(--text-muted);
          font-size: 13px;
        }
      `})]})},yf=({onEdit:e})=>{const{events:t,deleteEvent:n,fireWebhook:r}=It(),l=async s=>{const u={type:"Manual/Teste",time:new Date().toISOString(),fired:!0};await r(s,u),alert(`Disparo de teste enviado para: ${s.projectName}`)},o=s=>{switch(s){case"Agendado":return a.jsx("span",{className:"badge badge-scheduled",children:"Agendado"});case"Disparado":return a.jsx("span",{className:"badge badge-fired",children:"Disparado"});case"Erro":return a.jsx("span",{className:"badge badge-error",children:"Erro"});default:return a.jsx("span",{className:"badge badge-pending",children:"Pendente"})}},i=s=>{const u=s.find(g=>!g.fired);return u?new Date(u.time).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"Nenhum"};return a.jsxs("div",{className:"table-container fade-in",children:[a.jsxs("table",{className:"events-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Data/Hora"}),a.jsx("th",{children:"Evento"}),a.jsx("th",{children:"Local"}),a.jsx("th",{children:"Responsável"}),a.jsx("th",{children:"Próximo Disparo"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Ações"})]})}),a.jsx("tbody",{children:t.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:"7",className:"empty-state",children:"Nenhum evento agendado"})}):t.map(s=>a.jsxs("tr",{className:"event-row",children:[a.jsxs("td",{children:[a.jsx("div",{className:"cell-primary",children:s.startDate}),a.jsx("div",{className:"cell-secondary",children:s.eventTime})]}),a.jsxs("td",{children:[a.jsx("div",{className:"cell-primary",children:s.projectName}),a.jsxs("div",{className:"webhook-link",children:[a.jsx(Vp,{size:10}),a.jsx("span",{children:"Webhook configurado"})]})]}),a.jsx("td",{children:s.location}),a.jsx("td",{children:s.responsible}),a.jsx("td",{children:a.jsxs("div",{className:"upcoming-trigger",children:[a.jsx(Fi,{size:12,className:"text-primary"}),a.jsx("span",{children:i(s.triggers)})]})}),a.jsx("td",{children:o(s.status)}),a.jsxs("td",{className:"actions-cell",children:[a.jsx("button",{className:"btn-icon btn-test",title:"Disparo de Teste",onClick:()=>l(s),children:a.jsx(nf,{size:16})}),a.jsx("button",{className:"btn-icon btn-edit",title:"Editar",onClick:()=>e(s),children:a.jsx(ef,{size:16})}),a.jsx("button",{className:"btn-icon btn-delete",title:"Excluir",onClick:()=>n(s.id),children:a.jsx(ic,{size:16})})]})]},s.id))})]}),a.jsx("style",{jsx:!0,children:`
        .table-container {
          background-color: var(--bg-medium);
          border-radius: 8px;
          border: 1px solid var(--bg-light);
          overflow: hidden;
        }

        .events-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        th {
          background-color: var(--bg-deep);
          padding: 16px 24px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--primary);
          font-weight: 700;
        }

        td {
          padding: 16px 24px;
          border-bottom: 1px solid var(--bg-light);
          font-size: 14px;
          vertical-align: middle;
        }

        .event-row {
          background-color: var(--bg-medium);
          transition: background-color 0.15s;
        }

        .event-row:nth-child(even) {
          background-color: var(--bg-content);
        }

        .event-row:hover {
          background-color: var(--bg-light);
        }

        .cell-primary {
          font-weight: 500;
          color: white;
        }

        .cell-secondary {
          font-size: 12px;
          color: var(--text-muted);
        }

        .webhook-link {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          color: var(--primary);
          margin-top: 4px;
        }

        .badge {
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          border: 1px solid transparent;
        }

        .badge-scheduled {
          background-color: rgba(245, 168, 0, 0.15);
          color: var(--primary);
          border-color: var(--primary);
        }

        .badge-fired {
          background-color: rgba(29, 184, 119, 0.15);
          color: var(--success);
          border-color: var(--success);
        }

        .badge-error {
          background-color: rgba(232, 64, 74, 0.15);
          color: var(--danger-soft);
          border-color: var(--danger-soft);
        }

        .upcoming-trigger {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }

        .actions-cell {
          display: flex;
          gap: 8px;
        }

        .btn-icon {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 6px;
          border-radius: 4px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-edit:hover {
          color: var(--primary);
          background: rgba(245, 168, 0, 0.1);
        }

        .btn-test:hover {
          color: var(--success);
          background: rgba(29, 184, 119, 0.1);
        }

        .btn-delete:hover {
          color: var(--danger-soft);
          background: rgba(192, 32, 42, 0.1);
        }

        .empty-state {
          text-align: center;
          color: var(--text-muted);
          padding: 48px;
        }
      `})]})},xf=()=>{const{history:e,fireWebhook:t,events:n}=It(),r=async l=>{const o=n.find(i=>i.id===l.eventId);if(o){const i=o.triggers.find(s=>s.type===l.triggerType);i&&await t(o,i)}};return a.jsxs("div",{className:"history-container fade-in",children:[a.jsx("div",{className:"history-timeline",children:e.length===0?a.jsxs("div",{className:"empty-history",children:[a.jsx(Qp,{size:40,className:"text-muted"}),a.jsx("p",{children:"Nenhum disparo realizado ainda."})]}):e.map((l,o)=>a.jsxs("div",{className:"timeline-item",children:[a.jsxs("div",{className:"timeline-marker",children:[a.jsx("div",{className:`marker-dot ${l.success?"marker-success":"marker-error"}`,children:l.success?a.jsx(Ii,{size:14}):a.jsx(ff,{size:14})}),o!==e.length-1&&a.jsx("div",{className:"marker-line"})]}),a.jsxs("div",{className:"timeline-content card-rich",children:[a.jsxs("div",{className:`history-card-header ${l.success?"border-success":"border-error"}`,children:[a.jsxs("div",{className:"card-title-row",children:[a.jsx("h4",{className:"card-event-name",children:l.eventName}),a.jsxs("span",{className:`card-status-pill ${l.success?"pill-success":"pill-error"}`,children:["HTTP ",l.status]})]}),a.jsxs("div",{className:"card-meta-row",children:[a.jsxs("span",{className:"card-timestamp",children:[new Date(l.timestamp).toLocaleDateString("pt-BR")," às ",new Date(l.timestamp).toLocaleTimeString("pt-BR")]}),a.jsx("span",{className:"card-trigger-badge",children:l.triggerType})]})]}),a.jsxs("div",{className:"card-details-box",children:[a.jsxs("div",{className:"card-detail-line",children:[a.jsx("span",{className:"card-detail-label",children:"Destinatário:"}),a.jsx("span",{className:"card-detail-value",children:l.recipient||"URL não capturada"})]}),a.jsxs("div",{className:"card-detail-line",children:[a.jsx("span",{className:"card-detail-label",children:"Resposta/Conteúdo:"}),a.jsxs("span",{className:`card-detail-value italic ${l.success?"text-success":"text-danger"}`,children:['"',l.response,'"']})]})]}),!l.success&&a.jsx("div",{className:"card-actions",children:a.jsxs("button",{className:"btn-resend-rich",onClick:()=>r(l),children:[a.jsx(lf,{size:14}),"Tentar Novamente"]})})]})]},l.id))}),a.jsx("style",{jsx:!0,children:`
        .history-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .history-timeline {
          padding: 24px 0;
        }

        .timeline-item {
          display: flex;
          gap: 24px;
          margin-bottom: 32px;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 32px;
        }

        .marker-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          background-color: var(--bg-deep);
          border: 1px solid var(--bg-light);
        }

        .marker-success { color: var(--success); border-color: var(--success); }
        .marker-error { color: var(--danger-soft); border-color: var(--danger-soft); }

        .marker-line {
          width: 2px;
          flex: 1;
          background-color: var(--bg-light);
          min-height: 40px;
        }

        .timeline-content.card-rich {
          flex: 1;
          background-color: var(--bg-medium);
          border-radius: 12px;
          border: 1px solid var(--bg-light);
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .history-card-header {
          padding: 20px;
          border-bottom: 1px solid var(--bg-light);
        }

        .border-success { border-left: 6px solid var(--success); }
        .border-error { border-left: 6px solid var(--danger-soft); }

        .card-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .card-event-name {
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .card-status-pill {
          font-size: 10px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 20px;
          text-transform: uppercase;
        }

        .pill-success { background: rgba(29, 184, 119, 0.1); color: var(--success); }
        .pill-error { background: rgba(232, 64, 74, 0.1); color: var(--danger-soft); }

        .card-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-timestamp {
          font-size: 12px;
          color: var(--text-muted);
        }

        .card-trigger-badge {
          font-size: 11px;
          background: var(--bg-deep);
          color: var(--primary);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .card-details-box {
          padding: 20px;
          background: rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .card-detail-line {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .card-detail-label {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .card-detail-value {
          color: white;
          font-size: 14px;
          word-break: break-all;
        }

        .italic { font-style: italic; }
        .text-success { color: var(--success); }
        .text-danger { color: var(--danger-soft); }

        .card-actions {
          padding: 16px 20px;
          display: flex;
          justify-content: flex-end;
          background: var(--bg-deep);
        }

        .btn-resend-rich {
          background: var(--danger-soft);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .btn-resend-rich:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .empty-history {
          text-align: center;
          padding: 80px 0;
          color: var(--text-muted);
        }

        .empty-history p {
          margin-top: 16px;
        }
      `})]})},kf=({onComplete:e,initialData:t})=>{const{addEvent:n,updateEvent:r,employees:l,webhookSettings:o}=It(),[i,s]=R.useState(t||{projectName:"",startDate:"",eventTime:"",location:"",observation:"",responsible:"",employeeId:"",webhookMode:o.defaultMode||"production",webhookUrl:"",options:["exact"]}),u=[{id:"7d",label:"7 dias antes"},{id:"3d",label:"3 dias antes"},{id:"2d",label:"2 dias antes"},{id:"1d",label:"1 dia antes (24h)"},{id:"12h",label:"12 horas antes"},{id:"6h",label:"6 horas antes"},{id:"2h",label:"2 horas antes"},{id:"1h",label:"1 hora antes"},{id:"30m",label:"30 minutos antes"},{id:"15m",label:"15 minutos antes"},{id:"5m",label:"5 minutos antes"},{id:"exact",label:"No momento exato"}],d=m=>{s(h=>({...h,options:h.options.includes(m)?h.options.filter(S=>S!==m):[...h.options,m]}))},g=m=>{m.preventDefault(),t&&t.id?r(t.id,i):n(i),e&&e()};return a.jsxs("div",{className:"card fade-in",children:[a.jsxs("form",{onSubmit:g,className:"event-form",children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group full-width",children:[a.jsx("label",{children:"Nome do Projeto"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ex: Reunião de Pais",value:i.projectName,onChange:m=>s({...i,projectName:m.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Data de Início"}),a.jsx("input",{type:"date",required:!0,value:i.startDate,onChange:m=>s({...i,startDate:m.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Hora do Evento"}),a.jsx("input",{type:"time",required:!0,value:i.eventTime,onChange:m=>s({...i,eventTime:m.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Local"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ex: Auditório",value:i.location,onChange:m=>s({...i,location:m.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Funcionário DECOM (Responsável Externo)"}),a.jsxs("select",{required:!0,value:i.employeeId,onChange:m=>s({...i,employeeId:m.target.value}),children:[a.jsx("option",{value:"",children:"Selecione um funcionário..."}),l.map(m=>a.jsxs("option",{value:m.id,children:[m.name," (",m.phone,")"]},m.id))]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Responsável pelo Projeto (Escola)"}),a.jsx("input",{type:"text",required:!0,placeholder:"Nome do responsável",value:i.responsible,onChange:m=>s({...i,responsible:m.target.value})})]}),a.jsxs("div",{className:"form-group full-width border-top",children:[a.jsx("label",{className:"section-label-small",children:"Destino do Webhook"}),a.jsxs("div",{className:"webhook-selector-grid",children:[a.jsxs("label",{className:`webhook-option ${i.webhookMode==="production"?"active":""}`,children:[a.jsx("input",{type:"radio",name:"webhookMode",value:"production",checked:i.webhookMode==="production",onChange:()=>s({...i,webhookMode:"production"})}),a.jsxs("div",{className:"option-content",children:[a.jsx("span",{className:"option-title",children:"Produção"}),a.jsx("span",{className:"option-url",children:o.productionUrl||"Não configurada"})]})]}),a.jsxs("label",{className:`webhook-option ${i.webhookMode==="test"?"active":""}`,children:[a.jsx("input",{type:"radio",name:"webhookMode",value:"test",checked:i.webhookMode==="test",onChange:()=>s({...i,webhookMode:"test"})}),a.jsxs("div",{className:"option-content",children:[a.jsx("span",{className:"option-title",children:"Teste"}),a.jsx("span",{className:"option-url",children:o.testUrl||"Não configurada"})]})]}),a.jsxs("label",{className:`webhook-option ${i.webhookMode==="custom"?"active":""}`,children:[a.jsx("input",{type:"radio",name:"webhookMode",value:"custom",checked:i.webhookMode==="custom",onChange:()=>s({...i,webhookMode:"custom"})}),a.jsxs("div",{className:"option-content",children:[a.jsx("span",{className:"option-title",children:"Customizada"}),a.jsx("span",{className:"option-url",children:"Usar uma URL específica"})]})]})]}),i.webhookMode==="custom"&&a.jsx("div",{className:"custom-url-input fade-in",children:a.jsx("input",{type:"url",required:!0,placeholder:"https://sua-url-aqui.com/webhook",value:i.webhookUrl,onChange:m=>s({...i,webhookUrl:m.target.value})})})]}),a.jsxs("div",{className:"form-group full-width",children:[a.jsx("label",{children:"Observação"}),a.jsx("textarea",{rows:"3",placeholder:"Instruções adicionais...",value:i.observation,onChange:m=>s({...i,observation:m.target.value})})]})]}),a.jsxs("div",{className:"options-section",children:[a.jsx("label",{className:"section-label",children:"Opções de Disparo (Antecedência)"}),a.jsx("div",{className:"options-grid",children:u.map(m=>a.jsxs("label",{className:"checkbox-container",children:[a.jsx("input",{type:"checkbox",checked:i.options.includes(m.id),onChange:()=>d(m.id)}),a.jsx("span",{className:"checkmark"}),a.jsx("span",{className:"checkbox-label",children:m.label})]},m.id))})]}),a.jsx("div",{className:"form-actions",children:a.jsxs("button",{type:"submit",className:"btn-primary",children:[a.jsx(sf,{size:18}),t?"Salvar Alterações":"Agendar Evento"]})})]}),a.jsx("style",{jsx:!0,children:`
        .card {
          background-color: var(--bg-medium);
          border: 1px solid var(--bg-light);
          border-radius: 8px;
          padding: 32px;
          max-width: 800px;
          margin: 0 auto;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .full-width {
            grid-column: span 2;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(245, 168, 0, 0.2);
        }

        select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23F5A800' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          cursor: pointer;
        }

        input, textarea, select {
          background-color: var(--bg-deep);
          border: 1px solid var(--bg-light);
          color: white;
          padding: 12px 16px;
          border-radius: 6px;
          font-family: var(--font-body);
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .options-section {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--bg-light);
        }

        .section-label {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
          margin-bottom: 20px;
        }

        .section-label-small {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary-soft);
          margin-bottom: 12px;
        }

        .border-top {
            margin-top: 10px;
            padding-top: 20px;
            border-top: 1px solid var(--bg-light);
        }

        .webhook-selector-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 16px;
        }

        .webhook-option {
            background-color: var(--bg-deep);
            border: 1px solid var(--bg-light);
            border-radius: 6px;
            padding: 12px;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .webhook-option input {
            display: none;
        }

        .webhook-option:hover {
            border-color: var(--bg-lighter);
        }

        .webhook-option.active {
            border-color: var(--primary);
            background-color: rgba(245, 168, 0, 0.05);
        }

        .option-title {
            font-size: 12px;
            font-weight: 700;
            color: var(--primary);
            display: block;
        }

        .option-url {
            font-size: 10px;
            color: var(--text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
        }

        .custom-url-input {
            margin-top: 8px;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          font-size: 13px;
          color: white;
          transition: 0.2s;
        }

        .checkbox-container:hover {
            color: var(--primary-soft);
        }

        .checkmark {
          width: 18px;
          height: 18px;
          border: 1px solid var(--bg-light);
          border-radius: 4px;
          display: inline-block;
          position: relative;
          transition: all 0.2s;
        }

        input[type="checkbox"] {
          display: none;
        }

        input[type="checkbox"]:checked + .checkmark {
          background-color: var(--primary);
          border-color: var(--primary);
        }

        input[type="checkbox"]:checked + .checkmark:after {
          content: "";
          position: absolute;
          left: 6px;
          top: 2px;
          width: 4px;
          height: 8px;
          border: solid var(--bg-deep);
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .form-actions {
          margin-top: 32px;
          display: flex;
          justify-content: flex-end;
        }

        .btn-primary {
          background-color: var(--primary);
          color: var(--bg-deep);
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          background-color: var(--primary-soft);
          transform: scale(1.02);
        }
      `})]})},wf=()=>{const{employees:e,addEmployee:t,deleteEmployee:n}=It(),[r,l]=R.useState({name:"",phone:""}),o=i=>{i.preventDefault(),t(r),l({name:"",phone:""})};return a.jsxs("div",{className:"employees-container fade-in",children:[a.jsxs("div",{className:"employees-grid",children:[a.jsx("div",{className:"employee-form-container",children:a.jsxs("div",{className:"card",children:[a.jsx("h3",{className:"card-title",children:"Cadastrar Funcionário"}),a.jsxs("form",{onSubmit:o,className:"employee-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Nome Completo"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(df,{size:16,className:"input-icon"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ex: João Silva",value:r.name,onChange:i=>l({...r,name:i.target.value})})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Telefone / WhatsApp"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(tf,{size:16,className:"input-icon"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ex: (11) 98888-7777",value:r.phone,onChange:i=>l({...r,phone:i.target.value})})]})]}),a.jsxs("button",{type:"submit",className:"btn-primary full-width",children:[a.jsx(cf,{size:18}),"Adicionar Funcionário"]})]})]})}),a.jsx("div",{className:"employees-list-container",children:a.jsxs("div",{className:"card",children:[a.jsx("h3",{className:"card-title",children:"Lista de Funcionários"}),a.jsx("div",{className:"employee-list",children:e.length===0?a.jsx("div",{className:"empty-state",children:"Nenhum funcionário cadastrado"}):e.map(i=>a.jsxs("div",{className:"employee-item",children:[a.jsx("div",{className:"emp-avatar",children:i.name.charAt(0).toUpperCase()}),a.jsxs("div",{className:"emp-info",children:[a.jsx("span",{className:"emp-name",children:i.name}),a.jsx("span",{className:"emp-phone",children:i.phone})]}),a.jsx("button",{className:"btn-icon btn-delete",onClick:()=>n(i.id),title:"Remover",children:a.jsx(ic,{size:16})})]},i.id))})]})})]}),a.jsx("style",{jsx:!0,children:`
                .employees-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 32px;
                    align-items: start;
                }

                .card {
                    background-color: var(--bg-medium);
                    border: 1px solid var(--bg-light);
                    border-radius: 8px;
                    padding: 24px;
                }

                .card-title {
                    font-size: 14px;
                    color: var(--primary);
                    margin-bottom: 24px;
                }

                .employee-form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .form-group label {
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-muted);
                }

                .input-with-icon {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .input-icon {
                    position: absolute;
                    left: 12px;
                    color: var(--text-muted);
                }

                input {
                    width: 100%;
                    background-color: var(--bg-deep);
                    border: 1px solid var(--bg-light);
                    color: white;
                    padding: 10px 16px 10px 40px;
                    border-radius: 6px;
                    font-family: var(--font-body);
                    font-size: 14px;
                    transition: all 0.2s ease;
                }

                input:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(245, 168, 0, 0.2);
                }

                .btn-primary {
                    background-color: var(--primary);
                    color: var(--bg-deep);
                    border: none;
                    padding: 12px 24px;
                    border-radius: 6px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .btn-primary:hover {
                    background-color: var(--primary-soft);
                    transform: scale(1.01);
                }

                .full-width { width: 100%; }

                .employee-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .employee-item {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 12px 16px;
                    background-color: var(--bg-deep);
                    border: 1px solid var(--bg-light);
                    border-radius: 6px;
                    transition: border-color 0.2s;
                }

                .employee-item:hover {
                    border-color: var(--primary);
                }

                .emp-avatar {
                    width: 36px;
                    height: 36px;
                    background-color: var(--primary);
                    color: var(--bg-deep);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 14px;
                }

                .emp-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .emp-name {
                    font-size: 14px;
                    color: white;
                    font-weight: 500;
                }

                .emp-phone {
                    font-size: 12px;
                    color: var(--text-muted);
                }

                .btn-icon {
                    background: transparent;
                    border: none;
                    color: var(--text-muted);
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 4px;
                    transition: all 0.2s;
                }

                .btn-delete:hover {
                    color: var(--danger-soft);
                    background: rgba(192, 32, 42, 0.1);
                }

                .empty-state {
                    text-align: center;
                    color: var(--text-muted);
                    padding: 32px;
                    font-size: 13px;
                }
            `})]})},Sf=()=>{const{webhookSettings:e,updateWebhookSettings:t}=It(),[n,r]=R.useState({...e}),[l,o]=R.useState(!1),i=s=>{s.preventDefault(),t(n),o(!0),setTimeout(()=>o(!1),3e3)};return a.jsxs("div",{className:"settings-container fade-in",children:[a.jsxs("div",{className:"card settings-card",children:[a.jsx("h3",{className:"card-title",children:"Configurações Globais de Webhook"}),a.jsx("p",{className:"card-subtitle",children:"Configure as URLs padrão para evitar repetição no cadastro de eventos."}),a.jsxs("form",{onSubmit:i,className:"settings-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"URL de Produção (Oficial)"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(Bp,{size:16,className:"input-icon text-primary"}),a.jsx("input",{type:"url",placeholder:"https://seu-n8n.com/webhook/producao",value:n.productionUrl,onChange:s=>r({...n,productionUrl:s.target.value})})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"URL de Teste / Desenvolvimento"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(Wp,{size:16,className:"input-icon text-test"}),a.jsx("input",{type:"url",placeholder:"https://webhook.site/seu-id-de-teste",value:n.testUrl,onChange:s=>r({...n,testUrl:s.target.value})})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Modo Padrão no Cadastro"}),a.jsxs("div",{className:"radio-group",children:[a.jsxs("label",{className:`radio-item ${n.defaultMode==="production"?"active":""}`,children:[a.jsx("input",{type:"radio",name:"defaultMode",value:"production",checked:n.defaultMode==="production",onChange:()=>r({...n,defaultMode:"production"})}),"Produção"]}),a.jsxs("label",{className:`radio-item ${n.defaultMode==="test"?"active":""}`,children:[a.jsx("input",{type:"radio",name:"defaultMode",value:"test",checked:n.defaultMode==="test",onChange:()=>r({...n,defaultMode:"test"})}),"Teste"]})]})]}),a.jsx("div",{className:"form-actions",children:a.jsx("button",{type:"submit",className:"btn-primary",disabled:l,children:l?a.jsxs(a.Fragment,{children:[a.jsx(Ii,{size:18}),"Configurações Salvas!"]}):a.jsxs(a.Fragment,{children:[a.jsx(of,{size:18}),"Salvar Configurações"]})})})]})]}),a.jsx("style",{jsx:!0,children:`
                .settings-container {
                    max-width: 600px;
                    margin: 0 auto;
                }

                .settings-card {
                    background-color: var(--bg-medium);
                    border: 1px solid var(--bg-light);
                    border-radius: 8px;
                    padding: 32px;
                }

                .card-title {
                    font-size: 16px;
                    color: var(--primary);
                    margin-bottom: 8px;
                }

                .card-subtitle {
                    font-size: 13px;
                    color: var(--text-muted);
                    margin-bottom: 32px;
                }

                .settings-form {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .form-group label {
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-muted);
                }

                .input-with-icon {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .input-icon {
                    position: absolute;
                    left: 14px;
                }

                .text-primary { color: var(--primary); }
                .text-test { color: var(--info); }

                input[type="url"] {
                    width: 100%;
                    background-color: var(--bg-deep);
                    border: 1px solid var(--bg-light);
                    color: white;
                    padding: 12px 16px 12px 42px;
                    border-radius: 6px;
                    font-family: var(--font-body);
                    font-size: 14px;
                    transition: all 0.2s ease;
                }

                input:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(245, 168, 0, 0.2);
                }

                .radio-group {
                    display: flex;
                    gap: 12px;
                }

                .radio-item {
                    flex: 1;
                    padding: 12px;
                    background-color: var(--bg-deep);
                    border: 1px solid var(--bg-light);
                    border-radius: 6px;
                    text-align: center;
                    font-size: 13px;
                    color: var(--text-muted);
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .radio-item input {
                    display: none;
                }

                .radio-item:hover {
                    border-color: var(--bg-lighter);
                }

                .radio-item.active {
                    border-color: var(--primary);
                    color: var(--primary);
                    background-color: rgba(245, 168, 0, 0.05);
                }

                .form-actions {
                    margin-top: 16px;
                    display: flex;
                    justify-content: flex-end;
                }

                .btn-primary {
                    background-color: var(--primary);
                    color: var(--bg-deep);
                    border: none;
                    padding: 12px 32px;
                    border-radius: 6px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .btn-primary:hover:not(:disabled) {
                    background-color: var(--primary-soft);
                    transform: translateY(-1px);
                }

                .btn-primary:disabled {
                    background-color: var(--success);
                    color: white;
                    cursor: default;
                }
            `})]})},jf=({onLogin:e})=>{const[t,n]=R.useState(""),[r,l]=R.useState(""),[o,i]=R.useState(!1),[s,u]=R.useState(""),d=async g=>{g.preventDefault(),i(!0),u("");try{const m=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:r})}),h=await m.json();m.ok?e(h.token,h.user):u(h.error||"Falha na autenticação")}catch{u("Erro ao conectar com o servidor")}finally{i(!1)}};return a.jsxs("div",{className:"login-page",children:[a.jsxs("div",{className:"login-card fade-in",children:[a.jsxs("div",{className:"login-header",children:[a.jsx("div",{className:"login-logo",children:a.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("path",{d:"M4 4L12 12L4 20",stroke:"#F5A800",strokeWidth:"3",strokeLinecap:"round"}),a.jsx("path",{d:"M12 4L20 12L12 20",stroke:"#F5A800",strokeWidth:"3",strokeLinecap:"round",opacity:"0.6"})]})}),a.jsx("h1",{children:"DECOM"}),a.jsx("p",{children:"Controle de Tarefas"})]}),a.jsxs("form",{onSubmit:d,className:"login-form",children:[s&&a.jsx("div",{className:"login-error",children:s}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"E-mail"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(qp,{size:18,className:"input-icon"}),a.jsx("input",{type:"email",required:!0,placeholder:"exemplo@gmail.com",value:t,onChange:g=>n(g.target.value)})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Senha"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(Gp,{size:18,className:"input-icon"}),a.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:r,onChange:g=>l(g.target.value)})]})]}),a.jsx("button",{type:"submit",className:"btn-login",disabled:o,children:o?a.jsx(Xp,{className:"spinner",size:18}):a.jsxs(a.Fragment,{children:[a.jsx(Zp,{size:18}),"Entrar no Painel"]})}),a.jsx("div",{className:"login-footer",children:"Desenvolvido para uso exclusivo da DECOM"})]})]}),a.jsx("style",{jsx:!0,children:`
                .login-page {
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--bg-deep);
                }

                .login-card {
                    width: 100%;
                    max-width: 400px;
                    background-color: var(--bg-medium);
                    border: 1px solid var(--bg-light);
                    border-radius: 12px;
                    padding: 40px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }

                .login-header {
                    text-align: center;
                    margin-bottom: 32px;
                }

                .login-logo {
                    margin-bottom: 16px;
                }

                .login-header h1 {
                    font-size: 28px;
                    font-weight: 800;
                    color: white;
                    margin: 0;
                    letter-spacing: -0.02em;
                }

                .login-header p {
                    font-size: 14px;
                    color: var(--primary);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-top: 4px;
                }

                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .login-error {
                    background-color: rgba(232, 64, 74, 0.1);
                    color: var(--danger-soft);
                    border: 1px solid var(--danger-soft);
                    padding: 12px;
                    border-radius: 6px;
                    font-size: 13px;
                    text-align: center;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .form-group label {
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-muted);
                }

                .input-with-icon {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .input-icon {
                    position: absolute;
                    left: 14px;
                    color: var(--text-muted);
                    transition: color 0.2s;
                }

                input {
                    width: 100%;
                    background-color: var(--bg-deep);
                    border: 1px solid var(--bg-light);
                    color: white;
                    padding: 12px 16px 12px 42px;
                    border-radius: 6px;
                    font-family: var(--font-body);
                    font-size: 15px;
                    transition: all 0.2s ease;
                }

                input:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(245, 168, 0, 0.2);
                }

                input:focus + .input-icon {
                    color: var(--primary);
                }

                .btn-login {
                    background-color: var(--primary);
                    color: var(--bg-deep);
                    border: none;
                    padding: 14px;
                    border-radius: 6px;
                    font-weight: 700;
                    font-size: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .btn-login:hover:not(:disabled) {
                    background-color: var(--primary-soft);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(245, 168, 0, 0.3);
                }

                .btn-login:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .spinner {
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .login-footer {
                    margin-top: 16px;
                    text-align: center;
                    font-size: 11px;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
            `})]})};function Nf(){const[e,t]=R.useState(!!sessionStorage.getItem("auth_token")),[n,r]=R.useState("dashboard"),[l,o]=R.useState(null),{motorActive:i,nextUpdate:s}=It(),u=(m,h)=>{sessionStorage.setItem("auth_token",m),sessionStorage.setItem("auth_user",JSON.stringify(h)),t(!0)},d=()=>{sessionStorage.removeItem("auth_token"),sessionStorage.removeItem("auth_user"),t(!1)};if(!e)return a.jsx(jf,{onLogin:u});const g=()=>{switch(n){case"dashboard":return"Dashboard Geral";case"events":return"Gerenciamento de Eventos";case"employees":return"Gerenciamento de Funcionários";case"history":return"Histórico de Disparos";case"settings":return"Configurações de Webhook";case"add-event":return l?"Editar Evento":"Novo Evento";default:return"DECOM"}};return a.jsxs("div",{className:"app-container",children:[a.jsx(mf,{activeTab:n,setActiveTab:r,onLogout:d}),a.jsxs("main",{className:"main-content",children:[a.jsx(hf,{title:g(),motorActive:i,nextUpdate:s}),a.jsxs("div",{className:"content-padding",children:[n==="dashboard"&&a.jsx(vf,{onAddClick:()=>r("add-event")}),n==="events"&&a.jsx(yf,{onEdit:m=>{o(m),r("add-event")}}),n==="employees"&&a.jsx(wf,{}),n==="history"&&a.jsx(xf,{}),n==="settings"&&a.jsx(Sf,{}),n==="add-event"&&a.jsx(kf,{initialData:l,onComplete:()=>{o(null),r("events")}})]})]}),a.jsx("style",{jsx:!0,children:`
        .app-container {
          display: flex;
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
          margin-left: var(--sidebar-width);
          background-color: var(--bg-content);
          min-height: 100vh;
        }
        .content-padding {
          padding: 32px;
        }
      `})]})}function Ef(){return a.jsx(gf,{children:a.jsx(Nf,{})})}Yl.createRoot(document.getElementById("root")).render(a.jsx(Ec.StrictMode,{children:a.jsx(Ef,{})}));
