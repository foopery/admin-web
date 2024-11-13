/**
 * 관리자 권한
 * @enum SUPER_ADMIN 최고 관리자
 * @enum ADMIN 일반 관리자
 * */
export enum AdminRole {
  SUPER_ADMIN,
  ADMIN,
}

/**
 * 관리자 상태
 * @enum ENABLED 활성화
 * @enum DISABLED 비활성화
 * */
export enum AdminStatus {
  DISABLED,
  ENABLED,
}

/**
 * 페이지네이션 정렬 기준
 * @enum   CREATED_AT_ASC 오름차순
 * @enum   CREATED_AT_DESC 내림차순
 * */
export enum AdminMgrFindListSort {
  CREATED_AT_ASC, // 오름차순
  CREATED_AT_DESC, // 내림차순
}
