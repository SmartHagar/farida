/** @format */
"use client";
import { FC, useCallback, useEffect, useState } from "react";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import useRps from "@/stores/crud/upload/Rps";
import { useSearchParams } from "next/navigation";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TableRps from "@/components/tables/TableRps";
import Cookies from "js-cookie";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete?: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
};

const ShowData: FC<Props> = ({ setDelete, setEdit }) => {
  // store
  const { setRps, dtRps } = useRps();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dtShow, setDtShow] = useState<any>();
  // dosen_id
  const dosen_id = Cookies.get("dosen_id") || "";
  // search params
  const searchParams = useSearchParams();
  const search = useSearchParams().get("cari") || "";
  const semester = searchParams.get("semester") || "";
  const tahun = searchParams.get("year") || "";

  // memanggil data rps
  const fetchRPS = useCallback(async () => {
    setIsLoading(true);
    await setRps({
      search,
      semester,
      tahun,
      dosen_id,
    });
    setIsLoading(false);
  }, [dosen_id, search, semester, setRps, tahun]);

  // ketika data jadwal berubah
  useEffect(() => {
    if (semester && tahun) {
      fetchRPS();
    }
  }, [fetchRPS, semester, tahun]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "Prodi",
    "JML. SKS",
    "RPS",
    "Status",
    "Aksi",
  ];
  const tableBodies = [
    "jadwal.hari",
    "jadwal.matkul.nama",
    "jadwal.matkul.kode",
    "jadwal.prodi.singkat",
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
              dataTable={dtRps?.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
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
