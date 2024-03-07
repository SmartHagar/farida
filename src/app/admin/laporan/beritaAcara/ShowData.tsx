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
  // store
  const { setShowBeritaAcara, showBeritaAcara } = useBeritaAcara();
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
      tahun: tahunWatch,
      semester: semesterWatch,
      prodi_id,
    });
    setIsLoading(false);
  };
  // memo fetch data jadwal
  useMemo(
    () => tahunWatch && semesterWatch && fetchDataJadwal(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tahunWatch, semesterWatch, prodi_id]
  );
  // memanggil data berita acara
  const fetchAbsen = async () => {
    const jadwal_id: any[] = [];
    dtJadwal?.map((item: any) => {
      jadwal_id.push(item.id);
    });

    // convert jadwal_id to string
    const jadwal_id_string = jadwal_id.join(",");
    if (jadwal_id.length > 0) {
      await setShowBeritaAcara({
        jadwal_id: jadwal_id_string,
      });
    }
  };
  // ketika data jadwal berubah
  useEffect(() => {
    fetchAbsen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dtJadwal)]);
  //  mengisi dtShow
  const getDataShow = (dtJadwal: any, showBeritaAcara: any) => {
    console.log({ dtJadwal, showBeritaAcara });
    const dt = showBeritaAcara
      ?.map((item: any) => {
        const matchedData = dtJadwal?.find(
          (data: any) => data.id === item.berita_acara.jadwal_id
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

  // ketika showBeritaAcara beruba
  useEffect(() => {
    getDataShow(dtJadwal, showBeritaAcara);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(showBeritaAcara), JSON.stringify(dtJadwal)]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "BERITA ACARA",
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
              hapus={false}
              ubah={false}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ShowData;
