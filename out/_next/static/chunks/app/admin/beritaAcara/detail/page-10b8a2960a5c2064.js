(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8455],{3632:function(e,s,a){Promise.resolve().then(a.bind(a,7517))},7517:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return m}});var l=a(9268),n=a(6006),i=a(593),t=a(5437),d=a(3346),c=a(769),r=a(6008),u=e=>{let{setDelete:s,setEdit:a,search:u}=e,o=(0,r.useSearchParams)(),x=o.get("berita_acara_id")||"",{setDetBeritaAcara:h,dtDetBeritaAcara:v}=(0,c.Z)(),[j,f]=(0,n.useState)(1),[m,p]=(0,n.useState)(10),[b,w]=(0,n.useState)(!0),g=async()=>{await h({page:j,limit:m,search:u,berita_acara_id:x}),w(!1)};return(0,n.useEffect)(()=>(g(),()=>{}),[j,m]),(0,n.useEffect)(()=>{f(1),g()},[u]),(0,l.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:b?(0,l.jsx)(i.Z,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"",children:(0,l.jsx)(d.Z,{headTable:["No","Tgl. Pertemuan","Materi","Jumlah MHS","Sistem Belajar","Foto"],tableBodies:["tgl","materi","jmlh_mhs","sistem","foto"],dataTable:v.data,page:j,limit:m,setEdit:a,setDelete:s,ubah:!1,hapus:!1})}),(null==v?void 0:v.last_page)>1&&(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsx)(t.Z,{currentPage:null==v?void 0:v.current_page,totalPages:null==v?void 0:v.last_page,setPage:f})})]})})},o=a(366),x=a(8919),h=a(9442),v=a(8350),j=a(3415),f=a(1468),m=()=>{var e,s,a,t,d;let{removeData:m,showDetBeritaAcara:p}=(0,c.Z)(),{setShowJadwal:b,dtJadwal:w}=(0,f.Z)(),g=(0,r.useSearchParams)(),k=g.get("berita_acara_id")||"",S=g.get("jadwal_id")||"",[N,_]=(0,n.useState)(!1),[Z,E]=(0,n.useState)(!1),[C,P]=(0,n.useState)(),[T,y]=(0,n.useState)(),[D,K]=(0,n.useState)(""),[M,O]=(0,n.useState)(!1),B=async e=>{let{id:s,isDelete:a}=e;if(P(s),a){let{data:e}=await m(C);(0,h.Z)({event:e}),E(!1)}else E(!0)};return(0,n.useEffect)(()=>(b(S),()=>{}),[S,b]),(0,l.jsxs)("div",{className:"flex flex-col h-full",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(x.Toaster,{}),(0,l.jsxs)("div",{className:"mb-4 flex flex-col-reverse justify-between md:flex-row",children:[(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"w-32 inline-block uppercase",children:"Dosen"}),(0,l.jsxs)("span",{children:[": ",null==w?void 0:null===(e=w.dosen)||void 0===e?void 0:e.nama]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"w-32 inline-block uppercase",children:"KODE MK"}),(0,l.jsxs)("span",{children:[": ",null==w?void 0:null===(s=w.matkul)||void 0===s?void 0:s.kode]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"w-32 inline-block uppercase",children:"Mata Kuliah"}),(0,l.jsxs)("span",{children:[": ",null==w?void 0:null===(a=w.matkul)||void 0===a?void 0:a.nama]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"w-32 inline-block uppercase",children:"SKS/SMT/KLS"}),(0,l.jsxs)("span",{children:[": ",null==w?void 0:null===(t=w.matkul)||void 0===t?void 0:t.sks," / ",null==w?void 0:w.semester," T.A 2023/2024"]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"w-32 inline-block uppercase",children:"Ruangan"}),(0,l.jsxs)("span",{children:[": ",null==w?void 0:null===(d=w.ruangan)||void 0===d?void 0:d.kode]})]})]}),(0,l.jsx)("div",{className:"flex justify-between self-start mr-4",children:M?(0,l.jsx)(i.Z,{}):(0,l.jsx)(o.Z,{text:"Cetak",addClass:"self-end bg-secondary",onClick:()=>{O(!0),window.open("".concat(j._n,"/pdf/berita-acara/").concat(k)),O(!1)}})})]}),(0,l.jsx)(v.Z,{placeholder:"Cari Data",onChange:e=>K(e)})]}),(0,l.jsx)(u,{setDelete:B,setEdit:e=>{_(!0),y(e)},search:D})]})}}},function(e){e.O(0,[6680,4550,4288,3194,8541,9276,9253,7698,1744],function(){return e(e.s=3632)}),_N_E=e.O()}]);