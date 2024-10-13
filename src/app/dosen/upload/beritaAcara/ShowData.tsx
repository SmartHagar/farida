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
  const { setBeritaAcara, dtBeritaAcara } = useBeritaAcara();
  // dosen_id
  const dosen_id = Cookies.get("dosen_id") || "";
  // search params
  const searchParams = useSearchParams();
  const search = searchParams.get("cari") || "";
  const semester = searchParams.get("semester") || "";
  const tahun = searchParams.get("year") || "";
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchBeritaAcara = useCallback(async () => {
    setIsLoading(true);
    const res = await setBeritaAcara({
      search,
      tahun,
      semester,
      dosen_id,
    });
    setIsLoading(false);
  }, [setBeritaAcara, search, tahun, semester, dosen_id]);

  useEffect(() => {
    fetchBeritaAcara();
  }, [fetchBeritaAcara]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "BERITA ACARA",
    "Aksi",
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
              hapus={true}
              ubah={true}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ShowData;
