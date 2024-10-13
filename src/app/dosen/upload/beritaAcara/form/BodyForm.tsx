/** @format */
"use client";
import Cookies from "js-cookie";
import InputFile from "@/components/input/InputFile";
import { FC, useCallback, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import useBeritaAcaraApi from "@/stores/api/BeritaAcara";
import SelectFromDb from "@/components/select/SelectFromDB";

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
  const { setBeritaAcara, dtBeritaAcara } = useBeritaAcaraApi();
  // state
  const fetchDataJadwal = useCallback(async () => {
    const res = await setBeritaAcara({
      dosen_id,
      tahun: tahunWatch,
      semester: semesterWatch,
      limit: 100,
    });
  }, [dosen_id, semesterWatch, setBeritaAcara, tahunWatch]);

  // get data jadwal
  useEffect(() => {
    if (showModal) {
      fetchDataJadwal();
    }
  }, [showModal, fetchDataJadwal]);

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
