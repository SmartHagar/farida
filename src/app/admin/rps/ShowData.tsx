/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { FC, useCallback, useEffect, useState } from "react";
import useRps from "@/stores/crud/upload/Rps";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
};

const ShowData: FC<Props> = ({ setDelete, setEdit }) => {
  // params
  const params = useSearchParams();
  const { setRps, dtRps } = useRps();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // get params semester dan tahun
  const semester = params.get("semester") || "";
  const tahun = params.get("tahun") || "";
  const search = params.get("cari") || "";
  const prodi_id = Cookies.get("prodi_id") || "";
  console.log({ search });
  // memanggil data Jadwal
  const fetchRps = useCallback(async () => {
    setIsLoading(true);
    await setRps({
      semester,
      tahun,
      prodi_id,
      search,
      page,
      limit,
    });
    setIsLoading(false);
  }, [limit, page, prodi_id, search, semester, setRps, tahun]);

  useEffect(() => {
    if (semester && tahun) {
      fetchRps();
    }
    return () => {};
  }, [fetchRps, semester, tahun, page, limit]);

  // call rps api
  useEffect(() => {
    setPage(1);
    return () => {};
  }, [search]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "Dosen",
    "JML. SKS",
    "RPS",
    "Status",
    "Aksi",
  ];
  const tableBodies = [
    "jadwal.hari",
    "jadwal.matkul.nama",
    "jadwal.matkul.kode",
    "jadwal.dosen.nama",
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
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtRps.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={false}
            />
          </div>
          {dtRps?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtRps?.current_page}
                totalPages={dtRps?.last_page}
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
