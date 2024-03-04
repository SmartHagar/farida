/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import InputTime from "@/components/input/InputTime";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import SelectTahun from "@/components/select/SelectTahun";
import useDosenApi from "@/stores/api/Dosen";
import useMatkulApi from "@/stores/api/Matkul";
import useProdiApi from "@/stores/api/Prodi";
import useRuanganApi from "@/stores/api/Ruangan";
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
  timeStart: Date | string;
  setTimeStart: any;
  timeFinish: Date | string;
  setTimeFinish: any;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  timeStart,
  setTimeStart,
  timeFinish,
  setTimeFinish,
}) => {
  const { setProdiAll, dtProdi } = useProdiApi();
  const { setMatkulAll, dtMatkul } = useMatkulApi();
  const { setRuanganAll, dtRuangan } = useRuanganApi();
  const { setDosenAll, dtDosen } = useDosenApi();
  // memanggil data prodi
  const fetchDataSelect = async ({ search }: any) => {
    await setProdiAll({
      search,
    });
    await setMatkulAll({
      search,
    });
    await setRuanganAll({
      search,
    });
    await setDosenAll({
      search,
    });
  };
  useEffect(() => {
    fetchDataSelect({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      <InputTextDefault
        register={register}
        errors={errors}
        name="semester"
        type="hidden"
      />
      <InputTextDefault
        register={register}
        errors={errors}
        name="tahun"
        type="hidden"
      />
      {dtProdi?.data && (
        <SelectFromDb
          label="Prodi"
          placeholder="Pilih Prodi"
          name="prodi_id"
          dataDb={dtProdi?.data}
          body={["id", "nama"]}
          control={control}
          required
          errors={errors.prodi_id}
          addClass="col-span-4"
        />
      )}
      {dtMatkul?.data && (
        <SelectFromDb
          label="Matkul"
          placeholder="Pilih Matkul"
          name="matkul_id"
          dataDb={dtMatkul?.data}
          body={["id", "kode", "nama"]}
          control={control}
          required
          errors={errors.matkul_id}
          addClass="col-span-4"
        />
      )}
      {dtDosen?.data && (
        <SelectFromDb
          label="Dosen"
          placeholder="Pilih Dosen"
          name="dosen_id"
          dataDb={dtDosen?.data}
          body={["id", "nama"]}
          control={control}
          required
          errors={errors.dosen_id}
          addClass="col-span-4"
        />
      )}
      {dtRuangan?.data && (
        <SelectFromDb
          label="Ruangan"
          placeholder="Pilih Ruangan"
          name="ruangan_id"
          dataDb={dtRuangan?.data}
          body={["id", "nama"]}
          control={control}
          required
          errors={errors.ruangan_id}
          addClass="col-span-4"
        />
      )}
      <SelectDefault
        label="Hari"
        defaultOption="Pilih Hari"
        register={register}
        errors={errors}
        name="hari"
        options={[
          { value: "Senin", label: "Senin" },
          { value: "Selasa", label: "Selasa" },
          { value: "Rabu", label: "Rabu" },
          { value: "Kamis", label: "Kamis" },
          { value: "Jumat", label: "Jumat" },
          { value: "Sabtu", label: "Sabtu" },
        ]}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputTime
        label="Mulai"
        name="mulai"
        control={control}
        startTime={timeStart}
        setStartTime={setTimeStart}
        required
        errors={errors.mulai}
        addClass="col-span-4 lg:col-span-1"
      />
      <InputTime
        label="Seles"
        name="seles"
        control={control}
        startTime={timeFinish}
        setStartTime={setTimeFinish}
        required
        errors={errors.seles}
        addClass="col-span-4 lg:col-span-1"
      />
    </>
  );
};

export default BodyForm;
