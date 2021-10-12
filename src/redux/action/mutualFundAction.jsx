import { MUTUAL_FUND_PLAN } from "../actionTypes/actionTypes";
import { API } from "../../constant/constant";
import axios from "axios";
export const fetchRequestAction = () => {
  return {
    type: MUTUAL_FUND_PLAN.FETCH_REQUEST,
  };
};
const fetchSuccessAction = (data) => {
  return {
    type: MUTUAL_FUND_PLAN.FETCH_SUCCESS,
    payload: data,
  };
};

const fetchFailAction = (error) => {
  return {
    type: MUTUAL_FUND_PLAN.FETCH_FAIL,
    error: error,
  };
};

export const fetchMutualFund = (apiEndPoint) => {
  return (dispatch) => {
    dispatch(fetchRequestAction());
    axios
      .get(`${API}${apiEndPoint}`)
      .then(({ data }) => {
        dispatch(fetchSuccessAction(data));
      })
      .catch((error) => {
        dispatch(fetchFailAction(error.message));
      });
  };
};
