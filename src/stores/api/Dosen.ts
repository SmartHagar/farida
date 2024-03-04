/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
<<<<<<< HEAD
import { api_edom } from "@/services/baseURL";
// api_edom dosen
=======
import { api } from "@/services/baseURL";
// api dosen
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtDosen: any;
<<<<<<< HEAD
  dtDosenAll: any;
=======
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
  setDosen: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setDosenAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

<<<<<<< HEAD
const useDosenApiEdom = create(
  devtools<Store>((set, get) => ({
    dtDosen: [],
    dtDosenAll: [],
    setDosen: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api_edom({
=======
const useDosenApi = create(
  devtools<Store>((set, get) => ({
    dtDosen: [],
    setDosen: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
          method: "get",
          url: `/dosen`,
          params: {
            limit,
            page,
            search,
          },
        });
<<<<<<< HEAD
        set((state) => ({ ...state, dtDosen: response.data.data }));
=======
        set((state) => ({ ...state, dtDosen: response.data }));
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
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
    setDosenAll: async ({ search }) => {
      try {
<<<<<<< HEAD
        const response = await api_edom({
=======
        const response = await api({
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
          method: "get",
          url: `/dosen/all`,
          params: {
            search,
          },
        });
<<<<<<< HEAD
        set((state) => ({ ...state, dtDosenAll: response.data }));
=======
        set((state) => ({ ...state, dtDosen: response.data }));
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
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

<<<<<<< HEAD
export default useDosenApiEdom;
=======
export default useDosenApi;
>>>>>>> fff29db3e6e793647ce921850ee7c8ded1711103
