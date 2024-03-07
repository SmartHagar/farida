/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useJadwalApiEdom from "@/stores/api/Jadwal";
import { useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setEdit: (row: any) => void;
  search: string;
};

const ShowData: FC<Props> = ({ setEdit, search }) => {
  // params
  const params = useSearchParams();
  // store
  const { setJadwal, dtJadwal } = useJadwalApiEdom();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // ambil data jadwal
  // get params semester dan tahun
  const semester = params.get("semester") || "";
  const tahun = params.get("tahun") || "";
  const prodi_id = Cookies.get("prodi_id");
  const fetchDataJadwal = async () => {
    setIsLoading(true);
    const res = await setJadwal({
      page,
      limit,
      search,
      semester,
      tahun,
      prodi_id,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    if (semester && tahun) {
      fetchDataJadwal();
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, params, prodi_id, semester, tahun]);
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
              ubah={false}
              hapus={false}
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
