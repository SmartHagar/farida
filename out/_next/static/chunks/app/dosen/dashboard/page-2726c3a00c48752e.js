(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8125],{7246:function(a,e,t){Promise.resolve().then(t.bind(t,6752))},6752:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S}});var s=t(9268),l=t(2173),r=t(6006),n=t(1778),i=t(8136),d=t(3770),u=t(593),o=t(6008),c=t(5326),m=t.n(c),h=a=>{let{headTable:e,dataTable:t,limit:l,page:r}=a,n=a=>(r-1)*l+a+1;return(0,s.jsxs)("table",{className:"w-full border-collapse text-left",children:[(0,s.jsx)("thead",{className:"",children:(0,s.jsx)("tr",{children:e&&e.map((a,e)=>(0,s.jsx)("th",{scope:"col",className:"px-6 py-4",children:a},e))})}),(0,s.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:t&&t.map((a,e)=>{let t=!a.rps||!a.berita_acara||!a.absen||!a.nilai,l=[!a.rps&&"RPS",!a.berita_acara&&"BERITA ACARA",!a.absen&&"ABSEN",!a.nilai&&"NILAI"].filter(Boolean);return t&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap capitalize",children:n(e)}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap capitalize",children:l.join(", ")}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap capitalize",children:a.hari}),(0,s.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap capitalize",children:[m()(a.mulai,"HH:mm:ss").format("HH:mm")," -",m()(a.seles,"HH:mm:ss").format("HH:mm")]}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap capitalize",children:a.matkul.nama})]},e)})})]})},x=t(1712),p=t(2775),f=t(9947),g=t(9114),v=t(4803),j=t(1468),w=t(2766),N=a=>{let{tahun:e,semester:t}=a;(0,o.useSearchParams)();let l=(0,o.usePathname)(),{setShowAbsen:n,showAbsen:i}=(0,p.Z)(),{setShowNilai:d,showNilai:c}=(0,f.Z)(),{setShowBeritaAcara:m,showBeritaAcara:N}=(0,g.Z)(),{setShowRps:b,showRps:y}=(0,v.Z)(),{setByTahunSemester:k,dtJadwal:S}=(0,j.Z)(),[_,Z]=(0,r.useState)(1),[C,A]=(0,r.useState)(10),[D,E]=(0,r.useState)(!0),[I,J]=(0,r.useState)(""),[F,H]=(0,r.useState)(!1),[M,O]=(0,r.useState)(),R=x.Z.get("dosen_id")||"",V=async()=>{E(!0),await k({search:I,tahun:e,semester:t,dosen_id:R}),E(!1)};(0,r.useMemo)(()=>e&&t&&V(),[e,t,R]),(0,r.useEffect)(()=>{(0,w.Ow)({dtJadwal:S,setShowAbsen:n}),(0,w.z9)({dtJadwal:S,setShowNilai:d}),(0,w.iq)({dtJadwal:S,setShowBeritaAcara:m}),(0,w.cA)({dtJadwal:S,setShowRps:b})},[JSON.stringify(S)]);let L=(a,e,t,s,l)=>{E(!0);let r=null==a?void 0:a.map(a=>{let r=null==e?void 0:e.find(e=>parseInt(e.jadwal_id)===a.id),n=null==t?void 0:t.find(e=>parseInt(e.jadwal_id)===a.id),i=null==s?void 0:s.find(e=>parseInt(e.berita_acara.jadwal_id)===a.id),d=null==l?void 0:l.find(e=>parseInt(e.jadwal_id)===a.id);return n||r||i||d?{...a,nilai:n,absen:r,berita_acara:i,rps:d}:null}).filter(a=>null!==a);O({data:r}),E(!1)};return(0,r.useEffect)(()=>{let a=(null==M?void 0:M.originalData)||(null==M?void 0:M.data),e=a;""!==I.trim()&&(e=null==a?void 0:a.filter(a=>a.jadwal.hari.toLowerCase().includes(I.toLowerCase())||a.jadwal.matkul.nama.toLowerCase().includes(I.toLowerCase())||a.jadwal.matkul.kode.toLowerCase().includes(I.toLowerCase())));let t={data:e,originalData:a};O(t)},[I]),(0,r.useEffect)(()=>{S.length>0&&L(S,i,c,N,y)},[JSON.stringify(i),JSON.stringify(S),JSON.stringify(c),JSON.stringify(N),JSON.stringify(y)]),(0,r.useEffect)(()=>{let a=(null==M?void 0:M.data)&&(null==M?void 0:M.data.filter(a=>{var e;return!a.rps||!(null===(e=a.berita_acara)||void 0===e?void 0:e.uload_berita_acara)||!a.absen||!a.nilai}));return a&&a.length>0?H(!0):H(!1),()=>{}},[null==M?void 0:M.data,l]),(0,s.jsx)("div",{className:"flex flex-col",children:D?(0,s.jsx)(u.Z,{}):F&&(0,s.jsxs)("div",{className:" mb-4",children:[(0,s.jsx)("p",{children:"Beberapa dokumen yang belum dilengkapi"}),(0,s.jsx)("div",{className:"overflow-auto",children:(0,s.jsx)("div",{className:"",children:(0,s.jsx)(h,{headTable:["No","Tidak Ada","Hari","Jam","Mata Kuliah"],dataTable:null==M?void 0:M.data,page:_,limit:C})})})]})})},b=t(3222),y=t(3827),k=t(9700),S=a=>{var e,t,u;let{setRuanganAll:o,dtRuangan:c}=(0,b.Z)(),{setMatkulAll:m,dtMatkul:h}=(0,l.Z)(),{setDosenAll:x,dtDosenAll:p}=(0,y.Z)(),[f,g]=(0,r.useState)(""),[v,j]=(0,r.useState)("");(0,r.useEffect)(()=>{o({search:""}),m({search:""}),x({search:""})},[]);let{register:w,control:S,formState:{errors:_},watch:Z,setValue:C}=(0,k.cI)();return(0,r.useEffect)(()=>{let a=new Date().getFullYear();return g(a),j("Genap"),()=>{}},[]),(0,s.jsxs)("div",{className:"h-full w-full overflow-auto",children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("p",{className:"text-lg text-center tracking-[0.2rem]",children:"SILAKU"}),(0,s.jsx)("p",{className:"text-center text-sm text-font-1",children:"(Sistem Informasi Perkuliahan Fakultas Sains & Teknologi)"})]}),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(N,{tahun:f,semester:v})}),(0,s.jsxs)("div",{className:"flex gap-4 flex-wrap",children:[(0,s.jsxs)("div",{className:"flex flex-col bg-primary/10 p-4 px-8 rounded-md gap-1",children:[(0,s.jsx)(i.DC2,{className:"text-2xl text-primary"}),(0,s.jsx)(d.Z,{endValue:null==c?void 0:null===(e=c.data)||void 0===e?void 0:e.length,addClass:"text-2xl",animationConfig:n.vc.slow}),(0,s.jsx)("h6",{children:"Jumlah Ruangan"})]}),(0,s.jsxs)("div",{className:"flex flex-col bg-secondary/10 p-4 px-8 rounded-md gap-1",children:[(0,s.jsx)(i.pZ5,{className:"text-2xl text-secondary"}),(0,s.jsx)(d.Z,{endValue:null==h?void 0:null===(t=h.data)||void 0===t?void 0:t.length,addClass:"text-2xl",animationConfig:n.vc.slow}),(0,s.jsx)("h6",{children:"Jumlah Matkul"})]}),(0,s.jsxs)("div",{className:"flex flex-col bg-warning/10 p-4 px-8 rounded-md gap-1",children:[(0,s.jsx)(i.z8x,{className:"text-2xl text-warning"}),(0,s.jsx)(d.Z,{endValue:null==p?void 0:null===(u=p.data)||void 0===u?void 0:u.length,addClass:"text-2xl",animationConfig:n.vc.slow}),(0,s.jsx)("h6",{children:"Jumlah Dosen"})]})]})]})}},3770:function(a,e,t){"use strict";var s=t(9268),l=t(1778);t(6006),e.Z=a=>{let{endValue:e,animationConfig:t,addClass:r}=a,[n,i]=(0,l.YD)({once:!0}),d=(0,l.q_)({number:i?e:0,from:{number:0},config:t,delay:1e3});return(0,s.jsx)(l.q.span,{ref:n,className:r,children:d.number.to(a=>Math.floor(a))})}},3827:function(a,e,t){"use strict";var s=t(2561),l=t(4475),r=t(3415);let n=(0,s.Ue)((0,l.mW)((a,e)=>({dtDosen:[],dtDosenAll:[],setDosen:async e=>{let{page:t=1,limit:s=10,search:l}=e;try{let e=await (0,r.VF)({method:"get",url:"/dosen",params:{limit:s,page:t,search:l}});return a(a=>({...a,dtDosen:e.data.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}},setDosenAll:async e=>{let{search:t,prodi_id:s}=e;try{let e=await (0,r.VF)({method:"get",url:"/dosen/all",params:{search:t,prodi_id:s}});return a(a=>({...a,dtDosenAll:e.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}}})));e.Z=n},2173:function(a,e,t){"use strict";var s=t(2561),l=t(4475),r=t(3415);let n=(0,s.Ue)((0,l.mW)((a,e)=>({dtMatkul:[],setMatkul:async e=>{let{page:t=1,limit:s=10,search:l}=e;try{let e=await (0,r.VF)({method:"get",url:"/matkul",params:{limit:s,page:t,search:l}});return a(a=>({...a,dtMatkul:e.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}},setMatkulAll:async e=>{let{search:t}=e;try{let e=await (0,r.VF)({method:"get",url:"/matkul/all",params:{search:t}});return a(a=>({...a,dtMatkul:e.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}}})));e.Z=n},3222:function(a,e,t){"use strict";var s=t(2561),l=t(4475),r=t(3415);let n=(0,s.Ue)((0,l.mW)((a,e)=>({dtRuangan:[],setRuangan:async e=>{let{page:t=1,limit:s=10,search:l}=e;try{let e=await (0,r.VF)({method:"get",url:"/ruangan",params:{limit:s,page:t,search:l}});return a(a=>({...a,dtRuangan:e.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}},setRuanganAll:async e=>{let{search:t}=e;try{let e=await (0,r.VF)({method:"get",url:"/ruangan/all",params:{search:t}});return a(a=>({...a,dtRuangan:e.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}}})));e.Z=n}},function(a){a.O(0,[6680,4550,4288,2772,1282,484,9253,7698,1744],function(){return a(a.s=7246)}),_N_E=a.O()}]);