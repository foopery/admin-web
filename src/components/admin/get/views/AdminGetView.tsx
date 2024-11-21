import Body from "../../../../_common/Body";
import React from "react";
import { IFindUniqueAdmin } from "../../_interface/admin.interface";
import { ADMIN_ROLE, ADMIN_STATUS } from "../../admin.constant";
import dayjs from "dayjs";
import { commonHandler } from "../../../../_common/common-handler";

export default function AdminGetView({ data }: { data: IFindUniqueAdmin }) {
  /* 경로는 admin/management/${유저의 아이디값} */
  // console.log("Get Data", data);
  const navigate = commonHandler.useNavigator();
  return (
    <Body
      title={"Detail User ID"}
      description={"User Detail Page..."}
      rightHeaderRender={
        <button
          className={`bg-[#3c81f4] text-white font-semibold rounded-lg h-[2rem] text-xs shadow-md  w-[6rem] hover:bg-blue-700 duration-500`}
          onClick={() => navigate(`/management/admin/${data.id}/modify`)}
        >
          관리자 수정
        </button>
      }
    >
      {/** Register Form Div */}
      <div
        className={`bg-white flex w-[90%] h-[80%] p-4 mt-6
                      sm:h-[80%] sm:p-0`}
      >
        {/* 관리자등록 폼 양식 */}
        <form className={`w-full`}>
          <table className={`flex w-full`}>
            <tbody className={`flex flex-col gap-[3rem] w-[100vh] sm:gap-1`}>
              {/* 로그인 아이디 */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-0 `}>
                <td className="py-2 w-1/3">
                  <label htmlFor="loginId">로그인 아이디</label>
                </td>
                <td className="flex items-center px-3 w-[25rem] h-[3rem] rounded-md sm:w-[40svh]">{data.loginId}</td>
              </tr>
              {/* 이름 */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem]`}>
                <td className="py-2 w-1/3">
                  <label htmlFor="name">이름</label>
                </td>
                <td className="flex items-center px-3 w-[25rem] h-[3rem] rounded-md sm:w-[40svh]">{data.name}</td>
              </tr>
              {/* 생년월일 */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem]`}>
                <td className="py-2 w-1/3">
                  <label htmlFor="birthDate">생년월일</label>
                </td>
                <td className="flex items-center px-3 w-[25rem] h-[3rem] rounded-md sm:w-[40svh]">{data.birthDate}</td>
              </tr>
              {/* 프로필 이미지 */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem]`}>
                <td className="py-2 w-1/3">
                  <label htmlFor="profileImageUrl" className={`whitespace-nowrap`}>
                    프로필 이미지
                  </label>
                </td>
                <td className="flex items-center px-3 w-[25rem] h-[3rem] rounded-md sm:w-[40svh]">
                  <img className={`w-[2rem] h-[2rem] rounded-full`} src={data.profileImageUrl || "X"} />
                </td>
              </tr>
              {/* Role */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem]`}>
                <td className="py-2 w-1/3">
                  <label htmlFor="role">권한</label>
                </td>
                <td className="flex items-center px-3 w-[25rem] h-[3rem] rounded-md sm:w-[40svh]">{ADMIN_ROLE[data.role]}</td>
              </tr>
              {/* Status */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem]`}>
                <td className="py-2 w-1/3">
                  <label htmlFor="role">상태</label>
                </td>
                <td className="flex items-center px-3 w-[25rem] h-[3rem] rounded-md sm:w-[40svh]">{ADMIN_STATUS[data.status]}</td>
              </tr>
              {/* 생성일 */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem]`}>
                <td className="py-2 w-1/3">
                  <label htmlFor="role">생성일</label>
                </td>
                <td className="flex items-center px-3 w-[25rem] h-[3rem] rounded-md sm:w-[40svh]">{dayjs(data.createdAt).format("YYYY년 MM월 DD일")}</td>
              </tr>
              {/* 마지막 로그인 */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem]`}>
                <td className="py-2 w-1/3">
                  <label htmlFor="role">마지막 로그인</label>
                </td>
                <td className="flex items-center px-3 w-[25rem] h-[3rem] rounded-md sm:w-[40svh]">{dayjs(data.lastLoginAt).fromNow()}</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </Body>
  );
}
