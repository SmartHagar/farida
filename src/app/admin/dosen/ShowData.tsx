/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import React, { FC, useEffect, useState } from "react";
import Detail from "./Detail";
import { BsFillInfoCircleFill } from "react-icons/bs";
import useDosenApiEdom from "@/stores/api/Dosen";
import useDosenLogin from "@/stores/crud/DosenLogin";
import useUserApi from "@/stores/api/User";

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
  const { setDosenAll, dtDosenAll } = useDosenApiEdom();
  const { setDosenLogin, dtDosenLogin } = useDosenLogin();
  const { setUser, dtUser } = useUserApi();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dtShow, setDtShow] = useState<any>();

  const fetchDataDosen = async () => {
    setIsLoading(true);
    await setDosenAll({
      search,
    });
    await setDosenLogin({});
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

  //  mengisi dtShow
  const getDataShow = (dtLogin: any, dtAll: any) => {
    console.log({ dtLogin, dtAll });
    const dt = dtLogin
      ?.map((item: any) => {
        const matchedData = dtAll?.find(
          (data: any) => data.id === parseInt(item.dosen_id)
        );
        return matchedData ? { ...item, dosen: matchedData } : null;
      })
      .filter((item: any) => item !== null);
    const loginPage = {
      current_page: dtDosenLogin?.current_page,
      last_page: dtDosenLogin?.last_page,
      total: dtDosenLogin?.total,
      per_page: dtDosenLogin?.per_page,
      from: dtDosenLogin?.from,
      to: dtDosenLogin?.to,
      data: dt,
    };

    setDtShow(loginPage);

    setIsLoading(false);
  };

  useEffect(() => {
    if (dtDosenLogin?.data && dtDosenAll?.data) {
      getDataShow(dtDosenLogin?.data, dtDosenAll?.data);
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dtDosenAll, dtDosenLogin]);

  // table
  const headTable = ["No", "NIDN", "Nama", "Jenis Kelamin", "Jabatan", "Aksi"];
  const tableBodies = [
    "dosen.NIDN",
    "dosen.nama",
    "dosen.jenkel",
    "dosen.jabatan",
  ];

  const costume = (row: any) => {
    return (
      <div onClick={() => getShowDosen(row.user_id)} className="cursor-pointer">
        <BsFillInfoCircleFill />
      </div>
    );
  };

  const getShowDosen = (id: number | string) => {
    setUser({ id });
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
            {dtUser ? (
              <>
                <p>Email: {dtUser.email}</p>
                <p>Password: {dtUser.show_password}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Detail>
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtShow.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={false}
              hapus={true}
              costume={costume}
            />
          </div>
          {dtShow?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtShow?.current_page}
                totalPages={dtShow?.last_page}
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
