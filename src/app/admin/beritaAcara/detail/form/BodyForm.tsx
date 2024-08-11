/** @format */
"use client";
import InputCanvas from "@/components/input/InputCanvas";
import { FC } from "react";

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
      <InputCanvas
        watch={watch}
        control={control}
        name="paraf_pemeriksa"
        label={`Paraf Pemeriksa`}
        required={dtEdit ? false : true}
        errors={errors.paraf_pemeriksa}
        setValue={setValue}
        clear
        addClass="col-span-8 lg:col-span-3"
      />
    </>
  );
};

export default BodyForm;
