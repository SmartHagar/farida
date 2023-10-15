/** @format */
"use client";
import React, { useEffect, useState } from "react";

import ShowData from "./ShowData";
import InputTextSearch from "@/components/input/InputTextSerch";
import useDetBeritaAcara from "@/stores/crud/DetBeritaAcara";
import { useSearchParams } from "next/navigation";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const DetBeritaAcara = () => {
  // store
  const { removeData, setShowDetBeritaAcara, showDetBeritaAcara } =
    useDetBeritaAcara();
  // get search params
  const params = useSearchParams();
  // get berita_acara_id
  const berita_acara_id = params.get("berita_acara_id") || "";
  // state
  const [search, setSearch] = useState("");

  // memanggil showDetBeritaAcara
  useEffect(() => {
    setShowDetBeritaAcara(berita_acara_id);

    return () => {};
  }, [berita_acara_id, setShowDetBeritaAcara]);

  const jadwal = showDetBeritaAcara?.jadwal;

  return (
    <div className="flex flex-col h-full">
      <div>
        <div className="mb-4 flex justify-between">
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
              <span className="w-32 inline-block uppercase">SKS</span>
              <span>: {jadwal?.matkul?.sks}</span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">Ruangan</span>
              <span>: {jadwal?.ruangan?.kode}</span>
            </div>
          </div>
        </div>
        <InputTextSearch
          placeholder="Cari Data"
          onChange={(e) => setSearch(e)}
        />
      </div>

      <ShowData setEdit={setShowDetBeritaAcara} search={search} />
    </div>
  );
};

export default DetBeritaAcara;
