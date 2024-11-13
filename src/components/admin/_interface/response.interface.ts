/**
 * 관리자 API 서버반환 인터페이스
 * */
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

/**
 * 관리자 수정 API 서버반환 인터페이스
 * */
export interface IApiUpdateResponseAdmin {
  message: string;
}
