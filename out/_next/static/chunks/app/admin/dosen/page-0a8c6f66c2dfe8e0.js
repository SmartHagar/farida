(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2328],{2693:function(e,a,t){Promise.resolve().then(t.bind(t,6825))},6825:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return C}});var s=t(9268),r=t(6006),l=t(593),n=t(5437),d=t(3346),o=t(8136),i=e=>{let{showModal:a,setShowModal:t,width:r="800px",title:l,children:n}=e;return(0,s.jsx)("div",{className:"",children:a&&(0,s.jsx)("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,s.jsxs)("div",{className:"bg-white p-5 rounded-xl w-[500px] h-min mt-[10%] max-h-[70%] overflow-hidden flex flex-col lg:w-[700px]",style:{width:r},children:[(0,s.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.2] mb-4 pb-2",children:[(0,s.jsx)("h5",{className:"text-xl font-roboto",children:l}),(0,s.jsx)(o.C7Q,{className:"cursor-pointer hover:text-primary",onClick:()=>t(!1)})]}),(0,s.jsx)("div",{className:"overflow-auto",children:n})]})})})},c=t(3827),u=t(2561),h=t(4475),x=t(3415),m=t(4406);let p=(0,u.Ue)((0,h.mW)((e,a)=>({dtDosenLogin:[],showDosenLogin:[],setDosenLogin:async a=>{let{page:t=1,limit:s=10,search:r}=a;try{let a=await m.Z.getState().setToken(),l=await (0,x.Sj)({method:"get",url:"/dosenLogin",headers:{Authorization:"Bearer ".concat(a)},params:{limit:s,page:t,search:r}});return e(e=>({...e,dtDosenLogin:l.data.data})),{status:"berhasil",data:l.data}}catch(e){var l;return{status:"error",error:null===(l=e.response)||void 0===l?void 0:l.data}}},setShowDosenLogin:async a=>{try{let t=await m.Z.getState().setToken(),s=await (0,x.Sj)({method:"get",url:"/dosenLogin/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({...e,showDosenLogin:s.data.data})),{status:"berhasil",data:s.data}}catch(e){var t;return{status:"error",error:null===(t=e.response)||void 0===t?void 0:t.data}}},addData:async a=>{try{let t=await m.Z.getState().setToken(),s=await (0,x.Sj)({method:"post",url:"/dosenLogin",headers:{Authorization:"Bearer ".concat(t)},data:a});return e(e=>({dtDosenLogin:{last_page:e.dtDosenLogin.last_page,current_page:e.dtDosenLogin.current_page,data:[s.data.data,...e.dtDosenLogin.data]}})),{status:"berhasil tambah",data:s.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async a=>{try{let t=await m.Z.getState().setToken(),s=await (0,x.Sj)({method:"delete",url:"/dosenLogin/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({dtDosenLogin:{last_page:e.dtDosenLogin.last_page,current_page:e.dtDosenLogin.current_page,data:e.dtDosenLogin.data.filter(e=>e.id!==a)}})),{status:"berhasil hapus",data:s.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(a,t)=>{try{let s=await m.Z.getState().setToken(),r=await (0,x.Sj)({method:"PUT",url:"/dosenLogin/".concat(a),headers:{Authorization:"Bearer ".concat(s)},data:t});return e(e=>({dtDosenLogin:{last_page:e.dtDosenLogin.last_page,current_page:e.dtDosenLogin.current_page,data:e.dtDosenLogin.data.map(e=>e.id===a?{...e,...r.data.data}:e)}})),{status:"berhasil update",data:r.data}}catch(e){return{status:"error",data:e.response.data}}}}))),g=(0,u.Ue)((0,h.mW)((e,a)=>({dtUser:[],setUser:async a=>{let{id:t}=a;try{let a=await m.Z.getState().setToken(),s=await (0,x.hi)({method:"get",url:"/user/".concat(t),headers:{Authorization:"Bearer ".concat(a)}});return e(e=>({...e,dtUser:s.data.data})),{status:"berhasil",data:s.data}}catch(e){return{status:"error",error:e.response.data}}}})));var j=t(1712),v=e=>{let{setDelete:a,setEdit:t,search:u}=e,{setDosenAll:h,dtDosenAll:x}=(0,c.Z)(),{setDosenLogin:m,dtDosenLogin:v}=p(),{setUser:f,dtUser:b}=g(),[w,y]=(0,r.useState)(1),[N,D]=(0,r.useState)(10),[_,k]=(0,r.useState)(!0),[S,Z]=(0,r.useState)(!1),[L,C]=(0,r.useState)(),E=j.Z.get("prodi_id"),A=async()=>{k(!0),await h({search:u,prodi_id:E}),await m({})};(0,r.useEffect)(()=>(A(),()=>{}),[w,N]),(0,r.useEffect)(()=>{A()},[u]);let T=(e,a)=>{console.log({dtLogin:e,dtAll:a});let t=null==e?void 0:e.map(e=>{let t=null==a?void 0:a.find(a=>a.id===parseInt(e.dosen_id));return t?{...e,dosen:t}:null}).filter(e=>null!==e),s={current_page:null==v?void 0:v.current_page,last_page:null==v?void 0:v.last_page,total:null==v?void 0:v.total,per_page:null==v?void 0:v.per_page,from:null==v?void 0:v.from,to:null==v?void 0:v.to,data:t};C(s),k(!1)};(0,r.useEffect)(()=>((null==v?void 0:v.data)&&(null==x?void 0:x.data)&&T(null==v?void 0:v.data,null==x?void 0:x.data),()=>{}),[x,v]);let z=e=>{f({id:e}),Z(!0)};return(0,s.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:_?(0,s.jsx)(l.Z,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{showModal:S,setShowModal:Z,title:"Email dan Password",children:b?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["Email: ",b.email]}),(0,s.jsxs)("p",{children:["Password: ",b.show_password]})]}):(0,s.jsx)("p",{children:"Loading..."})}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(d.Z,{headTable:["No","NIDN","Nama","Jenis Kelamin","Jabatan","Aksi"],tableBodies:["dosen.NIDN","dosen.nama","dosen.jenkel","dosen.jabatan"],dataTable:L.data,page:w,limit:N,setEdit:t,setDelete:a,ubah:!1,hapus:!0,costume:e=>(0,s.jsx)("div",{onClick:()=>z(e.user_id),className:"cursor-pointer",children:(0,s.jsx)(o.LSF,{})})})}),(null==L?void 0:L.last_page)>1&&(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(n.Z,{currentPage:null==L?void 0:L.current_page,totalPages:null==L?void 0:L.last_page,setPage:y})})]})})},f=t(366),b=t(2985),w=t(7808),y=t(9442),N=t(9700),D=t(1112);t(6760);var _=e=>{let{register:a,errors:t,control:l,dtEdit:n,watch:d,setValue:o,showModal:i}=e,{setDosenAll:u,dtDosenAll:h}=(0,c.Z)(),x=j.Z.get("prodi_id"),m=async()=>{let e=await u({search:"",prodi_id:x});return e};(0,r.useEffect)(()=>(m(),()=>{}),[i]);let p=d("dosen_id");return(0,r.useEffect)(()=>{if(p){var e,a;let t=null==h?void 0:null===(e=h.data)||void 0===e?void 0:e.find(e=>e.id===p);o("nama",null==t?void 0:t.nama);let s=null==t?void 0:null===(a=t.prodi)||void 0===a?void 0:a.singkat;o("prodi",s.toLowerCase())}else o("nama","");return()=>{}},[p]),(0,s.jsxs)(s.Fragment,{children:[(null==h?void 0:h.data)&&(0,s.jsx)(D.Z,{label:"Dosen",placeholder:"Pilih Dosen",name:"dosen_id",dataDb:null==h?void 0:h.data,body:["id","NIDN","nama"],control:l,required:!0,errors:t.dosen_id,addClass:"col-span-4"}),(0,s.jsx)(b.Z,{label:"Nama",name:"nama",register:a,minLength:6,errors:t.nama,type:"hidden",addClass:"col-span-4 hidden"}),(0,s.jsx)(b.Z,{label:"Password",name:"password",register:a,minLength:6,required:!0,errors:t.password,addClass:"col-span-4"})]})},k=e=>{let{showModal:a,setShowModal:t,dtEdit:n}=e,{addData:d,updateData:o}=p(),[i,c]=(0,r.useState)(!1),{register:u,handleSubmit:h,setValue:x,control:m,formState:{errors:g},watch:j}=(0,N.cI)(),v=()=>{x("id",""),x("dosen_id",""),x("nama",""),x("password",""),x("prodi","")};(0,r.useEffect)(()=>{n?(x("id",n.id),x("dosen_id",n.dosen_id),x("nama",n.nama),x("password",n.password)):v()},[a,n]);let D=async e=>{if(c(!0),console.log({row:e}),n){let{data:a}=await o(n.id,e);(0,y.Z)({event:a}),t(!1)}else{let{data:a}=await d(e);console.log({data:a}),(0,y.Z)({event:a}),(null==a?void 0:a.type)!=="success"||v()}c(!1)};return(0,s.jsx)(w.Z,{title:"Form Dosen",showModal:a,setShowModal:t,children:(0,s.jsxs)("form",{onSubmit:h(D),children:[(0,s.jsx)(b.Z,{name:"id",register:u,type:"hidden"}),(0,s.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,s.jsx)(_,{register:u,errors:g,dtEdit:n,control:m,watch:j,setValue:x,showModal:a})}),(0,s.jsx)("div",{children:i?(0,s.jsx)(l.Z,{}):(0,s.jsx)(f.Z,{text:"Simpan",onClick:h(D)})})]})})},S=t(686),Z=t(8919),L=t(8350),C=()=>{let{removeData:e}=p(),[a,t]=(0,r.useState)(!1),[l,n]=(0,r.useState)(!1),[d,o]=(0,r.useState)(),[i,c]=(0,r.useState)(),[u,h]=(0,r.useState)(""),x=async a=>{let{id:t,isDelete:s}=a;if(o(t),s){let{data:a}=await e(d);(0,y.Z)({event:a}),n(!1)}else n(!0)};return(0,s.jsxs)("div",{className:"flex flex-col h-full",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(Z.Toaster,{}),(0,s.jsx)(k,{dtEdit:i,showModal:a,setShowModal:t}),(0,s.jsx)(S.Z,{showDel:l,setShowDel:n,setDelete:x}),(0,s.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,s.jsx)("p",{children:"Silahkan Mengolah data Dosen"}),(0,s.jsx)("div",{children:(0,s.jsx)(f.Z,{text:"Tambah Dosen",onClick:()=>{t(!0),c(null)}})})]}),(0,s.jsx)(L.Z,{placeholder:"Cari Dosen",onChange:e=>h(e)})]}),(0,s.jsx)(v,{setDelete:x,setEdit:e=>{t(!0),c(e)},search:u})]})}},8350:function(e,a,t){"use strict";var s=t(9268);t(6006),a.Z=e=>{let{placeholder:a,addClass:t,onChange:r,defaultValue:l=""}=e;return(0,s.jsx)("div",{className:t,children:(0,s.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",placeholder:a,onChange:e=>{r(e.target.value)},defaultValue:l})})}},686:function(e,a,t){"use strict";var s=t(9268);t(6006);var r=t(8136);a.Z=e=>{let{showDel:a,setShowDel:t,setDelete:l}=e;return a&&(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,s.jsxs)("div",{className:"bg-white p-5 rounded-xl lg:ml-64 md:min-w-[500px] h-min mt-[20%] max-h-[70%] overflow-auto",children:[(0,s.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.1] mb-4 pb-2",children:[(0,s.jsx)("h5",{className:"text-xl font-roboto",children:"Hapus Data"}),(0,s.jsx)(r.C7Q,{className:"cursor-pointer hover:text-black/[0.5]",onClick:()=>t(!1)})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Apaka Anda Yakin Menghapus Data Ini?"}),(0,s.jsxs)("div",{className:"flex justify-center gap-4 mt-4",children:[(0,s.jsx)("button",{className:"hover:border hover:border-red-600 bg-red-600 w-20 py-2 rounded-xl text-white ",onClick:()=>l({isDelete:!0}),children:"Hapus"}),(0,s.jsx)("button",{className:"w-20 py-2 rounded-xl hover:border-b",onClick:()=>t(!1),children:"Batal"})]})]})]})})})}},5437:function(e,a,t){"use strict";var s=t(9268);t(6006);var r=t(8136);a.Z=e=>{let{totalPages:a,currentPage:t,setPage:l}=e,n=[];if(a<=5)n=Array.from({length:a},(e,a)=>a+1);else{n=[1,t-1,t,t+1,a],n=(n=Array.from(new Set(n)).sort((e,a)=>e-a)).filter(e=>e>0&&e<=a);for(let e=1;e<n.length-1;e++)n[e]-n[e-1]>1&&(n.splice(e,0,"..."),e++);a-n[n.length-2]>1&&n.splice(n.length-1,0,"...")}return(0,s.jsx)("div",{className:"h-full",children:(0,s.jsxs)("ol",{className:"flex justify-center gap-1 text-xs font-medium",children:[t>1&&(0,s.jsx)("li",{children:(0,s.jsx)("div",{onClick:()=>l(t-1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,s.jsx)(r.pjk,{})})}),n.map((e,a)=>"..."===e?(0,s.jsx)("li",{className:"flex items-end text-xl",children:(0,s.jsx)("div",{className:"block h-8 w-8 rounded border border-gray-100 text-center leading-8",children:e})},a):(0,s.jsx)("li",{children:(0,s.jsx)("div",{onClick:()=>l(e),className:"cursor-pointer block h-8 w-8 rounded border border-gray-100 text-center leading-8 ".concat(e==t?"bg-blue-900 text-white":""),children:e})},a)),t<a&&(0,s.jsx)("li",{children:(0,s.jsx)("div",{onClick:()=>l(t+1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,s.jsx)(r.fmn,{})})})]})})}},3346:function(e,a,t){"use strict";var s=t(9268),r=t(4956),l=t(6008),n=t(8136);a.Z=e=>{(0,l.useRouter)();let a=a=>(e.page-1)*e.limit+a+1;return(0,s.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,s.jsx)("thead",{className:"",children:(0,s.jsx)("tr",{children:e.headTable&&e.headTable.map((e,a)=>(0,s.jsx)("th",{scope:"col",className:"px-6 py-4",children:e},a))})}),(0,s.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((t,l)=>{let{id:d}=t;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:a(l)}),e.tableBodies.map((e,a)=>(0,s.jsx)("td",{className:"px-6 py-4",children:(0,r.Z)(t,e)},a)),(0,s.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,s.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(t),e.ubah&&(0,s.jsx)(n.Ph1,{onClick:()=>e.setEdit&&e.setEdit(t),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&(0,s.jsx)(n.AuQ,{onClick:()=>(null==e?void 0:e.setDelete)&&(null==e?void 0:e.setDelete({id:d,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},l)})})]})}},3827:function(e,a,t){"use strict";var s=t(2561),r=t(4475),l=t(3415);let n=(0,s.Ue)((0,r.mW)((e,a)=>({dtDosen:[],dtDosenAll:[],setDosen:async a=>{let{page:t=1,limit:s=10,search:r}=a;try{let a=await (0,l.VF)({method:"get",url:"/dosen",params:{limit:s,page:t,search:r}});return e(e=>({...e,dtDosen:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setDosenAll:async a=>{let{search:t,prodi_id:s}=a;try{let a=await (0,l.VF)({method:"get",url:"/dosen/all",params:{search:t,prodi_id:s}});return e(e=>({...e,dtDosenAll:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=n}},function(e){e.O(0,[6680,4550,4288,2772,1092,7608,3088,7569,9253,7698,1744],function(){return e(e.s=2693)}),_N_E=e.O()}]);