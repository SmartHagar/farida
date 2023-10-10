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
    name: "Ruangan",
    href: "/admin/ruangan",
    icon: <BsLampFill />,
  },
  {
    name: "Matkul",
    href: "/admin/matkul",
    icon: <BsFillBookFill />,
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
        href: "/dosen/upload/abesn",
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
