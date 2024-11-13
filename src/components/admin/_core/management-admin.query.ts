import { useMutation, useQuery } from "@tanstack/react-query";
import { ICreateAdmin, IUpdateAdmin } from "../_interface/admin.interface";
import { managementAdminApi } from "./management-admin.api";
import { queryClient } from "../../../App";

export const managementAdminQuery = {
  /* 관리자 생성 */
  useCreate: function () {
    return useMutation({
      mutationFn: (data: ICreateAdmin) => managementAdminApi.create(data),
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
      queryFn: () => managementAdminApi.gets(page),
      queryKey: ["AdminList", page],
    });
  },
  /* 관리자 수정 */
  useUpdate: function () {
    return useMutation({
      mutationFn: ({ data, id }: { data: IUpdateAdmin; id: number }) => managementAdminApi.update(data, id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["AdminList"] });
      },
      onError: (error: any) => {
        console.log("Query Error", error.response.data.message);
        alert(error.response.data.message);
      },
    });
  },
};
