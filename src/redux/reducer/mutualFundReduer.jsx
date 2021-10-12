import { MUTUAL_FUND_PLAN } from "../actionTypes/actionTypes";
import { MUTUAL_FUND } from "../../constant/constant";
const initialState = {
  [MUTUAL_FUND.LOADING]: false,
  [MUTUAL_FUND.DATA]: [],
  [MUTUAL_FUND.ERROR]: "",
};
const mutualFundReducer = (state = initialState, action) => {
  switch (action.type) {
    case MUTUAL_FUND_PLAN.FETCH_REQUEST:
      return {
        [MUTUAL_FUND.LOADING]: true,
        [MUTUAL_FUND.DATA]: [],
        [MUTUAL_FUND.ERROR]: "",
      };
    case MUTUAL_FUND_PLAN.FETCH_SUCCESS:
      return {
        ...state,
        [MUTUAL_FUND.LOADING]: false,
        [MUTUAL_FUND.DATA]: [...state.data, { ...action.payload }],
        [MUTUAL_FUND.MAIN_DATA]: [...state.data, { ...action.payload }],
        [MUTUAL_FUND.ERROR]: "",
      };
    case MUTUAL_FUND_PLAN.FETCH_FAIL:
      return {
        ...state,
        [MUTUAL_FUND.LOADING]: false,
        [MUTUAL_FUND.ERROR]: action.error,
      };
    case MUTUAL_FUND_PLAN.FILTER:
      return {
        ...state,
        [MUTUAL_FUND.LOADING]: false,
        [MUTUAL_FUND.DATA]: action.payload,
        [MUTUAL_FUND.ERROR]: "",
      };
    default:
      return state;
  }
};

export default mutualFundReducer;
