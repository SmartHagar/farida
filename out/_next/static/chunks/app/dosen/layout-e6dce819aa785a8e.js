(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8580],{8146:function(e,a,s){Promise.resolve().then(s.bind(s,9623))},9623:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return j}});var n=s(9268),t=s(6006),r=s(1712),i=s(6008),l=s(4406),o=s(1817),c=s(8740),d=s(9032),u=s(7513),m=s(7743),h=s(7163),x=e=>{let{isOpen:a,setIsOpen:s}=(0,u.useMenuContext)(),r=(0,i.usePathname)();return(0,t.useEffect)(()=>{let e=window.innerWidth>=1024;return e?s(!0):s(!1),()=>{s(!1)}},[r]),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"lg:hidden mt-2 ml-2 z-50 h-7 absolute",onClick:()=>s(!a),children:a?(0,n.jsx)(o._0w,{className:" text-3xl absolute left-[15rem] bg-slate-950 text-white rounded-tr-lg rounded-br-lg"}):(0,n.jsx)(o.jw0,{className:"text-2xl"})}),(0,n.jsx)(m.M,{children:a&&(0,n.jsx)(h.E.aside,{animate:"open",exit:"closed",initial:"closed",variants:{open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},className:a?"absolute lg:static lg:block w-[15.5rem] lg:w-[18rem] z-10 bg-side-bar rounded-lg shadow-lg shadow-black":"",children:(0,n.jsx)(c.Z,{menus:d.G})})})]})},f=e=>{var a;let{user:s}=e;r.Z.set("dosen_id",null==s?void 0:null===(a=s.dosen_login)||void 0===a?void 0:a.dosen_id);let t=(0,i.usePathname)();return(0,n.jsx)("div",{className:"lg:backdrop-blur-sm lg:py-2 pl-7",children:(0,n.jsxs)("p",{className:"text-xl font-medium text-center",children:["/dosen"===t&&"Selamat Datang "," ",null==s?void 0:s.name]})})},p=s(593),j=e=>{let[a,s]=(0,t.useState)(),[o,c]=(0,t.useState)(!0),d=(0,i.usePathname)(),u=(0,i.useRouter)(),{cekToken:m}=(0,l.Z)(),h=async()=>{var e,a;let n=await m();if(null==n?void 0:n.error)u.push("/login");else{let t=r.Z.get("role");s(null==n?void 0:null===(a=n.data)||void 0===a?void 0:null===(e=a.data)||void 0===e?void 0:e.user),"dosen"!==t&&u.push("/admin")}return n};(0,t.useEffect)(()=>(h(),()=>{}),[d]);let j=async()=>{let e=await h();(null==e?void 0:e.error)||c(!1)};return((0,t.useEffect)(()=>(j(),console.log("pertama render dosen"),()=>{}),[]),o)?(0,n.jsx)("div",{className:"flex min-h-screen h-screen justify-center items-center",children:(0,n.jsx)(p.Z,{})}):(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex min-h-screen h-screen text-black bg-bg",children:[(0,n.jsx)(x,{}),(0,n.jsxs)("div",{className:"flex h-full w-full overflow-hidden p-1 rounded-lg flex-col",children:[(0,n.jsx)("div",{className:"lg:-mx-4 lg:-mt-2 mb-1",children:(0,n.jsx)(f,{user:a})}),(0,n.jsx)("div",{className:"bg-white h-full overflow-hidden p-2 drop-shadow-2xl shadow-black rounded-lg",children:e.children})]})]})})}},593:function(e,a,s){"use strict";var n=s(9268);s(6006),a.Z=()=>(0,n.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-secondary border-t-transparent shadow-md"})},8740:function(e,a,s){"use strict";var n=s(9268),t=s(5846),r=s.n(t),i=s(6008),l=s(6394),o=s.n(l),c=s(6006),d=s(1712);let u=e=>{let{subMenus:a,name:s,icon:t,slug:i,index:l,pathname:o,openMenus:c}=e,d=c.includes(i);return(0,n.jsx)("div",{children:(0,n.jsxs)("details",{className:"group [&_summary::-webkit-details-marker]:hidden",open:d,children:[(0,n.jsxs)("summary",{className:"flex items-center justify-between px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary hover:text-gray-200 }",children:[(0,n.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,n.jsx)("span",{children:t}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:s})]}),(0,n.jsx)("span",{className:"shrink-0 transition duration-300 group-open:-rotate-180",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),a&&a.map((e,a)=>{let s=o===e.href;return(0,n.jsxs)("div",{className:"ml-4",children:[!e.subMenus&&(0,n.jsx)(r(),{href:e.href,className:"flex items-center mx-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary/50 hover:text-gray-200 ".concat(s&&"border-b-2 border-primary text-primary bg-white/50"),children:(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:e.name})}),e.subMenus&&u({subMenus:e.subMenus,name:e.name,icon:e.icon,slug:e.slug,index:a,pathname:o,openMenus:c})]},a)})]})},l)};a.Z=e=>{let{menus:a}=e,[s,t]=(0,c.useState)(!1),[l,m]=(0,c.useState)([]),h=(0,i.useRouter)(),x=(0,i.usePathname)(),f=e=>{for(let a of e){if(a.href===x){let e=null==x?void 0:x.split("/");e.splice(0,1),m(e)}a.subMenus&&f(a.subMenus)}};(0,c.useEffect)(()=>(f(a),()=>{}),[x]);let p=async()=>{t(!0),d.Z.remove("token"),d.Z.remove("role"),d.Z.remove("dosen_id"),d.Z.remove("email"),d.Z.remove("prodi_id"),h.push("/"),t(!1)};return(0,n.jsxs)("aside",{className:"flex flex-col w-64 h-screen px-5 overflow-y-auto",children:[(0,n.jsx)("div",{className:"flex items-center mt-2 gap-2 justify-center",children:(0,n.jsx)("div",{className:"relative h-[75px] w-20",children:(0,n.jsx)(o(),{alt:"logo",fill:!0,sizes:"(100vw, 100vh)",style:{objectFit:"contain",objectPosition:"center",width:"100%",height:"100%"},src:"/images/uogp.png"})})}),(0,n.jsx)("div",{className:"my-2",children:(0,n.jsx)("p",{className:"text-lg text-center tracking-[0.2rem]",children:"SILAKU"})}),(0,n.jsx)("div",{className:"mt-2 mb-2 w-full border-b border-light",children:(0,n.jsx)("p",{className:"px-3 text-sm font-medium text-black text-center uppercase ",children:"Menu"})}),(0,n.jsxs)("div",{className:"flex flex-col justify-between flex-1 pt-2 border-t",children:[(0,n.jsx)("nav",{className:"-mx-3 space-y-6 ",children:(0,n.jsx)("div",{className:"space-y-3 text-slate-800",children:a.map((e,a)=>{let{name:s,href:t,icon:i,subMenus:o,slug:c}=e,d=x===t;return o?u({subMenus:o,name:s,icon:i,slug:c,index:a,pathname:x,openMenus:l}):(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{href:t,className:"flex items-center px-3 py-2 transition-all duration-300 transform rounded-lg hover:bg-primary/50 hover:text-gray-200 ".concat(d&&"border-b-2 border-primary text-primary bg-white/50"),children:[(0,n.jsx)("span",{children:i}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:s})]})},a)})})}),(0,n.jsx)("div",{children:s?(0,n.jsx)("p",{children:"Loading..."}):(0,n.jsx)("button",{onClick:p,className:"flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-secondary hover:underline hover:text-primary",children:(0,n.jsx)("span",{children:"Sign Out"})})})]})]})}},9032:function(e,a,s){"use strict";s.d(a,{G:function(){return i}});var n=s(9268),t=s(8136);let r=[{name:"Dashboard",href:"/admin/dashboard",icon:(0,n.jsx)(t.ufG,{})},{name:"Dosen",href:"/admin/dosen",icon:(0,n.jsx)(t.z8x,{})},{name:"Jadwal",href:"/admin/jadwal",icon:(0,n.jsx)(t.DGw,{})},{name:"RPS",href:"/admin/rps",icon:(0,n.jsx)(t.fFq,{})},{name:"Berita Acara",href:"/admin/beritaAcara/daftar",icon:(0,n.jsx)(t.fFq,{})},{name:"Kelengkapan",href:"/admin/kelengkapan",icon:(0,n.jsx)(t.fFq,{})},{name:"Laporan",href:"#",slug:"laporan",icon:(0,n.jsx)(t.fFq,{}),subMenus:[{name:"Absen",href:"/admin/laporan/absen",icon:(0,n.jsx)(t.fFq,{})},{name:"Berita Acara",href:"/admin/laporan/beritaAcara",icon:(0,n.jsx)(t.fFq,{})},{name:"Nilai",href:"/admin/laporan/nilai",icon:(0,n.jsx)(t.fFq,{})}]},{name:"Akun",href:"/admin/akun",icon:(0,n.jsx)(t.fFq,{})}],i=[{name:"Dashboard",href:"/dosen/dashboard",icon:(0,n.jsx)(t.ufG,{})},{name:"RPS",href:"/dosen/rps",icon:(0,n.jsx)(t.fFq,{})},{name:"Berita Acara",href:"/dosen/beritaAcara/daftar",icon:(0,n.jsx)(t.fFq,{})},{name:"Upload",href:"#",slug:"upload",icon:(0,n.jsx)(t.fFq,{}),subMenus:[{name:"Absen",href:"/dosen/upload/absen",icon:(0,n.jsx)(t.fFq,{})},{name:"Nilai",href:"/dosen/upload/nilai",icon:(0,n.jsx)(t.fFq,{})}]},{name:"Akun",href:"/dosen/akun",icon:(0,n.jsx)(t.fFq,{})}];a.Z=r},7513:function(e,a,s){"use strict";s.r(a),s.d(a,{useMenuContext:function(){return i}});var n=s(9268),t=s(6006);let r=(0,t.createContext)({isOpen:!1,setIsOpen:()=>!1});a.default=e=>{let{children:a}=e,[s,i]=(0,t.useState)(!1);return(0,n.jsx)(r.Provider,{value:{isOpen:s,setIsOpen:i},children:a})};let i=()=>(0,t.useContext)(r)},3415:function(e,a,s){"use strict";s.d(a,{I8:function(){return r},Sj:function(){return i},VF:function(){return o},_n:function(){return t},hi:function(){return l}});var n=s(4214);let t="https://back.silaku.fstuogp.com",r=n.Z.create({baseURL:"".concat(t,"/auth")}),i=n.Z.create({baseURL:"".concat(t,"/crud")}),l=n.Z.create({baseURL:"".concat(t,"/api")});n.Z.create({baseURL:"".concat(t,"/storage")});let o=n.Z.create({baseURL:"".concat("https://back.edom.fstuogp.com","/api")})},4406:function(e,a,s){"use strict";var n=s(2561),t=s(4475),r=s(3415),i=s(1712);let l=(0,n.Ue)((0,t.mW)((e,a)=>({dtLogin:[],setToken:async()=>{let e=i.Z.get("token");return e},setLogin:async e=>{try{let a=await (0,r.I8)({method:"post",url:"/login",data:e});return{status:"success",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let s=await a().setToken();try{let a=await (0,r.I8)({method:"post",url:"/cek-token",headers:{Authorization:"Bearer ".concat(s)}});return e(e=>({...e,dtLogin:a.data.data})),{status:"success",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setUpdate:async(s,n)=>{try{let t=await a().setToken(),i=await (0,r.I8)({method:"post",url:"/update/".concat(s),headers:{Authorization:"Bearer ".concat(t)},data:n});return e(e=>({...e,dtLogin:i.data.data})),{status:"success",data:i.data}}catch(e){return console.log(e.response.data),{status:"error",data:e.response.data}}}})));a.Z=l}},function(e){e.O(0,[6680,5639,4288,1092,5846,2405,9253,7698,1744],function(){return e(e.s=8146)}),_N_E=e.O()}]);