import { USER, AUTH } from "../actionTypes/actionTypes";

export const userSignIn = () => {
  return {
    type: AUTH.LOGIN_SUCCESS,
  };
};
export const userSignUp = (data) => {
  return {
    type: USER.SIGN_UP,
    data: data,
  };
};
