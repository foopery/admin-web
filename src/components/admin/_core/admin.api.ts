import { IAdmin, ICreateAdmin, IFindUniqueAdmin, IUpdateAdmin } from "../_interface/admin.interface";
import { apiInstance } from "../../../_common/api.instance";
import { IApiMgrFindResponseAdmin, IApiResponseAdminList, IApiUpdateResponseAdmin } from "../_interface/response.interface";
import { AdminMgrFindListSort } from "../admin.enums";

export const adminApi = {
  /* 관리자 생성 */
  create: async function (adminData: ICreateAdmin) {
    const { data } = await apiInstance.post("/management/admins", adminData);
    // console.log("Admin API Data", data);
    return data;
  },
  /* 관리자 목록조회 */
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
  /* 관리자 단일조회 */
  get: async function (id: number) {
    const { data } = await apiInstance.get<IApiMgrFindResponseAdmin<IFindUniqueAdmin>>(`/management/admins/${id}`);
    return data;
  },
  /* 관리자 수정 */
  update: async function (putData: IUpdateAdmin, id: number) {
    const { data } = await apiInstance.put<IApiUpdateResponseAdmin>(`/management/admins/${id}`, putData);
    return data;
  },
};
