/** @format */
"use client";
import InputDateIncludeIntervals from "@/components/input/InputDateIncludeIntervals";
import InputFile from "@/components/input/InputFile";
import InputTextDefault from "@/components/input/InputTextDefault";
import useProdiApi from "@/stores/api/Prodi";
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
  tgl: Date | string;
  setTgl: any;
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
  tgl,
  setTgl,
  myFile,
  setMyFile,
}) => {
  const { setProdiAll, dtProdi } = useProdiApi();
  // memanggil data prodi
  const fetchDataProdi = async ({ search }: any) => {
    await setProdiAll({
      search,
    });
  };
  useEffect(() => {
    fetchDataProdi({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  // menghitung kebelakang
  function subDays(date: Date, days: number) {
    return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  }
  // menghitung kedepan
  function addDays(date: Date, days: number) {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  }

  return (
    <>
      <InputDateIncludeIntervals
        label="Tgl. Berita Acara"
        name="tgl"
        control={control}
        startDate={tgl}
        setStartDate={setTgl}
        required
        errors={errors.tgl}
        addClass="col-span-4 lg:col-span-2"
        includeDateIntervals={[
          { start: subDays(new Date(), 7), end: new Date() },
        ]}
      />

      <InputTextDefault
        label="Jumlah MHS"
        name="jmlh_mhs"
        register={register}
        required
        errors={errors.jmlh_mhs}
        type="number"
        addClass="col-span-4 lg:col-span-2"
      />

      <InputTextDefault
        label="Materi"
        name="materi"
        register={register}
        required
        errors={errors.materi}
        addClass="col-span-4"
      />

      <InputFile
        label="Foto"
        name="foto"
        register={register}
        accept="image/*"
        required
        errors={errors.foto}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.foto}
        myFile={myFile}
        setMyFile={setMyFile}
      />
    </>
  );
};

export default BodyForm;
