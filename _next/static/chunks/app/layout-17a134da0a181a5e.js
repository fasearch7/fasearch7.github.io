(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1869:function(e,t,r){Promise.resolve().then(r.bind(r,8732)),Promise.resolve().then(r.bind(r,1581)),Promise.resolve().then(r.bind(r,2327)),Promise.resolve().then(r.t.bind(r,2471,23))},2327:function(e,t,r){"use strict";r.r(t);var s=r(7437),n=r(2265),l=r(7636);let o=e=>{let{step:t,idx:r}=e;return(0,s.jsx)("div",{className:(0,l.A)("rounded-[1px] w-[8px] h-[8px]",t==r?"bg-folder-primary":"bg-folder-600")})};t.default=e=>{let{lodingText:t}=e,[r,l]=(0,n.useReducer)((e,t)=>"increment"===t.type?e<5?e+1:0:e,0);return(0,n.useEffect)(()=>(setInterval(()=>{l({type:"increment"})},100),()=>clearInterval("time")),[]),(0,s.jsxs)("div",{className:"min-h-[90vh] w-full flex flex-col justify-center items-center",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-[1px]",children:[(0,s.jsxs)("div",{className:"flex flex-row gap-[1px] justify-start",children:[(0,s.jsx)(o,{step:r,idx:5}),(0,s.jsx)(o,{step:r,idx:0}),(0,s.jsx)(o,{step:r,idx:1})]}),(0,s.jsxs)("div",{className:"flex flex-row gap-[1px] justify-start",children:[(0,s.jsx)(o,{step:r,idx:2}),(0,s.jsx)(o,{step:r,idx:3})]}),(0,s.jsx)("div",{className:"flex flex-row gap-[1px] justify-start",children:(0,s.jsx)(o,{step:r,idx:4})})]}),(0,s.jsxs)("h2",{className:"text-folder-400 text-text_14 monitor:text-text_16",children:[t,".".repeat(r)]})]})}},1581:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var s=r(7437),n=r(2265),l=r(4033),o=r(163),x=r(7636),i=e=>{let{text:t}=e;return(0,s.jsx)("p",{className:(0,x.A)("font-normal whitespace-nowrap text-[8px]","open_nav:text-[16px]"),children:t})},a=e=>{let{iconSrc:t,text:r,isSelected:n=!1,...l}=e;return(0,s.jsxs)("button",{...l,className:(0,x.A)("pointer-events-none w-full rounded-[4px] flex flex-col items-center  gap-[4px] px-[10px] py-[4px] text-folder-600",n&&"text-folder-primary",n&&"monitor:bg-folder-primary monitor:text-white","open_nav:px-[20px] open_nav:py-[10px] open_nav:flex-row"),children:[(0,s.jsx)(o.Z,{src:t}),(0,s.jsx)(i,{text:r})]})};let c=[{iconSrc:"/icons/discovery-24.svg",text:"패션발견",path:"/fashion"},{iconSrc:"/icons/topic-24.svg",text:"패션토픽",path:"/topic"},{iconSrc:"/icons/bookmark-24.svg",text:"스크랩",path:"/scrap"},{iconSrc:"/icons/user-24.svg",text:"마이페이지",path:"/my"}],p=()=>(0,s.jsxs)("div",{className:"open_nav:flex open_nav:items-center open_nav:gap-[16px] open_nav:ml-[20px] ",children:[(0,s.jsx)("button",{className:"hidden monitor:block ",children:(0,s.jsx)("img",{src:"/icons/menu-24.svg"})}),(0,s.jsx)("button",{children:(0,s.jsx)("img",{src:"/folder.svg",className:"hidden open_nav:block"})})]}),d=()=>{let e=(0,l.usePathname)(),[t,r]=(0,n.useState)("/"===e?"/fashion":e),{push:o}=(0,l.useRouter)();return(0,s.jsx)("ul",{onClick:e=>{let t=e.target;r(t.id),o(t.id)},className:(0,x.A)("flex flex-row gap-[10px] justify-around items-center w-full","monitor:flex-col","open_nav:items-start"),children:c.map(e=>(0,s.jsx)("li",{id:e.path,className:"w-full cursor-pointer",children:(0,s.jsx)(a,{iconSrc:e.iconSrc,text:e.text,isSelected:t.includes(e.path)})},e.text))})};var u=()=>(0,s.jsxs)("aside",{className:(0,x.A)("fixed bottom-0 px-[16px] py-[20px] bg-folder-bg-navbar w-full h-[66px] flex items-center z-20","monitor:w-[76px] monitor:max-h-screen monitor:h-full monitor:flex monitor:flex-col monitor:gap-[40px] monitor:max-w-[768px]","open_nav:w-[240px] open_nav:items-start"),children:[(0,s.jsx)(p,{}),(0,s.jsx)(d,{})]})},163:function(e,t,r){"use strict";var s=r(7437);r(2265),t.Z=e=>{let{src:t,size:r="md",...n}=e;return(0,s.jsx)("img",{src:t,...n})}},9596:function(e,t,r){"use strict";var s=r(7437);r(2265),t.Z=e=>{let{text:t,type:r="md",className:n,...l}=e;return(0,s.jsx)("p",{className:"font-normal whitespace-nowrap text-[14px] ".concat((()=>{switch(r){case"3xl":return"lg:text-[48px]";case"2xl":return"lg:text-[36px]";case"xl":return"text-[14px] lg:text-[24px]";case"lg":return"text-[12px] lg:text-[20px]";case"md":default:return"text-[12px] lg:text-[16px]";case"sm":return"text-[12px] lg:text-[14px]";case"xs":return"text-[8px] lg:text-[12px]";case"2xs":return"lg:text-[10px]";case"3xs":return"lg:text-[8px]"}})()," ").concat(n),...l,children:t})}},8732:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var s=r(7437),n=r(2265),l=r(7636),o=()=>{let[e,t]=(0,n.useState)(!1),r=(0,n.useRef)(null),o=s=>{var n;!e||(null===(n=r.current)||void 0===n?void 0:n.contains(s.target))||t(!1)};return(0,n.useEffect)(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)})),(0,s.jsxs)("div",{className:(0,l.A)("relative mx-auto","monitor:px-[100px]"),children:[(0,s.jsxs)("div",{className:(0,l.A)("flex gap-[8px] bg-folder-200 items-center px-[12px] py-[6px] rounded-[8px]"),children:[(0,s.jsx)("img",{src:"/icons/search-24.svg"}),(0,s.jsx)("input",{placeholder:"어떤 패션 콘텐츠를 찾아볼까요?",className:"w-full bg-transparent outline-none placeholder:truncate",onClick:()=>t(e=>!e)})]}),e&&(0,s.jsx)("div",{className:"absolute bg-folder-100 w-full flex flex-col gap-[10px] p-[10px] z-10 rounded-[8px]",children:[1,2,3,4,5].map(e=>(0,s.jsxs)("div",{className:"px-[8px] py-[10px] flex gap-[8px] hover:bg-folder-200 rounded-[8px]",children:[(0,s.jsx)("img",{src:"/icons/search-20.svg"}),(0,s.jsx)("p",{children:e})]},e))})]})},x=r(9596),i=e=>{let{isSelected:t=!1,...r}=e;return(0,s.jsx)("button",{className:"px-[20px] py-[8px] rounded-[8px] text-white bg-folder-primary",...r,children:(0,s.jsx)(x.Z,{text:"회원가입"})})},a=r(4033),c=()=>{let{push:e}=(0,a.useRouter)();return(0,s.jsx)("button",{className:"border-[1px] text-folder-500 border-folder-200 px-[20px] py-[8px] rounded-[8px]",onClick:()=>e("/login"),children:(0,s.jsx)(x.Z,{text:"로그인"})})},p=r(4887),d=e=>{let{children:t,onClose:r}=e,l=e=>{"Escape"===e.key&&r()};(0,n.useEffect)(()=>(window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)),[]);let o=(0,s.jsx)("div",{className:"fixed w-full h-screen inset-0 bg-black z-50 py-[20px] px-[10px] text-folder-white mx-auto",onClick:e=>{e.currentTarget===e.target&&r()},children:t});return(0,p.createPortal)(o,document.getElementById("modal-root"))};let u=()=>{let[e,t]=(0,n.useState)(""),r=()=>{innerWidth>1023?t("lg"):innerWidth>767?t("md"):innerWidth>639&&t("sm")};return(0,n.useEffect)(()=>(r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]),{responsiveSize:e}};var f=()=>{let[e,t]=(0,n.useState)(!1),{responsiveSize:r}=u();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("header",{className:(0,l.A)("h-[52px] py-[20px]","monitor:h-[80px]"),children:[(0,s.jsxs)("div",{className:(0,l.A)("flex justify-between max-w-[688px] mx-auto","monitor:hidden"),children:[(0,s.jsx)("img",{src:"/folder.svg",width:120,height:100}),(0,s.jsx)("button",{onClick:()=>t(e=>!e),children:(0,s.jsx)("img",{src:"/icons/search-24.svg"})})]}),(0,s.jsxs)("div",{className:(0,l.A)("hidden justify-between","monitor:flex"),children:[(0,s.jsx)("div",{className:(0,l.A)("mx-auto hidden relative w-full","monitor:block"),children:(0,s.jsx)(o,{})}),(0,s.jsxs)("div",{className:"flex gap-[8px] place-self-end min-w-[226px]",children:[(0,s.jsx)("img",{src:"/icons/bookmark-32.svg"}),(0,s.jsx)(c,{}),(0,s.jsx)(i,{})]})]})]}),e&&"lg"!==r&&(0,s.jsx)(d,{onClose:()=>t(!1),children:(0,s.jsx)(o,{})})]})}},7636:function(e,t,r){"use strict";function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}r.d(t,{A:function(){return s}})},2471:function(){},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(2265),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,x=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var s,l={},a=null,c=null;for(s in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,s)&&!i.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:n,type:e,key:a,ref:c,props:l,_owner:x.current}}t.Fragment=l,t.jsx=a,t.jsxs=a},7437:function(e,t,r){"use strict";e.exports=r(622)},4033:function(e,t,r){e.exports=r(8165)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=1869)}),_N_E=e.O()}]);