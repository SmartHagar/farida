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
  prodi_id?: string | number;
};

type Store = {
  dtKelengkapan: any;
  setKelengkapan: ({
    search,
    dosen_id,
    tahun,
    semester,
    prodi_id,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useKelengkapanApi = create(
  devtools<Store>((set, get) => ({
    dtKelengkapan: [],
    setKelengkapan: async ({ search, dosen_id, tahun, semester, prodi_id }) => {
      try {
        const response = await api({
          method: "get",
          url: `/kelengkapan`,
          params: {
            search,
            dosen_id,
            tahun,
            semester,
            prodi_id,
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
