import { ICreateAdmin } from "../_interface/admin.create.interface";
import { apiInstance } from "../../../../_common/api.instance";

export const managementAdminApi = {
  create: async function (adminData: ICreateAdmin) {
    const { data } = await apiInstance.post("/management/admins", adminData);
    console.log("Admin API Data", data);
    return data;
  },
};
