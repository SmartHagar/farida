/** @format */
"use client";
import { useEffect } from "react";

import ShowData from "./ShowData";
import { Toaster } from "react-hot-toast";
import SelectTahun from "@/components/select/SelectTahun";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import SelectDef from "@/components/select/SelectDef";
import InputTextSearch from "@/components/input/InputTextSearch";
import { momentId } from "@/utils/momentIndonesia";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Kelengkapan = () => {
  const halaman = "Kelengkapan";
  // router
  const router = useRouter();
  const params = useSearchParams();

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
      const month = momentId().month() + 1;
      const semester = month > 6 ? "Ganjil" : "Genap";
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
          <SelectDef
            label="Semester"
            placeholder="Pilih Semester"
            control={control}
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
          placeholder={`Cari ${halaman}`}
          name="cari"
          register={register}
          setValue={setValue}
          watch={watch}
        />
      </div>

      <ShowData setEdit={() => {}} />
    </div>
  );
};

export default Kelengkapan;
