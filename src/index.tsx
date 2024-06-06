import React, { FC } from "react";

// ======== components ============
import PageHeaderComp from "components/page-header.comp";
import UsersRoutes from "./users.routes";

const UsersPage: FC = () => {
  return (
    <>
      <PageHeaderComp />
      <UsersRoutes />
    </>
  );
};

export default UsersPage;