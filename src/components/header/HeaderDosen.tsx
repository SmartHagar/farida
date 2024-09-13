/** @format */
"use client";
import { FC } from "react";

import { usePathname } from "next/navigation";
type Props = {};

const HeaderDosen: FC<Props> = () => {
  const pathname = usePathname();
  return (
    <div className="lg:backdrop-blur-sm lg:py-2 pl-7">
      <p className="text-xl font-medium text-center">
        {pathname === "/dosen" && "Selamat Datang "}
      </p>
    </div>
  );
};

export default HeaderDosen;
