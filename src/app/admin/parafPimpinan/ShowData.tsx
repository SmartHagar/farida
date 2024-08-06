/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { FC, useEffect, useState } from "react";
import useParafPimpinan from "@/stores/crud/ParafPimpinan";

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
  const { setParafPimpinan, dtParafPimpinan } = useParafPimpinan();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const fetchDataDosen = async () => {
    setIsLoading(true);
    await setParafPimpinan({});
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataDosen();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    fetchDataDosen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = ["No", "NIDN", "Nama", "Jabatan", "Paraf", "Aksi"];
  const tableBodies = ["dosen.NIDN", "dosen.nama", "jabatan", "paraf"];
  console.log({ dtParafPimpinan });
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
              dataTable={dtParafPimpinan?.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={false}
              hapus={true}
            />
          </div>
          {dtParafPimpinan?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtParafPimpinan?.current_page}
                totalPages={dtParafPimpinan?.last_page}
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
