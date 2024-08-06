/** @format */
"use client";
import SelectFromDb from "@/components/select/SelectFromDB";
import useDosenApiEdom from "@/stores/api/Dosen";
import { FC, useEffect } from "react";
import Cookies from "js-cookie";

import "react-datepicker/dist/react-datepicker.css";
import InputCanvas from "@/components/input/InputCanvas";
import { SelectDefault } from "@/components/select/SelectDefault";

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
  const { setDosenAll, dtDosenAll } = useDosenApiEdom();
  const prodi_id = Cookies.get("prodi_id");
  const fetchOption = async () => {
    const res = await setDosenAll({
      search: "",
      prodi_id,
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
          addClass="col-span-4"
        />
      )}
      <SelectDefault
        label="Jabatan"
        defaultOption="Pilih Jabatan"
        register={register}
        name="jabatan"
        options={[
          { value: "WAKIL DEKAN I", label: "WAKIL DEKAN I" },
          { value: "KAPRODI SI", label: "KAPRODI SI" },
          { value: "KAPRODI BI", label: "KAPRODI BI" },
          { value: "KAPRODI TG", label: "KAPRODI TG" },
        ]}
        required
        errors={errors.jabatan}
        addClass="col-span-4"
      />
      <InputCanvas
        control={control}
        name="paraf"
        label={`Paraf`}
        required
        errors={errors.paraf}
        setValue={setValue}
        clear
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
