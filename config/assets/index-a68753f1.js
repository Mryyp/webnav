import{r as v,u as I}from"./use-route-d0228638.js";import{c as R,I as C}from"./_plugin-vue_export-helper-a2c4d23b.js";import{L as p}from"./use-id-28ca1a2a.js";import{z as D,a2 as L,X as l,B as N,d as q,b as o,Q as w,E}from"./index-5ee6b2fa.js";const[O,a]=D("button"),U=L({},v,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:N,loadingText:String,loadingType:String,iconPosition:l("left")});var _=q({name:O,props:U,emits:["click"],setup(n,{emit:g,slots:t}){const f=I(),m=()=>t.loading?t.loading():o(p,{size:n.loadingSize,type:n.loadingType,class:a("loading")},null),c=()=>{if(n.loading)return m();if(t.icon)return o("div",{class:a("icon")},[t.icon()]);if(n.icon)return o(C,{name:n.icon,class:a("icon"),classPrefix:n.iconPrefix},null)},b=()=>{let e;if(n.loading?e=n.loadingText:e=t.default?t.default():n.text,e)return o("span",{class:a("text")},[e])},x=()=>{const{color:e,plain:r}=n;if(e){const i={color:r?e:"white"};return r||(i.background=e),e.includes("gradient")?i.border=0:i.borderColor=e,i}},y=e=>{n.loading?w(e):n.disabled||(g("click",e),f())};return()=>{const{tag:e,type:r,size:i,block:B,round:S,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:z,iconPosition:u}=n,h=[a([r,i,{plain:P,block:B,round:S,square:k,loading:T,disabled:s,hairline:d}]),{[R]:d}];return o(e,{type:z,class:h,style:x(),disabled:s,onClick:y},{default:()=>[o("div",{class:a("content")},[u==="left"&&c(),b(),u==="right"&&c()])]})}}});const A=E(_);export{A as B};
