import { useMutation } from "@tanstack/react-query";
import { ICreateAdmin } from "../_interface/admin.create.interface";
import { managementAdminApi } from "./management-admin.api";

export const managementAdminQuery = {
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
};
