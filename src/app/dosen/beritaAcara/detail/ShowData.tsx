/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { FC, useEffect, useState } from "react";
import useDetBeritaAcara from "@/stores/crud/DetBeritaAcara";
import { useSearchParams } from "next/navigation";
import lightImgDB from "@/components/lightBox/lightImgDB";
import LightPlugins from "@/components/lightBox/LightPlugins";

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
  const [slides, setSlides] = useState<any>();
  const [indexBox, setIndexBox] = useState<string>("-1");

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
    "Paraf MHS",
    "Paraf Dosen",
    "Paraf Pemeriksa",
    "Foto",
    "Aksi",
  ];
  const tableBodies = [
    "tgl",
    "materi",
    "jmlh_mhs",
    "sistem",
    "paraf_mhs",
    "paraf_dosen",
    "paraf_pemeriksa",
    "foto",
  ];

  useEffect(() => {
    setSlides(
      lightImgDB({
        data: dtDetBeritaAcara?.data,
        pictures: ["foto", "paraf_mhs", "paraf_dosen", "paraf_pemeriksa"],
        title: { path: "materi" },
        description: { path: "tgl" },
      })
    );
  }, [dtDetBeritaAcara?.data]);

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {/* lightBox */}
      <LightPlugins index={indexBox} setIndex={setIndexBox} slides={slides} />
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
              ubah={true}
              hapus={true}
              setIndexBox={setIndexBox}
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
