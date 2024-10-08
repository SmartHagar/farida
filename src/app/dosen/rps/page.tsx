/** @format */
"use client";
import { useState } from "react";

import Form from "./form/Form";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import Searching from "./Searching";
import ShowData from "./ShowData";
import BtnDefault from "@/components/button/BtnDefault";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Rps = () => {
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

  return (
    <div className="flex flex-col h-full">
      <div>
        <Toaster />
        <Form
          dtEdit={dtEdit}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <div className="flex justify-between ml-8 lg:ml-0">
          <p>Silahkan Mengolah data RPS</p>
          <div>
            <BtnDefault onClick={handleTambah}>Tambah Data</BtnDefault>
          </div>
        </div>
        <div>
          <Searching halaman="RPS" />
        </div>
      </div>
      <ShowData setEdit={setEdit} />
    </div>
  );
};

export default Rps;
