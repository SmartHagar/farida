/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
<<<<<<< HEAD
import React, { FC, useEffect, useState } from "react";
import Detail from "./Detail";
import { BsFillInfoCircleFill } from "react-icons/bs";
import useDosenApiEdom from "@/stores/api/Dosen";
import useDosenLogin from "@/stores/crud/DosenLogin";
import useUserApi from "@/stores/api/User";
=======
import useDosen from "@/stores/crud/Dosen";
import React, { FC, useEffect, useState } from "react";
import Detail from "./Detail";
import { BsFillInfoCircleFill } from "react-icons/bs";
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103

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
<<<<<<< HEAD
  const { setDosenAll, dtDosenAll } = useDosenApiEdom();
  const { setDosenLogin, dtDosenLogin } = useDosenLogin();
  const { setUser, dtUser } = useUserApi();
=======
  const { setDosen, dtDosen, setShowDosen, showDosen } = useDosen();
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
<<<<<<< HEAD
  const [dtShow, setDtShow] = useState<any>();

  const fetchDataDosen = async () => {
    setIsLoading(true);
    await setDosenAll({
      search,
    });
    await setDosenLogin({});
=======

  const fetchDataDosen = async () => {
    const res = await setDosen({
      page,
      limit,
      search,
    });
    setIsLoading(false);
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
  };
  useEffect(() => {
    fetchDataDosen();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
<<<<<<< HEAD
=======
    setPage(1);
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
    fetchDataDosen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

<<<<<<< HEAD
  //  mengisi dtShow
  const getDataShow = (dtLogin: any, dtAll: any) => {
    const dt = dtLogin
      ?.map((item: any) => {
        const matchedData = dtAll?.find(
          (data: any) => data.id === item.dosen_id
        );
        return matchedData ? { ...item, dosen: matchedData } : null;
      })
      .filter((item: any) => item !== null);

    console.log({ dt });

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
=======
  // table
  const headTable = [
    "No",
    "NIDN",
    "Nama",
    "Jabatan",
    "Prodi",
    "Tempat Lahir",
    "Tgl. Lahir",
    "Foto",
    "Aksi",
  ];
  const tableBodies = [
    "NIDN",
    "nama",
    "jabatan",
    "prodi.nama",
    "tempat_lahir",
    "tgl_lahir",
    "foto",
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
  ];

  const costume = (row: any) => {
    return (
<<<<<<< HEAD
      <div onClick={() => getShowDosen(row.user_id)} className="cursor-pointer">
=======
      <div onClick={() => getShowDosen(row.id)} className="cursor-pointer">
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
        <BsFillInfoCircleFill />
      </div>
    );
  };

  const getShowDosen = (id: number | string) => {
<<<<<<< HEAD
    setUser({ id });
=======
    setShowDosen(id);
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
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
<<<<<<< HEAD
            {dtUser ? (
              <>
                <p>Email: {dtUser.email}</p>
                <p>Password: {dtUser.show_password}</p>
=======
            {showDosen ? (
              <>
                <p>Email: {showDosen.email}</p>
                <p>Password: {showDosen.show_password}</p>
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Detail>
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
<<<<<<< HEAD
              dataTable={dtShow.data}
=======
              dataTable={dtDosen.data}
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
<<<<<<< HEAD
              ubah={false}
=======
              ubah={true}
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
              hapus={true}
              costume={costume}
            />
          </div>
<<<<<<< HEAD
          {dtShow?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtShow?.current_page}
                totalPages={dtShow?.last_page}
=======
          {dtDosen?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtDosen?.current_page}
                totalPages={dtDosen?.last_page}
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
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
