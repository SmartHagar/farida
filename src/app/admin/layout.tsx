/** @format */
"use client";
import HeaderAdmin from "@/components/header/HeaderAdmin";
import ContainerAdmin from "@/components/sidebar/ContainerAdmin";
import useLogin from "@/stores/auth/login";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
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
    }
  };

  useEffect(() => {
    getCek();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
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
