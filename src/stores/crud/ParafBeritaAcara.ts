/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

// crud parafBeritaAcara

type Props = {
  id?: number | string;
  page?: number;
  limit?: number;
  berita_acara_id?: string | number;
};

type Store = {
  dtParafBeritaAcara: any;
  showParafBeritaAcara: any;
  setParafBeritaAcara: ({ page, limit, berita_acara_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  addData: (data: any) => Promise<{ status: string; data?: any; error?: any }>;
};

const useParafBeritaAcara = create(
  devtools<Store>((set, get) => ({
    dtParafBeritaAcara: [],
    showParafBeritaAcara: [],
    setParafBeritaAcara: async ({ page = 1, limit = 10, berita_acara_id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/parafBeritaAcara`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            berita_acara_id,
          },
        });
        set((state) => ({ ...state, dtParafBeritaAcara: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response?.data,
        };
      }
    },
    addData: async (row) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "post",
          url: `/parafBeritaAcara`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: row,
        });
        // call setParafBeritaAcara
        get().setParafBeritaAcara({ berita_acara_id: row.berita_acara_id });
        return {
          status: "berhasil tambah",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
  }))
);

export default useParafBeritaAcara;
