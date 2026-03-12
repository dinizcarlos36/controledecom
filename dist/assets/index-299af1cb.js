(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function uc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xs={exports:{}},ll={},Gs={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn=Symbol.for("react.element"),cc=Symbol.for("react.portal"),dc=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),hc=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),yc=Symbol.for("react.memo"),xc=Symbol.for("react.lazy"),Ai=Symbol.iterator;function kc(e){return e===null||typeof e!="object"?null:(e=Ai&&e[Ai]||e["@@iterator"],typeof e=="function"?e:null)}var Zs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Js=Object.assign,qs={};function dn(e,t,n){this.props=e,this.context=t,this.refs=qs,this.updater=n||Zs}dn.prototype.isReactComponent={};dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ea(){}ea.prototype=dn.prototype;function Wo(e,t,n){this.props=e,this.context=t,this.refs=qs,this.updater=n||Zs}var Bo=Wo.prototype=new ea;Bo.constructor=Wo;Js(Bo,dn.prototype);Bo.isPureReactComponent=!0;var Hi=Array.isArray,ta=Object.prototype.hasOwnProperty,Qo={current:null},na={key:!0,ref:!0,__self:!0,__source:!0};function ra(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)ta.call(t,r)&&!na.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Jn,type:e,key:o,ref:i,props:l,_owner:Qo.current}}function wc(e,t){return{$$typeof:Jn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ko(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jn}function Sc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vi=/\/+/g;function Nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sc(""+e.key):t.toString(36)}function Sr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Jn:case cc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Nl(i,0):r,Hi(l)?(n="",e!=null&&(n=e.replace(Vi,"$&/")+"/"),Sr(l,t,n,"",function(d){return d})):l!=null&&(Ko(l)&&(l=wc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Vi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Hi(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Nl(o,s);i+=Sr(o,t,n,u,l)}else if(u=kc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Nl(o,s++),i+=Sr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function or(e,t,n){if(e==null)return e;var r=[],l=0;return Sr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function jc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},jr={transition:null},Nc={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:jr,ReactCurrentOwner:Qo};function la(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:or,forEach:function(e,t,n){or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return or(e,function(){t++}),t},toArray:function(e){return or(e,function(t){return t})||[]},only:function(e){if(!Ko(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=dn;M.Fragment=dc;M.Profiler=fc;M.PureComponent=Wo;M.StrictMode=pc;M.Suspense=vc;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nc;M.act=la;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Js({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Qo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ta.call(t,u)&&!na.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Jn,type:e.type,key:l,ref:o,props:r,_owner:i}};M.createContext=function(e){return e={$$typeof:hc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mc,_context:e},e.Consumer=e};M.createElement=ra;M.createFactory=function(e){var t=ra.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:gc,render:e}};M.isValidElement=Ko;M.lazy=function(e){return{$$typeof:xc,_payload:{_status:-1,_result:e},_init:jc}};M.memo=function(e,t){return{$$typeof:yc,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=jr.transition;jr.transition={};try{e()}finally{jr.transition=t}};M.unstable_act=la;M.useCallback=function(e,t){return de.current.useCallback(e,t)};M.useContext=function(e){return de.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return de.current.useDeferredValue(e)};M.useEffect=function(e,t){return de.current.useEffect(e,t)};M.useId=function(){return de.current.useId()};M.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return de.current.useMemo(e,t)};M.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};M.useRef=function(e){return de.current.useRef(e)};M.useState=function(e){return de.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return de.current.useTransition()};M.version="18.3.1";Gs.exports=M;var R=Gs.exports;const Ec=uc(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=R,zc=Symbol.for("react.element"),_c=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,Lc=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tc={key:!0,ref:!0,__self:!0,__source:!0};function oa(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Pc.call(t,r)&&!Tc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:zc,type:e,key:o,ref:i,props:l,_owner:Lc.current}}ll.Fragment=_c;ll.jsx=oa;ll.jsxs=oa;Xs.exports=ll;var a=Xs.exports,Gl={},ia={exports:{}},Ne={},sa={exports:{}},aa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,P){var T=_.length;_.push(P);e:for(;0<T;){var K=T-1>>>1,q=_[K];if(0<l(q,P))_[K]=P,_[T]=q,T=K;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var P=_[0],T=_.pop();if(T!==P){_[0]=T;e:for(var K=0,q=_.length,rr=q>>>1;K<rr;){var wt=2*(K+1)-1,jl=_[wt],St=wt+1,lr=_[St];if(0>l(jl,T))St<q&&0>l(lr,jl)?(_[K]=lr,_[St]=T,K=St):(_[K]=jl,_[wt]=T,K=wt);else if(St<q&&0>l(lr,T))_[K]=lr,_[St]=T,K=St;else break e}}return P}function l(_,P){var T=_.sortIndex-P.sortIndex;return T!==0?T:_.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],d=[],g=1,m=null,h=3,S=!1,N=!1,E=!1,F=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=_)r(d),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(d)}}function y(_){if(E=!1,f(_),!N)if(n(u)!==null)N=!0,ye(v);else{var P=n(d);P!==null&&Sl(y,P.startTime-_)}}function v(_,P){N=!1,E&&(E=!1,p(j),j=-1),S=!0;var T=h;try{for(f(P),m=n(u);m!==null&&(!(m.expirationTime>P)||_&&!H());){var K=m.callback;if(typeof K=="function"){m.callback=null,h=m.priorityLevel;var q=K(m.expirationTime<=P);P=e.unstable_now(),typeof q=="function"?m.callback=q:m===n(u)&&r(u),f(P)}else r(u);m=n(u)}if(m!==null)var rr=!0;else{var wt=n(d);wt!==null&&Sl(y,wt.startTime-P),rr=!1}return rr}finally{m=null,h=T,S=!1}}var k=!1,w=null,j=-1,L=5,C=-1;function H(){return!(e.unstable_now()-C<L)}function X(){if(w!==null){var _=e.unstable_now();C=_;var P=!0;try{P=w(!0,_)}finally{P?$e():(k=!1,w=null)}}else k=!1}var $e;if(typeof c=="function")$e=function(){c(X)};else if(typeof MessageChannel<"u"){var kl=new MessageChannel,wl=kl.port2;kl.port1.onmessage=X,$e=function(){wl.postMessage(null)}}else $e=function(){F(X,0)};function ye(_){w=_,k||(k=!0,$e())}function Sl(_,P){j=F(function(){_(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){N||S||(N=!0,ye(v))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var T=h;h=P;try{return _()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,P){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=h;h=_;try{return P()}finally{h=T}},e.unstable_scheduleCallback=function(_,P,T){var K=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?K+T:K):T=K,_){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=T+q,_={id:g++,callback:P,priorityLevel:_,startTime:T,expirationTime:q,sortIndex:-1},T>K?(_.sortIndex=T,t(d,_),n(u)===null&&_===n(d)&&(E?(p(j),j=-1):E=!0,Sl(y,T-K))):(_.sortIndex=q,t(u,_),N||S||(N=!0,ye(v))),_},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(_){var P=h;return function(){var T=h;h=P;try{return _.apply(this,arguments)}finally{h=T}}}})(aa);sa.exports=aa;var Mc=sa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=R,je=Mc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ua=new Set,On={};function Ot(e,t){rn(e,t),rn(e+"Capture",t)}function rn(e,t){for(On[e]=t,e=0;e<t.length;e++)ua.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,Rc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bi={},Wi={};function Oc(e){return Zl.call(Wi,e)?!0:Zl.call(bi,e)?!1:Rc.test(e)?Wi[e]=!0:(bi[e]=!0,!1)}function Ic(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fc(e,t,n,r){if(t===null||typeof t>"u"||Ic(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yo=/[\-:]([a-z])/g;function Xo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yo,Xo);le[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yo,Xo);le[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yo,Xo);le[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Go(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fc(t,n,l,r)&&(n=null),r||l===null?Oc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ir=Symbol.for("react.element"),$t=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),Zo=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),ca=Symbol.for("react.provider"),da=Symbol.for("react.context"),Jo=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),eo=Symbol.for("react.suspense_list"),qo=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),pa=Symbol.for("react.offscreen"),Bi=Symbol.iterator;function mn(e){return e===null||typeof e!="object"?null:(e=Bi&&e[Bi]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,El;function Sn(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var Cl=!1;function zl(e,t){if(!e||Cl)return"";Cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function Uc(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function to(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case At:return"Fragment";case $t:return"Portal";case Jl:return"Profiler";case Zo:return"StrictMode";case ql:return"Suspense";case eo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case da:return(e.displayName||"Context")+".Consumer";case ca:return(e._context.displayName||"Context")+".Provider";case Jo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qo:return t=e.displayName||null,t!==null?t:to(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return to(e(t))}catch{}}return null}function $c(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return to(t);case 8:return t===Zo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ac(e){var t=fa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sr(e){e._valueTracker||(e._valueTracker=Ac(e))}function ma(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function no(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ha(e,t){t=t.checked,t!=null&&Go(e,"checked",t,!1)}function ro(e,t){ha(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?lo(e,t.type,n):t.hasOwnProperty("defaultValue")&&lo(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ki(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function lo(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jn=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(jn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function ga(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function va(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function io(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?va(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ar,ya=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function xa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function ka(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=xa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Vc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function so(e,t){if(t){if(Vc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ao(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uo=null;function ei(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var co=null,Jt=null,qt=null;function Gi(e){if(e=tr(e)){if(typeof co!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ul(t),co(e.stateNode,e.type,t))}}function wa(e){Jt?qt?qt.push(e):qt=[e]:Jt=e}function Sa(){if(Jt){var e=Jt,t=qt;if(qt=Jt=null,Gi(e),t)for(e=0;e<t.length;e++)Gi(t[e])}}function ja(e,t){return e(t)}function Na(){}var _l=!1;function Ea(e,t,n){if(_l)return e(t,n);_l=!0;try{return ja(e,t,n)}finally{_l=!1,(Jt!==null||qt!==null)&&(Na(),Sa())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var po=!1;if(Ge)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){po=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{po=!1}function bc(e,t,n,r,l,o,i,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var zn=!1,Or=null,Ir=!1,fo=null,Wc={onError:function(e){zn=!0,Or=e}};function Bc(e,t,n,r,l,o,i,s,u){zn=!1,Or=null,bc.apply(Wc,arguments)}function Qc(e,t,n,r,l,o,i,s,u){if(Bc.apply(this,arguments),zn){if(zn){var d=Or;zn=!1,Or=null}else throw Error(x(198));Ir||(Ir=!0,fo=d)}}function It(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ca(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zi(e){if(It(e)!==e)throw Error(x(188))}function Kc(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Zi(l),e;if(o===r)return Zi(l),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function za(e){return e=Kc(e),e!==null?_a(e):null}function _a(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_a(e);if(t!==null)return t;e=e.sibling}return null}var Pa=je.unstable_scheduleCallback,Ji=je.unstable_cancelCallback,Yc=je.unstable_shouldYield,Xc=je.unstable_requestPaint,Y=je.unstable_now,Gc=je.unstable_getCurrentPriorityLevel,ti=je.unstable_ImmediatePriority,La=je.unstable_UserBlockingPriority,Fr=je.unstable_NormalPriority,Zc=je.unstable_LowPriority,Ta=je.unstable_IdlePriority,ol=null,be=null;function Jc(e){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:td,qc=Math.log,ed=Math.LN2;function td(e){return e>>>=0,e===0?32:31-(qc(e)/ed|0)|0}var ur=64,cr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Nn(s):(o&=i,o!==0&&(r=Nn(o)))}else i=n&~l,i!==0?r=Nn(i):o!==0&&(r=Nn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function nd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ie(o),s=1<<i,u=l[i];u===-1?(!(s&n)||s&r)&&(l[i]=nd(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function mo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ma(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function Pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function ld(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ni(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function Da(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ra,ri,Oa,Ia,Fa,ho=!1,dr=[],at=null,ut=null,ct=null,Un=new Map,$n=new Map,lt=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qi(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function gn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=tr(t),t!==null&&ri(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function id(e,t,n,r,l){switch(t){case"focusin":return at=gn(at,e,t,n,r,l),!0;case"dragenter":return ut=gn(ut,e,t,n,r,l),!0;case"mouseover":return ct=gn(ct,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Un.set(o,gn(Un.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,$n.set(o,gn($n.get(o)||null,e,t,n,r,l)),!0}return!1}function Ua(e){var t=Et(e.target);if(t!==null){var n=It(t);if(n!==null){if(t=n.tag,t===13){if(t=Ca(n),t!==null){e.blockedOn=t,Fa(e.priority,function(){Oa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=go(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uo=r,n.target.dispatchEvent(r),uo=null}else return t=tr(n),t!==null&&ri(t),e.blockedOn=n,!1;t.shift()}return!0}function es(e,t,n){Nr(e)&&n.delete(t)}function sd(){ho=!1,at!==null&&Nr(at)&&(at=null),ut!==null&&Nr(ut)&&(ut=null),ct!==null&&Nr(ct)&&(ct=null),Un.forEach(es),$n.forEach(es)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,ho||(ho=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,sd)))}function An(e){function t(l){return vn(l,e)}if(0<dr.length){vn(dr[0],e);for(var n=1;n<dr.length;n++){var r=dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&vn(at,e),ut!==null&&vn(ut,e),ct!==null&&vn(ct,e),Un.forEach(t),$n.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)Ua(n),n.blockedOn===null&&lt.shift()}var en=et.ReactCurrentBatchConfig,$r=!0;function ad(e,t,n,r){var l=I,o=en.transition;en.transition=null;try{I=1,li(e,t,n,r)}finally{I=l,en.transition=o}}function ud(e,t,n,r){var l=I,o=en.transition;en.transition=null;try{I=4,li(e,t,n,r)}finally{I=l,en.transition=o}}function li(e,t,n,r){if($r){var l=go(e,t,n,r);if(l===null)$l(e,t,r,Ar,n),qi(e,r);else if(id(l,e,t,n,r))r.stopPropagation();else if(qi(e,r),t&4&&-1<od.indexOf(e)){for(;l!==null;){var o=tr(l);if(o!==null&&Ra(o),o=go(e,t,n,r),o===null&&$l(e,t,r,Ar,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else $l(e,t,r,null,n)}}var Ar=null;function go(e,t,n,r){if(Ar=null,e=ei(r),e=Et(e),e!==null)if(t=It(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ca(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function $a(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case ti:return 1;case La:return 4;case Fr:case Zc:return 16;case Ta:return 536870912;default:return 16}default:return 16}}var it=null,oi=null,Er=null;function Aa(){if(Er)return Er;var e,t=oi,n=t.length,r,l="value"in it?it.value:it.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pr(){return!0}function ts(){return!1}function Ee(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pr:ts,this.isPropagationStopped=ts,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ii=Ee(pn),er=B({},pn,{view:0,detail:0}),cd=Ee(er),Ll,Tl,yn,il=B({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:si,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yn&&(yn&&e.type==="mousemove"?(Ll=e.screenX-yn.screenX,Tl=e.screenY-yn.screenY):Tl=Ll=0,yn=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),ns=Ee(il),dd=B({},il,{dataTransfer:0}),pd=Ee(dd),fd=B({},er,{relatedTarget:0}),Ml=Ee(fd),md=B({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=Ee(md),gd=B({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vd=Ee(gd),yd=B({},pn,{data:0}),rs=Ee(yd),xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wd[e])?!!t[e]:!1}function si(){return Sd}var jd=B({},er,{key:function(e){if(e.key){var t=xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:si,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nd=Ee(jd),Ed=B({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ls=Ee(Ed),Cd=B({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:si}),zd=Ee(Cd),_d=B({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=Ee(_d),Ld=B({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Td=Ee(Ld),Md=[9,13,27,32],ai=Ge&&"CompositionEvent"in window,_n=null;Ge&&"documentMode"in document&&(_n=document.documentMode);var Dd=Ge&&"TextEvent"in window&&!_n,Ha=Ge&&(!ai||_n&&8<_n&&11>=_n),os=String.fromCharCode(32),is=!1;function Va(e,t){switch(e){case"keyup":return Md.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ba(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Rd(e,t){switch(e){case"compositionend":return ba(t);case"keypress":return t.which!==32?null:(is=!0,os);case"textInput":return e=t.data,e===os&&is?null:e;default:return null}}function Od(e,t){if(Ht)return e==="compositionend"||!ai&&Va(e,t)?(e=Aa(),Er=oi=it=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ha&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function Wa(e,t,n,r){wa(r),t=Hr(t,"onChange"),0<t.length&&(n=new ii("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Hn=null;function Fd(e){tu(e,0)}function sl(e){var t=Wt(e);if(ma(t))return e}function Ud(e,t){if(e==="change")return t}var Ba=!1;if(Ge){var Dl;if(Ge){var Rl="oninput"in document;if(!Rl){var as=document.createElement("div");as.setAttribute("oninput","return;"),Rl=typeof as.oninput=="function"}Dl=Rl}else Dl=!1;Ba=Dl&&(!document.documentMode||9<document.documentMode)}function us(){Pn&&(Pn.detachEvent("onpropertychange",Qa),Hn=Pn=null)}function Qa(e){if(e.propertyName==="value"&&sl(Hn)){var t=[];Wa(t,Hn,e,ei(e)),Ea(Fd,t)}}function $d(e,t,n){e==="focusin"?(us(),Pn=t,Hn=n,Pn.attachEvent("onpropertychange",Qa)):e==="focusout"&&us()}function Ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(Hn)}function Hd(e,t){if(e==="click")return sl(t)}function Vd(e,t){if(e==="input"||e==="change")return sl(t)}function bd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:bd;function Vn(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Zl.call(t,l)||!Ue(e[l],t[l]))return!1}return!0}function cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ds(e,t){var n=cs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cs(n)}}function Ka(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ka(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ya(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wd(e){var t=Ya(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ka(n.ownerDocument.documentElement,n)){if(r!==null&&ui(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ds(n,o);var i=ds(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=Ge&&"documentMode"in document&&11>=document.documentMode,Vt=null,vo=null,Ln=null,yo=!1;function ps(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yo||Vt==null||Vt!==Rr(r)||(r=Vt,"selectionStart"in r&&ui(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ln&&Vn(Ln,r)||(Ln=r,r=Hr(vo,"onSelect"),0<r.length&&(t=new ii("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bt={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},Ol={},Xa={};Ge&&(Xa=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function al(e){if(Ol[e])return Ol[e];if(!bt[e])return e;var t=bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xa)return Ol[e]=t[n];return e}var Ga=al("animationend"),Za=al("animationiteration"),Ja=al("animationstart"),qa=al("transitionend"),eu=new Map,fs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){eu.set(e,t),Ot(t,[e])}for(var Il=0;Il<fs.length;Il++){var Fl=fs[Il],Qd=Fl.toLowerCase(),Kd=Fl[0].toUpperCase()+Fl.slice(1);yt(Qd,"on"+Kd)}yt(Ga,"onAnimationEnd");yt(Za,"onAnimationIteration");yt(Ja,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(qa,"onTransitionEnd");rn("onMouseEnter",["mouseout","mouseover"]);rn("onMouseLeave",["mouseout","mouseover"]);rn("onPointerEnter",["pointerout","pointerover"]);rn("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yd=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function ms(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qc(r,t,void 0,e),e.currentTarget=null}function tu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;ms(l,s,d),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;ms(l,s,d),o=u}}}if(Ir)throw e=fo,Ir=!1,fo=null,e}function $(e,t){var n=t[jo];n===void 0&&(n=t[jo]=new Set);var r=e+"__bubble";n.has(r)||(nu(t,e,2,!1),n.add(r))}function Ul(e,t,n){var r=0;t&&(r|=4),nu(n,e,r,t)}var mr="_reactListening"+Math.random().toString(36).slice(2);function bn(e){if(!e[mr]){e[mr]=!0,ua.forEach(function(n){n!=="selectionchange"&&(Yd.has(n)||Ul(n,!1,e),Ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mr]||(t[mr]=!0,Ul("selectionchange",!1,t))}}function nu(e,t,n,r){switch($a(t)){case 1:var l=ad;break;case 4:l=ud;break;default:l=li}n=l.bind(null,t,n,e),l=void 0,!po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function $l(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Et(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Ea(function(){var d=o,g=ei(n),m=[];e:{var h=eu.get(e);if(h!==void 0){var S=ii,N=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":S=Nd;break;case"focusin":N="focus",S=Ml;break;case"focusout":N="blur",S=Ml;break;case"beforeblur":case"afterblur":S=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=zd;break;case Ga:case Za:case Ja:S=hd;break;case qa:S=Pd;break;case"scroll":S=cd;break;case"wheel":S=Td;break;case"copy":case"cut":case"paste":S=vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ls}var E=(t&4)!==0,F=!E&&e==="scroll",p=E?h!==null?h+"Capture":null:h;E=[];for(var c=d,f;c!==null;){f=c;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,p!==null&&(y=Fn(c,p),y!=null&&E.push(Wn(c,y,f)))),F)break;c=c.return}0<E.length&&(h=new S(h,N,null,n,g),m.push({event:h,listeners:E}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",h&&n!==uo&&(N=n.relatedTarget||n.fromElement)&&(Et(N)||N[Ze]))break e;if((S||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,S?(N=n.relatedTarget||n.toElement,S=d,N=N?Et(N):null,N!==null&&(F=It(N),N!==F||N.tag!==5&&N.tag!==6)&&(N=null)):(S=null,N=d),S!==N)){if(E=ns,y="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=ls,y="onPointerLeave",p="onPointerEnter",c="pointer"),F=S==null?h:Wt(S),f=N==null?h:Wt(N),h=new E(y,c+"leave",S,n,g),h.target=F,h.relatedTarget=f,y=null,Et(g)===d&&(E=new E(p,c+"enter",N,n,g),E.target=f,E.relatedTarget=F,y=E),F=y,S&&N)t:{for(E=S,p=N,c=0,f=E;f;f=Ut(f))c++;for(f=0,y=p;y;y=Ut(y))f++;for(;0<c-f;)E=Ut(E),c--;for(;0<f-c;)p=Ut(p),f--;for(;c--;){if(E===p||p!==null&&E===p.alternate)break t;E=Ut(E),p=Ut(p)}E=null}else E=null;S!==null&&hs(m,h,S,E,!1),N!==null&&F!==null&&hs(m,F,N,E,!0)}}e:{if(h=d?Wt(d):window,S=h.nodeName&&h.nodeName.toLowerCase(),S==="select"||S==="input"&&h.type==="file")var v=Ud;else if(ss(h))if(Ba)v=Vd;else{v=Ad;var k=$d}else(S=h.nodeName)&&S.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(v=Hd);if(v&&(v=v(e,d))){Wa(m,v,n,g);break e}k&&k(e,h,d),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&lo(h,"number",h.value)}switch(k=d?Wt(d):window,e){case"focusin":(ss(k)||k.contentEditable==="true")&&(Vt=k,vo=d,Ln=null);break;case"focusout":Ln=vo=Vt=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,ps(m,n,g);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":ps(m,n,g)}var w;if(ai)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Ht?Va(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Ha&&n.locale!=="ko"&&(Ht||j!=="onCompositionStart"?j==="onCompositionEnd"&&Ht&&(w=Aa()):(it=g,oi="value"in it?it.value:it.textContent,Ht=!0)),k=Hr(d,j),0<k.length&&(j=new rs(j,e,null,n,g),m.push({event:j,listeners:k}),w?j.data=w:(w=ba(n),w!==null&&(j.data=w)))),(w=Dd?Rd(e,n):Od(e,n))&&(d=Hr(d,"onBeforeInput"),0<d.length&&(g=new rs("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:d}),g.data=w))}tu(m,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Fn(e,n),o!=null&&r.unshift(Wn(e,o,l)),o=Fn(e,t),o!=null&&r.push(Wn(e,o,l))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hs(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Fn(n,o),u!=null&&i.unshift(Wn(n,u,s))):l||(u=Fn(n,o),u!=null&&i.push(Wn(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Xd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function gs(e){return(typeof e=="string"?e:""+e).replace(Xd,`
`).replace(Gd,"")}function hr(e,t,n){if(t=gs(t),gs(e)!==t&&n)throw Error(x(425))}function Vr(){}var xo=null,ko=null;function wo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var So=typeof setTimeout=="function"?setTimeout:void 0,Zd=typeof clearTimeout=="function"?clearTimeout:void 0,vs=typeof Promise=="function"?Promise:void 0,Jd=typeof queueMicrotask=="function"?queueMicrotask:typeof vs<"u"?function(e){return vs.resolve(null).then(e).catch(qd)}:So;function qd(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),An(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);An(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ys(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+fn,Bn="__reactProps$"+fn,Ze="__reactContainer$"+fn,jo="__reactEvents$"+fn,ep="__reactListeners$"+fn,tp="__reactHandles$"+fn;function Et(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ys(e);e!==null;){if(n=e[Ve])return n;e=ys(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[Ve]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ul(e){return e[Bn]||null}var No=[],Bt=-1;function xt(e){return{current:e}}function A(e){0>Bt||(e.current=No[Bt],No[Bt]=null,Bt--)}function U(e,t){Bt++,No[Bt]=e.current,e.current=t}var vt={},ae=xt(vt),he=xt(!1),Lt=vt;function ln(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function br(){A(he),A(ae)}function xs(e,t,n){if(ae.current!==vt)throw Error(x(168));U(ae,t),U(he,n)}function ru(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,$c(e)||"Unknown",l));return B({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Lt=ae.current,U(ae,e),U(he,he.current),!0}function ks(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=ru(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,A(he),A(ae),U(ae,e)):A(he),U(he,n)}var Qe=null,cl=!1,Hl=!1;function lu(e){Qe===null?Qe=[e]:Qe.push(e)}function np(e){cl=!0,lu(e)}function kt(){if(!Hl&&Qe!==null){Hl=!0;var e=0,t=I;try{var n=Qe;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,cl=!1}catch(l){throw Qe!==null&&(Qe=Qe.slice(e+1)),Pa(ti,kt),l}finally{I=t,Hl=!1}}return null}var Qt=[],Kt=0,Br=null,Qr=0,Ce=[],ze=0,Tt=null,Ke=1,Ye="";function jt(e,t){Qt[Kt++]=Qr,Qt[Kt++]=Br,Br=e,Qr=t}function ou(e,t,n){Ce[ze++]=Ke,Ce[ze++]=Ye,Ce[ze++]=Tt,Tt=e;var r=Ke;e=Ye;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var o=32-Ie(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ke=1<<32-Ie(t)+l|n<<l|r,Ye=o+e}else Ke=1<<o|n<<l|r,Ye=e}function ci(e){e.return!==null&&(jt(e,1),ou(e,1,0))}function di(e){for(;e===Br;)Br=Qt[--Kt],Qt[Kt]=null,Qr=Qt[--Kt],Qt[Kt]=null;for(;e===Tt;)Tt=Ce[--ze],Ce[ze]=null,Ye=Ce[--ze],Ce[ze]=null,Ke=Ce[--ze],Ce[ze]=null}var Se=null,we=null,V=!1,Oe=null;function iu(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ws(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,we=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Ke,overflow:Ye}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,we=null,!0):!1;default:return!1}}function Eo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Co(e){if(V){var t=we;if(t){var n=t;if(!ws(e,t)){if(Eo(e))throw Error(x(418));t=dt(n.nextSibling);var r=Se;t&&ws(e,t)?iu(r,n):(e.flags=e.flags&-4097|2,V=!1,Se=e)}}else{if(Eo(e))throw Error(x(418));e.flags=e.flags&-4097|2,V=!1,Se=e}}}function Ss(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function gr(e){if(e!==Se)return!1;if(!V)return Ss(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wo(e.type,e.memoizedProps)),t&&(t=we)){if(Eo(e))throw su(),Error(x(418));for(;t;)iu(e,t),t=dt(t.nextSibling)}if(Ss(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=Se?dt(e.stateNode.nextSibling):null;return!0}function su(){for(var e=we;e;)e=dt(e.nextSibling)}function on(){we=Se=null,V=!1}function pi(e){Oe===null?Oe=[e]:Oe.push(e)}var rp=et.ReactCurrentBatchConfig;function xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function js(e){var t=e._init;return t(e._payload)}function au(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=ht(p,c),p.index=0,p.sibling=null,p}function o(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,y){return c===null||c.tag!==6?(c=Yl(f,p.mode,y),c.return=p,c):(c=l(c,f),c.return=p,c)}function u(p,c,f,y){var v=f.type;return v===At?g(p,c,f.props.children,y,f.key):c!==null&&(c.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===nt&&js(v)===c.type)?(y=l(c,f.props),y.ref=xn(p,c,f),y.return=p,y):(y=Dr(f.type,f.key,f.props,null,p.mode,y),y.ref=xn(p,c,f),y.return=p,y)}function d(p,c,f,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Xl(f,p.mode,y),c.return=p,c):(c=l(c,f.children||[]),c.return=p,c)}function g(p,c,f,y,v){return c===null||c.tag!==7?(c=Pt(f,p.mode,y,v),c.return=p,c):(c=l(c,f),c.return=p,c)}function m(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Yl(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ir:return f=Dr(c.type,c.key,c.props,null,p.mode,f),f.ref=xn(p,null,c),f.return=p,f;case $t:return c=Xl(c,p.mode,f),c.return=p,c;case nt:var y=c._init;return m(p,y(c._payload),f)}if(jn(c)||mn(c))return c=Pt(c,p.mode,f,null),c.return=p,c;vr(p,c)}return null}function h(p,c,f,y){var v=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return v!==null?null:s(p,c,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ir:return f.key===v?u(p,c,f,y):null;case $t:return f.key===v?d(p,c,f,y):null;case nt:return v=f._init,h(p,c,v(f._payload),y)}if(jn(f)||mn(f))return v!==null?null:g(p,c,f,y,null);vr(p,f)}return null}function S(p,c,f,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(f)||null,s(c,p,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ir:return p=p.get(y.key===null?f:y.key)||null,u(c,p,y,v);case $t:return p=p.get(y.key===null?f:y.key)||null,d(c,p,y,v);case nt:var k=y._init;return S(p,c,f,k(y._payload),v)}if(jn(y)||mn(y))return p=p.get(f)||null,g(c,p,y,v,null);vr(c,y)}return null}function N(p,c,f,y){for(var v=null,k=null,w=c,j=c=0,L=null;w!==null&&j<f.length;j++){w.index>j?(L=w,w=null):L=w.sibling;var C=h(p,w,f[j],y);if(C===null){w===null&&(w=L);break}e&&w&&C.alternate===null&&t(p,w),c=o(C,c,j),k===null?v=C:k.sibling=C,k=C,w=L}if(j===f.length)return n(p,w),V&&jt(p,j),v;if(w===null){for(;j<f.length;j++)w=m(p,f[j],y),w!==null&&(c=o(w,c,j),k===null?v=w:k.sibling=w,k=w);return V&&jt(p,j),v}for(w=r(p,w);j<f.length;j++)L=S(w,p,j,f[j],y),L!==null&&(e&&L.alternate!==null&&w.delete(L.key===null?j:L.key),c=o(L,c,j),k===null?v=L:k.sibling=L,k=L);return e&&w.forEach(function(H){return t(p,H)}),V&&jt(p,j),v}function E(p,c,f,y){var v=mn(f);if(typeof v!="function")throw Error(x(150));if(f=v.call(f),f==null)throw Error(x(151));for(var k=v=null,w=c,j=c=0,L=null,C=f.next();w!==null&&!C.done;j++,C=f.next()){w.index>j?(L=w,w=null):L=w.sibling;var H=h(p,w,C.value,y);if(H===null){w===null&&(w=L);break}e&&w&&H.alternate===null&&t(p,w),c=o(H,c,j),k===null?v=H:k.sibling=H,k=H,w=L}if(C.done)return n(p,w),V&&jt(p,j),v;if(w===null){for(;!C.done;j++,C=f.next())C=m(p,C.value,y),C!==null&&(c=o(C,c,j),k===null?v=C:k.sibling=C,k=C);return V&&jt(p,j),v}for(w=r(p,w);!C.done;j++,C=f.next())C=S(w,p,j,C.value,y),C!==null&&(e&&C.alternate!==null&&w.delete(C.key===null?j:C.key),c=o(C,c,j),k===null?v=C:k.sibling=C,k=C);return e&&w.forEach(function(X){return t(p,X)}),V&&jt(p,j),v}function F(p,c,f,y){if(typeof f=="object"&&f!==null&&f.type===At&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ir:e:{for(var v=f.key,k=c;k!==null;){if(k.key===v){if(v=f.type,v===At){if(k.tag===7){n(p,k.sibling),c=l(k,f.props.children),c.return=p,p=c;break e}}else if(k.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===nt&&js(v)===k.type){n(p,k.sibling),c=l(k,f.props),c.ref=xn(p,k,f),c.return=p,p=c;break e}n(p,k);break}else t(p,k);k=k.sibling}f.type===At?(c=Pt(f.props.children,p.mode,y,f.key),c.return=p,p=c):(y=Dr(f.type,f.key,f.props,null,p.mode,y),y.ref=xn(p,c,f),y.return=p,p=y)}return i(p);case $t:e:{for(k=f.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=l(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Xl(f,p.mode,y),c.return=p,p=c}return i(p);case nt:return k=f._init,F(p,c,k(f._payload),y)}if(jn(f))return N(p,c,f,y);if(mn(f))return E(p,c,f,y);vr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,f),c.return=p,p=c):(n(p,c),c=Yl(f,p.mode,y),c.return=p,p=c),i(p)):n(p,c)}return F}var sn=au(!0),uu=au(!1),Kr=xt(null),Yr=null,Yt=null,fi=null;function mi(){fi=Yt=Yr=null}function hi(e){var t=Kr.current;A(Kr),e._currentValue=t}function zo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tn(e,t){Yr=e,fi=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(fi!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(Yr===null)throw Error(x(308));Yt=e,Yr.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var Ct=null;function gi(e){Ct===null?Ct=[e]:Ct.push(e)}function cu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,gi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function vi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Je(e,n)}return l=r.interleaved,l===null?(t.next=t,gi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Je(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ni(e,n)}}function Ns(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xr(e,t,n,r){var l=e.updateQueue;rt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,i===null?o=d:i.next=d,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=u))}if(o!==null){var m=l.baseState;i=0,g=d=u=null,s=o;do{var h=s.lane,S=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,E=s;switch(h=t,S=n,E.tag){case 1:if(N=E.payload,typeof N=="function"){m=N.call(S,m,h);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=E.payload,h=typeof N=="function"?N.call(S,m,h):N,h==null)break e;m=B({},m,h);break e;case 2:rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else S={eventTime:S,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=S,u=m):g=g.next=S,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(1);if(g===null&&(u=m),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Dt|=i,e.lanes=i,e.memoizedState=m}}function Es(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var nr={},We=xt(nr),Qn=xt(nr),Kn=xt(nr);function zt(e){if(e===nr)throw Error(x(174));return e}function yi(e,t){switch(U(Kn,t),U(Qn,e),U(We,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:io(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=io(t,e)}A(We),U(We,t)}function an(){A(We),A(Qn),A(Kn)}function pu(e){zt(Kn.current);var t=zt(We.current),n=io(t,e.type);t!==n&&(U(Qn,e),U(We,n))}function xi(e){Qn.current===e&&(A(We),A(Qn))}var b=xt(0);function Gr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function ki(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var _r=et.ReactCurrentDispatcher,bl=et.ReactCurrentBatchConfig,Mt=0,W=null,Z=null,ee=null,Zr=!1,Tn=!1,Yn=0,lp=0;function oe(){throw Error(x(321))}function wi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Si(e,t,n,r,l,o){if(Mt=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_r.current=e===null||e.memoizedState===null?ap:up,e=n(r,l),Tn){o=0;do{if(Tn=!1,Yn=0,25<=o)throw Error(x(301));o+=1,ee=Z=null,t.updateQueue=null,_r.current=cp,e=n(r,l)}while(Tn)}if(_r.current=Jr,t=Z!==null&&Z.next!==null,Mt=0,ee=Z=W=null,Zr=!1,t)throw Error(x(300));return e}function ji(){var e=Yn!==0;return Yn=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?W.memoizedState=ee=e:ee=ee.next=e,ee}function Te(){if(Z===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ee===null?W.memoizedState:ee.next;if(t!==null)ee=t,Z=e;else{if(e===null)throw Error(x(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ee===null?W.memoizedState=ee=e:ee=ee.next=e}return ee}function Xn(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=Te(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=Z,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,d=o;do{var g=d.lane;if((Mt&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=m,i=r):u=u.next=m,W.lanes|=g,Dt|=g}d=d.next}while(d!==null&&d!==o);u===null?i=r:u.next=s,Ue(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,W.lanes|=o,Dt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=Te(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ue(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fu(){}function mu(e,t){var n=W,r=Te(),l=t(),o=!Ue(r.memoizedState,l);if(o&&(r.memoizedState=l,me=!0),r=r.queue,Ni(vu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Gn(9,gu.bind(null,n,r,l,t),void 0,null),te===null)throw Error(x(349));Mt&30||hu(n,t,l)}return l}function hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gu(e,t,n,r){t.value=n,t.getSnapshot=r,yu(t)&&xu(e)}function vu(e,t,n){return n(function(){yu(t)&&xu(e)})}function yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function xu(e){var t=Je(e,1);t!==null&&Fe(t,e,1,-1)}function Cs(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=sp.bind(null,W,e),[t.memoizedState,e]}function Gn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ku(){return Te().memoizedState}function Pr(e,t,n,r){var l=He();W.flags|=e,l.memoizedState=Gn(1|t,n,void 0,r===void 0?null:r)}function dl(e,t,n,r){var l=Te();r=r===void 0?null:r;var o=void 0;if(Z!==null){var i=Z.memoizedState;if(o=i.destroy,r!==null&&wi(r,i.deps)){l.memoizedState=Gn(t,n,o,r);return}}W.flags|=e,l.memoizedState=Gn(1|t,n,o,r)}function zs(e,t){return Pr(8390656,8,e,t)}function Ni(e,t){return dl(2048,8,e,t)}function wu(e,t){return dl(4,2,e,t)}function Su(e,t){return dl(4,4,e,t)}function ju(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nu(e,t,n){return n=n!=null?n.concat([e]):null,dl(4,4,ju.bind(null,t,e),n)}function Ei(){}function Eu(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cu(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zu(e,t,n){return Mt&21?(Ue(n,t)||(n=Ma(),W.lanes|=n,Dt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function op(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=bl.transition;bl.transition={};try{e(!1),t()}finally{I=n,bl.transition=r}}function _u(){return Te().memoizedState}function ip(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pu(e))Lu(t,n);else if(n=cu(e,t,n,r),n!==null){var l=ce();Fe(n,e,r,l),Tu(n,t,r)}}function sp(e,t,n){var r=mt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))Lu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Ue(s,i)){var u=t.interleaved;u===null?(l.next=l,gi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=cu(e,t,l,r),n!==null&&(l=ce(),Fe(n,e,r,l),Tu(n,t,r))}}function Pu(e){var t=e.alternate;return e===W||t!==null&&t===W}function Lu(e,t){Tn=Zr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ni(e,n)}}var Jr={readContext:Le,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},ap={readContext:Le,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:zs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4194308,4,ju.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ip.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Cs,useDebugValue:Ei,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Cs(!1),t=e[0];return e=op.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=He();if(V){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),te===null)throw Error(x(349));Mt&30||hu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,zs(vu.bind(null,r,o,e),[e]),r.flags|=2048,Gn(9,gu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=He(),t=te.identifierPrefix;if(V){var n=Ye,r=Ke;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},up={readContext:Le,useCallback:Eu,useContext:Le,useEffect:Ni,useImperativeHandle:Nu,useInsertionEffect:wu,useLayoutEffect:Su,useMemo:Cu,useReducer:Wl,useRef:ku,useState:function(){return Wl(Xn)},useDebugValue:Ei,useDeferredValue:function(e){var t=Te();return zu(t,Z.memoizedState,e)},useTransition:function(){var e=Wl(Xn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:mu,useId:_u,unstable_isNewReconciler:!1},cp={readContext:Le,useCallback:Eu,useContext:Le,useEffect:Ni,useImperativeHandle:Nu,useInsertionEffect:wu,useLayoutEffect:Su,useMemo:Cu,useReducer:Bl,useRef:ku,useState:function(){return Bl(Xn)},useDebugValue:Ei,useDeferredValue:function(e){var t=Te();return Z===null?t.memoizedState=e:zu(t,Z.memoizedState,e)},useTransition:function(){var e=Bl(Xn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:mu,useId:_u,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _o(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pl={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),l=mt(e),o=Xe(r,l);o.payload=t,n!=null&&(o.callback=n),t=pt(e,o,l),t!==null&&(Fe(t,e,l,r),zr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),l=mt(e),o=Xe(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pt(e,o,l),t!==null&&(Fe(t,e,l,r),zr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=mt(e),l=Xe(n,r);l.tag=2,t!=null&&(l.callback=t),t=pt(e,l,r),t!==null&&(Fe(t,e,r,n),zr(t,e,r))}};function _s(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Vn(n,r)||!Vn(l,o):!0}function Mu(e,t,n){var r=!1,l=vt,o=t.contextType;return typeof o=="object"&&o!==null?o=Le(o):(l=ge(t)?Lt:ae.current,r=t.contextTypes,o=(r=r!=null)?ln(e,l):vt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ps(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function Po(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},vi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Le(o):(o=ge(t)?Lt:ae.current,l.context=ln(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_o(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&pl.enqueueReplaceState(l,l.state,null),Xr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function un(e,t){try{var n="",r=t;do n+=Uc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Lo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dp=typeof WeakMap=="function"?WeakMap:Map;function Du(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){el||(el=!0,Ao=r),Lo(e,t)},n}function Ru(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Lo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Lo(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ls(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ep.bind(null,e,t,n),t.then(e,e))}function Ts(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ms(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var pp=et.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?uu(t,null,n,r):sn(t,e.child,n,r)}function Ds(e,t,n,r,l){n=n.render;var o=t.ref;return tn(t,l),r=Si(e,t,n,r,o,l),n=ji(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):(V&&n&&ci(t),t.flags|=1,ue(e,t,r,l),t.child)}function Rs(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Di(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ou(e,t,o,r,l)):(e=Dr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vn,n(i,r)&&e.ref===t.ref)return qe(e,t,l)}return t.flags|=1,e=ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Vn(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,qe(e,t,l)}return To(e,t,n,r,l)}function Iu(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Gt,ke),ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Gt,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(Gt,ke),ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(Gt,ke),ke|=r;return ue(e,t,l,n),t.child}function Fu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function To(e,t,n,r,l){var o=ge(n)?Lt:ae.current;return o=ln(t,o),tn(t,l),n=Si(e,t,n,r,o,l),r=ji(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):(V&&r&&ci(t),t.flags|=1,ue(e,t,n,l),t.child)}function Os(e,t,n,r,l){if(ge(n)){var o=!0;Wr(t)}else o=!1;if(tn(t,l),t.stateNode===null)Lr(e,t),Mu(t,n,r),Po(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Le(d):(d=ge(n)?Lt:ae.current,d=ln(t,d));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ps(t,i,r,d),rt=!1;var h=t.memoizedState;i.state=h,Xr(t,r,i,l),u=t.memoizedState,s!==r||h!==u||he.current||rt?(typeof g=="function"&&(_o(t,n,g,r),u=t.memoizedState),(s=rt||_s(t,n,s,r,h,u,d))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,du(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:De(t.type,s),i.props=d,m=t.pendingProps,h=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=ge(n)?Lt:ae.current,u=ln(t,u));var S=n.getDerivedStateFromProps;(g=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||h!==u)&&Ps(t,i,r,u),rt=!1,h=t.memoizedState,i.state=h,Xr(t,r,i,l);var N=t.memoizedState;s!==m||h!==N||he.current||rt?(typeof S=="function"&&(_o(t,n,S,r),N=t.memoizedState),(d=rt||_s(t,n,d,r,h,N,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Mo(e,t,n,r,o,l)}function Mo(e,t,n,r,l,o){Fu(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&ks(t,n,!1),qe(e,t,o);r=t.stateNode,pp.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=sn(t,e.child,null,o),t.child=sn(t,null,s,o)):ue(e,t,s,o),t.memoizedState=r.state,l&&ks(t,n,!0),t.child}function Uu(e){var t=e.stateNode;t.pendingContext?xs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xs(e,t.context,!1),yi(e,t.containerInfo)}function Is(e,t,n,r,l){return on(),pi(l),t.flags|=256,ue(e,t,n,r),t.child}var Do={dehydrated:null,treeContext:null,retryLane:0};function Ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function $u(e,t,n){var r=t.pendingProps,l=b.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(b,l&1),e===null)return Co(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=hl(i,r,0,null),e=Pt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ro(n),t.memoizedState=Do,e):Ci(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return fp(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ht(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=ht(s,o):(o=Pt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Ro(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Do,r}return o=e.child,e=o.sibling,r=ht(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ci(e,t){return t=hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yr(e,t,n,r){return r!==null&&pi(r),sn(t,e.child,null,n),e=Ci(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(x(422))),yr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=hl({mode:"visible",children:r.children},l,0,null),o=Pt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&sn(t,e.child,null,i),t.child.memoizedState=Ro(i),t.memoizedState=Do,o);if(!(t.mode&1))return yr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(x(419)),r=Ql(o,r,void 0),yr(e,t,i,r)}if(s=(i&e.childLanes)!==0,me||s){if(r=te,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Je(e,l),Fe(r,e,l,-1))}return Mi(),r=Ql(Error(x(421))),yr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Cp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,we=dt(l.nextSibling),Se=t,V=!0,Oe=null,e!==null&&(Ce[ze++]=Ke,Ce[ze++]=Ye,Ce[ze++]=Tt,Ke=e.id,Ye=e.overflow,Tt=t),t=Ci(t,r.children),t.flags|=4096,t)}function Fs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zo(e.return,t,n)}function Kl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Au(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ue(e,t,r.children,n),r=b.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fs(e,n,t);else if(e.tag===19)Fs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(b,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Gr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Kl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Gr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Kl(t,!0,n,null,o);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mp(e,t,n){switch(t.tag){case 3:Uu(t),on();break;case 5:pu(t);break;case 1:ge(t.type)&&Wr(t);break;case 4:yi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(Kr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(b,b.current&1),t.flags|=128,null):n&t.child.childLanes?$u(e,t,n):(U(b,b.current&1),e=qe(e,t,n),e!==null?e.sibling:null);U(b,b.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Au(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(b,b.current),r)break;return null;case 22:case 23:return t.lanes=0,Iu(e,t,n)}return qe(e,t,n)}var Hu,Oo,Vu,bu;Hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oo=function(){};Vu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,zt(We.current);var o=null;switch(n){case"input":l=no(e,l),r=no(e,r),o=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),o=[];break;case"textarea":l=oo(e,l),r=oo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}so(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(On.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(On.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&$("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function kn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hp(e,t,n){var r=t.pendingProps;switch(di(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ge(t.type)&&br(),ie(t),null;case 3:return r=t.stateNode,an(),A(he),A(ae),ki(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(bo(Oe),Oe=null))),Oo(e,t),ie(t),null;case 5:xi(t);var l=zt(Kn.current);if(n=t.type,e!==null&&t.stateNode!=null)Vu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return ie(t),null}if(e=zt(We.current),gr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ve]=t,r[Bn]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(l=0;l<En.length;l++)$(En[l],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Qi(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Yi(r,o),$("invalid",r)}so(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&hr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&hr(r.textContent,s,e),l=["children",""+s]):On.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&$("scroll",r)}switch(n){case"input":sr(r),Ki(r,o,!0);break;case"textarea":sr(r),Xi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=va(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ve]=t,e[Bn]=r,Hu(e,t,!1,!1),t.stateNode=e;e:{switch(i=ao(n,r),n){case"dialog":$("cancel",e),$("close",e),l=r;break;case"iframe":case"object":case"embed":$("load",e),l=r;break;case"video":case"audio":for(l=0;l<En.length;l++)$(En[l],e);l=r;break;case"source":$("error",e),l=r;break;case"img":case"image":case"link":$("error",e),$("load",e),l=r;break;case"details":$("toggle",e),l=r;break;case"input":Qi(e,r),l=no(e,r),$("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),$("invalid",e);break;case"textarea":Yi(e,r),l=oo(e,r),$("invalid",e);break;default:l=r}so(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?ka(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ya(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(On.hasOwnProperty(o)?u!=null&&o==="onScroll"&&$("scroll",e):u!=null&&Go(e,o,u,i))}switch(n){case"input":sr(e),Ki(e,r,!1);break;case"textarea":sr(e),Xi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=zt(Kn.current),zt(We.current),gr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(o=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return ie(t),null;case 13:if(A(b),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&we!==null&&t.mode&1&&!(t.flags&128))su(),on(),t.flags|=98560,o=!1;else if(o=gr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[Ve]=t}else on(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),o=!1}else Oe!==null&&(bo(Oe),Oe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||b.current&1?J===0&&(J=3):Mi())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return an(),Oo(e,t),e===null&&bn(t.stateNode.containerInfo),ie(t),null;case 10:return hi(t.type._context),ie(t),null;case 17:return ge(t.type)&&br(),ie(t),null;case 19:if(A(b),o=t.memoizedState,o===null)return ie(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)kn(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Gr(e),i!==null){for(t.flags|=128,kn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(b,b.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>cn&&(t.flags|=128,r=!0,kn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Gr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!V)return ie(t),null}else 2*Y()-o.renderingStartTime>cn&&n!==1073741824&&(t.flags|=128,r=!0,kn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=b.current,U(b,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Ti(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function gp(e,t){switch(di(t),t.tag){case 1:return ge(t.type)&&br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return an(),A(he),A(ae),ki(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xi(t),null;case 13:if(A(b),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));on()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(b),null;case 4:return an(),null;case 10:return hi(t.type._context),null;case 22:case 23:return Ti(),null;case 24:return null;default:return null}}var xr=!1,se=!1,vp=typeof WeakSet=="function"?WeakSet:Set,z=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Io(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Us=!1;function yp(e,t){if(xo=$r,e=Ya(),ui(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,d=0,g=0,m=e,h=null;t:for(;;){for(var S;m!==n||l!==0&&m.nodeType!==3||(s=i+l),m!==o||r!==0&&m.nodeType!==3||(u=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(S=m.firstChild)!==null;)h=m,m=S;for(;;){if(m===e)break t;if(h===n&&++d===l&&(s=i),h===o&&++g===r&&(u=i),(S=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ko={focusedElem:e,selectionRange:n},$r=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var E=N.memoizedProps,F=N.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?E:De(t.type,E),F);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){Q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return N=Us,Us=!1,N}function Mn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Io(t,n,o)}l=l.next}while(l!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Bn],delete t[jo],delete t[ep],delete t[tp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function $s(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(Uo(e,t,n),e=e.sibling;e!==null;)Uo(e,t,n),e=e.sibling}function $o(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($o(e,t,n),e=e.sibling;e!==null;)$o(e,t,n),e=e.sibling}var ne=null,Re=!1;function tt(e,t,n){for(n=n.child;n!==null;)Qu(e,t,n),n=n.sibling}function Qu(e,t,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:se||Xt(n,t);case 6:var r=ne,l=Re;ne=null,tt(e,t,n),ne=r,Re=l,ne!==null&&(Re?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Re?(e=ne,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),An(e)):Al(ne,n.stateNode));break;case 4:r=ne,l=Re,ne=n.stateNode.containerInfo,Re=!0,tt(e,t,n),ne=r,Re=l;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Io(n,t,i),l=l.next}while(l!==r)}tt(e,t,n);break;case 1:if(!se&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Q(n,t,s)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,tt(e,t,n),se=r):tt(e,t,n);break;default:tt(e,t,n)}}function As(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vp),t.forEach(function(r){var l=zp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,Re=!1;break e;case 3:ne=s.stateNode.containerInfo,Re=!0;break e;case 4:ne=s.stateNode.containerInfo,Re=!0;break e}s=s.return}if(ne===null)throw Error(x(160));Qu(o,i,l),ne=null,Re=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){Q(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ku(t,e),t=t.sibling}function Ku(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ae(e),r&4){try{Mn(3,e,e.return),fl(3,e)}catch(E){Q(e,e.return,E)}try{Mn(5,e,e.return)}catch(E){Q(e,e.return,E)}}break;case 1:Me(t,e),Ae(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(Me(t,e),Ae(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(E){Q(e,e.return,E)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ha(l,o),ao(s,i);var d=ao(s,o);for(i=0;i<u.length;i+=2){var g=u[i],m=u[i+1];g==="style"?ka(l,m):g==="dangerouslySetInnerHTML"?ya(l,m):g==="children"?In(l,m):Go(l,g,m,d)}switch(s){case"input":ro(l,o);break;case"textarea":ga(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Zt(l,!!o.multiple,S,!1):h!==!!o.multiple&&(o.defaultValue!=null?Zt(l,!!o.multiple,o.defaultValue,!0):Zt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Bn]=o}catch(E){Q(e,e.return,E)}}break;case 6:if(Me(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(E){Q(e,e.return,E)}}break;case 3:if(Me(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{An(t.containerInfo)}catch(E){Q(e,e.return,E)}break;case 4:Me(t,e),Ae(e);break;case 13:Me(t,e),Ae(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Pi=Y())),r&4&&As(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(se=(d=se)||g,Me(t,e),se=d):Me(t,e),Ae(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(z=e,g=e.child;g!==null;){for(m=z=g;z!==null;){switch(h=z,S=h.child,h.tag){case 0:case 11:case 14:case 15:Mn(4,h,h.return);break;case 1:Xt(h,h.return);var N=h.stateNode;if(typeof N.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(E){Q(r,n,E)}}break;case 5:Xt(h,h.return);break;case 22:if(h.memoizedState!==null){Vs(m);continue}}S!==null?(S.return=h,z=S):Vs(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{l=m.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,u=m.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=xa("display",i))}catch(E){Q(e,e.return,E)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(E){Q(e,e.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(t,e),Ae(e),r&4&&As(e);break;case 21:break;default:Me(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bu(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var o=$s(e);$o(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=$s(e);Uo(e,s,i);break;default:throw Error(x(161))}}catch(u){Q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e,t,n){z=e,Yu(e)}function Yu(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var l=z,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||xr;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||se;s=xr;var d=se;if(xr=i,(se=u)&&!d)for(z=l;z!==null;)i=z,u=i.child,i.tag===22&&i.memoizedState!==null?bs(l):u!==null?(u.return=i,z=u):bs(l);for(;o!==null;)z=o,Yu(o),o=o.sibling;z=l,xr=s,se=d}Hs(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,z=o):Hs(e)}}function Hs(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Es(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Es(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&An(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}se||t.flags&512&&Fo(t)}catch(h){Q(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Vs(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function bs(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(u){Q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Q(t,l,u)}}var o=t.return;try{Fo(t)}catch(u){Q(t,o,u)}break;case 5:var i=t.return;try{Fo(t)}catch(u){Q(t,i,u)}}}catch(u){Q(t,t.return,u)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var kp=Math.ceil,qr=et.ReactCurrentDispatcher,zi=et.ReactCurrentOwner,Pe=et.ReactCurrentBatchConfig,D=0,te=null,G=null,re=0,ke=0,Gt=xt(0),J=0,Zn=null,Dt=0,ml=0,_i=0,Dn=null,fe=null,Pi=0,cn=1/0,Be=null,el=!1,Ao=null,ft=null,kr=!1,st=null,tl=0,Rn=0,Ho=null,Tr=-1,Mr=0;function ce(){return D&6?Y():Tr!==-1?Tr:Tr=Y()}function mt(e){return e.mode&1?D&2&&re!==0?re&-re:rp.transition!==null?(Mr===0&&(Mr=Ma()),Mr):(e=I,e!==0||(e=window.event,e=e===void 0?16:$a(e.type)),e):1}function Fe(e,t,n,r){if(50<Rn)throw Rn=0,Ho=null,Error(x(185));qn(e,n,r),(!(D&2)||e!==te)&&(e===te&&(!(D&2)&&(ml|=n),J===4&&ot(e,re)),ve(e,r),n===1&&D===0&&!(t.mode&1)&&(cn=Y()+500,cl&&kt()))}function ve(e,t){var n=e.callbackNode;rd(e,t);var r=Ur(e,e===te?re:0);if(r===0)n!==null&&Ji(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ji(n),t===1)e.tag===0?np(Ws.bind(null,e)):lu(Ws.bind(null,e)),Jd(function(){!(D&6)&&kt()}),n=null;else{switch(Da(r)){case 1:n=ti;break;case 4:n=La;break;case 16:n=Fr;break;case 536870912:n=Ta;break;default:n=Fr}n=nc(n,Xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xu(e,t){if(Tr=-1,Mr=0,D&6)throw Error(x(327));var n=e.callbackNode;if(nn()&&e.callbackNode!==n)return null;var r=Ur(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=nl(e,r);else{t=r;var l=D;D|=2;var o=Zu();(te!==e||re!==t)&&(Be=null,cn=Y()+500,_t(e,t));do try{jp();break}catch(s){Gu(e,s)}while(1);mi(),qr.current=o,D=l,G!==null?t=0:(te=null,re=0,t=J)}if(t!==0){if(t===2&&(l=mo(e),l!==0&&(r=l,t=Vo(e,l))),t===1)throw n=Zn,_t(e,0),ot(e,r),ve(e,Y()),n;if(t===6)ot(e,r);else{if(l=e.current.alternate,!(r&30)&&!wp(l)&&(t=nl(e,r),t===2&&(o=mo(e),o!==0&&(r=o,t=Vo(e,o))),t===1))throw n=Zn,_t(e,0),ot(e,r),ve(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Nt(e,fe,Be);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=Pi+500-Y(),10<t)){if(Ur(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=So(Nt.bind(null,e,fe,Be),t);break}Nt(e,fe,Be);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Ie(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kp(r/1960))-r,10<r){e.timeoutHandle=So(Nt.bind(null,e,fe,Be),r);break}Nt(e,fe,Be);break;case 5:Nt(e,fe,Be);break;default:throw Error(x(329))}}}return ve(e,Y()),e.callbackNode===n?Xu.bind(null,e):null}function Vo(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=nl(e,t),e!==2&&(t=fe,fe=n,t!==null&&bo(t)),e}function bo(e){fe===null?fe=e:fe.push.apply(fe,e)}function wp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ue(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~_i,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function Ws(e){if(D&6)throw Error(x(327));nn();var t=Ur(e,0);if(!(t&1))return ve(e,Y()),null;var n=nl(e,t);if(e.tag!==0&&n===2){var r=mo(e);r!==0&&(t=r,n=Vo(e,r))}if(n===1)throw n=Zn,_t(e,0),ot(e,t),ve(e,Y()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,fe,Be),ve(e,Y()),null}function Li(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(cn=Y()+500,cl&&kt())}}function Rt(e){st!==null&&st.tag===0&&!(D&6)&&nn();var t=D;D|=1;var n=Pe.transition,r=I;try{if(Pe.transition=null,I=1,e)return e()}finally{I=r,Pe.transition=n,D=t,!(D&6)&&kt()}}function Ti(){ke=Gt.current,A(Gt)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zd(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(di(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&br();break;case 3:an(),A(he),A(ae),ki();break;case 5:xi(r);break;case 4:an();break;case 13:A(b);break;case 19:A(b);break;case 10:hi(r.type._context);break;case 22:case 23:Ti()}n=n.return}if(te=e,G=e=ht(e.current,null),re=ke=t,J=0,Zn=null,_i=ml=Dt=0,fe=Dn=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Ct=null}return e}function Gu(e,t){do{var n=G;try{if(mi(),_r.current=Jr,Zr){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Zr=!1}if(Mt=0,ee=Z=W=null,Tn=!1,Yn=0,zi.current=null,n===null||n.return===null){J=1,Zn=t,G=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=re,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var S=Ts(i);if(S!==null){S.flags&=-257,Ms(S,i,s,o,t),S.mode&1&&Ls(o,d,t),t=S,u=d;var N=t.updateQueue;if(N===null){var E=new Set;E.add(u),t.updateQueue=E}else N.add(u);break e}else{if(!(t&1)){Ls(o,d,t),Mi();break e}u=Error(x(426))}}else if(V&&s.mode&1){var F=Ts(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ms(F,i,s,o,t),pi(un(u,s));break e}}o=u=un(u,s),J!==4&&(J=2),Dn===null?Dn=[o]:Dn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Du(o,u,t);Ns(o,p);break e;case 1:s=u;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ft===null||!ft.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Ru(o,s,t);Ns(o,y);break e}}o=o.return}while(o!==null)}qu(n)}catch(v){t=v,G===n&&n!==null&&(G=n=n.return);continue}break}while(1)}function Zu(){var e=qr.current;return qr.current=Jr,e===null?Jr:e}function Mi(){(J===0||J===3||J===2)&&(J=4),te===null||!(Dt&268435455)&&!(ml&268435455)||ot(te,re)}function nl(e,t){var n=D;D|=2;var r=Zu();(te!==e||re!==t)&&(Be=null,_t(e,t));do try{Sp();break}catch(l){Gu(e,l)}while(1);if(mi(),D=n,qr.current=r,G!==null)throw Error(x(261));return te=null,re=0,J}function Sp(){for(;G!==null;)Ju(G)}function jp(){for(;G!==null&&!Yc();)Ju(G)}function Ju(e){var t=tc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?qu(e):G=t,zi.current=null}function qu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gp(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,G=null;return}}else if(n=hp(n,t,ke),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);J===0&&(J=5)}function Nt(e,t,n){var r=I,l=Pe.transition;try{Pe.transition=null,I=1,Np(e,t,n,r)}finally{Pe.transition=l,I=r}return null}function Np(e,t,n,r){do nn();while(st!==null);if(D&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ld(e,o),e===te&&(G=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kr||(kr=!0,nc(Fr,function(){return nn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var i=I;I=1;var s=D;D|=4,zi.current=null,yp(e,n),Ku(n,e),Wd(ko),$r=!!xo,ko=xo=null,e.current=n,xp(n),Xc(),D=s,I=i,Pe.transition=o}else e.current=n;if(kr&&(kr=!1,st=e,tl=l),o=e.pendingLanes,o===0&&(ft=null),Jc(n.stateNode),ve(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(el)throw el=!1,e=Ao,Ao=null,e;return tl&1&&e.tag!==0&&nn(),o=e.pendingLanes,o&1?e===Ho?Rn++:(Rn=0,Ho=e):Rn=0,kt(),null}function nn(){if(st!==null){var e=Da(tl),t=Pe.transition,n=I;try{if(Pe.transition=null,I=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,tl=0,D&6)throw Error(x(331));var l=D;for(D|=4,z=e.current;z!==null;){var o=z,i=o.child;if(z.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(z=d;z!==null;){var g=z;switch(g.tag){case 0:case 11:case 15:Mn(8,g,o)}var m=g.child;if(m!==null)m.return=g,z=m;else for(;z!==null;){g=z;var h=g.sibling,S=g.return;if(Wu(g),g===d){z=null;break}if(h!==null){h.return=S,z=h;break}z=S}}}var N=o.alternate;if(N!==null){var E=N.child;if(E!==null){N.child=null;do{var F=E.sibling;E.sibling=null,E=F}while(E!==null)}}z=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,z=i;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,z=p;break e}z=o.return}}var c=e.current;for(z=c;z!==null;){i=z;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,z=f;else e:for(i=c;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fl(9,s)}}catch(v){Q(s,s.return,v)}if(s===i){z=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,z=y;break e}z=s.return}}if(D=l,kt(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{I=n,Pe.transition=t}}return!1}function Bs(e,t,n){t=un(n,t),t=Du(e,t,1),e=pt(e,t,1),t=ce(),e!==null&&(qn(e,1,t),ve(e,t))}function Q(e,t,n){if(e.tag===3)Bs(e,e,n);else for(;t!==null;){if(t.tag===3){Bs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=un(n,e),e=Ru(t,e,1),t=pt(t,e,1),e=ce(),t!==null&&(qn(t,1,e),ve(t,e));break}}t=t.return}}function Ep(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>Y()-Pi?_t(e,0):_i|=n),ve(e,t)}function ec(e,t){t===0&&(e.mode&1?(t=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):t=1);var n=ce();e=Je(e,t),e!==null&&(qn(e,t,n),ve(e,n))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ec(e,n)}function zp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),ec(e,n)}var tc;tc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,mp(e,t,n);me=!!(e.flags&131072)}else me=!1,V&&t.flags&1048576&&ou(t,Qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lr(e,t),e=t.pendingProps;var l=ln(t,ae.current);tn(t,n),l=Si(null,t,r,e,l,n);var o=ji();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(o=!0,Wr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,vi(t),l.updater=pl,t.stateNode=l,l._reactInternals=t,Po(t,r,e,n),t=Mo(null,t,r,!0,o,n)):(t.tag=0,V&&o&&ci(t),ue(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Pp(r),e=De(r,e),l){case 0:t=To(null,t,r,e,n);break e;case 1:t=Os(null,t,r,e,n);break e;case 11:t=Ds(null,t,r,e,n);break e;case 14:t=Rs(null,t,r,De(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:De(r,l),To(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:De(r,l),Os(e,t,r,l,n);case 3:e:{if(Uu(t),e===null)throw Error(x(387));r=t.pendingProps,o=t.memoizedState,l=o.element,du(e,t),Xr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=un(Error(x(423)),t),t=Is(e,t,r,n,l);break e}else if(r!==l){l=un(Error(x(424)),t),t=Is(e,t,r,n,l);break e}else for(we=dt(t.stateNode.containerInfo.firstChild),Se=t,V=!0,Oe=null,n=uu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(on(),r===l){t=qe(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return pu(t),e===null&&Co(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,wo(r,l)?i=null:o!==null&&wo(r,o)&&(t.flags|=32),Fu(e,t),ue(e,t,i,n),t.child;case 6:return e===null&&Co(t),null;case 13:return $u(e,t,n);case 4:return yi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:De(r,l),Ds(e,t,r,l,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,U(Kr,r._currentValue),r._currentValue=i,o!==null)if(Ue(o.value,i)){if(o.children===l.children&&!he.current){t=qe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Xe(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),zo(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(x(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),zo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ue(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,tn(t,n),l=Le(l),r=r(l),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,l=De(r,t.pendingProps),l=De(r.type,l),Rs(e,t,r,l,n);case 15:return Ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:De(r,l),Lr(e,t),t.tag=1,ge(r)?(e=!0,Wr(t)):e=!1,tn(t,n),Mu(t,r,l),Po(t,r,l,n),Mo(null,t,r,!0,e,n);case 19:return Au(e,t,n);case 22:return Iu(e,t,n)}throw Error(x(156,t.tag))};function nc(e,t){return Pa(e,t)}function _p(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new _p(e,t,n,r)}function Di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pp(e){if(typeof e=="function")return Di(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jo)return 11;if(e===qo)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Di(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case At:return Pt(n.children,l,o,t);case Zo:i=8,l|=8;break;case Jl:return e=_e(12,n,t,l|2),e.elementType=Jl,e.lanes=o,e;case ql:return e=_e(13,n,t,l),e.elementType=ql,e.lanes=o,e;case eo:return e=_e(19,n,t,l),e.elementType=eo,e.lanes=o,e;case pa:return hl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ca:i=10;break e;case da:i=9;break e;case Jo:i=11;break e;case qo:i=14;break e;case nt:i=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=_e(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Pt(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function hl(e,t,n,r){return e=_e(22,e,r,t),e.elementType=pa,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ri(e,t,n,r,l,o,i,s,u){return e=new Lp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vi(o),e}function Tp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rc(e){if(!e)return vt;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(ge(n))return ru(e,n,t)}return t}function lc(e,t,n,r,l,o,i,s,u){return e=Ri(n,r,!0,e,l,o,i,s,u),e.context=rc(null),n=e.current,r=ce(),l=mt(n),o=Xe(r,l),o.callback=t??null,pt(n,o,l),e.current.lanes=l,qn(e,l,r),ve(e,r),e}function gl(e,t,n,r){var l=t.current,o=ce(),i=mt(l);return n=rc(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(l,t,i),e!==null&&(Fe(e,l,i,o),zr(e,l,i)),i}function rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oi(e,t){Qs(e,t),(e=e.alternate)&&Qs(e,t)}function Mp(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ii(e){this._internalRoot=e}vl.prototype.render=Ii.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));gl(e,t,null,null)};vl.prototype.unmount=Ii.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){gl(null,e,null,null)}),t[Ze]=null}};function vl(e){this._internalRoot=e}vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ia();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&Ua(e)}};function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ks(){}function Dp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=rl(i);o.call(d)}}var i=lc(t,r,e,0,null,!1,!1,"",Ks);return e._reactRootContainer=i,e[Ze]=i.current,bn(e.nodeType===8?e.parentNode:e),Rt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=rl(u);s.call(d)}}var u=Ri(e,0,!1,null,null,!1,!1,"",Ks);return e._reactRootContainer=u,e[Ze]=u.current,bn(e.nodeType===8?e.parentNode:e),Rt(function(){gl(t,u,n,r)}),u}function xl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=rl(i);s.call(u)}}gl(t,i,e,l)}else i=Dp(n,t,e,l,r);return rl(i)}Ra=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(ni(t,n|1),ve(t,Y()),!(D&6)&&(cn=Y()+500,kt()))}break;case 13:Rt(function(){var r=Je(e,1);if(r!==null){var l=ce();Fe(r,e,1,l)}}),Oi(e,1)}};ri=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ce();Fe(t,e,134217728,n)}Oi(e,134217728)}};Oa=function(e){if(e.tag===13){var t=mt(e),n=Je(e,t);if(n!==null){var r=ce();Fe(n,e,t,r)}Oi(e,t)}};Ia=function(){return I};Fa=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};co=function(e,t,n){switch(t){case"input":if(ro(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ul(r);if(!l)throw Error(x(90));ma(r),ro(r,l)}}}break;case"textarea":ga(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};ja=Li;Na=Rt;var Rp={usingClientEntryPoint:!1,Events:[tr,Wt,ul,wa,Sa,Li]},wn={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Op={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=za(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{ol=wr.inject(Op),be=wr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fi(t))throw Error(x(200));return Tp(e,t,null,n)};Ne.createRoot=function(e,t){if(!Fi(e))throw Error(x(299));var n=!1,r="",l=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ri(e,1,!1,null,null,n,!1,r,l),e[Ze]=t.current,bn(e.nodeType===8?e.parentNode:e),new Ii(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=za(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Rt(e)};Ne.hydrate=function(e,t,n){if(!yl(t))throw Error(x(200));return xl(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Fi(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=oc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=lc(t,null,e,1,n??null,l,!1,o,i),e[Ze]=t.current,bn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new vl(t)};Ne.render=function(e,t,n){if(!yl(t))throw Error(x(200));return xl(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!yl(e))throw Error(x(40));return e._reactRootContainer?(Rt(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ne.unstable_batchedUpdates=Li;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return xl(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),ia.exports=Ne;var Ip=ia.exports,Ys=Ip;Gl.createRoot=Ys.createRoot,Gl.hydrateRoot=Ys.hydrateRoot;var Fp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Up=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$p=(e,t)=>{const n=R.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:i,children:s,...u},d)=>R.createElement("svg",{ref:d,...Fp,width:l,height:l,stroke:r,strokeWidth:i?Number(o)*24/Number(l):o,className:`lucide lucide-${Up(e)}`,...u},[...t.map(([g,m])=>R.createElement(g,m)),...(Array.isArray(s)?s:[s])||[]]));return n.displayName=`${e}`,n};var O=$p;const Ap=O("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Hp=O("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),Ui=O("CheckCircle2",[["path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",key:"14v8dr"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),$i=O("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Vp=O("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),bp=O("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]),Wp=O("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),Bp=O("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]),Qp=O("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),Kp=O("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),Yp=O("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),Xp=O("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),Gp=O("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Zp=O("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]),Jp=O("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),qp=O("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),ef=O("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]),tf=O("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),nf=O("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),rf=O("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]),lf=O("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),of=O("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),sf=O("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),af=O("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),sc=O("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),uf=O("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),cf=O("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),df=O("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),pf=O("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),ff=O("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),mf=({activeTab:e,setActiveTab:t,onLogout:n})=>{const r=[{id:"dashboard",label:"Dashboard",icon:Yp},{id:"events",label:"Eventos",icon:Hp},{id:"employees",label:"Funcionários",icon:pf},{id:"history",label:"Histórico",icon:Bp},{id:"settings",label:"Configurações",icon:af}];return a.jsxs("aside",{className:"sidebar",children:[a.jsxs("div",{className:"logo-container",children:[a.jsx("div",{className:"logo-icon",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("path",{d:"M4 4L12 12L4 20",stroke:"#F5A800",strokeWidth:"3",strokeLinecap:"round"}),a.jsx("path",{d:"M12 4L20 12L12 20",stroke:"#F5A800",strokeWidth:"3",strokeLinecap:"round",opacity:"0.6"})]})}),a.jsxs("div",{className:"logo-text-group",children:[a.jsx("h1",{className:"logo-text",children:"DECOM"}),a.jsx("span",{className:"logo-subtext",children:"Controle de Tarefas"})]})]}),a.jsx("nav",{className:"sidebar-nav",children:r.map(l=>a.jsxs("button",{className:`nav-item ${e===l.id?"active":""}`,onClick:()=>t(l.id),children:[a.jsx(l.icon,{size:18}),a.jsx("span",{children:l.label}),e===l.id&&a.jsx("div",{className:"active-indicator"})]},l.id))}),a.jsxs("div",{className:"sidebar-footer",children:[a.jsx("div",{className:"sidebar-divider"}),a.jsxs("button",{className:"btn-add-quick",onClick:()=>t("add-event"),children:[a.jsx(rf,{size:18}),a.jsx("span",{children:"Novo Evento"})]}),a.jsx("div",{className:"logout-section",children:a.jsxs("button",{className:"btn-logout-prominent",onClick:()=>{console.log("Logout clicked"),n&&n()},children:[a.jsx(Jp,{size:18}),a.jsx("span",{children:"Sair do Sistema"})]})})]}),a.jsx("style",{jsx:!0,children:`
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
      `})]})},hf=({title:e,motorActive:t,nextUpdate:n})=>{const[r,l]=R.useState(new Date);return R.useEffect(()=>{const o=setInterval(()=>l(new Date),1e3);return()=>clearInterval(o)},[]),a.jsxs("header",{className:"main-header",children:[a.jsx("div",{className:"header-left",children:a.jsx("h2",{className:"section-title",children:e})}),a.jsxs("div",{className:"header-right",children:[a.jsxs("div",{className:"motor-indicator",children:[a.jsx("div",{className:`status-dot ${t?"active animate-pulse-custom":""}`}),a.jsxs("div",{className:"motor-info",children:[a.jsx("span",{className:"motor-label",children:t?"Motor Ativo":"Motor Pausado"}),a.jsxs("span",{className:"motor-timer",children:["Próxima verificação em: ",n,"s"]})]})]}),a.jsx("div",{className:"vertical-divider"}),a.jsxs("div",{className:"time-display",children:[a.jsx($i,{size:16,className:"text-muted"}),a.jsx("span",{children:r.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"})})]})]}),a.jsx("style",{jsx:!0,children:`
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
      `})]})},ac=R.createContext(),xe="/api",Ft=()=>R.useContext(ac),gf=({children:e})=>{const[t,n]=R.useState([]),[r,l]=R.useState([]),[o,i]=R.useState([]),[s,u]=R.useState({productionUrl:"",testUrl:"",defaultMode:"production"}),[d,g]=R.useState(60),[m,h]=R.useState(!0);R.useEffect(()=>{(async()=>{try{const[k,w,j,L]=await Promise.all([fetch(`${xe}/events`),fetch(`${xe}/history`),fetch(`${xe}/employees`),fetch(`${xe}/settings/webhook_settings`)]);if(k.ok&&n(await k.json()),w.ok){const H=(await w.json()).map(X=>({id:X.id,eventId:X.event_id,eventName:X.event_name,timestamp:X.time,status:X.status,success:X.status==="Sucesso",response:X.response,triggerType:X.type,recipient:X.recipient}));l(H)}j.ok&&i(await j.json()),L.ok&&u(await L.json())}catch(k){console.error("Error fetching data from API:",k)}})()},[]);const S=async v=>{const k={...v,status:"Agendado",triggers:f(v.startDate,v.eventTime,v.options)};try{const w=await fetch(`${xe}/events`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)});if(w.ok){const j=await w.json();n(L=>[...L,j])}}catch(w){console.error("Error adding event:",w)}},N=async v=>{try{const k=await fetch(`${xe}/employees`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...v,id:void 0})});if(k.ok){const w=await k.json();i(j=>[...j,w])}}catch(k){console.error("Error adding employee:",k)}},E=async v=>{try{const k=await fetch(`${xe}/employees/${v}`,{method:"DELETE"});if(k.ok)i(w=>w.filter(j=>j.id!==v));else{const w=await k.json();alert(w.error||"Erro ao excluir funcionário")}}catch(k){console.error("Error deleting employee:",k),alert("Erro de conexão com o servidor")}},F=async v=>{try{(await fetch(`${xe}/events/${v}`,{method:"DELETE"})).ok&&n(w=>w.filter(j=>j.id!==v))}catch(k){console.error("Error deleting event:",k)}},p=async(v,k)=>{const j={...t.find(L=>L.id===v),...k};(k.startDate||k.eventTime||k.options)&&(j.triggers=f(j.startDate,j.eventTime,j.options),j.status="Agendado");try{const L=await fetch(`${xe}/events/${v}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)});if(L.ok){const C=await L.json();n(H=>H.map(X=>X.id===v?C:X))}}catch(L){console.error("Error updating event:",L)}},c=async v=>{try{(await fetch(`${xe}/settings/webhook_settings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)})).ok&&u(v)}catch(k){console.error("Error updating settings:",k)}},f=(v,k,w)=>{const j=new Date(`${v}T${k}`);return w.map(L=>{let C=new Date(j);switch(L){case"7d":C.setDate(C.getDate()-7);break;case"3d":C.setDate(C.getDate()-3);break;case"2d":C.setDate(C.getDate()-2);break;case"1d":C.setDate(C.getDate()-1);break;case"12h":C.setHours(C.getHours()-12);break;case"6h":C.setHours(C.getHours()-6);break;case"2h":C.setHours(C.getHours()-2);break;case"1h":C.setHours(C.getHours()-1);break;case"30m":C.setMinutes(C.getMinutes()-30);break;case"15m":C.setMinutes(C.getMinutes()-15);break;case"5m":C.setMinutes(C.getMinutes()-5);break;case"exact":break;default:if(L.startsWith("custom_")){const H=parseInt(L.split("_")[1]);C.setMinutes(C.getMinutes()-H)}}return{type:L,time:C.toISOString(),fired:!1}})},y=async(v,k)=>{const w=o.find(C=>C.id===v.employeeId);let j=v.webhookUrl;if(v.webhookMode==="production"?j=s.productionUrl:v.webhookMode==="test"&&(j=s.testUrl),!j)return console.error("No valid webhook URL found for event:",v.projectName),!1;const L={evento:v.projectName,data:v.startDate,hora:v.eventTime,local:v.location,observacao:v.observation,responsavel:v.responsible,funcionario_nome:w?w.name:"Não informado",funcionario_telefone:w?w.phone:"Não informado",tipo_disparo:k.type,timestamp_disparo:new Date().toISOString(),sistema:"DECOM - Controle de Tarefas"};try{const H=await(await fetch(`${xe}/webhooks/fire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({targetUrl:j,payload:L})})).json(),X={event_id:v.id,event_name:v.projectName,time:new Date().toISOString(),status:H.ok?"Sucesso":`Erro ${H.status||"Server"}`,response:H.ok?"Webhook disparado (via Server)":`Falha no disparo: ${H.statusText||H.error}`,type:k.type,recipient:j};try{await fetch(`${xe}/history`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(X)});const $e=await fetch(`${xe}/history`);if($e.ok){const wl=(await $e.json()).map(ye=>({id:ye.id,eventId:ye.event_id,eventName:ye.event_name,timestamp:ye.time,status:ye.status,success:ye.status==="Sucesso",response:ye.response,triggerType:ye.type,recipient:ye.recipient}));l(wl)}}catch($e){console.error("Error saving history:",$e)}return H.ok}catch(C){return console.error("Webhook firing error:",C),!1}};return R.useCallback(async()=>{},[]),R.useEffect(()=>{h(!1)},[]),a.jsx(ac.Provider,{value:{events:t,history:r,employees:o,webhookSettings:s,addEvent:S,deleteEvent:F,updateEvent:p,addEmployee:N,deleteEmployee:E,updateWebhookSettings:c,motorActive:m,setMotorActive:h,nextUpdate:d,fireWebhook:y},children:e})},vf=({onAddClick:e})=>{const{events:t,history:n}=Ft(),r=[{label:"Total de Eventos",value:t.length,icon:Kp,color:"var(--primary)",trend:"Ativos no sistema"},{label:"Agendados",value:t.filter(o=>o.status==="Agendado").length,icon:$i,color:"var(--primary)",trend:"Aguardando disparo"},{label:"Disparados Hoje",value:n.filter(o=>{if(!o.timestamp)return!1;const i=new Date(o.timestamp).toDateString(),s=new Date().toDateString();return i===s&&o.success}).length,icon:Ui,color:"var(--success)",trend:"Sucesso"},{label:"Erros Recentes",value:n.filter(o=>!o.success).length,icon:Ap,color:"var(--danger-soft)",trend:"Falhas registradas",urgent:!0}],l=n.slice(0,5);return a.jsxs("div",{className:"dashboard-container fade-in",children:[a.jsx("div",{className:"stats-grid",children:r.map((o,i)=>a.jsxs("div",{className:`stat-card ${o.urgent?"stat-urgent":""}`,style:{animationDelay:`${i*.1}s`},children:[a.jsxs("div",{className:"stat-header",children:[a.jsx("span",{className:"stat-label",children:o.label}),a.jsx(o.icon,{size:24,style:{color:o.color}})]}),a.jsx("div",{className:"stat-value",children:o.value}),a.jsxs("div",{className:"stat-footer",children:[a.jsx(uf,{size:12}),a.jsx("span",{children:o.trend})]})]},i))}),a.jsxs("div",{className:"dashboard-grid",children:[a.jsxs("div",{className:"dashboard-main",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h3",{className:"section-title",children:"Atividade Recente"}),a.jsx("button",{className:"btn-text",children:"Ver tudo"})]}),a.jsx("div",{className:"history-mini-list",children:l.length===0?a.jsx("div",{className:"empty-mini",children:"Nenhuma atividade recente registrada"}):l.map(o=>a.jsxs("div",{className:`history-card-mini ${o.success?"card-success":"card-error"}`,children:[a.jsxs("div",{className:"card-mini-header",children:[a.jsxs("div",{className:"card-mini-title-row",children:[a.jsx("span",{className:"card-mini-event",children:o.eventName}),a.jsx("span",{className:"card-mini-time",children:new Date(o.timestamp).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})})]}),a.jsx("div",{className:"card-mini-date",children:new Date(o.timestamp).toLocaleDateString("pt-BR")})]}),a.jsxs("div",{className:"card-mini-body",children:[a.jsxs("div",{className:"card-mini-line",children:[a.jsx("span",{className:"mini-label",children:"Para:"}),a.jsx("span",{className:"mini-value truncate",children:o.recipient||"URL não registrada"})]}),a.jsxs("div",{className:"card-mini-line",children:[a.jsx("span",{className:"mini-label",children:"Conteúdo:"}),a.jsxs("span",{className:"mini-value italic",children:['"',o.response,'"']})]})]}),a.jsxs("div",{className:"card-mini-footer",children:[a.jsx("span",{className:`mini-status-text ${o.success?"text-success":"text-danger"}`,children:o.success?"✓ Enviado com sucesso":"✕ Falha no envio"}),a.jsx("span",{className:"mini-trigger-type",children:o.triggerType})]})]},o.id))})]}),a.jsx("div",{className:"dashboard-side",children:a.jsxs("div",{className:"promo-card",children:[a.jsx("h4",{children:"Atalhos Rápidos"}),a.jsx("div",{className:"quick-actions-grid",children:a.jsxs("button",{className:"action-tile",onClick:e,children:[a.jsx(PlusCircle,{size:20}),a.jsx("span",{children:"Novo Evento"})]})})]})})]}),a.jsx("style",{jsx:!0,children:`
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
          border-left: 6px solid var(--success);
          background: linear-gradient(to right, rgba(29, 184, 119, 0.1), var(--bg-medium));
          box-shadow: 0 4px 12px rgba(29, 184, 119, 0.1);
        }

        .card-success:hover {
          box-shadow: 0 4px 15px rgba(29, 184, 119, 0.2);
          background: linear-gradient(to right, rgba(29, 184, 119, 0.15), var(--bg-medium));
        }

        .card-error {
          border-left: 6px solid var(--danger-soft);
          background: linear-gradient(to right, rgba(232, 64, 74, 0.1), var(--bg-medium));
          box-shadow: 0 4px 12px rgba(232, 64, 74, 0.1);
        }

        .card-error:hover {
          box-shadow: 0 4px 15px rgba(232, 64, 74, 0.2);
          background: linear-gradient(to right, rgba(232, 64, 74, 0.15), var(--bg-medium));
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
      `})]})},yf=({onEdit:e})=>{const{events:t,deleteEvent:n,fireWebhook:r}=Ft(),l=async s=>{const u={type:"Manual/Teste",time:new Date().toISOString(),fired:!0};await r(s,u),alert(`Disparo de teste enviado para: ${s.projectName}`)},o=s=>{switch(s){case"Agendado":return a.jsx("span",{className:"badge badge-scheduled",children:"Agendado"});case"Disparado":return a.jsx("span",{className:"badge badge-fired",children:"Disparado"});case"Erro":return a.jsx("span",{className:"badge badge-error",children:"Erro"});default:return a.jsx("span",{className:"badge badge-pending",children:"Pendente"})}},i=s=>{const u=s.find(g=>!g.fired);return u?new Date(u.time).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"Nenhum"};return a.jsxs("div",{className:"table-container fade-in",children:[a.jsxs("table",{className:"events-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Data/Hora"}),a.jsx("th",{children:"Evento"}),a.jsx("th",{children:"Local"}),a.jsx("th",{children:"Responsável"}),a.jsx("th",{children:"Próximo Disparo"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Ações"})]})}),a.jsx("tbody",{children:t.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:"7",className:"empty-state",children:"Nenhum evento agendado"})}):t.map(s=>a.jsxs("tr",{className:"event-row",children:[a.jsxs("td",{children:[a.jsx("div",{className:"cell-primary",children:s.startDate}),a.jsx("div",{className:"cell-secondary",children:s.eventTime})]}),a.jsxs("td",{children:[a.jsx("div",{className:"cell-primary",children:s.projectName}),a.jsxs("div",{className:"webhook-link",children:[a.jsx(Vp,{size:10}),a.jsx("span",{children:"Webhook configurado"})]})]}),a.jsx("td",{children:s.location}),a.jsx("td",{children:s.responsible}),a.jsx("td",{children:a.jsxs("div",{className:"upcoming-trigger",children:[a.jsx($i,{size:12,className:"text-primary"}),a.jsx("span",{children:i(s.triggers)})]})}),a.jsx("td",{children:o(s.status)}),a.jsxs("td",{className:"actions-cell",children:[a.jsx("button",{className:"btn-icon btn-test",title:"Disparo de Teste",onClick:()=>l(s),children:a.jsx(nf,{size:16})}),a.jsx("button",{className:"btn-icon btn-edit",title:"Editar",onClick:()=>e(s),children:a.jsx(ef,{size:16})}),a.jsx("button",{className:"btn-icon btn-delete",title:"Excluir",onClick:()=>n(s.id),children:a.jsx(sc,{size:16})})]})]},s.id))})]}),a.jsx("style",{jsx:!0,children:`
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
      `})]})},xf=()=>{const{history:e,fireWebhook:t,events:n}=Ft(),r=async l=>{const o=n.find(i=>i.id===l.eventId);if(o){const i=o.triggers.find(s=>s.type===l.triggerType);i&&await t(o,i)}};return a.jsxs("div",{className:"history-container fade-in",children:[a.jsx("div",{className:"history-timeline",children:e.length===0?a.jsxs("div",{className:"empty-history",children:[a.jsx(Qp,{size:40,className:"text-muted"}),a.jsx("p",{children:"Nenhum disparo realizado ainda."})]}):e.map((l,o)=>a.jsxs("div",{className:"timeline-item",children:[a.jsxs("div",{className:"timeline-marker",children:[a.jsx("div",{className:`marker-dot ${l.success?"marker-success":"marker-error"}`,children:l.success?a.jsx(Ui,{size:14}):a.jsx(ff,{size:14})}),o!==e.length-1&&a.jsx("div",{className:"marker-line"})]}),a.jsxs("div",{className:"timeline-content card-rich",children:[a.jsxs("div",{className:`history-card-header ${l.success?"bg-success-tint":"bg-error-tint"}`,children:[a.jsxs("div",{className:"card-title-row",children:[a.jsx("h4",{className:"card-event-name",children:l.eventName}),a.jsx("span",{className:`card-status-pill ${l.success?"pill-success":"pill-error"}`,children:l.status})]}),a.jsxs("div",{className:"card-meta-row",children:[a.jsxs("span",{className:"card-timestamp",children:[new Date(l.timestamp).toLocaleDateString("pt-BR")," às ",new Date(l.timestamp).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})]}),a.jsx("span",{className:"card-trigger-badge",children:l.triggerType})]})]}),a.jsxs("div",{className:"card-details-box",children:[a.jsxs("div",{className:"card-detail-line",children:[a.jsx("span",{className:"card-detail-label",children:"Destinatário:"}),a.jsx("span",{className:"card-detail-value",children:l.recipient||"URL não capturada"})]}),a.jsxs("div",{className:"card-detail-line",children:[a.jsx("span",{className:"card-detail-label",children:"Resposta/Conteúdo:"}),a.jsxs("span",{className:`card-detail-value italic ${l.success?"text-success":"text-danger"}`,children:['"',l.response,'"']})]})]}),!l.success&&a.jsx("div",{className:"card-actions",children:a.jsxs("button",{className:"btn-resend-rich",onClick:()=>r(l),children:[a.jsx(lf,{size:14}),"Tentar Novamente"]})})]})]},l.id))}),a.jsx("style",{jsx:!0,children:`
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

        .bg-success-tint { 
          border-left: 6px solid var(--success);
          background: linear-gradient(to right, rgba(29, 184, 119, 0.15), transparent);
        }
        .bg-error-tint { 
          border-left: 6px solid var(--danger-soft);
          background: linear-gradient(to right, rgba(232, 64, 74, 0.15), transparent);
        }

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
      `})]})},kf=({onComplete:e,initialData:t})=>{const{addEvent:n,updateEvent:r,employees:l,webhookSettings:o}=Ft(),[i,s]=R.useState(t||{projectName:"",startDate:"",eventTime:"",location:"",observation:"",responsible:"",employeeId:"",webhookMode:o.defaultMode||"production",webhookUrl:"",options:["exact"]}),u=[{id:"7d",label:"7 dias antes"},{id:"3d",label:"3 dias antes"},{id:"2d",label:"2 dias antes"},{id:"1d",label:"1 dia antes (24h)"},{id:"12h",label:"12 horas antes"},{id:"6h",label:"6 horas antes"},{id:"2h",label:"2 horas antes"},{id:"1h",label:"1 hora antes"},{id:"30m",label:"30 minutos antes"},{id:"15m",label:"15 minutos antes"},{id:"5m",label:"5 minutos antes"},{id:"exact",label:"No momento exato"}],d=m=>{s(h=>({...h,options:h.options.includes(m)?h.options.filter(S=>S!==m):[...h.options,m]}))},g=m=>{m.preventDefault(),t&&t.id?r(t.id,i):n(i),e&&e()};return a.jsxs("div",{className:"card fade-in",children:[a.jsxs("form",{onSubmit:g,className:"event-form",children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group full-width",children:[a.jsx("label",{children:"Nome do Projeto"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ex: Reunião de Pais",value:i.projectName,onChange:m=>s({...i,projectName:m.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Data de Início"}),a.jsx("input",{type:"date",required:!0,value:i.startDate,onChange:m=>s({...i,startDate:m.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Hora do Evento"}),a.jsx("input",{type:"time",required:!0,value:i.eventTime,onChange:m=>s({...i,eventTime:m.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Local"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ex: Auditório",value:i.location,onChange:m=>s({...i,location:m.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Funcionário DECOM (Responsável Externo)"}),a.jsxs("select",{required:!0,value:i.employeeId,onChange:m=>s({...i,employeeId:m.target.value}),children:[a.jsx("option",{value:"",children:"Selecione um funcionário..."}),l.map(m=>a.jsxs("option",{value:m.id,children:[m.name," (",m.phone,")"]},m.id))]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Responsável pelo Projeto (Escola)"}),a.jsx("input",{type:"text",required:!0,placeholder:"Nome do responsável",value:i.responsible,onChange:m=>s({...i,responsible:m.target.value})})]}),a.jsxs("div",{className:"form-group full-width border-top",children:[a.jsx("label",{className:"section-label-small",children:"Destino do Webhook"}),a.jsxs("div",{className:"webhook-selector-grid",children:[a.jsxs("label",{className:`webhook-option ${i.webhookMode==="production"?"active":""}`,children:[a.jsx("input",{type:"radio",name:"webhookMode",value:"production",checked:i.webhookMode==="production",onChange:()=>s({...i,webhookMode:"production"})}),a.jsxs("div",{className:"option-content",children:[a.jsx("span",{className:"option-title",children:"Produção"}),a.jsx("span",{className:"option-url",children:o.productionUrl||"Não configurada"})]})]}),a.jsxs("label",{className:`webhook-option ${i.webhookMode==="test"?"active":""}`,children:[a.jsx("input",{type:"radio",name:"webhookMode",value:"test",checked:i.webhookMode==="test",onChange:()=>s({...i,webhookMode:"test"})}),a.jsxs("div",{className:"option-content",children:[a.jsx("span",{className:"option-title",children:"Teste"}),a.jsx("span",{className:"option-url",children:o.testUrl||"Não configurada"})]})]}),a.jsxs("label",{className:`webhook-option ${i.webhookMode==="custom"?"active":""}`,children:[a.jsx("input",{type:"radio",name:"webhookMode",value:"custom",checked:i.webhookMode==="custom",onChange:()=>s({...i,webhookMode:"custom"})}),a.jsxs("div",{className:"option-content",children:[a.jsx("span",{className:"option-title",children:"Customizada"}),a.jsx("span",{className:"option-url",children:"Usar uma URL específica"})]})]})]}),i.webhookMode==="custom"&&a.jsx("div",{className:"custom-url-input fade-in",children:a.jsx("input",{type:"url",required:!0,placeholder:"https://sua-url-aqui.com/webhook",value:i.webhookUrl,onChange:m=>s({...i,webhookUrl:m.target.value})})})]}),a.jsxs("div",{className:"form-group full-width",children:[a.jsx("label",{children:"Observação"}),a.jsx("textarea",{rows:"3",placeholder:"Instruções adicionais...",value:i.observation,onChange:m=>s({...i,observation:m.target.value})})]})]}),a.jsxs("div",{className:"options-section",children:[a.jsx("label",{className:"section-label",children:"Opções de Disparo (Antecedência)"}),a.jsx("div",{className:"options-grid",children:u.map(m=>a.jsxs("label",{className:"checkbox-container",children:[a.jsx("input",{type:"checkbox",checked:i.options.includes(m.id),onChange:()=>d(m.id)}),a.jsx("span",{className:"checkmark"}),a.jsx("span",{className:"checkbox-label",children:m.label})]},m.id))})]}),a.jsx("div",{className:"form-actions",children:a.jsxs("button",{type:"submit",className:"btn-primary",children:[a.jsx(sf,{size:18}),t?"Salvar Alterações":"Agendar Evento"]})})]}),a.jsx("style",{jsx:!0,children:`
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
      `})]})},wf=()=>{const{employees:e,addEmployee:t,deleteEmployee:n}=Ft(),[r,l]=R.useState({name:"",phone:""}),o=i=>{i.preventDefault(),t(r),l({name:"",phone:""})};return a.jsxs("div",{className:"employees-container fade-in",children:[a.jsxs("div",{className:"employees-grid",children:[a.jsx("div",{className:"employee-form-container",children:a.jsxs("div",{className:"card",children:[a.jsx("h3",{className:"card-title",children:"Cadastrar Funcionário"}),a.jsxs("form",{onSubmit:o,className:"employee-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Nome Completo"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(df,{size:16,className:"input-icon"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ex: João Silva",value:r.name,onChange:i=>l({...r,name:i.target.value})})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Telefone / WhatsApp"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(tf,{size:16,className:"input-icon"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ex: (11) 98888-7777",value:r.phone,onChange:i=>l({...r,phone:i.target.value})})]})]}),a.jsxs("button",{type:"submit",className:"btn-primary full-width",children:[a.jsx(cf,{size:18}),"Adicionar Funcionário"]})]})]})}),a.jsx("div",{className:"employees-list-container",children:a.jsxs("div",{className:"card",children:[a.jsx("h3",{className:"card-title",children:"Lista de Funcionários"}),a.jsx("div",{className:"employee-list",children:e.length===0?a.jsx("div",{className:"empty-state",children:"Nenhum funcionário cadastrado"}):e.map(i=>a.jsxs("div",{className:"employee-item",children:[a.jsx("div",{className:"emp-avatar",children:i.name.charAt(0).toUpperCase()}),a.jsxs("div",{className:"emp-info",children:[a.jsx("span",{className:"emp-name",children:i.name}),a.jsx("span",{className:"emp-phone",children:i.phone})]}),a.jsx("button",{className:"btn-icon btn-delete",onClick:()=>n(i.id),title:"Remover",children:a.jsx(sc,{size:16})})]},i.id))})]})})]}),a.jsx("style",{jsx:!0,children:`
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
            `})]})},Sf=()=>{const{webhookSettings:e,updateWebhookSettings:t}=Ft(),[n,r]=R.useState({...e}),[l,o]=R.useState(!1),i=s=>{s.preventDefault(),t(n),o(!0),setTimeout(()=>o(!1),3e3)};return a.jsxs("div",{className:"settings-container fade-in",children:[a.jsxs("div",{className:"card settings-card",children:[a.jsx("h3",{className:"card-title",children:"Configurações Globais de Webhook"}),a.jsx("p",{className:"card-subtitle",children:"Configure as URLs padrão para evitar repetição no cadastro de eventos."}),a.jsxs("form",{onSubmit:i,className:"settings-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"URL de Produção (Oficial)"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(Wp,{size:16,className:"input-icon text-primary"}),a.jsx("input",{type:"url",placeholder:"https://seu-n8n.com/webhook/producao",value:n.productionUrl,onChange:s=>r({...n,productionUrl:s.target.value})})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"URL de Teste / Desenvolvimento"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(bp,{size:16,className:"input-icon text-test"}),a.jsx("input",{type:"url",placeholder:"https://webhook.site/seu-id-de-teste",value:n.testUrl,onChange:s=>r({...n,testUrl:s.target.value})})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Modo Padrão no Cadastro"}),a.jsxs("div",{className:"radio-group",children:[a.jsxs("label",{className:`radio-item ${n.defaultMode==="production"?"active":""}`,children:[a.jsx("input",{type:"radio",name:"defaultMode",value:"production",checked:n.defaultMode==="production",onChange:()=>r({...n,defaultMode:"production"})}),"Produção"]}),a.jsxs("label",{className:`radio-item ${n.defaultMode==="test"?"active":""}`,children:[a.jsx("input",{type:"radio",name:"defaultMode",value:"test",checked:n.defaultMode==="test",onChange:()=>r({...n,defaultMode:"test"})}),"Teste"]})]})]}),a.jsx("div",{className:"form-actions",children:a.jsx("button",{type:"submit",className:"btn-primary",disabled:l,children:l?a.jsxs(a.Fragment,{children:[a.jsx(Ui,{size:18}),"Configurações Salvas!"]}):a.jsxs(a.Fragment,{children:[a.jsx(of,{size:18}),"Salvar Configurações"]})})})]})]}),a.jsx("style",{jsx:!0,children:`
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
            `})]})};function Nf(){const[e,t]=R.useState(!!sessionStorage.getItem("auth_token")),[n,r]=R.useState("dashboard"),[l,o]=R.useState(null),{motorActive:i,nextUpdate:s}=Ft(),u=(m,h)=>{sessionStorage.setItem("auth_token",m),sessionStorage.setItem("auth_user",JSON.stringify(h)),t(!0)},d=()=>{sessionStorage.removeItem("auth_token"),sessionStorage.removeItem("auth_user"),t(!1)};if(!e)return a.jsx(jf,{onLogin:u});const g=()=>{switch(n){case"dashboard":return"Dashboard Geral";case"events":return"Gerenciamento de Eventos";case"employees":return"Gerenciamento de Funcionários";case"history":return"Histórico de Disparos";case"settings":return"Configurações de Webhook";case"add-event":return l?"Editar Evento":"Novo Evento";default:return"DECOM"}};return a.jsxs("div",{className:"app-container",children:[a.jsx(mf,{activeTab:n,setActiveTab:r,onLogout:d}),a.jsxs("main",{className:"main-content",children:[a.jsx(hf,{title:g(),motorActive:i,nextUpdate:s}),a.jsxs("div",{className:"content-padding",children:[n==="dashboard"&&a.jsx(vf,{onAddClick:()=>r("add-event")}),n==="events"&&a.jsx(yf,{onEdit:m=>{o(m),r("add-event")}}),n==="employees"&&a.jsx(wf,{}),n==="history"&&a.jsx(xf,{}),n==="settings"&&a.jsx(Sf,{}),n==="add-event"&&a.jsx(kf,{initialData:l,onComplete:()=>{o(null),r("events")}})]})]}),a.jsx("style",{jsx:!0,children:`
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
      `})]})}function Ef(){return a.jsx(gf,{children:a.jsx(Nf,{})})}Gl.createRoot(document.getElementById("root")).render(a.jsx(Ec.StrictMode,{children:a.jsx(Ef,{})}));
