import { AUTH } from "../actionTypes/actionTypes";
import { SIGN_IN } from "../../constant/constant";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = {};

export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH.LOGIN_SUCCESS:
      return {
        [SIGN_IN.LOGGED_IN]: true,
        [SIGN_IN.USER]: user,
      };
    case AUTH.LOGOUT:
      return { loggedIn: false };
    default:
      return state;
  }
}
