export interface IAdmin {
  id?: number; // 관리자 아이디
  status: number; // 상태 여부
  role: number; // 권한
  loginId?: string; // 로그인 아이디
  password?: string; // 비밀번호
  name?: string; // 이름
  birthDate?: Date; // 생년월일
  profileImageUrl?: string; // 프로필 이미지 URL
  createdAt?: Date; // 생성일
  updatedAt?: Date; // 수정일
  deletedAt?: Date; // 삭제일
}

/**  ------------------>    */

/**
 * Admin Role
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

export interface ICreateAdmin {
  status: AdminStatus; // 관리자 상태
  role: AdminRole; // 관리자 권한
  loginId: string; // 로그인 아이디
  password: string; // 패스워드
  name: string; // 이름
  birthDate?: string; // 생년월일
  profileImageUrl?: string; // 프로필 이미지
}
