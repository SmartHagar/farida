/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useRps from "@/stores/crud/upload/Rps";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import BtnDefault from "@/components/button/BtnDefault";
import { useSearchParams } from "next/navigation";

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
  dosen?: boolean;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  // state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // store
  const { addData, updateData, setRps } = useRps();
  // search params
  const searchParams = useSearchParams();
  const search = searchParams.get("cari") || "";
  const semester = searchParams.get("semester") || "";
  const tahun = searchParams.get("year") || "";

  // memanggil data rps
  const fetchRPS = useCallback(async () => {
    setIsLoading(true);
    await setRps({
      search,
      semester,
      tahun,
    });
    setIsLoading(false);
  }, [search, semester, setRps, tahun]);
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
    await fetchRPS();
    setIsLoading(false);
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
          <div>
            {isLoading ? (
              <LoadingSpiner />
            ) : (
              <BtnDefault onClick={handleSubmit(onSubmit)}>Simpan</BtnDefault>
            )}
          </div>
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
