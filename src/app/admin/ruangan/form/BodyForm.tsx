/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import React, { FC } from "react";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
}) => {
  return (
    <>
      <InputTextDefault
        label="Kode Ruangan"
        name="kode"
        register={register}
        required
        minLength={2}
        errors={errors.kode}
        addClass="col-span-4 lg:col-span-1"
      />
      <InputTextDefault
        label="Nama Ruangan"
        name="nama"
        register={register}
        required
        minLength={3}
        errors={errors.nama}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputTextDefault
        label="Kapasitas"
        name="kapasitas"
        register={register}
        required
        errors={errors.kapasitas}
        type="number"
        addClass="col-span-4 lg:col-span-1"
      />
    </>
  );
};

export default BodyForm;
