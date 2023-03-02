import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { userSelector } from "./store/users.selectors";

const UserViewPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const user = useSelector(userSelector);

  // useEffect(() => {
  //   // dispatch<any>(getUser({userId}));
  // }, []);

  return (
    <>
      <section>user view {user?.email}</section>
    </>
  );
};

export default UserViewPage;