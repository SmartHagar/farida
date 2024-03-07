/** @format */
"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useBeritaAcara from "@/stores/crud/upload/BeritaAcara";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
  tahunWatch: string | number;
  semesterWatch: string;
};

type Inputs = {
  id: number | string;
  berita_acara_id: number | string;
  status: string;
  file: string;
};

const Form = ({
  showModal,
  setShowModal,
  dtEdit,
  tahunWatch,
  semesterWatch,
}: Props) => {
  // state
  const [myFile, setMyFile] = useState<any>();
  // store
  const { addData, updateData } = useBeritaAcara();
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
    setValue("berita_acara_id", "");
    setValue("file", "");
    setMyFile(null);
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("berita_acara_id", parseInt(dtEdit.berita_acara_id));
      setValue("file", dtEdit.file);
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
            tahunWatch={tahunWatch}
            semesterWatch={semesterWatch}
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
