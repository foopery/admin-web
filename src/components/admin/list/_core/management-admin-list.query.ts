import { useQuery } from "@tanstack/react-query";
import { managementAdminListApi } from "./management-admin-list.api";

export const managementAdminListQuery = {
  useGets: function (page: string) {
    return useQuery({
      queryFn: () => managementAdminListApi.gets(page),
      queryKey: ["AdminList", page],
    });
  },
};
