(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8455],{4548:function(e,t,a){Promise.resolve().then(a.bind(a,8834))},8834:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var s=a(9268),r=a(6006),l=a(593),i=a(5437),n=a(3346),c=a(769),o=a(6008),d=e=>{let{setDelete:t,setEdit:a,search:d}=e,u=(0,o.useSearchParams)(),m=u.get("berita_acara_id")||"",{setDetBeritaAcara:h,dtDetBeritaAcara:x}=(0,c.Z)(),[p,f]=(0,r.useState)(1),[j,v]=(0,r.useState)(10),[b,g]=(0,r.useState)(!0),k=async()=>{await h({page:p,limit:j,search:d,berita_acara_id:m}),g(!1)};return(0,r.useEffect)(()=>(k(),()=>{}),[p,j]),(0,r.useEffect)(()=>{f(1),k()},[d]),(0,s.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:b?(0,s.jsx)(l.Z,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(n.Z,{headTable:["No","Tgl. Pertemuan","Materi","Jumlah MHS","Sistem Belajar","Foto","Paraf","Aksi"],tableBodies:["tgl","materi","jmlh_mhs","sistem","foto","paraf_pemeriksa"],dataTable:x.data,page:p,limit:j,setEdit:a,setDelete:t,ubah:!0,hapus:!1})}),(null==x?void 0:x.last_page)>1&&(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(i.Z,{currentPage:null==x?void 0:x.current_page,totalPages:null==x?void 0:x.last_page,setPage:f})})]})})},u=a(8919),m=a(3415),h=a(1468),x=a(2985),p=a(7808),f=a(9442),j=a(9700),v=a(5131);a(6760);var b=e=>{let{register:t,errors:a,control:r,dtEdit:l,watch:i,setValue:n,showModal:c,tgl:o,setTgl:d,myFile:u,setMyFile:m}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(v.Z,{watch:i,control:r,name:"paraf_pemeriksa",label:"Paraf Pemeriksa",required:!l,errors:a.paraf_pemeriksa,setValue:n,clear:!0,addClass:"col-span-4 lg:col-span-2"})})},g=a(541),k=e=>{let{showModal:t,setShowModal:a,dtEdit:i}=e,n=(0,o.useSearchParams)(),d=n.get("berita_acara_id")||"",[u,m]=(0,r.useState)(new Date("01-01-1980")),[h,v]=(0,r.useState)(),[k,w]=(0,r.useState)(!1),{addData:y,updateData:N}=(0,c.Z)(),{register:_,handleSubmit:S,setValue:Z,control:L,formState:{errors:P},watch:C}=(0,j.cI)(),E=()=>{Z("id",""),Z("materi",""),Z("jmlh_mhs",""),Z("tgl",""),Z("foto",""),Z("paraf_dosen",""),Z("paraf_mhs",""),Z("paraf_pemeriksa",""),m(""),v(null)};(0,r.useEffect)(()=>{i?(Z("id",i.id),Z("materi",i.materi),Z("jmlh_mhs",i.jmlh_mhs),Z("tgl",i.tgl),m(new Date(i.tgl)),Z("foto",i.foto),Z("sistem",i.sistem)):E()},[t,i]);let M=async e=>{if(w(!0),e.berita_acara_id=d,i){let{data:t}=await N(i.id,e);(0,f.Z)({event:t}),a(!1)}else{let{data:t}=await y(e);console.log({data:t}),(0,f.Z)({event:t}),(null==t?void 0:t.type)!=="success"||E()}w(!1)};return(0,s.jsx)(p.Z,{title:"Form Pemeriksa",showModal:t,setShowModal:a,children:(0,s.jsxs)("form",{onSubmit:S(M),children:[(0,s.jsx)(x.Z,{name:"id",register:_,type:"hidden"}),(0,s.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,s.jsx)(b,{register:_,errors:P,dtEdit:i,control:L,watch:C,setValue:Z,showModal:t,myFile:h,setMyFile:v,tgl:u,setTgl:m})}),(0,s.jsx)("div",{children:k?(0,s.jsx)(l.Z,{}):(0,s.jsx)(g.Z,{onClick:S(M),children:"Simpan"})})]})})},w=a(7304),y=()=>{var e,t,a,i,n;let x="Detail Berita Acara",{removeData:p,showDetBeritaAcara:f}=(0,c.Z)(),{setShowJadwal:v,dtJadwal:b}=(0,h.Z)(),y=(0,o.useSearchParams)(),N=y.get("berita_acara_id")||"",_=y.get("jadwal_id")||"",[S,Z]=(0,r.useState)(!1),[L,P]=(0,r.useState)(),[C,E]=(0,r.useState)(),[M,T]=(0,r.useState)(""),[U,D]=(0,r.useState)(!1);(0,r.useEffect)(()=>(v(_),()=>{}),[_,v]),console.log({jadwal:b});let{register:A,handleSubmit:H,formState:{errors:B},setValue:F,watch:R}=(0,j.cI)();return(0,s.jsxs)("div",{className:"flex flex-col h-full",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(u.Toaster,{}),(0,s.jsx)(k,{dtEdit:C,showModal:S,setShowModal:Z}),(0,s.jsxs)("div",{className:"mb-4 flex flex-col-reverse justify-between md:flex-row",children:[(0,s.jsxs)("div",{className:"flex flex-col w-full",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"w-32 inline-block uppercase",children:"Dosen"}),(0,s.jsxs)("span",{children:[": ",null==b?void 0:null===(e=b.dosen)||void 0===e?void 0:e.nama]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"w-32 inline-block uppercase",children:"KODE MK"}),(0,s.jsxs)("span",{children:[": ",null==b?void 0:null===(t=b.matkul)||void 0===t?void 0:t.kode]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"w-32 inline-block uppercase",children:"Mata Kuliah"}),(0,s.jsxs)("span",{children:[": ",null==b?void 0:null===(a=b.matkul)||void 0===a?void 0:a.nama]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"w-32 inline-block uppercase",children:"SKS/SMT/KLS"}),(0,s.jsxs)("span",{children:[": ",null==b?void 0:null===(i=b.matkul)||void 0===i?void 0:i.sks," / ",null==b?void 0:b.semester," T.A 2023/2024"]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"w-32 inline-block uppercase",children:"Ruangan"}),(0,s.jsxs)("span",{children:[": ",null==b?void 0:null===(n=b.ruangan)||void 0===n?void 0:n.kode]})]})]}),(0,s.jsx)("div",{className:"flex justify-between self-start mr-4",children:U?(0,s.jsx)(l.Z,{}):(0,s.jsx)(g.Z,{addClass:"self-end bg-secondary text-white",onClick:()=>{D(!0),window.open("".concat(m._n,"/pdf/berita-acara/").concat(N)),D(!1)},children:"Cetak ".concat(x)})})]}),(0,s.jsx)(w.Z,{placeholder:"Cari ".concat(x),name:"cari",register:A,setValue:F,watch:R})]}),(0,s.jsx)(d,{setEdit:e=>{Z(!0),E(e)},search:M})]})}},541:function(e,t,a){"use strict";var s=a(9268);t.Z=e=>{let{children:t,onClick:a,addClass:r="bg-primary hover:bg-primary/80 text-white",type:l="submit"}=e;return(0,s.jsx)("button",{type:l,className:"rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ".concat(r," "),onClick:a,children:t})}},2985:function(e,t,a){"use strict";var s=a(9268);t.Z=e=>{let{label:t,register:a,required:r,name:l,minLength:i,maxLength:n,errors:c,valueAsNumber:o,type:d="text",readOnly:u,placeholder:m,autoComplete:h="on",addClass:x,value:p,defaultValue:f,max:j,min:v,step:b,labelCss:g}=e;return(0,s.jsxs)("div",{className:x,children:[(0,s.jsx)("label",{htmlFor:l,className:"text-sm font-medium text-gray-700 tracking-wide ".concat(g),children:t}),r&&(0,s.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary",type:d,id:l,readOnly:u,placeholder:m,autoComplete:h,...a(l,{required:r,minLength:i,maxLength:n,valueAsNumber:o,max:j,min:v,step:b}),defaultValue:f,value:p})}),(null==c?void 0:c.type)==="required"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kosong"]}),(null==c?void 0:c.type)==="minLength"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kurang dari ",i," karakter"]}),(null==c?void 0:c.type)==="maxLength"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh lebih dari ",n," karakter"]}),(null==c?void 0:c.type)==="pattern"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," hanya boleh angka."]}),(null==c?void 0:c.type)==="max"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh lebih dari ",j,"."]}),(null==c?void 0:c.type)==="min"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kurang dari ",v,"."]})]})}},593:function(e,t,a){"use strict";var s=a(9268);a(6006),t.Z=()=>(0,s.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-primary border-t-transparent shadow-md"})},7808:function(e,t,a){"use strict";var s=a(9268);a(6006);var r=a(8136);t.Z=e=>{let{showModal:t,setShowModal:a,children:l,title:i,width:n=""}=e;return(0,s.jsx)("div",{className:"text-black",children:t&&(0,s.jsx)("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,s.jsxs)("div",{className:"bg-white p-5 rounded-xl w-[500px] h-min mt-[10%] max-h-[70%] overflow-hidden flex flex-col lg:w-[700px] ",style:{width:n},children:[(0,s.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.2] mb-4 pb-2",children:[(0,s.jsx)("h5",{className:"text-xl font-roboto",children:i}),(0,s.jsx)(r.C7Q,{className:"cursor-pointer hover:text-primary",onClick:()=>a(!1)})]}),(0,s.jsx)("div",{className:"overflow-auto",children:l})]})})})}},3346:function(e,t,a){"use strict";var s=a(9268),r=a(4956),l=a(6008),i=a(6006),n=a(8136);t.Z=e=>{let t=(0,l.useRouter)(),a=(0,l.useSearchParams)(),[c,o]=(0,i.useState)(0),[d,u]=(0,i.useState)(),[m,h]=(0,i.useState)(),x=t=>(e.page-1)*e.limit+t+1,p=a.get("sortby"),f=(e,a)=>{u(e);let s=window.location.href,r=new URL(s),l=new URLSearchParams(r.search),i=e===p?c+1:1,n=i%2==0?"desc":"asc";l.delete("sortby"),l.delete("order"),l.append("sortby",e),l.append("order",n),r.search=l.toString(),t.push(r.toString()),o(i),h(n)};return(0,i.useEffect)(()=>{e.sorter&&f(e.sorter)},[e.sorter]),(0,s.jsxs)("table",{className:"w-full border-collapse text-left bg-white/50 text-black",children:[(0,s.jsx)("thead",{className:"",children:(0,s.jsx)("tr",{children:e.headTable&&e.headTable.map((t,a)=>{let r=e.tableBodies[a-1];return(0,s.jsx)("th",{scope:"col",className:"px-6 py-4 ".concat(!("Aksi"===t||"No"===t)&&"cursor-pointer"),onClick:()=>{"Aksi"===t||"No"===t||f(r,a)},children:(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[t,d===r&&(0,s.jsxs)("span",{className:"flex",children:[(0,s.jsx)(n.mXI,{className:"".concat("desc"===m&&"hidden")}),(0,s.jsx)(n.S9U,{className:"".concat("asc"===m&&"hidden")})]})]})},a)})})}),(0,s.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((t,a)=>{let{id:l}=t;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:x(a)}),e.tableBodies.map((l,i)=>(0,s.jsx)("td",{className:"px-6 py-4",children:(0,r.Z)(t,l,a,e.setIndexBox)},i)),(0,s.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,s.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(t),e.ubah&&(0,s.jsx)(n.Ph1,{onClick:()=>e.setEdit&&(null==e?void 0:e.setEdit(t)),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&(0,s.jsx)(n.AuQ,{onClick:()=>(null==e?void 0:e.setDelete)&&(null==e?void 0:e.setDelete({id:l,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},a)})})]})}},3415:function(e,t,a){"use strict";a.d(t,{I8:function(){return l},Sj:function(){return i},_n:function(){return r},cB:function(){return c},hi:function(){return n}});var s=a(4214);let r="https://back.silaku.fstuogp.com",l=s.Z.create({baseURL:"".concat(r,"/auth")}),i=s.Z.create({baseURL:"".concat(r,"/crud")}),n=s.Z.create({baseURL:"".concat(r,"/api")});s.Z.create({baseURL:"".concat(r,"/storage")});let c=s.Z.create({baseURL:"".concat("https://back.edom.fstuogp.com","/api")})},4956:function(e,t,a){"use strict";var s=a(9268),r=a(3415),l=a(6394),i=a.n(l),n=a(5326),c=a.n(n);t.Z=(e,t,a,l)=>{var n,o;let d=null===(o=e)||void 0===o?void 0:null===(n=o.thn_angkatan)||void 0===n?void 0:n.substring(2),u=t.split(".");if(Array.isArray(u)){let n=u.length>1?u.pop():u;if(n.includes("mulai_seles")){let t=c()(e.mulai,"HH:mm:ss").format("HH:mm"),a=c()(e.seles,"HH:mm:ss").format("HH:mm");return"".concat(t,"-").concat(a)}if(n.includes("progdi_smt")){let t=e.prodi.singkat,a=e.matkul.semester;return"".concat(t,"-").concat(a)}if(n.includes("NPM_FULL"))return"".concat(e.prodi.kode).concat(d).concat(e.NPM);if(n.includes("jml_pertemuan")){let t=e.det_berita_acara,a=null==t?void 0:t.length;return a}let o=u.length,m=1,h=u[0];for(;(e=e[h])&&m<o;)h=u[m],m++;return"object"==typeof e?e?e[n]:"":"tgl_mulai"===t||"tgl_selesai"===t||"tgl"===t?c()(e).format("DD/MM/YYYY"):["gambar","foto","paraf","paraf_mhs","paraf_dosen","paraf_pemeriksa"].includes(t)?e&&!["undefined",null,void 0].includes(e)?(0,s.jsx)(i(),{src:"".concat(r._n,"/").concat(e),width:100,height:100,className:"cursor-pointer",alt:"",onClick:l?()=>l("".concat(a,"-").concat(t)):void 0}):null:"file"===t?e&&(0,s.jsx)("a",{href:"".concat(r._n,"/").concat(e),target:"_blank",children:"Lihat File"}):(0,s.jsx)("p",{className:"capitalize",children:e})}throw"parts is not valid array"}},4406:function(e,t,a){"use strict";var s=a(2561),r=a(4475),l=a(3415),i=a(1712);let n=(0,s.Ue)((0,r.mW)((e,t)=>({dtLogin:[],setToken:async()=>{let e=i.Z.get("token");return e},setLogin:async e=>{try{let t=await (0,l.I8)({method:"post",url:"/login",data:e});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let a=await t().setToken();try{let t=await (0,l.I8)({method:"post",url:"/cek_token",headers:{Authorization:"Bearer ".concat(a)}});return e(e=>({...e,dtLogin:t.data})),{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setUpdate:async(a,s)=>{try{let r=await t().setToken(),i=await (0,l.I8)({method:"post",url:"/update/".concat(a),headers:{Authorization:"Bearer ".concat(r)},data:s});return e(e=>({...e,dtLogin:i.data.data})),{status:"success",data:i.data}}catch(e){return console.log(e.response.data),{status:"error",data:e.response.data}}}})));t.Z=n},9442:function(e,t,a){"use strict";var s=a(8919);t.Z=e=>{let{event:t,position:a}=e;switch(t.type){case"success":s.default.success(t.message,{duration:4e3,position:a});break;case"error":s.default.error(t.message,{duration:4e3,position:a})}}}},function(e){e.O(0,[6680,4550,4288,1053,831,3088,5724,3637,9253,7698,1744],function(){return e(e.s=4548)}),_N_E=e.O()}]);