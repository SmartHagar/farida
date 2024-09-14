/** @format */
"use client";
import { FC, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import TablesDefault from "@/components/tables/TablesDefault";
import useBeritaAcara from "@/stores/crud/upload/BeritaAcara";
import { useSearchParams } from "next/navigation";

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
  const { setBeritaAcara, dtBeritaAcara } = useBeritaAcara();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // search params
  const searchParams = useSearchParams();
  const search = searchParams.get("cari") || "";
  const tahun = searchParams.get("tahun") || "";
  const semester = searchParams.get("semester") || "";
  // get prodi id
  const prodi_id = Cookies.get("prodi_id");

  const fetchBeritaAcara = useCallback(async () => {
    setIsLoading(true);
    const res = await setBeritaAcara({
      search,
      tahun,
      semester,
      prodi_id,
      page,
    });
    setIsLoading(false);
  }, [page, prodi_id, search, semester, setBeritaAcara, tahun]);

  // call fetch
  useEffect(() => {
    fetchBeritaAcara();
  }, [fetchBeritaAcara]);

  // ketika search berubah
  useEffect(() => {
    setPage(1);
  }, [search]);
  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "BERITA ACARA",
  ];
  const tableBodies = [
    "berita_acara.jadwal.hari",
    "berita_acara.jadwal.matkul.nama",
    "berita_acara.jadwal.matkul.kode",
    "berita_acara.jadwal.matkul.sks",
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
              dataTable={dtBeritaAcara?.data}
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
