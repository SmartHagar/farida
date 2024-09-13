/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api kelengkapan
type Props = {
  page?: number;
  limit?: number;
  search?: string;
  dosen_id?: string | number;
  tahun?: string | number;
  semester?: string;
};

type Store = {
  dtKelengkapan: any;
  setKelengkapan: ({ search, dosen_id, tahun, semester }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useKelengkapanApi = create(
  devtools<Store>((set, get) => ({
    dtKelengkapan: [],
    setKelengkapan: async ({ search, dosen_id, tahun, semester }) => {
      try {
        const response = await api({
          method: "get",
          url: `/kelengkapan`,
          params: {
            search,
            dosen_id,
            tahun,
            semester,
          },
        });
        set((state) => ({ ...state, dtKelengkapan: response.data }));
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

export default useKelengkapanApi;
