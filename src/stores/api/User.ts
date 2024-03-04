/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
import useLogin from "../auth/login";
// api user
type Props = {
  id: number | string;
};

type Store = {
  dtUser: any;
  setUser: ({ id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useUserApi = create(
  devtools<Store>((set, get) => ({
    dtUser: [],
    setUser: async ({ id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await api({
          method: "get",
          url: `/user/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, dtUser: response.data.data }));
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

export default useUserApi;
