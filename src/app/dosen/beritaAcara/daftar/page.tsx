/** @format */
"use client";
import { useState } from "react";

import ShowData from "./ShowData";
import { Toaster } from "react-hot-toast";
import Searching from "./Searching";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Dosen = () => {
  // state
  const [showModal, setShowModal] = useState(false);
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

  return (
    <div className="flex flex-col h-full">
      <div>
        <Toaster />
        <div className="mb-4 flex justify-between">
          <p>Silahkan Mengolah data berita acara</p>
        </div>
        <div>
          <Searching halaman="Berita Acara" />
        </div>
      </div>

      <ShowData setEdit={setEdit} />
    </div>
  );
};

export default Dosen;
