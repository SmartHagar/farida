/** @format */
"use client";
import React, { useEffect, useState } from "react";

import ShowData from "./ShowData";
import { Toaster } from "react-hot-toast";
import InputTextSearch from "@/components/input/InputTextSerch";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectTahun from "@/components/select/SelectTahun";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const BeritaAcara = () => {
  // router
  const router = useRouter();
  const params = useSearchParams();
  // state
  const [dtEdit, setDtEdit] = useState<any>();
  const [search, setSearch] = useState("");

  const setEdit = (row: any) => {
    setDtEdit(row);
  };

  // hook form
  const {
    register,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const tahunWatch = watch("tahun");
  const semesterWatch = watch("semester");
  // set tahun dan semester
  const tahunParams = params.get("tahun");
  const semesterParams = params.get("semester");
  useEffect(() => {
    if (!tahunParams && !semesterParams) {
      const tahun = new Date().getFullYear();
      const semester = "Ganjil";
      setValue("tahun", tahun);
      setValue("semester", semester);
      // add parameter to url
      router.push(
        "/admin/beritaAcara?tahun=" + tahun + "&semester=" + semester
      );
    } else {
      setValue("tahun", parseInt(tahunParams || ""));
      setValue("semester", semesterParams);
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (tahunWatch && semesterWatch) {
      router.push(
        "/admin/beritaAcara?tahun=" + tahunWatch + "&semester=" + semesterWatch
      );
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tahunWatch, semesterWatch]);

  return (
    <div className="flex flex-col h-full">
      <div>
        <Toaster />
        <div className="mb-4 flex justify-between">
          <p>Data berita acara</p>
        </div>
        {/* pilih tahun dan semester */}
        <div className="mb-4 flex justify-between gap-4">
          <SelectDefault
            label="Semester"
            defaultOption="Pilih Semester"
            register={register}
            errors={errors}
            name="semester"
            options={[
              { value: "Ganjil", label: "Ganjil" },
              { value: "Genap", label: "Genap" },
            ]}
            addClass="w-full"
          />
          <SelectTahun
            label="Tahun"
            name="tahun"
            placeholder="Pilih Tahun"
            start={new Date().getFullYear() - 2}
            end={new Date().getFullYear()}
            fromMax
            control={control}
            required
            errors={errors}
            addClass="w-full"
          />
        </div>
        <InputTextSearch
          placeholder="Cari Berita Acara"
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

export default BeritaAcara;
