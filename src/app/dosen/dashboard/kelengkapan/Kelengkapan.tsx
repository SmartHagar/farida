/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import { FC, useCallback, useEffect, useState } from "react";
import useKelengkapanApi from "@/stores/api/Kelengkapan";
import { useSearchParams } from "next/navigation";
import TableCostume from "./TableCostume";

type Props = {
  dosen_id?: string | number;
};

const Kelengkapan: FC<Props> = ({ dosen_id }) => {
  // store
  const { setKelengkapan, dtKelengkapan } = useKelengkapanApi();
  // state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lengkap, setLengkap] = useState<boolean>(false);
  // search params
  const searchParams = useSearchParams();
  const search = searchParams.get("cari") || "";
  const semester = searchParams.get("semester") || "";
  const tahun = searchParams.get("year") || "";

  // fetch data
  const fetchKelengkapan = useCallback(async () => {
    setIsLoading(true);
    await setKelengkapan({
      dosen_id,
      search,
      semester,
      tahun,
    });
    setIsLoading(false);
  }, [dosen_id, search, semester, setKelengkapan, tahun]);

  // get data
  useEffect(() => {
    if (tahun && semester && dosen_id) {
      fetchKelengkapan();
    }
  }, [dosen_id, fetchKelengkapan, semester, tahun]);

  // table
  const headTable = ["Tidak Ada", "Hari", "Jam", "Mata Kuliah"];

  // memeriksa data kelengkapan

  useEffect(() => {
    const checkLengkap = dtKelengkapan?.data?.every(
      (item: any) =>
        item.rps?.status !== "diterima" &&
        item.absen !== null &&
        item.nilai !== null
    );
    setLengkap(checkLengkap);
  }, [dtKelengkapan?.data]);

  return (
    <div className="flex flex-col">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <div className=" mb-4">
          {lengkap ? (
            <p>Data Telah Dilengkapi</p>
          ) : (
            <>
              <p>Beberapa dokumen yang belum dilengkapi</p>
              <div className="overflow-auto">
                <div className="">
                  <TableCostume
                    headTable={headTable}
                    dataTable={dtKelengkapan?.data}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Kelengkapan;
