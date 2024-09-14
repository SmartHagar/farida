/** @format */
"use client";
import { FC, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import TablesDefault from "@/components/tables/TablesDefault";
import useNilai from "@/stores/crud/upload/Nilai";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete?: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
  search: string;
  tahunWatch: string | number;
  semesterWatch: string;
};

const ShowData: FC<Props> = ({
  setDelete,
  setEdit,
  search,
  tahunWatch,
  semesterWatch,
}) => {
  // store
  const { setNilai, dtNilai } = useNilai();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const prodi_id = Cookies.get("prodi_id");

  const fetchNilai = useCallback(async () => {
    setIsLoading(true);
    const res = await setNilai({
      search,
      prodi_id,
      page,
      limit,
      semester: semesterWatch,
      tahun: tahunWatch,
    });
    setIsLoading(false);
  }, [limit, page, prodi_id, search, semesterWatch, setNilai, tahunWatch]);

  useEffect(() => {
    fetchNilai();
  }, [fetchNilai]);
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
    "NILAI",
  ];
  const tableBodies = [
    "jadwal.hari",
    "jadwal.matkul.nama",
    "jadwal.matkul.kode",
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
