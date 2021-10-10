import React, { useState } from "react";
import { SIGN_UP, ERROR_MESSAGE } from "../constant/constant";
import { ROUTES } from "../constant/routes";

import { useSelector, useDispatch } from "react-redux";
import { userSignUp } from "../redux/action/userDataAction";
import { useHistory } from "react-router-dom";
function useSignup() {
  const history = useHistory();

  const [data, setData] = useState({});
  const [errors, setErrors] = useState({
    [SIGN_UP.FIRST_NAME]: "",
    [SIGN_UP.LAST_NAME]: "",
    [SIGN_UP.EMAIL]: "",
    [SIGN_UP.PASSWORD]: "",
    [SIGN_UP.GENDER]: "",
    [SIGN_UP.DATE_OF_BIRTH]: "",
  });
  const dispatch = useDispatch();

  const onChangeDateOfBirth = (newValue) => {
    console.log(`newValue`, newValue);
    if (!newValue) {
      setErrors((prev) => ({
        ...prev,
        [SIGN_UP.DATE_OF_BIRTH]: ERROR_MESSAGE.REQUIRED,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [SIGN_UP.DATE_OF_BIRTH]: "",
      }));
      setData((prev) => ({ ...prev, [SIGN_UP.DATE_OF_BIRTH]: newValue }));
    }
  };
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const onChangeValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (!value) {
      setErrors((prev) => ({
        ...prev,
        [name]: ERROR_MESSAGE.REQUIRED,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const checkValidation = (data) => {
    if (!data.get(SIGN_UP.FIRST_NAME)) {
      setErrors((prev) => ({
        ...prev,
        [SIGN_UP.FIRST_NAME]: ERROR_MESSAGE.REQUIRED,
      }));
    }
    if (!data.get(SIGN_UP.LAST_NAME)) {
      setErrors((prev) => ({
        ...prev,
        [SIGN_UP.LAST_NAME]: ERROR_MESSAGE.REQUIRED,
      }));
    }
    if (!data.get(SIGN_UP.EMAIL)) {
      setErrors((prev) => ({
        ...prev,
        [SIGN_UP.EMAIL]: ERROR_MESSAGE.REQUIRED,
      }));
    }
    if (!data.get(SIGN_UP.PASSWORD)) {
      setErrors((prev) => ({
        ...prev,
        [SIGN_UP.PASSWORD]: ERROR_MESSAGE.REQUIRED,
      }));
    }
    if (data[SIGN_UP.DATE_OF_BIRTH] === "") {
      setErrors((prev) => ({
        ...prev,
        [SIGN_UP.DATE_OF_BIRTH]: ERROR_MESSAGE.REQUIRED,
      }));
    }
    if (!data.get(SIGN_UP.GENDER)) {
      setErrors((prev) => ({
        ...prev,
        [SIGN_UP.GENDER]: ERROR_MESSAGE.REQUIRED,
      }));
    }
    if (!validateEmail(data.get(SIGN_UP.EMAIL))) {
      setErrors((prev) => ({
        ...prev,
        [SIGN_UP.EMAIL]: ERROR_MESSAGE.INVALID,
      }));
    }
  };
  const checkAnyError = () => {
    if (
      !errors[SIGN_UP.FIRST_NAME] &&
      !errors[SIGN_UP.LAST_NAME] &&
      !errors[SIGN_UP.EMAIL] &&
      !errors[SIGN_UP.PASSWORD] &&
      !errors[SIGN_UP.GENDER] &&
      !errors[SIGN_UP.DATE_OF_BIRTH]
    ) {
      return true;
    }
    return false;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    checkValidation(formData);

    if (checkAnyError()) {
      dispatch(userSignUp(data));
      history.push(ROUTES.SIGN_IN);
    }
  };
  return { onChangeDateOfBirth, onChangeValue, handleSubmit, errors, data };
}

export default useSignup;
