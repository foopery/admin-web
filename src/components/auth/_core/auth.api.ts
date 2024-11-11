import { apiInstance } from "../../../_common/api.instance";
import { IApiResponse } from "../_interface/api-response.interface";

export const authApi = {
  signIn: async function (loginId: string, password: string) {
    const { data } = await apiInstance.post<IApiResponse>("management/auth/login", { loginId, password });
    console.log("Auth API", data);
    return data;
  },
};
