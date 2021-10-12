import React from "react";
import { filterMutualFund } from "../redux/action/mutualFundAction";
import { MUTUAL_FUND } from "../constant/constant";
import { useDispatch, useSelector } from "react-redux";
function useSearchBar() {
  const dispatch = useDispatch();
  const mutualFundMainData = useSelector(
    (state) => state.mutualFund[MUTUAL_FUND.MAIN_DATA]
  );
  const onChangeSearchBar = (event) => {
    const value = event.target.value.toLowerCase();
    console.log(`value`, value);
    const data = mutualFundMainData.filter(
      (item) =>
        item.meta.fund_house.toLowerCase().search(value) !== -1 ||
        item.meta.scheme_name.toLowerCase().search(value) !== -1
    );
    console.log(`data`, data);
    dispatch(filterMutualFund(data));
  };
  return { onChangeSearchBar };
}

export default useSearchBar;
