(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3230],{8239:function(e,s,t){Promise.resolve().then(t.bind(t,5025))},5025:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return M}});var a=t(9268),l=t(6006),r=t(593),i=t(5437),n=t(3346),d=t(769),o=t(6008),c=e=>{let{setDelete:s,setEdit:t,search:c}=e,u=(0,o.useSearchParams)(),m=u.get("berita_acara_id")||"",{setDetBeritaAcara:x,dtDetBeritaAcara:h}=(0,d.Z)(),[p,j]=(0,l.useState)(1),[v,f]=(0,l.useState)(10),[g,b]=(0,l.useState)(!0),w=async()=>{await x({page:p,limit:v,search:c,berita_acara_id:m}),b(!1)};return(0,l.useEffect)(()=>(w(),()=>{}),[p,v]),(0,l.useEffect)(()=>{j(1),w()},[c]),(0,a.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:g?(0,a.jsx)(r.Z,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)(n.Z,{headTable:["No","Tgl. Pertemuan","Materi","Jumlah MHS","Sistem Belajar","Foto","Aksi"],tableBodies:["tgl","materi","jmlh_mhs","sistem","foto"],dataTable:h.data,page:p,limit:v,setEdit:t,setDelete:s,ubah:!0,hapus:!0})}),(null==h?void 0:h.last_page)>1&&(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)(i.Z,{currentPage:null==h?void 0:h.current_page,totalPages:null==h?void 0:h.last_page,setPage:j})})]})})},u=t(366),m=t(2985),x=t(7808),h=t(9442),p=t(9700),j=t(9977),v=t.n(j),f=t(5326),g=t.n(f),b=e=>{let{control:s,required:t,name:l,errors:r,addClass:i,label:n,startDate:d,setStartDate:o,includeDateIntervals:c}=e;return(0,a.jsxs)("div",{className:i,children:[(0,a.jsxs)("label",{className:"text-sm font-medium text-gray-700 tracking-wide block",children:[n,t&&(0,a.jsx)("span",{className:"ml-1 text-red-600",children:"*"})]}),(0,a.jsx)(p.Qr,{name:l,control:s,rules:{required:t},render:e=>{let{field:s}=e;return(0,a.jsx)(v(),{selected:d,onChange:e=>{if(e){o(e);let t=g()(e).format("YYYY-MM-DD");s.onChange(t)}else o(null),s.onChange("")},dateFormat:"dd/MM/yyyy",value:d||"",peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",className:"w-full border rounded-lg py-2 px-4",includeDateIntervals:c,placeholderText:"dd/mm/yyyy"})}}),(null==r?void 0:r.type)==="required"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[n," tidak boleh kosong"]})]})},w=t(63),y=t(1281),N=t(4502);t(6760);var k=e=>{var s;let{register:t,errors:r,control:i,dtEdit:n,watch:d,setValue:o,showModal:c,tgl:u,setTgl:x,myFile:h,setMyFile:p}=e,{setProdiAll:j,dtProdi:v}=(0,N.Z)(),f=async e=>{let{search:s}=e;await j({search:s})};return(0,l.useEffect)(()=>{f({})},[c]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{label:"Tgl. Berita Acara",name:"tgl",control:i,startDate:u,setStartDate:x,required:!0,errors:r.tgl,addClass:"col-span-4 lg:col-span-2",includeDateIntervals:[{start:(s=new Date,new Date(s.getTime()-6048e5)),end:new Date}]}),(0,a.jsx)(m.Z,{label:"Jumlah MHS",name:"jmlh_mhs",register:t,required:!0,errors:r.jmlh_mhs,type:"number",addClass:"col-span-4 lg:col-span-2"}),(0,a.jsx)(m.Z,{label:"Materi",name:"materi",register:t,required:!0,errors:r.materi,addClass:"col-span-4"}),(0,a.jsx)(y.u,{label:"Sistem Belajar",defaultOption:"Pilih Sistem Belajar",register:t,errors:r,name:"sistem",options:[{value:"Daring",label:"Daring"},{value:"Luring",label:"Luring"}],addClass:"col-span-4"}),(0,a.jsx)(w.Z,{label:"Foto",name:"foto",register:t,accept:"image/*",required:!0,errors:r.foto,addClass:"col-span-4",setValue:o,fileEdit:null==n?void 0:n.foto,myFile:h,setMyFile:p})]})},S=e=>{let{showModal:s,setShowModal:t,dtEdit:r}=e,i=(0,o.useSearchParams)(),n=i.get("berita_acara_id")||"",[c,j]=(0,l.useState)(new Date("01-01-1980")),[v,f]=(0,l.useState)(),{addData:g,updateData:b}=(0,d.Z)(),{register:w,handleSubmit:y,setValue:N,control:S,formState:{errors:Z},watch:D}=(0,p.cI)(),C=()=>{N("id",""),N("materi",""),N("jmlh_mhs",""),N("tgl",""),N("foto",""),j(""),f(null)};(0,l.useEffect)(()=>{r?(N("id",r.id),N("materi",r.materi),N("jmlh_mhs",r.jmlh_mhs),N("tgl",r.tgl),j(new Date(r.tgl)),N("foto",r.foto),N("sistem",r.sistem)):C()},[s,r]);let _=async e=>{if(e.berita_acara_id=n,console.log({row:e}),r){let{data:s}=await b(r.id,e);(0,h.Z)({event:s}),t(!1)}else{let{data:s}=await g(e);console.log({data:s}),(0,h.Z)({event:s}),(null==s?void 0:s.type)!=="success"||C()}};return(0,a.jsx)(x.Z,{title:"Form Dosen",showModal:s,setShowModal:t,children:(0,a.jsxs)("form",{onSubmit:y(_),children:[(0,a.jsx)(m.Z,{name:"id",register:w,type:"hidden"}),(0,a.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,a.jsx)(k,{register:w,errors:Z,dtEdit:r,control:S,watch:D,setValue:N,showModal:s,myFile:v,setMyFile:f,tgl:c,setTgl:j})}),(0,a.jsx)("div",{children:(0,a.jsx)(u.Z,{text:"Simpan",onClick:y(_)})})]})})},Z=t(686),D=t(8919),C=t(8350),_=t(3415),M=()=>{var e,s,t,i,n;let{removeData:m,setShowDetBeritaAcara:x,showDetBeritaAcara:p}=(0,d.Z)(),j=(0,o.useSearchParams)(),v=j.get("berita_acara_id")||"",[f,g]=(0,l.useState)(!1),[b,w]=(0,l.useState)(!1),[y,N]=(0,l.useState)(),[k,M]=(0,l.useState)(),[P,E]=(0,l.useState)(""),[F,T]=(0,l.useState)(!1),q=async e=>{let{id:s,isDelete:t}=e;if(N(s),t){let{data:e}=await m(y);(0,h.Z)({event:e}),w(!1)}else w(!0)};(0,l.useEffect)(()=>(x(v),()=>{}),[v,x]);let A=null==p?void 0:p.jadwal;return(0,a.jsxs)("div",{className:"flex flex-col h-full",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(D.x7,{}),(0,a.jsx)(S,{dtEdit:k,showModal:f,setShowModal:g}),(0,a.jsx)(Z.Z,{showDel:b,setShowDel:w,setDelete:q}),(0,a.jsxs)("div",{className:"mb-4 flex flex-col-reverse justify-between md:flex-row",children:[(0,a.jsxs)("div",{className:"flex flex-col w-full",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"w-32 inline-block uppercase",children:"Dosen"}),(0,a.jsxs)("span",{children:[": ",null==A?void 0:null===(e=A.dosen)||void 0===e?void 0:e.nama]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"w-32 inline-block uppercase",children:"KODE MK"}),(0,a.jsxs)("span",{children:[": ",null==A?void 0:null===(s=A.matkul)||void 0===s?void 0:s.kode]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"w-32 inline-block uppercase",children:"Mata Kuliah"}),(0,a.jsxs)("span",{children:[": ",null==A?void 0:null===(t=A.matkul)||void 0===t?void 0:t.nama]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"w-32 inline-block uppercase",children:"SKS/SMT/KLS"}),(0,a.jsxs)("span",{children:[": ",null==A?void 0:null===(i=A.matkul)||void 0===i?void 0:i.sks," / ",null==A?void 0:A.semester," T.A 2023/2024"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"w-32 inline-block uppercase",children:"Ruangan"}),(0,a.jsxs)("span",{children:[": ",null==A?void 0:null===(n=A.ruangan)||void 0===n?void 0:n.kode]})]})]}),(0,a.jsxs)("div",{className:"flex justify-between self-start md:w-64",children:[F?(0,a.jsx)(r.Z,{}):(0,a.jsx)(u.Z,{text:"Cetak",addClass:"self-end bg-secondary",onClick:()=>{T(!0),window.open("".concat(_._n,"/pdf/berita-acara/").concat(v)),T(!1)}}),(0,a.jsx)(u.Z,{text:"Tambah Data",addClass:"self-end",onClick:()=>{g(!0),M(null)}})]})]}),(0,a.jsx)(C.Z,{placeholder:"Cari Data",onChange:e=>E(e)})]}),(0,a.jsx)(c,{setDelete:q,setEdit:e=>{g(!0),M(e)},search:P})]})}},366:function(e,s,t){"use strict";var a=t(9268);t(6006),s.Z=e=>{let{text:s,onClick:t,addClass:l}=e;return(0,a.jsx)("button",{onClick:t,className:"bg-primary rounded-lg px-4 py-2 text-white w-fit cursor-pointer hover:shadow-sm hover:shadow-primary ".concat(l),children:s})}},63:function(e,s,t){"use strict";var a=t(9268),l=t(3415),r=t(6394),i=t.n(r),n=t(6006),d=t(5883),o=t.n(d);s.Z=e=>{let{label:s,register:t,required:r,name:d,errors:c,addClass:u,accept:m,setValue:x,fileEdit:h,myFile:p,setMyFile:j}=e,[v,f]=(0,n.useState)(),g=e=>new Promise(()=>{if(e){var s;let t=(null==e?void 0:null===(s=e.type)||void 0===s?void 0:s.split("/"))||[],a=t[0];if("image"!==a)return b(e);console.log({splitType:t}),o().imageFileResizer(e,1500,1500,t[1],80,0,e=>{b(e)},"file")}else b(null)}),b=e=>{var s;if(e){let s=new FileReader;s.readAsDataURL(e),s.onloadend=()=>{j(s.result)}}let t=(null==e?void 0:null===(s=e.type)||void 0===s?void 0:s.split("/"))||[];f(t[0]),x(d,e)};return(0,a.jsxs)("div",{className:u,children:[(0,a.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:s}),r&&(0,a.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,a.jsx)("input",{className:"w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",id:"fileInput",type:"file",accept:m,onChange:e=>{var s;let t=(null===(s=e.target)||void 0===s?void 0:s.files[0])||null;g(t)}}),(0,a.jsx)("input",{type:"hidden",id:s,...t(d,{required:r})}),(0,a.jsxs)("div",{className:"flex gap-4 mt-2",children:[p&&"image"===v&&(0,a.jsx)(i(),{className:"rounded-lg",src:p,width:100,height:100,alt:""}),h&&"file"!==d&&(0,a.jsx)("div",{children:(0,a.jsx)(i(),{src:"".concat(l._n,"/").concat(h),width:100,height:100,alt:""})})]}),(null==c?void 0:c.type)==="required"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[s," tidak boleh kosong"]})]})}},2985:function(e,s,t){"use strict";var a=t(9268);t(6006),s.Z=e=>{let{label:s,register:t,required:l,name:r,minLength:i,maxLength:n,errors:d,valueAsNumber:o,type:c="text",readOnly:u,placeholder:m,autoComplete:x="on",addClass:h,value:p,labelCss:j="text-gray-700"}=e;return(0,a.jsxs)("div",{className:h,children:[(0,a.jsx)("label",{htmlFor:r,className:"text-sm tracking-wide ".concat(j),children:s}),l&&(0,a.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("input",{className:"w-full text-base px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:border-secondary",type:c,id:r,readOnly:u,placeholder:m,autoComplete:x,...t(r,{required:l,minLength:i,maxLength:n,valueAsNumber:o}),value:p})}),(null==d?void 0:d.type)==="required"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[s," tidak boleh kosong"]}),(null==d?void 0:d.type)==="minLength"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[s," tidak boleh kurang dari ",i," karakter"]}),(null==d?void 0:d.type)==="maxLength"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[s," tidak boleh lebih dari ",n," karakter"]}),(null==d?void 0:d.type)==="pattern"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[s," hanya boleh angka."]})]})}},7808:function(e,s,t){"use strict";var a=t(9268);t(6006);var l=t(8136);s.Z=e=>{let{showModal:s,setShowModal:t,children:r,title:i,width:n=""}=e;return(0,a.jsx)("div",{className:"",children:s&&(0,a.jsx)("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,a.jsxs)("div",{className:"bg-white p-5 rounded-xl w-[500px] h-min mt-[10%] max-h-[70%] overflow-hidden flex flex-col lg:w-[700px]",style:{width:n},children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.2] mb-4 pb-2",children:[(0,a.jsx)("h5",{className:"text-xl font-roboto",children:i}),(0,a.jsx)(l.C7Q,{className:"cursor-pointer hover:text-primary",onClick:()=>t(!1)})]}),(0,a.jsx)("div",{className:"overflow-auto",children:r})]})})})}},686:function(e,s,t){"use strict";var a=t(9268);t(6006);var l=t(8136);s.Z=e=>{let{showDel:s,setShowDel:t,setDelete:r}=e;return s&&(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,a.jsxs)("div",{className:"bg-white p-5 rounded-xl lg:ml-64 md:min-w-[500px] h-min mt-[20%] max-h-[70%] overflow-auto",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.1] mb-4 pb-2",children:[(0,a.jsx)("h5",{className:"text-xl font-roboto",children:"Hapus Data"}),(0,a.jsx)(l.C7Q,{className:"cursor-pointer hover:text-black/[0.5]",onClick:()=>t(!1)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:"Apaka Anda Yakin Menghapus Data Ini?"}),(0,a.jsxs)("div",{className:"flex justify-center gap-4 mt-4",children:[(0,a.jsx)("button",{className:"hover:border hover:border-red-600 bg-red-600 w-20 py-2 rounded-xl text-white ",onClick:()=>r({isDelete:!0}),children:"Hapus"}),(0,a.jsx)("button",{className:"w-20 py-2 rounded-xl hover:border-b",onClick:()=>t(!1),children:"Batal"})]})]})]})})})}},1281:function(e,s,t){"use strict";t.d(s,{u:function(){return l}});var a=t(9268);t(6006);let l=e=>{let{label:s,register:t,required:l,name:r,placeholder:i,defaultOption:n,options:d=[],errors:o,addClass:c}=e;return(0,a.jsxs)("div",{className:c,children:[(0,a.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:s}),l&&(0,a.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsxs)("select",{className:"w-full rounded-lg py-2 px-2 bg-white border border-gray-300 focus:outline-none focus:border-secondary",id:s,placeholder:i,...t(r,{required:l}),children:[(0,a.jsx)("option",{value:"",children:n}),d.map((e,s)=>(0,a.jsx)("option",{value:e.value,children:e.label},s))]})}),(null==o?void 0:o.type)==="required"&&(0,a.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[s," tidak boleh kosong"]})]})}},4502:function(e,s,t){"use strict";var a=t(2561),l=t(4475),r=t(3415);let i=(0,a.Ue)((0,l.mW)((e,s)=>({dtProdi:[],setProdi:async s=>{let{page:t=1,limit:a=10,search:l}=s;try{let s=await (0,r.hi)({method:"get",url:"/prodi",params:{limit:a,page:t,search:l}});return e(e=>({...e,dtProdi:s.data})),{status:"berhasil",data:s.data}}catch(e){return{status:"error",error:e.response.data}}},setProdiAll:async s=>{let{search:t}=s;try{let s=await (0,r.hi)({method:"get",url:"/prodi/all",params:{search:t}});return e(e=>({...e,dtProdi:s.data})),{status:"berhasil",data:s.data}}catch(e){return{status:"error",error:e.response.data}}}})));s.Z=i},9442:function(e,s,t){"use strict";var a=t(8919);s.Z=e=>{let{event:s,position:t}=e;switch(s.type){case"success":a.ZP.success(s.message,{duration:4e3,position:t});break;case"error":a.ZP.error(s.message,{duration:4e3,position:t})}}}},function(e){e.O(0,[6680,4550,4288,1092,9700,3088,8119,9262,3554,9253,7698,1744],function(){return e(e.s=8239)}),_N_E=e.O()}]);