(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4069],{5091:function(e,a,t){Promise.resolve().then(t.bind(t,2294))},2294:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return P}});var l=t(9268),r=t(6006),s=t(1712),i=t(593),n=t(3346),d=t(9947),o=t(6008),u=e=>{let{setDelete:a,setEdit:t}=e,u=s.Z.get("dosen_id")||"",c=(0,o.useSearchParams)(),m=(0,o.useSearchParams)().get("cari")||"",h=c.get("semester")||"",p=c.get("year")||"",{setNilai:f,dtNilai:g}=(0,d.Z)(),[x,w]=(0,r.useState)(1),[v,j]=(0,r.useState)(10),[y,b]=(0,r.useState)(!0),N=(0,r.useCallback)(async()=>{b(!0),await f({search:m,semester:h,tahun:p,dosen_id:u}),b(!1)},[u,m,h,f,p]);return(0,r.useEffect)(()=>{h&&p&&N()},[N,h,p]),(0,l.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:y?(0,l.jsx)(i.Z,{}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"",children:(0,l.jsx)(n.Z,{headTable:["No","Hari","Mata Kuliah","Kode MK","JML. SKS","NILAI","Aksi"],tableBodies:["jadwal.hari","jadwal.matkul.nama","jadwal.matkul.kode","jadwal.matkul.sks","file"],dataTable:null==g?void 0:g.data,page:x,limit:v,setEdit:t,setDelete:a,hapus:!0,ubah:!0})})})})},c=t(2985),m=t(7808),h=t(9442),p=t(9700),f=t(63),g=t(4496);t(6760);var x=t(1468),w=e=>{let{register:a,errors:t,control:i,dtEdit:n,watch:d,setValue:u,showModal:c}=e,m=s.Z.get("dosen_id"),h=(0,o.useSearchParams)(),p=h.get("semester")||"",w=h.get("year")||"",{setJadwalByDosenFull:v,dtJadwal:j}=(0,x.Z)(),y=async()=>{await v({tahun:w,semester:p,dosen_id:m})};return(0,r.useEffect)(()=>{w&&p&&y()},[c,w,p]),(0,l.jsxs)(l.Fragment,{children:[(null==j?void 0:j.data)&&(0,l.jsx)(g.Z,{label:"Jadwal",placeholder:"Pilih Jadwal",name:"jadwal_id",dataDb:null==j?void 0:j.data,body:["id","prodi.singkat","hari","matkul.nm_matkul","mulai","seles"],control:i,required:!0,errors:t.jadwal_id,addClass:"col-span-4"}),(0,l.jsx)(f.Z,{label:"Nilai",name:"file",register:a,accept:"application/pdf",required:!0,errors:t.file,addClass:"col-span-4",setValue:u,fileEdit:null==n?void 0:n.file,watch:d})]})},v=t(541),j=e=>{let{showModal:a,setShowModal:t,dtEdit:n}=e,u=s.Z.get("dosen_id"),f=(0,o.useSearchParams)(),g=f.get("semester")||"",x=f.get("year")||"",[j,y]=(0,r.useState)(!1),{addData:b,updateData:N,setNilai:S}=(0,d.Z)(),{register:Z,handleSubmit:k,setValue:_,control:P,formState:{errors:T},watch:C}=(0,p.cI)(),F=()=>{_("id",""),_("jadwal_id",""),_("file","")};(0,r.useEffect)(()=>{n?(_("id",n.id),_("jadwal_id",parseInt(n.jadwal_id)),_("file",n.file)):F()},[a,n]);let D=async e=>{if(y(!0),n){let{data:a}=await N(n.id,e);(0,h.Z)({event:a}),t(!1)}else{let{data:a}=await b(e);console.log({data:a}),(0,h.Z)({event:a}),(null==a?void 0:a.type)!=="success"||F()}await S({semester:g,tahun:x,dosen_id:u}),y(!1)};return(0,l.jsx)(m.Z,{title:"Form Nilai",showModal:a,setShowModal:t,children:(0,l.jsxs)("form",{onSubmit:k(D),children:[(0,l.jsx)(c.Z,{name:"id",register:Z,type:"hidden"}),(0,l.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,l.jsx)(w,{register:Z,errors:T,dtEdit:n,control:P,watch:C,setValue:_,showModal:a})}),(0,l.jsx)("div",{children:j?(0,l.jsx)(i.Z,{}):(0,l.jsx)(v.Z,{onClick:k(D),children:"Simpan"})})]})})},y=t(686),b=t(8919),N=t(5858),S=t(1852),Z=t(9247),k=t(4407),_=e=>{let{halaman:a}=e,{register:t,formState:{errors:r},setValue:s,watch:i,control:n}=(0,p.cI)(),d=i("semester"),o=i("year");return(0,l.jsxs)("div",{className:"grid grid-cols-8 gap-2 w-full",children:[(0,l.jsx)(S.Z,{setValue:s,yearWatch:o,time:1e3}),(0,l.jsx)(N.Z,{setValue:s,semesterWatch:d,time:500}),(0,l.jsx)(Z.Z,{placeholder:"Pilih Semester",control:n,name:"semester",options:[{value:"Ganjil",label:"Ganjil"},{value:"Genap",label:"Genap"}],errors:r.semester,addClass:"col-span-8 md:col-span-2 text-black",menuPosition:"absolute"}),(0,l.jsx)(k.Z,{name:"year",placeholder:"Pilih Tahun",start:new Date().getFullYear()-2,end:new Date().getFullYear(),fromMax:!0,control:n,addClass:"col-span-8 md:col-span-2 text-black",menuPosition:"absolute"})]})},P=()=>{let{removeData:e}=(0,d.Z)(),[a,t]=(0,r.useState)(!1),[s,i]=(0,r.useState)(!1),[n,o]=(0,r.useState)(),[c,m]=(0,r.useState)(),[f,g]=(0,r.useState)(""),x=async a=>{let{id:t,isDelete:l}=a;if(o(t),l){let{data:a}=await e(n);(0,h.Z)({event:a}),i(!1)}else i(!0)},{register:w,control:N,formState:{errors:S},watch:Z,setValue:k}=(0,p.cI)();return(0,l.jsxs)("div",{className:"flex flex-col h-full",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(b.Toaster,{}),(0,l.jsx)(j,{dtEdit:c,showModal:a,setShowModal:t}),(0,l.jsx)(y.Z,{showDel:s,setShowDel:i,setDelete:x}),(0,l.jsxs)("div",{className:"mb-4 flex justify-between ml-8 lg:ml-0",children:[(0,l.jsx)("p",{children:"Silahkan mengolah data nilai"}),(0,l.jsx)("div",{children:(0,l.jsx)(v.Z,{onClick:()=>{t(!0),m(null)},children:"Tambah"})})]}),(0,l.jsx)("div",{children:(0,l.jsx)(_,{halaman:"Nilai"})})]}),(0,l.jsx)(u,{setDelete:x,setEdit:e=>{t(!0),m(e)}})]})}},5858:function(e,a,t){"use strict";var l=t(9268),r=t(9099),s=t(6008),i=t(6006);a.Z=e=>{let{semesterWatch:a,setValue:t,time:n}=e,d=(0,s.useRouter)(),o=()=>{let e=window.location.href,a=new URL(e),t=new URLSearchParams(a.search),l=t.get("semester");return{url:a,params:t,semesterParams:l}},u=e=>{let{url:a,params:t}=o();t.delete("semester"),t.append("semester",e),a.search=t.toString(),d.push(a.toString())};return(0,i.useEffect)(()=>(setTimeout(()=>{let{semesterParams:e}=o();if(e)t("semester",e);else{let e=(0,r.w)().month()+1;t("semester",e>6?"Ganjil":"Genap")}},n),()=>{}),[]),(0,i.useEffect)(()=>(a?u(a.toString()):u(""),()=>{}),[a]),(0,l.jsx)(l.Fragment,{})}},1852:function(e,a,t){"use strict";var l=t(9268),r=t(6008),s=t(6006);a.Z=e=>{let{yearWatch:a,setValue:t,time:i}=e,n=(0,r.useRouter)(),d=()=>{let e=window.location.href,a=new URL(e),t=new URLSearchParams(a.search),l=t.get("year");return{url:a,params:t,yearParams:l}},o=e=>{let{url:a,params:t}=d();t.delete("year"),t.append("year",e.toString()),a.search=t.toString(),n.push(a.toString())};return(0,s.useEffect)(()=>(setTimeout(()=>{let{yearParams:e}=d();if(e)t("year",parseInt(e));else{let e=new Date().getFullYear();t("year",e)}},i),()=>{}),[]),(0,s.useEffect)(()=>(a?o(a.toString()):o(""),()=>{}),[a]),(0,l.jsx)(l.Fragment,{})}},63:function(e,a,t){"use strict";var l=t(9268),r=t(3415),s=t(6394),i=t.n(s),n=t(6006),d=t(5883),o=t.n(d);a.Z=e=>{let{label:a,register:t,required:s,name:d,errors:u,addClass:c,accept:m,setValue:h,fileEdit:p,initialValue:f,watch:g}=e,[x,w]=(0,n.useState)(),[v,j]=(0,n.useState)(f||""),y=g(d);(0,n.useEffect)(()=>{y||j("")},[y]);let b=e=>new Promise(()=>{if(e){var a;let t=(null==e?void 0:null===(a=e.type)||void 0===a?void 0:a.split("/"))||[],l=t[0];if("image"!==l)return N(e);o().imageFileResizer(e,1500,1500,t[1],80,0,e=>{N(e)},"file")}else N(null)}),N=e=>{var a;if(e){let a=new FileReader;a.readAsDataURL(e),a.onloadend=()=>{j(a.result)}}let t=(null==e?void 0:null===(a=e.type)||void 0===a?void 0:a.split("/"))||[];w(t[0]),h(d,e)};return(0,l.jsxs)("div",{className:c,children:[a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),s&&(0,l.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),!s&&(0,l.jsx)("span",{className:"ml-1 text-gray-500 text-sm",children:"(Optional)"})]}),(0,l.jsx)("input",{className:"w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",id:"fileInput",type:"file",accept:m,onChange:e=>{var a;let t=(null===(a=e.target)||void 0===a?void 0:a.files[0])||null;b(t)}}),(0,l.jsx)("input",{type:"hidden",id:a,...t(d,{required:s})}),(0,l.jsxs)("div",{className:"flex gap-4 mt-2",children:[v&&"image"===x&&(0,l.jsx)(i(),{className:"rounded-lg",src:v,width:100,height:100,alt:""}),p&&"file"!==d&&"file_materi"!==d&&(0,l.jsx)("div",{children:(0,l.jsx)(i(),{src:"".concat(r._n,"/").concat(p),width:100,height:100,alt:""})})]}),(null==u?void 0:u.type)==="required"&&(0,l.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kosong"]})]})}},9247:function(e,a,t){"use strict";var l=t(9268),r=t(6006),s=t(480),i=t(9700);a.Z=e=>{let{label:a,control:t,required:n,name:d,errors:o,addClass:u,menuPosition:c="fixed",placeholder:m="Pilih Tahun",options:h=[]}=e,[p,f]=(0,r.useState)(null);return(0,r.useEffect)(()=>{"undefined"!=typeof document&&f(document.body)},[]),(0,l.jsxs)("div",{className:u,children:[a&&(0,l.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),n&&(0,l.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),p&&(0,l.jsx)(i.Qr,{name:d,control:t,rules:{required:n},render:e=>{let{field:{onChange:a,value:t,name:r,ref:i}}=e;return(0,l.jsx)(s.ZP,{isClearable:!0,isSearchable:!0,options:h,placeholder:m,menuPosition:c,ref:i,value:t?h.find(e=>e.value===t):t,onChange:e=>a(e?e.value:e),menuPlacement:"auto",menuPortalTarget:document.body})}}),(null==o?void 0:o.type)==="required"&&(0,l.jsx)("p",{className:"text-red-500 font-inter italic text-sm",children:"Tahun tidak boleh kosong"})]})}},4496:function(e,a,t){"use strict";var l=t(9268),r=t(3336),s=t(9700);a.Z=e=>{let{dataDb:a,body:t,control:i,required:n,name:d,errors:o,placeholder:u,addClass:c,label:m,defaultOptions:h=!0,menuPosition:p="fixed"}=e,f={multiValue:(e,a)=>a.data.isFixed?{...e,backgroundColor:"gray"}:e,multiValueLabel:(e,a)=>a.data.isFixed?{...e,fontWeight:"bold",color:"white",paddingRight:6}:e,multiValueRemove:(e,a)=>a.data.isFixed?{...e,display:"none"}:e},g=(e,a)=>{let t=e[a];if("id"===a)return{value:t,label:""};if("NPM_FULL"===a){var l;let a=null==e?void 0:null===(l=e.thn_angkatan)||void 0===l?void 0:l.substring(2),t=e.prodi,r=e.NPM,s="".concat(t.kode).concat(a.substring(2)).concat(r);return{value:e.NPM,label:s}}if(!a.includes("."))return{value:"",label:t};{let[t,...l]=a.split("."),r=e[t];return g(r,l.join("."))}},x=()=>{let e=a&&a.map((e,a)=>{let l=t.map(a=>g(e,a)),r=l.map(e=>e.label).filter(e=>""!==e),s=r.join(r.length>1?" - ":"");return{value:l.find(e=>""!==e.value).value,label:s}});return e},w=e=>{var a;return null===(a=x())||void 0===a?void 0:a.filter(a=>a.label.toLowerCase().includes(e.toLowerCase()))},v=(e,a)=>{setTimeout(()=>{a(w(e))},1e3)};return(0,l.jsxs)("div",{className:c,children:[m&&(0,l.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:m}),n&&(0,l.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,l.jsx)(s.Qr,{name:d,control:i,rules:{required:n},render:e=>{var a;let{field:{onChange:t,value:s,ref:i}}=e;return(0,l.jsx)(r.Z,{cacheOptions:!0,defaultOptions:h,isClearable:!0,isSearchable:!0,loadOptions:v,placeholder:u,menuPlacement:"auto",menuPosition:p,styles:f,ref:i,value:(null===(a=x())||void 0===a?void 0:a.find(e=>e.value===s))||null,onChange:e=>t(e?e.value:e),menuPortalTarget:document.body})}}),(null==o?void 0:o.type)==="required"&&(0,l.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[m," tidak boleh kosong"]})]})}},4407:function(e,a,t){"use strict";var l=t(9268),r=t(6006),s=t(480),i=t(5326),n=t.n(i),d=t(9700);a.Z=e=>{let{label:a,start:t=2012,end:i=n()().format("YYYY"),control:o,required:u,name:c,errors:m,addClass:h,menuPosition:p="fixed",placeholder:f="Pilih Tahun",fromMax:g=!1}=e,x=()=>{let e=[];if(g)for(let a=i;a>=t;a--)e.push({value:a,label:a});else for(let a=t;a<=i;a++)e.push({value:a,label:a});return e},[w,v]=(0,r.useState)(null);return(0,r.useEffect)(()=>{"undefined"!=typeof document&&v(document.body)},[]),(0,l.jsxs)("div",{className:h,children:[a&&(0,l.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),u&&(0,l.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),w&&(0,l.jsx)(d.Qr,{name:c,control:o,rules:{required:u},render:e=>{let{field:{onChange:a,value:t,name:r,ref:i}}=e;return(0,l.jsx)(s.ZP,{isClearable:!0,isSearchable:!0,options:x(),placeholder:f,menuPosition:p,ref:i,value:t?x().find(e=>e.value===t):t,onChange:e=>a(e?e.value:e)})}}),(null==m?void 0:m.type)==="required"&&(0,l.jsx)("p",{className:"text-red-500 font-inter italic text-sm",children:"Tahun tidak boleh kosong"})]})}},1468:function(e,a,t){"use strict";var l=t(2561),r=t(4475),s=t(3415);let i=(0,l.Ue)((0,r.mW)((e,a)=>({dtJadwal:[],setJadwal:async a=>{let{page:t=1,limit:l=10,search:r,tahun:i,semester:n,prodi_id:d}=a;try{let a=await (0,s.cB)({method:"get",url:"/jadwal",params:{limit:l,page:t,search:r,tahun:i,semester:n,prodi_id:d}});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalAll:async a=>{let{search:t}=a;try{let a=await (0,s.cB)({method:"get",url:"/jadwal/all",params:{search:t}});return e(e=>({...e,dtJadwal:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByDosenFull:async a=>{let{tahun:t,semester:l,dosen_id:r}=a;try{let a=await (0,s.cB)({method:"get",url:"/jadwal/byDosenFull",params:{tahun:t,semester:l,dosen_id:r}});return e(e=>({...e,dtJadwal:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setByTahunSemester:async a=>{let{search:t,tahun:l,semester:r,prodi_id:i}=a;try{let a=await (0,s.cB)({method:"get",url:"/jadwal/byTahunSemester",params:{search:t,tahun:l,semester:r,prodi_id:i}});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByRps:async a=>{let{tahun:t,semester:l,dosen_id:r}=a;try{let a=await (0,s.cB)({method:"get",url:"/jadwal/by-rps",params:{dosen_id:r}});return e(e=>({...e,dtJadwal:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setShowJadwal:async a=>{try{let t=await (0,s.cB)({method:"get",url:"/jadwal/".concat(a)});return e(e=>({...e,dtJadwal:t.data.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=i},9947:function(e,a,t){"use strict";var l=t(2561),r=t(4475),s=t(3415),i=t(4406);let n=(0,l.Ue)((0,r.mW)((e,a)=>({setFormData:e=>{let a=new FormData;return a.append("jadwal_id",e.jadwal_id),a.append("file",e.file),a},dtNilai:{last_page:0,current_page:0,data:[]},showNilai:[],setNilai:async a=>{let{page:t=1,limit:l=10,semester:r,tahun:n,prodi_id:d,dosen_id:o,search:u}=a;try{let a=await i.Z.getState().setToken(),c=await (0,s.Sj)({method:"get",url:"/upload/nilai",headers:{Authorization:"Bearer ".concat(a)},params:{limit:l,page:t,semester:r,tahun:n,prodi_id:d,dosen_id:o,search:u}});return e(e=>({...e,dtNilai:c.data})),{status:"berhasil",data:c.data}}catch(e){var c;return{status:"error",error:null===(c=e.response)||void 0===c?void 0:c.data}}},setShowNilai:async a=>{let{id:t}=a;try{let a=await i.Z.getState().setToken(),l=await (0,s.Sj)({method:"get",url:"/upload/nilai/".concat(t),headers:{Authorization:"Bearer ".concat(a)},params:{}});return e(e=>({...e,showNilai:l.data.data})),{status:"berhasil",data:l.data}}catch(e){var l;return{status:"error",error:null===(l=e.response)||void 0===l?void 0:l.data}}},addData:async t=>{let l=(null==t?void 0:t.file)?a().setFormData(t):t;try{let a=await i.Z.getState().setToken(),t=await (0,s.Sj)({method:"post",url:"/upload/nilai",headers:{Authorization:"Bearer ".concat(a),"Content-Type":"multipart/form-data"},data:l});return e(e=>({dtNilai:{last_page:e.dtNilai.last_page,current_page:e.dtNilai.current_page,data:[t.data.data,...e.dtNilai.data]}})),{status:"berhasil tambah",data:t.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async a=>{try{let t=await i.Z.getState().setToken(),l=await (0,s.Sj)({method:"delete",url:"/upload/nilai/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({dtNilai:{last_page:e.dtNilai.last_page,current_page:e.dtNilai.current_page,data:e.dtNilai.data.filter(e=>e.id!==a)}})),{status:"berhasil hapus",data:l.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(t,l)=>{delete l.id;let r=(null==l?void 0:l.file)?a().setFormData(l):l,n=await i.Z.getState().setToken();try{let a=await (0,s.Sj)({url:"/upload/nilai/".concat(t),method:"post",headers:(null==l?void 0:l.file)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(n)}:{Authorization:"Bearer ".concat(n)},data:r,params:{_method:"PUT"}});return e(e=>({dtNilai:{last_page:e.dtNilai.last_page,current_page:e.dtNilai.current_page,data:e.dtNilai.data.map(e=>e.id===t?{...e,...a.data.data}:e)}})),{status:"berhasil update",data:a.data}}catch(e){return{status:"error",data:e.response.data}}}})));a.Z=n},9099:function(e,a,t){"use strict";t.d(a,{w:function(){return r.a}});var l=t(5326),r=t.n(l);t(4215)}},function(e){e.O(0,[6680,4550,4288,1053,831,5243,3088,676,4272,9253,7698,1744],function(){return e(e.s=5091)}),_N_E=e.O()}]);