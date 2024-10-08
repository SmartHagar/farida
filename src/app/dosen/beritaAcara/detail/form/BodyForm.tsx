/** @format */
"use client";
import InputCanvas from "@/components/input/InputCanvas";
import InputDateIncludeIntervals from "@/components/input/InputDateIncludeIntervals";
import InputFile from "@/components/input/InputFile";
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectDef from "@/components/select/SelectDef";
import createDateIntervals from "@/utils/dateIntervals";
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
      <InputDateIncludeIntervals
        label="Tgl. Berita Acara"
        name="tgl"
        control={control}
        required
        errors={errors.tgl}
        addClass="col-span-4 lg:col-span-2"
        includeDateIntervals={createDateIntervals(130, 10)}
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
        label="Materi (Kuliah Perpertemuan)"
        name="materi"
        register={register}
        required
        errors={errors.materi}
        addClass="col-span-4"
      />

      <SelectDef
        label="Sistem Belajar"
        placeholder="Pilih Sistem Belajar"
        control={control}
        errors={errors}
        name="sistem"
        options={[
          { value: "Daring", label: "Daring (Online)" },
          { value: "Luring", label: "Luring (Tatap Muka)" },
        ]}
        addClass="col-span-4"
      />

      <InputCanvas
        watch={watch}
        control={control}
        name="paraf_mhs"
        label={`Paraf Mhs`}
        required={dtEdit ? false : true}
        errors={errors.paraf_mhs}
        setValue={setValue}
        clear
        addClass="col-span-4 lg:col-span-2"
      />

      <InputCanvas
        control={control}
        name="paraf_dosen"
        label={`Paraf Dosen`}
        required={dtEdit ? false : true}
        errors={errors.paraf_dosen}
        setValue={setValue}
        clear
        watch={watch}
        addClass="col-span-4 lg:col-span-2"
      />

      <InputFile
        label="Foto (Aktivitas BBM di Kelas)"
        name="foto"
        register={register}
        accept="image/*"
        required
        errors={errors.foto}
        addClass="col-span-4"
        setValue={setValue}
        initialValue={dtEdit?.foto || ""}
        watch={watch}
      />
    </>
  );
};

export default BodyForm;
