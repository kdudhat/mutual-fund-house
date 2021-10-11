import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMutualFund } from "../redux/action/mutualFundAction";
function useMutualFundData() {
  const dispatch = useDispatch();

  const apiEndPoints = [101996, 103341, 101206, 101190, 141305];
  //   const apiEndPoints = [101996];
  const mutualFundData = useSelector((state) => state.mutualFund.data);

  //   const [mutualFundData, setMutualFundData] = useState();

  useEffect(() => {
    apiEndPoints?.map((apiEndPoint) => dispatch(fetchMutualFund(apiEndPoint)));

    // setMutualFundData(data);
  }, []);

  return { mutualFundData };
}

export default useMutualFundData;
