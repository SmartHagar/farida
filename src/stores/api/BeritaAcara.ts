/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api beritaAcara
type Props = {
  jadwal_id?: number | string;
};

type Store = {
  dtBeritaAcara: any;
  setBeritaAcaraByJadwal: ({ jadwal_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useBeritaAcaraApi = create(
  devtools<Store>((set, get) => ({
    dtBeritaAcara: [],
    setBeritaAcaraByJadwal: async ({ jadwal_id }) => {
      try {
        const response = await api({
          method: "get",
          url: `/berita-acara/byJadwal`,
          params: {
            jadwal_id,
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
