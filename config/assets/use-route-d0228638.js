import{aD as n}from"./index-5ee6b2fa.js";const s={to:[String,Object],url:String,replace:Boolean};function a({to:e,url:o,replace:t,$router:r}){e&&r?r[t?"replace":"push"](e):o&&(t?location.replace(o):location.href=o)}function i(){const e=n().proxy;return()=>a(e)}export{s as r,i as u};
