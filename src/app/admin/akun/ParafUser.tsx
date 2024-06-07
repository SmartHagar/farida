/** @format */

import ButtonPrimary from "@/components/button/ButtonPrimary";
import { useCallback, useEffect, useState } from "react";
import ModalDefault from "@/components/modal/ModalDefault";
import { SubmitHandler, useForm } from "react-hook-form";
import submitData from "@/services/submitData";
import InputCanvas from "@/components/input/InputCanvas";
import useParafUser from "@/stores/crud/ParafUser";
import toastShow from "@/utils/toast-show";
import Image from "next/image";
import { BASE_URL } from "@/services/baseURL";
import LoadingSpiner from "@/components/loading/LoadingSpiner";

type Props = {
  dtLogin: any;
};

type Inputs = {
  user_id: string;
  paraf: string;
};

const ParafUser = ({ dtLogin }: Props) => {
  // store
  const { addData, dtParafUser, setParafUser } = useParafUser();
  // state
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  // get user_id
  const user_id = dtLogin?.user?.id;

  const parafDosen = () => {
    setShowModal(true);
    setTitle(`${dtLogin?.user?.name}`);
  };

  // fetch paraf berita acara
  const fetchDataParafUser = useCallback(async () => {
    const res = await setParafUser({ user_id });
  }, [setParafUser, user_id]);
  // call fetch
  useEffect(() => {
    user_id && fetchDataParafUser();
  }, [fetchDataParafUser, user_id]);

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
    row.user_id = user_id;
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
        {dtParafUser &&
          dtParafUser.map((item: any) => (
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

export default ParafUser;
