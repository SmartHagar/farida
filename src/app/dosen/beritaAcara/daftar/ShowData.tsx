/** @format */
"use client";
import { FC, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import useBeritaAcaraApi from "@/stores/api/BeritaAcara";
import { useSearchParams } from "next/navigation";
import TablesDefault from "@/components/tables/TablesDefault";
import PaginationDefault from "@/components/pagination/PaginationDefault";
type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete?: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
};

const ShowData: FC<Props> = ({ setDelete, setEdit }) => {
  const { setBeritaAcara, dtBeritaAcara } = useBeritaAcaraApi();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // search params
  const searchParams = useSearchParams();
  const search = searchParams.get("cari") || "";
  const semester = searchParams.get("semester") || "";
  const tahun = searchParams.get("tahun") || "";
  const dosen_id = Cookies.get("dosen_id");
  const fetchBeritaAcara = useCallback(async () => {
    setIsLoading(true);
    const res = await setBeritaAcara({
      search,
      tahun,
      semester,
      dosen_id,
    });
    setIsLoading(false);
  }, [dosen_id, search, semester, setBeritaAcara, tahun]);

  // ketika data jadwal berubah
  useEffect(() => {
    if (semester && tahun && dosen_id) {
      fetchBeritaAcara();
    }
  }, [dosen_id, fetchBeritaAcara, semester, tahun]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "Prodi",
    "Aksi",
  ];
  const tableBodies = [
    "jadwal.hari",
    "jadwal.matkul.nama",
    "jadwal.matkul.kode",
    "jadwal.matkul.sks",
    "jadwal.prodi.singkat",
  ];
  const costume = (row: any) => {
    return (
      <Link
        href={`/dosen/beritaAcara/detail?berita_acara_id=${row?.id}&jadwal_id=${row?.jadwal_id}`}
        target="_blank"
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
              dataTable={dtBeritaAcara?.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              hapus={false}
              ubah={false}
              costume={costume}
            />
          </div>
          {dtBeritaAcara?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtBeritaAcara?.current_page}
                totalPages={dtBeritaAcara?.last_page}
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
