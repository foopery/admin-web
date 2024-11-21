import React, { useState } from "react";
import Body from "../../../../_common/Body";

export default function AdminProfileView() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <Body title={"내 정보"} description={"나의 프로필"}>
      {/* BackGround Div */}
      <div className={`h-full flex justify-center items-center`}>
        {/* Tab Div */}
        <div className={`w-full h-[80vh] rounded-[1rem]`}>
          <div className="text-sm flex font-bold text-center text-gray-500 border-b border-gray-300">
            <ul className="flex -mb-px">
              <li className="me-2">
                <p
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === "profile" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600"
                  } hover:text-gray-500`}
                  onClick={() => setActiveTab("profile")}
                >
                  프로필
                </p>
              </li>
              <li className="me-2">
                <p
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === "password" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600"
                  } hover:text-gray-500`}
                  onClick={() => setActiveTab("password")}
                >
                  비밀번호
                </p>
              </li>
            </ul>
          </div>
          {/* Content Div */}
          <div className={`bg-gray-50 h-auto px-5 pt-6 overflow-hidden`}>
            {activeTab === "profile" ? (
              <form className={`w-full`}>
                <table className={`flex w-full`}>
                  <tbody className={`flex flex-col`}>
                    {/* 로그인 아이디 */}
                    <tr className={`flex justify-between gap-[10rem]`}>
                      <td className={`py-2`}>
                        <label htmlFor="loginId">로그인 아이디</label>
                      </td>
                      <td className={`flex flex-col py-1 w-[25rem] h-[3.7rem]`}>
                        <input className={`border rounded-md w-full h-[2.5rem] pl-[0.5rem]`} />
                      </td>
                    </tr>
                    {/* 이름 */}
                    <tr className={`flex justify-between `}>
                      <td className={`py-2`}>
                        <label htmlFor="name">이름</label>
                      </td>
                      <td className={`flex flex-col py-1 w-[25rem] h-[3.7rem]`}>
                        <input className={`border rounded-md w-full h-[2.5rem] pl-[0.5rem]`} />
                      </td>
                    </tr>
                    {/* 생년원일 */}
                    <tr className={`flex justify-between `}>
                      <td className={`py-2`}>
                        <label htmlFor="birthDate">생년원일</label>
                      </td>
                      <td className={`flex flex-col py-1 w-[25rem] h-[3.7rem]`}>
                        <input className={`border rounded-md w-full h-[2.5rem] pl-[0.5rem]`} />
                      </td>
                    </tr>
                    {/* 프로필 이미지 */}
                    <tr className={`flex justify-between `}>
                      <td className={`py-2`}>
                        <label htmlFor="profileImage">프로필 이미지</label>
                      </td>
                      <td className={`flex flex-col py-1 w-[25rem] h-[3.7rem]`}>
                        <input className={`border rounded-md w-full h-[2.5rem] pl-[0.5rem]`} />
                      </td>
                    </tr>
                    {/* 권한 */}
                    <tr className={`flex justify-between`}>
                      <td className={`py-2`}>
                        <label htmlFor="role">권한</label>
                      </td>
                      <td className={`flex flex-col py-1 w-[25rem] h-[3.7rem]`}>
                        <input className={`border rounded-md w-full h-[2.5rem] pl-[0.5rem]  cursor-not-allowed text-gray-500`} readOnly={true} value={"테스트"} />
                      </td>
                    </tr>
                    {/* 상태 */}
                    <tr className={`flex justify-between `}>
                      <td className={`py-2`}>
                        <label htmlFor="status">상태</label>
                      </td>
                      <td className={`flex flex-col py-1 w-[25rem] h-[3.7rem]`}>
                        <input className={`border rounded-md w-full h-[2.5rem] pl-[0.5rem] cursor-not-allowed text-gray-500`} readOnly={true} value={"테스트"} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            ) : (
              <form className={`w-full`}>
                <table className={`flex w-full`}>
                  <tbody className={`flex flex-col`}>
                    {/* 현재 비밀번호 */}
                    <tr className={`flex justify-between gap-[10rem]`}>
                      <td className={`py-2`}>
                        <label htmlFor="currentPassword">현재 비밀번호</label>
                      </td>
                      <td className={`flex flex-col py-1 w-[25rem] h-[3.7rem]`}>
                        <input className={`border rounded-md w-full h-[2.5rem] pl-[0.5rem]`} />
                      </td>
                    </tr>
                    {/* 변경할 비밀번호 */}
                    <tr className={`flex justify-between `}>
                      <td className={`py-2`}>
                        <label htmlFor="newPassword">변경할 비밀번호</label>
                      </td>
                      <td className={`flex flex-col py-1 w-[25rem] h-[3.7rem]`}>
                        <input className={`border rounded-md w-full h-[2.5rem] pl-[0.5rem]`} />
                      </td>
                    </tr>
                    {/* 변경할 비밀번호 확인 */}
                    <tr className={`flex justify-between `}>
                      <td className={`py-2`}>
                        <label htmlFor="newPasswordCheck">변경할 비밀번호 확인</label>
                      </td>
                      <td className={`flex flex-col py-1 w-[25rem] h-[3.7rem]`}>
                        <input className={`border rounded-md w-full h-[2.5rem] pl-[0.5rem]`} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            )}
          </div>
        </div>
      </div>
    </Body>
  );
}
