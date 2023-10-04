/** @format */

"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import useLogin from "@/stores/auth/login";

type Props = {};

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
    } else {
      const role = Cookies.get("role");
      if (role !== "dosen") {
        route.push(`/${role}`);
      }
    }
  };

  useEffect(() => {
    getCek();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return <div>Layout</div>;
};

export default Layout;
