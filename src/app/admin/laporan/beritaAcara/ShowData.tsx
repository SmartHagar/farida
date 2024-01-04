/** @format */
"use client";
import React, { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import TablesDefault from "@/components/tables/TablesDefault";
import useBeritaAcara from "@/stores/crud/upload/BeritaAcara";

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
  const { setBeritaAcara, dtBeritaAcara } = useBeritaAcara();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataBeritaAcara = async () => {
    if (tahunWatch && semesterWatch) {
      const res = await setBeritaAcara({
        page,
        limit,
        search,
        tahun: tahunWatch,
        semester: semesterWatch,
      });
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataBeritaAcara();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, tahunWatch, semesterWatch]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataBeritaAcara();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "BERITAACARA",
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
