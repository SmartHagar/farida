/** @format */
"use client";
import useLogin from "@/stores/auth/login";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import FormLogin from "./FormLogin";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import BtnDefault from "@/components/button/BtnDefault";

type Props = {};

type Inputs = {
  email: string;
  password: string | number;
};

const Login = (props: Props) => {
  // store
  const { setLogin, cekToken } = useLogin();
  const router = useRouter();

  const [error, setError] = useState("");
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
        if (role !== "dosen") {
          return router.push("/admin/dashboard");
        }
        return router.push("/dosen/dashboard");
      }
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchAuth();
    }
  }, []);

  // hook form
  const {
    register,
    setValue,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    setIsLoading(true);
    setError("");
    const res = await setLogin(row);
    if (res?.error) {
      setError(res?.error?.pesan);
    } else {
      const { data } = res;
      const { role, name, dosen_id } = data;
      Cookies.set("token", data.token);
      Cookies.set("role", role);
      Cookies.set("email", data.email);

      if (role === "prodi") {
        console.log("prodi");
        if (name === "Sistem Informasi") {
          console.log("si");
          Cookies.set("prodi_id", "1");
        }
        if (name === "Biologi") {
          Cookies.set("prodi_id", "2");
        }
        if (name === "Teknik Geologi") {
          Cookies.set("prodi_id", "3");
        }
      }
      if (role !== "dosen") {
        return router.push("/admin/dashboard");
      }
      Cookies.set("dosen_id", dosen_id);
      return router.push("/dosen/dashboard");
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-1 bg-cover bg-center font-prompt">
      <div className="flex flex-col items-center min-h-screen justify-center backdrop-blur-sm bg-black/50 z-10">
        <div className="bg-white/10 text-font-1 rounded py-8 px-4 mx-6 md:py-8 md:px-12 flex flex-col items-center justify-center z-50">
          <div className="w-full mb-2">
            <h5 className="text-sm font-bold text-center sm:text-lg">
              Selamat datang di
            </h5>
            <h3 className="text-2xl font-bold text-center tracking-[0.1em] sm:text-3xl">
              SILAKU
            </h3>
            <p className="text-center mt-2 text-xs sm:text-base">
              (Sistem Informasi Perkuliahan Fakultas Sains & Teknologi)
            </p>
            <span>
              {error && <p className="text-red-600 text-center">{error}</p>}
            </span>
          </div>
          <img
            className="rounded-full h-32 w-32 my-6"
            src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="user avatar"
          />
          <p className="text-center mt-2 text-[10px] text-gray-400 sm:text-sm">
            Silakan login untuk mendapatkan akses ke halaman admin
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full">
            <FormLogin
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              setValue={setValue}
            />
            <div className="mt-4">
              {isLoading ? (
                <LoadingSpiner />
              ) : (
                <BtnDefault onClick={handleSubmit(onSubmit)}>Login</BtnDefault>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
