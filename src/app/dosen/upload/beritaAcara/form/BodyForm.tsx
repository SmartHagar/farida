/** @format */
"use client";
import Cookies from "js-cookie";
import InputFile from "@/components/input/InputFile";
import SelectFromDb from "@/components/select/SelectFromDB";
import { FC, useState } from "react";

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
  // state
  const [dtShow, setDtShow] = useState<any>();
  const fetchDataJadwal = async () => {
    const res = await setJadwalByDosenFull({
      dosen_id,
      tahun: tahunWatch,
      semester: semesterWatch,
    });
  };

  return (
    <>
      {dtShow?.data && (
        <SelectFromDb
          label="Jadwal"
          placeholder="Pilih Jadwal"
          name="berita_acara_id"
          dataDb={dtShow?.data}
          body={[
            "id",
            "jadwal.matkul.kode",
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
        watch={watch}
      />
    </>
  );
};

export default BodyForm;
