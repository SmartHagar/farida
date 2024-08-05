/** @format */
"use client";
import { FC, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import TablesDefault from "@/components/tables/TablesDefault";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import useJadwalApiEdom from "@/stores/api/Jadwal";
import useBeritaAcaraApi from "@/stores/api/BeritaAcara";
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
  const { setBeritaAcaraByJadwal, dtBeritaAcara } = useBeritaAcaraApi();
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

  const fetchDataJadwal = useCallback(async () => {
    setIsLoading(true);
    const res = await setJadwalByDosenFull({
      dosen_id,
      search,
      tahun: year,
      semester,
    });
    setIsLoading(false);
  }, [dosen_id, search, semester, setJadwalByDosenFull, year]);

  // ketika data semester dan tahun berubah
  useEffect(() => {
    semester && year && fetchDataJadwal();
  }, [fetchDataJadwal, semester, year]);
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
    if (dtJadwal?.data) {
      fetchBeritaAcara();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dtJadwal?.data)]);
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
    if (dtJadwal?.data && dtBeritaAcara?.data) {
      getDataShow(dtJadwal?.data, dtBeritaAcara?.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dtJadwal?.data), JSON.stringify(dtBeritaAcara?.data)]);
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
