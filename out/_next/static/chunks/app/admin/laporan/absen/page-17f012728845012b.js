(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3599],{1123:function(e,t,a){Promise.resolve().then(a.bind(a,5947))},5947:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var r=a(9268),s=a(6006),n=a(593),l=a(3346),o=a(2775),i=e=>{let{setDelete:t,setEdit:a,search:i,tahunWatch:c,semesterWatch:u}=e,{setAbsen:d,dtAbsen:h}=(0,o.Z)(),[p,m]=(0,s.useState)(1),[f,b]=(0,s.useState)(10),[x,v]=(0,s.useState)(!0),g=async()=>{await d({page:p,limit:f,search:i,tahun:c,semester:u}),v(!1)};return(0,s.useEffect)(()=>(c&&u&&g(),()=>{}),[p,f,c,u]),(0,s.useEffect)(()=>{m(1),g()},[i]),(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:x?(0,r.jsx)(n.Z,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"",children:(0,r.jsx)(l.Z,{headTable:["No","Hari","Mata Kuliah","Kode MK","JML. SKS","ABSEN"],tableBodies:["jadwal.hari","jadwal.matkul.nama","jadwal.matkul.kode","jadwal.matkul.sks","file"],dataTable:null==h?void 0:h.data,page:p,limit:f,setEdit:a,setDelete:t,hapus:!1,ubah:!1})})})})},c=a(9442),u=a(8350),d=a(9700),h=a(6008),p=a(1281),m=a(4439),f=()=>{let e=(0,h.useRouter)(),t=(0,h.useSearchParams)(),{removeData:a}=(0,o.Z)(),[n,l]=(0,s.useState)(!1),[f,b]=(0,s.useState)(!1),[x,v]=(0,s.useState)(),[g,j]=(0,s.useState)(),[w,y]=(0,s.useState)(""),k=async e=>{let{id:t,isDelete:r}=e;if(v(t),r){let{data:e}=await a(x);(0,c.Z)({event:e}),b(!1)}else b(!0)},{register:N,control:A,formState:{errors:S},watch:_,setValue:Z}=(0,d.cI)(),C=_("tahun"),T=_("semester"),D=t.get("tahun"),U=t.get("semester");return(0,s.useEffect)(()=>{if(D||U)Z("tahun",parseInt(D||"")),Z("semester",U);else{let t=new Date().getFullYear(),a="Genap";Z("tahun",t),Z("semester",a),e.push("/admin/laporan/absen?tahun="+t+"&semester="+a)}return()=>{}},[]),(0,s.useEffect)(()=>(C&&T&&e.push("/admin/laporan/absen?tahun="+C+"&semester="+T),()=>{}),[C,T]),(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-4 flex justify-between",children:(0,r.jsx)("p",{children:"Laporan Absensi"})}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between gap-4",children:[(0,r.jsx)(p.u,{label:"Semester",defaultOption:"Pilih Semester",register:N,errors:S,name:"semester",options:[{value:"Ganjil",label:"Ganjil"},{value:"Genap",label:"Genap"}],addClass:"w-full"}),(0,r.jsx)(m.Z,{label:"Tahun",name:"tahun",placeholder:"Pilih Tahun",start:new Date().getFullYear()-2,end:new Date().getFullYear(),fromMax:!0,control:A,required:!0,errors:S,addClass:"w-full"})]}),(0,r.jsx)(u.Z,{placeholder:"Cari Absen",onChange:e=>y(e)})]}),(0,r.jsx)(i,{setDelete:k,setEdit:e=>{l(!0),j(e)},search:w,tahunWatch:C,semesterWatch:T})]})}},8350:function(e,t,a){"use strict";var r=a(9268);a(6006),t.Z=e=>{let{placeholder:t,addClass:a,onChange:s,defaultValue:n=""}=e;return(0,r.jsx)("div",{className:a,children:(0,r.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",placeholder:t,onChange:e=>{s(e.target.value)},defaultValue:n})})}},593:function(e,t,a){"use strict";var r=a(9268);a(6006),t.Z=()=>(0,r.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-secondary border-t-transparent shadow-md"})},1281:function(e,t,a){"use strict";a.d(t,{u:function(){return s}});var r=a(9268);a(6006);let s=e=>{let{label:t,register:a,required:s,name:n,placeholder:l,defaultOption:o,options:i=[],errors:c,addClass:u}=e;return(0,r.jsxs)("div",{className:u,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:t}),s&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)("select",{className:"w-full rounded-lg py-2 px-2 bg-white border border-gray-300 focus:outline-none focus:border-secondary",id:t,placeholder:l,...a(n,{required:s}),children:[(0,r.jsx)("option",{value:"",children:o}),i.map((e,t)=>(0,r.jsx)("option",{value:e.value,children:e.label},t))]})}),(null==c?void 0:c.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kosong"]})]})}},4439:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r=a(9268),s=a(6006),n=a(9711),l=a(431),o=a(1389);a(3779),a(8431),a(9855);var i=(0,s.forwardRef)(function(e,t){var a=(0,n.u)(e);return s.createElement(o.S,(0,l.Z)({ref:t},a))}),c=a(5326),u=a.n(c),d=a(9700),h=e=>{let{label:t,start:a=2012,end:n=u()().format("YYYY"),control:l,required:o,name:c,errors:h,addClass:p,menuPosition:m="fixed",placeholder:f="Pilih Tahun",fromMax:b=!1}=e,x=()=>{let e=[];if(b)for(let t=n;t>=a;t--)e.push({value:t,label:t});else for(let t=a;t<=n;t++)e.push({value:t,label:t});return e},[v,g]=(0,s.useState)(null);return(0,s.useEffect)(()=>{"undefined"!=typeof document&&g(document.body)},[]),(0,r.jsxs)("div",{className:p,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:t}),o&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),v&&(0,r.jsx)(d.Qr,{name:c,control:l,rules:{required:o},render:e=>{let{field:{onChange:t,value:a,name:s,ref:n}}=e;return(0,r.jsx)(i,{isClearable:!0,isSearchable:!0,options:x(),placeholder:f,menuPosition:m,menuPortalTarget:document.body,ref:n,value:a?x().find(e=>e.value===a):a,onChange:e=>t(e?e.value:e)})}}),(null==h?void 0:h.type)==="required"&&(0,r.jsx)("p",{className:"text-red-500 font-inter italic text-sm",children:"Tahun tidak boleh kosong"})]})}},3346:function(e,t,a){"use strict";var r=a(9268),s=a(4956),n=a(6008),l=a(8136);t.Z=e=>{(0,n.useRouter)();let t=t=>(e.page-1)*e.limit+t+1;return(0,r.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,r.jsx)("thead",{className:"",children:(0,r.jsx)("tr",{children:e.headTable&&e.headTable.map((e,t)=>(0,r.jsx)("th",{scope:"col",className:"px-6 py-4",children:e},t))})}),(0,r.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((a,n)=>{let{id:o}=a;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:t(n)}),e.tableBodies.map((e,t)=>(0,r.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.Z)(a,e)},t)),(0,r.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(a),e.ubah&&(0,r.jsx)(l.Ph1,{onClick:()=>e.setEdit(a),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&(0,r.jsx)(l.AuQ,{onClick:()=>(null==e?void 0:e.setDelete)&&(null==e?void 0:e.setDelete({id:o,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},n)})})]})}},3415:function(e,t,a){"use strict";a.d(t,{I8:function(){return n},Sj:function(){return l},_n:function(){return s},hi:function(){return o}});var r=a(4214);let s="http://127.0.0.1:8000",n=r.Z.create({baseURL:"".concat(s,"/auth")}),l=r.Z.create({baseURL:"".concat(s,"/crud")}),o=r.Z.create({baseURL:"".concat(s,"/api")});r.Z.create({baseURL:"".concat(s,"/storage")})},4956:function(e,t,a){"use strict";var r=a(9268);a(6006);var s=a(3415),n=a(6394),l=a.n(n),o=a(5326),i=a.n(o);t.Z=(e,t)=>{var a,n;let o=null===(n=e)||void 0===n?void 0:null===(a=n.thn_angkatan)||void 0===a?void 0:a.substring(2),c=t.split(".");if(Array.isArray(c)){let a=c.length>1?c.pop():c;if(a.includes("mulai_seles")){let t=i()(e.mulai,"HH:mm:ss").format("HH:mm"),a=i()(e.seles,"HH:mm:ss").format("HH:mm");return"".concat(t,"-").concat(a)}if(a.includes("progdi_smt")){let t=e.prodi.singkat,a=e.matkul.semester;return"".concat(t,"-").concat(a)}if(a.includes("NPM_FULL"))return"".concat(e.prodi.kode).concat(o).concat(e.NPM);let n=c.length,u=1,d=c[0];for(;(e=e[d])&&u<n;)d=c[u],u++;return"object"==typeof e?e?e[a]:"":"tgl_mulai"===t||"tgl_selesai"===t||"tgl"===t?i()(e).format("DD/MM/YYYY"):"gambar"===t||"foto"===t?e&&(0,r.jsx)(l(),{src:"".concat(s._n,"/").concat(e),width:100,height:100,alt:""}):"file"===t?e&&(0,r.jsx)("a",{href:"".concat(s._n,"/").concat(e),target:"_blank",children:"Lihat File"}):(0,r.jsx)("p",{className:"capitalize",children:e})}throw"parts is not valid array"}},4406:function(e,t,a){"use strict";var r=a(2561),s=a(4475),n=a(3415),l=a(1712);let o=(0,r.Ue)((0,s.mW)((e,t)=>({setToken:async()=>{let e=l.Z.get("token");return e},setLogin:async e=>{try{let t=await (0,n.I8)({method:"post",url:"/login",data:e});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let e=await t().setToken();try{let t=await (0,n.I8)({method:"post",url:"/cek-token",headers:{Authorization:"Bearer ".concat(e)}});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}})));t.Z=o},2775:function(e,t,a){"use strict";var r=a(2561),s=a(4475),n=a(3415),l=a(4406);let o=(0,r.Ue)((0,s.mW)((e,t)=>({setFormData:e=>{let t=new FormData;return t.append("jadwal_id",e.jadwal_id),t.append("file",e.file),t},dtAbsen:[],showAbsen:[],setAbsen:async t=>{let{page:a=1,limit:r=10,search:s,dosen_id:o,tahun:i,semester:c}=t;try{let t=await l.Z.getState().setToken(),u=await (0,n.Sj)({method:"get",url:"/upload/absen",headers:{Authorization:"Bearer ".concat(t)},params:{limit:r,page:a,search:s,dosen_id:o,tahun:i,semester:c}});return e(e=>({...e,dtAbsen:u.data.data})),{status:"berhasil",data:u.data}}catch(e){var u;return{status:"error",error:null===(u=e.response)||void 0===u?void 0:u.data}}},setShowAbsen:async t=>{try{let a=await l.Z.getState().setToken(),r=await (0,n.Sj)({method:"get",url:"/upload/absen/".concat(t),headers:{Authorization:"Bearer ".concat(a)}});return console.log({response:r}),e(e=>({...e,showAbsen:r.data.data})),{status:"berhasil",data:r.data}}catch(e){var a;return{status:"error",error:null===(a=e.response)||void 0===a?void 0:a.data}}},addData:async a=>{let r=(null==a?void 0:a.file)?t().setFormData(a):a;try{let t=await l.Z.getState().setToken(),a=await (0,n.Sj)({method:"post",url:"/upload/absen",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"multipart/form-data"},data:r});return e(e=>({dtAbsen:{last_page:e.dtAbsen.last_page,current_page:e.dtAbsen.current_page,data:[a.data.data,...e.dtAbsen.data]}})),{status:"berhasil tambah",data:a.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async t=>{try{let a=await l.Z.getState().setToken(),r=await (0,n.Sj)({method:"delete",url:"/upload/absen/".concat(t),headers:{Authorization:"Bearer ".concat(a)}});return e(e=>({dtAbsen:{last_page:e.dtAbsen.last_page,current_page:e.dtAbsen.current_page,data:e.dtAbsen.data.filter(e=>e.id!==t)}})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(a,r)=>{delete r.id;let s=(null==r?void 0:r.file)?t().setFormData(r):r,o=await l.Z.getState().setToken();try{let t=await (0,n.Sj)({url:"/upload/absen/".concat(a),method:"post",headers:(null==r?void 0:r.file)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(o)}:{Authorization:"Bearer ".concat(o)},data:s,params:{_method:"PUT"}});return e(e=>({dtAbsen:{last_page:e.dtAbsen.last_page,current_page:e.dtAbsen.current_page,data:e.dtAbsen.data.map(e=>e.id===a?{...e,...t.data.data}:e)}})),{status:"berhasil update",data:t.data}}catch(e){return{status:"error",data:e.response.data}}}})));t.Z=o},9442:function(e,t,a){"use strict";var r=a(8919);t.Z=e=>{let{event:t,position:a}=e;switch(t.type){case"success":r.ZP.success(t.message,{duration:4e3,position:a});break;case"error":r.ZP.error(t.message,{duration:4e3,position:a})}}},6008:function(e,t,a){e.exports=a(4e3)},1712:function(e,t,a){"use strict";/*! js-cookie v3.0.5 | MIT */function r(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)e[r]=a[r]}return e}a.d(t,{Z:function(){return s}});var s=function e(t,a){function s(e,s,n){if("undefined"!=typeof document){"number"==typeof(n=r({},a,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var o in n)n[o]&&(l+="; "+o,!0!==n[o]&&(l+="="+n[o].split(";")[0]));return document.cookie=e+"="+t.write(s,e)+l}}return Object.create({set:s,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var a=document.cookie?document.cookie.split("; "):[],r={},s=0;s<a.length;s++){var n=a[s].split("="),l=n.slice(1).join("=");try{var o=decodeURIComponent(n[0]);if(r[o]=t.read(l,o),e===o)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){s(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(a)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[6680,4550,4288,1092,9700,3725,9253,7698,1744],function(){return e(e.s=1123)}),_N_E=e.O()}]);