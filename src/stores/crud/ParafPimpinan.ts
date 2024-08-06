/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";
import ParafPimpinanTypes from "@/types/ParafPimpinanTypes";
// store parafPimpinan
type Props = {
  page?: number;
  limit?: number;
  search?: string;
  sortby?: string;
  order?: string;
  anggota_id?: number | string;
};

type Store = {
  dtParafPimpinan: {
    last_page: number;
    current_page: number;
    data: ParafPimpinanTypes[];
  };

  setParafPimpinan: ({
    page,
    limit,
    search,
    sortby,
    order,
    anggota_id,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  setShowParafPimpinan: (id: number | string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  addData: (
    data: ParafPimpinanTypes
  ) => Promise<{ status: string; data?: any; error?: any }>;

  removeData: (
    id: number | string
  ) => Promise<{ status: string; data?: any; error?: any }>;

  updateData: (
    id: number | string,
    data: ParafPimpinanTypes
  ) => Promise<{ status: string; data?: any; error?: any }>;
};

const useParafPimpinan = create(
  devtools<Store>((set, get) => ({
    dtParafPimpinan: {
      last_page: 0,
      current_page: 0,
      data: [],
    },
    setParafPimpinan: async ({
      page = 1,
      limit = 10,
      search,
      sortby,
      order,
    }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/parafPimpinan`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            sortby,
            order,
          },
        });
        set((state) => ({ ...state, dtParafPimpinan: response.data }));
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
    setShowParafPimpinan: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/parafPimpinan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, dtParafPimpinan: response.data }));
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
          url: `/parafPimpinan`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtParafPimpinan: {
            last_page: prevState.dtParafPimpinan.last_page,
            current_page: prevState.dtParafPimpinan.current_page,
            data: [res.data.data, ...prevState.dtParafPimpinan.data],
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
          url: `/parafPimpinan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtParafPimpinan: {
            last_page: prevState.dtParafPimpinan.last_page,
            current_page: prevState.dtParafPimpinan.current_page,
            data: prevState.dtParafPimpinan.data.filter(
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
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "PUT",
          url: `/parafPimpinan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtParafPimpinan: {
            last_page: prevState.dtParafPimpinan.last_page,
            current_page: prevState.dtParafPimpinan.current_page,
            data: prevState.dtParafPimpinan.data.map((item: any) => {
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

export default useParafPimpinan;
