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
  jadwal_id?: number | string;
};

type Store = {
  dtParafBeritaAcara: any;
  showParafBeritaAcara: any;
  setParafBeritaAcara: ({ page, limit }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowParafBeritaAcara: ({ id, jadwal_id }: Props) => Promise<{
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

const useParafBeritaAcara = create(
  devtools<Store>((set, get) => ({
    setFormData: (row: any) => {
      const formData = new FormData();
      formData.append("berita_acara_id", row.berita_acara_id);
      formData.append("jabatan", row.jabatan);
      formData.append("paraf", row.paraf);
      return formData;
    },
    dtParafBeritaAcara: [],
    showParafBeritaAcara: [],
    setParafBeritaAcara: async ({ page = 1, limit = 10 }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/parafBeritaAcara`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
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
    setShowParafBeritaAcara: async ({ id, jadwal_id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/parafBeritaAcara/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            jadwal_id,
          },
        });
        set((state) => ({
          ...state,
          showParafBeritaAcara: response.data.data,
        }));
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
      const formData = row?.paraf ? get().setFormData(row) : row;
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "post",
          url: `/parafBeritaAcara`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        set((prevState: any) => ({
          showParafBeritaAcara: [
            res.data.data,
            ...prevState.showParafBeritaAcara,
          ],
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
          url: `/parafBeritaAcara/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState: any) => ({
          dtParafBeritaAcara: {
            last_page: prevState.dtParafBeritaAcara.last_page,
            current_page: prevState.dtParafBeritaAcara.current_page,
            data: prevState.dtParafBeritaAcara.data.filter(
              (item: any) => item.id !== id
            ),
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
      const formData = row?.paraf ? get().setFormData(row) : row;
      const token = await useLogin.getState().setToken();
      const headersImg = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await crud({
          url: `/parafBeritaAcara/${id}`,
          method: "post",
          headers: row?.paraf
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
          showParafBeritaAcara: prevState.showParafBeritaAcara.map(
            (item: any) => {
              if (item.id === id) {
                return {
                  ...item,
                  ...response.data.data,
                };
              } else {
                return item;
              }
            }
          ),
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

export default useParafBeritaAcara;
