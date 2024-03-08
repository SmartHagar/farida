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
import LoadingSpiner from "@/components/loading/LoadingSpiner";

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
};

const Form = ({
  showModal,
  setShowModal,
  dtEdit,
  tahunWatch,
  semesterWatch,
}: Props) => {
  // store
  const { updateData } = useRps();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("jadwal_id", parseInt(dtEdit.jadwal_id));
      setValue("status", dtEdit.status);
      setValue("file", dtEdit.file);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    setIsLoading(true);
    console.log({ row });
    const { data } = await updateData(dtEdit.id, row);
    toastShow({
      event: data,
    });
    setShowModal(false);
  };

  return (
    <ModalDefault
      title={dtEdit ? dtEdit.jadwal.matkul.nama : "Upload RPS"}
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
            tahunWatch={tahunWatch}
            semesterWatch={semesterWatch}
          />
        </div>
        <div>
          {isLoading ? (
            <LoadingSpiner />
          ) : (
            <ButtonPrimary text="Simpan" onClick={handleSubmit(onSubmit)} />
          )}
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
