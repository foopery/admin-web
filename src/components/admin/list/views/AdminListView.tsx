import { Link, useNavigate } from "react-router-dom";
import { IApiResponseAdminList } from "../../_interface/response.interface";
import Body from "../../../../_common/Body";
import { IAdmin, IUpdateAdmin } from "../../_interface/admin.interface";
import React from "react";
import Toggle from "../../../../_common/Toggle";
import { ADMIN_ROLE } from "../../admin.constant";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import dayjs from "dayjs";

/* DayJS 시간차이 치환 */
dayjs.extend(relativeTime);
/* "ko" 한국시간 기준 */
dayjs.locale("ko");

export default function AdminListView({ data, updateHandler }: { data: IApiResponseAdminList<IAdmin[]>; updateHandler: (data: IUpdateAdmin, id: number) => void }) {
  const navigate = useNavigate();
  const { currentPage, totalPage } = data.meta;
  // console.log("TEST", data);

  return (
    <Body
      title={"admin"}
      description={"this admin"}
      rightHeaderRender={
        <button
          className={`bg-[#3c81f4] text-white font-semibold rounded-lg h-[2rem] text-xs shadow-md  w-[6rem] hover:bg-blue-700 duration-500`}
          onClick={() => navigate("/admin/management/write")}
        >
          관리자 생성
        </button>
      }
    >
      <div className={`py-5 h-full `}>
        <div className={`flex flex-col h-full justify-between`}>
          <div className={`min-h-full`}>
            <table className={`w-full text-sm rounded-md overflow-hidden text-gray-700`}>
              <thead>
                <tr className={`text-gray-700 text-left border-b `}>
                  <th className={`p-3 font-semibold sm:hidden`}>이름</th>
                  <th className={`p-3 font-semibold`}>권한</th>
                  <th className={`p-3 font-semibold sm:hidden`}>로그인 아이디</th>
                  <th className={`p-3 font-semibold sm:hidden`}>생년월일</th>
                  <th className={`p-3 font-semibold sm:hidden`}>생성일</th>
                  <th className={`p-3 font-semibold sm:hidden`}>수정일</th>
                  <th className={`p-3 font-semibold`}>최근 로그인일</th>
                  <th className={`p-3 font-semibold flex gap-1.5 items-center`}>상태</th>
                </tr>
                {data.data.map((v, i) => (
                  <tr className={`hover:bg-gray-50 transition duration-200`} key={i}>
                    <td className={`p-3 gap-3 text-gray-700 flex items-center `}>
                      <img className={`w-[1.5rem] h-[1.5rem] rounded-full`} src={v.profileImageUrl || "X"} />
                      <Link to={`/admin/management/${v.id}`}>{v.name}</Link>
                    </td>
                    <td className={`p-3 text-gray-700`}>{ADMIN_ROLE[v.role]}</td>
                    <td className={`p-3 sm:hidden`}>{v.loginId}</td>
                    <td className={`p-3 sm:hidden`}>{v.birthDate}</td>
                    <td className={`p-3 sm:hidden`}>{dayjs(v.createdAt).fromNow()}</td>
                    <td className={`p-3 sm:hidden`}>{dayjs(v.updatedAt).fromNow()}</td>
                    <td className={`p-3 sm:hidden`}>{dayjs(v.lastLoginAt).fromNow()}</td>
                    <td className={`p-3`}>
                      <Toggle checked={Boolean(v.status)} onChange={(e) => updateHandler({ status: Number(e.target.checked) }, v.id)} />
                    </td>
                  </tr>
                ))}
              </thead>
            </table>
          </div>
          {/** List PageNation */}
          <div className={`min-h-[3.5vh] flex justify-end items-center p-3 gap-3`}>
            <ul>
              {currentPage! > 1 && (
                <li className={`bg-gray-100 border w-[3rem] flex justify-center rounded-lg`}>
                  <Link to={`?page=${currentPage! - 1}`}>이전</Link>
                </li>
              )}
            </ul>
            {Array(totalPage)
              .fill(undefined!)
              .map((_, index) => (
                <div className={`flex gap-2`} key={index}>
                  <Link to={`?page=${index + 1}`} className={`px-2 border rounded-lg bg-gray-100 ${currentPage === index + 1 ? "font-bold text-blue-500" : "text-gray-700"}`}>
                    {index + 1}
                  </Link>
                </div>
              ))}
            <ul>
              {currentPage! < totalPage! && (
                <li className={`bg-gray-100 border w-[3rem] flex justify-center rounded-lg`}>
                  <Link to={`?page=${currentPage! + 1}`}>다음</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Body>
  );
}
