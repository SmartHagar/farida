/** @format */
"use client";
import { useEffect, useState } from "react";

import ShowData from "./ShowData";
import { Toaster } from "react-hot-toast";
import useDetBeritaAcara from "@/stores/crud/DetBeritaAcara";
import { useSearchParams } from "next/navigation";
import { BASE_URL } from "@/services/baseURL";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import useJadwalApiEdom from "@/stores/api/Jadwal";
import Form from "./form/Form";
import InputTextSearch from "@/components/input/InputTextSearch";
import { useForm } from "react-hook-form";
import BtnDefault from "@/components/button/BtnDefault";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const DetBeritaAcara = () => {
  const halaman = "Detail Berita Acara";
  // store
  const { removeData, showDetBeritaAcara } = useDetBeritaAcara();
  const { setShowJadwal, dtJadwal } = useJadwalApiEdom();
  // get search params
  const params = useSearchParams();
  // get berita_acara_id
  const berita_acara_id = params.get("berita_acara_id") || "";
  const jadwal_id = params.get("jadwal_id") || "";
  // state
  const [showModal, setShowModal] = useState(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [dtEdit, setDtEdit] = useState<any>();
  const [search, setSearch] = useState("");
  const [loadPdf, setLoadPdf] = useState(false);

  const setEdit = (row: any) => {
    setShowModal(true);
    setDtEdit(row);
  };

  // memanggil showDetBeritaAcara
  useEffect(() => {
    setShowJadwal(jadwal_id);

    return () => {};
  }, [jadwal_id, setShowJadwal]);

  const jadwal = dtJadwal;

  console.log({ jadwal });

  const cetak = () => {
    setLoadPdf(true);
    // download pdf from {baseUrl}/api/berita_acara/cetak
    window.open(`${BASE_URL}/pdf/berita-acara/${berita_acara_id}`);
    setLoadPdf(false);
  };

  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
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
        <div className="mb-4 flex flex-col-reverse justify-between md:flex-row">
          <div className="flex flex-col w-full">
            <div>
              <span className="w-32 inline-block uppercase">Dosen</span>
              <span>: {jadwal?.dosen?.nama}</span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">KODE MK</span>
              <span>: {jadwal?.matkul?.kode}</span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">Mata Kuliah</span>
              <span>: {jadwal?.matkul?.nama}</span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">SKS/SMT/KLS</span>
              <span>
                : {jadwal?.matkul?.sks} / {jadwal?.semester} T.A 2023/2024
              </span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">Ruangan</span>
              <span>: {jadwal?.ruangan?.kode}</span>
            </div>
          </div>
          <div className="flex justify-between self-start mr-4">
            {loadPdf ? (
              <LoadingSpiner />
            ) : (
              <BtnDefault
                addClass="self-end bg-secondary text-white"
                onClick={cetak}
              >{`Cetak ${halaman}`}</BtnDefault>
            )}
          </div>
        </div>
        <InputTextSearch
          placeholder={`Cari ${halaman}`}
          name="cari"
          register={register}
          setValue={setValue}
          watch={watch}
        />
      </div>

      <ShowData setEdit={setEdit} search={search} />
    </div>
  );
};

export default DetBeritaAcara;
