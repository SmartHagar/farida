(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7800],{8183:function(e,t,a){Promise.resolve().then(a.bind(a,9814))},9814:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return S}});var r=a(9268),l=a(6006),s=a(1712),n=a(593),i=a(3346),d=a(2775),o=a(1468),u=e=>{let{setDelete:t,setEdit:a,search:u,tahunWatch:c,semesterWatch:h}=e,m=s.Z.get("dosen_id")||"",{setShowAbsen:p,showAbsen:g}=(0,d.Z)(),{setJadwalByDosenFull:f,dtJadwal:b}=(0,o.Z)(),[w,v]=(0,l.useState)(1),[x,y]=(0,l.useState)(10),[j,S]=(0,l.useState)(!0),[N,k]=(0,l.useState)(),A=async()=>{S(!0),await f({dosen_id:m,search:u,tahun:c,semester:h}),S(!1)};(0,l.useMemo)(()=>c&&h&&A(),[m,c,h]);let Z=async()=>{var e;let t=[];null==b||null===(e=b.data)||void 0===e||e.map(e=>{t.push(e.id)});let a=t.join(",");t.length>0&&await p({id:m,jadwal_id:a})};(0,l.useEffect)(()=>{Z()},[JSON.stringify(b)]);let F=(e,t)=>{console.log({dtJadwal:e,showAbsen:t});let a=null==t?void 0:t.map(t=>{let a=null==e?void 0:e.find(e=>e.id===parseInt(t.jadwal_id));return a?{...t,jadwal:a}:null}).filter(e=>null!==e);k({data:a}),S(!1)};return(0,l.useEffect)(()=>{var e;(null==b?void 0:null===(e=b.data)||void 0===e?void 0:e.length)>0&&F(null==b?void 0:b.data,g)},[JSON.stringify(g),JSON.stringify(b)]),(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:j?(0,r.jsx)(n.Z,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"",children:(0,r.jsx)(i.Z,{headTable:["No","Hari","Mata Kuliah","Kode MK","JML. SKS","ABSEN","Aksi"],tableBodies:["jadwal.hari","jadwal.matkul.nama","jadwal.matkul.kode","jadwal.matkul.sks","file"],dataTable:null==N?void 0:N.data,page:w,limit:x,setEdit:a,setDelete:t,hapus:!0,ubah:!0})})})})},c=a(366),h=a(2985),m=a(7808),p=a(9442),g=a(9700),f=a(63),b=a(5371);a(6760);var w=e=>{let{register:t,errors:a,control:n,dtEdit:i,watch:d,setValue:u,showModal:c,myFile:h,setMyFile:m,tahunWatch:p,semesterWatch:g}=e,w=s.Z.get("dosen_id"),{setJadwalByDosenFull:v,dtJadwal:x}=(0,o.Z)(),y=async()=>{await v({tahun:p,semester:g,dosen_id:w})};return console.log(null==x?void 0:x.data),(0,l.useEffect)(()=>{p&&g&&y()},[c,p,g]),(0,r.jsxs)(r.Fragment,{children:[(null==x?void 0:x.data)&&(0,r.jsx)(b.Z,{label:"Jadwal",placeholder:"Pilih Jadwal",name:"jadwal_id",dataDb:null==x?void 0:x.data,body:["id","hari","matkul.nama","mulai","seles"],control:n,required:!0,errors:a.jadwal_id,addClass:"col-span-4"}),(0,r.jsx)(f.Z,{label:"Absen",name:"file",register:t,accept:"application/pdf",required:!0,errors:a.file,addClass:"col-span-4",setValue:u,fileEdit:null==i?void 0:i.file,myFile:h,setMyFile:m})]})},v=e=>{let{showModal:t,setShowModal:a,dtEdit:s,tahunWatch:i,semesterWatch:o}=e,[u,f]=(0,l.useState)(),{addData:b,updateData:v}=(0,d.Z)(),[x,y]=(0,l.useState)(!1),{register:j,handleSubmit:S,setValue:N,control:k,formState:{errors:A},watch:Z}=(0,g.cI)(),F=()=>{N("id",""),N("jadwal_id",""),N("file",""),f(null)};(0,l.useEffect)(()=>{s?(N("id",s.id),N("jadwal_id",parseInt(s.jadwal_id)),N("file",s.file)):F()},[t,s]);let D=async e=>{if(y(!0),console.log({row:e}),s){let{data:t}=await v(s.id,e);(0,p.Z)({event:t}),a(!1)}else{let{data:t}=await b(e);console.log({data:t}),(0,p.Z)({event:t}),(null==t?void 0:t.type)!=="success"||F()}y(!1)};return(0,r.jsx)(m.Z,{title:"Form Absen",showModal:t,setShowModal:a,children:(0,r.jsxs)("form",{onSubmit:S(D),children:[(0,r.jsx)(h.Z,{name:"id",register:j,type:"hidden"}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,r.jsx)(w,{register:j,errors:A,dtEdit:s,control:k,watch:Z,setValue:N,showModal:t,myFile:u,setMyFile:f,tahunWatch:i,semesterWatch:o})}),(0,r.jsx)("div",{children:x?(0,r.jsx)(n.Z,{}):(0,r.jsx)(c.Z,{text:"Simpan",onClick:S(D)})})]})})},x=a(686),y=a(8919),j=a(8350),S=()=>{let{removeData:e}=(0,d.Z)(),[t,a]=(0,l.useState)(!1),[s,n]=(0,l.useState)(!1),[i,o]=(0,l.useState)(),[h,m]=(0,l.useState)(),[f,b]=(0,l.useState)(""),w=async t=>{let{id:a,isDelete:r}=t;if(o(a),r){let{data:t}=await e(i);(0,p.Z)({event:t}),n(!1)}else n(!0)},{register:S,control:N,formState:{errors:k},watch:A,setValue:Z}=(0,g.cI)(),F=A("tahun"),D=A("semester");return(0,l.useEffect)(()=>{let e=new Date().getFullYear(),t=new Date().getMonth();return Z("tahun",e),Z("semester",t>6?"Ganjil":"Genap"),()=>{}},[]),(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(y.Toaster,{}),(0,r.jsx)(v,{dtEdit:h,showModal:t,setShowModal:a,tahunWatch:F,semesterWatch:D}),(0,r.jsx)(x.Z,{showDel:s,setShowDel:n,setDelete:w}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,r.jsx)("p",{children:"Silahkan mengolah data absen"}),(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{text:"Tambah absen",onClick:()=>{a(!0),m(null)}})})]}),(0,r.jsx)(j.Z,{placeholder:"Cari Absen",onChange:e=>b(e)})]}),(0,r.jsx)(u,{setDelete:w,setEdit:e=>{a(!0),m(e)},search:f,tahunWatch:F,semesterWatch:D})]})}},63:function(e,t,a){"use strict";var r=a(9268),l=a(3415),s=a(6394),n=a.n(s),i=a(6006),d=a(5883),o=a.n(d);t.Z=e=>{let{label:t,register:a,required:s,name:d,errors:u,addClass:c,accept:h,setValue:m,fileEdit:p,myFile:g,setMyFile:f}=e,[b,w]=(0,i.useState)(),v=e=>new Promise(()=>{if(e){var t;let a=(null==e?void 0:null===(t=e.type)||void 0===t?void 0:t.split("/"))||[],r=a[0];if("image"!==r)return x(e);console.log({splitType:a}),o().imageFileResizer(e,1500,1500,a[1],80,0,e=>{x(e)},"file")}else x(null)}),x=e=>{var t;if(e){let t=new FileReader;t.readAsDataURL(e),t.onloadend=()=>{f(t.result)}}let a=(null==e?void 0:null===(t=e.type)||void 0===t?void 0:t.split("/"))||[];w(a[0]),m(d,e)};return(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:t}),s&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("input",{className:"w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",id:"fileInput",type:"file",accept:h,onChange:e=>{var t;let a=(null===(t=e.target)||void 0===t?void 0:t.files[0])||null;v(a)}}),(0,r.jsx)("input",{type:"hidden",id:t,...a(d,{required:s})}),(0,r.jsxs)("div",{className:"flex gap-4 mt-2",children:[g&&"image"===b&&(0,r.jsx)(n(),{className:"rounded-lg",src:g,width:100,height:100,alt:""}),p&&"file"!==d&&(0,r.jsx)("div",{children:(0,r.jsx)(n(),{src:"".concat(l._n,"/").concat(p),width:100,height:100,alt:""})})]}),(null==u?void 0:u.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[t," tidak boleh kosong"]})]})}},8350:function(e,t,a){"use strict";var r=a(9268);a(6006),t.Z=e=>{let{placeholder:t,addClass:a,onChange:l,defaultValue:s=""}=e;return(0,r.jsx)("div",{className:a,children:(0,r.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",placeholder:t,onChange:e=>{l(e.target.value)},defaultValue:s})})}},686:function(e,t,a){"use strict";var r=a(9268);a(6006);var l=a(8136);t.Z=e=>{let{showDel:t,setShowDel:a,setDelete:s}=e;return t&&(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,r.jsxs)("div",{className:"bg-white p-5 rounded-xl lg:ml-64 md:min-w-[500px] h-min mt-[20%] max-h-[70%] overflow-auto",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.1] mb-4 pb-2",children:[(0,r.jsx)("h5",{className:"text-xl font-roboto",children:"Hapus Data"}),(0,r.jsx)(l.C7Q,{className:"cursor-pointer hover:text-black/[0.5]",onClick:()=>a(!1)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Apaka Anda Yakin Menghapus Data Ini?"}),(0,r.jsxs)("div",{className:"flex justify-center gap-4 mt-4",children:[(0,r.jsx)("button",{className:"hover:border hover:border-red-600 bg-red-600 w-20 py-2 rounded-xl text-white ",onClick:()=>s({isDelete:!0}),children:"Hapus"}),(0,r.jsx)("button",{className:"w-20 py-2 rounded-xl hover:border-b",onClick:()=>a(!1),children:"Batal"})]})]})]})})})}},3346:function(e,t,a){"use strict";var r=a(9268),l=a(4956),s=a(6008),n=a(8136);t.Z=e=>{(0,s.useRouter)();let t=t=>(e.page-1)*e.limit+t+1;return(0,r.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,r.jsx)("thead",{className:"",children:(0,r.jsx)("tr",{children:e.headTable&&e.headTable.map((e,t)=>(0,r.jsx)("th",{scope:"col",className:"px-6 py-4",children:e},t))})}),(0,r.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((a,s)=>{let{id:i}=a;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:t(s)}),e.tableBodies.map((e,t)=>(0,r.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,l.Z)(a,e)},t)),(0,r.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(a),e.ubah&&(0,r.jsx)(n.Ph1,{onClick:()=>e.setEdit&&e.setEdit(a),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&(0,r.jsx)(n.AuQ,{onClick:()=>(null==e?void 0:e.setDelete)&&(null==e?void 0:e.setDelete({id:i,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},s)})})]})}},1468:function(e,t,a){"use strict";var r=a(2561),l=a(4475),s=a(3415);let n=(0,r.Ue)((0,l.mW)((e,t)=>({dtJadwal:[],setJadwal:async t=>{let{page:a=1,limit:r=10,search:l,tahun:n,semester:i,prodi_id:d}=t;try{let t=await (0,s.VF)({method:"get",url:"/jadwal",params:{limit:r,page:a,search:l,tahun:n,semester:i,prodi_id:d}});return e(e=>({...e,dtJadwal:t.data.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalAll:async t=>{let{search:a}=t;try{let t=await (0,s.VF)({method:"get",url:"/jadwal/all",params:{search:a}});return e(e=>({...e,dtJadwal:t.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByDosenFull:async t=>{let{tahun:a,semester:r,dosen_id:l}=t;try{let t=await (0,s.VF)({method:"get",url:"/jadwal/byDosenFull",params:{tahun:a,semester:r,dosen_id:l}});return e(e=>({...e,dtJadwal:null==t?void 0:t.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setByTahunSemester:async t=>{let{search:a,tahun:r,semester:l,prodi_id:n}=t;try{let t=await (0,s.VF)({method:"get",url:"/jadwal/byTahunSemester",params:{search:a,tahun:r,semester:l,prodi_id:n}});return e(e=>({...e,dtJadwal:t.data.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByRps:async t=>{let{tahun:a,semester:r,dosen_id:l}=t;try{let t=await (0,s.VF)({method:"get",url:"/jadwal/by-rps",params:{dosen_id:l}});return e(e=>({...e,dtJadwal:null==t?void 0:t.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},setShowJadwal:async t=>{try{let a=await (0,s.VF)({method:"get",url:"/jadwal/".concat(t)});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}}})));t.Z=n},2775:function(e,t,a){"use strict";var r=a(2561),l=a(4475),s=a(3415),n=a(4406);let i=(0,r.Ue)((0,l.mW)((e,t)=>({setFormData:e=>{let t=new FormData;return t.append("jadwal_id",e.jadwal_id),t.append("file",e.file),t},dtAbsen:[],showAbsen:[],setAbsen:async t=>{let{page:a=1,limit:r=10}=t;try{let t=await n.Z.getState().setToken(),l=await (0,s.Sj)({method:"get",url:"/upload/absen",headers:{Authorization:"Bearer ".concat(t)},params:{limit:r,page:a}});return e(e=>({...e,dtAbsen:l.data.data})),{status:"berhasil",data:l.data}}catch(e){var l;return{status:"error",error:null===(l=e.response)||void 0===l?void 0:l.data}}},setShowAbsen:async t=>{let{id:a,jadwal_id:r}=t;try{let t=await n.Z.getState().setToken(),l=await (0,s.Sj)({method:"get",url:"/upload/absen/".concat(a),headers:{Authorization:"Bearer ".concat(t)},params:{jadwal_id:r}});return e(e=>({...e,showAbsen:l.data.data})),{status:"berhasil",data:l.data}}catch(e){var l;return{status:"error",error:null===(l=e.response)||void 0===l?void 0:l.data}}},addData:async a=>{let r=(null==a?void 0:a.file)?t().setFormData(a):a;try{let t=await n.Z.getState().setToken(),a=await (0,s.Sj)({method:"post",url:"/upload/absen",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"multipart/form-data"},data:r});return e(e=>({showAbsen:[a.data.data,...e.showAbsen]})),{status:"berhasil tambah",data:a.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async t=>{try{let a=await n.Z.getState().setToken(),r=await (0,s.Sj)({method:"delete",url:"/upload/absen/".concat(t),headers:{Authorization:"Bearer ".concat(a)}});return e(e=>({dtAbsen:{last_page:e.dtAbsen.last_page,current_page:e.dtAbsen.current_page,data:e.dtAbsen.data.filter(e=>e.id!==t)}})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(a,r)=>{delete r.id;let l=(null==r?void 0:r.file)?t().setFormData(r):r,i=await n.Z.getState().setToken();try{let t=await (0,s.Sj)({url:"/upload/absen/".concat(a),method:"post",headers:(null==r?void 0:r.file)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(i)}:{Authorization:"Bearer ".concat(i)},data:l,params:{_method:"PUT"}});return e(e=>({showAbsen:e.showAbsen.map(e=>e.id===a?{...e,...t.data.data}:e)})),{status:"berhasil update",data:t.data}}catch(e){return{status:"error",data:e.response.data}}}})));t.Z=i},6008:function(e,t,a){e.exports=a(4e3)},5883:function(e){(()=>{"use strict";var t={d:(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},a={};t.r(a),t.d(a,{default:()=>l});var r=function(){var e;function t(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t)}return e=[{key:"changeHeightWidth",value:function(e,t,a,r,l,s){return a>r&&(e=Math.round(e*r/a),a=r),e>t&&(a=Math.round(a*t/e),e=t),l&&a<l&&(e=Math.round(e*l/a),a=l),s&&e<s&&(a=Math.round(a*s/e),e=s),{height:e,width:a}}},{key:"resizeAndRotateImage",value:function(e,t,a,r,l){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"jpeg",n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,d=document.createElement("canvas"),o=e.width,u=e.height,c=this.changeHeightWidth(u,a,o,t,r,l);i&&(90===i||270===i)?(d.width=c.height,d.height=c.width):(d.width=c.width,d.height=c.height),o=c.width,u=c.height;var h=d.getContext("2d");return h.fillStyle="rgba(0, 0, 0, 0)",h.fillRect(0,0,o,u),h.imageSmoothingEnabled&&h.imageSmoothingQuality&&(h.imageSmoothingQuality="high"),i&&(h.rotate(i*Math.PI/180),90===i?h.translate(0,-d.width):180===i?h.translate(-d.width,-d.height):270===i?h.translate(-d.height,0):0!==i&&360!==i||h.translate(0,0)),h.drawImage(e,0,0,o,u),d.toDataURL("image/".concat(s),n/100)}},{key:"b64toByteArrays",value:function(e,t){t=t||"image/jpeg";for(var a=atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),r=[],l=0;l<a.length;l+=512){for(var s=a.slice(l,l+512),n=Array(s.length),i=0;i<s.length;i++)n[i]=s.charCodeAt(i);var d=new Uint8Array(n);r.push(d)}return r}},{key:"b64toBlob",value:function(e,t){var a=this.b64toByteArrays(e,t);return new Blob(a,{type:t,lastModified:new Date})}},{key:"b64toFile",value:function(e,t,a){var r=this.b64toByteArrays(e,a);return new File(r,t,{type:a,lastModified:new Date})}},{key:"createResizedImage",value:function(e,a,r,l,s,n,i){var d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"base64",o=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,c=new FileReader;if(!e)throw Error("File Not Found!");if(e.type&&!e.type.includes("image"))throw Error("File Is NOT Image!");c.readAsDataURL(e),c.onload=function(){var h=new Image;h.src=c.result,h.onload=function(){var c=t.resizeAndRotateImage(h,a,r,o,u,l,s,n),m="image/".concat(l);switch(d){case"blob":i(t.b64toBlob(c,m));break;case"base64":default:i(c);break;case"file":var p=e.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(l.toString());i(t.b64toFile(c,p,m))}}},c.onerror=function(e){throw Error(e)}}}],function(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(t,e),t}();let l={imageFileResizer:function(e,t,a,l,s,n,i,d,o,u){return r.createResizedImage(e,t,a,l,s,n,i,d,o,u)}};e.exports=a})()}},function(e){e.O(0,[6680,4550,4288,2772,1092,3725,3088,7569,9253,7698,1744],function(){return e(e.s=8183)}),_N_E=e.O()}]);