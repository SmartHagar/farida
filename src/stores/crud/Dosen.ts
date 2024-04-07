/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

// crud dosen

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  tipe?: string;
};

type Store = {
  dtDosen: any;
  showDosen: any;
  setDosen: ({ page, limit, search, tipe }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowDosen: (id: string | number) => Promise<{
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
};

const useDosen = create(
  devtools<Store>((set, get) => ({
    dtDosen: [],
    showDosen: [],
    setDosen: async ({ page = 1, limit = 10, search, tipe }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/dosen`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            tipe,
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
          error: error.response?.data,
        };
      }
    },
    setShowDosen: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/dosen/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log({ response });
        set((state) => ({ ...state, showDosen: response.data.data }));
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
          url: `/dosen`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState: any) => ({
          dtDosen: {
            last_page: prevState.dtDosen.last_page,
            current_page: prevState.dtDosen.current_page,
            data: [res.data.data, ...prevState.dtDosen.data],
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
          url: `/dosen/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState: any) => ({
          dtDosen: {
            last_page: prevState.dtDosen.last_page,
            current_page: prevState.dtDosen.current_page,
            data: prevState.dtDosen.data.filter((item: any) => item.id !== id),
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
      const token = await useLogin.getState().setToken();
      try {
        const response = await crud({
          url: `/dosen/${id}`,
          method: "post",
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState: any) => ({
          dtDosen: {
            last_page: prevState.dtDosen.last_page,
            current_page: prevState.dtDosen.current_page,
            data: prevState.dtDosen.data.map((item: any) => {
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

export default useDosen;
