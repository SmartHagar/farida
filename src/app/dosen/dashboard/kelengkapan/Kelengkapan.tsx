/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import { usePathname, useSearchParams } from "next/navigation";
import React, { FC, useEffect, useMemo, useState } from "react";
import TableCostume from "./TableCostume";
import Cookies from "js-cookie";
import useAbsen from "@/stores/crud/upload/Absen";
import useNilai from "@/stores/crud/upload/Nilai";
import useBeritaAcara from "@/stores/crud/upload/BeritaAcara";
import useRps from "@/stores/crud/upload/Rps";
import useJadwalApiEdom from "@/stores/api/Jadwal";
import {
  fetchAbsen,
  fetchBeritaAcara,
  fetchNilai,
  fetchRPS,
} from "@/app/admin/kelengkapan/fetchData";

type Props = {
  tahun: number | string;
  semester: string;
};

const Kelengkapan: FC<Props> = ({ tahun, semester }) => {
  // params
  const params = useSearchParams();
  // pathname
  const pathname = usePathname();
  // store
  const { setShowAbsen, showAbsen } = useAbsen();
  const { setShowNilai, showNilai } = useNilai();
  const { setShowBeritaAcara, showBeritaAcara } = useBeritaAcara();
  const { setShowRps, showRps } = useRps();
  const { setByTahunSemester, dtJadwal } = useJadwalApiEdom();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [lengkap, setLengkap] = useState<boolean>(false);
  const [dtShow, setDtShow] = useState<any>();
  // dosen_id
  const dosen_id = Cookies.get("dosen_id") || "";
  // fetch data jadwal
  const fetchDataJadwal = async () => {
    setIsLoading(true);
    const res = await setByTahunSemester({
      search,
      tahun,
      semester,
      dosen_id,
    });
    setIsLoading(false);
  };
  // memo fetch data jadwal
  useMemo(
    () => tahun && semester && fetchDataJadwal(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tahun, semester, dosen_id]
  );

  // ketika data jadwal berubah
  useEffect(() => {
    fetchAbsen({ dtJadwal, setShowAbsen });
    fetchNilai({ dtJadwal, setShowNilai });
    fetchBeritaAcara({ dtJadwal, setShowBeritaAcara });
    fetchRPS({ dtJadwal, setShowRps });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dtJadwal)]);

  //  mengisi dtShow
  const getDataShow = (
    dtJadwal: any,
    showAbsen: any,
    showNilai: any,
    showBeritaAcara: any,
    showRps: any
  ) => {
    setIsLoading(true);
    const dt = dtJadwal
      ?.map((item: any) => {
        const matchAbsen = showAbsen?.find(
          (data: any) => parseInt(data.jadwal_id) === item.id
        );
        const matchNilai = showNilai?.find(
          (data: any) => parseInt(data.jadwal_id) === item.id
        );
        const matchBeritaAcara = showBeritaAcara?.find(
          (data: any) => parseInt(data.berita_acara.jadwal_id) === item.id
        );
        const matchRps = showRps?.find(
          (data: any) => parseInt(data.jadwal_id) === item.id
        );
        // Jika keduanya ditemukan, kembalikan keduanya
        if (matchNilai || matchAbsen || matchBeritaAcara || matchRps) {
          return {
            ...item,
            nilai: matchNilai,
            absen: matchAbsen,
            berita_acara: matchBeritaAcara,
            rps: matchRps,
          };
        }

        // Jika matchNilai tidak ditemukan, kembalikan null
        return null;
      })
      .filter((item: any) => item !== null);
    const getData = {
      data: dt,
    };

    setDtShow(getData);

    setIsLoading(false);
  };

  // ketika search berubah
  useEffect(() => {
    const originalData = dtShow?.originalData || dtShow?.data;
    let filteredData = originalData;

    if (search.trim() !== "") {
      filteredData = originalData?.filter((item: any) => {
        return (
          item.jadwal.hari.toLowerCase().includes(search.toLowerCase()) ||
          item.jadwal.matkul.nama
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.jadwal.matkul.kode.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    const getData = {
      data: filteredData,
      originalData: originalData,
    };

    setDtShow(getData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // ketika showAbsen beruba
  useEffect(() => {
    if (dtJadwal.length > 0) {
      getDataShow(dtJadwal, showAbsen, showNilai, showBeritaAcara, showRps);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    JSON.stringify(showAbsen),
    JSON.stringify(dtJadwal),
    JSON.stringify(showNilai),
    JSON.stringify(showBeritaAcara),
    JSON.stringify(showRps),
  ]);
  // table
  const headTable = ["No", "Tidak Ada", "Hari", "Jam", "Mata Kuliah"];

  useEffect(() => {
    const rowsWithNullData =
      dtShow?.data &&
      dtShow?.data.filter(
        (row: any) =>
          !row.rps ||
          !row.berita_acara?.uload_berita_acara ||
          !row.absen ||
          !row.nilai
      );
    if (rowsWithNullData && rowsWithNullData.length > 0) {
      setLengkap(true);
    } else {
      setLengkap(false);
    }

    return () => {};
  }, [dtShow?.data, pathname]);

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
                  dataTable={dtShow?.data}
                  page={page}
                  limit={limit}
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Kelengkapan;
