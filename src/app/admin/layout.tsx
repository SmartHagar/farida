/** @format */
"use client";
import HeaderAdmin from "@/components/header/HeaderAdmin";
import ContainerAdmin from "@/components/sidebar/ContainerAdmin";
import useLogin from "@/stores/auth/login";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  // state
  const [isLoading, setIsLoading] = useState(true);
  // pathname
  const pathname = usePathname();
  // route
  const route = useRouter();
  const { cekToken } = useLogin();
  const getCek = async () => {
    const res = await cekToken();
    if (res?.error) {
      // redirect to login
      route.push("/login");
    } else {
      const role = Cookies.get("role");
      if (role !== "dosen") {
        return;
      }
      route.push(`/dosen`);
    }
    return res;
  };

  useEffect(() => {
    getCek();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const loadData = async () => {
    const cek = await getCek();
    if (!cek?.error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    console.log("pertama render admin");
    return () => {};
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen h-screen justify-center items-center">
        <LoadingSpiner />
      </div>
    );
  }
  return (
    <div>
      <div className="flex min-h-screen h-screen text-black bg-bg">
        <ContainerAdmin />
        <div className="flex h-full w-full overflow-hidden p-1 rounded-lg flex-col">
          <div className="lg:-mx-4 lg:-mt-2 mb-1">
            <HeaderAdmin />
          </div>
          <div className="bg-white h-full overflow-hidden p-2 drop-shadow-2xl shadow-black rounded-lg">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
