/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import { useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import TableCostume from "./TableCostume";
import Cookies from "js-cookie";
import useKelengkapanApi from "@/stores/api/Kelengkapan";

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
  const { setKelengkapan, dtKelengkapan } = useKelengkapanApi();
  // params
  const params = useSearchParams();
  // get params semester dan tahun
  const semester = params.get("semester") || "";
  const tahun = params.get("tahun") || "";
  const search = Cookies.get("cari") || "";

  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const prodi_id = Cookies.get("prodi_id");

  const fetchKelengkapan = useCallback(async () => {
    setIsLoading(true);
    const res = await setKelengkapan({
      search,
      prodi_id,
      page,
      limit,
      semester,
      tahun,
    });
    setIsLoading(false);
  }, [limit, page, prodi_id, search, semester, setKelengkapan, tahun]);

  useEffect(() => {
    fetchKelengkapan();
  }, [fetchKelengkapan]);

  // table
  const headTable = [
    "No",
    "Kelengkapan",
    "Mata Kuliah",
    "Dosen",
    "Hari",
    "Jam",
  ];

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
        </>
      )}
    </div>
  );
};

export default ShowData;
