import { SIGN_UP } from "../../constant/constant";
import { USER } from "../actionTypes/actionTypes";
const intialState = {
  [SIGN_UP.FIRST_NAME]: "",
  [SIGN_UP.LAST_NAME]: "",
  [SIGN_UP.EMAIL]: "",
  [SIGN_UP.PASSWORD]: "",
  [SIGN_UP.GENDER]: "",
  [SIGN_UP.DATE_OF_BIRTH]: null,
};

const userDataReducer = (state = intialState, action) => {
  switch (action.type) {
    case USER.SIGN_UP:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default userDataReducer;
