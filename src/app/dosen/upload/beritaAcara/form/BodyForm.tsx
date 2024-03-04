/** @format */
"use client";

import Cookies from "js-cookie";
import InputFile from "@/components/input/InputFile";
import SelectFromDb from "@/components/select/SelectFromDB";
import useBeritaAcaraApi from "@/stores/api/BeritaAcara";
import React, { FC, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
  myFile: any;
  setMyFile: any;
  tahunWatch: string | number;
  semesterWatch: string;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  myFile,
  setMyFile,
  tahunWatch,
  semesterWatch,
}) => {
  const dosen_id = Cookies.get("dosen_id");
  const { setBeritaAcaraByDosen, dtBeritaAcara } = useBeritaAcaraApi();
  // memanggil data prodi
  const fetchDataBeritaAcara = async () => {
    await setBeritaAcaraByDosen({
      tahun: tahunWatch,
      semester: semesterWatch,
      dosen_id,
    });
  };
  useEffect(() => {
    fetchDataBeritaAcara();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      {dtBeritaAcara?.data && (
        <SelectFromDb
          label="Jadwal"
          placeholder="Pilih Jadwal"
          name="berita_acara_id"
          dataDb={dtBeritaAcara?.data}
          body={[
            "id",
            "jadwal.hari",
            "jadwal.matkul.nama",
            "jadwal.mulai",
            "jadwal.seles",
          ]}
          control={control}
          required
          errors={errors.berita_acara_id}
          addClass="col-span-4"
        />
      )}

      <InputFile
        label="Berita Acara"
        name="file"
        register={register}
        accept="application/pdf"
        required
        errors={errors.file}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.file}
        myFile={myFile}
        setMyFile={setMyFile}
      />
    </>
  );
};

export default BodyForm;
