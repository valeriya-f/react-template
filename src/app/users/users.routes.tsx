import React, { FC, PropsWithChildren, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

const Suspended: FC<PropsWithChildren & { element: any }> = ({ element: Element }) => {
  return (
    <Suspense fallback={<div />}>
      <Element />
    </Suspense>
  );
};

// ======= pages ======= //
const UsersTablePage = React.lazy(() => import("app/users/users-table.page"));
const UserViewPage = React.lazy(() => import("app/users/user-view.page"));
const UserEditPage = React.lazy(() => import("app/users/user-edit.page"));
const UserNewPage = React.lazy(() => import("app/users/user-new.page"));

const UsersRoutes: FC = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      {/* <Route path={"/home"} element={<PublicRoute element={HomePage} />} /> */}

      {/* PRIVATE */}
      <Route path={"/"} element={<Suspended element={UsersTablePage} />} />
      <Route path={"/:userId"} element={<Suspended element={UserViewPage} />} />
      <Route path={"/:userId/edit"} element={<Suspended element={UserEditPage} />} />
      <Route path={"/new"} element={<Suspended element={UserNewPage} />} />

      {/* DEFAULT */}
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
};

export default UsersRoutes;
