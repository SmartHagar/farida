/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

// crud parafProdi

type Props = {
  id?: number | string;
  page?: number;
  limit?: number;
  prodi_id?: string | number;
};

type Store = {
  dtParafProdi: any;
  showParafProdi: any;
  setParafProdi: ({ page, limit, prodi_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  addData: (data: any) => Promise<{ status: string; data?: any; error?: any }>;
};

const useParafProdi = create(
  devtools<Store>((set, get) => ({
    dtParafProdi: [],
    showParafProdi: [],
    setParafProdi: async ({ page = 1, limit = 10, prodi_id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/parafProdi`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            prodi_id,
          },
        });
        set((state) => ({ ...state, dtParafProdi: response.data.data }));
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
          url: `/parafProdi`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: row,
        });
        // call setParafProdi
        get().setParafProdi({ prodi_id: row.prodi_id });
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

export default useParafProdi;
