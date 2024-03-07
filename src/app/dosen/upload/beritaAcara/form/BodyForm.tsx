/** @format */
"use client";

import Cookies from "js-cookie";
import InputFile from "@/components/input/InputFile";
import SelectFromDb from "@/components/select/SelectFromDB";
import useBeritaAcaraApi from "@/stores/api/BeritaAcara";
import React, { FC, useEffect, useMemo, useState } from "react";

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
  const { setBeritaAcaraByJadwal, dtBeritaAcara } = useBeritaAcaraApi();
  // state
  const [dtShow, setDtShow] = useState<any>();
  const fetchDataJadwal = async () => {
    const res = await setJadwalByDosenFull({
      dosen_id,
      tahun: tahunWatch,
      semester: semesterWatch,
    });
  };
  // memo fetch data jadwal
  useMemo(
    () => tahunWatch && semesterWatch && fetchDataJadwal(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dosen_id, tahunWatch, semesterWatch, showModal]
  );
  // memanggil data rps
  const fetchBeritaAcara = async () => {
    const jadwal_id: any[] = [];
    dtJadwal?.data?.map((item: any) => {
      jadwal_id.push(item.id);
    });
    // convert jadwal_id to string
    const jadwal_id_string = jadwal_id.join(",");
    if (jadwal_id.length > 0) {
      await setBeritaAcaraByJadwal({
        jadwal_id: jadwal_id_string,
      });
    }
  };
  // ketika data jadwal berubah
  useEffect(() => {
    fetchBeritaAcara();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dtJadwal)]);
  //  mengisi dtShow
  const getDataShow = (dtJadwal: any, dtBeritaAcara: any) => {
    const dt = dtBeritaAcara
      ?.map((item: any) => {
        const matchedData = dtJadwal?.find(
          (data: any) => data.id === parseInt(item.jadwal_id)
        );
        return matchedData ? { ...item, jadwal: matchedData } : null;
      })
      .filter((item: any) => item !== null);

    const getData = {
      data: dt,
    };

    setDtShow(getData);
  };

  // ketika dtRPS beruba
  useEffect(() => {
    getDataShow(dtJadwal?.data, dtBeritaAcara?.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dtBeritaAcara)]);
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
