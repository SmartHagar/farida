/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

// crud beritaAcara

type Props = {
  id?: number | string;
  page?: number;
  limit?: number;
  jadwal_id?: number | string;
  semester?: string;
  tahun?: number | string;
  prodi_id?: number | string;
  search?: number | string;
  dosen_id?: number | string;
};

type Store = {
  dtBeritaAcara: any;
  showBeritaAcara: any;
  setBeritaAcara: ({
    page,
    limit,
    semester,
    tahun,
    prodi_id,
    dosen_id,
    search,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowBeritaAcara: ({ id, jadwal_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  addData: (data: any) => Promise<{ status: string; data?: any; error?: any }>;
  removeData: (
    data: any
  ) => Promise<{ status: string; data?: any; error?: any }>;
  updateData: (
    id: number | string,
    data: any
  ) => Promise<{ status: string; data?: any; error?: any }>;
  setFormData: any;
};

const useBeritaAcara = create(
  devtools<Store>((set, get) => ({
    setFormData: (row: any) => {
      const formData = new FormData();
      formData.append("berita_acara_id", row.berita_acara_id);
      formData.append("file", row.file);
      return formData;
    },
    dtBeritaAcara: [],
    showBeritaAcara: [],
    setBeritaAcara: async ({
      page = 1,
      limit = 10,
      semester,
      tahun,
      prodi_id,
      dosen_id,
      search,
    }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/upload/berita-acara`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            semester,
            tahun,
            prodi_id,
            dosen_id,
            search,
          },
        });
        set((state) => ({ ...state, dtBeritaAcara: response.data }));
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
    setShowBeritaAcara: async ({ id, jadwal_id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/upload/berita-acara/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            jadwal_id,
          },
        });
        set((state) => ({ ...state, showBeritaAcara: response.data.data }));
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
      const formData = row?.file ? get().setFormData(row) : row;
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "post",
          url: `/upload/berita-acara`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });

        set((prevState: any) => ({
          showBeritaAcara: [res.data.data, ...prevState.showBeritaAcara],
        }));

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
    removeData: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "delete",
          url: `/upload/berita-acara/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState: any) => ({
          showBeritaAcara: prevState.showBeritaAcara.filter(
            (item: any) => item.id !== id
          ),
        }));
        return {
          status: "berhasil hapus",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    updateData: async (id, row) => {
      delete row.id;
      const formData = row?.file ? get().setFormData(row) : row;
      const token = await useLogin.getState().setToken();
      const headersImg = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await crud({
          url: `/upload/berita-acara/${id}`,
          method: "post",
          headers: row?.file
            ? headersImg
            : {
                Authorization: `Bearer ${token}`,
              },
          data: formData,
          params: {
            _method: "PUT",
          },
        });
        set((prevState: any) => ({
          showBeritaAcara: prevState.showBeritaAcara.map((item: any) => {
            if (item.id === id) {
              return {
                ...item,
                ...response.data.data,
              };
            } else {
              return item;
            }
          }),
        }));
        return {
          status: "berhasil update",
          data: response.data,
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

export default useBeritaAcara;
