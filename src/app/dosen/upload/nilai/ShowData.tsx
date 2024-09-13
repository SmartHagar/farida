/** @format */
"use client";
import { FC, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import TablesDefault from "@/components/tables/TablesDefault";
import useNilai from "@/stores/crud/upload/Nilai";
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
  // dosen_id
  const dosen_id = Cookies.get("dosen_id") || "";
  // search params
  const searchParams = useSearchParams();
  const search = useSearchParams().get("cari") || "";
  const semester = searchParams.get("semester") || "";
  const tahun = searchParams.get("year") || "";
  // store
  const { setNilai, dtNilai } = useNilai();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // memanggil data nilai
  const fetchNILAI = useCallback(async () => {
    setIsLoading(true);
    await setNilai({
      search,
      semester,
      tahun,
      dosen_id,
    });
    setIsLoading(false);
  }, [dosen_id, search, semester, setNilai, tahun]);

  // ketika data jadwal berubah
  useEffect(() => {
    if (semester && tahun) {
      fetchNILAI();
    }
  }, [fetchNILAI, semester, tahun]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "NILAI",
    "Aksi",
  ];
  const tableBodies = [
    "jadwal.hari",
    "jadwal.matkul.nm_matkul",
    "jadwal.matkul.kd_matkul",
    "jadwal.matkul.sks",
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
              dataTable={dtNilai?.data}
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
