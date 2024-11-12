export enum AdminMgrFindListSort {
  CREATED_AT_ASC, // 오름차순
  CREATED_AT_DESC, // 내림차순
}

export interface IApiResponseAdminList<T> {
  data: T;
  meta: {
    currentPage: number | null;
    currentTake: number | null;
    totalPage: number | null;
    totalCount: number;
  };
  message: string;
}

export interface IApiUpdateResponseAdmin {
  message: string;
}
