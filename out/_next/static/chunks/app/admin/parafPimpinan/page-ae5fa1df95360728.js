(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9256],{4280:function(e,a,t){Promise.resolve().then(t.bind(t,7873))},7873:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return _}});var r=t(9268),s=t(6006),l=t(593),n=t(5437),i=t(3346),d=t(2561),o=t(4475),c=t(3415),u=t(4406);let h=(0,d.Ue)((0,o.mW)((e,a)=>({dtParafPimpinan:{last_page:0,current_page:0,data:[]},setParafPimpinan:async a=>{let{page:t=1,limit:r=10,search:s,sortby:l,order:n}=a;try{let a=await u.Z.getState().setToken(),i=await (0,c.Sj)({method:"get",url:"/parafPimpinan",headers:{Authorization:"Bearer ".concat(a)},params:{limit:r,page:t,search:s,sortby:l,order:n}});return e(e=>({...e,dtParafPimpinan:i.data})),{status:"berhasil",data:i.data}}catch(e){var i;return{status:"error",error:null===(i=e.response)||void 0===i?void 0:i.data}}},setShowParafPimpinan:async a=>{try{let t=await u.Z.getState().setToken(),r=await (0,c.Sj)({method:"get",url:"/parafPimpinan/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({...e,dtParafPimpinan:r.data})),{status:"berhasil",data:r.data}}catch(e){var t;return{status:"error",error:null===(t=e.response)||void 0===t?void 0:t.data}}},addData:async a=>{try{let t=await u.Z.getState().setToken(),r=await (0,c.Sj)({method:"post",url:"/parafPimpinan",headers:{Authorization:"Bearer ".concat(t)},data:a});return e(e=>({dtParafPimpinan:{last_page:e.dtParafPimpinan.last_page,current_page:e.dtParafPimpinan.current_page,data:[r.data.data,...e.dtParafPimpinan.data]}})),{status:"berhasil tambah",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async a=>{try{let t=await u.Z.getState().setToken(),r=await (0,c.Sj)({method:"delete",url:"/parafPimpinan/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({dtParafPimpinan:{last_page:e.dtParafPimpinan.last_page,current_page:e.dtParafPimpinan.current_page,data:e.dtParafPimpinan.data.filter(e=>e.id!==a)}})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(a,t)=>{try{let r=await u.Z.getState().setToken(),s=await (0,c.Sj)({method:"PUT",url:"/parafPimpinan/".concat(a),headers:{Authorization:"Bearer ".concat(r)},data:t});return e(e=>({dtParafPimpinan:{last_page:e.dtParafPimpinan.last_page,current_page:e.dtParafPimpinan.current_page,data:e.dtParafPimpinan.data.map(e=>e.id===a?{...e,...s.data.data}:e)}})),{status:"berhasil update",data:s.data}}catch(e){return{status:"error",data:e.response.data}}}})));var m=e=>{let{setDelete:a,setEdit:t,search:d}=e,{setParafPimpinan:o,dtParafPimpinan:c}=h(),[u,m]=(0,s.useState)(1),[x,p]=(0,s.useState)(10),[f,j]=(0,s.useState)(!0),[b,g]=(0,s.useState)(!1),v=async()=>{j(!0),await o({}),j(!1)};return(0,s.useEffect)(()=>(v(),()=>{}),[u,x]),(0,s.useEffect)(()=>{v()},[d]),console.log({dtParafPimpinan:c}),(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:f?(0,r.jsx)(l.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)(i.Z,{headTable:["No","NIDN","Nama","Jabatan","Paraf","Aksi"],tableBodies:["dosen.NIDN","dosen.nama","jabatan","paraf"],dataTable:null==c?void 0:c.data,page:u,limit:x,setEdit:t,setDelete:a,ubah:!1,hapus:!0})}),(null==c?void 0:c.last_page)>1&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(n.Z,{currentPage:null==c?void 0:c.current_page,totalPages:null==c?void 0:c.last_page,setPage:m})})]})})},x=t(366),p=t(2985),f=t(7808),j=t(9442),b=t(9700),g=t(1112),v=t(3827),y=t(1712);t(6760);var N=t(8860),w=t(1281),P=e=>{let{register:a,errors:t,control:l,dtEdit:n,watch:i,setValue:d,showModal:o}=e,{setDosenAll:c,dtDosenAll:u}=(0,v.Z)(),h=y.Z.get("prodi_id"),m=async()=>{let e=await c({search:"",prodi_id:h});return e};return(0,s.useEffect)(()=>(m(),()=>{}),[o]),(0,r.jsxs)(r.Fragment,{children:[(null==u?void 0:u.data)&&(0,r.jsx)(g.Z,{label:"Dosen",placeholder:"Pilih Dosen",name:"dosen_id",dataDb:null==u?void 0:u.data,body:["id","NIDN","nama"],control:l,required:!0,errors:t.dosen_id,addClass:"col-span-8"}),(0,r.jsx)(w.u,{label:"Jabatan",defaultOption:"Pilih Jabatan",register:a,name:"jabatan",options:[{value:"WAKIL DEKAN I",label:"WAKIL DEKAN I"},{value:"KAPRODI SI",label:"KAPRODI SI"},{value:"KAPRODI BI",label:"KAPRODI BI"},{value:"KAPRODI TG",label:"KAPRODI TG"}],required:!0,errors:t.jabatan,addClass:"col-span-8"}),(0,r.jsx)(N.Z,{control:l,name:"paraf",label:"Paraf",required:!0,errors:t.paraf,setValue:d,watch:i,clear:!0,addClass:"col-span-3"})]})},D=e=>{let{showModal:a,setShowModal:t,dtEdit:n}=e,{addData:i,updateData:d,setParafPimpinan:o}=h(),[c,u]=(0,s.useState)(!1),{register:m,handleSubmit:g,setValue:v,control:y,formState:{errors:N},watch:w}=(0,b.cI)(),D=()=>{v("id",""),v("dosen_id",""),v("jabatan",""),v("paraf","")};(0,s.useEffect)(()=>{n?(v("id",n.id),v("dosen_id",n.dosen_id),v("jabatan",n.jabatan),v("paraf",n.paraf)):D()},[a,n]);let k=async e=>{if(u(!0),console.log({row:e}),n){let{data:a}=await d(n.id,e);(0,j.Z)({event:a}),t(!1)}else{let{data:a}=await i(e);console.log({data:a}),(0,j.Z)({event:a}),(null==a?void 0:a.type)!=="success"||D()}await o({}),u(!1)};return(0,r.jsx)(f.Z,{title:"Form Dosen",showModal:a,setShowModal:t,children:(0,r.jsxs)("form",{onSubmit:g(k),children:[(0,r.jsx)(p.Z,{name:"id",register:m,type:"hidden"}),(0,r.jsx)("div",{className:"grid grid-cols-8 gap-2 mb-4",children:(0,r.jsx)(P,{register:m,errors:N,dtEdit:n,control:y,watch:w,setValue:v,showModal:a})}),(0,r.jsx)("div",{children:c?(0,r.jsx)(l.Z,{}):(0,r.jsx)(x.Z,{text:"Simpan",onClick:g(k)})})]})})},k=t(686),S=t(8919),Z=t(8350),_=()=>{let{removeData:e}=h(),[a,t]=(0,s.useState)(!1),[l,n]=(0,s.useState)(!1),[i,d]=(0,s.useState)(),[o,c]=(0,s.useState)(),[u,p]=(0,s.useState)(""),f=async a=>{let{id:t,isDelete:r}=a;if(d(t),r){let{data:a}=await e(i);(0,j.Z)({event:a}),n(!1)}else n(!0)};return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(S.Toaster,{}),(0,r.jsx)(D,{dtEdit:o,showModal:a,setShowModal:t}),(0,r.jsx)(k.Z,{showDel:l,setShowDel:n,setDelete:f}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,r.jsx)("p",{children:"Silahkan Mengolah data Dosen"}),(0,r.jsx)("div",{children:(0,r.jsx)(x.Z,{text:"Tambah Dosen",onClick:()=>{t(!0),c(null)}})})]}),(0,r.jsx)(Z.Z,{placeholder:"Cari Dosen",onChange:e=>p(e)})]}),(0,r.jsx)(m,{setDelete:f,setEdit:e=>{t(!0),c(e)},search:u})]})}},8860:function(e,a,t){"use strict";t.d(a,{Z:function(){return o}});var r=t(9268),s=t(6006),l=t(9700),n=t(3371),i=t.n(n),d=e=>{let{text:a,onClick:t,addClass:s,type:l}=e;return(0,r.jsx)("button",{type:l||"button",onClick:t,className:"bg-secondary rounded-lg px-4 py-2 text-white w-fit cursor-pointer hover:shadow-sm hover:shadow-secondary ".concat(s),children:a})},o=e=>{let{control:a,required:t,name:n,errors:o,addClass:c,label:u,clear:h=!1,setValue:m,watch:x}=e,p=(0,s.useRef)(null),[f,j]=(0,s.useState)("black"),[b,g]=(0,s.useState)(1),v=x(n),y=e=>e?e.getTrimmedCanvas().toDataURL("image/png"):null;return(0,s.useEffect)(()=>{if(!v){var e;null===(e=p.current)||void 0===e||e.clear()}},[v]),(0,r.jsxs)("div",{className:"flex flex-col ".concat(c),children:[(0,r.jsxs)("label",{className:"text-sm font-medium text-gray-700 tracking-wide block",children:[u,t&&(0,r.jsx)("span",{className:"ml-1 text-red-600 ",children:"*"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("label",{className:"mr-2",children:"Warna Pena:"}),(0,r.jsx)("input",{type:"color",value:f,onChange:e=>j(e.target.value),className:"border border-gray-300 rounded"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("label",{className:"mr-2",children:"Ketebalan Pena:"}),(0,r.jsx)("input",{type:"range",min:"1",max:"10",value:b,onChange:e=>g(Number(e.target.value)),className:"border border-gray-300 rounded"}),(0,r.jsxs)("span",{className:"ml-2",children:[b,"px"]})]}),(0,r.jsx)(l.Qr,{name:n,control:a,rules:{required:t},render:e=>{let{field:a}=e;return(0,r.jsx)(i(),{penColor:f,minWidth:b,maxWidth:b,canvasProps:{className:"sigCanvas border border-primary w-full rounded-xl mt-4"},ref:e=>{p.current=e},onEnd:()=>a.onChange(y(p.current))})}}),h&&(0,r.jsx)(d,{type:"button",text:"Hapus ".concat(u),onClick:()=>{p.current&&(m(n,""),p.current.clear())},addClass:"mt-2"}),(null==o?void 0:o.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[u," tidak boleh kosong"]})]})}},8350:function(e,a,t){"use strict";var r=t(9268);t(6006),a.Z=e=>{let{placeholder:a,addClass:t,onChange:s,defaultValue:l=""}=e;return(0,r.jsx)("div",{className:t,children:(0,r.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",placeholder:a,onChange:e=>{s(e.target.value)},defaultValue:l})})}},686:function(e,a,t){"use strict";var r=t(9268);t(6006);var s=t(8136);a.Z=e=>{let{showDel:a,setShowDel:t,setDelete:l}=e;return a&&(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,r.jsxs)("div",{className:"bg-white p-5 rounded-xl lg:ml-64 md:min-w-[500px] h-min mt-[20%] max-h-[70%] overflow-auto",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.1] mb-4 pb-2",children:[(0,r.jsx)("h5",{className:"text-xl font-roboto",children:"Hapus Data"}),(0,r.jsx)(s.C7Q,{className:"cursor-pointer hover:text-black/[0.5]",onClick:()=>t(!1)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Apaka Anda Yakin Menghapus Data Ini?"}),(0,r.jsxs)("div",{className:"flex justify-center gap-4 mt-4",children:[(0,r.jsx)("button",{className:"hover:border hover:border-red-600 bg-red-600 w-20 py-2 rounded-xl text-white ",onClick:()=>l({isDelete:!0}),children:"Hapus"}),(0,r.jsx)("button",{className:"w-20 py-2 rounded-xl hover:border-b",onClick:()=>t(!1),children:"Batal"})]})]})]})})})}},5437:function(e,a,t){"use strict";var r=t(9268);t(6006);var s=t(8136);a.Z=e=>{let{totalPages:a,currentPage:t,setPage:l}=e,n=[];if(a<=5)n=Array.from({length:a},(e,a)=>a+1);else{n=[1,t-1,t,t+1,a],n=(n=Array.from(new Set(n)).sort((e,a)=>e-a)).filter(e=>e>0&&e<=a);for(let e=1;e<n.length-1;e++)n[e]-n[e-1]>1&&(n.splice(e,0,"..."),e++);a-n[n.length-2]>1&&n.splice(n.length-1,0,"...")}return(0,r.jsx)("div",{className:"h-full",children:(0,r.jsxs)("ol",{className:"flex justify-center gap-1 text-xs font-medium",children:[t>1&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>l(t-1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,r.jsx)(s.pjk,{})})}),n.map((e,a)=>"..."===e?(0,r.jsx)("li",{className:"flex items-end text-xl",children:(0,r.jsx)("div",{className:"block h-8 w-8 rounded border border-gray-100 text-center leading-8",children:e})},a):(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>l(e),className:"cursor-pointer block h-8 w-8 rounded border border-gray-100 text-center leading-8 ".concat(e==t?"bg-blue-900 text-white":""),children:e})},a)),t<a&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>l(t+1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,r.jsx)(s.fmn,{})})})]})})}},1281:function(e,a,t){"use strict";t.d(a,{u:function(){return s}});var r=t(9268);t(6006);let s=e=>{let{label:a,register:t,required:s,name:l,placeholder:n,defaultOption:i,options:d=[],errors:o,addClass:c}=e;return(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),s&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)("select",{className:"w-full rounded-lg py-2 px-2 bg-white border border-gray-300 focus:outline-none focus:border-secondary",id:a,placeholder:n,...t(l,{required:s}),children:[(0,r.jsx)("option",{value:"",children:i}),d.map((e,a)=>(0,r.jsx)("option",{value:e.value,children:e.label},a))]})}),(null==o?void 0:o.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kosong"]})]})}},3346:function(e,a,t){"use strict";var r=t(9268),s=t(4956),l=t(6008),n=t(8136);a.Z=e=>{(0,l.useRouter)();let a=a=>(e.page-1)*e.limit+a+1;return(0,r.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,r.jsx)("thead",{className:"",children:(0,r.jsx)("tr",{children:e.headTable&&e.headTable.map((e,a)=>(0,r.jsx)("th",{scope:"col",className:"px-6 py-4",children:e},a))})}),(0,r.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((t,l)=>{let{id:i}=t;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:a(l)}),e.tableBodies.map((a,n)=>(0,r.jsx)("td",{className:"px-6 py-4",children:(0,s.Z)(t,a,l,e.setIndexBox)},n)),(0,r.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(t),e.ubah&&(0,r.jsx)(n.Ph1,{onClick:()=>e.setEdit&&e.setEdit(t),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&(0,r.jsx)(n.AuQ,{onClick:()=>(null==e?void 0:e.setDelete)&&(null==e?void 0:e.setDelete({id:i,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},l)})})]})}},3827:function(e,a,t){"use strict";var r=t(2561),s=t(4475),l=t(3415);let n=(0,r.Ue)((0,s.mW)((e,a)=>({dtDosen:[],dtDosenAll:[],setDosen:async a=>{let{page:t=1,limit:r=10,search:s}=a;try{let a=await (0,l.VF)({method:"get",url:"/dosen",params:{limit:r,page:t,search:s}});return e(e=>({...e,dtDosen:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setDosenAll:async a=>{let{search:t,prodi_id:r}=a;try{let a=await (0,l.VF)({method:"get",url:"/dosen/all",params:{search:t,prodi_id:r}});return e(e=>({...e,dtDosenAll:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=n}},function(e){e.O(0,[6680,4550,4288,2772,90,3725,3088,8227,9181,9253,7698,1744],function(){return e(e.s=4280)}),_N_E=e.O()}]);