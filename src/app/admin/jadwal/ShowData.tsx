/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useJadwal from "@/stores/crud/Jadwal";
import { useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
  search: string;
};

const ShowData: FC<Props> = ({ setDelete, setEdit, search }) => {
  // params
  const params = useSearchParams();
  // store
  const { setJadwal, dtJadwal } = useJadwal();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // ambil data jadwal
  // get params semester dan tahun
  const semester = params.get("semester") || "";
  const tahun = params.get("tahun") || "";
  const fetchDataJadwal = async () => {
    const res = await setJadwal({
      page,
      limit,
      search,
      semester,
      tahun,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    if (semester && tahun) {
      fetchDataJadwal();
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, params]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataJadwal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  // table
  const headTable = [
    "No",
    "Hari",
    "Jam",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "Progdi SMT",
    "Ruangan",
    "Dosen",
    "Aksi",
  ];
  const tableBodies = [
    "hari",
    "mulai_seles",
    "matkul.nama",
    "matkul.kode",
    "matkul.sks",
    "progdi_smt",
    "ruangan.nama",
    "dosen.nama",
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
              dataTable={dtJadwal.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtJadwal?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtJadwal?.current_page}
                totalPages={dtJadwal?.last_page}
                setPage={setPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShowData;
