(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6558],{5933:function(e,a,t){Promise.resolve().then(t.bind(t,867))},867:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return b}});var r=t(9268),s=t(6006),l=t(593),n=t(5437),d=t(3346),i=t(1468),c=t(6008),o=t(1712),u=e=>{let{setEdit:a,search:t}=e,u=(0,c.useSearchParams)(),{setJadwal:h,dtJadwal:m}=(0,i.Z)(),[f,x]=(0,s.useState)(1),[p,b]=(0,s.useState)(10),[j,g]=(0,s.useState)(!0),v=u.get("semester")||"",w=u.get("tahun")||"",y=o.Z.get("prodi_id"),N=async()=>{g(!0),await h({page:f,limit:p,search:t,semester:v,tahun:w,prodi_id:y}),g(!1)};return(0,s.useEffect)(()=>(v&&w&&N(),()=>{}),[f,p,u,y,v,w]),(0,s.useEffect)(()=>{x(1),N()},[t]),(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:j?(0,r.jsx)(l.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)(d.Z,{headTable:["No","Hari","Jam","Mata Kuliah","Kode MK","JML. SKS","Progdi SMT","Ruangan","Dosen"],tableBodies:["hari","mulai_seles","matkul.nama","matkul.kode","matkul.sks","progdi_smt","ruangan.nama","dosen.nama"],dataTable:m.data,page:f,limit:p,setEdit:a,ubah:!1,hapus:!1})}),(null==m?void 0:m.last_page)>1&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(n.Z,{currentPage:null==m?void 0:m.current_page,totalPages:null==m?void 0:m.last_page,setPage:x})})]})})},h=t(8919),m=t(8350),f=t(1281),x=t(4439),p=t(9700),b=()=>{let e=(0,c.useRouter)(),a=(0,c.useSearchParams)(),[t,l]=(0,s.useState)(!1),[n,d]=(0,s.useState)(!1),[i,o]=(0,s.useState)(),[b,j]=(0,s.useState)(),[g,v]=(0,s.useState)(""),{register:w,control:y,formState:{errors:N},watch:k,setValue:S}=(0,p.cI)(),_=k("tahun"),Z=k("semester"),F=a.get("tahun"),P=a.get("semester");return(0,s.useEffect)(()=>{if(F||P)S("tahun",parseInt(F||"")),S("semester",P);else{let a=new Date().getFullYear(),t="Genap";S("tahun",a),S("semester",t),e.push("/admin/jadwal?tahun="+a+"&semester="+t)}return()=>{}},[]),(0,s.useEffect)(()=>(_&&Z&&e.push("/admin/jadwal?tahun="+_+"&semester="+Z),()=>{}),[_,Z]),(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Toaster,{}),(0,r.jsx)("div",{className:"mb-4 flex justify-between",children:(0,r.jsx)("p",{children:"Berikut adalah jadwal perkuliahan"})}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between gap-4",children:[(0,r.jsx)(f.u,{label:"Semester",defaultOption:"Pilih Semester",register:w,errors:N,name:"semester",options:[{value:"Ganjil",label:"Ganjil"},{value:"Genap",label:"Genap"}],addClass:"w-full"}),(0,r.jsx)(x.Z,{label:"Tahun",name:"tahun",placeholder:"Pilih Tahun",start:new Date().getFullYear()-2,end:new Date().getFullYear(),fromMax:!0,control:y,required:!0,errors:N,addClass:"w-full"})]}),(0,r.jsx)(m.Z,{placeholder:"Cari Hari",onChange:e=>v(e)})]}),(0,r.jsx)(u,{setEdit:e=>{l(!0),j(e)},search:g})]})}},8350:function(e,a,t){"use strict";var r=t(9268);t(6006),a.Z=e=>{let{placeholder:a,addClass:t,onChange:s,defaultValue:l=""}=e;return(0,r.jsx)("div",{className:t,children:(0,r.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",placeholder:a,onChange:e=>{s(e.target.value)},defaultValue:l})})}},593:function(e,a,t){"use strict";var r=t(9268);t(6006),a.Z=()=>(0,r.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-secondary border-t-transparent shadow-md"})},5437:function(e,a,t){"use strict";var r=t(9268);t(6006);var s=t(8136);a.Z=e=>{let{totalPages:a,currentPage:t,setPage:l}=e,n=[];if(a<=5)n=Array.from({length:a},(e,a)=>a+1);else{n=[1,t-1,t,t+1,a],n=(n=Array.from(new Set(n)).sort((e,a)=>e-a)).filter(e=>e>0&&e<=a);for(let e=1;e<n.length-1;e++)n[e]-n[e-1]>1&&(n.splice(e,0,"..."),e++);a-n[n.length-2]>1&&n.splice(n.length-1,0,"...")}return(0,r.jsx)("div",{className:"h-full",children:(0,r.jsxs)("ol",{className:"flex justify-center gap-1 text-xs font-medium",children:[t>1&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>l(t-1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,r.jsx)(s.pjk,{})})}),n.map((e,a)=>"..."===e?(0,r.jsx)("li",{className:"flex items-end text-xl",children:(0,r.jsx)("div",{className:"block h-8 w-8 rounded border border-gray-100 text-center leading-8",children:e})},a):(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>l(e),className:"cursor-pointer block h-8 w-8 rounded border border-gray-100 text-center leading-8 ".concat(e==t?"bg-blue-900 text-white":""),children:e})},a)),t<a&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>l(t+1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,r.jsx)(s.fmn,{})})})]})})}},1281:function(e,a,t){"use strict";t.d(a,{u:function(){return s}});var r=t(9268);t(6006);let s=e=>{let{label:a,register:t,required:s,name:l,placeholder:n,defaultOption:d,options:i=[],errors:c,addClass:o}=e;return(0,r.jsxs)("div",{className:o,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),s&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)("select",{className:"w-full rounded-lg py-2 px-2 bg-white border border-gray-300 focus:outline-none focus:border-secondary",id:a,placeholder:n,...t(l,{required:s}),children:[(0,r.jsx)("option",{value:"",children:d}),i.map((e,a)=>(0,r.jsx)("option",{value:e.value,children:e.label},a))]})}),(null==c?void 0:c.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kosong"]})]})}},4439:function(e,a,t){"use strict";t.d(a,{Z:function(){return h}});var r=t(9268),s=t(6006),l=t(9711),n=t(431),d=t(1389);t(3779),t(8431),t(9855);var i=(0,s.forwardRef)(function(e,a){var t=(0,l.u)(e);return s.createElement(d.S,(0,n.Z)({ref:a},t))}),c=t(5326),o=t.n(c),u=t(9700),h=e=>{let{label:a,start:t=2012,end:l=o()().format("YYYY"),control:n,required:d,name:c,errors:h,addClass:m,menuPosition:f="fixed",placeholder:x="Pilih Tahun",fromMax:p=!1}=e,b=()=>{let e=[];if(p)for(let a=l;a>=t;a--)e.push({value:a,label:a});else for(let a=t;a<=l;a++)e.push({value:a,label:a});return e},[j,g]=(0,s.useState)(null);return(0,s.useEffect)(()=>{"undefined"!=typeof document&&g(document.body)},[]),(0,r.jsxs)("div",{className:m,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),d&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),j&&(0,r.jsx)(u.Qr,{name:c,control:n,rules:{required:d},render:e=>{let{field:{onChange:a,value:t,name:s,ref:l}}=e;return(0,r.jsx)(i,{isClearable:!0,isSearchable:!0,options:b(),placeholder:x,menuPosition:f,menuPortalTarget:document.body,ref:l,value:t?b().find(e=>e.value===t):t,onChange:e=>a(e?e.value:e)})}}),(null==h?void 0:h.type)==="required"&&(0,r.jsx)("p",{className:"text-red-500 font-inter italic text-sm",children:"Tahun tidak boleh kosong"})]})}},3346:function(e,a,t){"use strict";var r=t(9268),s=t(4956),l=t(6008),n=t(8136);a.Z=e=>{(0,l.useRouter)();let a=a=>(e.page-1)*e.limit+a+1;return(0,r.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,r.jsx)("thead",{className:"",children:(0,r.jsx)("tr",{children:e.headTable&&e.headTable.map((e,a)=>(0,r.jsx)("th",{scope:"col",className:"px-6 py-4",children:e},a))})}),(0,r.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((t,l)=>{let{id:d}=t;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:a(l)}),e.tableBodies.map((e,a)=>(0,r.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.Z)(t,e)},a)),(0,r.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(t),e.ubah&&(0,r.jsx)(n.Ph1,{onClick:()=>e.setEdit&&e.setEdit(t),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&(0,r.jsx)(n.AuQ,{onClick:()=>(null==e?void 0:e.setDelete)&&(null==e?void 0:e.setDelete({id:d,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},l)})})]})}},3415:function(e,a,t){"use strict";t.d(a,{I8:function(){return l},Sj:function(){return n},VF:function(){return i},_n:function(){return s},hi:function(){return d}});var r=t(4214);let s="http://127.0.0.1:8000",l=r.Z.create({baseURL:"".concat(s,"/auth")}),n=r.Z.create({baseURL:"".concat(s,"/crud")}),d=r.Z.create({baseURL:"".concat(s,"/api")});r.Z.create({baseURL:"".concat(s,"/storage")});let i=r.Z.create({baseURL:"".concat("https://back.edom.fstuogp.com","/api")})},4956:function(e,a,t){"use strict";var r=t(9268);t(6006);var s=t(3415),l=t(6394),n=t.n(l),d=t(5326),i=t.n(d);a.Z=(e,a)=>{var t,l;let d=null===(l=e)||void 0===l?void 0:null===(t=l.thn_angkatan)||void 0===t?void 0:t.substring(2),c=a.split(".");if(Array.isArray(c)){let t=c.length>1?c.pop():c;if(t.includes("mulai_seles")){let a=i()(e.mulai,"HH:mm:ss").format("HH:mm"),t=i()(e.seles,"HH:mm:ss").format("HH:mm");return"".concat(a,"-").concat(t)}if(t.includes("progdi_smt")){let a=e.prodi.singkat,t=e.matkul.semester;return"".concat(a,"-").concat(t)}if(t.includes("NPM_FULL"))return"".concat(e.prodi.kode).concat(d).concat(e.NPM);let l=c.length,o=1,u=c[0];for(;(e=e[u])&&o<l;)u=c[o],o++;return"object"==typeof e?e?e[t]:"":"tgl_mulai"===a||"tgl_selesai"===a||"tgl"===a?i()(e).format("DD/MM/YYYY"):"gambar"===a||"foto"===a?e&&(0,r.jsx)(n(),{src:"".concat(s._n,"/").concat(e),width:100,height:100,alt:""}):"file"===a?e&&(0,r.jsx)("a",{href:"".concat(s._n,"/").concat(e),target:"_blank",children:"Lihat File"}):(0,r.jsx)("p",{className:"capitalize",children:e})}throw"parts is not valid array"}},1468:function(e,a,t){"use strict";var r=t(2561),s=t(4475),l=t(3415);let n=(0,r.Ue)((0,s.mW)((e,a)=>({dtJadwal:[],setJadwal:async a=>{let{page:t=1,limit:r=10,search:s,tahun:n,semester:d,prodi_id:i}=a;try{let a=await (0,l.VF)({method:"get",url:"/jadwal",params:{limit:r,page:t,search:s,tahun:n,semester:d,prodi_id:i}});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalAll:async a=>{let{search:t}=a;try{let a=await (0,l.VF)({method:"get",url:"/jadwal/all",params:{search:t}});return e(e=>({...e,dtJadwal:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByDosenFull:async a=>{let{tahun:t,semester:r,dosen_id:s}=a;try{let a=await (0,l.VF)({method:"get",url:"/jadwal/byDosenFull",params:{tahun:t,semester:r,dosen_id:s}});return e(e=>({...e,dtJadwal:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setByTahunSemester:async a=>{let{search:t,tahun:r,semester:s,prodi_id:n}=a;try{let a=await (0,l.VF)({method:"get",url:"/jadwal/byTahunSemester",params:{search:t,tahun:r,semester:s,prodi_id:n}});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByRps:async a=>{let{tahun:t,semester:r,dosen_id:s}=a;try{let a=await (0,l.VF)({method:"get",url:"/jadwal/by-rps",params:{dosen_id:s}});return e(e=>({...e,dtJadwal:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setShowJadwal:async a=>{try{let t=await (0,l.VF)({method:"get",url:"/jadwal/".concat(a)});return e(e=>({...e,dtJadwal:t.data.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=n},6008:function(e,a,t){e.exports=t(4e3)}},function(e){e.O(0,[6680,4550,4288,2772,1092,3725,9253,7698,1744],function(){return e(e.s=5933)}),_N_E=e.O()}]);