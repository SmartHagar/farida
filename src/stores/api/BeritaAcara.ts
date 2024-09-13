/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api beritaAcara
type Props = {
  semester?: string;
  tahun?: number | string;
  prodi_id?: number | string;
  search?: number | string;
  dosen_id?: number | string;
  page?: number;
  limit?: number;
};

type Store = {
  dtBeritaAcara: any;
  setBeritaAcara: ({
    semester,
    tahun,
    prodi_id,
    dosen_id,
    search,
    page,
    limit,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useBeritaAcaraApi = create(
  devtools<Store>((set, get) => ({
    dtBeritaAcara: [],
    setBeritaAcara: async ({
      semester,
      tahun,
      prodi_id,
      dosen_id,
      search,
      page,
      limit,
    }) => {
      try {
        const response = await api({
          method: "get",
          url: `/berita-acara`,
          params: {
            semester,
            tahun,
            prodi_id,
            search,
            dosen_id,
            page,
            limit,
          },
        });
        set((state) => ({ ...state, dtBeritaAcara: response?.data }));
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

export default useBeritaAcaraApi;
