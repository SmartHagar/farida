/** @format */
"use client";
import { FC, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import useRps from "@/stores/crud/upload/Rps";
import TableRps from "@/components/tables/TableRps";
import useJadwalApiEdom from "@/stores/api/Jadwal";
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
  // store
  const { setShowRps, showRps } = useRps();
  const { setJadwalByDosenFull, dtJadwal } = useJadwalApiEdom();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dtShow, setDtShow] = useState<any>();
  // search params
  const searchParams = useSearchParams();
  const search = useSearchParams().get("cari") || "";
  const semester = searchParams.get("semester") || "";
  const year = searchParams.get("year") || "";

  // memanggil data Jadwal
  const fetchDataJadwal = useCallback(async () => {
    setIsLoading(true);
    await setJadwalByDosenFull({
      tahun: year,
      semester: semester,
      dosen_id,
    });
    setIsLoading(false);
  }, [dosen_id, semester, setJadwalByDosenFull, year]);
  // ketika page dan limit berubah
  useEffect(() => {
    year && semester && fetchDataJadwal();
    return () => {};
  }, [year, semester, fetchDataJadwal]);
  // ketika search berubah

  // memanggil data rps
  const fetchRPS = async () => {
    const jadwal_id: any[] = [];
    dtJadwal?.data?.map((item: any) => {
      jadwal_id.push(item.id);
    });
    // convert jadwal_id to string
    const jadwal_id_string = jadwal_id.join(",");
    if (jadwal_id.length > 0) {
      await setShowRps({
        id: dosen_id,
        jadwal_id: jadwal_id_string,
      });
    }
  };

  // ketika data jadwal berubah
  useEffect(() => {
    if (dtJadwal?.data) {
      fetchRPS();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dtJadwal.data)]);

  //  mengisi dtShow
  const getDataShow = (dtJadwal: any, showRps: any) => {
    setIsLoading(true);
    console.log({ dtJadwal, showRps });
    const dt = showRps
      ?.map((item: any) => {
        const matchedData = dtJadwal?.find(
          (data: any) => data.id === parseInt(item.jadwal_id)
        );
        return matchedData ? { ...item, jadwal: matchedData } : null;
      })
      .filter((item: any) => item !== null);

    const getData = {
      data: dt,
    };

    setDtShow(getData);

    setIsLoading(false);
  };

  // ketika dtRPS beruba
  useEffect(() => {
    if (dtJadwal?.data && showRps) {
      getDataShow(dtJadwal?.data, showRps);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(showRps), JSON.stringify(dtJadwal.data)]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "RPS",
    "Status",
    "Aksi",
  ];
  const tableBodies = [
    "jadwal.hari",
    "jadwal.matkul.nama",
    "jadwal.matkul.kode",
    "jadwal.matkul.sks",
    "file",
    "status",
  ];
  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <div className="">
            <TableRps
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtShow?.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ShowData;
