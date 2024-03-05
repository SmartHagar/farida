/** @format */
"use client";

import Cookies from "js-cookie";
import InputFile from "@/components/input/InputFile";
import SelectFromDb from "@/components/select/SelectFromDB";
import useJadwalApi from "@/stores/api/Jadwal";
import React, { FC, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import useJadwalApiEdom from "@/stores/api/Jadwal";

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
  const { setJadwalByDosenFull, dtJadwal } = useJadwalApiEdom();
  // memanggil data prodi
  const fetchDataJadwal = async () => {
    await setJadwalByDosenFull({
      tahun: tahunWatch,
      semester: semesterWatch,
      dosen_id,
    });
  };
  console.log(dtJadwal?.data);
  useEffect(() => {
    if (tahunWatch && semesterWatch) {
      fetchDataJadwal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, tahunWatch, semesterWatch]);
  return (
    <>
      {dtJadwal?.data && (
        <SelectFromDb
          label="Jadwal"
          placeholder="Pilih Jadwal"
          name="jadwal_id"
          dataDb={dtJadwal?.data}
          body={["id", "hari", "matkul.nama", "mulai", "seles"]}
          control={control}
          required
          errors={errors.jadwal_id}
          addClass="col-span-4"
        />
      )}

      <InputFile
        label="Absen"
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
