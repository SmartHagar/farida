/** @format */
"use client";
import { useEffect, useState } from "react";

import ShowData from "./ShowData";
import Form from "./form/Form";
import ModalDelete from "@/components/modal/ModalDelete";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import { useForm } from "react-hook-form";
import useBeritaAcara from "@/stores/crud/upload/BeritaAcara";
import BtnDefault from "@/components/button/BtnDefault";
import Searching from "./Searching";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const BeritaAcara = () => {
  // store
  const { removeData } = useBeritaAcara();
  // state
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [dtEdit, setDtEdit] = useState<any>();
  const [search, setSearch] = useState("");
  const [tahunWatch, setTahunWatch] = useState<number | string>("");
  const [semesterWatch, setSemesterWatch] = useState<string>("");

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
        <ModalDelete
          showDel={showDelete}
          setShowDel={setShowDelete}
          setDelete={setDelete}
        />
        <div className="mb-4 flex justify-between">
          <p>Silahkan mengolah data berita acara</p>
          <div>
            <BtnDefault onClick={handleTambah}>Tambah berita acara</BtnDefault>
          </div>
        </div>
        <div>
          <Searching halaman="Berita Acara" />
        </div>
      </div>

      <ShowData setDelete={setDelete} setEdit={setEdit} />
    </div>
  );
};

export default BeritaAcara;
