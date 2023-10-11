/** @format */
"use client";
import React, { useEffect, useState } from "react";

import ShowData from "./ShowData";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import Form from "./form/Form";
import ModalDelete from "@/components/modal/ModalDelete";
import useDosen from "@/stores/crud/Dosen";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import InputTextSearch from "@/components/input/InputTextSerch";
import { useForm } from "react-hook-form";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Dosen = () => {
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
        <Form
          dtEdit={dtEdit}
          showModal={showModal}
          setShowModal={setShowModal}
          tahunWatch={tahunWatch}
          semesterWatch={semesterWatch}
        />
        <div className="mb-4 flex justify-between">
          <p>Silahkan Mengolah data RPS</p>
          <div>
            <ButtonPrimary text="Tambah RPS" onClick={handleTambah} />
          </div>
        </div>
        <InputTextSearch
          placeholder="Cari RPS"
          onChange={(e) => setSearch(e)}
        />
      </div>

      <ShowData setEdit={setEdit} search={search} />
    </div>
  );
};

export default Dosen;
