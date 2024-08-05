/** @format */
"use client";
import { FC, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import TablesDefault from "@/components/tables/TablesDefault";
import useNilai from "@/stores/crud/upload/Nilai";
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
  // search params
  const searchParams = useSearchParams();
  const search = useSearchParams().get("cari") || "";
  const semester = searchParams.get("semester") || "";
  const year = searchParams.get("year") || "";
  // store
  const { setShowNilai, showNilai } = useNilai();
  const { setJadwalByDosenFull, dtJadwal } = useJadwalApiEdom();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dtShow, setDtShow] = useState<any>();

  const fetchDataJadwal = useCallback(async () => {
    setIsLoading(true);
    const res = await setJadwalByDosenFull({
      dosen_id,
      search,
      tahun: year,
      semester: semester,
    });
    setIsLoading(false);
  }, [dosen_id, search, semester, setJadwalByDosenFull, year]);
  // ketika year dan semester berubah
  useEffect(() => {
    year && semester && fetchDataJadwal();
  }, [year, semester, fetchDataJadwal]);

  // memanggil data rps
  const fetchNilai = async () => {
    const jadwal_id: any[] = [];
    dtJadwal?.data?.map((item: any) => {
      jadwal_id.push(item.id);
    });
    // convert jadwal_id to string
    const jadwal_id_string = jadwal_id.join(",");
    if (jadwal_id.length > 0) {
      await setShowNilai({
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
  const getDataShow = (dtJadwal: any, showNilai: any) => {
    console.log({ dtJadwal, showNilai });
    const dt = showNilai
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
    if (dtJadwal.data) {
      getDataShow(dtJadwal?.data, showNilai);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(showNilai), JSON.stringify(dtJadwal)]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "NILAI",
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
