/** @format */
"use client";
import AnimatedNumber from "@/components/animated/AnimatedNumber";
import useDosenApiEdom from "@/stores/api/Dosen";
import useDosenApi from "@/stores/api/Dosen";
import useMatkulApi from "@/stores/api/Matkul";
import useRuanganApiEdom from "@/stores/api/Ruangan";
import { config } from "@react-spring/web";
import React, { useEffect } from "react";
import {
  BsFillBookFill,
  BsFillPersonLinesFill,
  BsLampFill,
} from "react-icons/bs";

type Props = {};

const Home = (props: Props) => {
  const { setRuanganAll, dtRuangan } = useRuanganApiEdom();
  const { setMatkulAll, dtMatkul } = useMatkulApi();
  const { setDosenAll, dtDosenAll } = useDosenApiEdom();

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
  }, []);

  return (
    <div>
      <div className="mb-4">
        <p className="text-center text-sm md:text-lg text-font-1">
          (Sistem Informasi Perkuliahan Fakultas Sains & Teknologi)
        </p>
      </div>
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

export default Home;
