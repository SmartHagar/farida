(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2373],{9367:function(e,t,a){Promise.resolve().then(a.bind(a,8919)),Promise.resolve().then(a.bind(a,3889))},3889:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r=a(9268),s=a(2985),n=a(9442),i=a(6006),l=a(9700),o=a(3938);a(6760);var d=e=>{let{register:t,errors:a,control:n,watch:i,setValue:l,dtLogin:d}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{label:"Email",name:"email",register:t,required:!0,minLength:3,errors:a.email,type:"email",addClass:"col-span-4 lg:col-span-3"}),(0,r.jsx)(o.Z,{label:"Password",name:"password",register:t,required:!0,minLength:3,errors:a.password,type:"password",addClass:"col-span-4 lg:col-span-3"}),(0,r.jsx)(o.Z,{label:"Konfirmasi Password",name:"confirmPwd",register:t,required:!0,minLength:3,errors:a.confirmPwd,type:"password",addClass:"col-span-4 lg:col-span-3"})]})},c=a(593),u=a(4406),m=a(6110),p=a(8039),h=a(541),x=e=>{let{}=e,{cekToken:t,dtLogin:a}=(0,u.Z)();(0,i.useEffect)(()=>(t(),()=>{}),[t]),console.log({dtLogin:a});let[o,x]=(0,i.useState)(!1),{setUpdate:f}=(0,u.Z)(),g=p.Ry().shape({password:p.Z_().min(3,"Password harus lebih dari 3 karakter"),confirmPwd:p.Z_().oneOf([p.iH("password")],"Konfirmasi Password tidak sama"),email:p.Z_().email("Email tidak valid")}),{register:b,handleSubmit:k,setValue:v,control:y,formState:{errors:j},watch:w}=(0,l.cI)({resolver:(0,m.X)(g)}),N=()=>{var e,t;v("email",null==a?void 0:null===(t=a.data)||void 0===t?void 0:null===(e=t.user)||void 0===e?void 0:e.email),v("password",""),v("confirmPwd","")};(0,i.useEffect)(()=>{N()},[a]);let Z=async e=>{var r;let s=null==a?void 0:null===(r=a.user)||void 0===r?void 0:r.id;x(!0),console.log({row:e});let{data:i}=await f(s,e);console.log({data:i}),(0,n.Z)({event:i}),(null==i?void 0:i.type)!=="success"||N(),t(),setTimeout(()=>{x(!1)},1500)};return(0,r.jsxs)("form",{onSubmit:k(Z),children:[(0,r.jsx)(s.Z,{name:"id",register:b,type:"hidden"}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-2 mb-4",children:(0,r.jsx)(d,{register:b,errors:j,control:y,watch:w,setValue:v,dtLogin:a})}),(0,r.jsx)("div",{children:o?(0,r.jsx)(c.Z,{}):(0,r.jsx)(h.Z,{onClick:k(Z),children:"Simpan"})})]})}},541:function(e,t,a){"use strict";var r=a(9268);t.Z=e=>{let{children:t,onClick:a,addClass:s="bg-primary hover:bg-primary/80 text-white",type:n="submit"}=e;return(0,r.jsx)("button",{type:n,className:"rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ".concat(s," "),onClick:a,children:t})}},2985:function(e,t,a){"use strict";var r=a(9268);t.Z=e=>{let{label:t,register:a,required:s,name:n,minLength:i,maxLength:l,errors:o,valueAsNumber:d,type:c="text",readOnly:u,placeholder:m,autoComplete:p="on",addClass:h,value:x,defaultValue:f,max:g,min:b,step:k,labelCss:v}=e;return(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)("label",{htmlFor:n,className:"text-sm font-medium text-gray-700 tracking-wide ".concat(v),children:t}),s&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary",type:c,id:n,readOnly:u,placeholder:m,autoComplete:p,...a(n,{required:s,minLength:i,maxLength:l,valueAsNumber:d,max:g,min:b,step:k}),defaultValue:f,value:x})}),(null==o?void 0:o.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kosong"]}),(null==o?void 0:o.type)==="minLength"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kurang dari ",i," karakter"]}),(null==o?void 0:o.type)==="maxLength"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh lebih dari ",l," karakter"]}),(null==o?void 0:o.type)==="pattern"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," hanya boleh angka."]}),(null==o?void 0:o.type)==="max"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh lebih dari ",g,"."]}),(null==o?void 0:o.type)==="min"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kurang dari ",b,"."]})]})}},3938:function(e,t,a){"use strict";var r=a(9268),s=a(6006),n=a(8136);t.Z=e=>{let{label:t,register:a,required:i,name:l,minLength:o,maxLength:d,errors:c,valueAsNumber:u,type:m="password",readOnly:p,placeholder:h,autoComplete:x="on",addClass:f,value:g,labelCss:b}=e,[k,v]=(0,s.useState)(!1);return(0,r.jsxs)("div",{className:f,children:[(0,r.jsx)("label",{htmlFor:l,className:"text-sm font-medium text-gray-700 tracking-wide ".concat(b),children:t}),i&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{className:"w-full text-base text-gray-700  px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",type:"password"===m?k?"text":"password":m,id:l,readOnly:p,placeholder:h,autoComplete:x,...a(l,{required:i,minLength:o,maxLength:d,valueAsNumber:u}),value:g}),"password"===m&&(0,r.jsx)("div",{className:"absolute right-2 top-0 flex items-center h-full cursor-pointer text-secondary",onClick:()=>{v(!k)},children:k?(0,r.jsx)(n.rCC,{size:20}):(0,r.jsx)(n.I$m,{size:20})})]}),(null==c?void 0:c.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kosong"]}),(null==c?void 0:c.type)==="minLength"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kurang dari ",o," karakter"]}),(null==c?void 0:c.type)==="maxLength"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh lebih dari ",d," karakter"]}),(null==c?void 0:c.type)==="pattern"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," hanya boleh angka."]})]})}},593:function(e,t,a){"use strict";var r=a(9268);a(6006),t.Z=()=>(0,r.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-primary border-t-transparent shadow-md"})},3415:function(e,t,a){"use strict";a.d(t,{I8:function(){return n},Sj:function(){return i},_n:function(){return s},cB:function(){return o},hi:function(){return l}});var r=a(4214);let s="https://back.silaku.fstuogp.com",n=r.Z.create({baseURL:"".concat(s,"/auth")}),i=r.Z.create({baseURL:"".concat(s,"/crud")}),l=r.Z.create({baseURL:"".concat(s,"/api")});r.Z.create({baseURL:"".concat(s,"/storage")});let o=r.Z.create({baseURL:"".concat("https://back.edom.fstuogp.com","/api")})},4406:function(e,t,a){"use strict";var r=a(2561),s=a(4475),n=a(3415),i=a(1712);let l=(0,r.Ue)((0,s.mW)((e,t)=>({dtLogin:[],setToken:async()=>{let e=i.Z.get("token");return e},setLogin:async e=>{try{let t=await (0,n.I8)({method:"post",url:"/login",data:e});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let a=await t().setToken();try{let t=await (0,n.I8)({method:"post",url:"/cek_token",headers:{Authorization:"Bearer ".concat(a)}});return e(e=>({...e,dtLogin:t.data})),{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setUpdate:async(a,r)=>{try{let s=await t().setToken(),i=await (0,n.I8)({method:"post",url:"/update/".concat(a),headers:{Authorization:"Bearer ".concat(s)},data:r});return e(e=>({...e,dtLogin:i.data.data})),{status:"success",data:i.data}}catch(e){return console.log(e.response.data),{status:"error",data:e.response.data}}}})));t.Z=l},9442:function(e,t,a){"use strict";var r=a(8919);t.Z=e=>{let{event:t,position:a}=e;switch(t.type){case"success":r.default.success(t.message,{duration:4e3,position:a});break;case"error":r.default.error(t.message,{duration:4e3,position:a})}}}},function(e){e.O(0,[6680,4288,1053,3088,295,9253,7698,1744],function(){return e(e.s=9367)}),_N_E=e.O()}]);