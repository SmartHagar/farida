/** @format */
"use client";
import Cookies from "js-cookie";
import InputFile from "@/components/input/InputFile";
import SelectFromDb from "@/components/select/SelectFromDB";
import { FC, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import useJadwalApiEdom from "@/stores/api/Jadwal";
import { useSearchParams } from "next/navigation";

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
}) => {
  const dosen_id = Cookies.get("dosen_id");
  // search params
  const searchParams = useSearchParams();
  const semester = searchParams.get("semester") || "";
  const year = searchParams.get("year") || "";
  const { setJadwalByDosenFull, dtJadwal } = useJadwalApiEdom();
  // memanggil data prodi
  const fetchDataJadwal = async () => {
    await setJadwalByDosenFull({
      tahun: year,
      semester: semester,
      dosen_id,
    });
  };
  console.log(dtJadwal?.data);
  useEffect(() => {
    if (year && semester) {
      fetchDataJadwal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, year, semester]);
  return (
    <>
      {dtJadwal?.data && (
        <SelectFromDb
          label="Jadwal"
          placeholder="Pilih Jadwal"
          name="jadwal_id"
          dataDb={dtJadwal?.data}
          body={["id", "matkul.kode", "hari", "matkul.nama", "mulai", "seles"]}
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
