/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api_edom } from "@/services/baseURL";
// api_edom jadwal
type Props = {
  page?: number;
  limit?: number;
  search?: string;
  tahun?: string | number;
  semester?: string;
  dosen_id?: string;
  prodi_id?: string;
};

type Store = {
  dtJadwal: any;
  setJadwal: ({
    page,
    limit,
    search,
    tahun,
    semester,
    prodi_id,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setJadwalAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setJadwalByDosenFull: ({ tahun, semester, dosen_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setByTahunSemester: ({ tahun, semester, prodi_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setJadwalByRps: ({ tahun, semester, dosen_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowJadwal: (id: number | string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useJadwalApiEdom = create(
  devtools<Store>((set, get) => ({
    dtJadwal: [],
    setJadwal: async ({
      page = 1,
      limit = 10,
      search,
      tahun,
      semester,
      prodi_id,
    }) => {
      try {
        const response = await api_edom({
          method: "get",
          url: `/jadwal`,
          params: {
            limit,
            page,
            search,
            tahun,
            semester,
            prodi_id,
          },
        });
        set((state) => ({ ...state, dtJadwal: response.data.data }));
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
    setJadwalAll: async ({ search }) => {
      try {
        const response = await api_edom({
          method: "get",
          url: `/jadwal/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtJadwal: response.data }));
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
    setJadwalByDosenFull: async ({ tahun, semester, dosen_id }) => {
      try {
        const response = await api_edom({
          method: "get",
          url: `/jadwal/byDosenFull`,
          params: {
            tahun,
            semester,
            dosen_id,
          },
        });
        set((state) => ({ ...state, dtJadwal: response?.data }));
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
    setByTahunSemester: async ({ search, tahun, semester, prodi_id }) => {
      try {
        const response = await api_edom({
          method: "get",
          url: `/jadwal/byTahunSemester`,
          params: {
            search,
            tahun,
            semester,
            prodi_id,
          },
        });
        set((state) => ({ ...state, dtJadwal: response.data.data }));
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
    setJadwalByRps: async ({ tahun, semester, dosen_id }) => {
      try {
        const response = await api_edom({
          method: "get",
          url: `/jadwal/by-rps`,
          params: {
            dosen_id,
          },
        });
        set((state) => ({ ...state, dtJadwal: response?.data }));
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
    setShowJadwal: async (id) => {
      try {
        const response = await api_edom({
          method: "get",
          url: `/jadwal/${id}`,
        });
        set((state) => ({ ...state, dtJadwal: response.data.data }));
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

export default useJadwalApiEdom;
