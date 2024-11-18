import AdminListView from "./views/AdminListView";
import { useSearchParams } from "react-router-dom";
import AdminListErrorView from "./views/AdminListErrorView";
import AdminListLoadingView from "./views/AdminListLoadingView";
import { adminQuery } from "../_core/admin.query";
import { adminHandler } from "../_core/admin.handler";

export default function Admin() {
  const [queryPage] = useSearchParams();
  const page = queryPage.get("page") || "1";

  const { data, status } = adminQuery.useGets(page);

  switch (status) {
    case "error":
      return <AdminListErrorView />;
    case "pending":
      return <AdminListLoadingView />;
    case "success":
      return <AdminListView data={data} updateHandler={adminHandler.useUpdateHandler} />;
    default:
      return null;
  }
}
