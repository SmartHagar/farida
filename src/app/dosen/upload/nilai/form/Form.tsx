/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useNilai from "@/stores/crud/upload/Nilai";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import BtnDefault from "@/components/button/BtnDefault";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
};

type Inputs = {
  id: number | string;
  jadwal_id: number | string;
  status: string;
  file: string;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  const dosen_id = Cookies.get("dosen_id");
  // search params
  const searchParams = useSearchParams();
  const semester = searchParams.get("semester") || "";
  const tahun = searchParams.get("year") || "";
  // state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // store
  const { addData, updateData, setNilai } = useNilai();
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
      setValue("file", dtEdit.file);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    setIsLoading(true);
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
    await setNilai({
      semester,
      tahun,
      dosen_id,
    });
    setIsLoading(false);
  };

  return (
    <ModalDefault
      title="Form Nilai"
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
          {isLoading ? (
            <LoadingSpiner />
          ) : (
            <BtnDefault onClick={handleSubmit(onSubmit)}>Simpan</BtnDefault>
          )}
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
