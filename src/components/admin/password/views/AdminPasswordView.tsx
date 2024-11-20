import Body from "../../../../_common/Body";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminPasswordView() {
  const [activeTab, setActiveTab] = useState("password");

  return (
    <Body title={"내 정보"} description={"비밀번호 변경"}>
      {/* BackGround Div */}
      <div className={`h-full flex justify-center items-center`}>
        {/* Tab Div */}
        <div className={`w-full h-[80vh] rounded-[1rem]`}>
          <div className="text-sm flex font-bold text-center text-gray-500 border-b border-gray-300">
            <ul className="flex -mb-px">
              <li className="me-2">
                <Link
                  to={`/admin/management/:id/profile`}
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === "profile" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600"
                  } hover:text-gray-500`}
                  onClick={() => setActiveTab("profile")}
                >
                  프로필
                </Link>
              </li>
              <li className="me-2">
                <Link
                  to={`/admin/management/:id/password`}
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === "password" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600"
                  } hover:text-gray-500`}
                  onClick={() => setActiveTab("password")}
                >
                  비밀번호
                </Link>
              </li>
            </ul>
          </div>
          {/* Content Div */}
          <div className={`bg-gray-50 h-auto px-5 pt-6 overflow-hidden`}>
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
                  {/* 이름 */}
                  <tr className={`flex justify-between `}>
                    <td className={`py-2`}>
                      <label htmlFor="newPassword">변경할 비밀번호</label>
                    </td>
                    <td className={`flex flex-col py-1 w-[25rem] h-[3.7rem]`}>
                      <input className={`border rounded-md w-full h-[2.5rem] pl-[0.5rem]`} />
                    </td>
                  </tr>
                  {/* 생년원일 */}
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
          </div>
        </div>
      </div>
    </Body>
  );
}
