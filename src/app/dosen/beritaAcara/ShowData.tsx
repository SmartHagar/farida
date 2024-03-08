/** @format */
"use client";
import React, { FC, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import useRps from "@/stores/crud/upload/Rps";
import TableRps from "@/components/tables/TableRps";
import useJadwalApi from "@/stores/api/Jadwal";
import TablesDefault from "@/components/tables/TablesDefault";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import useJadwalApiEdom from "@/stores/api/Jadwal";
import useBeritaAcaraApi from "@/stores/api/BeritaAcara";

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
  // store
  const { setBeritaAcaraByJadwal, dtBeritaAcara } = useBeritaAcaraApi();
  const { setJadwalByDosenFull, dtJadwal } = useJadwalApiEdom();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dtShow, setDtShow] = useState<any>();

  const fetchDataJadwal = async () => {
    setIsLoading(true);
    const res = await setJadwalByDosenFull({
      dosen_id,
      search,
      tahun: tahunWatch,
      semester: semesterWatch,
    });
    setIsLoading(false);
  };
  // memo fetch data jadwal
  useMemo(
    () => tahunWatch && semesterWatch && fetchDataJadwal(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dosen_id, tahunWatch, semesterWatch]
  );
  // memanggil data rps
  const fetchBeritaAcara = async () => {
    const jadwal_id: any[] = [];
    dtJadwal?.data?.map((item: any) => {
      jadwal_id.push(item.id);
    });
    // convert jadwal_id to string
    const jadwal_id_string = jadwal_id.join(",");
    if (jadwal_id.length > 0) {
      await setBeritaAcaraByJadwal({
        jadwal_id: jadwal_id_string,
      });
    }
  };
  // ketika data jadwal berubah
  useEffect(() => {
    fetchBeritaAcara();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dtJadwal)]);
  //  mengisi dtShow
  const getDataShow = (dtJadwal: any, dtBeritaAcara: any) => {
    console.log({ dtJadwal, dtBeritaAcara });
    const dt = dtBeritaAcara
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
    getDataShow(dtJadwal?.data, dtBeritaAcara?.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dtBeritaAcara)]);
  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "Aksi",
  ];
  const tableBodies = [
    "jadwal.hari",
    "jadwal.matkul.nama",
    "jadwal.matkul.kode",
    "jadwal.matkul.sks",
  ];

  const costume = (row: any) => {
    return (
      <Link
        href={`/dosen/beritaAcara/detail?berita_acara_id=${row?.id}&jadwal_id=${row?.jadwal_id}`}
        title="Lihat Detail"
        target="_blank"
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
              dataTable={dtShow?.data}
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
