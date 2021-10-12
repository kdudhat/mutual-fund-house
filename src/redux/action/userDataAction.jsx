import { USER, AUTH } from "../actionTypes/actionTypes";

export const userSignIn = (user) => {
  return {
    type: AUTH.LOGIN_SUCCESS,
    payload: user,
  };
};
export const userSignOut = () => {
  return {
    type: AUTH.LOGOUT,
  };
};
export const userSignUp = (data) => {
  return {
    type: USER.SIGN_UP,
    data: data,
  };
};
