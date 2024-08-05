/** @format */

import SemesterBar from "@/components/bar/Semester";
import YearBar from "@/components/bar/Year";
import SelectDef from "@/components/select/SelectDef";
import SelectTahun from "@/components/select/SelectTahun";
import { FC } from "react";
import { useForm } from "react-hook-form";

type Props = {
  halaman: string;
};

const Searching: FC<Props> = ({ halaman }) => {
  // hook form
  const {
    register,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm();

  const semesterWatch = watch("semester");
  const yearWatch = watch("year");

  return (
    <div className="grid grid-cols-8 gap-2 w-full">
      <YearBar setValue={setValue} yearWatch={yearWatch} time={1000} />
      {/* change bar */}
      <SemesterBar
        setValue={setValue}
        semesterWatch={semesterWatch}
        time={500}
      />
      <SelectDef
        placeholder="Pilih Semester"
        control={control}
        name="semester"
        options={[
          { value: "Ganjil", label: "Ganjil" },
          { value: "Genap", label: "Genap" },
        ]}
        errors={errors.semester}
        addClass="col-span-8 md:col-span-2 text-black"
        menuPosition="absolute"
      />
      <SelectTahun
        name="year"
        placeholder="Pilih Tahun"
        start={new Date().getFullYear() - 2}
        end={new Date().getFullYear()}
        fromMax
        control={control}
        addClass="col-span-8 md:col-span-2 text-black"
        menuPosition="absolute"
      />
    </div>
  );
};

export default Searching;
