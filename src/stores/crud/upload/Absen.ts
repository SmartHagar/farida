/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";
import UploadAbsenTypes from "@/types/UploadAbsenTypes";

// crud absen

type Props = {
  id?: number | string;
  page?: number;
  limit?: number;
  semester?: string;
  tahun?: number | string;
  prodi_id?: number | string;
  search?: number | string;
  dosen_id?: number | string;
};

type Store = {
  dtAbsen: {
    last_page: number;
    current_page: number;
    data: UploadAbsenTypes[];
  };
  showAbsen: any;
  setAbsen: ({
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
  setShowAbsen: ({ id }: Props) => Promise<{
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

const useAbsen = create(
  devtools<Store>((set, get) => ({
    setFormData: (row: any) => {
      const formData = new FormData();
      formData.append("jadwal_id", row.jadwal_id);
      formData.append("file", row.file);
      return formData;
    },
    dtAbsen: {
      last_page: 0,
      current_page: 0,
      data: [],
    },
    showAbsen: [],
    setAbsen: async ({
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
          url: `/upload/absen`,
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
        set((state) => ({ ...state, dtAbsen: response.data }));
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
    setShowAbsen: async ({ id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/upload/absen/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          params: {},
        });
        set((state) => ({ ...state, showAbsen: response.data.data }));
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
          url: `/upload/absen`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        set((prevState) => ({
          dtAbsen: {
            last_page: prevState.dtAbsen.last_page,
            current_page: prevState.dtAbsen.current_page,
            data: [res.data.data, ...prevState.dtAbsen.data],
          },
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
          url: `/upload/absen/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtAbsen: {
            last_page: prevState.dtAbsen.last_page,
            current_page: prevState.dtAbsen.current_page,
            data: prevState.dtAbsen.data.filter((item: any) => item.id !== id),
          },
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
          url: `/upload/absen/${id}`,
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
        set((prevState) => ({
          dtAbsen: {
            last_page: prevState.dtAbsen.last_page,
            current_page: prevState.dtAbsen.current_page,
            data: prevState.dtAbsen.data.map((item: any) => {
              if (item.id === id) {
                return {
                  ...item,
                  ...response.data.data,
                };
              } else {
                return item;
              }
            }),
          },
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

export default useAbsen;
