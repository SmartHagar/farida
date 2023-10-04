/** @format */
"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useJadwal from "@/stores/crud/Jadwal";
import moment from "moment";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
  tahunWatch: string | number;
  semesterWatch: string;
};

type Inputs = {
  id: number | string;
  prodi_id: number | string;
  matkul_id: number | string;
  dosen_id: number | string;
  ruangan_id: number | string;
  hari: string;
  mulai: string | Date;
  seles: string | Date;
  semester: string;
  tahun: string | number;
};

const Form = ({
  showModal,
  setShowModal,
  dtEdit,
  tahunWatch,
  semesterWatch,
}: Props) => {
  const momentTime = (time: string) => {
    const date = moment(time, "HH:mm").toDate();
    return date;
  };
  // state

  const [timeStart, setTimeStart] = useState(momentTime("08:00"));
  const [timeFinish, setTimeFinish] = useState<string | Date>("");
  // store
  const { addData, updateData } = useJadwal();
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
    setValue("matkul_id", "");
    setValue("dosen_id", "");
    setValue("ruangan_id", "");
    setValue("mulai", "08:00");
    setTimeStart(momentTime("08:00"));
    setValue("seles", "");
    setTimeFinish("");
    setValue("semester", semesterWatch);
    setValue("tahun", tahunWatch);
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("prodi_id", dtEdit.prodi_id);
      setValue("matkul_id", dtEdit.matkul_id);
      setValue("dosen_id", dtEdit.dosen_id);
      setValue("ruangan_id", dtEdit.ruangan_id);
      setValue("hari", dtEdit.hari);
      setValue("mulai", momentTime(dtEdit.mulai));
      setTimeStart(momentTime(dtEdit.mulai));
      setValue("seles", momentTime(dtEdit.seles));
      setTimeFinish(momentTime(dtEdit.seles));
      setValue("semester", dtEdit.semester);
      setValue("tahun", parseInt(dtEdit.tahun));
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
      title={`Form Jadwal Semester ${semesterWatch} Tahun ${tahunWatch}`}
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
            timeStart={timeStart}
            setTimeStart={setTimeStart}
            timeFinish={timeFinish}
            setTimeFinish={setTimeFinish}
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
