(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[652],{5249:function(e,a,t){Promise.resolve().then(t.bind(t,2193))},2193:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return S}});var r=t(9268),l=t(6006),s=t(1712),d=t(593),i=t(4803),n=t(4956),o=t(8136),u=e=>{let a=a=>(e.page-1)*e.limit+a+1;return(0,r.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,r.jsx)("thead",{className:"",children:(0,r.jsx)("tr",{children:e.headTable&&e.headTable.map((e,a)=>(0,r.jsx)("th",{scope:"col",className:"px-6 py-4",children:e},a))})}),(0,r.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((t,l)=>{let{id:s}=t,d=null==t?void 0:t.status;return(0,r.jsxs)("tr",{className:" ".concat(d&&"ditolak"===d?"bg-error":"diproses"===d?"bg-warning":"hover:bg-gray-50 hover:text-secondary"),children:[(0,r.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:a(l)}),e.tableBodies.map((e,a)=>(0,r.jsx)("td",{className:"px-6 py-4 whitespace-nowrap capitalize",children:(0,n.Z)(t,e)},a)),(0,r.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsx)("div",{className:"flex flex-row gap-2",children:d&&"ditolak"===d&&(0,r.jsx)(o.Ph1,{onClick:()=>e.setEdit(t),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"})})})]},l)})})]})},c=t(1468),h=e=>{let{setDelete:a,setEdit:t,search:n,tahunWatch:o,semesterWatch:h}=e,p=s.Z.get("dosen_id")||"",{setShowRps:m,showRps:g}=(0,i.Z)(),{setJadwalByDosenFull:f,dtJadwal:w}=(0,c.Z)(),[y,v]=(0,l.useState)(1),[b,j]=(0,l.useState)(10),[x,S]=(0,l.useState)(!0),[R,k]=(0,l.useState)(),F=async()=>{o&&h&&await f({tahun:o,semester:h,dosen_id:p}),S(!1)};(0,l.useEffect)(()=>(F(),()=>{}),[y,b,o,h,p]);let N=async()=>{var e;let a=[];null==w||null===(e=w.data)||void 0===e||e.map(e=>{a.push(e.id)});let t=a.join(",");a.length>0&&await m({id:p,jadwal_id:t})};(0,l.useEffect)(()=>{N()},[JSON.stringify(w)]);let _=(e,a)=>{S(!0),console.log({dtJadwal:e,showRps:a});let t=null==a?void 0:a.map(a=>{let t=null==e?void 0:e.find(e=>e.id===parseInt(a.jadwal_id));return t?{...a,jadwal:t}:null}).filter(e=>null!==e);k({data:t}),S(!1)};return(0,l.useEffect)(()=>{_(null==w?void 0:w.data,g)},[JSON.stringify(g)]),(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:x?(0,r.jsx)(d.Z,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"",children:(0,r.jsx)(u,{headTable:["No","Hari","Mata Kuliah","Kode MK","JML. SKS","RPS","Status","Aksi"],tableBodies:["jadwal.hari","jadwal.matkul.nama","jadwal.matkul.kode","jadwal.matkul.sks","file","status"],dataTable:R.data,page:y,limit:b,setEdit:t,setDelete:a})})})})},p=t(366),m=t(2985),g=t(7808),f=t(9442),w=t(9700),y=t(63),v=t(1112);t(6760);var b=e=>{let{register:a,errors:t,control:d,dtEdit:i,watch:n,setValue:o,showModal:u,myFile:h,setMyFile:p,tahunWatch:m,semesterWatch:g}=e,f=s.Z.get("dosen_id"),{setJadwalByDosenFull:w,dtJadwal:b}=(0,c.Z)(),j=async()=>{await w({tahun:m,semester:g,dosen_id:f})};return(0,l.useEffect)(()=>{j()},[u]),(0,r.jsxs)(r.Fragment,{children:[(null==b?void 0:b.data)&&(0,r.jsx)(v.Z,{label:"Jadwal",placeholder:"Pilih Jadwal",name:"jadwal_id",dataDb:null==b?void 0:b.data,body:["id","hari","matkul.nama","mulai","seles"],control:d,required:!0,errors:t.jadwal_id,addClass:"col-span-4"}),(0,r.jsx)(y.Z,{label:"RPS",name:"file",register:a,accept:"application/pdf",required:!0,errors:t.file,addClass:"col-span-4",setValue:o,fileEdit:null==i?void 0:i.file,myFile:h,setMyFile:p})]})},j=e=>{let{showModal:a,setShowModal:t,dtEdit:s,tahunWatch:d,semesterWatch:n}=e,[o,u]=(0,l.useState)(),{addData:c,updateData:h}=(0,i.Z)(),{register:y,handleSubmit:v,setValue:j,control:x,formState:{errors:S},watch:R}=(0,w.cI)(),k=()=>{j("id",""),j("jadwal_id",""),j("file",""),u(null)};(0,l.useEffect)(()=>{s?(j("id",s.id),j("jadwal_id",s.jadwal_id),j("file",s.file)):k()},[a,s]);let F=async e=>{if(e.status="diproses",console.log({row:e}),s){e.dosen=!0;let{data:a}=await h(s.id,e);(0,f.Z)({event:a}),t(!1)}else{let{data:a}=await c(e);console.log({data:a}),(0,f.Z)({event:a}),(null==a?void 0:a.type)!=="success"||k()}};return(0,r.jsx)(g.Z,{title:"Form Dosen",showModal:a,setShowModal:t,children:(0,r.jsxs)("form",{onSubmit:v(F),children:[(0,r.jsx)(m.Z,{name:"id",register:y,type:"hidden"}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,r.jsx)(b,{register:y,errors:S,dtEdit:s,control:x,watch:R,setValue:j,showModal:a,myFile:o,setMyFile:u,tahunWatch:d,semesterWatch:n})}),(0,r.jsx)("div",{children:(0,r.jsx)(p.Z,{text:"Simpan",onClick:v(F)})})]})})},x=t(8919),S=()=>{let[e,a]=(0,l.useState)(!1),[t,s]=(0,l.useState)(!1),[d,i]=(0,l.useState)(),[n,o]=(0,l.useState)(),[u,c]=(0,l.useState)(""),[m,g]=(0,l.useState)(""),[f,y]=(0,l.useState)(""),{register:v,control:b,formState:{errors:S},watch:R,setValue:k}=(0,w.cI)();return(0,l.useEffect)(()=>{let e=new Date().getFullYear();return g(e),y("Genap"),()=>{}},[]),(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(x.Toaster,{}),(0,r.jsx)(j,{dtEdit:n,showModal:e,setShowModal:a,tahunWatch:m,semesterWatch:f}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,r.jsx)("p",{children:"Silahkan Mengolah data RPS"}),(0,r.jsx)("div",{children:(0,r.jsx)(p.Z,{text:"Tambah RPS",onClick:()=>{a(!0),o(null)}})})]})]}),(0,r.jsx)(h,{setEdit:e=>{a(!0),o(e)},search:u,tahunWatch:m,semesterWatch:f})]})}},63:function(e,a,t){"use strict";var r=t(9268),l=t(3415),s=t(6394),d=t.n(s),i=t(6006),n=t(5883),o=t.n(n);a.Z=e=>{let{label:a,register:t,required:s,name:n,errors:u,addClass:c,accept:h,setValue:p,fileEdit:m,myFile:g,setMyFile:f}=e,[w,y]=(0,i.useState)(),v=e=>new Promise(()=>{if(e){var a;let t=(null==e?void 0:null===(a=e.type)||void 0===a?void 0:a.split("/"))||[],r=t[0];if("image"!==r)return b(e);console.log({splitType:t}),o().imageFileResizer(e,1500,1500,t[1],80,0,e=>{b(e)},"file")}else b(null)}),b=e=>{var a;if(e){let a=new FileReader;a.readAsDataURL(e),a.onloadend=()=>{f(a.result)}}let t=(null==e?void 0:null===(a=e.type)||void 0===a?void 0:a.split("/"))||[];y(t[0]),p(n,e)};return(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),s&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("input",{className:"w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",id:"fileInput",type:"file",accept:h,onChange:e=>{var a;let t=(null===(a=e.target)||void 0===a?void 0:a.files[0])||null;v(t)}}),(0,r.jsx)("input",{type:"hidden",id:a,...t(n,{required:s})}),(0,r.jsxs)("div",{className:"flex gap-4 mt-2",children:[g&&"image"===w&&(0,r.jsx)(d(),{className:"rounded-lg",src:g,width:100,height:100,alt:""}),m&&"file"!==n&&(0,r.jsx)("div",{children:(0,r.jsx)(d(),{src:"".concat(l._n,"/").concat(m),width:100,height:100,alt:""})})]}),(null==u?void 0:u.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kosong"]})]})}},1468:function(e,a,t){"use strict";var r=t(2561),l=t(4475),s=t(3415);let d=(0,r.Ue)((0,l.mW)((e,a)=>({dtJadwal:[],setJadwal:async a=>{let{page:t=1,limit:r=10,search:l,tahun:d,semester:i,prodi_id:n}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal",params:{limit:r,page:t,search:l,tahun:d,semester:i,prodi_id:n}});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalAll:async a=>{let{search:t}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal/all",params:{search:t}});return e(e=>({...e,dtJadwal:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByDosenFull:async a=>{let{tahun:t,semester:r,dosen_id:l}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal/byDosenFull",params:{tahun:t,semester:r,dosen_id:l}});return e(e=>({...e,dtJadwal:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setByTahunSemester:async a=>{let{search:t,tahun:r,semester:l,prodi_id:d}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal/byTahunSemester",params:{search:t,tahun:r,semester:l,prodi_id:d}});return e(e=>({...e,dtJadwal:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setJadwalByRps:async a=>{let{tahun:t,semester:r,dosen_id:l}=a;try{let a=await (0,s.VF)({method:"get",url:"/jadwal/by-rps",params:{dosen_id:l}});return e(e=>({...e,dtJadwal:null==a?void 0:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setShowJadwal:async a=>{try{let t=await (0,s.VF)({method:"get",url:"/jadwal/".concat(a)});return e(e=>({...e,dtJadwal:t.data.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=d},4803:function(e,a,t){"use strict";var r=t(2561),l=t(4475),s=t(3415),d=t(4406);let i=(0,r.Ue)((0,l.mW)((e,a)=>({setFormData:e=>{let a=new FormData;return a.append("jadwal_id",e.jadwal_id),a.append("status",e.status),a.append("file",e.file),a},dtRps:[],showRps:[],setRps:async a=>{let{page:t=1,limit:r=10}=a;try{let a=await d.Z.getState().setToken(),l=await (0,s.Sj)({method:"get",url:"/upload/rps",headers:{Authorization:"Bearer ".concat(a)},params:{limit:r,page:t}});return e(e=>({...e,dtRps:l.data.data})),{status:"berhasil",data:l.data}}catch(e){var l;return{status:"error",error:null===(l=e.response)||void 0===l?void 0:l.data}}},setShowRps:async a=>{let{id:t,jadwal_id:r,status:l}=a;try{let a=await d.Z.getState().setToken(),i=await (0,s.Sj)({method:"get",url:"/upload/rps/".concat(t),headers:{Authorization:"Bearer ".concat(a)},params:{jadwal_id:r,status:l}});return e(e=>({...e,showRps:i.data.data})),{status:"berhasil",data:i.data}}catch(e){var i;return{status:"error",error:null===(i=e.response)||void 0===i?void 0:i.data}}},addData:async t=>{var r;let l=(null==t?void 0:t.file)?a().setFormData(t):t;try{let a=await d.Z.getState().setToken(),t=await (0,s.Sj)({method:"post",url:"/upload/rps",headers:{Authorization:"Bearer ".concat(a),"Content-Type":"multipart/form-data"},data:l});return e(e=>({showRps:[t.data.data,...e.showRps]})),{status:"berhasil tambah",data:t.data}}catch(e){return{status:"error",data:null===(r=e.response)||void 0===r?void 0:r.data}}},removeData:async a=>{try{let t=await d.Z.getState().setToken(),r=await (0,s.Sj)({method:"delete",url:"/upload/rps/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({dtRps:{last_page:e.dtRps.last_page,current_page:e.dtRps.current_page,data:e.dtRps.data.filter(e=>e.id!==a)}})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(t,r)=>{let l=r.dosen;delete r.id,delete r.dosen;let i=(null==r?void 0:r.file)?a().setFormData(r):r,n=await d.Z.getState().setToken();try{let a=await (0,s.Sj)({url:"/upload/rps/".concat(t),method:"post",headers:(null==r?void 0:r.file)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(n)}:{Authorization:"Bearer ".concat(n)},data:i,params:{_method:"PUT"}});return l?e(e=>({showRps:e.showRps.map(e=>e.id===t?{...e,...a.data.data}:e)})):e(e=>({dtRps:{last_page:e.dtRps.last_page,current_page:e.dtRps.current_page,data:e.dtRps.data.map(e=>e.id===t?{...e,...a.data.data}:e)}})),{status:"berhasil update",data:a.data}}catch(e){return{status:"error",data:e.response.data}}}})));a.Z=i},5883:function(e){(()=>{"use strict";var a={d:(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};a.r(t),a.d(t,{default:()=>l});var r=function(){var e;function a(){!function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,a)}return e=[{key:"changeHeightWidth",value:function(e,a,t,r,l,s){return t>r&&(e=Math.round(e*r/t),t=r),e>a&&(t=Math.round(t*a/e),e=a),l&&t<l&&(e=Math.round(e*l/t),t=l),s&&e<s&&(t=Math.round(t*s/e),e=s),{height:e,width:t}}},{key:"resizeAndRotateImage",value:function(e,a,t,r,l){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"jpeg",d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,n=document.createElement("canvas"),o=e.width,u=e.height,c=this.changeHeightWidth(u,t,o,a,r,l);i&&(90===i||270===i)?(n.width=c.height,n.height=c.width):(n.width=c.width,n.height=c.height),o=c.width,u=c.height;var h=n.getContext("2d");return h.fillStyle="rgba(0, 0, 0, 0)",h.fillRect(0,0,o,u),h.imageSmoothingEnabled&&h.imageSmoothingQuality&&(h.imageSmoothingQuality="high"),i&&(h.rotate(i*Math.PI/180),90===i?h.translate(0,-n.width):180===i?h.translate(-n.width,-n.height):270===i?h.translate(-n.height,0):0!==i&&360!==i||h.translate(0,0)),h.drawImage(e,0,0,o,u),n.toDataURL("image/".concat(s),d/100)}},{key:"b64toByteArrays",value:function(e,a){a=a||"image/jpeg";for(var t=atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),r=[],l=0;l<t.length;l+=512){for(var s=t.slice(l,l+512),d=Array(s.length),i=0;i<s.length;i++)d[i]=s.charCodeAt(i);var n=new Uint8Array(d);r.push(n)}return r}},{key:"b64toBlob",value:function(e,a){var t=this.b64toByteArrays(e,a);return new Blob(t,{type:a,lastModified:new Date})}},{key:"b64toFile",value:function(e,a,t){var r=this.b64toByteArrays(e,t);return new File(r,a,{type:t,lastModified:new Date})}},{key:"createResizedImage",value:function(e,t,r,l,s,d,i){var n=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"base64",o=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,c=new FileReader;if(!e)throw Error("File Not Found!");if(e.type&&!e.type.includes("image"))throw Error("File Is NOT Image!");c.readAsDataURL(e),c.onload=function(){var h=new Image;h.src=c.result,h.onload=function(){var c=a.resizeAndRotateImage(h,t,r,o,u,l,s,d),p="image/".concat(l);switch(n){case"blob":i(a.b64toBlob(c,p));break;case"base64":default:i(c);break;case"file":var m=e.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(l.toString());i(a.b64toFile(c,m,p))}}},c.onerror=function(e){throw Error(e)}}}],function(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(a,e),a}();let l={imageFileResizer:function(e,a,t,l,s,d,i,n,o,u){return r.createResizedImage(e,a,t,l,s,d,i,n,o,u)}};e.exports=t})()}},function(e){e.O(0,[6680,4550,4288,2629,3194,3725,3088,7569,9253,7698,1744],function(){return e(e.s=5249)}),_N_E=e.O()}]);