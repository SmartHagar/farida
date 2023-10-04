/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useDosen from "@/stores/crud/Dosen";
import React, { FC, useEffect, useState } from "react";
import Detail from "./Detail";
import { BsFillInfoCircleFill } from "react-icons/bs";

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
  const { setDosen, dtDosen, setShowDosen, showDosen } = useDosen();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const fetchDataDosen = async () => {
    const res = await setDosen({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataDosen();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataDosen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "NIDN",
    "Nama",
    "Jabatan",
    "Tempat Lahir",
    "Tgl. Lahir",
    "Foto",
    "Aksi",
  ];
  const tableBodies = [
    "NIDN",
    "nama",
    "jabatan",
    "tempat_lahir",
    "tgl_lahir",
    "foto",
  ];

  const costume = (row: any) => {
    return (
      <div onClick={() => getShowDosen(row.id)} className="cursor-pointer">
        <BsFillInfoCircleFill />
      </div>
    );
  };

  const getShowDosen = (id: number | string) => {
    setShowDosen(id);
    setShowModal(true);
  };

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <Detail
            showModal={showModal}
            setShowModal={setShowModal}
            title="Email dan Password"
          >
            {showDosen ? (
              <>
                <p>Email: {showDosen.email}</p>
                <p>Password: {showDosen.show_password}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Detail>
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtDosen.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
              costume={costume}
            />
          </div>
          {dtDosen?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtDosen?.current_page}
                totalPages={dtDosen?.last_page}
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
