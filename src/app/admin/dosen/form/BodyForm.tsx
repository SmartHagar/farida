/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useDosenApiEdom from "@/stores/api/Dosen";
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

  const dosenWatch = watch("dosen_id");
  useEffect(() => {
    if (dosenWatch) {
      const dtDosen = dtDosenAll?.data?.find(
        (item: any) => item.id === dosenWatch
      );
      setValue("nama", dtDosen?.nama);
    } else {
      setValue("nama", "");
    }

    return () => {};
  }, [dosenWatch]);

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
      <InputTextDefault
        label="Nama"
        name="nama"
        register={register}
        minLength={6}
        errors={errors.nama}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="Password"
        name="password"
        register={register}
        minLength={6}
        errors={errors.password}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
