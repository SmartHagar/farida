(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9091],{5049:function(e,a,s){Promise.resolve().then(s.bind(s,8435))},8435:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return j}});var n=s(9268),r=s(6008),t=()=>{let e=(0,r.usePathname)();return(0,n.jsx)("div",{className:"lg:backdrop-blur-sm lg:py-2",children:"/admin"===e?(0,n.jsx)("p",{className:"text-lg text-center",children:"Selamat Datang admin"}):(0,n.jsx)("p",{className:"text-lg text-center tracking-[0.2rem]",children:"SILAKU"})})},i=s(6006),l=s(1817),c=s(8740),o=s(9032),d=s(7513),u=s(7743),m=s(7163),x=e=>{let{isOpen:a,setIsOpen:s}=(0,d.useMenuContext)(),t=(0,r.usePathname)();return(0,i.useEffect)(()=>{let e=window.innerWidth>=1024;return e?s(!0):s(!1),()=>{s(!1)}},[t]),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"lg:hidden mt-2 ml-2 z-50 h-7 absolute",onClick:()=>s(!a),children:a?(0,n.jsx)(l._0w,{className:" text-3xl absolute left-[15rem] bg-side-bar text-dark rounded-tr-lg rounded-br-lg"}):(0,n.jsx)(l.jw0,{className:"text-2xl"})}),(0,n.jsx)(u.M,{children:a&&(0,n.jsx)(m.E.aside,{animate:"open",exit:"closed",initial:"closed",variants:{open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},className:a?"absolute lg:static lg:block w-[15.5rem] lg:w-[18rem] z-10 bg-side-bar rounded-lg shadow-lg shadow-black":"",children:(0,n.jsx)(c.Z,{menus:o.Z})})})]})},h=s(4406),f=s(1712),p=s(593),j=e=>{let[a,s]=(0,i.useState)(!0),l=(0,r.usePathname)(),c=(0,r.useRouter)(),{cekToken:o}=(0,h.Z)(),d=async()=>{let e=await o();if(null==e?void 0:e.error)c.push("/login");else{let e=f.Z.get("role");"admin"!==e&&c.push("/".concat(e))}return e};(0,i.useEffect)(()=>(d(),()=>{}),[l]);let u=async()=>{let e=await d();console.log({cek:e}),(null==e?void 0:e.error)||s(!1)};return((0,i.useEffect)(()=>(u(),console.log("pertama render"),()=>{}),[]),a)?(0,n.jsx)("div",{className:"flex min-h-screen h-screen justify-center items-center",children:(0,n.jsx)(p.Z,{})}):(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex min-h-screen h-screen text-black bg-bg",children:[(0,n.jsx)(x,{}),(0,n.jsxs)("div",{className:"flex h-full w-full overflow-hidden p-1 rounded-lg flex-col",children:[(0,n.jsx)("div",{className:"lg:-mx-4 lg:-mt-2 mb-1",children:(0,n.jsx)(t,{})}),(0,n.jsx)("div",{className:"bg-white h-full overflow-hidden p-2 drop-shadow-2xl shadow-black rounded-lg",children:e.children})]})]})})}},593:function(e,a,s){"use strict";var n=s(9268);s(6006),a.Z=()=>(0,n.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-secondary border-t-transparent shadow-md"})},8740:function(e,a,s){"use strict";var n=s(9268),r=s(5846),t=s.n(r),i=s(6008),l=s(6394),c=s.n(l),o=s(6006),d=s(1712);let u=e=>{let{subMenus:a,name:s,icon:r,slug:i,index:l,pathname:c,openMenus:o}=e,d=o.includes(i);return(0,n.jsx)("div",{children:(0,n.jsxs)("details",{className:"group [&_summary::-webkit-details-marker]:hidden",open:d,children:[(0,n.jsxs)("summary",{className:"flex items-center justify-between px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary hover:text-gray-200 }",children:[(0,n.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,n.jsx)("span",{children:r}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:s})]}),(0,n.jsx)("span",{className:"shrink-0 transition duration-300 group-open:-rotate-180",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),a&&a.map((e,a)=>{let s=c===e.href;return(0,n.jsxs)("div",{className:"ml-4",children:[!e.subMenus&&(0,n.jsx)(t(),{href:e.href,className:"flex items-center mx-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary/50 hover:text-gray-200 ".concat(s&&"border-b-2 border-primary text-primary bg-white/50"),children:(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:e.name})}),e.subMenus&&u({subMenus:e.subMenus,name:e.name,icon:e.icon,slug:e.slug,index:a,pathname:c,openMenus:o})]},a)})]})},l)};a.Z=e=>{let{menus:a}=e,[s,r]=(0,o.useState)(!1),[l,m]=(0,o.useState)([]),x=(0,i.useRouter)(),h=(0,i.usePathname)(),f=e=>{for(let a of e){if(a.href===h){let e=null==h?void 0:h.split("/");e.splice(0,1),m(e)}a.subMenus&&f(a.subMenus)}};(0,o.useEffect)(()=>(f(a),()=>{}),[h]);let p=async()=>{r(!0),d.Z.remove("token"),d.Z.remove("role"),d.Z.remove("dosen_id"),x.push("/"),r(!1)};return(0,n.jsxs)("aside",{className:"flex flex-col w-64 h-screen px-5 overflow-y-auto",children:[(0,n.jsx)("div",{className:"flex items-center mt-2 gap-2 justify-center",children:(0,n.jsx)("div",{className:"relative h-[75px] w-20",children:(0,n.jsx)(c(),{alt:"logo",fill:!0,sizes:"(100vw, 100vh)",style:{objectFit:"contain",objectPosition:"center",width:"100%",height:"100%"},src:"/images/uogp.png"})})}),(0,n.jsx)("div",{className:"my-2",children:(0,n.jsx)("p",{className:"text-lg text-center tracking-[0.2rem]",children:"SILAKU"})}),(0,n.jsx)("div",{className:"mt-2 mb-2 w-full border-b border-light",children:(0,n.jsx)("p",{className:"px-3 text-sm font-medium text-black text-center uppercase ",children:"Menu"})}),(0,n.jsxs)("div",{className:"flex flex-col justify-between flex-1 pt-2 border-t",children:[(0,n.jsx)("nav",{className:"-mx-3 space-y-6 ",children:(0,n.jsx)("div",{className:"space-y-3 text-slate-800",children:a.map((e,a)=>{let{name:s,href:r,icon:i,subMenus:c,slug:o}=e,d=h===r;return c?u({subMenus:c,name:s,icon:i,slug:o,index:a,pathname:h,openMenus:l}):(0,n.jsx)("div",{children:(0,n.jsxs)(t(),{href:r,className:"flex items-center px-3 py-2 transition-all duration-300 transform rounded-lg hover:bg-primary/50 hover:text-gray-200 ".concat(d&&"border-b-2 border-primary text-primary bg-white/50"),children:[(0,n.jsx)("span",{children:i}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:s})]})},a)})})}),(0,n.jsx)("div",{children:s?(0,n.jsx)("p",{children:"Loading..."}):(0,n.jsx)("button",{onClick:p,className:"flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-secondary hover:underline hover:text-primary",children:(0,n.jsx)("span",{children:"Sign Out"})})})]})]})}},9032:function(e,a,s){"use strict";s.d(a,{G:function(){return i}});var n=s(9268),r=s(8136);let t=[{name:"Dashboard",href:"/admin",icon:(0,n.jsx)(r.ufG,{})},{name:"Ruangan",href:"/admin/ruangan",icon:(0,n.jsx)(r.pZ5,{})},{name:"Matkul",href:"/admin/matkul",icon:(0,n.jsx)(r.DC2,{})},{name:"Dosen",href:"/admin/dosen",icon:(0,n.jsx)(r.z8x,{})},{name:"Jadwal",href:"/admin/jadwal",icon:(0,n.jsx)(r.DGw,{})},{name:"RPS",href:"/admin/rps",icon:(0,n.jsx)(r.fFq,{})},{name:"Berita Acara",href:"/admin/beritaAcara",icon:(0,n.jsx)(r.fFq,{})},{name:"Kelengkapan",href:"/admin/kelengkapan",icon:(0,n.jsx)(r.fFq,{})},{name:"Laporan",href:"#",slug:"laporan",icon:(0,n.jsx)(r.fFq,{}),subMenus:[{name:"Absen",href:"/admin/laporan/absen",icon:(0,n.jsx)(r.fFq,{})},{name:"Berita Acara",href:"/admin/laporan/beritaAcara",icon:(0,n.jsx)(r.fFq,{})},{name:"Nilai",href:"/admin/laporan/nilai",icon:(0,n.jsx)(r.fFq,{})}]}],i=[{name:"Dashboard",href:"/dosen",icon:(0,n.jsx)(r.ufG,{})},{name:"RPS",href:"/dosen/rps",icon:(0,n.jsx)(r.fFq,{})},{name:"Berita Acara",href:"/dosen/beritaAcara",icon:(0,n.jsx)(r.fFq,{})},{name:"Upload",href:"#",slug:"upload",icon:(0,n.jsx)(r.fFq,{}),subMenus:[{name:"Absen",href:"/dosen/upload/absen",icon:(0,n.jsx)(r.fFq,{})},{name:"Berita Acara",href:"/dosen/upload/beritaAcara",icon:(0,n.jsx)(r.fFq,{})},{name:"Nilai",href:"/dosen/upload/nilai",icon:(0,n.jsx)(r.fFq,{})}]}];a.Z=t},7513:function(e,a,s){"use strict";s.r(a),s.d(a,{useMenuContext:function(){return i}});var n=s(9268),r=s(6006);let t=(0,r.createContext)({isOpen:!1,setIsOpen:()=>!1});a.default=e=>{let{children:a}=e,[s,i]=(0,r.useState)(!1);return(0,n.jsx)(t.Provider,{value:{isOpen:s,setIsOpen:i},children:a})};let i=()=>(0,r.useContext)(t)},3415:function(e,a,s){"use strict";s.d(a,{I8:function(){return t},Sj:function(){return i},_n:function(){return r},hi:function(){return l}});var n=s(4214);let r="https://back.faridapatai.my.id",t=n.Z.create({baseURL:"".concat(r,"/auth")}),i=n.Z.create({baseURL:"".concat(r,"/crud")}),l=n.Z.create({baseURL:"".concat(r,"/api")});n.Z.create({baseURL:"".concat(r,"/storage")})},4406:function(e,a,s){"use strict";var n=s(2561),r=s(4475),t=s(3415),i=s(1712);let l=(0,n.Ue)((0,r.mW)((e,a)=>({setToken:async()=>{let e=i.Z.get("token");return e},setLogin:async e=>{try{let a=await (0,t.I8)({method:"post",url:"/login",data:e});return{status:"success",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let e=await a().setToken();try{let a=await (0,t.I8)({method:"post",url:"/cek-token",headers:{Authorization:"Bearer ".concat(e)}});return{status:"success",data:a.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=l}},function(e){e.O(0,[6680,5639,4288,1092,8487,486,9253,7698,1744],function(){return e(e.s=5049)}),_N_E=e.O()}]);