/** @format */

import ButtonPrimary from "@/components/button/ButtonPrimary";
import { useCallback, useEffect, useState } from "react";
import ModalDefault from "@/components/modal/ModalDefault";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import submitData from "@/services/submitData";
import InputCanvas from "@/components/input/InputCanvas";
import useParafBeritaAcara from "@/stores/crud/ParafBeritaAcara";
import toastShow from "@/utils/toast-show";
import Image from "next/image";
import { BASE_URL } from "@/services/baseURL";

type Props = {};

type Inputs = {
  berita_acara_id: string;
  paraf: string;
  jabatan: string;
};

const ParafDosenMhs = (props: Props) => {
  // store
  const { addData, dtParafBeritaAcara, setParafBeritaAcara } =
    useParafBeritaAcara();
  // state
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [jabatan, setJabatan] = useState<string>("");
  // get search params
  const params = useSearchParams();
  // get berita_acara_id
  const berita_acara_id = params.get("berita_acara_id") || "";
  const parafDosen = () => {
    setShowModal(true);
    setTitle("Dosen");
    setJabatan("dosen");
  };
  const parafMhs = () => {
    setShowModal(true);
    setTitle("Mahasiswa");
    setJabatan("mahasiswa");
  };

  // fetch paraf berita acara
  const fetchDataParafBeritaAcara = useCallback(async () => {
    const res = await setParafBeritaAcara({ berita_acara_id });
  }, [berita_acara_id, setParafBeritaAcara]);
  useEffect(() => {
    fetchDataParafBeritaAcara();
  }, [fetchDataParafBeritaAcara]);

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
    row.berita_acara_id = berita_acara_id;
    row.jabatan = jabatan;
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
    <div className="flex flex-col gap-2">
      {/* button */}
      <div className="flex gap-2">
        <ButtonPrimary
          text="Paraf Dosen"
          addClass="self-end"
          onClick={parafDosen}
        />
        <ButtonPrimary
          text="Paraf Mhs"
          addClass="self-end"
          onClick={parafMhs}
        />
      </div>

      <div className="flex gap-2">
        {dtParafBeritaAcara &&
          dtParafBeritaAcara.map((item: any) => (
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
          <ButtonPrimary text="Simpan" onClick={handleSubmit(onSubmit)} />
        </div>
      </ModalDefault>
    </div>
  );
};

export default ParafDosenMhs;
