import { AdminRole, AdminStatus } from "../admin.enums";

export interface IAdmin {
  id: number; // 관리자 아이디
  status: AdminStatus; // 상태 여부
  role: AdminRole; // 권한
  loginId: string | null; // 로그인 아이디
  password: string | null; // 비밀번호
  name: string | null; // 이름
  birthDate: string | null; // 생년월일
  profileImageUrl: string | null; // 프로필 이미지 URL
  lastLoginAt: string | null; // 마지막 접속일
  createdAt: string; // 생성일
  updatedAt: string | null; // 수정일
  deletedAt: string | null; // 삭제일
}

/**
 * 관리자 생성인터페이스
 *
 * */
export interface ICreateAdmin {
  status: AdminStatus; // 관리자 상태
  role: AdminRole; // 관리자 권한
  loginId: string; // 로그인 아이디
  password: string; // 패스워드
  name: string; // 이름
  birthDate?: string; // 생년월일
  profileImageUrl?: string; // 프로필 이미지
}

/**
 * 관리자 수정인터페이스
 *
 * */
export interface IUpdateAdmin {
  status?: AdminStatus; // 관리자 상태
  role?: AdminRole; // 관리자 권한
  loginId?: string; // 로그인 아이디
  name?: string; // 이름
  birthDate?: string; // 생년월일
  profileImageUrl?: string; // 프로필 이미지
}
