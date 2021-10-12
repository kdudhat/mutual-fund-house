import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { ROUTES } from "../constant/routes";
import { userSignOut } from "../redux/action/userDataAction";
function useSignOut() {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickSignOut = () => {
    dispatch(userSignOut());
    history.push(ROUTES.SIGN_IN);
  };
  return { onClickSignOut };
}

export default useSignOut;
