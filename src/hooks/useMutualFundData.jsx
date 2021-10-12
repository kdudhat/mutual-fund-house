import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMutualFund,
  fetchRequestAction,
} from "../redux/action/mutualFundAction";
import { FILTER } from "../constant/constant";
import moment from "moment";

function useMutualFundData() {
  const dispatch = useDispatch();
  const apiEndPoints = [101996, 103341, 101206, 101190, 141305];
  const [mutualDetailData, setMutualDetailData] = useState({});
  const [currentData, setCurrentData] = useState({});
  const mutualFundData = useSelector((state) => state.mutualFund.data);
  const [selectedCard, setSelectedCard] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState(0);
  useEffect(() => {
    dispatch(fetchRequestAction());
    apiEndPoints?.map((apiEndPoint) => dispatch(fetchMutualFund(apiEndPoint)));
  }, []);
  useEffect(() => {
    if (mutualFundData.length > 0) {
      const data = extractValue(mutualFundData[0].data);
      setMutualDetailData(data);
      setCurrentData({
        date: data?.[FILTER.ONE_MONTH]?.date,
        nav: data?.[FILTER.ONE_MONTH]?.nav,
        filter: FILTER.ONE_MONTH,
      });
    }
  }, [mutualFundData]);
  const extractValue = (arr) => {
    let data = {
      [FILTER.ALL]: {
        date: [],
        nav: [],
      },
      [FILTER.FIVE_YEAR]: {
        date: [],
        nav: [],
      },
      [FILTER.ONE_YEAR]: {
        date: [],
        nav: [],
      },
      [FILTER.SIX_MONTH]: {
        date: [],
        nav: [],
      },
      [FILTER.ONE_MONTH]: {
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
          data[FILTER.ONE_MONTH].date.push(item.date);
          data[FILTER.ONE_MONTH].nav.push(item.nav);
        }
        if (
          momentDate.isAfter(lastSixMonth) ||
          momentDate.isSame(lastSixMonth)
        ) {
          data[FILTER.SIX_MONTH].date.push(item.date);
          data[FILTER.SIX_MONTH].nav.push(item.nav);
        }
        if (momentDate.isAfter(lastOneYear) || momentDate.isSame(lastOneYear)) {
          data[FILTER.ONE_YEAR].date.push(item.date);
          data[FILTER.ONE_YEAR].nav.push(item.nav);
        }
        if (
          momentDate.isAfter(lastFiveYear) ||
          momentDate.isSame(lastFiveYear)
        ) {
          data[FILTER.FIVE_YEAR].date.push(item.date);
          data[FILTER.FIVE_YEAR].nav.push(item.nav);
        }
        data[FILTER.ALL].date.push(item.date);
        data[FILTER.ALL].nav.push(item.nav);
      });
    return data;
  };
  const onClickCard = (mutualFundData, index) => {
    setSelectedCard(index);
    const data = extractValue(mutualFundData.data);
    setMutualDetailData(data);
    setCurrentData({
      date: data?.[FILTER.ONE_MONTH]?.date,
      nav: data?.[FILTER.ONE_MONTH]?.nav,
      filter: FILTER.ONE_MONTH,
    });
  };
  const onClickFilter = (key) => {
    setCurrentData({
      date: mutualDetailData[key]?.date,
      nav: mutualDetailData[key]?.nav,
      filter: key,
    });
  };
  return {
    mutualFundData,
    mutualDetailData,
    setMutualDetailData,
    onClickCard,
    currentData,
    setCurrentData,
    selectedCard,
    selectedFilter,
    setSelectedFilter,
    onClickFilter,
  };
}

export default useMutualFundData;
