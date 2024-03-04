/** @format */
import MenuTypes from "@/types/MenuTypes";
import {
  BsFillBookFill,
  BsFillPersonLinesFill,
  BsHouseDoorFill,
  BsLampFill,
  BsPeopleFill,
  BsReverseLayoutTextWindowReverse,
} from "react-icons/bs";
const menus: MenuTypes[] = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Dosen",
    href: "/admin/dosen",
    icon: <BsFillPersonLinesFill />,
  },
  {
    name: "Jadwal",
    href: "/admin/jadwal",
    icon: <BsReverseLayoutTextWindowReverse />,
  },
  {
    name: "RPS",
    href: "/admin/rps",
    icon: <BsPeopleFill />,
  },
  {
    name: "Berita Acara",
    href: "/admin/beritaAcara",
    icon: <BsPeopleFill />,
  },
  {
    name: "Kelengkapan",
    href: "/admin/kelengkapan",
    icon: <BsPeopleFill />,
  },
  {
    name: "Laporan",
    href: "#",
    slug: "laporan",
    icon: <BsPeopleFill />,
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
];
// list menu Dosen
const DosenMenus: MenuTypes[] = [
  {
    name: "Dashboard",
    href: "/dosen",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "RPS",
    href: "/dosen/rps",
    icon: <BsPeopleFill />,
  },
  {
    name: "Berita Acara",
    href: "/dosen/beritaAcara",
    icon: <BsPeopleFill />,
  },
  {
    name: "Upload",
    href: "#",
    slug: "upload",
    icon: <BsPeopleFill />,
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
];

export default menus;
export { DosenMenus };
