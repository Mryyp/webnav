import{d as x,u as w,r as V,a as k,c as m,b as s,e as a,f as o,w as d,t as S,l as B,o as u,g as _,p as N,h as C}from"./index-5ee6b2fa.js";import"./index-6cabca22.js";import{F as I}from"./index-f26ecc53.js";import{N as M,_ as q}from"./_plugin-vue_export-helper-a2c4d23b.js";import{i as T}from"./utils-64f0fd18.js";import{l as U,S as D}from"./login-9c7d3e67.js";import{B as F}from"./index-a68753f1.js";import{s as p}from"./request-0c3efa69.js";import"./use-route-d0228638.js";import"./use-id-28ca1a2a.js";import"./index-5786f0c1.js";import"./index-2a44163e.js";const z=r=>(N("data-v-66d78bf8"),r=r(),C(),r),A={class:"login"},E={class:"main"},P=z(()=>a("div",{class:"title"}," 欢迎登录 ",-1)),R={class:"label-box"},j={key:0,class:"label-box"},G={key:1,class:"label-box"},H={class:"type"},J=x({__name:"index",setup(r){const b=w(),e=V({mobile:"",password:"",code:"",type:!0}),y=()=>e.mobile?T(e.mobile)?e.type&&!e.password?(p("请输入密码"),!1):!e.type&&!e.code?(p("请输入验证码"),!1):!0:(p("手机号格式错误"),!1):(p("请输入手机号"),!1),v=async()=>{if(!y())return!1;const f={mobile:e.mobile,code:e.code},t={mobile:e.mobile,password:e.password},c=e.type?"login2":"login",l=e.type?t:f,i=await U[c](l);i.code===0&&(B.set("quotation_token",i.data.token),b.push({path:"/home"}))},h=()=>{e.password="",e.code="",e.type=!e.type};return(f,t)=>{const c=M,l=I,i=k("router-link"),g=F;return u(),m("div",A,[s(c,{class:"nav",title:"在线报价工具",fixed:"",placeholder:"","safe-area-inset-top":""}),a("div",E,[P,a("div",R,[s(l,{modelValue:o(e).mobile,"onUpdate:modelValue":t[0]||(t[0]=n=>o(e).mobile=n),modelModifiers:{trim:!0},maxlength:"11",class:"input",type:"tel",label:"手机号",placeholder:"请输入手机号",clearable:""},null,8,["modelValue"])]),o(e).type?(u(),m("div",j,[s(l,{modelValue:o(e).password,"onUpdate:modelValue":t[1]||(t[1]=n=>o(e).password=n),modelModifiers:{trim:!0},class:"input",type:"password",label:"密码",placeholder:"请输入密码",clearable:""},null,8,["modelValue"])])):(u(),m("div",G,[s(l,{modelValue:o(e).code,"onUpdate:modelValue":t[2]||(t[2]=n=>o(e).code=n),modelModifiers:{trim:!0},maxlength:"4",class:"input",type:"number",label:"验证码",placeholder:"请输入验证码"},{button:d(()=>[s(D,{mobile:o(e).mobile,type:1},null,8,["mobile"])]),_:1},8,["modelValue"])])),a("div",H,[a("div",null,[s(i,{to:{path:"/form",query:{name:"register"}}},{default:d(()=>[_(" 还没有账号，先注册~ ")]),_:1})]),a("div",null,[s(i,{to:{path:"/form",query:{name:"revise"}}},{default:d(()=>[_(" 忘记密码 ")]),_:1})])]),s(g,{class:"button",round:"",type:"primary",size:"large",onClick:v},{default:d(()=>[_(" 登录 ")]),_:1}),a("div",{class:"switch",onClick:h},S(o(e).type?"短信验证码登录":"密码登录"),1)])])}}});const se=q(J,[["__scopeId","data-v-66d78bf8"]]);export{se as default};
