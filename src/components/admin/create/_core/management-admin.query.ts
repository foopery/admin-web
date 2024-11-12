import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ICreateAdmin, IUpdateAdmin } from "../../_interface/admin.create.interface";
import { managementAdminApi } from "./management-admin.api";

export const managementAdminQuery = {
  useCreate: function () {
    return useMutation({
      mutationFn: (data: ICreateAdmin) => managementAdminApi.create(data),
      mutationKey: ["AdminCreate"],
      onSuccess: (v) => {
        // console.log("Query Success", v.message);
        alert(v.message);
      },
      onError: (error: any) => {
        console.log("Query Error", error.response.data.message);
      },
    });
  },

  useUpdate: function () {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: ({ data, id }: { data: IUpdateAdmin; id: number }) => managementAdminApi.update(data, id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["AdminList"] });
      },
      onError: (error: any) => {
        console.log("Query PUT Error", error);
      },
    });
  },
};
