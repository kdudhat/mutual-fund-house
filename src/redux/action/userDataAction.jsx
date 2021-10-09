import { USER } from "../actionTypes/actionTypes";

export const userSignIn = () => {
  return {
    type: USER.SIGN_IN,
  };
};
export const userSignUp = (data) => {
  return {
    type: USER.SIGN_UP,
    data: data,
  };
};
