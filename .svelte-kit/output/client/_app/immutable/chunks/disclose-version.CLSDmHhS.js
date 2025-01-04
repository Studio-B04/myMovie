import{q as S,ar as p,a7 as h,as as k,B as E,at as O,ao as V,I as W,z as y,k as m,au as B,av as C,h as l,i as c,s as D,a as R}from"./runtime.CFcG-3Xj.js";function Q(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const q=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Y(e){return q.includes(e)}const j={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function Z(e){return e=e.toLowerCase(),j[e]??e}const U=["touchstart","touchmove"];function ee(e){return U.includes(e)}const $=["textarea","script","style","title"];function te(e){return $.includes(e)}function re(e,t){if(t){const r=document.body;e.autofocus=!0,S(()=>{document.activeElement===r&&e.focus()})}}let L=!1;function z(){L||(L=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function N(e){var t=k,r=E;p(null),h(null);try{return e()}finally{p(t),h(r)}}function ae(e,t,r,o=r){e.addEventListener(t,()=>N(r));const n=e.__on_r;n?e.__on_r=()=>{n(),o(!0)}:e.__on_r=()=>o(!0),z()}const F=new Set,G=new Set;function H(e,t,r,o){function n(a){if(o.capture||X.call(t,a),!a.cancelBubble)return N(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?S(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function ne(e,t,r,o,n){var a={capture:o,passive:n},u=H(e,t,r,a);(t===document.body||t===window||t===document)&&O(()=>{t.removeEventListener(e,u,a)})}function oe(e){for(var t=0;t<e.length;t++)F.add(e[t]);for(var r of G)r(e)}function X(e){var b;var t=this,r=t.ownerDocument,o=e.type,n=((b=e.composedPath)==null?void 0:b.call(e))||[],a=n[0]||e.target,u=0,f=e.__root;if(f){var s=n.indexOf(f);if(s!==-1&&(t===document||t===window)){e.__root=t;return}var w=n.indexOf(t);if(w===-1)return;s<=w&&(u=s)}if(a=n[u]||e.target,a!==t){V(e,"currentTarget",{configurable:!0,get(){return a||r}});var M=k,x=E;p(null),h(null);try{for(var d,T=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var _=a["__"+o];if(_!==void 0&&!a.disabled)if(W(_)){var[I,...P]=_;I.apply(a,[e,...P])}else _.call(a,e)}catch(v){d?T.push(v):d=v}if(e.cancelBubble||g===t||g===null)break;a=g}if(d){for(let v of T)queueMicrotask(()=>{throw v});throw d}}finally{e.__root=t,delete e.currentTarget,p(M),h(x)}}}function A(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function i(e,t){var r=E;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ue(e,t){var r=(t&B)!==0,o=(t&C)!==0,n,a=!e.startsWith("<!>");return()=>{if(l)return i(c,null),c;n===void 0&&(n=A(a?e:"<!>"+e),r||(n=m(n)));var u=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var f=m(u),s=u.lastChild;i(f,s)}else i(u,u);return u}}function se(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(l)return i(c,null),c;if(!a){var u=A(n),f=m(u);a=m(f)}var s=a.cloneNode(!0);return i(s,s),s}}function ie(e=""){if(!l){var t=y(e+"");return i(t,t),t}var r=c;return r.nodeType!==3&&(r.before(r=y()),D(r)),i(r,r),r}function ce(){if(l)return i(c,null),c;var e=document.createDocumentFragment(),t=document.createComment(""),r=y();return e.append(t,r),i(t,r),e}function fe(e,t){if(l){E.nodes_end=c,R();return}e!==null&&e.before(t)}const J="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(J);export{F as a,i as b,fe as c,z as d,ne as e,Q as f,H as g,X as h,ee as i,oe as j,re as k,Y as l,ae as m,Z as n,ie as o,ce as p,te as q,G as r,se as s,ue as t,A as u};
