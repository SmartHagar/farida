/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api_edom } from "@/services/baseURL";
// api_edom dosen
type Props = {
  page?: number;
  limit?: number;
  search?: string;
  prodi_id?: string | number;
};

type Store = {
  dtDosen: any;
  dtDosenAll: any;
  setDosen: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setDosenAll: ({ search, prodi_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useDosenApiEdom = create(
  devtools<Store>((set, get) => ({
    dtDosen: [],
    dtDosenAll: [],
    setDosen: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api_edom({
          method: "get",
          url: `/dosen`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtDosen: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    setDosenAll: async ({ search, prodi_id }) => {
      try {
        const response = await api_edom({
          method: "get",
          url: `/dosen/all`,
          params: {
            search,
            prodi_id,
          },
        });
        set((state) => ({ ...state, dtDosenAll: response.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default useDosenApiEdom;
