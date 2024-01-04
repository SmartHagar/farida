/** @format */
"use client";
import React, { useEffect, useState } from "react";

import ShowData from "./ShowData";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import toastShow from "@/utils/toast-show";
import InputTextSearch from "@/components/input/InputTextSerch";
import { useForm } from "react-hook-form";
import useAbsen from "@/stores/crud/upload/Absen";
import { useRouter, useSearchParams } from "next/navigation";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectTahun from "@/components/select/SelectTahun";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Absen = () => {
  // router
  const router = useRouter();
  const params = useSearchParams();
  // store
  const { removeData } = useAbsen();
  // state
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [dtEdit, setDtEdit] = useState<any>();
  const [search, setSearch] = useState("");

  const handleTambah = () => {
    setShowModal(true);
    setDtEdit(null);
  };

  const setEdit = (row: any) => {
    setShowModal(true);
    setDtEdit(row);
  };

  const setDelete = async ({ id, isDelete }: Delete) => {
    setIdDel(id);
    if (isDelete) {
      const { data } = await removeData(idDel);
      toastShow({
        event: data,
      });
      setShowDelete(false);
    } else setShowDelete(true);
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
      const semester = "Genap";
      setValue("tahun", tahun);
      setValue("semester", semester);
      // add parameter to url
      router.push(
        "/admin/laporan/absen?tahun=" + tahun + "&semester=" + semester
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
        "/admin/laporan/absen?tahun=" +
          tahunWatch +
          "&semester=" +
          semesterWatch
      );
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tahunWatch, semesterWatch]);

  return (
    <div className="flex flex-col h-full">
      <div>
        <div className="mb-4 flex justify-between">
          <p>Laporan Absensi</p>
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
          placeholder="Cari Absen"
          onChange={(e) => setSearch(e)}
        />
      </div>

      <ShowData
        setDelete={setDelete}
        setEdit={setEdit}
        search={search}
        tahunWatch={tahunWatch}
        semesterWatch={semesterWatch}
      />
    </div>
  );
};

export default Absen;
