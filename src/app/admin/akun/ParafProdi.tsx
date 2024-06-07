/** @format */

import ButtonPrimary from "@/components/button/ButtonPrimary";
import { useCallback, useEffect, useState } from "react";
import ModalDefault from "@/components/modal/ModalDefault";
import { SubmitHandler, useForm } from "react-hook-form";
import submitData from "@/services/submitData";
import InputCanvas from "@/components/input/InputCanvas";
import useParafProdi from "@/stores/crud/ParafProdi";
import toastShow from "@/utils/toast-show";
import Image from "next/image";
import { BASE_URL } from "@/services/baseURL";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import Cookies from "js-cookie";

type Props = {};

type Inputs = {
  prodi_id: string | number;
  paraf: string;
};

const ParafProdi = ({}: Props) => {
  // store
  const { addData, dtParafProdi, setParafProdi } = useParafProdi();
  // state
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  // get prodi_id
  const prodi_id = parseInt(Cookies.get("prodi_id") || "");

  const parafDosen = () => {
    setShowModal(true);
    setTitle(`Prodi`);
  };

  // fetch paraf berita acara
  const fetchDataParafProdi = useCallback(async () => {
    const res = await setParafProdi({ prodi_id });
  }, [setParafProdi, prodi_id]);
  // call fetch
  useEffect(() => {
    prodi_id && fetchDataParafProdi();
  }, [fetchDataParafProdi, prodi_id]);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    row.prodi_id = prodi_id;
    console.log({ row });
    // return;
    // simpan data
    submitData({
      addData,
      row,
      setShowModal,
      setIsLoading,
      toastShow,
    });
    // close modal
    setShowModal(false);
    // reset form
  };

  return (
    <div className="flex flex-col lg:flex-row border-b border-primary/[0.2] gap-2 mb-8 pb-2 items-center">
      {/* button */}
      <div className="flex gap-2">
        <ButtonPrimary text="Paraf" addClass="self-end" onClick={parafDosen} />
      </div>

      <div className="flex gap-2">
        {dtParafProdi &&
          dtParafProdi.map((item: any) => (
            <Image
              alt="paraf"
              src={`${BASE_URL}/${item.paraf}`}
              width={100}
              height={100}
              key={item.id}
            />
          ))}
      </div>

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
          {isLoading ? (
            <LoadingSpiner />
          ) : (
            <ButtonPrimary text="Simpan" onClick={handleSubmit(onSubmit)} />
          )}
        </div>
      </ModalDefault>
    </div>
  );
};

export default ParafProdi;
