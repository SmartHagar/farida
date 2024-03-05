/** @format */
"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useRps from "@/stores/crud/upload/Rps";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
  tahunWatch: string | number;
  semesterWatch: string;
};

type Inputs = {
  id: number | string;
  jadwal_id: number | string;
  status: string;
  file: string;
  dosen?: boolean;
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
  const { addData, updateData } = useRps();
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
    setValue("jadwal_id", "");
    setValue("file", "");
    setMyFile(null);
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("jadwal_id", dtEdit.jadwal_id);
      setValue("file", dtEdit.file);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    row.status = "diproses";
    console.log({ row });
    // jika dtEdit tidak kosong maka update
    if (dtEdit) {
      row.dosen = true;
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
