/** @format */
"use client";
import React, { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import useRps from "@/stores/crud/upload/Rps";
import TableRps from "@/components/tables/TableRps";
import useJadwalApi from "@/stores/api/Jadwal";
import TablesDefault from "@/components/tables/TablesDefault";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

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
  // dosen_id
  const dosen_id = Cookies.get("dosen_id") || "";
  const { setJadwalByRps, dtJadwal } = useJadwalApi();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataRps = async () => {
    const res = await setJadwalByRps({
      dosen_id,
      page,
      limit,
      search,
      tahun: tahunWatch,
      semester: semesterWatch,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataRps();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, tahunWatch, semesterWatch]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataRps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "Aksi",
  ];
  const tableBodies = ["hari", "matkul.nama", "matkul.kode", "matkul.sks"];

  const costume = (row: any) => {
    return (
      <Link
        href={`/dosen/beritaAcara/detail?berita_acara_id=${row.berita_acara.id}`}
        title="Lihat Detail"
      >
        <BsFillInfoCircleFill />
      </Link>
    );
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
              dataTable={dtJadwal?.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              hapus={false}
              ubah={false}
              costume={costume}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ShowData;
