(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3690],{366:function(e,t,a){"use strict";var r=a(9268);t.Z=e=>{let{text:t,onClick:a,addClass:s,type:n}=e;return(0,r.jsx)("button",{type:n||"submit",onClick:a,className:"bg-primary rounded-lg px-4 py-2 text-white w-fit cursor-pointer hover:shadow-sm hover:shadow-primary ".concat(s),children:t})}},8860:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(9268),s=a(6006),n=a(9700),l=a(3371),d=a.n(l),o=e=>{let{text:t,onClick:a,addClass:s,type:n}=e;return(0,r.jsx)("button",{type:n||"button",onClick:a,className:"bg-secondary rounded-lg px-4 py-2 text-white w-fit cursor-pointer hover:shadow-sm hover:shadow-secondary ".concat(s),children:t})},c=e=>{let{control:t,required:a,name:l,errors:c,addClass:i,label:u,clear:h=!1,setValue:p,watch:m}=e,x=(0,s.useRef)(null),[f,b]=(0,s.useState)("black"),[g,y]=(0,s.useState)(1),v=m(l),j=e=>e?e.getTrimmedCanvas().toDataURL("image/png"):null;return(0,s.useEffect)(()=>{if(!v){var e;null===(e=x.current)||void 0===e||e.clear()}},[v]),(0,r.jsxs)("div",{className:"flex flex-col ".concat(i),children:[(0,r.jsxs)("label",{className:"text-sm font-medium text-gray-700 tracking-wide block",children:[u,a&&(0,r.jsx)("span",{className:"ml-1 text-red-600 ",children:"*"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("label",{className:"mr-2",children:"Warna Pena:"}),(0,r.jsx)("input",{type:"color",value:f,onChange:e=>b(e.target.value),className:"border border-gray-300 rounded"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("label",{className:"mr-2",children:"Ketebalan Pena:"}),(0,r.jsx)("input",{type:"range",min:"1",max:"10",value:g,onChange:e=>y(Number(e.target.value)),className:"border border-gray-300 rounded"}),(0,r.jsxs)("span",{className:"ml-2",children:[g,"px"]})]}),(0,r.jsx)(n.Qr,{name:l,control:t,rules:{required:a},render:e=>{let{field:t}=e;return(0,r.jsx)(d(),{penColor:f,minWidth:g,maxWidth:g,canvasProps:{className:"sigCanvas border border-primary w-full rounded-xl mt-4"},ref:e=>{x.current=e},onEnd:()=>t.onChange(j(x.current))})}}),h&&(0,r.jsx)(o,{type:"button",text:"Hapus ".concat(u),onClick:()=>{x.current&&(p(l,""),x.current.clear())},addClass:"mt-2"}),(null==c?void 0:c.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[u," tidak boleh kosong"]})]})}},2985:function(e,t,a){"use strict";var r=a(9268);a(6006),t.Z=e=>{let{label:t,register:a,required:s,name:n,minLength:l,maxLength:d,errors:o,valueAsNumber:c,type:i="text",readOnly:u,placeholder:h,autoComplete:p="on",addClass:m,value:x,labelCss:f="text-gray-700"}=e;return(0,r.jsxs)("div",{className:m,children:[(0,r.jsx)("label",{htmlFor:n,className:"text-sm tracking-wide ".concat(f),children:t}),s&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)("input",{className:"".concat(u&&"cursor-not-allowed bg-gray-100"," w-full text-base px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"),type:i,id:n,readOnly:u,placeholder:h,autoComplete:p,...a(n,{required:s,minLength:l,maxLength:d,valueAsNumber:c}),value:x})}),(null==o?void 0:o.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kosong"]}),(null==o?void 0:o.type)==="minLength"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kurang dari ",l," karakter"]}),(null==o?void 0:o.type)==="maxLength"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh lebih dari ",d," karakter"]}),(null==o?void 0:o.type)==="pattern"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," hanya boleh angka."]})]})}},8350:function(e,t,a){"use strict";var r=a(9268);a(6006),t.Z=e=>{let{placeholder:t,addClass:a,onChange:s,defaultValue:n=""}=e;return(0,r.jsx)("div",{className:a,children:(0,r.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",placeholder:t,onChange:e=>{s(e.target.value)},defaultValue:n})})}},7565:function(e,t,a){"use strict";var r=a(9268),s=a(1023);a(7354);var n=a(8293),l=a(6519);a(3728),a(5918),a(142),t.Z=e=>{let{index:t,setIndex:a,slides:d}=e,o=null==d?void 0:d.findIndex(e=>e.identifier===t);return(0,r.jsx)(s.ZP,{index:o>=0?o:0,slides:d,open:o>=0,close:()=>a("-1"),plugins:[n.Z,l.Z]})}},6598:function(e,t,a){"use strict";var r=a(3415);let s=(e,t)=>"string"==typeof t?t:"object"==typeof t&&"path"in t?e[t.path]:"";t.Z=e=>{let{data:t,pictures:a,title:n,description:l,width:d,height:o}=e,c=[];return null==t||t.forEach((e,t)=>{a.forEach(a=>{e[a]&&c.push({src:"".concat(r._n,"/").concat(e[a]),title:s(e,n),description:s(e,l),width:d||3840,height:o||5760,identifier:"".concat(t,"-").concat(a)})})}),c}},593:function(e,t,a){"use strict";var r=a(9268);a(6006),t.Z=()=>(0,r.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-secondary border-t-transparent shadow-md"})},7808:function(e,t,a){"use strict";var r=a(9268);a(6006);var s=a(8136);t.Z=e=>{let{showModal:t,setShowModal:a,children:n,title:l,width:d=""}=e;return(0,r.jsx)("div",{className:"",children:t&&(0,r.jsx)("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,r.jsxs)("div",{className:"bg-white p-5 rounded-xl w-[500px] h-min mt-[10%] max-h-[70%] overflow-hidden flex flex-col lg:w-[700px]",style:{width:d},children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.2] mb-4 pb-2",children:[(0,r.jsx)("h5",{className:"text-xl font-roboto",children:l}),(0,r.jsx)(s.C7Q,{className:"cursor-pointer hover:text-primary",onClick:()=>a(!1)})]}),(0,r.jsx)("div",{className:"overflow-auto",children:n})]})})})}},5437:function(e,t,a){"use strict";var r=a(9268);a(6006);var s=a(8136);t.Z=e=>{let{totalPages:t,currentPage:a,setPage:n}=e,l=[];if(t<=5)l=Array.from({length:t},(e,t)=>t+1);else{l=[1,a-1,a,a+1,t],l=(l=Array.from(new Set(l)).sort((e,t)=>e-t)).filter(e=>e>0&&e<=t);for(let e=1;e<l.length-1;e++)l[e]-l[e-1]>1&&(l.splice(e,0,"..."),e++);t-l[l.length-2]>1&&l.splice(l.length-1,0,"...")}return(0,r.jsx)("div",{className:"h-full",children:(0,r.jsxs)("ol",{className:"flex justify-center gap-1 text-xs font-medium",children:[a>1&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>n(a-1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,r.jsx)(s.pjk,{})})}),l.map((e,t)=>"..."===e?(0,r.jsx)("li",{className:"flex items-end text-xl",children:(0,r.jsx)("div",{className:"block h-8 w-8 rounded border border-gray-100 text-center leading-8",children:e})},t):(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>n(e),className:"cursor-pointer block h-8 w-8 rounded border border-gray-100 text-center leading-8 ".concat(e==a?"bg-blue-900 text-white":""),children:e})},t)),a<t&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>n(a+1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,r.jsx)(s.fmn,{})})})]})})}},3346:function(e,t,a){"use strict";var r=a(9268),s=a(4956),n=a(6008),l=a(8136);t.Z=e=>{(0,n.useRouter)();let t=t=>(e.page-1)*e.limit+t+1;return(0,r.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,r.jsx)("thead",{className:"",children:(0,r.jsx)("tr",{children:e.headTable&&e.headTable.map((e,t)=>(0,r.jsx)("th",{scope:"col",className:"px-6 py-4",children:e},t))})}),(0,r.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((a,n)=>{let{id:d}=a;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:t(n)}),e.tableBodies.map((t,l)=>(0,r.jsx)("td",{className:"px-6 py-4",children:(0,s.Z)(a,t,n,e.setIndexBox)},l)),(0,r.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(a),e.ubah&&(0,r.jsx)(l.Ph1,{onClick:()=>e.setEdit&&e.setEdit(a),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&(0,r.jsx)(l.AuQ,{onClick:()=>(null==e?void 0:e.setDelete)&&(null==e?void 0:e.setDelete({id:d,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},n)})})]})}},3415:function(e,t,a){"use strict";a.d(t,{I8:function(){return n},Sj:function(){return l},VF:function(){return o},_n:function(){return s},hi:function(){return d}});var r=a(4214);let s="https://back.silaku.fstuogp.com",n=r.Z.create({baseURL:"".concat(s,"/auth")}),l=r.Z.create({baseURL:"".concat(s,"/crud")}),d=r.Z.create({baseURL:"".concat(s,"/api")});r.Z.create({baseURL:"".concat(s,"/storage")});let o=r.Z.create({baseURL:"".concat("https://back.edom.fstuogp.com","/api")})},4956:function(e,t,a){"use strict";var r=a(9268),s=a(3415),n=a(6394),l=a.n(n),d=a(5326),o=a.n(d);t.Z=(e,t,a,n)=>{var d,c;let i=null===(c=e)||void 0===c?void 0:null===(d=c.thn_angkatan)||void 0===d?void 0:d.substring(2),u=t.split(".");if(Array.isArray(u)){let d=u.length>1?u.pop():u;if(d.includes("mulai_seles")){let t=o()(e.mulai,"HH:mm:ss").format("HH:mm"),a=o()(e.seles,"HH:mm:ss").format("HH:mm");return"".concat(t,"-").concat(a)}if(d.includes("progdi_smt")){let t=e.prodi.singkat,a=e.matkul.semester;return"".concat(t,"-").concat(a)}if(d.includes("NPM_FULL"))return"".concat(e.prodi.kode).concat(i).concat(e.NPM);let c=u.length,h=1,p=u[0];for(;(e=e[p])&&h<c;)p=u[h],h++;return"object"==typeof e?e?e[d]:"":"tgl_mulai"===t||"tgl_selesai"===t||"tgl"===t?o()(e).format("DD/MM/YYYY"):["gambar","foto","paraf","paraf_mhs","paraf_dosen","paraf_pemeriksa"].includes(t)?e&&!["undefined",null,void 0].includes(e)?(0,r.jsx)(l(),{src:"".concat(s._n,"/").concat(e),width:100,height:100,className:"cursor-pointer",alt:"",onClick:n?()=>n("".concat(a,"-").concat(t)):void 0}):null:"file"===t?e&&(0,r.jsx)("a",{href:"".concat(s._n,"/").concat(e),target:"_blank",children:"Lihat File"}):(0,r.jsx)("p",{className:"capitalize",children:e})}throw"parts is not valid array"}},1468:function(e,t,a){"use strict";var r=a(2561),s=a(4475),n=a(3415);let l=(0,r.Ue)((0,s.mW)((e,t)=>({dtJadwal:[],setJadwal:async t=>{let{page:a=1,limit:r=10,search:s,tahun:l,semester:d,prodi_id:o}=t;try{let t=await (0,n.VF)({method:"get",url:"/jadwal",params:{limit:r,page:a,search:s,tahun:l,semester:d,prodi_id:o}});return e(e=>({...e,dtJadwal:t.data.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalAll:async t=>{let{search:a}=t;try{let t=await (0,n.VF)({method:"get",url:"/jadwal/all",params:{search:a}});return e(e=>({...e,dtJadwal:t.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByDosenFull:async t=>{let{tahun:a,semester:r,dosen_id:s}=t;try{let t=await (0,n.VF)({method:"get",url:"/jadwal/byDosenFull",params:{tahun:a,semester:r,dosen_id:s}});return e(e=>({...e,dtJadwal:null==t?void 0:t.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setByTahunSemester:async t=>{let{search:a,tahun:r,semester:s,prodi_id:l}=t;try{let t=await (0,n.VF)({method:"get",url:"/jadwal/byTahunSemester",params:{search:a,tahun:r,semester:s,prodi_id:l}});return e(e=>({...e,dtJadwal:t.data.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByRps:async t=>{let{tahun:a,semester:r,dosen_id:s}=t;try{let t=await (0,n.VF)({method:"get",url:"/jadwal/by-rps",params:{dosen_id:s}});return e(e=>({...e,dtJadwal:null==t?void 0:t.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setShowJadwal:async t=>{try{let a=await (0,n.VF)({method:"get",url:"/jadwal/".concat(t)});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}}})));t.Z=l},4406:function(e,t,a){"use strict";var r=a(2561),s=a(4475),n=a(3415),l=a(1712);let d=(0,r.Ue)((0,s.mW)((e,t)=>({dtLogin:[],setToken:async()=>{let e=l.Z.get("token");return e},setLogin:async e=>{try{let t=await (0,n.I8)({method:"post",url:"/login",data:e});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let a=await t().setToken();try{let t=await (0,n.I8)({method:"post",url:"/cek-token",headers:{Authorization:"Bearer ".concat(a)}});return e(e=>({...e,dtLogin:t.data.data})),{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setUpdate:async(a,r)=>{try{let s=await t().setToken(),l=await (0,n.I8)({method:"post",url:"/update/".concat(a),headers:{Authorization:"Bearer ".concat(s)},data:r});return e(e=>({...e,dtLogin:l.data.data})),{status:"success",data:l.data}}catch(e){return console.log(e.response.data),{status:"error",data:e.response.data}}}})));t.Z=d},769:function(e,t,a){"use strict";var r=a(2561),s=a(4475),n=a(3415),l=a(4406);let d=(0,r.Ue)((0,s.mW)((e,t)=>({setFormData:e=>{let t=new FormData;return t.append("berita_acara_id",e.berita_acara_id),t.append("tgl",e.tgl),t.append("materi",e.materi),t.append("jmlh_mhs",e.jmlh_mhs),t.append("sistem",e.sistem),t.append("paraf_pemeriksa",e.paraf_pemeriksa),t.append("paraf_dosen",e.paraf_dosen),t.append("paraf_mhs",e.paraf_mhs),t.append("foto",e.foto),t},dtDetBeritaAcara:[],showDetBeritaAcara:[],setDetBeritaAcara:async t=>{let{page:a=1,limit:r=10,search:s,berita_acara_id:d}=t;try{let t=await l.Z.getState().setToken(),o=await (0,n.Sj)({method:"get",url:"/det-berita-acara",headers:{Authorization:"Bearer ".concat(t)},params:{limit:r,page:a,search:s,berita_acara_id:d}});return e(e=>({...e,dtDetBeritaAcara:o.data.data})),{status:"berhasil",data:o.data}}catch(e){var o;return{status:"error",error:null===(o=e.response)||void 0===o?void 0:o.data}}},setShowDetBeritaAcara:async t=>{try{let a=await l.Z.getState().setToken(),r=await (0,n.Sj)({method:"get",url:"/det-berita-acara/".concat(t),headers:{Authorization:"Bearer ".concat(a)}});return e(e=>({...e,showDetBeritaAcara:r.data.data})),{status:"berhasil",data:r.data}}catch(e){var a;return{status:"error",error:null===(a=e.response)||void 0===a?void 0:a.data}}},addData:async a=>{let r=(null==a?void 0:a.foto)?t().setFormData(a):a;try{let t=await l.Z.getState().setToken(),a=await (0,n.Sj)({method:"post",url:"/det-berita-acara",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"multipart/form-data"},data:r});return e(e=>({dtDetBeritaAcara:{last_page:e.dtDetBeritaAcara.last_page,current_page:e.dtDetBeritaAcara.current_page,data:[a.data.data,...e.dtDetBeritaAcara.data]}})),{status:"berhasil tambah",data:a.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async t=>{try{let a=await l.Z.getState().setToken(),r=await (0,n.Sj)({method:"delete",url:"/det-berita-acara/".concat(t),headers:{Authorization:"Bearer ".concat(a)}});return e(e=>({dtDetBeritaAcara:{last_page:e.dtDetBeritaAcara.last_page,current_page:e.dtDetBeritaAcara.current_page,data:e.dtDetBeritaAcara.data.filter(e=>e.id!==t)}})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(a,r)=>{delete r.id;let s=(null==r?void 0:r.foto)?t().setFormData(r):r,d=await l.Z.getState().setToken();try{let t=await (0,n.Sj)({url:"/det-berita-acara/".concat(a),method:"post",headers:(null==r?void 0:r.foto)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(d)}:{Authorization:"Bearer ".concat(d)},data:s,params:{_method:"PUT"}});return e(e=>({dtDetBeritaAcara:{last_page:e.dtDetBeritaAcara.last_page,current_page:e.dtDetBeritaAcara.current_page,data:e.dtDetBeritaAcara.data.map(e=>e.id===a?{...e,...t.data.data}:e)}})),{status:"berhasil update",data:t.data}}catch(e){return{status:"error",data:e.response.data}}}})));t.Z=d},9442:function(e,t,a){"use strict";var r=a(8919);t.Z=e=>{let{event:t,position:a}=e;switch(t.type){case"success":r.default.success(t.message,{duration:4e3,position:a});break;case"error":r.default.error(t.message,{duration:4e3,position:a})}}},142:function(){}}]);