/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { FC, useEffect, useState } from "react";
import useDetBeritaAcara from "@/stores/crud/DetBeritaAcara";
import { useSearchParams } from "next/navigation";
import Periksa from "./Periksa";

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
  // get search params
  const params = useSearchParams();
  // get berita_acara_id
  const berita_acara_id = params.get("berita_acara_id") || "";
  // store
  const { setDetBeritaAcara, dtDetBeritaAcara } = useDetBeritaAcara();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataDetBeritaAcara = async () => {
    const res = await setDetBeritaAcara({
      page,
      limit,
      search,
      berita_acara_id,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataDetBeritaAcara();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataDetBeritaAcara();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Tgl. Pertemuan",
    "Materi",
    "Jumlah MHS",
    "Sistem Belajar",
    "Foto",
    "Periksa",
  ];
  const tableBodies = ["tgl", "materi", "jmlh_mhs", "sistem", "foto"];

  const costume = (row: any) => {
    // change to int
    const rowPeriksa = parseInt(row.periksa);
    // add rowPeriksa to row
    const parsedRow = { ...row, periksa: rowPeriksa };

    return <Periksa row={parsedRow} />;
  };

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
              dataTable={dtDetBeritaAcara.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={false}
              hapus={false}
              costume={costume}
            />
          </div>
          {dtDetBeritaAcara?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtDetBeritaAcara?.current_page}
                totalPages={dtDetBeritaAcara?.last_page}
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
