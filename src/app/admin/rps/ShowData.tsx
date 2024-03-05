/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import React, { FC, useEffect, useState } from "react";
import useRps from "@/stores/crud/upload/Rps";
import { useSearchParams } from "next/navigation";
import useJadwalApiEdom from "@/stores/api/Jadwal";

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
  // params
  const params = useSearchParams();
  const { setRps, dtRps } = useRps();
  const { setByTahunSemester, dtJadwal } = useJadwalApiEdom();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dtShow, setDtShow] = useState<any>();

  // get params semester dan tahun
  const semester = params.get("semester") || "";
  const tahun = params.get("tahun") || "";
  // memanggil data Jadwal
  const fetchDataJadwal = async () => {
    setIsLoading(true);
    if (semester && tahun) {
      await setByTahunSemester({
        tahun,
        semester,
        search,
      });
    }
  };

  useEffect(() => {
    if (semester && tahun) {
      fetchDataJadwal();
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [semester, tahun, search]);
  const fetchRps = async () => {
    await setRps({
      page,
      limit,
    });
  };
  // call rps api
  useEffect(() => {
    fetchRps();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  //  mengisi dtShow
  const getDataShow = () => {
    const dt = dtRps?.data
      ?.map((item: any) => {
        const matchedData = dtJadwal?.find(
          (data: any) => data.id === item.jadwal_id
        );
        return matchedData ? { ...item, jadwal: matchedData } : null;
      })
      .filter((item: any) => item !== null);

    const getData = {
      current_page: dtRps?.current_page,
      last_page: dtRps?.last_page,
      total: dtRps?.total,
      per_page: dtRps?.per_page,
      from: dtRps?.from,
      to: dtRps?.to,
      data: dt,
    };
    setDtShow(getData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (dtRps?.data && dtJadwal.length > 0) {
      getDataShow();
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dtJadwal, dtRps]);

  // table
  const headTable = [
    "No",
    "Hari",
    "Mata Kuliah",
    "Kode MK",
    "Dosen",
    "JML. SKS",
    "RPS",
    "Status",
    "Aksi",
  ];
  const tableBodies = [
    "jadwal.hari",
    "jadwal.matkul.nama",
    "jadwal.matkul.kode",
    "jadwal.dosen.nama",
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
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtShow.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={false}
            />
          </div>
          {dtShow?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtRps?.current_page}
                totalPages={dtRps?.last_page}
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
