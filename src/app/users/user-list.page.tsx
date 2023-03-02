import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "./store/users.selectors";

const UserListPage: FC = () => {
  const dispatch = useDispatch();

  const users = useSelector(usersSelector);

  // useEffect(() => {
  //   // dispatch<any>(getUsers());
  // }, []);

  return (
    <>
      <section>user list {users.length}</section>
    </>
  );
};

export default UserListPage;
