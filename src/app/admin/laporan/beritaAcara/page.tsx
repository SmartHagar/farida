/** @format */
"use client";
import { useEffect, useState } from "react";

import ShowData from "./ShowData";
import toastShow from "@/utils/toast-show";
import { useForm } from "react-hook-form";
import useBeritaAcara from "@/stores/crud/upload/BeritaAcara";
import { useRouter, useSearchParams } from "next/navigation";
import SelectDef from "@/components/select/SelectDef";
import SelectTahun from "@/components/select/SelectTahun";
import { momentId } from "@/utils/momentIndonesia";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const BeritaAcara = () => {
  // router
  const router = useRouter();
  const params = useSearchParams();
  // store
  const { removeData } = useBeritaAcara();
  // state
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [dtEdit, setDtEdit] = useState<any>();

  const handleTambah = () => {
    setShowModal(true);
    setDtEdit(null);
  };

  const setEdit = (row: any) => {
    setShowModal(true);
    setDtEdit(row);
  };

  const setDelete = async ({ id, isDelete }: Delete) => {
    setIdDel(id);
    if (isDelete) {
      const { data } = await removeData(idDel);
      toastShow({
        event: data,
      });
      setShowDelete(false);
    } else setShowDelete(true);
  };

  // hook form
  const {
    register,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const tahunWatch = watch("tahun");
  const semesterWatch = watch("semester");
  // set tahun dan semester
  const tahunParams = params.get("tahun");
  const semesterParams = params.get("semester");
  useEffect(() => {
    if (!tahunParams && !semesterParams) {
      const tahun = new Date().getFullYear();
      const month = momentId().month() + 1;
      const semester = month > 6 ? "Ganjil" : "Genap";
      setValue("tahun", tahun);
      setValue("semester", semester);
      // add parameter to url
      router.push(
        "/admin/laporan/beritaAcara?tahun=" + tahun + "&semester=" + semester
      );
    } else {
      setValue("tahun", parseInt(tahunParams || ""));
      setValue("semester", semesterParams);
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (tahunWatch && semesterWatch) {
      router.push(
        "/admin/laporan/beritaAcara?tahun=" +
          tahunWatch +
          "&semester=" +
          semesterWatch
      );
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tahunWatch, semesterWatch]);

  return (
    <div className="flex flex-col h-full">
      <div>
        <div className="mb-4 flex justify-between">
          <p>Laporan berita acara</p>
        </div>
        {/* pilih tahun dan semester */}
        <div className="mb-4 flex justify-between gap-4">
          <SelectDef
            label="Semester"
            placeholder="Pilih Semester"
            control={control}
            errors={errors}
            name="semester"
            options={[
              { value: "Ganjil", label: "Ganjil" },
              { value: "Genap", label: "Genap" },
            ]}
            addClass="w-full"
          />
          <SelectTahun
            label="Tahun"
            name="tahun"
            placeholder="Pilih Tahun"
            start={new Date().getFullYear() - 2}
            end={new Date().getFullYear()}
            fromMax
            control={control}
            required
            errors={errors}
            addClass="w-full"
          />
        </div>
      </div>

      <ShowData setDelete={setDelete} setEdit={setEdit} />
    </div>
  );
};

export default BeritaAcara;
