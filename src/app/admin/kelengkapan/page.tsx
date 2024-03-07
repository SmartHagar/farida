/** @format */
"use client";
import React, { useEffect, useState } from "react";

import ShowData from "./ShowData";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import InputTextSearch from "@/components/input/InputTextSerch";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectTahun from "@/components/select/SelectTahun";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Kelengkapan = () => {
  // router
  const router = useRouter();
  const params = useSearchParams();
  // state
  const [search, setSearch] = useState("");

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
      const semester = "Genap";
      setValue("tahun", tahun);
      setValue("semester", semester);
      // add parameter to url
      router.push(
        "/admin/kelengkapan?tahun=" + tahun + "&semester=" + semester
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
        "/admin/kelengkapan?tahun=" + tahunWatch + "&semester=" + semesterWatch
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
          <p>Kelengkapan Berkas</p>
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
          placeholder="Cari Hari"
          onChange={(e) => setSearch(e)}
        />
      </div>

      <ShowData
        setEdit={() => {}}
        search={search}
        tahunWatch={tahunWatch}
        semesterWatch={semesterWatch}
      />
    </div>
  );
};

export default Kelengkapan;
