/** @format */
"use client";
import React, { useEffect, useState } from "react";

import ShowData from "./ShowData";
import ButtonPrimary from "@/components/button/ButtonPrimary";
<<<<<<< HEAD
=======
import Form from "./form/Form";
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
import ModalDelete from "@/components/modal/ModalDelete";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import InputTextSearch from "@/components/input/InputTextSerch";
<<<<<<< HEAD
=======
import useJadwal from "@/stores/crud/Jadwal";
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectTahun from "@/components/select/SelectTahun";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Jadwal = () => {
  // router
  const router = useRouter();
  const params = useSearchParams();
<<<<<<< HEAD
=======
  // store
  const { removeData } = useJadwal();
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
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
<<<<<<< HEAD
=======

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

>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
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
      router.push("/admin/jadwal?tahun=" + tahun + "&semester=" + semester);
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
        "/admin/jadwal?tahun=" + tahunWatch + "&semester=" + semesterWatch
      );
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tahunWatch, semesterWatch]);

  return (
    <div className="flex flex-col h-full">
      <div>
        <Toaster />
<<<<<<< HEAD
=======
        <Form
          dtEdit={dtEdit}
          showModal={showModal}
          setShowModal={setShowModal}
          tahunWatch={tahunWatch}
          semesterWatch={semesterWatch}
        />
        <ModalDelete
          showDel={showDelete}
          setShowDel={setShowDelete}
          setDelete={setDelete}
        />
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
        <div className="mb-4 flex justify-between">
          <p>Silahkan Mengolah data Jadwal</p>
          <div>
            <ButtonPrimary text="Tambah Jadwal" onClick={handleTambah} />
          </div>
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

<<<<<<< HEAD
      <ShowData setEdit={setEdit} search={search} />
=======
      <ShowData setDelete={setDelete} setEdit={setEdit} search={search} />
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
    </div>
  );
};

export default Jadwal;
