(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4665],{7714:function(e,t,r){Promise.resolve().then(r.bind(r,8657))},8657:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var a=r(9268),s=r(4406),n=r(6008),l=r(6006),o=r(1712),i=r(9700),c=r(2985),d=r(3938),u=e=>{let{register:t,errors:r,control:s,watch:n,setValue:l}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{label:"Email",name:"email",register:t,required:!0,minLength:2,errors:r.email,addClass:"col-span-4",type:"email",labelCss:"text-font-1"}),(0,a.jsx)(d.Z,{label:"Password",name:"password",register:t,required:!0,minLength:3,errors:r.password,addClass:"w-[100%] mt-2",type:"password",labelCss:"text-font-1"})]})},m=r(366),x=r(593),h=e=>{let{setLogin:t,cekToken:r}=(0,s.Z)(),c=(0,n.useRouter)(),[d,h]=(0,l.useState)(""),[p,f]=(0,l.useState)(!1),b=async()=>{let e=o.Z.get("token");if(e){var t,a,s;let e=await r();if(console.log({cekAuth:e}),!(null==e?void 0:e.error)){let r=null==e?void 0:null===(s=e.data)||void 0===s?void 0:null===(a=s.data)||void 0===a?void 0:null===(t=a.user)||void 0===t?void 0:t.role;return"dosen"!==r?c.push("/admin/dashboard"):c.push("/dosen/dashboard")}}f(!1)};(0,l.useEffect)(()=>{b()},[]);let{register:g,setValue:v,control:y,watch:k,handleSubmit:j,formState:{errors:w}}=(0,i.cI)(),N=async e=>{var r;f(!0),h("");let a=await t(e);if(null==a?void 0:a.error)h(null==a?void 0:null===(r=a.error)||void 0===r?void 0:r.pesan);else{let{data:e}=a;return(o.Z.set("token",e.token),o.Z.set("role",e.role),o.Z.set("email",e.email),"dosen"!==e.role)?c.push("/admin/dashboard"):c.push("/dosen/dashboard")}setTimeout(()=>{f(!1)},1e3)};return(0,a.jsx)("div",{className:"min-h-screen bg-1 bg-cover bg-center font-prompt",children:(0,a.jsx)("div",{className:"flex flex-col items-center min-h-screen justify-center backdrop-blur-sm bg-black/50 z-10",children:(0,a.jsxs)("div",{className:"bg-white/10 text-font-1 rounded py-8 px-4 mx-6 md:py-8 md:px-12 flex flex-col items-center justify-center z-50",children:[(0,a.jsxs)("div",{className:"w-full mb-2",children:[(0,a.jsx)("h5",{className:"text-sm font-bold text-center sm:text-lg",children:"Selamat datang di"}),(0,a.jsx)("h3",{className:"text-2xl font-bold text-center tracking-[0.1em] sm:text-3xl",children:"SILAKU"}),(0,a.jsx)("p",{className:"text-center mt-2 text-xs sm:text-base",children:"(Sistem Informasi Perkuliahan Fakultas Sains & Teknologi)"}),(0,a.jsx)("span",{children:d&&(0,a.jsx)("p",{className:"text-red-600 text-center",children:d})})]}),(0,a.jsx)("img",{className:"rounded-full h-32 w-32 my-6",src:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"user avatar"}),(0,a.jsx)("p",{className:"text-center mt-2 text-[10px] text-gray-400 sm:text-sm",children:"Silakan login untuk mendapatkan akses ke halaman admin"}),(0,a.jsxs)("form",{onSubmit:j(N),className:"mt-8 w-full",children:[(0,a.jsx)(u,{register:g,errors:w,control:y,watch:k,setValue:v}),(0,a.jsx)("div",{className:"mt-4",children:p?(0,a.jsx)(x.Z,{}):(0,a.jsx)(m.Z,{text:"Login",onClick:j(N)})})]})]})})})}},366:function(e,t,r){"use strict";var a=r(9268);r(6006),t.Z=e=>{let{text:t,onClick:r,addClass:s}=e;return(0,a.jsx)("button",{onClick:r,className:"bg-primary rounded-lg px-4 py-2 text-white w-fit cursor-pointer hover:shadow-sm hover:shadow-primary ".concat(s),children:t})}},2985:function(e,t,r){"use strict";var a=r(9268);r(6006),t.Z=e=>{let{label:t,register:r,required:s,name:n,minLength:l,maxLength:o,errors:i,valueAsNumber:c,type:d="text",readOnly:u,placeholder:m,autoComplete:x="on",addClass:h,value:p,labelCss:f="text-gray-700"}=e;return(0,a.jsxs)("div",{className:h,children:[(0,a.jsx)("label",{htmlFor:n,className:"text-sm tracking-wide ".concat(f),children:t}),s&&(0,a.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("input",{className:"".concat(u&&"cursor-not-allowed bg-gray-100"," w-full text-base px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"),type:d,id:n,readOnly:u,placeholder:m,autoComplete:x,...r(n,{required:s,minLength:l,maxLength:o,valueAsNumber:c}),value:p})}),(null==i?void 0:i.type)==="required"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kosong"]}),(null==i?void 0:i.type)==="minLength"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kurang dari ",l," karakter"]}),(null==i?void 0:i.type)==="maxLength"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh lebih dari ",o," karakter"]}),(null==i?void 0:i.type)==="pattern"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," hanya boleh angka."]})]})}},3938:function(e,t,r){"use strict";var a=r(9268),s=r(6006),n=r(8136);t.Z=e=>{let{label:t,register:r,required:l,name:o,minLength:i,maxLength:c,errors:d,valueAsNumber:u,type:m="text",readOnly:x,placeholder:h,autoComplete:p="on",addClass:f,value:b,labelCss:g="text-gray-700"}=e,[v,y]=(0,s.useState)(!1);return(0,a.jsxs)("div",{className:f,children:[(0,a.jsx)("label",{htmlFor:o,className:"text-sm tracking-wide ".concat(g),children:t}),l&&(0,a.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{className:"w-full text-base text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",type:"password"===m?v?"text":"password":m,id:o,readOnly:x,placeholder:h,autoComplete:p,...r(o,{required:l,minLength:i,maxLength:c,valueAsNumber:u}),value:b}),"password"===m&&(0,a.jsx)("div",{className:"absolute right-2 top-0 flex items-center h-full cursor-pointer text-secondary",onClick:()=>{y(!v)},children:v?(0,a.jsx)(n.rCC,{size:20}):(0,a.jsx)(n.I$m,{size:20})})]}),(null==d?void 0:d.type)==="required"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kosong"]}),(null==d?void 0:d.type)==="minLength"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kurang dari ",i," karakter"]}),(null==d?void 0:d.type)==="maxLength"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh lebih dari ",c," karakter"]}),(null==d?void 0:d.type)==="pattern"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," hanya boleh angka."]})]})}},593:function(e,t,r){"use strict";var a=r(9268);r(6006),t.Z=()=>(0,a.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-secondary border-t-transparent shadow-md"})},3415:function(e,t,r){"use strict";r.d(t,{I8:function(){return n},Sj:function(){return l},VF:function(){return i},_n:function(){return s},hi:function(){return o}});var a=r(4214);let s="https://back.silaku.fstuogp.com",n=a.Z.create({baseURL:"".concat(s,"/auth")}),l=a.Z.create({baseURL:"".concat(s,"/crud")}),o=a.Z.create({baseURL:"".concat(s,"/api")});a.Z.create({baseURL:"".concat(s,"/storage")});let i=a.Z.create({baseURL:"".concat("https://back.edom.fstuogp.com","/api")})},4406:function(e,t,r){"use strict";var a=r(2561),s=r(4475),n=r(3415),l=r(1712);let o=(0,a.Ue)((0,s.mW)((e,t)=>({dtLogin:[],setToken:async()=>{let e=l.Z.get("token");return e},setLogin:async e=>{try{let t=await (0,n.I8)({method:"post",url:"/login",data:e});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let r=await t().setToken();try{let t=await (0,n.I8)({method:"post",url:"/cek-token",headers:{Authorization:"Bearer ".concat(r)}});return e(e=>({...e,dtLogin:t.data.data})),{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setUpdate:async(r,a)=>{try{let s=await t().setToken(),l=await (0,n.I8)({method:"post",url:"/update/".concat(r),headers:{Authorization:"Bearer ".concat(s)},data:a});return e(e=>({...e,dtLogin:l.data.data})),{status:"success",data:l.data}}catch(e){return console.log(e.response.data),{status:"error",data:e.response.data}}}})));t.Z=o},6008:function(e,t,r){e.exports=r(4e3)},3270:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var a=r(6006),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(s),l=function(){return(l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)0>t.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};function i(e){return function(t){return a.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return a.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,s=e.attr,n=e.size,i=e.title,c=o(e,["attr","size","title"]),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==n?a.createElement(n.Consumer,null,function(e){return t(e)}):t(s)}}},function(e){e.O(0,[6680,4288,2772,9253,7698,1744],function(){return e(e.s=7714)}),_N_E=e.O()}]);