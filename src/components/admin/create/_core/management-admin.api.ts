import { ICreateAdmin, IUpdateAdmin } from "../../_interface/admin.create.interface";
import { apiInstance } from "../../../../_common/api.instance";
import { IApiUpdateResponseAdmin } from "../../_interface/admin-list.interface";

export const managementAdminApi = {
  create: async function (adminData: ICreateAdmin) {
    const { data } = await apiInstance.post("/management/admins", adminData);
    // console.log("Admin API Data", data);
    return data;
  },

  update: async function (adminData: IUpdateAdmin, id: number) {
    const { data } = await apiInstance.put<IApiUpdateResponseAdmin>(`/management/admins/${id}`, adminData);
    // console.log("Admin PUT API Data", data);
    return data;
  },
};
