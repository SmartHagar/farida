(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2328],{4085:function(e,a,t){Promise.resolve().then(t.bind(t,4969))},4969:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return M}});var r=t(9268),l=t(6006),s=t(593),n=t(5437),i=t(3346),o=t(4195),d=t(8136),c=e=>{let{showModal:a,setShowModal:t,width:l="800px",title:s,children:n}=e;return(0,r.jsx)("div",{className:"",children:a&&(0,r.jsx)("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,r.jsxs)("div",{className:"bg-white p-5 rounded-xl w-[500px] h-min mt-[10%] max-h-[70%] overflow-hidden flex flex-col lg:w-[700px]",style:{width:l},children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.2] mb-4 pb-2",children:[(0,r.jsx)("h5",{className:"text-xl font-roboto",children:s}),(0,r.jsx)(d.C7Q,{className:"cursor-pointer hover:text-primary",onClick:()=>t(!1)})]}),(0,r.jsx)("div",{className:"overflow-auto",children:n})]})})})},u=e=>{let{setDelete:a,setEdit:t,search:u}=e,{setDosen:h,dtDosen:m,setShowDosen:p,showDosen:x}=(0,o.Z)(),[g,f]=(0,l.useState)(1),[j,b]=(0,l.useState)(10),[v,y]=(0,l.useState)(!0),[w,N]=(0,l.useState)(!1),k=async()=>{await h({page:g,limit:j,search:u}),y(!1)};(0,l.useEffect)(()=>(k(),()=>{}),[g,j]),(0,l.useEffect)(()=>{f(1),k()},[u]);let D=e=>{p(e),N(!0)};return(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:v?(0,r.jsx)(s.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{showModal:w,setShowModal:N,title:"Email dan Password",children:x?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["Email: ",x.email]}),(0,r.jsxs)("p",{children:["Password: ",x.show_password]})]}):(0,r.jsx)("p",{children:"Loading..."})}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)(i.Z,{headTable:["No","NIDN","Nama","Jabatan","Prodi","Tempat Lahir","Tgl. Lahir","Foto","Aksi"],tableBodies:["NIDN","nama","jabatan","prodi.nama","tempat_lahir","tgl_lahir","foto"],dataTable:m.data,page:g,limit:j,setEdit:t,setDelete:a,ubah:!0,hapus:!0,costume:e=>(0,r.jsx)("div",{onClick:()=>D(e.id),className:"cursor-pointer",children:(0,r.jsx)(d.LSF,{})})})}),(null==m?void 0:m.last_page)>1&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(n.Z,{currentPage:null==m?void 0:m.current_page,totalPages:null==m?void 0:m.last_page,setPage:f})})]})})},h=t(366),m=t(2985),p=t(7808),x=t(9442),g=t(9700),f=t(9977),j=t.n(f),b=t(5326),v=t.n(b),y=e=>{let{control:a,required:t,name:l,errors:s,addClass:n,label:i,startDate:o,setStartDate:d}=e;return(0,r.jsxs)("div",{className:n,children:[(0,r.jsxs)("label",{className:"text-sm font-medium text-gray-700 tracking-wide block",children:[i,t&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"})]}),(0,r.jsx)(g.Qr,{name:l,control:a,rules:{required:t},render:e=>{let{field:a}=e;return(0,r.jsx)(j(),{selected:o,onChange:e=>{if(e){d(e);let t=v()(e).format("YYYY-MM-DD");a.onChange(t)}else d(null),a.onChange("")},dateFormat:"dd/MM/yyyy",value:o||"",peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",className:"w-full border rounded-lg py-2 px-4"})}}),(null==s?void 0:s.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[i," tidak boleh kosong"]})]})},w=t(63),N=e=>{let{value:a,register:t,required:l,name:s,defaultChecked:n,id:i,errors:o}=e;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex gap-1 items-start",children:[(0,r.jsx)("input",{type:"radio",value:a,id:i.toString(),name:s,...t(s,{required:l}),className:"form-radio h-6 w-4 text-primary",defaultChecked:n}),(0,r.jsx)("label",{htmlFor:i.toString(),children:a})]}),(null==o?void 0:o.type)==="required"&&(0,r.jsx)("p",{className:"text-red-500 font-inter italic text-sm",children:"Tidak boleh kosong"})]})},k=t(1281),D=t(1112),_=t(4502);t(6760);var S=e=>{var a;let{register:t,errors:s,control:n,dtEdit:i,watch:o,setValue:d,showModal:c,tgl_lahir:u,setTgl_lahir:h,myFile:p,setMyFile:x}=e,{setProdiAll:g,dtProdi:f}=(0,_.Z)(),j=async e=>{let{search:a}=e;await g({search:a})};return(0,l.useEffect)(()=>{j({})},[c]),(0,r.jsxs)(r.Fragment,{children:[(null==f?void 0:f.data)&&(0,r.jsx)(D.Z,{label:"Prodi",placeholder:"Pilih Prodi",name:"prodi_id",dataDb:null==f?void 0:f.data,body:["id","nama"],control:n,required:!0,errors:s.prodi_id,addClass:"col-span-4"}),(0,r.jsx)(m.Z,{label:"NIDN",name:"NIDN",register:t,minLength:2,errors:s.NIDN,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(m.Z,{label:"Nama Dosen",name:"nama",register:t,required:!0,minLength:3,errors:s.nama,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(m.Z,{label:"Jabatan",name:"jabatan",register:t,required:!0,errors:s.jabatan,addClass:"col-span-4 lg:col-span-1"}),(0,r.jsx)(m.Z,{label:"Tempat Lahir",name:"tempat_lahir",register:t,required:!0,errors:s.tempat_lahir,addClass:"col-span-4 lg:col-span-1"}),(0,r.jsx)(y,{label:"Tgl. Lahir",name:"tgl_lahir",control:n,startDate:u,setStartDate:h,required:!0,errors:s.tgl_lahir,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)("div",{className:"col-span-4 lg:col-span-2",children:(0,r.jsxs)("div",{className:"w-[100%]",children:[(0,r.jsx)("label",{className:"block py-2 text-sm font-medium text-gray-700 tracking-wide",children:"Jenis Kelamin"}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)(N,{id:"Laki-laki",name:"jenkel",value:"Laki-laki",register:t,required:!0,defaultChecked:(null==i?void 0:i.jenkel)==="Laki-laki"}),(0,r.jsx)(N,{id:"Perempuan",name:"jenkel",value:"Perempuan",register:t,required:!0,defaultChecked:(null==i?void 0:i.jenkel)==="Perempuan"})]}),(null==s?void 0:null===(a=s.jenkel)||void 0===a?void 0:a.type)==="required"&&(0,r.jsx)("p",{className:"text-red-500 font-inter italic text-sm",children:"Jenis kelamin tidak boleh kosong"})]})}),(0,r.jsx)(k.u,{label:"Agama",defaultOption:"Pilih Agama",register:t,errors:s,name:"agama",options:[{value:"Kristen Protestan",label:"Kristen Protestan"},{value:"Kristen Katolik",label:"Kristen Katolik"},{value:"Islam",label:"Islam"},{value:"Hindu",label:"Hindu"},{value:"Budha",label:"Budha"},{value:"Konghucu",label:"Konghucu"}],addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(m.Z,{label:"Alamat",name:"alamat",register:t,required:!0,errors:s.alamat,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(m.Z,{label:"No. Hp",name:"no_hp",register:t,required:!0,errors:s.no_hp,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(w.Z,{label:"Foto",name:"foto",register:t,accept:"image/*",errors:s.foto,addClass:"col-span-4",setValue:d,fileEdit:null==i?void 0:i.foto,myFile:p,setMyFile:x})]})},C=e=>{let{showModal:a,setShowModal:t,dtEdit:s}=e,[n,i]=(0,l.useState)(new Date("01-01-1980")),[d,c]=(0,l.useState)(),{addData:u,updateData:f}=(0,o.Z)(),{register:j,handleSubmit:b,setValue:v,control:y,formState:{errors:w},watch:N}=(0,g.cI)(),k=()=>{v("id",""),v("NIDN",""),v("nama",""),v("jabatan",""),v("tempat_lahir",""),v("tgl_lahir","1980-01-01"),i(new Date("01-01-1980")),v("jenkel",""),v("agama",""),v("alamat",""),v("no_hp",""),v("foto",""),c(null)};(0,l.useEffect)(()=>{s?(v("id",s.id),v("NIDN",s.NIDN),v("nama",s.nama),v("jabatan",s.jabatan),v("tempat_lahir",s.tempat_lahir),v("tgl_lahir",s.tgl_lahir),i(new Date(s.tgl_lahir)),v("jenkel",s.jenkel),v("agama",s.agama),v("alamat",s.alamat),v("no_hp",s.no_hp),v("foto",s.foto)):k()},[a,s]);let D=async e=>{if(console.log({row:e}),s){let{data:a}=await f(s.id,e);(0,x.Z)({event:a}),t(!1)}else{let{data:a}=await u(e);console.log({data:a}),(0,x.Z)({event:a}),(null==a?void 0:a.type)!=="success"||k()}};return(0,r.jsx)(p.Z,{title:"Form Dosen",showModal:a,setShowModal:t,children:(0,r.jsxs)("form",{onSubmit:b(D),children:[(0,r.jsx)(m.Z,{name:"id",register:j,type:"hidden"}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,r.jsx)(S,{register:j,errors:w,dtEdit:s,control:y,watch:N,setValue:v,showModal:a,myFile:d,setMyFile:c,tgl_lahir:n,setTgl_lahir:i})}),(0,r.jsx)("div",{children:(0,r.jsx)(h.Z,{text:"Simpan",onClick:b(D)})})]})})},Z=t(686),P=t(8919),F=t(8350),M=()=>{let{removeData:e}=(0,o.Z)(),[a,t]=(0,l.useState)(!1),[s,n]=(0,l.useState)(!1),[i,d]=(0,l.useState)(),[c,m]=(0,l.useState)(),[p,g]=(0,l.useState)(""),f=async a=>{let{id:t,isDelete:r}=a;if(d(t),r){let{data:a}=await e(i);(0,x.Z)({event:a}),n(!1)}else n(!0)};return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(P.x7,{}),(0,r.jsx)(C,{dtEdit:c,showModal:a,setShowModal:t}),(0,r.jsx)(Z.Z,{showDel:s,setShowDel:n,setDelete:f}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,r.jsx)("p",{children:"Silahkan Mengolah data Dosen"}),(0,r.jsx)("div",{children:(0,r.jsx)(h.Z,{text:"Tambah Dosen",onClick:()=>{t(!0),m(null)}})})]}),(0,r.jsx)(F.Z,{placeholder:"Cari Dosen",onChange:e=>g(e)})]}),(0,r.jsx)(u,{setDelete:f,setEdit:e=>{t(!0),m(e)},search:p})]})}},63:function(e,a,t){"use strict";var r=t(9268),l=t(3415),s=t(6394),n=t.n(s),i=t(6006),o=t(5883),d=t.n(o);a.Z=e=>{let{label:a,register:t,required:s,name:o,errors:c,addClass:u,accept:h,setValue:m,fileEdit:p,myFile:x,setMyFile:g}=e,[f,j]=(0,i.useState)(),b=e=>new Promise(()=>{if(e){var a;let t=(null==e?void 0:null===(a=e.type)||void 0===a?void 0:a.split("/"))||[],r=t[0];if("image"!==r)return v(e);console.log({splitType:t}),d().imageFileResizer(e,1500,1500,t[1],80,0,e=>{v(e)},"file")}else v(null)}),v=e=>{var a;if(e){let a=new FileReader;a.readAsDataURL(e),a.onloadend=()=>{g(a.result)}}let t=(null==e?void 0:null===(a=e.type)||void 0===a?void 0:a.split("/"))||[];j(t[0]),m(o,e)};return(0,r.jsxs)("div",{className:u,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),s&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("input",{className:"w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",id:"fileInput",type:"file",accept:h,onChange:e=>{var a;let t=(null===(a=e.target)||void 0===a?void 0:a.files[0])||null;b(t)}}),(0,r.jsx)("input",{type:"hidden",id:a,...t(o,{required:s})}),(0,r.jsxs)("div",{className:"flex gap-4 mt-2",children:[x&&"image"===f&&(0,r.jsx)(n(),{className:"rounded-lg",src:x,width:100,height:100,alt:""}),p&&"file"!==o&&(0,r.jsx)("div",{children:(0,r.jsx)(n(),{src:"".concat(l._n,"/").concat(p),width:100,height:100,alt:""})})]}),(null==c?void 0:c.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kosong"]})]})}},686:function(e,a,t){"use strict";var r=t(9268);t(6006);var l=t(8136);a.Z=e=>{let{showDel:a,setShowDel:t,setDelete:s}=e;return a&&(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,r.jsxs)("div",{className:"bg-white p-5 rounded-xl lg:ml-64 md:min-w-[500px] h-min mt-[20%] max-h-[70%] overflow-auto",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.1] mb-4 pb-2",children:[(0,r.jsx)("h5",{className:"text-xl font-roboto",children:"Hapus Data"}),(0,r.jsx)(l.C7Q,{className:"cursor-pointer hover:text-black/[0.5]",onClick:()=>t(!1)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Apaka Anda Yakin Menghapus Data Ini?"}),(0,r.jsxs)("div",{className:"flex justify-center gap-4 mt-4",children:[(0,r.jsx)("button",{className:"hover:border hover:border-red-600 bg-red-600 w-20 py-2 rounded-xl text-white ",onClick:()=>s({isDelete:!0}),children:"Hapus"}),(0,r.jsx)("button",{className:"w-20 py-2 rounded-xl hover:border-b",onClick:()=>t(!1),children:"Batal"})]})]})]})})})}},5437:function(e,a,t){"use strict";var r=t(9268);t(6006);var l=t(8136);a.Z=e=>{let{totalPages:a,currentPage:t,setPage:s}=e,n=[];if(a<=5)n=Array.from({length:a},(e,a)=>a+1);else{n=[1,t-1,t,t+1,a],n=(n=Array.from(new Set(n)).sort((e,a)=>e-a)).filter(e=>e>0&&e<=a);for(let e=1;e<n.length-1;e++)n[e]-n[e-1]>1&&(n.splice(e,0,"..."),e++);a-n[n.length-2]>1&&n.splice(n.length-1,0,"...")}return(0,r.jsx)("div",{className:"h-full",children:(0,r.jsxs)("ol",{className:"flex justify-center gap-1 text-xs font-medium",children:[t>1&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>s(t-1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,r.jsx)(l.pjk,{})})}),n.map((e,a)=>"..."===e?(0,r.jsx)("li",{className:"flex items-end text-xl",children:(0,r.jsx)("div",{className:"block h-8 w-8 rounded border border-gray-100 text-center leading-8",children:e})},a):(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>s(e),className:"cursor-pointer block h-8 w-8 rounded border border-gray-100 text-center leading-8 ".concat(e==t?"bg-blue-900 text-white":""),children:e})},a)),t<a&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>s(t+1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,r.jsx)(l.fmn,{})})})]})})}},1281:function(e,a,t){"use strict";t.d(a,{u:function(){return l}});var r=t(9268);t(6006);let l=e=>{let{label:a,register:t,required:l,name:s,placeholder:n,defaultOption:i,options:o=[],errors:d,addClass:c}=e;return(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),l&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)("select",{className:"w-full rounded-lg py-2 px-2 bg-white border border-gray-300 focus:outline-none focus:border-secondary",id:a,placeholder:n,...t(s,{required:l}),children:[(0,r.jsx)("option",{value:"",children:i}),o.map((e,a)=>(0,r.jsx)("option",{value:e.value,children:e.label},a))]})}),(null==d?void 0:d.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kosong"]})]})}},3346:function(e,a,t){"use strict";var r=t(9268),l=t(4956),s=t(6008),n=t(8136);a.Z=e=>{(0,s.useRouter)();let a=a=>(e.page-1)*e.limit+a+1;return(0,r.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,r.jsx)("thead",{className:"",children:(0,r.jsx)("tr",{children:e.headTable&&e.headTable.map((e,a)=>(0,r.jsx)("th",{scope:"col",className:"px-6 py-4",children:e},a))})}),(0,r.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((t,s)=>{let{id:i}=t;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:a(s)}),e.tableBodies.map((e,a)=>(0,r.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,l.Z)(t,e)},a)),(0,r.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(t),e.ubah&&(0,r.jsx)(n.Ph1,{onClick:()=>e.setEdit(t),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&(0,r.jsx)(n.AuQ,{onClick:()=>(null==e?void 0:e.setDelete)&&(null==e?void 0:e.setDelete({id:i,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},s)})})]})}},4502:function(e,a,t){"use strict";var r=t(2561),l=t(4475),s=t(3415);let n=(0,r.Ue)((0,l.mW)((e,a)=>({dtProdi:[],setProdi:async a=>{let{page:t=1,limit:r=10,search:l}=a;try{let a=await (0,s.hi)({method:"get",url:"/prodi",params:{limit:r,page:t,search:l}});return e(e=>({...e,dtProdi:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setProdiAll:async a=>{let{search:t}=a;try{let a=await (0,s.hi)({method:"get",url:"/prodi/all",params:{search:t}});return e(e=>({...e,dtProdi:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=n},4195:function(e,a,t){"use strict";var r=t(2561),l=t(4475),s=t(3415),n=t(4406);let i=(0,r.Ue)((0,l.mW)((e,a)=>({setFormData:e=>{let a=new FormData;return a.append("prodi_id",e.prodi_id),a.append("NIDN",e.NIDN),a.append("nama",e.nama),a.append("jabatan",e.jabatan),a.append("tempat_lahir",e.tempat_lahir),a.append("tgl_lahir",e.tgl_lahir),a.append("jenkel",e.jenkel),a.append("no_hp",e.no_hp),a.append("agama",e.agama),a.append("alamat",e.alamat),a.append("no_hp",e.no_hp),a.append("foto",e.foto),a},dtDosen:[],showDosen:[],setDosen:async a=>{let{page:t=1,limit:r=10,search:l,tipe:i}=a;try{let a=await n.Z.getState().setToken(),o=await (0,s.Sj)({method:"get",url:"/dosen",headers:{Authorization:"Bearer ".concat(a)},params:{limit:r,page:t,search:l,tipe:i}});return e(e=>({...e,dtDosen:o.data.data})),{status:"berhasil",data:o.data}}catch(e){var o;return{status:"error",error:null===(o=e.response)||void 0===o?void 0:o.data}}},setShowDosen:async a=>{try{let t=await n.Z.getState().setToken(),r=await (0,s.Sj)({method:"get",url:"/dosen/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return console.log({response:r}),e(e=>({...e,showDosen:r.data.data})),{status:"berhasil",data:r.data}}catch(e){var t;return{status:"error",error:null===(t=e.response)||void 0===t?void 0:t.data}}},addData:async t=>{let r=(null==t?void 0:t.foto)?a().setFormData(t):t;try{let a=await n.Z.getState().setToken(),t=await (0,s.Sj)({method:"post",url:"/dosen",headers:{Authorization:"Bearer ".concat(a),"Content-Type":"multipart/form-data"},data:r});return e(e=>({dtDosen:{last_page:e.dtDosen.last_page,current_page:e.dtDosen.current_page,data:[t.data.data,...e.dtDosen.data]}})),{status:"berhasil tambah",data:t.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async a=>{try{let t=await n.Z.getState().setToken(),r=await (0,s.Sj)({method:"delete",url:"/dosen/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({dtDosen:{last_page:e.dtDosen.last_page,current_page:e.dtDosen.current_page,data:e.dtDosen.data.filter(e=>e.id!==a)}})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(t,r)=>{delete r.id;let l=(null==r?void 0:r.foto)?a().setFormData(r):r,i=await n.Z.getState().setToken();try{let a=await (0,s.Sj)({url:"/dosen/".concat(t),method:"post",headers:(null==r?void 0:r.foto)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(i)}:{Authorization:"Bearer ".concat(i)},data:l,params:{_method:"PUT"}});return e(e=>({dtDosen:{last_page:e.dtDosen.last_page,current_page:e.dtDosen.current_page,data:e.dtDosen.data.map(e=>e.id===t?{...e,...a.data.data}:e)}})),{status:"berhasil update",data:a.data}}catch(e){return{status:"error",data:e.response.data}}}})));a.Z=i},5883:function(e){(()=>{"use strict";var a={d:(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};a.r(t),a.d(t,{default:()=>l});var r=function(){var e;function a(){!function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,a)}return e=[{key:"changeHeightWidth",value:function(e,a,t,r,l,s){return t>r&&(e=Math.round(e*r/t),t=r),e>a&&(t=Math.round(t*a/e),e=a),l&&t<l&&(e=Math.round(e*l/t),t=l),s&&e<s&&(t=Math.round(t*s/e),e=s),{height:e,width:t}}},{key:"resizeAndRotateImage",value:function(e,a,t,r,l){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"jpeg",n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,o=document.createElement("canvas"),d=e.width,c=e.height,u=this.changeHeightWidth(c,t,d,a,r,l);i&&(90===i||270===i)?(o.width=u.height,o.height=u.width):(o.width=u.width,o.height=u.height),d=u.width,c=u.height;var h=o.getContext("2d");return h.fillStyle="rgba(0, 0, 0, 0)",h.fillRect(0,0,d,c),h.imageSmoothingEnabled&&h.imageSmoothingQuality&&(h.imageSmoothingQuality="high"),i&&(h.rotate(i*Math.PI/180),90===i?h.translate(0,-o.width):180===i?h.translate(-o.width,-o.height):270===i?h.translate(-o.height,0):0!==i&&360!==i||h.translate(0,0)),h.drawImage(e,0,0,d,c),o.toDataURL("image/".concat(s),n/100)}},{key:"b64toByteArrays",value:function(e,a){a=a||"image/jpeg";for(var t=atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),r=[],l=0;l<t.length;l+=512){for(var s=t.slice(l,l+512),n=Array(s.length),i=0;i<s.length;i++)n[i]=s.charCodeAt(i);var o=new Uint8Array(n);r.push(o)}return r}},{key:"b64toBlob",value:function(e,a){var t=this.b64toByteArrays(e,a);return new Blob(t,{type:a,lastModified:new Date})}},{key:"b64toFile",value:function(e,a,t){var r=this.b64toByteArrays(e,t);return new File(r,a,{type:t,lastModified:new Date})}},{key:"createResizedImage",value:function(e,t,r,l,s,n,i){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"base64",d=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,u=new FileReader;if(!e)throw Error("File Not Found!");if(e.type&&!e.type.includes("image"))throw Error("File Is NOT Image!");u.readAsDataURL(e),u.onload=function(){var h=new Image;h.src=u.result,h.onload=function(){var u=a.resizeAndRotateImage(h,t,r,d,c,l,s,n),m="image/".concat(l);switch(o){case"blob":i(a.b64toBlob(u,m));break;case"base64":default:i(u);break;case"file":var p=e.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(l.toString());i(a.b64toFile(u,p,m))}}},u.onerror=function(e){throw Error(e)}}}],function(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(a,e),a}();let l={imageFileResizer:function(e,a,t,l,s,n,i,o,d,c){return r.createResizedImage(e,a,t,l,s,n,i,o,d,c)}};e.exports=t})()}},function(e){e.O(0,[6680,4550,4288,1092,9700,3725,3088,8119,7590,9253,7698,1744],function(){return e(e.s=4085)}),_N_E=e.O()}]);