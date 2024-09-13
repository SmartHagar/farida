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
