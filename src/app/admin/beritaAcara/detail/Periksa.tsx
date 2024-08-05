/** @format */

import InputCheck from "@/components/input/InputCheck";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import useDetBeritaAcara from "@/stores/crud/DetBeritaAcara";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  row: any;
};

const Periksa: FC<Props> = ({ row }) => {
  // state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // store
  const { updateData } = useDetBeritaAcara();
  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm();
  //   ketika cek periksa
  const handleChange = (e: any) => {
    setIsLoading(true);
    const target = e.target.value;
    const parsedRow = JSON.parse(target);
    const row = {
      periksa: !parsedRow.periksa,
    };
    updateData(parsedRow.id, row);

    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <InputCheck
          id={row.id}
          name="cek"
          register={register}
          value={JSON.stringify(row)}
          onChange={handleChange}
          checked={row.periksa}
        />
      )}
    </div>
  );
};

export default Periksa;
