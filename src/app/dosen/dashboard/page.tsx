/** @format */
"use client";
import useMatkulApi from "@/stores/api/Matkul";
import React, { useEffect, useState } from "react";
import { config } from "@react-spring/web";
import {
  BsFillBookFill,
  BsFillPersonLinesFill,
  BsLampFill,
} from "react-icons/bs";
import AnimatedNumber from "@/components/animated/AnimatedNumber";
import Kelengkapan from "./kelengkapan/Kelengkapan";
import useRuanganApiEdom from "@/stores/api/Ruangan";
import useDosenApiEdom from "@/stores/api/Dosen";
import { useForm } from "react-hook-form";

import Cookies from "js-cookie";

type Props = {};

const Dashboard = (props: Props) => {
  const { setRuanganAll, dtRuangan } = useRuanganApiEdom();
  const { setMatkulAll, dtMatkul } = useMatkulApi();
  const { setDosenAll, dtDosenAll } = useDosenApiEdom();
  // state
  const [tahunWatch, setTahunWatch] = useState<number | string>("");
  const [semesterWatch, setSemesterWatch] = useState<string>("");
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
  }, []);

  // hook form
  const {
    register,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  useEffect(() => {
    const tahun = new Date().getFullYear();
    // get month
    const month = new Date().getMonth();
    const semester = month > 6 ? "Ganjil" : "Genap";
    setTahunWatch(tahun);
    setSemesterWatch(semester);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const dtDosen = dtDosenAll?.data?.find(
      (d: any) => d.id === parseInt(dosen_id)
    );
    setDtDosen(dtDosen);
    return () => {};
  }, [dosen_id, dtDosenAll]);

  console.log({ dtDosenAll });

  return (
    <div className="h-full w-full overflow-auto">
      <div className="mb-4">
        <p className="text-lg md:text-xl text-center tracking-[0.2rem]">
          SILAKU
        </p>
        <p className="text-center text-sm md:text-base text-font-1">
          (Sistem Informasi Perkuliahan Fakultas Sains & Teknologi)
        </p>
        <h5 className="text-center my-4">Prodi {dtDosen?.prodi?.nama}</h5>
      </div>
      <>
        <Kelengkapan tahun={tahunWatch} semester={semesterWatch} />
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
