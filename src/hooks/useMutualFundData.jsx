import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMutualFund } from "../redux/action/mutualFundAction";
import moment from "moment";
function useMutualFundData() {
  const dispatch = useDispatch();
  const apiEndPoints = [101996, 103341, 101206, 101190, 141305];
  const [mutualDetailData, setMutualDetailData] = useState({});
  const [currentData, setCurrentData] = useState({});
  const mutualFundData = useSelector((state) => state.mutualFund.data);
  useEffect(() => {
    apiEndPoints?.map((apiEndPoint) => dispatch(fetchMutualFund(apiEndPoint)));
  }, []);
  const extractValue = (arr) => {
    let data = {
      allTime: {
        date: [],
        nav: [],
      },
      fiveYear: {
        date: [],
        nav: [],
      },
      oneYear: {
        date: [],
        nav: [],
      },
      sixMonth: {
        date: [],
        nav: [],
      },
      oneMonth: {
        date: [],
        nav: [],
      },
    };

    const latestDate = moment(arr[0].date, "DD-MM-YYYY");
    var lastOneMonth = moment(latestDate).subtract(1, "months");
    var lastSixMonth = moment(latestDate).subtract(6, "months");
    var lastOneYear = moment(latestDate).subtract(1, "year");
    var lastFiveYear = moment(latestDate).subtract(5, "year");

    arr
      .slice(0)
      .reverse()
      .map((item, index) => {
        const momentDate = moment(item.date, "DD-MM-YYYY");
        if (
          momentDate.isAfter(lastOneMonth) ||
          momentDate.isSame(lastOneMonth)
        ) {
          data.oneMonth.date.push(item.date);
          data.oneMonth.nav.push(item.nav);
        }
        if (
          momentDate.isAfter(lastSixMonth) ||
          momentDate.isSame(lastSixMonth)
        ) {
          data.sixMonth.date.push(item.date);
          data.sixMonth.nav.push(item.nav);
        }
      });
    return data;
  };
  const onClickCard = (mutualFundData) => {
    const data = extractValue(mutualFundData.data);
    setMutualDetailData(data);
    setCurrentData({
      date: data?.oneMonth?.date,
      nav: data?.oneMonth?.nav,
    });
  };

  return {
    mutualFundData,
    mutualDetailData,
    setMutualDetailData,
    onClickCard,
    currentData,
    setCurrentData,
  };
}

export default useMutualFundData;
