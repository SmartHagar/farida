/** @format */
"use client";
import React, { FC, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import TablesDefault from "@/components/tables/TablesDefault";
import useBeritaAcara from "@/stores/crud/upload/BeritaAcara";
import useJadwalApiEdom from "@/stores/api/Jadwal";

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
  const { setShowBeritaAcara, showBeritaAcara } = useBeritaAcara();
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
  const fetchNilai = async () => {
    const jadwal_id: any[] = [];
    dtJadwal?.data?.map((item: any) => {
      jadwal_id.push(item.id);
    });
    // convert jadwal_id to string
    const jadwal_id_string = jadwal_id.join(",");
    if (jadwal_id.length > 0) {
      await setShowBeritaAcara({
        id: dosen_id,
        jadwal_id: jadwal_id_string,
      });
    }
  };

  // ketika data jadwal berubah
  useEffect(() => {
    fetchNilai();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dtJadwal)]);

  //  mengisi dtShow
  const getDataShow = (dtJadwal: any, showBeritaAcara: any) => {
    console.log({ dtJadwal, showBeritaAcara });
    const dt = showBeritaAcara
      ?.map((item: any) => {
        const matchedData = dtJadwal?.find(
          (data: any) => data.id === parseInt(item.berita_acara.jadwal_id)
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
    if (dtJadwal.data) {
      getDataShow(dtJadwal?.data, showBeritaAcara);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(showBeritaAcara)]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "BERITA ACARA",
    "Aksi",
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
              dataTable={dtShow?.data}
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
