/** @format */
"use client";
import { useEffect, useState } from "react";

import ShowData from "./ShowData";
import Form from "./form/Form";
import ModalDelete from "@/components/modal/ModalDelete";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import useDetBeritaAcara from "@/stores/crud/DetBeritaAcara";
import { useSearchParams } from "next/navigation";
import { BASE_URL } from "@/services/baseURL";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import BtnDefault from "@/components/button/BtnDefault";
import BtnSecondary from "@/components/button/BtnSecondary";
import InputTextSearch from "@/components/input/InputTextSearch";
import { useForm } from "react-hook-form";
import useJadwalApiSiakad from "@/stores/api/Jadwal";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Dosen = () => {
  const halaman = "Detail Berita Acara";
  // store
  const { removeData, showDetBeritaAcara } = useDetBeritaAcara();
  const { setShowJadwal, dtJadwal } = useJadwalApiSiakad();
  // get search params
  const params = useSearchParams();
  // get berita_acara_id
  const berita_acara_id = params.get("berita_acara_id") || "";
  const jadwal_id = params.get("jadwal_id") || "";
  // state
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [dtEdit, setDtEdit] = useState<any>();
  const [search, setSearch] = useState("");
  const [loadPdf, setLoadPdf] = useState(false);
  const [thn_ajaran, setTahunAjaran] = useState("");

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

  // memanggil showDetBeritaAcara
  useEffect(() => {
    setShowJadwal(jadwal_id);

    return () => {};
  }, [jadwal_id, setShowJadwal]);

  const cetak = () => {
    setLoadPdf(true);
    // download pdf from {baseUrl}/api/berita_acara/cetak
    window.open(`${BASE_URL}/pdf/berita-acara/${berita_acara_id}`);
    setLoadPdf(false);
  };

  // hook form
  const {
    register,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const thnAkademik = (semester: string) => {
    const year = new Date().getFullYear();
    if (semester === "Ganjil") {
      setTahunAjaran(`${year}-${year + 1}`);
    } else if (semester === "Genap") {
      setTahunAjaran(`${year - 1}-${year}`);
    }
  };

  useEffect(() => {
    thnAkademik(dtJadwal?.semester);
  }, [dtJadwal?.semester]);

  return (
    <div className="flex flex-col h-full">
      <div>
        <Toaster />
        <Form
          dtEdit={dtEdit}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <ModalDelete
          showDel={showDelete}
          setShowDel={setShowDelete}
          setDelete={setDelete}
        />
        <div className="mb-4 flex flex-col-reverse justify-between md:flex-row">
          <div className="flex flex-col w-full">
            <div>
              <span className="w-32 inline-block uppercase">Dosen</span>
              <span>: {dtJadwal?.dosen?.nm_dosen}</span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">KODE MK</span>
              <span>: {dtJadwal?.matkul?.kd_matkul}</span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">Mata Kuliah</span>
              <span>: {dtJadwal?.matkul?.nm_matkul}</span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">SKS/SMT/KLS</span>
              <span>
                : {dtJadwal?.matkul?.sks} / {dtJadwal?.semester} T.A{" "}
                {thn_ajaran}
              </span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">Ruangan</span>
              <span>: {dtJadwal?.ruangan?.singkat}</span>
            </div>
          </div>
          <div className="flex lg:justify-normal flex-col gap-4">
            <div className="flex gap-2 self-start md:w-64">
              {loadPdf ? (
                <LoadingSpiner />
              ) : (
                <BtnSecondary onClick={cetak}>Cetak</BtnSecondary>
              )}
              <BtnDefault onClick={handleTambah}>Tambah</BtnDefault>
            </div>
            {/* <div className="flex gap-2 self-start md:w-64">
              <ParafDosenMhs />
            </div> */}
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

      <ShowData setDelete={setDelete} setEdit={setEdit} search={search} />
    </div>
  );
};

export default Dosen;
