System.register(["./index-legacy-a99c9020.js","./_plugin-vue_export-helper-legacy-81237f8a.js","./index-legacy-80e98bda.js"],(function(e,l){"use strict";var a,t,u,n,i,s,o,r,d,m,c,v,p,g,b,h,f,x,S,y,w,V,B,P,I;return{setters:[e=>{a=e.z,t=e.L,u=e.Y,n=e.B,i=e.d,s=e.i,o=e.R,r=e.D,d=e.$,m=e.m,c=e.A,v=e.b,p=e.ae,g=e.af,b=e.W,h=e.al,f=e.S,x=e.O,S=e.am,y=e.Q,w=e.an,V=e.E},e=>{B=e.H,P=e.L},e=>{I=e.c}],execute:function(){const[l,M]=a("stepper"),T=(e,l)=>String(e)===String(l),L={min:t(1),max:t(1/0),name:t(""),step:t(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:u,showMinus:u,showInput:u,longPress:u,autoFixed:u,allowEmpty:Boolean,modelValue:n,inputWidth:n,buttonSize:n,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:t(1),decimalLength:n};var C=i({name:l,props:L,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(e,{emit:l}){const a=(l,a=!0)=>{const{min:t,max:u,allowEmpty:n,decimalLength:i}=e;return n&&""===l||(l=""===(l=h(String(l),!e.integer))?0:+l,l=Number.isNaN(l)?+t:l,l=a?Math.max(Math.min(+u,l),+t):l,f(i)&&(l=l.toFixed(+i))),l};let t;const u=s(),n=s((()=>{var t;const u=null!=(t=e.modelValue)?t:e.defaultValue,n=a(u);return T(n,e.modelValue)||l("update:modelValue",n),n})()),i=o((()=>e.disabled||e.disableMinus||+n.value<=+e.min)),V=o((()=>e.disabled||e.disablePlus||+n.value>=+e.max)),L=o((()=>({width:r(e.inputWidth),height:r(e.buttonSize)}))),C=o((()=>d(e.buttonSize))),F=l=>{e.beforeChange?I(e.beforeChange,{args:[l],done(){n.value=l}}):n.value=l},z=()=>{if("plus"===t&&V.value||"minus"===t&&i.value)return void l("overlimit",t);const u="minus"===t?-e.step:+e.step,s=a(w(+n.value,u));F(s),l(t)},j=l=>{const a=l.target,{value:t}=a,{decimalLength:u}=e;let i=h(String(t),!e.integer);if(f(u)&&i.includes(".")){const e=i.split(".");i=`${e[0]}.${e[1].slice(0,+u)}`}e.beforeChange?a.value=String(n.value):T(t,i)||(a.value=i);const s=i===String(+i);F(s?+i:i)},E=a=>{var t;e.disableInput?null==(t=u.value)||t.blur():l("focus",a)},N=t=>{const u=t.target,i=a(u.value,e.autoFixed);u.value=String(i),n.value=i,x((()=>{l("blur",t),S()}))};let W,$;const _=()=>{$=setTimeout((()=>{z(),_()}),200)},k=l=>{e.longPress&&(clearTimeout($),W&&y(l))},A=l=>{e.disableInput&&y(l)},D=l=>({onClick:e=>{y(e),t=l,z()},onTouchstartPassive:()=>{t=l,e.longPress&&(W=!1,clearTimeout($),$=setTimeout((()=>{W=!0,z(),_()}),P))},onTouchend:k,onTouchcancel:k});return m((()=>[e.max,e.min,e.integer,e.decimalLength]),(()=>{const e=a(n.value);T(e,n.value)||(n.value=e)})),m((()=>e.modelValue),(e=>{T(e,n.value)||(n.value=a(e))})),m(n,(a=>{l("update:modelValue",a),l("change",a,{name:e.name})})),c((()=>e.modelValue)),()=>v("div",{role:"group",class:M([e.theme])},[p(v("button",b({type:"button",style:C.value,class:[M("minus",{disabled:i.value}),{[B]:!i.value}],"aria-disabled":i.value||void 0},D("minus")),null),[[g,e.showMinus]]),p(v("input",{ref:u,type:e.integer?"tel":"text",role:"spinbutton",class:M("input"),value:n.value,style:L.value,disabled:e.disabled,readonly:e.disableInput,inputmode:e.integer?"numeric":"decimal",placeholder:e.placeholder,"aria-valuemax":e.max,"aria-valuemin":e.min,"aria-valuenow":n.value,onBlur:N,onInput:j,onFocus:E,onMousedown:A},null),[[g,e.showInput]]),p(v("button",b({type:"button",style:C.value,class:[M("plus",{disabled:V.value}),{[B]:!V.value}],"aria-disabled":V.value||void 0},D("plus")),null),[[g,e.showPlus]])])}});e("S",V(C))}}}));
