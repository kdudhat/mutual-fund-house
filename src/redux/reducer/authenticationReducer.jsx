import { AUTH } from "../actionTypes/actionTypes";
import { SIGN_IN } from "../../constant/constant";

const initialState = {};

export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH.LOGIN_SUCCESS:
      return {
        [SIGN_IN.LOGGED_IN]: true,
        [SIGN_IN.USER]: action.payload,
      };
    case AUTH.LOGOUT:
      return {};
    default:
      return state;
  }
}
