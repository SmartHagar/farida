/** @format */
"use client";
import { FC } from "react";

import "react-datepicker/dist/react-datepicker.css";
import SelectDef from "@/components/select/SelectDef";

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
      <SelectDef
        label="Status"
        placeholder="Pilih Status"
        control={control}
        errors={errors}
        name="status"
        options={[
          { value: "diproses", label: "Diproses" },
          { value: "ditolak", label: "Ditolak" },
          { value: "diterima", label: "Diterima" },
        ]}
        addClass="col-span-4 relative"
        // menuPosition="absolute"
      />
    </>
  );
};

export default BodyForm;
