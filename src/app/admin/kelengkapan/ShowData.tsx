/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import TableCostume from "./TableCostume";
import useAbsen from "@/stores/crud/upload/Absen";
import useJadwalApiEdom from "@/stores/api/Jadwal";
import Cookies from "js-cookie";
import useNilai from "@/stores/crud/upload/Nilai";
import {
  fetchAbsen,
  fetchBeritaAcara,
  fetchNilai,
  fetchRPS,
} from "./fetchData";
import useBeritaAcara from "@/stores/crud/upload/BeritaAcara";
import useRps from "@/stores/crud/upload/Rps";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete?: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
};

const ShowData: FC<Props> = ({ setDelete, setEdit }) => {
  // params
  const params = useSearchParams();
  // get params semester dan tahun
  const semester = params.get("semester") || "";
  const tahun = params.get("tahun") || "";
  const search = Cookies.get("cari") || "";
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
  const [dtShow, setDtShow] = useState<any>();

  const prodi_id = Cookies.get("prodi_id");
  // fetch data jadwal
  const fetchDataJadwal = async () => {
    setIsLoading(true);
    const res = await setByTahunSemester({
      search,
      tahun,
      semester,
      prodi_id,
    });
    setIsLoading(false);
  };

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
  const headTable = [
    "No",
    "Kelengkapan",
    "Dosen",
    "Hari",
    "Jam",
    "Mata Kuliah",
  ];

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <div className="">
            <TableCostume
              headTable={headTable}
              dataTable={dtShow.data}
              page={page}
              limit={limit}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ShowData;
