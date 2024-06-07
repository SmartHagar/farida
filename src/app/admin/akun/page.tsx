/** @format */
"use client";
import Form from "./form/Form";
import { Toaster } from "react-hot-toast";
import useLogin from "@/stores/auth/login";
import ParafUser from "./ParafProdi";

type Props = {};

const Akun = (props: Props) => {
  const { cekToken, dtLogin } = useLogin();

  return (
    <div className="flex flex-col h-full w-full">
      {dtLogin?.user?.role === "prodi" && <ParafUser />}
      <div className="mb-4">
        <p>
          Silahkan mengubah data akun anda pada form dibawah ini. Masukanlah
          email dan password yang baru jika anda ingin mengubahnya.
        </p>
      </div>
      <Toaster />
      <div className="lg:mx-10">
        {" "}
        <Form dtLogin={dtLogin} cekToken={cekToken} />
      </div>
    </div>
  );
};

export default Akun;
