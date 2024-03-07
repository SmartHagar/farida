/** @format */
"use client";

import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

const HeaderAdmin = () => {
  // staf_si@fstuogp.com
  // staf_bi@fstuogp.com
  // staf_tg@fstuogp.com
  const pathname = usePathname();
  const email = Cookies.get("email");
  if (email === "staf_si@fstuogp.com") {
    Cookies.set("prodi_id", "1");
  } else if (email === "staf_bi@fstuogp.com") {
    Cookies.set("prodi_id", "2");
  } else if (email === "staf_tg@fstuogp.com") {
    Cookies.set("prodi_id", "3");
  } else {
    Cookies.remove("prodi_id");
  }
  return (
    <div className="lg:backdrop-blur-sm lg:py-2">
      {pathname === "/admin" ? (
        <p className="text-lg text-center">Selamat Datang admin</p>
      ) : (
        <p className="text-lg text-center tracking-[0.2rem]">SILAKU</p>
      )}
    </div>
  );
};

export default HeaderAdmin;
