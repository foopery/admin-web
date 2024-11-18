import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import MainDashBoard from "./components/main_dashBoard/DashBoard";
import Container from "./components/container/Container";
import Admin from "./components/admin/list/Admin";
import Comment from "./components/Comment";
import Editor from "./components/Editor";
import Member from "./components/Member";
import ContainerDetail from "./components/container/detail/ContainerDetail";
import Issue from "./components/issue/Issue";
import IssueDetail from "./components/issue/detail/IssueDetail";
import CreateAdmin from "./components/admin/create/CreateAdmin";
import AdminGet from "./components/admin/get/AdminGet";
import UpdateAdmin from "./components/admin/update/UpdateAdmin";

export default function Router() {
  const routers: { path: string; element: React.ReactNode; key: string }[] = [
    {
      path: "/auth", // 관리자 로그인경로
      element: <Auth />,
      key: "auth",
    },
    {
      path: "/", // 메인 대시보드
      element: <MainDashBoard />,
      key: "dashboard",
    },
    {
      path: "/container", // 컨테이너
      element: <Container />,
      key: "container",
    },
    {
      path: "/admin", // 관리자 목록페이지
      element: <Admin />,
      key: "/admin",
    },
    {
      path: "/comment", // 댓글 페이지
      element: <Comment />,
      key: "comment",
    },
    {
      path: "/editor", // 코드 에디터
      element: <Editor />,
      key: "editor",
    },
    {
      path: "/member", // 멤버 페이지
      element: <Member />,
      key: "member",
    },
    {
      path: "/container/:id", // 컨테이너 상세페이지
      element: <ContainerDetail />,
      key: "container-detail",
    },
    {
      path: "/issue", // 이슈 페이지
      element: <Issue />,
      key: "issue",
    },
    {
      path: "/issue/:id", // 이슈 상세페이지
      element: <IssueDetail />,
      key: "issue-detail",
    },
    {
      path: "/admin/management/write", // 관리자 생성페이지
      element: <CreateAdmin />,
      key: "/admin/management/write",
    },
    {
      path: "/admin/management/:id", // 관리자 상세페이지
      element: <AdminGet />,
      key: "/admin/management/:id",
    },
    {
      path: "/admin/management/:id/modify", // 관리자 수정페이지
      element: <UpdateAdmin />,
      key: "/admin/management/:id/modify",
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {routers.map(({ path, element, key }) => (
          <Route path={path} element={element} key={key} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
