/** @format */
"use client";

import Cookies from "js-cookie";
import InputDate from "@/components/input/InputDate";
import InputFile from "@/components/input/InputFile";
import InputRadio from "@/components/input/InputRadio";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
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
  tahunWatch,
  semesterWatch,
}) => {
  return (
    <>
      <SelectDefault
        label="Status"
        defaultOption="Pilih Status"
        register={register}
        errors={errors}
        name="status"
        options={[
          { value: "diproses", label: "Diproses" },
          { value: "ditolak", label: "Ditolak" },
          { value: "diterima", label: "Diterima" },
        ]}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
