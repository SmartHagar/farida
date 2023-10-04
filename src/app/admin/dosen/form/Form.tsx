/** @format */
"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useDosen from "@/stores/crud/Dosen";

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
  // state
  const [tgl_lahir, setTgl_lahir] = useState<string | Date>(
    new Date("01-01-1980")
  );
  const [myFile, setMyFile] = useState<any>();
  // store
  const { addData, updateData } = useDosen();
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
    setTgl_lahir(new Date("01-01-1980"));
    setValue("jenkel", "");
    setValue("agama", "");
    setValue("alamat", "");
    setValue("no_hp", "");
    setValue("foto", "");
    setMyFile(null);
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
      setTgl_lahir(new Date(dtEdit.tgl_lahir));
      setValue("jenkel", dtEdit.jenkel);
      setValue("agama", dtEdit.agama);
      setValue("alamat", dtEdit.alamat);
      setValue("no_hp", dtEdit.no_hp);
      setValue("foto", dtEdit.foto);
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
            myFile={myFile}
            setMyFile={setMyFile}
            tgl_lahir={tgl_lahir}
            setTgl_lahir={setTgl_lahir}
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
