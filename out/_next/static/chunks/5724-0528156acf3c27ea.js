(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5724],{6760:function(){},7611:function(t,e,o){"use strict";var n=o(6054);function i(){}function r(){}r.resetWarningCache=i,t.exports=function(){function t(t,e,o,i,r,a){if(a!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:i};return o.PropTypes=o,o}},9497:function(t,e,o){t.exports=o(7611)()},6054:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3371:function(t,e,o){var n,i,r,a;t.exports=(n=o(9497),i=o(6006),r=o(3489),a=o(9007),function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},a=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),s=n(o(1)),c=o(2),l=n(c),u=n(o(3)),d=n(o(4)),h=function(t){function e(){var t,o,n;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return o=n=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),n._sigPad=null,n._excludeOurProps=function(){var t=n.props;return t.canvasProps,t.clearOnResize,function(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}(t,["canvasProps","clearOnResize"])},n.getCanvas=function(){return n._canvas},n.getTrimmedCanvas=function(){var t=document.createElement("canvas");return t.width=n._canvas.width,t.height=n._canvas.height,t.getContext("2d").drawImage(n._canvas,0,0),(0,d.default)(t)},n.getSignaturePad=function(){return n._sigPad},n._checkClearOnResize=function(){n.props.clearOnResize&&n._resizeCanvas()},n._resizeCanvas=function(){var t=n.props.canvasProps||{},e=t.width,o=t.height;if(!e||!o){var i=n._canvas,r=Math.max(window.devicePixelRatio||1,1);e||(i.width=i.offsetWidth*r),o||(i.height=i.offsetHeight*r),i.getContext("2d").scale(r,r),n.clear()}},n.on=function(){return window.addEventListener("resize",n._checkClearOnResize),n._sigPad.on()},n.off=function(){return window.removeEventListener("resize",n._checkClearOnResize),n._sigPad.off()},n.clear=function(){return n._sigPad.clear()},n.isEmpty=function(){return n._sigPad.isEmpty()},n.fromDataURL=function(t,e){return n._sigPad.fromDataURL(t,e)},n.toDataURL=function(t,e){return n._sigPad.toDataURL(t,e)},n.fromData=function(t){return n._sigPad.fromData(t)},n.toData=function(){return n._sigPad.toData()},i(n,o)}return function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){this._sigPad=new u.default(this._canvas,this._excludeOurProps()),this._resizeCanvas(),this.on()}},{key:"componentWillUnmount",value:function(){this.off()}},{key:"componentDidUpdate",value:function(){Object.assign(this._sigPad,this._excludeOurProps())}},{key:"render",value:function(){var t=this,e=this.props.canvasProps;return l.default.createElement("canvas",r({ref:function(e){t._canvas=e}},e))}}]),e}(c.Component);h.propTypes={velocityFilterWeight:s.default.number,minWidth:s.default.number,maxWidth:s.default.number,minDistance:s.default.number,dotSize:s.default.oneOfType([s.default.number,s.default.func]),penColor:s.default.string,throttle:s.default.number,onEnd:s.default.func,onBegin:s.default.func,canvasProps:s.default.object,clearOnResize:s.default.bool},h.defaultProps={clearOnResize:!0},e.default=h},function(t,e){t.exports=n},function(t,e){t.exports=i},function(t,e){t.exports=r},function(t,e){t.exports=a}]))},9007:function(t){t.exports=function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e){"use strict";function o(t,e,o,n){return({red:n[4*(o*e+t)],green:n[4*(o*e+t)+1],blue:n[4*(o*e+t)+2],alpha:n[4*(o*e+t)+3]}).alpha}function n(t,e,n,i){for(var r=t?1:-1,a=t?0:n-1,s=a;t?s<n:s>-1;s+=r)for(var c=0;c<e;c++)if(o(c,s,e,i))return s;return null}function i(t,e,n,i){for(var r=t?1:-1,a=t?0:e-1,s=a;t?s<e:s>-1;s+=r)for(var c=0;c<n;c++)if(o(s,c,e,i))return s;return null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.getContext("2d"),o=t.width,r=t.height,a=e.getImageData(0,0,o,r).data,s=n(!0,o,r,a),c=n(!1,o,r,a),l=i(!0,o,r,a),u=i(!1,o,r,a)-l+1,d=c-s+1,h=e.getImageData(l,s,u,d);return t.width=u,t.height=d,e.clearRect(0,0,u,d),e.putImageData(h,0,0),t}}])},8919:function(t,e,o){"use strict";let n,i;o.r(e),o.d(e,{CheckmarkIcon:function(){return H},ErrorIcon:function(){return $},LoaderIcon:function(){return B},ToastBar:function(){return tt},ToastIcon:function(){return G},Toaster:function(){return ti},default:function(){return tr},resolveValue:function(){return E},toast:function(){return A},useToaster:function(){return F},useToasterStore:function(){return W}});var r,a=o(6006);let s={data:""},c=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||s,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,h=(t,e)=>{let o="",n="",i="";for(let r in t){let a=t[r];"@"==r[0]?"i"==r[1]?o=r+" "+a+";":n+="f"==r[1]?h(a,r):r+"{"+h(a,"k"==r[1]?"":e)+"}":"object"==typeof a?n+=h(a,e?e.replace(/([^,])+/g,t=>r.replace(/(^:.*)|([^,])+/g,e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)):r):null!=a&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=h.p?h.p(r,a):r+":"+a+";")}return o+(e&&i?e+"{"+i+"}":i)+n},p={},f=t=>{if("object"==typeof t){let e="";for(let o in t)e+=o+f(t[o]);return e}return t},m=(t,e,o,n,i)=>{var r;let a=f(t),s=p[a]||(p[a]=(t=>{let e=0,o=11;for(;e<t.length;)o=101*o+t.charCodeAt(e++)>>>0;return"go"+o})(a));if(!p[s]){let e=a!==t?t:(t=>{let e,o,n=[{}];for(;e=l.exec(t.replace(u,""));)e[4]?n.shift():e[3]?(o=e[3].replace(d," ").trim(),n.unshift(n[0][o]=n[0][o]||{})):n[0][e[1]]=e[2].replace(d," ").trim();return n[0]})(t);p[s]=h(i?{["@keyframes "+s]:e}:e,o?"":"."+s)}let c=o&&p.g?p.g:null;return o&&(p.g=p[s]),r=p[s],c?e.data=e.data.replace(c,r):-1===e.data.indexOf(r)&&(e.data=n?r+e.data:e.data+r),s},v=(t,e,o)=>t.reduce((t,n,i)=>{let r=e[i];if(r&&r.call){let t=r(o),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;r=e?"."+e:t&&"object"==typeof t?t.props?"":h(t,""):!1===t?"":t}return t+n+(null==r?"":r)},"");function y(t){let e=this||{},o=t.call?t(e.p):t;return m(o.unshift?o.raw?v(o,[].slice.call(arguments,1),e.p):o.reduce((t,o)=>Object.assign(t,o&&o.call?o(e.p):o),{}):o,c(e.target),e.g,e.o,e.k)}y.bind({g:1});let g,_,x,b=y.bind({k:1});function w(t,e){let o=this||{};return function(){let n=arguments;function i(r,a){let s=Object.assign({},r),c=s.className||i.className;o.p=Object.assign({theme:_&&_()},s),o.o=/ *go\d+/.test(c),s.className=y.apply(o,n)+(c?" "+c:""),e&&(s.ref=a);let l=t;return t[0]&&(l=s.as||t,delete s.as),x&&l[0]&&x(s),g(l,s)}return e?e(i):i}}var P=t=>"function"==typeof t,E=(t,e)=>P(t)?t(e):t,k=(n=0,()=>(++n).toString()),C=()=>{if(void 0===i&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");i=!t||t.matches}return i},D=new Map,T=t=>{if(D.has(t))return;let e=setTimeout(()=>{D.delete(t),S({type:4,toastId:t})},1e3);D.set(t,e)},O=t=>{let e=D.get(t);e&&clearTimeout(e)},M=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,20)};case 1:return e.toast.id&&O(e.toast.id),{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:o}=e;return t.toasts.find(t=>t.id===o.id)?M(t,{type:1,toast:o}):M(t,{type:0,toast:o});case 3:let{toastId:n}=e;return n?T(n):t.toasts.forEach(t=>{T(t.id)}),{...t,toasts:t.toasts.map(t=>t.id===n||void 0===n?{...t,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+i}))}}},z=[],L={toasts:[],pausedAt:void 0},S=t=>{L=M(L,t),z.forEach(t=>{t(L)})},R={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},W=(t={})=>{let[e,o]=(0,a.useState)(L);(0,a.useEffect)(()=>(z.push(o),()=>{let t=z.indexOf(o);t>-1&&z.splice(t,1)}),[e]);let n=e.toasts.map(e=>{var o,n;return{...t,...t[e.type],...e,duration:e.duration||(null==(o=t[e.type])?void 0:o.duration)||(null==t?void 0:t.duration)||R[e.type],style:{...t.style,...null==(n=t[e.type])?void 0:n.style,...e.style}}});return{...e,toasts:n}},j=(t,e="blank",o)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...o,id:(null==o?void 0:o.id)||k()}),N=t=>(e,o)=>{let n=j(e,t,o);return S({type:2,toast:n}),n.id},A=(t,e)=>N("blank")(t,e);A.error=N("error"),A.success=N("success"),A.loading=N("loading"),A.custom=N("custom"),A.dismiss=t=>{S({type:3,toastId:t})},A.remove=t=>S({type:4,toastId:t}),A.promise=(t,e,o)=>{let n=A.loading(e.loading,{...o,...null==o?void 0:o.loading});return t.then(t=>(A.success(E(e.success,t),{id:n,...o,...null==o?void 0:o.success}),t)).catch(t=>{A.error(E(e.error,t),{id:n,...o,...null==o?void 0:o.error})}),t};var U=(t,e)=>{S({type:1,toast:{id:t,height:e}})},I=()=>{S({type:5,time:Date.now()})},F=t=>{let{toasts:e,pausedAt:o}=W(t);(0,a.useEffect)(()=>{if(o)return;let t=Date.now(),n=e.map(e=>{if(e.duration===1/0)return;let o=(e.duration||0)+e.pauseDuration-(t-e.createdAt);if(o<0){e.visible&&A.dismiss(e.id);return}return setTimeout(()=>A.dismiss(e.id),o)});return()=>{n.forEach(t=>t&&clearTimeout(t))}},[e,o]);let n=(0,a.useCallback)(()=>{o&&S({type:6,time:Date.now()})},[o]),i=(0,a.useCallback)((t,o)=>{let{reverseOrder:n=!1,gutter:i=8,defaultPosition:r}=o||{},a=e.filter(e=>(e.position||r)===(t.position||r)&&e.height),s=a.findIndex(e=>e.id===t.id),c=a.filter((t,e)=>e<s&&t.visible).length;return a.filter(t=>t.visible).slice(...n?[c+1]:[0,c]).reduce((t,e)=>t+(e.height||0)+i,0)},[e]);return{toasts:e,handlers:{updateHeight:U,startPause:I,endPause:n,calculateOffset:i}}},$=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,H=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,q=w("div")`
  position: absolute;
`,V=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=({toast:t})=>{let{icon:e,type:o,iconTheme:n}=t;return void 0!==e?"string"==typeof e?a.createElement(Y,null,e):e:"blank"===o?null:a.createElement(V,null,a.createElement(B,{...n}),"loading"!==o&&a.createElement(q,null,"error"===o?a.createElement($,{...n}):a.createElement(H,{...n})))},X=t=>`
0% {transform: translate3d(0,${-200*t}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Z=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*t}%,-1px) scale(.6); opacity:0;}
`,J=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Q=(t,e)=>{let o=t.includes("top")?1:-1,[n,i]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[X(o),Z(o)];return{animation:e?`${b(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},tt=a.memo(({toast:t,position:e,style:o,children:n})=>{let i=t.height?Q(t.position||e||"top-center",t.visible):{opacity:0},r=a.createElement(G,{toast:t}),s=a.createElement(K,{...t.ariaProps},E(t.message,t));return a.createElement(J,{className:t.className,style:{...i,...o,...t.style}},"function"==typeof n?n({icon:r,message:s}):a.createElement(a.Fragment,null,r,s))});r=a.createElement,h.p=void 0,g=r,_=void 0,x=void 0;var te=({id:t,className:e,style:o,onHeightUpdate:n,children:i})=>{let r=a.useCallback(e=>{if(e){let o=()=>{n(t,e.getBoundingClientRect().height)};o(),new MutationObserver(o).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,n]);return a.createElement("div",{ref:r,className:e,style:o},i)},to=(t,e)=>{let o=t.includes("top"),n=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(o?1:-1)}px)`,...o?{top:0}:{bottom:0},...n}},tn=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ti=({reverseOrder:t,position:e="top-center",toastOptions:o,gutter:n,children:i,containerStyle:r,containerClassName:s})=>{let{toasts:c,handlers:l}=F(o);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...r},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},c.map(o=>{let r=o.position||e,s=to(r,l.calculateOffset(o,{reverseOrder:t,gutter:n,defaultPosition:e}));return a.createElement(te,{id:o.id,key:o.id,onHeightUpdate:l.updateHeight,className:o.visible?tn:"",style:s},"custom"===o.type?E(o.message,o):i?i(o):a.createElement(tt,{toast:o,position:r}))}))},tr=A},3489:function(t,e,o){"use strict";/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */function n(t,e,o){this.x=t,this.y=e,this.time=o||new Date().getTime()}function i(t,e,o,n){this.startPoint=t,this.control1=e,this.control2=o,this.endPoint=n}function r(t,e){var o,n,i,a,s,c,l,u,d,h=this,p=e||{};(this.velocityFilterWeight=p.velocityFilterWeight||.7,this.minWidth=p.minWidth||.5,this.maxWidth=p.maxWidth||2.5,this.throttle="throttle"in p?p.throttle:16,this.minDistance="minDistance"in p?p.minDistance:5,this.throttle)?this._strokeMoveUpdate=(o=r.prototype._strokeUpdate,n=this.throttle,l=null,u=0,i||(i={}),d=function(){u=!1===i.leading?0:Date.now(),l=null,c=o.apply(a,s),l||(a=s=null)},function(){var t=Date.now();u||!1!==i.leading||(u=t);var e=n-(t-u);return a=this,s=arguments,e<=0||e>n?(l&&(clearTimeout(l),l=null),u=t,c=o.apply(a,s),l||(a=s=null)):l||!1===i.trailing||(l=setTimeout(d,e)),c}):this._strokeMoveUpdate=r.prototype._strokeUpdate,this.dotSize=p.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=p.penColor||"black",this.backgroundColor=p.backgroundColor||"rgba(0,0,0,0)",this.onBegin=p.onBegin,this.onEnd=p.onEnd,this._canvas=t,this._ctx=t.getContext("2d"),this.clear(),this._handleMouseDown=function(t){1===t.which&&(h._mouseButtonDown=!0,h._strokeBegin(t))},this._handleMouseMove=function(t){h._mouseButtonDown&&h._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&h._mouseButtonDown&&(h._mouseButtonDown=!1,h._strokeEnd(t))},this._handleTouchStart=function(t){if(1===t.targetTouches.length){var e=t.changedTouches[0];h._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];h._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){t.target===h._canvas&&(t.preventDefault(),h._strokeEnd(t))},this.on()}o.r(e),n.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1},n.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},n.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time},i.prototype.length=function(){for(var t=0,e=void 0,o=void 0,n=0;n<=10;n+=1){var i=n/10,r=this._point(i,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this._point(i,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(n>0){var s=r-e,c=a-o;t+=Math.sqrt(s*s+c*c)}e=r,o=a}return t},i.prototype._point=function(t,e,o,n,i){return e*(1-t)*(1-t)*(1-t)+3*o*(1-t)*(1-t)*t+3*n*(1-t)*t*t+i*t*t*t},r.prototype.clear=function(){var t=this._ctx,e=this._canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0},r.prototype.fromDataURL=function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new Image,i=o.ratio||window.devicePixelRatio||1,r=o.width||this._canvas.width/i,a=o.height||this._canvas.height/i;this._reset(),n.src=t,n.onload=function(){e._ctx.drawImage(n,0,0,r,a)},this._isEmpty=!1},r.prototype.toDataURL=function(t){var e;if("image/svg+xml"===t)return this._toSVG();for(var o=arguments.length,n=Array(o>1?o-1:0),i=1;i<o;i++)n[i-1]=arguments[i];return(e=this._canvas).toDataURL.apply(e,[t].concat(n))},r.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()},r.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)},r.prototype.isEmpty=function(){return this._isEmpty},r.prototype._strokeBegin=function(t){this._data.push([]),this._reset(),this._strokeUpdate(t),"function"==typeof this.onBegin&&this.onBegin(t)},r.prototype._strokeUpdate=function(t){var e=t.clientX,o=t.clientY,n=this._createPoint(e,o),i=this._data[this._data.length-1],r=i&&i[i.length-1],a=r&&n.distanceTo(r)<this.minDistance;if(!(r&&a)){var s=this._addPoint(n),c=s.curve,l=s.widths;c&&l&&this._drawCurve(c,l.start,l.end),this._data[this._data.length-1].push({x:n.x,y:n.y,time:n.time,color:this.penColor})}},r.prototype._strokeEnd=function(t){var e=this.points.length>2,o=this.points[0];if(!e&&o&&this._drawDot(o),o){var n=this._data[this._data.length-1],i=n[n.length-1];o.equals(i)||n.push({x:o.x,y:o.y,time:o.time,color:this.penColor})}"function"==typeof this.onEnd&&this.onEnd(t)},r.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)},r.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)},r.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor},r.prototype._createPoint=function(t,e,o){var i=this._canvas.getBoundingClientRect();return new n(t-i.left,e-i.top,o||new Date().getTime())},r.prototype._addPoint=function(t){var e=this.points;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var o=this._calculateCurveControlPoints(e[0],e[1],e[2]).c2,n=this._calculateCurveControlPoints(e[1],e[2],e[3]).c1,r=new i(e[1],o,n,e[2]),a=this._calculateCurveWidths(r);return e.shift(),{curve:r,widths:a}}return{}},r.prototype._calculateCurveControlPoints=function(t,e,o){var i=t.x-e.x,r=t.y-e.y,a=e.x-o.x,s=e.y-o.y,c={x:(t.x+e.x)/2,y:(t.y+e.y)/2},l={x:(e.x+o.x)/2,y:(e.y+o.y)/2},u=Math.sqrt(a*a+s*s),d=c.x-l.x,h=c.y-l.y,p=u/(Math.sqrt(i*i+r*r)+u),f={x:l.x+d*p,y:l.y+h*p},m=e.x-f.x,v=e.y-f.y;return{c1:new n(c.x+m,c.y+v),c2:new n(l.x+m,l.y+v)}},r.prototype._calculateCurveWidths=function(t){var e=t.startPoint,o=t.endPoint,n={start:null,end:null},i=this.velocityFilterWeight*o.velocityFrom(e)+(1-this.velocityFilterWeight)*this._lastVelocity,r=this._strokeWidth(i);return n.start=this._lastWidth,n.end=r,this._lastVelocity=i,this._lastWidth=r,n},r.prototype._strokeWidth=function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)},r.prototype._drawPoint=function(t,e,o){var n=this._ctx;n.moveTo(t,e),n.arc(t,e,o,0,2*Math.PI,!1),this._isEmpty=!1},r.prototype._drawCurve=function(t,e,o){var n=this._ctx,i=o-e,r=Math.floor(t.length());n.beginPath();for(var a=0;a<r;a+=1){var s=a/r,c=s*s,l=c*s,u=1-s,d=u*u,h=d*u,p=h*t.startPoint.x;p+=3*d*s*t.control1.x+3*u*c*t.control2.x+l*t.endPoint.x;var f=h*t.startPoint.y;f+=3*d*s*t.control1.y+3*u*c*t.control2.y+l*t.endPoint.y;var m=e+l*i;this._drawPoint(p,f,m)}n.closePath(),n.fill()},r.prototype._drawDot=function(t){var e=this._ctx,o="function"==typeof this.dotSize?this.dotSize():this.dotSize;e.beginPath(),this._drawPoint(t.x,t.y,o),e.closePath(),e.fill()},r.prototype._fromData=function(t,e,o){for(var i=0;i<t.length;i+=1){var r=t[i];if(r.length>1)for(var a=0;a<r.length;a+=1){var s=r[a],c=new n(s.x,s.y,s.time),l=s.color;if(0===a)this.penColor=l,this._reset(),this._addPoint(c);else if(a!==r.length-1){var u=this._addPoint(c),d=u.curve,h=u.widths;d&&h&&e(d,h,l)}}else this._reset(),o(r[0])}},r.prototype._toSVG=function(){var t=this,e=this._data,o=this._canvas,n=Math.max(window.devicePixelRatio||1,1),i=o.width/n,r=o.height/n,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS(null,"width",o.width),a.setAttributeNS(null,"height",o.height),this._fromData(e,function(t,e,o){var n=document.createElement("path");if(!isNaN(t.control1.x)&&!isNaN(t.control1.y)&&!isNaN(t.control2.x)&&!isNaN(t.control2.y)){var i="M "+t.startPoint.x.toFixed(3)+","+t.startPoint.y.toFixed(3)+" "+("C "+t.control1.x.toFixed(3))+","+t.control1.y.toFixed(3)+" "+t.control2.x.toFixed(3)+","+t.control2.y.toFixed(3)+" "+t.endPoint.x.toFixed(3)+","+t.endPoint.y.toFixed(3);n.setAttribute("d",i),n.setAttribute("stroke-width",(2.25*e.end).toFixed(3)),n.setAttribute("stroke",o),n.setAttribute("fill","none"),n.setAttribute("stroke-linecap","round"),a.appendChild(n)}},function(e){var o=document.createElement("circle"),n="function"==typeof t.dotSize?t.dotSize():t.dotSize;o.setAttribute("r",n),o.setAttribute("cx",e.x),o.setAttribute("cy",e.y),o.setAttribute("fill",e.color),a.appendChild(o)});var s=a.innerHTML;if(void 0===s){var c=document.createElement("dummy"),l=a.childNodes;c.innerHTML="";for(var u=0;u<l.length;u+=1)c.appendChild(l[u].cloneNode(!0));s=c.innerHTML}return"data:image/svg+xml;base64,"+btoa('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+i+" "+r+'" width="'+i+'" height="'+r+'">'+s+"</svg>")},r.prototype.fromData=function(t){var e=this;this.clear(),this._fromData(t,function(t,o){return e._drawCurve(t,o.start,o.end)},function(t){return e._drawDot(t)}),this._data=t},r.prototype.toData=function(){return this._data},e.default=r}}]);