/** @format */
import MenuTypes from "@/types/MenuTypes";
import { BsHouseDoorFill } from "react-icons/bs";
const MainMenu: MenuTypes[] = [
  {
    name: "Berita",
    href: "/berita",
    icon: <BsHouseDoorFill />,
  },

  {
    name: "Kegiatan",
    href: "/visiMisi",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Kontak Kami",
    href: "/kontakKami",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Fasilitas",
    href: "/fasilitas",
    icon: <BsHouseDoorFill />,
  },
];
const ListMenu = [
  {
    name: "Home",
    href: "/",
    icon: <BsHouseDoorFill />,
  },

  {
    name: "Akademik",
    slug: "akademik",
    subMenus: [
      {
        name: "Kurikulum",
        href: "/akademik/kurikulum",
      },
      {
        name: "Jadwal Pelajaran",
        slug: "jadwalPelajaran",
        subMenus: [
          {
            name: "Semester 1",
            href: "/akademik/jadwalPelajaran/semester1",
          },
          {
            name: "Semester 2",
            href: "/akademik/jadwalPelajaran/semester2",
          },
        ],
      },
      {
        name: "Kalender Akademik",
        href: "/akademik/kalenderAkademik",
      },
    ],
  },
  {
    name: "Kesiswaan",
    href: "/kesiswaan",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Layanan",
    href: "/layanan",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Galeri",
    href: "/galeri",
    icon: <BsHouseDoorFill />,
  },
];

export default ListMenu;
export { MainMenu };
