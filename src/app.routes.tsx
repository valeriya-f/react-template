import React, { FC, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

// ======= private route ======= //
const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  return true ? (
    <Suspense fallback={<div />}>
      <div><Element /></div>
    </Suspense>
  ) : (
    <Navigate to={""} />
  );
};

// ======= public route ======= //
const PublicRoute: FC<{ element: any }> = ({ element: Element }) => (
  <Suspense fallback={<div />}>
    <Element />
  </Suspense>
);

// ======= pages ======= //
const UsersPage = React.lazy(() => import("app/users"));

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      {/* <Route path={"/home"} element={<PublicRoute element={HomePage} />} /> */}

      {/* PRIVATE */}
      <Route path={"/users"} element={<PrivateRoute element={UsersPage} />} />

      {/* DEFAULT */}
      <Route path='*' element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
