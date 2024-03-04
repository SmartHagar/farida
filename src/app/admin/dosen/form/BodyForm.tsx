/** @format */
"use client";
<<<<<<< HEAD
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useDosenApiEdom from "@/stores/api/Dosen";
=======
import InputDate from "@/components/input/InputDate";
import InputFile from "@/components/input/InputFile";
import InputRadio from "@/components/input/InputRadio";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useProdiApi from "@/stores/api/Prodi";
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
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
<<<<<<< HEAD
=======
  tgl_lahir: Date | string;
  setTgl_lahir: any;
  myFile: any;
  setMyFile: any;
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
<<<<<<< HEAD
}) => {
  const { setDosenAll, dtDosenAll } = useDosenApiEdom();

  const fetchOption = async () => {
    const res = await setDosenAll({
      search: "",
    });
    return res;
  };

  useEffect(() => {
    fetchOption();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  return (
    <>
      {dtDosenAll?.data && (
        <SelectFromDb
          label="Dosen"
          placeholder="Pilih Dosen"
          name="dosen_id"
          dataDb={dtDosenAll?.data}
          body={["id", "NIDN", "nama"]}
          control={control}
          required
          errors={errors.dosen_id}
=======
  tgl_lahir,
  setTgl_lahir,
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
  return (
    <>
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
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
          addClass="col-span-4"
        />
      )}
      <InputTextDefault
<<<<<<< HEAD
        label="Password"
        name="password"
        register={register}
        minLength={6}
        errors={errors.password}
        addClass="col-span-4 lg:col-span-2"
      />
=======
        label="NIDN"
        name="NIDN"
        register={register}
        minLength={2}
        errors={errors.NIDN}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputTextDefault
        label="Nama Dosen"
        name="nama"
        register={register}
        required
        minLength={3}
        errors={errors.nama}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputTextDefault
        label="Jabatan"
        name="jabatan"
        register={register}
        required
        errors={errors.jabatan}
        addClass="col-span-4 lg:col-span-1"
      />
      <InputTextDefault
        label="Tempat Lahir"
        name="tempat_lahir"
        register={register}
        required
        errors={errors.tempat_lahir}
        addClass="col-span-4 lg:col-span-1"
      />
      <InputDate
        label="Tgl. Lahir"
        name="tgl_lahir"
        control={control}
        startDate={tgl_lahir}
        setStartDate={setTgl_lahir}
        required
        errors={errors.tgl_lahir}
        addClass="col-span-4 lg:col-span-2"
      />
      {/* jenkel */}
      <div className="col-span-4 lg:col-span-2">
        <div className="w-[100%]">
          <label className="block py-2 text-sm font-medium text-gray-700 tracking-wide">
            Jenis Kelamin
          </label>
          <div className="flex gap-2">
            <InputRadio
              id="Laki-laki"
              name="jenkel"
              value="Laki-laki"
              register={register}
              required
              defaultChecked={dtEdit?.jenkel === "Laki-laki"}
            />
            <InputRadio
              id="Perempuan"
              name="jenkel"
              value="Perempuan"
              register={register}
              required
              defaultChecked={dtEdit?.jenkel === "Perempuan"}
            />
          </div>
          {errors?.jenkel?.type === "required" && (
            <p className="text-red-500 font-inter italic text-sm">
              Jenis kelamin tidak boleh kosong
            </p>
          )}
        </div>
      </div>
      <SelectDefault
        label="Agama"
        defaultOption="Pilih Agama"
        register={register}
        errors={errors}
        name="agama"
        options={[
          { value: "Kristen Protestan", label: "Kristen Protestan" },
          { value: "Kristen Katolik", label: "Kristen Katolik" },
          { value: "Islam", label: "Islam" },
          { value: "Hindu", label: "Hindu" },
          { value: "Budha", label: "Budha" },
          { value: "Konghucu", label: "Konghucu" },
        ]}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputTextDefault
        label="Alamat"
        name="alamat"
        register={register}
        required
        errors={errors.alamat}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputTextDefault
        label="No. Hp"
        name="no_hp"
        register={register}
        required
        errors={errors.no_hp}
        addClass="col-span-4 lg:col-span-2"
      />

      <InputFile
        label="Foto"
        name="foto"
        register={register}
        accept="image/*"
        errors={errors.foto}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.foto}
        myFile={myFile}
        setMyFile={setMyFile}
      />
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
    </>
  );
};

export default BodyForm;
