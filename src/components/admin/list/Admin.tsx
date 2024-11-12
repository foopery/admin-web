import AdminListView from "./views/AdminListView";
import { useSearchParams } from "react-router-dom";
import { managementAdminListQuery } from "./_core/management-admin-list.query";
import AdminListErrorView from "./views/AdminListErrorView";
import AdminListLoadingView from "./views/AdminListLoadingView";

export default function Admin() {
  const [queryPage] = useSearchParams();
  const page = queryPage.get("page") || "1";

  const { data, status } = managementAdminListQuery.useGets(page);

  switch (status) {
    case "error":
      return <AdminListErrorView />;
    case "pending":
      return <AdminListLoadingView />;
    case "success":
      return <AdminListView data={data} />;
    default:
      return null;
  }
}
