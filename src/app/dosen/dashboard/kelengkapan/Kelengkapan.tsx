/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useKelengkapanApi from "@/stores/api/Kelengkapan";
import { usePathname, useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import TableCostume from "./TableCostume";
import Cookies from "js-cookie";

type Props = {};

const Kelengkapan: FC<Props> = ({}) => {
  // params
  const params = useSearchParams();
  // pathname
  const pathname = usePathname();
  // store
  const { setKelengkapan, dtKelengkapan } = useKelengkapanApi();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [tahunWatch, setTahunWatch] = useState<number | string>("");
  const [semesterWatch, setSemesterWatch] = useState<string>("");
  const [lengkap, setLengkap] = useState<boolean>(false);
  // dosen_id
  const dosen_id = Cookies.get("dosen_id") || "";
  // atur tahun dan semester
  useEffect(() => {
    const tahun = new Date().getFullYear();
    const semester = "Genap";
    setTahunWatch(tahun);
    setSemesterWatch(semester);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // ambil data jadwal
  const fetchDataJadwal = async () => {
    if (tahunWatch && tahunWatch) {
      const res = await setKelengkapan({
        page,
        limit,
        search,
        semester: semesterWatch,
        tahun: tahunWatch,
        dosen_id,
      });
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataJadwal();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, params, tahunWatch, semesterWatch, pathname]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataJadwal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  // table
  const headTable = ["No", "Tidak Ada", "Hari", "Jam", "Mata Kuliah"];

  useEffect(() => {
    const rowsWithNullData =
      dtKelengkapan?.data &&
      dtKelengkapan?.data.filter(
        (row: any) =>
          !row.upload_rps ||
          !row.berita_acara?.uload_berita_acara ||
          !row.upload_absen ||
          !row.upload_nilai
      );
    if (rowsWithNullData && rowsWithNullData.length > 0) {
      setLengkap(true);
    } else {
      setLengkap(false);
    }

    return () => {};
  }, [dtKelengkapan?.data, pathname]);

  return (
    <div className="flex flex-col">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        lengkap && (
          <div className=" mb-4">
            <p>Beberapa dokumen yang belum dilengkapi</p>
            <div className="overflow-auto">
              <div className="">
                <TableCostume
                  headTable={headTable}
                  dataTable={dtKelengkapan.data}
                  page={page}
                  limit={limit}
                />
              </div>
              {dtKelengkapan?.last_page > 1 && (
                <div className="mt-4">
                  <PaginationDefault
                    currentPage={dtKelengkapan?.current_page}
                    totalPages={dtKelengkapan?.last_page}
                    setPage={setPage}
                  />
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Kelengkapan;
