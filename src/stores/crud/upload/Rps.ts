/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

// crud rps

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
  dtRps: any;
  showRps: any;
  setRps: ({
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
  setShowRps: ({ id, semester, tahun, prodi_id }: Props) => Promise<{
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

const useRps = create(
  devtools<Store>((set, get) => ({
    setFormData: (row: any) => {
      const formData = new FormData();
      formData.append("jadwal_id", row.jadwal_id);
      formData.append("status", row.status);
      formData.append("file", row.file);
      return formData;
    },
    dtRps: [],
    showRps: [],
    setRps: async ({
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
          url: `/upload/rps`,
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
        set((state) => ({ ...state, dtRps: response.data }));
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
    setShowRps: async ({ id, semester, tahun, prodi_id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/upload/rps/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            semester,
            tahun,
            prodi_id,
          },
        });
        set((state) => ({ ...state, showRps: response.data.data }));
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
          url: `/upload/rps`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        // add res.data.data to showRps

        set((prevState: any) => ({
          showRps: [res.data.data, ...prevState.showRps],
        }));

        return {
          status: "berhasil tambah",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response?.data,
        };
      }
    },
    removeData: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "delete",
          url: `/upload/rps/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState: any) => ({
          dtRps: {
            last_page: prevState.dtRps.last_page,
            current_page: prevState.dtRps.current_page,
            data: prevState.dtRps.data.filter((item: any) => item.id !== id),
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
      const dosen = row.dosen;
      delete row.id;
      delete row.dosen;
      const formData = row?.file ? get().setFormData(row) : row;
      const token = await useLogin.getState().setToken();
      const headersImg = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await crud({
          url: `/upload/rps/${id}`,
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
        // jika dosen yang mengubah data.
        if (dosen) {
          set((prevState: any) => ({
            showRps: prevState.showRps.map((item: any) => {
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
        } else {
          set((prevState: any) => ({
            dtRps: {
              last_page: prevState.dtRps.last_page,
              current_page: prevState.dtRps.current_page,
              data: prevState.dtRps.data.map((item: any) => {
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
        }
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

export default useRps;
