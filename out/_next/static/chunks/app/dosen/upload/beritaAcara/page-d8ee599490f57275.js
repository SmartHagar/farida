(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2249],{216:function(e,a,t){Promise.resolve().then(t.bind(t,8090))},8090:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return N}});var r=t(9268),l=t(6006),s=t(1712),i=t(593),n=t(3346),d=t(9114),o=t(1468),u=e=>{let{setDelete:a,setEdit:t,search:u,tahunWatch:c,semesterWatch:h}=e,m=s.Z.get("dosen_id")||"",{setShowBeritaAcara:p,showBeritaAcara:f}=(0,d.Z)(),{setJadwalByDosenFull:g,dtJadwal:w}=(0,o.Z)(),[v,b]=(0,l.useState)(1),[y,x]=(0,l.useState)(10),[j,S]=(0,l.useState)(!0),[N,A]=(0,l.useState)(),k=async()=>{S(!0),await g({dosen_id:m,search:u,tahun:c,semester:h}),S(!1)};(0,l.useMemo)(()=>c&&h&&k(),[m,c,h]);let B=async()=>{var e;let a=[];null==w||null===(e=w.data)||void 0===e||e.map(e=>{a.push(e.id)});let t=a.join(",");a.length>0&&await p({id:m,jadwal_id:t})};(0,l.useEffect)(()=>{B()},[JSON.stringify(w)]);let Z=(e,a)=>{console.log({dtJadwal:e,showBeritaAcara:a});let t=null==a?void 0:a.map(a=>{let t=null==e?void 0:e.find(e=>e.id===parseInt(a.berita_acara.jadwal_id));return t?{...a,jadwal:t}:null}).filter(e=>null!==e);A({data:t}),S(!1)};return(0,l.useEffect)(()=>{var e;(null==w?void 0:null===(e=w.data)||void 0===e?void 0:e.length)>0&&Z(null==w?void 0:w.data,f)},[JSON.stringify(f),JSON.stringify(w)]),(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:j?(0,r.jsx)(i.Z,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"",children:(0,r.jsx)(n.Z,{headTable:["No","Hari","Mata Kuliah","Kode MK","JML. SKS","BERITA ACARA","Aksi"],tableBodies:["jadwal.hari","jadwal.matkul.nama","jadwal.matkul.kode","jadwal.matkul.sks","file"],dataTable:null==N?void 0:N.data,page:v,limit:y,setEdit:t,setDelete:a,hapus:!0,ubah:!0})})})})},c=t(366),h=t(2985),m=t(7808),p=t(9442),f=t(9700),g=t(63),w=t(1112),v=t(8668);t(6760);var b=e=>{let{register:a,errors:t,control:i,dtEdit:n,watch:d,setValue:u,showModal:c,myFile:h,setMyFile:m,tahunWatch:p,semesterWatch:f}=e,b=s.Z.get("dosen_id"),{setJadwalByDosenFull:y,dtJadwal:x}=(0,o.Z)(),{setBeritaAcaraByJadwal:j,dtBeritaAcara:S}=(0,v.Z)(),[N,A]=(0,l.useState)(),k=async()=>{await y({dosen_id:b,tahun:p,semester:f})};(0,l.useMemo)(()=>p&&f&&k(),[b,p,f,c]);let B=async()=>{var e;let a=[];null==x||null===(e=x.data)||void 0===e||e.map(e=>{a.push(e.id)});let t=a.join(",");a.length>0&&await j({jadwal_id:t})};(0,l.useEffect)(()=>{B()},[JSON.stringify(x)]);let Z=(e,a)=>{let t=null==a?void 0:a.map(a=>{let t=null==e?void 0:e.find(e=>e.id===parseInt(a.jadwal_id));return t?{...a,jadwal:t}:null}).filter(e=>null!==e);A({data:t})};return(0,l.useEffect)(()=>{Z(null==x?void 0:x.data,null==S?void 0:S.data)},[JSON.stringify(S)]),(0,r.jsxs)(r.Fragment,{children:[(null==N?void 0:N.data)&&(0,r.jsx)(w.Z,{label:"Jadwal",placeholder:"Pilih Jadwal",name:"berita_acara_id",dataDb:null==N?void 0:N.data,body:["id","jadwal.hari","jadwal.matkul.nama","jadwal.mulai","jadwal.seles"],control:i,required:!0,errors:t.berita_acara_id,addClass:"col-span-4"}),(0,r.jsx)(g.Z,{label:"Berita Acara",name:"file",register:a,accept:"application/pdf",required:!0,errors:t.file,addClass:"col-span-4",setValue:u,fileEdit:null==n?void 0:n.file,myFile:h,setMyFile:m})]})},y=e=>{let{showModal:a,setShowModal:t,dtEdit:s,tahunWatch:i,semesterWatch:n}=e,[o,u]=(0,l.useState)(),{addData:g,updateData:w}=(0,d.Z)(),{register:v,handleSubmit:y,setValue:x,control:j,formState:{errors:S},watch:N}=(0,f.cI)(),A=()=>{x("id",""),x("berita_acara_id",""),x("file",""),u(null)};(0,l.useEffect)(()=>{s?(x("id",s.id),x("berita_acara_id",parseInt(s.berita_acara_id)),x("file",s.file)):A()},[a,s]);let k=async e=>{if(console.log({row:e}),s){let{data:a}=await w(s.id,e);(0,p.Z)({event:a}),t(!1)}else{let{data:a}=await g(e);console.log({data:a}),(0,p.Z)({event:a}),(null==a?void 0:a.type)!=="success"||A()}};return(0,r.jsx)(m.Z,{title:"Form Dosen",showModal:a,setShowModal:t,children:(0,r.jsxs)("form",{onSubmit:y(k),children:[(0,r.jsx)(h.Z,{name:"id",register:v,type:"hidden"}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,r.jsx)(b,{register:v,errors:S,dtEdit:s,control:j,watch:N,setValue:x,showModal:a,myFile:o,setMyFile:u,tahunWatch:i,semesterWatch:n})}),(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{text:"Simpan",onClick:y(k)})})]})})},x=t(686),j=t(8919),S=t(8350),N=()=>{let{removeData:e}=(0,d.Z)(),[a,t]=(0,l.useState)(!1),[s,i]=(0,l.useState)(!1),[n,o]=(0,l.useState)(),[h,m]=(0,l.useState)(),[g,w]=(0,l.useState)(""),[v,b]=(0,l.useState)(""),[N,A]=(0,l.useState)(""),k=async a=>{let{id:t,isDelete:r}=a;if(o(t),r){let{data:a}=await e(n);(0,p.Z)({event:a}),i(!1)}else i(!0)},{register:B,control:Z,formState:{errors:_},watch:F,setValue:D}=(0,f.cI)();return(0,l.useEffect)(()=>{let e=new Date().getFullYear();return b(e),A("Genap"),()=>{}},[]),(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(j.Toaster,{}),(0,r.jsx)(y,{dtEdit:h,showModal:a,setShowModal:t,tahunWatch:v,semesterWatch:N}),(0,r.jsx)(x.Z,{showDel:s,setShowDel:i,setDelete:k}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,r.jsx)("p",{children:"Silahkan mengolah data berita acara"}),(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{text:"Tambah berita acara",onClick:()=>{t(!0),m(null)}})})]}),(0,r.jsx)(S.Z,{placeholder:"Cari BeritaAcara",onChange:e=>w(e)})]}),(0,r.jsx)(u,{setDelete:k,setEdit:e=>{t(!0),m(e)},search:g,tahunWatch:v,semesterWatch:N})]})}},63:function(e,a,t){"use strict";var r=t(9268),l=t(3415),s=t(6394),i=t.n(s),n=t(6006),d=t(5883),o=t.n(d);a.Z=e=>{let{label:a,register:t,required:s,name:d,errors:u,addClass:c,accept:h,setValue:m,fileEdit:p,myFile:f,setMyFile:g}=e,[w,v]=(0,n.useState)(),b=e=>new Promise(()=>{if(e){var a;let t=(null==e?void 0:null===(a=e.type)||void 0===a?void 0:a.split("/"))||[],r=t[0];if("image"!==r)return y(e);console.log({splitType:t}),o().imageFileResizer(e,1500,1500,t[1],80,0,e=>{y(e)},"file")}else y(null)}),y=e=>{var a;if(e){let a=new FileReader;a.readAsDataURL(e),a.onloadend=()=>{g(a.result)}}let t=(null==e?void 0:null===(a=e.type)||void 0===a?void 0:a.split("/"))||[];v(t[0]),m(d,e)};return(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),s&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("input",{className:"w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",id:"fileInput",type:"file",accept:h,onChange:e=>{var a;let t=(null===(a=e.target)||void 0===a?void 0:a.files[0])||null;b(t)}}),(0,r.jsx)("input",{type:"hidden",id:a,...t(d,{required:s})}),(0,r.jsxs)("div",{className:"flex gap-4 mt-2",children:[f&&"image"===w&&(0,r.jsx)(i(),{className:"rounded-lg",src:f,width:100,height:100,alt:""}),p&&"file"!==d&&(0,r.jsx)("div",{children:(0,r.jsx)(i(),{src:"".concat(l._n,"/").concat(p),width:100,height:100,alt:""})})]}),(null==u?void 0:u.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kosong"]})]})}},8350:function(e,a,t){"use strict";var r=t(9268);t(6006),a.Z=e=>{let{placeholder:a,addClass:t,onChange:l,defaultValue:s=""}=e;return(0,r.jsx)("div",{className:t,children:(0,r.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",placeholder:a,onChange:e=>{l(e.target.value)},defaultValue:s})})}},686:function(e,a,t){"use strict";var r=t(9268);t(6006);var l=t(8136);a.Z=e=>{let{showDel:a,setShowDel:t,setDelete:s}=e;return a&&(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,r.jsxs)("div",{className:"bg-white p-5 rounded-xl lg:ml-64 md:min-w-[500px] h-min mt-[20%] max-h-[70%] overflow-auto",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.1] mb-4 pb-2",children:[(0,r.jsx)("h5",{className:"text-xl font-roboto",children:"Hapus Data"}),(0,r.jsx)(l.C7Q,{className:"cursor-pointer hover:text-black/[0.5]",onClick:()=>t(!1)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Apaka Anda Yakin Menghapus Data Ini?"}),(0,r.jsxs)("div",{className:"flex justify-center gap-4 mt-4",children:[(0,r.jsx)("button",{className:"hover:border hover:border-red-600 bg-red-600 w-20 py-2 rounded-xl text-white ",onClick:()=>s({isDelete:!0}),children:"Hapus"}),(0,r.jsx)("button",{className:"w-20 py-2 rounded-xl hover:border-b",onClick:()=>t(!1),children:"Batal"})]})]})]})})})}},3346:function(e,a,t){"use strict";var r=t(9268),l=t(4956),s=t(6008),i=t(8136);a.Z=e=>{(0,s.useRouter)();let a=a=>(e.page-1)*e.limit+a+1;return(0,r.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,r.jsx)("thead",{className:"",children:(0,r.jsx)("tr",{children:e.headTable&&e.headTable.map((e,a)=>(0,r.jsx)("th",{scope:"col",className:"px-6 py-4",children:e},a))})}),(0,r.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((t,s)=>{let{id:n}=t;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:a(s)}),e.tableBodies.map((e,a)=>(0,r.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,l.Z)(t,e)},a)),(0,r.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(t),e.ubah&&(0,r.jsx)(i.Ph1,{onClick:()=>e.setEdit&&e.setEdit(t),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&(0,r.jsx)(i.AuQ,{onClick:()=>(null==e?void 0:e.setDelete)&&(null==e?void 0:e.setDelete({id:n,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},s)})})]})}},8668:function(e,a,t){"use strict";var r=t(2561),l=t(4475),s=t(3415);let i=(0,r.Ue)((0,l.mW)((e,a)=>({dtBeritaAcara:[],setBeritaAcaraByJadwal:async a=>{let{jadwal_id:t}=a;try{let a=await (0,s.hi)({method:"get",url:"/berita-acara/byJadwal",params:{jadwal_id:t}});return e(e=>({...e,dtBeritaAcara:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=i},1468:function(e,a,t){"use strict";var r=t(2561),l=t(4475),s=t(3415);let i=(0,r.Ue)((0,l.mW)((e,a)=>({dtJadwal:[],setJadwal:async a=>{let{page:t=1,limit:r=10,search:l,tahun:i,semester:n,prodi_id:d}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal",params:{limit:r,page:t,search:l,tahun:i,semester:n,prodi_id:d}});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalAll:async a=>{let{search:t}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal/all",params:{search:t}});return e(e=>({...e,dtJadwal:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByDosenFull:async a=>{let{tahun:t,semester:r,dosen_id:l}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal/byDosenFull",params:{tahun:t,semester:r,dosen_id:l}});return e(e=>({...e,dtJadwal:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setByTahunSemester:async a=>{let{search:t,tahun:r,semester:l,prodi_id:i}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal/byTahunSemester",params:{search:t,tahun:r,semester:l,prodi_id:i}});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByRps:async a=>{let{tahun:t,semester:r,dosen_id:l}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal/by-rps",params:{dosen_id:l}});return e(e=>({...e,dtJadwal:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setShowJadwal:async a=>{try{let t=await (0,s.VF)({method:"get",url:"/jadwal/".concat(a)});return e(e=>({...e,dtJadwal:t.data.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=i},9114:function(e,a,t){"use strict";var r=t(2561),l=t(4475),s=t(3415),i=t(4406);let n=(0,r.Ue)((0,l.mW)((e,a)=>({setFormData:e=>{let a=new FormData;return a.append("berita_acara_id",e.berita_acara_id),a.append("file",e.file),a},dtBeritaAcara:[],showBeritaAcara:[],setBeritaAcara:async a=>{let{page:t=1,limit:r=10}=a;try{let a=await i.Z.getState().setToken(),l=await (0,s.Sj)({method:"get",url:"/upload/berita-acara",headers:{Authorization:"Bearer ".concat(a)},params:{limit:r,page:t}});return e(e=>({...e,dtBeritaAcara:l.data.data})),{status:"berhasil",data:l.data}}catch(e){var l;return{status:"error",error:null===(l=e.response)||void 0===l?void 0:l.data}}},setShowBeritaAcara:async a=>{let{id:t,jadwal_id:r}=a;try{let a=await i.Z.getState().setToken(),l=await (0,s.Sj)({method:"get",url:"/upload/berita-acara/".concat(t),headers:{Authorization:"Bearer ".concat(a)},params:{jadwal_id:r}});return e(e=>({...e,showBeritaAcara:l.data.data})),{status:"berhasil",data:l.data}}catch(e){var l;return{status:"error",error:null===(l=e.response)||void 0===l?void 0:l.data}}},addData:async t=>{let r=(null==t?void 0:t.file)?a().setFormData(t):t;try{let a=await i.Z.getState().setToken(),t=await (0,s.Sj)({method:"post",url:"/upload/berita-acara",headers:{Authorization:"Bearer ".concat(a),"Content-Type":"multipart/form-data"},data:r});return e(e=>({showBeritaAcara:[t.data.data,...e.showBeritaAcara]})),{status:"berhasil tambah",data:t.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async a=>{try{let t=await i.Z.getState().setToken(),r=await (0,s.Sj)({method:"delete",url:"/upload/berita-acara/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({showBeritaAcara:e.showBeritaAcara.filter(e=>e.id!==a)})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(t,r)=>{delete r.id;let l=(null==r?void 0:r.file)?a().setFormData(r):r,n=await i.Z.getState().setToken();try{let a=await (0,s.Sj)({url:"/upload/berita-acara/".concat(t),method:"post",headers:(null==r?void 0:r.file)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(n)}:{Authorization:"Bearer ".concat(n)},data:l,params:{_method:"PUT"}});return e(e=>({showBeritaAcara:e.showBeritaAcara.map(e=>e.id===t?{...e,...a.data.data}:e)})),{status:"berhasil update",data:a.data}}catch(e){return{status:"error",data:e.response.data}}}})));a.Z=n},6008:function(e,a,t){e.exports=t(4e3)},5883:function(e){(()=>{"use strict";var a={d:(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};a.r(t),a.d(t,{default:()=>l});var r=function(){var e;function a(){!function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,a)}return e=[{key:"changeHeightWidth",value:function(e,a,t,r,l,s){return t>r&&(e=Math.round(e*r/t),t=r),e>a&&(t=Math.round(t*a/e),e=a),l&&t<l&&(e=Math.round(e*l/t),t=l),s&&e<s&&(t=Math.round(t*s/e),e=s),{height:e,width:t}}},{key:"resizeAndRotateImage",value:function(e,a,t,r,l){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"jpeg",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,n=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,d=document.createElement("canvas"),o=e.width,u=e.height,c=this.changeHeightWidth(u,t,o,a,r,l);n&&(90===n||270===n)?(d.width=c.height,d.height=c.width):(d.width=c.width,d.height=c.height),o=c.width,u=c.height;var h=d.getContext("2d");return h.fillStyle="rgba(0, 0, 0, 0)",h.fillRect(0,0,o,u),h.imageSmoothingEnabled&&h.imageSmoothingQuality&&(h.imageSmoothingQuality="high"),n&&(h.rotate(n*Math.PI/180),90===n?h.translate(0,-d.width):180===n?h.translate(-d.width,-d.height):270===n?h.translate(-d.height,0):0!==n&&360!==n||h.translate(0,0)),h.drawImage(e,0,0,o,u),d.toDataURL("image/".concat(s),i/100)}},{key:"b64toByteArrays",value:function(e,a){a=a||"image/jpeg";for(var t=atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),r=[],l=0;l<t.length;l+=512){for(var s=t.slice(l,l+512),i=Array(s.length),n=0;n<s.length;n++)i[n]=s.charCodeAt(n);var d=new Uint8Array(i);r.push(d)}return r}},{key:"b64toBlob",value:function(e,a){var t=this.b64toByteArrays(e,a);return new Blob(t,{type:a,lastModified:new Date})}},{key:"b64toFile",value:function(e,a,t){var r=this.b64toByteArrays(e,t);return new File(r,a,{type:t,lastModified:new Date})}},{key:"createResizedImage",value:function(e,t,r,l,s,i,n){var d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"base64",o=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,c=new FileReader;if(!e)throw Error("File Not Found!");if(e.type&&!e.type.includes("image"))throw Error("File Is NOT Image!");c.readAsDataURL(e),c.onload=function(){var h=new Image;h.src=c.result,h.onload=function(){var c=a.resizeAndRotateImage(h,t,r,o,u,l,s,i),m="image/".concat(l);switch(d){case"blob":n(a.b64toBlob(c,m));break;case"base64":default:n(c);break;case"file":var p=e.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(l.toString());n(a.b64toFile(c,p,m))}}},c.onerror=function(e){throw Error(e)}}}],function(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(a,e),a}();let l={imageFileResizer:function(e,a,t,l,s,i,n,d,o,u){return r.createResizedImage(e,a,t,l,s,i,n,d,o,u)}};e.exports=t})()}},function(e){e.O(0,[6680,4550,4288,2772,1092,3725,3088,7569,9253,7698,1744],function(){return e(e.s=216)}),_N_E=e.O()}]);