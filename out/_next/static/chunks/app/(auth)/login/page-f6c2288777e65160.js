(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4665],{7714:function(e,t,a){Promise.resolve().then(a.bind(a,8657))},8657:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var s=a(9268),r=a(4406),n=a(6008),l=a(6006),i=a(1712),o=a(9700),d=a(2985),c=a(3938),u=e=>{let{register:t,errors:a,control:r,watch:n,setValue:l}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Z,{label:"Email",name:"email",register:t,required:!0,minLength:2,errors:a.email,addClass:"col-span-4",type:"email",labelCss:"text-font-1 text-white"}),(0,s.jsx)(c.Z,{label:"Password",name:"password",register:t,required:!0,minLength:3,errors:a.password,addClass:"w-[100%] mt-2",type:"password",labelCss:"text-font-1 text-white"})]})},m=a(593),x=a(541),h=e=>{let{setLogin:t,cekToken:a}=(0,r.Z)(),d=(0,n.useRouter)(),[c,h]=(0,l.useState)(""),[p,f]=(0,l.useState)(!1),b=async()=>{let e=i.Z.get("token");if(e){var t,s,r;let e=await a();if(console.log({cekAuth:e}),!(null==e?void 0:e.error)){let a=null==e?void 0:null===(r=e.data)||void 0===r?void 0:null===(s=r.data)||void 0===s?void 0:null===(t=s.user)||void 0===t?void 0:t.role;return"dosen"!==a?d.push("/admin/dashboard"):d.push("/dosen/dashboard")}}f(!1)};(0,l.useEffect)(()=>{b()},[]);let{register:g,setValue:k,control:v,watch:y,handleSubmit:j,formState:{errors:N}}=(0,o.cI)(),w=async e=>{var a;f(!0),h("");let s=await t(e);if(null==s?void 0:s.error)h(null==s?void 0:null===(a=s.error)||void 0===a?void 0:a.pesan);else{let{data:e}=s,{role:t,name:a,dosen_id:r}=e;return(i.Z.set("token",e.token),i.Z.set("role",t),i.Z.set("email",e.email),"prodi"===t&&(console.log("prodi"),"Sistem Informasi"===a&&(console.log("si"),i.Z.set("prodi_id","1")),"Biologi"===a&&i.Z.set("prodi_id","2"),"Teknik Geologi"===a&&i.Z.set("prodi_id","3")),"dosen"!==t)?d.push("/admin/dashboard"):(i.Z.set("dosen_id",r),d.push("/dosen/dashboard"))}setTimeout(()=>{f(!1)},1e3)};return(0,s.jsx)("div",{className:"min-h-screen bg-1 bg-cover bg-center font-prompt",children:(0,s.jsx)("div",{className:"flex flex-col items-center min-h-screen justify-center backdrop-blur-sm bg-black/50 z-10",children:(0,s.jsxs)("div",{className:"bg-white/10 text-font-1 rounded py-8 px-4 mx-6 md:py-8 md:px-12 flex flex-col items-center justify-center z-50",children:[(0,s.jsxs)("div",{className:"w-full mb-2",children:[(0,s.jsx)("h5",{className:"text-sm font-bold text-center sm:text-lg",children:"Selamat datang di"}),(0,s.jsx)("h3",{className:"text-2xl font-bold text-center tracking-[0.1em] sm:text-3xl",children:"SILAKU"}),(0,s.jsx)("p",{className:"text-center mt-2 text-xs sm:text-base",children:"(Sistem Informasi Perkuliahan Fakultas Sains & Teknologi)"}),(0,s.jsx)("span",{children:c&&(0,s.jsx)("p",{className:"text-red-600 text-center",children:c})})]}),(0,s.jsx)("img",{className:"rounded-full h-32 w-32 my-6",src:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"user avatar"}),(0,s.jsx)("p",{className:"text-center mt-2 text-[10px] text-gray-400 sm:text-sm",children:"Silakan login untuk mendapatkan akses ke halaman admin"}),(0,s.jsxs)("form",{onSubmit:j(w),className:"mt-8 w-full",children:[(0,s.jsx)(u,{register:g,errors:N,control:v,watch:y,setValue:k}),(0,s.jsx)("div",{className:"mt-4",children:p?(0,s.jsx)(m.Z,{}):(0,s.jsx)(x.Z,{onClick:j(w),children:"Login"})})]})]})})})}},541:function(e,t,a){"use strict";var s=a(9268);t.Z=e=>{let{children:t,onClick:a,addClass:r="bg-primary hover:bg-primary/80 text-white",type:n="submit"}=e;return(0,s.jsx)("button",{type:n,className:"rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ".concat(r," "),onClick:a,children:t})}},2985:function(e,t,a){"use strict";var s=a(9268);t.Z=e=>{let{label:t,register:a,required:r,name:n,minLength:l,maxLength:i,errors:o,valueAsNumber:d,type:c="text",readOnly:u,placeholder:m,autoComplete:x="on",addClass:h,value:p,defaultValue:f,max:b,min:g,step:k,labelCss:v}=e;return(0,s.jsxs)("div",{className:h,children:[(0,s.jsx)("label",{htmlFor:n,className:"text-sm font-medium text-gray-700 tracking-wide ".concat(v),children:t}),r&&(0,s.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary",type:c,id:n,readOnly:u,placeholder:m,autoComplete:x,...a(n,{required:r,minLength:l,maxLength:i,valueAsNumber:d,max:b,min:g,step:k}),defaultValue:f,value:p})}),(null==o?void 0:o.type)==="required"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kosong"]}),(null==o?void 0:o.type)==="minLength"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kurang dari ",l," karakter"]}),(null==o?void 0:o.type)==="maxLength"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh lebih dari ",i," karakter"]}),(null==o?void 0:o.type)==="pattern"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," hanya boleh angka."]}),(null==o?void 0:o.type)==="max"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh lebih dari ",b,"."]}),(null==o?void 0:o.type)==="min"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kurang dari ",g,"."]})]})}},3938:function(e,t,a){"use strict";var s=a(9268),r=a(6006),n=a(8136);t.Z=e=>{let{label:t,register:a,required:l,name:i,minLength:o,maxLength:d,errors:c,valueAsNumber:u,type:m="password",readOnly:x,placeholder:h,autoComplete:p="on",addClass:f,value:b,labelCss:g}=e,[k,v]=(0,r.useState)(!1);return(0,s.jsxs)("div",{className:f,children:[(0,s.jsx)("label",{htmlFor:i,className:"text-sm font-medium text-gray-700 tracking-wide ".concat(g),children:t}),l&&(0,s.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{className:"w-full text-base text-gray-700  px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",type:"password"===m?k?"text":"password":m,id:i,readOnly:x,placeholder:h,autoComplete:p,...a(i,{required:l,minLength:o,maxLength:d,valueAsNumber:u}),value:b}),"password"===m&&(0,s.jsx)("div",{className:"absolute right-2 top-0 flex items-center h-full cursor-pointer text-secondary",onClick:()=>{v(!k)},children:k?(0,s.jsx)(n.rCC,{size:20}):(0,s.jsx)(n.I$m,{size:20})})]}),(null==c?void 0:c.type)==="required"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kosong"]}),(null==c?void 0:c.type)==="minLength"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kurang dari ",o," karakter"]}),(null==c?void 0:c.type)==="maxLength"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh lebih dari ",d," karakter"]}),(null==c?void 0:c.type)==="pattern"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," hanya boleh angka."]})]})}},593:function(e,t,a){"use strict";var s=a(9268);a(6006),t.Z=()=>(0,s.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-primary border-t-transparent shadow-md"})},3415:function(e,t,a){"use strict";a.d(t,{I8:function(){return n},Sj:function(){return l},_n:function(){return r},cB:function(){return o},hi:function(){return i}});var s=a(4214);let r="https://back.silaku.fstuogp.com",n=s.Z.create({baseURL:"".concat(r,"/auth")}),l=s.Z.create({baseURL:"".concat(r,"/crud")}),i=s.Z.create({baseURL:"".concat(r,"/api")});s.Z.create({baseURL:"".concat(r,"/storage")});let o=s.Z.create({baseURL:"".concat("https://back.edom.fstuogp.com","/api")})},4406:function(e,t,a){"use strict";var s=a(2561),r=a(4475),n=a(3415),l=a(1712);let i=(0,s.Ue)((0,r.mW)((e,t)=>({dtLogin:[],setToken:async()=>{let e=l.Z.get("token");return e},setLogin:async e=>{try{let t=await (0,n.I8)({method:"post",url:"/login",data:e});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let a=await t().setToken();try{let t=await (0,n.I8)({method:"post",url:"/cek_token",headers:{Authorization:"Bearer ".concat(a)}});return e(e=>({...e,dtLogin:t.data})),{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setUpdate:async(a,s)=>{try{let r=await t().setToken(),l=await (0,n.I8)({method:"post",url:"/update/".concat(a),headers:{Authorization:"Bearer ".concat(r)},data:s});return e(e=>({...e,dtLogin:l.data.data})),{status:"success",data:l.data}}catch(e){return console.log(e.response.data),{status:"error",data:e.response.data}}}})));t.Z=i},6008:function(e,t,a){e.exports=a(4e3)}},function(e){e.O(0,[6680,4288,1053,9253,7698,1744],function(){return e(e.s=7714)}),_N_E=e.O()}]);