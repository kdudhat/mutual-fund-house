import React, { useState } from "react";
import { SIGN_UP, ERROR_MESSAGE } from "../constant/constant";
import { useSelector, useDispatch } from "react-redux";
import { userSignIn } from "../redux/action/userDataAction";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../constant/routes";

function useSignIn() {
  const [errors, setErrors] = useState("");
  const [signInData, setSignInData] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const userData = useSelector((state) => state.user);
  const checkValidation = () => {
    if (!signInData[SIGN_UP.EMAIL] || !signInData[SIGN_UP.PASSWORD]) {
      setErrors(ERROR_MESSAGE.USERNAME_AND_PASSWORD_REQUIRED);
      return false;
    } else if (
      userData[SIGN_UP.EMAIL] !== signInData[SIGN_UP.EMAIL] ||
      userData[SIGN_UP.PASSWORD] !== signInData[SIGN_UP.PASSWORD]
    ) {
      setErrors(ERROR_MESSAGE.WRONG_CREDENTIALS);
      return false;
    } else if (
      userData[SIGN_UP.EMAIL] === signInData[SIGN_UP.EMAIL] ||
      userData[SIGN_UP.PASSWORD] === signInData[SIGN_UP.PASSWORD]
    ) {
      setErrors("");
      return true;
    } else {
      return false;
    }
  };
  const onChangeValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (value) {
      setErrors("");
      setSignInData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkValidation()) {
      localStorage.setItem("user", JSON.stringify(signInData));
      dispatch(userSignIn());
      history.push(ROUTES.HOME);
    }
  };
  return { handleSubmit, onChangeValue, errors };
}

export default useSignIn;
