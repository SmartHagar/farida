/** @format */
"use client";
import React, { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import useRps from "@/stores/crud/upload/Rps";
import TableRps from "@/components/tables/TableRps";

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
  // dosen_id
  const dosen_id = Cookies.get("dosen_id") || "";
  const { setShowRps, showRps } = useRps();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  console.log({ tahunWatch, semesterWatch });

  const fetchDataRps = async () => {
    if (tahunWatch && semesterWatch) {
      const res = await setShowRps({
        id: dosen_id,
        tahun: tahunWatch,
        semester: semesterWatch,
      });
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataRps();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, tahunWatch, semesterWatch]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataRps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "RPS",
    "Status",
    "Aksi",
  ];
  const tableBodies = [
    "jadwal.hari",
    "jadwal.matkul.nama",
    "jadwal.matkul.kode",
    "jadwal.matkul.sks",
    "file",
    "status",
  ];

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <div className="">
            <TableRps
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={showRps}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ShowData;
