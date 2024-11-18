import AdminGetView from "./views/AdminGetView";
import { adminQuery } from "../_core/admin.query";
import AdminGetErrorView from "./views/AdminGetErrorView";
import AdminGetLoadingView from "./views/AdminGetLoadingView";
import { useParams } from "react-router-dom";

export default function AdminGet() {
  const params = useParams();
  const id = Number(params.id);
  // console.log("Params", id);
  const { data, status } = adminQuery.useGet(id);
  // console.log("Data", data);
  switch (status) {
    case "error":
      return <AdminGetErrorView />;
    case "pending":
      return <AdminGetLoadingView />;
    case "success":
      return <AdminGetView data={data} />;
    default:
      return null;
  }
}
