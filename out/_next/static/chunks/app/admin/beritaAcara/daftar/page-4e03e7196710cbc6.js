(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5144],{5568:function(e,a,t){Promise.resolve().then(t.bind(t,7549))},7549:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return v}});var r=t(9268),l=t(6006),s=t(8919),n=t(8350),d=t(9700),i=t(6008),o=t(1281),u=t(4439),c=t(1712),h=t(593),m=t(3346),f=t(8136),p=t(5846),x=t.n(p),b=t(1468),w=t(8668),j=e=>{let{setDelete:a,setEdit:t,search:s,tahunWatch:n,semesterWatch:d}=e,{setByTahunSemester:i,dtJadwal:o}=(0,b.Z)(),{setBeritaAcaraByJadwal:u,dtBeritaAcara:p}=(0,w.Z)(),[j,v]=(0,l.useState)(1),[g,y]=(0,l.useState)(10),[N,k]=(0,l.useState)(!0),[_,S]=(0,l.useState)(),Z=c.Z.get("prodi_id"),C=async()=>{k(!0),await i({search:s,tahun:n,semester:d,prodi_id:Z}),k(!1)};(0,l.useMemo)(()=>n&&d&&C(),[n,d,Z]);let L=async()=>{let e=[];null==o||o.map(a=>{e.push(a.id)});let a=e.join(",");e.length>0&&await u({jadwal_id:a})};(0,l.useEffect)(()=>{L()},[JSON.stringify(o)]);let J=(e,a)=>{console.log({dtJadwal:e,dtBeritaAcara:a});let t=null==a?void 0:a.map(a=>{let t=null==e?void 0:e.find(e=>e.id===parseInt(a.jadwal_id));return t?{...a,jadwal:t}:null}).filter(e=>null!==e);S({data:t}),k(!1)};return(0,l.useEffect)(()=>{let e=(null==_?void 0:_.originalData)||(null==_?void 0:_.data),a=e;""!==s.trim()&&(a=null==e?void 0:e.filter(e=>e.jadwal.hari.toLowerCase().includes(s.toLowerCase())||e.jadwal.matkul.nama.toLowerCase().includes(s.toLowerCase())||e.jadwal.matkul.kode.toLowerCase().includes(s.toLowerCase())||e.jadwal.prodi.nama.toLowerCase().includes(s.toLowerCase())));let t={data:a,originalData:e};S(t)},[s]),(0,l.useEffect)(()=>{o.length>0&&J(o,null==p?void 0:p.data)},[JSON.stringify(p),JSON.stringify(o)]),(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:N?(0,r.jsx)(h.Z,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"",children:(0,r.jsx)(m.Z,{headTable:["No","Hari","Mata Kuliah","Kode MK","JML. SKS","Prodi","Aksi"],tableBodies:["jadwal.hari","jadwal.matkul.nama","jadwal.matkul.kode","jadwal.matkul.sks","jadwal.prodi.nama"],dataTable:null==_?void 0:_.data,page:j,limit:g,setEdit:t,setDelete:a,hapus:!1,ubah:!1,costume:e=>(0,r.jsx)(x(),{href:"/admin/beritaAcara/detail?berita_acara_id=".concat(null==e?void 0:e.id,"&jadwal_id=").concat(null==e?void 0:e.jadwal_id),target:"_blank",title:"Lihat Detail",children:(0,r.jsx)(f.LSF,{})})})})})})},v=()=>{let e=(0,i.useRouter)(),a=(0,i.useSearchParams)(),[t,c]=(0,l.useState)(),[h,m]=(0,l.useState)(""),{register:f,control:p,formState:{errors:x},watch:b,setValue:w}=(0,d.cI)(),v=b("tahun"),g=b("semester"),y=a.get("tahun"),N=a.get("semester");return(0,l.useEffect)(()=>{if(y||N)w("tahun",parseInt(y||"")),w("semester",N);else{let a=new Date().getFullYear(),t="Genap";w("tahun",a),w("semester",t),e.push("/admin/beritaAcara/daftar?tahun="+a+"&semester="+t)}return()=>{}},[]),(0,l.useEffect)(()=>(v&&g&&e.push("/admin/beritaAcara/daftar?tahun="+v+"&semester="+g),()=>{}),[v,g]),(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Toaster,{}),(0,r.jsx)("div",{className:"mb-4 flex justify-between",children:(0,r.jsx)("p",{children:"Data berita acara"})}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between gap-4",children:[(0,r.jsx)(o.u,{label:"Semester",defaultOption:"Pilih Semester",register:f,errors:x,name:"semester",options:[{value:"Ganjil",label:"Ganjil"},{value:"Genap",label:"Genap"}],addClass:"w-full"}),(0,r.jsx)(u.Z,{label:"Tahun",name:"tahun",placeholder:"Pilih Tahun",start:new Date().getFullYear()-2,end:new Date().getFullYear(),fromMax:!0,control:p,required:!0,errors:x,addClass:"w-full"})]}),(0,r.jsx)(n.Z,{placeholder:"Cari Berita Acara",onChange:e=>m(e)})]}),(0,r.jsx)(j,{tahunWatch:v,semesterWatch:g,setEdit:e=>{c(e)},search:h})]})}},8350:function(e,a,t){"use strict";var r=t(9268);t(6006),a.Z=e=>{let{placeholder:a,addClass:t,onChange:l,defaultValue:s=""}=e;return(0,r.jsx)("div",{className:t,children:(0,r.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",placeholder:a,onChange:e=>{l(e.target.value)},defaultValue:s})})}},593:function(e,a,t){"use strict";var r=t(9268);t(6006),a.Z=()=>(0,r.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-secondary border-t-transparent shadow-md"})},1281:function(e,a,t){"use strict";t.d(a,{u:function(){return l}});var r=t(9268);t(6006);let l=e=>{let{label:a,register:t,required:l,name:s,placeholder:n,defaultOption:d,options:i=[],errors:o,addClass:u}=e;return(0,r.jsxs)("div",{className:u,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),l&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)("select",{className:"w-full rounded-lg py-2 px-2 bg-white border border-gray-300 focus:outline-none focus:border-secondary",id:a,placeholder:n,...t(s,{required:l}),children:[(0,r.jsx)("option",{value:"",children:d}),i.map((e,a)=>(0,r.jsx)("option",{value:e.value,children:e.label},a))]})}),(null==o?void 0:o.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kosong"]})]})}},4439:function(e,a,t){"use strict";t.d(a,{Z:function(){return h}});var r=t(9268),l=t(6006),s=t(9711),n=t(431),d=t(1389);t(3779),t(8431),t(9855);var i=(0,l.forwardRef)(function(e,a){var t=(0,s.u)(e);return l.createElement(d.S,(0,n.Z)({ref:a},t))}),o=t(5326),u=t.n(o),c=t(9700),h=e=>{let{label:a,start:t=2012,end:s=u()().format("YYYY"),control:n,required:d,name:o,errors:h,addClass:m,menuPosition:f="fixed",placeholder:p="Pilih Tahun",fromMax:x=!1}=e,b=()=>{let e=[];if(x)for(let a=s;a>=t;a--)e.push({value:a,label:a});else for(let a=t;a<=s;a++)e.push({value:a,label:a});return e},[w,j]=(0,l.useState)(null);return(0,l.useEffect)(()=>{"undefined"!=typeof document&&j(document.body)},[]),(0,r.jsxs)("div",{className:m,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),d&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),w&&(0,r.jsx)(c.Qr,{name:o,control:n,rules:{required:d},render:e=>{let{field:{onChange:a,value:t,name:l,ref:s}}=e;return(0,r.jsx)(i,{isClearable:!0,isSearchable:!0,options:b(),placeholder:p,menuPosition:f,menuPortalTarget:document.body,ref:s,value:t?b().find(e=>e.value===t):t,onChange:e=>a(e?e.value:e)})}}),(null==h?void 0:h.type)==="required"&&(0,r.jsx)("p",{className:"text-red-500 font-inter italic text-sm",children:"Tahun tidak boleh kosong"})]})}},3346:function(e,a,t){"use strict";var r=t(9268),l=t(4956),s=t(6008),n=t(8136);a.Z=e=>{(0,s.useRouter)();let a=a=>(e.page-1)*e.limit+a+1;return(0,r.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,r.jsx)("thead",{className:"",children:(0,r.jsx)("tr",{children:e.headTable&&e.headTable.map((e,a)=>(0,r.jsx)("th",{scope:"col",className:"px-6 py-4",children:e},a))})}),(0,r.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((t,s)=>{let{id:d}=t;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:a(s)}),e.tableBodies.map((e,a)=>(0,r.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,l.Z)(t,e)},a)),(0,r.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(t),e.ubah&&(0,r.jsx)(n.Ph1,{onClick:()=>e.setEdit&&e.setEdit(t),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&(0,r.jsx)(n.AuQ,{onClick:()=>(null==e?void 0:e.setDelete)&&(null==e?void 0:e.setDelete({id:d,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},s)})})]})}},3415:function(e,a,t){"use strict";t.d(a,{I8:function(){return s},Sj:function(){return n},VF:function(){return i},_n:function(){return l},hi:function(){return d}});var r=t(4214);let l="https://back.silaku.fstuogp.com",s=r.Z.create({baseURL:"".concat(l,"/auth")}),n=r.Z.create({baseURL:"".concat(l,"/crud")}),d=r.Z.create({baseURL:"".concat(l,"/api")});r.Z.create({baseURL:"".concat(l,"/storage")});let i=r.Z.create({baseURL:"".concat("https://back.edom.fstuogp.com","/api")})},4956:function(e,a,t){"use strict";var r=t(9268);t(6006);var l=t(3415),s=t(6394),n=t.n(s),d=t(5326),i=t.n(d);a.Z=(e,a)=>{var t,s;let d=null===(s=e)||void 0===s?void 0:null===(t=s.thn_angkatan)||void 0===t?void 0:t.substring(2),o=a.split(".");if(Array.isArray(o)){let t=o.length>1?o.pop():o;if(t.includes("mulai_seles")){let a=i()(e.mulai,"HH:mm:ss").format("HH:mm"),t=i()(e.seles,"HH:mm:ss").format("HH:mm");return"".concat(a,"-").concat(t)}if(t.includes("progdi_smt")){let a=e.prodi.singkat,t=e.matkul.semester;return"".concat(a,"-").concat(t)}if(t.includes("NPM_FULL"))return"".concat(e.prodi.kode).concat(d).concat(e.NPM);let s=o.length,u=1,c=o[0];for(;(e=e[c])&&u<s;)c=o[u],u++;return"object"==typeof e?e?e[t]:"":"tgl_mulai"===a||"tgl_selesai"===a||"tgl"===a?i()(e).format("DD/MM/YYYY"):"gambar"===a||"foto"===a?e&&(0,r.jsx)(n(),{src:"".concat(l._n,"/").concat(e),width:100,height:100,alt:""}):"file"===a?e&&(0,r.jsx)("a",{href:"".concat(l._n,"/").concat(e),target:"_blank",children:"Lihat File"}):(0,r.jsx)("p",{className:"capitalize",children:e})}throw"parts is not valid array"}},8668:function(e,a,t){"use strict";var r=t(2561),l=t(4475),s=t(3415);let n=(0,r.Ue)((0,l.mW)((e,a)=>({dtBeritaAcara:[],setBeritaAcaraByJadwal:async a=>{let{jadwal_id:t}=a;try{let a=await (0,s.hi)({method:"get",url:"/berita-acara/byJadwal",params:{jadwal_id:t}});return e(e=>({...e,dtBeritaAcara:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=n},1468:function(e,a,t){"use strict";var r=t(2561),l=t(4475),s=t(3415);let n=(0,r.Ue)((0,l.mW)((e,a)=>({dtJadwal:[],setJadwal:async a=>{let{page:t=1,limit:r=10,search:l,tahun:n,semester:d,prodi_id:i}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal",params:{limit:r,page:t,search:l,tahun:n,semester:d,prodi_id:i}});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalAll:async a=>{let{search:t}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal/all",params:{search:t}});return e(e=>({...e,dtJadwal:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByDosenFull:async a=>{let{tahun:t,semester:r,dosen_id:l}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal/byDosenFull",params:{tahun:t,semester:r,dosen_id:l}});return e(e=>({...e,dtJadwal:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setByTahunSemester:async a=>{let{search:t,tahun:r,semester:l,prodi_id:n}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal/byTahunSemester",params:{search:t,tahun:r,semester:l,prodi_id:n}});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByRps:async a=>{let{tahun:t,semester:r,dosen_id:l}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal/by-rps",params:{dosen_id:l}});return e(e=>({...e,dtJadwal:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setShowJadwal:async a=>{try{let t=await (0,s.VF)({method:"get",url:"/jadwal/".concat(a)});return e(e=>({...e,dtJadwal:t.data.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=n}},function(e){e.O(0,[6680,4550,4288,2772,1092,3725,8487,9253,7698,1744],function(){return e(e.s=5568)}),_N_E=e.O()}]);