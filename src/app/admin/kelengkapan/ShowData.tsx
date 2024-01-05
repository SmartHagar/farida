/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useKelengkapanApi from "@/stores/api/Kelengkapan";
import { useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import TableCostume from "./TableCostume";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete?: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
  search: string;
};

const ShowData: FC<Props> = ({ setDelete, setEdit, search }) => {
  // params
  const params = useSearchParams();
  // store
  const { setKelengkapan, dtKelengkapan } = useKelengkapanApi();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // ambil data jadwal
  // get params semester dan tahun
  const semester = params.get("semester") || "";
  const tahun = params.get("tahun") || "";
  const fetchDataJadwal = async () => {
    if (semester && tahun) {
      const res = await setKelengkapan({
        page,
        limit,
        search,
        semester,
        tahun,
      });
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataJadwal();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, params, semester, tahun]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataJadwal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  // table
  const headTable = [
    "No",
    "Kelengkapan",
    "Dosen",
    "Hari",
    "Jam",
    "Mata Kuliah",
  ];

  console.log({ dtKelengkapan });
  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <div className="">
            <TableCostume
              headTable={headTable}
              dataTable={dtKelengkapan.data}
              page={page}
              limit={limit}
            />
          </div>
          {dtKelengkapan?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtKelengkapan?.current_page}
                totalPages={dtKelengkapan?.last_page}
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
