/** @format */
"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useDosenLogin from "@/stores/crud/DosenLogin";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
};

type Inputs = {
  id: number | string;
  NIDN: string;
  nama: string;
  jabatan: string;
  tempat_lahir: string;
  tgl_lahir: string;
  jenkel: string;
  agama: string;
  alamat: string;
  no_hp: string;
  foto: string;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  // store
  const { addData, updateData } = useDosenLogin();
  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("NIDN", "");
    setValue("nama", "");
    setValue("jabatan", "");
    setValue("tempat_lahir", "");
    setValue("tgl_lahir", "1980-01-01");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("NIDN", dtEdit.NIDN);
      setValue("nama", dtEdit.nama);
      setValue("jabatan", dtEdit.jabatan);
      setValue("tempat_lahir", dtEdit.tempat_lahir);
      setValue("tgl_lahir", dtEdit.tgl_lahir);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    console.log({ row });
    // jika dtEdit tidak kosong maka update
    if (dtEdit) {
      const { data } = await updateData(dtEdit.id, row);
      toastShow({
        event: data,
      });
      setShowModal(false);
    } else {
      const { data } = await addData(row);
      console.log({ data });
      toastShow({
        event: data,
      });
      data?.type !== "success" ? null : resetForm();
    }
  };

  return (
    <ModalDefault
      title="Form Dosen"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextDefault name="id" register={register} type="hidden" />

        <div className="grid grid-cols-4 gap-2 mb-4">
          <BodyForm
            register={register}
            errors={errors}
            dtEdit={dtEdit}
            control={control}
            watch={watch}
            setValue={setValue}
            showModal={showModal}
          />
        </div>
        <div>
          <ButtonPrimary text="Simpan" onClick={handleSubmit(onSubmit)} />
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
