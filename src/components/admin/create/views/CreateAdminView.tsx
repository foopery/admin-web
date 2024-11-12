import React from "react";
import { useForm } from "react-hook-form";
import { AdminRole, AdminStatus } from "../../admin.enums";
import { inputValidator } from "../../../../_functions/loginForm-validator";
import Body from "../../../../_common/Body";
import { managementAdminQuery } from "../_core/management-admin.query";
import { ICreateAdmin } from "../../_interface/admin.create.interface";

export default function CreateAdminView() {
  /* Admin Create Mutate Query */
  const { mutate: create } = managementAdminQuery.useCreate();
  /* useForm */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAdmin>({
    mode: "onBlur",
    /* 현재 날짜로 기본값 설정 */
    defaultValues: {
      birthDate: new Date().toISOString().split("T")[0],
      profileImageUrl:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    },
  });

  /* Function */
  /** 관리자 생성 버튼핸들러 함수 */
  const createHandler = (data: ICreateAdmin) => {
    create(data);
  };
  return (
    <Body title={"Register Your Business"} description={"Please provide all required details to register your business with us"}>
      {/** Register Form Div */}
      <div
        className={`bg-white flex w-[90%] h-[80%] p-4 mt-6
                      sm:h-[80%] sm:p-0`}
      >
        {/* 관리자등록 폼 양식 */}
        <form onSubmit={handleSubmit(createHandler)} className={`w-full`}>
          <table className={`flex w-full`}>
            <tbody className={`flex flex-col gap-[1.5rem] w-[100vh] sm:gap-1`}>
              {/* 로그인 아이디 */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-0 `}>
                <td className="py-2 w-1/3">
                  <label htmlFor="loginId">Login ID</label>
                </td>
                <td
                  className="flex flex-col py-1 w-[25rem] h-[3.7rem] gap-1
                               sm:w-[40svh] "
                >
                  <input className="border rounded-md w-full h-[2rem] pl-[0.5rem]" type="text" id="loginId" {...register("loginId", inputValidator.loginId)} />
                  <p className={`flex flex-col whitespace-nowrap px-2`}>
                    {errors.loginId && <p className="text-red-500 text-xs">{(errors.loginId as { message: string }).message}</p>}
                  </p>
                </td>
              </tr>
              {/* 패스워드 */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem] `}>
                <td className="py-2 w-1/3">
                  <label htmlFor="password">Password</label>
                </td>
                <td className="flex flex-col gap-1 py-1 w-[25rem] h-[3.7rem] sm:w-[40svh] sm:h-[4.8rem] ">
                  <input className="border rounded-md w-full h-[2rem] pl-[0.5rem]" type="password" id="password" {...register("password", inputValidator.password)} />
                  <p className={`flex flex-col whitespace-nowrap px-2 sm:whitespace-normal`}>
                    {errors.password && <p className="text-red-500 text-xs ">{(errors.password as { message: string }).message}</p>}
                  </p>
                </td>
              </tr>
              {/* 이름 */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem]`}>
                <td className="py-2 w-1/3">
                  <label htmlFor="name">Name</label>
                </td>
                <td className="flex flex-col gap-1 py-1 w-[25rem] h-[3.7rem] sm:w-[40svh] ">
                  <input type="text" id="name" {...register("name", inputValidator.name)} className="border rounded-md w-full h-[2rem] pl-[0.5rem]" />
                  <p className={`flex flex-col whitespace-nowrap px-2`}>{errors.name && <p className="text-red-500 text-xs">{(errors.name as { message: string }).message}</p>}</p>
                </td>
              </tr>
              {/* 생년월일 */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem]`}>
                <td className="py-2 w-1/3">
                  <label htmlFor="birthDate">Birth Date</label>
                </td>
                <td className="py-1 w-[25rem] h-[3.7rem] sm:w-[40svh]">
                  <input type="date" id="birthDate" {...register("birthDate")} className="border rounded-md w-full h-[2rem] pl-[0.5rem]" />
                </td>
              </tr>
              {/* 프로필 이미지 */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem]`}>
                <td className="py-2 w-1/3">
                  <label htmlFor="profileImageUrl" className={`whitespace-nowrap`}>
                    Profile Image URL
                  </label>
                </td>
                <td className="py-1 w-[25rem] h-[3.7rem] sm:w-[40svh]">
                  <input type="text" id="profileImageUrl" {...register("profileImageUrl")} className="border rounded-md w-full h-[2rem] pl-[0.5rem]" />
                </td>
              </tr>
              {/* Role Select Box */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem]`}>
                <td className="py-2 w-1/3">
                  <label htmlFor="role">Role</label>
                </td>
                <td className="py-1 w-[25rem] h-[3.7rem] sm:w-[40svh]">
                  <select id="role" defaultValue={AdminRole.SUPER_ADMIN} {...register("role")} className={`border rounded-md w-full h-[2rem] pl-[0.5rem]`}>
                    <option value={AdminRole.SUPER_ADMIN}>최고관리자</option>
                    <option value={AdminRole.ADMIN}>관리자</option>
                  </select>
                </td>
              </tr>
              {/* Status Select Box */}
              <tr className={`flex gap-[6rem] sm:flex-col sm:gap-[0rem]`}>
                <td className="py-2 w-1/3">
                  <label htmlFor="status">Status</label>
                </td>
                <td className="py-1 w-[25rem] h-[3.7rem] sm:w-[40svh]">
                  <select id="status" {...register("status")} defaultValue={AdminStatus.ENABLED} className={`border rounded-md w-full h-[2rem] pl-[0.5rem]`}>
                    <option value={AdminStatus.ENABLED}>활성화</option>
                    <option value={AdminStatus.DISABLED}>비활성화</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          {/* 버튼 영역 */}
          <div className={`pt-12 flex items-center justify-center sm:pt-2 sm:pb-10`}>
            <input
              type={"submit"}
              value={"Submit"}
              className={`bg-emerald-500 w-[10rem] h-[2.5rem] rounded-md text-white font-bold hover:bg-emerald-400 transition-colors duration-300`}
            />
          </div>
        </form>
      </div>
    </Body>
  );
}
