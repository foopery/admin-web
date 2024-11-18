import { adminQuery } from "./admin.query";
import { IUpdateAdmin } from "../_interface/admin.interface";

export const adminHandler = {
  useUpdateHandler: function (data: IUpdateAdmin, id: number) {
    const { mutate: update } = adminQuery.useUpdate();
    update({ data, id });
  },
};
