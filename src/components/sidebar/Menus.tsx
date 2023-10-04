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
];
// list menu Doosen
const DoosenMenus = [
  {
    name: "Dashboard",
    href: "",
    slug: "dashboard",
    icon: <BsHouseDoorFill />,
    subMenus: false,
  },
  {
    name: "Penilaian",
    href: "/penilaian",
    icon: <BsPeopleFill />,
  },
];

export default menus;
export { DoosenMenus };
