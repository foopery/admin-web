import UpdateAdminView from "./views/UpdateAdminView";
import { useParams } from "react-router-dom";
import { adminQuery } from "../_core/admin.query";
import UpdateAdminErrorView from "./views/UpdateAdminErrorView";
import UpdateAdminLoadingView from "./views/UpdateAdminLoadingView";

export default function UpdateAdmin() {
  const params = useParams();
  const id = Number(params.id);
  const { data, status } = adminQuery.useGet(id);
  // console.log("Compo Data", data);
  switch (status) {
    case "error":
      return <UpdateAdminErrorView />;
    case "pending":
      return <UpdateAdminLoadingView />;
    case "success":
      return <UpdateAdminView data={data} />;
    default:
      return null;
  }
}
