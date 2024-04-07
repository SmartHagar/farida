/** @format */

import ButtonPrimary from "@/components/button/ButtonPrimary";
import React, { useState } from "react";
import ModalDefault from "@/components/modal/ModalDefault";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import submitData from "@/services/submitData";
import ButtonSecondary from "@/components/button/ButtonSecondary";
import InputCanvas from "@/components/input/InputCanvas";

type Props = {};

type Inputs = {
  berita_acara_id: string;
  paraf: string;
};

const ParafDosenMhs = (props: Props) => {
  // state
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  // get search params
  const params = useSearchParams();
  // get berita_acara_id
  const berita_acara_id = params.get("berita_acara_id") || "";
  const jadwal_id = params.get("jadwal_id") || "";
  const parafDosen = () => {
    setShowModal(true);
    setTitle("Dosen");
  };
  const parafMhs = () => {
    setShowModal(true);
    setTitle("Mahasiswa");
  };

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>();

  const handleClear = () => {
    setValue("paraf", "");
    return true;
  };

  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    // row.paraf = sign.getTrimmedCanvas().toDataURL("image/png");
    row.berita_acara_id = berita_acara_id;
    console.log({ row });
    return;
    // simpan data
    submitData({
      row,
      setShowModal,
      setIsLoading,
      toastShow: null,
    });
  };

  return (
    <>
      {/* button */}
      <ButtonPrimary
        text="Paraf Dosen"
        addClass="self-end"
        onClick={parafDosen}
      />
      <ButtonPrimary text="Paraf Mhs" addClass="self-end" onClick={parafMhs} />

      {/* modal */}
      <ModalDefault
        title={`Paraf`}
        showModal={showModal}
        setShowModal={setShowModal}
        width="300px"
      >
        <div>
          <InputCanvas
            control={control}
            name="paraf"
            label={`Paraf ${title}`}
            required
            errors={errors.paraf}
            setValue={setValue}
            clear
          />
        </div>
        <div className="flex gap-4 mt-4">
          <ButtonPrimary text="Simpan" onClick={handleSubmit(onSubmit)} />
        </div>
      </ModalDefault>
    </>
  );
};

export default ParafDosenMhs;
