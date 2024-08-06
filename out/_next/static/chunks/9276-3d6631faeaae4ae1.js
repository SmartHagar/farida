"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9276],{366:function(a,t,e){var r=e(9268);e(6006),t.Z=a=>{let{text:t,onClick:e,addClass:s}=a;return(0,r.jsx)("button",{onClick:e,className:"bg-primary rounded-lg px-4 py-2 text-white w-fit cursor-pointer hover:shadow-sm hover:shadow-primary ".concat(s),children:t})}},8350:function(a,t,e){var r=e(9268);e(6006),t.Z=a=>{let{placeholder:t,addClass:e,onChange:s,defaultValue:d=""}=a;return(0,r.jsx)("div",{className:e,children:(0,r.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",placeholder:t,onChange:a=>{s(a.target.value)},defaultValue:d})})}},593:function(a,t,e){var r=e(9268);e(6006),t.Z=()=>(0,r.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-secondary border-t-transparent shadow-md"})},5437:function(a,t,e){var r=e(9268);e(6006);var s=e(8136);t.Z=a=>{let{totalPages:t,currentPage:e,setPage:d}=a,n=[];if(t<=5)n=Array.from({length:t},(a,t)=>t+1);else{n=[1,e-1,e,e+1,t],n=(n=Array.from(new Set(n)).sort((a,t)=>a-t)).filter(a=>a>0&&a<=t);for(let a=1;a<n.length-1;a++)n[a]-n[a-1]>1&&(n.splice(a,0,"..."),a++);t-n[n.length-2]>1&&n.splice(n.length-1,0,"...")}return(0,r.jsx)("div",{className:"h-full",children:(0,r.jsxs)("ol",{className:"flex justify-center gap-1 text-xs font-medium",children:[e>1&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>d(e-1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,r.jsx)(s.pjk,{})})}),n.map((a,t)=>"..."===a?(0,r.jsx)("li",{className:"flex items-end text-xl",children:(0,r.jsx)("div",{className:"block h-8 w-8 rounded border border-gray-100 text-center leading-8",children:a})},t):(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>d(a),className:"cursor-pointer block h-8 w-8 rounded border border-gray-100 text-center leading-8 ".concat(a==e?"bg-blue-900 text-white":""),children:a})},t)),e<t&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>d(e+1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,r.jsx)(s.fmn,{})})})]})})}},3346:function(a,t,e){var r=e(9268),s=e(4956),d=e(6008),n=e(8136);t.Z=a=>{(0,d.useRouter)();let t=t=>(a.page-1)*a.limit+t+1;return(0,r.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,r.jsx)("thead",{className:"",children:(0,r.jsx)("tr",{children:a.headTable&&a.headTable.map((a,t)=>(0,r.jsx)("th",{scope:"col",className:"px-6 py-4",children:a},t))})}),(0,r.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:a.dataTable&&a.dataTable.map((e,d)=>{let{id:o}=e;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:t(d)}),a.tableBodies.map((a,t)=>(0,r.jsx)("td",{className:"px-6 py-4",children:(0,s.Z)(e,a)},t)),(0,r.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[a.costume&&a.costume(e),a.ubah&&(0,r.jsx)(n.Ph1,{onClick:()=>a.setEdit&&a.setEdit(e),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),a.hapus&&(0,r.jsx)(n.AuQ,{onClick:()=>(null==a?void 0:a.setDelete)&&(null==a?void 0:a.setDelete({id:o,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},d)})})]})}},3415:function(a,t,e){e.d(t,{I8:function(){return d},Sj:function(){return n},VF:function(){return l},_n:function(){return s},hi:function(){return o}});var r=e(4214);let s="https://back.silaku.fstuogp.com",d=r.Z.create({baseURL:"".concat(s,"/auth")}),n=r.Z.create({baseURL:"".concat(s,"/crud")}),o=r.Z.create({baseURL:"".concat(s,"/api")});r.Z.create({baseURL:"".concat(s,"/storage")});let l=r.Z.create({baseURL:"".concat("https://back.edom.fstuogp.com","/api")})},4956:function(a,t,e){var r=e(9268),s=e(3415),d=e(6394),n=e.n(d),o=e(5326),l=e.n(o);t.Z=(a,t)=>{var e,d;let o=null===(d=a)||void 0===d?void 0:null===(e=d.thn_angkatan)||void 0===e?void 0:e.substring(2),c=t.split(".");if(Array.isArray(c)){let e=c.length>1?c.pop():c;if(e.includes("mulai_seles")){let t=l()(a.mulai,"HH:mm:ss").format("HH:mm"),e=l()(a.seles,"HH:mm:ss").format("HH:mm");return"".concat(t,"-").concat(e)}if(e.includes("progdi_smt")){let t=a.prodi.singkat,e=a.matkul.semester;return"".concat(t,"-").concat(e)}if(e.includes("NPM_FULL"))return"".concat(a.prodi.kode).concat(o).concat(a.NPM);let d=c.length,i=1,u=c[0];for(;(a=a[u])&&i<d;)u=c[i],i++;return"object"==typeof a?a?a[e]:"":"tgl_mulai"===t||"tgl_selesai"===t||"tgl"===t?l()(a).format("DD/MM/YYYY"):"gambar"===t||"foto"===t||"paraf"===t?a&&(0,r.jsx)(n(),{src:"".concat(s._n,"/").concat(a),width:100,height:100,alt:""}):"file"===t?a&&(0,r.jsx)("a",{href:"".concat(s._n,"/").concat(a),target:"_blank",children:"Lihat File"}):(0,r.jsx)("p",{className:"capitalize",children:a})}throw"parts is not valid array"}},1468:function(a,t,e){var r=e(2561),s=e(4475),d=e(3415);let n=(0,r.Ue)((0,s.mW)((a,t)=>({dtJadwal:[],setJadwal:async t=>{let{page:e=1,limit:r=10,search:s,tahun:n,semester:o,prodi_id:l}=t;try{let t=await (0,d.VF)({method:"get",url:"/jadwal",params:{limit:r,page:e,search:s,tahun:n,semester:o,prodi_id:l}});return a(a=>({...a,dtJadwal:t.data.data})),{status:"berhasil",data:t.data}}catch(a){return{status:"error",error:a.response.data}}},setJadwalAll:async t=>{let{search:e}=t;try{let t=await (0,d.VF)({method:"get",url:"/jadwal/all",params:{search:e}});return a(a=>({...a,dtJadwal:t.data})),{status:"berhasil",data:t.data}}catch(a){return{status:"error",error:a.response.data}}},setJadwalByDosenFull:async t=>{let{tahun:e,semester:r,dosen_id:s}=t;try{let t=await (0,d.VF)({method:"get",url:"/jadwal/byDosenFull",params:{tahun:e,semester:r,dosen_id:s}});return a(a=>({...a,dtJadwal:null==t?void 0:t.data})),{status:"berhasil",data:t.data}}catch(a){return{status:"error",error:a.response.data}}},setByTahunSemester:async t=>{let{search:e,tahun:r,semester:s,prodi_id:n}=t;try{let t=await (0,d.VF)({method:"get",url:"/jadwal/byTahunSemester",params:{search:e,tahun:r,semester:s,prodi_id:n}});return a(a=>({...a,dtJadwal:t.data.data})),{status:"berhasil",data:t.data}}catch(a){return{status:"error",error:a.response.data}}},setJadwalByRps:async t=>{let{tahun:e,semester:r,dosen_id:s}=t;try{let t=await (0,d.VF)({method:"get",url:"/jadwal/by-rps",params:{dosen_id:s}});return a(a=>({...a,dtJadwal:null==t?void 0:t.data})),{status:"berhasil",data:t.data}}catch(a){return{status:"error",error:a.response.data}}},setShowJadwal:async t=>{try{let e=await (0,d.VF)({method:"get",url:"/jadwal/".concat(t)});return a(a=>({...a,dtJadwal:e.data.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}}})));t.Z=n},4406:function(a,t,e){var r=e(2561),s=e(4475),d=e(3415),n=e(1712);let o=(0,r.Ue)((0,s.mW)((a,t)=>({dtLogin:[],setToken:async()=>{let a=n.Z.get("token");return a},setLogin:async a=>{try{let t=await (0,d.I8)({method:"post",url:"/login",data:a});return{status:"success",data:t.data}}catch(a){return{status:"error",error:a.response.data}}},cekToken:async()=>{let e=await t().setToken();try{let t=await (0,d.I8)({method:"post",url:"/cek-token",headers:{Authorization:"Bearer ".concat(e)}});return a(a=>({...a,dtLogin:t.data.data})),{status:"success",data:t.data}}catch(a){return{status:"error",error:a.response.data}}},setUpdate:async(e,r)=>{try{let s=await t().setToken(),n=await (0,d.I8)({method:"post",url:"/update/".concat(e),headers:{Authorization:"Bearer ".concat(s)},data:r});return a(a=>({...a,dtLogin:n.data.data})),{status:"success",data:n.data}}catch(a){return console.log(a.response.data),{status:"error",data:a.response.data}}}})));t.Z=o},769:function(a,t,e){var r=e(2561),s=e(4475),d=e(3415),n=e(4406);let o=(0,r.Ue)((0,s.mW)((a,t)=>({setFormData:a=>{let t=new FormData;return t.append("berita_acara_id",a.berita_acara_id),t.append("tgl",a.tgl),t.append("materi",a.materi),t.append("jmlh_mhs",a.jmlh_mhs),t.append("sistem",a.sistem),t.append("foto",a.foto),t},dtDetBeritaAcara:[],showDetBeritaAcara:[],setDetBeritaAcara:async t=>{let{page:e=1,limit:r=10,search:s,berita_acara_id:o}=t;try{let t=await n.Z.getState().setToken(),l=await (0,d.Sj)({method:"get",url:"/det-berita-acara",headers:{Authorization:"Bearer ".concat(t)},params:{limit:r,page:e,search:s,berita_acara_id:o}});return a(a=>({...a,dtDetBeritaAcara:l.data.data})),{status:"berhasil",data:l.data}}catch(a){var l;return{status:"error",error:null===(l=a.response)||void 0===l?void 0:l.data}}},setShowDetBeritaAcara:async t=>{try{let e=await n.Z.getState().setToken(),r=await (0,d.Sj)({method:"get",url:"/det-berita-acara/".concat(t),headers:{Authorization:"Bearer ".concat(e)}});return a(a=>({...a,showDetBeritaAcara:r.data.data})),{status:"berhasil",data:r.data}}catch(a){var e;return{status:"error",error:null===(e=a.response)||void 0===e?void 0:e.data}}},addData:async e=>{let r=(null==e?void 0:e.foto)?t().setFormData(e):e;try{let t=await n.Z.getState().setToken(),e=await (0,d.Sj)({method:"post",url:"/det-berita-acara",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"multipart/form-data"},data:r});return a(a=>({dtDetBeritaAcara:{last_page:a.dtDetBeritaAcara.last_page,current_page:a.dtDetBeritaAcara.current_page,data:[e.data.data,...a.dtDetBeritaAcara.data]}})),{status:"berhasil tambah",data:e.data}}catch(a){return{status:"error",data:a.response.data}}},removeData:async t=>{try{let e=await n.Z.getState().setToken(),r=await (0,d.Sj)({method:"delete",url:"/det-berita-acara/".concat(t),headers:{Authorization:"Bearer ".concat(e)}});return a(a=>({dtDetBeritaAcara:{last_page:a.dtDetBeritaAcara.last_page,current_page:a.dtDetBeritaAcara.current_page,data:a.dtDetBeritaAcara.data.filter(a=>a.id!==t)}})),{status:"berhasil hapus",data:r.data}}catch(a){return{status:"error",data:a.response.data}}},updateData:async(e,r)=>{delete r.id;let s=(null==r?void 0:r.foto)?t().setFormData(r):r,o=await n.Z.getState().setToken();try{let t=await (0,d.Sj)({url:"/det-berita-acara/".concat(e),method:"post",headers:(null==r?void 0:r.foto)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(o)}:{Authorization:"Bearer ".concat(o)},data:s,params:{_method:"PUT"}});return a(a=>({dtDetBeritaAcara:{last_page:a.dtDetBeritaAcara.last_page,current_page:a.dtDetBeritaAcara.current_page,data:a.dtDetBeritaAcara.data.map(a=>a.id===e?{...a,...t.data.data}:a)}})),{status:"berhasil update",data:t.data}}catch(a){return{status:"error",data:a.response.data}}}})));t.Z=o},9442:function(a,t,e){var r=e(8919);t.Z=a=>{let{event:t,position:e}=a;switch(t.type){case"success":r.default.success(t.message,{duration:4e3,position:e});break;case"error":r.default.error(t.message,{duration:4e3,position:e})}}}}]);