/** @format */
import MenuTypes from "@/types/MenuTypes";
import {
  BsHouseDoorFill,
  BsMotherboard,
  BsNewspaper,
  BsPaperclip,
  BsPenFill,
  BsPeopleFill,
  BsPerson,
  BsReception4,
  BsReverseLayoutTextWindowReverse,
  BsUpload,
} from "react-icons/bs";
const menus: MenuTypes[] = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Dosen",
    href: "/admin/dosen",
    icon: <BsPerson />,
  },
  {
    name: "Paraf Pimpinan",
    href: "/admin/parafPimpinan",
    icon: <BsPenFill />,
  },
  {
    name: "Jadwal",
    href: "/admin/jadwal",
    icon: <BsReverseLayoutTextWindowReverse />,
  },
  {
    name: "RPS",
    href: "/admin/rps",
    icon: <BsPaperclip />,
  },
  {
    name: "Berita Acara",
    href: "/admin/beritaAcara/daftar",
    icon: <BsNewspaper />,
  },
  {
    name: "Kelengkapan",
    href: "/admin/kelengkapan",
    icon: <BsMotherboard />,
  },
  {
    name: "Laporan",
    href: "#",
    slug: "laporan",
    icon: <BsReception4 />,
    subMenus: [
      {
        name: "Absen",
        href: "/admin/laporan/absen",
        icon: <BsPeopleFill />,
      },
      {
        name: "Berita Acara",
        href: "/admin/laporan/beritaAcara",
        icon: <BsPeopleFill />,
      },
      {
        name: "Nilai",
        href: "/admin/laporan/nilai",
        icon: <BsPeopleFill />,
      },
    ],
  },
  {
    name: "Akun",
    href: "/admin/akun",
    icon: <BsPeopleFill />,
  },
];
// list menu Dosen
const DosenMenus: MenuTypes[] = [
  {
    name: "Dashboard",
    href: "/dosen/dashboard",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "RPS",
    href: "/dosen/rps",
    icon: <BsPaperclip />,
  },
  {
    name: "Berita Acara",
    href: "/dosen/beritaAcara/daftar",
    icon: <BsNewspaper />,
  },
  {
    name: "Upload",
    href: "#",
    slug: "upload",
    icon: <BsUpload />,
    subMenus: [
      {
        name: "Absen",
        href: "/dosen/upload/absen",
        icon: <BsPeopleFill />,
      },
      {
        name: "Berita Acara",
        href: "/dosen/upload/beritaAcara",
        icon: <BsPeopleFill />,
      },
      {
        name: "Nilai",
        href: "/dosen/upload/nilai",
        icon: <BsPeopleFill />,
      },
    ],
  },
  {
    name: "Akun",
    href: "/dosen/akun",
    icon: <BsPeopleFill />,
  },
];

export default menus;
export { DosenMenus };
