/** @format */

"use client";

import useLogin from "@/stores/auth/login";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";

export default function Home() {
  // store
  const { cekToken } = useLogin();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  // jika sudah login
  const fetchAuth = async () => {
    const token = Cookies.get("token");
    if (token) {
      const cekAuth = await cekToken();
      console.log({ cekAuth });
      if (!cekAuth?.error) {
        const role = cekAuth?.data?.data?.user?.role;
        // redirect to login
        router.push(`/${role}`);
      } else {
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchAuth();
    }
  }, []);

  return (
    <main className="flex min-h-screen w-screen items-center justify-center">
      <LoadingSpiner />
    </main>
  );
}
