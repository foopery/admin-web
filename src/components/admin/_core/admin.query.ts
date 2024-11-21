import { useMutation, useQuery } from "@tanstack/react-query";
import { ICreateAdmin, IUpdateAdmin } from "../_interface/admin.interface";
import { adminApi } from "./admin.api";
import { queryClient } from "../../../App";

export const adminQuery = {
  /* 관리자 생성 */
  useCreate: function () {
    return useMutation({
      mutationFn: (data: ICreateAdmin) => adminApi.create(data),
      onSuccess: (v) => {
        // console.log("Query Success", v.message);
        alert(v.message);
      },
      onError: (error: any) => {
        console.log("Query Error", error.response.data.message);
      },
    });
  },
  /* 관리자 목록조회 */
  useGets: function (page: string) {
    return useQuery({
      queryFn: () => adminApi.gets(page),
      queryKey: ["AdminList", page],
    });
  },
  /* 관리자 단일조회 */
  useGet: function (id: number) {
    return useQuery({
      queryFn: () => adminApi.get(id),
      queryKey: ["AdminUnique", id],
      select: ({ data }) => data,
    });
  },
  /* 관리자 수정 */
  useUpdate: function () {
    return useMutation({
      mutationFn: ({ data, id }: { data: IUpdateAdmin; id: number }) => adminApi.update(data, id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["AdminList"] });
      },
      onError: (error: any) => {
        console.log("Query Error", error.response.data.message);
        alert(error.response.data.message);
      },
    });
  },
  /* 관리자 비밀번호 수정 */
  usePasswordUpdate: function () {
    return useMutation({
      mutationFn: () => adminApi.passwordUpdate(),
      onSuccess: () => {},
      onError: (error: any) => {
        console.log("Query Error", error.response.data.message);
        alert(error.response.data.message);
      },
    });
  },
};
