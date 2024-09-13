/** @format */
"use client";
import useMatkulApi from "@/stores/api/Matkul";
import { useEffect, useState } from "react";
import { config } from "@react-spring/web";
import {
  BsFillBookFill,
  BsFillPersonLinesFill,
  BsLampFill,
} from "react-icons/bs";
import AnimatedNumber from "@/components/animated/AnimatedNumber";
import useRuanganApiEdom from "@/stores/api/Ruangan";
import useDosenApiEdom from "@/stores/api/Dosen";

import Cookies from "js-cookie";
import Searching from "./Searching";
import Kelengkapan from "./kelengkapan/Kelengkapan";

type Props = {};

const Dashboard = (props: Props) => {
  const { setRuanganAll, dtRuangan } = useRuanganApiEdom();
  const { setMatkulAll, dtMatkul } = useMatkulApi();
  const { setDosenAll, dtDosenAll } = useDosenApiEdom();
  const [dtDosen, setDtDosen] = useState<any>([]);
  //
  const dosen_id = Cookies.get("dosen_id") || "";

  useEffect(() => {
    setRuanganAll({
      search: "",
    });
    setMatkulAll({
      search: "",
    });
    setDosenAll({
      search: "",
    });
  }, [setDosenAll, setMatkulAll, setRuanganAll]);

  useEffect(() => {
    const dtDosen = dtDosenAll?.data?.find(
      (d: any) => d.id === parseInt(dosen_id)
    );
    setDtDosen(dtDosen);
    return () => {};
  }, [dosen_id, dtDosenAll]);

  return (
    <div className="h-full w-full overflow-auto">
      <div className="mb-4">
        <p className="text-lg md:text-xl text-center tracking-[0.2rem]">
          SILAKU
        </p>
        <p className="text-center text-sm md:text-base text-font-1">
          (Sistem Informasi Laporan Perkuliahan)
        </p>
        <p className="text-center text-sm md:text-lg font-bold text-font-1">
          FAKULTAS EKONOMI
        </p>
        <h5 className="text-center my-4">{dtDosen?.nm_dosen}</h5>
      </div>
      <>
        <Searching halaman="Dashboard" />
        <Kelengkapan dosen_id={dosen_id} />
      </>
      <div className="flex gap-4 flex-wrap">
        <div className="flex flex-col bg-primary/10 p-4 px-8 rounded-md gap-1">
          {/* icon */}
          <BsFillBookFill className="text-2xl text-primary" />
          {/* number */}
          <AnimatedNumber
            endValue={dtRuangan?.data?.length}
            addClass="text-2xl"
            animationConfig={config.slow}
          />
          {/* keterangan */}
          <h6>Jumlah Ruangan</h6>
        </div>
        <div className="flex flex-col bg-secondary/10 p-4 px-8 rounded-md gap-1">
          {/* icon */}
          <BsLampFill className="text-2xl text-secondary" />
          {/* number */}
          <AnimatedNumber
            endValue={dtMatkul?.data?.length}
            addClass="text-2xl"
            animationConfig={config.slow}
          />
          {/* keterangan */}
          <h6>Jumlah Matkul</h6>
        </div>
        <div className="flex flex-col bg-warning/10 p-4 px-8 rounded-md gap-1">
          {/* icon */}
          <BsFillPersonLinesFill className="text-2xl text-warning" />
          {/* number */}
          <AnimatedNumber
            endValue={dtDosenAll?.data?.length}
            addClass="text-2xl"
            animationConfig={config.slow}
          />
          {/* keterangan */}
          <h6>Jumlah Dosen</h6>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
