/** @format */

import { FC } from "react";

import Cookies from "js-cookie";
type Props = {
  user: any;
};

const HeaderDosen: FC<Props> = ({ user }) => {
  Cookies.set("dosen_id", user?.id);
  return (
    <div className="lg:backdrop-blur-sm lg:py-2">
      <p className="text-2xl font-semibold text-center">
        Selamat Datang {user?.name}
      </p>
    </div>
  );
};

export default HeaderDosen;
