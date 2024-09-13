/** @format */
"use client";
import SelectFromDb from "@/components/select/SelectFromDB";
import useDosenApiEdom from "@/stores/api/Dosen";
import { FC, useEffect } from "react";
import Cookies from "js-cookie";

import "react-datepicker/dist/react-datepicker.css";
import InputCanvas from "@/components/input/InputCanvas";
import SelectDef from "@/components/select/SelectDef";

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
          body={["id", "NIDN", "nm_dosen"]}
          control={control}
          required
          errors={errors.dosen_id}
          addClass="col-span-8"
          menuPosition={"absolute"}
        />
      )}
      <SelectDef
        label="Jabatan"
        placeholder="Pilih Jabatan"
        control={control}
        name="jabatan"
        options={[
          { value: "WAKIL DEKAN I", label: "WAKIL DEKAN I" },
          { value: "KAPRODI MN", label: "KAPRODI MN" },
          { value: "KAPRODI EKBANG", label: "KAPRODI EKBANG" },
          { value: "KAPRODI AK", label: "KAPRODI AK" },
        ]}
        required
        errors={errors.jabatan}
        addClass="col-span-8 lg:col-span-4"
        menuPosition="absolute"
      />
      <InputCanvas
        control={control}
        name="paraf"
        label={`Paraf`}
        required
        errors={errors.paraf}
        setValue={setValue}
        watch={watch}
        clear
        addClass="col-span-4 lg:col-span-3"
      />
    </>
  );
};

export default BodyForm;
