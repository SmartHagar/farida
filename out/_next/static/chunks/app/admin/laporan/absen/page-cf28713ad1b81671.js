(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3599],{6345:function(e,a,t){Promise.resolve().then(t.bind(t,5947))},5947:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return w}});var r=t(9268),s=t(6006),l=t(1712),n=t(593),d=t(3346),o=t(2775),u=t(1468),i=e=>{let{setDelete:a,setEdit:t,search:i,tahunWatch:c,semesterWatch:h}=e,{setShowAbsen:m,showAbsen:p}=(0,o.Z)(),{setByTahunSemester:f,dtJadwal:b}=(0,u.Z)(),[w,g]=(0,s.useState)(1),[x,j]=(0,s.useState)(10),[y,v]=(0,s.useState)(!0),[k,N]=(0,s.useState)(),S=l.Z.get("prodi_id"),Z=async()=>{v(!0),await f({search:i,tahun:c,semester:h,prodi_id:S}),v(!1)};(0,s.useMemo)(()=>c&&h&&Z(),[c,h,S]);let A=async()=>{let e=[];null==b||b.map(a=>{e.push(a.id)});let a=e.join(",");e.length>0&&await m({jadwal_id:a})};(0,s.useEffect)(()=>{A()},[JSON.stringify(b)]);let _=(e,a)=>{console.log({dtJadwal:e,showAbsen:a});let t=null==a?void 0:a.map(a=>{let t=null==e?void 0:e.find(e=>e.id===parseInt(a.jadwal_id));return t?{...a,jadwal:t}:null}).filter(e=>null!==e);N({data:t}),v(!1)};return(0,s.useEffect)(()=>{let e=(null==k?void 0:k.originalData)||(null==k?void 0:k.data),a=e;""!==i.trim()&&(a=null==e?void 0:e.filter(e=>e.jadwal.hari.toLowerCase().includes(i.toLowerCase())||e.jadwal.matkul.nama.toLowerCase().includes(i.toLowerCase())||e.jadwal.matkul.kode.toLowerCase().includes(i.toLowerCase())));let t={data:a,originalData:e};N(t)},[i]),(0,s.useEffect)(()=>{b.length>0&&_(b,p)},[JSON.stringify(p),JSON.stringify(b)]),(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:y?(0,r.jsx)(n.Z,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"",children:(0,r.jsx)(d.Z,{headTable:["No","Hari","Mata Kuliah","Kode MK","JML. SKS","ABSEN"],tableBodies:["jadwal.hari","jadwal.matkul.nama","jadwal.matkul.kode","jadwal.matkul.sks","file"],dataTable:null==k?void 0:k.data,page:w,limit:x,setEdit:t,setDelete:a,hapus:!1,ubah:!1})})})})},c=t(9442),h=t(8350),m=t(9700),p=t(6008),f=t(1281),b=t(4439),w=()=>{let e=(0,p.useRouter)(),a=(0,p.useSearchParams)(),{removeData:t}=(0,o.Z)(),[l,n]=(0,s.useState)(!1),[d,u]=(0,s.useState)(!1),[w,g]=(0,s.useState)(),[x,j]=(0,s.useState)(),[y,v]=(0,s.useState)(""),k=async e=>{let{id:a,isDelete:r}=e;if(g(a),r){let{data:e}=await t(w);(0,c.Z)({event:e}),u(!1)}else u(!0)},{register:N,control:S,formState:{errors:Z},watch:A,setValue:_}=(0,m.cI)(),T=A("tahun"),D=A("semester"),L=a.get("tahun"),C=a.get("semester");return(0,s.useEffect)(()=>{if(L||C)_("tahun",parseInt(L||"")),_("semester",C);else{let a=new Date().getFullYear(),t="Genap";_("tahun",a),_("semester",t),e.push("/admin/laporan/absen?tahun="+a+"&semester="+t)}return()=>{}},[]),(0,s.useEffect)(()=>(T&&D&&e.push("/admin/laporan/absen?tahun="+T+"&semester="+D),()=>{}),[T,D]),(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-4 flex justify-between",children:(0,r.jsx)("p",{children:"Laporan Absensi"})}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between gap-4",children:[(0,r.jsx)(f.u,{label:"Semester",defaultOption:"Pilih Semester",register:N,errors:Z,name:"semester",options:[{value:"Ganjil",label:"Ganjil"},{value:"Genap",label:"Genap"}],addClass:"w-full"}),(0,r.jsx)(b.Z,{label:"Tahun",name:"tahun",placeholder:"Pilih Tahun",start:new Date().getFullYear()-2,end:new Date().getFullYear(),fromMax:!0,control:S,required:!0,errors:Z,addClass:"w-full"})]}),(0,r.jsx)(h.Z,{placeholder:"Cari Absen",onChange:e=>v(e)})]}),(0,r.jsx)(i,{setDelete:k,setEdit:e=>{n(!0),j(e)},search:y,tahunWatch:T,semesterWatch:D})]})}},8350:function(e,a,t){"use strict";var r=t(9268);t(6006),a.Z=e=>{let{placeholder:a,addClass:t,onChange:s,defaultValue:l=""}=e;return(0,r.jsx)("div",{className:t,children:(0,r.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",placeholder:a,onChange:e=>{s(e.target.value)},defaultValue:l})})}},593:function(e,a,t){"use strict";var r=t(9268);t(6006),a.Z=()=>(0,r.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-secondary border-t-transparent shadow-md"})},1281:function(e,a,t){"use strict";t.d(a,{u:function(){return s}});var r=t(9268);t(6006);let s=e=>{let{label:a,register:t,required:s,name:l,placeholder:n,defaultOption:d,options:o=[],errors:u,addClass:i}=e;return(0,r.jsxs)("div",{className:i,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),s&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)("select",{className:"w-full rounded-lg py-2 px-2 bg-white border border-gray-300 focus:outline-none focus:border-secondary",id:a,placeholder:n,...t(l,{required:s}),children:[(0,r.jsx)("option",{value:"",children:d}),o.map((e,a)=>(0,r.jsx)("option",{value:e.value,children:e.label},a))]})}),(null==u?void 0:u.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kosong"]})]})}},4439:function(e,a,t){"use strict";t.d(a,{Z:function(){return h}});var r=t(9268),s=t(6006),l=t(9711),n=t(431),d=t(1389);t(3779),t(8431),t(9855);var o=(0,s.forwardRef)(function(e,a){var t=(0,l.u)(e);return s.createElement(d.S,(0,n.Z)({ref:a},t))}),u=t(5326),i=t.n(u),c=t(9700),h=e=>{let{label:a,start:t=2012,end:l=i()().format("YYYY"),control:n,required:d,name:u,errors:h,addClass:m,menuPosition:p="fixed",placeholder:f="Pilih Tahun",fromMax:b=!1}=e,w=()=>{let e=[];if(b)for(let a=l;a>=t;a--)e.push({value:a,label:a});else for(let a=t;a<=l;a++)e.push({value:a,label:a});return e},[g,x]=(0,s.useState)(null);return(0,s.useEffect)(()=>{"undefined"!=typeof document&&x(document.body)},[]),(0,r.jsxs)("div",{className:m,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),d&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),g&&(0,r.jsx)(c.Qr,{name:u,control:n,rules:{required:d},render:e=>{let{field:{onChange:a,value:t,name:s,ref:l}}=e;return(0,r.jsx)(o,{isClearable:!0,isSearchable:!0,options:w(),placeholder:f,menuPosition:p,menuPortalTarget:document.body,ref:l,value:t?w().find(e=>e.value===t):t,onChange:e=>a(e?e.value:e)})}}),(null==h?void 0:h.type)==="required"&&(0,r.jsx)("p",{className:"text-red-500 font-inter italic text-sm",children:"Tahun tidak boleh kosong"})]})}},3346:function(e,a,t){"use strict";var r=t(9268),s=t(4956),l=t(6008),n=t(8136);a.Z=e=>{(0,l.useRouter)();let a=a=>(e.page-1)*e.limit+a+1;return(0,r.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,r.jsx)("thead",{className:"",children:(0,r.jsx)("tr",{children:e.headTable&&e.headTable.map((e,a)=>(0,r.jsx)("th",{scope:"col",className:"px-6 py-4",children:e},a))})}),(0,r.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((t,l)=>{let{id:d}=t;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:a(l)}),e.tableBodies.map((e,a)=>(0,r.jsx)("td",{className:"px-6 py-4",children:(0,s.Z)(t,e)},a)),(0,r.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(t),e.ubah&&(0,r.jsx)(n.Ph1,{onClick:()=>e.setEdit&&e.setEdit(t),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&(0,r.jsx)(n.AuQ,{onClick:()=>(null==e?void 0:e.setDelete)&&(null==e?void 0:e.setDelete({id:d,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},l)})})]})}},3415:function(e,a,t){"use strict";t.d(a,{I8:function(){return l},Sj:function(){return n},VF:function(){return o},_n:function(){return s},hi:function(){return d}});var r=t(4214);let s="https://back.silaku.fstuogp.com",l=r.Z.create({baseURL:"".concat(s,"/auth")}),n=r.Z.create({baseURL:"".concat(s,"/crud")}),d=r.Z.create({baseURL:"".concat(s,"/api")});r.Z.create({baseURL:"".concat(s,"/storage")});let o=r.Z.create({baseURL:"".concat("https://back.edom.fstuogp.com","/api")})},4956:function(e,a,t){"use strict";var r=t(9268);t(6006);var s=t(3415),l=t(6394),n=t.n(l),d=t(5326),o=t.n(d);a.Z=(e,a)=>{var t,l;let d=null===(l=e)||void 0===l?void 0:null===(t=l.thn_angkatan)||void 0===t?void 0:t.substring(2),u=a.split(".");if(Array.isArray(u)){let t=u.length>1?u.pop():u;if(t.includes("mulai_seles")){let a=o()(e.mulai,"HH:mm:ss").format("HH:mm"),t=o()(e.seles,"HH:mm:ss").format("HH:mm");return"".concat(a,"-").concat(t)}if(t.includes("progdi_smt")){let a=e.prodi.singkat,t=e.matkul.semester;return"".concat(a,"-").concat(t)}if(t.includes("NPM_FULL"))return"".concat(e.prodi.kode).concat(d).concat(e.NPM);let l=u.length,i=1,c=u[0];for(;(e=e[c])&&i<l;)c=u[i],i++;return"object"==typeof e?e?e[t]:"":"tgl_mulai"===a||"tgl_selesai"===a||"tgl"===a?o()(e).format("DD/MM/YYYY"):"gambar"===a||"foto"===a?e&&(0,r.jsx)(n(),{src:"".concat(s._n,"/").concat(e),width:100,height:100,alt:""}):"file"===a?e&&(0,r.jsx)("a",{href:"".concat(s._n,"/").concat(e),target:"_blank",children:"Lihat File"}):(0,r.jsx)("p",{className:"capitalize",children:e})}throw"parts is not valid array"}},1468:function(e,a,t){"use strict";var r=t(2561),s=t(4475),l=t(3415);let n=(0,r.Ue)((0,s.mW)((e,a)=>({dtJadwal:[],setJadwal:async a=>{let{page:t=1,limit:r=10,search:s,tahun:n,semester:d,prodi_id:o}=a;try{let a=await (0,l.VF)({method:"get",url:"/jadwal",params:{limit:r,page:t,search:s,tahun:n,semester:d,prodi_id:o}});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalAll:async a=>{let{search:t}=a;try{let a=await (0,l.VF)({method:"get",url:"/jadwal/all",params:{search:t}});return e(e=>({...e,dtJadwal:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByDosenFull:async a=>{let{tahun:t,semester:r,dosen_id:s}=a;try{let a=await (0,l.VF)({method:"get",url:"/jadwal/byDosenFull",params:{tahun:t,semester:r,dosen_id:s}});return e(e=>({...e,dtJadwal:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setByTahunSemester:async a=>{let{search:t,tahun:r,semester:s,prodi_id:n}=a;try{let a=await (0,l.VF)({method:"get",url:"/jadwal/byTahunSemester",params:{search:t,tahun:r,semester:s,prodi_id:n}});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByRps:async a=>{let{tahun:t,semester:r,dosen_id:s}=a;try{let a=await (0,l.VF)({method:"get",url:"/jadwal/by-rps",params:{dosen_id:s}});return e(e=>({...e,dtJadwal:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setShowJadwal:async a=>{try{let t=await (0,l.VF)({method:"get",url:"/jadwal/".concat(a)});return e(e=>({...e,dtJadwal:t.data.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=n},4406:function(e,a,t){"use strict";var r=t(2561),s=t(4475),l=t(3415),n=t(1712);let d=(0,r.Ue)((0,s.mW)((e,a)=>({dtLogin:[],setToken:async()=>{let e=n.Z.get("token");return e},setLogin:async e=>{try{let a=await (0,l.I8)({method:"post",url:"/login",data:e});return{status:"success",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let t=await a().setToken();try{let a=await (0,l.I8)({method:"post",url:"/cek-token",headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({...e,dtLogin:a.data.data})),{status:"success",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setUpdate:async(t,r)=>{try{let s=await a().setToken(),n=await (0,l.I8)({method:"post",url:"/update/".concat(t),headers:{Authorization:"Bearer ".concat(s)},data:r});return e(e=>({...e,dtLogin:n.data.data})),{status:"success",data:n.data}}catch(e){return console.log(e.response.data),{status:"error",data:e.response.data}}}})));a.Z=d},2775:function(e,a,t){"use strict";var r=t(2561),s=t(4475),l=t(3415),n=t(4406);let d=(0,r.Ue)((0,s.mW)((e,a)=>({setFormData:e=>{let a=new FormData;return a.append("jadwal_id",e.jadwal_id),a.append("file",e.file),a},dtAbsen:[],showAbsen:[],setAbsen:async a=>{let{page:t=1,limit:r=10}=a;try{let a=await n.Z.getState().setToken(),s=await (0,l.Sj)({method:"get",url:"/upload/absen",headers:{Authorization:"Bearer ".concat(a)},params:{limit:r,page:t}});return e(e=>({...e,dtAbsen:s.data.data})),{status:"berhasil",data:s.data}}catch(e){var s;return{status:"error",error:null===(s=e.response)||void 0===s?void 0:s.data}}},setShowAbsen:async a=>{let{id:t,jadwal_id:r}=a;try{let a=await n.Z.getState().setToken(),s=await (0,l.Sj)({method:"get",url:"/upload/absen/".concat(t),headers:{Authorization:"Bearer ".concat(a)},params:{jadwal_id:r}});return e(e=>({...e,showAbsen:s.data.data})),{status:"berhasil",data:s.data}}catch(e){var s;return{status:"error",error:null===(s=e.response)||void 0===s?void 0:s.data}}},addData:async t=>{let r=(null==t?void 0:t.file)?a().setFormData(t):t;try{let a=await n.Z.getState().setToken(),t=await (0,l.Sj)({method:"post",url:"/upload/absen",headers:{Authorization:"Bearer ".concat(a),"Content-Type":"multipart/form-data"},data:r});return e(e=>({showAbsen:[t.data.data,...e.showAbsen]})),{status:"berhasil tambah",data:t.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async a=>{try{let t=await n.Z.getState().setToken(),r=await (0,l.Sj)({method:"delete",url:"/upload/absen/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({dtAbsen:{last_page:e.dtAbsen.last_page,current_page:e.dtAbsen.current_page,data:e.dtAbsen.data.filter(e=>e.id!==a)}})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(t,r)=>{delete r.id;let s=(null==r?void 0:r.file)?a().setFormData(r):r,d=await n.Z.getState().setToken();try{let a=await (0,l.Sj)({url:"/upload/absen/".concat(t),method:"post",headers:(null==r?void 0:r.file)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(d)}:{Authorization:"Bearer ".concat(d)},data:s,params:{_method:"PUT"}});return e(e=>({showAbsen:e.showAbsen.map(e=>e.id===t?{...e,...a.data.data}:e)})),{status:"berhasil update",data:a.data}}catch(e){return{status:"error",data:e.response.data}}}})));a.Z=d},9442:function(e,a,t){"use strict";var r=t(8919);a.Z=e=>{let{event:a,position:t}=e;switch(a.type){case"success":r.default.success(a.message,{duration:4e3,position:t});break;case"error":r.default.error(a.message,{duration:4e3,position:t})}}},6008:function(e,a,t){e.exports=t(4e3)}},function(e){e.O(0,[6680,4550,4288,2772,1092,3725,9253,7698,1744],function(){return e(e.s=6345)}),_N_E=e.O()}]);