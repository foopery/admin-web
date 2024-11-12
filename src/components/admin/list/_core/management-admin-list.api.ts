import { apiInstance } from "../../../../_common/api.instance";
import { AdminMgrFindListSort, IApiResponseAdminList } from "../../_interface/admin-list.interface";
import { IAdmin } from "../../_interface/admin.create.interface";

export const managementAdminListApi = {
  gets: async function (page: string) {
    const { data } = await apiInstance.get<IApiResponseAdminList<IAdmin[]>>("/management/admins/list", {
      params: {
        sort: AdminMgrFindListSort.CREATED_AT_DESC,
        take: "10",
        page,
      },
    });
    // console.log("List API GET DATA", data);
    return data;
  },
};
