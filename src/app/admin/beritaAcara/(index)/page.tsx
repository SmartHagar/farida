/** @format */
"use client";
import React, { useEffect, useState } from "react";

import ShowData from "./ShowData";
import { Toaster } from "react-hot-toast";
import InputTextSearch from "@/components/input/InputTextSerch";
import { useForm } from "react-hook-form";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Dosen = () => {
  // state
  const [dtEdit, setDtEdit] = useState<any>();
  const [search, setSearch] = useState("");

  const setEdit = (row: any) => {
    setDtEdit(row);
  };

  // hook form
  const {
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const tahunWatch = watch("tahun");
  const semesterWatch = watch("semester");

  useEffect(() => {
    const tahun = new Date().getFullYear();
    const semester = "Ganjil";
    setValue("tahun", tahun);
    setValue("semester", semester);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div>
        <Toaster />
        <div className="mb-4 flex justify-between">
          <p>Data berita acara</p>
        </div>
        <InputTextSearch
          placeholder="Cari Jadwal"
          onChange={(e) => setSearch(e)}
        />
      </div>

      <ShowData
        tahunWatch={tahunWatch}
        semesterWatch={semesterWatch}
        setEdit={setEdit}
        search={search}
      />
    </div>
  );
};

export default Dosen;
