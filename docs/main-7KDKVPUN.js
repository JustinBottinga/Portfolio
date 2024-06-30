var Dx=Object.defineProperty,Ix=Object.defineProperties;var Rx=Object.getOwnPropertyDescriptors;var ca=Object.getOwnPropertySymbols;var bp=Object.prototype.hasOwnProperty,Sp=Object.prototype.propertyIsEnumerable;var wp=(n,e,t)=>e in n?Dx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,pe=(n,e)=>{for(var t in e||={})bp.call(e,t)&&wp(n,t,e[t]);if(ca)for(var t of ca(e))Sp.call(e,t)&&wp(n,t,e[t]);return n},St=(n,e)=>Ix(n,Rx(e));var Ep=(n,e)=>{var t={};for(var i in n)bp.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&ca)for(var i of ca(n))e.indexOf(i)<0&&Sp.call(n,i)&&(t[i]=n[i]);return t};var la=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var Cp=null;var Jl=1,Tp=Symbol("SIGNAL");function ot(n){let e=Cp;return Cp=n,e}var Ap={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Px(n){if(!(eu(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Jl)){if(!n.producerMustRecompute(n)&&!Kl(n)){n.dirty=!1,n.lastCleanEpoch=Jl;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Jl}}function Dp(n){return n&&(n.nextProducerIndex=0),ot(n)}function Ip(n,e){if(ot(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(eu(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Ql(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Kl(n){ua(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Px(t),i!==t.version))return!0}return!1}function Rp(n){if(ua(n),eu(n))for(let e=0;e<n.producerNode.length;e++)Ql(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Ql(n,e){if(Nx(n),ua(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)Ql(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];ua(r),r.producerIndexOfThis[i]=e}}function eu(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function ua(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Nx(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function Ox(){throw new Error}var Lx=Ox;function Pp(n){Lx=n}function De(n){return typeof n=="function"}function Vr(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var da=Vr(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Ys(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Nt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(De(i))try{i()}catch(s){e=s instanceof da?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Np(s)}catch(o){e=e??[],o instanceof da?e=[...e,...o.errors]:e.push(o)}}if(e)throw new da(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Np(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Ys(t,e)}remove(e){let{_finalizers:t}=this;t&&Ys(t,e),e instanceof n&&e._removeParent(this)}};Nt.EMPTY=(()=>{let n=new Nt;return n.closed=!0,n})();var tu=Nt.EMPTY;function ha(n){return n instanceof Nt||n&&"closed"in n&&De(n.remove)&&De(n.add)&&De(n.unsubscribe)}function Np(n){De(n)?n():n.unsubscribe()}var Dn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var zr={setTimeout(n,e,...t){let{delegate:i}=zr;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=zr;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function fa(n){zr.setTimeout(()=>{let{onUnhandledError:e}=Dn;if(e)e(n);else throw n})}function Zs(){}var Op=nu("C",void 0,void 0);function Lp(n){return nu("E",void 0,n)}function Fp(n){return nu("N",n,void 0)}function nu(n,e,t){return{kind:n,value:e,error:t}}var tr=null;function Hr(n){if(Dn.useDeprecatedSynchronousErrorHandling){let e=!tr;if(e&&(tr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=tr;if(tr=null,t)throw i}}else n()}function Up(n){Dn.useDeprecatedSynchronousErrorHandling&&tr&&(tr.errorThrown=!0,tr.error=n)}var nr=class extends Nt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,ha(e)&&e.add(this)):this.destination=kx}static create(e,t,i){return new Gr(e,t,i)}next(e){this.isStopped?ru(Fp(e),this):this._next(e)}error(e){this.isStopped?ru(Lp(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?ru(Op,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Fx=Function.prototype.bind;function iu(n,e){return Fx.call(n,e)}var su=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){pa(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){pa(i)}else pa(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){pa(t)}}},Gr=class extends nr{constructor(e,t,i){super();let r;if(De(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Dn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&iu(e.next,s),error:e.error&&iu(e.error,s),complete:e.complete&&iu(e.complete,s)}):r=e}this.destination=new su(r)}};function pa(n){Dn.useDeprecatedSynchronousErrorHandling?Up(n):fa(n)}function Ux(n){throw n}function ru(n,e){let{onStoppedNotification:t}=Dn;t&&zr.setTimeout(()=>t(n,e))}var kx={closed:!0,next:Zs,error:Ux,complete:Zs};var jr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function sn(n){return n}function ou(...n){return au(n)}function au(n){return n.length===0?sn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var at=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=Vx(t)?t:new Gr(t,i,r);return Hr(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=kp(i),new i((r,s)=>{let o=new Gr({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[jr](){return this}pipe(...t){return au(t)(this)}toPromise(t){return t=kp(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function kp(n){var e;return(e=n??Dn.Promise)!==null&&e!==void 0?e:Promise}function Bx(n){return n&&De(n.next)&&De(n.error)&&De(n.complete)}function Vx(n){return n&&n instanceof nr||Bx(n)&&ha(n)}function cu(n){return De(n?.lift)}function Ze(n){return e=>{if(cu(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Je(n,e,t,i,r){return new lu(n,e,t,i,r)}var lu=class extends nr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Wr(){return Ze((n,e)=>{let t=null;n._refCount++;let i=Je(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var $r=class extends at{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,cu(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Nt;let t=this.getSubject();e.add(this.source.subscribe(Je(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Nt.EMPTY)}return e}refCount(){return Wr()(this)}};var Bp=Vr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Zt=(()=>{class n extends at{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new ma(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Bp}next(t){Hr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Hr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Hr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?tu:(this.currentObservers=null,s.push(t),new Nt(()=>{this.currentObservers=null,Ys(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new at;return t.source=this,t}}return n.create=(e,t)=>new ma(e,t),n})(),ma=class extends Zt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:tu}};var zt=class extends Zt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var on=new at(n=>n.complete());function Vp(n){return n&&De(n.schedule)}function zp(n){return n[n.length-1]}function Hp(n){return De(zp(n))?n.pop():void 0}function Si(n){return Vp(zp(n))?n.pop():void 0}function jp(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Gp(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ir(n){return this instanceof ir?(this.v=n,this):new ir(n)}function Wp(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(h){i[h]&&(r[h]=function(m){return new Promise(function(g,_){s.push([h,m,g,_])>1||a(h,m)})})}function a(h,m){try{c(i[h](m))}catch(g){d(s[0][3],g)}}function c(h){h.value instanceof ir?Promise.resolve(h.value.v).then(l,u):d(s[0][2],h)}function l(h){a("next",h)}function u(h){a("throw",h)}function d(h,m){h(m),s.shift(),s.length&&a(s[0][0],s[0][1])}}function $p(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Gp=="function"?Gp(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var ga=n=>n&&typeof n.length=="number"&&typeof n!="function";function va(n){return De(n?.then)}function ya(n){return De(n[jr])}function _a(n){return Symbol.asyncIterator&&De(n?.[Symbol.asyncIterator])}function xa(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function zx(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ma=zx();function wa(n){return De(n?.[Ma])}function ba(n){return Wp(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield ir(t.read());if(r)return yield ir(void 0);yield yield ir(i)}}finally{t.releaseLock()}})}function Sa(n){return De(n?.getReader)}function Bt(n){if(n instanceof at)return n;if(n!=null){if(ya(n))return Hx(n);if(ga(n))return Gx(n);if(va(n))return jx(n);if(_a(n))return qp(n);if(wa(n))return Wx(n);if(Sa(n))return $x(n)}throw xa(n)}function Hx(n){return new at(e=>{let t=n[jr]();if(De(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Gx(n){return new at(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function jx(n){return new at(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,fa)})}function Wx(n){return new at(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function qp(n){return new at(e=>{qx(n,e).catch(t=>e.error(t))})}function $x(n){return qp(ba(n))}function qx(n,e){var t,i,r,s;return jp(this,void 0,void 0,function*(){try{for(t=$p(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Kt(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Ea(n,e=0){return Ze((t,i)=>{t.subscribe(Je(i,r=>Kt(i,n,()=>i.next(r),e),()=>Kt(i,n,()=>i.complete(),e),r=>Kt(i,n,()=>i.error(r),e)))})}function Ca(n,e=0){return Ze((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Xp(n,e){return Bt(n).pipe(Ca(e),Ea(e))}function Yp(n,e){return Bt(n).pipe(Ca(e),Ea(e))}function Zp(n,e){return new at(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Jp(n,e){return new at(t=>{let i;return Kt(t,e,()=>{i=n[Ma](),Kt(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>De(i?.return)&&i.return()})}function Ta(n,e){if(!n)throw new Error("Iterable cannot be null");return new at(t=>{Kt(t,e,()=>{let i=n[Symbol.asyncIterator]();Kt(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Kp(n,e){return Ta(ba(n),e)}function Qp(n,e){if(n!=null){if(ya(n))return Xp(n,e);if(ga(n))return Zp(n,e);if(va(n))return Yp(n,e);if(_a(n))return Ta(n,e);if(wa(n))return Jp(n,e);if(Sa(n))return Kp(n,e)}throw xa(n)}function Tt(n,e){return e?Qp(n,e):Bt(n)}function Te(...n){let e=Si(n);return Tt(n,e)}function qr(n,e){let t=De(n)?n:()=>n,i=r=>r.error(t());return new at(e?r=>e.schedule(i,0,r):i)}function uu(n){return!!n&&(n instanceof at||De(n.lift)&&De(n.subscribe))}var li=Vr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Xe(n,e){return Ze((t,i)=>{let r=0;t.subscribe(Je(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:Xx}=Array;function Yx(n,e){return Xx(e)?n(...e):n(e)}function em(n){return Xe(e=>Yx(n,e))}var{isArray:Zx}=Array,{getPrototypeOf:Jx,prototype:Kx,keys:Qx}=Object;function tm(n){if(n.length===1){let e=n[0];if(Zx(e))return{args:e,keys:null};if(eM(e)){let t=Qx(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function eM(n){return n&&typeof n=="object"&&Jx(n)===Kx}function nm(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Aa(...n){let e=Si(n),t=Hp(n),{args:i,keys:r}=tm(n);if(i.length===0)return Tt([],e);let s=new at(tM(i,e,r?o=>nm(r,o):sn));return t?s.pipe(em(t)):s}function tM(n,e,t=sn){return i=>{im(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)im(e,()=>{let l=Tt(n[c],e),u=!1;l.subscribe(Je(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function im(n,e,t){n?Kt(t,n,e):e()}function rm(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},m=_=>l<i?g(_):c.push(_),g=_=>{s&&e.next(_),l++;let p=!1;Bt(t(_,u++)).subscribe(Je(e,f=>{r?.(f),s?m(f):e.next(f)},()=>{p=!0},void 0,()=>{if(p)try{for(l--;c.length&&l<i;){let f=c.shift();o?Kt(e,o,()=>g(f)):g(f)}h()}catch(f){e.error(f)}}))};return n.subscribe(Je(e,m,()=>{d=!0,h()})),()=>{a?.()}}function Ot(n,e,t=1/0){return De(e)?Ot((i,r)=>Xe((s,o)=>e(i,s,r,o))(Bt(n(i,r))),t):(typeof e=="number"&&(t=e),Ze((i,r)=>rm(i,r,n,t)))}function du(n=1/0){return Ot(sn,n)}function sm(){return du(1)}function Xr(...n){return sm()(Tt(n,Si(n)))}function Da(n){return new at(e=>{Bt(n()).subscribe(e)})}function yn(n,e){return Ze((t,i)=>{let r=0;t.subscribe(Je(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Ei(n){return Ze((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Je(t,void 0,void 0,o=>{s=Bt(n(o,Ei(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function om(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Je(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function rr(n,e){return De(e)?Ot(n,e,1):Ot(n,1)}function Ci(n){return Ze((e,t)=>{let i=!1;e.subscribe(Je(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function ui(n){return n<=0?()=>on:Ze((e,t)=>{let i=0;e.subscribe(Je(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function hu(n){return Xe(()=>n)}function Ia(n=nM){return Ze((e,t)=>{let i=!1;e.subscribe(Je(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function nM(){return new li}function Yr(n){return Ze((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function In(n,e){let t=arguments.length>=2;return i=>i.pipe(n?yn((r,s)=>n(r,s,i)):sn,ui(1),t?Ci(e):Ia(()=>new li))}function Zr(n){return n<=0?()=>on:Ze((e,t)=>{let i=[];e.subscribe(Je(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function fu(n,e){let t=arguments.length>=2;return i=>i.pipe(n?yn((r,s)=>n(r,s,i)):sn,Zr(1),t?Ci(e):Ia(()=>new li))}function pu(n,e){return Ze(om(n,e,arguments.length>=2,!0))}function mu(...n){let e=Si(n);return Ze((t,i)=>{(e?Xr(n,t,e):Xr(n,t)).subscribe(i)})}function _n(n,e){return Ze((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Je(i,c=>{r?.unsubscribe();let l=0,u=s++;Bt(n(c,u)).subscribe(r=Je(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function gu(n){return Ze((e,t)=>{Bt(n).subscribe(Je(t,()=>t.complete(),Zs)),!t.closed&&e.subscribe(t)})}function Lt(n,e,t){let i=De(n)||e||t?{next:n,error:e,complete:t}:n;return i?Ze((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Je(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):sn}var Se=class extends Error{constructor(e,t){super(nc(e,t)),this.code=e}};function nc(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function cd(n){return{toString:n}.toString()}var Js=globalThis;function dt(n){for(let e in n)if(n[e]===dt)return e;throw Error("Could not find renamed property on target object.")}function an(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(an).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function am(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var iM=dt({__forward_ref__:dt});function Hm(n){return n.__forward_ref__=Hm,n.toString=function(){return an(this())},n}function Mn(n){return Gm(n)?n():n}function Gm(n){return typeof n=="function"&&n.hasOwnProperty(iM)&&n.__forward_ref__===Hm}function Ne(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function ic(n){return cm(n,Wm)||cm(n,$m)}function jm(n){return ic(n)!==null}function cm(n,e){return n.hasOwnProperty(e)?n[e]:null}function rM(n){let e=n&&(n[Wm]||n[$m]);return e||null}function lm(n){return n&&(n.hasOwnProperty(um)||n.hasOwnProperty(sM))?n[um]:null}var Wm=dt({\u0275prov:dt}),um=dt({\u0275inj:dt}),$m=dt({ngInjectableDef:dt}),sM=dt({ngInjectorDef:dt}),ze=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ne({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function qm(n){return n&&!!n.\u0275providers}var oM=dt({\u0275cmp:dt}),aM=dt({\u0275dir:dt}),cM=dt({\u0275pipe:dt}),lM=dt({\u0275mod:dt}),Ba=dt({\u0275fac:dt}),Ks=dt({__NG_ELEMENT_ID__:dt}),dm=dt({__NG_ENV_ID__:dt});function Xm(n){return typeof n=="string"?n:n==null?"":String(n)}function uM(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Xm(n)}function dM(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Se(-200,n)}function ld(n,e){throw new Se(-201,!1)}var Ge=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Ge||{}),Du;function Ym(){return Du}function xn(n){let e=Du;return Du=n,e}function Zm(n,e,t){let i=ic(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Ge.Optional)return null;if(e!==void 0)return e;ld(n,"Injector")}var hM={},Qs=hM,fM="__NG_DI_FLAG__",Va="ngTempTokenPath",pM="ngTokenPath",mM=/\n/gm,gM="\u0275",hm="__source",es;function vM(){return es}function Ti(n){let e=es;return es=n,e}function yM(n,e=Ge.Default){if(es===void 0)throw new Se(-203,!1);return es===null?Zm(n,void 0,e):es.get(n,e&Ge.Optional?null:void 0,e)}function Ke(n,e=Ge.Default){return(Ym()||yM)(Mn(n),e)}function ie(n,e=Ge.Default){return Ke(n,rc(e))}function rc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Iu(n){let e=[];for(let t=0;t<n.length;t++){let i=Mn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Se(900,!1);let r,s=Ge.Default;for(let o=0;o<i.length;o++){let a=i[o],c=_M(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Ke(r,s))}else e.push(Ke(i))}return e}function _M(n){return n[fM]}function xM(n,e,t,i){let r=n[Va];throw e[hm]&&r.unshift(e[hm]),n.message=MM(`
`+n.message,r,t,i),n[pM]=r,n[Va]=null,n}function MM(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==gM?n.slice(2):n;let r=an(e);if(Array.isArray(e))r=e.map(an).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):an(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(mM,`
  `)}`}function ns(n,e){let t=n.hasOwnProperty(Ba);return t?n[Ba]:null}function ud(n,e){n.forEach(t=>Array.isArray(t)?ud(t,e):e(t))}function Jm(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function za(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var eo={},or=[],ar=new ze(""),Km=new ze("",-1),Qm=new ze(""),Ha=class{get(e,t=Qs){if(t===Qs){let i=new Error(`NullInjectorError: No provider for ${an(e)}!`);throw i.name="NullInjectorError",i}return t}},eg=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(eg||{}),Zn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Zn||{}),Di=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Di||{});function wM(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function Ru(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];SM(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function bM(n){return n===3||n===4||n===6}function SM(n){return n.charCodeAt(0)===64}function dd(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?fm(n,t,r,null,e[++i]):fm(n,t,r,null,null))}}return n}function fm(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var tg="ng-template";function EM(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&wM(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(hd(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function hd(n){return n.type===4&&n.value!==tg}function CM(n,e,t){let i=n.type===4&&!t?tg:n.value;return e===i}function TM(n,e,t){let i=4,r=n.attrs,s=r!==null?IM(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Rn(i)&&!Rn(c))return!1;if(o&&Rn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!CM(n,c,t)||c===""&&e.length===1){if(Rn(i))return!1;o=!0}}else if(i&8){if(r===null||!EM(n,r,c,t)){if(Rn(i))return!1;o=!0}}else{let l=e[++a],u=AM(c,r,hd(n),t);if(u===-1){if(Rn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Rn(i))return!1;o=!0}}}}return Rn(i)||o}function Rn(n){return(n&1)===0}function AM(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return RM(e,n)}function DM(n,e,t=!1){for(let i=0;i<e.length;i++)if(TM(n,e[i],t))return!0;return!1}function IM(n){for(let e=0;e<n.length;e++){let t=n[e];if(bM(t))return e}return n.length}function RM(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function pm(n,e){return n?":not("+e.trim()+")":e}function PM(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Rn(o)&&(e+=pm(s,r),r=""),i=o,s=s||!Rn(i);t++}return r!==""&&(e+=pm(s,r)),e}function NM(n){return n.map(PM).join(",")}function OM(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Rn(r))break;r=s}i++}return{attrs:e,classes:t}}function Dt(n){return cd(()=>{let e=og(n),t=St(pe({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===eg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Zn.Emulated,styles:n.styles||or,_:null,schemas:n.schemas||null,tView:null,id:""});ag(t);let i=n.dependencies;return t.directiveDefs=gm(i,!1),t.pipeDefs=gm(i,!0),t.id=UM(t),t})}function LM(n){return cr(n)||ng(n)}function FM(n){return n!==null}function mm(n,e){if(n==null)return eo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Di.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Di.None?[i,a]:i,e[s]=o):t[s]=i}return t}function fo(n){return cd(()=>{let e=og(n);return ag(e),e})}function cr(n){return n[oM]||null}function ng(n){return n[aM]||null}function ig(n){return n[cM]||null}function rg(n){let e=cr(n)||ng(n)||ig(n);return e!==null?e.standalone:!1}function sg(n,e){let t=n[lM]||null;if(!t&&e===!0)throw new Error(`Type ${an(n)} does not have '\u0275mod' property.`);return t}function og(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||eo,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||or,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:mm(n.inputs,e),outputs:mm(n.outputs),debugInfo:null}}function ag(n){n.features?.forEach(e=>e(n))}function gm(n,e){if(!n)return null;let t=e?ig:LM;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(FM)}function UM(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function dr(n){return{\u0275providers:n}}function kM(...n){return{\u0275providers:cg(!0,n),\u0275fromNgModule:!0}}function cg(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return ud(e,o=>{let a=o;Pu(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&lg(r,s),t}function lg(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];fd(r,s=>{e(s,i)})}}function Pu(n,e,t,i){if(n=Mn(n),!n)return!1;let r=null,s=lm(n),o=!s&&cr(n);if(!s&&!o){let c=n.ngModule;if(s=lm(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Pu(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{ud(s.imports,u=>{Pu(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&lg(l,e)}if(!a){let l=ns(r)||(()=>new r);e({provide:r,useFactory:l,deps:or},r),e({provide:Qm,useValue:r,multi:!0},r),e({provide:ar,useValue:()=>Ke(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;fd(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function fd(n,e){for(let t of n)qm(t)&&(t=t.\u0275providers),Array.isArray(t)?fd(t,e):e(t)}var BM=dt({provide:String,useValue:dt});function ug(n){return n!==null&&typeof n=="object"&&BM in n}function VM(n){return!!(n&&n.useExisting)}function zM(n){return!!(n&&n.useFactory)}function Nu(n){return typeof n=="function"}var sc=new ze(""),Oa={},HM={},vu;function pd(){return vu===void 0&&(vu=new Ha),vu}var wn=class{},to=class extends wn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Lu(e,o=>this.processProvider(o)),this.records.set(Km,Jr(void 0,this)),r.has("environment")&&this.records.set(wn,Jr(void 0,this));let s=this.records.get(sc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Qm,or,Ge.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=ot(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ot(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Ti(this),i=xn(void 0),r;try{return e()}finally{Ti(t),xn(i)}}get(e,t=Qs,i=Ge.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(dm))return e[dm](this);i=rc(i);let r,s=Ti(this),o=xn(void 0);try{if(!(i&Ge.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=XM(e)&&ic(e);l&&this.injectableDefInScope(l)?c=Jr(Ou(e),Oa):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&Ge.Self?pd():this.parent;return t=i&Ge.Optional&&t===Qs?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Va]=a[Va]||[]).unshift(an(e)),s)throw a;return xM(a,e,"R3InjectorError",this.source)}else throw a}finally{xn(o),Ti(s)}}resolveInjectorInitializers(){let e=ot(null),t=Ti(this),i=xn(void 0),r;try{let s=this.get(ar,or,Ge.Self);for(let o of s)o()}finally{Ti(t),xn(i),ot(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(an(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Se(205,!1)}processProvider(e){e=Mn(e);let t=Nu(e)?e:Mn(e&&e.provide),i=jM(e);if(!Nu(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Jr(void 0,Oa,!0),r.factory=()=>Iu(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=ot(null);try{return t.value===Oa&&(t.value=HM,t.value=t.factory()),typeof t.value=="object"&&t.value&&qM(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{ot(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Mn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Ou(n){let e=ic(n),t=e!==null?e.factory:ns(n);if(t!==null)return t;if(n instanceof ze)throw new Se(204,!1);if(n instanceof Function)return GM(n);throw new Se(204,!1)}function GM(n){if(n.length>0)throw new Se(204,!1);let t=rM(n);return t!==null?()=>t.factory(n):()=>new n}function jM(n){if(ug(n))return Jr(void 0,n.useValue);{let e=WM(n);return Jr(e,Oa)}}function WM(n,e,t){let i;if(Nu(n)){let r=Mn(n);return ns(r)||Ou(r)}else if(ug(n))i=()=>Mn(n.useValue);else if(zM(n))i=()=>n.useFactory(...Iu(n.deps||[]));else if(VM(n))i=()=>Ke(Mn(n.useExisting));else{let r=Mn(n&&(n.useClass||n.provide));if($M(n))i=()=>new r(...Iu(n.deps));else return ns(r)||Ou(r)}return i}function Jr(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function $M(n){return!!n.deps}function qM(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function XM(n){return typeof n=="function"||typeof n=="object"&&n instanceof ze}function Lu(n,e){for(let t of n)Array.isArray(t)?Lu(t,e):t&&qm(t)?Lu(t.\u0275providers,e):e(t)}function Ri(n,e){n instanceof to&&n.assertNotDestroyed();let t,i=Ti(n),r=xn(void 0);try{return e()}finally{Ti(i),xn(r)}}function YM(){return Ym()!==void 0||vM()!=null}function ZM(n){return typeof n=="function"}var ln=0,$e=1,Ie=2,Ht=3,Nn=4,Fn=5,On=6,no=7,Jn=8,is=9,Kn=10,At=11,io=12,vm=13,po=14,bn=15,md=16,Kr=17,oc=18,ac=19,dg=20,Ai=21,yu=22,lr=23,un=25,hg=1,ro=6,hi=7,Ga=8,ja=9,cn=10,gd=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(gd||{});function di(n){return Array.isArray(n)&&typeof n[hg]=="object"}function Qn(n){return Array.isArray(n)&&n[hg]===!0}function fg(n){return(n.flags&4)!==0}function cc(n){return n.componentOffset>-1}function pg(n){return(n.flags&1)===1}function mo(n){return!!n.template}function mg(n){return(n[Ie]&512)!==0}var Fu=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function gg(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function lc(){return vg}function vg(n){return n.type.prototype.ngOnChanges&&(n.setInput=KM),JM}lc.ngInherit=!0;function JM(){let n=_g(this),e=n?.current;if(e){let t=n.previous;if(t===eo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function KM(n,e,t,i,r){let s=this.declaredInputs[i],o=_g(n)||QM(n,{previous:eo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Fu(l&&l.currentValue,t,c===eo),gg(n,e,r,t)}var yg="__ngSimpleChanges__";function _g(n){return n[yg]||null}function QM(n,e){return n[yg]=e}var ym=null;var Xn=function(n,e,t){ym?.(n,e,t)},ew="svg",tw="math",nw=!1;function iw(){return nw}function Ln(n){for(;Array.isArray(n);)n=n[ln];return n}function rw(n,e){return Ln(e[n])}function Un(n,e){return Ln(e[n.index])}function sw(n,e){return n.data[e]}function ow(n,e){return n[e]}function hr(n,e){let t=e[n];return di(t)?t:t[ln]}function vd(n){return(n[Ie]&128)===128}function aw(n){return Qn(n[Ht])}function _m(n,e){return e==null?null:n[e]}function xg(n){n[Kr]=0}function cw(n){n[Ie]&1024||(n[Ie]|=1024,vd(n)&&so(n))}function yd(n){return!!(n[Ie]&9216||n[lr]?.dirty)}function Uu(n){n[Kn].changeDetectionScheduler?.notify(1),yd(n)?so(n):n[Ie]&64&&(iw()?(n[Ie]|=1024,so(n)):n[Kn].changeDetectionScheduler?.notify())}function so(n){n[Kn].changeDetectionScheduler?.notify();let e=oo(n);for(;e!==null&&!(e[Ie]&8192||(e[Ie]|=8192,!vd(e)));)e=oo(e)}function Mg(n,e){if((n[Ie]&256)===256)throw new Se(911,!1);n[Ai]===null&&(n[Ai]=[]),n[Ai].push(e)}function lw(n,e){if(n[Ai]===null)return;let t=n[Ai].indexOf(e);t!==-1&&n[Ai].splice(t,1)}function oo(n){let e=n[Ht];return Qn(e)?e[Ht]:e}var tt={lFrame:Ag(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function uw(){return tt.lFrame.elementDepthCount}function dw(){tt.lFrame.elementDepthCount++}function hw(){tt.lFrame.elementDepthCount--}function wg(){return tt.bindingsEnabled}function go(){return tt.skipHydrationRootTNode!==null}function fw(n){return tt.skipHydrationRootTNode===n}function pw(n){tt.skipHydrationRootTNode=n}function mw(){tt.skipHydrationRootTNode=null}function $t(){return tt.lFrame.lView}function vo(){return tt.lFrame.tView}function _d(n){return tt.lFrame.contextLView=n,n[Jn]}function xd(n){return tt.lFrame.contextLView=null,n}function ei(){let n=bg();for(;n!==null&&n.type===64;)n=n.parent;return n}function bg(){return tt.lFrame.currentTNode}function gw(){let n=tt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function uc(n,e){let t=tt.lFrame;t.currentTNode=n,t.isParent=e}function Sg(){return tt.lFrame.isParent}function vw(){tt.lFrame.isParent=!1}function yw(){return tt.lFrame.contextLView}function _w(n){return tt.lFrame.bindingIndex=n}function xw(){return tt.lFrame.bindingIndex++}function Mw(){return tt.lFrame.inI18n}function ww(n,e){let t=tt.lFrame;t.bindingIndex=t.bindingRootIndex=n,ku(e)}function bw(){return tt.lFrame.currentDirectiveIndex}function ku(n){tt.lFrame.currentDirectiveIndex=n}function Eg(n){tt.lFrame.currentQueryIndex=n}function Sw(n){let e=n[$e];return e.type===2?e.declTNode:e.type===1?n[Fn]:null}function Cg(n,e,t){if(t&Ge.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Ge.Host);)if(r=Sw(s),r===null||(s=s[po],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=tt.lFrame=Tg();return i.currentTNode=e,i.lView=n,!0}function Md(n){let e=Tg(),t=n[$e];tt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Tg(){let n=tt.lFrame,e=n===null?null:n.child;return e===null?Ag(n):e}function Ag(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Dg(){let n=tt.lFrame;return tt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Ig=Dg;function wd(){let n=Dg();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function bd(){return tt.lFrame.selectedIndex}function ur(n){tt.lFrame.selectedIndex=n}function Rg(){return tt.lFrame.currentNamespace}var Pg=!0;function Ng(){return Pg}function ti(n){Pg=n}function Ew(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=vg(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Og(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function La(n,e,t){Lg(n,e,3,t)}function Fa(n,e,t,i){(n[Ie]&3)===t&&Lg(n,e,t,i)}function _u(n,e){let t=n[Ie];(t&3)===e&&(t&=16383,t+=1,n[Ie]=t)}function Lg(n,e,t,i){let r=i!==void 0?n[Kr]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Kr]+=65536),(a<s||s==-1)&&(Cw(n,t,e,c),n[Kr]=(n[Kr]&4294901760)+c+2),c++}function xm(n,e){Xn(4,n,e);let t=ot(null);try{e.call(n)}finally{ot(t),Xn(5,n,e)}}function Cw(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ie]>>14<n[Kr]>>16&&(n[Ie]&3)===e&&(n[Ie]+=16384,xm(a,s)):xm(a,s)}var ts=-1,ao=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function Tw(n){return n instanceof ao}function Aw(n){return(n.flags&8)!==0}function Dw(n){return(n.flags&16)!==0}function Fg(n){return n!==ts}function Wa(n){return n&32767}function Iw(n){return n>>16}function $a(n,e){let t=Iw(n),i=e;for(;t>0;)i=i[po],t--;return i}var Bu=!0;function Mm(n){let e=Bu;return Bu=n,e}var Rw=256,Ug=Rw-1,kg=5,Pw=0,Yn={};function Nw(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Ks)&&(i=t[Ks]),i==null&&(i=t[Ks]=Pw++);let r=i&Ug,s=1<<r;e.data[n+(r>>kg)]|=s}function Bg(n,e){let t=Vg(n,e);if(t!==-1)return t;let i=e[$e];i.firstCreatePass&&(n.injectorIndex=e.length,xu(i.data,n),xu(e,null),xu(i.blueprint,null));let r=Sd(n,e),s=n.injectorIndex;if(Fg(r)){let o=Wa(r),a=$a(r,e),c=a[$e].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function xu(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Vg(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Sd(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Wg(r),i===null)return ts;if(t++,r=r[po],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return ts}function Ow(n,e,t){Nw(n,e,t)}function zg(n,e,t){if(t&Ge.Optional||n!==void 0)return n;ld(e,"NodeInjector")}function Hg(n,e,t,i){if(t&Ge.Optional&&i===void 0&&(i=null),!(t&(Ge.Self|Ge.Host))){let r=n[is],s=xn(void 0);try{return r?r.get(e,i,t&Ge.Optional):Zm(e,i,t&Ge.Optional)}finally{xn(s)}}return zg(i,e,t)}function Gg(n,e,t,i=Ge.Default,r){if(n!==null){if(e[Ie]&2048&&!(i&Ge.Self)){let o=Bw(n,e,t,i,Yn);if(o!==Yn)return o}let s=jg(n,e,t,i,Yn);if(s!==Yn)return s}return Hg(e,t,i,r)}function jg(n,e,t,i,r){let s=Uw(t);if(typeof s=="function"){if(!Cg(e,n,i))return i&Ge.Host?zg(r,t,i):Hg(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Ge.Optional))ld(t);else return o}finally{Ig()}}else if(typeof s=="number"){let o=null,a=Vg(n,e),c=ts,l=i&Ge.Host?e[bn][Fn]:null;for((a===-1||i&Ge.SkipSelf)&&(c=a===-1?Sd(n,e):e[a+8],c===ts||!bm(i,!1)?a=-1:(o=e[$e],a=Wa(c),e=$a(c,e)));a!==-1;){let u=e[$e];if(wm(s,a,u.data)){let d=Lw(a,e,t,o,i,l);if(d!==Yn)return d}c=e[a+8],c!==ts&&bm(i,e[$e].data[a+8]===l)&&wm(s,a,e)?(o=u,a=Wa(c),e=$a(c,e)):a=-1}}return r}function Lw(n,e,t,i,r,s){let o=e[$e],a=o.data[n+8],c=i==null?cc(a)&&Bu:i!=o&&(a.type&3)!==0,l=r&Ge.Host&&s===a,u=Fw(a,o,t,c,l);return u!==null?co(e,o,u,a):Yn}function Fw(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let m=d;m<h;m++){let g=o[m];if(m<c&&t===g||m>=c&&g.type===t)return m}if(r){let m=o[c];if(m&&mo(m)&&m.type===t)return c}return null}function co(n,e,t,i){let r=n[t],s=e.data;if(Tw(r)){let o=r;o.resolving&&dM(uM(s[t]));let a=Mm(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?xn(o.injectImpl):null,u=Cg(n,i,Ge.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&Ew(t,s[t],e)}finally{l!==null&&xn(l),Mm(a),o.resolving=!1,Ig()}}return r}function Uw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Ks)?n[Ks]:void 0;return typeof e=="number"?e>=0?e&Ug:kw:e}function wm(n,e,t){let i=1<<n;return!!(t[e+(n>>kg)]&i)}function bm(n,e){return!(n&Ge.Self)&&!(n&Ge.Host&&e)}var sr=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Gg(this._tNode,this._lView,e,rc(i),t)}};function kw(){return new sr(ei(),$t())}function Ed(n){return cd(()=>{let e=n.prototype.constructor,t=e[Ba]||Vu(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Ba]||Vu(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Vu(n){return Gm(n)?()=>{let e=Vu(Mn(n));return e&&e()}:ns(n)}function Bw(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ie]&2048&&!(o[Ie]&512);){let a=jg(s,o,t,i|Ge.Self,Yn);if(a!==Yn)return a;let c=s.parent;if(!c){let l=o[dg];if(l){let u=l.get(t,Yn,i);if(u!==Yn)return u}c=Wg(o),o=o[po]}s=c}return r}function Wg(n){let e=n[$e],t=e.type;return t===2?e.declTNode:t===1?n[Fn]:null}function Sm(n,e=null,t=null,i){let r=$g(n,e,t,i);return r.resolveInjectorInitializers(),r}function $g(n,e=null,t=null,i,r=new Set){let s=[t||or,kM(n)];return i=i||(typeof n=="object"?void 0:an(n)),new to(s,e||pd(),i||null,r)}var fr=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return Sm({name:""},r,i,"");{let s=i.name??"";return Sm({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=Qs,e.NULL=new Ha,e.\u0275prov=Ne({token:e,providedIn:"any",factory:()=>Ke(Km)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})();var Vw="ngOriginalError";function Mu(n){return n[Vw]}var fi=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&Mu(e);for(;t&&Mu(t);)t=Mu(t);return t||null}},qg=new ze("",{providedIn:"root",factory:()=>ie(fi).handleError.bind(void 0)}),Xg=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=zw,e.__NG_ENV_ID__=i=>i;let n=e;return n})(),zu=class extends Xg{constructor(e){super(),this._lView=e}onDestroy(e){return Mg(this._lView,e),()=>lw(this._lView,e)}};function zw(){return new zu($t())}function Hw(){return Cd(ei(),$t())}function Cd(n,e){return new Pi(Un(n,e))}var Pi=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=Hw;let n=e;return n})();var Hu=class extends Zt{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,YM()&&(this.destroyRef=ie(Xg,{optional:!0})??void 0)}emit(e){let t=ot(null);try{super.next(e)}finally{ot(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=wu(s),r&&(r=wu(r)),o&&(o=wu(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Nt&&e.add(a),a}};function wu(n){return e=>{setTimeout(n,void 0,e)}}var Pn=Hu;var Gw="ngSkipHydration",jw="ngskiphydration";function Yg(n){let e=n.mergedAttrs;if(e===null)return!1;for(let t=0;t<e.length;t+=2){let i=e[t];if(typeof i=="number")return!1;if(typeof i=="string"&&i.toLowerCase()===jw)return!0}return!1}function Zg(n){return n.hasAttribute(Gw)}function qa(n){return(n.flags&128)===128}function Ww(n){if(qa(n))return!0;let e=n.parent;for(;e;){if(qa(n)||Yg(e))return!0;e=e.parent}return!1}var Jg=new Map,$w=0;function qw(){return $w++}function Xw(n){Jg.set(n[ac],n)}function Yw(n){Jg.delete(n[ac])}var Em="__ngContext__";function rs(n,e){di(e)?(n[Em]=e[ac],Xw(e)):n[Em]=e}function Kg(n){return ev(n[io])}function Qg(n){return ev(n[Nn])}function ev(n){for(;n!==null&&!Qn(n);)n=n[Nn];return n}var Gu;function tv(n){Gu=n}function dc(){if(Gu!==void 0)return Gu;if(typeof document<"u")return document;throw new Se(210,!1)}var hc=new ze("",{providedIn:"root",factory:()=>Zw}),Zw="ng",Td=new ze(""),kn=new ze("",{providedIn:"platform",factory:()=>"unknown"});var Ad=new ze("",{providedIn:"root",factory:()=>dc().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function Jw(){let n=new pr;return ie(kn)==="browser"&&(n.store=Kw(dc(),ie(hc))),n}var pr=(()=>{let e=class e{constructor(){this.store={},this.onSerializeCallbacks={}}get(i,r){return this.store[i]!==void 0?this.store[i]:r}set(i,r){this.store[i]=r}remove(i){delete this.store[i]}hasKey(i){return this.store.hasOwnProperty(i)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(i,r){this.onSerializeCallbacks[i]=r}toJson(){for(let i in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(i))try{this.store[i]=this.onSerializeCallbacks[i]()}catch(r){console.warn("Exception in onSerialize callback: ",r)}return JSON.stringify(this.store).replace(/</g,"\\u003C")}};e.\u0275prov=Ne({token:e,providedIn:"root",factory:Jw});let n=e;return n})();function Kw(n,e){let t=n.getElementById(e+"-state");if(t?.textContent)try{return JSON.parse(t.textContent)}catch(i){console.warn("Exception while restoring TransferState for app "+e,i)}return{}}var nv="h",iv="b",ju=function(n){return n.FirstChild="f",n.NextSibling="n",n}(ju||{}),Qw="e",eb="t",Dd="c",rv="x",Xa="r",tb="i",nb="n",ib="d",rb="__nghData__",sv=rb,bu="ngh",sb="nghm",ov=()=>null;function ob(n,e,t=!1){let i=n.getAttribute(bu);if(i==null)return null;let[r,s]=i.split("|");if(i=t?s:r,!i)return null;let o=s?`|${s}`:"",a=t?r:o,c={};if(i!==""){let u=e.get(pr,null,{optional:!0});u!==null&&(c=u.get(sv,[])[Number(i)])}let l={data:c,firstChild:n.firstChild??null};return t&&(l.firstChild=n,fc(l,0,n.nextSibling)),a?n.setAttribute(bu,a):n.removeAttribute(bu),l}function ab(){ov=ob}function Id(n,e,t=!1){return ov(n,e,t)}function cb(n){let e=n._lView;return e[$e].type===2?null:(mg(e)&&(e=e[un]),e)}function lb(n){return n.textContent?.replace(/\s/gm,"")}function ub(n){let e=dc(),t=e.createNodeIterator(n,NodeFilter.SHOW_COMMENT,{acceptNode(s){let o=lb(s);return o==="ngetn"||o==="ngtns"?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i,r=[];for(;i=t.nextNode();)r.push(i);for(let s of r)s.textContent==="ngetn"?s.replaceWith(e.createTextNode("")):s.remove()}function fc(n,e,t){n.segmentHeads??={},n.segmentHeads[e]=t}function Wu(n,e){return n.segmentHeads?.[e]??null}function db(n,e){let t=n.data,i=t[Qw]?.[e]??null;return i===null&&t[Dd]?.[e]&&(i=Rd(n,e)),i}function av(n,e){return n.data[Dd]?.[e]??null}function Rd(n,e){let t=av(n,e)??[],i=0;for(let r of t)i+=r[Xa]*(r[rv]??1);return i}function pc(n,e){if(typeof n.disconnectedNodes>"u"){let t=n.data[ib];n.disconnectedNodes=t?new Set(t):null}return!!n.disconnectedNodes?.has(e)}var Ra=new ze(""),cv=!1,lv=new ze("",{providedIn:"root",factory:()=>cv}),hb=new ze("");var fb=/^>|^->|<!--|-->|--!>|<!-$/g,pb=/(<|>)/g,mb="\u200B$1\u200B";function gb(n){return n.replace(fb,e=>e.replace(pb,mb))}function uv(n){return n.ownerDocument.defaultView}function vb(n){return n.ownerDocument.body}function dv(n){return n instanceof Function?n():n}function Pa(n){return(n??ie(fr)).get(kn)==="browser"}var mr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(mr||{}),yb;function Pd(n,e){return yb(n,e)}function Qr(n,e,t,i,r){if(i!=null){let s,o=!1;Qn(i)?s=i:di(i)&&(o=!0,i=i[ln]);let a=Ln(i);n===0&&t!==null?r==null?mv(e,t,a):Ya(e,t,a,r||null,!0):n===1&&t!==null?Ya(e,t,a,r||null,!0):n===2?Fd(e,a,o):n===3&&e.destroyNode(a),s!=null&&Lb(e,n,s,t,r)}}function Nd(n,e){return n.createText(e)}function _b(n,e,t){n.setValue(e,t)}function Od(n,e){return n.createComment(gb(e))}function mc(n,e,t){return n.createElement(e,t)}function xb(n,e){hv(n,e),e[ln]=null,e[Fn]=null}function Mb(n,e,t,i,r,s){i[ln]=r,i[Fn]=e,gc(n,i,t,1,r,s)}function hv(n,e){e[Kn].changeDetectionScheduler?.notify(1),gc(n,e,e[At],2,null,null)}function wb(n){let e=n[io];if(!e)return Su(n[$e],n);for(;e;){let t=null;if(di(e))t=e[io];else{let i=e[cn];i&&(t=i)}if(!t){for(;e&&!e[Nn]&&e!==n;)di(e)&&Su(e[$e],e),e=e[Ht];e===null&&(e=n),di(e)&&Su(e[$e],e),t=e&&e[Nn]}e=t}}function bb(n,e,t,i){let r=cn+i,s=t.length;i>0&&(t[r-1][Nn]=e),i<s-cn?(e[Nn]=t[r],Jm(t,cn+i,e)):(t.push(e),e[Nn]=null),e[Ht]=t;let o=e[md];o!==null&&t!==o&&Sb(o,e);let a=e[oc];a!==null&&a.insertView(n),Uu(e),e[Ie]|=128}function Sb(n,e){let t=n[ja],r=e[Ht][Ht][bn];e[bn]!==r&&(n[Ie]|=gd.HasTransplantedViews),t===null?n[ja]=[e]:t.push(e)}function fv(n,e){let t=n[ja],i=t.indexOf(e);t.splice(i,1)}function $u(n,e){if(n.length<=cn)return;let t=cn+e,i=n[t];if(i){let r=i[md];r!==null&&r!==n&&fv(r,i),e>0&&(n[t-1][Nn]=i[Nn]);let s=za(n,cn+e);xb(i[$e],i);let o=s[oc];o!==null&&o.detachView(s[$e]),i[Ht]=null,i[Nn]=null,i[Ie]&=-129}return i}function pv(n,e){if(!(e[Ie]&256)){let t=e[At];t.destroyNode&&gc(n,e,t,3,null,null),wb(e)}}function Su(n,e){if(e[Ie]&256)return;let t=ot(null);try{e[Ie]&=-129,e[Ie]|=256,e[lr]&&Rp(e[lr]),Cb(n,e),Eb(n,e),e[$e].type===1&&e[At].destroy();let i=e[md];if(i!==null&&Qn(e[Ht])){i!==e[Ht]&&fv(i,e);let r=e[oc];r!==null&&r.detachView(n)}Yw(e)}finally{ot(t)}}function Eb(n,e){let t=n.cleanup,i=e[no];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[no]=null);let r=e[Ai];if(r!==null){e[Ai]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function Cb(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof ao)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Xn(4,a,c);try{c.call(a)}finally{Xn(5,a,c)}}else{Xn(4,r,s);try{s.call(r)}finally{Xn(5,r,s)}}}}}function Tb(n,e,t){return Ab(n,e.parent,t)}function Ab(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[ln];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===Zn.None||s===Zn.Emulated)return null}return Un(i,t)}}function Ya(n,e,t,i,r){n.insertBefore(e,t,i,r)}function mv(n,e,t){n.appendChild(e,t)}function Cm(n,e,t,i,r){i!==null?Ya(n,e,t,i,r):mv(n,e,t)}function Db(n,e,t,i){n.removeChild(e,t,i)}function Ld(n,e){return n.parentNode(e)}function Ib(n,e){return n.nextSibling(e)}function Rb(n,e,t){return Nb(n,e,t)}function Pb(n,e,t){return n.type&40?Un(n,t):null}var Nb=Pb,Tm;function gv(n,e,t,i){let r=Tb(n,i,e),s=e[At],o=i.parent||e[Fn],a=Rb(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Cm(s,r,t[c],a,!1);else Cm(s,r,t,a,!1);Tm!==void 0&&Tm(s,i,e,t,r)}function Ua(n,e){if(e!==null){let t=e.type;if(t&3)return Un(e,n);if(t&4)return qu(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Ua(n,i);{let r=n[e.index];return Qn(r)?qu(-1,r):Ln(r)}}else{if(t&32)return Pd(e,n)()||Ln(n[e.index]);{let i=vv(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=oo(n[bn]);return Ua(r,i)}else return Ua(n,e.next)}}}return null}function vv(n,e){if(e!==null){let i=n[bn][Fn],r=e.projection;return i.projection[r]}return null}function qu(n,e){let t=cn+n+1;if(t<e.length){let i=e[t],r=i[$e].firstChild;if(r!==null)return Ua(i,r)}return e[hi]}function Fd(n,e,t){let i=Ld(n,e);i&&Db(n,i,e,t)}function yv(n){n.textContent=""}function Ud(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&rs(Ln(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)Ud(n,e,t.child,i,r,s,!1),Qr(e,n,r,a,s);else if(c&32){let l=Pd(t,i),u;for(;u=l();)Qr(e,n,r,u,s);Qr(e,n,r,a,s)}else c&16?Ob(n,e,i,t,r,s):Qr(e,n,r,a,s);t=o?t.projectionNext:t.next}}function gc(n,e,t,i,r,s){Ud(t,i,n.firstChild,e,r,s,!1)}function Ob(n,e,t,i,r,s){let o=t[bn],c=o[Fn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Qr(e,n,r,u,s)}else{let l=c,u=o[Ht];qa(i)&&(l.flags|=128),Ud(n,e,l,u,r,s,!0)}}function Lb(n,e,t,i,r){let s=t[hi],o=Ln(t);s!==o&&Qr(e,n,i,s,r);for(let a=cn;a<t.length;a++){let c=t[a];gc(c[$e],c,n,e,i,s)}}function Fb(n,e,t){n.setAttribute(e,"style",t)}function _v(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function xv(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Ru(n,e,i),r!==null&&_v(n,e,r),s!==null&&Fb(n,e,s)}var vc={};function yc(n=1){Mv(vo(),$t(),bd()+n,!1)}function Mv(n,e,t,i){if(!i)if((e[Ie]&3)===3){let s=n.preOrderCheckHooks;s!==null&&La(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Fa(e,s,0,t)}ur(t)}function Bn(n,e=Ge.Default){let t=$t();if(t===null)return Ke(n,e);let i=ei();return Gg(i,t,Mn(n),e)}function wv(n,e,t,i,r,s){let o=ot(null);try{let a=null;r&Di.SignalBased&&(a=e[i][Tp]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Di.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):gg(e,a,i,s)}finally{ot(o)}}function Ub(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)ur(~r);else{let s=r,o=t[++i],a=t[++i];ww(o,s);let c=e[s];a(2,c)}}}finally{ur(-1)}}function kd(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[ln]=r,d[Ie]=i|4|128|8|64,(l!==null||n&&n[Ie]&2048)&&(d[Ie]|=2048),xg(d),d[Ht]=d[po]=n,d[Jn]=t,d[Kn]=o||n&&n[Kn],d[At]=a||n&&n[At],d[is]=c||n&&n[is]||null,d[Fn]=s,d[ac]=qw(),d[On]=u,d[dg]=l,d[bn]=e.type==2?n[bn]:d,d}function Bd(n,e,t,i,r){let s=n.data[e];if(s===null)s=kb(n,e,t,i,r),Mw()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=gw();s.injectorIndex=o===null?-1:o.injectorIndex}return uc(s,!0),s}function kb(n,e,t,i,r){let s=bg(),o=Sg(),a=o?s:s&&s.parent,c=n.data[e]=$b(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function bv(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Sv(n,e,t,i,r){let s=bd(),o=i&2;try{ur(-1),o&&e.length>un&&Mv(n,e,un,!1),Xn(o?2:0,r),t(i,r)}finally{ur(s),Xn(o?3:1,r)}}function Ev(n,e,t){if(fg(e)){let i=ot(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{ot(i)}}}function Bb(n,e,t){wg()&&(Jb(n,e,t,Un(t,e)),(t.flags&64)===64&&Iv(n,e,t))}function Vb(n,e,t=Un){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Cv(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Tv(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Tv(n,e,t,i,r,s,o,a,c,l,u){let d=un+i,h=d+r,m=zb(d,h),g=typeof l=="function"?l():l;return m[$e]={type:n,blueprint:m,template:t,queries:null,viewQuery:a,declTNode:e,data:m.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function zb(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:vc);return t}function Hb(n,e,t,i){let s=i.get(lv,cv)||t===Zn.ShadowDom,o=n.selectRootElement(e,s);return Gb(o),o}function Gb(n){Av(n)}var Av=()=>null;function jb(n){Zg(n)?yv(n):ub(n)}function Wb(){Av=jb}function $b(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return go()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Am(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Di.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Dm(i,t,l,a,c):Dm(i,t,l,a)}return i}function Dm(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function qb(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,m=h?h.inputs:null,g=h?h.outputs:null;c=Am(0,d.inputs,u,c,m),l=Am(1,d.outputs,u,l,g);let _=c!==null&&o!==null&&!hd(e)?oS(c,u,o):null;a.push(_)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function Xb(n,e,t,i){if(wg()){let r=i===null?null:{"":-1},s=Qb(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&Dv(n,e,t,o,r,a),r&&eS(t,i,r)}t.mergedAttrs=dd(t.mergedAttrs,t.attrs)}function Dv(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Ow(Bg(t,e),n,i[l].type);nS(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=bv(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=dd(t.mergedAttrs,u.hostAttrs),iS(n,t,e,c,u),tS(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}qb(n,t,s)}function Yb(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;Zb(o)!=a&&o.push(a),o.push(t,i,s)}}function Zb(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function Jb(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;cc(t)&&rS(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Bg(t,e),rs(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=co(e,n,a,t);if(rs(l,e),o!==null&&sS(e,a-r,l,c,t,o),mo(c)){let u=hr(t.index,e);u[Jn]=co(e,n,a,t)}}}function Iv(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=bw();try{ur(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];ku(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&Kb(c,l)}}finally{ur(-1),ku(o)}}function Kb(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function Qb(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(DM(e,o.selectors,!1))if(i||(i=[]),mo(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;Xu(n,e,c)}else i.unshift(o),Xu(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function Xu(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function eS(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Se(-301,!1);i.push(e[r],s)}}}function tS(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;mo(e)&&(t[""]=n)}}function nS(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function iS(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=ns(r.type,!0)),o=new ao(s,mo(r),Bn);n.blueprint[i]=o,t[i]=o,Yb(n,e,i,bv(n,t,r.hostVars,vc),r)}function rS(n,e,t){let i=Un(e,n),r=Cv(t),s=n[Kn].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Vd(n,kd(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function sS(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];wv(i,t,c,l,u,d)}}function oS(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function aS(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Rv(n,e){let t=n.contentQueries;if(t!==null){let i=ot(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Eg(s),a.contentQueries(2,e[o],o)}}}finally{ot(i)}}}function Vd(n,e){return n[io]?n[vm][Nn]=e:n[io]=e,n[vm]=e,e}function Yu(n,e,t){Eg(0);let i=ot(null);try{e(n,t)}finally{ot(i)}}function cS(n){return n[no]||(n[no]=[])}function lS(n){return n.cleanup||(n.cleanup=[])}function Pv(n,e){let t=n[is],i=t?t.get(fi,null):null;i&&i.handleError(e)}function Nv(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];wv(u,l,i,a,c,r)}}function uS(n,e,t){let i=rw(e,n);_b(n[At],i,t)}function dS(n,e){let t=hr(e,n),i=t[$e];hS(i,t);let r=t[ln];r!==null&&t[On]===null&&(t[On]=Id(r,t[is])),Ov(i,t,t[Jn])}function hS(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Ov(n,e,t){Md(e);try{let i=n.viewQuery;i!==null&&Yu(1,i,t);let r=n.template;r!==null&&Sv(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[oc]?.finishViewCreation(n),n.staticContentQueries&&Rv(n,e),n.staticViewQueries&&Yu(2,n.viewQuery,t);let s=n.components;s!==null&&fS(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ie]&=-5,wd()}}function fS(n,e){for(let t=0;t<e.length;t++)dS(n,e[t])}function Im(n,e){return!e||e.firstChild===null||qa(n)}function pS(n,e,t,i=!0){let r=e[$e];if(bb(r,e,n,t),i){let o=qu(t,n),a=e[At],c=Ld(a,n[hi]);c!==null&&Mb(r,n[Fn],a,e,c,o)}let s=e[On];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Za(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(Ln(s)),Qn(s)&&mS(s,i);let o=t.type;if(o&8)Za(n,e,t.child,i);else if(o&32){let a=Pd(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=vv(e,t);if(Array.isArray(a))i.push(...a);else{let c=oo(e[bn]);Za(c[$e],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function mS(n,e){for(let t=cn;t<n.length;t++){let i=n[t],r=i[$e].firstChild;r!==null&&Za(i[$e],i,r,e)}n[hi]!==n[ln]&&e.push(n[hi])}var Lv=[];function gS(n){return n[lr]??vS(n)}function vS(n){let e=Lv.pop()??Object.create(_S);return e.lView=n,e}function yS(n){n.lView[lr]!==n&&(n.lView=null,Lv.push(n))}var _S=St(pe({},Ap),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{so(n.lView)},consumerOnSignalRead(){this.lView[lr]=this}}),Fv=100;function Uv(n,e=!0,t=0){let i=n[Kn],r=i.rendererFactory,s=!1;s||r.begin?.();try{xS(n,t)}catch(o){throw e&&Pv(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function xS(n,e){Zu(n,e);let t=0;for(;yd(n);){if(t===Fv)throw new Se(103,!1);t++,Zu(n,1)}}function MS(n,e,t,i){let r=e[Ie];if((r&256)===256)return;let s=!1;!s&&e[Kn].inlineEffectRunner?.flush(),Md(e);let o=null,a=null;!s&&wS(n)&&(a=gS(e),o=Dp(a));try{xg(e),_w(n.bindingStartIndex),t!==null&&Sv(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&La(e,d,null)}else{let d=n.preOrderHooks;d!==null&&Fa(e,d,0,null),_u(e,0)}if(bS(e),kv(e,0),n.contentQueries!==null&&Rv(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&La(e,d)}else{let d=n.contentHooks;d!==null&&Fa(e,d,1),_u(e,1)}Ub(n,e);let l=n.components;l!==null&&Vv(e,l,0);let u=n.viewQuery;if(u!==null&&Yu(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&La(e,d)}else{let d=n.viewHooks;d!==null&&Fa(e,d,2),_u(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[yu]){for(let d of e[yu])d();e[yu]=null}s||(e[Ie]&=-73)}catch(c){throw so(e),c}finally{a!==null&&(Ip(a,o),yS(a)),wd()}}function wS(n){return n.type!==2}function kv(n,e){for(let t=Kg(n);t!==null;t=Qg(t))for(let i=cn;i<t.length;i++){let r=t[i];Bv(r,e)}}function bS(n){for(let e=Kg(n);e!==null;e=Qg(e)){if(!(e[Ie]&gd.HasTransplantedViews))continue;let t=e[ja];for(let i=0;i<t.length;i++){let r=t[i],s=r[Ht];cw(r)}}}function SS(n,e,t){let i=hr(e,n);Bv(i,t)}function Bv(n,e){vd(n)&&Zu(n,e)}function Zu(n,e){let i=n[$e],r=n[Ie],s=n[lr],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Kl(s)),s&&(s.dirty=!1),n[Ie]&=-9217,o)MS(i,n,i.template,n[Jn]);else if(r&8192){kv(n,1);let a=i.components;a!==null&&Vv(n,a,1)}}function Vv(n,e,t){for(let i=0;i<e.length;i++)SS(n,e[i],t)}function zd(n){for(n[Kn].changeDetectionScheduler?.notify();n;){n[Ie]|=64;let e=oo(n);if(mg(n)&&!e)return n;n=e}return null}var ss=class{get rootNodes(){let e=this._lView,t=e[$e];return Za(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Jn]}set context(e){this._lView[Jn]=e}get destroyed(){return(this._lView[Ie]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Ht];if(Qn(e)){let t=e[Ga],i=t?t.indexOf(this):-1;i>-1&&($u(e,i),za(t,i))}this._attachedToViewContainer=!1}pv(this._lView[$e],this._lView)}onDestroy(e){Mg(this._lView,e)}markForCheck(){zd(this._cdRefInjectingView||this._lView)}detach(){this._lView[Ie]&=-129}reattach(){Uu(this._lView),this._lView[Ie]|=128}detectChanges(){this._lView[Ie]|=1024,Uv(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Se(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,hv(this._lView[$e],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Se(902,!1);this._appRef=e,Uu(this._lView)}};function zv(n){let e=n[ro]??[],i=n[Ht][At];for(let r of e)ES(r,i);n[ro]=or}function ES(n,e){let t=0,i=n.firstChild;if(i){let r=n.data[Xa];for(;t<r;){let s=i.nextSibling;Fd(e,i,!1),i=s,t++}}}function Hv(n){zv(n);for(let e=cn;e<n.length;e++)Ja(n[e])}function CS(n){let e=n[On]?.i18nNodes;if(e){let t=n[At];for(let i of e.values())Fd(t,i,!1);n[On].i18nNodes=void 0}}function Ja(n){CS(n);let e=n[$e];for(let t=un;t<e.bindingStartIndex;t++)if(Qn(n[t])){let i=n[t];Hv(i)}else di(n[t])&&Ja(n[t])}function TS(n){let e=n._views;for(let t of e){let i=cb(t);if(i!==null&&i[ln]!==null)if(di(i))Ja(i);else{let r=i[ln];Ja(r),Hv(i)}}}var AS=new RegExp(`^(\\d+)*(${iv}|${nv})*(.*)`);function DS(n){let e=n.match(AS),[t,i,r,s]=e,o=i?parseInt(i,10):r,a=[];for(let[c,l,u]of s.matchAll(/(f|n)(\d*)/g)){let d=parseInt(u,10)||1;a.push(l,d)}return[o,...a]}function IS(n){return!n.prev&&n.parent?.type===8}function Eu(n){return n.index-un}function RS(n,e){let t=n.i18nNodes;if(t){let i=t.get(e);return i&&t.delete(e),i}return null}function _c(n,e,t,i){let r=Eu(i),s=RS(n,r);if(!s){let o=n.data[nb];if(o?.[r])s=NS(o[r],t);else if(e.firstChild===i)s=n.firstChild;else{let a=i.prev===null,c=i.prev??i.parent;if(IS(i)){let l=Eu(i.parent);s=Wu(n,l)}else{let l=Un(c,t);if(a)s=l.firstChild;else{let u=Eu(c),d=Wu(n,u);if(c.type===2&&d){let m=Rd(n,u)+1;s=xc(m,d)}else s=l.nextSibling}}}}return s}function xc(n,e){let t=e;for(let i=0;i<n;i++)t=t.nextSibling;return t}function PS(n,e){let t=n;for(let i=0;i<e.length;i+=2){let r=e[i],s=e[i+1];for(let o=0;o<s;o++)switch(r){case ju.FirstChild:t=t.firstChild;break;case ju.NextSibling:t=t.nextSibling;break}}return t}function NS(n,e){let[t,...i]=DS(n),r;if(t===nv)r=e[bn][ln];else if(t===iv)r=vb(e[bn][ln]);else{let s=Number(t);r=Ln(e[s+un])}return PS(r,i)}function OS(n,e){let t=[];for(let i of e)for(let r=0;r<(i[rv]??1);r++){let s={data:i,firstChild:null};i[Xa]>0&&(s.firstChild=n,n=xc(i[Xa],n)),t.push(s)}return[n,t]}var Gv=()=>null;function LS(n,e){let t=n[ro];return!e||t===null||t.length===0?null:t[0].data[tb]===e?t.shift():(zv(n),null)}function FS(){Gv=LS}function Rm(n,e){return Gv(n,e)}var Ju=class{},Ku=class{},Ka=class{};function US(n){let e=Error(`No component factory found for ${an(n)}.`);return e[kS]=n,e}var kS="ngComponent";var Qu=class{resolveComponentFactory(e){throw US(e)}},Mc=(()=>{let e=class e{};e.NULL=new Qu;let n=e;return n})(),lo=class{},gr=(()=>{let e=class e{constructor(){this.destroyNode=null}};e.__NG_ELEMENT_ID__=()=>BS();let n=e;return n})();function BS(){let n=$t(),e=ei(),t=hr(e.index,n);return(di(t)?t:n)[At]}var VS=(()=>{let e=class e{};e.\u0275prov=Ne({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),Cu={};var Pm=new Set;function yo(n){Pm.has(n)||(Pm.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function Nm(...n){}function zS(){let n=typeof Js.requestAnimationFrame=="function",e=Js[n?"requestAnimationFrame":"setTimeout"],t=Js[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var wt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Pn(!1),this.onMicrotaskEmpty=new Pn(!1),this.onStable=new Pn(!1),this.onError=new Pn(!1),typeof Zone>"u")throw new Se(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=zS().nativeRequestAnimationFrame,jS(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Se(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Se(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,HS,Nm,Nm);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},HS={};function Hd(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function GS(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(Js,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,ed(n),n.isCheckStableRunning=!0,Hd(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),ed(n))}function jS(n){let e=()=>{GS(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(WS(a))return t.invokeTask(r,s,o,a);try{return Om(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Lm(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return Om(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),Lm(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,ed(n),Hd(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function ed(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Om(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Lm(n){n._nesting--,Hd(n)}function WS(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}var jv=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of i)r()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=Ne({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function td(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=am(r,a);else if(s==2){let c=a,l=e[++o];i=am(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var Qa=class extends Mc{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=cr(e);return new uo(t,this.ngModule)}};function Fm(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function $S(n){let e=n.toLowerCase();return e==="svg"?ew:e==="math"?tw:null}var nd=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=rc(i);let r=this.injector.get(e,Cu,i);return r!==Cu||t===Cu?r:this.parentInjector.get(e,t,i)}},uo=class extends Ka{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Fm(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Fm(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=NM(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=ot(null);try{r=r||this.ngModule;let o=r instanceof wn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new nd(e,o):e,c=a.get(lo,null);if(c===null)throw new Se(407,!1);let l=a.get(VS,null),u=a.get(jv,null),d=a.get(Ju,null),h={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:u,changeDetectionScheduler:d},m=c.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",_=i?Hb(m,i,this.componentDef.encapsulation,a):mc(m,g,$S(g)),p=512;this.componentDef.signals?p|=4096:this.componentDef.onPush||(p|=16);let f=null;_!==null&&(f=Id(_,a,!0));let b=Tv(0,null,null,1,0,null,null,null,null,null,null),x=kd(null,b,null,p,null,null,h,m,a,null,f);Md(x);let C,P;try{let A=this.componentDef,T,N=null;A.findHostDirectiveDefs?(T=[],N=new Map,A.findHostDirectiveDefs(A,T,N),T.push(A)):T=[A];let w=qS(x,_),y=XS(w,_,A,T,x,h,m);P=sw(b,un),_&&JS(m,A,_,i),t!==void 0&&KS(P,this.ngContentSelectors,t),C=ZS(y,A,T,N,x,[QS]),Ov(b,x,null)}finally{wd()}return new id(this.componentType,C,Cd(P,x),x,P)}finally{ot(s)}}},id=class extends Ku{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new ss(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;Nv(s[$e],s,r,e,t),this.previousInputValues.set(e,t);let o=hr(this._tNode.index,s);zd(o)}}get injector(){return new sr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function qS(n,e){let t=n[$e],i=un;return n[i]=e,Bd(t,i,2,"#host",null)}function XS(n,e,t,i,r,s,o){let a=r[$e];YS(i,n,e,o);let c=null;e!==null&&(c=Id(e,r[is]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=kd(r,Cv(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&Xu(a,n,i.length-1),Vd(r,d),r[n.index]=d}function YS(n,e,t,i){for(let r of n)e.mergedAttrs=dd(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(td(e,e.mergedAttrs,!0),t!==null&&xv(i,t,e))}function ZS(n,e,t,i,r,s){let o=ei(),a=r[$e],c=Un(o,r);Dv(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=co(r,a,d,o);rs(h,r)}Iv(a,r,o),c&&rs(c,r);let l=co(r,a,o.directiveStart+o.componentOffset,o);if(n[Jn]=r[Jn]=l,s!==null)for(let u of s)u(l,e);return Ev(a,o,r),l}function JS(n,e,t,i){if(i)Ru(n,t,["ng-version","17.3.3"]);else{let{attrs:r,classes:s}=OM(e.selectors[0]);r&&Ru(n,t,r),s&&s.length>0&&_v(n,t,s.join(" "))}}function KS(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function QS(){let n=ei();Og($t()[$e],n)}var wc=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=eE;let n=e;return n})();function eE(){let n=ei();return nE(n,$t())}var tE=wc,Wv=class extends tE{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Cd(this._hostTNode,this._hostLView)}get injector(){return new sr(this._hostTNode,this._hostLView)}get parentInjector(){let e=Sd(this._hostTNode,this._hostLView);if(Fg(e)){let t=$a(e,this._hostLView),i=Wa(e),r=t[$e].data[i+8];return new sr(r,t)}else return new sr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Um(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-cn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Rm(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Im(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!ZM(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new uo(cr(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let _=(o?l:this.parentInjector).get(wn,null);_&&(s=_)}let u=cr(c.componentType??{}),d=Rm(this._lContainer,u?.id??null),h=d?.firstChild??null,m=c.create(l,r,h,s);return this.insertImpl(m.hostView,a,Im(this._hostTNode,d)),m}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(aw(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Ht],l=new Wv(c,c[Fn],c[Ht]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return pS(o,r,s,i),e.attachToViewContainerRef(),Jm(Tu(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Um(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=$u(this._lContainer,t);i&&(za(Tu(this._lContainer),t),pv(i[$e],i))}detach(e){let t=this._adjustIndex(e,-1),i=$u(this._lContainer,t);return i&&za(Tu(this._lContainer),t)!=null?new ss(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Um(n){return n[Ga]}function Tu(n){return n[Ga]||(n[Ga]=[])}function nE(n,e){let t,i=e[n.index];return Qn(i)?t=i:(t=aS(i,e,null,n),e[n.index]=t,Vd(e,t)),$v(t,e,n,i),new Wv(t,n,e)}function iE(n,e){let t=n[At],i=t.createComment(""),r=Un(e,n),s=Ld(t,r);return Ya(t,s,i,Ib(t,r),!1),i}var $v=Xv,qv=()=>!1;function Xv(n,e,t,i){if(n[hi])return;let r;t.type&8?r=Ln(i):r=iE(e,t),n[hi]=r}function rE(n,e,t){if(n[hi]&&n[ro])return!0;let i=t[On],r=e.index-un;if(!i||Ww(e)||pc(i,r))return!1;let o=Wu(i,r),a=i.data[Dd]?.[r],[c,l]=OS(o,a);return n[hi]=c,n[ro]=l,!0}function sE(n,e,t,i){qv(n,t,e)||Xv(n,e,t,i)}function oE(){$v=sE,qv=rE}var Ii=class{},ho=class{};var rd=class extends Ii{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Qa(this);let r=sg(e);this._bootstrapComponents=dv(r.bootstrap),this._r3Injector=$g(e,t,[{provide:Ii,useValue:this},{provide:Mc,useValue:this.componentFactoryResolver},...i],an(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},sd=class extends ho{constructor(e){super(),this.moduleType=e}create(e){return new rd(this.moduleType,e,[])}};var ec=class extends Ii{constructor(e){super(),this.componentFactoryResolver=new Qa(this),this.instance=null;let t=new to([...e.providers,{provide:Ii,useValue:this},{provide:Mc,useValue:this.componentFactoryResolver}],e.parent||pd(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Gd(n,e,t=null){return new ec({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var _o=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new zt(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function aE(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function xo(n){return(n.flags&32)===32}var cE=Yv;function Yv(n,e,t,i){return ti(!0),e[At].createComment("")}function lE(n,e,t,i){let r=e[On],s=!r||go()||xo(t)||pc(r,i);if(ti(s),s)return Yv(n,e,t,i);let o=r.data[eb]?.[i]??null;o!==null&&t.tView!==null&&t.tView.ssrId===null&&(t.tView.ssrId=o);let a=_c(r,n,e,t);fc(r,i,a);let c=Rd(r,i);return xc(c,a)}function uE(){cE=lE}function dE(n,e,t,i){return aE(n,xw(),t)?e+Xm(t)+i:vc}function km(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";Nv(n,t,s[o],o,i)}function hE(n,e,t,i,r,s){let o=e.consts,a=_m(o,r),c=Bd(e,n,2,i,a);return Xb(e,t,c,_m(o,s)),c.attrs!==null&&td(c,c.attrs,!1),c.mergedAttrs!==null&&td(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function ce(n,e,t,i){let r=$t(),s=vo(),o=un+n,a=r[At],c=s.firstCreatePass?hE(o,s,r,e,t,i):s.data[o],l=Zv(s,r,c,a,e,n);r[o]=l;let u=pg(c);return uc(c,!0),xv(a,l,c),!xo(c)&&Ng()&&gv(s,r,l,c),uw()===0&&rs(l,r),dw(),u&&(Bb(s,r,c),Ev(s,c,r)),i!==null&&Vb(r,c),ce}function se(){let n=ei();Sg()?vw():(n=n.parent,uc(n,!1));let e=n;fw(e)&&mw(),hw();let t=vo();return t.firstCreatePass&&(Og(t,n),fg(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&Aw(e)&&km(t,e,$t(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Dw(e)&&km(t,e,$t(),e.stylesWithoutHost,!1),se}function ct(n,e,t,i){return ce(n,e,t,i),se(),ct}var Zv=(n,e,t,i,r,s)=>(ti(!0),mc(i,r,Rg()));function fE(n,e,t,i,r,s){let o=e[On],a=!o||go()||xo(t)||pc(o,s);if(ti(a),a)return mc(i,r,Rg());let c=_c(o,n,e,t);return av(o,s)&&fc(o,s,c.nextSibling),o&&(Yg(t)||Zg(c))&&cc(t)&&(pw(t),yv(c)),c}function pE(){Zv=fE}var mE=(n,e,t,i)=>(ti(!0),Od(e[At],""));function gE(n,e,t,i){let r,s=e[On],o=!s||go()||xo(t);if(ti(o),o)return Od(e[At],"");let a=_c(s,n,e,t),c=db(s,i);return fc(s,i,a),r=xc(c,a),r}function vE(){mE=gE}function Jv(){return $t()}var tc="en-US";var yE=tc;function _E(n){typeof n=="string"&&(yE=n.toLowerCase().replace(/_/g,"-"))}function Kv(n,e,t){let i=n[At];switch(t){case Node.COMMENT_NODE:return Od(i,e);case Node.TEXT_NODE:return Nd(i,e);case Node.ELEMENT_NODE:return mc(i,e,null)}}var xE=(n,e,t,i)=>(ti(!0),Kv(n,t,i));function ME(n,e,t,i){return ti(!0),Kv(n,t,i)}function wE(){xE=ME}function vr(n,e,t,i){let r=$t(),s=vo(),o=ei();return SE(s,r,r[At],o,n,e,i),vr}function bE(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[no],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function SE(n,e,t,i,r,s,o){let a=pg(i),l=n.firstCreatePass&&lS(n),u=e[Jn],d=cS(e),h=!0;if(i.type&3||o){let _=Un(i,e),p=o?o(_):_,f=d.length,b=o?C=>o(Ln(C[i.index])):i.index,x=null;if(!o&&a&&(x=bE(n,e,r,i.index)),x!==null){let C=x.__ngLastListenerFn__||x;C.__ngNextListenerFn__=s,x.__ngLastListenerFn__=s,h=!1}else{s=Vm(i,e,u,s,!1);let C=t.listen(p,r,s);d.push(s,C),l&&l.push(r,b,f,f+1)}}else s=Vm(i,e,u,s,!1);let m=i.outputs,g;if(h&&m!==null&&(g=m[r])){let _=g.length;if(_)for(let p=0;p<_;p+=2){let f=g[p],b=g[p+1],P=e[f][b].subscribe(s),A=d.length;d.push(s,P),l&&l.push(r,i.index,A,-(A+1))}}}function Bm(n,e,t,i){let r=ot(null);try{return Xn(6,e,t),t(i)!==!1}catch(s){return Pv(n,s),!1}finally{Xn(7,e,t),ot(r)}}function Vm(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?hr(n.index,e):e;zd(a);let c=Bm(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=Bm(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function jd(n){let e=yw();return ow(e,un+n)}function de(n,e=""){let t=$t(),i=vo(),r=n+un,s=i.firstCreatePass?Bd(i,r,1,e,null):i.data[r],o=Qv(i,t,s,e,n);t[r]=o,Ng()&&gv(i,t,o,s),uc(s,!1)}var Qv=(n,e,t,i,r)=>(ti(!0),Nd(e[At],i));function EE(n,e,t,i,r){let s=e[On],o=!s||go()||xo(t)||pc(s,r);return ti(o),o?Nd(e[At],i):_c(s,n,e,t)}function CE(){Qv=EE}function Mo(n,e,t){let i=$t(),r=dE(i,n,e,t);return r!==vc&&uS(i,bd(),r),Mo}var TE=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=cg(!1,i.type),s=r.length>0?Gd([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=Ne({token:e,providedIn:"environment",factory:()=>new e(Ke(wn))});let n=e;return n})();function It(n){yo("NgStandalone"),n.getStandaloneInjector=e=>e.get(TE).getOrCreateStandaloneInjector(n)}var bc=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();var ey=new ze("");function wo(n){return!!n&&typeof n.then=="function"}function ty(n){return!!n&&typeof n.subscribe=="function"}var ny=new ze(""),iy=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=ie(ny,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(wo(o))i.push(o);else if(ty(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),os=new ze("");function AE(){Pp(()=>{throw new Se(600,!1)})}function DE(n){return n.isBoundToModule}function IE(n,e,t){try{let i=t();return wo(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Ni=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=ie(qg),this.afterRenderEffectManager=ie(jv),this.externalTestViews=new Set,this.beforeRender=new Zt,this.afterTick=new Zt,this.componentTypes=[],this.components=[],this.isStable=ie(_o).hasPendingTasks.pipe(Xe(i=>!i)),this._injector=ie(wn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof Ka;if(!this._injector.get(iy).done){let m=!s&&rg(i),g=!1;throw new Se(405,g)}let a;s?a=i:a=this._injector.get(Mc).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=DE(a)?void 0:this._injector.get(Ii),l=r||a.selector,u=a.create(fr.NULL,[],l,c),d=u.location.nativeElement,h=u.injector.get(ey,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),Au(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){this._tick(!0)}_tick(i){if(this._runningTick)throw new Se(101,!1);let r=ot(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(i)}catch(s){this.internalErrorHandler(s)}finally{this.afterTick.next(),this._runningTick=!1,ot(r)}}detectChangesInAttachedViews(i){let r=0,s=this.afterRenderEffectManager;for(;;){if(r===Fv)throw new Se(103,!1);if(i){let o=r===0;this.beforeRender.next(o);for(let{_lView:a,notifyErrorHandler:c}of this._views)RE(a,o,c)}if(r++,s.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>od(o))&&(s.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>od(o))))break}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;Au(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(os,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>Au(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new Se(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Au(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var Na;function Wd(n){Na??=new WeakMap;let e=Na.get(n);if(e)return e;let t=n.isStable.pipe(In(i=>i)).toPromise().then(()=>{});return Na.set(n,t),n.onDestroy(()=>Na?.delete(n)),t}function RE(n,e,t){!e&&!od(n)||PE(n,t,e)}function od(n){return yd(n)}function PE(n,e,t){let i;t?(i=0,n[Ie]|=1024):n[Ie]&64?i=0:i=1,Uv(n,e,i)}var ad=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},$d=(()=>{let e=class e{compileModuleSync(i){return new sd(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=sg(i),o=dv(s.declarations).reduce((a,c)=>{let l=cr(c);return l&&a.push(new uo(l)),a},[]);return new ad(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var NE=(()=>{let e=class e{constructor(){this.zone=ie(wt),this.applicationRef=ie(Ni)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function OE(n){return[{provide:wt,useFactory:n},{provide:ar,multi:!0,useFactory:()=>{let e=ie(NE,{optional:!0});return()=>e.initialize()}},{provide:ar,multi:!0,useFactory:()=>{let e=ie(kE);return()=>{e.initialize()}}},{provide:qg,useFactory:LE}]}function LE(){let n=ie(wt),e=ie(fi);return t=>n.runOutsideAngular(()=>e.handleError(t))}function FE(n){let e=OE(()=>new wt(UE(n)));return dr([[],e])}function UE(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var kE=(()=>{let e=class e{constructor(){this.subscription=new Nt,this.initialized=!1,this.zone=ie(wt),this.pendingTasks=ie(_o)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{wt.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{wt.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function BE(){return typeof $localize<"u"&&$localize.locale||tc}var qd=new ze("",{providedIn:"root",factory:()=>ie(qd,Ge.Optional|Ge.SkipSelf)||BE()});var ry=new ze("");var ka=null;function VE(n=[],e){return fr.create({name:e,providers:[{provide:sc,useValue:"platform"},{provide:ry,useValue:new Set([()=>ka=null])},...n]})}function zE(n=[]){if(ka)return ka;let e=VE(n);return ka=e,AE(),HE(e),e}function HE(n){n.get(Td,null)?.forEach(t=>t())}var bo=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=GE;let n=e;return n})();function GE(n){return jE(ei(),$t(),(n&16)===16)}function jE(n,e,t){if(cc(n)&&!t){let i=hr(n.index,e);return new ss(i,i)}else if(n.type&47){let i=e[bn];return new ss(i,e)}return null}function sy(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=zE(i),s=[FE(),...t||[]],a=new ec({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(wt);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(fi,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:m=>{l.handleError(m)}})});let d=()=>a.destroy(),h=r.get(ry);return h.add(d),a.onDestroy(()=>{u.unsubscribe(),h.delete(d)}),IE(l,c,()=>{let m=a.get(iy);return m.runInitializers(),m.donePromise.then(()=>{let g=a.get(qd,tc);_E(g||tc);let _=a.get(Ni);return e!==void 0&&_.bootstrap(e),_})})})}catch(e){return Promise.reject(e)}}var zm=!1,WE=!1;function $E(){zm||(zm=!0,ab(),pE(),CE(),vE(),uE(),oE(),FS(),Wb(),wE())}function qE(n,e){return Wd(n)}function oy(){return dr([{provide:Ra,useFactory:()=>{let n=!0;return Pa()&&(n=!!ie(pr,{optional:!0})?.get(sv,null)),n&&yo("NgHydration"),n}},{provide:ar,useValue:()=>{WE=!!ie(hb,{optional:!0}),Pa()&&ie(Ra)&&(XE(),$E())},multi:!0},{provide:lv,useFactory:()=>Pa()&&ie(Ra)},{provide:os,useFactory:()=>{if(Pa()&&ie(Ra)){let n=ie(Ni),e=ie(fr);return()=>{qE(n,e).then(()=>{wt.assertInAngularZone(),TS(n)})}}return()=>{}},multi:!0}])}function XE(){let n=dc(),e;for(let t of n.body.childNodes)if(t.nodeType===Node.COMMENT_NODE&&t.textContent?.trim()===sb){e=t;break}if(!e)throw new Se(-507,!1)}var hy=null;function as(){return hy}function fy(n){hy??=n}var Sc=class{};var Qt=new ze(""),py=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>ie(QE),providedIn:"platform"});let n=e;return n})();var QE=(()=>{let e=class e extends py{constructor(){super(),this._doc=ie(Qt),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return as().getBaseHref(this._doc)}onPopState(i){let r=as().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=as().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>new e,providedIn:"platform"});let n=e;return n})();function my(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function ay(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function yr(n){return n&&n[0]!=="?"?"?"+n:n}var Cc=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>ie(gy),providedIn:"root"});let n=e;return n})(),eC=new ze(""),gy=(()=>{let e=class e extends Cc{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??ie(Qt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return my(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+yr(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+yr(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+yr(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(Ke(py),Ke(eC,8))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var So=(()=>{let e=class e{constructor(i){this._subject=new Pn,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=iC(ay(cy(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+yr(r))}normalize(i){return e.stripTrailingSlash(nC(this._basePath,cy(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+yr(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+yr(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=yr,e.joinWithSlash=my,e.stripTrailingSlash=ay,e.\u0275fac=function(r){return new(r||e)(Ke(Cc))},e.\u0275prov=Ne({token:e,factory:()=>tC(),providedIn:"root"});let n=e;return n})();function tC(){return new So(Ke(Cc))}function nC(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function cy(n){return n.replace(/\/index.html$/,"")}function iC(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function vy(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Xd="browser",rC="server";function yy(n){return n===Xd}function Yd(n){return n===rC}var Ec=class{};var Ac=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),s=r.toLowerCase(),o=t.slice(i+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.setHeaderEntries(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var Cy=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(Cy||{}),Zd=class{constructor(e,t=Ty.Ok,i="OK"){this.headers=e.headers||new Ac,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var Dc=class n extends Zd{constructor(e={}){super(e),this.type=Cy.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};var Ty=function(n){return n[n.Continue=100]="Continue",n[n.SwitchingProtocols=101]="SwitchingProtocols",n[n.Processing=102]="Processing",n[n.EarlyHints=103]="EarlyHints",n[n.Ok=200]="Ok",n[n.Created=201]="Created",n[n.Accepted=202]="Accepted",n[n.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",n[n.NoContent=204]="NoContent",n[n.ResetContent=205]="ResetContent",n[n.PartialContent=206]="PartialContent",n[n.MultiStatus=207]="MultiStatus",n[n.AlreadyReported=208]="AlreadyReported",n[n.ImUsed=226]="ImUsed",n[n.MultipleChoices=300]="MultipleChoices",n[n.MovedPermanently=301]="MovedPermanently",n[n.Found=302]="Found",n[n.SeeOther=303]="SeeOther",n[n.NotModified=304]="NotModified",n[n.UseProxy=305]="UseProxy",n[n.Unused=306]="Unused",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",n[n.BadRequest=400]="BadRequest",n[n.Unauthorized=401]="Unauthorized",n[n.PaymentRequired=402]="PaymentRequired",n[n.Forbidden=403]="Forbidden",n[n.NotFound=404]="NotFound",n[n.MethodNotAllowed=405]="MethodNotAllowed",n[n.NotAcceptable=406]="NotAcceptable",n[n.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",n[n.RequestTimeout=408]="RequestTimeout",n[n.Conflict=409]="Conflict",n[n.Gone=410]="Gone",n[n.LengthRequired=411]="LengthRequired",n[n.PreconditionFailed=412]="PreconditionFailed",n[n.PayloadTooLarge=413]="PayloadTooLarge",n[n.UriTooLong=414]="UriTooLong",n[n.UnsupportedMediaType=415]="UnsupportedMediaType",n[n.RangeNotSatisfiable=416]="RangeNotSatisfiable",n[n.ExpectationFailed=417]="ExpectationFailed",n[n.ImATeapot=418]="ImATeapot",n[n.MisdirectedRequest=421]="MisdirectedRequest",n[n.UnprocessableEntity=422]="UnprocessableEntity",n[n.Locked=423]="Locked",n[n.FailedDependency=424]="FailedDependency",n[n.TooEarly=425]="TooEarly",n[n.UpgradeRequired=426]="UpgradeRequired",n[n.PreconditionRequired=428]="PreconditionRequired",n[n.TooManyRequests=429]="TooManyRequests",n[n.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",n[n.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",n[n.InternalServerError=500]="InternalServerError",n[n.NotImplemented=501]="NotImplemented",n[n.BadGateway=502]="BadGateway",n[n.ServiceUnavailable=503]="ServiceUnavailable",n[n.GatewayTimeout=504]="GatewayTimeout",n[n.HttpVersionNotSupported=505]="HttpVersionNotSupported",n[n.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",n[n.InsufficientStorage=507]="InsufficientStorage",n[n.LoopDetected=508]="LoopDetected",n[n.NotExtended=510]="NotExtended",n[n.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",n}(Ty||{});var oC=new ze("");var _y="b",xy="h",My="s",wy="st",by="u",Sy="rt",Tc=new ze(""),aC=["GET","HEAD"];function cC(n,e){let u=ie(Tc),{isCacheActive:t}=u,i=Ep(u,["isCacheActive"]),{transferCache:r,method:s}=n;if(!t||s==="POST"&&!i.includePostRequests&&!r||s!=="POST"&&!aC.includes(s)||r===!1||i.filter?.(n)===!1)return e(n);let o=ie(pr),a=uC(n),c=o.get(a,null),l=i.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(l=r.includeHeaders),c){let{[_y]:d,[Sy]:h,[xy]:m,[My]:g,[wy]:_,[by]:p}=c,f=d;switch(h){case"arraybuffer":f=new TextEncoder().encode(d).buffer;break;case"blob":f=new Blob([d]);break}let b=new Ac(m);return Te(new Dc({body:f,headers:b,status:g,statusText:_,url:p}))}return e(n).pipe(Lt(d=>{d instanceof Dc&&o.set(a,{[_y]:d.body,[xy]:lC(d.headers,l),[My]:d.status,[wy]:d.statusText,[by]:d.url||"",[Sy]:n.responseType})}))}function lC(n,e){if(!e)return{};let t={};for(let i of e){let r=n.getAll(i);r!==null&&(t[i]=r)}return t}function Ey(n){return[...n.keys()].sort().map(e=>`${e}=${n.getAll(e)}`).join("&")}function uC(n){let{params:e,method:t,responseType:i,url:r}=n,s=Ey(e),o=n.serializeBody();o instanceof URLSearchParams?o=Ey(o):typeof o!="string"&&(o="");let a=[t,i,r,o,s].join("|"),c=dC(a);return c}function dC(n){let e=0;for(let t of n)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Ay(n){return[{provide:Tc,useFactory:()=>(yo("NgHttpTransferCache"),pe({isCacheActive:!0},n))},{provide:oC,useValue:cC,multi:!0,deps:[pr,Tc]},{provide:os,multi:!0,useFactory:()=>{let e=ie(Ni),t=ie(Tc);return()=>{Wd(e).then(()=>{t.isCacheActive=!1})}}}]}var Qd=class extends Sc{constructor(){super(...arguments),this.supportsDOMEvents=!0}},eh=class n extends Qd{static makeCurrent(){fy(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=fC();return t==null?null:pC(t)}resetBaseElement(){Eo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return vy(document.cookie,e)}},Eo=null;function fC(){return Eo=Eo||document.querySelector("base"),Eo?Eo.getAttribute("href"):null}function pC(n){return new URL(n,document.baseURI).pathname}var mC=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),th=new ze(""),Py=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new Se(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(Ke(th),Ke(wt))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),Ic=class{constructor(e){this._doc=e}},Jd="ng-app-id",Ny=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Yd(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${Jd}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(Jd),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(Jd,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(Ke(Qt),Ke(hc),Ke(Ad,8),Ke(kn))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),Kd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},rh=/%COMP%/g,Oy="%COMP%",gC=`_nghost-${Oy}`,vC=`_ngcontent-${Oy}`,yC=!0,_C=new ze("",{providedIn:"root",factory:()=>yC});function xC(n){return vC.replace(rh,n)}function MC(n){return gC.replace(rh,n)}function Ly(n,e){return e.map(t=>t.replace(rh,n))}var Dy=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=Yd(c),this.defaultRenderer=new Co(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Zn.ShadowDom&&(r=St(pe({},r),{encapsulation:Zn.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof Rc?s.applyToHost(i):s instanceof To&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case Zn.Emulated:o=new Rc(l,u,r,this.appId,d,a,c,h);break;case Zn.ShadowDom:return new nh(l,u,i,r,a,c,this.nonce,h);default:o=new To(l,u,r,d,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(Ke(Py),Ke(Ny),Ke(hc),Ke(_C),Ke(Qt),Ke(kn),Ke(wt),Ke(Ad))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),Co=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Kd[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Iy(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Iy(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Se(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Kd[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Kd[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(mr.DashCase|mr.Important)?e.style.setProperty(t,i,r&mr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&mr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=as().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Iy(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var nh=class extends Co{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=Ly(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},To=class extends Co{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?Ly(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Rc=class extends To{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=xC(l),this.hostAttr=MC(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},wC=(()=>{let e=class e extends Ic{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(Ke(Qt))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),Ry=["alt","control","meta","shift"],bC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},SC={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},EC=(()=>{let e=class e extends Ic{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>as().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),Ry.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=bC[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),Ry.forEach(a=>{if(a!==s){let c=SC[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(Ke(Qt))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})();function Fy(n,e){return sy(pe({rootComponent:n},CC(e)))}function CC(n){return{appProviders:[...RC,...n?.providers??[]],platformProviders:IC}}function TC(){eh.makeCurrent()}function AC(){return new fi}function DC(){return tv(document),document}var IC=[{provide:kn,useValue:Xd},{provide:Td,useValue:TC,multi:!0},{provide:Qt,useFactory:DC,deps:[]}];var RC=[{provide:sc,useValue:"root"},{provide:fi,useFactory:AC,deps:[]},{provide:th,useClass:wC,multi:!0,deps:[Qt,wt,kn]},{provide:th,useClass:EC,multi:!0,deps:[Qt]},Dy,Ny,Py,{provide:lo,useExisting:Dy},{provide:Ec,useClass:mC,deps:[]},[]];var Uy=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(Ke(Qt))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ih=function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n}(ih||{});function ky(...n){let e=[],t=new Set,i=t.has(ih.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:s}of n)t.add(s),r.length&&e.push(r);return dr([[],oy(),t.has(ih.NoHttpTransferCache)||i?[]:Ay({}),e])}var Fe="primary",Ho=Symbol("RouteTitle"),lh=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function hs(n){return new lh(n)}function NC(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function OC(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ni(n[t],e[t]))return!1;return!0}function ni(n,e){let t=n?uh(n):void 0,i=e?uh(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!jy(n[r],e[r]))return!1;return!0}function uh(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function jy(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function Wy(n){return n.length>0?n[n.length-1]:null}function Fi(n){return uu(n)?n:wo(n)?Tt(Promise.resolve(n)):Te(n)}var LC={exact:qy,subset:Xy},$y={exact:FC,subset:UC,ignored:()=>!0};function By(n,e,t){return LC[t.paths](n.root,e.root,t.matrixParams)&&$y[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function FC(n,e){return ni(n,e)}function qy(n,e,t){if(!xr(n.segments,e.segments)||!Oc(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!qy(n.children[i],e.children[i],t))return!1;return!0}function UC(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>jy(n[t],e[t]))}function Xy(n,e,t){return Yy(n,e,e.segments,t)}function Yy(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!xr(r,t)||e.hasChildren()||!Oc(r,t,i))}else if(n.segments.length===t.length){if(!xr(n.segments,t)||!Oc(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!Xy(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!xr(n.segments,r)||!Oc(n.segments,r,i)||!n.children[Fe]?!1:Yy(n.children[Fe],e,s,i)}}function Oc(n,e,t){return e.every((i,r)=>$y[t](n[r].parameters,i.parameters))}var Oi=class{constructor(e=new rt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=hs(this.queryParams),this._queryParamMap}toString(){return VC.serialize(this)}},rt=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Lc(this)}},_r=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=hs(this.parameters),this._parameterMap}toString(){return Jy(this)}};function kC(n,e){return xr(n,e)&&n.every((t,i)=>ni(t.parameters,e[i].parameters))}function xr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function BC(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Fe&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Fe&&(t=t.concat(e(r,i)))}),t}var Fh=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>new Uc,providedIn:"root"});let n=e;return n})(),Uc=class{parse(e){let t=new hh(e);return new Oi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ao(e.root,!0)}`,i=GC(e.queryParams),r=typeof e.fragment=="string"?`#${zC(e.fragment)}`:"";return`${t}${i}${r}`}},VC=new Uc;function Lc(n){return n.segments.map(e=>Jy(e)).join("/")}function Ao(n,e){if(!n.hasChildren())return Lc(n);if(e){let t=n.children[Fe]?Ao(n.children[Fe],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Fe&&i.push(`${r}:${Ao(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=BC(n,(i,r)=>r===Fe?[Ao(n.children[Fe],!1)]:[`${r}:${Ao(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Fe]!=null?`${Lc(n)}/${t[0]}`:`${Lc(n)}/(${t.join("//")})`}}function Zy(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Pc(n){return Zy(n).replace(/%3B/gi,";")}function zC(n){return encodeURI(n)}function dh(n){return Zy(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Fc(n){return decodeURIComponent(n)}function Vy(n){return Fc(n.replace(/\+/g,"%20"))}function Jy(n){return`${dh(n.path)}${HC(n.parameters)}`}function HC(n){return Object.entries(n).map(([e,t])=>`;${dh(e)}=${dh(t)}`).join("")}function GC(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Pc(t)}=${Pc(r)}`).join("&"):`${Pc(t)}=${Pc(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var jC=/^[^\/()?;#]+/;function sh(n){let e=n.match(jC);return e?e[0]:""}var WC=/^[^\/()?;=#]+/;function $C(n){let e=n.match(WC);return e?e[0]:""}var qC=/^[^=?&#]+/;function XC(n){let e=n.match(qC);return e?e[0]:""}var YC=/^[^&#]+/;function ZC(n){let e=n.match(YC);return e?e[0]:""}var hh=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new rt([],{}):new rt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Fe]=new rt(e,t)),i}parseSegment(){let e=sh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Se(4009,!1);return this.capture(e),new _r(Fc(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=$C(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=sh(this.remaining);r&&(i=r,this.capture(i))}e[Fc(t)]=Fc(i)}parseQueryParam(e){let t=XC(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=ZC(this.remaining);o&&(i=o,this.capture(i))}let r=Vy(t),s=Vy(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=sh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Se(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Fe);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Fe]:new rt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Se(4011,!1)}};function Ky(n){return n.segments.length>0?new rt([],{[Fe]:n}):n}function Qy(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=Qy(r);if(i===Fe&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new rt(n.segments,e);return JC(t)}function JC(n){if(n.numberOfChildren===1&&n.children[Fe]){let e=n.children[Fe];return new rt(n.segments.concat(e.segments),e.children)}return n}function fs(n){return n instanceof Oi}function KC(n,e,t=null,i=null){let r=e0(n);return t0(r,e,t,i)}function e0(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new rt(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=Ky(i);return e??r}function t0(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return oh(r,r,r,t,i);let s=QC(e);if(s.toRoot())return oh(r,r,new rt([],{}),t,i);let o=eT(s,r,n),a=o.processChildren?Ro(o.segmentGroup,o.index,s.commands):i0(o.segmentGroup,o.index,s.commands);return oh(r,o.segmentGroup,a,t,i)}function kc(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Oo(n){return typeof n=="object"&&n!=null&&n.outlets}function oh(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=n0(n,e,t);let a=Ky(Qy(o));return new Oi(a,s,r)}function n0(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=n0(s,e,t)}),new rt(n.segments,i)}var Bc=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&kc(i[0]))throw new Se(4003,!1);let r=i.find(Oo);if(r&&r!==Wy(i))throw new Se(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function QC(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Bc(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Bc(t,e,i)}var us=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function eT(n,e,t){if(n.isAbsolute)return new us(e,!0,0);if(!t)return new us(e,!1,NaN);if(t.parent===null)return new us(t,!0,0);let i=kc(n.commands[0])?0:1,r=t.segments.length-1+i;return tT(t,r,n.numberOfDoubleDots)}function tT(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Se(4005,!1);r=i.segments.length}return new us(i,!1,r-s)}function nT(n){return Oo(n[0])?n[0].outlets:{[Fe]:n}}function i0(n,e,t){if(n??=new rt([],{}),n.segments.length===0&&n.hasChildren())return Ro(n,e,t);let i=iT(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new rt(n.segments.slice(0,i.pathIndex),{});return s.children[Fe]=new rt(n.segments.slice(i.pathIndex),n.children),Ro(s,0,r)}else return i.match&&r.length===0?new rt(n.segments,{}):i.match&&!n.hasChildren()?fh(n,e,t):i.match?Ro(n,0,r):fh(n,e,t)}function Ro(n,e,t){if(t.length===0)return new rt(n.segments,{});{let i=nT(t),r={};if(Object.keys(i).some(s=>s!==Fe)&&n.children[Fe]&&n.numberOfChildren===1&&n.children[Fe].segments.length===0){let s=Ro(n.children[Fe],e,t);return new rt(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=i0(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new rt(n.segments,r)}}function iT(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Oo(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!Hy(c,l,o))return s;i+=2}else{if(!Hy(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function fh(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Oo(s)){let c=rT(s.outlets);return new rt(i,c)}if(r===0&&kc(t[0])){let c=n.segments[e];i.push(new _r(c.path,zy(t[0]))),r++;continue}let o=Oo(s)?s.outlets[Fe]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&kc(a)?(i.push(new _r(o,zy(a))),r+=2):(i.push(new _r(o,{})),r++)}return new rt(i,{})}function rT(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=fh(new rt([],{}),0,i))}),e}function zy(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function Hy(n,e,t){return n==t.path&&ni(e,t.parameters)}var Po="imperative",Gt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Gt||{}),Sn=class{constructor(e,t){this.id=e,this.url=t}},Lo=class extends Sn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=Gt.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Mr=class extends Sn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=Gt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},fn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(fn||{}),ph=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(ph||{}),Li=class extends Sn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Gt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},wr=class extends Sn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Gt.NavigationSkipped}},Fo=class extends Sn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=Gt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Vc=class extends Sn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Gt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},mh=class extends Sn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Gt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gh=class extends Sn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=Gt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},vh=class extends Sn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Gt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},yh=class extends Sn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Gt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},_h=class{constructor(e){this.route=e,this.type=Gt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},xh=class{constructor(e){this.route=e,this.type=Gt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Mh=class{constructor(e){this.snapshot=e,this.type=Gt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},wh=class{constructor(e){this.snapshot=e,this.type=Gt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},bh=class{constructor(e){this.snapshot=e,this.type=Gt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Sh=class{constructor(e){this.snapshot=e,this.type=Gt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Uo=class{},ko=class{constructor(e){this.url=e}};var Eh=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new $c,this.attachRef=null}},$c=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new Eh,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),zc=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Ch(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Ch(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Th(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Th(e,this._root).map(t=>t.value)}};function Ch(n,e){if(n===e.value)return e;for(let t of e.children){let i=Ch(n,t);if(i)return i}return null}function Th(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Th(n,t);if(i.length)return i.unshift(e),i}return[]}var hn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function ls(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Hc=class extends zc{constructor(e,t){super(e),this.snapshot=t,kh(this,e)}toString(){return this.snapshot.toString()}};function r0(n){let e=sT(n),t=new zt([new _r("",{})]),i=new zt({}),r=new zt({}),s=new zt({}),o=new zt(""),a=new ps(t,i,s,o,r,Fe,n,e.root);return a.snapshot=e.root,new Hc(new hn(a,[]),e)}function sT(n){let e={},t={},i={},r="",s=new Bo([],e,i,r,t,Fe,n,null,{});return new Gc("",new hn(s,[]))}var ps=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Xe(l=>l[Ho]))??Te(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Xe(e=>hs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Xe(e=>hs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Uh(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:pe(pe({},e.params),n.params),data:pe(pe({},e.data),n.data),resolve:pe(pe(pe(pe({},n.data),e.data),r?.data),n._resolvedData)}:i={params:pe({},n.params),data:pe({},n.data),resolve:pe(pe({},n.data),n._resolvedData??{})},r&&o0(r)&&(i.resolve[Ho]=r.title),i}var Bo=class{get title(){return this.data?.[Ho]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=hs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=hs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Gc=class extends zc{constructor(e,t){super(t),this.url=e,kh(this,t)}toString(){return s0(this._root)}};function kh(n,e){e.value._routerState=n,e.children.forEach(t=>kh(n,t))}function s0(n){let e=n.children.length>0?` { ${n.children.map(s0).join(", ")} } `:"";return`${n.value}${e}`}function ah(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ni(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ni(e.params,t.params)||n.paramsSubject.next(t.params),OC(e.url,t.url)||n.urlSubject.next(t.url),ni(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Ah(n,e){let t=ni(n.params,e.params)&&kC(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Ah(n.parent,e.parent))}function o0(n){return typeof n.title=="string"||n.title===null}var Bh=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=Fe,this.activateEvents=new Pn,this.deactivateEvents=new Pn,this.attachEvents=new Pn,this.detachEvents=new Pn,this.parentContexts=ie($c),this.location=ie(wc),this.changeDetector=ie(bo),this.environmentInjector=ie(wn),this.inputBinder=ie(Vh,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Se(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Se(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Se(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new Se(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Dh(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=fo({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[lc]});let n=e;return n})(),Dh=class{constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i,this.__ngOutletInjector=!0}get(e,t){return e===ps?this.route:e===$c?this.childContexts:this.parent.get(e,t)}},Vh=new ze("");function oT(n,e,t){let i=Vo(n,e._root,t?t._root:void 0);return new Hc(i,e)}function Vo(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=aT(n,e,t);return new hn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Vo(n,a)),o}}let i=cT(e.value),r=e.children.map(s=>Vo(n,s));return new hn(i,r)}}function aT(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Vo(n,i,r);return Vo(n,i)})}function cT(n){return new ps(new zt(n.url),new zt(n.params),new zt(n.queryParams),new zt(n.fragment),new zt(n.data),n.outlet,n.component,n)}var a0="ngNavigationCancelingError";function c0(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=fs(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=l0(!1,fn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function l0(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[a0]=!0,t.cancellationCode=e,t}function lT(n){return u0(n)&&fs(n.url)}function u0(n){return!!n&&n[a0]}var uT=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Dt({type:e,selectors:[["ng-component"]],standalone:!0,features:[It],decls:1,vars:0,template:function(r,s){r&1&&ct(0,"router-outlet")},dependencies:[Bh],encapsulation:2});let n=e;return n})();function dT(n,e){return n.providers&&!n._injector&&(n._injector=Gd(n.providers,e,`Route: ${n.path}`)),n._injector??e}function zh(n){let e=n.children&&n.children.map(zh),t=e?St(pe({},n),{children:e}):pe({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Fe&&(t.component=uT),t}function ii(n){return n.outlet||Fe}function hT(n,e){let t=n.filter(i=>ii(i)===e);return t.push(...n.filter(i=>ii(i)!==e)),t}function Go(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var fT=(n,e,t,i)=>Xe(r=>(new Ih(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Ih=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),ah(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=ls(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ls(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ls(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=ls(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Sh(s.value.snapshot))}),e.children.length&&this.forwardEvent(new wh(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(ah(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),ah(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=Go(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},jc=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},ds=class{constructor(e,t){this.component=e,this.route=t}};function pT(n,e,t){let i=n._root,r=e?e._root:null;return Do(i,r,t,[i.value])}function mT(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function gs(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!jm(n)?n:e.get(n):i}function Do(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=ls(e);return n.children.forEach(o=>{gT(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>No(a,t.getContext(o),r)),r}function gT(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=vT(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new jc(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Do(n,e,a?a.children:null,i,r):Do(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ds(a.outlet.component,o))}else o&&No(e,a,r),r.canActivateChecks.push(new jc(i)),s.component?Do(n,null,a?a.children:null,i,r):Do(n,null,t,i,r);return r}function vT(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!xr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!xr(n.url,e.url)||!ni(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ah(n,e)||!ni(n.queryParams,e.queryParams);case"paramsChange":default:return!Ah(n,e)}}function No(n,e,t){let i=ls(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?No(o,e.children.getContext(s),t):No(o,null,t):No(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new ds(e.outlet.component,r)):t.canDeactivateChecks.push(new ds(null,r)):t.canDeactivateChecks.push(new ds(null,r))}function jo(n){return typeof n=="function"}function yT(n){return typeof n=="boolean"}function _T(n){return n&&jo(n.canLoad)}function xT(n){return n&&jo(n.canActivate)}function MT(n){return n&&jo(n.canActivateChild)}function wT(n){return n&&jo(n.canDeactivate)}function bT(n){return n&&jo(n.canMatch)}function d0(n){return n instanceof li||n?.name==="EmptyError"}var Nc=Symbol("INITIAL_VALUE");function ms(){return _n(n=>Aa(n.map(e=>e.pipe(ui(1),mu(Nc)))).pipe(Xe(e=>{for(let t of e)if(t!==!0){if(t===Nc)return Nc;if(t===!1||t instanceof Oi)return t}return!0}),yn(e=>e!==Nc),ui(1)))}function ST(n,e){return Ot(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Te(St(pe({},t),{guardsResult:!0})):ET(o,i,r,n).pipe(Ot(a=>a&&yT(a)?CT(i,s,n,e):Te(a)),Xe(a=>St(pe({},t),{guardsResult:a})))})}function ET(n,e,t,i){return Tt(n).pipe(Ot(r=>RT(r.component,r.route,t,e,i)),In(r=>r!==!0,!0))}function CT(n,e,t,i){return Tt(e).pipe(rr(r=>Xr(AT(r.route.parent,i),TT(r.route,i),IT(n,r.path,t),DT(n,r.route,t))),In(r=>r!==!0,!0))}function TT(n,e){return n!==null&&e&&e(new bh(n)),Te(!0)}function AT(n,e){return n!==null&&e&&e(new Mh(n)),Te(!0)}function DT(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Te(!0);let r=i.map(s=>Da(()=>{let o=Go(e)??t,a=gs(s,o),c=xT(a)?a.canActivate(e,n):Ri(o,()=>a(e,n));return Fi(c).pipe(In())}));return Te(r).pipe(ms())}function IT(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>mT(o)).filter(o=>o!==null).map(o=>Da(()=>{let a=o.guards.map(c=>{let l=Go(o.node)??t,u=gs(c,l),d=MT(u)?u.canActivateChild(i,n):Ri(l,()=>u(i,n));return Fi(d).pipe(In())});return Te(a).pipe(ms())}));return Te(s).pipe(ms())}function RT(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Te(!0);let o=s.map(a=>{let c=Go(e)??r,l=gs(a,c),u=wT(l)?l.canDeactivate(n,e,t,i):Ri(c,()=>l(n,e,t,i));return Fi(u).pipe(In())});return Te(o).pipe(ms())}function PT(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Te(!0);let s=r.map(o=>{let a=gs(o,n),c=_T(a)?a.canLoad(e,t):Ri(n,()=>a(e,t));return Fi(c)});return Te(s).pipe(ms(),h0(i))}function h0(n){return ou(Lt(e=>{if(fs(e))throw c0(n,e)}),Xe(e=>e===!0))}function NT(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Te(!0);let s=r.map(o=>{let a=gs(o,n),c=bT(a)?a.canMatch(e,t):Ri(n,()=>a(e,t));return Fi(c)});return Te(s).pipe(ms(),h0(i))}var zo=class{constructor(e){this.segmentGroup=e||null}},Wc=class extends Error{constructor(e){super(),this.urlTree=e}};function cs(n){return qr(new zo(n))}function OT(n){return qr(new Se(4e3,!1))}function LT(n){return qr(l0(!1,fn.GuardRejected))}var Rh=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Te(i);if(r.numberOfChildren>1||!r.children[Fe])return OT(e.redirectTo);r=r.children[Fe]}}applyRedirectCommands(e,t,i){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t.startsWith("/"))throw new Wc(r);return r}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Oi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new rt(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Se(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Ph={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function FT(n,e,t,i,r){let s=Hh(n,e,t);return s.matched?(i=dT(e,i),NT(i,e,t,r).pipe(Xe(o=>o===!0?s:pe({},Ph)))):Te(s)}function Hh(n,e,t){if(e.path==="**")return UT(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?pe({},Ph):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||NC)(t,n,e);if(!r)return pe({},Ph);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?pe(pe({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function UT(n){return{matched:!0,parameters:n.length>0?Wy(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function Gy(n,e,t,i){return t.length>0&&VT(n,t,i)?{segmentGroup:new rt(e,BT(i,new rt(t,n.children))),slicedSegments:[]}:t.length===0&&zT(n,t,i)?{segmentGroup:new rt(n.segments,kT(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new rt(n.segments,n.children),slicedSegments:t}}function kT(n,e,t,i){let r={};for(let s of t)if(qc(n,e,s)&&!i[ii(s)]){let o=new rt([],{});r[ii(s)]=o}return pe(pe({},i),r)}function BT(n,e){let t={};t[Fe]=e;for(let i of n)if(i.path===""&&ii(i)!==Fe){let r=new rt([],{});t[ii(i)]=r}return t}function VT(n,e,t){return t.some(i=>qc(n,e,i)&&ii(i)!==Fe)}function zT(n,e,t){return t.some(i=>qc(n,e,i))}function qc(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function HT(n,e,t,i){return ii(n)!==i&&(i===Fe||!qc(e,t,n))?!1:Hh(e,n,t).matched}function GT(n,e,t){return e.length===0&&!n.children[t]}var Nh=class{};function jT(n,e,t,i,r,s,o="emptyOnly"){return new Oh(n,e,t,i,r,o,s).recognize()}var WT=31,Oh=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Rh(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new Se(4002,`'${e.segmentGroup}'`)}recognize(){let e=Gy(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Xe(t=>{let i=new Bo([],Object.freeze({}),Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,{},Fe,this.rootComponentType,null,{}),r=new hn(i,t),s=new Gc("",r),o=KC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,Fe).pipe(Ei(i=>{if(i instanceof Wc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof zo?this.noMatchError(i):i}))}inheritParamsAndData(e,t){let i=e.value,r=Uh(i,t,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0).pipe(Xe(s=>s instanceof hn?[s]:[]))}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return Tt(r).pipe(rr(s=>{let o=i.children[s],a=hT(t,s);return this.processSegmentGroup(e,a,o,s)}),pu((s,o)=>(s.push(...o),s)),Ci(null),fu(),Ot(s=>{if(s===null)return cs(i);let o=f0(s);return $T(o),Te(o)}))}processSegment(e,t,i,r,s,o){return Tt(t).pipe(rr(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(Ei(c=>{if(c instanceof zo)return Te(null);throw c}))),In(a=>!!a),Ei(a=>{if(d0(a))return GT(i,r,s)?Te(new Nh):cs(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return HT(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):cs(r):cs(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=Hh(t,r,s);if(!a)return cs(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>WT&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,d).pipe(Ot(h=>this.processSegment(e,i,t,h.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s){let o=FT(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),o.pipe(_n(a=>a.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(_n(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:d,parameters:h}=a,m=new Bo(u,h,Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,XT(i),ii(i),i.component??i._loadedComponent??null,i,YT(i)),{segmentGroup:g,slicedSegments:_}=Gy(t,u,d,c);if(_.length===0&&g.hasChildren())return this.processChildren(l,c,g).pipe(Xe(f=>f===null?null:new hn(m,f)));if(c.length===0&&_.length===0)return Te(new hn(m,[]));let p=ii(i)===s;return this.processSegment(l,c,g,_,p?Fe:s,!0).pipe(Xe(f=>new hn(m,f instanceof hn?[f]:[])))}))):cs(t)))}getChildConfig(e,t,i){return t.children?Te({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Te({routes:t._loadedRoutes,injector:t._loadedInjector}):PT(e,t,i,this.urlSerializer).pipe(Ot(r=>r?this.configLoader.loadChildren(e,t).pipe(Lt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):LT(t))):Te({routes:[],injector:e})}};function $T(n){n.sort((e,t)=>e.value.outlet===Fe?-1:t.value.outlet===Fe?1:e.value.outlet.localeCompare(t.value.outlet))}function qT(n){let e=n.value.routeConfig;return e&&e.path===""}function f0(n){let e=[],t=new Set;for(let i of n){if(!qT(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=f0(i.children);e.push(new hn(i.value,r))}return e.filter(i=>!t.has(i))}function XT(n){return n.data||{}}function YT(n){return n.resolve||{}}function ZT(n,e,t,i,r,s){return Ot(o=>jT(n,e,t,i,o.extractedUrl,r,s).pipe(Xe(({state:a,tree:c})=>St(pe({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function JT(n,e){return Ot(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Te(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of p0(c))o.add(l);let a=0;return Tt(o).pipe(rr(c=>s.has(c)?KT(c,i,n,e):(c.data=Uh(c,c.parent,n).resolve,Te(void 0))),Lt(()=>a++),Zr(1),Ot(c=>a===o.size?Te(t):on))})}function p0(n){let e=n.children.map(t=>p0(t)).flat();return[n,...e]}function KT(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!o0(r)&&(s[Ho]=r.title),QT(s,n,e,i).pipe(Xe(o=>(n._resolvedData=o,n.data=Uh(n,n.parent,t).resolve,null)))}function QT(n,e,t,i){let r=uh(n);if(r.length===0)return Te({});let s={};return Tt(r).pipe(Ot(o=>eA(n[o],e,t,i).pipe(In(),Lt(a=>{s[o]=a}))),Zr(1),hu(s),Ei(o=>d0(o)?on:qr(o)))}function eA(n,e,t,i){let r=Go(e)??i,s=gs(n,r),o=s.resolve?s.resolve(e,t):Ri(r,()=>s(e,t));return Fi(o)}function ch(n){return _n(e=>{let t=n(e);return t?Tt(t).pipe(Xe(()=>e)):Te(e)})}var m0=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===Fe);return r}getResolvedTitleForRoute(i){return i.data[Ho]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>ie(tA),providedIn:"root"});let n=e;return n})(),tA=(()=>{let e=class e extends m0{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(Ke(Uy))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Gh=new ze("",{providedIn:"root",factory:()=>({})}),jh=new ze(""),nA=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=ie($d)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Te(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Fi(i.loadComponent()).pipe(Xe(g0),Lt(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),Yr(()=>{this.componentLoaders.delete(i)})),s=new $r(r,()=>new Zt).pipe(Wr());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Te({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=iA(r,this.compiler,i,this.onLoadEndListener).pipe(Yr(()=>{this.childrenLoaders.delete(r)})),a=new $r(o,()=>new Zt).pipe(Wr());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function iA(n,e,t,i){return Fi(n.loadChildren()).pipe(Xe(g0),Ot(r=>r instanceof ho||Array.isArray(r)?Te(r):Tt(e.compileModuleAsync(r))),Xe(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(jh,[],{optional:!0,self:!0}).flat()),{routes:o.map(zh),injector:s}}))}function rA(n){return n&&typeof n=="object"&&"default"in n}function g0(n){return rA(n)?n.default:n}var Wh=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>ie(sA),providedIn:"root"});let n=e;return n})(),sA=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),oA=new ze("");var aA=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new Zt,this.transitionAbortSubject=new Zt,this.configLoader=ie(nA),this.environmentInjector=ie(wn),this.urlSerializer=ie(Fh),this.rootContexts=ie($c),this.location=ie(So),this.inputBindingEnabled=ie(Vh,{optional:!0})!==null,this.titleStrategy=ie(m0),this.options=ie(Gh,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=ie(Wh),this.createViewTransition=ie(oA,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Te(void 0),this.rootComponentType=null;let i=s=>this.events.next(new _h(s)),r=s=>this.events.next(new xh(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(St(pe(pe({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new zt({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Po,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(yn(o=>o.id!==0),Xe(o=>St(pe({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),_n(o=>{let a=!1,c=!1;return Te(o).pipe(_n(l=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",fn.SupersededByNewNavigation),on;this.currentTransition=o,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?St(pe({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let u=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!u&&d!=="reload"){let h="";return this.events.next(new wr(l.id,this.urlSerializer.serialize(l.rawUrl),h,ph.IgnoredSameUrlNavigation)),l.resolve(null),on}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Te(l).pipe(_n(h=>{let m=this.transitions?.getValue();return this.events.next(new Lo(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),m!==this.transitions?.getValue()?on:Promise.resolve(h)}),ZT(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),Lt(h=>{o.targetSnapshot=h.targetSnapshot,o.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=St(pe({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let m=new Vc(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(m)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:m,source:g,restoredState:_,extras:p}=l,f=new Lo(h,this.urlSerializer.serialize(m),g,_);this.events.next(f);let b=r0(this.rootComponentType).snapshot;return this.currentTransition=o=St(pe({},l),{targetSnapshot:b,urlAfterRedirects:m,extras:St(pe({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,Te(o)}else{let h="";return this.events.next(new wr(l.id,this.urlSerializer.serialize(l.extractedUrl),h,ph.IgnoredByUrlHandlingStrategy)),l.resolve(null),on}}),Lt(l=>{let u=new mh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Xe(l=>(this.currentTransition=o=St(pe({},l),{guards:pT(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),ST(this.environmentInjector,l=>this.events.next(l)),Lt(l=>{if(o.guardsResult=l.guardsResult,fs(l.guardsResult))throw c0(this.urlSerializer,l.guardsResult);let u=new gh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),yn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",fn.GuardRejected),!1)),ch(l=>{if(l.guards.canActivateChecks.length)return Te(l).pipe(Lt(u=>{let d=new vh(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),_n(u=>{let d=!1;return Te(u).pipe(JT(this.paramsInheritanceStrategy,this.environmentInjector),Lt({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",fn.NoDataFromResolver)}}))}),Lt(u=>{let d=new yh(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),ch(l=>{let u=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(Lt(m=>{d.component=m}),Xe(()=>{})));for(let m of d.children)h.push(...u(m));return h};return Aa(u(l.targetSnapshot.root)).pipe(Ci(null),ui(1))}),ch(()=>this.afterPreactivation()),_n(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return d?Tt(d).pipe(Xe(()=>o)):Te(o)}),Xe(l=>{let u=oT(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=St(pe({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),Lt(()=>{this.events.next(new Uo)}),fT(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),ui(1),Lt({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Mr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),gu(this.transitionAbortSubject.pipe(Lt(l=>{throw l}))),Yr(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",fn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ei(l=>{if(c=!0,u0(l))this.events.next(new Li(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),lT(l)?this.events.next(new ko(l.url)):o.resolve(!1);else{this.events.next(new Fo(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return on}))}))}cancelNavigationTransition(i,r,s){let o=new Li(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function cA(n){return n!==Po}var lA=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>ie(uA),providedIn:"root"});let n=e;return n})(),Lh=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},uA=(()=>{let e=class e extends Lh{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Ed(e)))(s||e)}})(),e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),v0=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>ie(dA),providedIn:"root"});let n=e;return n})(),dA=(()=>{let e=class e extends v0{constructor(){super(...arguments),this.location=ie(So),this.urlSerializer=ie(Fh),this.options=ie(Gh,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=ie(Wh),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Oi,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=r0(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof Lo)this.stateMemento=this.createStateMemento();else if(i instanceof wr)this.rawUrlTree=r.initialUrl;else if(i instanceof Vc){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else i instanceof Uo?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof Li&&(i.code===fn.GuardRejected||i.code===fn.NoDataFromResolver)?this.restoreHistory(r):i instanceof Fo?this.restoreHistory(r,!0):i instanceof Mr&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=pe(pe({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=pe(pe({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===i.finalUrl&&o===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Ed(e)))(s||e)}})(),e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Io=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Io||{});function hA(n,e){n.events.pipe(yn(t=>t instanceof Mr||t instanceof Li||t instanceof Fo||t instanceof wr),Xe(t=>t instanceof Mr||t instanceof wr?Io.COMPLETE:(t instanceof Li?t.code===fn.Redirect||t.code===fn.SupersededByNewNavigation:!1)?Io.REDIRECTING:Io.FAILED),yn(t=>t!==Io.REDIRECTING),ui(1)).subscribe(()=>{e()})}function fA(n){throw n}var pA={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},mA={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},y0=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=ie(bc),this.stateManager=ie(v0),this.options=ie(Gh,{optional:!0})||{},this.pendingTasks=ie(_o),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=ie(aA),this.urlSerializer=ie(Fh),this.location=ie(So),this.urlHandlingStrategy=ie(Wh),this._events=new Zt,this.errorHandler=this.options.errorHandler||fA,this.navigated=!1,this.routeReuseStrategy=ie(lA),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=ie(jh,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!ie(Vh,{optional:!0}),this.eventsSubscription=new Nt,this.isNgZoneEnabled=ie(wt)instanceof wt&&wt.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Li&&r.code!==fn.Redirect&&r.code!==fn.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Mr)this.navigated=!0;else if(r instanceof ko){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||cA(s.source)};this.scheduleNavigation(a,Po,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}vA(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Po,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)})}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=pe({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(zh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=pe(pe({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let m=s?s.snapshot:this.routerState.snapshot.root;h=e0(m)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return t0(h,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=fs(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,Po,null,r)}navigate(i,r={skipLocationChange:!1}){return gA(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let s;if(r===!0?s=pe({},pA):r===!1?s=pe({},mA):s=r,fs(i))return By(this.currentUrlTree,i,s);let o=this.parseUrl(i);return By(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.entries(i).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((h,m)=>{c=h,l=m});let d=this.pendingTasks.add();return hA(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function gA(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Se(4008,!1)}function vA(n){return!(n instanceof Uo)&&!(n instanceof ko)}var yA=new ze("");function _0(n,...e){return dr([{provide:jh,multi:!0,useValue:n},[],{provide:ps,useFactory:_A,deps:[y0]},{provide:os,multi:!0,useFactory:xA},e.map(t=>t.\u0275providers)])}function _A(n){return n.routerState.root}function xA(){let n=ie(fr);return e=>{let t=n.get(Ni);if(e!==t.components[0])return;let i=n.get(y0),r=n.get(MA);n.get(wA)===1&&i.initialNavigation(),n.get(bA,null,Ge.Optional)?.setUpPreloading(),n.get(yA,null,Ge.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var MA=new ze("",{factory:()=>new Zt}),wA=new ze("",{providedIn:"root",factory:()=>1});var bA=new ze("");var up="163";var SA=0,x0=1,EA=2;var W_=1,CA=2,_i=3,Xi=0,nn=1,Gn=2,Wi=0,Us=1,M0=2,w0=3,b0=4,TA=5,Ir=100,AA=101,DA=102,IA=103,RA=104,PA=200,NA=201,OA=202,LA=203,Af=204,Df=205,FA=206,UA=207,kA=208,BA=209,VA=210,zA=211,HA=212,GA=213,jA=214,WA=0,$A=1,qA=2,vl=3,XA=4,YA=5,ZA=6,JA=7,$_=0,KA=1,QA=2,$i=0,eD=1,tD=2,nD=3,iD=4,rD=5,sD=6,oD=7;var S0=300,zs=301,Hs=302,If=303,Rf=304,jl=306,Pf=1e3,Pr=1001,Nf=1002,Cn=1003,aD=1004;var Xc=1005;var jn=1006,$h=1007;var Nr=1008;var qi=1009,cD=1010,lD=1011,q_=1012,X_=1013,Gs=1014,ji=1015,yl=1016,Y_=1017,Z_=1018,ra=1020,uD=35902,dD=1021,hD=1022,oi=1023,fD=1024,pD=1025,ks=1026,Qo=1027,mD=1028,J_=1029,gD=1030,K_=1031,Q_=1033,qh=33776,Xh=33777,Yh=33778,Zh=33779,E0=35840,C0=35841,T0=35842,A0=35843,ex=36196,D0=37492,I0=37496,R0=37808,P0=37809,N0=37810,O0=37811,L0=37812,F0=37813,U0=37814,k0=37815,B0=37816,V0=37817,z0=37818,H0=37819,G0=37820,j0=37821,Jh=36492,W0=36494,$0=36495,vD=36283,q0=36284,X0=36285,Y0=36286;var _l=2300,xl=2301,Kh=2302,Z0=2400,J0=2401,K0=2402;var yD=3200,_D=3201,tx=0,xD=1,Gi="",ri="srgb",Ki="srgb-linear",dp="display-p3",Wl="display-p3-linear",Ml="linear",mt="srgb",wl="rec709",bl="p3";var vs=7680;var Q0=519,MD=512,wD=513,bD=514,nx=515,SD=516,ED=517,CD=518,TD=519,e_=35044;var t_="300 es",Mi=2e3,Sl=2001,Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qh=Math.PI/180,Of=180/Math.PI;function sa(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function tn(n,e,t){return Math.max(e,Math.min(t,n))}function AD(n,e){return(n%e+e)%e}function ef(n,e,t){return(1-t)*n+t*e}function Wo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var je=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],_=r[0],p=r[3],f=r[6],b=r[1],x=r[4],C=r[7],P=r[2],A=r[5],T=r[8];return s[0]=o*_+a*b+c*P,s[3]=o*p+a*x+c*A,s[6]=o*f+a*C+c*T,s[1]=l*_+u*b+d*P,s[4]=l*p+u*x+d*A,s[7]=l*f+u*C+d*T,s[2]=h*_+m*b+g*P,s[5]=h*p+m*x+g*A,s[8]=h*f+m*C+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,m=l*s-o*c,g=t*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tf.makeScale(e,t)),this}rotate(e){return this.premultiply(tf.makeRotation(-e)),this}translate(e,t){return this.premultiply(tf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tf=new Ve;function ix(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function El(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DD(){let n=El("canvas");return n.style.display="block",n}var n_={};function ID(n){n in n_||(n_[n]=!0,console.warn(n))}var i_=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),r_=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yc={[Ki]:{transfer:Ml,primaries:wl,toReference:n=>n,fromReference:n=>n},[ri]:{transfer:mt,primaries:wl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Wl]:{transfer:Ml,primaries:bl,toReference:n=>n.applyMatrix3(r_),fromReference:n=>n.applyMatrix3(i_)},[dp]:{transfer:mt,primaries:bl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(r_),fromReference:n=>n.applyMatrix3(i_).convertLinearToSRGB()}},RD=new Set([Ki,Wl]),lt={enabled:!0,_workingColorSpace:Ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!RD.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Yc[e].toReference,r=Yc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Yc[n].primaries},getTransfer:function(n){return n===Gi?Ml:Yc[n].transfer}};function Bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ys,Lf=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=El("canvas")),ys.width=e.width,ys.height=e.height;let i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=El("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bs(t[i]/255)*255):t[i]=Bs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},PD=0,Cl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PD++}),this.uuid=sa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rf(r[o].image)):s.push(rf(r[o]))}else s=rf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function rf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ND=0,kr=(()=>{class n extends Yi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Pr,s=Pr,o=jn,a=Nr,c=oi,l=qi,u=n.DEFAULT_ANISOTROPY,d=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ND++}),this.uuid=sa(),this.name="",this.source=new Cl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==S0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pf:t.x=t.x-Math.floor(t.x);break;case Pr:t.x=t.x<0?0:1;break;case Nf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pf:t.y=t.y-Math.floor(t.y);break;case Pr:t.y=t.y<0?0:1;break;case Nf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=S0,n.DEFAULT_ANISOTROPY=1,n})(),_t=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,C=(m+1)/2,P=(f+1)/2,A=(u+h)/4,T=(d+_)/4,N=(g+p)/4;return x>C&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=T/i):C>P?C<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),i=A/r,s=N/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=N/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-_)/b,this.z=(h-u)/b,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ff=class extends Yi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);let s=new kr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wi=class extends Ff{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Tl=class extends kr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uf=class extends kr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==h||l!==m||u!==g){let p=1-a,f=c*h+l*m+u*g+d*_,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let P=Math.sqrt(x),A=Math.atan2(P,f*b);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}let C=a*b;if(c=c*p+h*C,l=l*p+m*C,u=u*p+g*C,d=d*p+_*C,p===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=P,l*=P,u*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*m-l*h,e[t+1]=c*g+u*h+l*d-a*m,e[t+2]=l*g+u*m+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(s_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sf.copy(this).projectOnVector(e),this.sub(sf)}reflect(e){return this.sub(sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sf=new R,s_=new Zi,Or=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zc.copy(i.boundingBox)),Zc.applyMatrix4(e.matrixWorld),this.union(Zc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Jc.subVectors(this.max,$o),_s.subVectors(e.a,$o),xs.subVectors(e.b,$o),Ms.subVectors(e.c,$o),Ui.subVectors(xs,_s),ki.subVectors(Ms,xs),br.subVectors(_s,Ms);let t=[0,-Ui.z,Ui.y,0,-ki.z,ki.y,0,-br.z,br.y,Ui.z,0,-Ui.x,ki.z,0,-ki.x,br.z,0,-br.x,-Ui.y,Ui.x,0,-ki.y,ki.x,0,-br.y,br.x,0];return!of(t,_s,xs,Ms,Jc)||(t=[1,0,0,0,1,0,0,0,1],!of(t,_s,xs,Ms,Jc))?!1:(Kc.crossVectors(Ui,ki),t=[Kc.x,Kc.y,Kc.z],of(t,_s,xs,Ms,Jc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pi=[new R,new R,new R,new R,new R,new R,new R,new R],Vn=new R,Zc=new Or,_s=new R,xs=new R,Ms=new R,Ui=new R,ki=new R,br=new R,$o=new R,Jc=new R,Kc=new R,Sr=new R;function of(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Sr.fromArray(n,s);let a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),c=e.dot(Sr),l=t.dot(Sr),u=i.dot(Sr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var OD=new Or,qo=new R,af=new R,ea=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):OD.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);let t=qo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(qo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(af)),this.expandByPoint(qo.copy(e.center).sub(af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mi=new R,cf=new R,Qc=new R,Bi=new R,lf=new R,el=new R,uf=new R,kf=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){cf.copy(e).add(t).multiplyScalar(.5),Qc.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(cf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Qc),a=Bi.dot(this.direction),c=-Bi.dot(Qc),l=Bi.lengthSq(),u=Math.abs(1-o*o),d,h,m,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let _=1/u;d*=_,h*=_,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(cf).addScaledVector(Qc,h),m}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,r,s){lf.subVectors(t,e),el.subVectors(i,e),uf.crossVectors(lf,el);let o=this.direction.dot(uf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);let c=a*this.direction.dot(el.crossVectors(Bi,el));if(c<0)return null;let l=a*this.direction.dot(lf.cross(Bi));if(l<0||c+l>o)return null;let u=-a*Bi.dot(uf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,m,g,_,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,_,p)}set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,_,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,m=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,m=c*d,g=l*u,_=l*d;t[0]=h+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,m=c*d,g=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,m=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=h-_*d}else if(e.order==="XZY"){let h=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LD,e,FD)}lookAt(e,t,i){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Vi.crossVectors(i,pn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Vi.crossVectors(i,pn)),Vi.normalize(),tl.crossVectors(pn,Vi),r[0]=Vi.x,r[4]=tl.x,r[8]=pn.x,r[1]=Vi.y,r[5]=tl.y,r[9]=pn.y,r[2]=Vi.z,r[6]=tl.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],b=i[3],x=i[7],C=i[11],P=i[15],A=r[0],T=r[4],N=r[8],w=r[12],y=r[1],O=r[5],H=r[9],D=r[13],W=r[2],G=r[6],J=r[10],Y=r[14],V=r[3],K=r[7],Z=r[11],ge=r[15];return s[0]=o*A+a*y+c*W+l*V,s[4]=o*T+a*O+c*G+l*K,s[8]=o*N+a*H+c*J+l*Z,s[12]=o*w+a*D+c*Y+l*ge,s[1]=u*A+d*y+h*W+m*V,s[5]=u*T+d*O+h*G+m*K,s[9]=u*N+d*H+h*J+m*Z,s[13]=u*w+d*D+h*Y+m*ge,s[2]=g*A+_*y+p*W+f*V,s[6]=g*T+_*O+p*G+f*K,s[10]=g*N+_*H+p*J+f*Z,s[14]=g*w+_*D+p*Y+f*ge,s[3]=b*A+x*y+C*W+P*V,s[7]=b*T+x*O+C*G+P*K,s[11]=b*N+x*H+C*J+P*Z,s[15]=b*w+x*D+C*Y+P*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*m-i*c*m)+_*(+t*c*m-t*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+p*(+t*l*d-t*a*m-s*o*d+i*o*m+s*a*u-i*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],b=d*p*l-_*h*l+_*c*m-a*p*m-d*c*f+a*h*f,x=g*h*l-u*p*l-g*c*m+o*p*m+u*c*f-o*h*f,C=u*_*l-g*d*l+g*a*m-o*_*m-u*a*f+o*d*f,P=g*d*c-u*_*c-g*a*h+o*_*h+u*a*p-o*d*p,A=t*b+i*x+r*C+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=b*T,e[1]=(_*h*s-d*p*s-_*r*m+i*p*m+d*r*f-i*h*f)*T,e[2]=(a*p*s-_*c*s+_*r*l-i*p*l-a*r*f+i*c*f)*T,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*m-i*c*m)*T,e[4]=x*T,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*f+t*h*f)*T,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*f-t*c*f)*T,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*m+t*c*m)*T,e[8]=C*T,e[9]=(g*d*s-u*_*s-g*i*m+t*_*m+u*i*f-t*d*f)*T,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*f+t*a*f)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*m-t*a*m)*T,e[12]=P*T,e[13]=(u*_*r-g*d*r+g*i*h-t*_*h-u*i*p+t*d*p)*T,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*p-t*a*p)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,m=s*u,g=s*d,_=o*u,p=o*d,f=a*d,b=c*l,x=c*u,C=c*d,P=i.x,A=i.y,T=i.z;return r[0]=(1-(_+f))*P,r[1]=(m+C)*P,r[2]=(g-x)*P,r[3]=0,r[4]=(m-C)*A,r[5]=(1-(h+f))*A,r[6]=(p+b)*A,r[7]=0,r[8]=(g+x)*T,r[9]=(p-b)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=ws.set(r[0],r[1],r[2]).length(),o=ws.set(r[4],r[5],r[6]).length(),a=ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);let l=1/s,u=1/o,d=1/a;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,t.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Mi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),m,g;if(a===Mi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Sl)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Mi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,m=(i+r)*u,g,_;if(a===Mi)g=(o+s)*d,_=-2*d;else if(a===Sl)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ws=new R,zn=new Ct,LD=new R(0,0,0),FD=new R(1,1,1),Vi=new R,tl=new R,pn=new R,o_=new Ct,a_=new Zi,js=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],m=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return o_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(o_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return a_.setFromEuler(this),this.setFromQuaternion(a_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Al=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},UD=0,c_=new R,bs=new Zi,gi=new Ct,nl=new R,Xo=new R,kD=new R,BD=new Zi,l_=new R(1,0,0),u_=new R(0,1,0),d_=new R(0,0,1),h_={type:"added"},VD={type:"removed"},Ss={type:"childadded",child:null},df={type:"childremoved",child:null},Br=(()=>{class n extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UD++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new R,i=new js,r=new Zi,s=new R(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ve}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return bs.setFromAxisAngle(t,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,i){return bs.setFromAxisAngle(t,i),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(l_,t)}rotateY(t){return this.rotateOnAxis(u_,t)}rotateZ(t){return this.rotateOnAxis(d_,t)}translateOnAxis(t,i){return c_.copy(t).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(l_,t)}translateY(t){return this.translateOnAxis(u_,t)}translateZ(t){return this.translateOnAxis(d_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?nl.copy(t):nl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Xo,nl,this.up):gi.lookAt(nl,Xo,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(gi),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(h_),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(VD),df.child=t,this.dispatchEvent(df),df.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(h_),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,kD),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,BD,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),m=a(t.skeletons),g=a(t.animations),_=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),_.length>0&&(r.nodes=_)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new R(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Hn=new R,vi=new R,hf=new R,yi=new R,Es=new R,Cs=new R,f_=new R,ff=new R,pf=new R,mf=new R,Os=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Hn.subVectors(e,t),r.cross(Hn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Hn.subVectors(r,t),vi.subVectors(i,t),hf.subVectors(e,t);let o=Hn.dot(Hn),a=Hn.dot(vi),c=Hn.dot(hf),l=vi.dot(vi),u=vi.dot(hf),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static isFrontFacing(e,t,i,r){return Hn.subVectors(i,t),vi.subVectors(e,t),Hn.cross(vi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Hn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Es.subVectors(r,i),Cs.subVectors(s,i),ff.subVectors(e,i);let c=Es.dot(ff),l=Cs.dot(ff);if(c<=0&&l<=0)return t.copy(i);pf.subVectors(e,r);let u=Es.dot(pf),d=Cs.dot(pf);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Es,o);mf.subVectors(e,s);let m=Es.dot(mf),g=Cs.dot(mf);if(g>=0&&m<=g)return t.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Cs,a);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return f_.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(f_,a);let f=1/(p+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(Es,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},il={h:0,s:0,l:0};function gf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var nt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=AD(e,1),t=tn(t,0,1),i=tn(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=gf(o,s,e+1/3),this.g=gf(o,s,e),this.b=gf(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=ri){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){let i=rx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=nf(e.r),this.g=nf(e.g),this.b=nf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return lt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(tn(Xt.r*255,0,255))*65536+Math.round(tn(Xt.g*255,0,255))*256+Math.round(tn(Xt.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Xt.copy(this),t);let i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=ri){lt.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,r=Xt.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(il);let i=ef(zi.h,il.h,t),r=ef(zi.s,il.s,t),s=ef(zi.l,il.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new nt;nt.NAMES=rx;var zD=0,Lr=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zD++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=Us,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Af,this.blendDst=Df,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Af&&(i.blendSrc=this.blendSrc),this.blendDst!==Df&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Q0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Dl=class extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new js,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Rt=new R,rl=new je,Tn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=e_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ID("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rl.fromBufferAttribute(this,t),rl.applyMatrix3(e),this.setXY(t,rl.x,rl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wo(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wo(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wo(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==e_&&(e.usage=this.usage),e}};var Il=class extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Rl=class extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var An=class extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}},HD=0,En=new Ct,vf=new Br,Ts=new R,mn=new Or,Yo=new Or,Vt=new R,Ji=class n extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HD++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ix(e)?Rl:Il)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return vf.lookAt(e),vf.updateMatrix(),this.applyMatrix4(vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new An(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(mn.min,Yo.min),mn.expandByPoint(Vt),Vt.addVectors(mn.max,Yo.max),mn.expandByPoint(Vt)):(mn.expandByPoint(Yo.min),mn.expandByPoint(Yo.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Vt.fromBufferAttribute(a,l),c&&(Ts.fromBufferAttribute(e,l),Vt.add(Ts)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new R,c[N]=new R;let l=new R,u=new R,d=new R,h=new je,m=new je,g=new je,_=new R,p=new R;function f(N,w,y){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,w),g.fromBufferAttribute(s,y),u.sub(l),d.sub(l),m.sub(h),g.sub(h);let O=1/(m.x*g.y-g.x*m.y);isFinite(O)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(O),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(O),a[N].add(_),a[w].add(_),a[y].add(_),c[N].add(p),c[w].add(p),c[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,w=b.length;N<w;++N){let y=b[N],O=y.start,H=y.count;for(let D=O,W=O+H;D<W;D+=3)f(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let x=new R,C=new R,P=new R,A=new R;function T(N){P.fromBufferAttribute(r,N),A.copy(P);let w=a[N];x.copy(w),x.sub(P.multiplyScalar(P.dot(w))).normalize(),C.crossVectors(A,w);let O=C.dot(c[N])<0?-1:1;o.setXYZW(N,x.x,x.y,x.z,O)}for(let N=0,w=b.length;N<w;++N){let y=b[N],O=y.start,H=y.count;for(let D=O,W=O+H;D<W;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,u=new R,d=new R;if(e)for(let h=0,m=e.count;h<m;h+=3){let g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*u;for(let f=0;f<u;f++)h[g++]=l[m++]}return new Tn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},p_=new Ct,Er=new kf,sl=new ea,m_=new R,As=new R,Ds=new R,Is=new R,yf=new R,ol=new R,al=new je,cl=new je,ll=new je,g_=new R,v_=new R,y_=new R,ul=new R,dl=new R,gn=class extends Br{constructor(e=new Ji,t=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ol.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(yf.fromBufferAttribute(d,e),o?ol.addScaledVector(yf,u):ol.addScaledVector(yf.sub(t),u))}t.add(ol)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(sl.containsPoint(Er.origin)===!1&&(Er.intersectSphere(sl,m_)===null||Er.origin.distanceToSquared(m_)>(e.far-e.near)**2))&&(p_.copy(s).invert(),Er.copy(e.ray).applyMatrix4(p_),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let p=h[g],f=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let C=b,P=x;C<P;C+=3){let A=a.getX(C),T=a.getX(C+1),N=a.getX(C+2);r=hl(this,f,e,i,l,u,d,A,T,N),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){let b=a.getX(p),x=a.getX(p+1),C=a.getX(p+2);r=hl(this,o,e,i,l,u,d,b,x,C),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let p=h[g],f=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let C=b,P=x;C<P;C+=3){let A=C,T=C+1,N=C+2;r=hl(this,f,e,i,l,u,d,A,T,N),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){let b=p,x=p+1,C=p+2;r=hl(this,o,e,i,l,u,d,b,x,C),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function GD(n,e,t,i,r,s,o,a){let c;if(e.side===nn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Xi,a),c===null)return null;dl.copy(a),dl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(dl);return l<t.near||l>t.far?null:{distance:l,point:dl.clone(),object:n}}function hl(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,As),n.getVertexPosition(c,Ds),n.getVertexPosition(l,Is);let u=GD(n,e,t,i,As,Ds,Is,ul);if(u){r&&(al.fromBufferAttribute(r,a),cl.fromBufferAttribute(r,c),ll.fromBufferAttribute(r,l),u.uv=Os.getInterpolation(ul,As,Ds,Is,al,cl,ll,new je)),s&&(al.fromBufferAttribute(s,a),cl.fromBufferAttribute(s,c),ll.fromBufferAttribute(s,l),u.uv1=Os.getInterpolation(ul,As,Ds,Is,al,cl,ll,new je)),o&&(g_.fromBufferAttribute(o,a),v_.fromBufferAttribute(o,c),y_.fromBufferAttribute(o,l),u.normal=Os.getInterpolation(ul,As,Ds,Is,g_,v_,y_,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new R,materialIndex:0};Os.getNormal(As,Ds,Is,d.normal),u.face=d}return u}var ta=class n extends Ji{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new An(l,3)),this.setAttribute("normal",new An(u,3)),this.setAttribute("uv",new An(d,2));function g(_,p,f,b,x,C,P,A,T,N,w){let y=C/T,O=P/N,H=C/2,D=P/2,W=A/2,G=T+1,J=N+1,Y=0,V=0,K=new R;for(let Z=0;Z<J;Z++){let ge=Z*O-D;for(let qe=0;qe<G;qe++){let ht=qe*y-H;K[_]=ht*b,K[p]=ge*x,K[f]=W,l.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[f]=A>0?1:-1,u.push(K.x,K.y,K.z),d.push(qe/T),d.push(1-Z/N),Y+=1}}for(let Z=0;Z<N;Z++)for(let ge=0;ge<T;ge++){let qe=h+ge+G*Z,ht=h+ge+G*(Z+1),z=h+(ge+1)+G*(Z+1),Q=h+(ge+1)+G*Z;c.push(qe,ht,Q),c.push(ht,z,Q),V+=6}a.addGroup(m,V,w),m+=V,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ws(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){let e={};for(let t=0;t<n.length;t++){let i=Ws(n[t]);for(let r in i)e[r]=i[r]}return e}function jD(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sx(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var WD={clone:Ws,merge:Jt},$D=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$D,this.fragmentShader=qD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=jD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Pl=class extends Br{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new R,__=new je,x_=new je,Yt=class extends Pl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Of*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Of*2*Math.atan(Math.tan(Qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,__,x_),t.subVectors(x_,__)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rs=-90,Ps=1,Bf=class extends Br{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(Rs,Ps,e,t);r.layers=this.layers,this.add(r);let s=new Yt(Rs,Ps,e,t);s.layers=this.layers,this.add(s);let o=new Yt(Rs,Ps,e,t);o.layers=this.layers,this.add(o);let a=new Yt(Rs,Ps,e,t);a.layers=this.layers,this.add(a);let c=new Yt(Rs,Ps,e,t);c.layers=this.layers,this.add(c);let l=new Yt(Rs,Ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Nl=class extends kr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vf=class extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ta(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Wi});s.uniforms.tEquirect.value=t;let o=new gn(r,s),a=t.minFilter;return t.minFilter===Nr&&(t.minFilter=jn),new Bf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},_f=new R,XD=new R,YD=new Ve,xi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=_f.subVectors(i,t).cross(XD.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(_f),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||YD.getNormalMatrix(e),r=this.coplanarPoint(_f).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cr=new ea,fl=new R,na=class{constructor(e=new xi,t=new xi,i=new xi,r=new xi,s=new xi,o=new xi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],m=r[8],g=r[9],_=r[10],p=r[11],f=r[12],b=r[13],x=r[14],C=r[15];if(i[0].setComponents(c-s,h-l,p-m,C-f).normalize(),i[1].setComponents(c+s,h+l,p+m,C+f).normalize(),i[2].setComponents(c+o,h+u,p+g,C+b).normalize(),i[3].setComponents(c-o,h-u,p-g,C-b).normalize(),i[4].setComponents(c-a,h-d,p-_,C-x).normalize(),t===Mi)i[5].setComponents(c+a,h+d,p+_,C+x).normalize();else if(t===Sl)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ox(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ZD(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c._updateRange,h=c.updateRanges;if(n.bindBuffer(l,a),d.count===-1&&h.length===0&&n.bufferSubData(l,0,u),h.length!==0){for(let m=0,g=h.length;m<g;m++){let _=h[m];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Ol=class n extends Ji{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){let b=f*h-o;for(let x=0;x<l;x++){let C=x*d-s;g.push(C,-b,0),_.push(0,0,1),p.push(x/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){let x=b+l*f,C=b+l*(f+1),P=b+1+l*(f+1),A=b+1+l*f;m.push(x,C,A),m.push(C,P,A)}this.setIndex(m),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(_,3)),this.setAttribute("uv",new An(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},JD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KD=`#ifdef USE_ALPHAHASH
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
#endif`,QD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tI=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iI=`#ifdef USE_AOMAP
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
#endif`,rI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sI=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,oI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,aI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lI=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uI=`#ifdef USE_IRIDESCENCE
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
#endif`,dI=`#ifdef USE_BUMPMAP
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
#endif`,hI=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_I=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xI=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,MI=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wI=`vec3 transformedNormal = objectNormal;
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
#endif`,bI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TI="gl_FragColor = linearToOutputTexel( gl_FragColor );",AI=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,DI=`#ifdef USE_ENVMAP
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
#endif`,II=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RI=`#ifdef USE_ENVMAP
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
#endif`,PI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NI=`#ifdef USE_ENVMAP
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
#endif`,OI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kI=`#ifdef USE_GRADIENTMAP
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
}`,BI=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,VI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GI=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,jI=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,WI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$I=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YI=`PhysicalMaterial material;
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
#endif`,ZI=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,JI=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,KI=`#if defined( RE_IndirectDiffuse )
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
#endif`,QI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a1=`#if defined( USE_POINTS_UV )
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
#endif`,c1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,f1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,p1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,m1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x1=`#ifdef USE_NORMALMAP
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
#endif`,M1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,T1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,U1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k1=`#ifdef USE_SKINNING
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
#endif`,B1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j1=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W1=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K1=`uniform sampler2D t2D;
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
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iR=`#include <common>
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
}`,rR=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sR=`#define DISTANCE
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
}`,oR=`#define DISTANCE
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
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lR=`uniform float scale;
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
}`,uR=`uniform vec3 diffuse;
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
}`,dR=`#include <common>
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
}`,hR=`uniform vec3 diffuse;
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
}`,fR=`#define LAMBERT
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
}`,pR=`#define LAMBERT
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
}`,mR=`#define MATCAP
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
}`,gR=`#define MATCAP
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
}`,vR=`#define NORMAL
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
}`,yR=`#define NORMAL
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
}`,_R=`#define PHONG
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
}`,xR=`#define PHONG
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
}`,MR=`#define STANDARD
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
}`,wR=`#define STANDARD
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
}`,bR=`#define TOON
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
}`,SR=`#define TOON
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
}`,ER=`uniform float size;
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
}`,CR=`uniform vec3 diffuse;
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
}`,TR=`#include <common>
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
}`,AR=`uniform vec3 color;
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
}`,DR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,IR=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:JD,alphahash_pars_fragment:KD,alphamap_fragment:QD,alphamap_pars_fragment:eI,alphatest_fragment:tI,alphatest_pars_fragment:nI,aomap_fragment:iI,aomap_pars_fragment:rI,batching_pars_vertex:sI,batching_vertex:oI,begin_vertex:aI,beginnormal_vertex:cI,bsdfs:lI,iridescence_fragment:uI,bumpmap_pars_fragment:dI,clipping_planes_fragment:hI,clipping_planes_pars_fragment:fI,clipping_planes_pars_vertex:pI,clipping_planes_vertex:mI,color_fragment:gI,color_pars_fragment:vI,color_pars_vertex:yI,color_vertex:_I,common:xI,cube_uv_reflection_fragment:MI,defaultnormal_vertex:wI,displacementmap_pars_vertex:bI,displacementmap_vertex:SI,emissivemap_fragment:EI,emissivemap_pars_fragment:CI,colorspace_fragment:TI,colorspace_pars_fragment:AI,envmap_fragment:DI,envmap_common_pars_fragment:II,envmap_pars_fragment:RI,envmap_pars_vertex:PI,envmap_physical_pars_fragment:jI,envmap_vertex:NI,fog_vertex:OI,fog_pars_vertex:LI,fog_fragment:FI,fog_pars_fragment:UI,gradientmap_pars_fragment:kI,lightmap_fragment:BI,lightmap_pars_fragment:VI,lights_lambert_fragment:zI,lights_lambert_pars_fragment:HI,lights_pars_begin:GI,lights_toon_fragment:WI,lights_toon_pars_fragment:$I,lights_phong_fragment:qI,lights_phong_pars_fragment:XI,lights_physical_fragment:YI,lights_physical_pars_fragment:ZI,lights_fragment_begin:JI,lights_fragment_maps:KI,lights_fragment_end:QI,logdepthbuf_fragment:e1,logdepthbuf_pars_fragment:t1,logdepthbuf_pars_vertex:n1,logdepthbuf_vertex:i1,map_fragment:r1,map_pars_fragment:s1,map_particle_fragment:o1,map_particle_pars_fragment:a1,metalnessmap_fragment:c1,metalnessmap_pars_fragment:l1,morphinstance_vertex:u1,morphcolor_vertex:d1,morphnormal_vertex:h1,morphtarget_pars_vertex:f1,morphtarget_vertex:p1,normal_fragment_begin:m1,normal_fragment_maps:g1,normal_pars_fragment:v1,normal_pars_vertex:y1,normal_vertex:_1,normalmap_pars_fragment:x1,clearcoat_normal_fragment_begin:M1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:b1,iridescence_pars_fragment:S1,opaque_fragment:E1,packing:C1,premultiplied_alpha_fragment:T1,project_vertex:A1,dithering_fragment:D1,dithering_pars_fragment:I1,roughnessmap_fragment:R1,roughnessmap_pars_fragment:P1,shadowmap_pars_fragment:N1,shadowmap_pars_vertex:O1,shadowmap_vertex:L1,shadowmask_pars_fragment:F1,skinbase_vertex:U1,skinning_pars_vertex:k1,skinning_vertex:B1,skinnormal_vertex:V1,specularmap_fragment:z1,specularmap_pars_fragment:H1,tonemapping_fragment:G1,tonemapping_pars_fragment:j1,transmission_fragment:W1,transmission_pars_fragment:$1,uv_pars_fragment:q1,uv_pars_vertex:X1,uv_vertex:Y1,worldpos_vertex:Z1,background_vert:J1,background_frag:K1,backgroundCube_vert:Q1,backgroundCube_frag:eR,cube_vert:tR,cube_frag:nR,depth_vert:iR,depth_frag:rR,distanceRGBA_vert:sR,distanceRGBA_frag:oR,equirect_vert:aR,equirect_frag:cR,linedashed_vert:lR,linedashed_frag:uR,meshbasic_vert:dR,meshbasic_frag:hR,meshlambert_vert:fR,meshlambert_frag:pR,meshmatcap_vert:mR,meshmatcap_frag:gR,meshnormal_vert:vR,meshnormal_frag:yR,meshphong_vert:_R,meshphong_frag:xR,meshphysical_vert:MR,meshphysical_frag:wR,meshtoon_vert:bR,meshtoon_frag:SR,points_vert:ER,points_frag:CR,shadow_vert:TR,shadow_frag:AR,sprite_vert:DR,sprite_frag:IR},re={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},si={basic:{uniforms:Jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new nt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Jt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Jt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new nt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Jt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Jt([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Jt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Jt([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Jt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Jt([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Jt([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Jt([re.lights,re.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};si.physical={uniforms:Jt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var pl={r:0,b:0,g:0},Tr=new js,RR=new Ct;function PR(n,e,t,i,r,s,o){let a=new nt(0),c=s===!0?0:1,l,u,d=null,h=0,m=null;function g(p,f){let b=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),b=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===jl)?(u===void 0&&(u=new gn(new ta(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Ws(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Tr.copy(f.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(RR.makeRotationFromEuler(Tr)),u.material.toneMapped=lt.getTransfer(x.colorSpace)!==mt,(d!==x||h!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new gn(new Ol(2,2),new ai({name:"BackgroundMaterial",uniforms:Ws(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=lt.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=x,h=x.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){p.getRGB(pl,sx(n)),i.buffers.color.setClear(pl.r,pl.g,pl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function NR(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(y,O,H,D,W){let G=!1,J=d(D,H,O);s!==J&&(s=J,l(s.object)),G=m(y,D,H,W),G&&g(y,D,H,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,C(y,O,H,D),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,O,H){let D=H.wireframe===!0,W=i[y.id];W===void 0&&(W={},i[y.id]=W);let G=W[O.id];G===void 0&&(G={},W[O.id]=G);let J=G[D];return J===void 0&&(J=h(c()),G[D]=J),J}function h(y){let O=[],H=[],D=[];for(let W=0;W<t;W++)O[W]=0,H[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:D,object:y,attributes:{},index:null}}function m(y,O,H,D){let W=s.attributes,G=O.attributes,J=0,Y=H.getAttributes();for(let V in Y)if(Y[V].location>=0){let Z=W[V],ge=G[V];if(ge===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),Z===void 0||Z.attribute!==ge||ge&&Z.data!==ge.data)return!0;J++}return s.attributesNum!==J||s.index!==D}function g(y,O,H,D){let W={},G=O.attributes,J=0,Y=H.getAttributes();for(let V in Y)if(Y[V].location>=0){let Z=G[V];Z===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));let ge={};ge.attribute=Z,Z&&Z.data&&(ge.data=Z.data),W[V]=ge,J++}s.attributes=W,s.attributesNum=J,s.index=D}function _(){let y=s.newAttributes;for(let O=0,H=y.length;O<H;O++)y[O]=0}function p(y){f(y,0)}function f(y,O){let H=s.newAttributes,D=s.enabledAttributes,W=s.attributeDivisors;H[y]=1,D[y]===0&&(n.enableVertexAttribArray(y),D[y]=1),W[y]!==O&&(n.vertexAttribDivisor(y,O),W[y]=O)}function b(){let y=s.newAttributes,O=s.enabledAttributes;for(let H=0,D=O.length;H<D;H++)O[H]!==y[H]&&(n.disableVertexAttribArray(H),O[H]=0)}function x(y,O,H,D,W,G,J){J===!0?n.vertexAttribIPointer(y,O,H,W,G):n.vertexAttribPointer(y,O,H,D,W,G)}function C(y,O,H,D){_();let W=D.attributes,G=H.getAttributes(),J=O.defaultAttributeValues;for(let Y in G){let V=G[Y];if(V.location>=0){let K=W[Y];if(K===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){let Z=K.normalized,ge=K.itemSize,qe=e.get(K);if(qe===void 0)continue;let ht=qe.buffer,z=qe.type,Q=qe.bytesPerElement,ue=z===n.INT||z===n.UNSIGNED_INT||K.gpuType===X_;if(K.isInterleavedBufferAttribute){let ae=K.data,Ue=ae.stride,He=K.offset;if(ae.isInstancedInterleavedBuffer){for(let Qe=0;Qe<V.locationSize;Qe++)f(V.location+Qe,ae.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Qe=0;Qe<V.locationSize;Qe++)p(V.location+Qe);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let Qe=0;Qe<V.locationSize;Qe++)x(V.location+Qe,ge/V.locationSize,z,Z,Ue*Q,(He+ge/V.locationSize*Qe)*Q,ue)}else{if(K.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)f(V.location+ae,K.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ae=0;ae<V.locationSize;ae++)p(V.location+ae);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let ae=0;ae<V.locationSize;ae++)x(V.location+ae,ge/V.locationSize,z,Z,ge*Q,ge/V.locationSize*ae*Q,ue)}}else if(J!==void 0){let Z=J[Y];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(V.location,Z);break;case 3:n.vertexAttrib3fv(V.location,Z);break;case 4:n.vertexAttrib4fv(V.location,Z);break;default:n.vertexAttrib1fv(V.location,Z)}}}}b()}function P(){N();for(let y in i){let O=i[y];for(let H in O){let D=O[H];for(let W in D)u(D[W].object),delete D[W];delete O[H]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;let O=i[y.id];for(let H in O){let D=O[H];for(let W in D)u(D[W].object),delete D[W];delete O[H]}delete i[y.id]}function T(y){for(let O in i){let H=i[O];if(H[y.id]===void 0)continue;let D=H[y.id];for(let W in D)u(D[W].object),delete D[W];delete H[y.id]}}function N(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function OR(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<u;h++)this.render(c[h],l[h]);else{d.multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let m=0;m<u;m++)h+=l[m];t.update(h,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function LR(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp",a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);let c=t.logarithmicDepthBuffer===!0,l=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),p=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),f=u>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:p,vertexTextures:f,maxSamples:b}}function FR(n){let e=this,t=null,i=0,r=!1,s=!1,o=new xi,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{let b=s?0:i,x=b*4,C=f.clippingState||null;c.value=C,C=u(g,h,x,m);for(let P=0;P!==x;++P)C[P]=t[P];f.clippingState=C,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let f=m+_*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,C=m;x!==_;++x,C+=4)o.copy(d[x]).applyMatrix4(b,a),o.normal.toArray(p,C),p[C+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function UR(n){let e=new WeakMap;function t(o,a){return a===If?o.mapping=zs:a===Rf&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===If||a===Rf)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Vf(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var zf=class extends Pl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ls=4,M_=[.125,.215,.35,.446,.526,.582],Rr=20,xf=new zf,w_=new nt,Mf=null,wf=0,bf=0,Sf=!1,Dr=(1+Math.sqrt(5))/2,Ns=1/Dr,b_=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Dr,Ns),new R(0,Dr,-Ns),new R(Ns,0,Dr),new R(-Ns,0,Dr),new R(Dr,Ns,0),new R(-Dr,Ns,0)],Ll=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Mf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mf,wf,bf),this._renderer.xr.enabled=Sf,e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:yl,format:oi,colorSpace:Ki,depthBuffer:!1},r=S_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kR(s)),this._blurMaterial=BR(s,e,t)}return r}_compileMaterial(e){let t=new gn(this._lodPlanes[0],e);this._renderer.compile(t,xf)}_sceneToCubeUV(e,t,i,r){let a=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(w_),u.toneMapping=$i,u.autoClear=!1;let m=new Dl({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new gn(new ta,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(w_),_=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let x=this._cubeSize;ml(r,b*x,f>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===zs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=C_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E_());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;ml(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,xf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=b_[(r-1)%b_.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new gn(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Rr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Rr;p>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Rr}`);let f=[],b=0;for(let T=0;T<Rr;++T){let N=T/_,w=Math.exp(-N*N/2);f.push(w),T===0?b+=w:T<p&&(b+=2*w)}for(let T=0;T<f.length;T++)f[T]=f[T]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;let C=this._sizeLods[r],P=3*C*(r>x-Ls?r-x+Ls:0),A=4*(this._cubeSize-C);ml(t,P,A,3*C,2*C),c.setRenderTarget(t),c.render(d,xf)}};function kR(n){let e=[],t=[],i=[],r=n,s=n-Ls+1+M_.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Ls?c=M_[o-n+Ls-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,f=1,b=new Float32Array(_*g*m),x=new Float32Array(p*g*m),C=new Float32Array(f*g*m);for(let A=0;A<m;A++){let T=A%3*2/3-1,N=A>2?0:-1,w=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];b.set(w,_*g*A),x.set(h,p*g*A);let y=[A,A,A,A,A,A];C.set(y,f*g*A)}let P=new Ji;P.setAttribute("position",new Tn(b,_)),P.setAttribute("uv",new Tn(x,p)),P.setAttribute("faceIndex",new Tn(C,f)),e.push(P),r>Ls&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function S_(n,e,t){let i=new wi(n,e,t);return i.texture.mapping=jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ml(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function BR(n,e,t){let i=new Float32Array(Rr),r=new R(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hp(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function E_(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hp(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function C_(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function hp(){return`

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
	`}function VR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===If||c===Rf,u=c===zs||c===Hs;if(l||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ll(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Ll(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zR(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function HR(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let _=h.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],n.ARRAY_BUFFER)}}function l(d){let h=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let b=m.array;_=m.version;for(let x=0,C=b.length;x<C;x+=3){let P=b[x+0],A=b[x+1],T=b[x+2];h.push(P,A,A,T,T,P)}}else if(g!==void 0){let b=g.array;_=g.version;for(let x=0,C=b.length/3-1;x<C;x+=3){let P=x+0,A=x+1,T=x+2;h.push(P,A,A,T,T,P)}}else return;let p=new(ix(h)?Rl:Il)(h,1);p.version=_;let f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){let h=s.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function GR(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function l(d,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,d*o,m),t.update(h,i,m))}function u(d,h,m){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<m;_++)this.render(d[_]/o,h[_]);else{g.multiDrawElementsWEBGL(i,h,0,s,d,0,m);let _=0;for(let p=0;p<m;p++)_+=h[p];t.update(_,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function jR(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function WR(n,e,t){let i=new WeakMap,r=new _t;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let y=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],C=0;g===!0&&(C=1),_===!0&&(C=2),p===!0&&(C=3);let P=a.attributes.position.count*C,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let T=new Float32Array(P*A*4*d),N=new Tl(T,P,A,d);N.type=ji,N.needsUpdate=!0;let w=C*4;for(let O=0;O<d;O++){let H=f[O],D=b[O],W=x[O],G=P*A*4*O;for(let J=0;J<H.count;J++){let Y=J*w;g===!0&&(r.fromBufferAttribute(H,J),T[G+Y+0]=r.x,T[G+Y+1]=r.y,T[G+Y+2]=r.z,T[G+Y+3]=0),_===!0&&(r.fromBufferAttribute(D,J),T[G+Y+4]=r.x,T[G+Y+5]=r.y,T[G+Y+6]=r.z,T[G+Y+7]=0),p===!0&&(r.fromBufferAttribute(W,J),T[G+Y+8]=r.x,T[G+Y+9]=r.y,T[G+Y+10]=r.z,T[G+Y+11]=W.itemSize===4?r.w:1)}}h={count:d,texture:N,size:new je(P,A)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];let _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function $R(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Fl=class extends kr{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:ks,u!==ks&&u!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ks&&(i=Gs),i===void 0&&u===Qo&&(i=ra),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Cn,this.minFilter=c!==void 0?c:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ax=new kr,cx=new Fl(1,1);cx.compareFunction=nx;var lx=new Tl,ux=new Uf,dx=new Nl,T_=[],A_=[],D_=new Float32Array(16),I_=new Float32Array(9),R_=new Float32Array(4);function qs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=T_[r];if(s===void 0&&(s=new Float32Array(r),T_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $l(n,e){let t=A_[e];t===void 0&&(t=new Int32Array(e),A_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function XR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function YR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function ZR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function JR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;R_.set(i),n.uniformMatrix2fv(this.addr,!1,R_),Ut(t,i)}}function KR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;I_.set(i),n.uniformMatrix3fv(this.addr,!1,I_),Ut(t,i)}}function QR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;D_.set(i),n.uniformMatrix4fv(this.addr,!1,D_),Ut(t,i)}}function eP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function nP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function iP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function rP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function oP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function aP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function cP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?cx:ax;t.setTexture2D(e||s,r)}function lP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ux,r)}function uP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||dx,r)}function dP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lx,r)}function hP(n){switch(n){case 5126:return qR;case 35664:return XR;case 35665:return YR;case 35666:return ZR;case 35674:return JR;case 35675:return KR;case 35676:return QR;case 5124:case 35670:return eP;case 35667:case 35671:return tP;case 35668:case 35672:return nP;case 35669:case 35673:return iP;case 5125:return rP;case 36294:return sP;case 36295:return oP;case 36296:return aP;case 35678:case 36198:case 36298:case 36306:case 35682:return cP;case 35679:case 36299:case 36307:return lP;case 35680:case 36300:case 36308:case 36293:return uP;case 36289:case 36303:case 36311:case 36292:return dP}}function fP(n,e){n.uniform1fv(this.addr,e)}function pP(n,e){let t=qs(e,this.size,2);n.uniform2fv(this.addr,t)}function mP(n,e){let t=qs(e,this.size,3);n.uniform3fv(this.addr,t)}function gP(n,e){let t=qs(e,this.size,4);n.uniform4fv(this.addr,t)}function vP(n,e){let t=qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yP(n,e){let t=qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _P(n,e){let t=qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xP(n,e){n.uniform1iv(this.addr,e)}function MP(n,e){n.uniform2iv(this.addr,e)}function wP(n,e){n.uniform3iv(this.addr,e)}function bP(n,e){n.uniform4iv(this.addr,e)}function SP(n,e){n.uniform1uiv(this.addr,e)}function EP(n,e){n.uniform2uiv(this.addr,e)}function CP(n,e){n.uniform3uiv(this.addr,e)}function TP(n,e){n.uniform4uiv(this.addr,e)}function AP(n,e,t){let i=this.cache,r=e.length,s=$l(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ax,s[o])}function DP(n,e,t){let i=this.cache,r=e.length,s=$l(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ux,s[o])}function IP(n,e,t){let i=this.cache,r=e.length,s=$l(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||dx,s[o])}function RP(n,e,t){let i=this.cache,r=e.length,s=$l(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lx,s[o])}function PP(n){switch(n){case 5126:return fP;case 35664:return pP;case 35665:return mP;case 35666:return gP;case 35674:return vP;case 35675:return yP;case 35676:return _P;case 5124:case 35670:return xP;case 35667:case 35671:return MP;case 35668:case 35672:return wP;case 35669:case 35673:return bP;case 5125:return SP;case 36294:return EP;case 36295:return CP;case 36296:return TP;case 35678:case 36198:case 36298:case 36306:case 35682:return AP;case 35679:case 36299:case 36307:return DP;case 35680:case 36300:case 36308:case 36293:return IP;case 36289:case 36303:case 36311:case 36292:return RP}}var Hf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hP(t.type)}},Gf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PP(t.type)}},jf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Ef=/(\w+)(\])?(\[|\.)?/g;function P_(n,e){n.seq.push(e),n.map[e.id]=e}function NP(n,e,t){let i=n.name,r=i.length;for(Ef.lastIndex=0;;){let s=Ef.exec(i),o=Ef.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){P_(t,l===void 0?new Hf(a,n,e):new Gf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new jf(a),P_(t,d)),t=d}}}var Vs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);NP(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function N_(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var OP=37297,LP=0;function FP(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function UP(n){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n),i;switch(e===t?i="":e===bl&&t===wl?i="LinearDisplayP3ToLinearSRGB":e===wl&&t===bl&&(i="LinearSRGBToLinearDisplayP3"),n){case Ki:case Wl:return[i,"LinearTransferOETF"];case ri:case dp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function O_(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+FP(n.getShaderSource(e),o)}else return r}function kP(n,e){let t=UP(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function BP(n,e){let t;switch(e){case eD:t="Linear";break;case tD:t="Reinhard";break;case nD:t="OptimizedCineon";break;case iD:t="ACESFilmic";break;case sD:t="AgX";break;case oD:t="Neutral";break;case rD:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function VP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function zP(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function HP(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Jo(n){return n!==""}function L_(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function F_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var GP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(n){return n.replace(GP,WP)}var jP=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function WP(n,e){let t=Be[e];if(t===void 0){let i=jP.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wf(t)}var $P=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U_(n){return n.replace($P,qP)}function qP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function k_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===CA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function YP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function JP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $_:e="ENVMAP_BLENDING_MULTIPLY";break;case KA:e="ENVMAP_BLENDING_MIX";break;case QA:e="ENVMAP_BLENDING_ADD";break}return e}function KP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function QP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=XP(t),l=YP(t),u=ZP(t),d=JP(t),h=KP(t),m=VP(t),g=zP(s),_=r.createProgram(),p,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jo).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jo).join(`
`),f.length>0&&(f+=`
`)):(p=[k_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),f=[k_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?Be.tonemapping_pars_fragment:"",t.toneMapping!==$i?BP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,kP("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jo).join(`
`)),o=Wf(o),o=L_(o,t),o=F_(o,t),a=Wf(a),a=L_(a,t),a=F_(a,t),o=U_(o),a=U_(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===t_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===t_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=b+p+o,C=b+f+a,P=N_(r,r.VERTEX_SHADER,x),A=N_(r,r.FRAGMENT_SHADER,C);r.attachShader(_,P),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(O){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(A).trim(),G=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,A);else{let Y=O_(r,P,"vertex"),V=O_(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+H+`
`+Y+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||W==="")&&(J=!1);J&&(O.diagnostics={runnable:G,programLog:H,vertexShader:{log:D,prefix:p},fragmentShader:{log:W,prefix:f}})}r.deleteShader(P),r.deleteShader(A),N=new Vs(r,_),w=HP(r,_)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,OP)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LP++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}var eN=0,$f=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new qf(e),t.set(e,i)),i}},qf=class{constructor(e){this.id=eN++,this.code=e,this.usedTimes=0}};function tN(n,e,t,i,r,s,o){let a=new Al,c=new $f,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures,m=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,y,O,H,D){let W=H.fog,G=D.geometry,J=w.isMeshStandardMaterial?H.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||J),V=Y&&Y.mapping===jl?Y.image.height:null,K=g[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let Z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ge=Z!==void 0?Z.length:0,qe=0;G.morphAttributes.position!==void 0&&(qe=1),G.morphAttributes.normal!==void 0&&(qe=2),G.morphAttributes.color!==void 0&&(qe=3);let ht,z,Q,ue;if(K){let jt=si[K];ht=jt.vertexShader,z=jt.fragmentShader}else ht=w.vertexShader,z=w.fragmentShader,c.update(w),Q=c.getVertexShaderID(w),ue=c.getFragmentShaderID(w);let ae=n.getRenderTarget(),Ue=D.isInstancedMesh===!0,He=D.isBatchedMesh===!0,Qe=!!w.map,L=!!w.matcap,We=!!Y,Ee=!!w.aoMap,Pt=!!w.lightMap,Ae=!!w.bumpMap,ut=!!w.normalMap,S=!!w.displacementMap,v=!!w.emissiveMap,B=!!w.metalnessMap,j=!!w.roughnessMap,$=w.anisotropy>0,q=w.clearcoat>0,we=w.iridescence>0,X=w.sheen>0,_e=w.transmission>0,be=$&&!!w.anisotropyMap,ne=q&&!!w.clearcoatMap,le=q&&!!w.clearcoatNormalMap,Re=q&&!!w.clearcoatRoughnessMap,he=we&&!!w.iridescenceMap,fe=we&&!!w.iridescenceThicknessMap,Ye=X&&!!w.sheenColorMap,et=X&&!!w.sheenRoughnessMap,st=!!w.specularMap,it=!!w.specularColorMap,gt=!!w.specularIntensityMap,ve=_e&&!!w.transmissionMap,E=_e&&!!w.thicknessMap,te=!!w.gradientMap,ee=!!w.alphaMap,ye=w.alphaTest>0,xe=!!w.alphaHash,ft=!!w.extensions,vt=$i;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(vt=n.toneMapping);let xt={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:ht,fragmentShader:z,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:He,instancing:Ue,instancingColor:Ue&&D.instanceColor!==null,instancingMorph:Ue&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ki,alphaToCoverage:!!w.alphaToCoverage,map:Qe,matcap:L,envMap:We,envMapMode:We&&Y.mapping,envMapCubeUVHeight:V,aoMap:Ee,lightMap:Pt,bumpMap:Ae,normalMap:ut,displacementMap:h&&S,emissiveMap:v,normalMapObjectSpace:ut&&w.normalMapType===xD,normalMapTangentSpace:ut&&w.normalMapType===tx,metalnessMap:B,roughnessMap:j,anisotropy:$,anisotropyMap:be,clearcoat:q,clearcoatMap:ne,clearcoatNormalMap:le,clearcoatRoughnessMap:Re,iridescence:we,iridescenceMap:he,iridescenceThicknessMap:fe,sheen:X,sheenColorMap:Ye,sheenRoughnessMap:et,specularMap:st,specularColorMap:it,specularIntensityMap:gt,transmission:_e,transmissionMap:ve,thicknessMap:E,gradientMap:te,opaque:w.transparent===!1&&w.blending===Us&&w.alphaToCoverage===!1,alphaMap:ee,alphaTest:ye,alphaHash:xe,combine:w.combine,mapUv:Qe&&_(w.map.channel),aoMapUv:Ee&&_(w.aoMap.channel),lightMapUv:Pt&&_(w.lightMap.channel),bumpMapUv:Ae&&_(w.bumpMap.channel),normalMapUv:ut&&_(w.normalMap.channel),displacementMapUv:S&&_(w.displacementMap.channel),emissiveMapUv:v&&_(w.emissiveMap.channel),metalnessMapUv:B&&_(w.metalnessMap.channel),roughnessMapUv:j&&_(w.roughnessMap.channel),anisotropyMapUv:be&&_(w.anisotropyMap.channel),clearcoatMapUv:ne&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:et&&_(w.sheenRoughnessMap.channel),specularMapUv:st&&_(w.specularMap.channel),specularColorMapUv:it&&_(w.specularColorMap.channel),specularIntensityMapUv:gt&&_(w.specularIntensityMap.channel),transmissionMapUv:ve&&_(w.transmissionMap.channel),thicknessMapUv:E&&_(w.thicknessMap.channel),alphaMapUv:ee&&_(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ut||$),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(Qe||ee),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:qe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Qe&&w.map.isVideoTexture===!0&&lt.getTransfer(w.map.colorSpace)===mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Gn,flipSided:w.side===nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ft&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ft&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function f(w){let y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(let O in w.defines)y.push(O),y.push(w.defines[O]);return w.isRawShaderMaterial===!1&&(b(y,w),x(y,w),y.push(n.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function b(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),w.push(a.mask)}function C(w){let y=g[w.type],O;if(y){let H=si[y];O=WD.clone(H.uniforms)}else O=w.uniforms;return O}function P(w,y){let O;for(let H=0,D=u.length;H<D;H++){let W=u[H];if(W.cacheKey===y){O=W,++O.usedTimes;break}}return O===void 0&&(O=new QP(n,y,w,s),u.push(O)),O}function A(w){if(--w.usedTimes===0){let y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function T(w){c.remove(w)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:C,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:N}}function nN(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function iN(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function B_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function V_(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,g,_,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),e++,f}function a(d,h,m,g,_,p){let f=o(d,h,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(d,h,m,g,_,p){let f=o(d,h,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||iN),i.length>1&&i.sort(h||B_),r.length>1&&r.sort(h||B_)}function u(){for(let d=e,h=n.length;d<h;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function rN(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new V_,n.set(i,[o])):r>=s.length?(o=new V_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new nt};break;case"SpotLight":t={position:new R,direction:new R,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function oN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var aN=0;function cN(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lN(n){let e=new sN,t=oN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);let r=new R,s=new Ct,o=new Ct;function a(l,u){let d=0,h=0,m=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,_=0,p=0,f=0,b=0,x=0,C=0,P=0,A=0,T=0,N=0;l.sort(cN);let w=u===!0?Math.PI:1;for(let O=0,H=l.length;O<H;O++){let D=l[O],W=D.color,G=D.intensity,J=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=W.r*G*w,h+=W.g*G*w,m+=W.b*G*w;else if(D.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(D.sh.coefficients[V],G);N++}else if(D.isDirectionalLight){let V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){let K=D.shadow,Z=t.get(D);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.directionalShadow[g]=Z,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=D.shadow.matrix,x++}i.directional[g]=V,g++}else if(D.isSpotLight){let V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(W).multiplyScalar(G*w),V.distance=J,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,i.spot[p]=V;let K=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,K.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[p]=K.matrix,D.castShadow){let Z=t.get(D);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=Y,P++}p++}else if(D.isRectAreaLight){let V=e.get(D);V.color.copy(W).multiplyScalar(G),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),i.rectArea[f]=V,f++}else if(D.isPointLight){let V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*w),V.distance=D.distance,V.decay=D.decay,D.castShadow){let K=D.shadow,Z=t.get(D);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,i.pointShadow[_]=Z,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=D.shadow.matrix,C++}i.point[_]=V,_++}else if(D.isHemisphereLight){let V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(G*w),V.groundColor.copy(D.groundColor).multiplyScalar(G*w),i.hemi[b]=V,b++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=m;let y=i.hash;(y.directionalLength!==g||y.pointLength!==_||y.spotLength!==p||y.rectAreaLength!==f||y.hemiLength!==b||y.numDirectionalShadows!==x||y.numPointShadows!==C||y.numSpotShadows!==P||y.numSpotMaps!==A||y.numLightProbes!==N)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=f,i.point.length=_,i.hemi.length=b,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=P+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=N,y.directionalLength=g,y.pointLength=_,y.spotLength=p,y.rectAreaLength=f,y.hemiLength=b,y.numDirectionalShadows=x,y.numPointShadows=C,y.numSpotShadows=P,y.numSpotMaps=A,y.numLightProbes=N,i.version=aN++)}function c(l,u){let d=0,h=0,m=0,g=0,_=0,p=u.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){let x=l[f];if(x.isDirectionalLight){let C=i.directional[d];C.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(x.isSpotLight){let C=i.spot[m];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let C=i.rectArea[g];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let C=i.point[h];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){let C=i.hemi[_];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:i}}function z_(n){let e=new lN(n),t=[],i=[];function r(){t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function uN(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new z_(n),e.set(r,[a])):s>=o.length?(a=new z_(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Xf=class extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yf=class extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},dN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hN=`uniform sampler2D shadow_pass;
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
}`;function fN(n,e,t){let i=new na,r=new je,s=new je,o=new _t,a=new Xf({depthPacking:_D}),c=new Yf,l={},u=t.maxTextureSize,d={[Xi]:nn,[nn]:Xi,[Gn]:Gn},h=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:dN,fragmentShader:hN}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ji;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new gn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W_;let f=this.type;this.render=function(A,T,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let w=n.getRenderTarget(),y=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Wi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let D=f!==_i&&this.type===_i,W=f===_i&&this.type!==_i;for(let G=0,J=A.length;G<J;G++){let Y=A[G],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let K=V.getFrameExtents();if(r.multiply(K),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,V.mapSize.y=s.y)),V.map===null||D===!0||W===!0){let ge=this.type!==_i?{minFilter:Cn,magFilter:Cn}:{};V.map!==null&&V.map.dispose(),V.map=new wi(r.x,r.y,ge),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let Z=V.getViewportCount();for(let ge=0;ge<Z;ge++){let qe=V.getViewport(ge);o.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),H.viewport(o),V.updateMatrices(Y,ge),i=V.getFrustum(),C(T,N,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===_i&&b(V,N),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(w,y,O)};function b(A,T){let N=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,N,h,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,N,m,_,null)}function x(A,T,N,w){let y=null,O=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)y=O;else if(y=N.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=y.uuid,D=T.uuid,W=l[H];W===void 0&&(W={},l[H]=W);let G=W[D];G===void 0&&(G=y.clone(),W[D]=G,T.addEventListener("dispose",P)),y=G}if(y.visible=T.visible,y.wireframe=T.wireframe,w===_i?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let H=n.properties.get(y);H.light=N}return y}function C(A,T,N,w,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===_i)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);let D=e.update(A),W=A.material;if(Array.isArray(W)){let G=D.groups;for(let J=0,Y=G.length;J<Y;J++){let V=G[J],K=W[V.materialIndex];if(K&&K.visible){let Z=x(A,K,w,y);A.onBeforeShadow(n,A,T,N,D,Z,V),n.renderBufferDirect(N,null,D,Z,A,V),A.onAfterShadow(n,A,T,N,D,Z,V)}}}else if(W.visible){let G=x(A,W,w,y);A.onBeforeShadow(n,A,T,N,D,G,null),n.renderBufferDirect(N,null,D,G,A,null),A.onAfterShadow(n,A,T,N,D,G,null)}}let H=A.children;for(let D=0,W=H.length;D<W;D++)C(H[D],T,N,w,y)}function P(A){A.target.removeEventListener("dispose",P);for(let N in l){let w=l[N],y=A.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}function pN(n){function e(){let E=!1,te=new _t,ee=null,ye=new _t(0,0,0,0);return{setMask:function(xe){ee!==xe&&!E&&(n.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){E=xe},setClear:function(xe,ft,vt,xt,jt){jt===!0&&(xe*=xt,ft*=xt,vt*=xt),te.set(xe,ft,vt,xt),ye.equals(te)===!1&&(n.clearColor(xe,ft,vt,xt),ye.copy(te))},reset:function(){E=!1,ee=null,ye.set(-1,0,0,0)}}}function t(){let E=!1,te=null,ee=null,ye=null;return{setTest:function(xe){xe?ue(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(xe){te!==xe&&!E&&(n.depthMask(xe),te=xe)},setFunc:function(xe){if(ee!==xe){switch(xe){case WA:n.depthFunc(n.NEVER);break;case $A:n.depthFunc(n.ALWAYS);break;case qA:n.depthFunc(n.LESS);break;case vl:n.depthFunc(n.LEQUAL);break;case XA:n.depthFunc(n.EQUAL);break;case YA:n.depthFunc(n.GEQUAL);break;case ZA:n.depthFunc(n.GREATER);break;case JA:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=xe}},setLocked:function(xe){E=xe},setClear:function(xe){ye!==xe&&(n.clearDepth(xe),ye=xe)},reset:function(){E=!1,te=null,ee=null,ye=null}}}function i(){let E=!1,te=null,ee=null,ye=null,xe=null,ft=null,vt=null,xt=null,jt=null;return{setTest:function(pt){E||(pt?ue(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(pt){te!==pt&&!E&&(n.stencilMask(pt),te=pt)},setFunc:function(pt,$n,qn){(ee!==pt||ye!==$n||xe!==qn)&&(n.stencilFunc(pt,$n,qn),ee=pt,ye=$n,xe=qn)},setOp:function(pt,$n,qn){(ft!==pt||vt!==$n||xt!==qn)&&(n.stencilOp(pt,$n,qn),ft=pt,vt=$n,xt=qn)},setLocked:function(pt){E=pt},setClear:function(pt){jt!==pt&&(n.clearStencil(pt),jt=pt)},reset:function(){E=!1,te=null,ee=null,ye=null,xe=null,ft=null,vt=null,xt=null,jt=null}}}let r=new e,s=new t,o=new i,a=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,h=[],m=null,g=!1,_=null,p=null,f=null,b=null,x=null,C=null,P=null,A=new nt(0,0,0),T=0,N=!1,w=null,y=null,O=null,H=null,D=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,J=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=J>=2);let V=null,K={},Z=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),qe=new _t().fromArray(Z),ht=new _t().fromArray(ge);function z(E,te,ee,ye){let xe=new Uint8Array(4),ft=n.createTexture();n.bindTexture(E,ft),n.texParameteri(E,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(E,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let vt=0;vt<ee;vt++)E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(te+vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ft}let Q={};Q[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),s.setFunc(vl),Ae(!1),ut(x0),ue(n.CULL_FACE),Ee(Wi);function ue(E){l[E]!==!0&&(n.enable(E),l[E]=!0)}function ae(E){l[E]!==!1&&(n.disable(E),l[E]=!1)}function Ue(E,te){return u[E]!==te?(n.bindFramebuffer(E,te),u[E]=te,E===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=te),E===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=te),!0):!1}function He(E,te){let ee=h,ye=!1;if(E){ee=d.get(te),ee===void 0&&(ee=[],d.set(te,ee));let xe=E.textures;if(ee.length!==xe.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,vt=xe.length;ft<vt;ft++)ee[ft]=n.COLOR_ATTACHMENT0+ft;ee.length=xe.length,ye=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,ye=!0);ye&&n.drawBuffers(ee)}function Qe(E){return m!==E?(n.useProgram(E),m=E,!0):!1}let L={[Ir]:n.FUNC_ADD,[AA]:n.FUNC_SUBTRACT,[DA]:n.FUNC_REVERSE_SUBTRACT};L[IA]=n.MIN,L[RA]=n.MAX;let We={[PA]:n.ZERO,[NA]:n.ONE,[OA]:n.SRC_COLOR,[Af]:n.SRC_ALPHA,[VA]:n.SRC_ALPHA_SATURATE,[kA]:n.DST_COLOR,[FA]:n.DST_ALPHA,[LA]:n.ONE_MINUS_SRC_COLOR,[Df]:n.ONE_MINUS_SRC_ALPHA,[BA]:n.ONE_MINUS_DST_COLOR,[UA]:n.ONE_MINUS_DST_ALPHA,[zA]:n.CONSTANT_COLOR,[HA]:n.ONE_MINUS_CONSTANT_COLOR,[GA]:n.CONSTANT_ALPHA,[jA]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(E,te,ee,ye,xe,ft,vt,xt,jt,pt){if(E===Wi){g===!0&&(ae(n.BLEND),g=!1);return}if(g===!1&&(ue(n.BLEND),g=!0),E!==TA){if(E!==_||pt!==N){if((p!==Ir||x!==Ir)&&(n.blendEquation(n.FUNC_ADD),p=Ir,x=Ir),pt)switch(E){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case M0:n.blendFunc(n.ONE,n.ONE);break;case w0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case b0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case M0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case w0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case b0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}f=null,b=null,C=null,P=null,A.set(0,0,0),T=0,_=E,N=pt}return}xe=xe||te,ft=ft||ee,vt=vt||ye,(te!==p||xe!==x)&&(n.blendEquationSeparate(L[te],L[xe]),p=te,x=xe),(ee!==f||ye!==b||ft!==C||vt!==P)&&(n.blendFuncSeparate(We[ee],We[ye],We[ft],We[vt]),f=ee,b=ye,C=ft,P=vt),(xt.equals(A)===!1||jt!==T)&&(n.blendColor(xt.r,xt.g,xt.b,jt),A.copy(xt),T=jt),_=E,N=!1}function Pt(E,te){E.side===Gn?ae(n.CULL_FACE):ue(n.CULL_FACE);let ee=E.side===nn;te&&(ee=!ee),Ae(ee),E.blending===Us&&E.transparent===!1?Ee(Wi):Ee(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),s.setFunc(E.depthFunc),s.setTest(E.depthTest),s.setMask(E.depthWrite),r.setMask(E.colorWrite);let ye=E.stencilWrite;o.setTest(ye),ye&&(o.setMask(E.stencilWriteMask),o.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),o.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),v(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(E){w!==E&&(E?n.frontFace(n.CW):n.frontFace(n.CCW),w=E)}function ut(E){E!==SA?(ue(n.CULL_FACE),E!==y&&(E===x0?n.cullFace(n.BACK):E===EA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),y=E}function S(E){E!==O&&(G&&n.lineWidth(E),O=E)}function v(E,te,ee){E?(ue(n.POLYGON_OFFSET_FILL),(H!==te||D!==ee)&&(n.polygonOffset(te,ee),H=te,D=ee)):ae(n.POLYGON_OFFSET_FILL)}function B(E){E?ue(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function j(E){E===void 0&&(E=n.TEXTURE0+W-1),V!==E&&(n.activeTexture(E),V=E)}function $(E,te,ee){ee===void 0&&(V===null?ee=n.TEXTURE0+W-1:ee=V);let ye=K[ee];ye===void 0&&(ye={type:void 0,texture:void 0},K[ee]=ye),(ye.type!==E||ye.texture!==te)&&(V!==ee&&(n.activeTexture(ee),V=ee),n.bindTexture(E,te||Q[E]),ye.type=E,ye.texture=te)}function q(){let E=K[V];E!==void 0&&E.type!==void 0&&(n.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function we(){try{n.compressedTexImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function _e(){try{n.texSubImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Re(){try{n.texStorage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ye(){try{n.texImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function et(E){qe.equals(E)===!1&&(n.scissor(E.x,E.y,E.z,E.w),qe.copy(E))}function st(E){ht.equals(E)===!1&&(n.viewport(E.x,E.y,E.z,E.w),ht.copy(E))}function it(E,te){let ee=c.get(te);ee===void 0&&(ee=new WeakMap,c.set(te,ee));let ye=ee.get(E);ye===void 0&&(ye=n.getUniformBlockIndex(te,E.name),ee.set(E,ye))}function gt(E,te){let ye=c.get(te).get(E);a.get(te)!==ye&&(n.uniformBlockBinding(te,ye,E.__bindingPointIndex),a.set(te,ye))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},V=null,K={},u={},d=new WeakMap,h=[],m=null,g=!1,_=null,p=null,f=null,b=null,x=null,C=null,P=null,A=new nt(0,0,0),T=0,N=!1,w=null,y=null,O=null,H=null,D=null,qe.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:ae,bindFramebuffer:Ue,drawBuffers:He,useProgram:Qe,setBlending:Ee,setMaterial:Pt,setFlipSided:Ae,setCullFace:ut,setLineWidth:S,setPolygonOffset:v,setScissorTest:B,activeTexture:j,bindTexture:$,unbindTexture:q,compressedTexImage2D:we,compressedTexImage3D:X,texImage2D:fe,texImage3D:Ye,updateUBOMapping:it,uniformBlockBinding:gt,texStorage2D:Re,texStorage3D:he,texSubImage2D:_e,texSubImage3D:be,compressedTexSubImage2D:ne,compressedTexSubImage3D:le,scissor:et,viewport:st,reset:ve}}function mN(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,u=new WeakMap,d,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return m?new OffscreenCanvas(S,v):El("canvas")}function _(S,v,B){let j=1,$=ut(S);if(($.width>B||$.height>B)&&(j=B/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let q=Math.floor(j*$.width),we=Math.floor(j*$.height);d===void 0&&(d=g(q,we));let X=v?g(q,we):d;return X.width=q,X.height=we,X.getContext("2d").drawImage(S,0,0,q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+we+")."),X}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),S;return S}function p(S){return S.generateMipmaps&&S.minFilter!==Cn&&S.minFilter!==jn}function f(S){n.generateMipmap(S)}function b(S,v,B,j,$=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let q=v;if(v===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),v===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),v===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),v===n.RGBA){let we=$?Ml:lt.getTransfer(j);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=we===mt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(S,v){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Cn&&S.minFilter!==jn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function C(S){let v=S.target;v.removeEventListener("dispose",C),A(v),v.isVideoTexture&&u.delete(v)}function P(S){let v=S.target;v.removeEventListener("dispose",P),N(v)}function A(S){let v=i.get(S);if(v.__webglInit===void 0)return;let B=S.source,j=h.get(B);if(j){let $=j[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(S),Object.keys(j).length===0&&h.delete(B)}i.remove(S)}function T(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let B=S.source,j=h.get(B);delete j[v.__cacheKey],o.memory.textures--}function N(S){let v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let $=0;$<v.__webglFramebuffer[j].length;$++)n.deleteFramebuffer(v.__webglFramebuffer[j][$]);else n.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)n.deleteFramebuffer(v.__webglFramebuffer[j]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=S.textures;for(let j=0,$=B.length;j<$;j++){let q=i.get(B[j]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(B[j])}i.remove(S)}let w=0;function y(){w=0}function O(){let S=w;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),w+=1,S}function H(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function D(S,v){let B=i.get(S);if(S.isVideoTexture&&Pt(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){let j=S.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe(B,S,v);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function W(S,v){let B=i.get(S);if(S.version>0&&B.__version!==S.version){qe(B,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function G(S,v){let B=i.get(S);if(S.version>0&&B.__version!==S.version){qe(B,S,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function J(S,v){let B=i.get(S);if(S.version>0&&B.__version!==S.version){ht(B,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}let Y={[Pf]:n.REPEAT,[Pr]:n.CLAMP_TO_EDGE,[Nf]:n.MIRRORED_REPEAT},V={[Cn]:n.NEAREST,[aD]:n.NEAREST_MIPMAP_NEAREST,[Xc]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[$h]:n.LINEAR_MIPMAP_NEAREST,[Nr]:n.LINEAR_MIPMAP_LINEAR},K={[MD]:n.NEVER,[TD]:n.ALWAYS,[wD]:n.LESS,[nx]:n.LEQUAL,[bD]:n.EQUAL,[CD]:n.GEQUAL,[SD]:n.GREATER,[ED]:n.NOTEQUAL};function Z(S,v){if(v.type===ji&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jn||v.magFilter===$h||v.magFilter===Xc||v.magFilter===Nr||v.minFilter===jn||v.minFilter===$h||v.minFilter===Xc||v.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,Y[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Y[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Y[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,V[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,V[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,K[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Cn||v.minFilter!==Xc&&v.minFilter!==Nr||v.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ge(S,v){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",C));let j=v.source,$=h.get(j);$===void 0&&($={},h.set(j,$));let q=H(v);if(q!==S.__cacheKey){$[q]===void 0&&($[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),$[q].usedTimes++;let we=$[S.__cacheKey];we!==void 0&&($[S.__cacheKey].usedTimes--,we.usedTimes===0&&T(v)),S.__cacheKey=q,S.__webglTexture=$[q].texture}return B}function qe(S,v,B){let j=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=n.TEXTURE_3D);let $=ge(S,v),q=v.source;t.bindTexture(j,S.__webglTexture,n.TEXTURE0+B);let we=i.get(q);if(q.version!==we.__version||$===!0){t.activeTexture(n.TEXTURE0+B);let X=lt.getPrimaries(lt.workingColorSpace),_e=v.colorSpace===Gi?null:lt.getPrimaries(v.colorSpace),be=v.colorSpace===Gi||X===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ne=_(v.image,!1,r.maxTextureSize);ne=Ae(v,ne);let le=s.convert(v.format,v.colorSpace),Re=s.convert(v.type),he=b(v.internalFormat,le,Re,v.colorSpace,v.isVideoTexture);Z(j,v);let fe,Ye=v.mipmaps,et=v.isVideoTexture!==!0&&he!==ex,st=we.__version===void 0||$===!0,it=q.dataReady,gt=x(v,ne);if(v.isDepthTexture)he=n.DEPTH_COMPONENT16,v.type===ji?he=n.DEPTH_COMPONENT32F:v.type===Gs?he=n.DEPTH_COMPONENT24:v.type===ra&&(he=n.DEPTH24_STENCIL8),st&&(et?t.texStorage2D(n.TEXTURE_2D,1,he,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,he,ne.width,ne.height,0,le,Re,null));else if(v.isDataTexture)if(Ye.length>0){et&&st&&t.texStorage2D(n.TEXTURE_2D,gt,he,Ye[0].width,Ye[0].height);for(let ve=0,E=Ye.length;ve<E;ve++)fe=Ye[ve],et?it&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,fe.width,fe.height,le,Re,fe.data):t.texImage2D(n.TEXTURE_2D,ve,he,fe.width,fe.height,0,le,Re,fe.data);v.generateMipmaps=!1}else et?(st&&t.texStorage2D(n.TEXTURE_2D,gt,he,ne.width,ne.height),it&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,le,Re,ne.data)):t.texImage2D(n.TEXTURE_2D,0,he,ne.width,ne.height,0,le,Re,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){et&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,gt,he,Ye[0].width,Ye[0].height,ne.depth);for(let ve=0,E=Ye.length;ve<E;ve++)fe=Ye[ve],v.format!==oi?le!==null?et?it&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,fe.width,fe.height,ne.depth,le,fe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,he,fe.width,fe.height,ne.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?it&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,fe.width,fe.height,ne.depth,le,Re,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,he,fe.width,fe.height,ne.depth,0,le,Re,fe.data)}else{et&&st&&t.texStorage2D(n.TEXTURE_2D,gt,he,Ye[0].width,Ye[0].height);for(let ve=0,E=Ye.length;ve<E;ve++)fe=Ye[ve],v.format!==oi?le!==null?et?it&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,fe.width,fe.height,le,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,he,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?it&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,fe.width,fe.height,le,Re,fe.data):t.texImage2D(n.TEXTURE_2D,ve,he,fe.width,fe.height,0,le,Re,fe.data)}else if(v.isDataArrayTexture)et?(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,gt,he,ne.width,ne.height,ne.depth),it&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,le,Re,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,ne.width,ne.height,ne.depth,0,le,Re,ne.data);else if(v.isData3DTexture)et?(st&&t.texStorage3D(n.TEXTURE_3D,gt,he,ne.width,ne.height,ne.depth),it&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,le,Re,ne.data)):t.texImage3D(n.TEXTURE_3D,0,he,ne.width,ne.height,ne.depth,0,le,Re,ne.data);else if(v.isFramebufferTexture){if(st)if(et)t.texStorage2D(n.TEXTURE_2D,gt,he,ne.width,ne.height);else{let ve=ne.width,E=ne.height;for(let te=0;te<gt;te++)t.texImage2D(n.TEXTURE_2D,te,he,ve,E,0,le,Re,null),ve>>=1,E>>=1}}else if(Ye.length>0){if(et&&st){let ve=ut(Ye[0]);t.texStorage2D(n.TEXTURE_2D,gt,he,ve.width,ve.height)}for(let ve=0,E=Ye.length;ve<E;ve++)fe=Ye[ve],et?it&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,le,Re,fe):t.texImage2D(n.TEXTURE_2D,ve,he,le,Re,fe);v.generateMipmaps=!1}else if(et){if(st){let ve=ut(ne);t.texStorage2D(n.TEXTURE_2D,gt,he,ve.width,ve.height)}it&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Re,ne)}else t.texImage2D(n.TEXTURE_2D,0,he,le,Re,ne);p(v)&&f(j),we.__version=q.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ht(S,v,B){if(v.image.length!==6)return;let j=ge(S,v),$=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+B);let q=i.get($);if($.version!==q.__version||j===!0){t.activeTexture(n.TEXTURE0+B);let we=lt.getPrimaries(lt.workingColorSpace),X=v.colorSpace===Gi?null:lt.getPrimaries(v.colorSpace),_e=v.colorSpace===Gi||we===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let be=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,le=[];for(let E=0;E<6;E++)!be&&!ne?le[E]=_(v.image[E],!0,r.maxCubemapSize):le[E]=ne?v.image[E].image:v.image[E],le[E]=Ae(v,le[E]);let Re=le[0],he=s.convert(v.format,v.colorSpace),fe=s.convert(v.type),Ye=b(v.internalFormat,he,fe,v.colorSpace),et=v.isVideoTexture!==!0,st=q.__version===void 0||j===!0,it=$.dataReady,gt=x(v,Re);Z(n.TEXTURE_CUBE_MAP,v);let ve;if(be){et&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ye,Re.width,Re.height);for(let E=0;E<6;E++){ve=le[E].mipmaps;for(let te=0;te<ve.length;te++){let ee=ve[te];v.format!==oi?he!==null?et?it&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,0,0,ee.width,ee.height,he,ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,Ye,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,0,0,ee.width,ee.height,he,fe,ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,Ye,ee.width,ee.height,0,he,fe,ee.data)}}}else{if(ve=v.mipmaps,et&&st){ve.length>0&&gt++;let E=ut(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ye,E.width,E.height)}for(let E=0;E<6;E++)if(ne){et?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,0,0,le[E].width,le[E].height,he,fe,le[E].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,Ye,le[E].width,le[E].height,0,he,fe,le[E].data);for(let te=0;te<ve.length;te++){let ye=ve[te].image[E].image;et?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,0,0,ye.width,ye.height,he,fe,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,Ye,ye.width,ye.height,0,he,fe,ye.data)}}else{et?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,0,0,he,fe,le[E]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,Ye,he,fe,le[E]);for(let te=0;te<ve.length;te++){let ee=ve[te];et?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,0,0,he,fe,ee.image[E]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,Ye,he,fe,ee.image[E])}}}p(v)&&f(n.TEXTURE_CUBE_MAP),q.__version=$.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function z(S,v,B,j,$,q){let we=s.convert(B.format,B.colorSpace),X=s.convert(B.type),_e=b(B.internalFormat,we,X,B.colorSpace);if(!i.get(v).__hasExternalTextures){let ne=Math.max(1,v.width>>q),le=Math.max(1,v.height>>q);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,q,_e,ne,le,v.depth,0,we,X,null):t.texImage2D($,q,_e,ne,le,0,we,X,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Ee(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,$,i.get(B).__webglTexture,0,We(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,$,i.get(B).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(S,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let j=n.DEPTH_COMPONENT24;if(B||Ee(v)){let $=v.depthTexture;$&&$.isDepthTexture&&($.type===ji?j=n.DEPTH_COMPONENT32F:$.type===Gs&&(j=n.DEPTH_COMPONENT24));let q=We(v);Ee(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,j,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,q,j,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){let j=We(v);B&&Ee(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,v.width,v.height):Ee(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let j=v.textures;for(let $=0;$<j.length;$++){let q=j[$],we=s.convert(q.format,q.colorSpace),X=s.convert(q.type),_e=b(q.internalFormat,we,X,q.colorSpace),be=We(v);B&&Ee(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,_e,v.width,v.height):Ee(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,_e,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,_e,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),D(v.depthTexture,0);let j=i.get(v.depthTexture).__webglTexture,$=We(v);if(v.depthTexture.format===ks)Ee(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(v.depthTexture.format===Qo)Ee(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ae(S){let v=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ue(v.__webglFramebuffer,S)}else if(B){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]=n.createRenderbuffer(),Q(v.__webglDepthbuffer[j],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Q(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(S,v,B){let j=i.get(S);v!==void 0&&z(j.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ae(S)}function He(S){let v=S.texture,B=i.get(S),j=i.get(v);S.addEventListener("dispose",P);let $=S.textures,q=S.isWebGLCubeRenderTarget===!0,we=$.length>1;if(we||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=v.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[X]=[];for(let _e=0;_e<v.mipmaps.length;_e++)B.__webglFramebuffer[X][_e]=n.createFramebuffer()}else B.__webglFramebuffer[X]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let X=0;X<v.mipmaps.length;X++)B.__webglFramebuffer[X]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(we)for(let X=0,_e=$.length;X<_e;X++){let be=i.get($[X]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&Ee(S)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let X=0;X<$.length;X++){let _e=$[X];B.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[X]);let be=s.convert(_e.format,_e.colorSpace),ne=s.convert(_e.type),le=b(_e.internalFormat,be,ne,_e.colorSpace,S.isXRRenderTarget===!0),Re=We(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,le,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,B.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Q(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Z(n.TEXTURE_CUBE_MAP,v);for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)z(B.__webglFramebuffer[X][_e],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e);else z(B.__webglFramebuffer[X],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let X=0,_e=$.length;X<_e;X++){let be=$[X],ne=i.get(be);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),Z(n.TEXTURE_2D,be),z(B.__webglFramebuffer,S,be,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D,0),p(be)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let X=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(X=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(X,j.__webglTexture),Z(X,v),v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)z(B.__webglFramebuffer[_e],S,v,n.COLOR_ATTACHMENT0,X,_e);else z(B.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,X,0);p(v)&&f(X),t.unbindTexture()}S.depthBuffer&&ae(S)}function Qe(S){let v=S.textures;for(let B=0,j=v.length;B<j;B++){let $=v[B];if(p($)){let q=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get($).__webglTexture;t.bindTexture(q,we),f(q),t.unbindTexture()}}}function L(S){if(S.samples>0&&Ee(S)===!1){let v=S.textures,B=S.width,j=S.height,$=n.COLOR_BUFFER_BIT,q=[],we=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=i.get(S),_e=v.length>1;if(_e)for(let be=0;be<v.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,X.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let be=0;be<v.length;be++){q.push(n.COLOR_ATTACHMENT0+be),S.depthBuffer&&q.push(we);let ne=X.__ignoreDepthValues!==void 0?X.__ignoreDepthValues:!1;if(ne===!1&&(S.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&X.__isTransmissionRenderTarget!==!0&&($|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,X.__webglColorRenderbuffer[be]),ne===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[we]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[we])),_e){let le=i.get(v[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,B,j,0,0,B,j,$,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,q)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let be=0;be<v.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,X.__webglColorRenderbuffer[be]);let ne=i.get(v[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,X.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}}function We(S){return Math.min(r.maxSamples,S.samples)}function Ee(S){let v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pt(S){let v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function Ae(S,v){let B=S.colorSpace,j=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==Ki&&B!==Gi&&(lt.getTransfer(B)===mt?(j!==oi||$!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function ut(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=y,this.setTexture2D=D,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=Ue,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=z,this.useMultisampledRTT=Ee}function gN(n,e){function t(i,r=Gi){let s,o=lt.getTransfer(r);if(i===qi)return n.UNSIGNED_BYTE;if(i===Y_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Z_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uD)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cD)return n.BYTE;if(i===lD)return n.SHORT;if(i===q_)return n.UNSIGNED_SHORT;if(i===X_)return n.INT;if(i===Gs)return n.UNSIGNED_INT;if(i===ji)return n.FLOAT;if(i===yl)return n.HALF_FLOAT;if(i===dD)return n.ALPHA;if(i===hD)return n.RGB;if(i===oi)return n.RGBA;if(i===fD)return n.LUMINANCE;if(i===pD)return n.LUMINANCE_ALPHA;if(i===ks)return n.DEPTH_COMPONENT;if(i===Qo)return n.DEPTH_STENCIL;if(i===mD)return n.RED;if(i===J_)return n.RED_INTEGER;if(i===gD)return n.RG;if(i===K_)return n.RG_INTEGER;if(i===Q_)return n.RGBA_INTEGER;if(i===qh||i===Xh||i===Yh||i===Zh)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qh)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qh)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xh)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yh)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zh)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===E0||i===C0||i===T0||i===A0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===E0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===C0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===T0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===A0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ex)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===D0||i===I0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===D0)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===I0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===R0||i===P0||i===N0||i===O0||i===L0||i===F0||i===U0||i===k0||i===B0||i===V0||i===z0||i===H0||i===G0||i===j0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===R0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===P0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===N0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===O0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===L0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===F0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===U0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===k0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===B0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===V0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===z0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===H0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===G0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===j0)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jh||i===W0||i===$0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jh)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===W0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vD||i===q0||i===X0||i===Y0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===q0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===X0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Y0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ra?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Zf=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Fs=class extends Br{constructor(){super(),this.isGroup=!0,this.type="Group"}},vN={type:"move"},Ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vN)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},yN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_N=`
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

}`,Jf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new kr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,r=new ai({vertexShader:yN,fragmentShader:_N,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new gn(new Ol(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},Kf=class extends Yi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null,_=new Jf,p=t.getContextAttributes(),f=null,b=null,x=[],C=[],P=new je,A=null,T=new Yt;T.layers.enable(1),T.viewport=new _t;let N=new Yt;N.layers.enable(2),N.viewport=new _t;let w=[T,N],y=new Zf;y.layers.enable(1),y.layers.enable(2);let O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Q=x[z];return Q===void 0&&(Q=new Ko,x[z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(z){let Q=x[z];return Q===void 0&&(Q=new Ko,x[z]=Q),Q.getGripSpace()},this.getHand=function(z){let Q=x[z];return Q===void 0&&(Q=new Ko,x[z]=Q),Q.getHandSpace()};function D(z){let Q=C.indexOf(z.inputSource);if(Q===-1)return;let ue=x[Q];ue!==void 0&&(ue.update(z.inputSource,z.frame,l||o),ue.dispatchEvent({type:z.type,data:z.inputSource}))}function W(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",G);for(let z=0;z<x.length;z++){let Q=C[z];Q!==null&&(C[z]=null,x[z].disconnect(Q))}O=null,H=null,_.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,b=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(z){return la(this,null,function*(){if(r=z,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",W),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){let Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new wi(m.framebufferWidth,m.framebufferHeight,{format:oi,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ue=null,ae=null;p.depth&&(ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?Qo:ks,ue=p.stencil?ra:Gs);let Ue={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new wi(h.textureWidth,h.textureHeight,{format:oi,type:qi,depthTexture:new Fl(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let He=e.properties.get(b);He.__ignoreDepthValues=h.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),ht.setContext(r),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(z){for(let Q=0;Q<z.removed.length;Q++){let ue=z.removed[Q],ae=C.indexOf(ue);ae>=0&&(C[ae]=null,x[ae].disconnect(ue))}for(let Q=0;Q<z.added.length;Q++){let ue=z.added[Q],ae=C.indexOf(ue);if(ae===-1){for(let He=0;He<x.length;He++)if(He>=C.length){C.push(ue),ae=He;break}else if(C[He]===null){C[He]=ue,ae=He;break}if(ae===-1)break}let Ue=x[ae];Ue&&Ue.connect(ue)}}let J=new R,Y=new R;function V(z,Q,ue){J.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(ue.matrixWorld);let ae=J.distanceTo(Y),Ue=Q.projectionMatrix.elements,He=ue.projectionMatrix.elements,Qe=Ue[14]/(Ue[10]-1),L=Ue[14]/(Ue[10]+1),We=(Ue[9]+1)/Ue[5],Ee=(Ue[9]-1)/Ue[5],Pt=(Ue[8]-1)/Ue[0],Ae=(He[8]+1)/He[0],ut=Qe*Pt,S=Qe*Ae,v=ae/(-Pt+Ae),B=v*-Pt;Q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(B),z.translateZ(v),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let j=Qe+v,$=L+v,q=ut-B,we=S+(ae-B),X=We*L/$*j,_e=Ee*L/$*j;z.projectionMatrix.makePerspective(q,we,X,_e,j,$),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function K(z,Q){Q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;_.texture!==null&&(z.near=_.depthNear,z.far=_.depthFar),y.near=N.near=T.near=z.near,y.far=N.far=T.far=z.far,(O!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),O=y.near,H=y.far,T.near=O,T.far=H,N.near=O,N.far=H,T.updateProjectionMatrix(),N.updateProjectionMatrix(),z.updateProjectionMatrix());let Q=z.parent,ue=y.cameras;K(y,Q);for(let ae=0;ae<ue.length;ae++)K(ue[ae],Q);ue.length===2?V(y,T,N):y.projectionMatrix.copy(T.projectionMatrix),Z(z,y,Q)};function Z(z,Q,ue){ue===null?z.matrix.copy(Q.matrixWorld):(z.matrix.copy(ue.matrixWorld),z.matrix.invert(),z.matrix.multiply(Q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Q.projectionMatrix),z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Of*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(z){c=z,h!==null&&(h.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null};let ge=null;function qe(z,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){let ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ae=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let He=0;He<ue.length;He++){let Qe=ue[He],L=null;if(m!==null)L=m.getViewport(Qe);else{let Ee=d.getViewSubImage(h,Qe);L=Ee.viewport,He===0&&(e.setRenderTargetTextures(b,Ee.colorTexture,h.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(b))}let We=w[He];We===void 0&&(We=new Yt,We.layers.enable(He),We.viewport=new _t,w[He]=We),We.matrix.fromArray(Qe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Qe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(L.x,L.y,L.width,L.height),He===0&&(y.matrix.copy(We.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(We)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){let He=d.getDepthInformation(ue[0]);He&&He.isValid&&He.texture&&_.init(e,He,r.renderState)}}for(let ue=0;ue<x.length;ue++){let ae=C[ue],Ue=x[ue];ae!==null&&Ue!==void 0&&Ue.update(ae,Q,l||o)}_.render(e,y),ge&&ge(z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ht=new ox;ht.setAnimationLoop(qe),this.setAnimationLoop=function(z){ge=z},this.dispose=function(){}}},Ar=new js,xN=new Ct;function MN(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,sx(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,b,x,C){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,C)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,b,x):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===nn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===nn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let b=e.get(f),x=b.envMap,C=b.envMapRotation;if(x&&(p.envMap.value=x,Ar.copy(C),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),p.envMapRotation.value.setFromMatrix4(xN.makeRotationFromEuler(Ar)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let P=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*P,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,b,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){let b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wN(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,x){let C=x.program;i.uniformBlockBinding(b,C)}function l(b,x){let C=r[b.id];C===void 0&&(g(b),C=u(b),r[b.id]=C,b.addEventListener("dispose",p));let P=x.program;i.updateUBOMapping(b,P);let A=e.render.frame;s[b.id]!==A&&(h(b),s[b.id]=A)}function u(b){let x=d();b.__bindingPointIndex=x;let C=n.createBuffer(),P=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,C),C}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let x=r[b.id],C=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,T=C.length;A<T;A++){let N=Array.isArray(C[A])?C[A]:[C[A]];for(let w=0,y=N.length;w<y;w++){let O=N[w];if(m(O,A,w,P)===!0){let H=O.__offset,D=Array.isArray(O.value)?O.value:[O.value],W=0;for(let G=0;G<D.length;G++){let J=D[G],Y=_(J);typeof J=="number"||typeof J=="boolean"?(O.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,H+W,O.__data)):J.isMatrix3?(O.__data[0]=J.elements[0],O.__data[1]=J.elements[1],O.__data[2]=J.elements[2],O.__data[3]=0,O.__data[4]=J.elements[3],O.__data[5]=J.elements[4],O.__data[6]=J.elements[5],O.__data[7]=0,O.__data[8]=J.elements[6],O.__data[9]=J.elements[7],O.__data[10]=J.elements[8],O.__data[11]=0):(J.toArray(O.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,x,C,P){let A=b.value,T=x+"_"+C;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{let N=P[T];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return P[T]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(b){let x=b.uniforms,C=0,P=16;for(let T=0,N=x.length;T<N;T++){let w=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,O=w.length;y<O;y++){let H=w[y],D=Array.isArray(H.value)?H.value:[H.value];for(let W=0,G=D.length;W<G;W++){let J=D[W],Y=_(J),V=C%P;V!==0&&P-V<Y.boundary&&(C+=P-V),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=C,C+=Y.storage}}}let A=C%P;return A>0&&(C+=P-A),b.__size=C,b.__cache={},this}function _(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){let x=b.target;x.removeEventListener("dispose",p);let C=o.indexOf(x.__bindingPointIndex);o.splice(C,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var Ul=class{constructor(e={}){let{canvas:t=DD(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this._useLegacyLights=!1,this.toneMapping=$i,this.toneMappingExposure=1;let x=this,C=!1,P=0,A=0,T=null,N=-1,w=null,y=new _t,O=new _t,H=null,D=new nt(0),W=0,G=t.width,J=t.height,Y=1,V=null,K=null,Z=new _t(0,0,G,J),ge=new _t(0,0,G,J),qe=!1,ht=new na,z=!1,Q=!1,ue=new Ct,ae=new je,Ue=new R,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return T===null?Y:1}let L=i;function We(M,I){let U=t.getContext(M,I);return U!==null?U:null}try{let M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${up}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",ye,!1),L===null){let I="webgl2";if(L=We(I,M),L===null)throw We(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ee,Pt,Ae,ut,S,v,B,j,$,q,we,X,_e,be,ne,le,Re,he,fe,Ye,et,st,it,gt;function ve(){Ee=new zR(L),Ee.init(),Pt=new LR(L,Ee,e),st=new gN(L,Ee),Ae=new pN(L),ut=new jR(L),S=new nN,v=new mN(L,Ee,Ae,S,Pt,st,ut),B=new UR(x),j=new VR(x),$=new ZD(L),it=new NR(L,$),q=new HR(L,$,ut,it),we=new $R(L,q,$,ut),fe=new WR(L,Pt,v),le=new FR(S),X=new tN(x,B,j,Ee,Pt,it,le),_e=new MN(x,S),be=new rN,ne=new uN(Ee),he=new PR(x,B,j,Ae,we,h,c),Re=new fN(x,we,Pt),gt=new wN(L,ut,Pt,Ae),Ye=new OR(L,Ee,ut),et=new GR(L,Ee,ut),ut.programs=X.programs,x.capabilities=Pt,x.extensions=Ee,x.properties=S,x.renderLists=be,x.shadowMap=Re,x.state=Ae,x.info=ut}ve();let E=new Kf(x,L);this.xr=E,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=Ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(G,J,!1))},this.getSize=function(M){return M.set(G,J)},this.setSize=function(M,I,U=!0){if(E.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,J=I,t.width=Math.floor(M*Y),t.height=Math.floor(I*Y),U===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(G*Y,J*Y).floor()},this.setDrawingBufferSize=function(M,I,U){G=M,J=I,Y=U,t.width=Math.floor(M*U),t.height=Math.floor(I*U),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(Z)},this.setViewport=function(M,I,U,k){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,I,U,k),Ae.viewport(y.copy(Z).multiplyScalar(Y).round())},this.getScissor=function(M){return M.copy(ge)},this.setScissor=function(M,I,U,k){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,I,U,k),Ae.scissor(O.copy(ge).multiplyScalar(Y).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(M){Ae.setScissorTest(qe=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(M=!0,I=!0,U=!0){let k=0;if(M){let F=!1;if(T!==null){let oe=T.texture.format;F=oe===Q_||oe===K_||oe===J_}if(F){let oe=T.texture.type,me=oe===qi||oe===Gs||oe===q_||oe===ra||oe===Y_||oe===Z_,Me=he.getClearColor(),Ce=he.getClearAlpha(),Oe=Me.r,Pe=Me.g,Le=Me.b;me?(m[0]=Oe,m[1]=Pe,m[2]=Le,m[3]=Ce,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Oe,g[1]=Pe,g[2]=Le,g[3]=Ce,L.clearBufferiv(L.COLOR,0,g))}else k|=L.COLOR_BUFFER_BIT}I&&(k|=L.DEPTH_BUFFER_BIT),U&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),be.dispose(),ne.dispose(),S.dispose(),B.dispose(),j.dispose(),we.dispose(),it.dispose(),gt.dispose(),X.dispose(),E.dispose(),E.removeEventListener("sessionstart",$n),E.removeEventListener("sessionend",qn),Qi.stop()};function te(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let M=ut.autoReset,I=Re.enabled,U=Re.autoUpdate,k=Re.needsUpdate,F=Re.type;ve(),ut.autoReset=M,Re.enabled=I,Re.autoUpdate=U,Re.needsUpdate=k,Re.type=F}function ye(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function xe(M){let I=M.target;I.removeEventListener("dispose",xe),ft(I)}function ft(M){vt(M),S.remove(M)}function vt(M){let I=S.get(M).programs;I!==void 0&&(I.forEach(function(U){X.releaseProgram(U)}),M.isShaderMaterial&&X.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,U,k,F,oe){I===null&&(I=He);let me=F.isMesh&&F.matrixWorld.determinant()<0,Me=Ex(M,I,U,k,F);Ae.setMaterial(k,me);let Ce=U.index,Oe=1;if(k.wireframe===!0){if(Ce=q.getWireframeAttribute(U),Ce===void 0)return;Oe=2}let Pe=U.drawRange,Le=U.attributes.position,bt=Pe.start*Oe,rn=(Pe.start+Pe.count)*Oe;oe!==null&&(bt=Math.max(bt,oe.start*Oe),rn=Math.min(rn,(oe.start+oe.count)*Oe)),Ce!==null?(bt=Math.max(bt,0),rn=Math.min(rn,Ce.count)):Le!=null&&(bt=Math.max(bt,0),rn=Math.min(rn,Le.count));let kt=rn-bt;if(kt<0||kt===1/0)return;it.setup(F,k,Me,U,Ce);let ci,Mt=Ye;if(Ce!==null&&(ci=$.get(Ce),Mt=et,Mt.setIndex(ci)),F.isMesh)k.wireframe===!0?(Ae.setLineWidth(k.wireframeLinewidth*Qe()),Mt.setMode(L.LINES)):Mt.setMode(L.TRIANGLES);else if(F.isLine){let ke=k.linewidth;ke===void 0&&(ke=1),Ae.setLineWidth(ke*Qe()),F.isLineSegments?Mt.setMode(L.LINES):F.isLineLoop?Mt.setMode(L.LINE_LOOP):Mt.setMode(L.LINE_STRIP)}else F.isPoints?Mt.setMode(L.POINTS):F.isSprite&&Mt.setMode(L.TRIANGLES);if(F.isBatchedMesh)Mt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Mt.renderInstances(bt,kt,F.count);else if(U.isInstancedBufferGeometry){let ke=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,ql=Math.min(U.instanceCount,ke);Mt.renderInstances(bt,kt,ql)}else Mt.render(bt,kt)};function xt(M,I,U){M.transparent===!0&&M.side===Gn&&M.forceSinglePass===!1?(M.side=nn,M.needsUpdate=!0,aa(M,I,U),M.side=Xi,M.needsUpdate=!0,aa(M,I,U),M.side=Gn):aa(M,I,U)}this.compile=function(M,I,U=null){U===null&&(U=M),p=ne.get(U),p.init(),b.push(p),U.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==U&&M.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(x._useLegacyLights);let k=new Set;return M.traverse(function(F){let oe=F.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){let Me=oe[me];xt(Me,U,F),k.add(Me)}else xt(oe,U,F),k.add(oe)}),b.pop(),p=null,k},this.compileAsync=function(M,I,U=null){let k=this.compile(M,I,U);return new Promise(F=>{function oe(){if(k.forEach(function(me){S.get(me).currentProgram.isReady()&&k.delete(me)}),k.size===0){F(M);return}setTimeout(oe,10)}Ee.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let jt=null;function pt(M){jt&&jt(M)}function $n(){Qi.stop()}function qn(){Qi.start()}let Qi=new ox;Qi.setAnimationLoop(pt),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(M){jt=M,E.setAnimationLoop(M),M===null?Qi.stop():Qi.start()},E.addEventListener("sessionstart",$n),E.addEventListener("sessionend",qn),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),E.enabled===!0&&E.isPresenting===!0&&(E.cameraAutoUpdate===!0&&E.updateCamera(I),I=E.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,T),p=ne.get(M,b.length),p.init(),b.push(p),ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ht.setFromProjectionMatrix(ue),Q=this.localClippingEnabled,z=le.init(this.clippingPlanes,Q),_=be.get(M,f.length),_.init(),f.push(_),mp(M,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,K),this.info.render.frame++,z===!0&&le.beginShadows();let U=p.state.shadowsArray;if(Re.render(U,M,I),z===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(E.enabled===!1||E.isPresenting===!1||E.hasDepthSensing()===!1)&&he.render(_,M),p.setupLights(x._useLegacyLights),I.isArrayCamera){let k=I.cameras;for(let F=0,oe=k.length;F<oe;F++){let me=k[F];gp(_,M,me,me.viewport)}}else gp(_,M,I);T!==null&&(v.updateMultisampleRenderTarget(T),v.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(x,M,I),it.resetDefaultState(),N=-1,w=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function mp(M,I,U,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ht.intersectsSprite(M)){k&&Ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ue);let me=we.update(M),Me=M.material;Me.visible&&_.push(M,me,Me,U,Ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ht.intersectsObject(M))){let me=we.update(M),Me=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ue.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ue.copy(me.boundingSphere.center)),Ue.applyMatrix4(M.matrixWorld).applyMatrix4(ue)),Array.isArray(Me)){let Ce=me.groups;for(let Oe=0,Pe=Ce.length;Oe<Pe;Oe++){let Le=Ce[Oe],bt=Me[Le.materialIndex];bt&&bt.visible&&_.push(M,me,bt,U,Ue.z,Le)}}else Me.visible&&_.push(M,me,Me,U,Ue.z,null)}}let oe=M.children;for(let me=0,Me=oe.length;me<Me;me++)mp(oe[me],I,U,k)}function gp(M,I,U,k){let F=M.opaque,oe=M.transmissive,me=M.transparent;p.setupLightsView(U),z===!0&&le.setGlobalState(x.clippingPlanes,U),oe.length>0&&Sx(F,oe,I,U),k&&Ae.viewport(y.copy(k)),F.length>0&&oa(F,I,U),oe.length>0&&oa(oe,I,U),me.length>0&&oa(me,I,U),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Sx(M,I,U,k){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new wi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?yl:qi,minFilter:Nr,samples:4,stencilBuffer:s});let Oe=S.get(p.state.transmissionRenderTarget);Oe.__isTransmissionRenderTarget=!0}let oe=p.state.transmissionRenderTarget;x.getDrawingBufferSize(ae),oe.setSize(ae.x,ae.y);let me=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(D),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear();let Me=x.toneMapping;x.toneMapping=$i,oa(M,U,k),v.updateMultisampleRenderTarget(oe),v.updateRenderTargetMipmap(oe);let Ce=!1;for(let Oe=0,Pe=I.length;Oe<Pe;Oe++){let Le=I[Oe],bt=Le.object,rn=Le.geometry,kt=Le.material,ci=Le.group;if(kt.side===Gn&&bt.layers.test(k.layers)){let Mt=kt.side;kt.side=nn,kt.needsUpdate=!0,vp(bt,U,k,rn,kt,ci),kt.side=Mt,kt.needsUpdate=!0,Ce=!0}}Ce===!0&&(v.updateMultisampleRenderTarget(oe),v.updateRenderTargetMipmap(oe)),x.setRenderTarget(me),x.setClearColor(D,W),x.toneMapping=Me}function oa(M,I,U){let k=I.isScene===!0?I.overrideMaterial:null;for(let F=0,oe=M.length;F<oe;F++){let me=M[F],Me=me.object,Ce=me.geometry,Oe=k===null?me.material:k,Pe=me.group;Me.layers.test(U.layers)&&vp(Me,I,U,Ce,Oe,Pe)}}function vp(M,I,U,k,F,oe){M.onBeforeRender(x,I,U,k,F,oe),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,I,U,k,M,oe),F.transparent===!0&&F.side===Gn&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,x.renderBufferDirect(U,I,k,F,M,oe),F.side=Xi,F.needsUpdate=!0,x.renderBufferDirect(U,I,k,F,M,oe),F.side=Gn):x.renderBufferDirect(U,I,k,F,M,oe),M.onAfterRender(x,I,U,k,F,oe)}function aa(M,I,U){I.isScene!==!0&&(I=He);let k=S.get(M),F=p.state.lights,oe=p.state.shadowsArray,me=F.state.version,Me=X.getParameters(M,F.state,oe,I,U),Ce=X.getProgramCacheKey(Me),Oe=k.programs;k.environment=M.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(M.isMeshStandardMaterial?j:B).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Oe===void 0&&(M.addEventListener("dispose",xe),Oe=new Map,k.programs=Oe);let Pe=Oe.get(Ce);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===me)return _p(M,Me),Pe}else Me.uniforms=X.getUniforms(M),M.onBuild(U,Me,x),M.onBeforeCompile(Me,x),Pe=X.acquireProgram(Me,Ce),Oe.set(Ce,Pe),k.uniforms=Me.uniforms;let Le=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=le.uniform),_p(M,Me),k.needsLights=Tx(M),k.lightsStateVersion=me,k.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Pe,k.uniformsList=null,Pe}function yp(M){if(M.uniformsList===null){let I=M.currentProgram.getUniforms();M.uniformsList=Vs.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function _p(M,I){let U=S.get(M);U.outputColorSpace=I.outputColorSpace,U.batching=I.batching,U.instancing=I.instancing,U.instancingColor=I.instancingColor,U.instancingMorph=I.instancingMorph,U.skinning=I.skinning,U.morphTargets=I.morphTargets,U.morphNormals=I.morphNormals,U.morphColors=I.morphColors,U.morphTargetsCount=I.morphTargetsCount,U.numClippingPlanes=I.numClippingPlanes,U.numIntersection=I.numClipIntersection,U.vertexAlphas=I.vertexAlphas,U.vertexTangents=I.vertexTangents,U.toneMapping=I.toneMapping}function Ex(M,I,U,k,F){I.isScene!==!0&&(I=He),v.resetTextureUnits();let oe=I.fog,me=k.isMeshStandardMaterial?I.environment:null,Me=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ki,Ce=(k.isMeshStandardMaterial?j:B).get(k.envMap||me),Oe=k.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Pe=!!U.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Le=!!U.morphAttributes.position,bt=!!U.morphAttributes.normal,rn=!!U.morphAttributes.color,kt=$i;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(kt=x.toneMapping);let ci=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Mt=ci!==void 0?ci.length:0,ke=S.get(k),ql=p.state.lights;if(z===!0&&(Q===!0||M!==w)){let vn=M===w&&k.id===N;le.setState(k,M,vn)}let yt=!1;k.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ql.state.version||ke.outputColorSpace!==Me||F.isBatchedMesh&&ke.batching===!1||!F.isBatchedMesh&&ke.batching===!0||F.isInstancedMesh&&ke.instancing===!1||!F.isInstancedMesh&&ke.instancing===!0||F.isSkinnedMesh&&ke.skinning===!1||!F.isSkinnedMesh&&ke.skinning===!0||F.isInstancedMesh&&ke.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ke.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ke.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ke.instancingMorph===!1&&F.morphTexture!==null||ke.envMap!==Ce||k.fog===!0&&ke.fog!==oe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==Oe||ke.vertexTangents!==Pe||ke.morphTargets!==Le||ke.morphNormals!==bt||ke.morphColors!==rn||ke.toneMapping!==kt||ke.morphTargetsCount!==Mt)&&(yt=!0):(yt=!0,ke.__version=k.version);let er=ke.currentProgram;yt===!0&&(er=aa(k,I,F));let xp=!1,Xs=!1,Xl=!1,Wt=er.getUniforms(),bi=ke.uniforms;if(Ae.useProgram(er.program)&&(xp=!0,Xs=!0,Xl=!0),k.id!==N&&(N=k.id,Xs=!0),xp||w!==M){Wt.setValue(L,"projectionMatrix",M.projectionMatrix),Wt.setValue(L,"viewMatrix",M.matrixWorldInverse);let vn=Wt.map.cameraPosition;vn!==void 0&&vn.setValue(L,Ue.setFromMatrixPosition(M.matrixWorld)),Pt.logarithmicDepthBuffer&&Wt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Wt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),w!==M&&(w=M,Xs=!0,Xl=!0)}if(F.isSkinnedMesh){Wt.setOptional(L,F,"bindMatrix"),Wt.setOptional(L,F,"bindMatrixInverse");let vn=F.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Wt.setValue(L,"boneTexture",vn.boneTexture,v))}F.isBatchedMesh&&(Wt.setOptional(L,F,"batchingTexture"),Wt.setValue(L,"batchingTexture",F._matricesTexture,v));let Yl=U.morphAttributes;if((Yl.position!==void 0||Yl.normal!==void 0||Yl.color!==void 0)&&fe.update(F,U,er),(Xs||ke.receiveShadow!==F.receiveShadow)&&(ke.receiveShadow=F.receiveShadow,Wt.setValue(L,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(bi.envMap.value=Ce,bi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(bi.envMapIntensity.value=I.environmentIntensity),Xs&&(Wt.setValue(L,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&Cx(bi,Xl),oe&&k.fog===!0&&_e.refreshFogUniforms(bi,oe),_e.refreshMaterialUniforms(bi,k,Y,J,p.state.transmissionRenderTarget),Vs.upload(L,yp(ke),bi,v)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Vs.upload(L,yp(ke),bi,v),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Wt.setValue(L,"center",F.center),Wt.setValue(L,"modelViewMatrix",F.modelViewMatrix),Wt.setValue(L,"normalMatrix",F.normalMatrix),Wt.setValue(L,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let vn=k.uniformsGroups;for(let Zl=0,Ax=vn.length;Zl<Ax;Zl++){let Mp=vn[Zl];gt.update(Mp,er),gt.bind(Mp,er)}}return er}function Cx(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Tx(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,I,U){S.get(M.texture).__webglTexture=I,S.get(M.depthTexture).__webglTexture=U;let k=S.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=U===void 0,k.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){let U=S.get(M);U.__webglFramebuffer=I,U.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,U=0){T=M,P=I,A=U;let k=!0,F=null,oe=!1,me=!1;if(M){let Ce=S.get(M);Ce.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(L.FRAMEBUFFER,null),k=!1):Ce.__webglFramebuffer===void 0?v.setupRenderTarget(M):Ce.__hasExternalTextures&&v.rebindTextures(M,S.get(M.texture).__webglTexture,S.get(M.depthTexture).__webglTexture);let Oe=M.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(me=!0);let Pe=S.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?F=Pe[I][U]:F=Pe[I],oe=!0):M.samples>0&&v.useMultisampledRTT(M)===!1?F=S.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[U]:F=Pe,y.copy(M.viewport),O.copy(M.scissor),H=M.scissorTest}else y.copy(Z).multiplyScalar(Y).floor(),O.copy(ge).multiplyScalar(Y).floor(),H=qe;if(Ae.bindFramebuffer(L.FRAMEBUFFER,F)&&k&&Ae.drawBuffers(M,F),Ae.viewport(y),Ae.scissor(O),Ae.setScissorTest(H),oe){let Ce=S.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ce.__webglTexture,U)}else if(me){let Ce=S.get(M.texture),Oe=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.__webglTexture,U||0,Oe)}N=-1},this.readRenderTargetPixels=function(M,I,U,k,F,oe,me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=S.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Ae.bindFramebuffer(L.FRAMEBUFFER,Me);try{let Ce=M.texture,Oe=Ce.format,Pe=Ce.type;if(Oe!==oi&&st.convert(Oe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Le=Pe===yl&&(Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float"));if(Pe!==qi&&st.convert(Pe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&Pe!==ji&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&U>=0&&U<=M.height-F&&L.readPixels(I,U,k,F,st.convert(Oe),st.convert(Pe),oe)}finally{let Ce=T!==null?S.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(M,I,U=0){let k=Math.pow(2,-U),F=Math.floor(I.image.width*k),oe=Math.floor(I.image.height*k);v.setTexture2D(I,0),L.copyTexSubImage2D(L.TEXTURE_2D,U,0,0,M.x,M.y,F,oe),Ae.unbindTexture()},this.copyTextureToTexture=function(M,I,U,k=0){let F=I.image.width,oe=I.image.height,me=st.convert(U.format),Me=st.convert(U.type);v.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment),I.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,k,M.x,M.y,F,oe,me,Me,I.image.data):I.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,k,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,me,I.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,k,M.x,M.y,me,Me,I.image),k===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(M,I,U,k,F=0){let oe=Math.round(M.max.x-M.min.x),me=Math.round(M.max.y-M.min.y),Me=M.max.z-M.min.z+1,Ce=st.convert(k.format),Oe=st.convert(k.type),Pe;if(k.isData3DTexture)v.setTexture3D(k,0),Pe=L.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)v.setTexture2DArray(k,0),Pe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);let Le=L.getParameter(L.UNPACK_ROW_LENGTH),bt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=L.getParameter(L.UNPACK_SKIP_PIXELS),kt=L.getParameter(L.UNPACK_SKIP_ROWS),ci=L.getParameter(L.UNPACK_SKIP_IMAGES),Mt=U.isCompressedTexture?U.mipmaps[F]:U.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,M.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,M.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,M.min.z),U.isDataTexture||U.isData3DTexture?L.texSubImage3D(Pe,F,I.x,I.y,I.z,oe,me,Me,Ce,Oe,Mt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Pe,F,I.x,I.y,I.z,oe,me,Me,Ce,Mt.data):L.texSubImage3D(Pe,F,I.x,I.y,I.z,oe,me,Me,Ce,Oe,Mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Le),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ci),F===0&&k.generateMipmaps&&L.generateMipmap(Pe),Ae.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?v.setTextureCube(M,0):M.isData3DTexture?v.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?v.setTexture2DArray(M,0):v.setTexture2D(M,0),Ae.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,Ae.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===dp?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Wl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};var kl=class extends Br{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new js,this.environmentIntensity=1,this.environmentRotation=new js,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Qf=class n extends Ji{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new An(s,3)),this.setAttribute("normal",new An(s.slice(),3)),this.setAttribute("uv",new An(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let x=new R,C=new R,P=new R;for(let A=0;A<t.length;A+=3)m(t[A+0],x),m(t[A+1],C),m(t[A+2],P),c(x,C,P,b)}function c(b,x,C,P){let A=P+1,T=[];for(let N=0;N<=A;N++){T[N]=[];let w=b.clone().lerp(C,N/A),y=x.clone().lerp(C,N/A),O=A-N;for(let H=0;H<=O;H++)H===0&&N===A?T[N][H]=w:T[N][H]=w.clone().lerp(y,H/O)}for(let N=0;N<A;N++)for(let w=0;w<2*(A-N)-1;w++){let y=Math.floor(w/2);w%2===0?(h(T[N][y+1]),h(T[N+1][y]),h(T[N][y])):(h(T[N][y+1]),h(T[N+1][y+1]),h(T[N+1][y]))}}function l(b){let x=new R;for(let C=0;C<s.length;C+=3)x.x=s[C+0],x.y=s[C+1],x.z=s[C+2],x.normalize().multiplyScalar(b),s[C+0]=x.x,s[C+1]=x.y,s[C+2]=x.z}function u(){let b=new R;for(let x=0;x<s.length;x+=3){b.x=s[x+0],b.y=s[x+1],b.z=s[x+2];let C=p(b)/2/Math.PI+.5,P=f(b)/Math.PI+.5;o.push(C,1-P)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){let x=o[b+0],C=o[b+2],P=o[b+4],A=Math.max(x,C,P),T=Math.min(x,C,P);A>.9&&T<.1&&(x<.2&&(o[b+0]+=1),C<.2&&(o[b+2]+=1),P<.2&&(o[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function m(b,x){let C=b*3;x.x=e[C+0],x.y=e[C+1],x.z=e[C+2]}function g(){let b=new R,x=new R,C=new R,P=new R,A=new je,T=new je,N=new je;for(let w=0,y=0;w<s.length;w+=9,y+=6){b.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),C.set(s[w+6],s[w+7],s[w+8]),A.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),N.set(o[y+4],o[y+5]),P.copy(b).add(x).add(C).divideScalar(3);let O=p(P);_(A,y+0,b,O),_(T,y+2,x,O),_(N,y+4,C,O)}}function _(b,x,C,P){P<0&&b.x===1&&(o[x]=b.x-1),C.x===0&&C.z===0&&(o[x]=P/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Bl=class n extends Qf{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Vl=class extends Lr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tx,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function gl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function bN(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var $s=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ep=class extends $s{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Z0,endingEnd:Z0}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case J0:s=e,a=2*t-i;break;case K0:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case J0:o=e,c=2*i-t;break;case K0:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),_=g*g,p=_*g,f=-h*p+2*h*_-h*g,b=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,x=(-1-m)*p+(1.5+m)*_+.5*g,C=m*p-m*_;for(let P=0;P!==a;++P)s[P]=f*o[u+P]+b*o[l+P]+x*o[c+P]+C*o[d+P];return s}},tp=class extends $s{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},np=class extends $s{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gl(t,this.TimeBufferType),this.values=gl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:gl(e.times,Array),values:gl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new np(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ep(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _l:t=this.InterpolantFactoryMethodDiscrete;break;case xl:t=this.InterpolantFactoryMethodLinear;break;case Kh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _l;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return Kh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&bN(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Kh,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,m=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[h+g]||_!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let m=0;m!==i;++m)t[h+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=xl;var Fr=class extends Wn{};Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=_l;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var ip=class extends Wn{};ip.prototype.ValueTypeName="color";var rp=class extends Wn{};rp.prototype.ValueTypeName="number";var sp=class extends $s{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Zi.slerpFlat(s,0,o,l-a,o,l,c);return s}},ia=class extends Wn{InterpolantFactoryMethodLinear(e){return new sp(this.times,this.values,this.getValueSize(),e)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.DefaultInterpolation=xl;ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends Wn{};Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=_l;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var op=class extends Wn{};op.prototype.ValueTypeName="vector";var zl=class extends Br{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Cf=new Ct,H_=new R,G_=new R,ap=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;H_.setFromMatrixPosition(e.matrixWorld),t.position.copy(H_),G_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(G_),t.updateMatrixWorld(),Cf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var j_=new Ct,Zo=new R,Tf=new R,cp=class extends ap{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Zo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zo),Tf.copy(i.position),Tf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Tf),i.updateMatrixWorld(),r.makeTranslation(-Zo.x,-Zo.y,-Zo.z),j_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(j_)}},Hl=class extends zl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};var Gl=class extends zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var fp="\\[\\]\\.:\\/",SN=new RegExp("["+fp+"]","g"),pp="[^"+fp+"]",EN="[^"+fp.replace("\\.","")+"]",CN=/((?:WC+[\/:])*)/.source.replace("WC",pp),TN=/(WCOD+)?/.source.replace("WCOD",EN),AN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pp),DN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pp),IN=new RegExp("^"+CN+TN+AN+DN+"$"),RN=["material","materials","bones","map"],lp=class{constructor(e,t,i){let r=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(SN,"")}static parseTrackName(t){let i=IN.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);RN.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=lp,n})();Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oB=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);var hx=(()=>{let e=class e{constructor(i,r,s,o){this.el=i,this.renderer2=r,this.document=s,this.platformId=o,this.mouse={x:0,y:0},this.speed=.17}ngAfterViewInit(){yy(this.platformId)&&this.document&&(this.initScene(),this.animate(),this.renderer2.listen("window","mousemove",i=>{this.mouse.x=i.clientX/this.document.defaultView.innerWidth*2-1,this.mouse.y=-(i.clientY/this.document.defaultView.innerHeight)*2+1}),this.scene&&this.pointLight&&(this.scene.add(this.pointLight),this.scene.add(this.lightHelper)))}initScene(){this.scene=new kl,this.camera=new Yt(75,this.document.defaultView.innerWidth/this.document.defaultView.innerHeight,.1,1e3),this.renderer=new Ul,this.renderer.setSize(window.innerWidth,window.innerHeight),this.el.nativeElement.appendChild(this.renderer.domElement);let i=new Bl(1,0),r=new Vl({opacity:.5,transparent:!0,side:Gn});this.cube=new gn(i,r),this.scene.add(this.cube),this.camera.position.z=5;let s=new Gl(16777215,1);this.pointLight=new Hl(16777215,10,100,0),this.scene.add(s)}animate(){requestAnimationFrame(()=>this.animate()),this.cube&&(this.cube.rotation.x-=.01,this.cube.rotation.y+=.01),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera),this.document&&this.pointLight&&this.lightHelper&&(this.pointLight.position.set(this.mouse.x*20,this.mouse.y*20,20),this.lightHelper.position.copy(this.pointLight.position))}};e.\u0275fac=function(r){return new(r||e)(Bn(Pi),Bn(gr),Bn(Qt),Bn(kn))},e.\u0275cmp=Dt({type:e,selectors:[["app-canvas"]],standalone:!0,features:[It],decls:0,vars:0,template:function(r,s){}});let n=e;return n})();var fx=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Dt({type:e,selectors:[["app-blob"]],standalone:!0,features:[It],decls:4,vars:0,consts:[[1,"blob-cont"],[1,"yellow","blob"],[1,"blue","blob"],[1,"green","blob"]],template:function(r,s){r&1&&(ce(0,"div",0),ct(1,"div",1)(2,"div",2)(3,"div",3),se())},styles:[".blob-cont[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:-2;height:100%;width:100%;overflow-x:visible}.blob-cont[_ngcontent-%COMP%]   .blob[_ngcontent-%COMP%]{border-radius:100px;filter:blur(100px) grayscale(50%)}.blob-cont[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%]{background-color:var(--yellow);position:absolute;top:200px;left:100px;height:40%;width:40%;animation:_ngcontent-%COMP%_yellow 8s infinite ease}.blob-cont[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{background-color:var(--green);position:absolute;top:80px;right:-20px;height:40%;width:50%;animation:_ngcontent-%COMP%_green 8s infinite ease}.blob-cont[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]{background-color:var(--blue);position:absolute;right:0;top:300px;height:50%;width:40%;animation:_ngcontent-%COMP%_blue 8s infinite linear}@keyframes _ngcontent-%COMP%_yellow{0%{top:200px;left:100px;transform:scale(1)}30%{top:300px;left:150px;transform:scale(1.2)}60%{top:100px;left:200px;transform:scale(1.3)}to{top:200px;left:100px;transform:scale(1)}}@keyframes _ngcontent-%COMP%_green{0%{top:80px;right:-20px;transform:scale(1.2)}30%{top:300px;right:-20px;transform:scale(1)}60%{top:200px;right:100px;transform:scale(1)}to{top:80px;right:-20px;transform:scale(1.2)}}@keyframes _ngcontent-%COMP%_blue{0%{top:250px;right:0;transform:scale(1)}30%{top:150px;right:150px;transform:scale(1.4)}60%{top:250px;right:100px;transform:scale(1)}to{top:250px;right:0;transform:scale(1)}}"]});let n=e;return n})();var px=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Dt({type:e,selectors:[["app-navbar"]],standalone:!0,features:[It],decls:5,vars:0,consts:[[1,"navbar","navbar-expand-sm"],[1,"left"]],template:function(r,s){r&1&&(ce(0,"nav",0)(1,"div",1)(2,"h1")(3,"i"),de(4,"Justin Bottinga"),se()()()())},styles:["nav[_ngcontent-%COMP%]{display:flex;position:relative;min-height:4rem;padding:.5rem;margin:0}nav[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{padding-left:.5rem}nav[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.75rem;margin:0}nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#0000;border:none}nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--text);font-size:2rem;transition:.5s ease}nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0000}nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:var(--secondairy);transition:.5s ease}@media screen and (max-width: 576px){nav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{position:absolute;right:0;display:flex;flex-direction:column}}nav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{position:absolute;right:0;display:flex;flex-direction:row}nav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0rem 1rem;list-style-type:none;align-self:center}"]});let n=e;return n})();var mx=(()=>{let e=class e{constructor(){this.getDate=new Date().getFullYear()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Dt({type:e,selectors:[["app-footer"]],standalone:!0,features:[It],decls:9,vars:0,consts:[[1,"footer"],[1,"name"],[1,"socials"],["href","https://github.com/JustinBottinga","target","_blank"],[1,"bi","bi-github"],["href","https://www.linkedin.com/in/justin-bottinga-a6588421b/","target","_blank"],[1,"bi","bi-linkedin"]],template:function(r,s){r&1&&(ce(0,"div",0)(1,"div",1)(2,"i"),de(3,"Justin Bottinga"),se()(),ce(4,"div",2)(5,"a",3),ct(6,"i",4),se(),ce(7,"a",5),ct(8,"i",6),se()()())},styles:["[_nghost-%COMP%]{display:flex;justify-content:center;bottom:0;width:100vw;background:var(--background-glass);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}.footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1rem;width:70vw}.footer[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]{width:fit-content}.footer[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.1rem;margin:.3rem}.footer[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--accent)}"]});let n=e;return n})();var gx=(()=>{let e=class e{constructor(){this.today=new Date,this.specificDate=new Date("2024-06-27"),this.passed=!1,this.today>this.specificDate&&(this.passed=!0)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Dt({type:e,selectors:[["app-cv"]],standalone:!0,features:[It],decls:48,vars:1,consts:[[1,"row"],[1,"head"],[1,""],[1,"header"],["href","../../../../assets/CV-JustinBottinga-2024.pdf","download","CV.pdf"],[1,"col-12","col-md-6"],[1,"card","line"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(r,s){r&1&&(ce(0,"div",0)(1,"div",1)(2,"h3",2),de(3,"Curriculum vitae"),se(),ce(4,"div",3)(5,"a",4),de(6,"Download CV"),se()()(),ce(7,"div",5)(8,"div",6)(9,"div",7)(10,"h3",8),de(11,"Work Experience"),se(),ce(12,"p",9)(13,"span"),de(14,"Service Employee, Movie Unlimited, Almelo"),se(),de(15," October 2019 \u2014 October 2020 "),se(),ce(16,"p",9)(17,"span"),de(18," Warehouse Employee, Obimex B.V., Almelo"),se(),de(19," July 2021 \u2014 February 2023 "),se(),ce(20,"p",9)(21,"span"),de(22," Service Employee, Movie Unlimited, Almelo"),se(),de(23," March 2023 \u2014 February 2024 "),se(),ce(24,"p",9)(25,"span"),de(26," Intern Software Developer, Moovd B.V., Nijverdal"),se(),de(27),se()()()(),ce(28,"div",5)(29,"div",6)(30,"div",7)(31,"h3",8),de(32,"Education"),se(),ce(33,"p",9)(34,"span"),de(35,"HAVO (Senior General Secondary Education), Oud Erasmus, Almelo"),se(),de(36," August 2016 \u2014 July 2017 "),se(),ce(37,"p",9)(38,"span"),de(39,"MAVO / VMBO-TL (Lower General Secondary Education), Nieuw Erasmus, Almelo"),se(),de(40," August 2017 \u2014 June 2021 "),ce(41,"i")(42,"b"),de(43,"Degree obtained."),se()()(),ce(44,"p",9)(45,"span"),de(46,"Software Developer, Academic level 4, ROC van Twente, Hengelo"),se(),de(47," August 2021 \u2014 Present "),se()()()()()),r&2&&(yc(27),Mo(" March 2024 \u2014 ",s.passed?"June 2024":"Present"," "))},styles:[".row[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.row[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;padding-bottom:2rem}.row[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border:2px solid var(--primary);color:var(--primary);padding:.5rem;border-radius:.3rem}.row[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:var(--faded)}"]});let n=e;return n})();var vx=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Dt({type:e,selectors:[["app-about"]],standalone:!0,features:[It],decls:49,vars:0,consts:[[1,"container"],[1,"row","grid-container"],[1,"col","skills"],[1,"row","justify-content-center","align-items-center","g-2"],[1,"col-12"],[1,"progress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",2,"width","80%"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",2,"width","70%"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",2,"width","60%"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",2,"width","40%"]],template:function(r,s){r&1&&(ce(0,"div",0),ct(1,"app-cv"),ce(2,"h3"),de(3,"Skills"),se(),ce(4,"div",1)(5,"div",2)(6,"div",3)(7,"div",4)(8,"span"),de(9,"Javascript (ES6+)"),se(),ce(10,"div",5),ct(11,"div",6),se()(),ce(12,"div",4)(13,"span"),de(14,"Typescript"),se(),ce(15,"div",5),ct(16,"div",7),se()(),ce(17,"div",4)(18,"span"),de(19,"ANGULAR (16+)"),se(),ce(20,"div",5),ct(21,"div",8),se()(),ce(22,"div",4)(23,"span"),de(24,"PHP"),se(),ce(25,"div",5),ct(26,"div",7),se()(),ce(27,"div",4)(28,"span"),de(29,"C#"),se(),ce(30,"div",5),ct(31,"div",8),se()(),ce(32,"div",4)(33,"span"),de(34,"Wordpress"),se(),ce(35,"div",5),ct(36,"div",9),se()()()(),ce(37,"div",2)(38,"ul")(39,"li"),de(40,"Flexible"),se(),ce(41,"li"),de(42,"Independent"),se(),ce(43,"li"),de(44,"Solution-oriented"),se(),ce(45,"li"),de(46,"Effective Communicator"),se(),ce(47,"li"),de(48,"Determined"),se()()()()())},dependencies:[gx],styles:[".container[_ngcontent-%COMP%]{min-height:40vh}.container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));gap:1.5rem 1.5rem}.container[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]{margin:0rem}.container[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;margin:auto;align-self:center;padding:0;height:100%}.container[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;font-size:1.5rem}"]});let n=e;return n})();var yx=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Dt({type:e,selectors:[["app-projects"]],standalone:!0,features:[It],decls:50,vars:0,consts:[[1,"container"],[1,""],["id","projects-grid"],[1,"card"],[1,"card-body"],[1,"header"],[1,"card-title"],["id","project-link","href","https://apps.apple.com/nl/app/wemind-balance/id6443795997","target","_blank"],[1,"bi","bi-box-arrow-up-right"],[1,"card-text"],["href","https://moovd.nl/en"],["id","project-link","href","https://we-mind.app/auth/actor?lang=us","target","_blank"],["id","project-link","href","https://www.minecraft.net/en-us/marketplace/pdp?id=2c654b66-b09f-45f4-a431-34bf91c27b59","title","view on marketplace","target","_blank"],["href","https://www.linkedin.com/company/webaze-network/about/","alt","Link to webaze linkedin","title","See client","target","_blank"],["id","project-link","href","mailto:info@webaze.nl","title","Reference to webaze","target","_blank"]],template:function(r,s){r&1&&(ce(0,"div",0)(1,"h3",1),de(2,"Projects"),se(),ce(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"h3",6),de(8,"WeMind Balance"),se(),ce(9,"a",7),ct(10,"i",8),se()(),ce(11,"p",9),de(12," Contributed to "),ce(13,"a",10),de(14,"Moovd's"),se(),de(15," WeMind Balance App during internship "),se(),ce(16,"p")(17,"small"),de(18,"Angular 17"),se()()()(),ce(19,"div",3)(20,"div",4)(21,"div",5)(22,"h3",6),de(23,"WeMind EMDR"),se(),ce(24,"a",11),ct(25,"i",8),se()(),ce(26,"p",9),de(27," Contributed to "),ce(28,"a",10),de(29,"Moovd's"),se(),de(30," WeMind EMDR Web-App during internship "),se(),ce(31,"p")(32,"small"),de(33,"Angular 17"),se()()()(),ce(34,"div",3)(35,"div",4)(36,"div",5)(37,"h3",6),de(38,"Ultimate Security Craft"),se(),ce(39,"a",12),ct(40,"i",8),se()(),ce(41,"p",9),de(42," Contributed to official Minecraft Marketplace project for "),ce(43,"a",13),de(44," Webaze Network "),se()(),ce(45,"p")(46,"small"),de(47,"Javascript / Typescript"),se()(),ce(48,"a",14),de(49," Reference"),se()()()()())},styles:[".container[_ngcontent-%COMP%]{margin-top:2rem;min-height:40vh}.container[_ngcontent-%COMP%]   #projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));gap:.5rem 1.5rem}.container[_ngcontent-%COMP%]   #projects-grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{color:var(--text);margin-bottom:2rem;background:linear-gradient(135deg,#29292966,#1d1d1d80);box-shadow:rgba(var(--yellow),.017) 0 -12px 12px inset,rgba(var(--blue),.015) 0 -36px 30px inset,rgba(var(--green),.01) 0 -79px 40px inset}.container[_ngcontent-%COMP%]   #projects-grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--accent);text-decoration:underline}.container[_ngcontent-%COMP%]   #projects-grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{margin-bottom:1rem}.container[_ngcontent-%COMP%]   #projects-grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0rem;position:relative;bottom:0}.container[_ngcontent-%COMP%]   #projects-grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--text);filter:opacity(.8)}.container[_ngcontent-%COMP%]   #projects-grid[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.container[_ngcontent-%COMP%]   #projects-grid[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:var(--background-glass);padding:.3rem;border-radius:100%;aspect-ratio:1;height:3rem;text-align:center;line-height:2;margin-top:-.5rem;margin-right:-.5rem}.container[_ngcontent-%COMP%]   #projects-grid[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:var(--faded)}.container[_ngcontent-%COMP%]   #projects-grid[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.25rem}"]});let n=e;return n})();var _x=(()=>{let e=class e{constructor(i,r){this.elementRef=i,this.renderer=r}onWindowScroll(){let i=window.innerWidth,r=window.innerHeight,o=window.scrollY/r*100,a=this.elementRef.nativeElement,l=100-a.offsetWidth/i*100,u=Math.max(0,Math.min(12+o/4,l-12));this.renderer.setStyle(a,"right",`${u}%`)}};e.\u0275fac=function(r){return new(r||e)(Bn(Pi),Bn(gr))},e.\u0275dir=fo({type:e,selectors:[["","appScroll",""]],hostBindings:function(r,s){r&1&&vr("scroll",function(){return s.onWindowScroll()},!1,uv)},standalone:!0});let n=e;return n})();var xx=(()=>{let e=class e{scrollTo(i){i.scrollIntoView({behavior:"smooth"})}calculateYearsPassed(){let i=new Date("2004-04-24"),r=new Date,s=r.getFullYear()-i.getFullYear();return r.getMonth()<i.getMonth()||r.getMonth()===i.getMonth()&&r.getDate()<i.getDate()?s-1:s}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Dt({type:e,selectors:[["app-home"]],standalone:!0,features:[It],decls:21,vars:1,consts:[["about",""],["projects",""],["appScroll",""],[1,"header"],[1,"links","row"],[3,"click"],[1,"image-container"]],template:function(r,s){if(r&1){let o=Jv();ct(0,"app-navbar")(1,"app-blob",2),ce(2,"main")(3,"div",3)(4,"h2"),de(5,"Software developer"),se(),ce(6,"p"),de(7),se(),ce(8,"div",4)(9,"a",5),vr("click",function(){_d(o);let c=jd(15);return xd(s.scrollTo(c))}),de(10,"More about me"),se(),ce(11,"a",5),vr("click",function(){_d(o);let c=jd(18);return xd(s.scrollTo(c))}),de(12," My recent projects "),se()()(),ct(13,"div",6),se(),ce(14,"div",null,0),ct(16,"app-about"),se(),ce(17,"div",null,1),ct(19,"app-projects"),se(),ct(20,"app-footer")}r&2&&(yc(7),Mo(" ",s.calculateYearsPassed(),"-year-old student from the Netherlands, passionate about modern technologies and eager to acquire new skills "))},dependencies:[fx,px,mx,vx,yx,_x],styles:['app-blob[_ngcontent-%COMP%]{position:fixed;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:-2;height:500px;width:500px;right:12%;top:calc(50% - 250px)}@media screen and (max-width: 700px){app-blob[_ngcontent-%COMP%]{position:fixed;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:-2;max-width:300px;left:1.5rem;top:calc(50% - 250px)}}main[_ngcontent-%COMP%]{height:100vh;display:flex;align-items:center;margin-left:10vw}main[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{background-image:url("./media/IMG_0864-G2SRR2B3.jpg");background-size:cover;background-position:center;height:20rem;width:20rem;border:3px solid var(--background);border-radius:100%;margin:2rem}main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{max-width:25rem;padding:2rem;margin-right:3rem;background:linear-gradient(135deg,#29292966,#1d1d1d80);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:.5rem}main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{display:flex;justify-content:space-between}main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;margin:.25rem 0rem;color:var(--primary);border:2px solid var(--primary);padding:.5rem;border-radius:.3rem;width:fit-content;align-self:start}main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:var(--faded);transition:.5s ease;cursor:pointer}@media screen and (max-width: 940px){main[_ngcontent-%COMP%]{flex-direction:column-reverse;justify-content:start;align-items:start}main[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{margin:0rem 0rem 2rem}}']});let n=e;return n})();var Mx=[{path:"",component:xx},{path:"canvas",component:hx},{path:"**",redirectTo:""}];var wx={providers:[_0(Mx),ky()]};var bx=(()=>{let e=class e{constructor(){this.title="portfolio"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Dt({type:e,selectors:[["app-root"]],standalone:!0,features:[It],decls:1,vars:0,template:function(r,s){r&1&&ct(0,"router-outlet")},dependencies:[Bh],styles:["app-canvas[_ngcontent-%COMP%]{position:fixed;top:0;left:0}"]});let n=e;return n})();Fy(bx,wx).catch(n=>console.error(n));
