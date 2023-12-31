/** @format */
"use client";
import React, { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import TablesDefault from "@/components/tables/TablesDefault";
import useAbsen from "@/stores/crud/upload/Absen";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete?: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
  search: string;
  tahunWatch: string | number;
  semesterWatch: string;
};

const ShowData: FC<Props> = ({
  setDelete,
  setEdit,
  search,
  tahunWatch,
  semesterWatch,
}) => {
  const { setAbsen, dtAbsen } = useAbsen();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataAbsen = async () => {
    const res = await setAbsen({
      page,
      limit,
      search,
      tahun: tahunWatch,
      semester: semesterWatch,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    if (tahunWatch && semesterWatch) {
      fetchDataAbsen();
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, tahunWatch, semesterWatch]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataAbsen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "ABSEN",
  ];
  const tableBodies = [
    "jadwal.hari",
    "jadwal.matkul.nama",
    "jadwal.matkul.kode",
    "jadwal.matkul.sks",
    "file",
  ];

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtAbsen?.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              hapus={false}
              ubah={false}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ShowData;
