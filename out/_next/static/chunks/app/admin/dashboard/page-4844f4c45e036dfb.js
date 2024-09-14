(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8427],{1425:function(t,e,a){Promise.resolve().then(a.bind(a,49))},49:function(t,e,a){"use strict";a.r(e);var r=a(9268),n=a(3770),s=a(3827),l=a(2173),o=a(3222),c=a(1778),u=a(6006),i=a(8136);e.default=t=>{var e,a,d;let{setRuanganAll:m,dtRuangan:h}=(0,o.Z)(),{setMatkulAll:f,dtMatkul:p}=(0,l.Z)(),{setDosenAll:x,dtDosenAll:v}=(0,s.Z)();return(0,u.useEffect)(()=>{m({}),f({}),x({})},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)("p",{className:"text-center text-sm md:text-lg text-font-1",children:"(Sistem Informasi Laporan Perkuliahan Fakultas Ekonomi)"})}),(0,r.jsxs)("div",{className:"flex gap-4 flex-wrap",children:[(0,r.jsxs)("div",{className:"flex flex-col bg-primary/10 p-4 px-8 rounded-md gap-1",children:[(0,r.jsx)(i.DC2,{className:"text-2xl text-primary"}),(0,r.jsx)(n.Z,{endValue:null==h?void 0:null===(e=h.data)||void 0===e?void 0:e.length,addClass:"text-2xl",animationConfig:c.vc.slow}),(0,r.jsx)("h6",{children:"Jumlah Ruangan"})]}),(0,r.jsxs)("div",{className:"flex flex-col bg-secondary/10 p-4 px-8 rounded-md gap-1",children:[(0,r.jsx)(i.pZ5,{className:"text-2xl text-secondary"}),(0,r.jsx)(n.Z,{endValue:null==p?void 0:null===(a=p.data)||void 0===a?void 0:a.length,addClass:"text-2xl",animationConfig:c.vc.slow}),(0,r.jsx)("h6",{children:"Jumlah Matkul"})]}),(0,r.jsxs)("div",{className:"flex flex-col bg-warning/10 p-4 px-8 rounded-md gap-1",children:[(0,r.jsx)(i.z8x,{className:"text-2xl text-warning"}),(0,r.jsx)(n.Z,{endValue:null==v?void 0:null===(d=v.data)||void 0===d?void 0:d.length,addClass:"text-2xl",animationConfig:c.vc.slow}),(0,r.jsx)("h6",{children:"Jumlah Dosen"})]})]})]})}},3770:function(t,e,a){"use strict";var r=a(9268),n=a(1778);a(6006),e.Z=t=>{let{endValue:e,animationConfig:a,addClass:s}=t,[l,o]=(0,n.YD)({once:!0}),c=(0,n.q_)({number:o?e:0,from:{number:0},config:a,delay:1e3});return(0,r.jsx)(n.q.span,{ref:l,className:s,children:c.number.to(t=>Math.floor(t))})}},3415:function(t,e,a){"use strict";a.d(e,{I8:function(){return s},Sj:function(){return l},_n:function(){return n},cB:function(){return c},hi:function(){return o}});var r=a(4214);let n="http://127.0.0.1:8000",s=r.Z.create({baseURL:"".concat(n,"/auth")}),l=r.Z.create({baseURL:"".concat(n,"/crud")}),o=r.Z.create({baseURL:"".concat(n,"/api")});r.Z.create({baseURL:"".concat(n,"/storage")});let c=r.Z.create({baseURL:"".concat("http://127.0.0.1:8010","/api")})},3827:function(t,e,a){"use strict";var r=a(2561),n=a(4475),s=a(3415);let l=(0,r.Ue)((0,n.mW)((t,e)=>({dtDosen:[],dtDosenAll:[],setDosen:async e=>{let{page:a=1,limit:r=10,search:n}=e;try{let e=await (0,s.cB)({method:"get",url:"/dosen",params:{limit:r,page:a,search:n}});return t(t=>({...t,dtDosen:e.data.data})),{status:"berhasil",data:e.data}}catch(t){return{status:"error",error:t.response.data}}},setDosenAll:async e=>{let{search:a,prodi_id:r}=e;try{let e=await (0,s.cB)({method:"get",url:"/dosen/all",params:{search:a,prodi_id:r}});return t(t=>({...t,dtDosenAll:e.data})),{status:"berhasil",data:e.data}}catch(t){return{status:"error",error:t.response.data}}},setShowDosen:async e=>{try{let a=await (0,s.cB)({method:"get",url:"/dosen/".concat(e)});return t(t=>({...t,showDosen:a.data.data})),{status:"berhasil",data:a.data}}catch(t){var a;return{status:"error",error:null===(a=t.response)||void 0===a?void 0:a.data}}}})));e.Z=l},2173:function(t,e,a){"use strict";var r=a(2561),n=a(4475),s=a(3415);let l=(0,r.Ue)((0,n.mW)((t,e)=>({dtMatkul:[],setMatkul:async e=>{let{page:a=1,limit:r=10,search:n}=e;try{let e=await (0,s.cB)({method:"get",url:"/matkul",params:{limit:r,page:a,search:n}});return t(t=>({...t,dtMatkul:e.data})),{status:"berhasil",data:e.data}}catch(t){return{status:"error",error:t.response.data}}},setMatkulAll:async e=>{let{search:a}=e;try{let e=await (0,s.cB)({method:"get",url:"/matkul/all",params:{search:a}});return t(t=>({...t,dtMatkul:e.data})),{status:"berhasil",data:e.data}}catch(t){return{status:"error",error:t.response.data}}}})));e.Z=l},3222:function(t,e,a){"use strict";var r=a(2561),n=a(4475),s=a(3415);let l=(0,r.Ue)((0,n.mW)((t,e)=>({dtRuangan:[],setRuangan:async e=>{let{page:a=1,limit:r=10,search:n}=e;try{let e=await (0,s.cB)({method:"get",url:"/ruangan",params:{limit:r,page:a,search:n}});return t(t=>({...t,dtRuangan:e.data})),{status:"berhasil",data:e.data}}catch(t){return{status:"error",error:t.response.data}}},setRuanganAll:async e=>{let{search:a}=e;try{let e=await (0,s.cB)({method:"get",url:"/ruangan/all",params:{search:a}});return t(t=>({...t,dtRuangan:e.data})),{status:"berhasil",data:e.data}}catch(t){return{status:"error",error:t.response.data}}}})));e.Z=l},3270:function(t,e,a){"use strict";a.d(e,{w_:function(){return c}});var r=a(6006),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(n),l=function(){return(l=Object.assign||function(t){for(var e,a=1,r=arguments.length;a<r;a++)for(var n in e=arguments[a])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},o=function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(a[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)0>e.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(a[r[n]]=t[r[n]]);return a};function c(t){return function(e){return r.createElement(u,l({attr:l({},t.attr)},e),function t(e){return e&&e.map(function(e,a){return r.createElement(e.tag,l({key:a},e.attr),t(e.child))})}(t.child))}}function u(t){var e=function(e){var a,n=t.attr,s=t.size,c=t.title,u=o(t,["attr","size","title"]),i=s||e.size||"1em";return e.className&&(a=e.className),t.className&&(a=(a?a+" ":"")+t.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,u,{className:a,style:l(l({color:t.color||e.color},e.style),t.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),t.children)};return void 0!==s?r.createElement(s.Consumer,null,function(t){return e(t)}):e(n)}}},function(t){t.O(0,[6680,4288,1778,9253,7698,1744],function(){return t(t.s=1425)}),_N_E=t.O()}]);