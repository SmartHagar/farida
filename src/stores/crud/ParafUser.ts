/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

// crud parafUser

type Props = {
  id?: number | string;
  page?: number;
  limit?: number;
  user_id?: string | number;
};

type Store = {
  dtParafUser: any;
  showParafUser: any;
  setParafUser: ({ page, limit, user_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  addData: (data: any) => Promise<{ status: string; data?: any; error?: any }>;
};

const useParafUser = create(
  devtools<Store>((set, get) => ({
    dtParafUser: [],
    showParafUser: [],
    setParafUser: async ({ page = 1, limit = 10, user_id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/parafUser`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            user_id,
          },
        });
        set((state) => ({ ...state, dtParafUser: response.data.data }));
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
          url: `/parafUser`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: row,
        });
        // call setParafUser
        get().setParafUser({ user_id: row.user_id });
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
  }))
);

export default useParafUser;
