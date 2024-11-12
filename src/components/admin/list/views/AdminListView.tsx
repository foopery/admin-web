import { Link, useNavigate } from "react-router-dom";
import { IApiResponseAdminList } from "../../_interface/admin-list.interface";
import Body from "../../../../_common/Body";
import { IAdmin, IUpdateAdmin } from "../../_interface/admin.create.interface";
import { AdminRole } from "../../admin.enums";
import React from "react";
import Toggle from "../../../Toggle";
import { managementAdminQuery } from "../../create/_core/management-admin.query";

export default function AdminListView({ data }: { data: IApiResponseAdminList<IAdmin[]> }) {
  const navigate = useNavigate();
  const { currentPage, totalPage } = data.meta;
  console.log("TEST", data);
  const { mutate: modify } = managementAdminQuery.useUpdate();

  function modifyHandler(id: number, data: IUpdateAdmin) {
    modify({ data, id });
  }

  return (
    <Body
      title={"admin"}
      description={"this admin"}
      rightHeaderRender={
        <button
          className={`bg-[#3c81f4] text-white font-semibold rounded-lg h-[2rem] text-xs shadow-md  w-[6rem] hover:bg-blue-700 duration-500`}
          onClick={() => navigate("/admin/management/create")}
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
                  <th className={`p-3 font-semibold sm:hidden`}>name</th>
                  <th className={`p-3 font-semibold`}>role</th>
                  <th className={`p-3 font-semibold sm:hidden`}>loginId</th>
                  <th className={`p-3 font-semibold sm:hidden`}>birthDate</th>
                  <th className={`p-3 font-semibold sm:hidden`}>createdAt</th>
                  <th className={`p-3 font-semibold sm:hidden`}>updatedAt</th>
                  <th className={`p-3 font-semibold`}>lastLogs</th>
                  <th className={`p-3 font-semibold flex gap-1.5 items-center`}>status</th>
                </tr>
                {data.data.map((v, i) => (
                  <tr className={`hover:bg-gray-50 transition duration-200`} key={i}>
                    <td className={`p-3 gap-3 text-gray-700 flex items-center `}>
                      <img className={`w-[1.5rem] h-[1.5rem] rounded-full`} src={v.profileImageUrl || "X"} />
                      {v.name}
                    </td>
                    <td className={`p-3 text-gray-700 cursor-pointer`}>
                      <Link to={`/container/:id`}>{AdminRole[v.role]}</Link>
                    </td>
                    <td className={`p-3 sm:hidden`}>{v.loginId}</td>
                    <td className={`p-3 sm:hidden`}>{v.birthDate}</td>
                    <td className={`p-3 sm:hidden`}>{v.createdAt}</td>
                    <td className={`p-3 sm:hidden`}>{v.updatedAt}</td>
                    <td className={`p-3 sm:hidden`}>{v.lastLoginAt}</td>
                    <td className={`p-3`}>
                      <Toggle checked={Boolean(v.status)} onChange={(e) => modifyHandler(v.id, { status: Number(e.target.checked) })} />
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
